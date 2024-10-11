# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Shivarthu.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** takahser

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 0a. | Licence | <ul><li>[x] </li></ul> | https://github.com/reaudito/shivarthu/blob/main/LICENSE | GNU General Public License v3.0| 
| 0b. | Documentation | <ul><li>[x] </li></ul> | https://github.com/reaudito/shivarthu/blob/main/README.md |  | 
| 0c. |  Testing Guide | <ul><li>[x] </li></ul> | https://github.com/reaudito/shivarthu-client-tests <br/> https://github.com/reaudito/shivarthu/blob/main/README.md  |  |
| 0d. | Docker | <ul><li>[x] </li></ul> | https://github.com/reaudito/shivarthu/blob/main/Containerfile |  | 
| 0e. | Article | <ul><li>[x] </li></ul> | https://github.com/reaudito/shivarthu/blob/main/docs/Shivarthu.md |  |
|  1. | Substrate module: Peer review system | <ul><li>[x] </li></ul> | https://github.com/reaudito/shivarthu/tree/main/custom-pallets/departments <br/> https://github.com/reaudito/shivarthu/tree/main/custom-pallets/department-funding | |
| 2. | Substrate module: Fund allocation | <ul><li>[x] </li></ul> | https://github.com/reaudito/shivarthu/tree/main/custom-pallets/positive-externality <br/> https://github.com/reaudito/shivarthu/tree/main/custom-pallets/project-tips <br/> https://github.com/reaudito/shivarthu/tree/main/custom-pallets/department-funding| |
| 3. | User interface | <ul><li>[x] </li></ul> | https://github.com/reaudito/shivarthu-client <br/> https://github.com/reaudito/shivarthu-client-tests  | |
| 4. | Search Engine | <ul><li>[x] </li></ul> | https://github.com/reaudito/shivarthu_offchain_computing|  |

# General Notes

~~Benchmarking tests are failing:~~ EDIT: Benchmarking tests now passing:

<details>
  <summary>Output</summary>

```rust
warning: associated function `deposit_event` is never used
  --> custom-pallets/sortition-sum-game/src/lib.rs:44:43
   |
44 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
   |                                              ^^^^^^^^^^^^^ associated function in this implementation
   |
   = note: `#[warn(dead_code)]` on by default

warning: `pallet-sortition-sum-game` (lib) generated 1 warning
warning: use of deprecated associated function `frame_support::pallet_prelude::StorageDoubleMap::<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>::remove_prefix`: Use `clear_prefix` instead
   --> custom-pallets/schelling-game-shared/src/extras.rs:528:21
    |
528 |         <VoteCommits<T>>::remove_prefix(key.clone(), None); // Deprecated: Use clear_prefix instead
    |                           ^^^^^^^^^^^^^
    |
    = note: `#[warn(deprecated)]` on by default

warning: use of deprecated associated function `frame_support::pallet_prelude::StorageDoubleMap::<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>::remove_prefix`: Use `clear_prefix` instead
   --> custom-pallets/schelling-game-shared/src/score_game.rs:154:26
    |
154 |         <ScoreVoteCommits<T>>::remove_prefix(key.clone(), None); // Deprecated: Use clear_prefix instead
    |                                ^^^^^^^^^^^^^

warning: associated function `deposit_event` is never used
   --> custom-pallets/schelling-game-shared/src/lib.rs:180:43
    |
180 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
    |                                              ^^^^^^^^^^^^^ associated function in this implementation
    |
    = note: `#[warn(dead_code)]` on by default

warning: `pallet-schelling-game-shared` (lib) generated 3 warnings
warning: associated function `deposit_event` is never used
  --> custom-pallets/shared-storage/src/lib.rs:77:43
   |
77 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
   |                                              ^^^^^^^^^^^^^ associated function in this implementation
   |
   = note: `#[warn(dead_code)]` on by default

warning: `pallet-shared-storage` (lib) generated 1 warning
   Compiling wasm-opt-sys v0.116.0
   Compiling librocksdb-sys v0.11.0+8.1.1
warning: unused import: `assert_noop`
  --> custom-pallets/department-funding/src/benchmarking.rs:11:21
   |
11 | use frame_support::{assert_noop, assert_ok};
   |                     ^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused variable: `department_account_id`
   --> custom-pallets/department-funding/src/benchmarking.rs:181:7
    |
181 |         let department_account_id = 5;
    |             ^^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_department_account_id`
    |
    = note: `#[warn(unused_variables)]` on by default

warning: unused variable: `department_account_id`
   --> custom-pallets/department-funding/src/benchmarking.rs:222:7
    |
222 |         let department_account_id = 5;
    |             ^^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_department_account_id`

warning: unused variable: `department_account_id`
   --> custom-pallets/department-funding/src/benchmarking.rs:269:7
    |
269 |         let department_account_id = 5;
    |             ^^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_department_account_id`

warning: unused variable: `department_account_id`
   --> custom-pallets/department-funding/src/benchmarking.rs:328:7
    |
328 |         let department_account_id = 5;
    |             ^^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_department_account_id`

warning: unused variable: `stake`
   --> custom-pallets/department-funding/src/benchmarking.rs:368:7
    |
368 |         let stake = DepartmentFunding::<T>::u64_to_balance_saturated(100);
    |             ^^^^^ help: if this is intentional, prefix it with an underscore: `_stake`

warning: unused variable: `department_account_id`
   --> custom-pallets/department-funding/src/benchmarking.rs:408:7
    |
408 |         let department_account_id = 5;
    |             ^^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_department_account_id`

warning: unused variable: `stake`
   --> custom-pallets/department-funding/src/benchmarking.rs:448:7
    |
448 |         let stake = DepartmentFunding::<T>::u64_to_balance_saturated(100);
    |             ^^^^^ help: if this is intentional, prefix it with an underscore: `_stake`

warning: unused variable: `department_account_id`
   --> custom-pallets/department-funding/src/benchmarking.rs:493:7
    |
493 |         let department_account_id = 5;
    |             ^^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_department_account_id`

warning: unused variable: `stake`
   --> custom-pallets/department-funding/src/benchmarking.rs:533:7
    |
533 |         let stake = DepartmentFunding::<T>::u64_to_balance_saturated(100);
    |             ^^^^^ help: if this is intentional, prefix it with an underscore: `_stake`

warning: unused variable: `department_account_id`
   --> custom-pallets/department-funding/src/benchmarking.rs:591:7
    |
591 |         let department_account_id = 5;
    |             ^^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_department_account_id`

warning: unused variable: `stake`
   --> custom-pallets/department-funding/src/benchmarking.rs:631:7
    |
631 |         let stake = DepartmentFunding::<T>::u64_to_balance_saturated(100);
    |             ^^^^^ help: if this is intentional, prefix it with an underscore: `_stake`

warning: `pallet-department-funding` (lib) generated 12 warnings (run `cargo fix --lib -p pallet-department-funding` to apply 1 suggestion)
warning: unused import: `assert_noop`
  --> custom-pallets/positive-externality/src/benchmarking.rs:11:21
   |
11 | use frame_support::{assert_noop, assert_ok};
   |                     ^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused variable: `stake`
  --> custom-pallets/positive-externality/src/benchmarking.rs:47:7
   |
47 |         let stake = PositiveExternality::<T>::u64_to_balance_saturated(100);
   |             ^^^^^ help: if this is intentional, prefix it with an underscore: `_stake`
   |
   = note: `#[warn(unused_variables)]` on by default

warning: unused variable: `stake`
   --> custom-pallets/positive-externality/src/benchmarking.rs:258:7
    |
258 |         let stake = PositiveExternality::<T>::u64_to_balance_saturated(100);
    |             ^^^^^ help: if this is intentional, prefix it with an underscore: `_stake`

warning: unused variable: `stake`
   --> custom-pallets/positive-externality/src/benchmarking.rs:305:7
    |
305 |         let stake = PositiveExternality::<T>::u64_to_balance_saturated(100);
    |             ^^^^^ help: if this is intentional, prefix it with an underscore: `_stake`

warning: unused variable: `stake`
   --> custom-pallets/positive-externality/src/benchmarking.rs:357:7
    |
357 |         let stake = PositiveExternality::<T>::u64_to_balance_saturated(100);
    |             ^^^^^ help: if this is intentional, prefix it with an underscore: `_stake`

warning: unused variable: `stake`
   --> custom-pallets/positive-externality/src/benchmarking.rs:432:7
    |
432 |         let stake = PositiveExternality::<T>::u64_to_balance_saturated(100);
    |             ^^^^^ help: if this is intentional, prefix it with an underscore: `_stake`

warning: unused variable: `who`
   --> custom-pallets/positive-externality/src/lib.rs:446:8
    |
446 |             let who = ensure_signed(origin)?;
    |                 ^^^ help: if this is intentional, prefix it with an underscore: `_who`

warning: function `assert_last_event` is never used
  --> custom-pallets/positive-externality/src/benchmarking.rs:17:5
   |
17 |     fn assert_last_event<T: 'static + pallet::Config>(
   |        ^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: associated function `get_drawn_jurors` is never used
  --> custom-pallets/positive-externality/src/extras.rs:59:16
   |
