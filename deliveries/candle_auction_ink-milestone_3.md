# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [W3F Grant Proposal](https://github.com/w3f/Grants-Program/blob/master/applications/candle_auction_ink.md), [PR #666](https://github.com/w3f/Grants-Program/pull/739)  
* **Milestone Number:** 3

**Context**  

Once candle auction mechanics for two subjects are in place with previous milestones delivered, this Workshop demonstrates step-by-step guide to launch NFT sales or a domain name sales with it. 

**Deliverables**
### Milestone 3 - Substrate.dev Workshop

| Number | Deliverable | Link | Notes |
| ------ | ----------- | -----| ----- |
| 0a. | License | - | Same as *substrate-docs* or Apache 2.0. The delivery will be either merged into [*substrate-docs*](https://github.com/substrate-developer-hub/substrate-docs) and inherit license from it, or published under *Apache 2.0* as part of a separate repo |
| 1. | § Candle Auction Basics | [link](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#candle-auction-basics)| Learn the basic mechanincs of a candle auction |
| 2. | § *ERC721* & *DNS* | [ERC721](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#erc721-1), [DNS](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#dns-1) | Learn *ERC721* and *DNS* contracts implementations in Ink! |
| 3. | § Cross-Contract Calls | [link](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#cross-contract-communication) | Learn cross-contract communication patterns in Ink! |
| 4. | § Auction Set Up | [link](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#auction-set-up)| Learn to deploy and to instantiate these contracts, to mint tokens, to register domain and to put them dowm to an auction |
| 5. | § Auction Run | [link](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#auction-run) | Learn to place bids to an auction, to check its subject and status, to detect winner and to get payouts |
| 6. | § Contract Verification | [link](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#contract-verification) | Learn how to verify smart contract code on Polkadot parachain |
| 7. | § Add New Reward Contract | [link](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#add-new-rewarding-option) | Learn to add a new type of auction subject and to plug-in it into our conract logic | 
| 8. | § Change Randomness Source | [link](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#change-randomness-source) | Learn to set another on-chain randomness source for our candle |

**Additional Information**  

Please use the [develop](https://github.com/agryaznov/substrate-docs/tree/develop) branch of my fork of the *substrate-docs* repo. New tutorial lives at [http://localhost:8001/tutorials/v3/candle](http://localhost:8001/tutorials/v3/candle).
