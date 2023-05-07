# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [mobile_dapp_connection.md](https://github.com/w3f/Grants-Program/blob/master/applications/mobile_dapp_connection.md)
* **Milestone Number:** 3

**Context**

This deliverable is the final milestone of the first version of [Tesseract](https://github.com/tesseract-one) - seamless dApp/Wallet integration protocol. Fot more information about previous [Tesseract](https://github.com/tesseract-one) development, please refer to [milestone #1 deliverable](./mobile_dapp_connection-milestone_1.md) and [milestone #2 deliverable](./mobile_dapp_connection-milestone_2.md).

The deliverables of this milestone are applications that demonstrate Tesseract capabilities and support of the Polkadot network:

* Demo dApp - a chat application built around Polkadot smart contract
* Developer Wallet - a developers' wallet for testing Tesseract in dApps (initially, we planned to provide just a demo wallet, but later decided we'd like to make it a wallet for dApp developers to test Tesseract integration)

Both applications are available for iOS and Android.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[Apache 2.0](https://github.com/tesseract-one/Tesseract.rs/blob/master/LICENSE)| | 
| 0b. | Documentation | [Developer Wallet](https://github.com/tesseract-one/dev-wallet/blob/main/README.md), [PolkaChat dApp](https://github.com/tesseract-one/polkachat.rs/blob/main/README.md) | |
| 0c. | Testing Guide |[gdoc](https://docs.google.com/document/d/1BYgdqGX4n98vVZT_g6EXDtDPzNIT2CrCx8bFoi99U-4)| |
| 0d. | Docker | N/A | not applicable for this deliverable |
| 0e. | Article | Will be writing it during the review process and send in private for review | will be published on Medium after approval |
| 1. | Android Demo Wallet | [Developer Wallet](https://github.com/tesseract-one/dev-wallet) | Android native wallet with a shared Rust core |
| 2. | Android Demo dApp | [PolkaChat dApp](https://github.com/tesseract-one/polkachat.rs) | Android native dApp with a shared Rust core |
| 3. |  iOS Demo Wallet | [Developer Wallet](https://github.com/tesseract-one/dev-wallet) | iOS native wallet with a shared Rust core |
| 4. | iOS Demo dApp | [PolkaChat dApp](https://github.com/tesseract-one/polkachat.rs) | Android native dApp with a shared Rust core |

**Additional Information**

So far, we've finished implementing Tesseract in Rust and tested it well with the Polkadot network during the demo apps milestone.

The next step is simplifying the integration process into Wallets and dApps by lifting the Rust knowledge and interop barriers. To achieve this, we plan to build native language wrappers on top, making Tesseract work just like any other Kotlin or Swift library to make it easily accessible for most native mobile developers.
