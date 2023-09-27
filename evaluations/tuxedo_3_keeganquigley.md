# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 0a.    | License     | <ul><li>[x] </li></ul> | [LICENSE file](https://github.com/Off-Narrative-Labs/Tuxedo/blob/milestone-3/LICENSE) | Apache 2.0 | 
| 0b.    | Documentation | <ul><li>[x] </li></ul> | [Hosted Rustdocs](https://off-narrative-labs.github.io/Tuxedo) | Great docs and guide. | 
| 0c.    | Testing     | <ul><li>[x] </li></ul> | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo/blob/milestone-3#testing-and-code-quality) | All tests pass. |
| 0d.    | Docker      | <ul><li>[x] </li></ul> | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo/blob/milestone-3#docker), [Published Images](https://github.com/orgs/Off-Narrative-Labs/packages) | Node and CLI both run successfully. | 
| 0e.    | Full Tutorial | <ul><li>[x] </li></ul> | [Starter Code](https://github.com/Off-Narrative-Labs/Tuxedo-Order-Book-Dex-Tutorial/), [Complete Solutions](https://github.com/Off-Narrative-Labs/Tuxedo-Order-Book-Dex-Tutorial/tree/dex-solutions), [Walkthrough Video](https://www.youtube.com/watch?v=bWA2ksTmNBU) | Ok.
| 1.     | Template Piece | <ul><li>[x] </li></ul> | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo-Order-Book-Dex-Tutorial#use-as-a-template), [Dex Template](https://github.com/Off-Narrative-Labs/Tuxedo-Order-Book-Dex-Tutorial/blob/dex-tutorial/dex/src/lib.rs) | Ok.
# General Notes

Excellent work! Amazing docs and guides, and the tutorial is very helpful to see UTXO in action. Very cool to see it working in Substrate. 

I was able to run the node and CLI locally as well as with Docker. I was able to play with the CLI to create UXTO transactions:
```rust
docker run --network host ghcr.io/off-narrative-labs/tuxedo-wallet show-balance
WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
[2023-05-15T22:40:04Z INFO  tuxedo_template_wallet::sync] Initializing fresh sync from genesis 0xf9799acb9cd2371e4f2d986fd923999d985533909e459ea2bcda200a0577fd68
[2023-05-15T22:40:04Z INFO  tuxedo_template_wallet] Number of blocks in the db: 0
[2023-05-15T22:40:04Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 35
Balance Summary
0xd2bf…df67: 100
--------------------
total      : 100
```
```rust
docker run --network host ghcr.io/off-narrative-labs/tuxedo-wallet show-all-outputs
WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
[2023-05-15T23:23:47Z INFO  tuxedo_template_wallet::sync] Initializing fresh sync from genesis 0xf9799acb9cd2371e4f2d986fd923999d985533909e459ea2bcda200a0577fd68
[2023-05-15T23:23:47Z INFO  tuxedo_template_wallet] Number of blocks in the db: 0
[2023-05-15T23:23:48Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 910
###### Unspent outputs ###########
000000000000000000000000000000000000000000000000000000000000000000000000: owner 0xd2bf4b844dfefd6772a8843e669f943408966a977e3ae2af1dd78e0f55f4df67, amount 100
```
```rust
docker run --network host ghcr.io/off-narrative-labs/tuxedo-wallet spend-coins -o 50 -o 40 -o 5
WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
[2023-05-15T23:25:16Z INFO  tuxedo_template_wallet::sync] Initializing fresh sync from genesis 0xf9799acb9cd2371e4f2d986fd923999d985533909e459ea2bcda200a0577fd68
[2023-05-15T23:25:16Z INFO  tuxedo_template_wallet] Number of blocks in the db: 0
[2023-05-15T23:25:17Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 939
[2023-05-15T23:25:17Z INFO  tuxedo_template_wallet::money] Node's response to spend transaction: Ok("0xd1de5722d3190c86990aea4e61d821c74932035f57d3a190d74b3cf91c73a169")
Created "dc867b7132dbb7951c30569f7d1f3bfd92bdf497a22720728cfe886d9777aef300000000" worth 50. owned by 0xd2bf…df67
Created "dc867b7132dbb7951c30569f7d1f3bfd92bdf497a22720728cfe886d9777aef301000000" worth 40. owned by 0xd2bf…df67
Created "dc867b7132dbb7951c30569f7d1f3bfd92bdf497a22720728cfe886d9777aef302000000" worth 5. owned by 0xd2bf…df67
```

## Tests

Unit tests all pass for the Crypto Kitties game, the CLI, Tuxedo Core, Money, and the runtime template:
```rust
test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/amoeba-84e8bf0328439f3b)

running 18 tests
test tests::creation_multiple_fails ... ok
test tests::creation_invalid_generation_fails ... ok
test tests::creation_valid_transaction_works ... ok
test tests::creation_with_badly_typed_output_fails ... ok
test tests::creation_with_inputs_fails ... ok
test tests::creation_with_no_output_fails ... ok
test tests::death_multiple_inputs ... ok
test tests::death_badly_typed_input ... ok
test tests::death_no_input ... ok
test tests::death_valid_transaction_works ... ok
test tests::death_with_output ... ok
test tests::mitosis_badly_typed_input ... ok
test tests::mitosis_badly_typed_output ... ok
test tests::mitosis_no_input ... ok
test tests::mitosis_too_many_outputs ... ok
test tests::mitosis_only_one_output ... ok
test tests::mitosis_valid_transaction_works ... ok
test tests::mitosis_wrong_generation ... ok

test result: ok. 18 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/derive_no_bound-dbb3c33a916b13d8)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/kitties-7d7cd77f1b1d1170)

running 26 tests
test tests::breed_dad_when_he_is_tired_fails ... ok
test tests::breed_two_dads_fails ... ok
test tests::breed_two_moms_fails ... ok
test tests::breed_mom_when_she_gave_birth_recently_fails ... ok
test tests::breed_wrong_input_type_fails ... ok
test tests::breed_wrong_output_type_fails ... ok
test tests::breed_happy_path_works ... ok
test tests::check_child_dad_parent_tired_fails ... ok
test tests::check_child_dna_incorrect_fails ... ok
test tests::check_child_free_breedings_incorrect_fails ... ok
test tests::check_dad_breedings_overflow_fails ... ok
test tests::check_dad_free_breedings_zero_fails ... ok
test tests::check_child_mom_parent_recently_gave_birth_fails ... ok
test tests::check_mom_breedings_overflow_fails ... ok
test tests::check_child_num_breedings_non_zero_fails ... ok
test tests::check_mom_free_breedings_zero_fails ... ok
test tests::check_new_dad_dna_doesnt_match_old_fails ... ok
test tests::check_new_dad_free_breedings_incorrect_fails ... ok
test tests::check_new_dad_num_breedings_incorrect_fails ... ok
test tests::check_new_mom_free_breedings_incorrect_fails ... ok
test tests::check_new_mom_dna_doesnt_match_old_fails ... ok
test tests::first_input_not_mom_fails ... ok
test tests::inputs_dont_contain_two_parents_fails ... ok
test tests::outputs_dont_contain_all_family_members_fails ... ok
test tests::first_output_not_mom_fails ... ok
test tests::check_new_mom_num_breedings_incorrect_fails ... ok

test result: ok. 26 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/money-72ad746590f7c4eb)

running 12 tests
test tests::mint_valid_transaction_works ... ok
test tests::mint_with_inputs_fails ... ok
test tests::mint_with_no_outputs_fails ... ok
test tests::mint_with_zero_value_output_fails ... ok
test tests::mint_wrong_output_type_fails ... ok
test tests::spend_no_inputs_fails ... ok
test tests::spend_no_outputs_is_a_burn ... ok
test tests::spend_valid_transaction_work ... ok
test tests::spend_wrong_input_type_fails ... ok
test tests::spend_wrong_output_type_fails ... ok
test tests::spend_with_zero_value_output_fails ... ok
test tests::spend_output_value_exceeds_input_value_fails ... ok

test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/node_template-081cc689551156f4)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/node_template-3acc397e363f5ad9)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/poe-049bc1541e21e0c3)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/runtime_upgrade-e74911ac3b122840)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/tuxedo_core-3ab8267e7a21e02f)

running 41 tests
test constraint_checker::testing::test_checker_fails ... ok
test constraint_checker::testing::test_checker_passes ... ok
test dynamic_typing::tests::display_wrong_type_error ... ok
test dynamic_typing::tests::display_decoding_failed_error ... ok
test dynamic_typing::tests::extract_wrong_type ... ok
test dynamic_typing::tests::extract_works ... ok
test dynamic_typing::tests::extract_decode_fails ... ok
test executive::tests::apply_empty_works ... ok
test executive::tests::apply_valid_extrinsic_work ... ok
test executive::tests::apply_invalid_extrinsic_rejects ... ok
test executive::tests::apply_with_missing_input_fails ... ok
test executive::tests::execute_block_invalid_transaction - should panic ... ok
test executive::tests::execute_block_extrinsic_root_mismatch - should panic ... ok
test executive::tests::execute_block_state_root_mismatch - should panic ... ok
test executive::tests::close_block_works ... ok
test executive::tests::execute_block_with_transaction_works ... ok
test executive::tests::open_block_works ... ok
test executive::tests::update_storage_adds_output ... ok
test executive::tests::execute_empty_block_works ... ok
test executive::tests::update_storage_consumes_input ... ok
test executive::tests::validate_empty_works ... ok
test executive::tests::validate_with_constraint_error_fails ... ok
test executive::tests::validate_with_duplicate_input_fails ... ok
test executive::tests::validate_with_output_works ... ok
test executive::tests::validate_with_input_works ... ok
test executive::tests::validate_with_missing_input_works ... ok
test types::tests::extrinsic_no_signed_payload ... ok
test types::tests::extrinsic_is_signed_works ... ok
test verifier::test::sig_check_with_bad_sig ... ok
test executive::tests::validate_with_pre_existing_output_fails ... ok
test verifier::test::test_verifier_fails ... ok
test verifier::test::test_verifier_passes ... ok
test executive::tests::validate_with_unsatisfied_redeemer_fails ... ok
test verifier::test::threshold_multisig_bogus_redeemer_encoding_fails ... ok
test verifier::test::sig_check_with_good_sig ... ok
test verifier::test::threshold_multisig_has_duplicate_signatories_fails ... ok
test verifier::test::threshold_multisig_replay_sig_attack_fails ... ok
test verifier::test::threshold_multisig_not_enough_sigs_fails ... ok
test verifier::test::up_for_grabs_always_verifies ... ok
test verifier::test::threshold_multisig_extra_sigs_still_passes ... ok
test verifier::test::threshold_multisig_with_enough_sigs_passes ... ok

test result: ok. 41 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

     Running unittests src/lib.rs (target/debug/deps/tuxedo_template_runtime-bd5b9c6273e52f6b)

running 2 tests
test tests::utxo_money_test_genesis ... ok
test tests::utxo_money_multi_sig_genesis_test ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.18s

     Running unittests src/main.rs (target/debug/deps/tuxedo_template_wallet-e663e5727350b4e6)

running 2 tests
test output_filter::tests::filter_prints ... ok
test output_filter::tests::filter_sig_check_works ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests aggregator

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests amoeba

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests derive-no-bound

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests kitties

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests money

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests node-template

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests poe

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests runtime-upgrade

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests tuxedo-core

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests tuxedo-template-runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
Cargo Clippy comes back clean.
