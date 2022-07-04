# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/fair_squares.md
* **Milestone Number:** 1

**Context** 
We have delivered the roles and housing fund pallets, that are parts of the fair squares runtime/parachain.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License: Apache 2.0 |[Link](https://github.com/Fair-Squares/fair-squares/blob/main/LICENSE)| | 
| 0b.  | Documentation & tutorial |[Link](https://docs.google.com/document/d/186XCQliGloijWBnk4N5HivKt9TyXG3PUM1I6C1994CQ/edit#heading=h.wpxzjrnoi4x)| The inline documentation is the lib.rs files of [roles-pallet](https://github.com/Fair-Squares/fair-squares/blob/main/pallets/roles/src/lib.rs) and the [housing-fund-pallet](https://github.com/Fair-Squares/fair-squares/blob/main/pallets/housing_fund/src/lib.rs). The basic tutorial is in the g-doc it will be published once the milestone is approved| 
| 0c. | Testing Guide |[Link](https://github.com/Fair-Squares/fair-squares#run-all-tests) || 
| 0d. | Dockerfile |[Link](https://github.com/Fair-Squares/fair-squares/blob/main/Dockerfile) | | 
| 0e.  | Article |[Link](https://docs.google.com/document/d/1YT5tLNmcCsrmn4_2W9UHZb1QgTiRo0inVWUUvr8sr5M/edit?usp=sharing)| waiting for w3f feedback before publishing| 
| 1.  | pallet-roles |[Link](https://github.com/Fair-Squares/fair-squares/tree/main/pallets/roles)| **tag**: milestone-1 </br> **commit**:5d76cb0445309b33b169a2e11d9e19355e1cb531|
| 2.  | pallet-housing-fund |[Link](https://github.com/Fair-Squares/fair-squares/tree/main/pallets/housing_fund)| **tag**: milestone-1 </br> **commit**:5d76cb0445309b33b169a2e11d9e19355e1cb531|
| 3.  | role-verifier |[Link](https://github.com/Fair-Squares/fair-squares/blob/main/pallets/roles/src/lib.rs#L208-L251)| The role-verifier can be found in the roles pallet.</br>  **tag**: milestone-1 </br> **commit**:5d76cb0445309b33b169a2e11d9e19355e1cb531|
| 4.  | fs-node M1 |[Link](https://github.com/Fair-Squares/fair-squares)| **tag**: milestone-1 </br> **commit**:5d76cb0445309b33b169a2e11d9e19355e1cb531|

**Additional Information**
We mentioned in this milestone we would build a role-verifier module. This is built in a bit different way than we had imagined, but it's cleaner implementation.
We have a function called [set_manager](https://github.com/Fair-Squares/fair-squares/blob/main/pallets/roles/src/lib.rs#L240-L251) The setter which is Sudo can select a different accountId that can be the role-verifier. The Sudo is temporary, as we hava a decent council.