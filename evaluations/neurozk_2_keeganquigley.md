# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/NeuroZK.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Specification | Notes |
| -----: | ----------- | ------------- | ------------- | ------------- |
| **0a.** | [License](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/LICENSE) | <ul><li>[x] </li></ul> | GPLv3 |
| **0b.** | [Documentation](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/Local%20Testing%20NeuroZK_Milestone2.md) | <ul><li>[x] </li></ul> | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how users can launch a cyborg worker node using their local local machine|
| **0c.** | [Testing and Testing Guide](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/Local%20Testing%20NeuroZK_Milestone2.md) | <ul><li>[x] </li></ul> | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | [Docker](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/Dockerfile) | <ul><li>[x] </li></ul> | We will provide a Dockerfile(s) that can be used to run a cyborg worker node locally. |
| 1. | [Working Demo](https://drive.google.com/file/d/1CH4jOeUVysjtjtjeJ0kl8g_2Wa3zHAjx/view) | <ul><li>[x] </li></ul> | We will provide video documentation to help developers understand the process of connecting and managing a cyborg worker node.|
| 2. | [Substrate Module: Payments](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/pallets/payment/README.md) | <ul><li>[x] </li></ul> | This pallet will be responsible for estimating the costs for executing a task based on server specifications and time. |
| 3. | [Pallet Feature: Inventory](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/pallets/edge-connect/README.md) | <ul><li>[x] </li></ul> | This feature will be responsible for uniquely mapping each worker node uniquely in the onchain inventory to keep track of server status in the edge connect pallet. |
| 4. | [Substrate Node implementation: Cyborg Worker](https://github.com/Cyborg-Network/Cyborg-worker-node) | <ul><li>[x] </li></ul> | A custom node implementation to contribute compute power to the cyborg parachain and earn rewards for contributions|
| 5. | [Cyborg Connect: Provide Compute (Feature)](https://github.com/Cyborg-Network/cyborg-connect)  | <ul><li>[x] </li></ul> | The UI implementation to support deployment and management of Cyborg worker nodes|

# General Notes

I was able to get through the guide to test the worker node.

Docker works using `docker build -t cyborg-worker-node:local .` w/ 1 warning:

```sh
docker build -t cyborg-worker-node:local .

[+] Building 1863.4s (14/14) FINISHED                                                                       docker:default
 => [internal] load build definition from Dockerfile                                                                  0.1s
 => => transferring dockerfile: 766B                                                                                  0.0s
 => WARN: FromAsCasing: 'as' and 'FROM' keywords' casing do not match (line 1)                                        0.1s
 => [internal] load metadata for docker.io/parity/base-bin:latest                                                     1.4s
 => [internal] load metadata for docker.io/paritytech/ci-unified:latest                                               1.3s
 => [internal] load .dockerignore                                                                                     0.0s
 => => transferring context: 73B                                                                                      0.0s
 => [builder 1/5] FROM docker.io/paritytech/ci-unified:latest@sha256:8e41d9debe26a3458c1844afb521fb72f0ff95844ece1  113.1s
 => => resolve docker.io/paritytech/ci-unified:latest@sha256:8e41d9debe26a3458c1844afb521fb72f0ff95844ece1887c44ffbd  0.0s
 => => sha256:8e41d9debe26a3458c1844afb521fb72f0ff95844ece1887c44ffbd4b36e1593 432B / 432B                            0.0s
 => => sha256:c2858e6a917ca8a47c700d238c7d482fc8b373ff073445c9df5ed6d095880e78 22.52kB / 22.52kB                      0.0s
 => => sha256:1e82cf03498f3b723b0c1d2b9b55e9a76e9143fa3ac321207055de68d1b06167 2.11GB / 2.11GB                       44.4s
 => => extracting sha256:1e82cf03498f3b723b0c1d2b9b55e9a76e9143fa3ac321207055de68d1b06167                            68.2s
 => [internal] load build context                                                                                     0.4s
 => => transferring context: 38.77MB                                                                                  0.3s
 => [stage-1 1/3] FROM docker.io/parity/base-bin:latest@sha256:2391554e30053b07d0c22127df137b66e48282c201ec8e1e4634e  2.8s
 => => resolve docker.io/parity/base-bin:latest@sha256:2391554e30053b07d0c22127df137b66e48282c201ec8e1e4634e3ffd29ec  0.0s
 => => sha256:2391554e30053b07d0c22127df137b66e48282c201ec8e1e4634e3ffd29ec6fd 593B / 593B                            0.0s
 => => sha256:13aa0172dafe27b7422338944fedaea970700b3da61d36d78004284407decb3c 6.80kB / 6.80kB                        0.0s
 => => sha256:6414378b647780fee8fd903ddb9541d134a1947ce092d08bdeb23a54cb3684ac 29.54MB / 29.54MB                      0.8s
 => => sha256:3a1eec854972e6c3aea2bac6148be5baf7b4239f2b5f7509e3136bb42255dbc3 4.78MB / 4.78MB                        0.5s
 => => extracting sha256:6414378b647780fee8fd903ddb9541d134a1947ce092d08bdeb23a54cb3684ac                             1.5s
 => => extracting sha256:3a1eec854972e6c3aea2bac6148be5baf7b4239f2b5f7509e3136bb42255dbc3                             0.2s
 => [builder 2/5] WORKDIR /polkadot                                                                                   9.3s
 => [builder 3/5] COPY . /polkadot                                                                                    0.3s
 => [builder 4/5] RUN cargo fetch                                                                                    26.6s
 => [builder 5/5] RUN cargo build --locked --release                                                               1708.2s 
 => [stage-1 2/3] COPY --from=builder /polkadot/target/release/cyborg-node /usr/local/bin                             0.5s 
 => [stage-1 3/3] RUN useradd -m -u 1001 -U -s /bin/sh -d /polkadot polkadot &&  mkdir -p /data /polkadot/.local/sha  0.5s 
 => exporting to image                                                                                                1.1s 
 => => exporting layers                                                                                               1.0s 
 => => writing image sha256:276cfc52058fc2f322960b4f4cfc9d4db36c9c742883b62482dc359207c67f73                          0.0s 
 => => naming to docker.io/library/cyborg-worker-node:local                                                           0.0s 

 1 warning found (use docker --debug to expand):
 - FromAsCasing: 'as' and 'FROM' keywords' casing do not match (line 1)
```

## Testing

Unit tests passing.

<details>
  <summary>Output</summary>

```rust
warning: use of deprecated constant `pallet::warnings::ConstantWeight_0::_w`: 
                 It is deprecated to use hard-coded constant as call weight.
                 Please instead benchmark all calls or put the pallet into `dev` mode.
         
                 For more info see:
                     <https://github.com/paritytech/substrate/pull/13798>
   --> pallets/task-management/src/lib.rs:238:90
    |
238 |         #[pallet::weight(/*<T as pallet::Config>::WeightInfo::submit_completed_task(u32::MAX)*/500000000)]
    |                                                                                                ^^^^^^^^^
    |
    = note: `#[warn(deprecated)]` on by default

   Compiling smoldot v0.11.0
warning: `pallet-task-management` (lib) generated 1 warning
   Compiling cumulus-primitives-aura v0.14.0
   Compiling pallet-status-aggregator v0.1.0 (/home/ubuntu/cyborg-parachain/pallets/status-aggregator)
   Compiling pallet-collator-selection v16.0.0
   Compiling pallet-asset-tx-payment v35.0.0
   Compiling staging-parachain-info v0.14.0
   Compiling pallet-assets v36.0.0
   Compiling fs4 v0.7.0
   Compiling lru v0.11.1
   Compiling sc-storage-monitor v0.22.0
   Compiling cumulus-pallet-aura-ext v0.14.0
   Compiling cumulus-pallet-xcmp-queue v0.14.0
   Compiling cumulus-primitives-storage-weight-reclaim v5.0.0
   Compiling cumulus-pallet-session-benchmarking v16.0.0
   Compiling cumulus-pallet-xcm v0.14.0
   Compiling cumulus-test-relay-sproof-builder v0.14.0
   Compiling cyborg-node v0.1.0 (/home/ubuntu/cyborg-parachain/node)
   Compiling cumulus-client-consensus-proposer v0.14.0
   Compiling color-print-proc-macro v0.3.6
   Compiling parachains-common v14.0.0
   Compiling color-print v0.3.6
warning: variable does not need to be mutable
  --> pallets/zk-verifier/src/mock.rs:55:6
   |
55 |     let mut storage = GenesisConfig::<Test>::default().build_storage().unwrap();
   |         ----^^^^^^^
   |         |
   |         help: remove this `mut`
   |
   = note: `#[warn(unused_mut)]` on by default

warning: unused imports: `assert_noop`, `sp_runtime::RuntimeDebug`, and `testing_prelude::bounded_vec`
  --> pallets/status-aggregator/src/tests.rs:9:2
   |
9  |     assert_noop, assert_ok, pallet_prelude::ConstU32, sp_runtime::RuntimeDebug,
   |     ^^^^^^^^^^^                                       ^^^^^^^^^^^^^^^^^^^^^^^^
10 |     testing_prelude::bounded_vec, traits::OnFinalize, BoundedVec,
   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused import: `orml_oracle`
  --> pallets/status-aggregator/src/tests.rs:13:5
   |
13 | use orml_oracle;
   |     ^^^^^^^^^^^

warning: unused import: `CombineData`
  --> pallets/status-aggregator/src/tests.rs:14:19
   |
14 | use orml_traits::{CombineData, OnNewData};
   |                   ^^^^^^^^^^^

warning: unused import: `TimestampedValue`
  --> pallets/status-aggregator/src/tests.rs:17:46
   |
17 |     oracle::{OracleWorkerFormat, ProcessStatus, TimestampedValue},
   |                                                 ^^^^^^^^^^^^^^^^

warning: unused import: `std::error::Error`
  --> pallets/status-aggregator/src/tests.rs:20:5
   |
20 | use std::error::Error;
   |     ^^^^^^^^^^^^^^^^^

warning: type alias `UncheckedExtrinsic` is never used
 --> pallets/zk-verifier/src/mock.rs:6:6
  |
6 | type UncheckedExtrinsic = frame_system::mocking::MockUncheckedExtrinsic<Test>;
  |      ^^^^^^^^^^^^^^^^^^
  |
  = note: `#[warn(dead_code)]` on by default

warning: type alias `Block` is never used
 --> pallets/zk-verifier/src/mock.rs:7:6
  |
7 | type Block = frame_system::mocking::MockBlock<Test>;
  |      ^^^^^

warning: constant `taskId` should have an upper case name
  --> pallets/zk-verifier/src/tests.rs:40:7
   |
40 | const taskId: TaskId = 0;
   |       ^^^^^^ help: convert the identifier to upper case: `TASK_ID`
   |
   = note: `#[warn(non_upper_case_globals)]` on by default

warning: unused variable: `api_info`
   --> pallets/task-management/src/tests.rs:143:7
    |
143 |         let api_info = WorkerAPI {
    |             ^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_api_info`
    |
    = note: `#[warn(unused_variables)]` on by default

warning: unused variable: `worker_id`
   --> pallets/task-management/src/tests.rs:769:7
    |
769 |         let worker_id = 0;
    |             ^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_worker_id`

warning: unused variable: `worker_latitude`
    --> pallets/task-management/src/tests.rs:1021:7
     |
1021 |         let worker_latitude: Latitude = 590000;
     |             ^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_worker_latitude`

warning: unused variable: `worker_longitude`
    --> pallets/task-management/src/tests.rs:1022:7
     |
1022 |         let worker_longitude: Longitude = 120000;
     |             ^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_worker_longitude`

warning: unused variable: `worker_ram`
    --> pallets/task-management/src/tests.rs:1023:7
     |
1023 |         let worker_ram: RamBytes = 100000000;
     |             ^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_worker_ram`

warning: unused variable: `worker_storage`
    --> pallets/task-management/src/tests.rs:1024:7
     |
1024 |         let worker_storage: StorageBytes = 100000000;
     |             ^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_worker_storage`

warning: unused variable: `worker_cpu`
    --> pallets/task-management/src/tests.rs:1025:7
     |
1025 |         let worker_cpu: CpuCores = 12;
     |             ^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_worker_cpu`

warning: unused variable: `worker_type_0`
    --> pallets/task-management/src/tests.rs:1028:7
     |
1028 |         let worker_type_0 = WorkerType::Docker;
     |             ^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_worker_type_0`

warning: unused variable: `worker_type_1`
    --> pallets/task-management/src/tests.rs:1029:7
     |
1029 |         let worker_type_1 = WorkerType::Executable;
     |             ^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_worker_type_1`

warning: `pallet-zk-verifier` (lib test) generated 4 warnings (run `cargo fix --lib -p pallet-zk-verifier --tests` to apply 1 suggestion)
   Compiling smoldot-light v0.9.0
warning: `pallet-status-aggregator` (lib test) generated 5 warnings (run `cargo fix --lib -p pallet-status-aggregator --tests` to apply 5 suggestions)
warning: `pallet-task-management` (lib test) generated 10 warnings (1 duplicate)
warning: unexpected `cfg` condition value: `try-runtime`
  --> orml/utilities/src/lib.rs:50:2
   |
50 |     #[frame_support::pallet]
   |     ^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: expected values for `feature` are: `default`, `serde`, and `std`
   = help: consider adding `try-runtime` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration
   = note: `#[warn(unexpected_cfgs)]` on by default
   = note: this warning originates in the attribute macro `frame_support::pallet` (in Nightly builds, run with -Z macro-backtrace for more info)

warning: unexpected `cfg` condition value: `try-runtime`
  --> orml/utilities/src/lib.rs:57:13
   |
57 |         #[pallet::pallet]
   |                   ^^^^^^
   |
   = note: expected values for `feature` are: `default`, `serde`, and `std`
   = help: consider adding `try-runtime` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration

warning: `orml-utilities` (lib test) generated 2 warnings
   Compiling str0m v0.5.1
   Compiling sc-network-types v0.12.0
   Compiling sc-consensus v0.40.0
   Compiling sc-network-common v0.40.0
   Compiling sc-consensus-epochs v0.40.0
   Compiling sc-telemetry v21.0.0
   Compiling sc-chain-spec v34.0.0
   Compiling sc-mixnet v0.11.0
   Compiling sc-rpc-api v0.40.0
   Compiling sc-informant v0.40.0
   Compiling sc-network-transactions v0.40.0
   Compiling polkadot-node-jaeger v14.0.0
   Compiling sc-network-gossip v0.41.0
   Compiling sc-rpc v36.0.0
   Compiling polkadot-node-network-protocol v14.0.0
   Compiling sc-consensus-babe v0.41.0
   Compiling sc-consensus-grandpa v0.26.0
   Compiling sc-rpc-spec-v2 v0.41.0
   Compiling polkadot-node-subsystem-types v14.0.0
   Compiling sc-consensus-beefy v20.0.0
   Compiling sc-consensus-babe-rpc v0.41.0
   Compiling substrate-state-trie-migration-rpc v34.0.0
   Compiling substrate-frame-rpc-system v35.0.0
   Compiling sc-consensus-grandpa-rpc v0.26.0
   Compiling sc-sync-state-rpc v0.41.0
   Compiling sc-offchain v36.0.0
   Compiling sc-consensus-beefy-rpc v20.0.0
   Compiling sc-basic-authorship v0.41.0
   Compiling sc-consensus-aura v0.41.0
   Compiling polkadot-rpc v14.0.0
   Compiling mmr-gadget v36.0.0
   Compiling rocksdb v0.21.0
   Compiling kvdb-rocksdb v0.19.0
   Compiling sc-client-db v0.42.0
   Compiling sc-service v0.42.0
   Compiling sc-cli v0.43.0
   Compiling polkadot-node-metrics v14.0.0
   Compiling cumulus-client-cli v0.14.0
   Compiling polkadot-overseer v14.0.0
⚡ Found 3 strongly connected components which includes at least one cycle each
cycle(001) ∈ α: DisputeCoordinator ~~{"DisputeDistributionMessage"}~~> DisputeDistribution ~~{"DisputeCoordinatorMessage"}~~>  *
cycle(002) ∈ β: CandidateBacking ~~{"CollatorProtocolMessage"}~~> CollatorProtocol ~~{"CandidateBackingMessage"}~~>  *
cycle(003) ∈ γ: NetworkBridgeRx ~~{"GossipSupportMessage"}~~> GossipSupport ~~{"NetworkBridgeRxMessage"}~~>  *
   Compiling wasm-opt v0.116.1
   Compiling substrate-wasm-builder v23.0.0
   Compiling rococo-runtime v14.0.0
   Compiling cyborg-runtime v0.1.0 (/home/ubuntu/cyborg-parachain/runtime)
   Compiling polkadot-node-subsystem v14.0.0
   Compiling cumulus-relay-chain-interface v0.14.0
   Compiling polkadot-node-subsystem-util v14.0.0
   Compiling polkadot-node-core-chain-api v14.0.0
   Compiling polkadot-network-bridge v14.0.0
   Compiling polkadot-node-core-runtime-api v14.0.0
   Compiling polkadot-node-core-parachains-inherent v14.0.0
   Compiling polkadot-approval-distribution v14.0.0
   Compiling polkadot-availability-recovery v14.0.0
   Compiling polkadot-node-core-dispute-coordinator v14.0.0
   Compiling polkadot-node-core-candidate-validation v14.0.0
   Compiling polkadot-node-core-prospective-parachains v13.0.0
   Compiling polkadot-availability-bitfield-distribution v14.0.0
   Compiling polkadot-node-core-av-store v14.0.0
   Compiling polkadot-gossip-support v14.0.0
   Compiling polkadot-collator-protocol v14.0.0
   Compiling polkadot-node-core-provisioner v14.0.0
   Compiling polkadot-node-collation-generation v14.0.0
   Compiling polkadot-node-core-approval-voting v14.0.0
   Compiling polkadot-availability-distribution v14.0.0
   Compiling polkadot-node-core-chain-selection v14.0.0
   Compiling polkadot-node-core-pvf-checker v14.0.0
   Compiling polkadot-node-core-bitfield-signing v14.0.0
   Compiling polkadot-node-core-backing v14.0.0
   Compiling polkadot-statement-distribution v14.0.0
   Compiling polkadot-dispute-distribution v14.0.0
   Compiling cumulus-client-pov-recovery v0.14.0
   Compiling cumulus-client-network v0.14.0
   Compiling cumulus-relay-chain-rpc-interface v0.14.0
   Compiling cumulus-client-consensus-common v0.14.0
   Compiling cumulus-client-parachain-inherent v0.8.0
   Compiling cumulus-client-collator v0.14.0
   Compiling cumulus-client-consensus-aura v0.14.0
   Compiling polkadot-service v14.0.0
   Compiling cumulus-relay-chain-minimal-node v0.14.0
   Compiling cumulus-relay-chain-inprocess-interface v0.14.0
   Compiling cumulus-client-service v0.14.0
    Finished `test` profile [unoptimized + debuginfo] target(s) in 12m 19s
     Running unittests src/main.rs (target/debug/deps/cyborg_node-39c974b21e774c2a)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/cyborg_primitives-f69d7fac0618fb56)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/cyborg_runtime-1c50cbab19024c9a)

running 6 tests
test weights::extrinsic_weights::constants::test_weights::sane ... ok
test weights::paritydb_weights::constants::test_db_weights::sane ... ok
test weights::rocksdb_weights::constants::test_db_weights::sane ... ok
test weights::block_weights::constants::test_weights::sane ... ok
test test_genesis_config_builds ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/orml_oracle-cdeb567eaa9e8620)

running 13 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test mock::test_genesis_config_builds ... ok
test tests::should_clear_data_for_removed_members ... ok
test tests::change_member_should_work ... ok
test tests::get_all_values_should_work ... ok
test tests::should_combined_data ... ok
test tests::should_feed_values_from_member ... ok
test tests::multiple_calls_should_fail ... ok
test tests::should_feed_values_from_root ... ok
test tests::should_read_raw_values ... ok
test tests::should_return_none_for_non_exist_key ... ok
test tests::values_are_updated_on_feed ... ok
test tests::should_not_feed_values_from_root_directly ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/orml_traits-8f3c9b8627f95431)

