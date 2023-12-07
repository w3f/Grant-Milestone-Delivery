# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dapp_wallet_integration_native_mobile_libraries.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/tesseract-one/Tesseract.swift/blob/main/LICENSE) | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Main repo README](https://github.com/tesseract-one/Tesseract.swift) | Ok. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [gdoc](https://docs.google.com/document/d/1WpMTmoAHAiXByvrWH65Z6T2L-tGhdwrnlA77Nf_9-ks) | Ok. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | - |
| 0e. | Article | <ul><li>[x] </li></ul> | Ok. |
| 1. | Wallet-side iOS library | <ul><li>[x] </li></ul> | [swift](https://github.com/tesseract-one/Tesseract.swift/tree/master/Sources/TesseractService) and [rust](https://github.com/tesseract-one/Tesseract.swift/tree/master/Rust/tesseract) | Ok. |
| 2. | Wallet-side IPC wrapper for iOS | <ul><li>[x] </li></ul> | [IPCTransportIOS.swift](https://github.com/tesseract-one/Tesseract.swift/blob/master/Sources/TesseractTransportsService/iOS/IPCTransportIOS.swift) | Ok. |
| 3. | Wallet-side of the Test protocol in Swift | <ul><li>[x] </li></ul> | [TestService.swift](https://github.com/tesseract-one/Tesseract.swift/blob/master/Sources/TesseractShared/TestService.swift) | Ok. |
| 4. | Wallet-side of the Substrate protocol in Swift | <ul><li>[x] </li></ul> | [SubstrateService.swift](https://github.com/tesseract-one/Tesseract.swift/blob/master/Sources/TesseractShared/SubstrateService.swift) | Ok. |
| 5. | iOS demo Wallet | <ul><li>[x] </li></ul> | [dev-wallet.swift](https://github.com/tesseract-one/dev-wallet.swift/) | Ok. |

# General Notes

Overall great work as usual! It is nice to be able to sign/send txs in iOS. The native Swift app worked wonderfully, and the pre-requisite dependencies seemed much easier to install than the Kotlin ones, from what I remember. The tests work and I am able to complete the guide.

One minor note: The link to the license file is broken, if you could replace it with the new one that would be great. Thanks!

```
subxt::events::events_type: DEBUG - Decoding Event 'Balances::Transfer'
subxt::events::events_type: DEBUG - Decoding Event 'System::ExtrinsicSuccess'
subxt::events::events_type: DEBUG - Decoding Event 'System::ExtrinsicSuccess'
subxt::events::events_type: DEBUG - Decoding Event 'Balances::Withdraw'
subxt::events::events_type: DEBUG - Decoding Event 'Contracts::ContractEmitted'
subxt::events::events_type: DEBUG - Decoding Event 'Contracts::Called'
subxt::events::events_type: DEBUG - Decoding Event 'Contracts::StorageDepositTransferredAndHeld'
subxt::events::events_type: DEBUG - Decoding Event 'Balances::Deposit'
subxt::events::events_type: DEBUG - Decoding Event 'Balances::Deposit'
subxt::events::events_type: DEBUG - Decoding Event 'TransactionPayment::TransactionFeePaid'
subxt::events::events_type: DEBUG - Decoding Event 'System::ExtrinsicSuccess'
subxt::events::events_type: DEBUG - Decoding Event 'Balances::Transfer'
subxt::events::events_type: DEBUG - Decoding Event 'System::ExtrinsicSuccess'
subxt::events::events_type: DEBUG - Decoding Event 'System::ExtrinsicSuccess'
subxt::events::events_type: DEBUG - Decoding Event 'Balances::Withdraw'
subxt::events::events_type: DEBUG - Decoding Event 'Contracts::ContractEmitted'
```
I am able to sign the tx on Rococo contracts with my test account:

<img width="359" alt="signer" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/90c78a4b-8ba8-4f00-b223-b7b1473b08b0">

Test messages sent on Rococo are successful:

<img width="359" alt="message tx" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/f48cff9c-8d58-4a15-a6c5-416862981104">
