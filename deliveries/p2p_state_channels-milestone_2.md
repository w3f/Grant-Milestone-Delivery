# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones.
>
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/P2PStateChannels.md
- **Milestone Number:** 2

**Context** (optional)

Link to project repository - https://github.com/peer3to/state-channels-plus/
We recommend reading the READMEs, watching the videos, and trying the demo.

**Deliverables**

| Number | Deliverable               | Link                                                                                                                                                                       | Notes                                                                                                                                                   |
| ------ | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                   | https://github.com/peer3to/state-channels-plus/blob/master/LICENSE                                                                                                         | MIT                                                                                                                                                     |
| 0b.    | Documentation             | https://github.com/peer3to/state-channels-plus/blob/master/docs/mfsDocs.md                                                                                                 | There are also some videos in the root README that may be helpful                                                                                       |
| 0c.    | Testing and Testing Guide | https://github.com/peer3to/state-channels-plus/tree/master/test                                                                                                            | https://github.com/peer3to/state-channels-plus/blob/master/README.md#run-tests                                                                          |
| 0d.    | Docker                    | https://github.com/peer3to/state-channels-plus/blob/master/Dockerfile                                                                                                      | Used to run the above tests in a container                                                                                                              |
| 0e.    | Article                   | https://docs.google.com/document/d/1qS7ZY8noaObP5Ze1mVOaydDBih4jHYym4qacAx46Fas                                                                                            | Will be posted on medium - this is just a draft for review                                                                                              |
| 1.     | Networking and Discovery  | https://github.com/peer3to/state-channels-plus/blob/master/src/transport/HolepunchTransport.ts https://github.com/peer3to/state-channels-plus/blob/master/src/Holepunch.ts | Currently it uses holepunch but it's designed to support multiple transports like WebRTC for browsers                                                   |
| 2.     | P2P State Machine         | https://github.com/peer3to/state-channels-plus/blob/master/src/evm/EvmStateMachine.ts                                                                                      | This uses the official EVM implementation. This can be substituted polymoprhically for another VM like the PVM when there's an official implementation. |
| 3.     | Agreement Tracking        | https://github.com/peer3to/state-channels-plus/blob/master/src/AgreementManager.ts                                                                                         |                                                                                                                                                         |
| 4.     | Dispute Handling          | https://github.com/peer3to/state-channels-plus/blob/master/src/DisputeHandler.ts                                                                                           | Accounts only for liveness logic - the more advanced dispute resolution mechanism will be in the full feature set                                       |
| 5.     | Virtual Clock             | https://github.com/peer3to/state-channels-plus/blob/master/src/Clock.ts                                                                                                    |                                                                                                                                                         |
| 6.     | Observing & Notifying     | https://github.com/peer3to/state-channels-plus/blob/master/src/P2pEventHooks.ts                                                                                            | These are optional hooks that can be overridden as callbacks when certain things trigger in the system.                                                 |

**Additional Information**
