# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/skyekiwi-protocol.md
* **Milestone Number:** 1

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/skyekiwi/skyekiwi-network | GPLv3.0 |
| 0b. | Documentation | https://github.com/skyekiwi/skyekiwi-network | see README |
| 0c.  | Testing Guide | https://github.com/skyekiwi/skyekiwi-network | see README |
| 1.  | `pallet-secrets`    | https://github.com/skyekiwi/skyekiwi-network/tree/master/crates/skw-blockchain-pallets/pallet-secrets | see README on how to run test with this pallet    |
| 2.  | Rust Implementation | https://github.com/skyekiwi/skyekiwi-network/tree/master/enclave & https://github.com/skyekiwi/skyekiwi-network/tree/master/crates/skw-sgx-protocol | see README on how to run test within the enclave. |

For evaluators: commit as we are submitting this delivery is https://github.com/skyekiwi/skyekiwi-network/commit/d8e84553f924be1ddd5497e252cbea108fb0443a and all tests has passed. 

Running the SGX Enclave Docker could potentially be strange. As we have described in the README, the simulation docker fails if your CPU platfrom is not Intel (i.e. AMD based computers or cloud VMs, or Apple M1 Chips & other ARM based chips). 
