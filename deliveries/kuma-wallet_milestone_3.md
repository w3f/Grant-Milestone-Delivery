# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [Kuma Wallet Grant](https://github.com/w3f/Grants-Program/blob/master/applications/cross-chain-wallet.md)
* **Milestone Number:** 3

**Context** (optional)

Kuma Wallet is the first of its kind, a cross-chain wallet that offers seamless management and transfer of assets between EVM and WASM chains. This wallet has been designed to make the experience of handling cross-chain assets as smooth and intuitive as possible. With Kuma Wallet, users can easily import and create accounts on both EVM and WASM chains and transfer their assets with ease, thanks to the integration of XCM. The sleek and user-friendly design of Kuma Wallet has been inspired by the highly successful Astar UI. We are committed to providing ongoing support to Kuma Wallet, including the establishment of Telegram and Discord channels, to ensure that users have a platform for feedback and to address any issues that may arise.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/blockcoders/kuma-wallet/blob/main/LICENSE | MIT |
| 0b. | Documentation | https://github.com/blockcoders/kuma-wallet/blob/main/README.md, https://github.com/blockcoders/kuma-wallet/blob/main/README-es.md | **english** and **spanish** versions of the documentation |
| 0c. | Testing Guide | https://github.com/blockcoders/kuma-wallet#running-locally | Unit test and end to end tests will cover the core functions to ensure everything works as expected |
| 1. | XCM/XVM standard for transfers | https://github.com/kumawallet/extension/blob/main/src/constants/xcm.ts | Implement the XCM/XVM standard to enable the transfer of assets between EVM and WASM accounts on different chains. |
| 2. | Call to custom smart contracts | https://github.com/kumawallet/extension/blob/main/src/pages/callContract/CallContract.tsx | Provide the ability to call custom smart contracts for both EVM and WASM accounts. |
| 3. | Transactions to custom smart contracts | https://github.com/kumawallet/extension/blob/main/src/providers/txProvider/TxProvider.tsx | Enable users to execute transactions on custom smart contracts for both EVM and WASM. |
| 4. | Open Beta | https://kumawallet.io/, https://chrome.google.com/webstore/detail/kuma-wallet/hbinmkhlebcnghpikoekkbeljbealbje, https://addons.mozilla.org/en-US/firefox/addon/kuma-wallet/, https://twitter.com/getkuma/status/1678075363165888513 | Create an open Beta of the wallet for Moonbeam and Astar users to test it (with both mainnets and testnets available). Telegram and Discord channels will be created for the beta that will be announced on Twitter. |