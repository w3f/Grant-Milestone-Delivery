# Evaluation

- **Status:** Accepted
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/357
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [`node-template-spartan`](https://github.com/subspace/substrate/blob/w3f-spartan-ms-1/bin/node-template-spartan/LICENSE), [`spartan-farmer`](https://github.com/subspace/spartan-farmer/LICENSE) (to be added) | Apache 2.0 or retained from adapted work
| 0b. | Documentation | <ul><li>[x] </li></ul> | [`node-template-spartan` README](https://github.com/subspace/substrate/blob/w3f-spartan-ms-1/bin/node-template-spartan), [`spartan-farmer` README](https://github.com/subspace/spartan-farmer/tree/w3f-spartan-ms-1.2) | Main README adapted and previous feedback integrated. Excellent external documentation, inline documentation improved |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Instructions](https://github.com/subspace/substrate/tree/w3f-spartan-ms-1/bin/node-template-spartan#run-tests) | Test coverage for `spartan-farmer` could be improved, tests in other deliverables adapted from exisiting ones in reused modules
| 0d. | Article | <ul><li>[x] </li></ul> | [Medium article](https://medium.com/@jeremiahwagstaff/bringing-poc-consensus-to-substrate-d49d49a912bd) |  Coordinated with PR |
| 1. | Design Document | <ul><li>[x] </li></ul> | [Link](https://github.com/subspace/substrate/blob/poc/frame/spartan/design.md#spartan-design-document) | Excellent write-up |
| 2. | `sp_consensus_PoC` | <ul><li>[x] </li></ul> | [Link](https://github.com/subspace/substrate/tree/w3f-spartan-ms-1/primitives/consensus/poc) | Adapted from [`sp-consensus-babe`](https://github.com/paritytech/substrate/tree/master/primitives/consensus/babe) |
| 3. | `sc_consensus_PoC` | <ul><li>[x] </li></ul> | [Link](https://github.com/subspace/substrate/tree/w3f-spartan-ms-1/client/consensus/poc) | Adapted from [`sc-consensus-babe`](https://github.com/paritytech/substrate/tree/master/client/consensus/babe) |
| 4. | `sp_consensus_spartan` | <ul><li>[x] </li></ul> | [Link](https://github.com/subspace/substrate/tree/w3f-spartan-ms-1/primitives/consensus/spartan) | Adapted from [`sp-consensus-vrf`](https://github.com/paritytech/substrate/tree/master/primitives/consensus/vrf) |
| 5. | `sc_consensus_spartan` | <ul><li>[x] </li></ul> | None | Integrated within `spartan-farmer` |
| 6. | `pallet_spartan` | <ul><li>[x] </li></ul> | [Link](https://github.com/subspace/substrate/tree/w3f-spartan-ms-1/frame/spartan) | Adapted from [`pallet-babe`](https://github.com/paritytech/substrate/tree/master/primitives/consensus/babe) |
| 7. | `spartan_farmer` | <ul><li>[x] </li></ul> | [Link](https://github.com/subspace/spartan-farmer/tree/w3f-spartan-ms-1.2) (separate repository) | |
| 8. | `spartan_client` | <ul><li>[x] </li></ul> | [Link](https://github.com/subspace/substrate/tree/poc/bin/node-template-spartan) | Adapted from[`node-template`](https://github.com/paritytech/substrate/tree/master/bin/node-template) |
| 9. | Docker | <ul><li>[X] </li></ul> | [Instructions](https://github.com/subspace/substrate/tree/poc/bin/node-template-spartan#run-tests) | Pre-built images added in reponse to feedback |


## General Notes

Team integrated a large amount of feedback provided during the two evaluations for this milestone. Rather than restating in this document the changes that were made, I advise to read the discussion in the delivery PR https://github.com/w3f/Grant-Milestone-Delivery/pull/165

The superb documentation of the project in the links listed above is worth mentioning, as well as the good communication and seeming ease to navigate the ecosystem of the team.

As mentioned in the previous evaluation, the code implemented for the Spartan client and consensus algorithm is to a large extent reused code from BABE or the Substrate codebase. This is understandable for a first milestone and I imagine still represented a significant amount of work. These deliverables should ideally be moved to their own repository instead of the current Substrate fork in a later milestone.

As also previously mentioned, the code for the farmer could do with some refactoring (little inline documentation, deeply nested code and not-so-high test coverage), which should come natural as the project progresses.
