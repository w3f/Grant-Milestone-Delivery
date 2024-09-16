# General Notes

Unit tests now all successfully passing:

<details>
  <summary>New Output</summary>

```rust
warning: associated function `deposit_event` is never used
  --> custom-pallets/sortition-sum-game/src/lib.rs:51:43
   |
51 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
   |                                              ^^^^^^^^^^^^^ associated function in this implementation
   |
   = note: `#[warn(dead_code)]` on by default

warning: `pallet-sortition-sum-game` (lib) generated 1 warning
warning: use of deprecated associated function `frame_support::pallet_prelude::StorageDoubleMap::<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>::remove_prefix`: Use `clear_prefix` instead
   --> custom-pallets/schelling-game-shared/src/extras.rs:521:21
    |
521 |         <VoteCommits<T>>::remove_prefix(key.clone(), None); // Deprecated: Use clear_prefix instead
    |                           ^^^^^^^^^^^^^
    |
    = note: `#[warn(deprecated)]` on by default

warning: use of deprecated associated function `frame_support::pallet_prelude::StorageDoubleMap::<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>::remove_prefix`: Use `clear_prefix` instead
   --> custom-pallets/schelling-game-shared/src/score_game.rs:154:26
    |
154 |         <ScoreVoteCommits<T>>::remove_prefix(key.clone(), None); // Deprecated: Use clear_prefix instead
    |                                ^^^^^^^^^^^^^

warning: associated function `deposit_event` is never used
   --> custom-pallets/schelling-game-shared/src/lib.rs:187:43
    |
187 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
    |                                              ^^^^^^^^^^^^^ associated function in this implementation
    |
    = note: `#[warn(dead_code)]` on by default

warning: `pallet-schelling-game-shared` (lib) generated 3 warnings
warning: associated function `deposit_event` is never used
  --> custom-pallets/shared-storage/src/lib.rs:83:43
   |
83 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
   |                                              ^^^^^^^^^^^^^ associated function in this implementation
   |
   = note: `#[warn(dead_code)]` on by default

warning: `pallet-shared-storage` (lib) generated 1 warning
   Compiling librocksdb-sys v0.11.0+8.1.1
warning: unused variable: `who`
   --> custom-pallets/positive-externality/src/lib.rs:445:8
    |
445 |             let who = ensure_signed(origin)?;
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
   --> custom-pallets/positive-externality/src/lib.rs:162:43
    |
162 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
    |                                              ^^^^^^^^^^^^^ associated function in this implementation

warning: constant `PALLET_ID` is never used
  --> custom-pallets/profile-validation/src/lib.rs:67:7
   |
67 | const PALLET_ID: PalletId = PalletId(*b"ex/cfund");
   |       ^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: `pallet-positive-externality` (lib) generated 3 warnings
warning: `pallet-profile-validation` (lib) generated 1 warning
   Compiling node-template-runtime v0.0.0 (/home/ubuntu/shivarthu/runtime)
warning: associated function `deposit_event` is never used
   --> custom-pallets/positive-externality/src/lib.rs:162:43
    |
162 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
    |                                              ^^^^^^^^^^^^^ associated function in this implementation
    |
    = note: `#[warn(dead_code)]` on by default

warning: `pallet-positive-externality` (lib test) generated 2 warnings (1 duplicate)
warning: `pallet-profile-validation` (lib test) generated 1 warning (1 duplicate)
warning: `pallet-schelling-game-shared` (lib test) generated 3 warnings (3 duplicates)
warning: `pallet-shared-storage` (lib test) generated 1 warning (1 duplicate)
warning: `pallet-sortition-sum-game` (lib test) generated 1 warning (1 duplicate)
   Compiling rocksdb v0.21.0
   Compiling kvdb-rocksdb v0.19.0
   Compiling sc-client-db v0.35.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-service v0.35.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling sc-cli v0.36.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling frame-benchmarking-cli v32.0.0 (https://github.com/paritytech/polkadot-sdk.git?tag=polkadot-v1.9.0#3c3d6fce)
   Compiling node-template v0.0.0 (/home/ubuntu/shivarthu/node)
    Finished `test` profile [unoptimized + debuginfo] target(s) in 7m 39s
     Running unittests src/lib.rs (target/debug/deps/department_funding_rpc-9a27e7ab2f9307be)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/department_funding_runtime_api-e0bcd957f69d1cc6)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/node_template-ce7990016f3c2795)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/node_template_runtime-12815422c78fb6ec)