29 | impl<T: Config> Pallet<T> {
   | ------------------------- associated function in this implementation
...
59 |     pub(super) fn get_drawn_jurors(user_to_calculate: T::AccountId) -> Vec<(T::AccountId, u64)> {
   |                   ^^^^^^^^^^^^^^^^

warning: associated function `deposit_event` is never used
   --> custom-pallets/positive-externality/src/lib.rs:163:43
    |
163 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
    |                                              ^^^^^^^^^^^^^ associated function in this implementation

warning: unused import: `Incentives`
 --> custom-pallets/project-tips/src/benchmarking.rs:5:20
  |
5 | use crate::types::{Incentives, TippingName};
  |                    ^^^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

warning: unused import: `assert_noop`
 --> custom-pallets/project-tips/src/benchmarking.rs:9:21
  |
9 | use frame_support::{assert_noop, assert_ok};
  |                     ^^^^^^^^^^^

warning: unused import: `log::log`
  --> custom-pallets/project-tips/src/benchmarking.rs:11:5
   |
11 | use log::log;
   |     ^^^^^^^^

warning: unused imports: `info` and `warn`
  --> custom-pallets/project-tips/src/benchmarking.rs:12:11
   |
12 | use log::{info, warn};
   |           ^^^^  ^^^^

warning: unused import: `pallet_schelling_game_shared::types::Period`
  --> custom-pallets/project-tips/src/benchmarking.rs:13:5
   |
13 | use pallet_schelling_game_shared::types::Period;
   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `pallet_schelling_game_shared::PeriodName`
  --> custom-pallets/project-tips/src/benchmarking.rs:14:5
   |
14 | use pallet_schelling_game_shared::PeriodName;
   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `pallet_schelling_game_shared::StakingStartTime`
  --> custom-pallets/project-tips/src/benchmarking.rs:15:5
   |
15 | use pallet_schelling_game_shared::StakingStartTime;
   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `pallet_sortition_sum_game::SortitionSumTrees`
  --> custom-pallets/project-tips/src/benchmarking.rs:16:5
   |
16 | use pallet_sortition_sum_game::SortitionSumTrees;
   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused variable: `stake`
  --> custom-pallets/project-tips/src/benchmarking.rs:71:7
   |
71 |         let stake = ProjectTips::<T>::u64_to_balance_saturated(100);
   |             ^^^^^ help: if this is intentional, prefix it with an underscore: `_stake`
   |
   = note: `#[warn(unused_variables)]` on by default

warning: unused variable: `drawn_jurors`
  --> custom-pallets/project-tips/src/benchmarking.rs:96:7
   |
96 |         let drawn_jurors = <pallet_schelling_game_shared::Pallet<T>>::drawn_jurors(key.clone());
   |             ^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_drawn_jurors`

warning: unused variable: `period`
   --> custom-pallets/project-tips/src/benchmarking.rs:103:7
    |
103 |         let period = <pallet_schelling_game_shared::Pallet<T>>::get_period(key.clone());
    |             ^^^^^^ help: if this is intentional, prefix it with an underscore: `_period`

warning: unused variable: `stake`
   --> custom-pallets/project-tips/src/benchmarking.rs:244:7
    |
244 |         let stake = ProjectTips::<T>::u64_to_balance_saturated(100);
    |             ^^^^^ help: if this is intentional, prefix it with an underscore: `_stake`

warning: unused variable: `drawn_jurors`
   --> custom-pallets/project-tips/src/benchmarking.rs:269:7
    |
269 |         let drawn_jurors = <pallet_schelling_game_shared::Pallet<T>>::drawn_jurors(key.clone());
    |             ^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_drawn_jurors`

warning: unused variable: `period`
   --> custom-pallets/project-tips/src/benchmarking.rs:276:7
    |
276 |         let period = <pallet_schelling_game_shared::Pallet<T>>::get_period(key.clone());
    |             ^^^^^^ help: if this is intentional, prefix it with an underscore: `_period`

warning: unused variable: `stake_required`
   --> custom-pallets/project-tips/src/benchmarking.rs:387:7
    |
387 |         let stake_required = tipping_value.stake_required;
    |             ^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_stake_required`

warning: unused variable: `now`
   --> custom-pallets/project-tips/src/benchmarking.rs:465:7
    |
465 |         let now = <frame_system::Pallet<T>>::block_number();
    |             ^^^ help: if this is intentional, prefix it with an underscore: `_now`

warning: unused variable: `stake`
   --> custom-pallets/project-tips/src/benchmarking.rs:506:7
    |
506 |         let stake = ProjectTips::<T>::u64_to_balance_saturated(100);
    |             ^^^^^ help: if this is intentional, prefix it with an underscore: `_stake`

warning: unused variable: `stake`
   --> custom-pallets/project-tips/src/benchmarking.rs:564:7
    |
564 |         let stake = ProjectTips::<T>::u64_to_balance_saturated(100);
    |             ^^^^^ help: if this is intentional, prefix it with an underscore: `_stake`

warning: unused variable: `stake`
   --> custom-pallets/project-tips/src/benchmarking.rs:624:7
    |
624 |         let stake = ProjectTips::<T>::u64_to_balance_saturated(100);
    |             ^^^^^ help: if this is intentional, prefix it with an underscore: `_stake`

warning: unused variable: `stake`
   --> custom-pallets/project-tips/src/benchmarking.rs:690:7
    |
690 |         let stake = ProjectTips::<T>::u64_to_balance_saturated(100);
    |             ^^^^^ help: if this is intentional, prefix it with an underscore: `_stake`

warning: `pallet-positive-externality` (lib) generated 10 warnings (run `cargo fix --lib -p pallet-positive-externality` to apply 1 suggestion)
warning: `pallet-project-tips` (lib) generated 20 warnings (run `cargo fix --lib -p pallet-project-tips` to apply 8 suggestions)
warning: constant `PALLET_ID` is never used
  --> custom-pallets/profile-validation/src/lib.rs:63:7
   |
63 | const PALLET_ID: PalletId = PalletId(*b"ex/cfund");
   |       ^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: `pallet-profile-validation` (lib) generated 1 warning
warning: `pallet-department-funding` (lib test) generated 12 warnings (12 duplicates)
warning: `pallet-schelling-game-shared` (lib test) generated 3 warnings (3 duplicates)
warning: `pallet-project-tips` (lib test) generated 20 warnings (20 duplicates)
warning: `pallet-profile-validation` (lib test) generated 1 warning (1 duplicate)
warning: `pallet-positive-externality` (lib test) generated 9 warnings (9 duplicates)
warning: `pallet-shared-storage` (lib test) generated 1 warning (1 duplicate)
warning: `pallet-sortition-sum-game` (lib test) generated 1 warning (1 duplicate)
   Compiling wasm-opt-cxx-sys v0.116.0
   Compiling wasm-opt v0.116.0
   Compiling substrate-wasm-builder v17.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling node-template-runtime v0.0.0 (/home/ubuntu/shivarthu/runtime)
   Compiling rocksdb v0.21.0
   Compiling kvdb-rocksdb v0.19.0
   Compiling sc-client-db v0.35.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-service v0.35.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-cli v0.36.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling frame-benchmarking-cli v32.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling node-template v0.0.0 (/home/ubuntu/shivarthu/node)
    Finished `test` profile [unoptimized + debuginfo] target(s) in 9m 11s
     Running unittests src/lib.rs (target/debug/deps/department_funding_rpc-21cd2c78c421a092)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/department_funding_runtime_api-b4c4dd6e1fe22be0)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/node_template-3e325f9b7a754855)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/node_template_runtime-8c6dcd7ca1c242c7)

running 2 tests
test test_genesis_config_builds ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_department_funding-ea5a58d5c55eb5e8)

running 16 tests
test benchmarking::benchmarks::bench_apply_staking_period ... ok
test benchmarking::benchmarks::bench_apply_jurors ... ok
test benchmarking::benchmarks::bench_create_department_required_fund ... ok
test benchmarking::benchmarks::bench_commit_vote ... ok
test benchmarking::benchmarks::bench_add_incentive_count ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test mock::test_genesis_config_builds ... ok
test benchmarking::benchmarks::bench_draw_jurors ... ok
test tests::apply_staking_period_fails ... ok
test benchmarking::benchmarks::bench_pass_period ... ok
test tests::apply_staking_period_works ... ok
test tests::create_department_required_fund_fails_if_department_does_not_exist ... ok
test benchmarking::benchmarks::bench_reveal_vote ... ok
test tests::create_department_required_fund_fails_if_funding_more_than_tipping_value ... ok
test tests::it_works_for_default_value ... ok
test tests::schelling_game_incentives_get_test ... ok

test result: ok. 16 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.32s

     Running unittests src/lib.rs (target/debug/deps/pallet_departments-8484d2431fede7ce)

running 13 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::add_member_to_department_fails_if_not_admin ... ok
test tests::add_member_to_department_fails_if_already_member ... ok
test tests::change_the_admin_fails_if_department_does_not_exist ... ok
test tests::add_member_to_department_works ... ok
test tests::change_the_admin_works ... ok
test tests::create_department_works ... ok
test tests::change_the_admin_fails_if_not_current_admin ... ok
test tests::remove_member_from_department_works ... ok
test tests::remove_member_from_department_fails_if_not_a_member ... ok
test tests::remove_member_from_department_fails_if_no_accounts ... ok
test tests::remove_member_from_department_fails_if_not_admin ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_positive_externality-de0eb06f95504b9f)

running 20 tests
test benchmarking::benchmarks::bench_apply_staking_period ... ok
test benchmarking::benchmarks::bench_apply_jurors ... ok
test benchmarking::benchmarks::bench_create_positive_externality_post ... ok
test benchmarking::benchmarks::bench_commit_vote ... ok
test benchmarking::benchmarks::bench_pass_period ... ok
test benchmarking::benchmarks::bench_add_incentive_count ... ok
test benchmarking::benchmarks::bench_set_validate_positive_externality ... ok
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_applying_for_staking_period ... ok
test tests::test_appying_jurors ... ok
test benchmarking::benchmarks::bench_reveal_vote ... ok
test tests::test_change_period ... ok
test tests::test_draw_jurors_period ... ok
test tests::test_commit_and_incentives_vote ... ok
test tests::test_positive_externality_post ... ok
test tests::test_drawn_jurors ... ok
test tests::test_setting_positive_externality_validation ... ok
test tests::schelling_game_incentives_get_test ... ok
test benchmarking::benchmarks::bench_draw_jurors ... ok

test result: ok. 20 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 8.29s

     Running unittests src/lib.rs (target/debug/deps/pallet_profile_validation-abdc0042b8b3f4b4)

running 9 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::add_citizen_profile_check ... ok
test tests::challenge_evidence ... ok
test tests::challenge_profile_after_time_for_staking_over_test ... ok
test tests::check_fund_addition ... ok
test tests::return_profile_stake_test ... ok
test tests::test_draw_juror ... ok
test tests::schelling_game_test ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.13s

     Running unittests src/lib.rs (target/debug/deps/pallet_project_tips-88e269fa84b7529b)

running 18 tests
test benchmarking::benchmarks::bench_apply_staking_period ... ok
test benchmarking::benchmarks::bench_apply_jurors ... ok
test benchmarking::benchmarks::bench_create_project ... ok
test benchmarking::benchmarks::bench_commit_vote ... ok
test benchmarking::benchmarks::bench_add_incentive_count ... ok
test benchmarking::benchmarks::bench_draw_jurors ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test mock::test_genesis_config_builds ... ok
test tests::check_apply_staking_period_function ... ok
test benchmarking::benchmarks::bench_pass_period ... ok
test tests::check_balance_on_staking ... ok
test tests::check_create_project_function ... ok
test benchmarking::benchmarks::bench_reveal_vote ... ok
test tests::schelling_game_incentives_test ... ok
test tests::schelling_game_test ... ok
test tests::get_tip_test ... ok
test benchmarking::benchmarks::bench_get_incentives ... ok
test tests::schelling_game_incentives_get_test ... ok

test result: ok. 18 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 6.84s

     Running unittests src/lib.rs (target/debug/deps/pallet_schelling_game_shared-f71c2371546e7707)

running 13 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::apply_juror ... ok
test tests::challenger_lost_test ... ok
test tests::challenger_win_test ... ok
test tests::challenger_win_test_jurors_incentive_in_one_go ... ok
test tests::check_time_for_staking_not_over_test ... ok
test tests::end_of_time_staking_period ... ok
test tests::evidence_period_not_over_test ... ok
test tests::evidence_period_test ... ok
test tests::challenger_win_value_test ... ok
test tests::score_schelling_game_value_test ... ok
test tests::score_schelling_game_test ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.08s

     Running unittests src/lib.rs (target/debug/deps/pallet_shared_storage-1d14ea49390f4c0e)

running 9 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_get_all_department_reputation_scores ... ok
test tests::test_add_score_to_department ... ok
test tests::test_get_total_reputation_score ... ok
test tests::test_get_department_reputation_score ... ok
test tests::test_update_department_reputation_score ... ok
test tests::test_subtract_score_from_department ... ok
test tests::test_set_department_reputation_score ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_sortition_sum_game-b5437df795b24dfb)

running 4 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::correct_error_for_none_value ... ok
test tests::it_works_for_default_value ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_spaces-f9faa37c29a76817)

running 6 tests
test mock::test_genesis_config_builds ... ok
test benchmarking::benchmarks::bench_cause_error ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test benchmarking::benchmarks::bench_do_something ... ok
test tests::it_works_for_default_value ... ok
test tests::correct_error_for_none_value ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_support-7a2581a7a6ae96b0)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_template-da871cabfbb40dfd)

running 6 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test benchmarking::benchmarks::bench_cause_error ... ok
test benchmarking::benchmarks::bench_do_something ... ok
test tests::correct_error_for_none_value ... ok
test tests::it_works_for_default_value ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/positive_externality_rpc-8eff8039a8cf5b70)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/positive_externality_runtime_api-d4cbe64f8dcc43d9)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/profile_validation_rpc-e516fcb960746242)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/profile_validation_runtime_api-386600c927e38ff1)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/project_tips_rpc-a9788edba1b0b2eb)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/project_tips_runtime_api-12e8750888f09d08)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/trait_departments-bd9aa710c05ba7a4)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/trait_schelling_game_shared-8dfda2c92d1f57eb)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/trait_shared_storage-813052441831aac5)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/trait_sortition_sum_game-b8379fa23c50026f)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests department_funding_rpc

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests department_funding_runtime_api

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests node_template_runtime

running 2 tests
test runtime/src/lib.rs - benches::add_benchmarks (line 436) ... ignored
test runtime/src/lib.rs - benches::list_benchmarks (line 436) ... ignored

test result: ok. 0 passed; 0 failed; 2 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_department_funding

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_departments

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_positive_externality

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_profile_validation

running 3 tests
test custom-pallets/profile-validation/src/lib.rs - pallet::Call::add_profile_stake (line 286) ... ignored
test custom-pallets/profile-validation/src/lib.rs - pallet::Pallet<T>::add_profile_stake (line 328) ... ignored
test custom-pallets/profile-validation/src/lib.rs - pallet::dispatchables::add_profile_stake (line 94) ... ignored

test result: ok. 0 passed; 0 failed; 3 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_project_tips

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_schelling_game_shared

running 8 tests
test custom-pallets/schelling-game-shared/src/extras.rs - extras::Pallet<T>::change_period (line 271) ... ignored
test custom-pallets/schelling-game-shared/src/extras.rs - extras::Pallet<T>::change_period (line 281) ... ignored
test custom-pallets/schelling-game-shared/src/extras.rs - extras::Pallet<T>::change_period (line 288) ... ignored
test custom-pallets/schelling-game-shared/src/extras.rs - extras::Pallet<T>::set_to_staking_period (line 209) ... ignored
test custom-pallets/schelling-game-shared/src/share_link.rs - share_link::Pallet<T>::change_period_link (line 249) ... ignored
test custom-pallets/schelling-game-shared/src/share_link.rs - share_link::Pallet<T>::change_period_link (line 259) ... ignored
test custom-pallets/schelling-game-shared/src/share_link.rs - share_link::Pallet<T>::change_period_link (line 266) ... ignored
test custom-pallets/schelling-game-shared/src/share_link.rs - share_link::Pallet<T>::set_to_staking_period_link (line 228) ... ignored

test result: ok. 0 passed; 0 failed; 8 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
</details>

Still some cargo clippy warnings but not nearly as many:

<details>
  <summary>Output</summary>

```rust
warning: equality checks against false can be replaced by a negation
   --> custom-pallets/department-funding/src/lib.rs:656:59
    |
656 |                     if winning_decision == WinningDecision::WinnerYes && released == false {
    |                                                                          ^^^^^^^^^^^^^^^^^ help: try simplifying it as shown: `!released`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#bool_comparison

warning: the borrowed expression implements the required traits
   --> custom-pallets/department-funding/src/lib.rs:659:8
    |
659 | ...                   &department_required_fund_id,
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: change this to: `department_required_fund_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: the borrowed expression implements the required traits
   --> custom-pallets/department-funding/src/lib.rs:672:10
    |
672 | ...                   &department_id,
    |                       ^^^^^^^^^^^^^^ help: change this to: `department_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: the borrowed expression implements the required traits
   --> custom-pallets/department-funding/src/lib.rs:682:10
    |
682 | ...                   &department_id,
    |                       ^^^^^^^^^^^^^^ help: change this to: `department_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: equality checks against false can be replaced by a negation
   --> custom-pallets/department-funding/src/lib.rs:689:65
    |
689 |                     } else if winning_decision == WinningDecision::WinnerNo && released == false {
    |                                                                                ^^^^^^^^^^^^^^^^^ help: try simplifying it as shown: `!released`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#bool_comparison

warning: the borrowed expression implements the required traits
   --> custom-pallets/department-funding/src/lib.rs:693:8
    |
693 | ...                   &department_required_fund_id,
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: change this to: `department_required_fund_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: equality checks against false can be replaced by a negation
   --> custom-pallets/department-funding/src/lib.rs:708:61
    |
708 |                     } else if winning_decision == WinningDecision::Draw && released == false {
    |                                                                            ^^^^^^^^^^^^^^^^^ help: try simplifying it as shown: `!released`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#bool_comparison

warning: the borrowed expression implements the required traits
   --> custom-pallets/department-funding/src/lib.rs:712:8
    |
712 | ...                   &department_required_fund_id,
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: change this to: `department_required_fund_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: `pallet-department-funding` (lib) generated 35 warnings (run `cargo clippy --fix --lib -p pallet-department-funding` to apply 35 suggestions)
    Checking pallet-project-tips v4.0.0-dev (/home/ubuntu/shivarthu/custom-pallets/project-tips)
warning: unused variable: `who`
   --> custom-pallets/positive-externality/src/lib.rs:446:8
    |
446 |             let who = ensure_signed(origin)?;
    |                 ^^^ help: if this is intentional, prefix it with an underscore: `_who`
    |
    = note: `#[warn(unused_variables)]` on by default

warning: associated function `get_drawn_jurors` is never used
  --> custom-pallets/positive-externality/src/extras.rs:59:16
   |
29 | impl<T: Config> Pallet<T> {
   | ------------------------- associated function in this implementation
...
59 |     pub(super) fn get_drawn_jurors(user_to_calculate: T::AccountId) -> Vec<(T::AccountId, u64)> {
   |                   ^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: associated function `deposit_event` is never used
   --> custom-pallets/positive-externality/src/lib.rs:163:43
    |
163 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
    |                                              ^^^^^^^^^^^^^ associated function in this implementation

warning: equality checks against true are unnecessary
  --> custom-pallets/positive-externality/src/extras.rs:36:11
   |
36 |         ensure!(bool_data == true, Error::<T>::ValidationPositiveExternalityIsOff);
   |                 ^^^^^^^^^^^^^^^^^ help: try simplifying it as shown: `bool_data`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#bool_comparison
   = note: `#[warn(clippy::bool_comparison)]` on by default

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
  --> custom-pallets/positive-externality/src/extras.rs:64:18
   |
64 |             block_number: pe_block_number.clone(),
   |                           ^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `pe_block_number`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy
   = note: `#[warn(clippy::clone_on_copy)]` on by default

warning: returning the result of a `let` binding from a block
  --> custom-pallets/positive-externality/src/extras.rs:87:3
   |
84 | /         let result = T::SchellingGameSharedSource::get_evidence_period_end_block_helper_link(
85 | |             key, phase_data, now,
86 | |         );
   | |__________- unnecessary `let` binding
87 |           result
   |           ^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
   = note: `#[warn(clippy::let_and_return)]` on by default
help: return the expression directly
   |
84 ~         
85 ~         T::SchellingGameSharedSource::get_evidence_period_end_block_helper_link(
86 ~             key, phase_data, now,
87 ~         )
   |

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
  --> custom-pallets/positive-externality/src/extras.rs:79:18
   |
79 |             block_number: pe_block_number.clone(),
   |                           ^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `pe_block_number`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: returning the result of a `let` binding from a block
   --> custom-pallets/positive-externality/src/extras.rs:105:3
    |
102 | /         let result = T::SchellingGameSharedSource::get_staking_period_end_block_helper_link(
103 | |             key, phase_data, now,
104 | |         );
    | |__________- unnecessary `let` binding
105 |           result
    |           ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
    |
102 ~         
103 ~         T::SchellingGameSharedSource::get_staking_period_end_block_helper_link(
104 ~             key, phase_data, now,
105 ~         )
    |

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
  --> custom-pallets/positive-externality/src/extras.rs:97:18
   |
97 |             block_number: pe_block_number.clone(),
   |                           ^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `pe_block_number`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: returning the result of a `let` binding from a block
   --> custom-pallets/positive-externality/src/extras.rs:119:3
    |
117 | /         let result =
118 | |             T::SchellingGameSharedSource::get_drawing_period_end_helper_link(key, phase_data);
    | |______________________________________________________________________________________________- unnecessary `let` binding
119 |           result
    |           ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
    |
117 ~         
118 ~         T::SchellingGameSharedSource::get_drawing_period_end_helper_link(key, phase_data)
    |

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/positive-externality/src/extras.rs:113:18
    |
113 |             block_number: pe_block_number.clone(),
    |                           ^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `pe_block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: returning the result of a `let` binding from a block
   --> custom-pallets/positive-externality/src/extras.rs:137:3
    |
134 | /         let result = T::SchellingGameSharedSource::get_commit_period_end_block_helper_link(
135 | |             key, phase_data, now,
136 | |         );
    | |__________- unnecessary `let` binding
137 |           result
    |           ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
    |
134 ~         
135 ~         T::SchellingGameSharedSource::get_commit_period_end_block_helper_link(
136 ~             key, phase_data, now,
137 ~         )
    |

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/positive-externality/src/extras.rs:129:18
    |
129 |             block_number: pe_block_number.clone(),
    |                           ^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `pe_block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: returning the result of a `let` binding from a block
   --> custom-pallets/positive-externality/src/extras.rs:155:3
    |
152 | /         let result = T::SchellingGameSharedSource::get_vote_period_end_block_helper_link(
153 | |             key, phase_data, now,
154 | |         );
    | |__________- unnecessary `let` binding
155 |           result
    |           ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
    |
152 ~         
153 ~         T::SchellingGameSharedSource::get_vote_period_end_block_helper_link(
154 ~             key, phase_data, now,
155 ~         )
    |

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/positive-externality/src/extras.rs:147:18
    |
147 |             block_number: pe_block_number.clone(),
    |                           ^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `pe_block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: returning the result of a `let` binding from a block
   --> custom-pallets/positive-externality/src/extras.rs:167:3
    |
166 |         let result = T::SchellingGameSharedSource::selected_as_juror_helper_link(key, who);
    |         ----------------------------------------------------------------------------------- unnecessary `let` binding
167 |         result
    |         ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
    |
166 ~         
167 ~         T::SchellingGameSharedSource::selected_as_juror_helper_link(key, who)
    |

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/positive-externality/src/extras.rs:163:18
    |
163 |             block_number: pe_block_number.clone(),
    |                           ^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `pe_block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/positive-externality/src/lib.rs:272:19
    |
272 |                 block_number: storage_main_block.clone(),
    |                               ^^^^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `storage_main_block`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/positive-externality/src/lib.rs:308:19
    |
308 |                 block_number: pe_block_number.clone(),
    |                               ^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `pe_block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/positive-externality/src/lib.rs:330:19
    |
330 |                 block_number: pe_block_number.clone(),
    |                               ^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `pe_block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/positive-externality/src/lib.rs:353:19
    |
353 |                 block_number: pe_block_number.clone(),
    |                               ^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `pe_block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/positive-externality/src/lib.rs:373:19
    |
373 |                 block_number: pe_block_number.clone(),
    |                               ^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `pe_block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/positive-externality/src/lib.rs:392:19
    |
392 |                 block_number: pe_block_number.clone(),
    |                               ^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `pe_block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: manual `RangeInclusive::contains` implementation
   --> custom-pallets/positive-externality/src/lib.rs:409:12
    |
409 |             ensure!(choice <= 5 && choice >= 1, Error::<T>::ChoiceOutOfRange);
    |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^ help: use: `(1..=5).contains(&choice)`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#manual_range_contains
    = note: `#[warn(clippy::manual_range_contains)]` on by default

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/positive-externality/src/lib.rs:415:19
    |
415 |                 block_number: pe_block_number.clone(),
    |                               ^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `pe_block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/positive-externality/src/lib.rs:433:19
    |
433 |                 block_number: pe_block_number.clone(),
    |                               ^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `pe_block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/positive-externality/src/lib.rs:451:19
    |
451 |                 block_number: block_number.clone(),
    |                               ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: equality checks against false can be replaced by a negation
   --> custom-pallets/positive-externality/src/lib.rs:465:7
    |
465 |             if got_incentives_bool == false {
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: try simplifying it as shown: `!got_incentives_bool`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#bool_comparison

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/positive-externality/src/lib.rs:494:19
    |
494 |                 block_number: block_number.clone(),
    |                               ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: manual saturating arithmetic
   --> custom-pallets/positive-externality/src/lib.rs:581:35
    |
581 | ...                   (Some(win), Some(lost)) => win.checked_sub(lost).unwrap_or(0),
    |                                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: consider using `saturating_sub`: `win.saturating_sub(lost)`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#manual_saturating_arithmetic
    = note: `#[warn(clippy::manual_saturating_arithmetic)]` on by default

    Checking sc-network-gossip v0.34.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
warning: `pallet-positive-externality` (lib) generated 30 warnings (run `cargo clippy --fix --lib -p pallet-positive-externality` to apply 27 suggestions)
    Checking pallet-profile-validation v4.0.0-dev (/home/ubuntu/shivarthu/custom-pallets/profile-validation)
warning: associated function `u64_to_block_saturated` is never used
  --> custom-pallets/project-tips/src/extras.rs:81:16
   |
37 | impl<T: Config> Pallet<T> {
   | ------------------------- associated function in this implementation
...
81 |     pub(super) fn u64_to_block_saturated(input: u64) -> BlockNumberOf<T> {
   |                   ^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: returning the result of a `let` binding from a block
   --> custom-pallets/project-tips/src/extras.rs:124:3
    |
121 | /         let result = T::SchellingGameSharedSource::get_evidence_period_end_block_helper_link(
122 | |             key, phase_data, now,
123 | |         );
    | |__________- unnecessary `let` binding
124 |           result
    |           ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
    = note: `#[warn(clippy::let_and_return)]` on by default
help: return the expression directly
    |
121 ~         
122 ~         T::SchellingGameSharedSource::get_evidence_period_end_block_helper_link(
123 ~             key, phase_data, now,
124 ~         )
    |

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/extras.rs:117:66
    |
117 |         let key = SumTreeName::ProjectTips { project_id, block_number: block_number.clone() };
    |                                                                        ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy
    = note: `#[warn(clippy::clone_on_copy)]` on by default

warning: returning the result of a `let` binding from a block
   --> custom-pallets/project-tips/src/extras.rs:139:3
    |
136 | /         let result = T::SchellingGameSharedSource::get_staking_period_end_block_helper_link(
137 | |             key, phase_data, now,
138 | |         );
    | |__________- unnecessary `let` binding
139 |           result
    |           ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
    |
136 ~         
137 ~         T::SchellingGameSharedSource::get_staking_period_end_block_helper_link(
138 ~             key, phase_data, now,
139 ~         )
    |

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/extras.rs:132:66
    |
132 |         let key = SumTreeName::ProjectTips { project_id, block_number: block_number.clone() };
    |                                                                        ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: returning the result of a `let` binding from a block
   --> custom-pallets/project-tips/src/extras.rs:150:3
    |
148 | /         let result =
149 | |             T::SchellingGameSharedSource::get_drawing_period_end_helper_link(key, phase_data);
    | |______________________________________________________________________________________________- unnecessary `let` binding
150 |           result
    |           ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
    |
148 ~         
149 ~         T::SchellingGameSharedSource::get_drawing_period_end_helper_link(key, phase_data)
    |

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/extras.rs:145:66
    |
145 |         let key = SumTreeName::ProjectTips { project_id, block_number: block_number.clone() };
    |                                                                        ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: returning the result of a `let` binding from a block
   --> custom-pallets/project-tips/src/extras.rs:165:3
    |
162 | /         let result = T::SchellingGameSharedSource::get_commit_period_end_block_helper_link(
163 | |             key, phase_data, now,
164 | |         );
    | |__________- unnecessary `let` binding
165 |           result
    |           ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
    |
162 ~         
163 ~         T::SchellingGameSharedSource::get_commit_period_end_block_helper_link(
164 ~             key, phase_data, now,
165 ~         )
    |

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/extras.rs:158:66
    |
158 |         let key = SumTreeName::ProjectTips { project_id, block_number: block_number.clone() };
    |                                                                        ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: returning the result of a `let` binding from a block
   --> custom-pallets/project-tips/src/extras.rs:180:3
    |
177 | /         let result = T::SchellingGameSharedSource::get_vote_period_end_block_helper_link(
178 | |             key, phase_data, now,
179 | |         );
    | |__________- unnecessary `let` binding
180 |           result
    |           ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
    |
177 ~         
178 ~         T::SchellingGameSharedSource::get_vote_period_end_block_helper_link(
179 ~             key, phase_data, now,
180 ~         )
    |

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/extras.rs:173:66
    |
173 |         let key = SumTreeName::ProjectTips { project_id, block_number: block_number.clone() };
    |                                                                        ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: returning the result of a `let` binding from a block
   --> custom-pallets/project-tips/src/extras.rs:189:3
    |
188 |         let result = T::SchellingGameSharedSource::selected_as_juror_helper_link(key, who);
    |         ----------------------------------------------------------------------------------- unnecessary `let` binding
189 |         result
    |         ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
    |
188 ~         
189 ~         T::SchellingGameSharedSource::selected_as_juror_helper_link(key, who)
    |

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/extras.rs:186:66
    |
186 |         let key = SumTreeName::ProjectTips { project_id, block_number: block_number.clone() };
    |                                                                        ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/lib.rs:239:67
    |
239 |             let key = SumTreeName::ProjectTips { project_id, block_number: now.clone() };
    |                                                                            ^^^^^^^^^^^ help: try removing the `clone` call: `now`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/lib.rs:241:45
    |
241 |             <ValidationBlock<T>>::insert(project_id, now.clone());
    |                                                      ^^^^^^^^^^^ help: try removing the `clone` call: `now`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/lib.rs:243:77
    |
243 |             T::SchellingGameSharedSource::set_to_staking_period_pe_link(key.clone(), now.clone())?;
    |                                                                                      ^^^^^^^^^^^ help: try removing the `clone` call: `now`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/lib.rs:262:67
    |
262 |             let key = SumTreeName::ProjectTips { project_id, block_number: block_number.clone() };
    |                                                                            ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/lib.rs:284:67
    |
284 |             let key = SumTreeName::ProjectTips { project_id, block_number: block_number.clone() };
    |                                                                            ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/lib.rs:303:67
    |
303 |             let key = SumTreeName::ProjectTips { project_id, block_number: block_number.clone() };
    |                                                                            ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/lib.rs:319:67
    |
319 |             let key = SumTreeName::ProjectTips { project_id, block_number: block_number.clone() };
    |                                                                            ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/lib.rs:334:67
    |
334 |             let key = SumTreeName::ProjectTips { project_id, block_number: block_number.clone() };
    |                                                                            ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/lib.rs:351:67
    |
351 |             let key = SumTreeName::ProjectTips { project_id, block_number: block_number.clone() };
    |                                                                            ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/lib.rs:365:67
    |
365 |             let key = SumTreeName::ProjectTips { project_id, block_number: block_number.clone() };
    |                                                                            ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: equality checks against false can be replaced by a negation
   --> custom-pallets/project-tips/src/lib.rs:380:59
    |
380 |                     if winning_decision == WinningDecision::WinnerYes && released == false {
    |                                                                          ^^^^^^^^^^^^^^^^^ help: try simplifying it as shown: `!released`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#bool_comparison
    = note: `#[warn(clippy::bool_comparison)]` on by default

warning: the borrowed expression implements the required traits
   --> custom-pallets/project-tips/src/lib.rs:383:29
    |
383 |                         <Projects<T>>::mutate(&project_id, |project_option| {
    |                                               ^^^^^^^^^^^ help: change this to: `project_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args
    = note: `#[warn(clippy::needless_borrows_for_generic_args)]` on by default

warning: equality checks against false can be replaced by a negation
   --> custom-pallets/project-tips/src/lib.rs:394:65
    |
394 |                     } else if winning_decision == WinningDecision::WinnerNo && released == false {
    |                                                                                ^^^^^^^^^^^^^^^^^ help: try simplifying it as shown: `!released`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#bool_comparison

warning: the borrowed expression implements the required traits
   --> custom-pallets/project-tips/src/lib.rs:397:29
    |
397 |                         <Projects<T>>::mutate(&project_id, |project_option| {
    |                                               ^^^^^^^^^^^ help: change this to: `project_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: equality checks against false can be replaced by a negation
   --> custom-pallets/project-tips/src/lib.rs:408:61
    |
408 |                     } else if winning_decision == WinningDecision::Draw && released == false {
    |                                                                            ^^^^^^^^^^^^^^^^^ help: try simplifying it as shown: `!released`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#bool_comparison

warning: the borrowed expression implements the required traits
   --> custom-pallets/project-tips/src/lib.rs:411:29
    |
411 |                         <Projects<T>>::mutate(&project_id, |project_option| {
    |                                               ^^^^^^^^^^^ help: change this to: `project_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/project-tips/src/lib.rs:438:67
    |
438 |             let key = SumTreeName::ProjectTips { project_id, block_number: block_number.clone() };
    |                                                                            ^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `block_number`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: manual saturating arithmetic
   --> custom-pallets/project-tips/src/lib.rs:520:35
    |
520 | ...                   (Some(win), Some(lost)) => win.checked_sub(lost).unwrap_or(0),
    |                                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: consider using `saturating_sub`: `win.saturating_sub(lost)`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#manual_saturating_arithmetic
    = note: `#[warn(clippy::manual_saturating_arithmetic)]` on by default

    Checking pallet-sudo v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
warning: `pallet-project-tips` (lib) generated 31 warnings (run `cargo clippy --fix --lib -p pallet-project-tips` to apply 30 suggestions)
    Checking pallet-template v0.0.0 (/home/ubuntu/shivarthu/pallets/template)
    Checking pallet-grandpa v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
warning: constant `PALLET_ID` is never used
  --> custom-pallets/profile-validation/src/lib.rs:63:7
   |
63 | const PALLET_ID: PalletId = PalletId(*b"ex/cfund");
   |       ^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: returning the result of a `let` binding from a block
   --> custom-pallets/profile-validation/src/extras.rs:123:3
    |
120 | /         let result = T::SchellingGameSharedSource::get_evidence_period_end_block_helper_link(
121 | |             key, phase_data, now,
122 | |         );
    | |__________- unnecessary `let` binding
123 |           result
    |           ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
    = note: `#[warn(clippy::let_and_return)]` on by default
help: return the expression directly
    |
120 ~         
121 ~         T::SchellingGameSharedSource::get_evidence_period_end_block_helper_link(
122 ~             key, phase_data, now,
123 ~         )
    |

warning: returning the result of a `let` binding from a block
   --> custom-pallets/profile-validation/src/extras.rs:140:3
    |
137 | /         let result = T::SchellingGameSharedSource::get_staking_period_end_block_helper_link(
138 | |             key, phase_data, now,
139 | |         );
    | |__________- unnecessary `let` binding
140 |           result
    |           ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
    |
137 ~         
138 ~         T::SchellingGameSharedSource::get_staking_period_end_block_helper_link(
139 ~             key, phase_data, now,
140 ~         )
    |

warning: returning the result of a `let` binding from a block
   --> custom-pallets/profile-validation/src/extras.rs:154:3
    |
152 | /         let result =
153 | |             T::SchellingGameSharedSource::get_drawing_period_end_helper_link(key, phase_data);
    | |______________________________________________________________________________________________- unnecessary `let` binding
154 |           result
    |           ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
    |
152 ~         
153 ~         T::SchellingGameSharedSource::get_drawing_period_end_helper_link(key, phase_data)
    |

warning: returning the result of a `let` binding from a block
   --> custom-pallets/profile-validation/src/extras.rs:170:3
    |
167 | /         let result = T::SchellingGameSharedSource::get_commit_period_end_block_helper_link(
168 | |             key, phase_data, now,
169 | |         );
    | |__________- unnecessary `let` binding
170 |           result
    |           ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
    |
167 ~         
168 ~         T::SchellingGameSharedSource::get_commit_period_end_block_helper_link(
169 ~             key, phase_data, now,
170 ~         )
    |

warning: returning the result of a `let` binding from a block
   --> custom-pallets/profile-validation/src/extras.rs:186:3
    |
183 | /         let result = T::SchellingGameSharedSource::get_vote_period_end_block_helper_link(
184 | |             key, phase_data, now,
185 | |         );
    | |__________- unnecessary `let` binding
186 |           result
    |           ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
    |
183 ~         
184 ~         T::SchellingGameSharedSource::get_vote_period_end_block_helper_link(
185 ~             key, phase_data, now,
186 ~         )
    |

warning: returning the result of a `let` binding from a block
   --> custom-pallets/profile-validation/src/extras.rs:198:3
    |
197 |         let result = T::SchellingGameSharedSource::selected_as_juror_helper_link(key, who);
    |         ----------------------------------------------------------------------------------- unnecessary `let` binding
198 |         result
    |         ^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
    |
197 ~         
198 ~         T::SchellingGameSharedSource::selected_as_juror_helper_link(key, who)
    |

warning: returning the result of a `let` binding from a block
   --> custom-pallets/profile-validation/src/extras.rs:207:3
    |
206 |         let fund_required = registration_fee_u64.checked_sub(total_fund_u64);
    |         --------------------------------------------------------------------- unnecessary `let` binding
207 |         fund_required
    |         ^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
    |
206 ~         
207 ~         registration_fee_u64.checked_sub(total_fund_u64)
    |

    Checking sc-proposer-metrics v0.17.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/profile-validation/src/lib.rs:367:21
    |
367 |                         block_number: now.clone(),
    |                                       ^^^^^^^^^^^ help: try removing the `clone` call: `now`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy
    = note: `#[warn(clippy::clone_on_copy)]` on by default

warning: using `clone` on type `<<T as Config>::Currency as Currency<<T as Config>::AccountId>>::Balance` which implements the `Copy` trait
   --> custom-pallets/profile-validation/src/lib.rs:378:6
    |
378 |                     amount_to_fund.clone(),
    |                     ^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `amount_to_fund`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<T as Config>::Currency as Currency<<T as Config>::AccountId>>::Balance` which implements the `Copy` trait
   --> custom-pallets/profile-validation/src/lib.rs:399:17
    |
399 | ...                   deposit: amount_to_fund.clone(),
    |                                ^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `amount_to_fund`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<<T as Config>::Block as Block>::Header as Header>::Number` which implements the `Copy` trait
   --> custom-pallets/profile-validation/src/lib.rs:447:12
    |
447 |                 start: now.clone(),
    |                        ^^^^^^^^^^^ help: try removing the `clone` call: `now`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<<T as Config>::Currency as Currency<<T as Config>::AccountId>>::Balance` which implements the `Copy` trait
   --> custom-pallets/profile-validation/src/lib.rs:457:7
    |
457 |                         fees.clone(),
    |                         ^^^^^^^^^^^^ help: try removing the `clone` call: `fees`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: the borrowed expression implements the required traits
   --> custom-pallets/profile-validation/src/lib.rs:488:33
    |
488 |                     <ChallengePost<T>>::insert(&count, challenge_evidence_post);
    |                                                ^^^^^^ help: change this to: `count`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args
    = note: `#[warn(clippy::needless_borrows_for_generic_args)]` on by default

warning: the borrowed expression implements the required traits
   --> custom-pallets/profile-validation/src/lib.rs:558:34
    |
558 |             match <ChallengePost<T>>::get(&post_id) {
    |                                           ^^^^^^^^ help: change this to: `post_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: equality checks against false can be replaced by a negation
   --> custom-pallets/profile-validation/src/lib.rs:561:9
    |
561 |                     if challenge_evidence_post_c.is_comment == false {
    |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: try simplifying it as shown: `!challenge_evidence_post_c.is_comment`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#bool_comparison
    = note: `#[warn(clippy::bool_comparison)]` on by default

warning: the borrowed expression implements the required traits
   --> custom-pallets/profile-validation/src/lib.rs:562:34
    |
562 |                         <ChallengePost<T>>::insert(&count, challenge_evidence_post);
    |                                                    ^^^^^^ help: change this to: `count`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: the borrowed expression implements the required traits
   --> custom-pallets/profile-validation/src/lib.rs:566:63
    |
566 |                         let mut comment_ids = <ChallengePostCommentIds<T>>::get(&post_id);
    |                                                                                 ^^^^^^^^ help: change this to: `post_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: using `clone` on type `u64` which implements the `Copy` trait
   --> custom-pallets/profile-validation/src/lib.rs:570:35
    |
570 | ...                   comment_ids.insert(index, count.clone());
    |                                                 ^^^^^^^^^^^^^ help: try removing the `clone` call: `count`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: the borrowed expression implements the required traits
   --> custom-pallets/profile-validation/src/lib.rs:571:46
    |
571 | ...                   <ChallengePostCommentIds<T>>::insert(&post_id, &comment_ids);
    |                                                            ^^^^^^^^ help: change this to: `post_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: equality checks against false can be replaced by a negation
   --> custom-pallets/profile-validation/src/lib.rs:839:11
    |
839 | ...                   if profile_fund_info.deposit_returned == false {
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: try simplifying it as shown: `!profile_fund_info.deposit_returned`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#bool_comparison

warning: equality checks against false can be replaced by a negation
   --> custom-pallets/profile-validation/src/lib.rs:868:10
    |
868 |                         if profile_fund_info.deposit_returned == false {
    |                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: try simplifying it as shown: `!profile_fund_info.deposit_returned`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#bool_comparison

    Checking threadpool v1.8.1
    Checking gethostname v0.2.3
    Checking thousands v0.2.0
warning: `pallet-profile-validation` (lib) generated 22 warnings (run `cargo clippy --fix --lib -p pallet-profile-validation` to apply 21 suggestions)
    Checking sc-offchain v29.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
    Checking sc-basic-authorship v0.34.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
    Checking sc-consensus-grandpa v0.19.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
    Checking sc-consensus-aura v0.34.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
    Checking substrate-frame-rpc-system v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
    Checking profile-validation-rpc v0.1.0 (/home/ubuntu/shivarthu/custom-pallets/profile-validation/profile-validation-rpc)
    Checking positive-externality-rpc v0.1.0 (/home/ubuntu/shivarthu/custom-pallets/positive-externality/positive-externality-rpc)
    Checking department-funding-rpc v0.1.0 (/home/ubuntu/shivarthu/custom-pallets/department-funding/department-funding-rpc)
    Checking project-tips-rpc v0.1.0 (/home/ubuntu/shivarthu/custom-pallets/project-tips/project-tips-rpc)
    Checking pallet-transaction-payment-rpc v30.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
    Checking hex-literal v0.4.1
    Checking pallet-spaces v4.0.0-dev (/home/ubuntu/shivarthu/custom-pallets/spaces)
   Compiling wasm-opt v0.116.0
   Compiling substrate-wasm-builder v17.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling node-template-runtime v0.0.0 (/home/ubuntu/shivarthu/runtime)
    Checking rocksdb v0.21.0
    Checking kvdb-rocksdb v0.19.0
    Checking sc-client-db v0.35.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
    Checking sc-service v0.35.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
    Checking sc-cli v0.36.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
    Checking frame-benchmarking-cli v32.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 9m 19s
```
</details>

Unit tests now all successfully passing:

<details>
  <summary>New Output</summary>

```rust
warning: `pallet-profile-validation` (lib test) generated 1 warning (1 duplicate)
warning: `pallet-positive-externality` (lib test) generated 9 warnings (9 duplicates)
warning: `pallet-shared-storage` (lib test) generated 1 warning (1 duplicate)
warning: `pallet-sortition-sum-game` (lib test) generated 1 warning (1 duplicate)
   Compiling wasm-opt-cxx-sys v0.116.0
   Compiling wasm-opt v0.116.0
   Compiling substrate-wasm-builder v17.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling node-template-runtime v0.0.0 (/home/ubuntu/shivarthu/runtime)
   Compiling rocksdb v0.21.0
   Compiling kvdb-rocksdb v0.19.0
   Compiling sc-client-db v0.35.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-service v0.35.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-cli v0.36.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling frame-benchmarking-cli v32.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling node-template v0.0.0 (/home/ubuntu/shivarthu/node)
    Finished `test` profile [unoptimized + debuginfo] target(s) in 9m 11s
     Running unittests src/lib.rs (target/debug/deps/department_funding_rpc-21cd2c78c421a092)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/department_funding_runtime_api-b4c4dd6e1fe22be0)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/node_template-3e325f9b7a754855)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/node_template_runtime-8c6dcd7ca1c242c7)

running 2 tests
test test_genesis_config_builds ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_department_funding-ea5a58d5c55eb5e8)

running 16 tests
test benchmarking::benchmarks::bench_apply_staking_period ... ok
test benchmarking::benchmarks::bench_apply_jurors ... ok
test benchmarking::benchmarks::bench_create_department_required_fund ... ok
test benchmarking::benchmarks::bench_commit_vote ... ok
test benchmarking::benchmarks::bench_add_incentive_count ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test mock::test_genesis_config_builds ... ok
test benchmarking::benchmarks::bench_draw_jurors ... ok
test tests::apply_staking_period_fails ... ok
test benchmarking::benchmarks::bench_pass_period ... ok
test tests::apply_staking_period_works ... ok
test tests::create_department_required_fund_fails_if_department_does_not_exist ... ok
test benchmarking::benchmarks::bench_reveal_vote ... ok
test tests::create_department_required_fund_fails_if_funding_more_than_tipping_value ... ok
test tests::it_works_for_default_value ... ok
test tests::schelling_game_incentives_get_test ... ok

test result: ok. 16 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.32s

     Running unittests src/lib.rs (target/debug/deps/pallet_departments-8484d2431fede7ce)

running 13 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::add_member_to_department_fails_if_not_admin ... ok
test tests::add_member_to_department_fails_if_already_member ... ok
test tests::change_the_admin_fails_if_department_does_not_exist ... ok
test tests::add_member_to_department_works ... ok
test tests::change_the_admin_works ... ok
test tests::create_department_works ... ok
test tests::change_the_admin_fails_if_not_current_admin ... ok
test tests::remove_member_from_department_works ... ok
test tests::remove_member_from_department_fails_if_not_a_member ... ok
test tests::remove_member_from_department_fails_if_no_accounts ... ok
test tests::remove_member_from_department_fails_if_not_admin ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_positive_externality-de0eb06f95504b9f)

running 20 tests
test benchmarking::benchmarks::bench_apply_staking_period ... ok
test benchmarking::benchmarks::bench_apply_jurors ... ok
test benchmarking::benchmarks::bench_create_positive_externality_post ... ok
test benchmarking::benchmarks::bench_commit_vote ... ok
test benchmarking::benchmarks::bench_pass_period ... ok
test benchmarking::benchmarks::bench_add_incentive_count ... ok
test benchmarking::benchmarks::bench_set_validate_positive_externality ... ok
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_applying_for_staking_period ... ok
test tests::test_appying_jurors ... ok
test benchmarking::benchmarks::bench_reveal_vote ... ok
test tests::test_change_period ... ok
test tests::test_draw_jurors_period ... ok
test tests::test_commit_and_incentives_vote ... ok
test tests::test_positive_externality_post ... ok
test tests::test_drawn_jurors ... ok
test tests::test_setting_positive_externality_validation ... ok
test tests::schelling_game_incentives_get_test ... ok
test benchmarking::benchmarks::bench_draw_jurors ... ok

test result: ok. 20 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 8.29s

     Running unittests src/lib.rs (target/debug/deps/pallet_profile_validation-abdc0042b8b3f4b4)

running 9 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::add_citizen_profile_check ... ok
test tests::challenge_evidence ... ok
test tests::challenge_profile_after_time_for_staking_over_test ... ok
test tests::check_fund_addition ... ok
test tests::return_profile_stake_test ... ok
test tests::test_draw_juror ... ok
test tests::schelling_game_test ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.13s

     Running unittests src/lib.rs (target/debug/deps/pallet_project_tips-88e269fa84b7529b)

running 18 tests
test benchmarking::benchmarks::bench_apply_staking_period ... ok
test benchmarking::benchmarks::bench_apply_jurors ... ok
test benchmarking::benchmarks::bench_create_project ... ok
test benchmarking::benchmarks::bench_commit_vote ... ok
test benchmarking::benchmarks::bench_add_incentive_count ... ok
test benchmarking::benchmarks::bench_draw_jurors ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test mock::test_genesis_config_builds ... ok
test tests::check_apply_staking_period_function ... ok
test benchmarking::benchmarks::bench_pass_period ... ok
test tests::check_balance_on_staking ... ok
test tests::check_create_project_function ... ok
test benchmarking::benchmarks::bench_reveal_vote ... ok
test tests::schelling_game_incentives_test ... ok
test tests::schelling_game_test ... ok
test tests::get_tip_test ... ok
test benchmarking::benchmarks::bench_get_incentives ... ok
test tests::schelling_game_incentives_get_test ... ok

test result: ok. 18 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 6.84s

     Running unittests src/lib.rs (target/debug/deps/pallet_schelling_game_shared-f71c2371546e7707)

running 13 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::apply_juror ... ok
test tests::challenger_lost_test ... ok
test tests::challenger_win_test ... ok
test tests::challenger_win_test_jurors_incentive_in_one_go ... ok
test tests::check_time_for_staking_not_over_test ... ok
test tests::end_of_time_staking_period ... ok
test tests::evidence_period_not_over_test ... ok
test tests::evidence_period_test ... ok
test tests::challenger_win_value_test ... ok
test tests::score_schelling_game_value_test ... ok
test tests::score_schelling_game_test ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.08s

     Running unittests src/lib.rs (target/debug/deps/pallet_shared_storage-1d14ea49390f4c0e)

running 9 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_get_all_department_reputation_scores ... ok
test tests::test_add_score_to_department ... ok
test tests::test_get_total_reputation_score ... ok
test tests::test_get_department_reputation_score ... ok
test tests::test_update_department_reputation_score ... ok
test tests::test_subtract_score_from_department ... ok
test tests::test_set_department_reputation_score ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_sortition_sum_game-b5437df795b24dfb)

running 4 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::correct_error_for_none_value ... ok
test tests::it_works_for_default_value ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_spaces-f9faa37c29a76817)

running 6 tests
test mock::test_genesis_config_builds ... ok
test benchmarking::benchmarks::bench_cause_error ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test benchmarking::benchmarks::bench_do_something ... ok
test tests::it_works_for_default_value ... ok
test tests::correct_error_for_none_value ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_support-7a2581a7a6ae96b0)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_template-da871cabfbb40dfd)

running 6 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test benchmarking::benchmarks::bench_cause_error ... ok
test benchmarking::benchmarks::bench_do_something ... ok
test tests::correct_error_for_none_value ... ok
test tests::it_works_for_default_value ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/positive_externality_rpc-8eff8039a8cf5b70)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/positive_externality_runtime_api-d4cbe64f8dcc43d9)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/profile_validation_rpc-e516fcb960746242)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/profile_validation_runtime_api-386600c927e38ff1)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/project_tips_rpc-a9788edba1b0b2eb)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/project_tips_runtime_api-12e8750888f09d08)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/trait_departments-bd9aa710c05ba7a4)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/trait_schelling_game_shared-8dfda2c92d1f57eb)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/trait_shared_storage-813052441831aac5)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/trait_sortition_sum_game-b8379fa23c50026f)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests department_funding_rpc

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests department_funding_runtime_api

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests node_template_runtime

