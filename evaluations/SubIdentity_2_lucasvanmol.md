# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/tree/master/applications/SubIdentity.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/pull/442

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/TDSoftware/subidentity-package/blob/main/LICENSE https://github.com/TDSoftware/subidentity-webapp/blob/main/LICENSE https://github.com/TDSoftware/subidentity-backend/blob/main/LICENSE | Apache 2.0 |
| 0b. | Documentation |<ul><li>[x] </li></ul>| https://github.com/TDSoftware/subidentity-webapp/blob/main/README.md https://github.com/TDSoftware/subidentity-webapp/blob/main/docs/Tutorial.md https://github.com/TDSoftware/subidentity-package/blob/main/README.md https://github.com/TDSoftware/subidentity-backend/blob/main/readme.md | Excellent documentation, both in README's and in code. |
| 0c. | Testing |<ul><li>[x] </li></ul>| https://github.com/TDSoftware/subidentity-webapp/blob/main/README.md	https://github.com/TDSoftware/subidentity-package/blob/main/README.md https://github.com/TDSoftware/subidentity-backend/blob/main/readme.md | All 3 repositories are straightforward to test and have good test coverage. |
| 1. | Implement offline mode |<ul><li>[x] </li></ul>| https://github.com/TDSoftware/subidentity-webapp/blob/main/src/components/partials/IdentitySearch/CustomNodeModal.vue https://github.com/TDSoftware/subidentity-webapp/blob/main/src/components/partials/IdentitySearch/IdentitySearch.vue https://github.com/TDSoftware/subidentity-webapp/blob/main/src/util/storage.ts | Can connect to any `wss://` address or a local node (e.g. `ws://127.0.0.1:9944`). |
| 2. | Implement UI for node selection |<ul><li>[x] </li></ul>| https://github.com/TDSoftware/subidentity-webapp/blob/main/src/components/partials/IdentitySearch/CustomNodeModal.vue https://github.com/TDSoftware/subidentity-webapp/blob/main/src/components/common/CustomSelect.vue | |
| 3. | Implement URL param logic |<ul><li>[x] </li></ul>| https://github.com/TDSoftware/subidentity-webapp/blob/main/src/views/ListView.vue https://github.com/TDSoftware/subidentity-webapp/blob/main/src/views/IdentityView.vue | |  
| 4a. | Performance improvement |<ul><li>[x] </li></ul>| https://github.com/TDSoftware/subidentity-backend | Great performance improvement from Milestone 1, loading is instant even for queries with many results. | 
| 4b. | Backend Development |<ul><li>[x] </li></ul>| https://github.com/TDSoftware/subidentity-backend https://github.com/TDSoftware/subidentity-backend/blob/main/src/routes/chains/chainRouter.ts  https://github.com/TDSoftware/subidentity-backend/blob/main/src/routes/identities/identityRouter.ts https://github.com/TDSoftware/subidentity-backend/blob/main/src/services/schedulerService.ts | | 
| 4c. | Consume API |<ul><li>[x] </li></ul>| https://github.com/TDSoftware/subidentity-webapp/blob/main/src/store/index.ts | | 

## General Notes

Great delivery, no problems at all running the projects/testing.
