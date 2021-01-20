# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/138
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | Apache License 2.0 | <ul><li>[x] </li></ul> | [License move tools](https://github.com/dfinance/move-tools/blob/master/LICENSE) [License pallet](https://github.com/dfinance/sp-move/blob/master/LICENSE) [License Move VM](https://github.com/dfinance/sp-move-vm/blob/master/LICENSE) | - |
| 0-2 | Crates work | <ul><li>[x] </li></ul> | [Move VM](https://github.com/dfinance/sp-move-vm/commits/master) [Petgraph](https://github.com/dfinance/petgraph/commits/master) [Indexmap](https://github.com/RIg410/indexmap/commits/master) | The main Diem repo was forked and stripped down & is at a level where it will be difficult to keep up-to-date with the upstream. See the [discussion](https://github.com/w3f/Grant-Milestone-Delivery/pull/72#issuecomment-759513431) |
| 3. | Move Pallet | <ul><li>[x] </li></ul> | https://github.com/dfinance/sp-move/tree/master/pallets/sp-mvm |  |
| 4. | Addresses support | <ul><li>[x] </li></ul> | https://github.com/dfinance/move-tools |
| 5. | Compiler | <ul><li>[x] </li></ul> | [dove](https://github.com/dfinance/move-tools/tree/master/dove) |
| 6. | Unit-tests | <ul><li>[x] </li></ul> | [Move Pallet Tests](https://github.com/dfinance/sp-move/tree/master/pallets/sp-mvm/tests) [compiler tests](https://github.com/dfinance/move-tools/blob/55c742795d7b3f240817712c2d66de17db1f5b3a/lang/src/compiler/ss58.rs#L65) | Simple tests to check ability to call the publish & script execution + ss58 tests |
| 7. | Docker | <ul><li>[x] </li></ul> | https://github.com/dfinance/sp-move/blob/master/docker-compose.yml | 
| 8. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/dfinance/sp-move/blob/master/README.md) | Steps outlined clearly |


## General Notes

This milestone is a proof of concept for the ability to write Move smart contracts, compile them & upload (via an extrinsic exposed in the provided pallet) to the module's on chain storage. It's easy to verify that the contract gets stored & that the script indeed writes a correct u64 value by following the tutorial steps & in between making some queries to the pallet's VMStorage. At the moment, there's no easy way to query the module storage for a specific substrate address. Tooling for reading/translation of these resources was promised for the future milestone.

Initially couldn't compile due to dependancy issues, but it was fixed swiftly.

Minor clippy warnings found.

Good communication with the team.