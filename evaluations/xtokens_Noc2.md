# Evaluation

* **Acceptance:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/316
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache License 2.0](https://github.com/open-web3-stack/open-runtime-module-library/blob/master/LICENSE) | Correct license  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [readme](https://github.com/open-web3-stack/open-runtime-module-library/blob/68f3081876ea89904ca4b41d30ef3e532e01b288/xtokens/README.md), [inline docs](https://github.com/open-web3-stack/open-runtime-module-library/blob/68f3081876ea89904ca4b41d30ef3e532e01b288/xtokens/src/lib.rs), [inline docs 2](https://github.com/open-web3-stack/open-runtime-module-library/blob/master/xcm-support/src/lib.rs) | Provided |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Testing guide](https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xtokens#notes), [unit tests xcm-support](https://github.com/open-web3-stack/open-runtime-module-library/blob/master/xcm-support/src/tests.rs) | xtokens currently has no unit test and only manual integration tests, xcm-support contains some unit tests, [XCM simulator requested](https://github.com/paritytech/polkadot/issues/2544). Some basic unit tests could already be integrated for xtokens at this stage, but it’s not necessary for the acceptance of the milestone |
| 1. | Substrate module: xtokens | <ul><li>[x] </li></ul> | [xtokens](https://github.com/open-web3-stack/open-runtime-module-library/blob/master/xtokens/src/lib.rs) | work on the latest Rococo testnet |
| 2. | Substrate module: xcm-support | <ul><li>[x] </li></ul> | [xcm-support](https://github.com/open-web3-stack/open-runtime-module-library/blob/master/xcm-support/src/lib.rs) | work on the latest Rococo testnet |
| 3. | Support parachain installing xtoken | <ul><li>[x] </li></ul> | e.g. [XCM between Plasm and Acala in Rococo](https://www.youtube.com/watch?v=-1kOjLBScbM), [list of composable projects](ComposableWith) | Acala is actively working together with different teams in the ecosystem |
| 4. | Article/Tutorial | <ul><li>[x] </li></ul> | [Wiki](https://github.com/open-web3-stack/open-runtime-module-library/wiki/xtokens) | Contains an integration guide |

## General Notes

This milestone successfully implemented a xtoken PoC. The implementation looks good and is already used by multiple projects. 

For the clarification: The acceptance of the milestone doesn’t mean that Web3 specifically says this is how the token standard should be implemented. Everyone is more than welcome to participate in the PSP process: https://github.com/w3f/PSPs 
