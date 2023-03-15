# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polket_toearnfun.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/polketio/polket-node/blob/8053f5a15c27784b7499bee88b8099d28eff8612/LICENSE) |  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [gitbook](https://polketio.gitbook.io/toearnfun/) | Ok. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Rust Unit Test](https://github.com/polketio/polket-node/tree/milestone-02-delivery#testing), [ToEarnFun Demo Guide](https://polketio.gitbook.io/toearnfun/guides/how-to-run-toearnfun-app) | Ok. |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockfile](https://github.com/polketio/polket-node/blob/8053f5a15c27784b7499bee88b8099d28eff8612/Dockerfile), [Run in docker](https://github.com/polketio/polket-node/tree/8053f5a15c27784b7499bee88b8099d28eff8612#run-full-node-on-testnet) | Ok. |
| 0e. | Article | <ul><li>[x] </li></ul> | [Getting Started](https://polketio.gitbook.io/toearnfun/guide/getting-started) | Ok. |
| 1. | Substrate module: pallet-buyback | <ul><li>[x] </li></ul> | [Source code link](https://github.com/polketio/polket-node/tree/milestone-02-delivery/pallets/buyback) | Ok. |
| 2. | Substrate module: pallet-vfe-order | <ul><li>[x] </li></ul> | [Source code link](https://github.com/polketio/polket-node/tree/milestone-02-delivery/pallets/vfe-order) | Ok. |
| 3. | Flutter app: VFE Buyback Pool | <ul><li>[x] </li></ul> | [Source code link](https://github.com/polketio/toearnfun_flutter_app/tree/milestone-02-delivery) | Ok. |
| 4. | Flutter app: VFE Market | <ul><li>[x] </li></ul> | [Source code link](https://github.com/polketio/toearnfun_flutter_app/tree/milestone-02-delivery) | Ok. |
| 5. | Android test release | <ul><li>[x] </li></ul> | [simulated_device.dart](https://github.com/polketio/toearnfun_flutter_app/releases/tag/1.0.0-alpha) | Ok. |

# General Notes

Branch is `milestone-02-delivery`.

I was able to operate the app both on a local node as well as the PNT testnet. I was able to complete all the modules in the test guide in order to:

1. Register and bind/unbind devices
2. Upload training reports
3. Charge "batteries"
4. Level up
5. Increase VFE ability
6. Transfer VFE/FUN
7. Make Order
8. Create and participate in buyback plan

**Polkadot-JS**

I was able to manually use all the functions on Polkadot.js as well.

## Tests

All unit tests pass:
```rust
running 8 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::payback_no_participant_should_work ... ok
test tests::cancel_plan_unit_test ... ok
test tests::payback_and_transfer_unit_test ... ok
test tests::seller_register_unit_test ... ok
test tests::payback_and_burn_unit_test ... ok
test tests::create_plan_unit_test ... ok
test tests::buyback_plan_clear_unit_test ... ok

test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.07s

     Running unittests src/lib.rs (target/debug/deps/pallet_currencies-7dc23fc885873967)

running 5 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::compile_success ... ok
test tests::fungibles_inspect_unit_test ... ok
test tests::create_asset_should_work ... ok
test tests::transfer_unit_test ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

     Running unittests src/lib.rs (target/debug/deps/pallet_currencies_rpc-72bb74d712f15919)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_currencies_rpc_runtime_api-4487a081dfe293f6)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_identity_extra-bcfc08d919ac0bc4)

running 4 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::set_identity_role_should_work ... ok
test tests::identity_support_impl_should_work ... ok
test tests::review_identity_role_should_work ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

     Running unittests src/lib.rs (target/debug/deps/pallet_support-7dc6c2e842c7ae08)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_unique_id-da5b29a9b6db9574)

running 4 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::encode_test ... ok
test tests::generate_object_id_should_work ... ok
test tests::generate_over_half_of_max_value_should_not_work ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

     Running unittests src/lib.rs (target/debug/deps/pallet_vfe-06f91b200ea477f1)

running 20 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::create_vfe_brand_unit_test ... ok
test tests::approve_mint_unit_test ... ok
test tests::producer_register_unit_test ... ok
test tests::producer_owner_change_unit_test ... ok
test tests::bind_device_should_work ... ok
test tests::register_device_unit_test ... ok
test tests::set_incentive_token_unit_test ... ok
test tests::training_report_encode_unit_test ... ok
test tests::generate_bind_device_message_unit_test ... ok
test tests::level_up_unit_test ... ok
test tests::verify_bind_device_message_unit_test ... ok
test tests::increase_ability_unit_test ... ok
test tests::verify_training_data_signature ... ok
test tests::restore_power_unit_test ... ok
test tests::user_restore_unit_test ... ok
test tests::transfer_unit_test ... ok
test tests::bind_device_should_not_work ... ok
test tests::upload_training_report_unit_test ... ok
test tests::global_energy_recovery_and_daily_earned_reset_unit_test ... ok

test result: ok. 20 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.34s

     Running unittests src/lib.rs (target/debug/deps/pallet_vfe_order-22564a835acac164)

running 5 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::order_create ... ok
test tests::order_take_test ... ok
test tests::order_remove_test ... ok
test tests::order_create_test ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_vfe_rpc-76db1ffe67b8112a)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_vfe_rpc_runtime_api-69b1158b8ea3c2c9)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/polket_node-b413f54b186a51f8)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/polket_node-b0c37e1efbe1619d)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/polket_primitives-03acb3cd85e22626)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/polket_runtime-b4812a9bd4bcabb9)

running 3 tests
test __pallet_staking_reward_curve_test_module::reward_curve_piece_count ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test __pallet_staking_reward_curve_test_module::reward_curve_precision ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.20s

     Running unittests src/lib.rs (target/debug/deps/runtime_common-9991697fa81a41cd)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-buyback

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-currencies

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-currencies-rpc

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-currencies-rpc-runtime-api

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-identity-extra

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-support

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-unique-id

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-vfe

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-vfe-order

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-vfe-rpc

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-vfe-rpc-runtime-api

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests polket-node

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests polket-primitives

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests polket-runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests runtime-common

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
Many warnings in `cargo clippy`

PLEASE NOTE: No security audits have been performed as a part of this evaluation.
