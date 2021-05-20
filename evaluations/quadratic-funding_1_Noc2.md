# Evaluation

* **Acceptance:** In Progress 
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/268
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[ ] </li></ul> | [Apache License 2.0](https://github.com/OAK-Foundation/quadratic-funding-pallet/blob/master/LICENSE) | Correct license, but the quadratic-funding-test repo has no license |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [pallet-doc.md](https://github.com/OAK-Foundation/quadratic-funding-pallet/blob/master/doc/pallet-doc.md) | Looks good |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [quadratic-funding-test repo](https://github.com/OAK-Foundation/quadratic-funding-test) | A separate repo, which is great and provides a lot of information |
| 0d. | Tutorial | <ul><li>[x] </li></ul> | [quadratic-funding-test tutorial](https://github.com/OAK-Foundation/quadratic-funding-test/blob/main/README.md) | Medium article was already shared with grantspr, but it's not yet published. The readme contains a nice tutorial  |
| 1. | Substrate module: CLR | <ul><li>[ ] </li></ul> | [quadratic-funding-pallet](https://github.com/OAK-Foundation/quadratic-funding-pallet) | Why no rust unit tests?, appeal doesn't seem to be implemented |
| 2. | Substrate chain | <ul><li>[x] </li></ul> | [quadratic-funding-pallet](https://github.com/OAK-Foundation/quadratic-funding-pallet) | Works |
| 3. | Docker | <ul><li>[x] </li></ul> | [docker-compose.yml](https://github.com/OAK-Foundation/quadratic-funding-pallet/blob/master/docker-compose.yml), [Docker instruction in README.md](https://github.com/OAK-Foundation/quadratic-funding-pallet#2-run-in-docker) | Looks good  |

## General Notes

- Everything is stored on-chain without a limit: https://github.com/OAK-Foundation/quadratic-funding-pallet/blob/bb2a5248bac7a8b6ef21e570f0942c0db40c8e6b/pallets/open-grant/src/lib.rs#L206 
- quadratic-funding-test repo has no license
- Why no rust unit tests? 
- appeal doesn't seem to be implemented