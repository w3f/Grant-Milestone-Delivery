# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/GenesisDAO.md
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Licence |<ul><li>[x] </li></ul>| n/a |  | 
| 0b. | Documentation |<ul><li>[ ] </li></ul>| n/a | Not fully evaluated yet. | 
| 0c. | Testing and Testing Guide |<ul><li>[ ] </li></ul>| https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/docs/testing.md | Integration tests are failing. Need testing guide for system test. |
| 0d. | Docker |<ul><li>[ ] </li></ul>| [node Dockerfile](https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/Dockerfile), [frontend Dockerfile](https://github.com/deep-ink-ventures/genesis-dao-frontend/blob/main/Dockerfile), [backend Dockerfile](https://github.com/deep-ink-ventures/genesis-dao-service/blob/main/Dockerfile) | Not fully evaluated yet. |
| 0e. | Article |<ul><li>[x] </li></ul>| [Link](https://docs.google.com/document/d/1c3B9iyoHE7cP5a5qYwa-A_0Vy5zo1uAo-S1vcZ5h_B4/edit#heading=h.obore8uev3ox) |  |
| 1. | Substrate module: pallet_dao_vote |<ul><li>[ ] </li></ul>| [Link](https://github.com/deep-ink-ventures/genesis-dao-node/tree/main/pallets/dao-votes) | Not fully evaluated yet. |
| 2. | Frontend Implementation	|<ul><li>[ ] </li></ul>| [Website](https://genesis-dao.org). [Repo](https://github.com/deep-ink-ventures/genesis-dao-frontend) | Not fully evaluated yet. |
| 3. | Product Touches |<ul><li>[ ] </li></ul>| n/a | Not fully evaluated yet. |

## Evaluation V1

### Unit Test

All unit tests passed.

```
running 7 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::can_change_owner ... ok
test tests::it_sets_metadata ... ok
test tests::issues_a_token ... ok
test tests::it_creates_a_dao ... ok
test tests::it_destroys_a_dao ... ok
test tests::dao_id_valid_chars ... ok

test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.23s

   Doc-tests pallet-dao-core

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

	Finished test [unoptimized + debuginfo] target(s) in 0.32s
 	Running unittests src/lib.rs (/home/user/Documents/genesisdao/genesis-dao-node/target/debug/deps/pallet_dao_assets-4e10fb2310ffc300)

running 29 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::burning_asset_balance_with_positive_balance_should_work ... ok
test tests::finish_destroy_asset_destroys_asset ... ok
test tests::imbalances_should_work ... ok
test tests::origin_guards_should_work ... ok
test tests::basic_minting_should_work ... ok
test tests::burning_asset_balance_with_zero_balance_does_nothing ... ok
test tests::approval_lifecycle_works ... ok
test tests::cannot_transfer_more_than_exists ... ok
test tests::cannot_transfer_more_than_approved ... ok
test tests::destroy_should_refund_approvals ... ok
test tests::lifecycle_should_work ... ok
test tests::assets_from_genesis_should_exist ... ok
test tests::approval_deposits_work ... ok
test tests::cancel_approval_works ... ok
test tests::reserving_and_unreserving_should_work ... ok
test tests::transfer_large_asset ... ok
test tests::transferring_amount_below_available_balance_should_work ... ok
test tests::set_metadata_should_work ... ok
test tests::querying_allowance_should_work ... ok
test tests::min_balance_should_work ... ok
test tests::querying_total_supply_should_work ... ok
test tests::transferring_less_than_one_unit_is_fine ... ok
test tests::transferring_more_units_than_total_supply_should_not_work ... ok
test tests::transferring_enough_to_kill_source_when_keep_alive_should_fail ... ok
test tests::partial_destroy_should_work ... ok
test tests::transfer_approved_all_funds ... ok
test tests::query_historic_blocks_should_work ... ok
test tests::transferring_amount_more_than_available_balance_should_not_work ... ok

test result: ok. 29 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s

   Doc-tests pallet-dao-assets

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

	Finished test [unoptimized + debuginfo] target(s) in 0.31s
 	Running unittests src/lib.rs (/home/user/Documents/genesisdao/genesis-dao-node/target/debug/deps/pallet_dao_votes-897497c511b34cd4)

running 8 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::voting_outcome_unsuccessful_proposal ... ok
test tests::can_cast_and_remove_a_vote ... ok
test tests::can_create_a_proposal ... ok
test tests::can_set_metadata ... ok
test tests::can_finalize_a_proposal ... ok
test tests::voting_outcome_successful_proposal_and_mark_implemented ... ok
test tests::can_fault_a_proposal ... ok

test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

   Doc-tests pallet-dao-votes
```

### Integration Test

The integration test failed.

```
 	Running unittests src/lib.rs (/home/user/Documents/genesisdao/genesis-dao-node/target/debug/deps/integration_wrapper-b4742002a4438968)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running tests/test_dao_lifecycle.rs (/home/user/Documents/genesisdao/genesis-dao-node/target/debug/deps/test_dao_lifecycle-d59a45746e8b198b)

running 1 test
test dao_lifecycle has been running for over 60 seconds
test dao_lifecycle ... FAILED

failures:

---- dao_lifecycle stdout ----
thread 'dao_lifecycle' panicked at 'Error creating proposal: Metadata: Pallet Votes Call Votes has incompatible metadata', integration-wrapper/tests/test_dao_lifecycle.rs:94:23
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace


failures:
	dao_lifecycle

test result: FAILED. 0 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 69.60s

error: test failed, to rerun pass `--test test_dao_lifecycle`
```

### Manual Testing

Could you provide a manual testing guide that shows the usage of the new features?

I tested the software even without this manual. I could create a DAO, a proposal and vote for this proposal. Do I need to wait until the end of the timer to close the proposal? How do I report the proposal using the frontend? Can I change the proposal duration and cust using the frontend? When I tried to use some commands, for example, `faultProposal` from votes in substrate using the account that created the DAO, I received the  "vote.SenderIsNotDaoOwner" error.

### Code Quality

I ran `yarn lint` and didn't receive warnings.

```
user@localhost:~/Documents/genesisdao/genesis-dao-frontend$ yarn lint
yarn run v1.22.19
$ next lint
info  - Loaded env from /home/user/Documents/genesisdao/genesis-dao-frontend/.env
✔ No ESLint warnings or errors
Done in 2.42s.
```
 
I ran `cargo tarpaulin` to check the coverage of the pallet dao-votes, the coverage could be improved, but it isn't mandatory.

```
running 8 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::can_create_a_proposal ... ok
test tests::can_set_metadata ... ok
test tests::can_fault_a_proposal ... ok
test tests::can_finalize_a_proposal ... ok
test tests::can_cast_and_remove_a_vote ... ok
test tests::voting_outcome_unsuccessful_proposal ... ok
test tests::voting_outcome_successful_proposal_and_mark_implemented ... ok

test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.12s

May 26 10:47:29.638  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| node/src/chain_spec.rs: 0/2
|| node/src/rpc.rs: 0/5
|| pallets/dao-assets/src/benchmarking.rs: 0/32
|| pallets/dao-assets/src/functions.rs: 158/355
|| pallets/dao-assets/src/impl_fungibles.rs: 4/61
|| pallets/dao-assets/src/lib.rs: 11/102
|| pallets/dao-assets/src/types.rs: 2/2
|| pallets/dao-assets/src/weights.rs: 0/226
|| pallets/dao-core/src/benchmarking.rs: 0/14
|| pallets/dao-core/src/functions.rs: 3/6
|| pallets/dao-core/src/lib.rs: 44/96
|| pallets/dao-core/src/weights.rs: 0/32
|| pallets/dao-votes/src/benchmarking.rs: 0/20
|| pallets/dao-votes/src/lib.rs: 126/164
|| pallets/dao-votes/src/test_utils.rs: 36/44
|| pallets/dao-votes/src/weights.rs: 0/40
||
31.97% coverage, 384/1201 lines covered
```

This coverage is only for the tests in the pallets/dao-votes.
