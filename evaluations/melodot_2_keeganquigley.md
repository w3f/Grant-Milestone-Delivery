# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Melodot.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley

| Number  | Deliverable                    | Link                                                         | Accepted                                                     | Notes                                                        |
| ------- | ------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **0a.** | License                        | [Apache](https://github.com/ZeroDAO/melodot/blob/w3f/LICENSE) | <ul><li>[x] </li></ul> | Apache 2.0                                                   |
| **0b.** | Documentation                  | [Docs](https://docs.melodot.io/ )                            | <ul><li>[x] </li></ul> | Very robust docs. |
| **0c.** | Testing and Testing Guide      | [Testing Guide](https://github.com/ZeroDAO/melodot/blob/w3f/TESTING.md) | <ul><li>[x] </li></ul> | I completed the testing guide. [Examples](https://github.com/ZeroDAO/melodot/tree/main/crates/meloxt/examples) work.                          |
| **0d.** | Docker                         | [Start](https://github.com/ZeroDAO/melodot/tree/w3f#5-docker) [Testing](https://github.com/ZeroDAO/melodot/blob/w3f/TESTING.md#using-docker) | <ul><li>[x] </li></ul> | Looks good. |
| 1.      | Substrate pallet: excutive_das | [pallet](https://github.com/ZeroDAO/melodot/tree/w3f/crates/frame-executive-ext) | <ul><li>[x] </li></ul> | Looks good. |
| 2.      | Substrate pallet: system_das   | [Pallet](https://github.com/ZeroDAO/melodot/tree/w3f/crates/frame-system-ext) | <ul><li>[x] </li></ul> | Looks good. |
| 3.      | Substrate pallet: melo_store   | [Pallet](https://github.com/ZeroDAO/melodot/tree/w3f/crates/pallet-melo-store) | <ul><li>[x] </li></ul> | Looks good. |
| 4.      | melodot-client                 | [Node](https://github.com/ZeroDAO/melodot/tree/w3f/node)     | <ul><li>[x] </li></ul> | Looks good. |

# General Notes

Great work! This is a very well-made PoC with great documentation. All core functions work as expected, and the docs have very thorough explanations pertaining to data availability. I was able to run the local nodes using `alice` and `bob` accounts.

**Evaluation v2**

Docker issues have been [resolved](https://github.com/ZeroDAO/melodot/commit/5cb51b0c3e6176eaedca04c0aa2442df1c0e8216). `protoc` crate issue was resolved. Now runs successfully.

```sh
*** Melodot ***
[+] Running 1/1
 ✔ Network melodot_default  Removed                                                                                                                      0.2s 
[+] Creating 1/0
 ✔ Network melodot_default  Created
```
```sh
*** Melodot ***
[+] Creating 1/0
 ✔ Network melodot_default  Created                                                                                  0.0s
[+] Running 4/4
 ✔ dev 3 layers [⣿⣿⣿]      0B/0B      Pulled                                                                        70.2s
   ✔ 9d21b12d5fab Pull complete                                                                                     12.0s
   ✔ 12fd99bf0468 Pull complete                                                                                     51.6s
   ✔ a96623d36357 Pull complete
```

**Evaluation v1**

For some reason the build-release fails on my Mac, but it builds successfully on Ubuntu.

<details>

  <summary>macOS</summary>

  ```rust
The following warnings were emitted during compilation:

  warning: error: unable to create target: 'No available targets are compatible with triple "wasm32-unknown-unknown"'
  warning: 1 error generated.

  error: failed to run custom build command for `blst v0.3.11 (https://github.com/supranational/blst.git#78fee18b)`

  Caused by:
    process didn't exit successfully: `/Users/keeganquigley/melodot/target/release/wbuild/melodot-runtime/target/release/build/blst-3582b2dbf5555467/build-script-build` (exit status: 1)
    --- stdout
    cargo:rerun-if-env-changed=BLST_TEST_NO_STD
    Using blst source directory /Users/keeganquigley/.cargo/git/checkouts/blst-5c557c5a4a09c457/78fee18
    cargo:rerun-if-changed=/Users/keeganquigley/.cargo/git/checkouts/blst-5c557c5a4a09c457/78fee18/src
    TARGET = Some("wasm32-unknown-unknown")
    HOST = Some("aarch64-apple-darwin")
    cargo:rerun-if-env-changed=CC_wasm32-unknown-unknown
    CC_wasm32-unknown-unknown = None
    cargo:rerun-if-env-changed=CC_wasm32_unknown_unknown
    CC_wasm32_unknown_unknown = None
    cargo:rerun-if-env-changed=TARGET_CC
    TARGET_CC = None
    cargo:rerun-if-env-changed=CC
    CC = None
    cargo:rerun-if-env-changed=CRATE_CC_NO_DEFAULTS
    CRATE_CC_NO_DEFAULTS = None
    DEBUG = Some("false")
    cargo:rerun-if-env-changed=CFLAGS_wasm32-unknown-unknown
    CFLAGS_wasm32-unknown-unknown = None
    cargo:rerun-if-env-changed=CFLAGS_wasm32_unknown_unknown
    CFLAGS_wasm32_unknown_unknown = None
    cargo:rerun-if-env-changed=TARGET_CFLAGS
    TARGET_CFLAGS = None
    cargo:rerun-if-env-changed=CFLAGS
    CFLAGS = None
    cargo:rerun-if-env-changed=CC_wasm32-unknown-unknown
    CC_wasm32-unknown-unknown = None
    cargo:rerun-if-env-changed=CC_wasm32_unknown_unknown
    CC_wasm32_unknown_unknown = None
    cargo:rerun-if-env-changed=TARGET_CC
    TARGET_CC = None
    cargo:rerun-if-env-changed=CC
    CC = None
    cargo:rerun-if-env-changed=CRATE_CC_NO_DEFAULTS
    CRATE_CC_NO_DEFAULTS = None
    cargo:rerun-if-env-changed=CFLAGS_wasm32-unknown-unknown
    CFLAGS_wasm32-unknown-unknown = None
    cargo:rerun-if-env-changed=CFLAGS_wasm32_unknown_unknown
    CFLAGS_wasm32_unknown_unknown = None
    cargo:rerun-if-env-changed=TARGET_CFLAGS
    TARGET_CFLAGS = None
    cargo:rerun-if-env-changed=CFLAGS
    CFLAGS = None
    cargo:rerun-if-env-changed=CC_wasm32-unknown-unknown
    CC_wasm32-unknown-unknown = None
    cargo:rerun-if-env-changed=CC_wasm32_unknown_unknown
    CC_wasm32_unknown_unknown = None
    cargo:rerun-if-env-changed=TARGET_CC
    TARGET_CC = None
    cargo:rerun-if-env-changed=CC
    CC = None
    cargo:rerun-if-env-changed=CRATE_CC_NO_DEFAULTS
    CRATE_CC_NO_DEFAULTS = None
    cargo:rerun-if-env-changed=CFLAGS_wasm32-unknown-unknown
    CFLAGS_wasm32-unknown-unknown = None
    cargo:rerun-if-env-changed=CFLAGS_wasm32_unknown_unknown
    CFLAGS_wasm32_unknown_unknown = None
    cargo:rerun-if-env-changed=TARGET_CFLAGS
    TARGET_CFLAGS = None
    cargo:rerun-if-env-changed=CFLAGS
    CFLAGS = None
    cargo:rerun-if-env-changed=CC_wasm32-unknown-unknown
    CC_wasm32-unknown-unknown = None
    cargo:rerun-if-env-changed=CC_wasm32_unknown_unknown
    CC_wasm32_unknown_unknown = None
    cargo:rerun-if-env-changed=TARGET_CC
    TARGET_CC = None
    cargo:rerun-if-env-changed=CC
    CC = None
    cargo:rerun-if-env-changed=CRATE_CC_NO_DEFAULTS
    CRATE_CC_NO_DEFAULTS = None
    cargo:rerun-if-env-changed=CFLAGS_wasm32-unknown-unknown
    CFLAGS_wasm32-unknown-unknown = None
    cargo:rerun-if-env-changed=CFLAGS_wasm32_unknown_unknown
    CFLAGS_wasm32_unknown_unknown = None
    cargo:rerun-if-env-changed=TARGET_CFLAGS
    TARGET_CFLAGS = None
    cargo:rerun-if-env-changed=CFLAGS
    CFLAGS = None
    cargo:rerun-if-env-changed=CC_wasm32-unknown-unknown
    CC_wasm32-unknown-unknown = None
    cargo:rerun-if-env-changed=CC_wasm32_unknown_unknown
    CC_wasm32_unknown_unknown = None
    cargo:rerun-if-env-changed=TARGET_CC
    TARGET_CC = None
    cargo:rerun-if-env-changed=CC
    CC = None
    cargo:rerun-if-env-changed=CRATE_CC_NO_DEFAULTS
    CRATE_CC_NO_DEFAULTS = None
    cargo:rerun-if-env-changed=CFLAGS_wasm32-unknown-unknown
    CFLAGS_wasm32-unknown-unknown = None
    cargo:rerun-if-env-changed=CFLAGS_wasm32_unknown_unknown
    CFLAGS_wasm32_unknown_unknown = None
    cargo:rerun-if-env-changed=TARGET_CFLAGS
    TARGET_CFLAGS = None
    cargo:rerun-if-env-changed=CFLAGS
    CFLAGS = None
    running: "clang" "-O2" "-ffunction-sections" "-fdata-sections" "-fPIC" "--target=wasm32-unknown-unknown" "-Wall" "-Wextra" "-ffreestanding" "-D__BLST_NO_ASM__" "-DSCRATCH_LIMIT=(45 * 1024)" "-o" "/Users/keeganquigley/melodot/target/release/wbuild/melodot-runtime/target/wasm32-unknown-unknown/release/build/blst-c0594c5f5c837383/out/3e9350ac86c1ff8b-server.o" "-c" "/Users/keeganquigley/.cargo/git/checkouts/blst-5c557c5a4a09c457/78fee18/src/server.c"
    cargo:warning=error: unable to create target: 'No available targets are compatible with triple "wasm32-unknown-unknown"'

    cargo:warning=1 error generated.

    exit status: 1

    --- stderr


    error occurred: Command "clang" "-O2" "-ffunction-sections" "-fdata-sections" "-fPIC" "--target=wasm32-unknown-unknown" "-Wall" "-Wextra" "-ffreestanding" "-D__BLST_NO_ASM__" "-DSCRATCH_LIMIT=(45 * 1024)" "-o" "/Users/keeganquigley/melodot/target/release/wbuild/melodot-runtime/target/wasm32-unknown-unknown/release/build/blst-c0594c5f5c837383/out/3e9350ac86c1ff8b-server.o" "-c" "/Users/keeganquigley/.cargo/git/checkouts/blst-5c557c5a4a09c457/78fee18/src/server.c" with args "clang" did not execute successfully (status code exit status: 1).


  warning: build failed, waiting for other jobs to finish...
make: *** [build-release] Error 101
```
</details>

<details>

  <summary>Ubuntu</summary>

  ```rust
ubuntu@ip-172-31-30-69:~/melodot$ make run-dev
./target/release/melodot-node --dev --ws-external
2023-10-10 00:16:00 Melodot Node    
2023-10-10 00:16:00 ✌️  version 0.0.1-5492c90b005    
2023-10-10 00:16:00 ❤️  by DKLee <xiuerdwy@gmail.com>, 2017-2023    
2023-10-10 00:16:00 📋 Chain specification: Development    
2023-10-10 00:16:00 🏷  Node name: sneaky-shake-5432    
2023-10-10 00:16:00 👤 Role: AUTHORITY    
2023-10-10 00:16:00 💾 Database: RocksDb at /tmp/substrateGUjUFp/chains/dev/db/full    
2023-10-10 00:16:00 ⛓  Native runtime: melodot-1 (melodot-1.tx1.au1)    
2023-10-10 00:16:00 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators    
2023-10-10 00:16:00 [0] 💸 generated 1 npos targets    
2023-10-10 00:16:02 🔨 Initializing Genesis block/state (state: 0x7361…efaa, header-hash: 0x1814…7a79)    
2023-10-10 00:16:02 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
2023-10-10 00:16:04 👶 Creating empty BABE epoch changes on what appears to be first startup.    
2023-10-10 00:16:04 Using default protocol ID "sup" because none is configured in the chain specs    
2023-10-10 00:16:04 🏷  Local node identity is: 12D3KooWKbipGur5qNzaPSK7CzjjWQuq4av1U9VTEkxa48tDpT35    
2023-10-10 00:16:04 Starting transaction pool listener.
2023-10-10 00:16:04 💻 Operating system: linux    
2023-10-10 00:16:04 💻 CPU architecture: x86_64    
2023-10-10 00:16:04 💻 Target environment: gnu    
2023-10-10 00:16:04 💻 CPU: Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz    
2023-10-10 00:16:04 💻 CPU cores: 4    
2023-10-10 00:16:04 💻 Memory: 15982MB    
2023-10-10 00:16:04 💻 Kernel: 6.2.0-1012-aws    
2023-10-10 00:16:04 💻 Linux distribution: Ubuntu 22.04.3 LTS    
2023-10-10 00:16:04 💻 Virtual machine: yes    
2023-10-10 00:16:04 📦 Highest known block at #0    
2023-10-10 00:16:04 〽️ Prometheus exporter started at 127.0.0.1:9615    
2023-10-10 00:16:04 Running JSON-RPC HTTP server: addr=127.0.0.1:9933, allowed origins=["*"]    
2023-10-10 00:16:04 Running JSON-RPC WS server: addr=0.0.0.0:9944, allowed origins=["*"]    
2023-10-10 00:16:04 👶 Starting BABE Authorship worker    
2023-10-10 00:16:06 🙌 Starting consensus session on top of parent 0x1814d308b0a5c8ebdbae3ab0191310e24250f23e0546da917af795e0aa477a79    
2023-10-10 00:16:06 🎁 Prepared block for proposing at 1 (0 ms) [hash: 0x7f353cb325843b6ebe68c733fac42262991b7302968e02fbd25de0945c4ad993; parent_hash: 0x1814…7a79; extrinsics (1): [0x969d…e72a]]    
2023-10-10 00:16:06 🔖 Pre-sealed block for proposal at 1. Hash now 0x93a6b5017f8f196814db1d670b9dbb0232687262b59cf5dc387904a611c900f0, previously 0x7f353cb325843b6ebe68c733fac42262991b7302968e02fbd25de0945c4ad993.    
2023-10-10 00:16:06 👶 New epoch 0 launching at block 0x93a6…00f0 (block slot 282816161 >= start slot 282816161).    
2023-10-10 00:16:06 👶 Next epoch starts at slot 282816761    
2023-10-10 00:16:06 ✨ Imported #1 (0x93a6…00f0)    
2023-10-10 00:16:09 💤 Idle (0 peers), best: #1 (0x93a6…00f0), finalized #0 (0x1814…7a79), ⬇ 0 ⬆ 0    
2023-10-10 00:16:12 🙌 Starting consensus session on top of parent 0x93a6b5017f8f196814db1d670b9dbb0232687262b59cf5dc387904a611c900f0    
2023-10-10 00:16:12 🎁 Prepared block for proposing at 2 (0 ms) [hash: 0x53010c84d7a979e3375eb92f40a3b0cbda59699b4b56fdba4ddb86063ad1b498; parent_hash: 0x93a6…00f0; extrinsics (1): [0xee09…6fc2]]    
2023-10-10 00:16:12 🔖 Pre-sealed block for proposal at 2. Hash now 0x66ee4a7b2d68ac8843873a482dee52e15792635f18d543770bc7357500f1de19, previously 0x53010c84d7a979e3375eb92f40a3b0cbda59699b4b56fdba4ddb86063ad1b498.    
2023-10-10 00:16:12 ✨ Imported #2 (0x66ee…de19) 
```
</details>

Build initially fails due to lack of `protoc` crate. This is solved by manually installing with `sudo apt install protobuf-compiler` so you may want to add this to the instructions.

# Tests

<details>

  <summary>All unit tests pass</summary>

  ```rust
running 23 tests
test tests::all_weights_are_recorded_correctly ... ok
test tests::balance_transfer_dispatch_works ... ok
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::bad_extrinsic_not_inserted ... ok
test tests::can_not_pay_for_tx_fee_on_full_lock ... ok
test tests::block_weight_and_size_is_stored_per_tx ... ok
test tests::block_hooks_weight_is_stored ... ok
test tests::block_import_of_bad_state_root_fails - should panic ... ok
test tests::calculating_storage_root_twice_works ... ok
test tests::block_import_works ... ok
test tests::block_import_of_bad_extrinsic_root_fails - should panic ... ok
test tests::block_weight_limit_enforced ... ok
test tests::custom_runtime_upgrade_is_called_before_modules ... ok
test tests::event_from_runtime_upgrade_is_included ... ok
test tests::inherents_fail_validate_block ... ok
test tests::last_runtime_upgrade_was_upgraded_works ... ok
test tests::invalid_inherents_fail_block_execution - should panic ... ok
test tests::custom_runtime_upgrade_is_called_when_using_execute_block_trait ... ok
test tests::invalid_inherent_position_fail - should panic ... ok
test tests::offchain_worker_works_as_expected ... ok
test tests::runtime_upgraded_should_work ... ok
test tests::validate_unsigned ... ok
test tests::valid_inherents_position_works ... ok

test result: ok. 23 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/release/deps/frame_system_ext-6e787ae9fb27dad2)

running 2 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::finalize_works ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_auto_config-060f908b505feef0)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_core_primitives-c546e9f23639b601)

running 5 tests
test sidecar::tests::test_sidecar_check_hash ... ok
test sidecar::tests::test_sidecar_is_unavailability ... ok
test sidecar::tests::test_sidecar_id ... ok
test sidecar::tests::test_sidecar_metadata_id ... ok
test sidecar::tests::test_sidecar_new ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_das_network-de9932c98e300ae5)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_das_network_protocol-67a720e87f0cbaac)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_das_primitives-1c2742a5d921e661)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_das_rpc-9013ec3d0f7a59aa)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_erasure_coding-007d0d547682d749)

running 18 tests
test tests::test_bytes_vec_to_blobs ... ok
test tests::test_bytes_vec_to_blobs_returns_err ... ok
test tests::test_blob_bytes_conversion ... ok
test tests::test_extend_fs_g1 ... ok
test tests::test_order_segments_col ... ok
test tests::test_extend_poly ... ok
test tests::test_bytes_to_segments_round_trip ... ok
test tests::test_order_segments_row ... ok
test tests::test_extend_and_commit_multi ... ok
test tests::test_extend_returns_err ... ok
test tests::test_segment_datas_to_row ... ok
test tests::test_poly_to_segment_vec ... ok
test tests::test_blob_verify_batch ... ok
test tests::test_recover_poly ... ok
test tests::test_extend_segments_col ... ok
test tests::test_recovery_row_from_segments ... ok
test tests::test_proof_multi ... ok
test tests::test_blob_proof ... ok

test result: ok. 18 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.53s

     Running unittests src/lib.rs (target/release/deps/melodot_node-61989392b758aed9)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/release/deps/melodot_node-5e37d355ff746e67)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melodot_runtime-aee48407cbcd7185)

