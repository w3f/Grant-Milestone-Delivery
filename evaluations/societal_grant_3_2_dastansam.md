# Evaluation

- **Status:** In Progress
- **Application Document:** [Societal](https://github.com/sctllabs/Grants-Program/blob/master/applications/Societal.md)
- **Milestone:** 2
- **Kusama Identity:** [Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP](https://sub.id/Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP)
- **Previously successfully merged evaluation:** [Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/societal-grant-3_1_ali-usama.md)

## Deliverables


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m2/LICENSE)| Correct license |
| 0b. | Documentation |[GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m2/README.md) | Extensive documentation is provided |
| 0c. | Testing Guide |[GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m2/docs/TiersTestingGuide.md)| All unit tests are passing. Logs below. |
| 0d. | Docker |[Docker Image](https://hub.docker.com/layers/societal/societal-node/grant3_m2-latest/images/sha256-c17b20e56572e3d68102fec147e6e1427e8b174c791584d98bec338480a7b0f2?context=explore)| New Docker image is deployed and launching with Docker works as promised. |
| 1. | Substrate Module: DAO Subscription Pallet |[GitHub repo link](https://github.com/sctllabs/societal-node/tree/grant3_m2/pallets/dao-subscription) | New tiers upgrade for subscriptions has been added and it works as expected when testing it. New unit tests are added which maintain the good level of coverage. |
| 2. | Client Modules | [Polkadot-JS](https://cloudflare-ipfs.com/ipns/dotapps.io/?rpc=ws://localhost:9944) | Detailed and extensive guide for testing new subscription tiers is provided. It walks through from scratch to everything. |

## General Notes

Overall, very well-done work on this milestone. I haven't found any critical issues, testing guide was very helpful and I was able to confirm all the promised features/deliverables are working as expected.

### Code suggestions

- Extrinsics and types lack documentation.
- Adding integration tests would be a nice addition. You could probably add some tests in the main `dao` pallet that make use of other pallets. For example, in the case of subscription tiers, you could replicate the failure and success scenarios you provided in the `./docs/TiersTestingGuide.md`.
- Running `cargo clippy --features runtime-benchmarks,try-runtime` fails with the following error in the logs. Not critical, but it would be nice to fix it. It's probably about missing `runtime-benchmarks` or `try-runtime` feature in one of the dependencies. There is also several dependencies that are missing `std` features.

### Logs

<details>

<summary>Missing std features</summary>

```bash
incomplete `std` of `cumulus-pallet-session-benchmarking`
incomplete `std` of `dao-primitives`
incomplete `std` of `eth-primitives`
incomplete `std` of `frame-benchmarking`
incomplete `std` of `frame-election-provider-support`
incomplete `std` of `frame-try-runtime`
incomplete `std` of `log`
incomplete `std` of `num_enum`
incomplete `std` of `pallet-asset-tx-payment`
incomplete `std` of `pallet-dao-bounties-precompile`
incomplete `std` of `pallet-dao-collective-precompile`
incomplete `std` of `pallet-dao-democracy-precompile`
incomplete `std` of `pallet-dao-eth-governance-precompile`
incomplete `std` of `pallet-dao-membership-precompile`
incomplete `std` of `pallet-dao-precompile`
incomplete `std` of `pallet-dao-treasury-precompile`
incomplete `std` of `pallet-evm-precompile-blake2`
incomplete `std` of `pallet-evm-precompile-bn128`
incomplete `std` of `pallet-evm-precompile-dispatch`
incomplete `std` of `pallet-evm-precompileset-assets-erc20`
incomplete `std` of `sp-staking`
```

</details>

<details>

<summary>Clippy</summary>

```bash
error[E0046]: not all trait items implemented, missing: `unchecked_into_checked_i_know_what_i_am_doing`
    --> /Users/dastan@enjin.io/.cargo/git/checkouts/frontier-2366eb3ebc8df5d5/85cdbee/primitives/self-contained/src/unchecked_extrinsic.rs:80:1
     |
  80 | / impl<Address, AccountId, Call, Signature, Extra, Lookup> Checkable<Lookup>
  81 | |     for UncheckedExtrinsic<Address, Call, Signature, Extra>
     | |___________________________________________________________^ missing `unchecked_into_checked_i_know_what_i_am_doing` in implementation
     |
     = help: implement the missing item: `fn unchecked_into_checked_i_know_what_i_am_doing(self, _: &Context) -> Result<<Self as Checkable<Context>>::Checked, TransactionValidityError> { todo!() }`

     Compiling polkadot-runtime-parachains v0.9.41 (https://github.com/paritytech/polkadot?branch=release-v0.9.41#e203bfb3)
  For more information about this error, try `rustc --explain E0046`.
  error: could not compile `fp-self-contained` due to previous error
```

</details>

<details>

<summary>Unit tests</summary>

```bash
running 5 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::create_dao_invalid_input ... ok
test tests::create_dao_fails_on_string_limits ... ok
test tests::create_dao_token_failure ... ok
test tests::create_dao_works ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_assets-b13190dd40b50c78)

running 61 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::balance_conversion_should_work ... ok
test tests::assets_from_genesis_should_exist ... ok
test tests::burning_asset_balance_with_positive_balance_should_work ... ok
test tests::basic_minting_should_work ... ok
test tests::asset_transfer_when_on_hold_should_not_work ... ok
test tests::burning_asset_balance_with_zero_balance_does_nothing ... ok
test tests::approve_transfer_frozen_asset_should_not_work ... ok
test tests::approval_lifecycle_works ... ok
test tests::approval_deposits_work ... ok
test tests::deducting_asset_balance_should_work ... ok
test tests::cannot_transfer_more_than_exists ... ok
test tests::cannot_transfer_more_than_approved ... ok
test tests::finish_destroy_asset_destroys_asset ... ok
test tests::destroy_accounts_calls_died_hooks ... ok
test tests::cancel_approval_works ... ok
test tests::destroy_should_refund_approvals ... ok
test tests::imbalances_should_work ... ok
test tests::holding_asset_account_balance_should_work ... ok
test tests::force_asset_status_should_work ... ok
test tests::force_cancel_approval_works ... ok
test tests::lifecycle_should_work ... ok
test tests::minting_insufficient_assets_with_deposit_without_consumer_should_work ... ok
Jul 25 09:10:02.336 ERROR runtime::system: Logic error: Unexpected underflow in reducing consumer    
test tests::force_metadata_should_work ... ok
test tests::minting_insufficient_asset_with_deposit_should_work_when_consumers_exhausted ... ok
test tests::normal_asset_create_and_destroy_callbacks_should_work ... ok
test tests::minting_too_many_insufficient_assets_fails ... ok
test tests::freezer_should_work ... ok
test tests::min_balance_should_work ... ok
test tests::non_providing_should_work ... ok
test tests::querying_allowance_should_work ... ok
test tests::querying_roles_should_work ... ok
test tests::querying_name_symbol_and_decimals_should_work ... ok
test tests::refunding_asset_deposit_with_burn_should_work ... ok
test tests::refunding_asset_deposit_with_burn_disallowed_should_fail ... ok
test tests::partial_destroy_should_work ... ok
test tests::querying_total_supply_should_work ... ok
test tests::origin_guards_should_work ... ok
test tests::refunding_asset_deposit_without_burn_should_work ... ok
test tests::slashing_reserved_asset_balance_should_work ... ok
test tests::root_asset_create_should_work ... ok
test tests::set_team_should_work ... ok
test tests::refunding_calls_died_hook ... ok
test tests::slashing_asset_balance_should_work ... ok
test tests::transfer_approved_all_funds ... ok
test tests::transfer_large_asset ... ok
test tests::transferring_amount_below_available_balance_should_work ... ok
test tests::set_metadata_should_work ... ok
test tests::transfer_owner_should_work ... ok
test tests::transferring_enough_to_kill_source_when_keep_alive_should_fail ... ok
test tests::transferring_amount_more_than_available_balance_should_not_work ... ok
test tests::transferring_frozen_user_should_not_work ... ok
test tests::transferring_reserved_asset_balance_to_nonexistent_should_fail ... ok
test tests::transferring_to_frozen_account_should_work ... ok
test tests::transferring_reserved_balance_should_work ... ok
test tests::unreserving_higher_with_best_effort_asset_balance_should_work ... ok
test tests::transferring_more_units_than_total_supply_should_not_work ... ok
test tests::unreserving_asset_balance_should_work ... ok
test types::ensure_bool_decodes_to_consumer_or_sufficient ... ok
test tests::transferring_less_than_one_unit_is_fine ... ok
test tests::transferring_frozen_asset_should_not_work ... ok

test result: ok. 61 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.04s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_bounties-e48d04163eb65d54)

running 21 tests
test tests::accepted_spend_proposal_ignored_outside_spend_period ... ok
test tests::accepted_spend_proposal_enacted_on_spend_period ... ok
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::claim_handles_high_fee ... ok
test tests::close_bounty_works ... ok
test tests::award_and_cancel ... ok
test tests::accept_curator_handles_different_deposit_calculations ... ok
test tests::genesis_config_works ... ok
test tests::assign_curator_works ... ok
test tests::cancel_and_refund ... ok
test tests::expire_and_unassign ... ok
test tests::genesis_funding_works ... ok
test tests::award_and_claim_bounty_works ... ok
test tests::inexistent_account_works ... ok
test tests::pot_underflow_should_not_diminish ... ok
test tests::create_bounty_works ... ok
test tests::treasury_account_doesnt_get_deleted ... ok
test tests::unused_pot_should_diminish ... ok
test tests::extend_expiry ... ok
test tests::unassign_curator_self ... ok
test tests::unassign_curator_works ... ok

test result: ok. 21 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_bounties_precompile-91913946fc41aa7c)

running 1 test
test __DaoBountiesPrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_collective-fb548899b1786bf4)

running 21 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::motions_basic_environment_works ... ok
test tests::motions_approval_works ... ok
test tests::close_disapprove_does_not_care_about_weight_or_len ... ok
test tests::close_with_no_prime_but_majority_works ... ok
test tests::close_works ... ok
test tests::motion_with_no_votes_closes_with_disapproval ... ok
test tests::motions_ignoring_non_collective_proposals_works ... ok
test tests::motions_approval_with_enough_votes_and_lower_voting_threshold_works ... ok
test tests::motions_disapproval_works ... ok
test tests::correct_validate_and_get_proposal ... ok
test tests::motions_ignoring_non_collective_votes_works ... ok
test tests::motions_reproposing_disapproved_works ... ok
test tests::propose_works ... ok
test tests::motions_ignoring_bad_index_collective_vote_works ... ok
test tests::proposal_weight_limit_works_on_approve ... ok
test tests::proposal_weight_limit_ignored_on_disapprove ... ok
test tests::removal_of_old_voters_votes_works ... ok
test tests::motions_vote_after_works ... ok
test tests::removal_of_old_voters_votes_works_with_set_members ... ok
test tests::limit_active_proposals ... ok

test result: ok. 21 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.06s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_collective_precompile-0bd820e531b24248)

running 1 test
test __DaoCollectivePrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_democracy-445d7a50438f4dd9)

running 55 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::decoders::test_decode_compact_u32_at ... ok
test tests::delegation::self_delegation_not_allowed ... ok
test tests::delegation::single_proposal_should_work_with_delegation_and_vote ... ok
test tests::delegation::cyclic_delegation_should_unwind ... ok
test tests::delegation::single_proposal_should_work_with_undelegation ... ok
test tests::cancellation::emergency_cancel_should_work ... ok
test tests::delegation::conviction_should_be_honored_in_delegation ... ok
test tests::delegation::single_proposal_should_work_with_delegation ... ok
test tests::delegation::single_proposal_should_work_with_vote_and_delegation ... ok
test tests::delegation::split_vote_delegation_should_be_ignored ... ok
test tests::external_proposing::external_blacklisting_should_work ... ok
test tests::fast_tracking::fast_track_referendum_fails_when_no_simple_majority ... ok
test tests::external_proposing::external_and_public_interleaving_works ... ok
test tests::external_proposing::external_majority_referendum_works ... ok
test tests::fast_tracking::instant_next_block_referendum_backed ... ok
test tests::external_proposing::external_default_referendum_works ... ok
test tests::lock_voting::lock_voting_should_work_with_delegation ... ok
test tests::external_proposing::external_referendum_works ... ok
test tests::delegation::redelegation_keeps_lock ... ok
test tests::fast_tracking::fast_track_referendum_works ... ok
test tests::lock_voting::no_locks_without_conviction_should_work ... ok
test tests::params_should_work ... ok
test tests::external_proposing::veto_external_works ... ok
test tests::fast_tracking::instant_referendum_works ... ok
test tests::lock_voting::locks_should_persist_from_voting_to_delegation ... ok
test tests::public_proposals::backing_for_should_work ... ok
test tests::lock_voting::multi_consolidation_of_lockvotes_should_be_conservative ... ok
test tests::public_proposals::cancel_proposal_should_work ... ok
test tests::public_proposals::deposit_for_proposals_should_be_returned ... ok
test tests::public_proposals::deposit_for_proposals_should_be_taken ... ok
test tests::lock_voting::single_consolidation_of_lockvotes_should_work_as_before ... ok
test tests::public_proposals::poor_proposer_should_not_work ... ok
test tests::public_proposals::blacklisting_should_work ... ok
test tests::public_proposals::proposal_with_deposit_below_minimum_should_not_work ... ok
test tests::public_proposals::poor_seconder_should_not_work ... ok
test tests::scheduling::lowest_unbaked_should_be_sensible ... ok
test tests::scheduling::delayed_enactment_should_work ... ok
test tests::scheduling::ooo_inject_referendums_should_work ... ok
test tests::set_balance_proposal_is_correctly_filtered_out ... ok
test tests::public_proposals::runners_up_should_come_after ... ok
test tests::scheduling::simple_failing_should_work ... ok
test tests::lock_voting::locks_should_persist_from_delegation_to_voting ... ok
test tests::scheduling::simple_passing_should_work ... ok
test tests::voting::controversial_low_turnout_voting_should_work ... ok
test vote_threshold::tests::should_work ... ok
test tests::voting::controversial_voting_should_work ... ok
test tests::voting::passing_low_turnout_voting_should_work ... ok
test tests::voting::overvoting_should_fail ... ok
test tests::voting::split_vote_cancellation_should_work ... ok
test tests::voting::single_proposal_should_work ... ok
test tests::lock_voting::prior_lockvotes_should_be_enforced ... ok
test tests::voting::split_voting_should_work ... ok
test tests::lock_voting::lock_voting_should_work ... ok
test tests::decoders::len_of_deposit_of ... ok

test result: ok. 55 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.37s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_democracy_precompile-b91eb8d9ea6588cd)

running 1 test
test __DaoDemocracyPrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_eth_governance-e0411d1567c306da)

running 8 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::propose_pending_works ... ok
test tests::vote_pending_works ... ok
test tests::close_works ... ok
test tests::vote_approve_works ... ok
test tests::propose_approve_works ... ok
test tests::propose_account_invalid ... ok
test tests::propose_account_not_signer ... ok

test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_eth_governance_precompile-8bcac5c7d55492a0)

running 1 test
test __DaoEthGovernancePrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_membership-e4b7439caaf5a4ef)

running 9 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::query_membership_works ... ok
test tests::swap_member_works_that_does_not_change_order ... ok
test tests::change_key_works_that_does_not_change_order ... ok
test tests::reset_members_works ... ok
test tests::change_key_works ... ok
test tests::add_member_works ... ok
test tests::remove_member_works ... ok
test tests::swap_member_works ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_membership_precompile-66566964516e759e)

running 1 test
test __DaoMembershipPrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_nft_governance-b55c0d05f3b7d894)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_precompile-6394b1f07cc46f26)

running 1 test
test __DaoPrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_subscription-f310e33fae1d6f79)

running 18 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::ensure_active_not_exists ... ok
test tests::change_subscription_not_exists ... ok
test tests::ensure_active_works ... ok
test tests::change_subscription_tier_invalid ... ok
test tests::change_subscription_low_balance ... ok
test tests::change_subscription_works ... ok
test tests::set_subscription_tiers_works ... ok
test tests::fails_already_subscribed ... ok
test tests::subscribe_not_enough_balance ... ok
test tests::subscribe_works_selected_tier ... ok
test tests::subscribe_works_default_tier ... ok
test tests::suspend_subscription_works ... ok
test tests::ensure_active_fn_limit_exceeded ... ok
test tests::ensure_limited_works ... ok
test tests::extend_subscription_works ... ok
test tests::ensure_active_expired ... ok
test tests::extend_subscription_balance_low ... ok

test result: ok. 18 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 3.86s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_treasury-bf17bea4f0fec902)

running 13 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::genesis_config_works ... ok
test tests::genesis_funding_works ... ok
test tests::minting_works ... ok
test tests::accepted_spend_proposal_ignored_outside_spend_period ... ok
test tests::spend_origin_permissioning_works ... ok
test tests::inexistent_account_works ... ok
test tests::accepted_spend_proposal_enacted_on_spend_period ... ok
test tests::pot_underflow_should_not_diminish ... ok
test tests::unused_pot_should_diminish ... ok
test tests::treasury_account_doesnt_get_deleted ... ok
test tests::spend_origin_works ... ok
test tests::max_approvals_limited ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s

     Running unittests src/lib.rs (target/debug/deps/pallet_dao_treasury_precompile-8e6044789d8038f5)

running 1 test
test __DaoTreasuryPrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/societal_node-8c232d93d164e0f5)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/societal_node_runtime-cff952ab39247f44)

running 3 tests
test __pallet_staking_reward_curve_test_module::reward_curve_piece_count ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test __pallet_staking_reward_curve_test_module::reward_curve_precision ... ok
```

</details>