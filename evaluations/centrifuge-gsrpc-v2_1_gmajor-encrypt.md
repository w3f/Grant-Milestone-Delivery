# Evaluation

- **Status:** Accepted
- **Application Document:** [centrifuge-gsrpc-v2](https://github.com/w3f/Grants-Program/blob/master/applications/centrifuge-gsrpc-v2.md)
- **Milestone:** 1
- **Kusama Identity:** [5DJ5EADF5yXoV6pY86HaDXYmH249VKXSo5jmAmHP5TGFzEjA](https://kusama.subscan.io/account/5DJ5EADF5yXoV6pY86HaDXYmH249VKXSo5jmAmHP5TGFzEjA)
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable     | Accepted                | Link                                                                                                                              | Evaluation Notes     |
|--------|-----------------|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------|----------------------|
| 1.     | License         | <ul><li>[x] </li> </ul> | [License](https://github.com/centrifuge/go-substrate-rpc-client/blob/events-parsing-v2-milestone-1/LICENSE)                       | Apache License v2    |
| 2.     | Documentation   | <ul><li>[x] </li></ul>  | [Documentation](https://github.com/centrifuge/go-substrate-rpc-client/blob/events-parsing-v2-milestone-1/README.md)               | inline documentation |
| 3.     | PR with changes | <ul><li>[x] </li></ul>  | [centrifuge/go-substrate-rpc-client#327](https://github.com/centrifuge/go-substrate-rpc-client/pull/327)                          |                      |
| 4a.    | Tests           | <ul><li>[x] </li></ul>  | [UnitTest](https://github.com/centrifuge/go-substrate-rpc-client/blob/19aa30067543bd77becbc2cee55d755fd689aa12/Makefile#L49)      |                      |
| 4b.    | Test execution  | <ul><li>[x] </li></ul>  | [TestExecution](https://github.com/centrifuge/go-substrate-rpc-client/blob/19aa30067543bd77becbc2cee55d755fd689aa12/Makefile#L49) |                      |

## General Notes v3 - March 10, 2023

The issues and improvement requests for Evaluation V2 have been resolved.

### Run test

```bash
go test -v ./registry/... --cover
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
--- PASS: TestFactory_CreateErrorRegistryWithLiveMetadata (0.09s)
    --- PASS: TestFactory_CreateErrorRegistryWithLiveMetadata/centrifuge (0.02s)
    --- PASS: TestFactory_CreateErrorRegistryWithLiveMetadata/polkadot (0.03s)
    --- PASS: TestFactory_CreateErrorRegistryWithLiveMetadata/acala (0.01s)
    --- PASS: TestFactory_CreateErrorRegistryWithLiveMetadata/statemint (0.01s)
    --- PASS: TestFactory_CreateErrorRegistryWithLiveMetadata/moonbeam (0.02s)
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
    registry_test.go:248: Metadata was decoded successfully
    registry_test.go:255: Call registry was created successfully
=== RUN   TestFactory_CreateCallRegistryWithLiveMetadata/polkadot
    registry_test.go:248: Metadata was decoded successfully
    registry_test.go:255: Call registry was created successfully
=== RUN   TestFactory_CreateCallRegistryWithLiveMetadata/acala
    registry_test.go:248: Metadata was decoded successfully
    registry_test.go:255: Call registry was created successfully
=== RUN   TestFactory_CreateCallRegistryWithLiveMetadata/statemint
    registry_test.go:248: Metadata was decoded successfully
    registry_test.go:255: Call registry was created successfully
=== RUN   TestFactory_CreateCallRegistryWithLiveMetadata/moonbeam
    registry_test.go:248: Metadata was decoded successfully
    registry_test.go:255: Call registry was created successfully
--- PASS: TestFactory_CreateCallRegistryWithLiveMetadata (0.75s)
    --- PASS: TestFactory_CreateCallRegistryWithLiveMetadata/centrifuge (0.20s)
    --- PASS: TestFactory_CreateCallRegistryWithLiveMetadata/polkadot (0.15s)
    --- PASS: TestFactory_CreateCallRegistryWithLiveMetadata/acala (0.18s)
    --- PASS: TestFactory_CreateCallRegistryWithLiveMetadata/statemint (0.09s)
    --- PASS: TestFactory_CreateCallRegistryWithLiveMetadata/moonbeam (0.13s)
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
    registry_test.go:449: Metadata was decoded successfully
    registry_test.go:456: Event registry was created successfully
=== RUN   TestFactory_CreateEventRegistryWithLiveMetadata/polkadot
    registry_test.go:449: Metadata was decoded successfully
    registry_test.go:456: Event registry was created successfully
=== RUN   TestFactory_CreateEventRegistryWithLiveMetadata/acala
    registry_test.go:449: Metadata was decoded successfully
    registry_test.go:456: Event registry was created successfully
=== RUN   TestFactory_CreateEventRegistryWithLiveMetadata/statemint
    registry_test.go:449: Metadata was decoded successfully
    registry_test.go:456: Event registry was created successfully
=== RUN   TestFactory_CreateEventRegistryWithLiveMetadata/moonbeam
    registry_test.go:449: Metadata was decoded successfully
    registry_test.go:456: Event registry was created successfully
--- PASS: TestFactory_CreateEventRegistryWithLiveMetadata (0.14s)
    --- PASS: TestFactory_CreateEventRegistryWithLiveMetadata/centrifuge (0.03s)
    --- PASS: TestFactory_CreateEventRegistryWithLiveMetadata/polkadot (0.04s)
    --- PASS: TestFactory_CreateEventRegistryWithLiveMetadata/acala (0.03s)
    --- PASS: TestFactory_CreateEventRegistryWithLiveMetadata/statemint (0.02s)
    --- PASS: TestFactory_CreateEventRegistryWithLiveMetadata/moonbeam (0.03s)
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
=== RUN   TestFactory_getTypeFields_FieldTypeError
--- PASS: TestFactory_getTypeFields_FieldTypeError (0.00s)
=== RUN   TestFactory_getTypeFields_FieldTypeNotFoundError
--- PASS: TestFactory_getTypeFields_FieldTypeNotFoundError (0.00s)
=== RUN   TestFactory_getFieldType_UnsupportedTypeError
--- PASS: TestFactory_getFieldType_UnsupportedTypeError (0.00s)
=== RUN   TestFactory_getFieldType_Compact
--- PASS: TestFactory_getFieldType_Compact (0.00s)
=== RUN   TestFactory_getFieldType_Compact_TypeNotFoundError
--- PASS: TestFactory_getFieldType_Compact_TypeNotFoundError (0.00s)
=== RUN   TestFactory_getFieldType_Composite
--- PASS: TestFactory_getFieldType_Composite (0.00s)
=== RUN   TestFactory_getFieldType_Composite_FieldError
--- PASS: TestFactory_getFieldType_Composite_FieldError (0.00s)
=== RUN   TestFactory_getFieldType_Variant
--- PASS: TestFactory_getFieldType_Variant (0.00s)
=== RUN   TestFactory_getFieldType_Primitive
--- PASS: TestFactory_getFieldType_Primitive (0.00s)
=== RUN   TestFactory_getFieldType_Array
--- PASS: TestFactory_getFieldType_Array (0.00s)
=== RUN   TestFactory_getFieldType_Array_TypeNotFoundError
--- PASS: TestFactory_getFieldType_Array_TypeNotFoundError (0.00s)
=== RUN   TestFactory_getFieldType_Slice
--- PASS: TestFactory_getFieldType_Slice (0.00s)
=== RUN   TestFactory_getFieldType_Slice_TypeNotFoundError
--- PASS: TestFactory_getFieldType_Slice_TypeNotFoundError (0.00s)
=== RUN   TestFactory_getFieldType_Tuple
--- PASS: TestFactory_getFieldType_Tuple (0.00s)
=== RUN   TestFactory_getFieldType_Tuple_NilTuple
--- PASS: TestFactory_getFieldType_Tuple_NilTuple (0.00s)
=== RUN   TestFactory_getFieldType_BitSequence
--- PASS: TestFactory_getFieldType_BitSequence (0.00s)
=== RUN   TestFactory_getFieldType_BitSequence_BitStoreTypeNotFound
--- PASS: TestFactory_getFieldType_BitSequence_BitStoreTypeNotFound (0.00s)
=== RUN   TestFactory_getFieldType_BitSequence_BitStoreFieldTypeError
--- PASS: TestFactory_getFieldType_BitSequence_BitStoreFieldTypeError (0.00s)
=== RUN   TestFactory_getFieldType_BitSequence_BitOrderTypeNotFound
--- PASS: TestFactory_getFieldType_BitSequence_BitOrderTypeNotFound (0.00s)
=== RUN   TestFactory_getFieldType_BitSequence_BitOrderFieldTypeError
--- PASS: TestFactory_getFieldType_BitSequence_BitOrderFieldTypeError (0.00s)
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
=== RUN   TestFactory_getTupleType_TupleItemFieldTypeError
--- PASS: TestFactory_getTupleType_TupleItemFieldTypeError (0.00s)
=== RUN   Test_getPrimitiveType_UnsupportedTypeError
--- PASS: Test_getPrimitiveType_UnsupportedTypeError (0.00s)
PASS
coverage: 82.4% of statements
ok      github.com/centrifuge/go-substrate-rpc-client/v4/registry       1.787s  coverage: 82.4% of statements
?       github.com/centrifuge/go-substrate-rpc-client/v4/registry/test  [no test files]
```


## General Notes v2 - March 07, 2023

Finished nicely so far, there are a few little problems with the test that need to be fixed.

### Run test

1. Tests link error, should be https://github.com/centrifuge/go-substrate-rpc-client/blob/events-parsing-v2-milestone-1/registry/registry_test.go
2. ``Dockerfile_milestone1`` test command error.
3. Lack ``CreateErrorRegistry`` function test

```bash
go test -v ./registry/... --cover
```

output
```
=== RUN   TestCreateEventRegistry
=== RUN   TestCreateEventRegistry/centrifuge
    registry_test.go:47: Metadata was decoded successfully
    registry_test.go:54: Event registry was created successfully
=== RUN   TestCreateEventRegistry/polkadot
    registry_test.go:47: Metadata was decoded successfully
    registry_test.go:54: Event registry was created successfully
=== RUN   TestCreateEventRegistry/acala
    registry_test.go:47: Metadata was decoded successfully
    registry_test.go:54: Event registry was created successfully
=== RUN   TestCreateEventRegistry/statemint
    registry_test.go:47: Metadata was decoded successfully
    registry_test.go:54: Event registry was created successfully
=== RUN   TestCreateEventRegistry/moonbeam
    registry_test.go:47: Metadata was decoded successfully
    registry_test.go:54: Event registry was created successfully
--- PASS: TestCreateEventRegistry (0.15s)
    --- PASS: TestCreateEventRegistry/centrifuge (0.03s)
    --- PASS: TestCreateEventRegistry/polkadot (0.04s)
    --- PASS: TestCreateEventRegistry/acala (0.03s)
    --- PASS: TestCreateEventRegistry/statemint (0.02s)
    --- PASS: TestCreateEventRegistry/moonbeam (0.03s)
=== RUN   TestCreateCallRegistry
=== RUN   TestCreateCallRegistry/centrifuge
    registry_test.go:115: Metadata was decoded successfully
    registry_test.go:122: Call registry was created successfully
=== RUN   TestCreateCallRegistry/polkadot
    registry_test.go:115: Metadata was decoded successfully
    registry_test.go:122: Call registry was created successfully
=== RUN   TestCreateCallRegistry/acala
    registry_test.go:115: Metadata was decoded successfully
    registry_test.go:122: Call registry was created successfully
=== RUN   TestCreateCallRegistry/statemint
    registry_test.go:115: Metadata was decoded successfully
    registry_test.go:122: Call registry was created successfully
=== RUN   TestCreateCallRegistry/moonbeam
    registry_test.go:115: Metadata was decoded successfully
    registry_test.go:122: Call registry was created successfully
--- PASS: TestCreateCallRegistry (0.74s)
    --- PASS: TestCreateCallRegistry/centrifuge (0.19s)
    --- PASS: TestCreateCallRegistry/polkadot (0.15s)
    --- PASS: TestCreateCallRegistry/acala (0.19s)
    --- PASS: TestCreateCallRegistry/statemint (0.09s)
    --- PASS: TestCreateCallRegistry/moonbeam (0.13s)
PASS
coverage: 58.9% of statements
ok      github.com/centrifuge/go-substrate-rpc-client/v4/registry       1.731s  coverage: 58.9% of statements
?       github.com/centrifuge/go-substrate-rpc-client/v4/registry/test  [no test files]
```



## General Notes v1 - Feb 23, 2023

There are basically not any docs found in pr.

The goal of the first milestone is to complete Dynamic Type Loader from metadata, but I can only see the processing of metadata events from pr https://github.com/centrifuge/go-substrate-rpc-client/blob/events-parsing -v2-milestone-1/events/registry.go#L44, lack of support for ``calls``

1. https://github.com/centrifuge/go-substrate-rpc-client/blob/events-parsing-v2-milestone-1/events/registry.go#L228 This function deals with the ``Compact`` type, and this place is written as compositeFieldType
2. https://github.com/centrifuge/go-substrate-rpc-client/blob/events-parsing-v2-milestone-1/events/registry.go#L200-L216 Missing support for enum index

### Run test 

```bash
go test -v ./events/... --cover
```

output
```
=== RUN   TestCreateEventRegistry
=== RUN   TestCreateEventRegistry/centrifuge
    registry_test.go:47: Metadata was decoded successfully
    registry_test.go:54: Event registry was created successfully
=== RUN   TestCreateEventRegistry/polkadot
    registry_test.go:47: Metadata was decoded successfully
    registry_test.go:54: Event registry was created successfully
=== RUN   TestCreateEventRegistry/acala
    registry_test.go:47: Metadata was decoded successfully
    registry_test.go:54: Event registry was created successfully
=== RUN   TestCreateEventRegistry/statemint
    registry_test.go:47: Metadata was decoded successfully
    registry_test.go:54: Event registry was created successfully
=== RUN   TestCreateEventRegistry/moonbeam
    registry_test.go:47: Metadata was decoded successfully
    registry_test.go:54: Event registry was created successfully
--- PASS: TestCreateEventRegistry (0.17s)
    --- PASS: TestCreateEventRegistry/centrifuge (0.05s)
    --- PASS: TestCreateEventRegistry/polkadot (0.04s)
    --- PASS: TestCreateEventRegistry/acala (0.03s)
    --- PASS: TestCreateEventRegistry/statemint (0.02s)
    --- PASS: TestCreateEventRegistry/moonbeam (0.03s)
PASS
coverage: 66.0% of statements
ok      github.com/centrifuge/go-substrate-rpc-client/v4/events 0.573s  coverage: 66.0% of statements
?       github.com/centrifuge/go-substrate-rpc-client/v4/events/test    [no test files]

```