# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** Spartan POC Consensus Module: [Accepted W3F Grant App PR](https://github.com/w3f/Open-Grants-Program/pull/357) . 
* **Milestone Number:** One

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | ? |
| 0b. | Documentation | https://github.com/subspace/substrate/tree/poc/bin/node-template-spartan#readme | Each module also has its own docs |
| 0c. | Testing Guide | https://github.com/subspace/substrate/tree/poc/bin/node-template-spartan#run-tests | Spartan, PoC, and Farmer all have tests |
| 0d. | Article | https://medium.com/@jeremiahwagstaff/bringing-poc-consensus-to-substrate-d49d49a912bd | Draft medium article |
| 1. | Design Document | https://github.com/subspace/substrate/blob/poc/frame/spartan/design.md | |
| 2. | `sp_consensus_PoC` | https://github.com/subspace/substrate/tree/poc/primitives/consensus/poc |  |
| 3. | `sc_consensus_PoC` | https://github.com/subspace/substrate/tree/poc/client/consensus/poc |  |
| 4. | `sp_consensus_spartan` | https://github.com/subspace/substrate/tree/poc/primitives/consensus/spartan | Wrapper for [`spartan-codec`](https://github.com/subspace/spartan-codec)  | 
| 5. | `sc_consensus_spartan` | None | This is basicaly the functionality provided by `spartan-farmer` and proved unessecary. |
| 6. | `pallet_spartan` | https://github.com/subspace/substrate/tree/poc/frame/spartan | |
| 7. | `spartan_farmer` | https://github.com/subspace/spartan-farmer |  |
| 8. | `spartan_client` | https://github.com/subspace/substrate/tree/poc/bin/node-template-spartan |  | 
| 9. | Docker | https://github.com/subspace/substrate/tree/poc/bin/node-template-spartan#run-with-docker | Best for Linux |

  
