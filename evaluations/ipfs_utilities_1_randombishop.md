# Evaluation



- **Status:** ACCEPTED
- **Application Document:** [IPFS Utilities](https://github.com/w3f/Grants-Program/blob/master/applications/ipfs_utilities.md)
- **Milestone:** 1
- **Kusama Identity:** randombishop (https://sub.id/5Gnixfp6vnznRkr91JgwkxYnCJCyHr8EaBzYfFsUKcTMzVYF)
- **Previously successfully merged evaluation:** 

| Number | Deliverable                                          | Accepted | Link                                                                                                                                                                   | Evaluation Notes                                                                                                   |
|-------:|------------------------------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
|    0a. | License                                              | Yes      | [LICENCE](https://github.com/TDSoftware/substrate-ipfs/blob/milestone-1/LICENSE-APACHE2)                                                                               | Apache 2.0                                                                                                         |
|    0b. | Documentation                                        | Yes      | [Node](https://github.com/TDSoftware/substrate-ipfs/blob/milestone-1/README.md) [Frontend](https://github.com/TDSoftware/substrate-ipfs-ui/blob/milestone-1/README.md) | Very minimal documentation                                                                                         |
|    0c. | Testing                                              | Yes      |                                                                                                                                                                        | The provided links don't indicate how to run the tests but managed to run the tests on substrate pallets and libs. |
|     1. | Implementation of the IPFS upload extrinsic          | Yes      | https://github.com/TDSoftware/substrate-ipfs/blob/milestone-1/frame/tds-ipfs/src/lib.rs                                                                                | OK                                                                                                                 |
|     2. | Implementation to retrieve CID and store it on chain | Yes      | https://github.com/TDSoftware/substrate-ipfs/blob/milestone-1/frame/tds-ipfs/                                                                                          | OK                                                                                                                 |
|     3. | Implementation of a web3 client                      | Yes      | https://github.com/TDSoftware/substrate-ipfs-ui/tree/milestone-1                                                                                                       | OK                                                                                                                 |
|     4. | Benchmark and adjustments                            | No       | https://github.com/TDSoftware/substrate-ipfs-ui/tree/milestone-1                                                                                                       | OK                                                                                                                 |


## Repositories
(Apache 2.0 licensed)

|      Component | Repo                                            | Language |
|---------------:|-------------------------------------------------|----------|
| Substrate node | https://github.com/TDSoftware/substrate-ipfs    | Rust     |
|       Frontend | https://github.com/TDSoftware/substrate-ipfs-ui | JS       |



## General Notes

* Testing frame/tds-ipfs-core:
'''
Running unittests src/lib.rs (/Users/w3f/pycharm_workspace/substrate-ipfs/target/debug/deps/pallet_tds_ipfs_core-eb8ffdf7599efb4f)
running 8 tests
test tests::test_connect ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_add_bytes ... ok
test tests::test_cat_bytes ... ok
test tests::test_disconnect ... ok
test tests::test_generate_id ... ok
test tests::test_addresses_to_utf8_safe_bytes ... ok
test tests::test_multiple_bytes_to_utf8_safe_bytes ... ok
test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s
'''

* Testing frame/tds-ipfs:
'''
Running unittests src/lib.rs (/Users/w3f/pycharm_workspace/substrate-ipfs/target/debug/deps/pallet_tds_ipfs-3a493fe1c17f422b)
running 1 test
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
'''

* Testing frame/tds-ipfs:
```
Running unittests src/lib.rs (/Users/w3f/pycharm_workspace/substrate-ipfs/target/debug/deps/sp_runtime-1f44f30367dc747b)
running 56 tests
test generic::era::tests::era_initialization_works ... ok
test generic::era::tests::current_less_than_phase ... ok
test generic::era::tests::immortal_works ... ok
test generic::era::tests::long_period_mortal_codec_works ... ok
test generic::era::tests::quantized_clamped_era_initialization_works ... ok
test generic::era::tests::mortal_codec_works ... ok
test generic::era::tests::mortal_birth_death_works ... ok
test generic::digest::tests::should_serialize_digest ... ok
test generic::header::tests::should_deserialize_number ... ok
test generic::digest::tests::digest_item_type_info ... ok
test generic::header::tests::should_serialize_numbers ... ok
test generic::unchecked_extrinsic::tests::badly_signed_check_should_fail ... ok
test generic::tests::non_system_digest_item_encoding ... ok
test generic::tests::system_digest_item_encoding ... ok
test generic::unchecked_extrinsic::tests::large_bad_prefix_should_work ... ok
test generic::unchecked_extrinsic::tests::encoding_matches_vec ... ok
test generic::unchecked_extrinsic::tests::conversion_to_opaque ... ok
test generic::header::tests::ensure_format_is_unchanged ... ok
test generic::unchecked_extrinsic::tests::signed_check_should_work ... ok
test generic::unchecked_extrinsic::tests::large_signed_codec_should_work ... ok
test generic::unchecked_extrinsic::tests::invalid_length_prefix_is_detected ... ok
test generic::unchecked_extrinsic::tests::unsigned_codec_should_work ... ok
test generic::unchecked_extrinsic::tests::unsigned_check_should_work ... ok
test generic::unchecked_extrinsic::tests::signed_codec_should_work ... ok
test curve::test_calculate_for_fraction_times_denominator ... ok
test offchain::storage::tests::should_mutate ... ok
test offchain::ipfs::tests::basic_metadata_request_and_response ... ok
test offchain::storage::tests::should_set_and_get ... ok
test offchain::http::tests::should_send_a_post_request ... ok
test offchain::http::tests::should_send_a_basic_request_and_get_response ... ok
test offchain::http::tests::should_send_huge_response ... ok
test offchain::storage_lock::tests::storage_lock_and_forget ... ok
test offchain::storage_lock::tests::storage_lock_and_let_expire_and_lock_again ... ok
test offchain::storage_lock::tests::extend_active_lock ... ok
test offchain::storage_lock::tests::storage_lock_write_unlock_lock_read_unlock ... ok
test tests::dispatch_error_encoding ... ok
test tests::dispatch_error_equality ... ok
test tests::opaque_extrinsic_serialization ... ok
test traits::tests::app_verify_works ... ok
test traits::tests::bad_try_from_account_should_fail ... ok
test tests::batching_does_not_panic_while_thread_is_already_panicking - should panic ... ok
test tests::batching_still_finishes_when_not_called_directly - should panic ... ok
test traits::tests::ecdsa_verify_works ... ok
test tests::multi_signature_ecdsa_verify_works ... ok
test traits::tests::into_account_truncating_should_work ... ok
test traits::tests::into_account_truncating_with_fill_should_work ... ok
test traits::tests::trailing_zero_should_work ... ok
test traits::tests::try_from_account_with_fill_should_work ... ok
test traits::tests::try_from_account_should_work ... ok
test traits::tests::try_into_account_should_work ... ok
test transaction_validity::tests::builder_should_prefix_the_tags ... ok
test traits::tests::try_into_sub_account_should_work ... ok
test transaction_validity::tests::should_encode_and_decode ... ok
test tests::execute_and_generate_proof_works ... ok
test curve::test_multiply_by_rational_saturating ... ok
test runtime_logger::tests::ensure_runtime_logger_respects_host_max_log_level ... ok

test result: ok. 56 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.73s

   Doc-tests sp-runtime

running 8 tests
test src/traits.rs - traits::BlockNumberProvider::current_block_number (line 1913) ... ignored
test src/offchain/http.rs - offchain::http (line 28) - compile ... ok
test src/offchain/ipfs.rs - offchain::ipfs (line 11) - compile ... ok
test src/offchain/storage_lock.rs - offchain::storage_lock (line 37) ... ok
test src/traits.rs - traits::morph_types (line 326) ... ok
test src/lib.rs - assert_eq_error_rate (line 799) ... ok
test src/traits.rs - traits::impl_opaque_keys (line 1724) ... ok
test src/lib.rs - assert_eq_error_rate (line 807) ... ok

test result: ok. 7 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 1.79s
```

* Running benchmark:
```
✔ Enter the websocket address of the node you want to connect to. · ws://127.0.0.1:9944
✔ Enter the amount of files you want to create. · 5
✔ Enter the size of the files you want to create in KB. The limit is 768 KB. · 20
✔ Select the CID version you want to use. · CIDv0
Creating 5 test accounts and funding them... This can take a moment...
Uploading 5 files...
Extrinsic for File 0 submitted in: : 54.33ms
Extrinsic for File 1 submitted in: : 49.473ms
Extrinsic for File 2 submitted in: : 48.074ms
Extrinsic for File 3 submitted in: : 48.325ms
Extrinsic for File 4 submitted in: : 47.274ms
Returned file for 5EvJZ6XvqP2siynWh6TbFnrppQTZseSG1KWeq6kTkEewyfFp in: : 4.135s
Returned file for 5D8EpcRbbGXzCNL31SDR5smiS9ymiqgvnQ9iFUzocJV4WUBb in: : 3.935s
Returned file for 5GEgj9K2D4n8SbUFTLnqBJM1TXdPhTiSALYow1EWycvaBYwq in: : 3.983s
Returned file for 5FsLUdJXhBSGmXfCjNRriyqfKjSgexjqiuLZXbrNmqiJbWKm in: : 4.031s
Returned file for 5H47invpYUKCiQyQtnLeiEEgJZYYCs5ktUmfa8razhe2aMhP in: : 4.081s
```

## Improvement suggestions

* Node documentation is basic pointers to the standard substrate template docs, would be nice if it was customized to this particular use case and repository. 

* Frontend documentation is also very minimal, please include more details in future deliveries to help devs onboard the codebase (framework used, main features, autogenerated API docs, etc.)

* The docs don't show how to run the tests, I had to manually guess and go into the features folders and run `cargo test`

* The benchmark run doesn't exit when done, probably some process stays hanging there.
