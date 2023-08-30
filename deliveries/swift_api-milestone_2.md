# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [swift_api.md](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/swift_api.md)
* **Milestone Number:** 2

**Context**

This deliverable is the second milestone of Substrate SDK for Swift. 

This milestone allows a Swift developer to communicate with the substrate network using a fully dynamic approach. It includes RPCs, types, dynamic types, and validation, all working dynamically based on the information provided by the Metadata network.

Only types required for API or that can’t be adequately implemented dynamically (have custom logic) were implemented as static types.

Most primitive types have objects with the “Any” prefix, which works dynamically, like AnyAddress, AnySignature, AnyCall, AnyRuntimeCall, AnyEvent, AnyHash, AnyHasher, etc.

These objects obtain configuration from metadata and do type/size checks inside. All the dynamic types will generate runtime exceptions if misused.

RPC calls required internally by the library are wrapped inside the Client interface. Other calls can be used from the common “call” and “subscribe” methods of the RPC API.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[Apache 2.0](https://github.com/tesseract-one/Substrate.swift/blob/main/LICENSE)| | 
| 0b. | Documentation | [README](https://github.com/tesseract-one/Substrate.swift/blob/main/README.md) | |
| 0c. | Testing Guide |[gdoc](https://docs.google.com/document/d/1LrINndmDI_1QnrpCwcV62EFKvIxylCHwH7oY5BJJXtY)| |
| 1. | Swift wrapper for C sr25519 library | [Sr25519.swift](https://github.com/tesseract-one/Sr25519.swift) | Sr25519 and Ed25519 library |
| 2. | In-App Keychain | [Keychain](https://github.com/tesseract-one/Substrate.swift/tree/main/Sources/Keychain) | In-App Keychain implementation with methods for key generation, message signing, key derivation, and signature check. |
| 3. |  Dynamic Type Registry | [Runtime](https://github.com/tesseract-one/Substrate.swift/tree/main/Sources/Substrate/Runtime) | Dynamic type registry with Metadata v14 and v15 support  |
| 4. | Dynamic Value | [Value](https://github.com/tesseract-one/Substrate.swift/tree/main/Sources/Substrate/Types/Value) | Dynamic Value with supports serialization and deserialization |
| 5. | RPC | [RPC](https://github.com/tesseract-one/Substrate.swift/tree/main/Sources/RPC) | Dynamic RPC calls support |
| 6. | Extrinsic Extensions | [Extrinsic](https://github.com/tesseract-one/Substrate.swift/tree/main/Sources/Substrate/Extrinsic) | Dynamic ExtrinsicExtensions and ExtrinsicExtra |
| 7. | Primitives | [Types](https://github.com/tesseract-one/Substrate.swift/tree/main/Sources/Substrate/Types) | Base types StorageKeys, Calls, RuntimeCalls, Events, Block, BlockHeader, Extrinsic, StorageChanges |
| 8. | Hashers | [Hashers.swift](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Types/Hashers.swift) | All hashers (Blake2, TwoX, Identity) and AnyHasher(dynamic) |
| 9. | JsonRPC Client | [JsonRPC](https://github.com/tesseract-one/JsonRPC.swift) | Json RPC client with WebSocket and HTTP connections |

**Additional Information**

In the next milestone, we will provide an option to provide custom static types and to use the library in static mode. We will add helper static interfaces for StorageKeys, Constants, Calls, RuntimeCalls, and Events. So they can be written and used with SDK. Some parts of the static approach are already in place in the current Milestone, but the static implementation still needs to be finished during the next one.