running 2 tests
test runtime/src/lib.rs - benches::add_benchmarks (line 436) ... ignored
test runtime/src/lib.rs - benches::list_benchmarks (line 436) ... ignored

test result: ok. 0 passed; 0 failed; 2 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_department_funding

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_departments

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_positive_externality

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_profile_validation

running 3 tests
test custom-pallets/profile-validation/src/lib.rs - pallet::Call::add_profile_stake (line 286) ... ignored
test custom-pallets/profile-validation/src/lib.rs - pallet::Pallet<T>::add_profile_stake (line 328) ... ignored
test custom-pallets/profile-validation/src/lib.rs - pallet::dispatchables::add_profile_stake (line 94) ... ignored

test result: ok. 0 passed; 0 failed; 3 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_project_tips

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_schelling_game_shared

running 8 tests
test custom-pallets/schelling-game-shared/src/extras.rs - extras::Pallet<T>::change_period (line 271) ... ignored
test custom-pallets/schelling-game-shared/src/extras.rs - extras::Pallet<T>::change_period (line 281) ... ignored
test custom-pallets/schelling-game-shared/src/extras.rs - extras::Pallet<T>::change_period (line 288) ... ignored
test custom-pallets/schelling-game-shared/src/extras.rs - extras::Pallet<T>::set_to_staking_period (line 209) ... ignored
test custom-pallets/schelling-game-shared/src/share_link.rs - share_link::Pallet<T>::change_period_link (line 249) ... ignored
test custom-pallets/schelling-game-shared/src/share_link.rs - share_link::Pallet<T>::change_period_link (line 259) ... ignored
test custom-pallets/schelling-game-shared/src/share_link.rs - share_link::Pallet<T>::change_period_link (line 266) ... ignored
test custom-pallets/schelling-game-shared/src/share_link.rs - share_link::Pallet<T>::set_to_staking_period_link (line 228) ... ignored

