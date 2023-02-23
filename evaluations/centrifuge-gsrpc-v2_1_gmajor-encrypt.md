# Evaluation

- **Status:** In Progress
- **Application Document:** [centrifuge-gsrpc-v2](https://github.com/w3f/Grants-Program/blob/master/applications/centrifuge-gsrpc-v2.md)
- **Milestone:** 1
- **Kusama Identity:** [5DJ5EADF5yXoV6pY86HaDXYmH249VKXSo5jmAmHP5TGFzEjA](https://kusama.subscan.io/account/5DJ5EADF5yXoV6pY86HaDXYmH249VKXSo5jmAmHP5TGFzEjA)
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable     | Accepted                | Link                                                                                                                                    | Evaluation Notes                                                                |
|--------|-----------------|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| 1.     | License         | <ul><li>[x] </li> </ul> | [License](https://github.com/centrifuge/go-substrate-rpc-client/blob/events-parsing-v2-milestone-1/LICENSE)                             | Apache License v2                                                               |
| 2.     | Documentation   | <ul><li>[ ] </li></ul>  | [Documentation](https://github.com/centrifuge/go-substrate-rpc-client/blob/events-parsing-v2-milestone-1/README.md)                     | basically no documentation                                                      |
| 3.     | PR with changes | <ul><li>[ ] </li></ul>  | [centrifuge/go-substrate-rpc-client#327](https://github.com/centrifuge/go-substrate-rpc-client/pull/327)                                | Lack of metadata v14 call support                                               |
| 4a.    | Tests           | <ul><li>[ ] </li></ul>  | [UnitTest](https://github.com/centrifuge/go-substrate-rpc-client/blob/aa507a89484f162b47e1a2e6b71827307183b013/events/registry_test.go) | The test coverage rate is currently at 66%, which has not reached full coverage |
| 4b.    | Test execution  | <ul><li>[x] </li></ul>  | [TestExecution](https://github.com/centrifuge/go-substrate-rpc-client/blob/aa507a89484f162b47e1a2e6b71827307183b013/Makefile#L49)       | pass                                                                            |


## General Notes

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