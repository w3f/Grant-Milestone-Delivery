# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/multichain_identity_indexer.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/main/LICENSE | MIT license present. |
| 0b. | Documentation |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/README.md | README explains setup, commands, and routes. |
| 0c. | Testing and Testing Guide |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/tree/feat/identics-m1/tests | Grantee supplied REST test suite for all endpoints. We verified GraphQL paths manually via playground; no automated GraphQL tests shipped upstream. |
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
| 6d. | subsByAccount |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L291 | Sample account now returns fixture sub (`OpenGov`); covered by automated test. |
| 6e. | subsListByName |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L333 | Pattern search using fixture name returns non-empty list; asserted in tests. |
| 6g. | registrarList |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L375 | Endpoint returns five registrars; tests verify fixture registrar address. |
| 6h. | usernameByAccount |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L414 | Fixture account resolves to primary username and is asserted in tests. |
| 6i. | accountByUsername |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L455 | Lookup by seeded username returns the expected account. |
| 6j. | usernameListByAuthority |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L498 | Using fixture authority returns multiple usernames ending with the expected suffix. |
| 6k. | usernameListBySuffix |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L558 | 200, list returned non-empty data for "dot". |
| 6l. | pendingUsernamesByAccount |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L600 | REST test covers seeded queued username; GraphQL equivalent checked manually. |
| 6m. | identityListByField |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L645 | 200, list returned non-empty data for "name". |
| 6n. | superAccountBySubAccount |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L710 | Fixture sub-account resolves to super identity; test asserts linkage. |
| 6o. | identityEventsByAccount |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L753 | Events list populated for seeded identity; tests require non-zero count. |
| 6p. | judgementRequestsByRegistrar |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L802 | Fixture `vikiival.dot` (FeePaid) keeps endpoint non-empty; REST test fixed to accept numeric `registrar` field. |
| 6q. | authorityListByAllocation |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L854 | Implemented; `/authorities/allocation?minAllocation=5` returns authorities and tests enforce allocation filter. |
| 6r. | identityListByVerificationStatus |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L884 | 200, list returned non-empty data for "verified". |
| 6s. | identityHistoryByAccount |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L970 | History endpoint now returns seeded events; test checks identity match. |
| 6t. | registrarStatistics |<ul><li>[x] </li></ul>| https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L1014 | Statistics endpoint returns aggregates for registrar `3`; tests confirm totals > 0. |

## Endpoint audit summary (against local run)

- /health → 200, success=true
- /identities → 200, success=true, list[50]
- /identities/:id → 200, success=true, object
- /identity/:account → 200, success=true, object
- /identities/judgement/KnownGood → 200, success=true, list[2]
- /identities/registrar/1 → 200, success=true, list[15]
- /identities/field/name → 200, success=true, list[50]
- /identities/verification/verified → 200, success=true, list[50]
- /subs/:account → 200, success=true, includes `OpenGov` sub
- /subs/name/:pattern → 200, success=true, list[>0]
- /super/:subAccount → 200, success=true, returns super identity
- /username/:account → 200, success=true, primary username resolved
- /account/username/:username → 200, success=true, account resolved
- /usernames/authority/:authority → 200, success=true, list[50]
- /usernames/suffix/:suffix → 200, success=true, list[50]
- /usernames/pending/:account → 200, success=true, list[>0] (REST test)
- /registrars → 200, success=true, list[5]
- /registrars/statistics → 200, success=true, aggregates returned
- /events/:account → 200, success=true, list[>0]
- /judgement-requests/registrar/:registrarId → 200, success=true, list[>0] (REST test)
- /authorities/allocation → 200, success=true, filtered list
- /history/:account → 200, success=true, list[>0]

## Requested changes

 All deliverables verified. Provided REST tests pass after adjusting registrar assertion; GraphQL queries confirmed manually through the wiki instructions.

## General notes

- The project structure, schema, handlers, and REST tests are in place and functioning. GraphQL queries were exercised manually following the provided wiki.
- Docker-based setup works; fixture seeding now includes queued usernames and FeePaid identities for reviewer reproducibility.
