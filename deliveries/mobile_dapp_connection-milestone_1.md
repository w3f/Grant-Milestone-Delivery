# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [mobile_dapp_connection.md](https://github.com/w3f/Grants-Program/blob/master/applications/mobile_dapp_connection.md)
* **Milestone Number:** 1

**Context** 

This is the first deliverable of Tesseract protocol (universal dApp/Wallet connector) implementation. It consists of the framework (Tesseract Core), that provides the APIs for both the dApp and Wallet sides - they are called "client" and "service" respectively in the repo. The framework also provides extension APIs for transports (IPC, TCP/IP, etc.) and protocols (Polkadot, Ethereum, etc.) development.

The repo has quite a comprehensive documentation. The good starting point is README.MD in the root folder, which is interlinked with the rest of the docs.

For the testing purposes we opted for a playground-style demo application which uses all the aspects of the framework, by providing simple test protocol and local transport implementation, demonstrating how the implementation works.

To run - simply navigate to `tesseract-playground` inside the repo and `cargo run`.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [Apache 2.0](https://github.com/tesseract-one/Tesseract.rs/blob/master/LICENSE)|  |
| 0b. | Documentation | [README.MD](https://github.com/tesseract-one/Tesseract.rs/blob/master/README.md) | please, see "usage" section for links with more detailed docs |
| 0c. | Testing Guide | [gdoc](https://docs.google.com/document/d/14kaTRfZoiHsQ7eLiC1q9jcWddrNeh9PxTa4dSA5OxNI/edit?usp=sharing) |  |
| 0d. | Docker | N/A | not applicable for this deliverable |
| 0e. | Article | [gdoc](https://docs.google.com/document/d/14cqqXptPL-ksWFWTSCbVfzMBjDjneR7jLhBmrW39_j4/edit?usp=sharing) | will be bublished on Medium after approval |
| 1. | Architecture | N/A | architecture is described in the article and the docs, also can be explored in the code |
| 2. | Application-level framework | [example protocol](https://github.com/tesseract-one/Tesseract.rs/tree/master/tesseract-playground/src/polkadot) | probably the best place to start is this example link. Protocols APIs are have common part for the call messages and separate for the friendly APIs for `client` and `service`. Please, also consider checking out the Protocols doc section (see link below) |
| 3. | Messages and envelopes | [tesseract](https://github.com/tesseract-one/Tesseract.rs/tree/master/tesseract) | `tesseract` sub repo serves as a depencency for both `tesseract-client` and `tesseract-service` and contains most of the data layer |
| 4. | Transport-level framework | [example "local" transport](https://github.com/tesseract-one/Tesseract.rs/tree/master/tesseract-playground/src/plt) | probably the best place to start is this example link. Transports APIs are separate for the `client` and `service`. Please, also consider checking out the Transports doc (see link below) |
| 5. | Transport-layer development APIs | [Transports](https://github.com/tesseract-one/Tesseract.rs/blob/master/EXTENDING.MD#Transport) | a doc that explains how to create a transport. Please, also consider checking out `tesseract-playground` |
| 6. | Application-layer development APIs | [Protocols](https://github.com/tesseract-one/Tesseract.rs/blob/master/EXTENDING.MD#Protocol) | a doc that explains how to create a blockchain protocol support. Please, also consider checking out `tesseract-playground` |



**Additional Information**

We opted for README-style docs and playground demo style app for testing for the reasons that the APIs might be changing quite a lot during the next milestone where we implement actual Polkadot support and real life IPC transports for iOS and Android. We believe that we should rather battle test current Tesseract Core during the next milestone, improve it based on new input and then make comprehensive API docs and stuff, instead of wasting time now for things we know may change.

The overall structure and approach is going to stay as it is though.
