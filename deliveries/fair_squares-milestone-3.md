# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/fair_squares.md
* **Milestone Number:** 3

**Context** 
We have delivered the bidding, share-distributor pallet, virtual accounts and imlemented an epoch. Resulting in a automated bidding process and distribution of shares.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License: Apache 2.0 |[Link](https://github.com/Fair-Squares/fair-squares/blob/main/LICENSE)| | 
| 0b.  | Documentation & Guide |[Link](https://docs.google.com/document/d/1FxOSXGR49MX-UsGgBW24Rz0W1cfvwhfhIIrnPKiNhHc/edit?usp=sharing)| The inline documentation is the lib.rs files of [bidding-pallet](https://github.com/Fair-Squares/fair-squares/tree/main/pallets/bidding) and the [share-distributor-pallet](https://github.com/Fair-Squares/fair-squares/tree/main/pallets/share_distributor). All of the FS docs can also be found on the [published docs page](https://fair-squares.github.io/fair-squares/fs_node_runtime/index.html) The basic tutorial is in the G-doc it will be published once the milestone is approved| 
| 0c. | Testing Guide |[Link](https://github.com/Fair-Squares/fair-squares#run-all-tests) || 
| 0d. | Dockerfile |[Link](https://github.com/Fair-Squares/fair-squares/blob/main/Dockerfile) | | 
| 0e.  | Article |[Link](https://docs.google.com/document/d/1y17QmO7sGR5FJEjtH9NJx5RowqBOtzgoKzcGyfPSVn4/edit?usp=sharing)| The article will be published once the milestone is approved. | 
| 1.  | bidding-pallet |[Link](https://github.com/Fair-Squares/fair-squares/tree/main/pallets/bidding)| **tag**: v0.0.7.1-m3 </br> **commit**:`6960741d0b68836172c32cf98b2fafbcc175ae87`|
| 2.  | share-distributor-pallet |[Link](https://github.com/Fair-Squares/fair-squares/tree/main/pallets/share_distributor)| **tag**: v0.0.7.1-m3 </br> **commit**:`6960741d0b68836172c32cf98b2fafbcc175ae87`|
| 3.  | fs-node M3 |[Link](https://github.com/Fair-Squares/fair-squares)| **tag**: v0.0.7.1-m3 </br> **commit**:`6960741d0b68836172c32cf98b2fafbcc175ae87`|

**Additional Information**
1.  We have not implemented point 2. of the bidding pallet --> "If a share of the contribution is taken out the user will drop in the ranking (points ranking)." We kept the bidding pallet algorithm simple. The bidding pallet does what it is supposed to do, this rule is not necessary for the bidding pallet to work and would add a lot of complexity while we are not sure if such a feature would be used. We will implement this or something similar in the future if we see a need for it. We think the bidding pallet selection of allocations could be further optimized and that is where would like to focus our efforts in the future.
2. We have a new [contributor](https://github.com/cuteolaf) to the repo, he will join from M4 on. His past contributions have no impact on the deliverables of M3. We are not planning to change the grant proposal with an updated team, but if needed we can do so.

