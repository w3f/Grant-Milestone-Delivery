# Evaluation

- **Status:** Accepted 
- **Contract Link:** https://github.com/w3f/Grants-Program/blob/master/applications/ces_data_store.md
* **Milestone:** 3
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [GPLv3](https://github.com/CESSProject/data-store-sidecar/blob/main/LICENSE) | Correct License |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [tutorial2](https://github.com/CESSProject/data-store-sidecar/blob/main/docs/tutorial2.md) | Helpful |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [readme](https://github.com/CESSProject/data-store-sidecar#run-tests) | A few "InternalServerError: Internal Error", but generally works   |
| 0d. | Docker | <ul><li>[x] </li></ul> | [docker](https://github.com/CESSProject/data-store-sidecar#docker) | Works |
| 0e. | Article | <ul><li>[x] </li></ul> | [article](https://medium.com/@swowk1/a-new-idea-for-storage-services-with-substrate-in-polkadot-ecosystem-4f96a2aa90f6) | Should probably be shared with grants pr |
| 1. | Data Integrity Verification | <ul><li>[x] </li></ul> | [Data Integrity Proof Design Scheme](https://github.com/CESSProject/CIPs/blob/main/CIP-2.md), [Implementation of Data Integrity Verification in CESS Network](https://github.com/CESSProject/cess/tree/main/c-pallets/segment-book) | According to the contract, see warnings below  |
| 2. | Data Store API | <ul><li>[x] </li></ul> | [store](https://github.com/CESSProject/data-store-sidecar/blob/main/src/services/store/Store.ts#L449), [retrieve](https://github.com/CESSProject/data-store-sidecar/blob/main/src/services/store/Store.ts#L481), [replace](https://github.com/CESSProject/data-store-sidecar/blob/main/src/services/store/Store.ts#L505), [delete](https://github.com/CESSProject/data-store-sidecar/blob/main/src/services/store/Store.ts#L563) | Implementation according to the contract, I didn’t look into the security aspects of it. |
| 3. | Endpoint Docs | <ul><li>[x] </li></ul> | [https://example-datastore.cess.cloud/docs/](https://example-datastore.cess.cloud/docs/) | Correct |

## General Notes

The delivery is according to contract. Everything worked, with a few minor issues (see warnings). A good delivery given the size of the grant. 

Warnings when running the segment-book tests: 
```
warning: unused import: `CheckedDiv`
  --> c-pallets/file-bank/src/lib.rs:43:57
   |
43 |         AccountIdConversion, BlockNumberProvider, CheckedAdd, CheckedDiv, CheckedMul, CheckedSub,
   |                                                               ^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused import: `CheckedMul`
  --> c-pallets/file-bank/src/lib.rs:43:69
   |
43 |         AccountIdConversion, BlockNumberProvider, CheckedAdd, CheckedDiv, CheckedMul, CheckedSub,
   |                                                                           ^^^^^^^^^^

warning: unused import: `CheckedSub`
  --> c-pallets/file-bank/src/lib.rs:43:81
   |
43 |         AccountIdConversion, BlockNumberProvider, CheckedAdd, CheckedDiv, CheckedMul, CheckedSub,
   |                                                                                       ^^^^^^^^^^

warning: unused import: `inherent::BlockT`
  --> c-pallets/file-bank/src/lib.rs:66:30
   |
66 |     use frame_support::{ensure, inherent::BlockT, traits::Get};
   |                                 ^^^^^^^^^^^^^^^^

warning: associated function is never used: `get_current_scheduler`
    --> c-pallets/file-bank/src/lib.rs:1212:6
     |
1212 |         fn get_current_scheduler() -> AccountOf<T> {
     |            ^^^^^^^^^^^^^^^^^^^^^
     |
     = note: `#[warn(dead_code)]` on by default

   Compiling pallet-segment-book v0.1.0 (/Users/davidhawig/source/evaluations/cess/cess/c-pallets/segment-book)
warning: `pallet-file-bank` (lib) generated 5 warnings
warning: unused import: `crypto::KeyTypeId`
  --> c-pallets/segment-book/src/lib.rs:69:15
   |
69 | use sp_core::{crypto::KeyTypeId, H256};
   |               ^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: `pallet-segment-book` (lib) generated 1 warning
warning: `pallet-segment-book` (lib test) generated 1 warning (1 duplicate)
```