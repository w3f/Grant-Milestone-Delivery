# Evaluation

- **Status:** In Progress
- **Application Document:**  https://github.com/w3f/Open-Grants-Program/blob/master/applications/SubDAO-Chrome-Extension.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [SubDAO-Network/subdao-extension](https://github.com/SubDAO-Network/subdao-extension/blob/841e5dd404a72166701fb53baba1ab1c164072c6/LICENSE) | AGPL |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [SubDAO-Network/subdao-extension](https://github.com/SubDAO-Network/subdao-extension/blob/841e5dd404a72166701fb53baba1ab1c164072c6/docs/tutorial.md) | — |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [SubDAO-Network/subdao-extension](https://github.com/SubDAO-Network/subdao-extension/blob/3fd74be91e12e8c33825aea966b3b9db2be6b5e3/docs/testing.md) | Short doc with screenshots of app. No instructions how to run tests. |
| 0d. | Article | <ul><li>[ ] </li></ul> | [medium](https://subdao.medium.com/10-most-concerned-questions-on-subdao-community-3ccdcced5e5) | Recap of an AMA, but contract asks for "an article describing our chrome extension and how to use it". |
| 1. | Source Code | <ul><li>[ ] </li></ul> | link | The extension will be implemented in JavaScript. We will provide the source code of this extension which will provide the 1) features for wallet, such as 1.1) mnemonic management, 1.2) adding custom tokens, 1.3) transfer token from one account to another and 1.4) supporting tokens on Polkadot/Kusama, 2) features to 2.1) post encrypted messages on social network such as Facebook and Twitter, 3) features for DAO management, such as 3.1) listing current available DAOs, 3.2) listing my DAOs, 3.3) create vote in my DAOs, 3.4) do voting in my DAOs and 3.5) view vote results in DAOs. |
| 2. | Build instruction | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |



## General Notes

Extension compiles successfully, but loading fails with error `Uncaught TypeError: Cannot read property 'getURL' of undefined`.
