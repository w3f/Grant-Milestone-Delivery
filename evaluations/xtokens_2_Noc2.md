# Evaluation

* **Acceptance:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/316
* **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache License 2.0](https://github.com/open-web3-stack/open-runtime-module-library/blob/master/LICENSE) | Correct license  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [wiki](https://github.com/open-web3-stack/open-runtime-module-library/wiki/xtokens) | More or less the same as the article in their wiki (see below), which is fine |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [readme](https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xtokens) | Only a guide for manual integration tests. Doesn't mention unit tests |
| 1. | Substrate module: xtokens | <ul><li>[x] </li></ul> | [xtokens](https://github.com/open-web3-stack/open-runtime-module-library/tree/57af18a0a035c919e20eeed02bebba5dbd15114a/xtokens) | Initially a small error because of external dependencies, multi Location, multi asset |
| 2. | Substrate module: xcm-support | <ul><li>[x] </li></ul> | [xcm-support](https://github.com/open-web3-stack/open-runtime-module-library/tree/57af18a0a035c919e20eeed02bebba5dbd15114a/xcm-support) | multi location, conversion implemented, unit tests work |
| 3. | Article/Tutorial | <ul><li>[x] </li></ul> | [acala wiki article](https://wiki.acala.network/build/development-guide/composable-chains) | Looks good |


## General Notes

Initially I had a small error because of external dependencies, but other than that everything looks good. 

Be aware: The acceptance of the milestone doesn’t mean that Web3 specifically says this is how the token standard should be implemented. Everyone is more than welcome to participate in the PSP process: https://github.com/w3f/PSPs 

