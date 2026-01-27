# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/queryWeb3.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** None

**Deliverables**

| Number | Deliverable | Accepted | Link | Notes |
| :---- | :---- | :---- | :---- | :---- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/Query-Web3/database/blob/main/Apache%20License%202.0) | Apache License 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Milestone 1 Documentation](https://github.com/Query-Web3/backend/blob/main/hacks/quick-start.md)  |  |
| 0c. | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [Test guide link](https://github.com/Query-Web3/database/blob/main/README_test.md) |  |
| 0d. | Docker | <ul><li>[ ] </li></ul> | [DEFI indexer DockerFile](https://github.com/Query-Web3/database/blob/main/Dockerfile) [Data backend DockerFile](https://github.com/Query-Web3/backend/blob/main/Dockerfile) |  |
| 0e. | Article | <ul><li>[x] </li></ul> | [Polkadot community link](https://forum.polkadot.network/t/the-value-discovery-engine-of-polkadot-queryweb3/16400) [Medium link](https://medium.com/@queryweb3/queryweb3-the-data-infrastructure-designed-for-polkadot-investment-decisions-b016aa7ad995) |  |
| 1\. | DEFI indexer | <ul><li>[ ] </li></ul> | [Code Link](https://github.com/Query-Web3/database) |  |
| 2\. | Facts table and dimensions table. | <ul><li>[x] </li></ul> | [Link](https://github.com/Query-Web3/database/blob/main/DatabaseTableReadme.md) | |
| 3\. | Data backend. | <ul><li>[ ] </li></ul> | [Code Link](https://github.com/Query-Web3/backend) |  |

# General Notes

## Required to fix:
- Error handling is weak: silent failures, no retry logic, and network timeouts can stall the entire pipeline
- Data quality concerns: Batch ID based on Unix timestamp, no data validation before insertion, no duplicate detection between runs
- No health checks or monitoring

## Nice to have but not a showstopper:
- RPC endpoints are hardcoded. (README.txt warns about this). Fine for now but please fix for next milestone
- .env file must be manually created with credentials. Please create a .env.example file for this
- no integration tests, please add for next milestone

## Testing

- No integration tests: All tests mock external dependencies (APIs, databases)
◦  Tests don't verify actual data flows end-to-end
◦  No verification that mock data matches real API response formats
◦  API format changes wouldn't be caught until runtime
- No E2E pipeline tests: all_data_jobs.py orchestrator has minimal testing
◦  Only 61 lines of tests for the main orchestration script
◦  Doesn't test: subprocess management, signal handling, proper cleanup
◦  Long-running process semantics not validated
- Coverage is misleading: 81% coverage doesn't mean 81% behavior validation
◦  Tests like test_certified_80.py are explicitly "booster" tests to hit coverage targets, not functional tests
◦  Many test methods just call functions without asserting meaningful output
- No real database validation: Tests don't verify:
◦  Data is correctly written to MySQL
◦  Schema migrations work properly
◦  Batch IDs are properly tracked across runs
◦  Duplicate detection works
