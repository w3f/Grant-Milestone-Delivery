# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Tesseract dApps/Wallet integration native mobile libraries](https://github.com/w3f/Grants-Program/blob/master/applications/dapp_wallet_integration_native_mobile_libraries.md)
* **Milestone Number:** 2

**Context**

The grant's goal is to implement [Tesseract](https://github.com/tesseract-one/) native mobile APIs (Swift and Kotlin). This milestone is dedicated to providing **Swift** APIs for the **Wallet** side.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [Apache 2.0](https://github.com/tesseract-one/Tesseract.swift/blob/main/LICENSE) | Apache 2.0 |
| **0b.** | Documentation | [Main repo README](https://github.com/tesseract-one/Tesseract.swift) | Please, start with the initial README.MD and follow the links. One of the most interesting parts is WALLET.MD |
| **0c.** | Testing and Testing Guide | [gdoc](https://docs.google.com/document/d/1WpMTmoAHAiXByvrWH65Z6T2L-tGhdwrnlA77Nf_9-ks) | |
| **0d.** | Docker | | Not required to run the project |
| 0e. | Article | | Will be shared in private by e-mail during the milestone evaluation |
| 1. | Wallet-side iOS library | [swift](https://github.com/tesseract-one/Tesseract.swift/tree/master/Sources/TesseractService) and [rust](https://github.com/tesseract-one/Tesseract.swift/tree/master/Rust/tesseract) | These are the main enty-points. Though, the end-user might want to import some Swift helpers from utils sibling library. |
| 2. | Wallet-side IPC wrapper for iOS | [IPCTransportIOS.swift](https://github.com/tesseract-one/Tesseract.swift/blob/master/Sources/TesseractTransportsService/iOS/IPCTransportIOS.swift) | Fully written in Swift. It's very platform specific, so it's a better option. Our Swift API allows us to write Transports in Swift and in Rust. |
| 3. | Wallet-side of the Test protocol in Swift | [TestService.swift](https://github.com/tesseract-one/Tesseract.swift/blob/master/Sources/TesseractShared/TestService.swift) | We also have async `Result`-returning service if developer prefers functional style over throws. |
| 4. | Wallet-side of the Substrate protocol in Swift | [SubstrateService.swift](https://github.com/tesseract-one/Tesseract.swift/blob/master/Sources/TesseractShared/SubstrateService.swift) | We also have async `Result`-returning service if developer prefers functional style over throws. |
| 5. | iOS demo Wallet | [dev-wallet.swift](https://github.com/tesseract-one/dev-wallet.swift/) | For the demo, we have forked the [dev-wallet](https://github.com/tesseract-one/dev-wallet) (a cross-platform tesseract wallet in Rust with native UIs) and got rid of all the Rust parts replacing them with new Swift equivalents. It can build and run without installing Rust environment at all. |

**Additional Information**

For the sake of keeping the table above as small as possible, there are only references to the public APIs. The rest of the libraries in siblings directories (both rust and swift), even though are essential, are mostly private and contain code that serve the public APIs to function. There is more details about it in the [testing guide](https://docs.google.com/document/d/1WpMTmoAHAiXByvrWH65Z6T2L-tGhdwrnlA77Nf_9-ks).
