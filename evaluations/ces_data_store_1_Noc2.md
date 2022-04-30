# Evaluation

- **Status:** In Progress
- **Contract Link:** https://github.com/w3f/Grants-Program/blob/master/applications/ces_data_store.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/CESSProject/data-store-pallet/blob/main/LICENSE) | Apache License, correct |
| 0b. | Documentation |  <ul><li>[x] </li></ul> | [inline docs](https://github.com/CESSProject/data-store-pallet/blob/main/pallets/data-store/src/lib.rs), [tutorial](https://github.com/CESSProject/data-store-pallet/blob/main/docs/tutorial.md), [pallet readme](https://github.com/CESSProject/data-store-pallet/blob/main/pallets/data-store/README.md) |  Tutorial, inline documentation and readme  |
| 0c. | Testing Guide |  <ul><li>[ ] </li></ul> | [testing guide](https://github.com/CESSProject/data-store-pallet#run-tests), [benchmarks tests](https://github.com/CESSProject/data-store-pallet#run-tests-with-benchmarks) |   |
| 0d. | Docker |  <ul><li>[x] </li></ul> | [docker instructions](https://github.com/CESSProject/data-store-pallet#run-in-docker) |   |
| 1a. | Substrate module: data_store |  <ul><li>[x] </li></ul> | [data-store](https://github.com/CESSProject/data-store-pallet/tree/main/pallets/data-store) |   | 
| 1b. | Benchmarking |  <ul><li>[ ] </li></ul> | [benchmarks](https://github.com/CESSProject/data-store-pallet/blob/main/pallets/data-store/src/benchmarking.rs)  |   |

## General Notes

 The documentation on the benchmarks still mentions the template: https://github.com/CESSProject/data-store-pallet/blob/a552b78abfad0a4d6c81968731df611add1c4c66/pallets/data-store/src/benchmarking.rs#L1 and cargo test --release shows zero tests for pallet_data_store, but also runs the 6 tests for pallet_data_store-81554982bd3a900a. Additionally there seems no limit for new new_keywords (at least no error message) and the weight edit is constant (see https://github.com/CESSProject/data-store-pallet/blob/main/pallets/data-store/src/lib.rs#L193).