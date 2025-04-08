# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/PoCS.md
- **Milestone:** 3
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a.    | License                   | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/auguth/pocs/blob/7da11661f01269d2cc3220e50f037e3c8b2b702f/ink-contracts/LICENSE) | MIT license   |
| 0b.    | Documentation             | <ul><li>[ ] </li></ul> | [testing-report.md](https://github.com/auguth/pocs/blob/7da11661f01269d2cc3220e50f037e3c8b2b702f/testing-report.md) | Very thorough inline docs. |
| 0c.    | Testing and Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/auguth/pocs/blob/7da11661f01269d2cc3220e50f037e3c8b2b702f/README.md#usage) | Some tests failing due to [documented breaking changes](https://github.com/auguth/pocs/blob/7da11661f01269d2cc3220e50f037e3c8b2b702f/testing-report.md#breaking-changes) |
| 0d.    | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/auguth/pocs/blob/7da11661f01269d2cc3220e50f037e3c8b2b702f/solo-substrate-chain/Dockerfile) | —  
| 0e.    | Article | <ul><li>[x] </li></ul> | [litepaper/](https://github.com/auguth/pocs/blob/7da11661f01269d2cc3220e50f037e3c8b2b702f/litepaper/pocs-litepaper.pdf), [medium.com](https://medium.com/@auguthresearch/proof-of-contract-stake-pocs-v0-1-experimental-0ed7f009b6dc) | — |  
| 1    | Contract development | <ul><li>[x] </li></ul> | [ink-contracts/](https://github.com/auguth/pocs/tree/7da11661f01269d2cc3220e50f037e3c8b2b702f/ink-contracts/delegate_registry) | — |
| 2. | Alpha testing and publish paper | <ul><li>[x] </li></ul> | [testing-report.md](https://github.com/auguth/pocs/blob/7da11661f01269d2cc3220e50f037e3c8b2b702f/testing-report.md) | — |


## General Notes

- —

### Test output

```sh
$ ./pocs.sh --test --contracts
    Finished `test` profile [unoptimized + debuginfo] target(s) in 0.12s
     Running unittests lib.rs (target/debug/deps/delegate_at-24ed46bde0f1d720)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests delegate_at

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Finished `test` profile [unoptimized + debuginfo] target(s) in 0.10s
     Running unittests lib.rs (target/debug/deps/delegate_registry-a0ce0791a26cecbd)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests delegate_registry

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Finished `test` profile [unoptimized + debuginfo] target(s) in 0.09s
     Running unittests lib.rs (target/debug/deps/delegate_to-e1339afc4e3f838b)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests delegate_to

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Finished `test` profile [unoptimized + debuginfo] target(s) in 0.09s
     Running unittests lib.rs (target/debug/deps/flipper-01bf1820e98cc9fa)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests flipper

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Finished `test` profile [unoptimized + debuginfo] target(s) in 0.09s
     Running unittests lib.rs (target/debug/deps/owner-e975a5c5d175a567)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests owner

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Finished `test` profile [unoptimized + debuginfo] target(s) in 0.10s
     Running unittests lib.rs (target/debug/deps/reputation-c3401427a5cf4a6c)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests reputation

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Finished `test` profile [unoptimized + debuginfo] target(s) in 0.10s
     Running unittests lib.rs (target/debug/deps/simple_caller-1fea6afd5c613689)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests simple_caller

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Finished `test` profile [unoptimized + debuginfo] target(s) in 0.10s
     Running unittests lib.rs (target/debug/deps/stake_score-6c29144d24a8923c)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests stake_score

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Finished `test` profile [unoptimized + debuginfo] target(s) in 0.10s
     Running unittests lib.rs (target/debug/deps/update_delegate-c44e2f1b1859b7f3)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests update_delegate

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

All Cargo Test for Contracts are completed, Proceeding to E2E Tests
Starting ink! E2E Tests...
update_delegate_upload_code_hash_message_works ... ok 

delegate_at_chain_extension_returns_error_for_eoa ... ok 

delegate_at_chain_extension_works_on_instantiated_contract_ ... ok 

delegate_at_chain_extension_on_itself_works ... ok 

delegate_at_chain_extension_returns_error_for_non_instantiated_contract ... ok 

reputation_chain_extension_returns_error_for_eoa ... ok 

reputation_chain_extension_on_just_instantiated_contract_works ... ok 

reputation_chain_extension_returns_error_for_non_instantiated_contract ... ok 

stake_score_chain_extension_on_just_instantiated_contract_works ... ok 

reputation_chain_extension_works_after_calls_to_dummy ... ok 

stake_score_chain_extension_no_update_after_call_before_delegation_works ... ok 

stake_score_chain_extension_returns_error_for_eoa ... ok 

stake_score_chain_extension_returns_error_for_non_instantiated_contract ... ok 

delegate_to_chain_extension__works_before_delegation ... ok 

owner_chain_extension_works_before_delegation ... ok 

update_delegate_chain_extension_works ... ok 

reputation_chain_extension_works_after_update_delegate_done ... ok 

stake_score_chain_extension_updates_after_update_delegate_works ... ok 

owner_chain_extension_unchanged_after_delegation ... ok 

delegate_to_chain_extension__works_after_delegation ... ok 

delegate_to_chain_extension_returns_error_for_eoa ... ok 

delegate_to_chain_extension_returns_error_for_non_instantiated_contract ... ok 

owner_chain_extension_returns_error_for_eoa ... ok 

owner_chain_extension_returns_error_for_non_instantiated_contract ... ok 

validator_contract_throws_error_on_non_owner_of_contract ... ok 

update_delegate_to_validator_reward_contract_works ... ok 

update_owner_chain_extension_works ... ok 

validator_contract_register_delegate_successful ... ok 

validator_reward_claim_transfer_works ... ok 

validator_contract_claiming_throws_error_if_no_stake_score ... ok 

Test results: 30 passed; 0 failed; total 30

All tests passed successfully.

All E2E Tests for Contracts are completed
```