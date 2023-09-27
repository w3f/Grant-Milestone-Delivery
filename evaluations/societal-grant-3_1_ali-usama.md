# Evaluation

- **Status:** Accepted
- **Application Document:** [Societal SaaS Application](https://github.com/w3f/Grants-Program/blob/master/applications/societal_saas_pricing.md) 
- **Milestone:** 1
- **Kusama Identity:** Eexv1mKLiCidz2gGh6vfowtXgSSc7mvD4xEb2ji998W4DPs
- **Previously successfully merged evaluation:** All evaluations by ali-usama

| Number | Deliverable                               | Accepted               | Link                                                                                                                                                                                                                                                                             | Evaluation Notes               |
|--------|-------------------------------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| 0a.    | Licence                                   | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/sctllabs/societal-node/blob/grant3_m1/LICENSE)                                                                                                                                                                                                   | Correct Licence                |
| 0b.    | Documentation                             | <ul><li>[x] </li></ul> | [ReadMe](https://github.com/sctllabs/societal-node/blob/grant3_m1/README.md)                                                                                                                                                                                                     | Well-explained Readme          |
| 0c.    | Testing Guide                             | <ul><li>[x] </li></ul> | [TestingGuide](https://github.com/sctllabs/societal-node/blob/grant3_m1/docs/SubscriptionTestingGuide.md)                                                                                                                                                                        | Working as per the application |
| 0d.    | Docker                                    | <ul><li>[x] </li></ul> | [Run in Docker](https://github.com/sctllabs/societal-node/tree/grant3_m1#run-in-docker)<br/>[Docker image](https://hub.docker.com/layers/societal/societal-node/grant3_m1-latest/images/sha256-21719afd8ec6237ffa4b12303da79b67ed078d7d5b160ef0a19ba9e20a061516?context=explore) | Builds and runs successfully   |
| 1.     | Substrate Module: DAO Subscription pallet | <ul><li>[x] </li></ul> | [DAO subscription](https://github.com/sctllabs/societal-node/tree/grant3_m1/pallets/dao-subscription)                                                                                                                                                                            | Working as per the application |
| 2.     | Client Modules                            | <ul><li>[x] </li></ul> | [Pallets](https://github.com/sctllabs/societal-node/tree/grant3_m1/pallets)                                                                                                                                                                                                      | Working as per the application |


## General Notes

The repository is well-structured and well-documented, and all the features mentioned in the milestone are working as expected. The Subsciption testing has been done using the Polkadot JS UI, and the details of unit tests are attached below:

### `cargo test` output
```
Running unittests src/lib.rs (target/debug/deps/dao_primitives-5304105fe2657841)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/eth_primitives-e44444abe577bac1)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao-92a9cf4d3aa685a2)

running 5 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::create_dao_invalid_input ... ok
test tests::create_dao_fails_on_string_limits ... ok
test tests::create_dao_token_failure ... ok
test tests::create_dao_works ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_assets-cacdcb0554414926)

running 61 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::balance_conversion_should_work ... ok
test tests::assets_from_genesis_should_exist ... ok
test tests::basic_minting_should_work ... ok
test tests::approval_lifecycle_works ... ok
test tests::asset_transfer_when_on_hold_should_not_work ... ok
test tests::approve_transfer_frozen_asset_should_not_work ... ok
test tests::burning_asset_balance_with_positive_balance_should_work ... ok
test tests::approval_deposits_work ... ok
test tests::burning_asset_balance_with_zero_balance_does_nothing ... ok
test tests::deducting_asset_balance_should_work ... ok
test tests::destroy_accounts_calls_died_hooks ... ok
test tests::finish_destroy_asset_destroys_asset ... ok
test tests::cannot_transfer_more_than_approved ... ok
test tests::cannot_transfer_more_than_exists ... ok
test tests::cancel_approval_works ... ok
test tests::holding_asset_account_balance_should_work ... ok
test tests::destroy_should_refund_approvals ... ok
test tests::imbalances_should_work ... ok
test tests::force_metadata_should_work ... ok
test tests::force_asset_status_should_work ... ok
test tests::force_cancel_approval_works ... ok
test tests::minting_insufficient_assets_with_deposit_without_consumer_should_work ... ok
test tests::lifecycle_should_work ... ok
Jul 07 18:08:55.849 ERROR runtime::system: Logic error: Unexpected underflow in reducing consumer    
test tests::minting_insufficient_asset_with_deposit_should_work_when_consumers_exhausted ... ok
test tests::freezer_should_work ... ok
test tests::normal_asset_create_and_destroy_callbacks_should_work ... ok
test tests::minting_too_many_insufficient_assets_fails ... ok
test tests::querying_roles_should_work ... ok
test tests::querying_name_symbol_and_decimals_should_work ... ok
test tests::min_balance_should_work ... ok
test tests::non_providing_should_work ... ok
test tests::querying_total_supply_should_work ... ok
test tests::querying_allowance_should_work ... ok
test tests::refunding_asset_deposit_with_burn_should_work ... ok
test tests::partial_destroy_should_work ... ok
test tests::root_asset_create_should_work ... ok
test tests::origin_guards_should_work ... ok
test tests::refunding_calls_died_hook ... ok
test tests::refunding_asset_deposit_without_burn_should_work ... ok
test tests::slashing_asset_balance_should_work ... ok
test tests::refunding_asset_deposit_with_burn_disallowed_should_fail ... ok
test tests::slashing_reserved_asset_balance_should_work ... ok
test tests::set_team_should_work ... ok
test tests::transferring_amount_below_available_balance_should_work ... ok
test tests::transfer_approved_all_funds ... ok
test tests::transfer_large_asset ... ok
test tests::transfer_owner_should_work ... ok
test tests::transferring_less_than_one_unit_is_fine ... ok
test tests::transferring_enough_to_kill_source_when_keep_alive_should_fail ... ok
test tests::set_metadata_should_work ... ok
test tests::transferring_more_units_than_total_supply_should_not_work ... ok
test tests::transferring_reserved_asset_balance_to_nonexistent_should_fail ... ok
test types::ensure_bool_decodes_to_consumer_or_sufficient ... ok
test tests::transferring_frozen_asset_should_not_work ... ok
test tests::transferring_frozen_user_should_not_work ... ok
test tests::transferring_amount_more_than_available_balance_should_not_work ... ok
test tests::transferring_reserved_balance_should_work ... ok
test tests::unreserving_higher_with_best_effort_asset_balance_should_work ... ok
test tests::transferring_to_frozen_account_should_work ... ok
test tests::unreserving_asset_balance_should_work ... ok

test result: ok. 61 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.09s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_bounties-9d09c312b514bca5)

running 21 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::accepted_spend_proposal_enacted_on_spend_period ... ok
test tests::accepted_spend_proposal_ignored_outside_spend_period ... ok
test tests::accept_curator_handles_different_deposit_calculations ... ok
test tests::cancel_and_refund ... ok
test tests::award_and_cancel ... ok
test tests::claim_handles_high_fee ... ok
test tests::close_bounty_works ... ok
test tests::genesis_config_works ... ok
test tests::award_and_claim_bounty_works ... ok
test tests::assign_curator_works ... ok
test tests::expire_and_unassign ... ok
test tests::create_bounty_works ... ok
test tests::genesis_funding_works ... ok
test tests::pot_underflow_should_not_diminish ... ok
test tests::inexistent_account_works ... ok
test tests::unused_pot_should_diminish ... ok
test tests::extend_expiry ... ok
test tests::unassign_curator_self ... ok
test tests::treasury_account_doesnt_get_deleted ... ok
test tests::unassign_curator_works ... ok

test result: ok. 21 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.04s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_bounties_precompile-9196153ddafff614)

running 1 test
test __DaoBountiesPrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_collective-18b44a063002b1f5)

running 21 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::correct_validate_and_get_proposal ... ok
test tests::close_with_no_prime_but_majority_works ... ok
test tests::close_disapprove_does_not_care_about_weight_or_len ... ok
test tests::motions_approval_with_enough_votes_and_lower_voting_threshold_works ... ok
test tests::motions_approval_works ... ok
test tests::motions_basic_environment_works ... ok
test tests::motion_with_no_votes_closes_with_disapproval ... ok
test tests::close_works ... ok
test tests::motions_disapproval_works ... ok
test tests::motions_ignoring_non_collective_proposals_works ... ok
test tests::proposal_weight_limit_ignored_on_disapprove ... ok
test tests::motions_ignoring_bad_index_collective_vote_works ... ok
test tests::motions_reproposing_disapproved_works ... ok
test tests::proposal_weight_limit_works_on_approve ... ok
test tests::propose_works ... ok
test tests::removal_of_old_voters_votes_works_with_set_members ... ok
test tests::motions_ignoring_non_collective_votes_works ... ok
test tests::removal_of_old_voters_votes_works ... ok
test tests::motions_vote_after_works ... ok
test tests::limit_active_proposals ... ok

test result: ok. 21 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.12s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_collective_precompile-24225f095b5de66b)

running 1 test
test __DaoCollectivePrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_democracy-4d7b069fff576a17)

running 55 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::decoders::test_decode_compact_u32_at ... ok
test tests::delegation::self_delegation_not_allowed ... ok
test tests::delegation::conviction_should_be_honored_in_delegation ... ok
test tests::delegation::cyclic_delegation_should_unwind ... ok
test tests::delegation::single_proposal_should_work_with_delegation ... ok
test tests::delegation::single_proposal_should_work_with_delegation_and_vote ... ok
test tests::cancellation::emergency_cancel_should_work ... ok
test tests::delegation::single_proposal_should_work_with_undelegation ... ok
test tests::delegation::single_proposal_should_work_with_vote_and_delegation ... ok
test tests::delegation::split_vote_delegation_should_be_ignored ... ok
test tests::external_proposing::external_blacklisting_should_work ... ok
test tests::external_proposing::external_majority_referendum_works ... ok
test tests::external_proposing::external_default_referendum_works ... ok
test tests::external_proposing::external_and_public_interleaving_works ... ok
test tests::delegation::redelegation_keeps_lock ... ok
test tests::external_proposing::veto_external_works ... ok
test tests::fast_tracking::fast_track_referendum_fails_when_no_simple_majority ... ok
test tests::fast_tracking::instant_next_block_referendum_backed ... ok
test tests::external_proposing::external_referendum_works ... ok
test tests::fast_tracking::fast_track_referendum_works ... ok
test tests::lock_voting::lock_voting_should_work_with_delegation ... ok
test tests::fast_tracking::instant_referendum_works ... ok
test tests::lock_voting::no_locks_without_conviction_should_work ... ok
test tests::lock_voting::locks_should_persist_from_voting_to_delegation ... ok
test tests::params_should_work ... ok
test tests::lock_voting::multi_consolidation_of_lockvotes_should_be_conservative ... ok
test tests::lock_voting::lock_voting_should_work ... ok
test tests::lock_voting::locks_should_persist_from_delegation_to_voting ... ok
test tests::public_proposals::backing_for_should_work ... ok
test tests::lock_voting::single_consolidation_of_lockvotes_should_work_as_before ... ok
test tests::public_proposals::cancel_proposal_should_work ... ok
test tests::public_proposals::deposit_for_proposals_should_be_taken ... ok
test tests::public_proposals::deposit_for_proposals_should_be_returned ... ok
test tests::public_proposals::blacklisting_should_work ... ok
test tests::public_proposals::poor_proposer_should_not_work ... ok
test tests::public_proposals::runners_up_should_come_after ... ok
test tests::public_proposals::poor_seconder_should_not_work ... ok
test tests::public_proposals::proposal_with_deposit_below_minimum_should_not_work ... ok
test tests::set_balance_proposal_is_correctly_filtered_out ... ok
test tests::scheduling::lowest_unbaked_should_be_sensible ... ok
test tests::lock_voting::prior_lockvotes_should_be_enforced ... ok
test tests::scheduling::delayed_enactment_should_work ... ok
test tests::scheduling::ooo_inject_referendums_should_work ... ok
test tests::scheduling::simple_failing_should_work ... ok
test tests::scheduling::simple_passing_should_work ... ok
test tests::voting::controversial_low_turnout_voting_should_work ... ok
test tests::voting::controversial_voting_should_work ... ok
test vote_threshold::tests::should_work ... ok
test tests::voting::passing_low_turnout_voting_should_work ... ok
test tests::voting::overvoting_should_fail ... ok
test tests::voting::split_vote_cancellation_should_work ... ok
test tests::voting::single_proposal_should_work ... ok
test tests::voting::split_voting_should_work ... ok
test tests::decoders::len_of_deposit_of ... ok

test result: ok. 55 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.53s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_democracy_precompile-d8ea90ac57e322fd)

running 1 test
test __DaoDemocracyPrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_eth_governance-ef888b5302257d3e)

running 8 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::propose_pending_works ... ok
test tests::propose_approve_works ... ok
test tests::vote_approve_works ... ok
test tests::vote_pending_works ... ok
test tests::close_works ... ok
test tests::propose_account_not_signer ... ok
test tests::propose_account_invalid ... ok

test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_eth_governance_precompile-ac076c5186089e0d)

running 1 test
test __DaoEthGovernancePrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_membership-efd84dc9eee88c46)

running 9 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::query_membership_works ... ok
test tests::change_key_works_that_does_not_change_order ... ok
test tests::reset_members_works ... ok
test tests::change_key_works ... ok
test tests::add_member_works ... ok
test tests::swap_member_works ... ok
test tests::swap_member_works_that_does_not_change_order ... ok
test tests::remove_member_works ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_membership_precompile-2fadcc9ac282db18)

running 1 test
test __DaoMembershipPrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_nft_governance-a520c456bca91fad)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_precompile-cd6c5b4843b89685)

running 1 test
test __DaoPrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_subscription-58c85d136a55d06a)

running 10 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::ensure_active_not_exists ... ok
test tests::ensure_active_works ... ok
test tests::fails_already_subscribed ... ok
test tests::subscribe_not_enough_balance ... ok
test tests::subscribe_works ... ok
test tests::ensure_active_fn_limit_exceeded ... ok
test tests::ensure_active_expired ... ok
test tests::extend_subscription_works ... ok
test tests::extend_subscription_balance_low ... ok

test result: ok. 10 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 4.29s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_treasury-a1b8217018655fba)

running 13 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::genesis_funding_works ... ok
test tests::genesis_config_works ... ok
test tests::minting_works ... ok
test tests::accepted_spend_proposal_ignored_outside_spend_period ... ok
test tests::accepted_spend_proposal_enacted_on_spend_period ... ok
test tests::inexistent_account_works ... ok
test tests::spend_origin_permissioning_works ... ok
test tests::pot_underflow_should_not_diminish ... ok
test tests::unused_pot_should_diminish ... ok
test tests::treasury_account_doesnt_get_deleted ... ok
test tests::spend_origin_works ... ok
test tests::max_approvals_limited ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.04s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_treasury_precompile-ea7722ab71b3140c)

running 1 test
test __DaoTreasuryPrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/societal_node-89d25a73ed72cdbe)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/societal_node_runtime-bc392bd1c986b722)

running 3 tests
test __pallet_staking_reward_curve_test_module::reward_curve_piece_count ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test __pallet_staking_reward_curve_test_module::reward_curve_precision ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.38s

   Doc-tests dao-primitives

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests eth-primitives

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao-assets

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao-bounties

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao-bounties-precompile

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao-collective

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao-collective-precompile

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao-democracy

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao-democracy-precompile

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao-eth-governance

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao-eth-governance-precompile

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao-membership

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao-membership-precompile

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao-nft-governance

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao-precompile

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao-subscription

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao-treasury

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dao-treasury-precompile

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests societal-node-runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```