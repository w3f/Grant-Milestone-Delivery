# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Tesseract dApps/Wallet integration native mobile libraries](https://github.com/w3f/Grants-Program/blob/master/applications/dapp_wallet_integration_native_mobile_libraries.md)
* **Milestone Number:** 1

**Context**

The grant's goal is to implement [Tesseract](https://github.com/tesseract-one/) native mobile APIs (Swift and Kotlin). This milestone is dedicated to providing **Kotlin** APIs for the **Wallet** side.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [Apache 2.0](https://github.com/tesseract-one/Tesseract.android/blob/main/LICENSE) | Apache 2.0 |
| **0b.** | Documentation | [Main repo README](https://github.com/tesseract-one/Tesseract.android) | Please, start with the initial README.MD and follow the links. One of the most interesting parts is WALLET.MD |
| **0c.** | Testing and Testing Guide | [gdoc](https://docs.google.com/document/d/1Ais-Uyo6oMW6cI5FOOY5536-ofrGnsShal6AXd_J-7k/edit?usp=sharing) | |
| **0d.** | Docker | | Not required to run the project |
| 0e. | Article | | Will be shared in private by e-mail during the milestone evaluation |
| 1. | Wallet-side Android library | [java](https://github.com/tesseract-one/Tesseract.android/tree/main/java/service) and [rust](https://github.com/tesseract-one/Tesseract.android/tree/main/rust/library/) | These are the main enty-points. Though, the end-user might want to import some java classes from base and common sibling libraries. |
| 2. | Wallet-side IPC wrapper for Android | [service-transport-ipc](https://github.com/tesseract-one/Tesseract.android/tree/main/java/service-transport-ipc) | Not a wrapper anymore. Since we have implemented native APIs for transport development as well, IPC transport was fully rewritten in Kotlin. It's very platform specific, so it's a better option. |
| 3. | Wallet-side of the Test protocol in Kotlin | [with coroutines](https://github.com/tesseract-one/Tesseract.android/blob/main/java/service/src/main/java/one/tesseract/service/protocol/kotlin/TestService.kt) and [with futures](https://github.com/tesseract-one/Tesseract.android/blob/main/java/service/src/main/java/one/tesseract/service/protocol/java/TestService.kt) | Depending on the use case, a developer can choose either one. More details here: [Service flavors](https://github.com/tesseract-one/Tesseract.android/blob/main/WALLET.MD#service-flavors) |
| 4. | Wallet-side of the Substrate protocol in Kotlin | [with coroutines](https://github.com/tesseract-one/Tesseract.android/blob/main/java/service/src/main/java/one/tesseract/service/protocol/kotlin/SubstrateService.kt) and [with futures](https://github.com/tesseract-one/Tesseract.android/blob/main/java/service/src/main/java/one/tesseract/service/protocol/java/SubstrateService.kt) | Depending on the use case, a developer can choose either one. More details here: [Service flavors](https://github.com/tesseract-one/Tesseract.android/blob/main/WALLET.MD#service-flavors) |
| 5. | Android demo Wallet | [dev-wallet.kotlin](https://github.com/tesseract-one/dev-wallet.kotlin/) | For the demo, we have forked the [dev-wallet](https://github.com/tesseract-one/dev-wallet) (a cross-platform tesseract wallet in Rust with native UIs) and got rid of all the Rust parts replacing them with new Kotlin equivalents. It can build and run without installing Rust environment at all. |

**Additional Information**

For the sake of keeping the table above as small as possible, there are only references to the public APIs. The rest of the libraries in siblings directories (both rust and java), even though are essential, are mostly private and contain code that serve the public APIs to function. There is more details about it in the [testing guide](https://docs.google.com/document/d/1Ais-Uyo6oMW6cI5FOOY5536-ofrGnsShal6AXd_J-7k/edit?usp=sharing).
