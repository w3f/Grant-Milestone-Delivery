# Evaluation

- **Status:** Accepted
- **Application Document:** [Tuxedo](https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo.md)
- **Milestone:** 2
- **Kusama Identity:** Eexv1mKLiCidz2gGh6vfowtXgSSc7mvD4xEb2ji998W4DPs
- **Previously successfully merged evaluation:** [Polkadot Contract Wizard](https://github.com/w3f/Grant-Milestone-Delivery/pull/823)

| Number | Deliverable   | Accepted               | Link                                                                                                                                                                          | Evaluation Notes                                                                                    |
|--------|---------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| 0a.    | Licence       | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/Off-Narrative-Labs/Tuxedo/blob/milestone-1/LICENSE)                                                                                           | Correct Licence                                                                                     |
| 0b.    | Documentation | <ul><li>[x] </li></ul> | [Rustdocs](https://off-narrative-labs.github.io/Tuxedo),<br/>[ReadMe](https://github.com/Off-Narrative-Labs/Tuxedo/tree/milestone-1#readme)                                   | Documentation is well-written and structured. Includes inline comments too which are quite helpful. |
| 0c.    | Testing       | <ul><li>[x] </li></ul> | [ReadMe](https://github.com/Off-Narrative-Labs/Tuxedo#testing-and-code-quality)                                                                                               | All test cases passed                                                                               |
| 0d.    | Docker        | <ul><li>[x] </li></ul> | [ReadMe](https://github.com/Off-Narrative-Labs/Tuxedo#docker),<br/>[Images](https://github.com/orgs/Off-Narrative-Labs/packages)                                              | Docker images compiled and running successfully                                                     |
| 1.     | User Wallet   | <ul><li>[x] </li></ul> | [ReadMe](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/wallet#readme),<br/>[RustDocs](https://off-narrative-labs.github.io/Tuxedo/tuxedo_template_wallet/index.html) | Working as per application. Check output below                                                      |
| 2.     | MultiSig      | <ul><li>[x] </li></ul> | [RustDocs](https://off-narrative-labs.github.io/Tuxedo/tuxedo_core/verifier/struct.ThresholdMultiSignature.html)                                                              | Working as per application. Check output below                                                      |

## General Notes


## `cargo test` output
```
   Compiling node-template v4.0.0-dev (/home/rustacean/Desktop/Workspace/web3/Tuxedo-milestone-2/node)
    Finished test [unoptimized + debuginfo] target(s) in 1m 20s
     Running unittests src/lib.rs (target/debug/deps/node_template-50e8bf70794b4def)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/node_template-a7ec5f75ff6d9aad)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/tuxedo_core-94cee508f2f4e79b)

running 40 tests
test constraint_checker::testing::test_checker_fails ... ok
test constraint_checker::testing::test_checker_passes ... ok
test dynamic_typing::tests::display_decoding_failed_error ... ok
test dynamic_typing::tests::extract_works ... ok
test dynamic_typing::tests::display_wrong_type_error ... ok
test dynamic_typing::tests::extract_decode_fails ... ok
test dynamic_typing::tests::extract_wrong_type ... ok
test executive::tests::execute_block_invalid_transaction - should panic ... ok
test executive::tests::apply_empty_works ... ok
test executive::tests::apply_valid_extrinsic_work ... ok
test executive::tests::execute_block_state_root_mismatch - should panic ... ok
test executive::tests::apply_with_missing_input_fails ... ok
test executive::tests::execute_block_extrinsic_root_mismatch - should panic ... ok
test executive::tests::close_block_works ... ok
test executive::tests::apply_invalid_extrinsic_rejects ... ok
test executive::tests::execute_block_with_transaction_works ... ok
test executive::tests::validate_empty_works ... ok
test executive::tests::open_block_works ... ok
test executive::tests::update_storage_adds_output ... ok
test executive::tests::update_storage_consumes_input ... ok
test executive::tests::validate_with_duplicate_input_fails ... ok
test executive::tests::execute_empty_block_works ... ok
test executive::tests::validate_with_input_works ... ok
test types::tests::extrinsic_is_signed_works ... ok
test types::tests::extrinsic_no_signed_payload ... ok
test executive::tests::validate_with_constraint_error_fails ... ok
test verifier::test::test_verifier_fails ... ok
test verifier::test::sig_check_with_bad_sig ... ok
test executive::tests::validate_with_missing_input_works ... ok
test verifier::test::test_verifier_passes ... ok
test executive::tests::validate_with_output_works ... ok
test verifier::test::threshold_multisig_bogus_redeemer_encoding_fails ... ok
test executive::tests::validate_with_pre_existing_output_fails ... ok
test executive::tests::validate_with_unsatisfied_redeemer_fails ... ok
test verifier::test::up_for_grabs_always_verifies ... ok
test verifier::test::sig_check_with_good_sig ... ok
test verifier::test::threshold_multisig_has_duplicate_signatories_fails ... ok
test verifier::test::threshold_multisig_replay_sig_attack_fails ... ok
test verifier::test::threshold_multisig_with_enough_sigs_passes ... ok
test verifier::test::threshold_multisig_not_enough_sigs_fails ... ok

test result: ok. 40 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.24s

     Running unittests src/lib.rs (target/debug/deps/tuxedo_template_runtime-894a3ee13cfaeed0)

running 58 tests
test amoeba::test::creation_with_no_output_fails ... ok
test amoeba::test::creation_invalid_generation_fails ... ok
test amoeba::test::creation_with_badly_typed_output_fails ... ok
test amoeba::test::creation_valid_transaction_works ... ok
test amoeba::test::creation_multiple_fails ... ok
test amoeba::test::creation_with_inputs_fails ... ok
test amoeba::test::death_badly_typed_input ... ok
test amoeba::test::death_multiple_inputs ... ok
test amoeba::test::death_no_input ... ok
test amoeba::test::death_valid_transaction_works ... ok
test amoeba::test::death_with_output ... ok
test amoeba::test::mitosis_badly_typed_input ... ok
test amoeba::test::mitosis_badly_typed_output ... ok
test amoeba::test::mitosis_no_input ... ok
test amoeba::test::mitosis_only_one_output ... ok
test amoeba::test::mitosis_too_many_outputs ... ok
test amoeba::test::mitosis_valid_transaction_works ... ok
test amoeba::test::mitosis_wrong_generation ... ok
test kitties::test::breed_mom_when_she_gave_birth_recently_fails ... ok
test kitties::test::breed_dad_when_he_is_tired_fails ... ok
test kitties::test::breed_two_dads_fails ... ok
test kitties::test::breed_two_moms_fails ... ok
test kitties::test::breed_wrong_input_type_fails ... ok
test kitties::test::breed_wrong_output_type_fails ... ok
test kitties::test::check_dad_breedings_overflow_fails ... ok
test kitties::test::breed_happy_path_works ... ok
test kitties::test::check_dad_free_breedings_zero_fails ... ok
test kitties::test::check_mom_breedings_overflow_fails ... ok
test kitties::test::check_mom_free_breedings_zero_fails ... ok
test kitties::test::check_child_dna_incorrect_fails ... ok
test kitties::test::check_child_mom_parent_recently_gave_birth_fails ... ok
test kitties::test::check_child_free_breedings_incorrect_fails ... ok
test kitties::test::check_child_dad_parent_tired_fails ... ok
test kitties::test::check_new_dad_dna_doesnt_match_old_fails ... ok
test kitties::test::check_new_dad_num_breedings_incorrect_fails ... ok
test kitties::test::first_input_not_mom_fails ... ok
test kitties::test::check_child_num_breedings_non_zero_fails ... ok
test kitties::test::check_new_dad_free_breedings_incorrect_fails ... ok
test kitties::test::outputs_dont_contain_all_family_members_fails ... ok
test kitties::test::check_new_mom_dna_doesnt_match_old_fails ... ok
test kitties::test::inputs_dont_contain_two_parents_fails ... ok
test money::test::mint_valid_transaction_works ... ok
test kitties::test::check_new_mom_free_breedings_incorrect_fails ... ok
test kitties::test::check_new_mom_num_breedings_incorrect_fails ... ok
test money::test::mint_with_inputs_fails ... ok
test money::test::mint_with_no_outputs_fails ... ok
test kitties::test::first_output_not_mom_fails ... ok
test money::test::mint_with_zero_value_output_fails ... ok
test money::test::mint_wrong_output_type_fails ... ok
test money::test::spend_no_inputs_fails ... ok
test money::test::spend_no_outputs_is_a_burn ... ok
test money::test::spend_output_value_exceeds_input_value_fails ... ok
test money::test::spend_valid_transaction_work ... ok
test money::test::spend_with_zero_value_output_fails ... ok
test money::test::spend_wrong_input_type_fails ... ok
test money::test::spend_wrong_output_type_fails ... ok
test tests::utxo_money_test_genesis ... ok
test tests::utxo_money_multi_sig_genesis_test ... ok

test result: ok. 58 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.17s

     Running unittests src/main.rs (target/debug/deps/tuxedo_template_wallet-6d9b063c5442e738)

running 2 tests
test output_filter::tests::filter_prints ... ok
test output_filter::tests::filter_sig_check_works ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests node-template

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests tuxedo-core

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests tuxedo-template-runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

## Docker testing output
```console
$ docker run --network host ghcr.io/off-narrative-labs/tuxedo-wallet show-balance
[2023-04-17T00:57:10Z INFO  tuxedo_template_wallet::sync] Initializing fresh sync from genesis 0x7aa31a26289c25cbb251ea3b9667d5fcfc0e30cb554713da397ebdfae8d7bbb7
[2023-04-17T00:57:10Z INFO  tuxedo_template_wallet] Number of blocks in the db: 0
Balance Summary
0xd2bf…df67: 100
--------------------
total      : 100
[2023-04-17T00:57:10Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 23
```

## Wallet testing output
```console
$ ./target/release/tuxedo-template-wallet 
[2023-04-17T01:00:40Z INFO  tuxedo_template_wallet] Number of blocks in the db: 3
[2023-04-17T01:00:40Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 5
[2023-04-17T01:00:40Z INFO  tuxedo_template_wallet] No Wallet Command invoked. Exiting.

$ ./target/release/tuxedo-template-wallet show-balance
[2023-04-17T01:01:06Z INFO  tuxedo_template_wallet] Number of blocks in the db: 5
[2023-04-17T01:01:06Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 14
Balance Summary
0xd2bf…df67: 100
--------------------
total      : 100

$ ./target/release/tuxedo-template-wallet verify-coin 000000000000000000000000000000000000000000000000000000000000000000000000
[2023-04-17T01:01:41Z INFO  tuxedo_template_wallet] Number of blocks in the db: 14
[2023-04-17T01:01:41Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 25
Details of coin 000000000000000000000000000000000000000000000000000000000000000000000000:
Found in storage.  Value: 100, owned by 0xd2bf…df67
Found in local db. Value: 100, owned by 0xd2bf…df67

$ ./target/release/tuxedo-template-wallet spend-coins   --output-amount 40   --output-amount 50
[2023-04-17T01:02:19Z INFO  tuxedo_template_wallet] Number of blocks in the db: 25
[2023-04-17T01:02:19Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 38
[2023-04-17T01:02:19Z INFO  tuxedo_template_wallet::money] Node's response to spend transaction: Ok("0x4f4315f42ec887e88719cf19a0b6e51cc4396d3c9a435c635e8d99c4f6e55246")
Created "54bde67f3923df16e54e0fe57de83ff8651ffabca7a25bb9c43cf8a6324e901a00000000" worth 40. owned by 0xd2bf…df67
Created "54bde67f3923df16e54e0fe57de83ff8651ffabca7a25bb9c43cf8a6324e901a01000000" worth 50. owned by 0xd2bf…df67

$ ./target/release/tuxedo-template-wallet show-balance
[2023-04-17T01:02:36Z INFO  tuxedo_template_wallet] Number of blocks in the db: 38
[2023-04-17T01:02:36Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 44
Balance Summary
0xd2bf…df67: 90
--------------------
total      : 90

$ ./target/release/tuxedo-template-wallet generate-key
[2023-04-17T01:02:59Z INFO  tuxedo_template_wallet] Number of blocks in the db: 44
[2023-04-17T01:02:59Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 51
Generated public key is 7ca8408f8f1178b03cebe26b0efc2cdbcf6281f3c95179c08041dc79b7d2ab74 (5Et9myQS...)
Generated Phrase is parade debate oak medal bless envelope true girl school march humble admit

$ ./target/release/tuxedo-template-wallet insert-key "parade debate oak medal bless envelope true girl school march humble admit"
[2023-04-17T01:03:26Z INFO  tuxedo_template_wallet] Number of blocks in the db: 51
[2023-04-17T01:03:26Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 60
The generated public key is 7ca8408f8f1178b03cebe26b0efc2cdbcf6281f3c95179c08041dc79b7d2ab74 (5Et9myQS...)

$ ./target/release/tuxedo-template-wallet spend-coins --recipient 7ca8408f8f1178b03cebe26b0efc2cdbcf6281f3c95179c08041dc79b7d2ab74  --output-amount 20   --output-amount 10
[2023-04-17T01:05:02Z INFO  tuxedo_template_wallet] Number of blocks in the db: 82
[2023-04-17T01:05:02Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 92
[2023-04-17T01:05:02Z INFO  tuxedo_template_wallet::money] Node's response to spend transaction: Ok("0x9c7b3adbf57f3d503e061a68c1609e4fa6a2a5430b7df193031c7e39b0cb8ae0")
Created "3716e1d338d62cd27546812ad76558fcff822cc25e1c815e210031ecdc18533800000000" worth 20. owned by 0x7ca8…ab74
Created "3716e1d338d62cd27546812ad76558fcff822cc25e1c815e210031ecdc18533801000000" worth 10. owned by 0x7ca8…ab74

$ ./target/release/tuxedo-template-wallet show-all-outputs
[2023-04-17T01:05:21Z INFO  tuxedo_template_wallet] Number of blocks in the db: 93
[2023-04-17T01:05:21Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 99
###### Unspent outputs ###########
3716e1d338d62cd27546812ad76558fcff822cc25e1c815e210031ecdc18533800000000: owner 0x7ca8408f8f1178b03cebe26b0efc2cdbcf6281f3c95179c08041dc79b7d2ab74, amount 20
3716e1d338d62cd27546812ad76558fcff822cc25e1c815e210031ecdc18533801000000: owner 0x7ca8408f8f1178b03cebe26b0efc2cdbcf6281f3c95179c08041dc79b7d2ab74, amount 10
bd8ea4ef1d9d1511a318215ce884fdfc00d07d6bd1ace35a9dfef2fe09c724cc01000000: owner 0x7ca8408f8f1178b03cebe26b0efc2cdbcf6281f3c95179c08041dc79b7d2ab74, amount 50

$ ./target/release/tuxedo-template-wallet spend-coins --input bd8ea4ef1d9d1511a318215ce884fdfc00d07d6bd1ace35a9dfef2fe09c724cc01000000 --recipient 0x7ca8408f8f1178b03cebe26b0efc2cdbcf6281f3c95179c08041dc79b7d2ab74 --output-amount 20
[2023-04-17T01:07:38Z INFO  tuxedo_template_wallet] Number of blocks in the db: 99
[2023-04-17T01:07:38Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 144
[2023-04-17T01:07:38Z INFO  tuxedo_template_wallet::money] Node's response to spend transaction: Ok("0x7f5fa8c30625af3500e32ad4654be6a4df37f98076ff9b5a4f9f65770a195b3b")
Created "a8e838360de3ec96e35820a23e97fdfc7a7877d1f9f05f844e917f9159d08ef500000000" worth 20. owned by 0x7ca8…ab74

$ ./target/release/tuxedo-template-wallet show-all-outputs
[2023-04-17T01:07:45Z INFO  tuxedo_template_wallet] Number of blocks in the db: 144
[2023-04-17T01:07:45Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 147
###### Unspent outputs ###########
3716e1d338d62cd27546812ad76558fcff822cc25e1c815e210031ecdc18533800000000: owner 0x7ca8408f8f1178b03cebe26b0efc2cdbcf6281f3c95179c08041dc79b7d2ab74, amount 20
3716e1d338d62cd27546812ad76558fcff822cc25e1c815e210031ecdc18533801000000: owner 0x7ca8408f8f1178b03cebe26b0efc2cdbcf6281f3c95179c08041dc79b7d2ab74, amount 10
a8e838360de3ec96e35820a23e97fdfc7a7877d1f9f05f844e917f9159d08ef500000000: owner 0x7ca8408f8f1178b03cebe26b0efc2cdbcf6281f3c95179c08041dc79b7d2ab74, amount 20

$ ./target/release/tuxedo-template-wallet spend-coins   --recipient 0x066ae8f6f5c3f04e7fc163555d6ef62f6f8878435a931ba7eaf02424a16afe62   --output-amount 10
[2023-04-17T01:18:08Z INFO  tuxedo_template_wallet] Number of blocks in the db: 352
[2023-04-17T01:18:08Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 354
[2023-04-17T01:18:08Z INFO  tuxedo_template_wallet::money] Node's response to spend transaction: Ok("0xc6fc4beeca0d2b81ee478fc5b28b92be4e46347ae5724232dbad7e0a74c1c911")
Created "fa593e0ad623487ebf8e16e4f7c1b325922c6395fe9efaa4507ea828bd4486f600000000" worth 10. owned by 0x066a…fe62
```