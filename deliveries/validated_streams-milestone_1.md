# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Validated Streams](https://github.com/w3f/Grants-Program/blob/master/applications/validated-streams.md)
* **Milestone Number:** 1

**Context** (optional)

We're happy to report that the main functionality of the Validated Streams project is now complete. We've provided unit testing to ensure code soundness, as well as an integration test in the form of an an example script that starts a private chain and submits random events to it.

In the integration test, a trusted client connects to each node using GRPC and submits various events (though in a real application, each node operator would run their own trusted client). Validator nodes then react to those events in real-time and, after gossiping, submit only those that have been signed by 2/3 of them as unsigned extrinsics (Milestone 2 would include the work that verifies those extrinsics have all been observed on the gossip).

Although we wanted to use Substrate's own gossip engine, we discovered that it was [deprecated](https://github.com/paritytech/substrate/issues/13187#issuecomment-1398131943) even though there was no mention of that in the documentation. After some deliberation, we decided to implement the gossip protocol using libp2p's [gossipsub](https://docs.rs/libp2p/latest/libp2p/gossipsub/index.html).

The rest of the work done within this milestone has focused around integrating the codebase better with subtrate's API and ensuring the core functionallity is in place. In the next milestone, we will focus on making everything work in a real-world scenario with deferring blocks and handling validator set changes.

**Deliverables**
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [License](https://github.com/comrade-coop/validated-streams/blob/main/LICENSE) | MIT License |
| **0b.** | Documentation | [Readme](https://github.com/comrade-coop/validated-streams/blob/main/README.md)  | Added inline documentation to the code and created a basic example that shows how a user can spin up a private chain, send random events, and observe the validators reacting to those events. |
| **0c.** | Testing and Testing Guide | [Running tests](https://github.com/comrade-coop/validated-streams/blob/main/README.md#testing) | Core functions are fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we describe how to run these tests. |
| **0d.** | Docker | [Dockerfile](https://github.com/comrade-coop/validated-streams/blob/main/Dockerfile) <br> [Test script](https://github.com/comrade-coop/validated-streams/blob/main/scripts/run-example.sh) | A Dockerfile and a shell script that can be used to test all the functionality delivered with this milestone. |
| 1. | Substrate pallet: Validated Streams | [Source code](https://github.com/comrade-coop/validated-streams/blob/main/pallet/src/lib.rs) <br> [Pallet Tests](https://github.com/comrade-coop/validated-streams/blob/main/pallet/src/tests.rs) | Created a Substrate pallet that receives events witnessed by at least 2/3 of validators. |
| 2a. | Substrate module: Witnessed events gossip | [Source code](https://github.com/comrade-coop/validated-streams/blob/main/node/src/streams/services/events/mod.rs) <br> [Unit Tests](https://github.com/comrade-coop/validated-streams/blob/main/node/src/streams/services/events/tests.rs)  | The witnessed events  gossip module is an implementation of the portion of the Validated Streams protocol as outlined in the application. (Renamed to `EventsService`) |
| 2b. | Substrate module: Reusable gossip | [Source code](https://github.com/comrade-coop/validated-streams/blob/main/node/src/streams/gossip/mod.rs) <br>  [Unit Tests](https://github.com/comrade-coop/validated-streams/blob/main/node/src/streams/gossip/tests.rs) | In the interest of making code cleaner and usable by other projects, we extracted the gossip part, turning it into a (eventually) resuable module that can gossip various types of messages as ordered and also has the ability to register a handler for incoming events. <br> **Deviation**: The original grant application assumed we would use Substrate's own GossipEngine for the gossip protocol. However, as outlined in the context section above, GossipEngine was [deprecated](https://github.com/paritytech/substrate/issues/13187#issuecomment-1398131943), so we opted to implement gossip by using libp2p's [gossipsub](https://docs.rs/libp2p/latest/libp2p/gossipsub/index.html) directly. |
| 3. | Substrate module: Stream service | [Source code](https://github.com/comrade-coop/validated-streams/blob/main/node/src/streams/server/mod.rs) <br> [Test client](https://github.com/comrade-coop/validated-streams/blob/main/scripts/run-example.sh#L39) | The Stream service module allows applications to connect to the validator node as a "trusted client" over GRPC, witnessing events observed in the off-chain world and receiving receipts of completed events. (Renamed to `ValidatedStreamsGrpc`) |
