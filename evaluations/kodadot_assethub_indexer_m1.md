# Evaluation


- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/kodadot_assethub_nft_indexer_statemine_statemint.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by PieWol


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- |------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [license](https://github.com/kodadot/stick/blob/5cdeec1139e3a68fa2ecec1427d4b9d02b2d152a/LICENSE)  | MIT | 
| **0b.**  | Documentation | <ul><li>[] </li></ul> |https://github.com/kodadot/stick/blob/1cda35bd2cba5dc20aa37bd9005d2158e1aeb497/README.md | The readme is concise and well written. Inline Documentation is lacking.| 
| **0c.** | Testing Guidelines | <ul><li>[] </li></ul> | - | Link to unit tests and testing guidelines is missing | 
| **0d.** | Docker Integration | <ul><li>[x] </li></ul> | https://github.com/kodadot/stick/blob/arrow-stick/docker-compose.yml | | 
| 1a.    | Backward Compatibility Maintenance   | <ul><li>[x] </li></ul> |    https://github.com/kodadot/stick/tree/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/src/mappings/uniques   | Ensuring backward compatibility with current Uniques v1.                                     |
| 1b.   | Collection Schema Development    | <ul><li>[x] </li></ul> |     https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/schema.graphql#L1      | Development of a GraphQL schema entity that represents the collection.                                        |
| 1c.   | NFT Schema Development   | <ul><li>[x] </li></ul> |   https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/schema.graphql#L50        | Formulation and creation of a GraphQL schema entity representing Non-fungible tokens.                         |
| 2.    | Unique v1.1 Handlers      | <ul><li>[x] </li></ul> |      https://github.com/kodadot/stick/tree/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/src/mappings/uniques       | TODO                                            |
| 3.   | NFT Pallet Handlers       | <ul><li>[x] </li></ul> |      https://github.com/kodadot/stick/tree/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/src/mappings/nfts     | Handler created for indexing create, mint, buy, set_price, transfer, burn events from the chain.           |
| 4a.   | On-chain Attributes Schema Design   | <ul><li>[x] </li></ul> |  https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/schema.graphql#L87  | Development and design of a GraphQL schema entity representing on-chain attributes.                           |
| 4b.   | On-chain Attributes Handlers  | <ul><li>[x] </li></ul> |   https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/src/mappings/nfts/setAttribute.ts    | Implementing a four handlers to index the creation and deletion of metadata set for collection and NFT from the chain. |
| 5a.   | Metadata Schema Development | <ul><li>[x] </li></ul> |         https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/schema.graphql#L76       | Creating and designing a GraphQL schema entity representing metadata.                                     |
| 5b.   | Metadata Handlers        | <ul><li>[x] </li></ul> |     https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/src/mappings/nfts/setMetadata.ts       | Implementing a four handlers to index the creation and deletion of an attribute for collection and NFT from the chain.  |
| 5c.   | Metadata IPFS Integration Handler  | <ul><li>[x] </li></ul> |  https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/src/mappings/utils/metadata.ts#L10  | Design a handler to retrieve IPFS Metadata from the IPFS network.                                                 |
| 5d.   | Metadata IPFS Unification Handler   | <ul><li>[x] </li></ul> |  https://github.com/kodadot/packages/tree/044bbb328e88d747526cdb4b588c0318770c2b4a/hyperdata | Design and integrate the library to uniform IPFS metadata into one format (OpenSea,TZIP-16,ERC-5773, FXhash)   |
| 6a.   | NFT Royalties Schema Integration  | <ul><li>[x] </li></ul> |   https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/schema.graphql#L24 and https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/schema.graphql#L69 | Design and include royalty support within the GraphQL schema.                                                  |
| 6b.   | NFT Royalties Addition Handler   | <ul><li>[x] </li></ul> |  https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/src/mappings/nfts/setAttribute.ts#L20    | Implement a handler to add royalty into NFT.                                                 |
| 6c.   | NFT Royalties PAYOUT Handler     | <ul><li>[x] </li></ul> |    https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/src/mappings/nfts/payTips.ts   |Creation of handler to index royalty payout events from the chain.                                             |
| 7a.      | Fungible Assets Schema Creation    | <ul><li>[] </li></ul> |  https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/schema.graphql#L156 |Design and formulation of a GraphQL schema entity representing fungible assets.                                |
| 7b.      | Fungible Assets Force Creation    | <ul><li>[x] </li></ul> |  https://github.com/kodadot/stick/blob/1cda35bd2cba5dc20aa37bd9005d2158e1aeb497/src/mappings/assets/forceToken.ts#L36   |Handlers will be developed to add system tokens like KSM/DOT into fungible assets.                             |
| 7c.      | Fungible Assets CREATE Event     | <ul><li>[] </li></ul> |  https://github.com/kodadot/stick/blob/1cda35bd2cba5dc20aa37bd9005d2158e1aeb497/src/mappings/assets/forceToken.ts#L45    |An event handler for indexing the creation of a fungible event from a chain, such as (RMRK/USDT) will be developed.|
| 7d.      | Metadata Support for Fungible Assets | <ul><li>[x] </li></ul> | https://github.com/kodadot/stick/blob/1cda35bd2cba5dc20aa37bd9005d2158e1aeb497/src/mappings/assets/setMetadata.ts  |Implement a handler to add metadata to a fungible asset event from the chain.                          |
| 7e.   | Fungible Asset Allowlist Setup    | <ul><li>[x] </li></ul> |    https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/src/mappings/assets/forceToken.ts#L36 |Setting up allows list-based indexing of fungible assets.                                                       |
| 8a.  | Data Views Development        | <ul><li>[x] </li></ul> |   https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/schema.graphql#L50      |Construction of data views for efficient access to indexed data.                                               |
| 8b.  | Implementing Metadata Caching Layer | <ul><li>[x] </li></ul> | https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/src/mappings/utils/cache.ts |Develop and retry IPFS metadata if un-indexed by Metadata IPFS Integration Handler.                                                               |
| 9.    | Transfer of Collection Ownership | <ul><li>[x] </li></ul> |  https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/src/mappings/nfts/setAttribute.ts   |Incorporate functionality to transfer collection ownership.                                                    |
| 10a.    | Collection settings Schema Design  | <ul><li>[x] </li></ul> | https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/schema.graphql#K93  | Development and design of a GraphQL schema entity representing Collection settings     |
| 10b.    | Collection settings handler   | <ul><li>[x] </li></ul> | https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/src/mappings/nfts/updateMintSettings.ts  | Implement a handler to add collection settings into data                                                  |


## General Notes
The application stated that there will be comprehensive inline documentation but nearly every deliverable is completely without inline documentation. This should be added. Both in the actual code and in the graphQL schemas. 

## 4b. On-chain Attributes Handlers
https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/schema.graphql#L87  

What does this schema relate to? Can you please point me at the on-chain structure it should represent?

## 7a. Fungible Assets Schema Creation  
https://github.com/kodadot/stick/blob/3aaf0292abe9b93d69e749b0713ee6e97624c2b6/schema.graphql#L156

Shouldn't the fungible asset schema contain more features? I would expect the schema to represent all information available for this fungible asset. See the following images from polkadot.js/apps to see what I would expect: 

## 7b. Fungible Assets Force Creation
This only works for system tokens that are not yet ported to assetHub, doesn't it?

// insert picture

## Link to 7c correct? 
Fungible Assets CREATE Event 
links to https://github.com/kodadot/stick/blob/1cda35bd2cba5dc20aa37bd9005d2158e1aeb497/src/mappings/assets/forceToken.ts#L45

which is part of the forceToken.ts file still and doesn't look like a handler for regular "create fungible asset" events.

## Difference between 10a and 1b?
Why was this listed twice as deliverable if there is no difference?