test result: ok. 0 passed; 0 failed; 8 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_shared_storage

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_sortition_sum_game

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_spaces

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_support

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_template

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests positive_externality_rpc

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests positive_externality_runtime_api

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests profile_validation_rpc

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests profile_validation_runtime_api

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests project_tips_rpc

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests project_tips_runtime_api

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests trait_departments

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests trait_schelling_game_shared

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests trait_shared_storage

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests trait_sortition_sum_game

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

ubuntu@ip-172-31-28-114:~/shivarthu$ cargo test
   Compiling sp-runtime v31.0.1 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling node-template-runtime v0.0.0 (/home/ubuntu/shivarthu/runtime)
   Compiling frame-benchmarking-cli v32.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling node-template v0.0.0 (/home/ubuntu/shivarthu/node)
   Compiling sp-version v29.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-inherents v26.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-api v26.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-staking v26.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-consensus v0.32.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-genesis-builder v0.7.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-blockchain v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-statement-store v10.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-transaction-pool-api v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling frame-support v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-executor v0.32.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-consensus-grandpa v13.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-client-api v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-consensus v0.33.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-timestamp v26.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-network-common v0.33.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-block-builder v26.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-session v27.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-offchain v26.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-network v0.34.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-block-builder v0.33.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-mixnet v0.4.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-tracing v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-consensus-slots v0.32.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-transaction-pool v26.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling frame-system-rpc-runtime-api v26.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-consensus-aura v0.32.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-chain-spec v27.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-mixnet v0.4.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-network-sync v0.33.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-rpc-api v0.33.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-network-transactions v0.33.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-rpc v29.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling frame-system v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling trait-sortition-sum-game v0.1.0 (/home/ubuntu/shivarthu/traits/trait-sortition-sum-game)
   Compiling trait-schelling-game-shared v0.1.0 (/home/ubuntu/shivarthu/traits/trait-schelling-game-shared)
   Compiling trait-shared-storage v0.1.0 (/home/ubuntu/shivarthu/traits/trait-shared-storage)
   Compiling frame-try-runtime v0.34.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling trait-departments v0.1.0 (/home/ubuntu/shivarthu/traits/trait-departments)
   Compiling profile-validation-runtime-api v0.1.0 (/home/ubuntu/shivarthu/custom-pallets/profile-validation/profile-validation-runtime-api)
   Compiling project-tips-runtime-api v0.1.0 (/home/ubuntu/shivarthu/custom-pallets/project-tips/project-tips-runtime-api)
   Compiling department-funding-runtime-api v0.1.0 (/home/ubuntu/shivarthu/custom-pallets/department-funding/department-funding-runtime-api)
   Compiling positive-externality-runtime-api v0.1.0 (/home/ubuntu/shivarthu/custom-pallets/positive-externality/positive-externality-runtime-api)
   Compiling sc-rpc-spec-v2 v0.34.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-informant v0.33.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-network-light v0.33.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-network-bitswap v0.33.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-transaction-pool v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling frame-benchmarking v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling pallet-balances v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling pallet-timestamp v27.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling pallet-sortition-sum-game v4.0.0-dev (/home/ubuntu/shivarthu/custom-pallets/sortition-sum-game)
