# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/138
* **Milestone:** 3
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | Apache License 2.0 | <ul><li>[x] </li></ul> | [License move tools](https://github.com/dfinance/move-tools/blob/master/LICENSE) [License pallet](https://github.com/dfinance/sp-move/blob/master/LICENSE) [License Move VM](https://github.com/dfinance/sp-move-vm/blob/master/LICENSE) | - |
| 0. | Gas compatibility             | <ul><li>[x] </li></ul> | [example of conversion](https://github.com/pontem-network/sp-move/blob/master/pallets/sp-mvm/src/lib.rs#L125), [conversion logic](https://github.com/pontem-network/sp-move/blob/master/runtime/src/lib.rs#L284) |
| 1. | Non-VM balances compatibility | <ul><li>[x] </li></ul> | [commit](https://github.com/pontem-network/sp-move/blob/master/runtime/src/lib.rs#L284) |
| 2. | REST API                      | <ul><li>[x] </li></ul> | [polkadot-js CLI tools CLI](https://github.com/pontem-network/tools/commits/master/packages/api-cli) | 
| 3. | RPC                           | <ul><li>[x] </li></ul> | [rpc for gas estimations](https://github.com/pontem-network/sp-move/tree/master/pallets/sp-mvm/rpc) |
| 4. | Documentation                 | <ul><li>[x] </li></ul> | [extensive docs](https://docs.pontem.network/) |
| 5. | Deployment of prod env        | <ul><li>[x] </li></ul> | | `wss://testnet.pontem.network/wss`
| 6. | Toolset adoption              | <ul><li>[x] </li></ul> | [move-tools](https://github.com/pontem-network/move-tools) | Continuously being worked on throughout all milestones
| 7. | Unit-tests                    | <ul><li>[x] </li></ul> | | Unit tests for pallets, as well as benchmarks, are present

## General Notes

Overall good delivery with an extensive documentation, which is definitely needed for a project of this complexity.

Quick fix provided by the team for a [dependancy issue](https://github.com/pontem-network/tools/commit/1ea5ee56ffd65c796b78ab8001a1e33209c85e05).

Units for the native PONT token interactions were not very intuituve. This was pointed out and addressed in a [doc update](https://github.com/pontem-network/docs/commit/f536ee194944465909abef1808bfbaa409823599).

Perhaps it would be nice to see an intergration test that automates the whole testing process (manually it can be quite tedious), e.g.:
- deploy all std modules
- compile and publish some user modules
- compile and execute some scripts to interact with the published modules (incl. PONT coin)
- run some RPC queries

