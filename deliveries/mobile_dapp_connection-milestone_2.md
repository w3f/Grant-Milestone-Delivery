# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [mobile_dapp_connection.md](https://github.com/w3f/Grants-Program/blob/master/applications/mobile_dapp_connection.md)
* **Milestone Number:** 2

**Context**

These deliverables are a set of libraries that allows integrating **Substrate** **dApps** and **Wallets** on iOS and Android using **Tesseract** protocol (see the [previous deliverable](./mobile_dapp_connection-milestone_1.md)).

To achieve the above, we had to build three separate parts:
* [Android IPC transport](https://github.com/tesseract-one/Tesseract.android)
* [iOS IPC transport](https://github.com/tesseract-one/Tesseract.swift)
* [Substrate protocol support](https://github.com/tesseract-one/Tesseract.rs/tree/master/protocols/substrate)

All the parts go with the examples. The examples are the best starting point to understand how it works. The testing guide contains instructions on how to build and run the apps and a detailed explanation of how to work with Tesseract.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[Apache 2.0](https://github.com/tesseract-one/Tesseract.rs/blob/master/LICENSE)| | 
| 0b. | Documentation | [Substrate](https://github.com/tesseract-one/Tesseract.rs/tree/master/protocols/substrate/README.MD), [iOS](https://github.com/tesseract-one/Tesseract.swift), [Android](https://github.com/tesseract-one/Tesseract.android) | |
| 0c. | Testing Guide |[gdoc](https://docs.google.com/document/d/1UYnFpo9ju1TjE4SSVAmdCDrD78FaJ4adjkLa5EcDhhQ)| |
| 0d. | Docker | N/A | not applicable for this deliverable |
| 0e. | Article | Will be writing it during the review process and send in private for review | will be published on Medium after approval |
| 1. | iOS IPC transport protocol implementation | [iOS IPC transport](https://github.com/tesseract-one/Tesseract.swift) | contains IPC transport, docs and examples | 
| 2. | Android IPC transport protocol implementation | [Android IPC transport](https://github.com/tesseract-one/Tesseract.android) | contains IPC transport, docs and examples | 
| 3. | Substrate protocol specification | [Tesseract Substrate support](https://github.com/tesseract-one/Tesseract.rs/tree/master/protocols/substrate) | README.MD is the main doc of the protocol specification | 
| 4. | Substrate protocol implementation | [Tesseract Substrate support](https://github.com/tesseract-one/Tesseract.rs/tree/master/protocols/substrate) | contains Substrate protocol, docs and examples |


**Additional Information**

This deliverable allows dApp and Wallet developers to integrate on mobile platforms. We understand, though, that doing it by integrating Rust in your application is not for everyone, so the next step for us is to build native language wrappers on top of this, which will make Tesseract work just as any other Kotlin or Swift library.
