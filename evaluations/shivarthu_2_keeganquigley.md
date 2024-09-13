# General Notes

Some unit tests currently failing:

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
