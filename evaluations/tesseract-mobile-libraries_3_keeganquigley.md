# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dapp_wallet_integration_native_mobile_libraries.md
- **Milestone:** 3
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/tesseract-one/Tesseract.android/blob/main/LICENSE) | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[ ] </li></ul> | [Main repo README](https://github.com/tesseract-one/Tesseract.android) |  |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [gdoc](https://docs.google.com/document/d/1ce8onLBOEBRB_UO4dj9BN7c9aY-c0Xt5QIX3ke2W7sg/edit?usp=sharing) | |
| **0d.** | Docker | <ul><li>[x] </li></ul> | - |
| 0e. | Article | <ul><li>[ ] </li></ul> | | Will be shared in private by e-mail during the milestone evaluation |
| 1. | Client-side Android library | <ul><li>[ ] </li></ul> | [java](https://github.com/tesseract-one/Tesseract.android/tree/main/java/client) and [rust](https://github.com/tesseract-one/Tesseract.android/tree/main/rust/library/) |  |
| 2. | Client-side IPC wrapper for Android | <ul><li>[ ] </li></ul> | [client-transport-ipc](https://github.com/tesseract-one/Tesseract.android/tree/main/java/client-transport-ipc) |  |
| 3. | Client-side of the Test protocol in Kotlin | <ul><li>[ ] </li></ul> | [with coroutines](https://github.com/tesseract-one/Tesseract.android/blob/main/java/common/src/main/java/one/tesseract/protocol/kotlin/TestService.kt) and [with futures](https://github.com/tesseract-one/Tesseract.android/blob/main/java/common/src/main/java/one/tesseract/protocol/java/TestService.kt) |  |
| 4. | Client-side of the Substrate protocol in Kotlin | <ul><li>[ ] </li></ul> | [with coroutines](https://github.com/tesseract-one/Tesseract.android/blob/main/java/common/src/main/java/one/tesseract/protocol/kotlin/SubstrateService.kt) and [with futures](https://github.com/tesseract-one/Tesseract.android/blob/main/java/common/src/main/java/one/tesseract/protocol/java/SubstrateService.kt) |  |
| 5. | Android demo dApp | <ul><li>[ ] </li></ul> | [polkachat.kotlin](https://github.com/tesseract-one/polkachat.kotlin) |  |

## General Notes

App works to sign and send messages on Rococo chain.