warning: associated function `deposit_event` is never used
  --> custom-pallets/sortition-sum-game/src/lib.rs:44:43
   |
44 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
   |                                              ^^^^^^^^^^^^^ associated function in this implementation
   |
   = note: `#[warn(dead_code)]` on by default

   Compiling pallet-support v0.1.0 (/home/ubuntu/shivarthu/custom-pallets/support)
warning: `pallet-sortition-sum-game` (lib) generated 1 warning
   Compiling pallet-schelling-game-shared v4.0.0-dev (/home/ubuntu/shivarthu/custom-pallets/schelling-game-shared)
   Compiling frame-executive v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling pallet-shared-storage v4.0.0-dev (/home/ubuntu/shivarthu/custom-pallets/shared-storage)
   Compiling frame-support-test-pallet v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
warning: use of deprecated associated function `frame_support::pallet_prelude::StorageDoubleMap::<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>::remove_prefix`: Use `clear_prefix` instead
   --> custom-pallets/schelling-game-shared/src/extras.rs:528:21
    |
528 |         <VoteCommits<T>>::remove_prefix(key.clone(), None); // Deprecated: Use clear_prefix instead
    |                           ^^^^^^^^^^^^^
    |
    = note: `#[warn(deprecated)]` on by default

warning: use of deprecated associated function `frame_support::pallet_prelude::StorageDoubleMap::<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>::remove_prefix`: Use `clear_prefix` instead
   --> custom-pallets/schelling-game-shared/src/score_game.rs:154:26
    |