running 15 tests
test data_provider::tests::median_value_data_provider_works ... ok
test location::tests::child_parachain_as_reserve_chain ... ok
test location::tests::no_reserve_chain_for_absolute_self_for_relative ... ok
test location::tests::parent_as_reserve_chain ... ok
test get_by_key::tests::get_by_key_should_work ... ok
test location::tests::sibling_parachain_as_reserve_chain ... ok
test parameters::tests::test_define_aggregrated_parameters_aggregrated_key_value ... ok
test parameters::tests::test_define_aggregrated_parameters_key_convert ... ok
test location::tests::non_chain_part_works ... ok
test parameters::tests::test_define_parameters_aggregrated_key_value ... ok
test parameters::tests::test_define_parameters_key_convert ... ok
test parameters::tests::test_define_parameters_value_convert ... ok
test price::test::get_price_should_work ... ok
test price::test::price_is_none_should_not_panic ... ok
test price::test::price_is_zero_should_not_panic ... ok

test result: ok. 15 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/orml_utilities-fcd47f58db662e07)

running 11 tests
test ordered_set::tests::exceeding_max_size_should_fail ... ok
test ordered_set::tests::clear ... ok
test ordered_set::tests::contains ... ok
test ordered_set::tests::remove ... ok
test ordered_set::tests::from ... ok
test ordered_set::tests::insert ... ok
test tests::test_genesis_config_builds ... ok
test tests::storage_transaction_basic_commit ... ok
test tests::simulate_execution_works ... ok
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::storage_transaction_basic_rollback ... ok

