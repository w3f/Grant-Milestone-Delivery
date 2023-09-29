# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/swift_api.md
- **Milestone:** 3
- **Evaluation by:** keeganquigley

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/tesseract-one/Substrate.swift/blob/029ab47d91d3e97f753760610381f5fe9f7d5a88/LICENSE) | Apache 2.0 | 
| 0b. | Documentation | <ul><li>[x] </li></ul> | link | [README](https://github.com/tesseract-one/Substrate.swift/blob/029ab47d91d3e97f753760610381f5fe9f7d5a88/README.md), [Documentation](https://github.com/tesseract-one/Substrate.swift/tree/029ab47d91d3e97f753760610381f5fe9f7d5a88/Documentation) |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | link | [gdoc](https://docs.google.com/document/d/1CB6mz66LCxqQpwQV-9eoaMNhg1Ou6nK-ksOrhPIQG6Q)|
| 1. | Static ExtrinsicExtensions and ExtrinsicExtra support | <ul><li>[x] </li></ul> | link | [StaticExtensionsProvider.swift](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Extrinsic/Extensions/StaticExtensionsProvider.swift) | Static Extrinsic Extensions |
| 2. | API to set all base types to static: Block, Header, Hasher, Extrinsic, Address, Account, Signature, Index, ExtrinsicEra, DispatchInfo, DispatchError, etc. | <ul><li>[x] </li></ul> | link | [Config](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Config/Config.swift) | Configuration object which provides types for SDK, where static types can be set |
| 3. |  Base types validation over metadata | <ul><li>[x] </li></ul> | link | [ValidatableType.swift](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Types/ValidatableType.swift) | Set of protocols and implementations to validate static and dynamic types over metadata |
| 4. | API to describe static Pallets with their Calls, Events, RuntimeCalls, StorageKeys, and Constants | <ul><li>[x] </li></ul> | link | [FrameType.swift](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Types/FrameType.swift) | Set of protocols and helpers for static/dynamic Frame types |
| 5. | Static pallets validation over metadata | <ul><li>[x] </li></ul> | link | [Frame.swift](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Types/Frame.swift) | API for static Frame creation and validation |
| 6. | Tuples support for StorageKey iterators | <ul><li>[x] </li></ul> | link | [Tuples+StorageKey.swift](https://github.com/tesseract-one/Substrate.swift/blob/main/Sources/Substrate/Types/Static/Tuples%2BTupleStorageKey.swift) | n-map storage keys can be represented as tuples of Key-Hash pairs |
| 7. | Helpers to allow static extending of RPC, Constants, Storage, Extrinsic, and RuntimeCall APIs. | <ul><li>[x] </li></ul> | link | [Api](https://github.com/tesseract-one/Substrate.swift/tree/main/Sources/Substrate/Api) | Extension points for developer-friendly APIs. Examples in the Documentation |
| 8. | Tests | <ul><li>[x] </li></ul> | link | [Tests](https://github.com/tesseract-one/Substrate.swift/tree/main/Tests) | Unit and Integration tests (with `substrate-contracts-node`) |
| 9. | Documentation | <ul><li>[x] </li></ul> | link | [Documentation](https://github.com/tesseract-one/Substrate.swift/tree/main/Documentation) | Documentation for Core Types and static extensions |
| 10. | Usage examples | <ul><li>[x] </li></ul> | link | [Examples](https://github.com/tesseract-one/Substrate.swift/tree/main/Examples) | Example applications for dynamic and static modes |
| X. | ... | <ul><li>[x] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

Overall, good inline comments, great docs, and library usage examples. The testing guide was very helpful. Test app runs nicely. Had to fix SDK path to run swift tests, [see here](https://github.com/w3f/Grant-Milestone-Delivery/pull/1002#issuecomment-1740060784).

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
# Tests

92 unit tests pass successfully.

<details>

  <summary>BigIntegerTests</summary>

  ```swift
[381/381] Linking SubstratePackageTests
Build complete! (42.37s)
Test Suite 'All tests' started at 2023-09-28 17:57:32.434.
Test Suite 'SubstratePackageTests.xctest' started at 2023-09-28 17:57:32.434.
Test Suite 'BigIntegerTests' started at 2023-09-28 17:57:32.434.
Test Case '-[SubstrateTests.BigIntegerTests testCompact1024]' started.
Test Case '-[SubstrateTests.BigIntegerTests testCompact1024]' passed (0.015 seconds).
Test Case '-[SubstrateTests.BigIntegerTests testCompact128]' started.
Test Case '-[SubstrateTests.BigIntegerTests testCompact128]' passed (0.001 seconds).
Test Case '-[SubstrateTests.BigIntegerTests testCompact256]' started.
Test Case '-[SubstrateTests.BigIntegerTests testCompact256]' passed (0.003 seconds).
Test Case '-[SubstrateTests.BigIntegerTests testCompact512]' started.
Test Case '-[SubstrateTests.BigIntegerTests testCompact512]' passed (0.008 seconds).
Test Case '-[SubstrateTests.BigIntegerTests testInt1024]' started.
Test Case '-[SubstrateTests.BigIntegerTests testInt1024]' passed (0.001 seconds).
Test Case '-[SubstrateTests.BigIntegerTests testInt128]' started.
Test Case '-[SubstrateTests.BigIntegerTests testInt128]' passed (0.000 seconds).
Test Case '-[SubstrateTests.BigIntegerTests testInt256]' started.
Test Case '-[SubstrateTests.BigIntegerTests testInt256]' passed (0.000 seconds).
Test Case '-[SubstrateTests.BigIntegerTests testInt512]' started.
Test Case '-[SubstrateTests.BigIntegerTests testInt512]' passed (0.000 seconds).
Test Case '-[SubstrateTests.BigIntegerTests testUInt1024]' started.
Test Case '-[SubstrateTests.BigIntegerTests testUInt1024]' passed (0.060 seconds).
Test Case '-[SubstrateTests.BigIntegerTests testUInt128]' started.
Test Case '-[SubstrateTests.BigIntegerTests testUInt128]' passed (0.002 seconds).
Test Case '-[SubstrateTests.BigIntegerTests testUInt256]' started.
Test Case '-[SubstrateTests.BigIntegerTests testUInt256]' passed (0.007 seconds).
Test Case '-[SubstrateTests.BigIntegerTests testUInt512]' started.
Test Case '-[SubstrateTests.BigIntegerTests testUInt512]' passed (0.019 seconds).
Test Suite 'BigIntegerTests' passed at 2023-09-28 17:57:32.552.
	 Executed 12 tests, with 0 failures (0 unexpected) in 0.117 (0.117) seconds
```
</details>

<details>

  <summary>BitSequenceTests</summary>

```swift
  Test Suite 'BitSequenceTests' started at 2023-09-28 17:57:32.552.
Test Case '-[SubstrateTests.BitSequenceTests testUInt64]' started.
Test Case '-[SubstrateTests.BitSequenceTests testUInt64]' passed (0.000 seconds).
Test Case '-[SubstrateTests.BitSequenceTests testUInt8]' started.
Test Case '-[SubstrateTests.BitSequenceTests testUInt8]' passed (0.001 seconds).
Test Suite 'BitSequenceTests' passed at 2023-09-28 17:57:32.553.
	 Executed 2 tests, with 0 failures (0 unexpected) in 0.002 (0.002) seconds
```
</details>

<details>

  <summary>DynamicTests</summary>

  ```swift
Test Suite 'DynamicTests' started at 2023-09-28 17:57:32.553.
Test Case '-[IntegrationTests.DynamicTests testBlock]' started.
Test Case '-[IntegrationTests.DynamicTests testBlock]' passed (0.108 seconds).
Test Case '-[IntegrationTests.DynamicTests testInitialization]' started.
Test Case '-[IntegrationTests.DynamicTests testInitialization]' passed (0.074 seconds).
Test Case '-[IntegrationTests.DynamicTests testQueryFeeDetails]' started.
Test Case '-[IntegrationTests.DynamicTests testQueryFeeDetails]' passed (0.084 seconds).
Test Case '-[IntegrationTests.DynamicTests testQueryPaymentInfo]' started.
Test Case '-[IntegrationTests.DynamicTests testQueryPaymentInfo]' passed (0.082 seconds).
Test Case '-[IntegrationTests.DynamicTests testStorageIteration]' started.
Test Case '-[IntegrationTests.DynamicTests testStorageIteration]' passed (0.080 seconds).
Test Case '-[IntegrationTests.DynamicTests testStorageValueCall]' started.
Test Case '-[IntegrationTests.DynamicTests testStorageValueCall]' passed (0.075 seconds).
Test Case '-[IntegrationTests.DynamicTests testTransferAndWatchBatchTx]' started.
Test Case '-[IntegrationTests.DynamicTests testTransferAndWatchBatchTx]' passed (0.085 seconds).
Test Case '-[IntegrationTests.DynamicTests testTransferAndWatchTx]' started.
Test Case '-[IntegrationTests.DynamicTests testTransferAndWatchTx]' passed (0.083 seconds).
Test Case '-[IntegrationTests.DynamicTests testTransferBatchTx]' started.
Test Case '-[IntegrationTests.DynamicTests testTransferBatchTx]' passed (0.082 seconds).
Test Case '-[IntegrationTests.DynamicTests testTransferTx]' started.
Test Case '-[IntegrationTests.DynamicTests testTransferTx]' passed (0.082 seconds).
Test Suite 'DynamicTests' passed at 2023-09-28 17:57:33.388.
	 Executed 10 tests, with 0 failures (0 unexpected) in 0.835 (0.835) seconds
```
</details>

<details>

  <summary>DynamicTypesLookupTests</summary>

  ```swift
Test Suite 'DynamicTypesLookupTests' started at 2023-09-28 17:57:33.389.
Test Case '-[SubstrateTests.DynamicTypesLookupTests testMetadataV14]' started.
Test Case '-[SubstrateTests.DynamicTypesLookupTests testMetadataV14]' passed (0.033 seconds).
Test Case '-[SubstrateTests.DynamicTypesLookupTests testMetadataV15]' started.
Test Case '-[SubstrateTests.DynamicTypesLookupTests testMetadataV15]' passed (0.036 seconds).
Test Suite 'DynamicTypesLookupTests' passed at 2023-09-28 17:57:33.458.
	 Executed 2 tests, with 0 failures (0 unexpected) in 0.069 (0.069) seconds
```
</details>

<details>

  <summary>EcdsaTests</summary>

  ```swift
Test Suite 'EcdsaTests' started at 2023-09-28 17:57:33.458.
Test Case '-[KeychainTests.EcdsaTests testDefaultPhraseShouldBeUsed]' started.
Test Case '-[KeychainTests.EcdsaTests testDefaultPhraseShouldBeUsed]' passed (0.015 seconds).
Test Case '-[KeychainTests.EcdsaTests testGeneratedPairShouldWork]' started.
Test Case '-[KeychainTests.EcdsaTests testGeneratedPairShouldWork]' passed (0.000 seconds).
Test Case '-[KeychainTests.EcdsaTests testGenerateFromPhraseRecoveryPossible]' started.
Test Case '-[KeychainTests.EcdsaTests testGenerateFromPhraseRecoveryPossible]' passed (0.002 seconds).
Test Case '-[KeychainTests.EcdsaTests testGenerateWithPasswordPhraseRecoveryPossible]' started.
Test Case '-[KeychainTests.EcdsaTests testGenerateWithPasswordPhraseRecoveryPossible]' passed (0.002 seconds).
Test Case '-[KeychainTests.EcdsaTests testPasswordDoesSomething]' started.
Test Case '-[KeychainTests.EcdsaTests testPasswordDoesSomething]' passed (0.002 seconds).
Test Case '-[KeychainTests.EcdsaTests testSeedAndDeriveShouldWork]' started.
Test Case '-[KeychainTests.EcdsaTests testSeedAndDeriveShouldWork]' passed (0.000 seconds).
Test Case '-[KeychainTests.EcdsaTests testSeededPairShouldWork]' started.
Test Case '-[KeychainTests.EcdsaTests testSeededPairShouldWork]' passed (0.001 seconds).
Test Case '-[KeychainTests.EcdsaTests testSs58CheckRoundtripWorks]' started.
Test Case '-[KeychainTests.EcdsaTests testSs58CheckRoundtripWorks]' passed (0.001 seconds).
Test Case '-[KeychainTests.EcdsaTests testTestVectorByStringShouldWork]' started.
Test Case '-[KeychainTests.EcdsaTests testTestVectorByStringShouldWork]' passed (0.001 seconds).
Test Case '-[KeychainTests.EcdsaTests testTestVectorShouldWork]' started.
Test Case '-[KeychainTests.EcdsaTests testTestVectorShouldWork]' passed (0.000 seconds).
Test Suite 'EcdsaTests' passed at 2023-09-28 17:57:33.481.
	 Executed 10 tests, with 0 failures (0 unexpected) in 0.023 (0.023) seconds
```
</details>

<details>

  <summary>Ed25519Tests</summary>

  ```swift
Test Suite 'Ed25519Tests' started at 2023-09-28 17:57:33.481.
Test Case '-[KeychainTests.Ed25519Tests testDefaultPhraseShouldBeUsed]' started.
Test Case '-[KeychainTests.Ed25519Tests testDefaultPhraseShouldBeUsed]' passed (0.002 seconds).
Test Case '-[KeychainTests.Ed25519Tests testGeneratedPairShouldWork]' started.
Test Case '-[KeychainTests.Ed25519Tests testGeneratedPairShouldWork]' passed (0.000 seconds).
Test Case '-[KeychainTests.Ed25519Tests testGenerateFromPhraseRecoveryPossible]' started.
Test Case '-[KeychainTests.Ed25519Tests testGenerateFromPhraseRecoveryPossible]' passed (0.002 seconds).
Test Case '-[KeychainTests.Ed25519Tests testGenerateWithPasswordPhraseRecoveryPossible]' started.
Test Case '-[KeychainTests.Ed25519Tests testGenerateWithPasswordPhraseRecoveryPossible]' passed (0.002 seconds).
Test Case '-[KeychainTests.Ed25519Tests testPasswordDoesSomething]' started.
Test Case '-[KeychainTests.Ed25519Tests testPasswordDoesSomething]' passed (0.002 seconds).
Test Case '-[KeychainTests.Ed25519Tests testSeedAndDeriveShouldWork]' started.
Test Case '-[KeychainTests.Ed25519Tests testSeedAndDeriveShouldWork]' passed (0.000 seconds).
Test Case '-[KeychainTests.Ed25519Tests testSeededPairShouldWork]' started.
Test Case '-[KeychainTests.Ed25519Tests testSeededPairShouldWork]' passed (0.000 seconds).
Test Case '-[KeychainTests.Ed25519Tests testSs58CheckRoundtripWorks]' started.
Test Case '-[KeychainTests.Ed25519Tests testSs58CheckRoundtripWorks]' passed (0.000 seconds).
Test Case '-[KeychainTests.Ed25519Tests testTestVectorByStringShouldWork]' started.
Test Case '-[KeychainTests.Ed25519Tests testTestVectorByStringShouldWork]' passed (0.000 seconds).
Test Case '-[KeychainTests.Ed25519Tests testTestVectorShouldWork]' started.
Test Case '-[KeychainTests.Ed25519Tests testTestVectorShouldWork]' passed (0.000 seconds).
Test Suite 'Ed25519Tests' passed at 2023-09-28 17:57:33.491.
	 Executed 10 tests, with 0 failures (0 unexpected) in 0.010 (0.010) seconds
```
</details>

<details>

  <summary>IdentifiableTests</summary>

  ```swift
Test Suite 'IdentifiableTests' started at 2023-09-28 17:57:33.491.
Test Case '-[SubstrateTests.IdentifiableTests testEquatable]' started.
Test Case '-[SubstrateTests.IdentifiableTests testEquatable]' passed (0.000 seconds).
Test Case '-[SubstrateTests.IdentifiableTests testHashable]' started.
Test Case '-[SubstrateTests.IdentifiableTests testHashable]' passed (0.000 seconds).
Test Case '-[SubstrateTests.IdentifiableTests testRecursiveInit]' started.
Test Case '-[SubstrateTests.IdentifiableTests testRecursiveInit]' passed (0.000 seconds).
Test Case '-[SubstrateTests.IdentifiableTests testValidatable]' started.
Test Case '-[SubstrateTests.IdentifiableTests testValidatable]' passed (0.000 seconds).
Test Suite 'IdentifiableTests' passed at 2023-09-28 17:57:33.493.
	 Executed 4 tests, with 0 failures (0 unexpected) in 0.001 (0.001) seconds
```
</details>

<details>

  <summary>MetadataTests</summary>

  ```swift
Test Suite 'MetadataTests' started at 2023-09-28 17:57:33.493.
Test Case '-[SubstrateTests.MetadataTests testEncDecV14]' started.
Test Case '-[SubstrateTests.MetadataTests testEncDecV14]' passed (0.070 seconds).
Test Case '-[SubstrateTests.MetadataTests testEncDecV15]' started.
Test Case '-[SubstrateTests.MetadataTests testEncDecV15]' passed (0.081 seconds).
Test Suite 'MetadataTests' passed at 2023-09-28 17:57:33.644.
	 Executed 2 tests, with 0 failures (0 unexpected) in 0.152 (0.152) seconds
```
</details>

<details>

  <summary>SR25519Tests</summary>

  ```swift
Test Case '-[KeychainTests.Sr25519Tests testCompatibilityDeriveHardKnownPairShouldWork]' started.
Test Case '-[KeychainTests.Sr25519Tests testCompatibilityDeriveHardKnownPairShouldWork]' passed (0.001 seconds).
Test Case '-[KeychainTests.Sr25519Tests testCompatibilityDeriveSoftKnownPairShouldWork]' started.
Test Case '-[KeychainTests.Sr25519Tests testCompatibilityDeriveSoftKnownPairShouldWork]' passed (0.001 seconds).
Test Case '-[KeychainTests.Sr25519Tests testDefaultAddressShouldBeUsed]' started.
Test Case '-[KeychainTests.Sr25519Tests testDefaultAddressShouldBeUsed]' passed (0.001 seconds).
Test Case '-[KeychainTests.Sr25519Tests testDefaultPhraseShouldBeUsed]' started.
Test Case '-[KeychainTests.Sr25519Tests testDefaultPhraseShouldBeUsed]' passed (0.004 seconds).
Test Case '-[KeychainTests.Sr25519Tests testDefaultPhraseShouldCorrespondToDefaultAddress]' started.
Test Case '-[KeychainTests.Sr25519Tests testDefaultPhraseShouldCorrespondToDefaultAddress]' passed (0.003 seconds).
Test Case '-[KeychainTests.Sr25519Tests testDeriveHardPublicShouldFail]' started.
Test Case '-[KeychainTests.Sr25519Tests testDeriveHardPublicShouldFail]' passed (0.000 seconds).
Test Case '-[KeychainTests.Sr25519Tests testDeriveHardShouldWork]' started.
Test Case '-[KeychainTests.Sr25519Tests testDeriveHardShouldWork]' passed (0.001 seconds).
Test Case '-[KeychainTests.Sr25519Tests testDeriveSoftPublicShouldWork]' started.
Test Case '-[KeychainTests.Sr25519Tests testDeriveSoftPublicShouldWork]' passed (0.000 seconds).
Test Case '-[KeychainTests.Sr25519Tests testDeriveSoftShouldWork]' started.
Test Case '-[KeychainTests.Sr25519Tests testDeriveSoftShouldWork]' passed (0.001 seconds).
Test Case '-[KeychainTests.Sr25519Tests testGeneratedPairShouldWork]' started.
Test Case '-[KeychainTests.Sr25519Tests testGeneratedPairShouldWork]' passed (0.000 seconds).
Test Case '-[KeychainTests.Sr25519Tests testMessedMessageShouldNotWork]' started.
Test Case '-[KeychainTests.Sr25519Tests testMessedMessageShouldNotWork]' passed (0.000 seconds).
Test Case '-[KeychainTests.Sr25519Tests testMessedSignatureShouldNotWork]' started.
Test Case '-[KeychainTests.Sr25519Tests testMessedSignatureShouldNotWork]' passed (0.000 seconds).
Test Case '-[KeychainTests.Sr25519Tests testPhraseInit]' started.
Test Case '-[KeychainTests.Sr25519Tests testPhraseInit]' passed (0.001 seconds).
Test Case '-[KeychainTests.Sr25519Tests testSeededPairShouldWork]' started.
Test Case '-[KeychainTests.Sr25519Tests testSeededPairShouldWork]' passed (0.000 seconds).
Test Case '-[KeychainTests.Sr25519Tests testSignAndVerify]' started.
Test Case '-[KeychainTests.Sr25519Tests testSignAndVerify]' passed (0.000 seconds).
Test Case '-[KeychainTests.Sr25519Tests testSrTestVectorShouldWork]' started.
Test Case '-[KeychainTests.Sr25519Tests testSrTestVectorShouldWork]' passed (0.000 seconds).
Test Case '-[KeychainTests.Sr25519Tests testSs58CheckRoundtripWorks]' started.
Test Case '-[KeychainTests.Sr25519Tests testSs58CheckRoundtripWorks]' passed (0.000 seconds).
Test Suite 'Sr25519Tests' passed at 2023-09-28 17:57:33.660.
	 Executed 17 tests, with 0 failures (0 unexpected) in 0.015 (0.015) seconds
```
</details>

<details>

  <summary>StaticTests</summary>

  ```swift
Test Suite 'StaticTests' started at 2023-09-28 17:57:33.660.
Test Case '-[IntegrationTests.StaticTests testBlock]' started.
Test Case '-[IntegrationTests.StaticTests testBlock]' passed (0.079 seconds).
Test Case '-[IntegrationTests.StaticTests testConstant]' started.
Test Case '-[IntegrationTests.StaticTests testConstant]' passed (0.074 seconds).
Test Case '-[IntegrationTests.StaticTests testInitialization]' started.
Test Case '-[IntegrationTests.StaticTests testInitialization]' passed (0.074 seconds).
Test Case '-[IntegrationTests.StaticTests testQueryFeeDetails]' started.
Test Case '-[IntegrationTests.StaticTests testQueryFeeDetails]' passed (0.081 seconds).
Test Case '-[IntegrationTests.StaticTests testQueryPaymentInfo]' started.
Test Case '-[IntegrationTests.StaticTests testQueryPaymentInfo]' passed (0.081 seconds).
Test Case '-[IntegrationTests.StaticTests testStorageIteration]' started.
Test Case '-[IntegrationTests.StaticTests testStorageIteration]' passed (0.078 seconds).
Test Case '-[IntegrationTests.StaticTests testStorageValueCall]' started.
Test Case '-[IntegrationTests.StaticTests testStorageValueCall]' passed (0.075 seconds).
Test Case '-[IntegrationTests.StaticTests testTransferAndWatchBatchTx]' started.
Test Case '-[IntegrationTests.StaticTests testTransferAndWatchBatchTx]' passed (0.083 seconds).
Test Case '-[IntegrationTests.StaticTests testTransferAndWatchTx]' started.
Test Case '-[IntegrationTests.StaticTests testTransferAndWatchTx]' passed (0.084 seconds).
Test Case '-[IntegrationTests.StaticTests testTransferBatchTx]' started.
Test Case '-[IntegrationTests.StaticTests testTransferBatchTx]' passed (0.081 seconds).
Test Case '-[IntegrationTests.StaticTests testTransferTx]' started.
Test Case '-[IntegrationTests.StaticTests testTransferTx]' passed (0.080 seconds).
Test Suite 'StaticTests' passed at 2023-09-28 17:57:34.528.
	 Executed 11 tests, with 0 failures (0 unexpected) in 0.868 (0.868) seconds
```

</details>

<details>

  <summary>StorageKeysTests</summary>

  ```swift
Test Suite 'StorageKeysTests' started at 2023-09-28 17:57:34.528.
Test Case '-[SubstrateTests.StorageKeysTests testConcatDoubleMapStructStorageKey]' started.
Test Case '-[SubstrateTests.StorageKeysTests testConcatDoubleMapStructStorageKey]' passed (0.037 seconds).
Test Case '-[SubstrateTests.StorageKeysTests testConcatDoubleMapTupleStorageKey]' started.
Test Case '-[SubstrateTests.StorageKeysTests testConcatDoubleMapTupleStorageKey]' passed (0.036 seconds).
Test Case '-[SubstrateTests.StorageKeysTests testConcatMapStructStorageKey]' started.
Test Case '-[SubstrateTests.StorageKeysTests testConcatMapStructStorageKey]' passed (0.036 seconds).
Test Case '-[SubstrateTests.StorageKeysTests testConcatMapTupleStorageKey]' started.
Test Case '-[SubstrateTests.StorageKeysTests testConcatMapTupleStorageKey]' passed (0.036 seconds).
Test Case '-[SubstrateTests.StorageKeysTests testConcatTripleMapTupleStorageKey]' started.
Test Case '-[SubstrateTests.StorageKeysTests testConcatTripleMapTupleStorageKey]' passed (0.037 seconds).
Test Case '-[SubstrateTests.StorageKeysTests testEncDecAnyKey]' started.
Test Case '-[SubstrateTests.StorageKeysTests testEncDecAnyKey]' passed (0.036 seconds).
Test Case '-[SubstrateTests.StorageKeysTests testFixedDoubleMapStructStorageKey]' started.
Test Case '-[SubstrateTests.StorageKeysTests testFixedDoubleMapStructStorageKey]' passed (0.036 seconds).
Test Case '-[SubstrateTests.StorageKeysTests testFixedDoubleMapTupleStorageKey]' started.
Test Case '-[SubstrateTests.StorageKeysTests testFixedDoubleMapTupleStorageKey]' passed (0.036 seconds).
Test Case '-[SubstrateTests.StorageKeysTests testFixedMapStructStorageKey]' started.
Test Case '-[SubstrateTests.StorageKeysTests testFixedMapStructStorageKey]' passed (0.036 seconds).
Test Case '-[SubstrateTests.StorageKeysTests testFixedMapTupleStorageKey]' started.
Test Case '-[SubstrateTests.StorageKeysTests testFixedMapTupleStorageKey]' passed (0.036 seconds).
Test Case '-[SubstrateTests.StorageKeysTests testFixedTripleMapTupleStorageKey]' started.
Test Case '-[SubstrateTests.StorageKeysTests testFixedTripleMapTupleStorageKey]' passed (0.037 seconds).
Test Case '-[SubstrateTests.StorageKeysTests testPlainStorageKey]' started.
Test Case '-[SubstrateTests.StorageKeysTests testPlainStorageKey]' passed (0.037 seconds).
Test Suite 'StorageKeysTests' passed at 2023-09-28 17:57:34.965.
	 Executed 12 tests, with 0 failures (0 unexpected) in 0.436 (0.436) seconds
Test Suite 'SubstratePackageTests.xctest' passed at 2023-09-28 17:57:34.965.
	 Executed 92 tests, with 0 failures (0 unexpected) in 2.528 (2.530) seconds
Test Suite 'All tests' passed at 2023-09-28 17:57:34.965.
	 Executed 92 tests, with 0 failures (0 unexpected) in 2.528 (2.531) seconds
```
</details>
