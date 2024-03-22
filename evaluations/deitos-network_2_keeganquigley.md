# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Deitos_Network.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Description | Accepted | Link 
| -----: | ----------- | ----------- | -----------
| **0a.** | Deitos Node License | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m2-delivery/LICENSE
| **0a.** | Deitos IP stack License | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-ip/blob/w3f-grant-m2-delivery/LICENSE
| **0a.** | Deitos CLI | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-cli/tree/w3f-grant-m2-delivery/LICENSE
| **0a.** | Deitos Gate License | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-gate/tree/w3f-grant-m2-delivery/LICENSE
| **0a.** | Deitos Verifier License | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-verifier/blob/w3f-grant-m2-delivery/LICENSE
| **0b.** | `pallet-deitos-fs` README Documentation | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m2-delivery/pallets/deitos-fs/README.md 
| **0b.** | `pallet-deitos-fs` Inline Documentation | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m2-delivery/pallets/deitos-fs/src/lib.rs
| **0b.** | Deitos IP Documentation | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-ip/blob/w3f-grant-m2-delivery/README.md
| **0c.** | `pallet-deitos-fs` Unit Testing | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-node/tree/w3f-grant-m2-delivery/pallets/deitos-fs/src/tests
| **0c.** | `pallet-deitos-fs` User Guide | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m2-delivery/docs/pallet-deitos-user-guide.md (section 5)
| **0c.** |  Deitos IP Docker User Guide | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-ip/blob/w3f-grant-m2-delivery/README.md
| **0d.** | Deitos IP | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-ip/blob/w3f-grant-m2-delivery
| **0e.** | Article #1 | <ul><li>[x] </li></ul> | https://forum.polkadot.network/t/deitos-network-forging-a-new-path-in-big-data-and-ai-with-blockchain-technology/4961
| **0e.** | Article #2 | <ul><li>[x] </li></ul> | https://medium.com/@deitos.network/deitos-network-web3-foundation-grant-f267cb10e7a8
| **2.** |   File Uploads (Client Interface)  | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-cli/tree/w3f-grant-m2-delivery
| **3.** |  File Upload Verification (Provider Side) | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-verifier/tree/w3f-grant-m2-delivery
| **4.** |  Data Integrity Protocol | <ul><li>[x] </li></ul> | https://github.com/Deitos-Network/deitos-node/tree/w3f-grant-m2-delivery/pallets/deitos-fs/lib.rs

# General Notes

Benchmarking tests pass:

```rust
running 21 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::ip::test_correct_ip_registration ... ok
test benchmarking::benchmarks::benchmark_tests::test_benchmarks ... ok
test tests::ip::test_fail_ip_registration_already_exists ... ok
test tests::agreements::test_consumer_accept_agreement ... ok
test tests::agreements::test_consumer_request_agreement ... ok
test tests::agreements::test_consumer_reject_proposal ... ok
test tests::agreements::test_ip_accept_agreement ... ok
test tests::ip::test_register_unregister_register_ip ... ok
test tests::ip::test_unregister_ip ... ok
test tests::ip::test_update_storage_cost_per_unit ... ok
test tests::ip::test_fail_ip_unregister_agreement_in_progress ... ok
test tests::ip::test_register_update_deposit_amount_unregister_ip ... ok
test tests::ip::test_update_ip_storage ... ok
test tests::ip::test_update_ip_status ... ok
test tests::payments::test_consumer_prepay_installment ... ok
test tests::payments::test_consumer_prepay_multiple ... ok
test tests::payments::test_ip_withdraw ... ok
test tests::payments::test_ip_terminate_nonpay ... ok
test tests::rating::test_consumer_submit_feedback ... ok
test tests::payments::test_ip_withdraw_completely ... ok
```
Unit tests all passing but with some warnings:

