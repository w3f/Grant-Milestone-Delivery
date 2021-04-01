# Evaluation

* **Status:** Accepted
* **PR Link:** [https://github.com/w3f/Open-Grants-Program/pull/138](https://github.com/w3f/Open-Grants-Program/pull/138)
* **Milestone:** 2
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | Apache License 2.0 | <ul><li>[x] </li></ul> | [License move tools](https://github.com/dfinance/move-tools/blob/master/LICENSE) [License pallet](https://github.com/dfinance/sp-move/blob/master/LICENSE) [License Move VM](https://github.com/dfinance/sp-move-vm/blob/master/LICENSE) [License Move stdlib](https://github.com/pontem-network/move-stdlib/blob/master/LICENSE) | - |
| 0. | WriteSets processing      | <ul><li>[x] </li></ul> | [Storage adapter](https://github.com/pontem-network/sp-move/blob/master/pallets/sp-mvm/src/storage.rs) | Implemented in M1 |
| 1. | Events processing         | <ul><li>[x] </li></ul> | [Events implementation](https://github.com/pontem-network/sp-move/blob/master/pallets/sp-mvm/src/event.rs) [Example](https://github.com/pontem-network/sp-move/blob/master/pallets/sp-mvm/src/lib.rs#L140)| | 
| 2. | Publish Transaction       | <ul><li>[x] </li></ul> | [Publish module implementation](https://github.com/pontem-network/sp-move/blob/master/pallets/sp-mvm/src/lib.rs#L119) | |
| 3. | Execute Arguments Parsing | <ul><li>[x] </li></ul> | [Transaction struct](https://github.com/pontem-network/sp-move-vm/blob/master/mvm/src/types.rs#L283) | |
| 4. | Standard Library          | <ul><li>[x] </li></ul> | [move std lib](https://github.com/pontem-network/move-stdlib) | |
| 5. | Execute Transaction       | <ul><li>[x] </li></ul> | [Execute method](https://github.com/pontem-network/sp-move/blob/master/pallets/sp-mvm/src/lib.rs#L78) | |
| 6. | Unit-tests                | <ul><li>[x] </li></ul> | [test](https://github.com/pontem-network/sp-move/tree/master/pallets/sp-mvm/tests) | | 
| 7. | Resource viewer           | <ul><li>[x] </li></ul> | [Resource viewer](https://github.com/pontem-network/move-tools/tree/master/resource-viewer) | |

## General Notes

The code was, in general, working as advertised.
There were a number of cosmetic improvements that were suggested to the team: 
- tooling improvement to `dove` (being worked on)
- proper attribution in move std lib (fixed)
- tooling compliation errors for resource-viewer ([fixed instructions](https://github.com/pontem-network/move-tools/commit/3af57b46f897ab8fb4430f00442fba7f47be440b))
- removing the binary test files & instead compiling them during testing ([PR created by mmagician and merged](https://github.com/pontem-network/sp-move/pull/24))
- providing more detailed instructions for std module publishing ([fixed promplty](https://github.com/pontem-network/sp-move/commit/a108ffd92cc4a51d6cc5addc1602440f50e7a273))

Overall, the experience of working with the dev team was very positive.
Code quality seems good and tests cover the main features (not exhaustive yet, but the target was 60% coverage for this milestone)

