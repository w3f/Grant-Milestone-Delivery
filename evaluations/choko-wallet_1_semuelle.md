# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/choko_wallet.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [choko-wallet/wallet-app](https://github.com/choko-wallet/wallet-app/blob/8bde34c390fb167ec4aa0eb1a0e9ce4aeea7259e/LICENSE), [choko-wallet/sdk](https://github.com/choko-wallet/sdk/blob/c9963e7e3f0039a9d8fe15b0eb86bbe0b831351a/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | Live Demo at https://choko.app | |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [sdk](https://github.com/choko-wallet/sdk/tree/c9963e7e3f0039a9d8fe15b0eb86bbe0b831351a#testing-guide),  | Worked with node v16.16, but not v17.9
| 0e. | Article | <ul><li>[x] </li></ul> | https://medium.com/@choko_wallet/introducing-to-the-new-web3-wallet-choko-wallet-d4626a40c9dd | Engaging article with both high-level overview and technical details. |
| 1. | Reactjs WebApp | <ul><li>[ ] </li></ul> | [choko-wallet/wallet-app](https://github.com/choko-wallet/wallet-app/tree/8bde34c390fb167ec4aa0eb1a0e9ce4aeea7259e) | Deployed [here](https://choko.app/). Static QR code; no emailing seed phrase functionality.
| 2. | A Sample DApp | <ul><li>[x] </li></ul> | [choko-wallet/wallet-app](https://github.com/choko-wallet/wallet-app/blob/w3f-milestone-1/packages/frontend/pages/test-request.tsx), https://choko.app/test-request | Shows wallet connecting, signing message and transaction on testnet. |
| 3. | SDK | <ul><li>[x] </li></ul> | [packages/request-handler](https://github.com/choko-wallet/sdk/tree/c9963e7e3f0039a9d8fe15b0eb86bbe0b831351a/packages/request-handler), [packages/known-networks](https://github.com/choko-wallet/sdk/tree/c9963e7e3f0039a9d8fe15b0eb86bbe0b831351a/packages/known-networks) | Adding custom network not functional on the UI side. |


## General Notes

- —
