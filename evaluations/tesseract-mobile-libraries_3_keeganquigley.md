# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dapp_wallet_integration_native_mobile_libraries.md
- **Milestone:** 3
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/tesseract-one/Tesseract.android/blob/main/LICENSE) | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Main repo README](https://github.com/tesseract-one/Tesseract.android) | Good. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [gdoc](https://docs.google.com/document/d/1ce8onLBOEBRB_UO4dj9BN7c9aY-c0Xt5QIX3ke2W7sg/edit?usp=sharing) | Good. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | - |
| 0e. | Article | <ul><li>[x] </li></ul> | | Will be shared in private by e-mail during the milestone evaluation |
| 1. | Client-side Android library | <ul><li>[x] </li></ul> | [java](https://github.com/tesseract-one/Tesseract.android/tree/main/java/client) and [rust](https://github.com/tesseract-one/Tesseract.android/tree/main/rust/library/) | Working as expected. |
| 2. | Client-side IPC wrapper for Android | <ul><li>[x] </li></ul> | [client-transport-ipc](https://github.com/tesseract-one/Tesseract.android/tree/main/java/client-transport-ipc) | Working as expected. |
| 3. | Client-side of the Test protocol in Kotlin | <ul><li>[x] </li></ul> | [with coroutines](https://github.com/tesseract-one/Tesseract.android/blob/main/java/common/src/main/java/one/tesseract/protocol/kotlin/TestService.kt) and [with futures](https://github.com/tesseract-one/Tesseract.android/blob/main/java/common/src/main/java/one/tesseract/protocol/java/TestService.kt) | Working as expected. |
| 4. | Client-side of the Substrate protocol in Kotlin | <ul><li>[x] </li></ul> | [with coroutines](https://github.com/tesseract-one/Tesseract.android/blob/main/java/common/src/main/java/one/tesseract/protocol/kotlin/SubstrateService.kt) and [with futures](https://github.com/tesseract-one/Tesseract.android/blob/main/java/common/src/main/java/one/tesseract/protocol/java/SubstrateService.kt) | Working as expected. |
| 5. | Android demo dApp | <ul><li>[x] </li></ul> | [polkachat.kotlin](https://github.com/tesseract-one/polkachat.kotlin) | Working as expected. |

## General Notes

App works to sign and send messages on Rococo chain. Fairly straightforward, as this is the same app but in pure Kotlin. Everything works as expected. Article drafts were sent via email.
