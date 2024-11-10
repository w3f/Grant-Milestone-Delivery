# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Melodot.md
- **Milestone:** 4
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/ZeroDAO/melodot/blob/43c87aabd84700674b90261528e3745f35ec409d/LICENSE) | Apache License 2.0 |
| **0b.** | Documentation             | <ul><li>[x] </li></ul> | [ZeroDAO/melodot-docs](https://github.com/ZeroDAO/melodot-docs/tree/ebe5c36782354b9c9b75e0a6e352379479049eb3) | See also https://docs.melodot.io/guide/node/strating-a-farmer-client/ |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [FARMER_TESTING.md](https://github.com/ZeroDAO/melodot/blob/43c87aabd84700674b90261528e3745f35ec409d/FARMER_TESTING.md) | — |
| **0d.** | Docker                    | <ul><li>[x] </li></ul> | [README](https://github.com/ZeroDAO/melodot/blob/43c87aabd84700674b90261528e3745f35ec409d/README.md#5-docker) | — |
| **0e.** | Article                   | <ul><li>[x] </li></ul> | [medium.com](https://melodot.medium.com/making-polkadot-the-global-consensus-layer-aefe6d6836ef) | — |
| 1.      | melo_farmer               | <ul><li>[x] </li></ul> | [/farmer](https://github.com/ZeroDAO/melodot/tree/43c87aabd84700674b90261528e3745f35ec409d/farmer) | Implementation of the farmer client, used to connect to the melodot-client, solve challenges, and distribute and store data. |
| 2.      | melo_PoSpace              | <ul><li>[x] </li></ul> | [crates/proof-of-space](https://github.com/ZeroDAO/melodot/tree/43c87aabd84700674b90261528e3745f35ec409d/crates/proof-of-space), [crates/pallet-farmers-fortune](https://github.com/ZeroDAO/melodot/tree/43c87aabd84700674b90261528e3745f35ec409d/crates/pallet-farmers-fortune) | — |


## General Notes

### `make test` output

```sh
     Running unittests src/lib.rs (target/release/deps/melo_auto_config-3e23d67a15c2a4a8)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_core_primitives-b2ca1a5dbba70a11)

running 11 tests
test header::extension::tests::test_header_extension_start_at ... ok
test header::extension::tests::test_app_lookup_get_lookup ... ok
test reliability::tests::test_app_confidence ... ok
test reliability::tests::test_max_consecutive_success_count ... ok
test reliability::tests::test_block_confidence ... ok
test reliability::tests::test_reliability_id_get_confidence ... ok
test reliability::tests::test_reliability_success_count ... ok
test reliability::tests::test_set_and_get_last_processed_block ... ok
test reliability::tests::test_set_sample_app ... ok
test reliability::tests::test_set_sample_block ... ok
test reliability::tests::test_set_sample_with_empty_commitments ... ok

test result: ok. 11 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_das_db-b3fe68f86c66d23e)

running 5 tests
test sqlite::tests::test_get ... ok
test sqlite::tests::test_set ... ok
test sqlite::tests::test_contains ... ok
test sqlite::tests::test_remove ... ok
test sqlite::tests::test_compare_and_set ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_das_network-b9bafc95544baf52)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_das_network_protocol-fd671fd63129e8d2)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_das_primitives-8d403733423791be)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_das_rpc-ba7c65fa4d391117)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_daser-fde49a0f6acd0d60)

running 7 tests
test tx_pool_handler::tests::test_full_col_missing_data ... ok
test tx_pool_handler::tests::test_full_col_success ... ok
test network::tests::test_rows_values_set_handler_empty ... ok
test network::tests::test_verify_values_invalid ... ok
test network::tests::test_verify_values_valid ... ok
test network::tests::test_rows_values_set_handler ... ok
test network::tests::test_rows_values_set_handler_unavailability ... ok

test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 10.64s

     Running unittests src/lib.rs (target/release/deps/melo_erasure_coding-3ea14bd04e0d256b)

running 20 tests
test tests::test_bytes_vec_to_blobs ... ok
test tests::test_bytes_vec_to_blobs_returns_err ... ok
test tests::test_blob_bytes_conversion ... ok
test tests::test_extend_poly ... ok
test tests::test_extend_fs_g1 ... ok
test tests::test_order_segments_col ... ok
test tests::test_extend_and_commit_multi ... ok
test tests::test_bytes_to_segments_round_trip ... ok
test tests::test_extend_returns_err ... ok
test tests::test_order_segments_row ... ok
test tests::test_recover_poly ... ok
test tests::test_blob_verify_batch ... ok
test tests::test_segment_datas_to_row ... ok
test tests::test_poly_to_segment_vec ... ok
test tests::test_proof_multi ... ok
test tests::test_recover_poly_and_extend_poly ... ok
test tests::test_extend_segments_col ... ok
test tests::test_recovery_row_from_segments ... ok
test tests::test_blob_proof ... ok
test tests::test_bytes_to_segments ... ok

test result: ok. 20 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 15.45s

     Running unittests src/lib.rs (target/release/deps/melo_proof_of_space-840cd056bee65cb2)

running 43 tests
test piece::tests::test_piece_creation_and_key ... ok
test piece::tests::test_piece_position ... ok
test piece::tests::test_piece_save ... ok
test utils::tests::test_fold_hash ... ok
test solution::tests::test_is_index_valid ... ok
test utils::tests::test_select_indices_basic ... ok
test utils::tests::test_select_indices_boundary_conditions ... ok
test solution::tests::test_find_solutions_with_z ... ok
test utils::tests::test_select_indices_consecutive_ones ... ok
test utils::tests::test_select_indices_empty ... ok
test utils::tests::test_select_indices_invalid_n ... ok
test utils::tests::test_select_indices_n_too_large ... ok
test utils::tests::test_select_indices_out_of_bounds ... ok
test utils::tests::test_select_indices_wraparound ... ok
test utils::tests::test_validate_leading_zeros ... ok
test utils::tests::test_validate_leading_zeros_empty_data ... ok
test utils::tests::test_validate_leading_zeros_exact_zeros ... ok
test utils::tests::test_validate_leading_zeros_not_enough_zeros ... ok
test utils::tests::test_xor_byte_slices ... ok
test utils::tests::test_xor_byte_slices_alternating ... ok
test utils::tests::test_xor_byte_slices_one_zero_slice ... ok
test utils::tests::test_xor_byte_slices_unequal_length ... ok
test y_value_manager::tests::test_x_value_manager_key ... ok
test y_value_manager::tests::test_x_value_manager_new ... ok
test y_value_manager::tests::test_x_value_manager_new_and_key ... ok
test y_value_manager::tests::test_x_value_manager_save ... ok
test y_value_manager::tests::test_ypos_from_u32_even ... ok
test y_value_manager::tests::test_ypos_from_u32_odd ... ok
test y_value_manager::tests::test_calculate_y ... ok
test y_value_manager::tests::test_ypos_is_pair ... ok
test y_value_manager::tests::test_ypos_is_pair_correct ... ok
test y_value_manager::tests::test_ypos_is_pair_incorrect ... ok
test y_value_manager::tests::test_ypos_left_to_u32 ... ok
test y_value_manager::tests::test_ypos_match_x_pos ... ok
test y_value_manager::tests::test_ypos_match_x_pos_left_to_right ... ok
test y_value_manager::tests::test_x_value_manager_match_cells ... ok
test y_value_manager::tests::test_ypos_match_x_pos_right_to_left ... ok
test y_value_manager::tests::test_ypos_right_to_u32 ... ok
test y_value_manager::tests::test_ypos_to_and_from_u32 ... ok
test z_value_manager::tests::test_verify ... ok
test z_value_manager::tests::test_calculate_z ... ok
test z_value_manager::tests::test_get ... ok
test solution::tests::test_solution_verify ... ok

test result: ok. 43 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.12s

     Running unittests src/main.rs (target/release/deps/melodot_farmer-de514e1c20f33577)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/release/deps/melodot_light-350e7033ec4fc390)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/release/deps/melodot_light_e2e-c24d9a304fc6a560)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melodot_node-5d5e113b9b3c50fd)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/release/deps/melodot_node-d9fd71082db84de1)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melodot_runtime-57e52c7ac2d71d0d)

running 4 tests
test config::consensus::__pallet_staking_reward_curve_test_module::reward_curve_piece_count ... ok
test tests::check_whitelist ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test config::consensus::__pallet_staking_reward_curve_test_module::reward_curve_precision ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/release/deps/meloxt-34d56717a60084fe)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/run_examples.rs (target/release/deps/e2e-1042708120dc984c)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/pallet_farmers_fortune-a254ac1e56fdb913)

running 3 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test test::claim_reward_works_for_different_farmer_ids ... ok
test test::claim_reward_should_work ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.07s

     Running unittests src/lib.rs (target/release/deps/pallet_melo_store-88592731296cef95)

running 21 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::should_emit_event_on_successful_registration ... ok
test tests::should_acquire_and_release_report_lock_correctly ... ok
test tests::should_emit_event_on_successful_submission ... ok
test tests::should_change_metadata_availability_when_reports_exceed_threshold ... ok
test tests::should_fail_when_index_set_empty ... ok
test tests::should_fail_when_reporting_duplicate_indices ... ok
test tests::should_fail_when_reporting_outside_window ... ok
test tests::should_fail_when_reporting_nonexistent_data ... ok
test tests::should_fail_when_submitting_empty_data ... ok
test tests::should_fail_with_mismatched_commitments_count ... ok
test tests::should_fail_when_reporting_for_future_block ... ok
test tests::should_fail_when_submitting_invalid_app_id ... ok
test tests::should_increment_app_id_on_consecutive_registrations ... ok
test tests::should_fail_with_mismatched_proofs_count ... ok
test tests::should_have_expected_data_when_reported_unavailable ... ok
test tests::should_report_unavailable_data_successfully ... ok
test tests::should_send_single_unavailability_report_correctly ... ok
test tests::should_submit_data_successfully ... ok
test tests::should_fail_when_submitting_data_exceeds_limit ... ok
test tests::should_report_unavailable_data_successfully_with_multiple_app_id_and_data ... ok

test result: ok. 21 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.17s

   Doc-tests frame-executive-ext

running 2 tests
test crates/frame-executive-ext/src/lib.rs - (line 54) ... ok
test crates/frame-executive-ext/src/lib.rs - (line 85) ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.82s

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

   Doc-tests melo-das-db

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

   Doc-tests melo-daser

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-erasure-coding

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-proof-of-space

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

   Doc-tests pallet-farmers-fortune

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-melo-store

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```


### `make e2e` output 

```sh
> make e2e         
./target/release/e2e
Running example: header
   Compiling melodot-runtime v0.0.1 (/home/melodot/melodot/runtime)
   Compiling melo-das-rpc v0.0.1 (/home/melodot/melodot/crates/das-rpc)
   Compiling meloxt v0.0.1 (/home/melodot/melodot/crates/meloxt)
    Finished release [optimized] target(s) in 2m 23s
     Running `target/release/examples/header`
 INFO 🌟 Start get header    
 INFO ✅ Success Current block_num: 378    
 INFO 💯 All success : Header    
Running example: register_app
   Compiling meloxt v0.0.1 (/home/melodot/melodot/crates/meloxt)
    Finished release [optimized] target(s) in 10.54s
     Running `target/release/examples/register_app`
 INFO 🌟 Start register app     
 INFO ✅ Success Application created, block hash: 0xab07…1745    
 INFO 💯 All success : Register app    
Running example: submit_blob_tx
   Compiling meloxt v0.0.1 (/home/melodot/melodot/crates/meloxt)
    Finished release [optimized] target(s) in 9.65s
     Running `target/release/examples/submit_blob_tx`
 INFO 🌟 Start submit blob tx    
 INFO ✅ Success: Commitments bytes: [169, 131, 21, 81, 142, 187, 142, 175, 15, 224, 178, 17, 59, 132, 140, 228, 110, 106, 131, 130, 224, 225, 68, 104, 221, 28, 101, 226, 219, 225, 178, 254, 240, 234, 59, 132, 114, 32, 253, 249, 254, 140, 124, 185, 35, 69, 231, 227]    
 INFO ✅ Success: Data submited, tx_hash: 0xea5801dd317f00bfa691ad8bf3f4c32af59c4a8ce74d5822afdbc22966168f52    
 INFO ⏳ Data not verified yet, current block number: 385    
 INFO ⏳ Data not verified yet, current block number: 386    
 INFO ✅ Success Data should have been verified by the validators at: 387    
 INFO 💯 All success : Submit blob tx    
Running example: submit_data
   Compiling meloxt v0.0.1 (/home/melodot/melodot/crates/meloxt)
    Finished release [optimized] target(s) in 11.37s
     Running `target/release/examples/submit_data`
 INFO 🌟 Start submit data    
 INFO ✅ Success: Data submited, block hash: 0x7e18…4488    
 INFO 💯 All success : Submit data    
Running example: submit_invalid_blob_tx
   Compiling meloxt v0.0.1 (/home/melodot/melodot/crates/meloxt)
    Finished release [optimized] target(s) in 10.63s
     Running `target/release/examples/submit_invalid_blob_tx`
 INFO 🌟 Start submit invalid blob tx    
 INFO ✅ Success: Commitments bytes: [134, 125, 87, 196, 79, 123, 17, 54, 205, 167, 196, 99, 221, 244, 128, 160, 164, 70, 188, 91, 174, 152, 132, 1, 25, 212, 106, 99, 253, 254, 131, 104, 176, 245, 227, 30, 11, 216, 50, 250, 131, 127, 1, 182, 56, 245, 95, 157]    
 INFO ✅ Success: Submit InvalidExtrinsic, tx failed with code: 10002    
 INFO ✅ Success: Submit InvalidBytesLen, tx failed with code: 10005    
 INFO ✅ Success: Submit invalid commitments, tx failed: "Data verification failed. Please check your data and try again."    
 INFO ✅ Success: Submit invalid proofs, tx failed: "Data verification failed. Please check your data and try again."    
 INFO 💯 All success : Submit invalid blob tx    
```