# Evaluation

* **Acceptance:** In progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/71
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
 0 | Apache | <ul><li>[ ] </li></ul> | |  No license |
| 1. | oracle pallet |<ul><li>[ ] </li></ul>| [pallet](https://github.com/aresprotocols/ares-module/blob/main/substrate-node-template/pallets/pallet-ares/src/lib.rs) | initiates a request, but I'm unsure how it works |
| 2. | scanner |<ul><li>[ ] </li></ul>| [index.js](https://github.com/aresprotocols/ares-module/blob/main/fetch-data/index.js) |  |
| 3. | provider |<ul><li>[ ] </li></ul>| [aggregate-ares](https://github.com/aresprotocols/ares-module/tree/main/aggregate-ares) | implemented in java | 
| 4. | Testing |<ul><li>[x] </li></ul>| [tests](https://github.com/aresprotocols/ares-module/blob/main/substrate-node-template/pallets/pallet-ares/src/tests.rs) | unit tests, but unused imports, no documentation |
| 5. | example for demonstration |<ul><li>[ ] </li></ul>| [fetch-data](https://github.com/aresprotocols/ares-module/tree/main/fetch-data) | The example doesn't use "golang implement scanner and provider". No explanation on how to use it |
| 6. | Documentation |<ul><li>[ ] </li></ul>| [readme](	https://github.com/aresprotocols/ares-module/blob/main/README.md) | The documentation could be a lot better. It for example doesn't contain any examples that show how developers can use the pallet  |

## General Notes

No use of any off-chain worker. Proposal: “Aggregator, Validator, Council use off-chain worker getting external data”