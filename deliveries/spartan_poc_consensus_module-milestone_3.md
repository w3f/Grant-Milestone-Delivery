# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** Spartan POC Consensus Module: [Accepted W3F Grant App PR](https://github.com/w3f/Open-Grants-Program/pull/357) . 
* **Milestone Number:** Three

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | Apache 2.0 | Placed in each module |
| 0b. | Documentation | [Spartan Security Analysis](https://subspacelabs.notion.site/Milestone-3-Security-cbbada9b03934ef3a403226f0329922b) | Detailed security analysis (summarized in medium article) |
| 0c. | Testing Guide | [From Readme](https://github.com/subspace/substrate/tree/poc/bin/node-template-spartan#run-tests) | Includes [manual equivocation test](https://github.com/subspace/substrate/tree/poc/bin/node-template-spartan#test-equivocation-behavior) now |
| 0d. | Article | [Article](https://medium.com/@jeremiahwagstaff/spartan-v3-secure-proof-of-capacity-poc-consensus-on-substrate-a4c2f2c5ce84) | Draft medium article |
| 1. | Safety | NA | Emergent property, see medium article. |  
| 2. | Liveness | NA | Emergent property, see medium article. |
| 3. | Equivocation | See [Spartan MS3 w/equivocation PR](https://github.com/subspace/substrate/pull/7) | Uncommented and refactored BABE equivocation code, added farmer block list and validation |
| 4. | Sybil Resistance | See [commit for local challenge](https://github.com/subspace/substrate/commit/8e1f00be49eaabb14efccac2706b79aee9b1dd62) for client and this [PR](https://github.com/subspace/spartan-farmer/pull/6) for farmer | Added evaluation by local challenge and validation |
| 5. | Compression Attack | See [initial impl commit](https://github.com/subspace/substrate/commit/59ff6755e22ab98610dfbf913dd99ee075294e7e), and [final test commit](https://github.com/subspace/substrate/commit/59ff6755e22ab98610dfbf913dd99ee075294e7e) for client and see this [PR](https://github.com/subspace/spartan-farmer/pull/6) for farmer | Added eons, dynamic commitments, and re-commitment on the farmer. |
| 6. | Simulation Attack | Commit where we update to secure constant [here](https://github.com/subspace/substrate/commit/f46ff09cc3b6abdab3891b98fb049e2a139c7bcc) | Existing BABE code only needed to be paramaterized |
| 7. | Docker | [From Readme](https://github.com/subspace/substrate/tree/poc/bin/node-template-spartan#run-with-docker) | No change to instructions but images are updated. |

  
