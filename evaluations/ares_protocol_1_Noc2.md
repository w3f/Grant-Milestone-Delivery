# Evaluation

* **Acceptance:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/71
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
 0 | Apache | <ul><li>[x] </li></ul> | [license](https://github.com/aresprotocols/ares-module/blob/master/LICENSE) |  Initially no license, they added the Apache License |
| 1. | oracle pallet |<ul><li>[x] </li></ul>| [pallet](https://github.com/aresprotocols/ares-module/blob/main/substrate-node-template/pallets/pallet-ares/src/lib.rs) | works and they keep improving it. Some of the tests didn't work, but it was fixed |
| 2. | scanner |<ul><li>[x] </li></ul>| [index.js](https://github.com/aresprotocols/ares-module/blob/main/fetch-data/index.js) | very basic js based scanner |
| 3. | provider |<ul><li>[x] </li></ul>| [pallet-ocw](https://github.com/aresprotocols/ares-module/blob/main/substrate-node-template/pallets/pallet-ocw/src/lib.rs), [aggregate-ares](https://github.com/aresprotocols/ares-module/tree/main/aggregate-ares) | originally implemented in java, added off-chain worker solution | 
| 4. | Testing |<ul><li>[x] </li></ul>| [tests](https://github.com/aresprotocols/ares-module/blob/main/substrate-node-template/pallets/pallet-ares/src/tests.rs) | unit tests, but initially unused imports and no documentation |
| 5. | example for demonstration |<ul><li>[x] </li></ul>| [fetch-data](https://github.com/aresprotocols/ares-module/tree/main/fetch-data) | The example doesn't use "golang implement scanner and provider". Contract needs to be amended |
| 6. | Documentation |<ul><li>[x] </li></ul>| [readme](	https://github.com/aresprotocols/ares-module/blob/main/README.md), [video](https://www.youtube.com/watch?v=l6q8R5F7abM&t=2s), [videos](https://www.youtube.com/watch?v=HlYhsHFKzJw) | Initially the documentation was missing a lot of information, but they improved it and added two videos to it  |

## General Notes

Contract was [amended](https://github.com/w3f/Open-Grants-Program/pull/176). 

Initially no use of any off-chain worker, but it was [integrated](https://github.com/aresprotocols/ares-module/blob/main/substrate-node-template/pallets/pallet-ocw/src/lib.rs). They also included a front-end and provided videos. The overall quality of the code and documentation wasn’t very good initially, but they clearly keep working on it and improving it. However, cargo clippy for example still complaints about a lot of things. 

