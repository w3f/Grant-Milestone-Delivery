# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/swarm-nl.md
* **Milestone Number:** 2

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------- |
| **0a.** | License | [Apache 2.0](https://github.com/algorealmInc/SwarmNL/blob/main/LICENSE) | |
| **0b.** | Documentation | [Rust docs](https://algorealminc.github.io/SwarmNL/swarm_nl/index.html)| See: [Replication features and configuration examples](https://algorealminc.github.io/SwarmNL/swarm_nl/index.html#replication) and [Sharding features and configuration examples](https://algorealminc.github.io/SwarmNL/swarm_nl/index.html#sharding)|
| **0c.** | Testing and Testing Guide | [Testing guide](https://algorealminc.github.io/SwarmNL/swarm_nl/testing_guide/index.html) and [`tests`](https://github.com/algorealmInc/SwarmNL/tree/main/swarm_nl/src/core/tests) | This would be the starting point for testing coverage of the features of the library added in milestone 2 (see `replication.rs` and `sharding.rs` in the `/swarm-nl/src/core/tests` folder). |
| **0d.** | Docker files | **Replication examples:** [Eventual Consistency Docker file](https://github.com/algorealmInc/SwarmNL/blob/main/examples/replication/eventual-consistency/Dockerfile), [Strong Consistency Docker file](https://github.com/algorealmInc/SwarmNL/blob/main/examples/replication/strong-consistency/Dockerfile), [Peer Cloning Docker file](https://github.com/algorealmInc/SwarmNL/blob/main/examples/replication/peer-cloning/Dockerfile); **Sharding examples:** [Hash-based sharding Docker file](https://github.com/algorealmInc/SwarmNL/blob/main/examples/sharding/hash-based/Dockerfile), [Range-base sharding Docker file](https://github.com/algorealmInc/SwarmNL/blob/main/examples/sharding/range-based/Dockerfile) | Each Dockerfile will open three terminals and run a script to emulate the examples simulating a network of three nodes. |
| 1. | Research | [Research](https://github.com/algorealmInc/SwarmNL/blob/main/research.md) | This document gives an overview of the design and implementation decisions for fault-tolerance and scaling based on research. |
| 2. | Scaling (implementation of sharding, data-forwarding and fault-tolerant algorithms to SwarmNL) | [Replication module](https://github.com/algorealmInc/SwarmNL/blob/main/swarm_nl/src/core/replication.rs) and [Sharding module](https://github.com/algorealmInc/SwarmNL/blob/main/swarm_nl/src/core/sharding.rs) | These modules contain all of the core parts of the library for fault-tolerance using replication, data-forwarding and sharding. |
| 3. | IPFS integration | [IPFS example](https://github.com/algorealmInc/SwarmNL/tree/main/examples/ipfs) | We demonstrate how simple it is to integrate IPFS to a network built with SwarmNL. |
| 4. | Extendability of library | [HTTP server example](https://github.com/algorealmInc/SwarmNL/tree/main/examples/http-client) | We demonstrate the implementation of SwarmNL's generic interface to POST data to a remote HTTP server (run with Docker: [Dockerfile](https://github.com/algorealmInc/SwarmNL/tree/main/examples/http-client/Dockerfile)). |


**Additional Information**

The examples run by the Dockerfiles will start up three terminals each running a node with seprate peer IDs and ports. The Dockerfile runs a script to automatically interact with the nodes by sending commands to the network. The script sleeps for 60 seconds to ensure the nodes run and connect before commands are submitted to the network. To quit the terminals running in the Docker container, submit `exit`.