# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/solidity-verifier-for-accountable-light-client.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [paritytech/frontier](https://github.com/paritytech/frontier/blob/fba84577bf6507d76d40af891d2db38f4e385c11/LICENSE-APACHE2) | Apache 2.0, as dictated by `paritytech/frontier` |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [rustdocs1](https://paritytech.github.io/frontier/rustdocs/pallet_evm_precompile_bls12377/index.html), [rustdocs2](https://paritytech.github.io/frontier/rustdocs/pallet_evm_precompile_bw6761/index.html) | Good inline documentation. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [bls12377](https://github.com/paritytech/frontier/blob/fba84577bf6507d76d40af891d2db38f4e385c11/frame/evm/precompile/bls12377/src/tests.rs), [bw6761](https://github.com/paritytech/frontier/blob/master/frame/evm/precompile/bw6761/src/tests.rs) | — |
| 1. | BLS12-377 precompile | <ul><li>[x] </li></ul> | [frame/evm/precompile/bls12377](https://github.com/paritytech/frontier/tree/fba84577bf6507d76d40af891d2db38f4e385c11/frame/evm/precompile/bls12377) | — |
| 2. | BW6-761 precompile | <ul><li>[x] </li></ul> | [frame/evm/precompile/bw6761](https://github.com/paritytech/frontier/tree/fba84577bf6507d76d40af891d2db38f4e385c11/frame/evm/precompile/bw6761) | — |


## General Notes

- Merged into [paritytech/frontier](https://github.com/paritytech/frontier/pull/1049/) on May 8, 2023.
- Docker default deliverable removed as unnecessary.
