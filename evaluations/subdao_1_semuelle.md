# Evaluation

- **Status:** In Progress
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/90
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[ ] </li></ul> | [node](https://github.com/SubDAO-Network/subdao-node/blob/1f875aa55f0c38a4e7e03f5720a729fcb9d72814/LICENSE),  | Licenses in two repos missing |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [docs](https://github.com/SubDAO-Network/docs/tree/69071af5291690b7df38510f6d696414bfc8c2ca/article) | Basic vision and outline |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> |  | see [General Notes](#general-notes) |
| 1. | SubDAO Node Repo | <ul><li>[x] </li></ul> | [subdao-node](https://github.com/SubDAO-Network/subdao-node/tree/1f875aa55f0c38a4e7e03f5720a729fcb9d72814) | — |
| 2. | Ink! Contracts | <ul><li>[x] </li></ul> | [subdao-contracts](https://github.com/SubDAO-Network/subDAO-contracts/tree/9dcb5852b61e5f7b040a9e8e895b03e0ea2990a1) | —— |
| 2a. | SubDAO Template Library | <ul><li>[x] </li></ul> | [subdao-contracts](https://github.com/SubDAO-Network/subDAO-contracts/tree/9dcb5852b61e5f7b040a9e8e895b03e0ea2990a1/template_manager) | — |
| 2b. | SubDAO Guard | <ul><li>[x] </li></ul> | [subdao-contracts](https://github.com/SubDAO-Network/subDAO-contracts/tree/9dcb5852b61e5f7b040a9e8e895b03e0ea2990a1/dao_manager) | — |
| 2c. | SubDAO Voting Template | <ul><li>[x] </li></ul> | [subdao-contracts](https://github.com/SubDAO-Network/subDAO-contracts/tree/9dcb5852b61e5f7b040a9e8e895b03e0ea2990a1/vote_manager) | — |
| 2d. | SubDAO Asset Vault | <ul><li>[x] </li></ul> | [subdao-contracts](https://github.com/SubDAO-Network/subDAO-contracts/tree/9dcb5852b61e5f7b040a9e8e895b03e0ea2990a1/vault) | — |
| 3. | Front End | <ul><li>[x] </li></ul> | [subdao-frontend](https://github.com/SubDAO-Network/subDAO-frontend/tree/2d82c43818223d9bf0575fcf69e7ed07246c4d64) | Very nice. Lacks error handling. |
| 4. | Docker Image | <ul><li>[x] </li></ul> | [gdrive](https://drive.google.com/drive/folders/1VRm0puMeYOj6c8hHGNlKmZZyN9D8mo-v) | — |
| 5. | Medium Posts | <ul><li>[ ] </li></ul> | [medium](https://subdao.medium.com/subdaos-viso-how-will-organizations-evolve-in-the-next-decade-db0883ff290d) | Same as 0b. |


## General Notes

- Delivery 5 and 0b are almost identical
- Manual deployment of contracts does not work. The latest versions of the polkadotjs UI doesn't allow contract deployment due to the node not supporting `instantiateWithCode` and earlier versions fail with `Uncaught error. Something went wrong with the query and rendering of this component. createType(ExtrinsicV4):: Struct: failed on signature: Type:: Cannot construct unknown type`.
- Frontend missing
