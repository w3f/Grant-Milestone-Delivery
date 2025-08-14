# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Nullifier Prime](https://github.com/NP-Eng/Grants-Program/blob/90c5079c9f84b436991d215f9429682eda2cc659/applications/np-compliant_and_programmable_privacy.md)
* **Milestone Number:** 1

**Context**

Milestone 1 focuses on implementing core protocol-level data structures and transaction types to enable privacy primitives within an EVM-compatible Substrate chain. Concretely, we introduce Merkle trees for deposit commitments, define a new Shield transaction type, extend block headers with a commitment root, and integrate these with a fork of the EVM execution engine (SputnikVM). We also provide a node template and baseline benchmarks for the primitive data types.

Primary code branches for this milestone:

- Frontier fork (Substrate EVM integration): [NP-Eng/frontier (Add-shielding)](https://github.com/NP-Eng/frontier/tree/Add-shielding)
- EVM engine fork (SputnikVM): [NP-Eng/evm (v0.x)](https://github.com/NP-Eng/evm/tree/v0.x)

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |
| 0a. | License | [Frontier — LICENSE](https://github.com/NP-Eng/frontier/blob/master/LICENSE-APACHE2) · [EVM — LICENSE](https://github.com/NP-Eng/evm/blob/v0.x/LICENSE) | |
| 0b. & 0c. | Documentation and testing guide | [Frontier — SHIELDING_POOL.md](https://github.com/NP-Eng/frontier/blob/m1/docs/SHIELDING_POOL.md), [Frontier — SHIELDING_INTEGRATION.md](https://github.com/NP-Eng/frontier/blob/m1/docs/SHIELDING_INTEGRATION.md) |  |
| 0d. | Docker | [Dockerfile](https://github.com/NP-Eng/frontier/blob/f2af5fd64315dab1fea7c1074c6403943ada4cf9/Dockerfile), [Docker instructions](https://github.com/NP-Eng/frontier/blob/0b6c6842177251dce730bf77420a3b8c7522b150/README-Docker.md)| |
| 1. | Merkle tree implementation | [Merkle trees backend](https://github.com/NP-Eng/evm/blob/m1/src/backend/merkle_tree.rs) | |
| 2. | Shield transaction type | [EVM](https://github.com/NP-Eng/evm/blob/m1/src/backend/mod.rs#L57) | |
| 3. | Block header modification | - | No change to the block header. The Merkle tree holding the shielding pool is stored in the state so it is represented in the block header as part of the state root hash |
| 4. | Modified EVM engine (SputnikVM) | [EVM — v0.x](https://github.com/NP-Eng/evm/tree/v0.x) | |
| 5. | Benchmarks | [EVM](https://github.com/rust-ethereum/evm/blob/414aecf69988ec320c4ae66c7c57b30dc0fab2f3/benches/loop.rs) | |
| 6. | Node template | - | No change to the node template. The "shielding" functionality follows the normal transaction templates  |
| 7. | Tests | [Frontier — Shielding tests](https://github.com/NP-Eng/frontier/blob/m1/examples/test-shielding.js) | |
