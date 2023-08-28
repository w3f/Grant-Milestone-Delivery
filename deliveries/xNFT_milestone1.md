# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:**  [xNFT](https://github.com/w3f/Grants-Program/blob/master/applications/xNFT.md)
* **Milestone Number:**  1

**Context**
xNFT is a pallet for transferring assets across chains. The repository provided below is 

**Deliverables**

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache-2.0 |
| **0b.** | Documentation | [Docs](https://github.com/antiers-solutions/xNFT/tree/master/pallet-xnft/docs), [User Guide](https://github.com/antiers-solutions/xNFT/blob/master/pallet-xnft/docs/user_guide.md) |
| **0c.** | Testing and Testing Guide | [Test Cases](https://github.com/antiers-solutions/xNFT/blob/master/pallet-xnft/src/test.rs) |
| 0d. | Article | [Link](https://docs.google.com/document/d/1QylVQG5RoYjy5LMyZF4_IqyKjc4_fgZsZAPnSkGMdVM/edit) |
| 1. | xNFT | [Code Repo](https://github.com/antiers-solutions/xNFT) |

**Additional Information**

#### Minor changes had to be done to the [NFT Pallet](https://github.com/paritytech/substrate/tree/polkadot-v0.9.43/frame/nfts). 
- Create_delete_collection.rs: [line 18](https://github.com/antiers-solutions/xNFT/blob/f4b5a9387a24bfc4be0fd4dc79872a07902a22bb/nfts/src/features/create_delete_collection.rs#L18); added public access specifier
- Lib.rs: [line 65](https://github.com/antiers-solutions/xNFT/blob/f4b5a9387a24bfc4be0fd4dc79872a07902a22bb/nfts/src/lib.rs#L65); changed the type to public
- Removed super from all these structs; pub struct [CollectionDetails](https://github.com/antiers-solutions/xNFT/blob/f4b5a9387a24bfc4be0fd4dc79872a07902a22bb/nfts/src/types.rs#L85), pub struct [ItemDetails](https://github.com/antiers-solutions/xNFT/blob/f4b5a9387a24bfc4be0fd4dc79872a07902a22bb/nfts/src/types.rs#L134) and pub struct [CollectionMetadata](https://github.com/antiers-solutions/xNFT/blob/f4b5a9387a24bfc4be0fd4dc79872a07902a22bb/nfts/src/types.rs#L157).
#### No dockerfile has been added in the deliverables, a set up guide has been provided in the documents of the repository.
