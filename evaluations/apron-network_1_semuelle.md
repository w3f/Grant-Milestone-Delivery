# Evaluation

- **Status:** In Progress
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/116
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
|---|---|---|---|---|
| 0a. | License | <ul><li>[ ] </li></ul> | [node](https://github.com/Apron-Network/apron-node/blob/0e732be9244afd9d5cc8fbe933a015b9d9f9266b/LICENSE), [dashboard](https://github.com/Apron-Network/dashboard-static/blob/bb3044f3f6fe3c4a18c1e941e64920e7db732771/LICENSE), [contracts]()  | `apron-contracts` without license. |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [whitepaper](https://github.com/Apron-Network/materials/blob/9e34f92eda0d0a0eec68646fd1990d912631f66d/docs/Whitepaper%20.pdf) | —— |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [tutorial](https://github.com/Apron-Network/materials/blob/9e34f92eda0d0a0eec68646fd1990d912631f66d/tutorials/DemoTutorial.md) | —— |
| 1. | Apron Node Repo | <ul><li>[x] </li></ul> | [apron-node](https://github.com/Apron-Network/apron-node/tree/0e732be9244afd9d5cc8fbe933a015b9d9f9266b) | —— |
| 2. | Apron Market Contracts Repo | <ul><li>[x] </li></ul> | [apron-contracts](https://github.com/Apron-Network/apron-contracts/tree/cd2d75209032a50f4054ba3087421cfdda66fcb0) | —— |
| 3. | Decentralized API Market / Front End Repo | <ul><li>[x] </li></ul> | [dashboard](https://github.com/Apron-Network/dashboard-static/tree/bb3044f3f6fe3c4a18c1e941e64920e7db732771) | —— |
| 4. | Apron SDK Repo | <ul><li>[ ] </li></ul> |  | —— |
| 5. | Docker | <ul><li>[x] </li></ul> | [gdrive](https://drive.google.com/file/d/1509jfQpUawIdok7UYHr8WcY6_wB5YG8X/view) | Repo contains Dockerfile as well |
| 6. | Tutorial | <ul><li>[ ] </li></ul> |  | Getting a `Could not fetch chain ID. Is your RPC URL correct?` when adding endpoint to MetaMask |
| 7. | Article | <ul><li>[ ] </li></ul> |  | —— |
| 8. | DAO | <ul><li>[ ] </li></ul> |  | —— |


## General Notes

Ad 0c:

- `docker build -t apron-node` should be `docker build . -t apron-node`.
- `git submodule update --init` missing from instructions
- cannot upload contracts

