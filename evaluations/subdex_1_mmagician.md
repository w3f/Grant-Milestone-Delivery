# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/60
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul> | [License](https://github.com/subdarkdex/pallet-subdex/blob/master/LICENSE)| Generated from Parity's template |
| 1. | UI Connection | <ul><li>[x] </li></ul> | | When the UI loads for the first time & you haven't yet granted Polkadot-JS access, after you authorize access you will need to clear the browser's local storage for that page in order for injected accounts to show.
| 2. | UI feature | <ul><li>[x] </li></ul> | | Slippage can be set between 0.1% - 1%
| 3. | UI Theme | <ul><li>[x] </li></ul> | | Two themes provided
| 4. | Dex Pallet | <ul><li>[x] </li></ul> | https://github.com/subdarkdex/pallet-subdex/tree/master/pallet-subdex | The codebase reused, adapted & improved from the [Hackusama work](https://github.com/subdarkdex/subdex-chain-hackusama/tree/master/pallets/dex-pallet): code cleaned and organised e.g. the `Exchange` struct better contained; checked math operations instead of plain +/-* ; tests added; function params made generic (at least the naming, since the types were already mostly generic) e.g. ksm_amount -> first_asset
| 5. | Dex XCMP Pallet | <ul><li>[x] </li></ul> | https://github.com/subdarkdex/pallet-subdex/tree/master/pallet-subdex-xcmp | Works as expected
| 6. | Generic Token Dealer Pallet | <ul><li>[x] </li></ul> | https://github.com/subdarkdex/pallet-generic-token-dealer | Works as expected
| 7. | UI Infrastructure | <ul><li>[x] </li></ul> | 
| 8. | Network Infrastructure | <ul><li>[x] </li></ul> | 
| 9. | Tutorial | <ul><li>[x] </li></ul> | https://medium.com/@subdex/subdex-milestone-1-delivery-c87ca9b6b159 ; https://github.com/subdarkdex/subdex-xc-network | Beginner-ish friendly Medium article, good tutorial in the network readme

## General Notes

At first it was slightly confusing that tests for Dex Pallet were contained within XCMP Pallet. 

It's a subjective assessment, but the UX needs some polishing to be as intuitive as Uniswap - though my judgement might be affected by being accustomed to Uniswap interface & expecting the same functionality.

Overall a very good delivery, clear documentation and structured code.
