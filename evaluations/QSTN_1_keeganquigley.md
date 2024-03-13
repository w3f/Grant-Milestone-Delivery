# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/QSTN.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes 
| -----: | ----------- | ------------- | ------------- | ------------- |
| 0a. | License | <ul><li>[x] </li></ul> | LINK: https://github.com/QSTN-US/qstn-polkadot-marketplace-v021/blob/main/LICENSE |
| 0b. | Documentation	| <ul><li>[x] </li></ul> | LINK 1: https://github.com/QSTN-US/Polkadot-QSTN-v1/blob/main/docs/STEP-BY-STEP-MILESTONE.md & LINK 2: https://github.com/QSTN-US/Polkadot-QSTN-v1/blob/main/docs/QUICK-START.md	& LINK 3: https://github.com/QSTN-US/Polkadot-QSTN-v1/blob/main/README.md  | 
| 0c. | Testing Guide	| <ul><li>[x] </li></ul> | LINK: https://github.com/QSTN-US/Polkadot-QSTN-v1/blob/main/docs/TESTING-GUIDE.md 	| Nice video, text docs could be improved.
| 0d. | Docker | <ul><li>[x] </li></ul> |	LINK: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-node/substrate-node/docker	| Ok.
| 0e. | Article | <ul><li>[x] </li></ul> |	LINK: https://medium.com/@qstnus/qstns-next-frontier-a-bold-leap-into-the-polkadot-ecosystem-9de5b7afbf4e | Looks good.
| 1. | Survey pallet | <ul><li>[x] </li></ul> |	LINK 1: http://pallet-demo.qstnus.com/ & LINK 2: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-pallet/survey  |	Works as expected.
| 2. | Survey pallet UI| <ul><li>[x] </li></ul> |	LINK 1: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-node/front-end & LINK 2: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/nfts-pallet | Works as expected.
| 3. | Substrate chain | <ul><li>[x] </li></ul> |	LINK 1:	https://cloudflare-ipfs.com/ipns/dotapps.io/?rpc=wss%3A%2F%2Fdotnode.qstnus.com#/explorer  & LINK 2: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-node/substrate-node & LINK 3: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/nfts-pallet | Works as expected.
| 4. | Substrate chain UI | <ul><li>[x] </li></ul> |	LINK: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-node/front-end 	| Works as expected.
| 5. | ZKP Proof Generation | <ul><li>[x] </li></ul> |	LINK: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/zkp-datawallet-api	| Works as expected.
| 6. | Data Wallet | <ul><li>[x] </li></ul> |	LINK 1: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/zkp-datawallet-api	& LINK 2: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/zkp-datawallet-api/BACKEND-ZKP | Works as expected.

## General Notes

Grantee resolved all issues. Benchmarking tests have been added, and Docker runs successfully now. Good coverage and tests. I was able to manually test all the pallet's functions on the substrate front-end. Good work!

<details>
     <summary>Commits:</summary>

