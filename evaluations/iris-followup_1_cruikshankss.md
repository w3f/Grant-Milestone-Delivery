# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/iris_followup.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |

| 0a. | License | [x] |  Apache 2.0 and GPL3, see [iris node repo](https://github.com/ideal-lab5/iris/tree/milestone_1) and [contracts repo](https://github.com/ideal-lab5/contracts/tree/iris_milestone_1) | |

| 0b. | Documentation | [x] |  https://ideal-lab5.github.io/ | Great job evolving your wiki by including a disclaimer about rapid changes but still including a very clear [roadmap](https://ideal-lab5.github.io/quickstart/development_status.html). You may want to add the link to your second w3f grant in your wiki intro asap, but I trust your timing. Overall, great combo of docs including the whitepaper and an aesthetic & clear [website](https://www.idealabs.network/) too. |


| 0c. | Testing Guide | [x] |  https://docs.google.com/document/d/1XhBUSWp1lGhZbBVmFmre5ojEPlNCMccmFz-pvV2VypM/edit?usp=sharing | |

| 0d. | Docker | [x] |  Iris: Iris-UI: | | |


| 0e. | Article | [x] |  https://medium.com/ideal-labs/iris-milestone-1-update-fe9411ca6704 | | |


| 1. | Separate Iris node from substrate runtime fork | [x] |  https://github.com/driemworks/iris/tree/0752a546e315b47e80f96d3885398404130be1bd | The commits were squashed and merged, so this points to the repo at the initial commit, not the diff itself. This is the initial commit wherein we migrated from a full substrate fork to a substrate node only. |


| 2. | Substrate Module: Data spaces | [x] |  https://github.com/ideal-lab5/iris/blob/milestone_1/pallets/data-spaces/src/lib.rs |  |


| 3. | Substrate module: Iris-Assets | [x] |  https://github.com/ideal-lab5/iris/blob/milestone_1/pallets/iris-assets/src/lib.rs | Changes specific to this milestone are the introduction of dataspace specification [here](https://github.com/ideal-lab5/iris/blob/9931ae51c4ecfdb972e65f4dce2698a3be028b75/pallets/iris-assets/src/lib.rs#L270) as well as the removal of the ability to pin data (as we removed the rust-ipfs integration). Additionally, tests were updated. |


| 4. | Contracts | [x] |  https://github.com/ideal-lab5/contracts/tree/iris_milestone_1/composable_access_rules | The top level README contains information on building and testing. |


| 5. | Substrate Module: Iris-Ejection | [x] |  pallet: https://github.com/ideal-lab5/iris/tree/milestone_1/pallets/iris-ejection and chain extension: https://github.com/ideal-lab5/iris/blob/9931ae51c4ecfdb972e65f4dce2698a3be028b75/runtime/src/lib.rs#L974| This introduces the module through which asset class ownership can associate rule executors with their assets and allows rule executors to submit execution results on chain. We also expose the functionality via an addition to our chain extension. |


| 6. | Substrate Module: Iris-Session | [x] |  https://github.com/ideal-lab5/iris/tree/milestone_1/pallets/iris-session | The iris-session pallet was modified to read requests added to the DataRetrievalQueue as defined in the IrisEjection pallet. Further, we removed all references to the offchain::ipfs integration and have added http bindings (that are currently not in use until the next milestone) to communicate with go-ipfs. |


| 7. | User Interface | https://github.com/ideal-lab5/ui | [x] |  The user interface is very minimal and somewhat self explanatory. Error messages are minimal and though there is a specific flow which users must follow in order to interact with assets in iris (as elaborated in the testing guide), this user interface does not follow any specific worflow. Demo/walkthrough available on request. |

# Additional Notes

Congratulations on getting multiple ink! contracts deployed locally to add data space functionality and seeing the extrinsics in the polkadot explorer of your locally-running chain. 

Interesting to see how you use:
- minting assets to control initial ownership and access rights
- a locking function to allow downloadable access to the data
- rule executor smart contract for controlling the number of times an asset is accessible 

Nice continuation of your full-stack substrate-based React dapp by adding data spaces functionality. The notification system seems to work well for minting, etc. and I can see how you're looking ahead to the SDK for providing access to Iris nodes. 

I am understanding your architecture evolution now since your last grant. I see how your substrate-based Iris node contains the pallets required for basic functionality and how you envision the future of users interacting with Iris mainly through smart contracts (via the irisEjection chain-extension pallet). I'm looking forward to your `go-ipfs` storage implementation in subsequent milestone(s).  