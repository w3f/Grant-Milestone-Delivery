# Evaluation

* **Acceptance:** In progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/110
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0 | License | <ul><li>[x] </li></ul> | [The Unlicense](https://github.com/vlbos/pacific-store-node/blob/master/LICENSE) |  Unlicense License based on the template is fine  |
| 1. | Documentation | <ul><li>[ ] </li></ul> | [doc](https://github.com/vlbos/pacific-store-node/blob/milestone-1/doc/pacific_store_milestone1.md), [Medium article](https://vlbos2018.medium.com/pacificstore-orderbook-wyvernexchange-modules-bca9af39111) |    |
| 2. | Substrate Runtime Module:backend orderbook | <ul><li>[ ] </li></ul> |  [Orderbook](https://github.com/vlbos/pacific-store-node/tree/milestone-1/pallets/orderbook) |    |
| 3. | Substrate Runtime Module:wyvern Exchange | <ul><li>[x] </li></ul> |  [Wyvern Exchange](https://github.com/vlbos/pacific-store-node/tree/milestone-1/pallets/wyvern-exchange) | Implemented, but this puts way too much data on-chain   |
| 4. | Unit Tests | <ul><li>[ ] </li></ul> | [orderbook unit tests](https://github.com/vlbos/pacific-store-node/blob/milestone-1/pallets/orderbook/src/tests.rs), [wyvern-exchange unit tests](https://github.com/vlbos/pacific-store-node/blob/milestone-1/pallets/wyvern-exchange/src/tests.rs) | the wyvern-exchange unit tests didn't compile for me, but in general the tests look good  |
| 5. | Docker file | <ul><li>[x] </li></ul> |  [Docker File](https://github.com/vlbos/pacific-store-node/blob/milestone-1/Dockerfile) |    |

## General Notes


I only took a quick look at it so far
