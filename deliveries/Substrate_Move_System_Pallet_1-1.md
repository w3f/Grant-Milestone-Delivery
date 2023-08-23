# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Link](https://github.com/w3f/Grants-Program/blob/master/applications/Substrate_Move_System_Pallet_1.md)
* **Milestone Number:** Milestone 1, "In-Depth Exploration and Assessment of MoveVM and Substrate Integration"

**Context**

The goal is to provide a Substrate system pallet that allows to deploy and interact with Smart Contracts written in the Move language, by providing a Move Virtual Machine (MoveVM) as a pallet, and this is the first phase of the whole plan: In-Depth Exploration and Assessment of MoveVM and Substrate Integration.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [Link](https://github.com/eigerco/pallet-move/blob/main/LICENSE) | MIT license |
| 0b. | Documentation | [Link](https://github.com/eigerco/pallet-move/blob/main/README.md) | - |
| 0c. | Testing and Testing Guide | <ul> <li>[Testing guide](https://github.com/eigerco/pallet-move/blob/main/doc/testing_guide.md)</li><li>[Integration tests with mock](https://github.com/eigerco/pallet-move/tree/main/tests)</li> <li>[Testing node](https://github.com/eigerco/substrate-node-template-move-vm-test)</li> </ul> | Branch for Testing node: `pallet-move`  |
| 0d. | Docker | [Dockerfile](https://github.com/eigerco/pallet-move/blob/main/Dockerfile) | - |
| 0e. | Article | [Design article](https://github.com/eigerco/pallet-move/blob/main/doc/design.md) | - |
| 1. | System pallet: Substrate Move | <ul> <li> [Pallet](https://github.com/eigerco/pallet-move) </li> <li> [Workflows](https://github.com/eigerco/pallet-move/tree/main/.github/workflows) </li> </ul> | - |
| 2. | Rust crate: Substrate Move | [Substrate Move crate](https://github.com/eigerco/substrate-move) | - |
| 3. | Rust crate: Substrate Move documentation | - | Documented in (2.) and in the [design article](https://github.com/eigerco/pallet-move/blob/main/doc/design.md). Also, several PRs with decision-making process are present in the [main repo](https://github.com/eigerco/pallet-move) |

**Additional Information**

There is a small confusion in the deliverables wording - the actual porting will be done in part 2. The main delivery of this milestone is the article (0e.).