154 |         <ScoreVoteCommits<T>>::remove_prefix(key.clone(), None); // Deprecated: Use clear_prefix instead
    |                                ^^^^^^^^^^^^^

warning: associated function `deposit_event` is never used
  --> custom-pallets/shared-storage/src/lib.rs:77:43
   |
77 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
   |                                              ^^^^^^^^^^^^^ associated function in this implementation
   |
   = note: `#[warn(dead_code)]` on by default

warning: associated function `deposit_event` is never used
   --> custom-pallets/schelling-game-shared/src/lib.rs:180:43
    |
180 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
    |                                              ^^^^^^^^^^^^^ associated function in this implementation
    |
    = note: `#[warn(dead_code)]` on by default

warning: `pallet-schelling-game-shared` (lib) generated 3 warnings
   Compiling pallet-departments v0.1.0 (/home/ubuntu/shivarthu/custom-pallets/departments)
warning: `pallet-shared-storage` (lib) generated 1 warning
   Compiling pallet-transaction-payment v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling frame-support-test v3.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling pallet-department-funding v4.0.0-dev (/home/ubuntu/shivarthu/custom-pallets/department-funding)
   Compiling pallet-transaction-payment-rpc-runtime-api v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling pallet-profile-validation v4.0.0-dev (/home/ubuntu/shivarthu/custom-pallets/profile-validation)
   Compiling pallet-project-tips v4.0.0-dev (/home/ubuntu/shivarthu/custom-pallets/project-tips)
   Compiling pallet-positive-externality v4.0.0-dev (/home/ubuntu/shivarthu/custom-pallets/positive-externality)
