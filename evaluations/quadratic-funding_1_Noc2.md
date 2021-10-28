# Evaluation

* **Acceptance:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/268
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache License 2.0](https://github.com/OAK-Foundation/quadratic-funding-pallet/blob/master/LICENSE),  | Correct license. They added the [licenses to the quadratic-funding-test repo](https://github.com/OAK-Foundation/quadratic-funding-test/blob/main/LICENSE) |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [pallet-doc.md](https://github.com/OAK-Foundation/quadratic-funding-pallet/blob/master/doc/pallet-doc.md) | Looks good |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [quadratic-funding-test repo](https://github.com/OAK-Foundation/quadratic-funding-test) | A separate repo, which is great and provides a lot of information |
| 0d. | Tutorial | <ul><li>[x] </li></ul> | [quadratic-funding-test tutorial](https://github.com/OAK-Foundation/quadratic-funding-test/blob/main/README.md) | Medium article was already shared with grantspr, but it's not yet published. The readme contains a nice tutorial  |
| 1. | Substrate module: CLR | <ul><li>[x] </li></ul> | [quadratic-funding-pallet](https://github.com/OAK-Foundation/quadratic-funding-pallet) | They focused on javascript unit tests instead of rust unit tests and they decided to remove appeal (shouldn't slow down), both is fine.  |
| 2. | Substrate chain | <ul><li>[x] </li></ul> | [quadratic-funding-pallet](https://github.com/OAK-Foundation/quadratic-funding-pallet) | Works, but should not be a fork |
| 3. | Docker | <ul><li>[x] </li></ul> | [docker-compose.yml](https://github.com/OAK-Foundation/quadratic-funding-pallet/blob/master/docker-compose.yml), [Docker instruction in README.md](https://github.com/OAK-Foundation/quadratic-funding-pallet#2-run-in-docker) | Looks good  |

## General Notes

Initially the delivery had some smaller issues, which were fixed quickly (e.g. [missing license file](https://github.com/OAK-Foundation/quadratic-funding-test/blob/main/LICENSE)). They focused on javascript unit tests instead of rust unit tests (uncommon but fine). Additionally they actively decided against implementing appeal, which also isn't an issue. Also, the weights need to be improved (Everything is stored on-chain without a limit: https://github.com/OAK-Foundation/quadratic-funding-pallet/blob/bb2a5248bac7a8b6ef21e570f0942c0db40c8e6b/pallets/open-grant/src/lib.rs#L206). 

It would be nice if they could move the delivery to a separate repo, so that it's easier for others to follow their work and potentially to contribute to it. 