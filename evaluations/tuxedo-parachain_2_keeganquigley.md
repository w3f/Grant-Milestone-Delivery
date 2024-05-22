# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo_parachain.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a.    | License     | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/Off-Narrative-Labs/Tuxedo/blob/939b44200241db29037f87bbf1c06cfe59975d21/LICENSE) | Apache 2.0 | 
| 0b.    | Documentation | <ul><li>[x] </li></ul> | [off-narrative-labs.github.io](https://off-narrative-labs.github.io/Tuxedo), [README](https://github.com/Off-Narrative-Labs/Tuxedo/blob/939b44200241db29037f87bbf1c06cfe59975d21/README.md) | Good documentation | 
| 0c.    | Testing     | <ul><li>[x] </li></ul> | [README](https://github.com/Off-Narrative-Labs/Tuxedo/tree/939b44200241db29037f87bbf1c06cfe59975d21#testing-and-code-quality) | Good coverage|
| 0d.    | Docker      | <ul><li>[x] </li></ul> | [README](https://github.com/Off-Narrative-Labs/Tuxedo/blob/939b44200241db29037f87bbf1c06cfe59975d21/README.md#docker), [Off-Narrative-Labs/packages](https://github.com/orgs/Off-Narrative-Labs/packages) | All run successfully |
| 1.     | Parachain Template Node | <ul><li>[x] </li></ul> | [Node Code](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/parachain-node) [Runtime Code](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/tuxedo-parachain-runtime) [Docker Image](https://github.com/Off-Narrative-Labs/Tuxedo/pkgs/container/tuxedo-parachain) | Works |
| 2. (bonus)     | `parachainify!` macro | <ul><li>[x] </li></ul> | [Rustdocs](https://off-narrative-labs.github.io/Tuxedo/tuxedo_parachain_core/macro.parachainify.html), [Example Usage](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/tuxedo-parachain-runtime/src/lib.rs#L63-L64) | Works |
| 3. (bonus)    | Zombienet | <ul><li>[x] </li></ul> | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo#zombienet) [Config File](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/zombienet.toml) | Works |

# General Notes

Dev chain runs successfully. Docker runs successfully:

```sh
CONTAINER ID   IMAGE                                    COMMAND                  CREATED          STATUS          PORTS     NAMES
a6ba56b959f5   ghcr.io/off-narrative-labs/tuxedo:main   "/usr/local/bin/node…"   21 seconds ago   Up 20 seconds             confident_almeida
```

CLI works.

<details>
  <summary>Output</summary>

```sh
A simple example / template wallet built for the tuxedo template runtime

Usage: tuxedo-template-wallet [OPTIONS] [COMMAND]

Commands:
  amoeba-demo       Demonstrate creating an amoeba and performing mitosis on it
  mint-coins        Mint coins , optionally amount and publicKey of owner can be passed
                        if amount is not passed , 100 coins are minted
                        If publickKey of owner is not passed , then by default SHAWN_PUB_KEY is used.
  verify-coin       Verify that a particular coin exists.
                        Show its value and owner from both chain storage and the local database.
  spend-coins       Spend some coins.
                        For now, all outputs in a single transaction go to the same recipient.
  insert-key        Insert a private key into the keystore to later use when signing transactions
  generate-key      Generate a private key using either some or no password and insert into the keystore
  show-keys         Show public information about all the keys in the keystore
  remove-key        Remove a specific key from the keystore.
                        WARNING! This will permanently delete the private key information.
                        Make sure your keys are backed up somewhere safe.
  show-balance      For each key tracked by the wallet, shows the sum of all UTXO values owned by that key.
                        This sum is sometimes known as the "balance".
  show-all-outputs  Show the complete list of UTXOs known to the wallet
  show-timestamp    Show the latest on-chain timestamp
  help              Print this message or the help of the given subcommand(s)

Options:
  -e, --endpoint <ENDPOINT>    RPC endpoint of the node that this wallet will connect to [default: http://localhost:9944]
  -d, --base-path <BASE_PATH>  Path where the wallet data is stored. Default value is platform specific
      --no-sync                Skip the initial sync that the wallet typically performs with the node.
                               The wallet will use the latest data it had previously synced.
      --tmp                    A temporary directory will be created to store the configuration and will be deleted at the end of the process. path will be ignored if this is set
      --dev                    Specify a development wallet instance, using a temporary directory (like --tmp).
                               The keystore will contain the development key Shawn.
  -h, --help                   Print help
  -V, --version                Print version
```
</details>

~~Balance comes back as 0 instead of 100, and warning about MacoOS:~~ UPDATE: Issue resolved.

<details>
  <summary>Output</summary>

```rust
ubuntu@ip-172-31-22-134:~$ docker run --network host ghcr.io/off-narrative-labs/tuxedo-wallet:main --dev show-balance
[2024-05-20T22:20:17Z INFO  tuxedo_template_wallet::sync] Initializing fresh sync from genesis 0x3a16225d2acfce0a9524a029f139c1eb0d0377ddacc253efdba0e8074b151093
[2024-05-20T22:20:17Z INFO  tuxedo_template_wallet] Number of blocks in the db: 0
Balance Summary
0xd2bf…df67: 100
--------------------
total      : 100
[2024-05-20T22:20:17Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 28
```
</details>

Unit tests all passing: 

<details>
  <summary>Output</summary>

```rust
ubuntu@ip-172-31-19-2:~/Tuxedo$ cargo test
⚡ Found 3 strongly connected components which includes at least one cycle each
cycle(001) ∈ α: DisputeCoordinator ~~{"DisputeDistributionMessage"}~~> DisputeDistribution ~~{"DisputeCoordinatorMessage"}~~>  *
cycle(002) ∈ β: CandidateBacking ~~{"CollatorProtocolMessage"}~~> CollatorProtocol ~~{"CandidateBackingMessage"}~~>  *
cycle(003) ∈ γ: NetworkBridgeRx ~~{"GossipSupportMessage"}~~> GossipSupport ~~{"NetworkBridgeRxMessage"}~~>  *
    Finished test [unoptimized + debuginfo] target(s) in 5.60s
     Running unittests src/lib.rs (target/debug/deps/aggregator-e12c8a0a64f357bd)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/amoeba-777d9d954dbcab2b)

running 23 tests
test tests::creation_invalid_generation_fails ... ok
test tests::creation_multiple_fails ... ok
test tests::creation_with_badly_typed_output_fails ... ok
test tests::creation_with_evictions_fails ... ok
test tests::creation_with_inputs_fails ... ok
test tests::creation_with_no_output_fails ... ok
test tests::death_eviction_not_allowed ... ok
test tests::death_badly_typed_input ... ok
test tests::death_multiple_inputs ... ok
test tests::death_no_input ... ok
test tests::death_valid_transaction_works ... ok
test tests::death_with_output ... ok
test tests::mitosis_badly_typed_first_daughter ... ok
test tests::mitosis_badly_typed_input ... ok
test tests::mitosis_badly_typed_second_daughter ... ok
test tests::mitosis_no_input ... ok
test tests::mitosis_only_one_output ... ok
test tests::mitosis_too_many_outputs ... ok
test tests::mitosis_valid_transaction_works ... ok
test tests::mitosis_with_evictions_fails ... ok
test tests::mitosis_wrong_generation_first_daughter ... ok
test tests::mitosis_wrong_generation_second_daughter ... ok
test tests::creation_valid_transaction_works ... ok

test result: ok. 23 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/derive_no_bound-6038635cfb5e887a)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/kitties-efbf46bbca1da95e)

running 26 tests
test tests::breed_dad_when_he_is_tired_fails ... ok
test tests::breed_mom_when_she_gave_birth_recently_fails ... ok
test tests::breed_two_dads_fails ... ok
test tests::breed_wrong_input_type_fails ... ok
test tests::breed_happy_path_works ... ok
test tests::breed_two_moms_fails ... ok
test tests::breed_wrong_output_type_fails ... ok
test tests::check_child_dad_parent_tired_fails ... ok
test tests::check_child_free_breedings_incorrect_fails ... ok
test tests::check_child_dna_incorrect_fails ... ok
test tests::check_dad_breedings_overflow_fails ... ok
test tests::check_child_num_breedings_non_zero_fails ... ok
test tests::check_mom_breedings_overflow_fails ... ok
test tests::check_child_mom_parent_recently_gave_birth_fails ... ok
test tests::check_mom_free_breedings_zero_fails ... ok
test tests::check_dad_free_breedings_zero_fails ... ok
test tests::check_new_dad_dna_doesnt_match_old_fails ... ok
test tests::check_new_dad_free_breedings_incorrect_fails ... ok
test tests::check_new_mom_dna_doesnt_match_old_fails ... ok
test tests::check_new_dad_num_breedings_incorrect_fails ... ok
test tests::check_new_mom_free_breedings_incorrect_fails ... ok
test tests::first_input_not_mom_fails ... ok
test tests::check_new_mom_num_breedings_incorrect_fails ... ok
test tests::inputs_dont_contain_two_parents_fails ... ok
test tests::outputs_dont_contain_all_family_members_fails ... ok
test tests::first_output_not_mom_fails ... ok

test result: ok. 26 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/money-a7a65751271e2d1b)

running 12 tests
test tests::mint_valid_transaction_works ... ok
test tests::mint_with_no_outputs_fails ... ok
test tests::mint_with_inputs_fails ... ok
test tests::mint_with_zero_value_output_fails ... ok
test tests::mint_wrong_output_type_fails ... ok
test tests::spend_no_inputs_fails ... ok
test tests::spend_no_outputs_is_a_burn ... ok
test tests::spend_output_value_exceeds_input_value_fails ... ok
test tests::spend_valid_transaction_work ... ok
test tests::spend_with_zero_value_output_fails ... ok
test tests::spend_wrong_output_type_fails ... ok
test tests::spend_wrong_input_type_fails ... ok

test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/node_template-806845b5eaa0dd2a)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/node_template-a06b76eeab37c4c8)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/parachain_piece-0ddd2dc7c26db994)

running 10 tests
test tests::update_parachain_info_bogus_output ... ok
test tests::update_parachain_info_bogus_eviction ... ok
test tests::update_parachain_info_extra_eviction ... ok
test tests::update_parachain_info_extra_outputs ... ok
test tests::update_parachain_info_missing_eviction ... ok
test tests::update_parachain_info_missing_output ... ok
test tests::update_parachain_info_happy_path ... ok
test tests::update_parachain_info_relay_block_not_increasing ... ok
test tests::update_parachain_info_with_otherwise_valid_old_info_as_normal_input ... ok
test tests::update_parachain_info_with_unexpected_normal_input ... ok

test result: ok. 10 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/main.rs (target/debug/deps/parachain_template_node-e7528ec87c6400e1)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/poe-6eee0b88354f644e)

running 26 tests
test tests::claim_exact_current_block_height_works ... ok
test tests::claim_old_block_height_fails ... ok
test tests::claim_with_bogus_output_fails ... ok
test tests::claim_with_eviction_fails ... ok
test tests::claim_with_input_fails ... ok
test tests::claim_works_with_one_claim ... ok
test tests::claim_works_with_two_claims ... ok
test tests::claim_works_with_zero_claims ... ok
test tests::dispute_with_bogus_winner_fails ... ok
test tests::dispute_with_loser_older_than_winner_fails ... ok
test tests::dispute_with_loser_same_age_as_winner_fails ... ok
test tests::dispute_with_input_fails ... ok
test tests::dispute_with_bogus_loser_fails ... ok
test tests::dispute_with_mismatched_claims_fails ... ok
test tests::dispute_with_multiple_winners_fails ... ok
test tests::dispute_with_no_winner_fails ... ok
test tests::dispute_with_one_loser_works ... ok
test tests::dispute_with_output_fails ... ok
test tests::dispute_with_two_losers_works ... ok
test tests::dispute_with_zero_losers_works ... ok
test tests::revoke_with_eviction_fails ... ok
test tests::revoke_with_outputs_fails ... ok
test tests::revoke_works_with_bogus_input_fails ... ok
test tests::revoke_works_with_one_claim ... ok
test tests::revoke_works_with_two_claims ... ok
test tests::revoke_works_with_zero_claims ... ok

test result: ok. 26 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/runtime_upgrade-9fa77b77f0b67996)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/timestamp-b304ae1b09d2329c)

running 22 tests
test cleanup_tests::cleanup_timestamp_cannot_create_state ... ok
test cleanup_tests::cleanup_timestamp_happy_path ... ok
test cleanup_tests::cleanup_timestamp_fails_when_target_newer_than_reference ... ok
test cleanup_tests::cleanup_timestamp_missing_eviction ... ok
test cleanup_tests::cleanup_timestamp_multiple_first_valid_second_invalid ... ok
test cleanup_tests::cleanup_timestamp_multiple_happy_path ... ok
test cleanup_tests::cleanup_timestamp_no_peek ... ok
test cleanup_tests::cleanup_timestamp_reference_is_wrong_type ... ok
test cleanup_tests::cleanup_timestamp_with_stray_normal_redemptive_input ... ok
test update_timestamp_tests::update_timestamp_bogus_peek ... ok
test update_timestamp_tests::update_timestamp_no_output ... ok
test cleanup_tests::cleanup_timestamp_target_is_wrong_type ... ok
test update_timestamp_tests::update_timestamp_happy_path ... ok
test cleanup_tests::cleanup_timestamp_input_not_yet_ripe_for_cleaning ... ok
test update_timestamp_tests::update_timestamp_no_peek ... ok
test update_timestamp_tests::update_timestamp_output_earlier_than_input ... ok
test update_timestamp_tests::update_timestamp_output_newer_than_previous_best_nut_not_enough_to_meet_threshold ... ok
test update_timestamp_tests::update_timestamp_with_input ... ok
test update_timestamp_tests::update_timestamp_too_many_outputs ... ok
test update_timestamp_tests::update_timestamp_with_peek ... ok
test update_timestamp_tests::update_timestamp_previous_timestamp_wrong_height ... ok
test update_timestamp_tests::update_timestamp_wrong_height ... ok

test result: ok. 22 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/tuxedo_core-ce2b26205b00e4ef)

running 66 tests
test constraint_checker::testing::test_checker_fails ... ok
test constraint_checker::testing::test_checker_passes ... ok
test dynamic_typing::tests::display_decoding_failed_error ... ok
test dynamic_typing::tests::display_wrong_type_error ... ok
test dynamic_typing::tests::extract_decode_fails ... ok
test dynamic_typing::tests::extract_works ... ok
test dynamic_typing::tests::extract_wrong_type ... ok
test executive::tests::apply_empty_works ... ok
test executive::tests::apply_with_missing_input_fails ... ok
test executive::tests::apply_invalid_extrinsic_rejects ... ok
test executive::tests::apply_valid_extrinsic_work ... ok
test executive::tests::apply_with_missing_peek_fails ... ok
test executive::tests::execute_block_extrinsic_root_mismatch - should panic ... ok
test executive::tests::close_block_works ... ok
test executive::tests::execute_block_inherent_first_works ... ok
test executive::tests::execute_block_inherent_only_works ... ok
test executive::tests::execute_block_inherents_must_all_be_first - should panic ... ok
test executive::tests::execute_block_invalid_transaction - should panic ... ok
test executive::tests::execute_block_inherents_must_be_first - should panic ... ok
test executive::tests::execute_block_state_root_mismatch - should panic ... ok
test executive::tests::execute_block_with_transaction_works ... ok
test executive::tests::execute_empty_block_works ... ok
test executive::tests::validate_empty_works ... ok
test executive::tests::open_block_works ... ok
test executive::tests::update_storage_adds_output ... ok
test executive::tests::update_storage_consumes_input ... ok
test executive::tests::validate_with_duplicate_input_fails ... ok
test executive::tests::validate_with_constraint_error_fails ... ok
test executive::tests::validate_with_duplicate_peek_works ... ok
test executive::tests::validate_with_missing_input_works ... ok
test executive::tests::validate_with_input_works ... ok
test executive::tests::validate_with_output_works ... ok
test executive::tests::validate_with_peek_works ... ok
test types::tests::extrinsic_is_signed_works ... ok
test executive::tests::validate_with_pre_existing_output_fails ... ok
test types::tests::extrinsic_no_signed_payload ... ok
test executive::tests::validate_with_unsatisfied_verifier_fails ... ok
test verifier::htlc::test::hash_lock_correct_secret ... ok
test executive::tests::validate_with_missing_peek_works ... ok
test verifier::htlc::test::hash_lock_wrong_secret ... ok
test types::tests::extrinsic_is_signed_works_for_inherents ... ok
test verifier::htlc::test::htlc_claim_bogus_signature ... ok
test verifier::htlc::test::htlc_refund_bogus_sig ... ok
test verifier::htlc::test::htlc_claim_wrong_secret ... ok
test verifier::htlc::test::htlc_claim_success ... ok
test verifier::htlc::test::htlc_claim_fails_when_signature_is_from_refunder ... ok
test verifier::htlc::test::time_lock_exactly_on_time ... ok
test verifier::htlc::test::time_lock_past_threshold ... ok
test verifier::htlc::test::time_lock_too_soon ... ok
test verifier::htlc::test::htlc_refund_fails_when_signature_is_from_recipient ... ok
test verifier::htlc::test::htlc_refund_success ... ok
test verifier::htlc::test::htlc_refund_too_early ... ok
test verifier::multi_signature::test::threshold_multisig_has_duplicate_signatories_fails ... ok
test verifier::multi_signature::test::threshold_multisig_not_enough_sigs_fails ... ok
test verifier::simple_signature::test::p2pkh_correct_pubkey_bad_sig ... ok
test verifier::simple_signature::test::p2pkh_incorrect_pubkey_and_bogus_sig ... ok
test verifier::multi_signature::test::threshold_multisig_replay_sig_attack_fails ... ok
test verifier::simple_signature::test::p2pkh_incorrect_pubkey_but_valid_sig_from_provided_pubkey ... ok
test verifier::simple_signature::test::sr25519_signature_with_bad_sig ... ok
test verifier::simple_signature::test::p2pkh_success ... ok
test verifier::simple_signature::test::sr25519_signature_with_good_sig ... ok
test verifier::test::test_verifier_fails ... ok
test verifier::test::test_verifier_passes ... ok
test verifier::test::up_for_grabs_always_verifies ... ok
test verifier::multi_signature::test::threshold_multisig_with_enough_sigs_passes ... ok
test verifier::multi_signature::test::threshold_multisig_extra_sigs_still_passes ... ok

test result: ok. 66 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.08s

     Running unittests src/lib.rs (target/debug/deps/tuxedo_parachain_core-ee6e39a783a29f3c)

running 7 tests
test tests::check_inherents_are_unsigned_and_before_all_other_extrinsics has been running for over 60 seconds
test tests::validate_block_fails_on_invalid_validation_data has been running for over 60 seconds
test tests::validate_block_invalid_parent_hash has been running for over 60 seconds
test tests::validate_block_no_extra_extrinsics has been running for over 60 seconds
test tests::validate_block_no_extra_extrinsics ... ok
test tests::validate_block_invalid_parent_hash ... ok
test tests::validate_block_fails_on_invalid_validation_data ... ok
test tests::validation_params_and_memory_optimized_validation_params_encode_and_decode ... ok
test tests::check_inherents_are_unsigned_and_before_all_other_extrinsics ... ok
test tests::validate_block_returns_custom_head_data has been running for over 60 seconds
test tests::validate_block_with_extra_extrinsics has been running for over 60 seconds
test tests::validate_block_returns_custom_head_data ... ok
test tests::validate_block_with_extra_extrinsics ... ok

test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 221.72s

     Running unittests src/lib.rs (target/debug/deps/tuxedo_parachain_runtime-cd3d68449c86acf2)
```
</details>
