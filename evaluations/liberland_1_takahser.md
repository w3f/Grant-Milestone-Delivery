# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/liberland.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE-MIT](https://github.com/liberland/liberland_substrate/blob/fdcc7b7e2bf27a82420487fcf264ad85a7f0952a/LICENSE-MIT) | The code that was contributed by the grantee is MIT licensed, see file. They reused code from Parity which is why there are also GPL3 and APACHE2 license files. |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Testing Guide](https://docs.google.com/document/d/1ntrT6bafTD2LfXUG9QLxOieogXELn9icN1y__EGfZ98/edit#) | See [Documentation Feedback](#documentation-feedback) |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://docs.google.com/document/d/1ntrT6bafTD2LfXUG9QLxOieogXELn9icN1y__EGfZ98/edit#), [identity tests](https://github.com/liberland/liberland_substrate/blob/fdcc7b7e2bf27a82420487fcf264ad85a7f0952a/frame/identity/src/lib.rs#L80), [LLM tests (empty)](https://github.com/liberland/liberland_substrate/blob/fdcc7b7e2bf27a82420487fcf264ad85a7f0952a/frame/llm/src/tests.rs), [elections tests](https://github.com/liberland/liberland_substrate/blob/fdcc7b7e2bf27a82420487fcf264ad85a7f0952a/frame/elections-phragmen/src/lib.rs#L1149), [democracy tests](https://github.com/liberland/liberland_substrate/tree/fdcc7b7e2bf27a82420487fcf264ad85a7f0952a/frame/democracy/src/tests) | See [Testing Guide Feedback](#testing-guide-feedback) |
| 0d. | Docker | <ul><li>[x] </li></ul> | [published Docker img](https://hub.docker.com/r/liberland/blockchain-node) | Image is published, instructions can be found in the [project wiki](https://liberland-1.gitbook.io/wiki/v/public-documents/blockchain/for-developers-and-testers/docker). It might be useful to add a link to the README on dockerhub, since currently there are no run instructions there at all. |
| 0e. | Article | <ul><li>[x] </li></ul> | [Article](https://docs.google.com/document/d/1ww8PTRofszO2jLbIS0GfavKeOuSILayIKY9KvakIUAc/edit) | - |
| 1. | LLM Pallet | <ul><li>[x] </li></ul> | [LLM Pallet](https://github.com/liberland/liberland_substrate/blob/863e4d86cb027a999777f3948adf0abb59ae749a/frame/llm/src/lib.rs) | successfully smoke-tested using Liberland-specific UI |  
| 2. | Congress Pallet | <ul><li>[x] </li></ul> | [Democracy Pallet](https://github.com/liberland/liberland_substrate/blob/863e4d86cb027a999777f3948adf0abb59ae749a/frame/democracy/src/lib.rs), [Elections Phragmen Pallet](https://github.com/liberland/liberland_substrate/blob/863e4d86cb027a999777f3948adf0abb59ae749a/frame/elections-phragmen/src/lib.rs) | successfully smoke-tested using Liberland-specific UI |  
| 3. | Voting with on-chain assets | <ul><li>[x] </li></ul> | [Democracy Pallet](https://github.com/liberland/liberland_substrate/blob/863e4d86cb027a999777f3948adf0abb59ae749a/frame/democracy/src/lib.rs), [Elections Phragmen Pallet](https://github.com/liberland/liberland_substrate/blob/863e4d86cb027a999777f3948adf0abb59ae749a/frame/elections-phragmen/src/lib.rs) | successfully smoke-tested using Liberland-specific UI |  
| 4. | Liberland Identity Pallet | <ul><li>[x] </li></ul> | [Identity Pallet](https://github.com/liberland/liberland_substrate/blob/863e4d86cb027a999777f3948adf0abb59ae749a/frame/identity/src/lib.rs) | successfully smoke-tested using Liberland-specific UI |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

- the delivery was smoke tested using the Liberland-specific frontend instead of the polkadotJs apps because the latter didn't correctly support all features, since the liberland node uses two seperate native currencies - a use case that is not covered by polkadotJs apps
- it might be helpful to open a github issue [in their repository](https://github.com/polkadot-js/apps/issues)
- the Liberland pallets are located in the [`/frame` directory](https://github.com/liberland/liberland_substrate/tree/863e4d86cb027a999777f3948adf0abb59ae749a/frame) in their repository which I personally found a bit confusing, since [FRAME pallets](https://docs.substrate.io/reference/frame-pallets/#parachain-pallets) are actually a collection of pre-built pallets maintained by the Substrate community, rather than very specific pallets as it's the case for the Liberland pallets.
- Overall, the code and documentation quality of the most recent delivery is much better than the first version that was submitted previously. The team was communicating very proactively regarding their plans and progress on the issues that were found both during earlier evaluation rounds as well as by themselves.

### Documentation Feedback

- ~~There is room for improvement regarding inline comments, both qualitative and quantitative. For example, there are a lot of `TODO`, `FIXME` and `change me` comments and commented legacy code.~~ Update: Lots of said comments have been addressed, there are still a few around, but at an acceptable level.
- ~~Also, lots of fields and functions have only sparse or even no comments at all. Feel free to add more comments here. The parity pallets that you're using as part of the same repo are a good starting point, if you're looking for inspiration on how much and comprehensive the documentation should be.~~ Update: this has been improved on as well, codebase has matured overall since the last review.
- ~~Keep in mind that good code should document itself as well. This includes appropriate naming of the concepts, a piece of code encapsulates. For example, I was confused to see two separate methods `createllm` and `create_llm` in the llm pallet's code, where the first internally calles the latter:~~ The affected code was improved
- ~~The [docs](https://liberland.github.io/) deployment seems to be broken (Tuesday, 13 December 2022, 23:50 UTC).~~ The docs have been moved and are [now accessible](https://liberland-1.gitbook.io/wiki/v/public-documents/blockchain)

### Testing Guide Feedback

- ~~I didn't identify any automated tests in the [LLM pallet](https://github.com/liberland/liberland_substrate/blob/fdcc7b7e2bf27a82420487fcf264ad85a7f0952a/frame/llm/src/tests.rs)~~ Tests for the LLM pallet have been [added](https://github.com/liberland/liberland_substrate/blob/863e4d86cb027a999777f3948adf0abb59ae749a/frame/llm/src/tests.rs)
- Instructions for running the automated tests [have been added](https://github.com/liberland/liberland_substrate/tree/863e4d86cb027a999777f3948adf0abb59ae749a#run-automated-tests).
- ~~I tried running `cargo test` from the root directory but it failed:~~ Tests pass now:

    ```bash
    $ cargo test --features runtime-benchmarks
    test benchmark_storage_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 8.20s

        Running tests/build_spec_works.rs (target/debug/deps/build_spec_works-92f4372cd4e9b40b)

    running 1 test
    test build_spec_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.15s

        Running tests/check_block_works.rs (target/debug/deps/check_block_works-e016fa341c7a6b0a)

    running 1 test
    2023-01-09 07:30:51 Low open file descriptor limit configured for the process. Current value: 4096, recommended value: 10000.    
    2023-01-09 07:30:55 Essential task `txpool-background` failed. Shutting down service.    
    2023-01-09 07:30:55 Essential task `transaction-pool-task-0` failed. Shutting down service.    
    2023-01-09 07:30:55 Essential task `transaction-pool-task-1` failed. Shutting down service.    
    Completed in 200 ms.
    2023-01-09 07:30:55 🎉 Imported 1 blocks. Best: #5    
    2023-01-09 07:30:55 Essential task `basic-block-import-worker` failed. Shutting down service.    
    test check_block_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 43.24s

        Running tests/common.rs (target/debug/deps/common-353e4dbecb89ddb7)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/export_import_flow.rs (target/debug/deps/export_import_flow-814f1a21f9927512)

    running 1 test
    test export_import_revert has been running for over 60 seconds
    test export_import_revert ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 91.08s

        Running tests/inspect_works.rs (target/debug/deps/inspect_works-271506c2d362fb23)

    running 1 test
    Header:
    Header { parent_hash: 0x6ddd5516288676843f9555da3a803db881f2e3fcd31accda6cca0b67c87f9c21, number: 1, state_root: 0x463ba88335072af089eff02c8a4ff76d7daae917cd9d22f8a451764868f7316d, extrinsics_root: 0x454f09b55295dd3cf89df7a52d4bfce181f46f1646b281cfe53801c38fae231b, digest: Digest { logs: [DigestItem::PreRuntime([66, 65, 66, 69], [2, 0, 0, 0, 0, 215, 72, 159, 16, 0, 0, 0, 0]), DigestItem::Consensus([66, 65, 66, 69], [1, 4, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162, 125, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), DigestItem::Seal([66, 65, 66, 69], [144, 138, 228, 128, 21, 14, 11, 245, 74, 74, 183, 252, 38, 182, 43, 134, 252, 122, 135, 18, 76, 48, 218, 70, 12, 187, 47, 11, 210, 200, 217, 93, 117, 87, 42, 20, 11, 70, 66, 181, 219, 111, 166, 133, 186, 19, 200, 118, 54, 203, 102, 249, 171, 161, 117, 210, 154, 184, 112, 82, 62, 67, 149, 134])] } }
    Block bytes: 6ddd5516288676843f9555da3a803db881f2e3fcd31accda6cca0b67c87f9c2104463ba88335072af089eff02c8a4ff76d7daae917cd9d22f8a451764868f7316d454f09b55295dd3cf89df7a52d4bfce181f46f1646b281cfe53801c38fae231b0c0642414245340200000000d7489f1000000000044241424529010104d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0100000000000000000000000000000000000000000000000000000000000000000000000000000005424142450101908ae480150e0bf54a4ab7fc26b62b86fc7a87124c30da460cbb2f0bd2c8d95d75572a140b4642b5db6fa685ba13c87636cb66f9aba175d29ab870523e43958604280403000b102f3b958501
    Extrinsics (1)
    - 0:
    0403000b102f3b958501
    Bytes: 280403000b102f3b958501

    2023-01-09 07:33:07 Low open file descriptor limit configured for the process. Current value: 4096, recommended value: 10000.    
    test inspect_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 40.44s

        Running tests/purge_chain_works.rs (target/debug/deps/purge_chain_works-df618ae4ddbe8f43)

    running 1 test
    "/tmp/.tmpXNwdJS/chains/dev/db/full" removed.
    2023-01-09 07:33:45 Low open file descriptor limit configured for the process. Current value: 4096, recommended value: 10000.    
    test purge_chain_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 37.90s

        Running tests/running_the_node_and_interrupt.rs (target/debug/deps/running_the_node_and_interrupt-9c90cfe32f206629)

    running 2 tests
    test running_two_nodes_with_the_same_ws_port_should_work ... ok
    test running_the_node_works_and_can_be_interrupted has been running for over 60 seconds
    test running_the_node_works_and_can_be_interrupted ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 88.22s

        Running tests/telemetry.rs (target/debug/deps/telemetry-aa201248c7b6fdfd)

    running 1 test
    test telemetry_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 10.60s

        Running tests/temp_base_path_works.rs (target/debug/deps/temp_base_path_works-a7d23bf2c1edfe82)

    running 1 test
    test temp_base_path_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 38.99s

        Running tests/version.rs (target/debug/deps/version-570f8d1e82a15bcc)

    running 2 tests
    test test_regex_matches_properly ... ok
    test version_is_full ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/websocket_server.rs (target/debug/deps/websocket_server-671548b8e7ac80ef)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/pallet_democracy-bef5559f098876b8)

    running 80 tests
    test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::cancellation::emergency_cancel_should_work ... ok
    test benchmarking::bench_fast_track ... ok
    test benchmarking::bench_cancel_referendum ... ok
    test tests::delegation::self_delegation_not_allowed ... ok
    test benchmarking::bench_external_propose_majority ... ok
    test benchmarking::bench_external_propose_default ... ok
    test benchmarking::bench_veto_external ... ok
    test tests::decoders::len_of_deposit_of ... ok
    test benchmarking::bench_external_propose ... ok
    test tests::delegation::cyclic_delegation_should_unwind ... ok
    test tests::delegation::conviction_should_be_honored_in_delegation ... ok
    test benchmarking::bench_emergency_cancel ... ok
    test benchmarking::bench_clear_public_proposals ... ok
    test tests::decoders::test_decode_compact_u32_at ... ok
    test tests::cancellation::cancel_referendum_should_work ... ok
    test tests::delegation::single_proposal_should_work_with_delegation_and_vote ... ok
    test tests::delegation::single_proposal_should_work_with_undelegation ... ok
    test tests::delegation::single_proposal_should_work_with_vote_and_delegation ... ok
    test tests::delegation::redelegation_keeps_lock ... ok
    test benchmarking::bench_on_initialize_external ... ok
    test tests::external_proposing::external_blacklisting_should_work ... ok
    test tests::delegation::single_proposal_should_work_with_delegation ... ok
    test tests::external_proposing::external_majority_referendum_works ... ok
    test tests::fast_tracking::instant_referendum_works ... ok
    test tests::fast_tracking::fast_track_referendum_works ... ok
    test tests::lock_voting::no_locks_without_conviction_should_work ... ok
    test tests::external_proposing::external_and_public_interleaving_works ... ok
    test tests::lock_voting::locks_should_persist_from_voting_to_delegation ... ok
    test tests::delegation::split_vote_delegation_should_be_ignored ... ok
    test tests::lock_voting::multi_consolidation_of_lockvotes_should_be_conservative ... ok
    test tests::external_proposing::external_referendum_works ... ok
    test tests::public_proposals::backing_for_should_work ... ok
    test tests::external_proposing::veto_external_works ... ok
    test tests::external_proposing::external_default_referendum_works ... ok
    test tests::lock_voting::single_consolidation_of_lockvotes_should_work_as_before ... ok
    test tests::fast_tracking::fast_track_referendum_fails_when_no_simple_majority ... ok
    test tests::lock_voting::lock_voting_should_work_with_delegation ... ok
    test tests::public_proposals::cancel_proposal_should_work ... ok
    test tests::public_proposals::blacklisting_should_work ... ok
    test tests::public_proposals::poor_seconder_should_not_work ... ok
    test tests::public_proposals::deposit_for_proposals_should_be_taken ... ok
    test tests::lock_voting::prior_lockvotes_should_be_enforced ... ok
    test tests::lock_voting::lock_voting_should_work ... ok
    test tests::params_should_work ... ok
    test tests::set_balance_proposal_is_correctly_filtered_out ... ok
    test tests::fast_tracking::instant_next_block_referendum_backed ... ok
    test tests::public_proposals::deposit_for_proposals_should_be_returned ... ok
    test vote_threshold::tests::should_work ... ok
    test benchmarking::bench_on_initialize_base_with_launch_period ... ok
    test tests::public_proposals::proposal_with_deposit_below_minimum_should_not_work ... ok
    test benchmarking::bench_on_initialize_base ... ok
    test tests::public_proposals::poor_proposer_should_not_work ... ok
    test tests::scheduling::lowest_unbaked_should_be_sensible ... ok
    test tests::voting::overvoting_should_fail ... ok
    test tests::lock_voting::locks_should_persist_from_delegation_to_voting ... ok
    test tests::scheduling::delayed_enactment_should_work ... ok
    test benchmarking::bench_vote_existing ... ok
    test tests::public_proposals::runners_up_should_come_after ... ok
    test benchmarking::bench_vote_new ... ok
    test tests::voting::controversial_voting_should_work ... ok
    test tests::voting::split_voting_should_work ... ok
    test tests::voting::controversial_low_turnout_voting_should_work ... ok
    test tests::voting::passing_low_turnout_voting_should_work ... ok
    test tests::voting::split_vote_cancellation_should_work ... ok
    test tests::voting::single_proposal_should_work ... ok
    test tests::scheduling::ooo_inject_referendums_should_work ... ok
    test tests::scheduling::simple_passing_should_work ... ok
    test tests::scheduling::simple_failing_should_work ... ok
    test benchmarking::bench_on_initialize_public ... ok
    test benchmarking::bench_remove_other_vote ... ok
    test benchmarking::bench_remove_vote ... ok
    test benchmarking::bench_delegate ... ok
    test benchmarking::bench_undelegate ... ok
    test benchmarking::bench_unlock_set ... ok
    test benchmarking::bench_unlock_remove ... ok
    test benchmarking::bench_propose ... ok
    test benchmarking::bench_cancel_proposal ... ok
    test benchmarking::bench_blacklist ... ok
    test benchmarking::bench_second ... ok

    test result: ok. 80 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.66s

        Running unittests src/lib.rs (target/debug/deps/pallet_elections_phragmen-cd16fee8cce8a01b)

    running 82 tests
    test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::defunct_voter_will_be_counted ... ok
    test tests::dupe_remove_should_fail ... ok
    test benchmarking::bench_remove_member_without_replacement ... ok
    test tests::genesis_members_cannot_over_stake_0 - should panic ... ok
    test tests::all_outgoing ... ok
    test tests::cannot_vote_for_no_candidate ... ok
    test tests::genesis_members_cannot_be_duplicate - should panic ... ok
    test tests::genesis_members_cannot_too_many - should panic ... ok
    test tests::can_vote_for_old_members_even_when_no_new_candidates ... ok
    test tests::can_update_votes_and_stake ... ok
    test tests::can_renounce_candidacy_runner_up ... ok
    test tests::can_renounce_candidacy_member_with_runners_bond_is_refunded ... ok
    test tests::can_renounce_candidacy_candidate ... ok
    test tests::can_vote_with_custom_stake ... ok
    test tests::cannot_vote_for_more_than_candidates_and_members_and_runners ... ok
    test tests::can_renounce_candidacy_member_without_runners_bond_is_refunded ... ok
    test tests::dupe_vote_is_moot ... ok
    test tests::election_state_is_uninterrupted ... ok
    test tests::candidates_are_always_sorted ... ok
    test tests::genesis_members_should_work ... ok
    test tests::empty_term ... ok
    test tests::genesis_voters_can_remove_lock ... ok
    test tests::current_members_are_always_next_candidate ... ok
    test tests::member_candidacy_submission_should_not_work ... ok
    test tests::candidates_lose_the_bond_when_outgoing ... ok
    test tests::members_lose_bond_once_outgoing ... ok
    test tests::member_to_runner_up_wont_slash ... ok
    test tests::members_are_sorted_based_on_id_runners_on_merit ... ok
    test tests::invalid_votes_are_moot ... ok
    test tests::params_should_work ... ok
    test tests::genesis_members_unsorted_should_work ... ok
    test tests::phragmen_should_not_self_vote ... ok
    test tests::non_voter_remove_should_not_work ... ok
    test tests::only_desired_seats_are_chosen ... ok
    test tests::dupe_candidate_submission_should_not_work ... ok
    test tests::incoming_outgoing_are_reported ... ok
    test tests::prime_is_kept_if_other_members_leave ... ok
    test tests::prime_is_gone_if_renouncing ... ok
    test tests::non_runner_up_renounce_runner_up_should_fail ... ok
    test tests::prime_votes_for_exiting_members_are_removed ... ok
    test tests::non_member_renounce_member_should_fail ... ok
    test tests::poor_candidate_submission_should_not_work ... ok
    test benchmarking::bench_remove_voter ... ok
    test tests::remove_defunct_voter_works ... ok
    test tests::remove_voter_should_work ... ok
    test tests::no_desired_members ... ok
    test tests::runner_candidate_submission_should_not_work ... ok
    test tests::runner_up_to_member_wont_slash ... ok
    test tests::remove_members_triggers_election ... ok
    test tests::term_duration_zero_is_passive ... ok
    test tests::runner_up_replacement_works_when_out_of_order ... ok
    test tests::prime_works ... ok
    test tests::runner_up_replacement_maintains_members_order ... ok
    test tests::simple_voting_should_work ... ok
    test tests::seats_should_be_released_when_no_vote ... ok
    test tests::removed_voter_should_not_be_counted ... ok
    test tests::updated_voting_bond_works ... ok
    test tests::runners_up_should_be_next_candidates ... ok
    test tests::runners_up_should_be_kept ... ok
    test tests::updating_candidacy_bond_works ... ok
    test tests::remove_and_replace_member_works ... ok
    test tests::renounce_candidacy_count_can_overestimate ... ok
    test tests::unsorted_runners_up_are_detected ... ok
    test tests::simple_candidate_submission_should_work ... ok
    test tests::runners_up_lose_bond_once_outgoing ... ok
    test benchmarking::bench_remove_member_with_replacement ... ok
    test benchmarking::bench_renounce_candidacy_members ... ok
    test tests::wrong_renounce_candidacy_should_fail ... ok
    test tests::wrong_candidate_count_renounce_should_fail ... ok
    test tests::simple_voting_rounds_should_work ... ok
    test benchmarking::bench_renounce_candidacy_runners_up ... ok
    test tests::voting_reserves_bond_per_vote ... ok
    test benchmarking::bench_vote_less ... ok
    test benchmarking::bench_vote_equal ... ok
    test benchmarking::bench_vote_more ... ok
    test benchmarking::bench_election_phragmen_v ... ok
    test benchmarking::bench_submit_candidacy ... ok
    test benchmarking::bench_renounce_candidacy_candidate ... ok
    test benchmarking::bench_election_phragmen_c_e ... ok
    test benchmarking::bench_clean_defunct_voters ... ok
    test benchmarking::bench_election_phragmen ... ok

    test result: ok. 82 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 25.63s

        Running unittests src/lib.rs (target/debug/deps/pallet_identity-92ff4228862ae438)

    running 36 tests
    test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::field_deposit_should_work ... ok
    test tests::trailing_zeros_decodes_into_default_data ... ok
    test tests::editing_subaccounts_should_work ... ok
    test tests::test_has_identity ... ok
    test benchmarking::bench_add_sub ... ok
    test tests::adding_registrar_should_work ... ok
    test tests::clearing_account_should_remove_subaccounts_and_refund ... ok
    test tests::killing_account_should_remove_subaccounts_and_not_refund ... ok
    test tests::setting_account_id_should_work ... ok
    test tests::clearing_judgement_should_work ... ok
    test tests::requesting_judgement_should_work ... ok
    test tests::amount_of_registrars_is_limited ... ok
    test tests::registration_should_work ... ok
    test types::tests::manual_data_type_info ... ok
    test tests::setting_subaccounts_should_work ... ok
    test tests::provide_judgement_should_return_judgement_payment_failed_error ... ok
    test benchmarking::bench_set_subs_old ... ok
    test tests::killing_slashing_should_work ... ok
    test benchmarking::bench_set_subs_new ... ok
    test tests::cancelling_requested_judgement_should_work ... ok
    test benchmarking::bench_quit_sub ... ok
    test tests::uninvited_judgement_should_work ... ok
    test benchmarking::bench_rename_sub ... ok
    test benchmarking::bench_remove_sub ... ok
    test tests::resolving_subaccount_ownership_works ... ok
    test benchmarking::bench_set_fee ... ok
    test benchmarking::bench_set_fields ... ok
    test benchmarking::bench_set_account_id ... ok
    test benchmarking::bench_add_registrar ... ok
    test benchmarking::bench_cancel_request ... ok
    test benchmarking::bench_request_judgement ... ok
    test benchmarking::bench_provide_judgement ... ok
    test benchmarking::bench_set_identity ... ok
    test benchmarking::bench_kill_identity ... ok
    test benchmarking::bench_clear_identity ... ok

    test result: ok. 36 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.16s

        Running unittests src/lib.rs (target/debug/deps/pallet_liberland_initializer-a65dc690b260b194)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/pallet_liberland_legislation-4deab35d0be1ccd2)

    running 18 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::allows_repeal_of_unexisting_law ... ok
    test tests::data_disappears_after_repeal ... ok
    test tests::cant_headcount_veto_as_noncitizen ... ok
    test tests::can_headcount_veto_as_citizen ... ok
    test tests::add_law_requires_root ... ok
    test tests::can_revert_veto ... ok
    test tests::cant_headcount_veto_low_tiers ... ok
    test tests::reverted_vetos_are_ignored ... ok
    test tests::can_trigger_with_enough_vetos ... ok
    test tests::cannot_overwrite_law ... ok
    test tests::add_law_stores_correct_data ... ok
    test tests::invalid_vetos_are_ignored ... ok
    test tests::add_law_deposits_event ... ok
    test tests::repeal_law_requires_root ... ok
    test tests::repeal_deposits_event ... ok
    test tests::add_law_tier_must_be_valid ... ok
    test tests::headcount_veto_actually_removes_law ... ok

    test result: ok. 18 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running unittests src/lib.rs (target/debug/deps/pallet_llm-315c13a889d4efc3)

    running 26 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::sets_locks_durations_on_genesis ... ok
    test tests::ensure_democracy_allowed_succeeds_for_valid_citizen ... ok
    test tests::politics_lock_deposits_event ... ok
    test tests::check_pooled_llm_works ... ok
    test tests::politics_unlock_releases_10_percent ... ok
    test tests::creates_llm_on_first_block ... ok
    test tests::treasury_llm_transfer_calls_assets ... ok
    test tests::send_llm_calls_assets ... ok
    test tests::ensure_elections_allowed_fails_for_noncitizen ... ok
    test tests::ensure_democracy_allowed_fails_for_no_pooled_llm ... ok
    test tests::releases_on_future_block ... ok
    test tests::is_election_unlocked_works ... ok
    test tests::ensure_democracy_allowed_fails_for_noncitizen ... ok
    test tests::ensure_elections_allowed_succeeds_for_valid_citizen ... ok
    test tests::ensure_democracy_allowed_fails_for_locked_election_rights ... ok
    test tests::politics_unlock_deposits_event ... ok
    test tests::cant_politics_unlock_if_never_locked ... ok
    test tests::get_politi_pooled_amount_works ... ok
    test tests::politics_lock_properly_updates_balances ... ok
    test tests::only_approved_accounts_can_call_treasury_llm_transfer ... ok
    test tests::get_llm_politics_works ... ok
    test tests::releases_correct_amounts ... ok
    test tests::ensure_elections_allowed_fails_for_locked_election_rights ... ok
    test tests::cant_politics_unlock_if_withdraw_locked ... ok
    test tests::cant_politics_lock_more_than_balance ... ok

    test result: ok. 26 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

    Doc-tests kitchensink-runtime

    running 2 tests
    test src/lib.rs - benches::add_benchmarks (line 1643) ... ignored
    test src/lib.rs - benches::list_benchmarks (line 1643) ... ignored

    test result: ok. 0 passed; 0 failed; 2 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests node-cli

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-democracy

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-elections-phragmen

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-identity

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-liberland-initializer

    running 3 tests
    test src/lib.rs - (line 14) ... ignored
    test src/lib.rs - (line 20) ... ignored
    test src/lib.rs - (line 34) ... ignored

    test result: ok. 0 passed; 0 failed; 3 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-liberland-legislation

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-llm

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```