running 4 tests
test config::consensus::__pallet_staking_reward_curve_test_module::reward_curve_piece_count ... ok
test tests::check_whitelist ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test config::consensus::__pallet_staking_reward_curve_test_module::reward_curve_precision ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s

     Running unittests src/lib.rs (target/release/deps/meloxt-082981d74391c510)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/run_examples.rs (target/release/deps/e2e-2e57187cc7278f83)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/pallet_melo_store-0b7fadbc50855701)

running 22 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::should_acquire_and_release_report_lock_correctly ... ok
test tests::should_emit_event_on_successful_registration ... ok
test tests::should_emit_event_on_successful_submission ... ok
test tests::should_fail_when_reporting_for_future_block ... ok
test tests::should_change_metadata_availability_when_reports_exceed_threshold ... ok
test tests::should_fail_when_reporting_duplicate_indices ... ok
test tests::should_fail_when_reporting_outside_window ... ok
test tests::should_fail_when_index_set_empty ... ok
test tests::should_fail_when_reporting_nonexistent_data ... ok
test tests::should_fail_when_submitting_empty_data ... ok
test tests::should_fail_with_mismatched_commitments_count ... ok
test tests::should_fail_when_submitting_invalid_app_id ... ok
test tests::should_increment_app_id_on_consecutive_registrations ... ok
test tests::should_fail_with_mismatched_proofs_count ... ok
test tests::should_have_expected_data_when_reported_unavailable ... ok
test tests::should_send_single_unavailability_report_correctly ... ok
test tests::should_report_unavailable_data_successfully ... ok
test tests::should_submit_data_successfully ... ok
test tests::should_send_unavailability_report_correctly ... ok
test tests::should_fail_when_submitting_data_exceeds_limit ... ok
test tests::should_report_unavailable_data_successfully_with_multiple_app_id_and_data ... ok

