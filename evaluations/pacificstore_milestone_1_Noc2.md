# Evaluation

* **Acceptance:** In progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/110
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0 | License | <ul><li>[x] </li></ul> | [The Unlicense](https://github.com/vlbos/pacific-store-node/blob/master/LICENSE) |  Unlicense License based on the template is fine  |
| 1. | Documentation | <ul><li>[ ] </li></ul> | [doc](https://github.com/vlbos/pacific-store-node/blob/milestone-1/doc/pacific_store_milestone1.md), [Medium article](https://vlbos2018.medium.com/pacificstore-orderbook-wyvernexchange-modules-bca9af39111) | They provided documentation. The medium article is not really a medium article, but simply a copy paste of the pacific_store_milestone1_testing_guide.md file, which isn’t really useful. The repository also still contains md files that are simply a copy pasted from the original template, for example https://github.com/vlbos/pacific-store-node/tree/milestone-1/front-end. The testing guide for the front-end currently doesn’t work  |
| 2. | Substrate Runtime Module:backend orderbook | <ul><li>[x] </li></ul> |  [Orderbook](https://github.com/vlbos/pacific-store-node/tree/milestone-1/pallets/orderbook) |  Works  |
| 3. | Substrate Runtime Module:wyvern Exchange | <ul><li>[x] </li></ul> |  [Wyvern Exchange](https://github.com/vlbos/pacific-store-node/tree/milestone-1/pallets/wyvern-exchange) | Implemented, but this puts way too much data on-chain   |
| 4. | Unit Tests | <ul><li>[x] </li></ul> | [orderbook unit tests](https://github.com/vlbos/pacific-store-node/blob/milestone-1/pallets/orderbook/src/tests.rs), [wyvern-exchange unit tests](https://github.com/vlbos/pacific-store-node/blob/milestone-1/pallets/wyvern-exchange/src/tests.rs) | looks good  |
| 5. | Docker file | <ul><li>[x] </li></ul> |  [Docker File](https://github.com/vlbos/pacific-store-node/blob/milestone-1/Dockerfile) |    |

## General Notes


Initially the code was a little bit messy but they improved it. 

