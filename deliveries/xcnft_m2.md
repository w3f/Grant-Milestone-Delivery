# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [xcNFT.md](https://github.com/w3f/Grants-Program/blob/master/applications/xcNFT.md)
* **Milestone Number:** 2

**Context** 

Milestone delivered further refactoring, benchmarks, and official documentation for the xcNFT pallet. 

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[MIT xcNFT](https://github.com/paraspell-research/xcnft-pallet/blob/main/LICENSE), [MIT DOCS](https://github.com/paraspell-research/xcnft-docs/blob/main/LICENSE)| MIT| 
| 0b.  | Documentation |[Main xcNFT readme](https://github.com/paraspell-research/xcnft-pallet/blob/main/README.md), [xcNFT pallet_nfts readme](https://github.com/paraspell-research/xcnft-pallet/tree/main/xcnft-pallet_nfts), [xcNFT pallet_uniques readme](https://github.com/paraspell-research/xcnft-pallet/blob/main/xcnft-pallet_uniques/README.md), [official documentation](https://paraspell-research.github.io/xcnft-docs/)| Readmes for all major parts of repository + inline documentation in each version of pallet + official documentation | 
| 0c.  | Testing guide | [Testing guide in readme](https://github.com/paraspell-research/xcnft-pallet/blob/main/README.md#testing-pallet-functionality-), [Testing guide in docs](https://paraspell-research.github.io/xcnft-docs/implementation-guide/introduction.html#testing-pallet-functionality-%F0%9F%94%8E), [Unit tests commit](https://github.com/paraspell-research/xcnft-pallet/commit/c6682ecdf2fe9fdc51a678b028d77a0a4e33efa6) |  Testing guide mentioned in readme and official docs & core unit tests | 
| 0d.  | Docker | [Docker guide](https://github.com/paraspell-research/xcnft-pallet/blob/main/README.md#dockerized-local-testnet-build), [Docker image](https://github.com/paraspell-research/xcnft-pallet/blob/main/Dockerfile)| Docker file provided to test the functionality of the solution | 
| 0e. | Article |[Medium article link](https://medium.com/@dudo50/pallet-agnostic-cross-chain-nft-pallet-for-polkadot-paraverse-10a18a31b8ea) | Following article sums up state-of-the-art advancement in pallet-agnostic cross-chain NFT transfers on Polkadot and introduces xcNFT pallet. | 
| 1. | xcNFT Abstract collection/NFT selection logic | [Commit adding abstracted collection and nft logic of xcNFT pallet_nfts version](https://github.com/paraspell-research/xcnft-pallet/commit/99a1202fd258c5bc085e4f200af4475b3690bd18), [Commit adding abstracted collection and nft logic of xcNFT pallet_uniques version](https://github.com/paraspell-research/xcnft-pallet/commit/447c7fc9bb84c47ab5a0f2171e4306270dfa67f5) | Introduced abstracted collection and asset selection logic in the form of CollectionId and ItemId parameters. | 
| 2. | xcNFT Refactor | [Commit adding refactored code of xcNFT pallet_nfts version](https://github.com/paraspell-research/xcnft-pallet/commit/99a1202fd258c5bc085e4f200af4475b3690bd18), [Commit adding refactored code of xcNFT pallet_uniques version](https://github.com/paraspell-research/xcnft-pallet/commit/447c7fc9bb84c47ab5a0f2171e4306270dfa67f5) | Introduced refactored code, that takes care of formatting, correct ensure! macro logic and efficient function execution. Also includes inline code documentation for everything. | 
| 3. | xcNFT Benchmark | [Commit adding benchmarks and weights.rs files to the xcNFT](https://github.com/paraspell-research/xcnft-pallet/commit/62d30f13f3619532c0070f07882f27b3948d54d7) | Feature benchmarks and weights.rs files to each version of the xcNFT pallet. | 
| 4.a | xcNFT Github Pages Docs I | [Commit adding developer guide documentation](https://github.com/paraspell-research/xcnft-docs/commit/cfad76685843cea4ec0777bea33ea08dc4388b83)| Introduced developer guide documentation. | 
| 4.b | xcNFT Github Pages Docs II | [Commit adding user guide documentation](https://github.com/paraspell-research/xcnft-docs/commit/58cb122c13675c23332c13bfd182ef63c6678228) | Introduced user guide documentation. | 

Some of the provided commits no longer contain the latest version of xcNFT. There were some minor changes to certain functions since. The latest version is contained within [this commit](https://github.com/paraspell-research/xcnft-pallet/commit/e42b3aea8faa56760e02621d9bf6afc7f93c7279).

The pallet has to be tested within the [following repository](https://github.com/paraspell-research/polkadot-sdk) because the latest pallet_nfts and pallet_uniques update from the [following PR](https://github.com/paritytech/polkadot-sdk/pull/6087) hasn't yet been published.

**Additional Information**

Every aspect of the project, that was defined in the proposal, was implemented according to it. There were no changes required during the development of the second milestone. There is some future work we would like to continue working on (without any continuous funding) regarding this pallet to make it a fully baked solution that is plug-and-play to any Parachain because there are currently some limitations, such as Parachains needing to sync on collection and asset ID types (For example both need to have asset ids as u32 or u128 or Hash or else in order to be cross-chain NFT compatible). The documentation is also to be improved as the pallet is shaped further. We are planning to add video guides to help regular non-technical users with using the pallet.
