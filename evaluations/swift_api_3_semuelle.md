# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/swift_api.md
- **Milestone:** 3
- **Evaluation by:** keeganquigley

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/tesseract-one/Substrate.swift/blob/029ab47d91d3e97f753760610381f5fe9f7d5a88/LICENSE) | Apache 2.0 | 
| 0b. | Documentation | <ul><li>[x] </li></ul> | link | [README](https://github.com/tesseract-one/Substrate.swift/blob/029ab47d91d3e97f753760610381f5fe9f7d5a88/README.md), [Documentation](https://github.com/tesseract-one/Substrate.swift/tree/029ab47d91d3e97f753760610381f5fe9f7d5a88/Documentation) |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | link | [gdoc](https://docs.google.com/document/d/1CB6mz66LCxqQpwQV-9eoaMNhg1Ou6nK-ksOrhPIQG6Q)|
| 1. | Static ExtrinsicExtensions and ExtrinsicExtra support | <ul><li>[ ] </li></ul> | link | [StaticExtensionsProvider.swift](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Extrinsic/Extensions/StaticExtensionsProvider.swift) | Static Extrinsic Extensions |
| 2. | API to set all base types to static: Block, Header, Hasher, Extrinsic, Address, Account, Signature, Index, ExtrinsicEra, DispatchInfo, DispatchError, etc. | <ul><li>[ ] </li></ul> | link | [Config](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Config/Config.swift) | Configuration object which provides types for SDK, where static types can be set |
| 3. |  Base types validation over metadata | <ul><li>[ ] </li></ul> | link | [ValidatableType.swift](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Types/ValidatableType.swift) | Set of protocols and implementations to validate static and dynamic types over metadata |
| 4. | API to describe static Pallets with their Calls, Events, RuntimeCalls, StorageKeys, and Constants | <ul><li>[ ] </li></ul> | link | [FrameType.swift](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Types/FrameType.swift) | Set of protocols and helpers for static/dynamic Frame types |
| 5. | Static pallets validation over metadata | <ul><li>[ ] </li></ul> | link | [Frame.swift](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Types/Frame.swift) | API for static Frame creation and validation |
| 6. | Tuples support for StorageKey iterators | <ul><li>[ ] </li></ul> | link | [Tuples+StorageKey.swift](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Types/Static/Tuples%2BTupleStorageKey.swift) | n-map storage keys can be represented as tuples of Key-Hash pairs |
| 7. | Helpers to allow static extending of RPC, Constants, Storage, Extrinsic, and RuntimeCall APIs. | <ul><li>[ ] </li></ul> | link | [Api](https://github.com/tesseract-one/Substrate.swift/tree/main/Sources/Substrate/Api) | Extension points for developer-friendly APIs. Examples in the Documentation |
| 8. | Tests | <ul><li>[ ] </li></ul> | link | [Tests](https://github.com/tesseract-one/Substrate.swift/tree/main/Tests) | Unit and Integration tests (with `substrate-contracts-node`) |
| 9. | Documentation | <ul><li>[ ] </li></ul> | link | [Documentation](https://github.com/tesseract-one/Substrate.swift/tree/main/Documentation) | Documentation for Core Types and static extensions |
| 10. | Usage examples | <ul><li>[ ] </li></ul> | link | [Examples](https://github.com/tesseract-one/Substrate.swift/tree/main/Examples) | Example applications for dynamic and static modes |
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

`CustomStaticConfig` successfully initializes with local node and completes a transfer.

```swift
Running `CustomStaticConfig` results in successful transfer.
Initialization...
=======
Transfer Transaction
=======
Success event: ExtrinsicSuccess(dispatchInfo: Substrate.DispatchInfo(weight: Substrate.DispatchInfo.Weight(refTime: 308980000, proofSize: 3593), clazz: Substrate.DispatchInfo.DispatchClass.normal, paysFee: Substrate.DispatchInfo.Pays.yes))
Withdraw event: Withdraw(who: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY, amount: 308980145)
Balances[Withdraw{who: [0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d], amount: 308980145}]
Balances[Transfer{from: [0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d], to: [0x8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48], amount: 15483812850}]
TransactionPayment[TransactionFeePaid{tip: 0, who: [0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d], actual_fee: 308980145}]
System[ExtrinsicSuccess{dispatch_info: {weight: {proof_size: 3593, ref_time: 308980000}, pays_fee: Yes, class: Normal}}]
Balances.Withdraw({who: [0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d], amount: 308980145})
Balances.Transfer({from: [0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d], to: [0x8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48], amount: 15483812850})
TransactionPayment.TransactionFeePaid({tip: 0, who: [0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d], actual_fee: 308980145})
System.ExtrinsicSuccess({dispatch_info: {weight: {proof_size: 3593, ref_time: 308980000}, pays_fee: Yes, class: Normal}})
=======
End of Transfer Transaction
=======

Program ended with exit code: 0
```
`BalanceTransaction` test also works successfully:
```swift
Initialization...
=======
Transfer Transaction
=======
Balances[Withdraw{amount: 124414145, who: [0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d]}]
Balances[Transfer{to: [0x8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48], amount: 15483812850, from: [0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d]}]
TransactionPayment[TransactionFeePaid{who: [0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d], tip: 0, actual_fee: 124414145}]
System[ExtrinsicSuccess{dispatch_info: {pays_fee: Yes, weight: {ref_time: 308980000, proof_size: 3593}, class: Normal}}]
Balances.Withdraw({amount: 124414145, who: [0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d]})
Balances.Transfer({to: [0x8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48], amount: 15483812850, from: [0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d]})
TransactionPayment.TransactionFeePaid({who: [0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d], tip: 0, actual_fee: 124414145})
System.ExtrinsicSuccess({dispatch_info: {pays_fee: Yes, weight: {ref_time: 308980000, proof_size: 3593}, class: Normal}})
=======
End of Transfer Transaction
=======

Program ended with exit code: 0
```
