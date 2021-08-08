# Evaluation

- **Status:** In Progress
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/357
* **Milestone:** 3
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [spartan-farmer](https://github.com/subspace/spartan-farmer/blob/9450351a78d59007f2b647116852f7ec4e9a25f1/LICENSE-APACHE), [modules](https://github.com/subspace/substrate/tree/poc/frame) | Correct License  |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [Spartan Security Analysis](https://subspacelabs.notion.site/Milestone-3-Security-cbbada9b03934ef3a403226f0329922b) | No inline documentation regarding the attacks, only notion document |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Readme](https://github.com/subspace/substrate/tree/poc/bin/node-template-spartan#run-tests) | Works and includes manual equivocation test, I had to use cargo +nightly test in order to test [spartan](https://github.com/subspace/substrate/tree/poc/frame/spartan)  |
| 0d. | Article | <ul><li>[x] </li></ul> | [Article](https://medium.com/@jeremiahwagstaff/spartan-v3-secure-proof-of-capacity-poc-consensus-on-substrate-a4c2f2c5ce84) | Looks good |
| 1. | Safety test | <ul><li>[x] </li></ul> | [issuecomment](https://github.com/w3f/Grant-Milestone-Delivery/pull/245#issuecomment-893721062) | Subspace inherits the safety  properties of Ouroboros Praos |
| 2. | Liveness test | <ul><li>[x] </li></ul> | [issuecomment](https://github.com/w3f/Grant-Milestone-Delivery/pull/245#issuecomment-893721062) | Subspace inherits the liveness properties of Ouroboros Praos |
| 3. | Equivocation test | <ul><li>[x] </li></ul> | [Spartan MS3 w/equivocation PR](https://github.com/subspace/substrate/pull/7) | Ban farmer permanently once equivocation proof is included  |
| 4. | Sybil resistance test | <ul><li>[x] </li></ul> | [commit for local challenge](https://github.com/subspace/substrate/commit/8e1f00be49eaabb14efccac2706b79aee9b1dd62) for client and this [PR](https://github.com/subspace/spartan-farmer/pull/6) for farmer | Looks good |
| 5. | Compression attack test | <ul><li>[x] </li></ul> | [initial impl commit](https://github.com/subspace/substrate/commit/59ff6755e22ab98610dfbf913dd99ee075294e7e), and [final test commit](https://github.com/subspace/substrate/commit/59ff6755e22ab98610dfbf913dd99ee075294e7e) for client and see this [PR](https://github.com/subspace/spartan-farmer/pull/6) for farmer | Looks good | 
| 6. | Simulation attack test | <ul><li>[x] </li></ul> | [update to secure constant](https://github.com/subspace/substrate/commit/f46ff09cc3b6abdab3891b98fb049e2a139c7bcc) | Looks good |
| 7. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/subspace/substrate/blob/poc/bin/node-template-spartan/Dockerfile) | Works. Including a nice cli image of a sloth |

## General Notes

