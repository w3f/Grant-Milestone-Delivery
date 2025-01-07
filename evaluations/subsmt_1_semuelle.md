# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/subsmt.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/farcloud-labs/subsmt/blob/1847a735331fd40e8476190930b1cf33bf196b8a/LICENSE) | Apache 2.0  |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/farcloud-labs/subsmt/blob/1847a735331fd40e8476190930b1cf33bf196b8a/README.md) | — |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [docs/test-guide.md](https://github.com/farcloud-labs/subsmt/blob/1847a735331fd40e8476190930b1cf33bf196b8a/docs/test-guide.md) | Tested using Docker and SwaggerUI |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [README](https://github.com/farcloud-labs/subsmt/blob/22851674f58f124e4a0a111a0c94d0ed9982c9f8/README.md#docker) | — | 
|  1. | rust crate: SMT-api | <ul><li>[x] </li></ul> | [backend/src](https://github.com/farcloud-labs/subsmt/tree/22851674f58f124e4a0a111a0c94d0ed9982c9f8/backend/src) | — |
|  2. | Substrate module: SMT | <ul><li>[x] </li></ul> | [pallet/SMT](https://github.com/farcloud-labs/subsmt/tree/22851674f58f124e4a0a111a0c94d0ed9982c9f8/pallet/SMT) | — |
|  3. | Smart contracts(ink): SMT | <ul><li>[x] </li></ul> | [ink-contract/SMT](https://github.com/farcloud-labs/subsmt/blob/22851674f58f124e4a0a111a0c94d0ed9982c9f8/ink-contract/SMT/lib.rs) | —  
|  4. | backend | <ul><li>[x] </li></ul> | [backend/](https://github.com/farcloud-labs/subsmt/blob/22851674f58f124e4a0a111a0c94d0ed9982c9f8/backend/main.py) | — |
|  5. | network | <ul><li>[x] </li></ul> | [farcloud-labs/polkadot-sdk](https://github.com/farcloud-labs/polkadot-sdk/tree/83a24aa5791331c52a59a6c00a70b1f68024caac) | Polkadot SDK fork


## General Notes

### `cargo test` output

```sh
Running unittests src/lib.rs (target/debug/deps/pallet_smt-06699324a82dd5ad)

running 3 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::it_works_for_smt_verify ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.98s

     Running unittests lib.rs (target/debug/deps/smt-afcdc3ad3f725e34)

running 1 test
test smt::tests::smt_verify_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.05s

     Running unittests src/lib.rs (target/debug/deps/smt_backend_lib-79f96bac583068c9)

running 2 tests
test store::test::test_store ... ok
test apis::test::test_apis ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.17s

     Running unittests src/main.rs (target/debug/deps/smt-36a1eb6614b7a0b6)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/smt_primitives-d77090e6437233f0)

running 2 tests
test kv::test::test_value ... ok
test keccak_hasher::test::test_hasher ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_smt

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests smt

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests smt_backend_lib

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests smt_primitives

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```