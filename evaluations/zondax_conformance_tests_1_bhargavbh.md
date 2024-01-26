# Evaluation

- **Status:** Completed
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadot_tests.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** None

| Number | Deliverable | Accepted | Link | Description | Evaluation Notes
| ------ | ----------- | :------: | ---- |----------------- | ----------
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/Zondax/polkadot-testing/blob/0ae9c28e0a2c0fb1076d723fd3f207d25b914111/LICENSE) | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Report](https://github.com/Zondax/polkadot-testing/blob/main/docs/report.pdf) | We will provide an inline documentation of the code and a basic tutorial | Detailed report delivered
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/Zondax/polkadot-testing/blob/main/docs/report.md#supplementary-information) | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | Testing guides have been provided. However, there were several manual steps to get the tests running, like attributing sudo, setting up runtime code, interacting with polkadot-UI etc. which could have been better automated. Nevertheless, the guide provided is complete and self contained. 
| **0d.** | Docker | <ul><li>[x] </li></ul> | [/docker](https://github.com/Zondax/Polkadot-conformance-tests/tree/ccc6fba4698f03ece52d731fad0bcd82f8864cdf/docker) | Docker Image with setup | Accepted
| 0e. | Article | <ul><li>[x] </li></ul> | [zondax.ch](https://zondax.ch/blog/polkadot-testing) | Article Summarizing results | Published as a blog on Zondax's homepage
| 1. | PoC code | <ul><li>[x] </li></ul> | [Code](https://github.com/Zondax/polkadot-testing) | General structure | Main contributions include test-related [RPC additions](https://github.com/Zondax/polkadot-sdk/blob/782fee61d821d33b15fb5235a4ee15380aa2a913/polkadot/rpc/src/lib.rs) and new [Runtime code](https://github.com/Zondax/polkadot-sdk/blob/782fee61d821d33b15fb5235a4ee15380aa2a913/polkadot/zondax/src/runtime.rs) that specifically triggers host-API related tests.
| 2a. | Code | <ul><li>[x] </li></ul> | [Code](https://github.com/Zondax/Polkadot-conformance-tests/tree/ccc6fba4698f03ece52d731fad0bcd82f8864cdf/scripts/host_api) | PoC Tests: Host API: cryptography primitives | Also includes [Storage API](https://github.com/Zondax/Polkadot-conformance-tests/blob/ccc6fba4698f03ece52d731fad0bcd82f8864cdf/scripts/host_api/storage.py) tests
| 2b. | Code | <ul><li>[x] </li></ul> | [Code](https://github.com/Zondax/Polkadot-conformance-tests/blob/ccc6fba4698f03ece52d731fad0bcd82f8864cdf/scripts/state-trie.py) | PoC Tests: State-Tries | Tests on fetching trie root and insert operations. 
| 2c. | Code | <ul><li>[x] </li></ul> | [Code](https://github.com/Zondax/Polkadot-conformance-tests/blob/ccc6fba4698f03ece52d731fad0bcd82f8864cdf/scripts/encoding.py) | PoC Tests: Scale encoding and decoding | A few tests provided, however RPC approach may not be the most appropriate for SCALE.


## Overall Evaluation
The Milestone has been delivered satisfactorily. As part of the deliverables, the team provided a PoC on using custom Runtime and RPC calls for conformance test of Polkadot Hosts. This approach was instantiated on Polkadot-SDK and required relatively changes to the codebase by introducing custom RPCs for interacting with the functionality of the Host under test. The main components for which PoC tests were provided include Crypto and Storage Host APIs, operations on State-Trie, and SCALE. As concluded, it may be difficult to apply this approach for conformance testing of diverse clients as it needs modifications in each Host to provide the RPC inlets. The custom runtime is however usable across multiple hosts. The milestone is complete and i am happy to approve it. 

The team also worked on a PoC [tool](https://github.com/Zondax/polkadot-testing-p2p) for testing at the P2P level, which is not part of the Grants deliverables. The tool lets you send transaction at p2p level, the PoC includes tests for the Ping Interface of Polkadot. However, it is unclear how this tool can be used for testing. Basically, how would you craft messages at the network level which trigger the functionality of the Host under tests. Such mappings are necessary to be investigated before moving forward in this direction. Also, a clearer comparison with this approach and tools like Zombienet needs to be performed, however its outside the scope of this grant. 
