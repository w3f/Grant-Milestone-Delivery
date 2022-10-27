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
| 1.  | bidding-pallet |[Link](https://github.com/Fair-Squares/fair-squares/tree/main/pallets/bidding)| **tag**: v0.0.7.2-m3 </br> **commit**:`7a8a6adab5eb081bcc61cfcd6e0e3ba65b1ac039`|
| 2.  | share-distributor-pallet |[Link](https://github.com/Fair-Squares/fair-squares/tree/main/pallets/share_distributor)| The share distributor pallet replaces the fractioning module as mentioned in the [application](https://github.com/w3f/Grants-Program/blob/master/applications/fair_squares.md#milestone-3---bidding-mechanism). There have been no changes about the agreed functionality, the shareholders receive the shares through the asset pallet of a unique asset.   </br></br> **tag**: v0.0.7.2-m3 </br> **commit**:`7a8a6adab5eb081bcc61cfcd6e0e3ba65b1ac039`|
| 3.  | fs-node M3 |[Link](https://github.com/Fair-Squares/fair-squares)| **tag**: v0.0.7.2-m3 </br> **commit**:`7a8a6adab5eb081bcc61cfcd6e0e3ba65b1ac039`|

**Additional Information**
1.  We have not implemented point 2. of the bidding pallet --> "If a share of the contribution is taken out the user will drop in the ranking (points ranking)." We kept the bidding pallet algorithm simple. The bidding pallet does what it is supposed to do, this rule is not necessary for the bidding pallet to work and would add a lot of complexity while we are not sure if such a feature would be used. We will implement this or something similar in the future if we see a need for it. We think the bidding pallet selection of allocations could be further optimized and that is where would like to focus our efforts in the future.
2. We have a new [contributor](https://github.com/cuteolaf) to the repo, he will join from M4 on. His past contributions have no impact on the deliverables of M3. We are not planning to change the grant proposal with an updated team, but if needed we can do so.
3. **Module: Timer** mentioned in the [application](https://github.com/w3f/Grants-Program/blob/master/applications/fair_squares.md#milestone-3---bidding-mechanism) has been replaced by the [frame_support::traits::Hooks](https://paritytech.github.io/substrate/master/frame_support/traits/trait.Hooks.html#method.on_finalize) where we defined that after every epoch (5 min) we will have scan for status changes in the assets and are looking for specific status that triggers the bidding-pallet to take action. You can see the code [here](https://github.com/Fair-Squares/fair-squares/blob/2eb97eb978a4b9350684cb42234ff9bdd6b28473/pallets/bidding/src/lib.rs#L128-L134) and [here](https://github.com/Fair-Squares/fair-squares/blob/9fd6f162e4f4e1e849817e7bdaefd1ee9bec89c7/runtime/src/lib.rs#L1051) 

