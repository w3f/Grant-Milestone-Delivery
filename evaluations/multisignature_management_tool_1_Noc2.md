# Evaluation

* **Acceptance:** In progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/11
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0 |  Apache License 2.0 | <ul><li>[x] </li></ul> | [License](https://github.com/itering/subscan-multisig-ui/commit/08bae220f0bf46c2f6375bcb912273a7f1d95a5b) |  Initially wrong license, but they fixed it |
| 1. | General UI design |<ul><li>[x] </li></ul>| [views](https://github.com/itering/subscan-multisig-ui/tree/main/src/views), [assets](https://github.com/itering/subscan-multisig-ui/tree/main/src/assets) | Looks nice
| 2. | backend design doc |<ul><li>[x] </li></ul>| [notion](https://www.notion.so/backend-doc-e7b4f79ede7b4d9cb39a52769c2aab2d) |
| 3. | Integrate with polkadot js extension |<ul><li>[ ] </li></ul>| [ss58format for extension account fix](https://github.com/itering/subscan-multisig-ui/commit/2aa5f4c9a1f26fd2da763eef406bdd66157d326f) | it only works if you use the correct address format
| 4. | Multisig wallet creation and management |<ul><li>[x] </li></ul>| [code](https://github.com/itering/subscan-multisig-ui) | Works
| 5. | Basic Multisig Extrinsic(transfer) create and process in Multisig wallet |<ul><li>[ ] </li></ul>| [code](https://github.com/itering/subscan-multisig-ui) |
| 6. | Multisig wallet support polkadot mainnet |<ul><li>[x] </li></ul>| [code](https://github.com/itering/subscan-multisig-ui) |
| 7. | Use database or other backend service to store the index data.|<ul><li>[ ] </li></ul>| [pr](https://github.com/itering/subscan-multisig-ui/commit/30f83b4a4d9f0f060c46db103cee3125e8f0e487) |
| 8. | Docker Files and Images |<ul><li>[x] </li></ul>| [Dockerfile](https://github.com/itering/subscan-multisig-ui/blob/main/Dockerfile) | works
| 9. | Unit tests and integration test |<ul><li>[x] </li></ul>| [tests](https://github.com/itering/subscan-multisig-ui/tree/main/tests), [Cypress](https://github.com/itering/subscan-multisig-ui/tree/main/cypress) | Contains unit and integration tests (
| 10. | Tutorials |<ul><li>[x] </li></ul>| [tutorial](https://github.com/itering/subscan-multisig-ui#tutorial) |

## General Notes

The already have an online [demo](https://multisig.subscan.io.l2me.com/). 