```
remote: Enumerating objects: 44, done.
remote: Counting objects: 100% (44/44), done.
remote: Compressing objects: 100% (18/18), done.
remote: Total 28 (delta 14), reused 22 (delta 8), pack-reused 0
Unpacking objects: 100% (28/28), 6.08 KiB | 214.00 KiB/s, done.
From https://github.com/QSTN-US/Polkadot-QSTN-v1
   f0e828d..3119471  main       -> origin/main
Updating f0e828d..3119471
Fast-forward
 LICENSE                                                                       |  16 ++++
 README.md                                                                     |   5 ++
 qstn-substrate-node/substrate-node/Cargo.lock                                 |  39 +++++++++
 qstn-substrate-node/substrate-node/Cargo.toml                                 |   1 +
 qstn-substrate-node/substrate-node/Containerfile                              |   5 +-
 qstn-substrate-node/substrate-node/docker/README.md                           |  41 ----------
 qstn-substrate-node/substrate-node/docker/build.sh                            |  23 ------
 qstn-substrate-node/substrate-node/docker/qstnsubstrate.Dockerfile            |  35 --------
 .../substrate-node/docker/qstnsubstrate.Dockerfile.dockerignore               |  11 ---
 qstn-substrate-node/substrate-node/docker/run.sh                              |  12 ---
 qstn-substrate-node/substrate-node/pallets/survey/src/benchmarking.rs         | 158 ++++++++++++++++++++++++++++++++++++
 qstn-substrate-node/substrate-node/pallets/survey/src/lib.rs                  |  31 +++++--
 qstn-substrate-node/substrate-node/pallets/survey/src/mock.rs                 |   3 +-
 qstn-substrate-node/substrate-node/pallets/survey/src/weights.rs              | 118 +++++++++++++++++++++++++++
 qstn-substrate-node/substrate-node/runtime/Cargo.toml                         |   6 +-
 qstn-substrate-node/substrate-node/runtime/src/lib.rs                         |  53 +++++++++++-
 qstn-substrate-node/substrate-node/runtime/src/weights/mod.rs                 |   1 +
 qstn-substrate-pallet/survey/src/benchmarking.rs                              | 158 ++++++++++++++++++++++++++++++++++++
 qstn-substrate-pallet/survey/src/lib.rs                                       |  31 +++++--
 qstn-substrate-pallet/survey/src/mock.rs                                      |   3 +-
 qstn-substrate-pallet/survey/src/weights.rs                                   | 118 +++++++++++++++++++++++++++
 21 files changed, 723 insertions(+), 145 deletions(-)
 create mode 100644 LICENSE
 delete mode 100644 qstn-substrate-node/substrate-node/docker/README.md
 delete mode 100755 qstn-substrate-node/substrate-node/docker/build.sh
 delete mode 100644 qstn-substrate-node/substrate-node/docker/qstnsubstrate.Dockerfile
 delete mode 100644 qstn-substrate-node/substrate-node/docker/qstnsubstrate.Dockerfile.dockerignore
 delete mode 100755 qstn-substrate-node/substrate-node/docker/run.sh
 create mode 100644 qstn-substrate-node/substrate-node/pallets/survey/src/benchmarking.rs
 create mode 100644 qstn-substrate-node/substrate-node/pallets/survey/src/weights.rs
 create mode 100644 qstn-substrate-node/substrate-node/runtime/src/weights/mod.rs
 create mode 100644 qstn-substrate-pallet/survey/src/benchmarking.rs
 create mode 100644 qstn-substrate-pallet/survey/src/weights.rs
```
</details>

## Tests

### Pallet

<details>
     <summary>36 unit tests pass</summary>

```rust
     Running unittests src/main.rs (target/debug/deps/node_template-3f36e058f1aeb3d0)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/node_template_runtime-6086f1a75e874fc1)

running 1 test
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_survey-48178eaea42a2c27)

running 36 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::create_and_fund_survey_success ... ok
test tests::create_and_fund_survey_success_creator ... ok
test tests::create_new_survey_fail_already_existing ... ok
test tests::create_new_survey_success_creator_owner ... ok
test tests::create_new_survey_success ... ok
test tests::fund_survey_fails_funding_inferior_participants_limit ... ok
test tests::fund_survey_fails_survey_already_funded ... ok
test tests::fund_survey_fails_survey_not_created ... ok
test tests::fund_survey_fails_survey_not_owner_not_creator ... ok
test tests::fund_survey_fails_survey_not_enough_balance ... ok
test tests::fund_survey_gives_expected_reward_amount_10000_for_1000 ... ok
test tests::fund_survey_success ... ok
test tests::fund_survey_success_creator_funds ... ok
test tests::fund_survey_success_creator_owner ... ok
test tests::register_participant_fails_max_number_participants_reached ... ok
test tests::register_participant_fails_not_owner ... ok
test tests::register_participant_fails_participant_already_registered ... ok
test tests::register_participant_fails_survey_is_not_active ... ok
test tests::register_participant_fails_survey_not_created ... ok
test tests::register_participant_fails_survey_not_funded ... ok
test tests::register_participant_success ... ok
test tests::register_participant_success_creator ... ok
test tests::register_participant_success_creator_registers ... ok
test tests::reward_participant_fails_not_owner ... ok
test tests::reward_participant_fails_already_rewarded ... ok
test tests::reward_participant_fails_participant_not_registered ... ok
test tests::reward_participant_fails_survey_not_created ... ok
test tests::reward_participant_success ... ok
test tests::reward_participant_success_creator ... ok
test tests::reward_participant_fails_survey_not_funded ... ok
test tests::reward_participant_success_creator_rewards ... ok
test tests::set_survey_status_success ... ok
test tests::set_survey_status_success_creator ... ok
test tests::set_survey_status_success_creator_sets ... ok
test tests::set_survey_status_fails_not_owner ... ok

test result: ok. 36 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.08s
```
</details>
Passes with `--features runtime-benchmarks`

