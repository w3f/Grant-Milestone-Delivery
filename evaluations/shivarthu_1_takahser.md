# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Shivarthu.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [MIT License](https://github.com/amiyatulu/shivarthu/blob/239e63e350e848fdafbd1d0ffdb5aea0367e2345/LICENSE) | - |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [Template Pallet](https://github.com/amiyatulu/shivarthu/blob/a38ff3aa038474613427a3ee4af3ed8108f70941/pallets/template/src/lib.rs) | The inline comments are currently very sparse. The tutorial is currently missing. |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [Template Pallet Tests](https://github.com/amiyatulu/shivarthu/blob/a38ff3aa038474613427a3ee4af3ed8108f70941/pallets/template/src/tests.rs), [Election Pallet Tests](https://github.com/amiyatulu/shivarthu/blob/a38ff3aa038474613427a3ee4af3ed8108f70941/pallets/election/src/tests.rs) | See [Testing Feedback](#testing-guide-feedback) |
| 0d. | Docker | <ul><li>[ ] </li></ul> | [docker-compose.yml](https://github.com/amiyatulu/shivarthu/blob/a38ff3aa038474613427a3ee4af3ed8108f70941/docker-compose.yml) | See [Docker Feedback](#docker-feedback) |
| 0e. | Article | <ul><li>[x] </li></ul> | [Article](https://github.com/amiyatulu/shivarthu/blob/239e63e350e848fdafbd1d0ffdb5aea0367e2345/docs/Shivarthu.md) | - |
| 1. | Substrate module: Experience Evaluation | <ul><li>[ ] </li></ul> | XXXX |  Not tested yet (waiting for instructions). |
| 2. | Substrate Module: Approval voting | <ul><li>[ ] </li></ul> | XXXX | Not tested yet (waiting for instructions). |
| 3.| Reactjs UI for Experience Evaluation | <ul><li>[ ] </li></ul> | XXXX | Not tested yet (waiting for instructions). |
| 4.| Reactjs Approval Voting UI| <ul><li>[ ] </li></ul> | XXXX | Not tested yet (waiting for instructions). |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Testing Guide Feedback

- There is no test guide.
- When running the tests using `carco test`, they pass.

    ```bash
    running 1 test
    test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests (target/debug/deps/pallet_template-b2c4098bbab171bf)

    running 11 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::it_works_for_default_value ... ok
    test tests::correct_error_for_none_value ... ok
    test tests::create_profile_test ... ok
    test tests::challenge_profile_test ... ok
    test tests::punish ... ok
    test tests::api_test ... ok
    test tests::profile_fund_test ... ok
    test tests::challeger_lost ... ok
    test tests::draw_jurors_test ... ok
    test tests::fund_withdrawal ... ok

    test result: ok. 11 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.37s

        Running unittests (target/debug/deps/profile_validation-73c2e4b71f8e356d)

    running 3 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::correct_error_for_none_value ... ok
    test tests::it_works_for_default_value ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running unittests (target/debug/deps/schelling_game_shared-0409152cb968a240)

    running 3 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::evidence_period_test ... ok
    test tests::evidence_period_not_over_test ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s


    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests (target/debug/deps/score_game-ed890bd0bb677eac)

    running 4 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::it_works_for_default_value ... ok
    test tests::check_standard_deviation ... ok
    test tests::correct_error_for_none_value ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests (target/debug/deps/sortition_sum_game-67d917f1b0684d14)

    running 3 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::profile_fund_test ... ok
    test tests::schelling_game_remove_stake ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    running 4 tests
    test src/extras.rs - extras::Pallet<T>::change_period_link (line 179) ... ignored
    test src/extras.rs - extras::Pallet<T>::change_period_link (line 189) ... ignored
    test src/extras.rs - extras::Pallet<T>::change_period_link (line 196) ... ignored
    test src/extras.rs - extras::Pallet<T>::set_to_staking_period_link (line 173) ... ignored

    test result: ok. 0 passed; 0 failed; 4 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```

- However, there are a lot of warnings. Mostly, unused imports and variables, that can easily be fixed:

    ```bash
    warning: unused import: `frame_support::sp_runtime::traits::AccountIdConversion`
    --> pallets/sortition-sum-game/src/lib.rs:21:5
    |
    21 | use frame_support::sp_runtime::traits::AccountIdConversion;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(unused_imports)]` on by default

    warning: unused import: `frame_support::sp_runtime::SaturatedConversion`
    --> pallets/sortition-sum-game/src/lib.rs:23:5
    |
    23 | use frame_support::sp_runtime::SaturatedConversion;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused import: `frame_support::traits::Randomness`
    --> pallets/sortition-sum-game/src/lib.rs:25:5
    |
    25 | use frame_support::traits::Randomness;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused imports: `Currency`, `ReservableCurrency`
    --> pallets/sortition-sum-game/src/lib.rs:26:29
    |
    26 | use frame_support::traits::{Currency, ReservableCurrency};
    |                             ^^^^^^^^  ^^^^^^^^^^^^^^^^^^

    warning: unused import: `frame_system::pallet_prelude::*`
    --> pallets/sortition-sum-game/src/lib.rs:28:5
    |
    28 | use frame_system::pallet_prelude::*;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused import: `frame_system::pallet_prelude::*`
    --> pallets/sortition-sum-game/src/lib.rs:36:6
    |
    36 |     use frame_system::pallet_prelude::*;
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused import: `traits::Saturating`
    --> pallets/score-game/src/lib.rs:19:21
    |
    19 | use sp_arithmetic::{traits::Saturating};
    |                     ^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(unused_imports)]` on by default

    warning: unused import: `CheckedAdd`
    --> pallets/sortition-sum-game/src/lib.rs:22:41
    |
    22 | use frame_support::sp_runtime::traits::{CheckedAdd, CheckedSub};
    |                                         ^^^^^^^^^^

    warning: unused import: `CheckedSub`
    --> pallets/sortition-sum-game/src/lib.rs:22:53
    |
    22 | use frame_support::sp_runtime::traits::{CheckedAdd, CheckedSub};
    |                                                     ^^^^^^^^^^

    warning: associated function is never used: `deposit_event`
    --> pallets/sortition-sum-game/src/lib.rs:65:43
    |
    65 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
    |                                              ^^^^^^^^^^^^^
    |
    = note: `#[warn(dead_code)]` on by default

    warning: unused variable: `s`
    --> pallets/score-game/src/lib.rs:83:17
    |
    83 |             let s = format!("The number is {}", 1);
    |                 ^ help: if this is intentional, prefix it with an underscore: `_s`
    |
    = note: `#[warn(unused_variables)]` on by default

    warning: associated function is never used: `mean_integer`
    --> pallets/score-game/src/extras.rs:4:16
    |
    4 |     pub(super) fn mean_integer(data: &Vec<i64>) -> Option<i64> {
    |                   ^^^^^^^^^^^^
    |
    = note: `#[warn(dead_code)]` on by default

    warning: associated function is never used: `std_deviation_interger`
    --> pallets/score-game/src/extras.rs:14:16
    |
    14 |     pub(super) fn std_deviation_interger(data: &Vec<i64>) -> Option<i64> {
    |                   ^^^^^^^^^^^^^^^^^^^^^^

    warning: associated function is never used: `calculate_new_mean`
    --> pallets/score-game/src/extras.rs:31:16
    |
    31 |     pub(super) fn calculate_new_mean(
    |                   ^^^^^^^^^^^^^^^^^^

    warning: unused import: `frame_support::traits::ConstU32`
    --> pallets/election/src/types.rs:2:5
    |
    2 | use frame_support::traits::ConstU32;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(unused_imports)]` on by default

    warning: unused imports: `CheckedMul`, `CheckedSub`
    --> pallets/election/src/lib.rs:25:53
    |
    25 | use frame_support::sp_runtime::traits::{CheckedAdd, CheckedMul, CheckedSub};
    |                                                     ^^^^^^^^^^  ^^^^^^^^^^

    warning: unused imports: `ExistenceRequirement`, `Imbalance`, `PalletId`, `WithdrawReasons`
    --> pallets/election/src/lib.rs:28:51
    |
    28 |         defensive_prelude::*, Currency, CurrencyToVote, ExistenceRequirement, Get, Imbalance,
    |                                                         ^^^^^^^^^^^^^^^^^^^^       ^^^^^^^^^
    29 |         OnUnbalanced, ReservableCurrency, WithdrawReasons,
    |                                           ^^^^^^^^^^^^^^^
    30 |     },
    31 |     PalletId,
    |     ^^^^^^^^

    warning: unused imports: `RuntimeDebug`, `StaticLookup`
    --> pallets/election/src/lib.rs:35:23
    |
    35 |     traits::{Saturating, StaticLookup, Zero},
    |                          ^^^^^^^^^^^^
    36 |     DispatchError, Perbill, RuntimeDebug,
    |                             ^^^^^^^^^^^^

    warning: unused import: `cmp::Ordering`
    --> pallets/election/src/lib.rs:38:14
    |
    38 | use sp_std::{cmp::Ordering, prelude::*};
    |              ^^^^^^^^^^^^^

    warning: `score-game` (lib) generated 5 warnings
    Compiling pallet-template v4.0.0-dev (/home/xxx/repos/shivarthu/pallets/template)
    warning: `sortition-sum-game` (lib) generated 9 warnings
    Compiling schelling-game-shared v0.1.0 (/home/xxx/repos/shivarthu/pallets/schelling-game-shared)
    warning: unused import: `CheckedAdd`
    --> pallets/election/src/lib.rs:25:41
    |
    25 | use frame_support::sp_runtime::traits::{CheckedAdd, CheckedMul, CheckedSub};
    |                                         ^^^^^^^^^^

    warning: unused import: `Saturating`
    --> pallets/election/src/lib.rs:35:11
    |
    35 |     traits::{Saturating, StaticLookup, Zero},
    |              ^^^^^^^^^^

    warning: unused variable: `old_members_ids_sorted`
    --> pallets/election/src/lib.rs:387:9
        |
    387 |                 let old_members_ids_sorted = <Members<T>>::take(departmentid)
        |                     ^^^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_old_members_ids_sorted`
        |
        = note: `#[warn(unused_variables)]` on by default

    warning: unused variable: `who`
    --> pallets/election/src/lib.rs:353:8
        |
    353 |             let who = ensure_signed(origin)?;
        |                 ^^^ help: if this is intentional, prefix it with an underscore: `_who`

    warning: unused variable: `to_votes`
    --> pallets/election/src/lib.rs:373:8
        |
    373 |             let to_votes = |b: BalanceOf<T>| T::CurrencyToVote::to_vote(b, total_issuance);
        |                 ^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_to_votes`

    warning: associated function is never used: `is_voter`
    --> pallets/election/src/extras.rs:25:16
    |
    25 |     pub(super) fn is_voter(who: &T::AccountId, departmentid: u128) -> bool {
    |                   ^^^^^^^^
    |
    = note: `#[warn(dead_code)]` on by default

    warning: unused import: `CheckedMul`
    --> pallets/schelling-game-shared/src/lib.rs:24:53
    |
    24 | use frame_support::sp_runtime::traits::{CheckedAdd, CheckedMul, CheckedSub};
    |                                                     ^^^^^^^^^^
    |
    = note: `#[warn(unused_imports)]` on by default

    warning: unused imports: `ExistenceRequirement`, `Imbalance`, `PalletId`, `WithdrawReasons`
    --> pallets/schelling-game-shared/src/lib.rs:30:13
    |
    30 |         Currency, ExistenceRequirement, Get, Imbalance, OnUnbalanced, ReservableCurrency,
    |                   ^^^^^^^^^^^^^^^^^^^^       ^^^^^^^^^
    31 |         WithdrawReasons,
    |         ^^^^^^^^^^^^^^^
    32 |     },
    33 |     PalletId,
    |     ^^^^^^^^

    warning: unused import: `frame_system::pallet_prelude::*`
    --> pallets/schelling-game-shared/src/lib.rs:35:5
    |
    35 | use frame_system::pallet_prelude::*;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused import: `num_integer::Roots`
    --> pallets/schelling-game-shared/src/lib.rs:36:5
    |
    36 | use num_integer::Roots;
    |     ^^^^^^^^^^^^^^^^^^

    warning: `election` (lib) generated 11 warnings
    warning: unused import: `Get`
    --> pallets/schelling-game-shared/src/lib.rs:30:35
    |
    30 |         Currency, ExistenceRequirement, Get, Imbalance, OnUnbalanced, ReservableCurrency,
    |                                         ^^^

    warning: unused variable: `k`
    --> pallets/schelling-game-shared/src/extras.rs:230:58
        |
    230 |     pub(super) fn create_tree_link_helper(key: SumTreeName, k: u64) -> DispatchResult {
        |                                                             ^ help: if this is intentional, prefix it with an underscore: `_k`
        |
        = note: `#[warn(unused_variables)]` on by default

    warning: unused import: `collections::btree_map::BTreeMap`
    --> pallets/template/src/types.rs:2:39
    |
    2 | use frame_support::sp_std::{vec::Vec, collections::btree_map::BTreeMap};
    |                                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(unused_imports)]` on by default

    warning: unused import: `frame_support::traits::ConstU32`
    --> pallets/template/src/types.rs:4:5
    |
    4 | use frame_support::traits::ConstU32;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused imports: `DepartmentDetails`, `SchellingType`, `StakeDetails`
    --> pallets/template/src/lib.rs:21:73
    |
    21 |     ChallengeEvidencePost, ChallengerFundInfo, CitizenDetails, CommitVote, DepartmentDetails,
    |                                                                            ^^^^^^^^^^^^^^^^^
    22 |     DrawJurorsForProfileLimit, Period, ProfileFundInfo, SchellingType,
    |                                                         ^^^^^^^^^^^^^
    23 |     StakeDetails, StakingTime, VoteStatus,
    |     ^^^^^^^^^^^^

    warning: unused import: `CheckedMul`
    --> pallets/template/src/lib.rs:28:53
    |
    28 | use frame_support::sp_runtime::traits::{CheckedAdd, CheckedMul, CheckedSub};
    |                                                     ^^^^^^^^^^

    warning: unused import: `collections::btree_map::BTreeMap`
    --> pallets/template/src/lib.rs:30:29
    |
    30 | use frame_support::sp_std::{collections::btree_map::BTreeMap, vec::Vec};
    |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused imports: `bounded_btree_map::BoundedBTreeMap`, `bounded_vec::BoundedVec`
    --> pallets/template/src/lib.rs:31:30
    |
    31 | use frame_support::storage::{bounded_btree_map::BoundedBTreeMap, bounded_vec::BoundedVec};
    |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused import: `sp_runtime::app_crypto::sp_core::H256`
    --> pallets/template/src/lib.rs:33:21
    |
    33 | use frame_support::{sp_runtime::app_crypto::sp_core::H256, traits::Randomness};
    |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused import: `Imbalance`
    --> pallets/template/src/lib.rs:36:40
    |
    36 |         Currency, ExistenceRequirement, Get, Imbalance, OnUnbalanced, ReservableCurrency,
    |                                              ^^^^^^^^^

    warning: associated function is never used: `deposit_event`
    --> pallets/schelling-game-shared/src/lib.rs:222:43
        |
    222 |     #[pallet::generate_deposit(pub(super) fn deposit_event)]
        |                                              ^^^^^^^^^^^^^
        |
        = note: `#[warn(dead_code)]` on by default

    warning: `schelling-game-shared` (lib) generated 7 warnings
    Compiling profile-validation v0.1.0 (/home/xxx/repos/shivarthu/pallets/profile-validation)
    warning: unused variable: `random_number`
    --> pallets/template/src/extras.rs:197:7
        |
    197 |         let random_number = u64::decode(&mut random_seed.as_ref())
        |             ^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_random_number`
        |
        = note: `#[warn(unused_variables)]` on by default

    warning: unused variable: `citizen_id`
    --> pallets/template/src/extras.rs:193:45
        |
    193 |     fn draw_juror_for_citizen_profile_function(citizen_id: u128, length: usize) -> DispatchResult {
        |                                                ^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_citizen_id`

    warning: unused variable: `length`
    --> pallets/template/src/extras.rs:193:63
        |
    193 |     fn draw_juror_for_citizen_profile_function(citizen_id: u128, length: usize) -> DispatchResult {
        |                                                                  ^^^^^^ help: if this is intentional, prefix it with an underscore: `_length`

    warning: associated function is never used: `super_hello_world`
    --> pallets/template/src/extras.rs:127:16
        |
    127 |     pub(super) fn super_hello_world() -> u128 {
        |                   ^^^^^^^^^^^^^^^^^
        |
        = note: `#[warn(dead_code)]` on by default

    warning: associated function is never used: `get_citizen_id`
    --> pallets/template/src/extras.rs:136:16
        |
    136 |     pub(super) fn get_citizen_id(accountid: T::AccountId) -> Result<u128, DispatchError> {
        |                   ^^^^^^^^^^^^^^

    warning: associated function is never used: `profile_fund_added`
    --> pallets/template/src/extras.rs:143:16
        |
    143 |     pub(super) fn profile_fund_added(citizenid: u128) -> DispatchResult {
        |                   ^^^^^^^^^^^^^^^^^^

    warning: associated function is never used: `get_profile_fund_info`
    --> pallets/template/src/extras.rs:158:5
        |
    158 |     fn get_profile_fund_info(citizenid: u128) -> Result<ProfileFundInfoOf<T>, DispatchError> {
        |        ^^^^^^^^^^^^^^^^^^^^^

    warning: associated function is never used: `draw_juror_for_citizen_profile_function`
    --> pallets/template/src/extras.rs:193:5
        |
    193 |     fn draw_juror_for_citizen_profile_function(citizen_id: u128, length: usize) -> DispatchResult {
        |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: type alias is never used: `FundIndex`
    --> pallets/template/src/lib.rs:59:1
    |
    59 | type FundIndex = u32;
    | ^^^^^^^^^^^^^^^^^^^^^

    warning: unused imports: `CheckedMul`, `CheckedSub`
    --> pallets/profile-validation/src/lib.rs:22:53
    |
    22 | use frame_support::sp_runtime::traits::{CheckedAdd, CheckedMul, CheckedSub};
    |                                                     ^^^^^^^^^^  ^^^^^^^^^^
    |
    = note: `#[warn(unused_imports)]` on by default

    warning: unused imports: `Imbalance`, `OnUnbalanced`
    --> pallets/profile-validation/src/lib.rs:28:40
    |
    28 |         Currency, ExistenceRequirement, Get, Imbalance, OnUnbalanced, ReservableCurrency,
    |                                              ^^^^^^^^^  ^^^^^^^^^^^^

    warning: unused import: `sp_io`
    --> pallets/profile-validation/src/lib.rs:36:5
    |
    36 | use sp_io;
    |     ^^^^^

    warning: unused import: `frame_support::pallet_prelude::*`
    --> pallets/profile-validation/src/lib.rs:59:6
    |
    59 |     use frame_support::pallet_prelude::*;
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: `pallet-template` (lib) generated 17 warnings
    Compiling shivarthu-runtime-api v4.0.0-dev (/home/xxx/repos/shivarthu/pallets/template/runtime-api)
    warning: unused import: `CheckedAdd`
    --> pallets/profile-validation/src/lib.rs:22:41
    |
    22 | use frame_support::sp_runtime::traits::{CheckedAdd, CheckedMul, CheckedSub};
    |                                         ^^^^^^^^^^

    warning: type alias is never used: `PositiveImbalanceOf`
    --> pallets/profile-validation/src/lib.rs:46:1
    |
    46 | / type PositiveImbalanceOf<T> = <<T as Config>::Currency as Currency<
    47 | |     <T as frame_system::Config>::AccountId,
    48 | | >>::PositiveImbalance;
    | |______________________^
    |
    = note: `#[warn(dead_code)]` on by default

    warning: type alias is never used: `NegativeImbalanceOf`
    --> pallets/profile-validation/src/lib.rs:49:1
    |
    49 | / type NegativeImbalanceOf<T> = <<T as Config>::Currency as Currency<
    50 | |     <T as frame_system::Config>::AccountId,
    51 | | >>::NegativeImbalance;
    | |______________________^
    ```

### Docker Feedback

- The instructions to start the docker infrastructure are missing.
- The attempt, trying to run `docker compose up` failed:

```bash
$ docker-compose up
Creating network "shivarthu_default" with the default driver
Pulling dev (paritytech/ci-linux:974ba3ac-20201006)...
974ba3ac-20201006: Pulling from paritytech/ci-linux
d121f8d1c412: Pull complete
1b985895e9b7: Pull complete
809a473c961b: Pull complete
89f7c794c3df: Pull complete
ea120af1c111: Pull complete
de2c35bb8bf1: Pull complete
Digest: sha256:8c10a2dd7b8581d9faed5e0dca1cc902dfa23d67bbf2641c4d51f0b0a5d0f426
Status: Downloaded newer image for paritytech/ci-linux:974ba3ac-20201006
Creating node-template ... error

ERROR: for node-template  Cannot create container for service dev: invalid mount config for type "bind": bind source path does not exist: /home/xxx/repos/shivarthu/.local

ERROR: for dev  Cannot create container for service dev: invalid mount config for type "bind": bind source path does not exist: /home/xxx/repos/shivarthu/.local
ERROR: Encountered errors while bringing up the project.
```