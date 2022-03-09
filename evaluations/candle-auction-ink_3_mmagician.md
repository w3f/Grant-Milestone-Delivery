# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/candle_auction_ink.md
- **Milestone:** 3
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | - | Link upon upstream merge |
| 1. | Candle Auction Basics | <ul><li>[x] </li></ul> | [link](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#candle-auction-basics)| - |
| 2. | *ERC721* & *DNS* | <ul><li>[x] </li></ul> | [ERC721](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#erc721-1), [DNS](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#dns-1) | - |
| 3. | Cross-Contract Calls | <ul><li>[x] </li></ul> | [link](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#cross-contract-communication) | - |
| 4. | Auction Set Up | <ul><li>[x] </li></ul> | [link](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#auction-set-up)| - |
| 5. | Auction Run | <ul><li>[x] </li></ul> | [link](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#auction-run) | - |
| 6. | Contract Verification | <ul><li>[x] </li></ul> | [link](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#contract-verification) | - |
| 7. | Add New Reward Contract | <ul><li>[x] </li></ul>| [link](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#add-new-rewarding-option) | - | 
| 8. | Change Randomness Source | <ul><li>[x] </li></ul> | [link](https://github.com/agryaznov/substrate-docs/blob/develop/v3/tutorials/12-candle-workshop/index.mdx#change-randomness-source) | - |


## General Notes

Some issues in the upstream repositories were preventing the proper functioning of the contracts, see the comments [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/341#issuecomment-1016308259).

However, the codebase delivered is solid, has a great, detailed tutorial and the communication with the developer was good and helpful.

Note, that due to further upstream changes in [`ink!`](https://github.com/paritytech/ink/pull/1111), the tutorial needs to be tested with exactly the same versions as specified (i.e. not latest `ink!`). This will be addressed by the team separately from the milestone and doesn't hinder its acceptance.
