# Evaluation


- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/kodadot_assethub_nft_indexer_statemine_statemint.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by PieWol


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- |------------- | ------------- |
| **0a.** | License | <ul><li>[] </li></ul> |   |  | 
| **0b.**  | Documentation | <ul><li>[] </li></ul> | | | 
| **0c.** | Testing Guidelines | <ul><li>[] </li></ul> | |  | 
| **0d.** | Docker Integration | <ul><li>[] </li></ul> | |  | 
| 1a.    | Backward Compatibility Maintenance   | <ul><li>[] </li></ul> |           | Ensuring backward compatibility with current Uniques v1.                                                      |
| 1b.   | Collection Schema Development    | <ul><li>[] </li></ul> |           | Development of a GraphQL schema entity that represents the collection.                                        |
| 1c.   | NFT Schema Development   | <ul><li>[] </li></ul> |                     | Formulation and creation of a GraphQL schema entity representing Non-fungible tokens.                         |
| 2.    | Unique v1.1 Handlers      | <ul><li>[] </li></ul> |             | Implement a handlers to index buy, set_price events from the chain.                                               |
| 3.   | NFT Pallet Handlers       | <ul><li>[] </li></ul> |           | Handler created for indexing create, mint, buy, set_price, transfer, burn events from the chain.           |
| 4a.   | On-chain Attributes Schema Design   | <ul><li>[] </li></ul> |    | Development and design of a GraphQL schema entity representing on-chain attributes.                           |
| 4b.   | On-chain Attributes Handlers  | <ul><li>[] </li></ul> |       | Implementing a four handlers to index the creation and deletion of metadata set for collection and NFT from the chain. |
| 5a.   | Metadata Schema Development | <ul><li>[] </li></ul> |                | Creating and designing a GraphQL schema entity representing metadata.                                     |
| 5b.   | Metadata Handlers        | <ul><li>[] </li></ul> |            | Implementing a four handlers to index the creation and deletion of an attribute for collection and NFT from the chain.  |
| 5c.   | Metadata IPFS Integration Handler  | <ul><li>[] </li></ul> |    | Design a handler to retrieve IPFS Metadata from the IPFS network.                                                 |
| 5d.   | Metadata IPFS Unification Handler   | <ul><li>[] </li></ul> |   | Design and integrate the library to uniform IPFS metadata into one format (OpenSea,TZIP-16,ERC-5773, FXhash)    |
| 6a.   | NFT Royalties Schema Integration  | <ul><li>[] </li></ul> |     | Design and include royalty support within the GraphQL schema.                                                  |
| 6b.   | NFT Royalties Addition Handler   | <ul><li>[] </li></ul> |      | Implement a handler to add royalty into NFT.                                                 |
| 6c.   | NFT Royalties PAYOUT Handler     | <ul><li>[] </li></ul> |       |Creation of handler to index royalty payout events from the chain.                                             |
| 7a.      | Fungible Assets Schema Creation    | <ul><li>[] </li></ul> |   |Design and formulation of a GraphQL schema entity representing fungible assets.                                |
| 7b.      | Fungible Assets Force Creation    | <ul><li>[] </li></ul> |     |Handlers will be developed to add system tokens like KSM/DOT into fungible assets.                             |
| 7c.      | Fungible Assets CREATE Event     | <ul><li>[] </li></ul> |      |An event handler for indexing the creation of a fungible event from a chain, such as (RMRK/USDT) will be developed.|
| 7d.      | Metadata Support for Fungible Assets | <ul><li>[] </li></ul> |   |Implement a handler to add metadata to a fungible asset event from the chain.                          |
| 7e.   | Fungible Asset Allowlist Setup    | <ul><li>[] </li></ul> |     |Setting up allows list-based indexing of fungible assets.                                                       |
| 8a.  | Data Views Development        | <ul><li>[] </li></ul> |         |Construction of data views for efficient access to indexed data.                                               |
| 8b.  | Implementing Metadata Caching Layer | <ul><li>[] </li></ul> | |Develop and retry IPFS metadata if un-indexed by Metadata IPFS Integration Handler.                                                               |
| 9.    | Transfer of Collection Ownership | <ul><li>[] </li></ul> |    |Incorporate functionality to transfer collection ownership.                                                    |
| 10a.    | Collection settings Schema Design  | <ul><li>[] </li></ul> |   | Development and design of a GraphQL schema entity representing Collection settings     |
| 10b.    | Collection settings handler   | <ul><li>[] </li></ul> |  | Implement a handler to add collection settings into data                                                  |

