# Evaluation

* **Status:** Accepted
* **Application Document:** https://github.com/GamePowerNetwork/Open-Grants-Program/blob/master/applications/nft_collectibles_wallet.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number        | Deliverable          | Accepted               | Link                                                                                                                                                                                                                                                        | Evaluation Notes                      |
| ------------- | -------------        | -------------          | -------------                                                                                                                                                                                                                                               | -------------                         |
| 0a.           | License              | <ul><li>[x] </li></ul> | https://github.com/GamePowerNetwork/gamepower-module-library/blob/main/LICENSE                                                                                                                                                                              | -                                     |
| 0b.           | Documentation        | <ul><li>[x] </li></ul> | [Wallet Pallet Documentation](https://gamepowernetwork.github.io/gamepower-module-library/doc/gamepower_wallet/) <br/> [Wallet Example Node Documentation](https://github.com/GamePowerNetwork/gamepower-wallet-template/blob/master/docs/testing-guide.md) | -                                     |
| 0c.           | Testing Guide        | <ul><li>[x] </li></ul> | [UI Testing Guide](https://github.com/GamePowerNetwork/gamepower-wallet-template/blob/master/docs/testing-guide.md)                                                                                                                                         | -                                     |
| 1.            | nft-wallet-pallet    | <ul><li>[x] </li></ul> | [wallet code](https://github.com/GamePowerNetwork/gamepower-module-library/blob/main/wallet/src/lib.rs)                                                                                                                                                     | module renamed to `gamepower-wallet`` |
| 2.            | Substrate Test Chain | <ul><li>[x] </li></ul> | [modified template node](https://github.com/GamePowerNetwork/gamepower-wallet-template)                                                                                                                                                                     | -                                     |

## General Notes

Well documented repos and with detailed tutorials.

Initially a bug was found that could have been discovered with better unit tests, but the team has swiftly acted on the feedback and fixed the issue along with providing additional checks within the tests.
