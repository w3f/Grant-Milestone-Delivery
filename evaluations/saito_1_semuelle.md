# Evaluation

- **Status:** Accepted
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/73
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul> | [gh](https://github.com/SaitoTech/saito-crypto-api-modules/blob/c30691338fadb4d3c196601031681db35328d411/LICENSE) | Fixed upon request |
| 1. | Saito Module | <ul><li>[x] </li></ul>| [SaitoTech/saito-crypto-api-modules](https://github.com/SaitoTech/saito-crypto-api-modules/commit/f8eb04e3059776d8b1cb300d682c681c00615643) | Subset of SaitoTech/saito-lite containing the crypto templates and KSM/DOT/WND implementations. |
| 2. | Documentation | <ul><li>[x] </li></ul> | [readme](https://github.com/SaitoTech/saito-crypto-api-modules/tree/c30691338fadb4d3c196601031681db35328d411#readme) + [inline documentation](https://github.com/SaitoTech/saito-crypto-api-modules/tree/c30691338fadb4d3c196601031681db35328d411/lib/templates) of templates  | — |
| 3. | Environment Build | <ul><li>[x] </li></ul> | [setup instructions](https://github.com/SaitoTech/saito-crypto-api-modules/tree/c30691338fadb4d3c196601031681db35328d411#configuration-and-deployment-for-substrate-based-cryptocurrencies) | tested on saito.io and locally |
| 4 | Tutorial | <ul><li>[x] </li></ul> | [saito.tech](https://org.saito.tech/tutorial-3-polkadot-and-other-cryptocurrencies) | — |


## General Notes

`npm audit` shows five moderate or high vulnerabilities for the `saito-lite` repo (not for the delivered `saito-crypto-api-modules`).
