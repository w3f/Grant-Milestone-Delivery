# Milestone Delivery :mailbox:

**The delivery is according to the official
[milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

- **Application Document:** [kodadot_assethub_nft_m2.md](https://github.com/w3f/Grants-Program/tree/master/applications/kodadot_assethub_nft_m2.md)
- **Milestone Number:** 1

**Context** (optional)

The milestone 1 of KodaDot's Atomic swap indexer for non-fungible tokens on AssetHub contains
and delivers the following:

- Schema for all the entities that are going to be indexed by the indexer.
- The indexer is able to index the following entities:
  - Collections
  - NFTs
  - Tokens
  - Attributes
  - Metadata
  - Fungible Assets
  - Offers
  - Atomic Swaps
- The indexer is able to index the following pallets:
  - Uniques
  - NFTs
  - Assets

**Deliverables**


| Number | Deliverable                                   | Link                                                                                                                                | Notes                          |
| ------ | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 0a.    | Licensing                                     | [LICENSE](https://github.com/kodadot/stick/blob/main/LICENSE)                                                                       | MIT                            |
| 0b.    | Documentation                                 | [an explicit README file to guide the project setup and execution](https://github.com/kodadot/stick/blob/feat/swap-it-up/README.md) | -                              |
| 0c.    | Test Guidelines                               | [Testing](https://github.com/kodadot/stick/tree/feat/swap-it-up/tests)                                                              | -                              |
| 0d.    | Docker Integration                            | [Docker Compose](https://github.com/kodadot/stick/blob/feat/swap-it-up/docker-compose.yml)                                          | needs to run as docker compose |
| 1a.    | Atomic Swaps Schema Development               | [GraphQL schema swap.](https://github.com/kodadot/stick/blob/feat/swap-it-up/schema.graphql#L198)                                   | Used `Swap` instead of `SwapEntity`                              |
| 1b.    | Atomic Swaps CREATE Handler                   | [Create Handler](https://github.com/kodadot/stick/blob/feat/swap-it-up/src/mappings/nfts/createSwap.ts)                             | -                              |
| 1c.    | Atomic Swaps CANCEL Event                     | [Cancel Handler](https://github.com/kodadot/stick/blob/feat/swap-it-up/src/mappings/nfts/cancelSwap.ts)                             | -                              |
| 1d.    | Atomic Swaps CLAIM Event                      | [Claim Handler](https://github.com/kodadot/stick/blob/feat/swap-it-up/src/mappings/nfts/claim.ts)                                   | -                              |
| 1e.    | Atomic Swaps with Surcharge Handler           | [Create Handler](https://github.com/kodadot/stick/blob/feat/swap-it-up/src/mappings/nfts/createSwap.ts#L48)                         | -                              |
| 2a.    | Offers Schema Development                     | [GraphQL schema offer.](https://github.com/kodadot/stick/blob/feat/swap-it-up/schema.graphql#L173)                                  | Used `Offer` instead of `OfferEntity`                              |
| 2b.    | Offers CREATE Handler                         | [Create Handler](https://github.com/kodadot/stick/blob/feat/swap-it-up/src/mappings/nfts/createSwap.ts#L25)                         | -                              |
| 2c.    | Offers CANCEL Event                           | [Cancel Handler](https://github.com/kodadot/stick/blob/feat/swap-it-up/src/mappings/nfts/cancelSwap.ts#L23)                         | -                              |
| 3a.    | Token Schema Development                      | [GraphQL schema token.](https://github.com/kodadot/stick/blob/feat/swap-it-up/schema.graphql#L40)                                   | -                              |
| 3b.    | Token CRUD Handler                            | [Handling Token](https://github.com/kodadot/stick/blob/feat/swap-it-up/src/mappings/shared/token/tokenAPI.ts)                       | -                              |
| 4a.    | API Implementation: collectionById            | [collectionById](https://github.com/vikiival/kodaquery/blob/main/main.ts#L36)                                                       | -                              |
| 4b.    | API Implementation: collectionListByIssuer    | [collectionListByIssuer](https://github.com/vikiival/kodaquery/blob/main/main.ts#L44)                                               | -                              |
| 4c.    | API Implementation: collectionListByName      | [collectionListByName](https://github.com/vikiival/kodaquery/blob/main/main.ts#L53)                                                 | -                              |
| 4d.    | API Implementation: collectionListByOwner     | [collectionListByOwner](https://github.com/vikiival/kodaquery/blob/main/main.ts#L62)                                                | -                              |
| 4e.    | API Implementation: eventList                 | [eventList](https://github.com/vikiival/kodaquery/blob/main/main.ts#L72)                                                            | -                              |
| 4f.    | API Implementation: eventListByAddress        | [eventListByAddress](https://github.com/vikiival/kodaquery/blob/main/main.ts#L80)                                                   | -                              |
| 4g.    | API Implementation: eventListByCollectionId   | [eventListByCollectionId](https://github.com/vikiival/kodaquery/blob/main/main.ts#L89)                                              | -                              |
| 4h.    | API Implementation: eventListByInteraction    | [eventListByInteraction](https://github.com/vikiival/kodaquery/blob/main/main.ts#L98)                                               | -                              |
| 4i.    | API Implementation: eventListByItemId         | [eventListByItemId](https://github.com/vikiival/kodaquery/blob/main/main.ts#L107)                                                   | -                              |
| 4j.    | API Implementation: itemById                  | [itemById](https://github.com/vikiival/kodaquery/blob/main/main.ts#L117)                                                            | -                              |
| 4k.    | API Implementation: itemListByCollectionId    | [itemListByCollectionId](https://github.com/vikiival/kodaquery/blob/main/main.ts#L125)                                              | -                              |
| 4l.    | API Implement: itemListByCollectionIdAndOwner | [itemListByCollectionIdAndOwner](https://github.com/vikiival/kodaquery/blob/main/main.ts#L134)                                      | -                              |
| 4m.    | API Implement: itemListByCollectionIdList     | [itemListByCollectionIdList](https://github.com/vikiival/kodaquery/blob/main/main.ts#L144)                                          | -                              |
| 4n.    | API Implementation: itemListByIssuer          | [itemListByIssuer](https://github.com/vikiival/kodaquery/blob/main/main.ts#L153)                                                    | -                              |
| 4o.    | API Implementation: itemListByName            | [itemListByName](https://github.com/vikiival/kodaquery/blob/main/main.ts#L162)                                                      | -                              |
| 4p.    | API Implementation: itemListByMetadataId      | [itemListByMetadataId](https://github.com/vikiival/kodaquery/blob/main/main.ts#L171)                                                | -                              |
| 4r.    | API Implement: itemListByMetadataIdMatch      | [itemListByMetadataIdMatch](https://github.com/vikiival/kodaquery/blob/main/main.ts#L190)                                           | -                              |
| 4s.    | API Implementation: itemListByOwner           | [itemListByOwner](https://github.com/vikiival/kodaquery/blob/main/main.ts#L189)                                                     | -                              |

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
The API has been written using the most common stack: Hono and Typescript. Additionally, we have added validations using Valibot. Unit tests were written to ensure the correctness of the code.

The [Squid Integrity checker that we wrote](https://github.com/vikiival/squidtegrity) has checked the validity of the delivery. The delivery is valid.
We have found deviations from the ["original" FireSquid that we wrote](https://github.com/kodadot/stick/pull/194).
Known deviations are:
- `BUY` has been treated by both buy and transfer handler - [this is now skipped as it emits a transfer that is not there](https://github.com/kodadot/stick/blob/feat/swap-it-up/src/mappings/nfts/transfer.ts#L30)
- `CLAIM SWAP` has been treated as transfer - [this is now treated as swap](https://github.com/kodadot/stick/blob/feat/swap-it-up/src/mappings/nfts/transfer.ts#L33)

Additionally, we have written queries to provide samples for the API - https://github.com/kodadot/stick/discussions/295

As a runner setup, we highly recommend using [casey/just](https://github.com/casey/just) to run the indexer.
