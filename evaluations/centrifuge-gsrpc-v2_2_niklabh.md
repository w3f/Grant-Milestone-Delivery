# Evaluation

- **Status:** Accepted
- **Application Document:** [centrifuge-gsrpc-v2](https://github.com/w3f/Grants-Program/blob/master/applications/centrifuge-gsrpc-v2.md)
- **Milestone:** 2
- **Kusama Identity:** [CwYBnfoxb1B6fibdMN4js21DQeqgbqHgwLwacfKFdC7vsyZ](https://kusama.subscan.io/account/CwYBnfoxb1B6fibdMN4js21DQeqgbqHgwLwacfKFdC7vsyZ)
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable     | Accepted                | Link                                                                                                                              | Evaluation Notes     |
|--------|-----------------|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------|----------------------|
| 1.     | License         | <ul><li>[x] </li> </ul> | [License](https://github.com/centrifuge/go-substrate-rpc-client/blob/events-parsing-v2-milestone-1/LICENSE)                       | Apache License v2    |
| 2.     | Documentation   | <ul><li>[x] </li></ul>  | [Documentation](https://github.com/centrifuge/go-substrate-rpc-client/blob/events-parsing-v2-milestone-1/README.md)               | inline documentation |
| 3.     | PR with changes | <ul><li>[x] </li></ul>  | [centrifuge/go-substrate-rpc-client#327](https://github.com/centrifuge/go-substrate-rpc-client/pull/327)                          |                      |
| 4a.    | Tests           | <ul><li>[x] </li></ul>  | [UnitTest](https://github.com/centrifuge/go-substrate-rpc-client/blob/19aa30067543bd77becbc2cee55d755fd689aa12/Makefile#L49)      |                      |
| 4b.    | Test execution  | <ul><li>[x] </li></ul>  | [TestExecution](https://github.com/centrifuge/go-substrate-rpc-client/blob/19aa30067543bd77becbc2cee55d755fd689aa12/Makefile#L49) |                      |

| Number | Deliverable                      | Accepted                | Link                                                                                                                                                                              |  Evalulation Notes                                                                                                        |
|--------|----------------------------------|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| 1.     | License                          | <ul><li>[x] </li> </ul> | [License](https://github.com/centrifuge/go-substrate-rpc-client/blob/event-parsing-v2/LICENSE)                                                                                    | Apache License v2                                                                                                         |
| 2.     | Documentation                    | <ul><li>[ ] </li> </ul> | [Documentation](https://github.com/centrifuge/go-substrate-rpc-client/blob/event-parsing-v2/registry/REGISTRY.md)                                                                 | Documentation Needs to be improved                                                                                        |
| 3.     | PR with changes                  | <ul><li>[ ] </li> </ul> | [centrifuge/go-substrate-rpc-client#338](https://github.com/centrifuge/go-substrate-rpc-client/pull/338)                                                                          | PR looks good                                                                                                             |
| 4a.    | Registry Unit Tests              | <ul><li>[ ] </li> </ul> | [UnitTest](https://github.com/centrifuge/go-substrate-rpc-client/blob/20047b8b15d046d0fa137cc716cb489395a0081a/registry/registry_test.go)                                         | Unit Test coverage is good                                                                                                |
| 4b.    | Registry (Events) Live Tests     | <ul><li>[ ] </li> </ul> | [Events Live Tests](https://github.com/centrifuge/go-substrate-rpc-client/blob/20047b8b15d046d0fa137cc716cb489395a0081a/registry/retriever/event_retriever_live_test.go)          | Error in running docker tests, submitted a [PR](https://github.com/centrifuge/go-substrate-rpc-client/pull/353) to fix    |
| 4c.    | Registry (Extrinsics) Live Tests | <ul><li>[ ] </li> </ul> | [Extrinsics Live Tests](https://github.com/centrifuge/go-substrate-rpc-client/blob/20047b8b15d046d0fa137cc716cb489395a0081a/registry/retriever/extrinsic_retriever_live_test.go)  | Live test against public endpoints. Tests are running for too long. No need to check for 1000 events. 50 are fine         |
| 4d.    | Test execution                   | <ul><li>[x] </li> </ul> | [Test execution](https://github.com/centrifuge/go-substrate-rpc-client/blob/20047b8b15d046d0fa137cc716cb489395a0081a/Makefile#L49-L53)                                            | Makefile has a [error](https://github.com/centrifuge/go-substrate-rpc-client/issues/352)                                  |
| 5.     | Dockerfile                       | <ul><li>[x] </li> </ul> | [Dockerfile](https://github.com/centrifuge/go-substrate-rpc-client/blob/b9da36ebf177cbb3ee41c2ef2b9a1fb08e5f8522/Dockerfile_milestone2)                                           | Dockerfile is provided                                                                                                    |
| 6.     | In-Memory Registry               | <ul><li>[x] </li> </ul> | [centrifuge/go-substrate-rpc-client#338](https://github.com/centrifuge/go-substrate-rpc-client/pull/338)                                                                          | In-Memory Registry is implemented                                                                                         |

## General Notes v1 - June 26, 2023

- Documentation needs to be improved. Basic tutorial on how to parse any substrate event and type using the new version of the library is missing.
- Unit test coverage is good.
- There is an error in running tests in Makefile. I have submitted a [PR](https://github.com/centrifuge/go-substrate-rpc-client/pull/353) to fix the same.
- Live tests are running for too long. No need to check for 1000 events. 50 are fine.
- Dockerfile to run milestone2 tests is provided.
- In-Memory Registry is implemented.

### Run unit test

```bash
make test-milestone2
Sending build context to Docker daemon  11.94MB
Step 1/4 : FROM golang:1.18
 ---> c37a56a6d654
Step 2/4 : COPY . /go-substrate-rpc-client/events-parsing-v2/milestone-2
 ---> Using cache
 ---> 330446577dfa
Step 3/4 : WORKDIR /go-substrate-rpc-client/events-parsing-v2/milestone-2
 ---> Using cache
 ---> a35718b940dc
Step 4/4 : CMD go test -v ./registry/... --cover
 ---> Running in ca1e535bbbba
Removing intermediate container ca1e535bbbba
 ---> 5aaa87d8f46c
Successfully built 5aaa87d8f46c
Successfully tagged gsrpc-m2:latest
go: downloading github.com/stretchr/testify v1.7.0
go: downloading github.com/gorilla/websocket v1.5.0
go: downloading github.com/ethereum/go-ethereum v1.10.17
go: downloading github.com/deckarep/golang-set v1.8.0
go: downloading github.com/rs/cors v1.8.2
go: downloading golang.org/x/crypto v0.0.0-20211117183948-ae814b36b871
go: downloading github.com/vedhavyas/go-subkey v1.0.3
go: downloading github.com/pierrec/xxHash v0.1.5
go: downloading github.com/stretchr/objx v0.1.1
go: downloading github.com/pmezard/go-difflib v1.0.0
go: downloading github.com/davecgh/go-spew v1.1.1
go: downloading gopkg.in/yaml.v3 v3.0.0-20210107192922-496545a6307b
go: downloading github.com/gtank/merlin v0.1.1
go: downloading github.com/ChainSafe/go-schnorrkel v1.0.0
go: downloading github.com/decred/base58 v1.0.3
go: downloading github.com/mimoo/StrobeGo v0.0.0-20210601165009-122bf33a46e0
go: downloading github.com/cosmos/go-bip39 v1.0.0
go: downloading github.com/gtank/ristretto255 v0.1.2
go: downloading golang.org/x/sys v0.0.0-20211124211545-fe61309f8881
go: downloading github.com/decred/dcrd/crypto/blake256 v1.0.0
go: downloading github.com/go-stack/stack v1.8.1
=== RUN   TestFactory_CreateErrorRegistryWithLiveMetadata
=== RUN   TestFactory_CreateErrorRegistryWithLiveMetadata/centrifuge
    registry_test.go:47: Metadata was decoded successfully
    registry_test.go:54: Error registry was created successfully
=== RUN   TestFactory_CreateErrorRegistryWithLiveMetadata/polkadot
    registry_test.go:47: Metadata was decoded successfully
    registry_test.go:54: Error registry was created successfully
=== RUN   TestFactory_CreateErrorRegistryWithLiveMetadata/acala
    registry_test.go:47: Metadata was decoded successfully
    registry_test.go:54: Error registry was created successfully
=== RUN   TestFactory_CreateErrorRegistryWithLiveMetadata/statemint
    registry_test.go:47: Metadata was decoded successfully
    registry_test.go:54: Error registry was created successfully
=== RUN   TestFactory_CreateErrorRegistryWithLiveMetadata/moonbeam
    registry_test.go:47: Metadata was decoded successfully
    registry_test.go:54: Error registry was created successfully
--- PASS: TestFactory_CreateErrorRegistryWithLiveMetadata (0.16s)
    --- PASS: TestFactory_CreateErrorRegistryWithLiveMetadata/centrifuge (0.03s)
    --- PASS: TestFactory_CreateErrorRegistryWithLiveMetadata/polkadot (0.06s)
    --- PASS: TestFactory_CreateErrorRegistryWithLiveMetadata/acala (0.02s)
    --- PASS: TestFactory_CreateErrorRegistryWithLiveMetadata/statemint (0.02s)
    --- PASS: TestFactory_CreateErrorRegistryWithLiveMetadata/moonbeam (0.03s)
=== RUN   TestFactory_CreateErrorRegistry_NoPalletWithErrors
--- PASS: TestFactory_CreateErrorRegistry_NoPalletWithErrors (0.00s)
=== RUN   TestFactory_CreateErrorRegistry_ErrorsTypeNotFound
--- PASS: TestFactory_CreateErrorRegistry_ErrorsTypeNotFound (0.00s)
=== RUN   TestFactory_CreateErrorRegistry_ErrorsTypeNotAVariant
--- PASS: TestFactory_CreateErrorRegistry_ErrorsTypeNotAVariant (0.00s)
=== RUN   TestFactory_CreateErrorRegistry_GetTypeFieldsError
--- PASS: TestFactory_CreateErrorRegistry_GetTypeFieldsError (0.00s)
=== RUN   TestFactory_CreateCallRegistryWithLiveMetadata
=== RUN   TestFactory_CreateCallRegistryWithLiveMetadata/centrifuge
    registry_test.go:246: Metadata was decoded successfully
    registry_test.go:253: Call registry was created successfully
=== RUN   TestFactory_CreateCallRegistryWithLiveMetadata/polkadot
    registry_test.go:246: Metadata was decoded successfully
    registry_test.go:253: Call registry was created successfully
=== RUN   TestFactory_CreateCallRegistryWithLiveMetadata/acala
    registry_test.go:246: Metadata was decoded successfully
    registry_test.go:253: Call registry was created successfully
=== RUN   TestFactory_CreateCallRegistryWithLiveMetadata/statemint
    registry_test.go:246: Metadata was decoded successfully
    registry_test.go:253: Call registry was created successfully
=== RUN   TestFactory_CreateCallRegistryWithLiveMetadata/moonbeam
    registry_test.go:246: Metadata was decoded successfully
    registry_test.go:253: Call registry was created successfully
--- PASS: TestFactory_CreateCallRegistryWithLiveMetadata (0.99s)
    --- PASS: TestFactory_CreateCallRegistryWithLiveMetadata/centrifuge (0.24s)
    --- PASS: TestFactory_CreateCallRegistryWithLiveMetadata/polkadot (0.20s)
    --- PASS: TestFactory_CreateCallRegistryWithLiveMetadata/acala (0.25s)
    --- PASS: TestFactory_CreateCallRegistryWithLiveMetadata/statemint (0.12s)
    --- PASS: TestFactory_CreateCallRegistryWithLiveMetadata/moonbeam (0.18s)
=== RUN   TestFactory_CreateCallRegistry_NoPalletWithCalls
--- PASS: TestFactory_CreateCallRegistry_NoPalletWithCalls (0.00s)
=== RUN   TestFactory_CreateCallRegistry_CallsTypeNotFound
--- PASS: TestFactory_CreateCallRegistry_CallsTypeNotFound (0.00s)
=== RUN   TestFactory_CreateCallRegistry_CallTypeNotAVariant
--- PASS: TestFactory_CreateCallRegistry_CallTypeNotAVariant (0.00s)
=== RUN   TestFactory_CreateCallRegistry_GetTypeFieldsError
--- PASS: TestFactory_CreateCallRegistry_GetTypeFieldsError (0.00s)
=== RUN   TestFactory_CreateEventRegistryWithLiveMetadata
=== RUN   TestFactory_CreateEventRegistryWithLiveMetadata/centrifuge
    registry_test.go:450: Metadata was decoded successfully
    registry_test.go:457: Event registry was created successfully
=== RUN   TestFactory_CreateEventRegistryWithLiveMetadata/polkadot
    registry_test.go:450: Metadata was decoded successfully
    registry_test.go:457: Event registry was created successfully
=== RUN   TestFactory_CreateEventRegistryWithLiveMetadata/acala
    registry_test.go:450: Metadata was decoded successfully
    registry_test.go:457: Event registry was created successfully
=== RUN   TestFactory_CreateEventRegistryWithLiveMetadata/statemint
    registry_test.go:450: Metadata was decoded successfully
    registry_test.go:457: Event registry was created successfully
=== RUN   TestFactory_CreateEventRegistryWithLiveMetadata/moonbeam
    registry_test.go:450: Metadata was decoded successfully
    registry_test.go:457: Event registry was created successfully
--- PASS: TestFactory_CreateEventRegistryWithLiveMetadata (0.25s)
    --- PASS: TestFactory_CreateEventRegistryWithLiveMetadata/centrifuge (0.05s)
    --- PASS: TestFactory_CreateEventRegistryWithLiveMetadata/polkadot (0.06s)
    --- PASS: TestFactory_CreateEventRegistryWithLiveMetadata/acala (0.04s)
    --- PASS: TestFactory_CreateEventRegistryWithLiveMetadata/statemint (0.04s)
    --- PASS: TestFactory_CreateEventRegistryWithLiveMetadata/moonbeam (0.06s)
=== RUN   TestFactory_CreateEventRegistry_NoPalletWithEvents
--- PASS: TestFactory_CreateEventRegistry_NoPalletWithEvents (0.00s)
=== RUN   TestFactory_CreateEventRegistry_EventsTypeNotFound
--- PASS: TestFactory_CreateEventRegistry_EventsTypeNotFound (0.00s)
=== RUN   TestFactory_CreateEventRegistry_EventTypeNotAVariant
--- PASS: TestFactory_CreateEventRegistry_EventTypeNotAVariant (0.00s)
=== RUN   TestFactory_CreateEventRegistry_GetTypeFieldError
--- PASS: TestFactory_CreateEventRegistry_GetTypeFieldError (0.00s)
=== RUN   TestFactory_getTypeFields
--- PASS: TestFactory_getTypeFields (0.00s)
=== RUN   TestFactory_getTypeFields_FieldDecoderRetrievalError
--- PASS: TestFactory_getTypeFields_FieldDecoderRetrievalError (0.00s)
=== RUN   TestFactory_getTypeFields_FieldTypeNotFoundError
--- PASS: TestFactory_getTypeFields_FieldTypeNotFoundError (0.00s)
=== RUN   TestFactory_getFieldDecoder_UnsupportedTypeError
--- PASS: TestFactory_getFieldDecoder_UnsupportedTypeError (0.00s)
=== RUN   TestFactory_getFieldDecoder_Compact
--- PASS: TestFactory_getFieldDecoder_Compact (0.00s)
=== RUN   TestFactory_getFieldDecoder_Compact_TypeNotFoundError
--- PASS: TestFactory_getFieldDecoder_Compact_TypeNotFoundError (0.00s)
=== RUN   TestFactory_getFieldDecoder_Composite
--- PASS: TestFactory_getFieldDecoder_Composite (0.00s)
=== RUN   TestFactory_getFieldDecoder_Composite_FieldError
--- PASS: TestFactory_getFieldDecoder_Composite_FieldError (0.00s)
=== RUN   TestFactory_getFieldDecoder_Variant
--- PASS: TestFactory_getFieldDecoder_Variant (0.00s)
=== RUN   TestFactory_getFieldDecoder_Primitive
--- PASS: TestFactory_getFieldDecoder_Primitive (0.00s)
=== RUN   TestFactory_getFieldDecoder_Array
--- PASS: TestFactory_getFieldDecoder_Array (0.00s)
=== RUN   TestFactory_getFieldDecoder_Array_TypeNotFoundError
--- PASS: TestFactory_getFieldDecoder_Array_TypeNotFoundError (0.00s)
=== RUN   TestFactory_getFieldDecoder_Slice
--- PASS: TestFactory_getFieldDecoder_Slice (0.00s)
=== RUN   TestFactory_getFieldDecoder_Slice_TypeNotFoundError
--- PASS: TestFactory_getFieldDecoder_Slice_TypeNotFoundError (0.00s)
=== RUN   TestFactory_getFieldDecoder_Tuple
--- PASS: TestFactory_getFieldDecoder_Tuple (0.00s)
=== RUN   TestFactory_getFieldDecoder_Tuple_NilTuple
--- PASS: TestFactory_getFieldDecoder_Tuple_NilTuple (0.00s)
=== RUN   TestFactory_getFieldDecoder_BitSequence
--- PASS: TestFactory_getFieldDecoder_BitSequence (0.00s)
=== RUN   TestFactory_getFieldDecoder_BitSequence_BitStoreTypeNotFound
--- PASS: TestFactory_getFieldDecoder_BitSequence_BitStoreTypeNotFound (0.00s)
=== RUN   TestFactory_getFieldDecoder_BitSequence_BitStoreFieldTypeError
--- PASS: TestFactory_getFieldDecoder_BitSequence_BitStoreFieldTypeError (0.00s)
=== RUN   TestFactory_getFieldDecoder_BitSequence_BitOrderTypeNotFound
--- PASS: TestFactory_getFieldDecoder_BitSequence_BitOrderTypeNotFound (0.00s)
=== RUN   TestFactory_getFieldDecoder_BitSequence_BitOrderCreationError
--- PASS: TestFactory_getFieldDecoder_BitSequence_BitOrderCreationError (0.00s)
=== RUN   TestFactory_getVariantFieldType_CompositeVariantTypeFieldError
--- PASS: TestFactory_getVariantFieldType_CompositeVariantTypeFieldError (0.00s)
=== RUN   TestFactory_getCompactFieldType_CompactTuple
--- PASS: TestFactory_getCompactFieldType_CompactTuple (0.00s)
=== RUN   TestFactory_getCompactFieldType_CompactComposite
--- PASS: TestFactory_getCompactFieldType_CompactComposite (0.00s)
=== RUN   TestFactory_getArrayFieldType
--- PASS: TestFactory_getArrayFieldType (0.00s)
=== RUN   TestFactory_getArrayFieldType_ItemFieldTypeError
--- PASS: TestFactory_getArrayFieldType_ItemFieldTypeError (0.00s)
=== RUN   TestFactory_getSliceFieldType
--- PASS: TestFactory_getSliceFieldType (0.00s)
=== RUN   TestFactory_getSliceFieldType_ItemFieldTypeError
--- PASS: TestFactory_getSliceFieldType_ItemFieldTypeError (0.00s)
=== RUN   TestFactory_getTupleType
--- PASS: TestFactory_getTupleType (0.00s)
=== RUN   TestFactory_getTupleType_TupleItemNotFound
--- PASS: TestFactory_getTupleType_TupleItemNotFound (0.00s)
=== RUN   TestFactory_getTupleType_TupleItemFieldDecoderError
--- PASS: TestFactory_getTupleType_TupleItemFieldDecoderError (0.00s)
=== RUN   Test_getPrimitiveType_UnsupportedTypeError
--- PASS: Test_getPrimitiveType_UnsupportedTypeError (0.00s)
PASS
coverage: 66.6% of statements
ok  	github.com/centrifuge/go-substrate-rpc-client/v4/registry	1.406s	coverage: 66.6% of statements
=== RUN   TestRetryableExecutor_ExecWithFallback
--- PASS: TestRetryableExecutor_ExecWithFallback (0.00s)
=== RUN   TestRetryableExecutor_ExecWithFallback_RetrySuccess
--- PASS: TestRetryableExecutor_ExecWithFallback_RetrySuccess (0.00s)
=== RUN   TestRetryableExecutor_ExecWithFallback_NilFns
--- PASS: TestRetryableExecutor_ExecWithFallback_NilFns (0.00s)
=== RUN   TestRetryableExecutor_ExecWithFallback_ExecFnError
--- PASS: TestRetryableExecutor_ExecWithFallback_ExecFnError (0.50s)
=== RUN   TestRetryableExecutor_ExecWithFallback_FallBackFnError
--- PASS: TestRetryableExecutor_ExecWithFallback_FallBackFnError (0.00s)
=== RUN   TestRetryableExecutor_ExecWithFallback_FallBackFnError_NoRetry
--- PASS: TestRetryableExecutor_ExecWithFallback_FallBackFnError_NoRetry (0.00s)
PASS
coverage: 60.8% of statements
ok  	github.com/centrifuge/go-substrate-rpc-client/v4/registry/exec	0.504s	coverage: 60.8% of statements
=== RUN   TestEventParserFn_ParseEvents
--- PASS: TestEventParserFn_ParseEvents (0.00s)
=== RUN   TestEventParserFn_ParseEvents_EventCountDecodeError
--- PASS: TestEventParserFn_ParseEvents_EventCountDecodeError (0.00s)
=== RUN   TestEventParserFn_ParseEvents_PhaseDecodeError
--- PASS: TestEventParserFn_ParseEvents_PhaseDecodeError (0.00s)
=== RUN   TestEventParserFn_ParseEvents_EventIDDecodeError
--- PASS: TestEventParserFn_ParseEvents_EventIDDecodeError (0.00s)
=== RUN   TestEventParserFn_ParseEvents_EventFieldsDecodeError
--- PASS: TestEventParserFn_ParseEvents_EventFieldsDecodeError (0.00s)
=== RUN   TestEventParserFn_ParseEvents_MissingEventDecoder
--- PASS: TestEventParserFn_ParseEvents_MissingEventDecoder (0.00s)
=== RUN   TestEventParserFn_ParseEvents_TopicsDecodeError
--- PASS: TestEventParserFn_ParseEvents_TopicsDecodeError (0.00s)
=== RUN   TestExtrinsicParserFn_ParseExtrinsics
--- PASS: TestExtrinsicParserFn_ParseExtrinsics (0.00s)
=== RUN   TestExtrinsicParserFn_ParseExtrinsics_MissingCallDecoder
--- PASS: TestExtrinsicParserFn_ParseExtrinsics_MissingCallDecoder (0.00s)
=== RUN   TestExtrinsicParserFn_ParseExtrinsics_DecodeError
--- PASS: TestExtrinsicParserFn_ParseExtrinsics_DecodeError (0.00s)
PASS
coverage: 55.4% of statements
ok  	github.com/centrifuge/go-substrate-rpc-client/v4/registry/parser	0.004s	coverage: 55.4% of statements
=== RUN   TestEventRetriever_New
    factory_mock.go:94: PASS:	CreateEventRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestEventRetriever_New (0.00s)
=== RUN   TestEventRetriever_New_InternalStateUpdateError
    factory_mock.go:94: PASS:	CreateEventRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadataLatest()
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestEventRetriever_New_InternalStateUpdateError (0.00s)
=== RUN   TestEventRetriever_NewDefault
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestEventRetriever_NewDefault (0.00s)
=== RUN   TestEventRetriever_GetEvents
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    event_provider_mock.go:48: PASS:	GetStorageEvents(*types.Metadata,types.Hash)
    event_parser_mock.go:49: PASS:	ParseEvents(registry.EventRegistry,*types.StorageDataRaw)
--- PASS: TestEventRetriever_GetEvents (0.00s)
=== RUN   TestEventRetriever_GetEvents_StorageRetrievalError
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    factory_mock.go:94: PASS:	CreateEventRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadata(types.Hash)
    event_provider_mock.go:48: PASS:	GetStorageEvents(*types.Metadata,types.Hash)
--- PASS: TestEventRetriever_GetEvents_StorageRetrievalError (0.00s)
=== RUN   TestEventRetriever_GetEvents_EventParsingError
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    factory_mock.go:94: PASS:	CreateEventRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadata(types.Hash)
    event_provider_mock.go:48: PASS:	GetStorageEvents(*types.Metadata,types.Hash)
    event_parser_mock.go:49: PASS:	ParseEvents(registry.EventRegistry,*types.StorageDataRaw)
--- PASS: TestEventRetriever_GetEvents_EventParsingError (0.00s)
=== RUN   TestEventRetriever_updateInternalState
    factory_mock.go:94: PASS:	CreateEventRegistry(*types.Metadata)
    factory_mock.go:94: PASS:	CreateEventRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadata(types.Hash)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestEventRetriever_updateInternalState (0.00s)
=== RUN   TestEventRetriever_updateInternalState_MetadataRetrievalError
    state.go:700: PASS:	GetMetadata(types.Hash)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestEventRetriever_updateInternalState_MetadataRetrievalError (0.00s)
=== RUN   TestEventRetriever_updateInternalState_RegistryFactoryError
    factory_mock.go:94: PASS:	CreateEventRegistry(*types.Metadata)
    factory_mock.go:94: PASS:	CreateEventRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadata(types.Hash)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestEventRetriever_updateInternalState_RegistryFactoryError (0.00s)
=== RUN   TestExtrinsicRetriever_New
    factory_mock.go:94: PASS:	CreateCallRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestExtrinsicRetriever_New (0.00s)
=== RUN   TestExtrinsicRetriever_New_InternalStateUpdateError
    factory_mock.go:94: PASS:	CreateCallRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadataLatest()
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestExtrinsicRetriever_New_InternalStateUpdateError (0.00s)
=== RUN   TestExtrinsicRetriever_NewDefault
    factory_mock.go:94: PASS:	CreateCallRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestExtrinsicRetriever_NewDefault (0.00s)
=== RUN   TestExtrinsicRetriever_GetExtrinsics
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    chain_mock.go:67: PASS:	GetBlock(types.Hash)
    extrinsic_parser_mock.go:50: PASS:	ParseExtrinsics(registry.CallRegistry,*generic.SignedBlock[github.com/centrifuge/go-substrate-rpc-client/v4/types.MultiAddress,github.com/centrifuge/go-substrate-rpc-client/v4/types.MultiSignature,github.com/centrifuge/go-substrate-rpc-client/v4/rpc/chain/generic.DefaultPaymentFields])
--- PASS: TestExtrinsicRetriever_GetExtrinsics (0.00s)
=== RUN   TestExtrinsicRetriever_GetExtrinsics_BlockRetrievalError
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    chain_mock.go:67: PASS:	GetBlock(types.Hash)
--- PASS: TestExtrinsicRetriever_GetExtrinsics_BlockRetrievalError (0.00s)
=== RUN   TestExtrinsicRetriever_GetExtrinsics_ExtrinsicParsingError
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    factory_mock.go:94: PASS:	CreateCallRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadata(types.Hash)
    chain_mock.go:67: PASS:	GetBlock(types.Hash)
    extrinsic_parser_mock.go:50: PASS:	ParseExtrinsics(registry.CallRegistry,*generic.SignedBlock[github.com/centrifuge/go-substrate-rpc-client/v4/types.MultiAddress,github.com/centrifuge/go-substrate-rpc-client/v4/types.MultiSignature,github.com/centrifuge/go-substrate-rpc-client/v4/rpc/chain/generic.DefaultPaymentFields])
--- PASS: TestExtrinsicRetriever_GetExtrinsics_ExtrinsicParsingError (0.00s)
=== RUN   TestExtrinsicRetriever_updateInternalState
    factory_mock.go:94: PASS:	CreateCallRegistry(*types.Metadata)
    factory_mock.go:94: PASS:	CreateCallRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadata(types.Hash)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestExtrinsicRetriever_updateInternalState (0.00s)
=== RUN   TestExtrinsicRetriever_updateInternalState_MetadataRetrievalError
    state.go:700: PASS:	GetMetadata(types.Hash)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestExtrinsicRetriever_updateInternalState_MetadataRetrievalError (0.00s)
=== RUN   TestExtrinsicRetriever_updateInternalState_RegistryFactoryError
    factory_mock.go:94: PASS:	CreateCallRegistry(*types.Metadata)
    factory_mock.go:94: PASS:	CreateCallRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadata(types.Hash)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestExtrinsicRetriever_updateInternalState_RegistryFactoryError (0.00s)
PASS
coverage: 65.2% of statements
ok  	github.com/centrifuge/go-substrate-rpc-client/v4/registry/retriever	0.006s	coverage: 65.2% of statements
=== RUN   TestProvider_GetStorageEvents
    state.go:700: PASS:	GetStorageRaw(types.StorageKey,types.Hash)
    state.go:700: PASS:	GetStorageRaw(types.StorageKey,types.Hash)
--- PASS: TestProvider_GetStorageEvents (0.07s)
PASS
coverage: 33.3% of statements
ok  	github.com/centrifuge/go-substrate-rpc-client/v4/registry/state	0.069s	coverage: 33.3% of statements
?   	github.com/centrifuge/go-substrate-rpc-client/v4/registry/test	[no test files]

```

### Run live tests

```bash
make test-milestone2-live
Sending build context to Docker daemon  11.94MB
Step 1/4 : FROM golang:1.18
 ---> c37a56a6d654
Step 2/4 : COPY . /go-substrate-rpc-client/events-parsing-v2/milestone-2
 ---> Using cache
 ---> 330446577dfa
Step 3/4 : WORKDIR /go-substrate-rpc-client/events-parsing-v2/milestone-2
 ---> Using cache
 ---> a35718b940dc
Step 4/4 : CMD go test -v -tags=live ./registry/retriever/...
 ---> Using cache
 ---> 8ef25a5f7bbb
Successfully built 8ef25a5f7bbb
Successfully tagged gsrpc-m2-live:latest
go: downloading github.com/stretchr/testify v1.7.0
go: downloading github.com/deckarep/golang-set v1.8.0
go: downloading github.com/ethereum/go-ethereum v1.10.17
go: downloading github.com/gorilla/websocket v1.5.0
go: downloading github.com/rs/cors v1.8.2
go: downloading golang.org/x/crypto v0.0.0-20211117183948-ae814b36b871
go: downloading github.com/vedhavyas/go-subkey v1.0.3
go: downloading github.com/pierrec/xxHash v0.1.5
go: downloading github.com/gtank/merlin v0.1.1
go: downloading github.com/ChainSafe/go-schnorrkel v1.0.0
go: downloading github.com/decred/base58 v1.0.3
go: downloading github.com/stretchr/objx v0.1.1
go: downloading github.com/davecgh/go-spew v1.1.1
go: downloading github.com/pmezard/go-difflib v1.0.0
go: downloading gopkg.in/yaml.v3 v3.0.0-20210107192922-496545a6307b
go: downloading github.com/mimoo/StrobeGo v0.0.0-20210601165009-122bf33a46e0
go: downloading github.com/decred/dcrd/crypto/blake256 v1.0.0
go: downloading github.com/cosmos/go-bip39 v1.0.0
go: downloading github.com/gtank/ristretto255 v0.1.2
go: downloading golang.org/x/sys v0.0.0-20211124211545-fe61309f8881
go: downloading github.com/go-stack/stack v1.8.1
=== RUN   TestLive_EventRetriever_GetEvents
=== PAUSE TestLive_EventRetriever_GetEvents
=== RUN   TestEventRetriever_New
    factory_mock.go:94: PASS:	CreateEventRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestEventRetriever_New (0.00s)
=== RUN   TestEventRetriever_New_InternalStateUpdateError
    factory_mock.go:94: PASS:	CreateEventRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadataLatest()
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestEventRetriever_New_InternalStateUpdateError (0.00s)
=== RUN   TestEventRetriever_NewDefault
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestEventRetriever_NewDefault (0.00s)
=== RUN   TestEventRetriever_GetEvents
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    event_provider_mock.go:48: PASS:	GetStorageEvents(*types.Metadata,types.Hash)
    event_parser_mock.go:49: PASS:	ParseEvents(registry.EventRegistry,*types.StorageDataRaw)
--- PASS: TestEventRetriever_GetEvents (0.00s)
=== RUN   TestEventRetriever_GetEvents_StorageRetrievalError
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    factory_mock.go:94: PASS:	CreateEventRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadata(types.Hash)
    event_provider_mock.go:48: PASS:	GetStorageEvents(*types.Metadata,types.Hash)
--- PASS: TestEventRetriever_GetEvents_StorageRetrievalError (0.00s)
=== RUN   TestEventRetriever_GetEvents_EventParsingError
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    factory_mock.go:94: PASS:	CreateEventRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadata(types.Hash)
    event_provider_mock.go:48: PASS:	GetStorageEvents(*types.Metadata,types.Hash)
    event_parser_mock.go:49: PASS:	ParseEvents(registry.EventRegistry,*types.StorageDataRaw)
--- PASS: TestEventRetriever_GetEvents_EventParsingError (0.00s)
=== RUN   TestEventRetriever_updateInternalState
    factory_mock.go:94: PASS:	CreateEventRegistry(*types.Metadata)
    factory_mock.go:94: PASS:	CreateEventRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadata(types.Hash)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestEventRetriever_updateInternalState (0.00s)
=== RUN   TestEventRetriever_updateInternalState_MetadataRetrievalError
    state.go:700: PASS:	GetMetadata(types.Hash)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestEventRetriever_updateInternalState_MetadataRetrievalError (0.00s)
=== RUN   TestEventRetriever_updateInternalState_RegistryFactoryError
    factory_mock.go:94: PASS:	CreateEventRegistry(*types.Metadata)
    factory_mock.go:94: PASS:	CreateEventRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadata(types.Hash)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestEventRetriever_updateInternalState_RegistryFactoryError (0.00s)
=== RUN   TestLive_ExtrinsicRetriever_GetExtrinsics
=== PAUSE TestLive_ExtrinsicRetriever_GetExtrinsics
=== RUN   TestExtrinsicRetriever_New
    factory_mock.go:94: PASS:	CreateCallRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestExtrinsicRetriever_New (0.00s)
=== RUN   TestExtrinsicRetriever_New_InternalStateUpdateError
    factory_mock.go:94: PASS:	CreateCallRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadataLatest()
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestExtrinsicRetriever_New_InternalStateUpdateError (0.00s)
=== RUN   TestExtrinsicRetriever_NewDefault
    factory_mock.go:94: PASS:	CreateCallRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestExtrinsicRetriever_NewDefault (0.00s)
=== RUN   TestExtrinsicRetriever_GetExtrinsics
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    chain_mock.go:67: PASS:	GetBlock(types.Hash)
    extrinsic_parser_mock.go:50: PASS:	ParseExtrinsics(registry.CallRegistry,*generic.SignedBlock[github.com/centrifuge/go-substrate-rpc-client/v4/types.MultiAddress,github.com/centrifuge/go-substrate-rpc-client/v4/types.MultiSignature,github.com/centrifuge/go-substrate-rpc-client/v4/rpc/chain/generic.DefaultPaymentFields])
--- PASS: TestExtrinsicRetriever_GetExtrinsics (0.00s)
=== RUN   TestExtrinsicRetriever_GetExtrinsics_BlockRetrievalError
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    chain_mock.go:67: PASS:	GetBlock(types.Hash)
--- PASS: TestExtrinsicRetriever_GetExtrinsics_BlockRetrievalError (0.00s)
=== RUN   TestExtrinsicRetriever_GetExtrinsics_ExtrinsicParsingError
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    exec_mock.go:43: PASS:	ExecWithFallback(string,string)
    factory_mock.go:94: PASS:	CreateCallRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadata(types.Hash)
    chain_mock.go:67: PASS:	GetBlock(types.Hash)
    extrinsic_parser_mock.go:50: PASS:	ParseExtrinsics(registry.CallRegistry,*generic.SignedBlock[github.com/centrifuge/go-substrate-rpc-client/v4/types.MultiAddress,github.com/centrifuge/go-substrate-rpc-client/v4/types.MultiSignature,github.com/centrifuge/go-substrate-rpc-client/v4/rpc/chain/generic.DefaultPaymentFields])
--- PASS: TestExtrinsicRetriever_GetExtrinsics_ExtrinsicParsingError (0.00s)
=== RUN   TestExtrinsicRetriever_updateInternalState
    factory_mock.go:94: PASS:	CreateCallRegistry(*types.Metadata)
    factory_mock.go:94: PASS:	CreateCallRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadata(types.Hash)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestExtrinsicRetriever_updateInternalState (0.00s)
=== RUN   TestExtrinsicRetriever_updateInternalState_MetadataRetrievalError
    state.go:700: PASS:	GetMetadata(types.Hash)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestExtrinsicRetriever_updateInternalState_MetadataRetrievalError (0.00s)
=== RUN   TestExtrinsicRetriever_updateInternalState_RegistryFactoryError
    factory_mock.go:94: PASS:	CreateCallRegistry(*types.Metadata)
    factory_mock.go:94: PASS:	CreateCallRegistry(*types.Metadata)
    state.go:700: PASS:	GetMetadata(types.Hash)
    state.go:700: PASS:	GetMetadataLatest()
--- PASS: TestExtrinsicRetriever_updateInternalState_RegistryFactoryError (0.00s)
=== CONT  TestLive_EventRetriever_GetEvents
=== CONT  TestLive_ExtrinsicRetriever_GetExtrinsics
2023/06/26 10:32:20 Connecting to wss://wss.api.moonbeam.network...
2023/06/26 10:32:20 Connecting to wss://wss.api.moonbeam.network...
2023/06/26 10:32:20 Connecting to wss://fullnode.parachain.centrifuge.io...
2023/06/26 10:32:20 Connecting to wss://rpc.polkadot.io...
2023/06/26 10:32:20 Connecting to wss://statemint-rpc.polkadot.io...
2023/06/26 10:32:20 Connecting to wss://acala-rpc-0.aca-api.network...
2023/06/26 10:32:20 Connecting to wss://statemint-rpc.polkadot.io...
2023/06/26 10:32:20 Connecting to wss://rpc.polkadot.io...
2023/06/26 10:32:20 Connecting to wss://acala-rpc-0.aca-api.network...
2023/06/26 10:32:20 Connecting to wss://fullnode.parachain.centrifuge.io...
2023/06/26 10:32:20 Found 2 events for 'wss://acala-rpc-0.aca-api.network', at block number 3880189.
2023/06/26 10:32:20 Found 2 extrinsics for 'wss://acala-rpc-0.aca-api.network', at block number 3880189.
2023/06/26 10:32:20 Found 14 events for 'wss://acala-rpc-0.aca-api.network', at block number 3880188.
2023/06/26 10:32:20 Retrieved a total of 16 events for 'wss://acala-rpc-0.aca-api.network', last block number 3880188. Stopping now.
2023/06/26 10:32:20 Found 4 extrinsics for 'wss://acala-rpc-0.aca-api.network', at block number 3880188.
2023/06/26 10:32:20 Found 2 extrinsics for 'wss://statemint-rpc.polkadot.io', at block number 4027274.
2023/06/26 10:32:20 Found 2 extrinsics for 'wss://acala-rpc-0.aca-api.network', at block number 3880187.
2023/06/26 10:32:20 Found 32 events for 'wss://wss.api.moonbeam.network', at block number 3863157.
2023/06/26 10:32:20 Retrieved a total of 32 events for 'wss://wss.api.moonbeam.network', last block number 3863157. Stopping now.
2023/06/26 10:32:20 Found 2 extrinsics for 'wss://fullnode.parachain.centrifuge.io', at block number 3256578.
2023/06/26 10:32:21 Found 2 events for 'wss://fullnode.parachain.centrifuge.io', at block number 3256578.
2023/06/26 10:32:21 Found 2 extrinsics for 'wss://acala-rpc-0.aca-api.network', at block number 3880186.
2023/06/26 10:32:21 Retrieved a total of 10 extrinsics for 'wss://acala-rpc-0.aca-api.network', last block number 3880186. Stopping now.
2023/06/26 10:32:21 Found 3 extrinsics for 'wss://rpc.polkadot.io', at block number 16135396.
2023/06/26 10:32:21 Found 2 extrinsics for 'wss://statemint-rpc.polkadot.io', at block number 4027273.
2023/06/26 10:32:21 Found 7 extrinsics for 'wss://wss.api.moonbeam.network', at block number 3863157.
2023/06/26 10:32:21 Found 47 events for 'wss://rpc.polkadot.io', at block number 16135396.
2023/06/26 10:32:21 Retrieved a total of 47 events for 'wss://rpc.polkadot.io', last block number 16135396. Stopping now.
2023/06/26 10:32:21 Found 2 extrinsics for 'wss://fullnode.parachain.centrifuge.io', at block number 3256577.
2023/06/26 10:32:21 Found 2 events for 'wss://fullnode.parachain.centrifuge.io', at block number 3256577.
2023/06/26 10:32:21 Found 2 extrinsics for 'wss://statemint-rpc.polkadot.io', at block number 4027272.
2023/06/26 10:32:21 Found 4 extrinsics for 'wss://rpc.polkadot.io', at block number 16135395.
2023/06/26 10:32:21 Found 2 events for 'wss://statemint-rpc.polkadot.io', at block number 4027274.
2023/06/26 10:32:21 Found 7 extrinsics for 'wss://wss.api.moonbeam.network', at block number 3863156.
2023/06/26 10:32:21 Retrieved a total of 14 extrinsics for 'wss://wss.api.moonbeam.network', last block number 3863156. Stopping now.
2023/06/26 10:32:21 Found 2 events for 'wss://fullnode.parachain.centrifuge.io', at block number 3256576.
2023/06/26 10:32:21 Found 2 extrinsics for 'wss://fullnode.parachain.centrifuge.io', at block number 3256576.
2023/06/26 10:32:21 Found 2 events for 'wss://statemint-rpc.polkadot.io', at block number 4027273.
2023/06/26 10:32:21 Found 2 events for 'wss://fullnode.parachain.centrifuge.io', at block number 3256575.
2023/06/26 10:32:21 Found 2 extrinsics for 'wss://rpc.polkadot.io', at block number 16135394.
2023/06/26 10:32:21 Found 2 extrinsics for 'wss://fullnode.parachain.centrifuge.io', at block number 3256575.
2023/06/26 10:32:21 Found 2 extrinsics for 'wss://statemint-rpc.polkadot.io', at block number 4027271.
2023/06/26 10:32:21 Found 2 events for 'wss://statemint-rpc.polkadot.io', at block number 4027272.
2023/06/26 10:32:21 Found 2 events for 'wss://fullnode.parachain.centrifuge.io', at block number 3256574.
2023/06/26 10:32:21 Found 2 extrinsics for 'wss://fullnode.parachain.centrifuge.io', at block number 3256574.
2023/06/26 10:32:21 Retrieved a total of 10 extrinsics for 'wss://fullnode.parachain.centrifuge.io', last block number 3256574. Stopping now.
2023/06/26 10:32:21 Found 2 extrinsics for 'wss://rpc.polkadot.io', at block number 16135393.
2023/06/26 10:32:21 Retrieved a total of 11 extrinsics for 'wss://rpc.polkadot.io', last block number 16135393. Stopping now.
2023/06/26 10:32:21 Found 2 events for 'wss://statemint-rpc.polkadot.io', at block number 4027271.
2023/06/26 10:32:21 Found 2 extrinsics for 'wss://statemint-rpc.polkadot.io', at block number 4027270.
2023/06/26 10:32:21 Retrieved a total of 10 extrinsics for 'wss://statemint-rpc.polkadot.io', last block number 4027270. Stopping now.
--- PASS: TestLive_ExtrinsicRetriever_GetExtrinsics (1.41s)
2023/06/26 10:32:21 Found 2 events for 'wss://fullnode.parachain.centrifuge.io', at block number 3256573.
2023/06/26 10:32:21 Retrieved a total of 12 events for 'wss://fullnode.parachain.centrifuge.io', last block number 3256573. Stopping now.
2023/06/26 10:32:21 Found 2 events for 'wss://statemint-rpc.polkadot.io', at block number 4027270.
2023/06/26 10:32:21 Found 2 events for 'wss://statemint-rpc.polkadot.io', at block number 4027269.
2023/06/26 10:32:21 Retrieved a total of 12 events for 'wss://statemint-rpc.polkadot.io', last block number 4027269. Stopping now.
--- PASS: TestLive_EventRetriever_GetEvents (1.59s)
PASS
ok  	github.com/centrifuge/go-substrate-rpc-client/v4/registry/retriever	1.599s
```