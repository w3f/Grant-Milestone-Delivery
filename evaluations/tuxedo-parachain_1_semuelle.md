# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo_parachain.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a.    | License     | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/Off-Narrative-Labs/Tuxedo/blob/939b44200241db29037f87bbf1c06cfe59975d21/LICENSE) | Apache 2.0 | 
| 0b.    | Documentation | <ul><li>[x] </li></ul> | [off-narrative-labs.github.io](https://off-narrative-labs.github.io/Tuxedo), [README](https://github.com/Off-Narrative-Labs/Tuxedo/blob/939b44200241db29037f87bbf1c06cfe59975d21/README.md) | Good documentation as usual | 
| 0c.    | Testing     | <ul><li>[x] </li></ul> | [README](https://github.com/Off-Narrative-Labs/Tuxedo/tree/939b44200241db29037f87bbf1c06cfe59975d21#testing-and-code-quality) | Good test coverage |
| 0d.    | Docker      | <ul><li>[x] </li></ul> | [README](https://github.com/Off-Narrative-Labs/Tuxedo/blob/939b44200241db29037f87bbf1c06cfe59975d21/README.md#docker), [Off-Narrative-Labs/packages](https://github.com/orgs/Off-Narrative-Labs/packages) | — |
| 1.     | Tuxedo Parachain Core | <ul><li>[x] </li></ul> | [/tuxedo-parachain-core](https://github.com/Off-Narrative-Labs/Tuxedo/tree/939b44200241db29037f87bbf1c06cfe59975d21/tuxedo-parachain-core) | — |

## General Notes


- Good documentation, good test coverage. Everything worked out of the box.
- In addition to the agreed deliverables, the team also supplied:


| Number | Deliverable | Link | Notes |
| ------ | ----------- | ---- |----------------- |
| (BONUS) 2.  | Parachain Piece | [Rustdocs](https://off-narrative-labs.github.io/Tuxedo/parachain_piece/index.html), [Code](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/wardrobe/parachain/src) | Analogous to `pallet-parahcain-system`, this Tuxedo piece accepts the parachain inherent. |
| (BONUS) 3. | Dev Service | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo#the-dev-service) | Allows running a parachain runtime without a relay chain. |
| (BONUS) 4. | Zombienet | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo#zombienet) [Config File](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/zombienet.toml) | To spin up a proper relay-para testnet, you can youse the provided zombienet config. |

### `cargo test` output (excerpt)

```sh
     Running unittests src/lib.rs (target/debug/deps/tuxedo_core-f08666f8a1465095)

running 50 tests
test constraint_checker::testing::test_checker_fails ... ok
test constraint_checker::testing::test_checker_passes ... ok
test dynamic_typing::tests::display_decoding_failed_error ... ok
test dynamic_typing::tests::display_wrong_type_error ... ok
test dynamic_typing::tests::extract_wrong_type ... ok
test dynamic_typing::tests::extract_works ... ok
test dynamic_typing::tests::extract_decode_fails ... ok
test executive::tests::apply_empty_works ... ok
test executive::tests::apply_with_missing_input_fails ... ok
test executive::tests::apply_with_missing_peek_fails ... ok
test executive::tests::apply_invalid_extrinsic_rejects ... ok
test executive::tests::apply_valid_extrinsic_work ... ok
test executive::tests::execute_block_inherent_first_works ... ok
test executive::tests::close_block_works ... ok
test executive::tests::execute_block_inherent_only_works ... ok
test executive::tests::execute_block_with_transaction_works ... ok
test executive::tests::execute_block_inherents_must_all_be_first - should panic ... ok
test executive::tests::execute_block_inherents_must_be_first - should panic ... ok
test executive::tests::execute_block_invalid_transaction - should panic ... ok
test executive::tests::execute_block_state_root_mismatch - should panic ... ok
test executive::tests::execute_block_extrinsic_root_mismatch - should panic ... ok
test executive::tests::validate_empty_works ... ok
test executive::tests::execute_empty_block_works ... ok
test executive::tests::open_block_works ... ok
test executive::tests::update_storage_adds_output ... ok
test executive::tests::validate_with_constraint_error_fails ... ok
test executive::tests::validate_with_duplicate_input_fails ... ok
test executive::tests::validate_with_missing_peek_works ... ok
test executive::tests::validate_with_missing_input_works ... ok
test executive::tests::update_storage_consumes_input ... ok
test executive::tests::validate_with_output_works ... ok
test executive::tests::validate_with_input_works ... ok
test types::tests::extrinsic_is_signed_works_for_inherents ... ok
test executive::tests::validate_with_duplicate_peek_works ... ok
test executive::tests::validate_with_pre_existing_output_fails ... ok
test types::tests::extrinsic_is_signed_works ... ok
test verifier::test::sr25519_signature_with_bad_sig ... ok
test executive::tests::validate_with_peek_works ... ok
test verifier::test::test_verifier_passes ... ok
test verifier::test::threshold_multisig_bogus_redeemer_encoding_fails ... ok
test executive::tests::validate_with_unsatisfied_verifier_fails ... ok
test types::tests::extrinsic_no_signed_payload ... ok
test verifier::test::test_verifier_fails ... ok
test verifier::test::sr25519_signature_with_good_sig ... ok
test verifier::test::threshold_multisig_has_duplicate_signatories_fails ... ok
test verifier::test::up_for_grabs_always_verifies ... ok
test verifier::test::threshold_multisig_replay_sig_attack_fails ... ok
test verifier::test::threshold_multisig_not_enough_sigs_fails ... ok
test verifier::test::threshold_multisig_with_enough_sigs_passes ... ok
test verifier::test::threshold_multisig_extra_sigs_still_passes ... ok

test result: ok. 50 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s

     Running unittests src/lib.rs (target/debug/deps/tuxedo_parachain_core-e26f0b831845b7a6)

running 7 tests
test tests::validation_params_and_memory_optimized_validation_params_encode_and_decode ... ok
test tests::check_inherents_are_unsigned_and_before_all_other_extrinsics has been running for over 60 seconds
test tests::validate_block_fails_on_invalid_validation_data has been running for over 60 seconds
test tests::validate_block_invalid_parent_hash has been running for over 60 seconds
test tests::validate_block_no_extra_extrinsics has been running for over 60 seconds
test tests::validate_block_returns_custom_head_data has been running for over 60 seconds
test tests::validate_block_with_extra_extrinsics has been running for over 60 seconds
test tests::validate_block_invalid_parent_hash ... ok
test tests::validate_block_fails_on_invalid_validation_data ... ok
test tests::check_inherents_are_unsigned_and_before_all_other_extrinsics ... ok
test tests::validate_block_no_extra_extrinsics ... ok
test tests::validate_block_returns_custom_head_data ... ok
test tests::validate_block_with_extra_extrinsics ... ok

test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 190.99s

     Running unittests src/lib.rs (target/debug/deps/tuxedo_register_validate_block-ef3fcae2ee251641)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/tuxedo_template_runtime-425ec04fb686c6ea)

running 2 tests
test genesis::tests::genesis_utxo_money ... ok
test genesis::tests::genesis_utxo_money_multi_sig ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.64s

     Running unittests src/main.rs (target/debug/deps/tuxedo_template_wallet-17e97cc756e82e41)

running 2 tests
test output_filter::tests::filter_prints ... ok
test output_filter::tests::filter_sr25519_signature_works ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```