# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones.
>
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/P2PStateChannels.md
- **Milestone Number:** 1

**Context** (optional)

Link to project repository - https://github.com/peer3to/state-channels-plus/
We recommend reading the READMEs, watching the videos, and trying the demo.

**Deliverables**

| Number | Deliverable               | Link                                                                                                                                                                          | Notes                                                                                                                                                                                                                                                                                                                     |
| ------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                   | https://github.com/peer3to/state-channels-plus/blob/master/LICENSE                                                                                                            | MIT                                                                                                                                                                                                                                                                                                                       |
| 0b.    | Documentation             | https://github.com/peer3to/state-channels-plus/blob/master/docs/mfsDocs.md                                                                                                    | There are also some videos in the root README that may be helpful                                                                                                                                                                                                                                                         |
| 0c.    | Testing and Testing Guide | https://github.com/peer3to/state-channels-plus/tree/master/test                                                                                                               | https://github.com/peer3to/state-channels-plus/blob/master/README.md#run-tests                                                                                                                                                                                                                                            |
| 0d.    | Docker                    | https://github.com/peer3to/state-channels-plus/blob/master/Dockerfile                                                                                                         | Used to run the above tests in a container                                                                                                                                                                                                                                                                                |
| 1.     | Channel Opening           | https://github.com/peer3to/state-channels-plus/blob/db81f2bb11a032a2e4678b98ceed9f7944477325/examples/TicTacToe/contracts/TicTacToe/TicTacToeStateChannelManagerProxy.sol#L23 | This is an example of a channel opening used for the demo. The SDK doesn't impose restrictions here, so it allows for overrides and custom openings, but they must adhere to the [StateChannelManagerInterface](https://github.com/peer3to/state-channels-plus/blob/master/contracts/V1/StateChannelManagerInterface.sol) |
| 2.     | Cryptography              | https://github.com/peer3to/state-channels-plus/blob/master/contracts/V1/StateChannelDiamondProxy/StateChannelUtilLibrary.sol                                                  |                                                                                                                                                                                                                                                                                                                           |
| 3.     | Liveness                  | https://github.com/peer3to/state-channels-plus/blob/master/contracts/V1/StateChannelDiamondProxy/DisputeManagerFacet.sol                                                      | This is currently expensive to run since we needed to redesign something for the MFS (this grant) that works - the full feature set should be ultra lightweight as explained at the end of the tech explanation video (see root README of the project)                                                                    |

**Additional Information**

The state of the repository for this milestone is also the state of the repository for the second milestone.