```rust
   Compiling pallet-transaction-payment-rpc v4.0.0-dev (https://github.com/paritytech/polkadot-sdk?branch=release-polkadot-v1.4.0#fcfdb98a)
warning: the item `ConstU32` is imported redundantly
  --> pallets/deitos-fs/src/tests/mod.rs:20:14
   |
17 | use super::*;
   |     -------- the item `ConstU32` is already imported here
...
20 |     traits::{ConstU32, ConstU64},
   |              ^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: the item `PalletId` is imported redundantly
  --> pallets/deitos-fs/src/tests/mod.rs:21:5
   |
17 | use super::*;
   |     -------- the item `PalletId` is already imported here
...
21 |     PalletId,
   |     ^^^^^^^^

warning: the item `StorageSizeMB` is imported redundantly
  --> pallets/deitos-fs/src/tests/fs.rs:19:5
   |
17 | use super::*;
   |     -------- the item `StorageSizeMB` is already imported here
18 | use frame_system::pallet_prelude::BlockNumberFor;
19 | use pallet_deitos::StorageSizeMB;
   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: the item `Event` is imported redundantly
  --> pallets/deitos-fs/src/tests/fs.rs:22:14
   |
17 | use super::*;
   |     -------- the item `Event` is already imported here
...
22 |     pallet::{Event, Files},
   |              ^^^^^

warning: the item `Files` is imported redundantly
  --> pallets/deitos-fs/src/tests/fs.rs:22:21
   |
17 | use super::*;
   |     -------- the item `Files` is already imported here
...
22 |     pallet::{Event, Files},
   |                     ^^^^^

warning: `pallet-deitos-fs` (lib test) generated 5 warnings
   Compiling wasm-opt v0.116.0
   Compiling substrate-wasm-builder v5.0.0-dev (https://github.com/paritytech/polkadot-sdk?branch=release-polkadot-v1.4.0#fcfdb98a)
   Compiling deitos-runtime v0.0.3 (/Users/keeganquigley/deitos-node/runtime)
   Compiling rocksdb v0.21.0
   Compiling kvdb-rocksdb v0.19.0
   Compiling sc-client-db v0.10.0-dev (https://github.com/paritytech/polkadot-sdk?branch=release-polkadot-v1.4.0#fcfdb98a)
   Compiling sc-service v0.10.0-dev (https://github.com/paritytech/polkadot-sdk?branch=release-polkadot-v1.4.0#fcfdb98a)
   Compiling sc-cli v0.10.0-dev (https://github.com/paritytech/polkadot-sdk?branch=release-polkadot-v1.4.0#fcfdb98a)
    Finished `test` profile [unoptimized + debuginfo] target(s) in 5m 36s
     Running unittests src/main.rs (target/debug/deps/deitos_node-840c01e3acff905f)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/deitos_runtime-846798178ff85305)

running 1 test
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_deitos-9fc0a10903db9a8a)

running 20 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::agreements::test_ip_accept_agreement ... ok
test tests::ip::test_correct_ip_registration ... ok
test tests::agreements::test_consumer_reject_proposal ... ok
test tests::agreements::test_consumer_request_agreement ... ok
test tests::ip::test_fail_ip_registration_already_exists ... ok
test tests::agreements::test_consumer_accept_agreement ... ok
test tests::ip::test_fail_ip_unregister_agreement_in_progress ... ok
test tests::ip::test_register_unregister_register_ip ... ok
test tests::ip::test_update_storage_cost_per_unit ... ok
test tests::ip::test_update_ip_storage ... ok
test tests::ip::test_update_ip_status ... ok
test tests::ip::test_unregister_ip ... ok
test tests::ip::test_register_update_deposit_amount_unregister_ip ... ok
test tests::payments::test_consumer_prepay_installment ... ok
test tests::payments::test_consumer_prepay_multiple ... ok
test tests::payments::test_ip_terminate_nonpay ... ok
test tests::payments::test_ip_withdraw ... ok
test tests::rating::test_consumer_submit_feedback ... ok
test tests::payments::test_ip_withdraw_completely ... ok

test result: ok. 20 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.04s

     Running unittests src/lib.rs (target/debug/deps/pallet_deitos_fs-bdbf849f0e366a9c)

running 4 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::fs::file_is_correctly_registered ... ok
test tests::fs::file_is_not_verified ... ok
test tests::fs::file_is_correctly_verified ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

   Doc-tests deitos_runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_deitos

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_deitos_fs

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
