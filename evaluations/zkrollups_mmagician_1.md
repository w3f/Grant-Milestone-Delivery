# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/92
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 1. | Deploy ZK Rollup Contract To Substrate | <ul><li>[x] </li></ul> | https://github.com/PlasmNetwork/ZKRollups | Mostly re-using zksync' infrastructure |
| 2. | Integration Test On Substrate | <ul><li>[x] </li></ul> | https://github.com/PlasmNetwork/ZKRollups/blob/master/ts-tests/tests/test-integration.ts | Mostly re-using zksync's tests |
| 3. | Documentation | <ul><li>[x] </li></ul> | https://github.com/PlasmNetwork/ZKRollups/blob/master/README.md | - |

## General Notes

While there were various rounds of back-and-forth due to setup not working, the team fixed all outstanding issues.

Initially the repo structure was non-optimal, with code duplication and more importantly, **lacking proper attributions** - though again the team was responsive and adjusted the strcuture, placing the parts under question in a submodule.

Overall, there was little work needed in the source code itself (fork of [zksync](https://github.com/ArtreeTechnologies/zksync]) in order to make the smart contracts run on substrate. The core services (operator, prover) utilized are re-used from matterlabs' setup. Future milestones probably don't make much sense in the format that they were originally proposed, seeing that the entire setup works well with zksync's setup.

