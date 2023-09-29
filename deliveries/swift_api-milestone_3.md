# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [swift_api.md](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/swift_api.md)
* **Milestone Number:** 3

**Context**

This deliverable is the third milestone of Substrate SDK for Swift. 

This milestone allows a Swift developer to provide their own static types for the API. It also includes type validation, so static and dynamic types provided with Config will be validated over network-provided metadata.

In this milestone set of protocols was added to simplify the implementation of static types, by providing default implementations, and API extensions.

Some dynamic types and type-system refactoring from Milestone 2 were done too, for better support of dynamic and static types at the same time (config can be partially static) and for dynamic types validation.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[Apache 2.0](https://github.com/tesseract-one/Substrate.swift/blob/main/LICENSE)| | 
| 0b. | Documentation | [README](https://github.com/tesseract-one/Substrate.swift/blob/main/README.md), [Documentation](https://github.com/tesseract-one/Substrate.swift/blob/main/Documentation/) | |
| 0c. | Testing Guide |[gdoc](https://docs.google.com/document/d/1CB6mz66LCxqQpwQV-9eoaMNhg1Ou6nK-ksOrhPIQG6Q)| |
| 1. | Static ExtrinsicExtensions and ExtrinsicExtra support | [StaticExtensionsProvider.swift](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Extrinsic/Extensions/StaticExtensionsProvider.swift) | Static Extrinsic Extensions |
| 2. | API to set all base types to static: Block, Header, Hasher, Extrinsic, Address, Account, Signature, Index, ExtrinsicEra, DispatchInfo, DispatchError, etc. | [Config](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Config/Config.swift) | Configuration object which provides types for SDK, where static types can be set |
| 3. |  Base types validation over metadata | [ValidatableType.swift](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Types/ValidatableType.swift) | Set of protocols and implementations to validate static and dynamic types over metadata |
| 4. | API to describe static Pallets with their Calls, Events, RuntimeCalls, StorageKeys, and Constants | [FrameType.swift](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Types/FrameType.swift) | Set of protocols and helpers for static/dynamic Frame types |
| 5. | Static pallets validation over metadata | [Frame.swift](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Types/Frame.swift) | API for static Frame creation and validation |
| 6. | Tuples support for StorageKey iterators | [Tuples+StorageKey.swift](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Types/Static/Tuples%2BTupleStorageKey.swift) | n-map storage keys can be represented as tuples of Key-Hash pairs |
| 7. | Helpers to allow static extending of RPC, Constants, Storage, Extrinsic, and RuntimeCall APIs. | [Api](https://github.com/tesseract-one/Substrate.swift/tree/main/Sources/Substrate/Api) | Extension points for developer-friendly APIs. Examples in the Documentation |
| 8. | Tests | [Tests](https://github.com/tesseract-one/Substrate.swift/tree/main/Tests) | Unit and Integration tests (with `substrate-contracts-node`) |
| 9. | Documentation | [Documentation](https://github.com/tesseract-one/Substrate.swift/tree/main/Documentation) | Documentation for Core Types and static extensions |
| 10. | Usage examples | [Examples](https://github.com/tesseract-one/Substrate.swift/tree/main/Examples) | Example applications for dynamic and static modes |

**Additional Information**

Changes from the previous [Milestone 2](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/swift_api-milestone_2.md):
https://github.com/tesseract-one/Substrate.swift/compare/c77b237dccbbcd8ee1306c7ed418796b2153af16..main
