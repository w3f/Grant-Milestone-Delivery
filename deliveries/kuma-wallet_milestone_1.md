# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/cross-chain-wallet.md
* **Milestone Number:** 1

**Context** (optional)

Kuma Wallet is the first of its kind, a cross-chain wallet that offers seamless management and transfer of assets between EVM and WASM chains. This wallet has been designed to make the experience of handling cross-chain assets as smooth and intuitive as possible. With Kuma Wallet, users can easily import and create accounts on both EVM and WASM chains and transfer their assets with ease, thanks to the integration of XCM. The sleek and user-friendly design of Kuma Wallet has been inspired by the highly successful Astar UI. We are committed to providing ongoing support to Kuma Wallet, including the establishment of Telegram and Discord channels, to ensure that users have a platform for feedback and to address any issues that may arise.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/blockcoders/kuma-wallet/blob/main/LICENSE | MIT |
| 0b. | Documentation | https://github.com/blockcoders/kuma-wallet/blob/main/README.md, https://github.com/blockcoders/kuma-wallet/blob/main/README-es.md | **english** and **spanish** versions of the documentation |
| 0c. | Testing Guide | https://github.com/blockcoders/kuma-wallet#running-locally | Unit test and end to end tests will cover the core functions to ensure everything works as expected |
| 1. | Chrome/Firefox Extension | https://github.com/blockcoders/kuma-wallet#chrome-and-brave | Develop a browser extension that can be installed on Chrome, Firefox, and other popular browsers. |  
| 2. | EVM/WASM accounts | https://github.com/blockcoders/kuma-wallet/blob/main/src/accounts/AccountManager.ts | Implement the ability to create and import EVM and WASM accounts. |
| 3. | Switch between networks | https://github.com/blockcoders/kuma-wallet/blob/main/src/providers/networkProvider/NetworkProvider.tsx | Allow users to switch between networks, such as Astar and Moonbeam, with ease. |
| 4. | Display accounts | https://github.com/blockcoders/kuma-wallet/blob/main/src/providers/accountProvider/AccountProvider.tsx | Display EVM and WASM accounts in the same place for a clear and intuitive overview. |
| 5. | Balances | https://github.com/blockcoders/kuma-wallet/blob/main/src/providers/accountProvider/AccountProvider.tsx | Show users their balances for both EVM and WASM accounts. |
