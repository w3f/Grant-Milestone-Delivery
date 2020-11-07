# Evaluation

> Don't remove any of the mandatory parts presented in bold letters or as headlines!

- **Status:** Accepted
- **PR Link:** [https://github.com/w3f/Open-Grants-Program/pull/51](https://github.com/w3f/Open-Grants-Program/pull/51)
- **Milestone:** 1
- **Kusama Identity:** ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA
- **Previously successfully merged evaluation:** none

| Number | Deliverable        | Accepted               | Link                                                                                                                         | Evaluation Notes                                                                       |
| ------ | ------------------ | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 0.     | Apache License 2.0 | <ul><li>[x] </li></ul> | [Link](https://github.com/fractapp/fractapp/blob/558147f27920609bd472a7f8e1aa9d5f81b5d61e/LICENSE)                           | –                                                                                      |
| 1.     | Creating wallet    | <ul><li>[x] </li></ul> | [Code](https://github.com/fractapp/fractapp/blob/558147f27920609bd472a7f8e1aa9d5f81b5d61e/src/screens/SaveWallet.tsx#L10)    | Creating, exporting + importing all work                                               |
| 2.     | Backup wallet      | <ul><li>[x] </li></ul> | [Code](https://github.com/fractapp/fractapp/blob/558147f27920609bd472a7f8e1aa9d5f81b5d61e/src/screens/SaveWallet.tsx#L51)    | Infinite loading screen after wrong password on file import                            |
| 3.     | Wallet details     | <ul><li>[x] </li></ul> | [Code](https://github.com/fractapp/fractapp/blob/558147f27920609bd472a7f8e1aa9d5f81b5d61e/src/screens/WalletDetails.tsx#L72) | Address, QR code, tx details shown                                                     |
| 4.     | Documentation      | <ul><li>[x] </li></ul> | [Doc folder](https://github.com/fractapp/fractapp/tree/558147f27920609bd472a7f8e1aa9d5f81b5d61e/docs)                        | Largely missing natural language descriptions, but technical documentation is thorough |
| 5.     | Unit-testing       | <ul><li>[x] </li></ul> | [Test folder](https://github.com/fractapp/fractapp/blob/558147f27920609bd472a7f8e1aa9d5f81b5d61e/__tests__)                  | 146 tests, all pass; Jest reports 85% of statements covered                            |
| 6.     | Distributing       | <ul><li>[x] </li></ul> | [Alpha release](https://github.com/fractapp/fractapp/releases/tag/0.0.1)                                                     | Tested on Pixel 3a (Android 11)                                                        |

## General Notes

- Tested on Release alpha 0.0.1 and self-compiled version (commit [558147f](https://github.com/fractapp/fractapp/commit/558147f27920609bd472a7f8e1aa9d5f81b5d61e))
- Would be great to have more thorough setup instructions (Android SDK, react-native, APK signing certificate, Jest snapshot updating)
