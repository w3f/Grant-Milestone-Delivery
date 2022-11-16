# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/c%2B%2Bpolkadot-light-client.md 
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 1. | Cryptography |<ul><li>[x] </li></ul>|...| comparisons and security advantages delivered at a high-level
| 2. | Runtime Environment Requirements |<ul><li>[x] </li></ul>|...| Propose to use binaryen for compiling/interpreting wasm runtime calls. .
| 3. | Multichain Support |<ul><li>[] </li></ul>|...| Mentions testing of compatibility with Westend, Kusama, and Polkadot. No mention of XCM use cases.
| 4. | JSON-RPC APIs |<ul><li>[x] </li></ul>|...| (wait for florian's feedback)
| 5. | Dependencies |<ul><li>[x] </li></ul>|...| Technically speaking, the delivery passes this. Quite sparse for crypto, relatively a bit more detailed for networking.

## General Remarks

The concerns raised in previous evaluation have been by and large addressed. However, the delivery is more of an implementation roadmap than a Light Client Spec that can be integrated into [Polkadot Spec](https://spec.polkadot.network). This evaluation has also taken into consideration the initial strides in implementation taken towards a Light Client [here](https://github.com/eqlabs/polkadot-light-client-spec/). We suggest integrating the implementation repo into your delivery and making necessary amendments (e.g removing claims of integration into Polkadot Spec, mention of XCM usecases) to the initial Grant proposal via a PR. 


