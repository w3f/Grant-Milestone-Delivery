# Evaluation

- **Status:** Changes requested
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/multichain_identity_indexer.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/main/LICENSE | MIT license present. |
| 0b. | Documentation |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/README.md | README explains setup, commands, and routes. |
| 0c. | Testing and Testing Guide |<ul><li>[ ] </li></ul>| https://github.com/vikiival/identics/tree/feat/identics-m1/tests | Tests exist but many assertions allow 200/400/404 and don’t validate positive data paths; please add fixtures/known inputs and assert 200 + non-empty payloads for parameterized routes. |
| 0d. | Docker |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/docker-compose.yml | Stack builds and starts. |
| 0e. | Article / workshop |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/wiki/Querying-data-via-GraphQL | Wiki available; consider adding more end-to-end REST examples. |
| 1a. | Identity Registration Schema |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/schema.graphql#L1 | Schema present. |
| 1b. | Identity Management Handlers |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/identities | Implemented. |
| 1c. | Identity Events Processing |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/identities | Implemented. |
| 2a. | Registrar System Schema |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/schema.graphql#L30 | Schema present. |
| 2b. | Registrar Management Handlers |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/registrars | Implemented. |
| 2c. | Judgment System Implementation |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/judgements | Implemented. |
| 3a. | Sub-Identity Schema Development |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/schema.graphql#L51 | Implemented (`Sub`). |
| 3b. | Sub-Identity Management Handlers |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/subs | Implemented. |
| 3c. | Sub-Identity Events Processing |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/subs | Implemented. |
| 4a. | Username System Schema |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/schema.graphql#L63 | Schema present. |
| 4b. | Username Authority Handlers |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/usernames | Implemented. |
| 4c. | Username Management Handlers |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/usernames | Implemented. |
| 4d. | Username Cleanup Handlers |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/usernames | Implemented. |
| 5a. | Query Interface Development |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/tree/feat/identics-m1/src/server-extension | Present. |
| 5b. | Data Views Implementation |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/tree/feat/identics-m1/src/server-extension | Present. |
| 6a. | identityByAccount |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L99 | 200 with object for sampled account. |
| 6b. | identityListByJudgement |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L187 | 200, list (KnownGood) returns non-empty data. |
| 6c. | identityListByRegistrar |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L240 | 200, list returned non-empty data. |
| 6d. | subsByAccount |<ul><li>[ ] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L291 | Returned empty list for sampled account; provide positive sample. |
| 6e. | subsListByName |<ul><li>[ ] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L333 | Returned empty list; provide positive sample/pattern. |
| 6g. | registrarList |<ul><li>[ ] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L375 | Returned empty list during our run; confirm indexing/seed. |
| 6h. | usernameByAccount |<ul><li>[ ] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L414 | Returned 404 for sampled account; provide account with primary username. |
| 6i. | accountByUsername |<ul><li>[ ] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L455 | Returned 404 for "alice"; provide known username for 200 case. |
| 6j. | usernameListByAuthority |<ul><li>[ ] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L498 | Returned 404 for sampled authority; share valid authority example. |
| 6k. | usernameListBySuffix |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L558 | 200, list returned non-empty data for "dot". |
| 6l. | pendingUsernamesByAccount |<ul><li>[ ] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L600 | 200, list empty; provide account with pending approvals. |
| 6m. | identityListByField |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L645 | 200, list returned non-empty data for "name". |
| 6n. | superAccountBySubAccount |<ul><li>[ ] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L710 | 404 for sampled input; provide known sub-account. |
| 6o. | identityEventsByAccount |<ul><li>[ ] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L753 | 200, list empty for sampled account; provide account with events. |
| 6p. | judgementRequestsByRegistrar |<ul><li>[ ] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L802 | 200, list empty in our run. |
| 6q. | authorityListByAllocation |<ul><li>[ ] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L854 | Returns 500 with "not implemented"; deliverable not met. |
| 6r. | identityListByVerificationStatus |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L884 | 200, list returned non-empty data for "verified". |
| 6s. | identityHistoryByAccount |<ul><li>[ ] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L970 | 200, list empty; provide sample account with history. |
| 6t. | registrarStatistics |<ul><li>[ ] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L1014 | 200, list empty on our run. |

## Endpoint audit summary (against local run)

- /health → 200, success=true
- /identities → 200, success=true, list[50]
- /identities/:id → 200, success=true, object
- /identity/:account → 200, success=true, object
- /identities/judgement/KnownGood → 200, success=true, list[2]
- /identities/registrar/1 → 200, success=true, list[15]
- /identities/field/name → 200, success=true, list[50]
- /identities/verification/verified → 200, success=true, list[50]
- /subs/:account → 200, success=true, list[0]
- /subs/name/:pattern → 200, success=true, list[0]
- /super/:subAccount → 404
- /username/:account → 404
- /account/username/:username → 404
- /usernames/authority/:authority → 404
- /usernames/suffix/:suffix → 200, success=true, list[50]
- /usernames/pending/:account → 200, success=true, list[0]
- /registrars → 200, success=true, list[0]
- /registrars/statistics → 200, success=true, list[0]
- /events/:account → 200, success=true, list[0]
- /judgement-requests/registrar/:registrarId → 200, success=true, list[0]
- /authorities/allocation → 500 (not implemented)
- /history/:account → 200, success=true, list[0]

## Requested changes

1. Implement 6q `/authorities/allocation` or adjust the milestone scope. If implementation is intended, add allocation tracking to the schema and return a paginated list filtered by `minAllocation`.
2. Provide seeded fixtures or known-good sample inputs so tests can validate positive data paths for:
   - subs (by account/name), super account, usernames (primary/account/authority), pending usernames
   - registrars and registrar statistics
   - events and history (at least one account with non-empty results)
3. Strengthen tests: remove ambiguous 200/400/404 assertions and add shape checks (array/object) and minimal counts for positive paths.

## General notes

- The project structure, schema, handlers, and majority of routes are in place and functioning. The current gaps appear to be data availability for positive test cases and one missing implementation (6q).
- Docker-based setup works; consider adding a small seed script to populate minimal fixture data for CI/evaluation reproducibility. 
