# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/238
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | Apache License 2.0 | <ul><li>[x] </li></ul> | https://github.com/trustfractal/ink-upgrade-template/blob/main/LICENSE | |
| 0b. | Documentation | <ul><li>[x] </li></ul><ul><li>[x] </li></ul> | [Repo README](https://github.com/trustfractal/ink-upgrade-template/blob/main/README.md) | |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Building & testing section of README](https://github.com/trustfractal/ink-upgrade-template#building-this-template) | |
| 0d. | Article/Tutorial | <ul><li>[x] </li></ul> | [explanation in the README](https://github.com/trustfractal/ink-upgrade-template#tutorial) | |
| 1. | An Ink! based upgradeable Smart Contract structure | <ul><li>[x] </li></ul> | [Proxy contract](https://github.com/trustfractal/ink-upgrade-template/tree/main/proxy), [V1 Contract](https://github.com/trustfractal/ink-upgrade-template/tree/main/v1), [V2 contract](https://github.com/trustfractal/ink-upgrade-template/tree/main/v2) | |

## General Notes

Initially I could deploy all the contracts, but couldn't interact with the proxy due to errors.
To make sure the process was reproducible, I created a [PR](https://github.com/trustfractal/ink-upgrade-template/pull/1) to automate the deployment & proxy interactions (still failing). 
@hugopeixoto was able to fix the issue and make the testing of this milestone fully automatic, as well as clean up the ts app I created (see the commits in the PR mentioned). Well done!
Now you can run through the whole process with `make all`

