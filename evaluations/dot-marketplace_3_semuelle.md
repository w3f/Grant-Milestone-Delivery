# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace.md
- **Milestone:** 3
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a      | License | <ul><li>[x] </li></ul> | [WowLabz/tasking_backend](https://github.com/WowLabz/tasking_backend/blob/242ac67fe656b145bea4ba6ec3f5e5485cce4a1c/LICENSE), [WowLabz/dot_marketplace_docker](https://github.com/WowLabz/dot_marketplace_docker/blob/2444c931a5fa4a7ec18516d7129bbfd500ed3fc3/LICENSE), [WowLabz/tasking_frontend](https://github.com/WowLabz/tasking_frontend/blob/f98f866f757ed3b5cd7cdd6b1778212302c4e054/LICENSE), [WowLabz/authentication_service](https://github.com/WowLabz/authentication_service/blob/ff20fdbaa808be1c5e653fc8cf022dbd7f1d41e8/LICENSE) | Apache 2.0         |
| 0b      | Documentation | <ul><li>[x] </li></ul> | [WowLabz/tasking_backend](https://github.com/WowLabz/tasking_backend/blob/Phase1_Milestone3/README.md), [pallet-tasking](https://github.com/WowLabz/tasking_backend/blob/cfb76adcb82c1c36e370952b0663f456045db1fa/pallets/pallet-tasking/taskingreadme.md) | No changes to README since previous milestones
| 0c      | Testing Guide | <ul><li>[x] </li></ul> | [WowLabz/dot_marketplace_docker](https://github.com/WowLabz/dot_marketplace_docker/blob/e4fc9a5ba074ba9df86f66ac5141a90f073dc90f/README.md) | — |
| 0d      | Docker Image | <ul><li>[x] </li></ul> | [WowLabz/dot_marketplace_docker](https://github.com/WowLabz/dot_marketplace_docker/tree/e4fc9a5ba074ba9df86f66ac5141a90f073dc90f) | Repository combining node, backend and frontend. The individual repos include a `docker-compose.yml` as well. |
| 1      | Multiuser Module | <ul><li>[x] </li></ul> | [WowLabz/tasking_backend](https://github.com/WowLabz/tasking_backend/blob/cfb76adcb82c1c36e370952b0663f456045db1fa/pallets/pallet-tasking/src/lib.rs) | see [General Notes](#general-notes) |
| 2      | Tagging Module | <ul><li>[x] </li></ul> | [WowLabz/authentication_service](https://github.com/WowLabz/authentication_service/blob/b5e08fc940adaa7cfc5b68c9618d91e775570670/src/models/user.rs#L36) | — |
| 3      | File Transfer Module  | <ul><li>[x] </li></ul> | [WowLabz/authentication_service](https://github.com/WowLabz/authentication_service/blob/b5e08fc940adaa7cfc5b68c9618d91e775570670/src/services/file_service.rs) | — |
| 4      | Frontend App | <ul><li>[x] </li></ul> | [WowLabz/tasking_frontend](https://github.com/WowLabz/tasking_frontend/tree/1ce5343bf281d86cb22e0989f4951870d5f6728b) | — |
| 5      | Website | <ul><li>[x] </li></ul> | [dotmarketplace.co](https://www.dotmarketplace.co/) | — |  
| 6      | Article | <ul><li>[x] </li></ul> | [medium.com](https://medium.com/@Dot_Marketplace/introducing-dot-marketplace-microtasking-app-for-crypto-communities-1063ec69bcb9) | — |


## General Notes

- `Multiuser Module` permission issues fixed on request.
