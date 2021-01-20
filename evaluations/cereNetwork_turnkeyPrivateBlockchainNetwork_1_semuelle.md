# Evaluation

- **Status:** Accepted
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/98
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| --- | --- | --- | --- | --- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul> | [gh license](https://github.com/Cerebellum-Network/private-standalone-network-node/blob/9aed9428fce057bf7902690340bc48092ca08c10/LICENSE) | Unlicense |
| 1. | Documentation and basic tests | <ul><li>[x] </li></ul> | [Documentation](https://github.com/Cerebellum-Network/private-standalone-network-node/tree/1bb1a23e7643d487c2914f25fff54851cb409fe9#documentation), [tests](https://github.com/Cerebellum-Network/private-standalone-network-node/blob/1bb1a23e7643d487c2914f25fff54851cb409fe9/docs/deployment.md) | see [General Notes](#general-notes) |
| 2. | Ink! based Smart Contract Standard | <ul><li>[x] </li></ul> | [spec](https://github.com/Cerebellum-Network/cere-enterprise-smart-contracts/blob/b6ec8a26dedb469d7d9eec97c5931bf03940bb6d/cere01/specification.md) | — |
| 2a. | Enterprise Derivative Assets | <ul><li>[x] </li></ul> | [spec](https://github.com/Cerebellum-Network/cere-enterprise-smart-contracts/blob/b6ec8a26dedb469d7d9eec97c5931bf03940bb6d/cere01/specification.md) | — |
| 2b. | Manual Direct Wallet Transfer | <ul><li>[x] </li></ul> | [doc](https://github.com/Cerebellum-Network/private-standalone-network-node/blob/dev/docs/direct_wallet_transfer.md) | see [General Notes](#general-notes) |
| 2c. | Programmatic Asset Transfer | <ul><li>[x] </li></ul> | [doc](https://github.com/Cerebellum-Network/private-standalone-network-node/blob/1bb1a23e7643d487c2914f25fff54851cb409fe9/docs/automated_token_transfer.md) | — |
| 2d. | Asset Restrictions | <ul><li>[x] </li></ul> | [doc](https://github.com/Cerebellum-Network/private-standalone-network-node/blob/1bb1a23e7643d487c2914f25fff54851cb409fe9/docs/asset_restrictions.md) | — |
| 3. | Smart Contract Tests | <ul><li>[x] </li></ul> | [code](https://github.com/Cerebellum-Network/cere-enterprise-smart-contracts/blob/f0f30207e35684e4cc027a97fd824663df548bd8/cere01/lib.rs#L196) | solid |

## General Notes

Summarizes the overall performance plus additional feedback/comments

**ad 1:** Various docs on setup, deployment, deploying assets, manual and automated asset transfer. Compilation issues resolved on request. Good unit test coverage of smart contracts (>94%), node tests _very_ basic.

**ad 2b:** Direct wallet transfer documentation is outdated or incomplete. There is no mention of having to add distribution accounts, and `transfer` parameters have changed.
