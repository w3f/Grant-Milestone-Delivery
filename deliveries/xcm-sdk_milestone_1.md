# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/xcm-sdk.md
* **Milestone Number:** 1

**Context** (optional)

XCM SDK is a tool that provides an interface to send XCM messages for Substrate based blockchains. This library is written in Typescript so it can be imported in a whole new set of applications or dApps that use Javascript/Typescript engines such as Node.js.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/blockcoders/xcm-sdk/blob/main/LICENSE | MIT |
| 0b. | Documentation | https://github.com/blockcoders/xcm-sdk/blob/main/README.md, https://github.com/blockcoders/xcm-sdk/blob/main/README-es.md | **english** and **spanish** versions of the documentation |
| 0c. | Testing Guide | https://github.com/blockcoders/xcm-sdk#testing | Unit test and end to end tests will cover the core functions to ensure everything works as expected |
| 1. | Create Messages Types | https://github.com/blockcoders/xcm-sdk/blob/main/src/interfaces/index.ts | Definition of all messages types that can be sent via xcm supported by Polkadot API. |
| 2. | Send XCM messages | https://github.com/blockcoders/xcm-sdk/blob/main/src/provider.ts | Creation of an interface to send XCM messages using the types defined in (1) |
| 3. | Testing | https://coveralls.io/github/blockcoders/xcm-sdk?branch=main | Achieve a testing coverage of the functionalities above 90% |