test result: ok. 22 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.20s

   Doc-tests frame-executive-ext

running 2 tests
test crates/frame-executive-ext/src/lib.rs - (line 54) ... ok
test crates/frame-executive-ext/src/lib.rs - (line 85) ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.58s

   Doc-tests frame-system-ext

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-auto-config

running 4 tests
test crates/auto-config/src/lib.rs - (line 21) ... ignored
test crates/auto-config/src/lib.rs - (line 36) ... ignored
test crates/auto-config/src/lib.rs - auto_config (line 55) ... ignored
test crates/auto-config/src/lib.rs - auto_config (line 64) ... ignored

test result: ok. 0 passed; 0 failed; 4 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-core-primitives

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-das-network

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-das-network-protocol

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-das-primitives

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-das-rpc

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-erasure-coding

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melodot-node

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melodot-runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests meloxt

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-melo-store

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
</details>

<details>

  <summary>All e2e tests pass</summary>

  ```rust
   Finished release [optimized] target(s) in 4m 54s
     Running `target/release/examples/header`
2023-10-10 00:22:29,916 INFO [header] 🌟 Start get header
2023-10-10 00:22:29,933 INFO [header] ✅ Success Current block_num: 64
2023-10-10 00:22:29,933 INFO [header] 💯 All success : Header
Running example: register_app
   Compiling meloxt v0.0.1 (/home/ubuntu/melodot/crates/meloxt)
    Finished release [optimized] target(s) in 12.64s
     Running `target/release/examples/register_app`
2023-10-10 00:22:42,700 INFO [register_app] 🌟 Start register app 
2023-10-10 00:23:00,830 INFO [register_app] ✅ Success Application created, block hash: 0x4cbb…3ebf
2023-10-10 00:23:00,830 INFO [register_app] 💯 All success : Register app
Running example: submit_blob_tx
   Compiling meloxt v0.0.1 (/home/ubuntu/melodot/crates/meloxt)
    Finished release [optimized] target(s) in 11.06s
     Running `target/release/examples/submit_blob_tx`
2023-10-10 00:23:12,024 INFO [submit_blob_tx] 🌟 Start submit blob tx
2023-10-10 00:23:12,167 INFO [submit_blob_tx] ✅ Success: Commitments bytes: [133, 183, 211, 228, 249, 59, 183, 105, 106, 187, 142, 97, 82, 122, 38, 13, 15, 17, 133, 192, 180, 227, 254, 127, 111, 72, 118, 14, 90, 80, 122, 243, 185, 209, 72, 5, 174, 207, 129, 101, 32, 29, 219, 225, 191, 1, 144, 187]
2023-10-10 00:23:12,285 INFO [submit_blob_tx] ✅ Success: Data submited, tx_hash: 0x3d8e31320da23423471c15fd623d6e471a462394e90d2642f086ba09138f895a
2023-10-10 00:23:12,285 INFO [submit_blob_tx] ⏳ Data not verified yet, current block number: 72
2023-10-10 00:23:18,008 INFO [submit_blob_tx] ⏳ Data not verified yet, current block number: 73
2023-10-10 00:23:24,010 INFO [submit_blob_tx] ✅ Success Data should have been verified by the validators at: 74
2023-10-10 00:23:24,010 INFO [submit_blob_tx] 💯 All success : Submit blob tx
Running example: submit_data
   Compiling meloxt v0.0.1 (/home/ubuntu/melodot/crates/meloxt)
    Finished release [optimized] target(s) in 12.15s
     Running `target/release/examples/submit_data`
2023-10-10 00:23:36,299 INFO [submit_data] 🌟 Start submit data
2023-10-10 00:23:55,551 INFO [submit_data] ✅ Success: Data submited, block hash: 0xefd5…f616
2023-10-10 00:23:55,551 INFO [submit_data] 💯 All success : Submit data
Running example: submit_invalid_blob_tx
   Compiling meloxt v0.0.1 (/home/ubuntu/melodot/crates/meloxt)
    Finished release [optimized] target(s) in 11.51s
     Running `target/release/examples/submit_invalid_blob_tx`
2023-10-10 00:24:07,189 INFO [submit_invalid_blob_tx] 🌟 Start submit invalid blob tx
2023-10-10 00:24:07,333 INFO [submit_invalid_blob_tx] ✅ Success: Commitments bytes: [177, 173, 226, 42, 226, 197, 130, 8, 70, 140, 41, 106, 250, 88, 112, 2, 175, 154, 179, 29, 45, 77, 32, 106, 173, 138, 186, 41, 55, 2, 145, 232, 244, 251, 148, 174, 162, 228, 131, 45, 100, 180, 114, 163, 0, 9, 71, 248]
2023-10-10 00:24:07,334 INFO [submit_invalid_blob_tx] ✅ Success: Submit InvalidBlob, tx failed with code: 10005
2023-10-10 00:24:07,335 INFO [submit_invalid_blob_tx] ✅ Success: Submit InvalidExtrinsic, tx failed with code: 10002
2023-10-10 00:24:07,335 INFO [submit_invalid_blob_tx] ✅ Success: Submit InvalidDataHash, tx failed with code: 10005
2023-10-10 00:24:07,336 INFO [submit_invalid_blob_tx] ✅ Success: Submit InvalidBytesLen, tx failed with code: 10005
2023-10-10 00:24:07,455 INFO [submit_invalid_blob_tx] ✅ Success: Submit invalid commitments, tx failed: "Data verification failed. Please check your data and try again."
2023-10-10 00:24:12,129 INFO [submit_invalid_blob_tx] ✅ Success: Submit invalid proofs, tx failed: "Data verification failed. Please check your data and try again."
2023-10-10 00:24:18,008 INFO [submit_invalid_blob_tx] 💯 All success : Submit invalid blob tx
```
</details>

