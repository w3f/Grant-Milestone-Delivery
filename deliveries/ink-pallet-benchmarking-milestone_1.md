# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-pallet-benchmarking.md 
* **Milestone Number:** 1

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License	| Unlicense
| 0b. |	Documentation |  | Inline documentation has been provided and the same has been explained in great detail in the README as well. |
| 0c. | Testing Guide |  | The Ink! smart contract comes with tests and as mentioned, we've reused and extended the already tested frame-benchmarking-cli. |
| 0e. | Article | https://talenticaall-my.sharepoint.com/:w:/g/personal/nikhil_desai_talentica_com/EcPSsxTWE5dBnOZS81uspkwBIIHoGI1RvAs6E0ETBsGiDg?e=NEtqmT | Since Milestone 1 only targets two implementation approaches, we have covered only those and will extend it to include the rest at the end of Milestone 2. |
| 1. | Performance metrics |  | As already mentioned in the grant application, we are using weight as a metric to analyse performance. | 
| 2. | Pallet: Basic Read & Write | https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/tree/contracts-benchmarking/pallets/template | Developed a sample pallet with read and write functionality. |
| 3. | Ink Smart Contract: Basic Read & Write | https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/tree/contracts-benchmarking/test | Developed a sample Ink! smartcontract with read and write functionality implemented for the same basic types as the aforementioned pallet. |
| 4. | Library: Benchmarking | https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/node/src/benchmarking.rs | The frame-benchmarking-cli has been extended to support custom pallets and Ink! smartcontracts, and this will be further refined by Milestone 2. |

**Additional Information**
The code is on the branch `contracts-benchmarking`. All the links to deliverables point to artifacts on that branch.
The README explains in detail how to benchmark custom pallets and Ink! smartcontracts.
Both the implementations cover a single i64 basic type and String(vec<u8>) compound type for now, as opoosed to all variants of uint, int, bool and char as we believe the weights will fall within the same range .
An article that presents a comparison of benchmark results as calculated on a t2.medium EC2 instance has also been delivered.
We aim to work on and improve the CLI in Milestone-2.
