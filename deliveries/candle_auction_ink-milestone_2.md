# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [W3F Grant Proposal](https://github.com/w3f/Grants-Program/blob/master/applications/candle_auction_ink.md), [PR #666](https://github.com/w3f/Grants-Program/pull/666)  
* **Milestone Number:** 2

**Context**  
All mechanics allowing to set up and run candle auctions for *NFT collections* and *Domain name* is implemented. Feedback on usability obtained from [Milestone-1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/candle-auction-ink_1_mmagician.md) evaluation has been taken into account - the way bids are made has been improved to be intuitive. Random function encapsulated in *entropy* module allows to set desired source of randomness. Some bugs found alive back from Milestone-1 have been catched and fixed. Unit tests have been refactored. User acceptance tests passed for both *NFT* and *DNS* auctions. [Blog post](https://agryaznov.com/2021/12/06/candle-auction-ink/) descibing rationale and design considerations has been published.  

**Deliverables**
### Milestone 2 - Random close

| Number | Deliverable | Link | Notes |
| ------ | ----------- | -----| ----- |
| 0a. :heavy_check_mark: | License | [README.md](https://github.com/agryaznov/candle-auction-ink/blob/v0.2.3/README.md#license) | Apache 2.0 | 
| 0b. :heavy_check_mark: | Documentation | [README.md](https://github.com/agryaznov/candle-auction-ink/tree/v0.1.8#%EF%B8%8F-candle-auctions-on-ink-) | Inline documentation (builds to *cargo doc*) + [design considerations](https://github.com/agryaznov/candle-auction-ink/blob/v0.2.3/README.md#design-considerations) + basic [*How-Tos*](https://github.com/agryaznov/candle-auction-ink/blob/v0.2.3/README.md#how-to) explaining installation, deployment and usage of the contract |
| 0c. :heavy_check_mark: | Testing | [README.md](https://github.com/agryaznov/candle-auction-ink/blob/v0.2.3/README.md#compile--run-tests) | Core functions are covered by unit tests, which serve both sustainability of code and providing another way of explaining its logic. Integraion\UAT testing scenario described as steps in [*How-Tos*](https://github.com/agryaznov/candle-auction-ink/blob/v0.2.3/README.md#use-it) |
| 0e. :heavy_check_mark: | Article | [Blog post](https://agryaznov.com/2021/12/06/candle-auction-ink/) | Project rationale as well as design considerations are described in details in the post |
| 1. :heavy_check_mark: | Retroactive close | [See src](https://github.com/agryaznov/candle-auction-ink/blob/v0.2.3/src/lib.rs#L504) | Once auction is ended, anyone can invoke `find_winner()` method to randomly detect a block during *Ending* period and set the auction winner to be the top bidder of that block. This effectively emulates random candle blow for the auction | 
| 2. :heavy_check_mark: | Randomness source (optional) | [See src](https://github.com/agryaznov/candle-auction-ink/blob/v0.2.3/src/entropy.rs#L18) | The contract allows you to configure the source of randomness (see [entropy module](src/entropy.rs)). By default, it uses [`ink_env::random()`](https://docs.rs/ink_env/3.0.0-rc7/ink_env/fn.random.html) function which in turn utilizes [randomness-collective-flip](https://github.com/paritytech/substrate/blob/v3.0.0/frame/randomness-collective-flip/src/lib.rs#L113) module |

**Additional Information**  
Please use tag [v0.2.3](https://github.com/agryaznov/candle-auction-ink/releases/tag/v0.2.3) as the release delivered for Milestone-2. 

This release has been tested on *PolkadotJS Apps* + *substrate-contracts-node* by running full UAT scenarios for two auction subjects: NTFs and DNS.  