**Update:** Docker issues resolved.

<details>

  <summary>macOS</summary>

  ```sh
*** Melodot ***
[+] Creating 1/0
 ✔ Network melodot_default  Created                                                                                  0.0s
[+] Running 4/4
 ✔ dev 3 layers [⣿⣿⣿]      0B/0B      Pulled                                                                        53.5s
   ✔ 9d21b12d5fab Pull complete                                                                                      1.7s
   ✔ 12fd99bf0468 Pull complete                                                                                     35.5s
   ✔ a96623d36357 Pull complete                                                                                     31.5s
Error response from daemon: invalid mount config for type "bind": bind source path does not exist: /host_mnt/Users/keeganquigley/melodot/.local
```
</details>

<details>

  <summary>Ubuntu</summary>

  ```sh
Digest: sha256:ef35afb377c0d5ccfd12002d8f49e1dad4d6cdb221ae23992fc112f515d42c67
Status: Downloaded newer image for paritytech/ci-linux:1.71.0-bullseye
Creating melodot_dev_run ... error

ERROR: for melodot_dev_run  Cannot create container for service dev: invalid mount config for type "bind": bind source path does not exist: /home/ubuntu/melodot/.local

ERROR: for dev  Cannot create container for service dev: invalid mount config for type "bind": bind source path does not exist: /home/ubuntu/melodot/.local
ERROR: Encountered errors while bringing up the project.
```
</details>
