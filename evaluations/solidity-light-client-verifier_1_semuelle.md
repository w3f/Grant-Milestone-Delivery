# Evaluation

- **Status:** In Progress
- **Application Document:** clickme
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [paritytech/frontier](https://github.com/paritytech/frontier/blob/fba84577bf6507d76d40af891d2db38f4e385c11/LICENSE-APACHE2) | Apache 2.0, as dictated by `paritytech/frontier` |
| **0b.** | Documentation | <ul><li>[ ] </li></ul> | link | We will provide both **inline documentation** of the code. |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul> | link | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. |
| **0d.** | Docker | <ul><li>[ ] </li></ul> | link | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | BLS12-377 precompile | <ul><li>[ ] </li></ul> | link | We will create a [EIP-2539](https://eips.ethereum.org/EIPS/eip-2539) compatible BLS12-377 precompile which can run inside [frontier](https://github.com/paritytech/frontier). It will be developed using Rust programming language. The libraries we plan to use are [arkworks-rs/curves](https://github.com/arkworks-rs/curves) library or the substrate host function calls provided by this [Pull Request](https://github.com/paritytech/substrate/pull/13031).<br />Other references: <br />https://github.com/celo-org/celo-blockchain/pull/1157<br />https://github.com/celo-org/celo-blockchain/pull/1341 |
| 2. | BW6-761 precompile | <ul><li>[ ] </li></ul> | link | We will create a [EIP-3026](https://eips.ethereum.org/EIPS/eip-3026) compatible BW6-761 precompile which can run inside [frontier](https://github.com/paritytech/frontier). The programming language and libs to use are the same as BLS12-377 precompile.<br />Other references: <br />https://github.com/celo-org/celo-blockchain/pull/1282 |
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
