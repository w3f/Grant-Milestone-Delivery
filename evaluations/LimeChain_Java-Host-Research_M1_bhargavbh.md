# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/research-feasibiliy-java-host.md 
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0.a | License |<ul><li>[x] </li></ul>|[Included](https://github.com/LimeChain/java-host-research/blob/main/LICENSE)| Apache License V2.0
| 0.b | Outcome Summary |<ul><li>[x] </li></ul>| https://github.com/LimeChain/java-host-research/blob/main/research/java-host-research-outcome.md | Structured Overview Doc delivered with clear findings of research.
| 1.a | PoC |<ul><li>[x] </li></ul>| [Examples](https://github.com/LimeChain/wasmer-java/tree/master/examples)| According to contract some initial examples regarding wasmer-java. Could have tested potentially a little bit more, but this is fine 
| 1.b | Testing Guide |<ul><li>[x] </li></ul>| [Proof of Concept Demo](https://github.com/LimeChain/java-host-research/blob/e0d673177aec21dbc0ffe05bd249e54bb9ceef56/README.md#proof-of-concept-demo)| Small but enough
| 1.a | Docker |<ul><li>[x] </li></ul>| [Dockerfile](https://github.com/LimeChain/wasmer-java/blob/3c6ca0ed4d4882a62d5950fd506ab3d5bd287a37/Dockerfile) | Works
| 2. | Research reusing PolkaJ |<ul><li>[x] </li></ul>|[Crypto Primitives](https://github.com/LimeChain/java-host-research/blob/main/research/java-host-research-outcome.md#cryptographic-primitives)| Compared PolkaJ, Polkadot-java, and Schnorrkel-java for crypto primitives. Suggest using Schnorrkel-java due to its native implementation and feature-rich library. PolkaJ is usable with minor extensions for SCALE.
| 2. | Research p2p Networking  |<ul><li>[x] </li></ul>|[Networking](https://github.com/LimeChain/java-host-research/blob/main/research/java-host-research-outcome.md#networking)| This is the biggest missing component. jvm-libp2p stack contains Noise, PeerID, however misses critical components like Kademlia and Yamux. Provide a Scope and Estimation report for [Kademlia](https://github.com/LimeChain/java-host-research/blob/main/research/libp2p-kademlia-for-jvm-scope-estimation.md) and [Yamux](https://github.com/LimeChain/java-host-research/blob/main/research/libp2p-yamux-jvm-scope-estimation.md) jvm-implementations, as these are major road-blocks. 
| 3. | Research Storage |<ul><li>[x] </li></ul>|[Full Node Storage](https://github.com/LimeChain/java-host-research/blob/main/research/java-polkadot-host-high-level-design.md#storage)| discuss state-trie storage and persistence. 
| 4. | Research RPC API  |<ul><li>[x] </li></ul>| [RPC API doc](https://github.com/LimeChain/java-host-research/blob/main/research/java-polkadot-host-high-level-design.md#consensus-reaching-process)|  No major risks detected for implementing RPC API natively, touched upon DoS resilience.  
| 5. | Research Consensus Module |<ul><li>[x] </li></ul>|[Consensus Module](https://github.com/LimeChain/java-host-research/blob/main/research/java-polkadot-host-high-level-design.md#consensus-reaching-process)| Delivered. 
| 6. | Doc Host Design |<ul><li>[x] </li></ul>|[Host Design Doc](https://github.com/LimeChain/java-host-research/blob/main/research/java-polkadot-host-high-level-design.md)| Builds on top of Light client doc 
| 7. | Doc Light-Client Design|<ul><li>[x] </li></ul>|[Light Client Design Doc](https://github.com/LimeChain/java-host-research/blob/main/research/java-host-light-client-high-level-design.md)| Complements the [Light-Client Spec](https://spec.polkadot.network/#sect-lightclient) with more implementation details. 


## General Remarks
The feasibility research has been performed in sufficient detail with clear findings (positive/negative) for each of the subcomponents. The report is well structured and is a good starting point for teams to build a Java node implementation, and nicely complements the spec.
As mentioned in the grant application, a PoC for testing the performance and compatibility of a Wasm Runtime within Java has been delivered. The performance on small-scale benchmarks are promising. Milestones outlined in the application have been satisfactorily delivered.

Certain [clarifications](https://github.com/w3f/Grant-Milestone-Delivery/pull/735#pullrequestreview-1309774824) particularly on Light Client Design were asked on the PR thread, which were satisfactorily addressed [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/735#issuecomment-1441801177). The requested changes ahve been included in this [commit](https://github.com/w3f/Grant-Milestone-Delivery/pull/735/commits/1426887877a3564bc46a3ba28b72425d0f2f9f91).

