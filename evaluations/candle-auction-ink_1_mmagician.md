# Evaluation

* **Status:** Accepted
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/candle_auction_ink.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable          | Accepted               | Link                                                                                                       | Evaluation Notes                      |
|--------|----------------------|------------------------|------------------------------------------------------------------------------------------------------------|---------------------------------------|
| 0a.    | License              | <ul><li>[x] </li></ul> | [README.md](https://github.com/agryaznov/candle-auction-ink/tree/v0.1.8#license)                           |                                       |
| 0b.    | Documentation        | <ul><li>[x] </li></ul> | [README.md](https://github.com/agryaznov/candle-auction-ink/tree/v0.1.8#%EF%B8%8F-candle-auctions-on-ink-) |                                       |
| 0c.    | Testing              | <ul><li>[x] </li></ul> | [README.md](https://github.com/agryaznov/candle-auction-ink/tree/v0.1.8#compile--run-tests)                | Unit tests covering the functionality |
| 1.     | Start & close period | <ul><li>[x] </li></ul> | [See src](https://github.com/agryaznov/candle-auction-ink/blob/v0.1.8/src/lib.rs#L541)                     |                                       |
| 2.     | Accept bids          | <ul><li>[x] </li></ul> | [See src](https://github.com/agryaznov/candle-auction-ink/blob/v0.1.8/src/lib.rs#L620)                     |                                       |
| 3.     | Find winner          | <ul><li>[x] </li></ul> | [See src](https://github.com/agryaznov/candle-auction-ink/blob/v0.1.8/src/lib.rs#L786)                     |                                       |
| 4.     | Embed reward logic   | <ul><li>[x] </li></ul> | [See src](https://github.com/agryaznov/candle-auction-ink/blob/v0.1.8/src/lib.rs#L410)                     |                                       |
| 5.     | Payout               | <ul><li>[x] </li></ul> | [See src](https://github.com/agryaznov/candle-auction-ink/blob/v0.1.8/src/lib.rs#L230)                     |                                       |

## Notes

### Usability

The way bids are placed right now is IMO counterintuitive - I would rather expect each next bid to increase the value **to** the bid amount, not **by** the amount. It might require some extra caution from users.

A functionality to get the current auction winner was missing but was subsequently added upon request.

### Code

Code is well written with good unit test coverage.
For the final delivery after milestone 2, a comprehensive, automated integration test would be desirable, as there a number of moving parts involved here.
