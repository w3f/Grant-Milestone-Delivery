# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/blackprint-js.md
* **Milestone Number:** 2

**Context**

This milestone delivers some functionality for [Blackprint](https://github.com/Blackprint) for transferring balance, listening for balance changes, using browser extension for signing data and access available wallet address, amd obtaining transaction fee with payment info node.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/LICENSE) | MIT License |
| 0b. | Documentation | 1. [Examples](https://github.com/Blackprint/nodes-polkadot.js/tree/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/example) <br> 2. [Guide for importing the module and load examples](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/README.md) | Inline documentation is provided for nodes that being delivered for this milestone. |
| 0c. | Testing Guide | 1. [Guide](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/README.md#development) for the node module <br> 2. [Guide](https://github.com/Blackprint/Blackprint/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/README.md#build-and-run-the-unit-test) for main [Blackprint](https://github.com/Blackprint/Blackprint)'s repository | Usually I made changes or improvement on the [Blackprint](https://github.com/Blackprint/Blackprint)'s main repository, if you see the tests was failing on the GitHub's Action please wait until I fix it before you pull it again. |
| 0d. | Docker | [Test files](https://github.com/Blackprint/nodes-polkadot.js/tree/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/tests), [GitHub Action](https://github.com/Blackprint/nodes-polkadot.js/runs/5645423590?check_suite_focus=true#step:7:67) | To run the test manually, please follow the instruction on the `README.md`. For manual UI testing, you can use the example provided for each deliverable nodes below. |
| 1. | Event node | 1. [Events/Account/Balance](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/src/Events/Account/Balance.js) <br> 2. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/tests/nodes/transfer-balance.js#L86-L172) | The example for this node is combined in <br> `3. Balance transfer node`'s example |
| 2. | Browser Extension | 1. [Example - Send Balance](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/example/send-balance-extension.json) <br> 2. [Example - Sign data](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/example/sign-verify-extension.json) <br> 2. [Connection/Extension](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/src/Connection/Extension.js) <br> 3. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/tests/nodes/browser-extension.js) |  |
| 3. | Balance transfer node | 1. [Example- Send Balance](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/example/send-balance-mnemonic.json) <br> 2. [Account/Transfer/Balance](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/src/Account/Transfer/Balance.js) <br> 3. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/tests/nodes/transfer-balance.js) |  |
| 4. | Payment info node | 1. [Example](https://github.com/Blackprint/nodes-polkadot.js/blob/d6d80097ca28d45a564bbc2c0f22924a21113009/example/payment-info.json) <br> 2. [Transaction/PaymentInfo](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/src/Transaction/PaymentInfo.js) <br> 4. [Unit Test](https://github.com/Blackprint/nodes-polkadot.js/blob/72aad794cf647d2ea403b1c3d44eb40bec1c6af3/tests/nodes/transfer-balance.js#L68-L84) |  |
| 5. | Package | [NPM Registry](https://www.npmjs.com/package/@blackprint/nodes-polkadot.js) | Published: v0.3 |

**Additional Information**

- When trying the example, you can press right click on the container to move around and scroll/wheel (while still pressing the right click) to zoom in/out the container
- I updated the [example](https://github.com/Blackprint/nodes-polkadot.js/blob/1de6da8be03cbf0cb8bc375bd88989b4c7ed99df/.env.example) `.env` and added some WND balance in it, the used mnemonic is similar with the `.json` examples in [/example/](https://github.com/Blackprint/nodes-polkadot.js/tree/1de6da8be03cbf0cb8bc375bd88989b4c7ed99df/example) folder
- When sending token, try to send lower than 0.2 WND so the wallet balance doesn't run out quickly
- If the balance was insufficient to do a transaction, you can obtain WND token for testing by following the [docs](https://wiki.polkadot.network/docs/learn-DOT#getting-westies) or [my comment](https://github.com/w3f/Grant-Milestone-Delivery/pull/405#issuecomment-1103448072)