warning: constant `PALLET_ID` is never used
  --> custom-pallets/profile-validation/src/lib.rs:63:7
   |
63 | const PALLET_ID: PalletId = PalletId(*b"ex/cfund");
   |       ^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: associated function `u64_to_block_saturated` is never used
  --> custom-pallets/project-tips/src/extras.rs:81:16
   |
37 | impl<T: Config> Pallet<T> {
   | ------------------------- associated function in this implementation
...
81 |     pub(super) fn u64_to_block_saturated(input: u64) -> BlockNumberOf<T> {
   |                   ^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: `pallet-profile-validation` (lib) generated 1 warning
   Compiling pallet-session v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
warning: `pallet-project-tips` (lib) generated 1 warning
   Compiling pallet-template v0.0.0 (/home/ubuntu/shivarthu/pallets/template)
warning: unused variable: `who`
   --> custom-pallets/positive-externality/src/lib.rs:446:8
    |
446 |             let who = ensure_signed(origin)?;
    |                 ^^^ help: if this is intentional, prefix it with an underscore: `_who`
    |
    = note: `#[warn(unused_variables)]` on by default

warning: associated function `get_drawn_jurors` is never used
  --> custom-pallets/positive-externality/src/extras.rs:59:16
   |
29 | impl<T: Config> Pallet<T> {
   | ------------------------- associated function in this implementation
...
59 |     pub(super) fn get_drawn_jurors(user_to_calculate: T::AccountId) -> Vec<(T::AccountId, u64)> {
   |                   ^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: associated function `deposit_event` is never used
   --> custom-pallets/positive-externality/src/lib.rs:163:43
    |
163 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
    |                                              ^^^^^^^^^^^^^ associated function in this implementation

warning: `pallet-positive-externality` (lib) generated 3 warnings
   Compiling pallet-authorship v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling pallet-aura v27.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling pallet-insecure-randomness-collective-flip v16.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling pallet-sudo v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-client-db v0.35.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-transaction-storage-proof v26.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sp-keyring v31.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling pallet-grandpa v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-service v0.35.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling positive-externality-rpc v0.1.0 (/home/ubuntu/shivarthu/custom-pallets/positive-externality/positive-externality-rpc)
   Compiling department-funding-rpc v0.1.0 (/home/ubuntu/shivarthu/custom-pallets/department-funding/department-funding-rpc)
   Compiling project-tips-rpc v0.1.0 (/home/ubuntu/shivarthu/custom-pallets/project-tips/project-tips-rpc)
   Compiling sc-cli v0.36.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling profile-validation-rpc v0.1.0 (/home/ubuntu/shivarthu/custom-pallets/profile-validation/profile-validation-rpc)
   Compiling sc-network-gossip v0.34.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-consensus-slots v0.33.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-consensus-grandpa v0.19.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-consensus-aura v0.34.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling pallet-transaction-payment-rpc v30.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling pallet-spaces v4.0.0-dev (/home/ubuntu/shivarthu/custom-pallets/spaces)
   Compiling substrate-frame-rpc-system v28.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-offchain v29.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-basic-authorship v0.34.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
warning: associated function `deposit_event` is never used
   --> custom-pallets/positive-externality/src/lib.rs:163:43
    |
163 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
    |                                              ^^^^^^^^^^^^^ associated function in this implementation
    |
    = note: `#[warn(dead_code)]` on by default

warning: `pallet-positive-externality` (lib test) generated 2 warnings (1 duplicate)
warning: `pallet-profile-validation` (lib test) generated 1 warning (1 duplicate)
warning: `pallet-schelling-game-shared` (lib test) generated 3 warnings (3 duplicates)
warning: `pallet-project-tips` (lib test) generated 1 warning (1 duplicate)
warning: `pallet-shared-storage` (lib test) generated 1 warning (1 duplicate)
warning: `pallet-sortition-sum-game` (lib test) generated 1 warning (1 duplicate)
    Finished `test` profile [unoptimized + debuginfo] target(s) in 1m 44s
     Running unittests src/lib.rs (target/debug/deps/department_funding_rpc-9a27e7ab2f9307be)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/department_funding_runtime_api-e0bcd957f69d1cc6)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/node_template-e16e6919a2425fd9)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/node_template_runtime-5fdb78e2826b2f07)

running 2 tests
test test_genesis_config_builds ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_department_funding-52d510957da2fa1b)

