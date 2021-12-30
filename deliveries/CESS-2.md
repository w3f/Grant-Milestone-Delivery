# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/CESS.md. 
* **PR Link:** https://github.com/w3f/Grants-Program/pull/595
* **Milestone Number:** 2

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
>
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable                     | Link                                                         | Notes                                                        |
| ------ | ------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 0a.    | License                         | [Apache 2.0](https://github.com/CESSProject/cess/blob/main/LICENSE) |                                                              |
| 0b.    | Documentation                   | [https://github.com/CESSProject/cess/tree/v0.1.1#storage-mining](https://github.com/CESSProject/cess/tree/v0.1.1#storage-mining) | Basic tutorial that explains how a user can run substrate to join CESS network and support storage mining service. |
| 0c.    | Testing Guide                   | [https://github.com/CESSProject/cess/tree/v0.1.2#run-tests](https://github.com/CESSProject/cess/tree/v0.1.1#run-tests) | Core functions in pallets are covered by unit tests to ensure functionality and robustness. Tests can be run in the docker container also. |
| 0d.    | Article/Tutorial                | [https://github.com/CESSProject/cess/tree/v0.1.1#module-documentation](https://github.com/CESSProject/cess/tree/v0.1.1#module-documentation) | A tutorial that explains the work done as part of the grant. |
| 1a.    | Stacked DRG Library             | [https://github.com/CESSProject/cess-proving-system/tree/main/cess-sp-porep](https://github.com/CESSProject/cess-proving-system/tree/main/cess-sp-porep) | Storage mining implements the Proof-of-Replication which uses Stacked DRG (SDR). SDR uses Depth Robust Graph to ensure the sector has been encoded with a slow and non-parallelizable sequential process. |
| 1b.    | zk-SNARK proofs                 | [https://github.com/CESSProject/cess-proving-system/tree/main/cess-sp-porep#bellman](https://github.com/CESSProject/cess-proving-system/tree/main/cess-sp-porep#bellman) | SDR verification algorithm is built using an arithmetic circuit and uses SNARKs to prove that SDR proof was evaluated correctly.                           |
| 2.     | CESS Contracts                  | [https://github.com/CESSProject/cess/tree/v0.1.1/c-pallets/segment-book](https://github.com/CESSProject/cess/tree/v0.1.1/c-pallets/segment-book) | In the development process, we found that developing a pallet to implement the storage proof function is more suitable than developing contracts. Therefore, we developed the segment book.                  |
| 3.     | Miner Client                    | [https://github.com/CESSProject/storage-mining-tool](https://github.com/CESSProject/storage-mining-tool) | Interactive with CESS network to implement storage mining services for miners.                  |
| 4.     | Docker                          | [https://github.com/CESSProject/cess/tree/v0.1.1#run-in-docker](https://github.com/CESSProject/cess/tree/v0.1.1#run-in-docker) |                                                              |

**Additional Information:** 

1. We changed the submission account because the previous account “CumulusSystem” has been changed to an organization account. In order to prove our identity, you can find our accounts under the organization of the original account. If you need us to provide more evidence, please don't hesitate to bring it up.
2. Due to the team's full participation in Polkadot Hackathon: APAC Edition (proud that we got the first place), this submission was later than expected. Thus, we hope you can understand. In addition, the remaining milestone 3 has also been developed and will be submitted soon.
