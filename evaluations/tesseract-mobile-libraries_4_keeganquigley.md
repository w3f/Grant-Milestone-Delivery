# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dapp_wallet_integration_native_mobile_libraries.md
- **Milestone:** 4
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/tesseract-one/Tesseract.swift/blob/master/LICENSE) | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Main repo README](https://github.com/tesseract-one/Tesseract.swift) | Looks good. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [gdoc](https://docs.google.com/document/d/1_tt_eB_VlrCBuBhG7nU_3-3kY-4qBWLvESvSQOtNz38) | Ok.|
| **0d.** | Docker | <ul><li>[x] </li></ul> | - |  |
| 0e. | Article | <ul><li>[x] </li></ul> | - | |
| 1. | Client-side iOS library | <ul><li>[x] </li></ul> | [Swift](https://github.com/tesseract-one/Tesseract.swift/tree/master/Sources/TesseractClient/) and [Rust](https://github.com/tesseract-one/Tesseract.swift/tree/master/Rust/framework/) | Looks good. |
| 2. | Client-side IPC wrapper for iOS | <ul><li>[x] </li></ul> | [IPCTransportIOS.swift](https://github.com/tesseract-one/Tesseract.swift/blob/master/Sources/TesseractTransportsClient/iOS/IPCTransportIOS.swift) | Looks good. |
| 3. | Client-side of the Test protocol in Swift | <ul><li>[x] </li></ul> | [TestService.swift](https://github.com/tesseract-one/Tesseract.swift/blob/master/Sources/TesseractShared/Protocols/TestService.swift) | Looks good. |
| 4. | Client-side of the Substrate protocol in Swift | <ul><li>[x] </li></ul> | [SubstrateService.swift](https://github.com/tesseract-one/Tesseract.swift/blob/master/Sources/TesseractShared/Protocols/SubstrateService.swift) | Looks good. |
| 5. | iOS demo dApp | <ul><li>[x] </li></ul> | [polkachat.swift](https://github.com/tesseract-one/polkachat.swift) | App works as expected. |

# General Notes

This has come together very nicely! The app works well and I can send messages on the Rococo chain. Very nice to be natively using the app in Swift instead of having to load all the different deps. Decent docs and inline comments.

<img width="358" alt="demo" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/046903b6-91a2-4fa7-913d-413aea703e80">

Nice work! I hope to see devs utilize these libraries.

## Tests

Unit tests all passing.
