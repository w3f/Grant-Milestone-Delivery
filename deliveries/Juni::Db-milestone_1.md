# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/JuniDB.md 
* **Milestone Number:** 1

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/uddugteam/substrate/blob/master/LICENSE-GPL3 | ... | 
| 0b. | Documentation | https://uddugteam.github.io/JuniDB-manual | ... | 
| 0c. | Testing Guide  | https://docs.google.com/document/d/1gTuJVTt13hMM_N9XlDCNTU0ykWpVH_fC336Ea0UznLQ/edit?usp=sharing | ... | 
| 0d. | Article | https://docs.google.com/document/d/1k6DhCfSs7rmsSV-WB7o8EkvqDFz5Bvn12QYrjjW7R2w/edit?usp=sharing | on approval grantsPR@web3.foundation| ... | 
| 1. | Substrate pallet | https://github.com/uddugteam/substrate/tree/Juni/key-value-v0.3.0 | In the application, we mistakenly called current clause as "Substrate ML pallet". But here its about the  basic database layout implementation with key-value data storage. | 
| 2. | Web application | https://github.com/uddugteam/juni-ui | ...| 
| 3. | Docker image | https://hub.docker.com/repository/docker/andskur/juni-db | ...| 

## Additional Information

During the development process, we have understood that @mmagician caution was right and it’s not an easy part of work to update offchain::ipfs to the latest substrate version. This was the cause of our delay in the delivery of the first milestone. We have implemented the first version of JuniDB for Substrate 2.x and want to upgrade it (with whole offchain:ipfs) in our new milestone which one we want to do as our second milestone and prepare new PR for the approval.
