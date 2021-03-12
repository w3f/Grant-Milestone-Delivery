# Evaluation

* **Acceptance:** In Progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/227
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [MIT License](https://github.com/zhangjiannan/QFgrant/blob/main/LICENSE) |  MIT License which is fine  |
| 0b. | Testing Guide | <ul><li>[ ] </li></ul> | [readme](https://github.com/zhangjiannan/QFgrant) | Initial version was just a copy paste of the substrate template readme, they fixed it. But it still doesn't contain a "testing guide" |
| 1. | Quadratic Funding Substrate Pallet | <ul><li>[ ] </li></ul> | [quadratic-funding](https://github.com/zhangjiannan/QFgrant/blob/c5048f3e45846af8d4361bce1e9f0bed12d60e41/pallets/quadratic-funding/src/lib.rs)| Originally the delivery had unused variables, functions, etc, and very little inline documentation. Also start_round function wasn't implemented, the size limit of name as well support for multiple rounds, but the team fixed it. However it's still difficult to follow the code. How/Where is the matched amount calculated? |
| 2. | 	Test | <ul><li>[x] </li></ul> | [tests](https://github.com/zhangjiannan/QFgrant/blob/main/pallets/quadratic-funding/src/tests.rs) | Contains 5 unit tests |


## General Notes

In Progress