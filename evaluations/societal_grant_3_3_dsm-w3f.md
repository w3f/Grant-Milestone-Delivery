# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/societal_saas_pricing.md
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul>| [GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m3/LICENSE)|  |
| 0b. | Documentation | <ul><li>[x] </li></ul>| [GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m3/README.md) |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul>| [GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m3/docs/PaymentTestingGuide.md)|  |
| 0d. | Docker | <ul><li>[x] </li></ul>| [Docker Image](https://hub.docker.com/layers/societal/societal-node/grant3_m3-latest/images/sha256-c17b20e56572e3d68102fec147e6e1427e8b174c791584d98bec338480a7b0f2?context=explore)|  |
| 0e. | Article | <ul><li>[x] </li></ul>| [Article Link](https://medium.com/@societal.xyz/societals-third-web3-foundation-grant-56b80c3b2cc6)|  |
| 1. | Substrate Module: DAO Factory Pallet | <ul><li>[x] </li></ul>| [GitHub repo link](https://github.com/sctllabs/societal-node/tree/grant3_m3/pallets/dao-subscription) |  |
| 2. | Client Modules | <ul><li>[x] </li></ul>|  [Polkadot-JS](https://cloudflare-ipfs.com/ipns/dotapps.io/?rpc=ws://localhost:9954) |  |

## Evaluation V3

The documentation was updated and it is ok. 

## Evaluation V2

### Documentation

If the old configuration isn't working anymore and will not be used, I think it would be better to remove the old instructions from the documentation because it could cause some confusion.

### Unit Tests

All unit tests passed.

<details>

```
user@localhost:~/Documents/societal/societal-node$ cargo test
⚡ Found 3 strongly connected components which includes at least one cycle each
cycle(001) ∈ α: ApprovalVoting ~~{"ApprovalDistributionMessage"}~~> ApprovalDistribution ~~{"ApprovalVotingMessage"}~~>  *
cycle(002) ∈ β: CandidateBacking ~~{"CollatorProtocolMessage"}~~> CollatorProtocol ~~{"CandidateBackingMessage"}~~>  *
cycle(003) ∈ γ: NetworkBridgeRx ~~{"GossipSupportMessage"}~~> GossipSupport ~~{"NetworkBridgeRxMessage"}~~>  *
	Finished test [unoptimized + debuginfo] target(s) in 2.61s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao-92a9cf4d3aa685a2)

running 24 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::create_dao_eth_works ... ok
test tests::create_dao_invalid_input ... ok
test tests::create_dao_token_already_exists ... ok
test tests::create_dao_fails_on_string_limits ... ok
test tests::ensures_member ... ok
test tests::create_dao_token_balance_invalid ... ok
test tests::cancel_dao_subscription_payment ... ok
test tests::bake_dao_referendum ... ok
test tests::remove_dao_works ... ok
test tests::create_dao_works ... ok
test tests::create_dao_token_failure ... ok
test tests::extend_dao_subscription_works ... ok
test tests::mint_dao_token_works ... ok
test tests::extend_dao_subscription_insufficient_balance ... ok
test tests::change_dao_subscription_invalid_tier ... ok
test tests::launch_dao_referendum_none_waiting ... ok
test tests::subscribe_dao_already_subscribed ... ok
test tests::spend_dao_funds ... ok
test tests::schedule_dao_subscription_payment ... ok
test tests::update_dao_metadata_works ... ok
test tests::update_dao_metadata_too_long ... ok
test tests::update_dao_policy_works ... ok
test tests::update_dao_policy_invalid_input ... ok

test result: ok. 24 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.05s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao_assets-cacdcb0554414926)

running 61 tests
test tests::assets_from_genesis_should_exist ... ok
test tests::balance_conversion_should_work ... ok
test tests::burning_asset_balance_with_positive_balance_should_work ... ok
test tests::basic_minting_should_work ... ok
test tests::deducting_asset_balance_should_work ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::asset_transfer_when_on_hold_should_not_work ... ok
test tests::burning_asset_balance_with_zero_balance_does_nothing ... ok
test tests::approve_transfer_frozen_asset_should_not_work ... ok
test tests::approval_deposits_work ... ok
test tests::finish_destroy_asset_destroys_asset ... ok
test tests::approval_lifecycle_works ... ok
test tests::cannot_transfer_more_than_approved ... ok
test tests::destroy_accounts_calls_died_hooks ... ok
test tests::cannot_transfer_more_than_exists ... ok
test tests::imbalances_should_work ... ok
test tests::normal_asset_create_and_destroy_callbacks_should_work ... ok
test tests::destroy_should_refund_approvals ... ok
test tests::cancel_approval_works ... ok
test tests::force_metadata_should_work ... ok
test tests::force_asset_status_should_work ... ok
test tests::querying_allowance_should_work ... ok
test tests::non_providing_should_work ... ok
test tests::holding_asset_account_balance_should_work ... ok
test tests::origin_guards_should_work ... ok
Sep 06 07:32:44.830 ERROR runtime::system: Logic error: Unexpected underflow in reducing consumer    
test tests::freezer_should_work ... ok
test tests::querying_name_symbol_and_decimals_should_work ... ok
test tests::root_asset_create_should_work ... ok
test tests::refunding_asset_deposit_with_burn_should_work ... ok
test tests::querying_roles_should_work ... ok
test tests::minting_insufficient_assets_with_deposit_without_consumer_should_work ... ok
test tests::querying_total_supply_should_work ... ok
test tests::minting_insufficient_asset_with_deposit_should_work_when_consumers_exhausted ... ok
test tests::refunding_calls_died_hook ... ok
test tests::minting_too_many_insufficient_assets_fails ... ok
test tests::partial_destroy_should_work ... ok
test tests::force_cancel_approval_works ... ok
test tests::refunding_asset_deposit_without_burn_should_work ... ok
test tests::lifecycle_should_work ... ok
test tests::set_team_should_work ... ok
test tests::slashing_asset_balance_should_work ... ok
test tests::slashing_reserved_asset_balance_should_work ... ok
test tests::min_balance_should_work ... ok
test tests::transferring_amount_below_available_balance_should_work ... ok
test tests::transfer_approved_all_funds ... ok
test tests::refunding_asset_deposit_with_burn_disallowed_should_fail ... ok
test types::ensure_bool_decodes_to_consumer_or_sufficient ... ok
test tests::transfer_large_asset ... ok
test tests::transferring_amount_more_than_available_balance_should_not_work ... ok
test tests::set_metadata_should_work ... ok
test tests::transfer_owner_should_work ... ok
test tests::transferring_less_than_one_unit_is_fine ... ok
test tests::unreserving_higher_with_best_effort_asset_balance_should_work ... ok
test tests::transferring_reserved_asset_balance_to_nonexistent_should_fail ... ok
test tests::transferring_more_units_than_total_supply_should_not_work ... ok
test tests::transferring_enough_to_kill_source_when_keep_alive_should_fail ... ok
test tests::transferring_frozen_user_should_not_work ... ok
test tests::unreserving_asset_balance_should_work ... ok
test tests::transferring_frozen_asset_should_not_work ... ok
test tests::transferring_reserved_balance_should_work ... ok
test tests::transferring_to_frozen_account_should_work ... ok

test result: ok. 61 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.07s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao_bounties-9d09c312b514bca5)

running 21 tests
test tests::genesis_config_works ... ok
test tests::accepted_spend_proposal_ignored_outside_spend_period ... ok
test tests::genesis_funding_works ... ok
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::expire_and_unassign ... ok
test tests::inexistent_account_works ... ok
test tests::accepted_spend_proposal_enacted_on_spend_period ... ok
test tests::close_bounty_works ... ok
test tests::claim_handles_high_fee ... ok
test tests::accept_curator_handles_different_deposit_calculations ... ok
test tests::cancel_and_refund ... ok
test tests::create_bounty_works ... ok
test tests::unused_pot_should_diminish ... ok
test tests::extend_expiry ... ok
test tests::award_and_cancel ... ok
test tests::treasury_account_doesnt_get_deleted ... ok
test tests::pot_underflow_should_not_diminish ... ok
test tests::assign_curator_works ... ok
test tests::unassign_curator_self ... ok
test tests::award_and_claim_bounty_works ... ok
test tests::unassign_curator_works ... ok

test result: ok. 21 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao_bounties_precompile-9196153ddafff614)

running 1 test
test __DaoBountiesPrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao_collective-18b44a063002b1f5)

running 21 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::motions_basic_environment_works ... ok
test tests::motions_approval_works ... ok
test tests::motions_ignoring_bad_index_collective_vote_works ... ok
test tests::motions_reproposing_disapproved_works ... ok
test tests::correct_validate_and_get_proposal ... ok
test tests::close_disapprove_does_not_care_about_weight_or_len ... ok
test tests::motions_approval_with_enough_votes_and_lower_voting_threshold_works ... ok
test tests::motions_ignoring_non_collective_proposals_works ... ok
test tests::motion_with_no_votes_closes_with_disapproval ... ok
test tests::close_with_no_prime_but_majority_works ... ok
test tests::close_works ... ok
test tests::motions_vote_after_works ... ok
test tests::motions_ignoring_non_collective_votes_works ... ok
test tests::propose_works ... ok
test tests::proposal_weight_limit_ignored_on_disapprove ... ok
test tests::proposal_weight_limit_works_on_approve ... ok
test tests::motions_disapproval_works ... ok
test tests::removal_of_old_voters_votes_works ... ok
test tests::removal_of_old_voters_votes_works_with_set_members ... ok
test tests::limit_active_proposals ... ok

test result: ok. 21 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.10s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao_collective_precompile-24225f095b5de66b)

running 1 test
test __DaoCollectivePrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao_democracy-4d7b069fff576a17)

running 55 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::delegation::self_delegation_not_allowed ... ok
test tests::decoders::test_decode_compact_u32_at ... ok
test tests::delegation::split_vote_delegation_should_be_ignored ... ok
test tests::delegation::single_proposal_should_work_with_vote_and_delegation ... ok
test tests::delegation::single_proposal_should_work_with_delegation ... ok
test tests::delegation::single_proposal_should_work_with_delegation_and_vote ... ok
test tests::external_proposing::external_majority_referendum_works ... ok
test tests::delegation::single_proposal_should_work_with_undelegation ... ok
test tests::external_proposing::external_blacklisting_should_work ... ok
test tests::cancellation::emergency_cancel_should_work ... ok
test tests::external_proposing::external_and_public_interleaving_works ... ok
test tests::delegation::conviction_should_be_honored_in_delegation ... ok
test tests::delegation::cyclic_delegation_should_unwind ... ok
test tests::external_proposing::external_default_referendum_works ... ok
test tests::external_proposing::external_referendum_works ... ok
test tests::fast_tracking::fast_track_referendum_fails_when_no_simple_majority ... ok
test tests::lock_voting::lock_voting_should_work_with_delegation ... ok
test tests::fast_tracking::fast_track_referendum_works ... ok
test tests::params_should_work ... ok
test tests::fast_tracking::instant_next_block_referendum_backed ... ok
test tests::lock_voting::no_locks_without_conviction_should_work ... ok
test tests::delegation::redelegation_keeps_lock ... ok
test tests::external_proposing::veto_external_works ... ok
test tests::lock_voting::locks_should_persist_from_voting_to_delegation ... ok
test tests::lock_voting::multi_consolidation_of_lockvotes_should_be_conservative ... ok
test tests::fast_tracking::instant_referendum_works ... ok
test tests::public_proposals::backing_for_should_work ... ok
test tests::lock_voting::single_consolidation_of_lockvotes_should_work_as_before ... ok
test tests::public_proposals::deposit_for_proposals_should_be_returned ... ok
test tests::lock_voting::locks_should_persist_from_delegation_to_voting ... ok
test tests::lock_voting::prior_lockvotes_should_be_enforced ... ok
test tests::set_balance_proposal_is_correctly_filtered_out ... ok
test tests::lock_voting::lock_voting_should_work ... ok
test tests::public_proposals::poor_proposer_should_not_work ... ok
test tests::public_proposals::blacklisting_should_work ... ok
test tests::public_proposals::deposit_for_proposals_should_be_taken ... ok
test tests::scheduling::lowest_unbaked_should_be_sensible ... ok
test tests::public_proposals::poor_seconder_should_not_work ... ok
test tests::scheduling::delayed_enactment_should_work ... ok
test tests::public_proposals::cancel_proposal_should_work ... ok
test vote_threshold::tests::should_work ... ok
test tests::scheduling::simple_failing_should_work ... ok
test tests::scheduling::ooo_inject_referendums_should_work ... ok
test tests::public_proposals::proposal_with_deposit_below_minimum_should_not_work ... ok
test tests::public_proposals::runners_up_should_come_after ... ok
test tests::scheduling::simple_passing_should_work ... ok
test tests::voting::passing_low_turnout_voting_should_work ... ok
test tests::voting::controversial_low_turnout_voting_should_work ... ok
test tests::voting::split_vote_cancellation_should_work ... ok
test tests::voting::overvoting_should_fail ... ok
test tests::voting::controversial_voting_should_work ... ok
test tests::voting::single_proposal_should_work ... ok
test tests::voting::split_voting_should_work ... ok
test tests::decoders::len_of_deposit_of ... ok

test result: ok. 55 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.39s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao_democracy_precompile-d8ea90ac57e322fd)

running 1 test
test __DaoDemocracyPrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao_eth_governance-ef888b5302257d3e)

running 8 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::propose_pending_works ... ok
test tests::vote_pending_works ... ok
test tests::vote_approve_works ... ok
test tests::close_works ... ok
test tests::propose_approve_works ... ok
test tests::propose_account_not_signer ... ok
test tests::propose_account_invalid ... ok

test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao_eth_governance_precompile-ac076c5186089e0d)

running 1 test
test __DaoEthGovernancePrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao_membership-efd84dc9eee88c46)

running 9 tests
test tests::change_key_works_that_does_not_change_order ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::change_key_works ... ok
test tests::query_membership_works ... ok
test tests::swap_member_works_that_does_not_change_order ... ok
test tests::swap_member_works ... ok
test tests::reset_members_works ... ok
test tests::add_member_works ... ok
test tests::remove_member_works ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao_membership_precompile-2fadcc9ac282db18)

running 1 test
test __DaoMembershipPrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao_nft_governance-d651d9fe4d03a908)

running 4 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::propose_works ... ok
test tests::vote_works ... ok
test tests::close_works ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao_precompile-cd6c5b4843b89685)

running 1 test
test __DaoPrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao_subscription-58c85d136a55d06a)

running 18 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::ensure_active_not_exists ... ok
test tests::change_subscription_not_exists ... ok
test tests::subscribe_not_enough_balance ... ok
test tests::ensure_active_works ... ok
test tests::subscribe_works_selected_tier ... ok
test tests::subscribe_works_default_tier ... ok
test tests::fails_already_subscribed ... ok
test tests::set_subscription_tiers_works ... ok
test tests::change_subscription_tier_invalid ... ok
test tests::change_subscription_works ... ok
test tests::change_subscription_low_balance ... ok
test tests::suspend_subscription_works ... ok
test tests::ensure_active_fn_limit_exceeded ... ok
test tests::ensure_limited_works ... ok
test tests::extend_subscription_works ... ok
test tests::ensure_active_expired ... ok
test tests::extend_subscription_balance_low ... ok

test result: ok. 18 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 2.03s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao_treasury-a1b8217018655fba)

running 13 tests
test tests::minting_works ... ok
test tests::unused_pot_should_diminish ... ok
test tests::pot_underflow_should_not_diminish ... ok
test tests::accepted_spend_proposal_enacted_on_spend_period ... ok
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::spend_origin_permissioning_works ... ok
test tests::genesis_config_works ... ok
test tests::genesis_funding_works ... ok
test tests::accepted_spend_proposal_ignored_outside_spend_period ... ok
test tests::treasury_account_doesnt_get_deleted ... ok
test tests::inexistent_account_works ... ok
test tests::spend_origin_works ... ok
test tests::max_approvals_limited ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.04s

 	Running unittests src/lib.rs (target/debug/deps/pallet_dao_treasury_precompile-ea7722ab71b3140c)

running 1 test
test __DaoTreasuryPrecompile_test_solidity_signatures ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/main.rs (target/debug/deps/societal_node-cb323ca1ecd13303)

running 3 tests
test __pallet_staking_reward_curve_test_module::reward_curve_piece_count ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test __pallet_staking_reward_curve_test_module::reward_curve_precision ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.30s

```

</details>

I ran `cargo tarpaulin` and the `lib.rs` from `dao-subscription` returned 75% of coverage, which is good.

```
|| pallets/dao-subscription/src/benchmarking.rs: 0/4
|| pallets/dao-subscription/src/lib.rs: 143/190
|| pallets/dao-subscription/src/migration.rs: 0/57
|| pallets/dao-subscription/src/weights.rs: 0/14
```

### Manual Test

This time, I was able to connect the Parachain and test the feature of this milestone. I followed the [testing guide](https://github.com/sctllabs/societal-node/blob/grant3_m3/docs/PaymentTestingGuide.md), and I didn't have any problem.

## Evaluation V1

### Unit Tests

I ran `cargo test` and received these errors.

```
error[E0407]: method `exists` is not a member of trait `DaoProvider`
   --> pallets/dao-nft-governance/src/mock.rs:252:2
	|
252 | / 	fn exists(_id: Self::Id) -> Result<(), DispatchError> {
253 | |     	Ok(())
254 | | 	}
	| |_____^ not a member of trait `DaoProvider`

error[E0407]: method `count` is not a member of trait `DaoProvider`
   --> pallets/dao-nft-governance/src/mock.rs:281:2
	|
281 | / 	fn count() -> u32 {
282 | |     	1
283 | | 	}
	| |_____^ not a member of trait `DaoProvider`

error[E0407]: method `ensure_member` is not a member of trait `DaoProvider`
   --> pallets/dao-nft-governance/src/mock.rs:285:2
	|
285 | / 	fn ensure_member(_id: Self::Id, _who: &AccountId) -> Result<bool, DispatchError> {
286 | |     	Ok(true)
287 | | 	}
	| |_____^ not a member of trait `DaoProvider`

   Compiling polkadot-runtime-parachains v0.9.41 (https://github.com/paritytech/polkadot?branch=release-v0.9.41#e203bfb3)
   Compiling pallet-dao-collective-precompile v1.0.0-dev (/home/user/Documents/societal/societal-node/precompiles/dao-collective)
For more information about this error, try `rustc --explain E0407`.
error: could not compile `pallet-dao-nft-governance` due to 3 previous errors
warning: build failed, waiting for other jobs to finish...
```

### Manual Test

I followed the instructions in the [guide](https://github.com/sctllabs/societal-node/blob/grant3_m3/docs/PaymentTestingGuide.md).

I ran `./scripts/rococo_testnet_docker_run.sh` to start the Rococo Local Testnet.

This shows the Docker Container working.
```
user@localhost:~/Documents/societal/societal-node$ docker ps -a
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS          PORTS                                                                                                                                                                                                                         NAMES
d598cb72e24c   parity/polkadot:v0.9.41             "/usr/bin/polkadot -…"   41 minutes ago   Up 41 minutes   9933/tcp, 9944/tcp, 0.0.0.0:9946->9946/tcp, :::9946->9946/tcp, 30333/tcp, 0.0.0.0:30335->30335/tcp, :::30335->30335/tcp                                                                                                       validator-charlie
007b108bc07b   parity/polkadot:v0.9.41             "/usr/bin/polkadot -…"   41 minutes ago   Up 41 minutes   9933/tcp, 9944/tcp, 0.0.0.0:9945->9945/tcp, :::9945->9945/tcp, 30333/tcp, 0.0.0.0:30334->30334/tcp, :::30334->30334/tcp                                                                                                       validator-bob
496b1e0f81f4   parity/polkadot-parachain:0.9.400   "/usr/local/bin/polk…"   41 minutes ago   Up 41 minutes   9933/tcp, 0.0.0.0:9956->9956/tcp, :::9956->9956/tcp, 9944/tcp, 0.0.0.0:9979->9979/tcp, :::9979->9979/tcp, 0.0.0.0:30345->30345/tcp, :::30345->30345/tcp, 30333/tcp, 0.0.0.0:40335->40335/tcp, :::40335->40335/tcp             asset-hub
2da67da48591   societal/societal-node:v0.0.3       "/usr/local/bin/soci…"   41 minutes ago   Up 41 minutes   9615/tcp, 9933/tcp, 0.0.0.0:9954->9954/tcp, :::9954->9954/tcp, 9944/tcp, 0.0.0.0:9977->9977/tcp, :::9977->9977/tcp, 0.0.0.0:30343->30343/tcp, :::30343->30343/tcp, 30333/tcp, 0.0.0.0:40333->40333/tcp, :::40333->40333/tcp   societal-node-parachain-2000
bd44ce0c6797   societal/societal-node:v0.0.3       "/usr/local/bin/soci…"   41 minutes ago   Up 41 minutes   9615/tcp, 9933/tcp, 0.0.0.0:9955->9955/tcp, :::9955->9955/tcp, 9944/tcp, 0.0.0.0:9978->9978/tcp, :::9978->9978/tcp, 0.0.0.0:30344->30344/tcp, :::30344->30344/tcp, 30333/tcp, 0.0.0.0:40334->40334/tcp, :::40334->40334/tcp   societal-node-parachain-2001
8e8bb09bbf4f   parity/polkadot:v0.9.41             "/usr/bin/polkadot -…"   41 minutes ago   Up 41 minutes   0.0.0.0:9944->9944/tcp, :::9944->9944/tcp, 9933/tcp, 0.0.0.0:30333->30333/tcp, :::30333->30333/tcp                                                                                                                            validator-alice
```

I tried to add the Parachain 2000. I could check on the list, but it doesn't produce new blocks.

![pasted image 0 (10)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/a6d6aa85-9c90-46fd-b0c9-4df558dddfb3)

![pasted image 0 (11)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/061f534b-016b-43d6-8f64-c831990170f8)


### Documentation

All guides that instructions to launch the Rococo Local Testnet have a link to `#run-rococo-local-testnet-with-societal-node-parachains`, but now it is `#launch-rococo-local-testnet` in the README.

The instructions to [Run in docker](https://github.com/sctllabs/societal-node/blob/grant3_m3/README.md) and to start a [Single node development chain](https://github.com/sctllabs/societal-node/blob/grant3_m3/README.md#single-node-development-chain) still working? I tried them and received the error below.

```
user@localhost:~/Documents/societal/societal-node$ ./scripts/docker_run.sh
*** Start Societal Node ***
[+] Running 1/0
 ✔ Network societal-node_default  Created                                                                                                                                                                 	0.0s
[+] Running 6/6
 ✔ dev 5 layers [⣿⣿⣿⣿⣿]  	0B/0B  	Pulled                                                                                                                                                           	34.0s
   ✔ 01085d60b3a6 Pull complete                                                                                                                                                                          	15.9s
   ✔ 8fcfcb47b1c2 Pull complete                                                                                                                                                                          	16.2s
   ✔ c1af8e07a1f9 Pull complete                                                                                                                                                                          	16.3s
   ✔ 47e3ace19e9f Pull complete                                                                                                                                                                          	31.0s
   ✔ ddc7d981c9e4 Pull complete                                                                                                                                                                          	31.0s
2023-09-05 13:11:22 Societal Node    
2023-09-05 13:11:22 ✌️  version 4.0.0-dev-2a91180de89    
2023-09-05 13:11:22 ❤️  by Societal <https://github.com/sctllabs>, 2017-2023    
2023-09-05 13:11:22 📋 Chain specification: Societal Development    
2023-09-05 13:11:22 🏷  Node name: zippy-drain-6262    
2023-09-05 13:11:22 👤 Role: AUTHORITY    
2023-09-05 13:11:22 💾 Database: RocksDb at /tmp/substratemk1Bx6/chains/societal_dev/db/full    
2023-09-05 13:11:22 ⛓  Native runtime: node-103 (societal-node-1.tx1.au1)    
Error: Input("Relay chain argument error: Invalid input: `rococo-local` only supported with `rococo-native` feature enabled.")
2023-09-05 13:11:24 assembling new collators for new session 0 at #0    
2023-09-05 13:11:24 assembling new collators for new session 1 at #0 
```

### Code Quality

I ran `cargo clippy` and didn't receive any warnings.

```
user@localhost:~/Documents/societal/societal-node$ cargo clippy
⚡ Found 3 strongly connected components which includes at least one cycle each
cycle(001) ∈ α: DisputeCoordinator ~~{"DisputeDistributionMessage"}~~> DisputeDistribution ~~{"DisputeCoordinatorMessage"}~~>  *
cycle(002) ∈ β: CandidateBacking ~~{"ProvisionerMessage"}~~> Provisioner ~~{"CandidateBackingMessage"}~~>  *
cycle(003) ∈ γ: NetworkBridgeRx ~~{"GossipSupportMessage"}~~> GossipSupport ~~{"NetworkBridgeRxMessage"}~~>  *
    Finished dev [unoptimized + debuginfo] target(s) in 1.16s
```
