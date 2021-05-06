# Evaluation

* **Acceptance:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/119
* **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [License](https://github.com/w3f-community/bodhi.js/blob/master/LICENSE) |  Correct license  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Readme](https://github.com/AcalaNetwork/bodhi.js/blob/master/README.md) |  Looks good |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [guide to use evm](https://wiki.acala.network/build/development-guide/smart-contracts/get-started-evm) | Doesn’t say how to run the unit tests but otherwise according to contract  |
| 1. | SDK - bodhi.js: deployment tool | <ul><li>[x] </li></ul> | [bodhi.js](https://github.com/AcalaNetwork/bodhi.js) |  ethereum-waffle |  
| 2. | SDK - bodhi.js: Address mapping | <ul><li>[x] </li></ul> | [bodhi.js](https://github.com/AcalaNetwork/bodhi.js) |  bodhi.js is supporting all the required Ethereum RPC |  
| 3. | Substrate pallet: module-evm-accounts | <ul><li>[x] </li></ul> | [evm-accounts](https://github.com/AcalaNetwork/Acala/blob/master/modules/evm-accounts/src/lib.rs) |  two-way mapping between Substrate accounts and EVM accounts   |
| 4. | Substrate pallet: modules-evm |  <ul><li>[x] </li></ul> | [gas to weight](https://github.com/AcalaNetwork/Acala/blob/0ea2b55e71a722ae98d197d28d00918ce80ae98c/modules/evm/src/lib.rs#L161) | Correct, gas replaced with weights  | 
| 5. | Integration | <ul><li>[x] </li></ul> | [Examples](https://github.com/AcalaNetwork/evm-examples), [Demo](https://www.crowdcast.io/e/acala-ethdenver-2021) |  A lot of examples. Not fully automated, but that’s fine |
| 6. | Article/Tutorial | <ul><li>[x] </li></ul> | [wiki](https://wiki.acala.network/learn/acala-evm/why-acala-evm), [scheduler-tutorial](https://wiki.acala.network/build/development-guide/smart-contracts/advanced/use-on-chain-scheduler/scheduler-tutorial) |  Wiki and tutorial looks good, I had some minor issues with some of the tutorials |

## General Notes

Overall a very interesting project (e.g. single wallet) and they clearly put a lot of energy into it (e.g. EVM Playground). Tons of documentation and tests. I had some minor issues with some of the tutorials. Everything else looks very good. 