<details>
     <summary>Output</summary>

```rust
cargo test --features runtime-benchmarks
   Compiling num-traits v0.2.17
   Compiling num-integer v0.1.45
   Compiling bytemuck v1.14.0
   Compiling matrixmultiply v0.3.8
   Compiling num-rational v0.4.1
   Compiling rawpointer v0.2.1
   Compiling nalgebra-macros v0.2.1
   Compiling safe_arch v0.7.1
   Compiling wide v0.7.13
   Compiling chrono v0.4.31
   Compiling integer-sqrt v0.1.5
   Compiling num-complex v0.4.4
   Compiling approx v0.5.1
   Compiling sp-arithmetic v16.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling simba v0.8.1
   Compiling tracing-subscriber v0.2.25
   Compiling sp-tracing v10.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-runtime-interface v17.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-core v21.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-trie v22.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-keystore v0.27.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-weights v20.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-state-machine v0.28.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling nalgebra v0.32.3
   Compiling sp-io v23.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-application-crypto v23.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-runtime v24.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling linregress v0.5.3
   Compiling sp-version v22.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-staking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-inherents v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling frame-support v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling frame-system v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling frame-benchmarking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pallet-balances v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pallet-survey v4.0.0-dev (/Users/keeganquigley/Polkadot-QSTN-v1/qstn-substrate-pallet/survey)
    Finished test [unoptimized + debuginfo] target(s) in 21.10s
     Running unittests src/lib.rs (target/debug/deps/pallet_survey-2e09ff7aaa69a8ce)

running 37 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::create_new_survey_success_creator_owner ... ok
test tests::create_and_fund_survey_success_creator ... ok
test tests::create_new_survey_success ... ok
test tests::create_and_fund_survey_success ... ok
test tests::fund_survey_fails_survey_already_funded ... ok
test tests::create_new_survey_fail_already_existing ... ok
test tests::fund_survey_fails_funding_inferior_participants_limit ... ok
test benchmarking::benchmarks::benchmark_tests::test_benchmarks ... ok
test tests::fund_survey_fails_survey_not_created ... ok
test tests::fund_survey_fails_survey_not_owner_not_creator ... ok
test tests::fund_survey_gives_expected_reward_amount_10000_for_1000 ... ok
test tests::fund_survey_success ... ok
test tests::fund_survey_fails_survey_not_enough_balance ... ok
test tests::fund_survey_success_creator_owner ... ok
test tests::fund_survey_success_creator_funds ... ok
test tests::register_participant_fails_max_number_participants_reached ... ok
test tests::register_participant_fails_participant_already_registered ... ok
test tests::register_participant_fails_not_owner ... ok
test tests::register_participant_fails_survey_is_not_active ... ok
test tests::register_participant_fails_survey_not_funded ... ok
test tests::register_participant_success ... ok
test tests::register_participant_fails_survey_not_created ... ok
test tests::register_participant_success_creator ... ok
test tests::register_participant_success_creator_registers ... ok
test tests::reward_participant_fails_already_rewarded ... ok
test tests::reward_participant_success ... ok
test tests::reward_participant_fails_survey_not_created ... ok
test tests::reward_participant_success_creator ... ok
test tests::reward_participant_fails_participant_not_registered ... ok
test tests::reward_participant_fails_not_owner ... ok
test tests::reward_participant_success_creator_rewards ... ok
test tests::reward_participant_fails_survey_not_funded ... ok
test tests::set_survey_status_success ... ok
test tests::set_survey_status_fails_not_owner ... ok
test tests::set_survey_status_success_creator ... ok
test tests::set_survey_status_success_creator_sets ... ok

test result: ok. 37 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.04s

   Doc-tests pallet-survey

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
</details>

Cargo clippy comes back clean.

### Node

Unit tests pass:

<details>
     <summary>Output</summary>

```rust
test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/node_template-ea1c970d1a9dcb7c)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/node_template_runtime-2c54536f4c505bf2)

