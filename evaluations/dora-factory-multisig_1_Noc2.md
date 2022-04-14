# Evaluation

* **Acceptance:** In progress 
* **Application:** https://github.com/w3f/Grants-Program/blob/master/applications/dora-factory-multisig.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/DoraFactory/dorafactory-multisig/blob/main/LICENSE) | MIT License  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [documentation](https://github.com/DoraFactory/dorafactory-multisig/blob/main/docs/documentation.md) | Very basic docs, but according to the contract |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [test-guide](https://github.com/DoraFactory/dorafactory-multisig/blob/main/docs/test-guide.md) | Including images, works, but doesn't describe unit test |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/DoraFactory/dorafactory-multisig/blob/main/Dockerfile) |  Works |
| 1. | Multisig frontend MVP | <ul><li>[ ] </li></ul> | [dorafactory-multisig](https://github.com/DoraFactory/dorafactory-multisig/) |  If I try to create a transaction it just forwards me to https://polkadot.js.org/apps! -> 2) Initiate, sign, and confirm transactions **Update 12.04.22:** Initiate and sign transaction works now, but it doesn't let you confirm the transaction via the UI |
| 2. | Test | <ul><li>[x] </li></ul> | [tests](https://github.com/DoraFactory/dorafactory-multisig/tree/main/src/tests) | Only a single test, in general it would be nice to have more test **Update 12.04.22:** Added additional tests, all passed |

## General Notes

**Update 12.04.22:**
- They fixed the previous issues (except snyk), but I'm unable to confirm the transaction via the UI 
- The testing guide needs to be updated: https://github.com/DoraFactory/dorafactory-multisig/blob/main/docs/test-guide.md 

**Initial comments:**
- The font family looked a little bit strange on my Mac with Brave. 
- I wasn’t able to click on cancel during step 2 or back during step 3 
- Doesn’t let you add additional wallets via the extension (+ Add another owner) 

**Snyk test:**
```
Tested 138 dependencies for known issues, found 1 issue, 3 vulnerable paths.


Issues with no direct upgrade or patch:
  ✗ Prototype Pollution [High Severity][https://snyk.io/vuln/SNYK-JS-LODASHSET-1320032] in lodash.set@4.3.2
    introduced by @polkadot/extension-dapp@0.42.9 > @polkadot/extension-inject@0.42.9 > @polkadot/rpc-provider@7.14.3 > nock@13.2.4 > lodash.set@4.3.2 and 2 other path(s)
  No upgrade or patch available
```