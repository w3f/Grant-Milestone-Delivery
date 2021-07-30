# Evaluation

- **Status:** In Progress
- **PR Link:** https://github.com/w3f/Grants-Program/pull/437
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache License 2.0](https://github.com/perun-network/perun-polkadot-pallet/blob/dev/LICENSE) | Correct License |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [readme documentation](https://github.com/perun-network/perun-polkadot-pallet/blob/milestone1/README.md#documentation) | Readme looks good + rustdoc |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [readme tests](https://github.com/perun-network/perun-polkadot-pallet/blob/milestone1/README.md#tests) | Well tested |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/perun-network/perun-polkadot-pallet/blob/milestone1/Dockerfile) | Works |
| 1. | Setup | <ul><li>[x] </li></ul> | [repository](https://github.com/perun-network/perun-polkadot-pallet) | Repository structure is described in the README |
| 2. | Core Types | <ul><li>[ ] </li></ul> | [types.rs](https://github.com/perun-network/perun-polkadot-pallet/blob/milestone1/src/types.rs) | Implemented according to the contract and well documented.  |
| 3. | Open/Deposit | <ul><li>[ ] </li></ul> | [lib.rs](https://github.com/perun-network/perun-polkadot-pallet/blob/milestone1/src/lib.rs) | Channel opening is implemented |

## General Notes

Implementation according to the contract. Well tested and documented. It would be nice to have a repository that lets you easily spin up a node and test the implementation.  
See https://github.com/w3f/Grant-Milestone-Delivery/pull/235#issuecomment-886704483