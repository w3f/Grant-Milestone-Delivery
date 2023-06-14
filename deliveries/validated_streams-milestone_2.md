# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [Validated Streams](https://github.com/w3f/Grants-Program/blob/master/applications/validated-streams.md)
* **Milestone Number:** 2

**Context**

We are delighted to announce the completion of the second and last milestone, marking the availability of the beta version of our project. This achievement includes a range of deliverables aimed at bringing all features to completion, enhancing functionality, testing, and documentation, and providing valuable insights through benchmarking.

In addition to refining the code from the previous milestone, we have also developed a .NET Client IRC usage sample, with validators that witnessing and validating events happening in an IRC chat room, giving users a way to interact with the projects. Additionally, a network resilience example was been developed to examine the recovery mechanism employed by our custom block import for nodes that face networking failures, with a particular focus on handling unwitnessed events. Finally, we are about to run a benchmark on real hardware, testing our network's overall performance and will document the results in [the respective folder of the repository](https://github.com/comrade-coop/validated-streams/tree/main/samples/tps-benchmark/README.md).

Plenty of integration and unit testing has been conducted, ensuring that core functions are thoroughly tested and robust under a variety of conditions. Furthermore, we have included Dockerfiles and a convenient test script, enabling the testing of all delivered functionalities.

With this first beta version of our project, we think it is ready to be integrated into other projects.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [LICENSE](https://github.com/comrade-coop/validated-streams/blob/main/LICENSE) | MIT License |
| **0b.** | Documentation | [README](https://github.com/comrade-coop/validated-streams/blob/main/README.md) | Made sure inline documentation covers all the code delivered. Also, created and documented a few additional samples (all linked from the root README). |
| **0c.** | Testing and Testing Guide | [Running tests](https://github.com/comrade-coop/validated-streams/blob/main/README.md#testing) <br> [proofs/](https://github.com/comrade-coop/validated-streams/blob/main/vstreams/src/proofs/tests.rs) <br> [events/](https://github.com/comrade-coop/validated-streams/blob/main/vstreams/src/events/tests.rs) <br> [pallet/](https://github.com/comrade-coop/validated-streams/blob/main/pallet/src/tests.rs) | Core functions are fully covered by unit tests to ensure functionality and robustness. The guide describes how to run these tests. |
| **0d.** | Docker | [Main](https://github.com/comrade-coop/validated-streams/blob/main/Dockerfile) <br> [IRC](https://github.com/comrade-coop/validated-streams/blob/main/samples/irc/Dockerfile) <br> [Test script](https://github.com/comrade-coop/validated-streams/blob/main/scripts/run-example.sh) <br> [Benchmark](https://github.com/comrade-coop/validated-streams/blob/main/samples/tps-benchmark/Dockerfile) | Docker files and shell scripts can be used to test all the functionality delivered with this milestone. That includes scripts for simulating poor network conditions to facilitate an examination of the recovery mechanisms, specifically focusing on the handling of unwitnessed events |
| **0e.** | Article | [Google Docs link](https://docs.google.com/document/u/1/d/12EsVUDydsDWfngQP6-zYRiC-dFbn696Evr3VSxgcpjU/edit) | An article was drafted up and submitted to the grants/grantsPR email for review, as per the announcement guidelines. |
| 1. | Substrate module: Witnessed events block import |[Old](https://github.com/comrade-coop/validated-streams/blob/fa7e20c5f0bf34cd8b89f975eceb6e29955202ab/node/src/streams/services/witness_block_import.rs) <br><br>[New](https://github.com/comrade-coop/validated-streams/blob/main/consensus/src/block_import.rs) | A major question was how to allow syncing blocks when gossip delays/drops signatures. At first, we tried using DHT to provide event proofs for blocks. However, we realized that this approach would impose a substantial bandwidth consumption, and all we need is to enable faster syncing to the current finalized tip. We ended up deciding to make nodes experiencing networking failures invoke grandpa block import directly whenever they fall behind (is_major_syncing). As a result of this we have **departed** from the original solution of deferring events that was described in the grant proposal, hence the "old" and "new" links on the left. |
| 2. | Real-life testing | [TPS benchmark](https://github.com/comrade-coop/validated-streams/tree/main/samples/tps-benchmark) | *Work-in-progress.* While all the real-life benchmark code is there, we are still in the process of running it on real hardware, and will report the results once it's done. |
| 3. | .NET client sample | [IRC sample](https://github.com/comrade-coop/validated-streams/tree/main/samples/irc) | In this example we created trusted client IRC bots running alongside the validators to witnesses events happening in an IRC chat room and forward messages for validation to the validated streams chain. |

**Additional Information**
