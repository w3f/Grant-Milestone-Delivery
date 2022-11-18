# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/c%2B%2Bpolkadot-light-client.md 
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 1. | Cryptography |<ul><li>[x] </li></ul>|...| comparisons and security advantages delivered at a high-level
| 2. | Runtime Environment Requirements |<ul><li>[x] </li></ul>|...| Propose to use binaryen for compiling/interpreting wasm runtime calls. .
| 3. | Multichain Support |<ul><li>[x] </li></ul>|...| Mentions testing of compatibility with Westend, Kusama, and Polkadot. No mention of XCM use cases.
| 4. | JSON-RPC APIs |<ul><li>[] </li></ul>|...| Transactions related methods missing. Cleanest way to integrate with the browser is implementing the SC extension protocol [here](https://github.com/paritytech/substrate-connect/tree/main/packages/connect-extension-protocol). We are aware that the JRPC interface is unstable, but for completeness would make sense to add the other RPC methods to the minimal set. Also, please details in stages of implementation. 
| 5. | Dependencies |<ul><li>[x] </li></ul>|...| Technically speaking, the delivery passes. Quite sparse for crypto, relatively a bit more detailed for networking.

## General Remarks

The concerns raised in previous evaluation have been by and large addressed. However, the delivery is more of an implementation roadmap than a Light Client Spec that can be integrated into [Polkadot Spec](https://spec.polkadot.network/). We have a few minor suggestions mentioned above, please include them. We have also taken into consideration the initial strides towards implementing a Light Client [here](https://github.com/eqlabs/polkadot-light-client-spec/). We suggest integrating it into your delivery and making necessary amendments (e.g removing claims of integration into Polkadot Spec) to the initial Grant proposal via a PR. 