running 1 test
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_survey-c74cbe802b9f7259)

running 36 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::create_new_survey_success_creator_owner ... ok
test tests::create_and_fund_survey_success_creator ... ok
test tests::create_new_survey_fail_already_existing ... ok
test tests::fund_survey_fails_survey_already_funded ... ok
test tests::create_and_fund_survey_success ... ok
test tests::create_new_survey_success ... ok
test tests::fund_survey_fails_funding_inferior_participants_limit ... ok
test tests::fund_survey_fails_survey_not_owner_not_creator ... ok
test tests::fund_survey_fails_survey_not_created ... ok
test tests::fund_survey_fails_survey_not_enough_balance ... ok
test tests::fund_survey_gives_expected_reward_amount_10000_for_1000 ... ok
test tests::fund_survey_success ... ok
test tests::fund_survey_success_creator_funds ... ok
test tests::fund_survey_success_creator_owner ... ok
test tests::register_participant_fails_max_number_participants_reached ... ok
test tests::register_participant_success ... ok
test tests::register_participant_fails_survey_not_created ... ok
test tests::register_participant_fails_participant_already_registered ... ok
test tests::register_participant_fails_not_owner ... ok
test tests::register_participant_fails_survey_not_funded ... ok
test tests::register_participant_success_creator ... ok
test tests::register_participant_fails_survey_is_not_active ... ok
test tests::register_participant_success_creator_registers ... ok
test tests::reward_participant_fails_already_rewarded ... ok
test tests::reward_participant_success ... ok
test tests::reward_participant_fails_participant_not_registered ... ok
test tests::reward_participant_fails_survey_not_created ... ok
test tests::reward_participant_fails_survey_not_funded ... ok
test tests::reward_participant_fails_not_owner ... ok
test tests::reward_participant_success_creator ... ok
test tests::set_survey_status_success_creator ... ok
test tests::set_survey_status_success_creator_sets ... ok
test tests::set_survey_status_success ... ok
test tests::set_survey_status_fails_not_owner ... ok
test tests::reward_participant_success_creator_rewards ... ok

test result: ok. 36 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.04s

   Doc-tests node-template

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests node-template-runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-survey

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
</details>


<details>
     <summary>Benchmarking tests pass</summary>

