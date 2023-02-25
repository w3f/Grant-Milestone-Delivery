# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/xcm-sdk.md
* **Milestone Number:** 2

**Context** (optional)

XCM SDK is a tool that provides an interface to send XCM messages for Substrate based blockchains. This library is written in Typescript so it can be imported in a whole new set of applications or dApps that use Javascript/Typescript engines such as Node.js.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/blockcoders/xcm-sdk/blob/main/LICENSE | MIT |
| 0b. | Documentation | https://github.com/blockcoders/xcm-sdk/blob/main/README.md, https://github.com/blockcoders/xcm-sdk/blob/main/README-es.md | **english** and **spanish** versions of the documentation |
| 0c. | Testing Guide | https://github.com/blockcoders/xcm-sdk#testing | Unit test and end to end tests will cover the core functions to ensure everything works as expected |
| 0d. | Article | https://docs.google.com/document/d/1W46rTJT4ROkhssXSUoWx8zHEXY6njA_akNs0ldPjgeY/edit?usp=sharing | A Draft for the medium article. |
| 1. | CLI tool | https://github.com/blockcoders/xcm-sdk#cli-usage | Interactive command line tool to generate and send XCM message. |
| 2. | Add support for new messages | https://github.com/blockcoders/xcm-sdk#support-for-other-pallets-and-methods | Using generics the send function allows the body to be defined by the user. |
| 3. | Testing | https://coveralls.io/github/blockcoders/xcm-sdk?branch=main | Achieve a testing coverage of the functionalities above 90% |
