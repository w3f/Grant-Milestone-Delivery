# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/swarm-nl.md
* **Milestone Number:** 1

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------- |
| **0a.** | License | [Apache 2.0](https://github.com/algorealmInc/SwarmNL/blob/main/LICENSE) | |
| **0b.** | Documentation | [Rust docs](https://algorealminc.github.io/SwarmNL/swarm_nl/index.html), [Examples and tutorials of demo apps](https://github.com/algorealmInc/SwarmNL/tree/main/tutorials) and [Generic examples of how to integrate SwarmNl](https://algorealminc.github.io/SwarmNL/swarm_nl/index.html#features-and-examples) | All the docs and examples can be accessed from the Rust docs links. The tutorial examples would be the starting point for running demo apps we created that use SwarmNl. The top-level README contains generic examples for setting up a node and communicating with the network layer. |
| **0c.** | Testing and Testing Guide | [Testing guide](https://algorealminc.github.io/SwarmNL/swarm_nl/testing_guide/index.html) | This would be the starting point for testing coverage of the core library. |
| **0d.** | Docker files | [Echo server Docker file](https://github.com/algorealmInc/SwarmNL/blob/main/tutorials/echo_server/Dockerfile), [File sharing app Docker file](https://github.com/algorealmInc/SwarmNL/blob/main/tutorials/file_sharing_app/Dockerfile) and [Simple game demo](https://github.com/algorealmInc/SwarmNL/tree/main/tutorials/simple_game) | We've created separate Docker files to run the examples from the tutorials with instructions on how to run them locally and with Docker in their respective READMEs. |
| 1. | SwarmNL configuration module | [Setup module](https://github.com/algorealmInc/SwarmNL/blob/main/swarm_nl/src/setup.rs) | This all data structures and functions to setup a node and configure it for networking (part of the setup code is also in `core`). |
| 2. | Gossipsub | [Core module](https://github.com/algorealmInc/SwarmNL/blob/main/swarm_nl/src/core/mod.rs) | Implementation of the gossipsub communication algorithm. |

**Additional Information**

A few things to note:

- We use `cargo +nightly fmt` to format our code according to [`.rustfmt.toml`](https://github.com/algorealmInc/SwarmNL/blob/main/.rustfmt.toml).
- We've included more than what was initially specified for this milestone, but was considered necessary. All of it is in the `core` module and includes things like interactions with the DHT and RPC communication.