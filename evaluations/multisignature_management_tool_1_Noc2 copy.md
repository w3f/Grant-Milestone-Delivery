# Evaluation

* **Acceptance:** In progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/11
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0 |  Apache License 2.0 | <ul><li>[ ] </li></ul> | [License](https://github.com/itering/subscan-multisig-ui/blob/main/LICENSE) |  Wrong license |
| 1. | General UI design |<ul><li>[x] </li></ul>| |
| 2. | backend design doc |<ul><li>[ ] </li></ul>| |
| 3. | Integrate with polkadot js extension |<ul><li>[ ] </li></ul>| | Works, but only if you use the correct address format
| 4. | Multisig wallet creation and management |<ul><li>[x] </li></ul>| | Works
| 5. | Basic Multisig Extrinsic(transfer) create and process in Multisig wallet |<ul><li>[ ] </li></ul>| |
| 6. | Multisig wallet support polkadot mainnet |<ul><li>[x] </li></ul>| |
| 7. | Use database or other backend service to store the index data.|<ul><li>[ ] </li></ul>| [pr](https://github.com/itering/subscan-multisig-ui/commit/30f83b4a4d9f0f060c46db103cee3125e8f0e487) |
| 8. | Docker Files and Images |<ul><li>[x] </li></ul>| [Dockerfile](https://github.com/itering/subscan-multisig-ui/blob/main/Dockerfile) | works
| 9. | Unit tests and integration test |<ul><li>[x] </li></ul>| [tests](https://github.com/itering/subscan-multisig-ui/tree/main/tests), [Cypress](https://github.com/itering/subscan-multisig-ui/tree/main/cypress) | Contains unit and integration tests (
| 10. | Tutorials |<ul><li>[x] </li></ul>| [tutorial](https://github.com/itering/subscan-multisig-ui#tutorial) |

## General Notes

The already have an online [demo](https://multisig.subscan.io.l2me.com/). 