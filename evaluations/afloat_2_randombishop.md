# Evaluation



- **Status:** Accepted
- **Application Document:** [Afloat](https://github.com/w3f/Grants-Program/blob/master/applications/Afloat.md)
- **Milestone:** 2
- **Kusama Identity:** randombishop (https://sub.id/5Gnixfp6vnznRkr91JgwkxYnCJCyHr8EaBzYfFsUKcTMzVYF)
- **Previously successfully merged evaluation:** [Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/Afloat_Milestone1.md)

| Number | Deliverable                   | Accepted | Link                                                                                                                                                                                                                                                                                                                     | Evaluation Notes                                                                                                                                                                               |
|-------:|-------------------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                       | Yes      | [Licence](https://github.com/hashed-io/hashed-substrate/blob/main/LICENSE)                                                                                                                                                                                                                                               | MIT                                                                                                                                                                                            |                                                                                                                       |
|    0b. | Documentation                 | Yes      | [Portal](https://github.com/hashed-io/hashed-network-portal-ui) [Frontend](https://github.com/hashed-io/hashed-marketplaces-ui) [Substrate](https://github.com/hashed-io/hashed-substrate) [Backend](https://github.com/hashed-io/hashed-private-server)   [API](https://github.com/hashed-io/hashed-private-client-api) | Each repo has good documentation and is well packaged, what's missing is a global doc that describes how components work together and how to set up a full system locally from scratch         |
|    0c. | Testing                       | Yes      | [Github repository](https://github.com/hashed-io/hashed-substrate/blob/main/pallets/gated-marketplace/src/tests.rs)                                                                                                                                                                                                      | gated-marketplace OK, fund-admin OK, rbac OK, other pallets don't have tests, fruniques fail                                                                                                   |
|    0d. | Video                         | Yes      | [Video](https://drive.google.com/file/d/1yvCiuJ7P5xTPtTwCLZyNWCSez4NBUGfP/view)                                                                                                                                                                                                                                          | OK                                                                                                                                                                                             |                
|    0e. | Article                       | Yes      | [English](https://docs.google.com/document/d/1bDswb619nkdL0xt41GEJEtyLcCOc3LO-M-dB2RdDr9s/edit?usp=sharing) and [Spanish](https://docs.google.com/document/d/1DNHgONQrZfpG4f0f79n6pS9h9jUQQDW52OlWCw1TiJA/edit?usp=sharing) versions                                                                                     | Not really relevant for this delivery                                                                                                                                                          |
|     1. | Originate Tax Credit          | Yes      | [Portal](https://github.com/hashed-io/hashed-network-portal-ui) [Pallet](https://github.com/hashed-io/hashed-substrate/blob/develop/pallets/fruniques/src/lib.rs)                                                                                                                                                        | The functions are available in the pallets and work as expected, but the frontend and user experience is cumbersome. I managed to test a canonical process but the UX is still to be polished. |
|     2. | Upload Confidential Documents | Yes      | [JS library](https://github.com/hashed-io/hashed-confidential-docs-client-api/blob/015b59837eb8c0117fecb0c6323053d605a6f5fd/src/model/OwnedData.js#L57)                                                                                                                                                                  | OK (I tested through the frontend only - didn't audit the encryption itself)                                                                                                                   |
|     3. | Tax Credit verification       | Yes      | [video](https://drive.google.com/file/d/1yvCiuJ7P5xTPtTwCLZyNWCSez4NBUGfP/view?usp=sharing)                                                                                                                                                                                                                              | OK                                                                                                                                                                                             |                                                                                                                                                                                                                                                                 |
|     4. | List for Sale                 | Yes      | [Enlist NFT for sale](https://github.com/hashed-io/hashed-substrate/blob/00135e71f7bed81cf9f8dbd902b989bd19393f7e/pallets/gated-marketplace/src/lib.rs#L549)                                                                                                                                                             | OK                                                                                                                                                                                             |


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


## Improvement suggestions

* Provide a general architecture guide that describes the different repos and how they interact with each other.

* Provide a doc that describes how to deploy and configure a full system locally.

* Fix unused tests in some pallets, and add tests to the ones not covered yet.

* The UX still doesn't make sense from an end-to-end perspective. 
The marketplace creation and participation process works. 
Sharing documents and access rules work.
Creating Tax credits collections and NFTs work as well.
But it's unclear how the different aspects are connected.
Hopefully, this gets implemented and clarified at next milestone delivery along with NFT trading in a marketplace.