running 8 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::apply_staking_period_works ... ok
test tests::apply_staking_period_fails ... ok
test tests::create_department_required_fund_fails_if_funding_more_than_tipping_value ... ok
test tests::create_department_required_fund_fails_if_department_does_not_exist ... ok
test tests::it_works_for_default_value ... ok
test tests::schelling_game_incentives_get_test ... ok

test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.25s

     Running unittests src/lib.rs (target/debug/deps/pallet_departments-eab2f38483358d81)

running 13 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::add_member_to_department_fails_if_not_admin ... ok
test tests::add_member_to_department_works ... ok
test tests::add_member_to_department_fails_if_already_member ... ok
test tests::change_the_admin_fails_if_department_does_not_exist ... ok
test tests::change_the_admin_works ... ok
test tests::create_department_works ... ok
test tests::change_the_admin_fails_if_not_current_admin ... ok
test tests::remove_member_from_department_fails_if_not_admin ... ok
test tests::remove_member_from_department_works ... ok
test tests::remove_member_from_department_fails_if_not_a_member ... ok
test tests::remove_member_from_department_fails_if_no_accounts ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_positive_externality-8b3a337723858477)

running 11 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_applying_for_staking_period ... ok
test tests::test_appying_jurors ... ok
test tests::test_change_period ... ok
test tests::test_draw_jurors_period ... ok
test tests::test_drawn_jurors ... ok
test tests::test_commit_and_incentives_vote ... ok
test tests::test_positive_externality_post ... ok
test tests::test_setting_positive_externality_validation ... ok
test tests::schelling_game_incentives_get_test ... ok

test result: ok. 11 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 6.33s

     Running unittests src/lib.rs (target/debug/deps/pallet_profile_validation-4f380589e08dbb08)

running 9 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::add_citizen_profile_check ... ok
test tests::challenge_profile_after_time_for_staking_over_test ... ok
test tests::challenge_evidence ... ok
test tests::check_fund_addition ... ok
test tests::test_draw_juror ... ok
test tests::return_profile_stake_test ... ok
test tests::schelling_game_test ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.13s

     Running unittests src/lib.rs (target/debug/deps/pallet_project_tips-389e5bb444879d9c)

running 9 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::check_balance_on_staking ... ok
test tests::check_apply_staking_period_function ... ok
test tests::check_create_project_function ... ok
test tests::schelling_game_incentives_test ... ok
test tests::schelling_game_test ... ok
test tests::get_tip_test ... ok
test tests::schelling_game_incentives_get_test ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 6.74s

     Running unittests src/lib.rs (target/debug/deps/pallet_schelling_game_shared-feef9a49ac3a230e)

running 13 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::apply_juror ... ok
test tests::challenger_lost_test ... ok
test tests::challenger_win_test_jurors_incentive_in_one_go ... ok
test tests::challenger_win_test ... ok
test tests::end_of_time_staking_period ... ok
test tests::check_time_for_staking_not_over_test ... ok
test tests::evidence_period_not_over_test ... ok
test tests::evidence_period_test ... ok
test tests::challenger_win_value_test ... ok
test tests::score_schelling_game_test ... ok
test tests::score_schelling_game_value_test ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.08s

     Running unittests src/lib.rs (target/debug/deps/pallet_shared_storage-d6948c6ef9e3e830)

running 9 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_get_all_department_reputation_scores ... ok
test tests::test_get_department_reputation_score ... ok
test tests::test_add_score_to_department ... ok
test tests::test_get_total_reputation_score ... ok
test tests::test_subtract_score_from_department ... ok
test tests::test_set_department_reputation_score ... ok
test tests::test_update_department_reputation_score ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_sortition_sum_game-7eff689f276bd3a1)

running 4 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::it_works_for_default_value ... ok
test tests::correct_error_for_none_value ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_spaces-bc7c808338ed7deb)

running 4 tests
test mock::test_genesis_config_builds ... ok
test tests::it_works_for_default_value ... ok
test tests::correct_error_for_none_value ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_support-c17eb778485b2e83)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_template-e18b6b212bb6eba8)

running 4 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::correct_error_for_none_value ... ok
test tests::it_works_for_default_value ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/positive_externality_rpc-12c8b879e95500ae)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/positive_externality_runtime_api-5b9e4c150f014554)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/profile_validation_rpc-ae24a82209a1ca70)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/profile_validation_runtime_api-9227e346b170fd5c)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/project_tips_rpc-b3ca63810e3e37c0)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/project_tips_runtime_api-12433f0eb251809a)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/trait_departments-d7cc2a3e521fe4f1)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/trait_schelling_game_shared-5580bf167a8a39c5)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/trait_shared_storage-df9a2dc802af8cf3)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/trait_sortition_sum_game-73a2700189a77355)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests department_funding_rpc

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests department_funding_runtime_api

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests node_template_runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_department_funding

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_departments

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_positive_externality

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_profile_validation

running 3 tests
test custom-pallets/profile-validation/src/lib.rs - pallet::Call::add_profile_stake (line 286) ... ignored
test custom-pallets/profile-validation/src/lib.rs - pallet::Pallet<T>::add_profile_stake (line 328) ... ignored
test custom-pallets/profile-validation/src/lib.rs - pallet::dispatchables::add_profile_stake (line 94) ... ignored

test result: ok. 0 passed; 0 failed; 3 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_project_tips

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet_schelling_game_shared

running 8 tests
test custom-pallets/schelling-game-shared/src/extras.rs - extras::Pallet<T>::change_period (line 271) ... ignored
test custom-pallets/schelling-game-shared/src/extras.rs - extras::Pallet<T>::change_period (line 281) ... ignored
test custom-pallets/schelling-game-shared/src/extras.rs - extras::Pallet<T>::change_period (line 288) ... ignored
test custom-pallets/schelling-game-shared/src/extras.rs - extras::Pallet<T>::set_to_staking_period (line 209) ... ignored
test custom-pallets/schelling-game-shared/src/share_link.rs - share_link::Pallet<T>::change_period_link (line 249) ... ignored
test custom-pallets/schelling-game-shared/src/share_link.rs - share_link::Pallet<T>::change_period_link (line 259) ... ignored
test custom-pallets/schelling-game-shared/src/share_link.rs - share_link::Pallet<T>::change_period_link (line 266) ... ignored
test custom-pallets/schelling-game-shared/src/share_link.rs - share_link::Pallet<T>::set_to_staking_period_link (line 228) ... ignored
```
</details>

~~Some unit tests currently failing:~~

<details>
  <summary>Output</summary>

```rust
error[E0599]: no function or associated item named `do_something` found for struct `pallet::Pallet` in the current scope
  --> custom-pallets/schelling-game-shared/src/tests.rs:32:30
   |
32 |         assert_ok!(TemplateModule::do_something(RuntimeOrigin::signed(1), 42));
   |                                    ^^^^^^^^^^^^ function or associated item not found in `Pallet<Test>`
   |
  ::: custom-pallets/schelling-game-shared/src/lib.rs:59:2
   |
59 |     pub struct Pallet<T>(_);
   |     -------------------- function or associated item `do_something` not found for this struct
   |
   = help: items from traits can only be used if the trait is implemented and in scope
   = note: the following traits define an item `do_something`, perhaps you need to implement one of them:
           candidate #1: `weights::WeightInfo`
           candidate #2: `pallet_sortition_sum_game::WeightInfo`

error[E0599]: no function or associated item named `something` found for struct `pallet::Pallet` in the current scope
  --> custom-pallets/schelling-game-shared/src/tests.rs:34:30
   |
34 |         assert_eq!(TemplateModule::something(), Some(42));
   |                                    ^^^^^^^^^ function or associated item not found in `Pallet<Test>`
   |
  ::: custom-pallets/schelling-game-shared/src/lib.rs:59:2
   |
59 |     pub struct Pallet<T>(_);
   |     -------------------- function or associated item `something` not found for this struct

error[E0599]: no function or associated item named `cause_error` found for struct `pallet::Pallet` in the current scope
  --> custom-pallets/schelling-game-shared/src/tests.rs:45:20
   |
45 |             TemplateModule::cause_error(RuntimeOrigin::signed(1)),
   |                             ^^^^^^^^^^^ function or associated item not found in `Pallet<Test>`
   |
  ::: custom-pallets/schelling-game-shared/src/lib.rs:59:2
   |
59 |     pub struct Pallet<T>(_);
   |     -------------------- function or associated item `cause_error` not found for this struct
   |
   = help: items from traits can only be used if the trait is implemented and in scope
   = note: the following traits define an item `cause_error`, perhaps you need to implement one of them:
           candidate #1: `weights::WeightInfo`
           candidate #2: `pallet_sortition_sum_game::WeightInfo`

warning: unused variable: `game_type`
   --> custom-pallets/schelling-game-shared/src/tests.rs:423:7
    |
423 |         let game_type = return_game_type_profile_approval();
    |             ^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_game_type`
    |
    = note: `#[warn(unused_variables)]` on by default

warning: unused variable: `game_type`
   --> custom-pallets/schelling-game-shared/src/tests.rs:703:7
    |
703 |         let game_type = return_game_type_profile_approval();
    |             ^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_game_type`

warning: unused variable: `game_type`
   --> custom-pallets/schelling-game-shared/src/tests.rs:844:7
    |
844 |         let game_type = return_game_type_profile_approval();
    |             ^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_game_type`

For more information about this error, try `rustc --explain E0599`.
warning: `pallet-schelling-game-shared` (lib test) generated 5 warnings (2 duplicates)
error: could not compile `pallet-schelling-game-shared` (lib test) due to 3 previous errors; 5 warnings emitted
warning: build failed, waiting for other jobs to finish...
warning: unused variable: `startblock3`
   --> custom-pallets/department-funding/src/tests.rs:462:7
    |
462 |         let startblock3 = 3 * (6 * 30 * 24 * 60 * 60) / 6;
    |             ^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_startblock3`
    |
    = note: `#[warn(unused_variables)]` on by default

warning: unused variable: `startblock4`
   --> custom-pallets/department-funding/src/tests.rs:464:7
    |
464 |         let startblock4 = 4 * (6 * 30 * 24 * 60 * 60) / 6;
    |             ^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_startblock4`

warning: `pallet-department-funding` (lib test) generated 6 warnings (4 duplicates)
warning: `pallet-profile-validation` (lib test) generated 4 warnings (4 duplicates)
```
</details>
