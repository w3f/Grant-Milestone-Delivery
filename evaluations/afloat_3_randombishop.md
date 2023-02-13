# Evaluation



- **Status:** PENDING
- **Application Document:** [Afloat](https://github.com/w3f/Grants-Program/blob/master/applications/Afloat.md)
- **Milestone:** 3
- **Kusama Identity:** randombishop (https://sub.id/5Gnixfp6vnznRkr91JgwkxYnCJCyHr8EaBzYfFsUKcTMzVYF)
- **Previously successfully merged evaluation:** [Milestone 2](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/afloat_2_randombishop.md)

| Number | Deliverable            | Accepted | Link                                                                                                                                                                                                                                                                                                                                                                                                                      | Evaluation Notes                                                                                                     |
|-------:|------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
|    0a. | License                |          | [Licence](https://github.com/hashed-io/hashed-substrate/blob/main/LICENSE)                                                                                                                                                                                                                                                                                                                                                | MIT                                                                                                                  |
|    0b. | Documentation          |          | https://github.com/hashed-io/hashed-marketplaces-ui <br> https://github.com/hashed-io/hashed-substrate <br>[Marketplace](https://github.com/hashed-io/hashed-substrate/tree/main/pallets/gated-marketplace)<br> [Fruniques](https://github.com/hashed-io/hashed-substrate/tree/main/pallets/fruniques)<br> https://github.com/hashed-io/hashed-private-server <br> https://github.com/hashed-io/hashed-private-client-api | OK.                                                                                                                  |
|    0c. | Testing                |          | [Github repository](https://github.com/hashed-io/hashed-substrate/blob/main/pallets/gated-marketplace/src/tests.rs)                                                                                                                                                                                                                                                                                                       |                                                                      |
|    0d. | Video                  |          | [English](https://drive.google.com/file/d/1YtlNNsmhpxzKgVTLbaMXC7unRzfVLNbE/view?usp=share_link) and [Spanish](https://drive.google.com/file/d/1D9LQ2KCDVWGbuTZ7_Oo-QYvOqNg9PUH3/view?usp=share_link) versions                                                                                                                                                                                                            |  |
|    0e. | Article                |          | [English](https://docs.google.com/document/d/1clgBMWQQXGqZd6p7P7CmZwEo0YaM5WRMZLISOn3FuNI/edit?usp=sharing) and [Spanish](https://docs.google.com/document/d/1AB-2sKU8GHO-yLZOQ-sn0MOlsCABPXG6gfRG61BtRXc/edit?usp=sharing) versions                                                                                                                                                                                      |                  |
|     1. | Order Part of an NFT   |          | [Gated Markeplace business documentation.](https://github.com/hashed-io/hashed-substrate/blob/develop/docs/pallets-review/gated-marketplace.md#order-part-of-an-nft) The code can be found in the repositories on the last section.                                                                                                                                                                                       |                                                                                                                      |
|     2. | Complete/Confirm Order |          | [Gated Markeplace business documentation.](https://github.com/hashed-io/hashed-substrate/blob/develop/docs/pallets-review/gated-marketplace.md#completeconfirm-order) The code can be found in the repositories on the last section.                                                                                                                                                                                      |                                                                                                                      |                                                                                                                     |
|     3. | Order Settlement       |          | [Gated Markeplace business documentation.](https://github.com/hashed-io/hashed-substrate/blob/develop/docs/pallets-review/gated-marketplace.md#order-settlement) The code can be found in the repositories on the last section.                                                                                                                                                                                           |                                                                                                                      |                                                                                                                     |

## Repositories
(all MIT licensed)

|                     Component | Repo                                                             | Language   |
|------------------------------:|------------------------------------------------------------------|------------|
|             Afloat Client API | https://github.com/hashed-io/afloat-client-api                   | Javascript |
|                Marketplace UI | https://github.com/hashed-io/hashed-network-portal-ui            | Quasar/Vue |
|           Marketplace pallets | https://github.com/hashed-io/hashed-substrate                    | Rust       |
| Confidential Documents Server | https://github.com/hashed-io/hashed-private-server               | Javascript |
|    Confidential Documents API | https://github.com/hashed-io/hashed-confidential-docs-client-api | Javascript |
|                        Faucet | https://github.com/hashed-io/faucet-server                       | Javascript |


## General Notes

Excellent real life application of blockchain technology. 
The repos are well documented and the codebase is a great foundation so far.


## Notes from previous delivery

* Provide a general architecture guide that describes the different repos and how they interact with each other.

* Provide a doc that describes how to deploy and configure a full system locally.

* Fix unused tests in some pallets, and add tests to the ones not covered yet.

* The UX still doesn't make sense from an end-to-end perspective. 
The marketplace creation and participation process works. 
Sharing documents and access rules work.
Creating Tax credits collections and NFTs work as well.
But it's unclear how the different aspects are connected.
Hopefully, this gets implemented and clarified at next milestone delivery along with NFT trading in a marketplace.