running 2 tests
test test_genesis_config_builds ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_department_funding-52d510957da2fa1b)

running 8 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::apply_staking_period_works ... ok
test tests::create_department_required_fund_fails_if_department_does_not_exist ... ok
test tests::apply_staking_period_fails ... ok
test tests::create_department_required_fund_fails_if_funding_more_than_tipping_value ... ok
test tests::it_works_for_default_value ... ok
test tests::schelling_game_incentives_get_test ... ok

test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.31s

     Running unittests src/lib.rs (target/debug/deps/pallet_departments-eab2f38483358d81)

running 13 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::add_member_to_department_works ... ok
test tests::add_member_to_department_fails_if_not_admin ... ok
test tests::change_the_admin_fails_if_department_does_not_exist ... ok
test tests::add_member_to_department_fails_if_already_member ... ok
test tests::change_the_admin_works ... ok
test tests::create_department_works ... ok
test tests::change_the_admin_fails_if_not_current_admin ... ok
test tests::remove_member_from_department_fails_if_no_accounts ... ok
test tests::remove_member_from_department_fails_if_not_admin ... ok
test tests::remove_member_from_department_fails_if_not_a_member ... ok
test tests::remove_member_from_department_works ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_positive_externality-8b3a337723858477)

running 11 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_applying_for_staking_period ... ok
test tests::test_appying_jurors ... ok
test tests::test_change_period ... ok
test tests::test_draw_jurors_period ... ok
test tests::test_commit_and_incentives_vote ... ok
test tests::test_drawn_jurors ... ok
test tests::test_positive_externality_post ... ok
test tests::test_setting_positive_externality_validation ... ok
test tests::schelling_game_incentives_get_test ... ok

test result: ok. 11 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 7.32s

     Running unittests src/lib.rs (target/debug/deps/pallet_profile_validation-4f380589e08dbb08)

running 9 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::add_citizen_profile_check ... ok
test tests::challenge_profile_after_time_for_staking_over_test ... ok
test tests::challenge_evidence ... ok
test tests::check_fund_addition ... ok
test tests::return_profile_stake_test ... ok
test tests::test_draw_juror ... ok
test tests::schelling_game_test ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.16s

     Running unittests src/lib.rs (target/debug/deps/pallet_project_tips-785897dea52283b5)

running 9 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::check_balance_on_staking ... ok
test tests::check_create_project_function ... ok
test tests::check_apply_staking_period_function ... ok
test tests::schelling_game_test ... ok
test tests::schelling_game_incentives_test ... ok
test tests::get_tip_test ... ok
test tests::schelling_game_incentives_get_test ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 8.11s

     Running unittests src/lib.rs (target/debug/deps/pallet_schelling_game_shared-feef9a49ac3a230e)

running 13 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::apply_juror ... ok
test tests::challenger_lost_test ... ok
test tests::challenger_win_test_jurors_incentive_in_one_go ... ok
test tests::challenger_win_test ... ok
test tests::check_time_for_staking_not_over_test ... ok
test tests::end_of_time_staking_period ... ok
test tests::evidence_period_not_over_test ... ok
test tests::evidence_period_test ... ok
test tests::challenger_win_value_test ... ok
test tests::score_schelling_game_value_test ... ok
test tests::score_schelling_game_test ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.11s

     Running unittests src/lib.rs (target/debug/deps/pallet_shared_storage-d6948c6ef9e3e830)

running 9 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_add_score_to_department ... ok
test tests::test_get_all_department_reputation_scores ... ok
test tests::test_get_department_reputation_score ... ok
test tests::test_get_total_reputation_score ... ok
test tests::test_set_department_reputation_score ... ok
test tests::test_subtract_score_from_department ... ok
test tests::test_update_department_reputation_score ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

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
test tests::it_works_for_default_value ... ok
test tests::correct_error_for_none_value ... ok

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
test custom-pallets/profile-validation/src/lib.rs - pallet::Call::add_profile_stake (line 290) ... ignored
test custom-pallets/profile-validation/src/lib.rs - pallet::Pallet<T>::add_profile_stake (line 332) ... ignored
test custom-pallets/profile-validation/src/lib.rs - pallet::dispatchables::add_profile_stake (line 98) ... ignored

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
