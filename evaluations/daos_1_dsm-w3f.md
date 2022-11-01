# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/daos.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License           |<ul><li>[x] </li></ul>| [LICENSE](https://github.com/daos-org/daos#license)                                                                                                                              | ok | 
| 0b.    | Documentation        |<ul><li>[x] </li></ul>| [document](https://github.com/daos-org/daos/tree/main/document)                                                                                                                  | ok | 
|0c.| Testing |<ul><li>[x] </li></ul>| tests.rs file under each module                                                                                                                                                  | ok |
|0d. | Example |<ul><li>[ ] </li></ul>| [VC DAO template](https://github.com/DICO-TEAM/dico-chain/tree/main/pallets/vc), [use daos for VC DAO](https://github.com/DICO-TEAM/dico-chain/blob/main/runtime/tico/src/vc.rs) | Need a tutorial for manual testing |
|0e. | Comment |<ul><li>[x] </li></ul>|                                                                                                                                                                                  | Code Documentation ok. |
|0f.| Benchmarking |<ul><li>[ ] </li></ul>| benchmarking.rs.rs file under each module                                                                                                                                        | Need instructions for run |
|1. | create-dao pallet |<ul><li>[ ] </li></ul>| [crate dao](https://github.com/daos-org/daos/tree/main/create-dao)                                                                                                               | Not tested yet |
|2. | agency pallet |<ul><li>[ ] </li></ul>| [agency](https://github.com/daos-org/daos/tree/main/agency)                                                                                                                      | Not tested yet |
|3. | doas pallet |<ul><li>[ ] </li></ul>| [doas](https://github.com/daos-org/daos/tree/main/doas)                                                                                                                          | Not tested yet |
|4. | square pallet |<ul><li>[ ] </li></ul>| [square](https://github.com/daos-org/daos/tree/main/square)                                                                                                                      | Not tested yet |
|5. | sudo pallet |<ul><li>[ ] </li></ul>| [sudo](https://github.com/daos-org/daos/tree/main/sudo)                                                                                                                          | Not tested yet |

## General Notes

### Evaluation V2

#### License

Ok, now only one license Apache 2.0.

#### Testing Guides

Please, refer to our deliverable [Milestone Deliverable Guideline](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md). We need a testing guide and integration tests. I understand that you have unit tests in each pallet but I need to access and verify if what was proposed in the milestone works as a system. How can I check that on a system level (not unit) your delivery works? If you don't want to provide a guide to manually test the system you can opt to use automated e2e testing, as some grants delivery does. The code provided as example, how can I run it?

#### Tests Coverage

All pallets has good coverage.

Agency pallet
lib.rs	194 / 262 (74.05%) (+29.23%)

Create Dao
lib.rs	40 / 45 (88.89%) (+8.45%)

Doas
lib.rs	14 / 17 (82.35%) (+5.88%)

Square
lib.rs	232 / 271 (85.61%) (+17.38%)

Sudo
lib.rs	30 / 34 (88.24%) (+0.74%)

#### Static Analysis

All warnings were fixed.


### Evaluation V1

#### License

There are two licence files in the repository, one APACHE 2.0 and other MIT. Which is the licence of the software? Why two licenses? Usually we distribute software under just one license.


#### Testing Guides

We need a tutorial for performing system tests on the software. Something like [this one](https://github.com/Popular-Coding/ventur/blob/main/pallets/escrow/README.md). 

We also need instructions for running the benchmarks mentioned. 

The lack of these tutorials prevented me to test the pallets delivered. 

#### Tests Coverage

Agency pallet
lib.rs	- 121 / 270 (44.81%)
some paths and full methdos do not covered.

Create Dao
lib.rs	- 37 / 46 (80.43%)
some paths does not covered.

Doas
lib.rs	13 / 17 (76.47%)
some error paths does not covered.

Square
lib.rs	189 / 277 (68.23%)
some paths and full methdos do not covered.

Sudo
lib.rs	28 / 32 (87.50%)
Good coverage.


#### Static Analysis

cargo clippy generated these warnings:

```
warning: manual implementation of `Option::map`
  --> primitives/src/ids.rs:45:3
   |
45 | /         if let Some(x) = self.0.checked_add(v.0) {
46 | |             Some(DaoId(x))
47 | |         } else {
48 | |             None
49 | |         }
   | |_________^ help: try this: `self.0.checked_add(v.0).map(DaoId)`
   |
   = note: `#[warn(clippy::manual_map)]` on by default
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#manual_map

warning: methods called `into_*` usually take `self` by value
  --> primitives/src/lib.rs:32:18
   |
32 |     fn into_account(&self) -> AccountId;
   |                     ^^^^^
   |
   = note: `#[warn(clippy::wrong_self_convention)]` on by default
   = help: consider choosing a less ambiguous name
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#wrong_self_convention

warning: `daos-primitives` (lib) generated 2 warnings
    Checking frame-benchmarking v4.0.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v0.9.25#3348e144)
    Checking pallet-balances v4.0.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v0.9.25#3348e144)
    Checking daos-create-dao v1.0.0 (/home/diogo/workspace/daos/daos/create-dao)
warning: using `clone` on type `<T as pallet::Config>::ConcreteId` which implements the `Copy` trait
   --> create-dao/src/lib.rs:212:19
    |
212 |                     concrete_id: concrete_id.clone(),
    |                                  ^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `concrete_id`
    |
    = note: `#[warn(clippy::clone_on_copy)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: very complex type used. Consider factoring parts into `type` definitions
   --> create-dao/src/lib.rs:251:8
    |
251 |           ) -> result::Result<
    |  ______________^
252 | |             DaoInfo<T::AccountId, T::BlockNumber, T::ConcreteId, Status>,
253 | |             DispatchError,
254 | |         > {
    | |_________^
    |
    = note: `#[warn(clippy::type_complexity)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#type_complexity

warning: very complex type used. Consider factoring parts into `type` definitions
   --> create-dao/src/lib.rs:143:12
    |
143 |     #[pallet::storage]
    |               ^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#type_complexity

warning: `daos-create-dao` (lib) generated 3 warnings
    Checking daos-sudo v1.0.0 (/home/diogo/workspace/daos/daos/sudo)
    Checking daos-doas v1.0.0 (/home/diogo/workspace/daos/daos/doas)
    Checking daos-square v1.0.0 (/home/diogo/workspace/daos/daos/square)
warning: this `else { if .. }` block can be collapsed
   --> square/src/lib.rs:594:13
    |
594 |                       } else {
    |  ____________________________^
595 | |                         if x.end.saturating_add(x.delay) > now {
596 | |                             return Err(Error::<T>::InDelayTime)?
597 | |                         } else {
...   |
628 | |                         }
629 | |                     },
    | |_____________________^
    |
    = note: `#[warn(clippy::collapsible_else_if)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#collapsible_else_if
help: collapse nested if block
    |
594 ~                     } else if x.end.saturating_add(x.delay) > now {
595 ~                                  return Err(Error::<T>::InDelayTime)?
596 ~                              } else {
597 ~                                  let call_id: T::CallId =
598 ~                                      TryFrom::<<T as dao::Config>::Call>::try_from(x.proposal.clone())
599 ~                                          .unwrap_or_default();
  ...

warning: this `else { if .. }` block can be collapsed
   --> square/src/lib.rs:669:13
    |
669 |                       } else {
    |  ____________________________^
670 | |                         if h.pledge.vote_end_do(&who, &h.dao_id).is_err() {
671 | |                             true
672 | |                         } else {
...   |
679 | |                         }
680 | |                     }
    | |_____________________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#collapsible_else_if
help: collapse nested if block
    |
669 ~                     } else if h.pledge.vote_end_do(&who, &h.dao_id).is_err() {
670 ~                                  true
671 ~                              } else {
672 ~                                  Self::deposit_event(Event::<T>::Unlock(
673 ~                                      who.clone(),
674 ~                                      h.concrete_id.clone(),
  ...

    Checking daos-agency v1.0.0 (/home/diogo/workspace/daos/daos/agency)
warning: this import is redundant
  --> agency/src/lib.rs:26:1
   |
26 | use dao;
   | ^^^^^^^^ help: remove it entirely
   |
   = note: `#[warn(clippy::single_component_path_imports)]` on by default
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#single_component_path_imports

warning: redundant clone
   --> square/src/lib.rs:439:30
    |
439 |             ReserveOf::<T>::append(who.clone(), (deposit_amount, unreserved_block));
    |                                       ^^^^^^^^ help: remove this
    |
    = note: `#[warn(clippy::redundant_clone)]` on by default
note: this value is dropped without further use
   --> square/src/lib.rs:439:27
    |
439 |             ReserveOf::<T>::append(who.clone(), (deposit_amount, unreserved_block));
    |                                    ^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: using `clone` on type `<<T as pallet::Config>::Currency as frame_support::traits::Currency<<T as frame_system::Config>::AccountId>>::Balance` which implements the `Copy` trait
   --> square/src/lib.rs:432:25
    |
432 |             let deposit_amount = deposit.1.clone();
    |                                  ^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `deposit.1`
    |
    = note: `#[warn(clippy::clone_on_copy)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: using `clone` on type `<T as daos_create_dao::Config>::ConcreteId` which implements the `Copy` trait
   --> square/src/lib.rs:675:9
    |
675 | ...                   h.concrete_id.clone(),
    |                       ^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `h.concrete_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: very complex type used. Consider factoring parts into `type` definitions
   --> square/src/lib.rs:243:3
    |
243 |         Vec<(PropIndex, T::Hash, <T as dao::Config>::Call, T::AccountId)>,
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(clippy::type_complexity)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#type_complexity

warning: very complex type used. Consider factoring parts into `type` definitions
   --> square/src/lib.rs:292:3
    |
292 | /         Vec<
293 | |             VoteInfo<
294 | |                 T::DaoId,
295 | |                 T::ConcreteId,
...   |
301 | |             >,
302 | |         >,
    | |_________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#type_complexity

warning: redundant pattern matching, consider using `is_some()`
   --> square/src/lib.rs:819:11
    |
819 |             if let Some(_) = <DepositOf<T>>::take(dao_id, prop_index) {
    |             -------^^^^^^^------------------------------------------- help: try this: `if <DepositOf<T>>::take(dao_id, prop_index).is_some()`
    |
    = note: `#[warn(clippy::redundant_pattern_matching)]` on by default
    = note: this will change drop order of the result, as well as all temporaries
    = note: add `#[allow(clippy::redundant_pattern_matching)]` if this is important
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_pattern_matching

warning: this expression creates a reference which is immediately dereferenced by the compiler
  --> agency/src/traits.rs:46:69
   |
46 |         Self::change_members_sorted(dao_id, &incoming[..], &outgoing[..], &new_members);
   |                                                                           ^^^^^^^^^^^^ help: change this to: `new_members`
   |
   = note: `#[warn(clippy::needless_borrow)]` on by default
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: `daos-square` (lib) generated 8 warnings
warning: this let-binding has unit value
   --> agency/src/lib.rs:421:5
    |
421 | /                 let _ = <Proposals<T, I>>::try_mutate(dao_id, |proposals| -> DispatchResult {
422 | |                     proposals.push(proposal_hash);
423 | |                     ensure!(
424 | |                         proposals.len() as u32 <= MaxProposals::<T, I>::get(dao_id),
...   |
427 | |                     Ok(())
428 | |                 })?;
    | |____________________^
    |
    = note: `#[warn(clippy::let_unit_value)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_unit_value
help: omit the `let` binding
    |
421 ~                 <Proposals<T, I>>::try_mutate(dao_id, |proposals| -> DispatchResult {
422 ~                     proposals.push(proposal_hash);
423 ~                     ensure!(
424 ~                         proposals.len() as u32 <= MaxProposals::<T, I>::get(dao_id),
425 ~                         Error::<T, I>::WrongProposalLength
426 ~                     );
  ...

error: this `if` has identical blocks
   --> agency/src/lib.rs:505:36
    |
505 |               if is_account_voting_first_time {
    |  _____________________________________________^
506 | |                 Ok(().into())
507 | |             } else {
    | |_____________^
    |
    = note: `#[deny(clippy::if_same_then_else)]` on by default
note: same as this
   --> agency/src/lib.rs:507:11
    |
507 |               } else {
    |  ____________________^
508 | |                 Ok(().into())
509 | |             }
    | |_____________^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#if_same_then_else

warning: this expression creates a reference which is immediately dereferenced by the compiler
   --> agency/src/lib.rs:680:23
    |
680 |         Ok(members.contains(&who))
    |                             ^^^^ help: change this to: `who`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: `daos-agency` (lib) generated 4 warnings
error: could not compile `daos-agency` due to previous error; 4 warnings emitted
```


#### Code documentation

The folowing warning was presented while generating the html documentation from the source code:

```
warning: unresolved link to `AccountId`
  --> primitives/src/lib.rs:29:60
   |
29 | /// This type can be converted into and possibly from an [`AccountId`] (which itself is generic).
   |                                                            ^^^^^^^^^ no item named `AccountId` in scope
   |
   = note: `#[warn(rustdoc::broken_intra_doc_links)]` on by default
   = help: to escape `[` and `]` characters, add '\' before them like `\[` or `\]`

warning: `daos-primitives` (lib doc) generated 1 warning

```

Good code documentation.