test result: ok. 11 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_edge_connect-c0f29433488af15f)

running 10 tests
test mock::test_genesis_config_builds ... ok
test tests::emiting_proper_event_for_registering_worker ... ok
test tests::it_fails_for_removing_non_existent_worker ... ok
test tests::it_works_for_changing_visibility ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::it_works_for_inserting_worker_into_correct_storage ... ok
test tests::it_fails_for_changing_visibility_on_nonexistant_worker ... ok
test tests::it_works_for_removing_worker ... ok
test tests::it_works_for_registering_domain ... ok
test tests::it_fails_for_registering_duplicate_worker ... ok

test result: ok. 10 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_payment-e3fffaca94a3d0fc)

running 13 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::it_fails_when_consuming_zero_hours ... ok
test tests::admin_can_set_price_per_hour ... ok
test tests::admin_can_set_service_provider_account ... ok
test tests::it_fails_when_purchasing_with_insufficient_balance ... ok
test tests::it_fails_when_purchasing_hours_without_service_provider_account ... ok
test tests::it_fails_when_consuming_more_hours_than_owned ... ok
test tests::non_admin_cannot_set_service_provider_account ... ok
test tests::it_works_for_consuming_compute_hours ... ok
test tests::it_fails_when_purchasing_zero_hours ... ok
test tests::it_works_for_purchasing_compute_hours ... ok
test tests::non_admin_cannot_set_price_per_hour ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_status_aggregator-85735c72c1364085)

