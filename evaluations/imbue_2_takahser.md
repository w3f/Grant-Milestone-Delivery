# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/149674516ef0ca719a7f20906dcdb66eba35276d/applications/imbue_network.md#milestone-2--adding-new-features-and-refining-existing-ones
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | DevOps | <ul><li>[x] </li></ul> | [Config file for GitHub actions](https://github.com/ImbueNetwork/imbue/blob/b3c8926f45fc0f89841430cf8d193b5125bf8d77/.github/workflows/collator_actions.yml) | This delivery was already delivered as part of M1.
| 0b. | Testing Guide | <ul><li>[x] </li></ul> | [Testing instructions](https://github.com/ImbueNetwork/imbue/tree/bbc3ff0a1afb1a9b94124d960ed3f15e89e39fb8#run-the-tests), [Pallet Tests](https://github.com/ImbueNetwork/imbue/blob/00c73e58e940387db7bebd1cefed445c33a2a96e/pallets/proposals/src/tests.rs) | See [Testing Feedback](#testing-feedback) |
| 0c. | Voting Pallet| <ul><li>[x] </li></ul> | [`vote_on_milestone` extrinsic](https://github.com/ImbueNetwork/imbue/blob/b71b3278965998523bb30c0ee5e1563a5e4e6f21/pallets/proposals/src/lib.rs#L649)| Functionality is present in contract and dApp ui
| 0d. | Public board | <ul><li>[x] </li></ul> | [Public task board](https://sharing.clickup.com/b/h/4-54644340-2/b653e1b55c26828) | Public task board, allowing the community to keep an eye on the progress
| 0e. | Dapp | <ul><li>[x] </li></ul> | [dApp repo](https://github.com/ImbueNetwork/dapp), [`vote` method](https://github.com/ImbueNetwork/dapp/blob/98227ddfac8beac389fbab16b0507484af3581f2/web/src/proposals/detail/index.ts#L492) | Votes on milestone completions by participants of a funding round is possible through the dApp, via a linked PolkadotJS wallet.
| 0f. | Article | <ul><li>[x] </li></ul> | [dApp README](https://github.com/ImbueNetwork/dapp/blob/eac84b76a3562b6dcc95884c7806cb064e33d135/README.md), [Medium article from M1](https://medium.com/imbuenetwork/imbue-mvp-demo-33d6c3e29856) | -
| 1. | Substrate module: Democracy pallet | <ul><li>[x] </li></ul> | [`vote_on_milestone` extrinsic](https://github.com/ImbueNetwork/imbue/blob/b71b3278965998523bb30c0ee5e1563a5e4e6f21/pallets/proposals/src/lib.rs#L649) | Votes on milestones can be made by any contributors of the funding round, votes will count in accordance to the amount of the contribution. In contrary to the grant application contract, votes are not stored on IPFS but on-chain. This makes sense since it's part of the core logic and needs to be accessible to other extrinsics as well.
| 2. | Substrate module: Funding pallet | <ul><li>[x] </li></ul> | [`withdraw` extrinsic](https://github.com/ImbueNetwork/imbue/blob/b71b3278965998523bb30c0ee5e1563a5e4e6f21/pallets/proposals/src/lib.rs#L808) | Unlocks funds if a milestone has been approved.


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Some general findings include:

- When attempting to create a new crowdfunding project with a wallet that hasn't sufficient funds, there is no way to retry the submission after depositing $IMBU to the wallet other than copying the url into a new window and trying again. This works, but it's not good UX.
- The project id on the postgres db doesn't match the id on on the blockchain - I'm not sure if that's an issue.


### Testing Feedback

- No frontend tests were identified
- The pallet tests succeed:

```bash
$ cargo test

(...)

running 19 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::cancel_round_no_active_round ... ok
test tests::create_a_test_project_with_no_name ... ok
test tests::cancel_round ... ok
test tests::create_a_test_project_with_no_data ... ok
test tests::create_a_test_project_and_schedule_round ... ok
test tests::create_a_test_project ... ok
test tests::schedule_round_invalid_project_key ... ok
test tests::create_a_test_project_with_less_than_100_percent ... ok
test tests::schedule_round_invalid_end_block_no ... ok
test tests::test_voting_on_a_milestone ... ok
test tests::create_a_test_project_and_schedule_round_and_contribute_and_approve ... ok
test tests::test_withdraw_from_non_initiator_account ... ok
test tests::create_a_test_project_and_schedule_round_and_contribute_and_approvefail ... ok
test tests::create_a_test_project_and_schedule_round_and_contribute ... ok
test tests::submit_multiple_milestones ... ok
test tests::test_submit_milestone_without_approval ... ok
test tests::test_withdraw_upon_project_approval_and_finalised_voting ... ok
test tests::test_submit_milestone ... ok

test result: ok. 19 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.24s
```