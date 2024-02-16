# Milestone Delivery :mailbox:

<!-- **The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).** -->

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

- **Application Document:** [kodadot_assethub_nft_indexer_statemine_statemint.md](https://github.com/w3f/Grants-Program/blob/master/applications/kodadot_assethub_nft_indexer_statemine_statemint.md)

- **Milestone Number:** 1

**Context:** 

The milestone 1 of KodaDot's Assethub indexer for non-fungible tokens contains and delivers the following:
- Schema for all the entities that are going to be indexed by the indexer.
- The indexer is able to index the following entities:
  - Collections
  - NFTs
  - Attributes
  - Metadata
  - Fungible Assets
- The indexer is able to index the following pallets:
  - Uniques
  - NFTs
  - Assets


**Deliverables**


| Number | Deliverable                          | Link                                                                                                                            | Notes                                                                                |
| ------ | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 0a.    | Licensing                            | [LICENCE](https://github.com/kodadot/stick/blob/main/LICENCE)                                                                   | MIT                                                                                  |
| 0b.    | Documentation                        | [an explicit README file to guide the project setup and execution](https://github.com/kodadot/stick/blob/arrow-stick/README.md) | -                                                                                    |
| 0c.    | Test Guidelines                      | [Testing](https://github.com/kodadot/stick/tree/arrow-stick/tests)                                                              | [Testing of 5d is in](https://github.com/kodadot/packages/tree/main/hyperdata/tests) |
| 0d.    | Docker Integration                   | [Docker Compose](https://github.com/kodadot/stick/blob/arrow-stick/docker-compose.yml)                                          | needs to run as docker compose                                                       |
| 1a.    | Backward Compatibility Maintenance   | [Uniques v1](https://github.com/kodadot/stick/tree/arrow-stick/src/mappings/uniques)                                            | -                                                                                    |
| 1b.    | Collection Schema Development        | [GraphQL schema collection.](https://github.com/kodadot/stick/blob/arrow-stick/schema.graphql#L1)                               | -                                                                                    |
| 1c.    | NFT Schema Development               | [GraphQL schema NFT.](https://github.com/kodadot/stick/blob/arrow-stick/schema.graphql#L50)                                     | -                                                                                    |
| 2.     | Unique v1.1 Handlers                 | [Uniques v1.1 (buy, set_price)](https://github.com/kodadot/stick/tree/arrow-stick/src/mappings/uniques)                         | -                                                                                    |
| 3.     | NFT Pallet Handlers                  | [NFTs v1](https://github.com/kodadot/stick/tree/arrow-stick/src/mappings/nfts)                                | -                                                                                    |
| 4a.    | On-chain Attributes Schema Design    | [GraphQL schema attribute.](https://github.com/kodadot/stick/blob/arrow-stick/schema.graphql#L87)                                             | -                                                                                    |
| 4b.    | On-chain Attributes Handlers         | [Handling Attributes](https://github.com/kodadot/stick/blob/arrow-stick/src/mappings/nfts/setAttribute.ts)          | -                                                                                    |
| 5a.    | Metadata Schema Development          | [GraphQL schema attribute.](https://github.com/kodadot/stick/blob/arrow-stick/schema.graphql#L76)                                                          | -                                                                                    |
| 5b.    | Metadata Handlers                    | [Handling metadata](https://github.com/kodadot/stick/blob/arrow-stick/src/mappings/nfts/setMetadata.ts)          | -                                                                                    |
| 5c.    | Metadata IPFS Integration Handler    | [retrieve IPFS Metadata from the IPFS network.](https://github.com/kodadot/stick/blob/arrow-stick/src/mappings/utils/metadata.ts#L10)                                                               | -                                                                                    |
| 5d.    | Metadata IPFS Unification Handler    | [Library](https://github.com/kodadot/packages/tree/main/hyperdata)                   | -                                                                                    |
| 6a.    | NFT Royalties Schema Integration     | [GraphQL schema collection royalty](https://github.com/kodadot/stick/blob/arrow-stick/schema.graphql#L24) ,  [GraphQL schema nft royalty.](https://github.com/kodadot/stick/blob/arrow-stick/schema.graphql#L69)                                                                | -                                                                                    |
| 6b.    | NFT Royalties Addition Handler       | [set royalty](https://github.com/kodadot/stick/blob/arrow-stick/src/mappings/nfts/setAttribute.ts#L20)                                                                                   | -                                                                                    |
| 6c.    | NFT Royalties PAYOUT Handler         | [Pay royalty](https://github.com/kodadot/stick/blob/arrow-stick/src/mappings/nfts/payTips.ts)                                                              | -                                                                                    |
| 7a.    | Fungible Assets Schema Creation      | [GraphQL schema asset.](https://github.com/kodadot/stick/blob/arrow-stick/schema.graphql#L156)                                                   | -                                                                                    |
| 7b.    | Fungible Assets Force Creation       | [add system tokens](https://github.com/kodadot/stick/blob/arrow-stick/src/mappings/assets/forceToken.ts#L36)                                              | -                                                                                    |
| 7c.    | Fungible Assets CREATE Event         | [add assets](https://github.com/kodadot/stick/blob/arrow-stick/src/mappings/assets/create.ts)             | -                                                                                    |
| 7d.    | Metadata Support for Fungible Assets | [add metadata](https://github.com/kodadot/stick/blob/arrow-stick/src/mappings/assets/setMetadata.ts)                                                   | -                                                                                    |
| 7e.    | Fungible Asset Allowlist Setup       | [Allow List](https://github.com/kodadot/stick/blob/arrow-stick/src/mappings/assets/forceToken.ts#L36)                                                                       | -                                                                                    |
| 8a.    | Data Views Development               | [GraphQL schema Token](https://github.com/kodadot/stick/blob/arrow-stick/schema.graphql#L50)                                                                 | Introduced new entity to make data views faster                                                                                    |
| 8b.    | Implementing Metadata Caching Layer  | [retry IPFS metadata if un-indexed by Metadata IPFS Integration Handler.](https://github.com/kodadot/stick/blob/arrow-stick/src/mappings/utils/cache.ts)                                             | -                                                                                    |
| 9.     | Transfer of Collection Ownership     | [transfer collection ownership.](https://github.com/kodadot/stick/blob/arrow-stick/src/mappings/nfts/setAttribute.ts)                                                                   | -                                                                                    |
| 10a.   | Collection settings Schema Design    | [GraphQL schema collection settrings.](https://github.com/kodadot/stick/blob/arrow-stick/schema.graphql#K93)                                            | -                                                                                    |
| 10b.   | Collection settings handler          | [add collection settings into data](https://github.com/kodadot/stick/blob/arrow-stick/src/mappings/nfts/updateMintSettings.ts)                                                                        | -                                                                                    |

**Additional Information**

Validity of the delivery has been checked by the [Squid Integrity checker that we wrote](https://github.com/vikiival/squidtegrity) for this purpose. The delivery is valid.
And we have not found any unknown deviations from the "test" FireSquid that we wrote as Proof of Concept.

As a runner setup we highly recommend to use [casey/just](https://github.com/casey/just) to run the indexer.

