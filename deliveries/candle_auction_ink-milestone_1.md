# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [W3F Grant Proposal](https://github.com/w3f/Grants-Program/blob/master/applications/candle_auction_ink.md), [PR #666](https://github.com/w3f/Grants-Program/pull/666)
* **Milestone Number:** 1

**Context**  
All mechanics wrapping the auction, like setting custom auction subject, running the auction and process all payouts is completed.  
Still, the auction winner determination logic is *basic*, and will be upgraded to *candle* fashioned by implementing *retroactive close* and *randomness source configuration* during next [Milestone-2](https://github.com/w3f/Grants-Program/blob/master/applications/candle_auction_ink.md#milestone-2---random-close) delivery.  
It worth noting though, that the major part of *candle* logic implementation is already there - special [*winning_data* storage](https://github.com/agryaznov/candle-auction-ink/blob/v0.1.8/src/lib.rs#L694) in particular.  


**Deliverables**
### Milestone 1 - Basic auction

| Number | Deliverable | Link | Notes |
| ------ | ----------- | -----| ----- |
| 0a. :heavy_check_mark: | License | [README.md](https://github.com/agryaznov/candle-auction-ink/tree/v0.1.8#license) | Apache 2.0 | 
| 0b. :heavy_check_mark: | Documentation | [README.md](https://github.com/agryaznov/candle-auction-ink/tree/v0.1.8#%EF%B8%8F-candle-auctions-on-ink-) | Inline documentation (builds to *cargo doc*) + [design considerations](https://github.com/agryaznov/candle-auction-ink/tree/v0.1.8#design-considerations) + basic [*How-Tos*](https://github.com/agryaznov/candle-auction-ink/tree/v0.1.8#how-to) explaining installation, deployment and usage of the contract |
| 0c. :heavy_check_mark: | Testing | [README.md](https://github.com/agryaznov/candle-auction-ink/tree/v0.1.8#compile--run-tests) | Core functions are covered by unit tests, which serve both sustainability of code and providing another way of explaining its logic. Integraion\UAT testing scenario described as steps in [*How-Tos*](https://github.com/agryaznov/candle-auction-ink/tree/v0.1.8#how-to) 
| 1. :heavy_check_mark: | Start & close period | [See src](https://github.com/agryaznov/candle-auction-ink/blob/v0.1.8/src/lib.rs#L541) | Create an auction mechanism that has a fixed start and end period 
| 2. :heavy_check_mark: | Accept bids | [See src](https://github.com/agryaznov/candle-auction-ink/blob/v0.1.8/src/lib.rs#L620) | Any user can call the contract with a bid that is higher than the last highest bid 
| 3. :heavy_check_mark: | Find winner | [See src](https://github.com/agryaznov/candle-auction-ink/blob/v0.1.8/src/lib.rs#L786) | Determine a winner at the close period 
| 4. :heavy_check_mark: | Embed reward logic | [See src](https://github.com/agryaznov/candle-auction-ink/blob/v0.1.8/src/lib.rs#L410) | The contract creator sets the auction rewarding logic by specifiyng `subject` [parameter](https://github.com/agryaznov/candle-auction-ink/blob/v0.1.8/src/lib.rs#L110) on contract instantiation. Such a logic (called *pluggable reward options*) is implemented with Rust *fn* type parameter. Rewarding option, rewarding contract and its parameters (e.g. domain name) is set on auction init and is immutable henceforth.
| 5. :heavy_check_mark: | Payout | [See src](https://github.com/agryaznov/candle-auction-ink/blob/v0.1.8/src/lib.rs#L230) | Any person participated in auction can claim her payout once auction ended. Winner is paid by specified reward logic (e.g. a domain name transferral or an approval to became some NFT tokens operator); other bidders are paid by recieving their bidded amounts back; auction owner is paid by recieving winning bid amount (winner's balance).

**Additional Information**  
Please use tag [v0.1.8](https://github.com/agryaznov/candle-auction-ink/releases/tag/v0.1.8) as release delivered for Milestone-1. 

This release has been tested on *Canvas UI* + *substrate-contracts-node* by running full UAT scenarios for two auction subjects: NTFs and DNS.  