# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/queryWeb3.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** None

**Deliverables**

| Number | Deliverable | Accepted | Link | Notes |
| :---- | :---- | :---- | :---- | :---- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/Query-Web3/database/blob/main/Apache%20License%202.0) | Apache License 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Milestone 1 Documentation](https://github.com/Query-Web3/backend/blob/main/hacks/quick-start.md)  | Works but minimal. |
| 0c. | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [Test guide link](https://github.com/Query-Web3/database/blob/main/README_test.md) | Works but minimal. |
| 0d. | Docker | <ul><li>[ ] </li></ul> | [DEFI indexer DockerFile](https://github.com/Query-Web3/database/blob/main/Dockerfile) [Data backend DockerFile](https://github.com/Query-Web3/backend/blob/main/Dockerfile) |  |
| 0e. | Article | <ul><li>[x] </li></ul> | [Polkadot community link](https://forum.polkadot.network/t/the-value-discovery-engine-of-polkadot-queryweb3/16400) [Medium link](https://medium.com/@queryweb3/queryweb3-the-data-infrastructure-designed-for-polkadot-investment-decisions-b016aa7ad995) |  |
| 1\. | DEFI indexer | <ul><li>[ ] </li></ul> | [Code Link](https://github.com/Query-Web3/database) | Works as expected |
| 2\. | Facts table and dimensions table. | <ul><li>[x] </li></ul> | [Link](https://github.com/Query-Web3/database/blob/main/DatabaseTableReadme.md) | Works as expected |
| 3\. | Data backend. | <ul><li>[ ] </li></ul> | [Code Link](https://github.com/Query-Web3/backend) | Works as expected |

# General Notes

Overall, The project demonstrates a working proof-of-concept for DeFi yield aggregation, but it falls short of what should be expected for a backend focused M1 delivery. The database test suite is the strongest component — it's comprehensive and well-structured, indicating that at least one contributor invested real effort in quality. The backend is small but functional with decent coverage. The frontend is the weakest link, with no tests, no lint config, and a security vulnerability.

Recommendations for next milestones to be accepted:

1. Fix the GraphQL injection vulnerability in the frontend
2. Rotate all exposed secrets (API key, DB credentials)
3. Add CI/CD pipelines to all three repos
4. Write frontend tests — even basic smoke tests for routing and API calls
5. Refactor the database layer to eliminate duplication and add connection pooling
6. Redesign the GraphQL schema to return typed data instead of JSON strings
7. Add architecture documentation covering the full system

## Architecture & Design

**Fragmented multi-repo without coordination.** Three separate repos with no shared CI, no monorepo tooling, no integration tests across services, and no architecture documentation. The team wrote a doc (monorepo-drawbacks.md) justifying the split, but none of the benefits of separate repos are actually realized — there's no independent versioning, no per-repo CI/CD, and no API contracts between services.

**GraphQL API returns serialized JSON strings instead of typed responses.** The `yields` query returns `PageResult { total: Int!, data: String! }` where `data` is a JSON blob. This defeats the entire purpose of GraphQL's type system. The `Transaction` and `Yield` types declared in the schema are never used. The `txns` resolver returns a hardcoded "[]" — it's unimplemented.

**Massive code duplication in the database layer.** There are 6 separate `SQL_DB_*` classes (1,571 lines total) that each independently implement connection management, error handling, and SQL execution with nearly identical code. `SQL_DB`, `SQL_DB_Hydration`, `SQL_DB_Stella`, `SQL_DB_hydration_price`, `SQL_DB_mergeTables`, and `SQL_DB_combinedTables` should share a common base class. Each class opens and closes a new MySQL connection per query with no connection pooling.

Improvement suggestions:
•  Define a proper GraphQL schema with typed responses ([YieldEntry!]! instead of String!)
•  Implement the txns resolver or remove it from the schema
•  Consolidate SQL_DB_* classes into one base class with table-specific subclasses
•  Use connection pooling (e.g., mysql.connector.pooling) instead of connect-per-query
•  Add an architectural overview document covering data flow between the three services

## Testing

Backend: 81.7% coverage on server + model, which is solid. Tests use SQLite in-memory as a test double for MySQL, which is a reasonable approach. However, the `main()` function has 0% coverage and the test suite is only ~740 lines.

Frontend: Zero tests. Vitest is configured, `@vue/test-utils` is a dependency, but not a single `.spec` or `.test` file exists.

Database: The test suite is extensive (126 tests, ~4,400 lines), and the unit tests are well-structured with good use of mocking. However:
•  ~40 tests require a live MySQL server and fail without one, with no skip/mark mechanism
•  `test_master_extra.py::test_start_scripts` has a genuine assertion bug (4 != 3) — the code now starts 4 scripts but the test still expects 3
•  Tests that need env vars crash at import time rather than skipping gracefully

Improvement suggestions:
•  Frontend: Add tests for at minimum the API layer, router, and key components — this is a critical gap
•  Database: Mark integration tests with @pytest.mark.integration and skip them when no DB is available
•  Database: Fix the broken `test_start_scripts` assertion
•  Database: Guard module-level imports that need env vars so tests don't crash during collection
•  Add cross-service integration tests (e.g., does the backend correctly query what the database pipeline inserts?)

Docs are minimal and should also be greatly improved.

Backend tests - 31 passing:
```
--- PASS: TestYields_DBClosed (0.00s)
PASS
ok  	github.com/Query-Web3/backend/model	0.018s
?   	github.com/Query-Web3/backend/model/dbgen	[no test files]
=== RUN   TestIsFileExists
--- PASS: TestIsFileExists (0.00s)
=== RUN   TestIsFileExistsWithTempFile
--- PASS: TestIsFileExistsWithTempFile (0.00s)
=== RUN   TestIsFileExists_ErrorCase
--- PASS: TestIsFileExists_ErrorCase (0.00s)
=== RUN   TestRouter
--- PASS: TestRouter (0.00s)
=== RUN   TestCORS
--- PASS: TestCORS (0.00s)
=== RUN   TestHealth_E2E
--- PASS: TestHealth_E2E (0.00s)
=== RUN   TestHealth_E2E_Unhealthy
--- PASS: TestHealth_E2E_Unhealthy (0.00s)
=== RUN   TestHealth_E2E_DBReturnsError
--- PASS: TestHealth_E2E_DBReturnsError (0.00s)
=== RUN   TestGraphQL_E2E
--- PASS: TestGraphQL_E2E (0.00s)
PASS
ok  	github.com/Query-Web3/backend/server	0.010s
?   	github.com/Query-Web3/backend/tools	[no test files]
```
