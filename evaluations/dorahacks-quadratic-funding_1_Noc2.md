# Evaluation

* **Acceptance:** In Progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/227
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [MIT License](https://github.com/zhangjiannan/QFgrant/blob/main/LICENSE) |  MIT License which is fine  |
| 0b. | Testing Guide | <ul><li>[ ] </li></ul> |  | The repo contains no testing guide and is just a copy past of the substrate template readme. Also the pallet doesn’t have any readme file or some inline documentation that explains the purpose of it or how to test it. |
| 1. | Quadratic Funding Substrate Pallet | <ul><li>[ ] </li></ul> | [quadratic-funding](https://github.com/zhangjiannan/QFgrant/tree/199b61301975653adb3dda8e53a36c3ccab85503/pallets/quadratic-funding)| unused variables, functions, etc, How do I start a round?, more inline documentation would be helpful |
| 2. | 	Deploy the runtime module to Substrate testnet | <ul><li>[ ] </li></ul> | | Contains unit tests |


## General Notes

name has no limited size: https://github.com/zhangjiannan/QFgrant/blob/main/pallets/quadratic-funding/src/lib.rs#L186 