# Evaluation

- **Status:** Approved
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/c%2B%2Bpolkadot-light-client.md 
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 1. | Cryptography |<ul><li>[x] </li></ul>|...| comparisons and security advantages delivered at a high-level
| 2. | Runtime Environment Requirements |<ul><li>[x] </li></ul>|...| Proposed to use binaryen for compiling/interpreting wasm runtime calls. .
| 3. | Multichain Support |<ul><li>[x] </li></ul>|...| Mentions testing of compatibility with Westend, Kusama, and Polkadot. No mention of XCM use cases.
| 4. | JSON-RPC APIs |<ul><li>[x] </li></ul>|...| Plan browser integration using Substrate Connect Extension Protocol 
| 5. | Dependencies |<ul><li>[x] </li></ul>|...| Mentions Crypto and Networking dependecies.

## General Remarks
The milestone delivers an implementation roadmap with satisfactory depth. 

Summary of Evaluation for milestone merged of 18.11.2022:
The concerns raised in previous evaluation have been by and large addressed. However, the delivery is more of an implementation roadmap than a Light Client Spec that can be integrated into [Polkadot Spec](https://spec.polkadot.network/). We have a few minor suggestions mentioned above, please include them. We have also taken into consideration the initial strides towards implementing a Light Client [here](https://github.com/eqlabs/polkadot-light-client-spec/). We suggest integrating it into your delivery and making necessary amendments (e.g removing claims of integration into Polkadot Spec) to the initial Grant proposal via a PR. 
Check here for details: https://github.com/w3f/Grant-Milestone-Delivery/pull/625

Summary of Evaluation for milesstone merged on 19.10.2022:
Overall, the spec seems to be sparse and lacks details on several key components of the light-client. Components like Runtime/execution environments, local host storage, light-weight interactions with GRANDPA and BABE (and Sassafras in future) for the light client have not been addressed. 
It would also be interesting to gain insights into the disadvantages of implementing in C++ and the major pain points the team expects. Furthermore, the document could be improved by adding justification to the design choices. 
Check here for details: https://github.com/w3f/Grant-Milestone-Delivery/pull/603