running 6 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
Jan 27 20:51:47.873 ERROR runtime::frame-support: No worker registed by this key: OracleWorkerFormat { id: (0, 0), worker_type: Docker }    
test tests::prevents_nonexistent_worker_storage ... ok
Jan 27 20:51:47.873 ERROR runtime::frame-support: A value for this period was already submitted by: 100    
test tests::on_finalize_works_as_expected_for_docker_workers ... ok
Jan 27 20:51:47.875 ERROR runtime::frame-support: Failed to push status instance value due to exceeded capacity. Value was submitted by: 308    
test tests::on_finalize_works_as_expected_for_executable_workers ... ok
test tests::on_new_data_works_as_expected ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_task_management-a3dac13fb7fcb275)

running 12 tests
test mock::test_genesis_config_builds ... ok
test tests::it_fails_when_no_computer_hours_available ... ok
test tests::it_fails_when_no_workers_are_available ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::it_assigns_resolver_when_dispute_in_verification_and_resolves_task ... ok
test tests::it_fails_when_worker_not_registered ... ok
test tests::it_works_for_submit_completed_task ... ok
test tests::it_works_for_task_scheduler ... ok
test tests::it_fails_when_submit_completed_task_with_invalid_owner ... ok
test tests::result_on_taskinfo_works_on_result_submit ... ok
test tests::it_works_when_verifying_task ... ok
test tests::it_reassigns_task_when_resolver_fails_to_resolve ... ok

