# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/QSTN.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes 
| -----: | ----------- | ------------- | ------------- | ------------- |
| 0a. | License | <ul><li>[x] </li></ul> | LINK: https://github.com/QSTN-US/qstn-polkadot-marketplace-v021/blob/main/LICENSE |
| 0b. | Documentation	| <ul><li>[x] </li></ul> | LINK 1: https://github.com/QSTN-US/Polkadot-QSTN-v1/blob/main/docs/STEP-BY-STEP-MILESTONE.md & LINK 2: https://github.com/QSTN-US/Polkadot-QSTN-v1/blob/main/docs/QUICK-START.md	& LINK 3: https://github.com/QSTN-US/Polkadot-QSTN-v1/blob/main/README.md  | 
| 0c. | Testing Guide	| <ul><li>[x] </li></ul> | LINK: https://github.com/QSTN-US/Polkadot-QSTN-v1/blob/main/docs/TESTING-GUIDE.md 	| 
| 0d. | Docker | <ul><li>[x] </li></ul> |	LINK: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-node/substrate-node/docker	|
| 0e. | Article | <ul><li>[x] </li></ul> |	LINK: https://medium.com/@qstnus/qstns-next-frontier-a-bold-leap-into-the-polkadot-ecosystem-9de5b7afbf4e | 
| 1. | Survey pallet | <ul><li>[x] </li></ul> |	LINK 1: http://pallet-demo.qstnus.com/ & LINK 2: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-pallet/survey  |	
| 2. | Survey pallet UI| <ul><li>[x] </li></ul> |	LINK 1: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-node/front-end & LINK 2: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/nfts-pallet
| 3. | Substrate chain | <ul><li>[x] </li></ul> |	LINK 1:	https://cloudflare-ipfs.com/ipns/dotapps.io/?rpc=wss%3A%2F%2Fdotnode.qstnus.com#/explorer  & LINK 2: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-node/substrate-node & LINK 3: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/nfts-pallet |
| 4. | Substrate chain UI | <ul><li>[x] </li></ul> |	LINK: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-node/front-end 	|
| 5. | ZKP Proof Generation | <ul><li>[x] </li></ul> |	LINK: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/zkp-datawallet-api	|
| 6. | Data Wallet | <ul><li>[x] </li></ul> |	LINK 1: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/zkp-datawallet-api	& LINK 2: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/zkp-datawallet-api/BACKEND-ZKP |

## General Notes

## Tests

36 pallet unit tests pass:
```rust
     Running unittests src/main.rs (target/debug/deps/node_template-3f36e058f1aeb3d0)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/node_template_runtime-6086f1a75e874fc1)

running 1 test
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_survey-48178eaea42a2c27)

running 36 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::create_and_fund_survey_success ... ok
test tests::create_and_fund_survey_success_creator ... ok
test tests::create_new_survey_fail_already_existing ... ok
test tests::create_new_survey_success_creator_owner ... ok
test tests::create_new_survey_success ... ok
test tests::fund_survey_fails_funding_inferior_participants_limit ... ok
test tests::fund_survey_fails_survey_already_funded ... ok
test tests::fund_survey_fails_survey_not_created ... ok
test tests::fund_survey_fails_survey_not_owner_not_creator ... ok
test tests::fund_survey_fails_survey_not_enough_balance ... ok
test tests::fund_survey_gives_expected_reward_amount_10000_for_1000 ... ok
test tests::fund_survey_success ... ok
test tests::fund_survey_success_creator_funds ... ok
test tests::fund_survey_success_creator_owner ... ok
test tests::register_participant_fails_max_number_participants_reached ... ok
test tests::register_participant_fails_not_owner ... ok
test tests::register_participant_fails_participant_already_registered ... ok
test tests::register_participant_fails_survey_is_not_active ... ok
test tests::register_participant_fails_survey_not_created ... ok
test tests::register_participant_fails_survey_not_funded ... ok
test tests::register_participant_success ... ok
test tests::register_participant_success_creator ... ok
test tests::register_participant_success_creator_registers ... ok
test tests::reward_participant_fails_not_owner ... ok
test tests::reward_participant_fails_already_rewarded ... ok
test tests::reward_participant_fails_participant_not_registered ... ok
test tests::reward_participant_fails_survey_not_created ... ok
test tests::reward_participant_success ... ok
test tests::reward_participant_success_creator ... ok
test tests::reward_participant_fails_survey_not_funded ... ok
test tests::reward_participant_success_creator_rewards ... ok
test tests::set_survey_status_success ... ok
test tests::set_survey_status_success_creator ... ok
test tests::set_survey_status_success_creator_sets ... ok
test tests::set_survey_status_fails_not_owner ... ok

test result: ok. 36 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.08s
```
