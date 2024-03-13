# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Tesseract dApps/Wallet integration native mobile libraries](https://github.com/w3f/Grants-Program/blob/master/applications/dapp_wallet_integration_native_mobile_libraries.md)
* **Milestone Number:** 4

**Context**

The grant's goal is to implement [Tesseract](https://github.com/tesseract-one/) native mobile APIs (Swift and Kotlin). This milestone is dedicated to providing **Swift** APIs for the **dApp** side.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [Apache 2.0](https://github.com/tesseract-one/Tesseract.swift/blob/master/LICENSE) | Apache 2.0 |
| **0b.** | Documentation | [Main repo README](https://github.com/tesseract-one/Tesseract.swift) | Please, start with the initial README.MD and follow the links. One of the most interesting parts is DAPP.MD |
| **0c.** | Testing and Testing Guide | [gdoc](https://docs.google.com/document/d/1_tt_eB_VlrCBuBhG7nU_3-3kY-4qBWLvESvSQOtNz38) | |
| **0d.** | Docker | | Not required to run the project |
| 0e. | Article | | Will be shared in private by e-mail during the milestone evaluation |
| 1. | Client-side iOS library | [Swift](https://github.com/tesseract-one/Tesseract.swift/tree/master/Sources/TesseractClient/) and [Rust](https://github.com/tesseract-one/Tesseract.swift/tree/master/Rust/framework/) | These are the main enty-points. Though, the end-user might want to import some swift classes from utils and transport sibling libraries. |
| 2. | Client-side IPC wrapper for iOS | [IPCTransportIOS.swift](https://github.com/tesseract-one/Tesseract.swift/blob/master/Sources/TesseractTransportsClient/iOS/IPCTransportIOS.swift) | Not a wrapper anymore. Since we have implemented native APIs for transport development as well, IPC transport was fully rewritten in Swift. It's very platform specific, so it's a better option. |
| 3. | Client-side of the Test protocol in Swift | [TestService.swift](https://github.com/tesseract-one/Tesseract.swift/blob/master/Sources/TesseractShared/Protocols/TestService.swift) | Since the Milestone#2 we moved the interfaces into common code and use them with adapters in both Client and Service implementations. |
| 4. | Client-side of the Substrate protocol in Swift | [SubstrateService.swift](https://github.com/tesseract-one/Tesseract.swift/blob/master/Sources/TesseractShared/Protocols/SubstrateService.swift) | Since the Milestone#2 we moved the interfaces into common code and use them with adapters in both Client and Service implementations. |
| 5. | iOS demo dApp | [polkachat.swift](https://github.com/tesseract-one/polkachat.swift) | For the demo, we have forked the [polkachat.rs](https://github.com/tesseract-one/polkachat.rs) (a cross-platform demo dApp in Rust with native UIs) and got rid of all the Rust parts replacing them with new Swift equivalents. It can build and run without installing Rust environment at all. |

**Additional Information**

For the sake of keeping the table above small and concise, there are only references to the public APIs. The rest of the libraries in siblings directories (both Rust and Swift), even though are essential, are mostly contain code that serve the public APIs to function. There is more details about it in the [testing guide](https://docs.google.com/document/d/1_tt_eB_VlrCBuBhG7nU_3-3kY-4qBWLvESvSQOtNz38).