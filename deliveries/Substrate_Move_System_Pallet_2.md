# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [Link](https://github.com/w3f/Grants-Program/blob/35dc9e121070d89397b7fb8c4c0d70e683937ab0/applications/Substrate_Move_System_Pallet_2.md)
* **Milestone Number:** Milestone 2, "MoveVM compatibility work and Subtrate Pallet development"

**Context**

The goal is to provide a Substrate system pallet that allows to deploy and interact with Smart Contracts written in the Move language, by providing a Move Virtual Machine (MoveVM) as a pallet, and this is the second phase of the whole plan:

- [Milestone 1][M1]: In-Depth Exploration and Assessment of MoveVM and Substrate Integration
- **Milestone 2: MoveVM compatibility work and Subtrate Pallet development**
- Milestone 3: Finalising the Substrate-Compatible MoveVM


**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [Link](https://github.com/eigerco/pallet-move/blob/main/LICENSE) | MIT license |
| 0b. | Documentation | The [main readme][readme] & the [design document][design-doc] | Pallet-move is the central documentation place, but other repos are also documented |
| 0c. | Testing and Testing Guide | [Testing guide][test-guide] and the [tutorial][tutorial] | We recommend trying the tutorial to test it all |
| 0d. | Docker | [Dockerfile](https://github.com/eigerco/pallet-move/blob/main/Dockerfile) | [Instructions][docker] |
| 1. | Rust crate: Substrate Move | [Substrate Move crate][substrate-move] | The adapted MoveVM fork which is compatible with Substrate. That repo has local test startegy. |
| 2. | System Pallet: Substrate Move SP adds Move functionality | [pallet-move][pallet] | The main repo and the entry point for the whole project |
| 3. | System Pallet: Substrate Move SP APIs to interact with the Move VM | [smove tool][smove] | The tool for compiling Move source code which can be used in [pallet-move][pallet] |

**Additional Information**

This milestone delivers the working MoveVM inside the pallet. The main output for this milestone is the tutorial, which shows one use case for which this pallet can be used.
The only thing that is still missing is the multi-signature support - but the current solution is flexible, and this feature shall be introduced in the next milestone.


[M1]: https://github.com/w3f/Grant-Milestone-Delivery/blob/7932b07cc38150701ba8ed034723193f66002975/deliveries/Substrate_Move_System_Pallet_1-1.md
[substrate-move]: https://github.com/eigerco/substrate-move
[smove]: https://github.com/eigerco/smove
[pallet]: https://github.com/eigerco/pallet-move
[tutorial]: https://github.com/eigerco/pallet-move/blob/main/doc/tutorial.md
[test-guide]: https://github.com/eigerco/pallet-move/blob/main/doc/tech_guide.md#testing
[docker]: https://github.com/eigerco/pallet-move/blob/main/doc/tech_guide.md#docker
[readme]: https://github.com/eigerco/pallet-move/blob/main/README.md
[design-doc]: https://github.com/eigerco/pallet-move/blob/main/doc/final-design.md