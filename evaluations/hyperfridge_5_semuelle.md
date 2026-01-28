# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/hyperfridge.md
- **Milestone:** 5
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/element36-io/ocw-ebics/blob/cdbcb9762401e13580c501b2aa16805399fcfcc6/LICENSE) | Apache 2.0  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/element36-io/ocw-ebics/blob/cdbcb9762401e13580c501b2aa16805399fcfcc6/README.md) | Well documented. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/element36-io/ocw-ebics/blob/2d36c1ffdc30aa63c0370c67d77687510d20c85b/README.md) | see output below |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/element36-io/ocw-ebics/blob/2d36c1ffdc30aa63c0370c67d77687510d20c85b/Dockerfile) | — |
| 0e. | Article | <ul><li>[x] </li></ul> | [medium.com](https://medium.com/@dastanbeksamatov/hyperfridge-bridging-traditional-banking-with-web3-using-zero-knowledge-proofs-0ce65f33085f) | "Bridging Traditional Banking with Web3 using Zero-Knowledge Proofs" |
| 1a. | Buy me a coffee dApp | <ul><li>[x] </li></ul> | [/ebics-demo](https://github.com/element36-io/ocw-ebics/tree/2d36c1ffdc30aa63c0370c67d77687510d20c85b/ebics-demo) | — |
| 1b. | Proof-Download | <ul><li>[x] </li></ul> | [/ebics-demo](https://github.com/element36-io/ocw-ebics/blob/2d36c1ffdc30aa63c0370c67d77687510d20c85b/ebics-demo/src/ProofDownload.js) | — |
| 2. | Docker-Compose: node & Dapp | <ul><li>[x] </li></ul> | [docker-compose-test.yml](https://github.com/element36-io/ocw-ebics/blob/2d36c1ffdc30aa63c0370c67d77687510d20c85b/docker-compose-test.yml) | — |


## General Notes

### `cargo test` output

```bash
Running unittests src/lib.rs (target/debug/deps/fiat_ramps-e9cadd5b2f4456dd)

running 16 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::set_risc0_image_id ... ok
test tests::process_statements_is_permissioned ... ok
test tests::should_fail_to_update_api_url_non_sudo ... ok
2026-01-27T11:01:40.162847Z ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
2026-01-27T11:01:40.163015Z ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
2026-01-27T11:01:40.163155Z ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
test tests::test_iban_mapping ... ok
test tests::should_make_http_call_and_parse ... ok
2026-01-27T11:01:40.242267Z ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
2026-01-27T11:01:40.242488Z ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
2026-01-27T11:01:40.242802Z ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
test tests::test_burn_request ... ok
test tests::test_queue_empty_statement ... ok
test tests::test_queue_invalid_transactions ... ok
test tests::test_queue_incoming_transactions ... ok
test tests::test_queue_outgoing_transactions ... ok
test utils::test_unpeg_request ... ok
test tests::test_queue_multiple_statements ... ok
test tests::test_queue_multiple_statements_outgoing ... ok
test tests::test_verify_queued_statements_works ... ok

test result: ok. 16 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 8.86s

     Running unittests src/main.rs (target/debug/deps/node_template-e9284465b3b32bf5)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/node_template_runtime-43d025bccd75625d)

running 9 tests
test e2e_tests::local_xcm_execution_is_filtered_out ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test e2e_tests::mock::asset_hub::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test e2e_tests::mock::relay_chain::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test e2e_tests::mock::relay_chain::test_genesis_config_builds ... ok
test e2e_tests::mock::asset_hub::test_genesis_config_builds ... ok
test test_genesis_config_builds ... ok
test e2e_tests::insufficient_balance_teleport_fails ... ok
test e2e_tests::ebics_para_teleport_to_asset_hub_and_back ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.59s

   Doc-tests fiat_ramps

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests node_template_runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```