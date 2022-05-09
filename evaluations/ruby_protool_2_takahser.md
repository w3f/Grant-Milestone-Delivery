# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/RubyProtocol.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Ruby Protocol LICENSE](https://github.com/rubyprotocol/Ruby_milestone2/blob/233bb56ea9d29c663ac05fab94194ffba6eeb729/LICENSE), [ZeroPool LICENSE](https://github.com/lornacrevelingwgo23/zeropool_substrate_fork/blob/450672886f649c94915c84c3c27f2abe673ecd14/LICENSE) | Apache License 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [zeropool substrate fork instructions](https://github.com/lornacrevelingwgo23/zeropool_substrate_fork/blob/0af69c79704c10bdb56601766fada4629f250c20/README.md), [ruby protocol docs](https://github.com/rubyprotocol/Ruby_milestone2/blob/a0270455d1533025f8d4cb90beccd916146d9c09/README.md) | - |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [api tests](https://github.com/rubyprotocol/Ruby_milestone2/tree/a0270455d1533025f8d4cb90beccd916146d9c09/ruby-api/tests) | See [Tests Feedback](#tests-feedback) | 
| 0d. | Article/Tutorial | <ul><li>[x] </li></ul> | [Tutorial](https://github.com/rubyprotocol/Ruby_milestone2/blob/a0270455d1533025f8d4cb90beccd916146d9c09/tutorial.md) | - |
| 1. | Client modules | <ul><li>[x] </li></ul> | [Ruby API](https://github.com/rubyprotocol/Ruby_milestone2/tree/a0270455d1533025f8d4cb90beccd916146d9c09/ruby-api) | They called it 'Personal data monetization framework based on functional encryption and substrate pallet' in their delivery but both terms represent the same concepts. |
| 2. | Benchmark | <ul><li>[x] </li></ul> | [Benchmarks](https://github.com/rubyprotocol/Ruby_milestone2/tree/a0270455d1533025f8d4cb90beccd916146d9c09/ruby-api/benchmark) | - |
| 3. | Docker | <ul><li>[x] </li></ul> | [Docker Insfrastructure](https://github.com/lornacrevelingwgo23/Ruby_dockerfile/tree/3c702980f3dcf3f2c6c9541556b972621c8408fd) | - |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

### Tests feedback

-  tests pass

    ```bash
    $ cargo test
    Compiling cfg-if v1.0.0
    Compiling ppv-lite86 v0.2.15
    Compiling bytes v1.1.0
    Compiling itoa v0.4.8
    Compiling pin-project-lite v0.2.7

    (...)

    Compiling ruby v0.1.0 (/home/seraya/repos/Ruby_milestone2/ruby-api)
        Finished test [unoptimized + debuginfo] target(s) in 24.27s
        Running unittests (target/debug/deps/ruby-bff8ac755c969c97)

    running 1 test
    test ml::disease_prediction::tests::test_disease_prediction ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 2.76s

        Running unittests (target/debug/deps/authority_api-7e47b6332932af48)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests (target/debug/deps/fortest_ip-ded868550b84e971)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests (target/debug/deps/fortest_qua-5cd493854fe50d53)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests (target/debug/deps/owner_api-577a41d2accc2f34)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests (target/debug/deps/purchaser_api-79f2d8fc1d3eaa3e)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/test_dmcfe_ip.rs (target/debug/deps/test_dmcfe_ip-279ebd7f97856748)

    running 2 tests
    test tests::test_dmcfe_single_client ... ok
    test tests::test_dmcfe_5 ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.73s
    ```