test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_zk_verifier-9b846c8f67f774e3)

running 25 tests
test deserialization::tests::public_inputs_deserialization ... ok
test deserialization::tests::test_proof_deserialization ... ok
test deserialization::tests::test_vk_deserialization ... ok
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_empty_proof ... ok
test tests::test_not_supported_proof_curve ... ok
test tests::test_not_supported_vk_curve ... ok
test tests::test_too_long_proof ... ok
test tests::test_not_supported_vk_protocol ... ok
test tests::test_could_not_create_proof ... ok
test tests::test_setup_verification ... ok
test tests::test_not_supported_proof_protocol ... ok
test tests::test_public_inputs_mismatch ... ok
test tests::test_too_long_public_inputs ... ok
test tests::test_too_long_verification_key ... ok
test tests::test_could_not_create_verification_key ... ok
test verify::tests::proof_from_correct_coordinates_is_ok ... ok
test tests::test_verify_without_verification_key ... ok
test verify::tests::verification_key_from_correct_coordinates_is_ok ... ok
test verify::tests::verify_with_incorrect_ic_len ... ok
test verify::tests::verify_correct_proof ... ok
test tests::test_verification_failed ... ok
test tests::test_verification_success ... ok
test verify::tests::verify_incorrect_proof ... ok

test result: ok. 25 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.08s

   Doc-tests cyborg_primitives

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests cyborg_runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests orml_oracle

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests orml_traits

running 3 tests
test orml/traits/src/get_by_key.rs - get_by_key::parameter_type_with_key (line 12) ... ignored
test orml/traits/src/parameters.rs - parameters::define_parameters (line 117) ... ok
test orml/traits/src/parameters.rs - parameters::define_aggregrated_parameters (line 288) ... ok

test result: ok. 2 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 1.29s

   Doc-tests orml_utilities

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_edge_connect

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_payment

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_status_aggregator

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_task_management

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_zk_verifier

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
</details>
