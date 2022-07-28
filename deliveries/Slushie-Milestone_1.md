# Milestone Delivery :mailbox:
> :zap: Only the GitHub account that submitted the application is allowed to submit milestones.
>
> Don’t remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.
**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Slushie Mixer.md
* **Milestone Number:** 1
**Context** (optional)
This milestone lays the first brick in our tornado.cash-like mixer implementation using ink!.

**Name of the grant project:** Slushie

**Link to the open source code:** https://github.com/4IRE-Labs/Slushie/tree/main

**License:** MPL-2.0

**Documentation:** https://github.com/4IRE-Labs/Slushie/blob/main/README.md 

**Deliverables:**
| Number | Deliverable                                                         | Link                                           | Notes                                             |
| ------ | ------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------- |
| 0a.    | License (MPL-2.0)                                                   | https://github.com/4IRE-Labs/Slushie/blob/main/LICENSE |                                                   |
| 0b.    | Documentation                                                       | https://github.com/4IRE-Labs/Slushie/blob/main/README.md |                                                   |
| 0c.    | Tests                                                               | https://github.com/4IRE-Labs/Slushie/tree/main |                                                   |
| 1.     | ink! contract with MerkleTree storage                               | https://github.com/4IRE-Labs/Slushie/tree/main |                                                   |
| 2.     | Change hash type of the Merkle Tree to some Poseidon implementation | https://github.com/4IRE-Labs/Slushie/tree/main | We used `poseidon252`  as the hash type of choice |
| 3.     | Withdraw function signature                                         | https://github.com/4IRE-Labs/Slushie/tree/main | Also added checks (nullifier & transferred_value)   |
| 4.     | Add events                                                          | https://github.com/4IRE-Labs/Slushie/tree/main |                                                   |
**Additional Information**
> Any further comments on the milestone that you would like to share with us.
