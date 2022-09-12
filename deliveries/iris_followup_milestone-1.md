# Milestone Delivery :mailbox: 

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/tree/master/applications/iris_followup.md
* **Milestone Number:** 1

**Context**

This milestone delivers several pieces of functionality as well as major architectural changes to the iris blockchain.

1. We abandon the integration with rust-ipfs which was used as part of the original iris proposal. There are several reasons to do this, but the main reason is that rust-ipfs is still under development and is not yet feature complete, which severely limits its capabilities and security. Additionally, integration with rust-ipfs by embedding it within the substrate runtime significantly increases development and maintenance overhead while the benefits do not outweight usage of an external ipfs instance with go-ipfs and http bindings/communication via offchain workers. As such, this milestone will introduce breaking changes to the data ejection and ingestion workflows which are addressed in milestone 2. The results of this change implies that data ingestion and ejection are temporarily non-functional, though the underlying mechanisms are untouched. That is, this milestone introduces mechanisms to organize asset classes using dataspaces and authorization mechanisms for accessing offchain data associated with asset classes, without actually delivering the offchain data.

2. We introduce data spaces, the ability to manage data spaces associated with data, and lay the groundwork for future moderation capabilities.

3. We deliver composable access rules, the rule executor, and the iris-ejection pallet to the Iris network, allowing data owners to specify unique business models that consumers must adhere to across any number of data spaces. Specifically, we will implement a composable access rule and associated rule executor contract which allows a token to be 'redeemed' only a limited number of times (e.g. ownership of a token implies you can fetch associated data only N times from the network).

**Repositories**:

* Iris node: https://github.com/ideal-lab5/iris/tree/milestone_1
* Contracts: https://github.com/ideal-lab5/contracts/tree/iris_milestone_1
* User interface: https://github.com/ideal-lab5/ui

**Deliverables**


| Number | Deliverable | Link | Notes |
| -- | -- | --| -- |
| 0a. | License | Apache 2.0 and GPL3, see [iris node repo](https://github.com/ideal-lab5/iris/tree/milestone_1) and [contracts repo](https://github.com/ideal-lab5/contracts/tree/iris_milestone_1) | |
| 0b. | Documentation | https://ideal-lab5.github.io/ | |
| 0c. | Testing Guide | https://docs.google.com/document/d/1XhBUSWp1lGhZbBVmFmre5ojEPlNCMccmFz-pvV2VypM/edit?usp=sharing | See the spreadsheet embedded in the testing guide for a detailed breakdown of scenarios and steps to execute them |
| 0d. | Docker | Iris: Iris-UI: | | |
| 0e. | Article | https://medium.com/ideal-labs/iris-milestone-1-update-fe9411ca6704 | | |
| 1. | Separate Iris node from substrate runtime fork | https://github.com/driemworks/iris/tree/0752a546e315b47e80f96d3885398404130be1bd | The commits were squashed and merged, so this points to the repo at the initial commit, not the diff itself. This is the initial commit wherein we migrated from a full substrate fork to a substrate node only. |
| 2. | Substrate Module: Data spaces | https://github.com/ideal-lab5/iris/blob/milestone_1/pallets/data-spaces/src/lib.rs |  |
| 3. | Substrate module: Iris-Assets | https://github.com/ideal-lab5/iris/blob/milestone_1/pallets/iris-assets/src/lib.rs | Changes specific to this milestone are the introduction of dataspace specification [here](https://github.com/ideal-lab5/iris/blob/9931ae51c4ecfdb972e65f4dce2698a3be028b75/pallets/iris-assets/src/lib.rs#L270) as well as the removal of the ability to pin data (as we removed the rust-ipfs integration). Additionally, tests were updated. |
| 4. | Contracts | https://github.com/ideal-lab5/contracts/tree/iris_milestone_1/composable_access_rules | The top level README contains information on building and testing. |
| 5. | Substrate Module: Iris-Ejection | pallet: https://github.com/ideal-lab5/iris/tree/milestone_1/pallets/iris-ejection and chain extension: https://github.com/ideal-lab5/iris/blob/9931ae51c4ecfdb972e65f4dce2698a3be028b75/runtime/src/lib.rs#L974| This introduces the module through which asset class ownership can associate rule executors with their assets and allows rule executors to submit execution results on chain. We also expose the functionality via an addition to our chain extension. |
| 6. | Substrate Module: Iris-Session | https://github.com/ideal-lab5/iris/tree/milestone_1/pallets/iris-session | The iris-session pallet was modified to read requests added to the DataRetrievalQueue as defined in the IrisEjection pallet. Further, we removed all references to the offchain::ipfs integration and have added http bindings (that are currently not in use until the next milestone) to communicate with go-ipfs. |
| 7. | User Interface | https://github.com/ideal-lab5/ui | The user interface is very minimal and somewhat self explanatory. Error messages are minimal and though there is a specific flow which users must follow in order to interact with assets in iris (as elaborated in the testing guide), this user interface does not follow any specific worflow. Demo/walkthrough available on request. |

**Additional Information**

See the testing guide.
