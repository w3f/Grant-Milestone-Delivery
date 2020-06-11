# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/27 
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul>|[License](https://github.com/yxf/subwallet/blob/master/LICENSE)| MIT instead of Apache, but that's not a big issue |
| 1. | Command help |<ul><li>[x] </li></ul>| https://github.com/yxf/subwallet#usage | Works
| 2. | Address generation |<ul><li>[x] </li></ul>| [Implementation](https://github.com/yxf/subwallet/blob/master/src/main.rs#L23) + [Usage](https://github.com/yxf/subwallet#getnewaddress) | Works
| 3. | Address list |<ul><li>[x] </li></ul>| [Implementation](https://github.com/yxf/subwallet/blob/master/src/main.rs#L37) + [Usage](https://github.com/yxf/subwallet#listaddresses) | Works
| 4. | Backup |<ul><li>[x] </li></ul>| [Implementation](https://github.com/yxf/subwallet/blob/master/src/main.rs#L63) + [Usage](https://github.com/yxf/subwallet#backup) | Works
| 5. | Restore |<ul><li>[x] </li></ul>| [Implementation](https://github.com/yxf/subwallet/blob/master/src/main.rs#L43) + [Usage](https://github.com/yxf/subwallet#backup) | Works
| 6. | Unit Tests |<ul><li>[x] </li></ul>| https://github.com/yxf/subwallet/blob/master/src/keystore.rs#L75 <br> https://github.com/yxf/subwallet/blob/master/src/wallet.rs#L130 | Only for wallet.rs and keystore.rs at the moment |
| 7. | Docs |<ul><li>[x] </li></ul>| https://github.com/yxf/subwallet | cargo doc support would be nice |

## General Notes

Very useful delivery documentation and everything works. Cargo doc support would be nice as well as support for Kusama. Maybe also a feature to easily delete accounts would be great. Additionally it’s currently published under the MIT license instead of the Apache license 2. 