```rust
cargo test --features runtime-benchmarks
warning: virtual workspace defaulting to `resolver = "1"` despite one or more workspace members being on edition 2021 which implies `resolver = "2"`
note: to keep the current resolver, specify `workspace.resolver = "1"` in the workspace root's manifest
note: to use the edition 2021 resolver, specify `workspace.resolver = "2"` in the workspace root's manifest
note: for more details see https://doc.rust-lang.org/cargo/reference/resolver.html#resolver-versions
warning: /Users/keeganquigley/Polkadot-QSTN-v1/qstn-substrate-node/substrate-node/Cargo.toml: unused manifest key: workspace.workspace
   Compiling sp-runtime v24.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling node-template-runtime v4.0.0-dev (/Users/keeganquigley/Polkadot-QSTN-v1/qstn-substrate-node/substrate-node/runtime)
   Compiling frame-benchmarking-cli v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling node-template v4.0.0-dev (/Users/keeganquigley/Polkadot-QSTN-v1/qstn-substrate-node/substrate-node/node)
   Compiling sp-version v22.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-inherents v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-staking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-keyring v24.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-executor v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-statement-store v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-consensus-grandpa v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-session v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-offchain v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-transaction-pool v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling frame-system-rpc-runtime-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-consensus v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling frame-support v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-block-builder v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-timestamp v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-transaction-storage-proof v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-consensus-slots v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-blockchain v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sp-consensus-aura v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-transaction-pool-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-client-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-consensus v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-block-builder v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-tracing v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-transaction-pool v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-client-db v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-basic-authorship v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-statement-store v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-network-common v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-consensus-slots v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-network v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-consensus-aura v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-chain-spec v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-network-sync v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-network-bitswap v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-network-transactions v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-network-light v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-informant v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-network-gossip v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-offchain v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-rpc-api v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-rpc-spec-v2 v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-consensus-grandpa v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-rpc v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling substrate-frame-rpc-system v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-service v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling frame-system v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling frame-try-runtime v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-cli v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling frame-benchmarking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pallet-transaction-payment v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pallet-authorship v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pallet-nfts v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling frame-executive v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pallet-transaction-payment-rpc-runtime-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pallet-transaction-payment-rpc v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pallet-timestamp v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pallet-balances v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pallet-survey v4.0.0-dev (/Users/keeganquigley/Polkadot-QSTN-v1/qstn-substrate-node/substrate-node/pallets/survey)
   Compiling pallet-sudo v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pallet-session v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pallet-aura v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling frame-system-benchmarking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pallet-grandpa v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
    Finished test [unoptimized + debuginfo] target(s) in 52.18s
     Running unittests src/lib.rs (target/debug/deps/node_template-d2e5542096e0333c)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/node_template-292ffc38a0fa0f7f)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/node_template_runtime-c6347d1280588179)

running 1 test
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_survey-833bafb1e67eb410)

running 37 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::create_new_survey_success ... ok
test tests::create_and_fund_survey_success ... ok
test tests::create_and_fund_survey_success_creator ... ok
test tests::fund_survey_fails_survey_already_funded ... ok
test tests::create_new_survey_fail_already_existing ... ok
test tests::fund_survey_fails_funding_inferior_participants_limit ... ok
test tests::create_new_survey_success_creator_owner ... ok
test benchmarking::benchmarks::benchmark_tests::test_benchmarks ... ok
test tests::fund_survey_fails_survey_not_created ... ok
test tests::fund_survey_fails_survey_not_enough_balance ... ok
test tests::fund_survey_gives_expected_reward_amount_10000_for_1000 ... ok
test tests::fund_survey_success_creator_owner ... ok
test tests::fund_survey_fails_survey_not_owner_not_creator ... ok
test tests::fund_survey_success_creator_funds ... ok
test tests::fund_survey_success ... ok
test tests::register_participant_fails_max_number_participants_reached ... ok
test tests::register_participant_fails_participant_already_registered ... ok
test tests::register_participant_fails_survey_not_funded ... ok
test tests::register_participant_fails_not_owner ... ok
test tests::register_participant_success ... ok
test tests::register_participant_fails_survey_not_created ... ok
test tests::register_participant_fails_survey_is_not_active ... ok
test tests::register_participant_success_creator ... ok
test tests::register_participant_success_creator_registers ... ok
test tests::reward_participant_fails_participant_not_registered ... ok
test tests::reward_participant_fails_not_owner ... ok
test tests::reward_participant_fails_survey_not_created ... ok
test tests::reward_participant_fails_already_rewarded ... ok
test tests::reward_participant_success_creator ... ok
test tests::reward_participant_success ... ok
test tests::reward_participant_success_creator_rewards ... ok
test tests::set_survey_status_success ... ok
test tests::set_survey_status_fails_not_owner ... ok
test tests::set_survey_status_success_creator ... ok
test tests::set_survey_status_success_creator_sets ... ok
test tests::reward_participant_fails_survey_not_funded ... ok

test result: ok. 37 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.04s
```
</details>
