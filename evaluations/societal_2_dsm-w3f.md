

# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Societal.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[GitHub repo link](https://github.com/sctllabs/societal-grant-submission-2/blob/main/LICENSE)|  |
| 0b. | Documentation |<ul><li>[x] </li></ul>|[GitHub repo link](https://github.com/sctllabs/societal-grant-submission-2/blob/main/README.md) |  |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>|[GitHub repo link](https://github.com/sctllabs/societal-grant-submission-2/blob/main/docs/TestingGuide.md)|  |
| 0d. | Docker |<ul><li>[ ] </li></ul>|[Docker Image](https://hub.docker.com/layers/societal/societal-client/vcc6652b/images/sha256-417c09f0b6356c7675d9c4ee0fc2995ef3b66a2a0a11b7708e38dbf969063052?context=explore)| please include the instruction for proper run the image. |
| 0e. | Article |<ul><li>[ ] </li></ul>|[Testing Article](https://github.com/sctllabs/societal-grant-submission-2/blob/main/docs/TestingGuide.md) | Article is not the same as testing tutorial. |
| 1. | Client Modules |<ul><li>[ ] </li></ul>| [Societal UI](https://github.com/sctllabs/societal-grant-submission-2) | Tests are not running. Possible quality improvements. |
| 2. | Substrate module: DAO Factory |<ul><li>[x] </li></ul>|[GitHub repo link](https://github.com/sctllabs/societal-grant-submission) |   |  

## General Notes

### Docker

We expected better instructions for running the image, please include at least the proper command to run the image.

### Article

The article is a text explaining to the users what the software is and how to use it. Is expected to be public available on some sites (like medium) to publicize the project and also help users to use it. 

### Substrate project (Milestone 1 reviewed in Milestone 2)

During the compilation of the rust project the following warining was presented:

```
warning: type alias `BalanceOf` is never used
  --> pallets/dao/src/lib.rs:29:1
   |
29 | / type BalanceOf<T> =
30 | |     <<T as Config>::Currency as Currency<<T as frame_system::Config>::AccountId>>::Balance;
   | |___________________________________________________________________________________________^
   |
   = note: `#[warn(dead_code)]` on by default

warning: associated function `u128_to_balance_of` is never used
   --> pallets/dao/src/lib.rs:303:6
    |
303 |         fn u128_to_balance_of(cost: u128) -> BalanceOf<T> {
    |            ^^^^^^^^^^^^^^^^^^

warning: `pallet-dao` (lib) generated 2 warnings
```

The automated tests fail to compile when tring to run it:

```
error: could not compile `pallet-dao` due to 2 previous errors
Dec 23 19:26:46.931 ERROR cargo_tarpaulin: Failed to compile tests!
error[E0046]: not all trait items implemented, missing: `DaoTokenBalanceLimit`
   --> pallets/dao/src/mock.rs:215:1
    |
215 | impl pallet_dao::Config for Test {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ missing `DaoTokenBalanceLimit` in implementation
    |
   ::: pallets/dao/src/lib.rs:96:9
    |
96  |         type DaoTokenBalanceLimit: Get<u128>;
    |         ------------------------------------ `DaoTokenBalanceLimit` from trait


Error: "Failed to compile tests!\nerror[E0046]: not all trait items implemented, missing: `DaoTokenBalanceLimit`\n   --> pallets/dao/src/mock.rs:215:1\n    |\n215 | impl pallet_dao::Config for Test {\n    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ missing `DaoTokenBalanceLimit` in implementation\n    |\n   ::: pallets/dao/src/lib.rs:96:9\n    |\n96  |         type DaoTokenBalanceLimit: Get<u128>;\n    |         ------------------------------------ `DaoTokenBalanceLimit` from trait\n\n"

```

Cargo clippy generated these warninigs:



```
warning: type alias `BalanceOf` is never used
  --> pallets/dao/src/lib.rs:29:6
   |
29 | type BalanceOf<T> =
   |      ^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: associated function `u128_to_balance_of` is never used
   --> pallets/dao/src/lib.rs:303:6
    |
303 |         fn u128_to_balance_of(cost: u128) -> BalanceOf<T> {
    |            ^^^^^^^^^^^^^^^^^^

    Checking pallet-bounties v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
warning: the borrowed expression implements the required traits
   --> pallets/dao/src/lib.rs:315:31
    |
315 |         if !Daos::<T>::contains_key(&id) {
    |                                     ^^^ help: change this to: `id`
    |
    = note: `#[warn(clippy::needless_borrow)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: the borrowed expression implements the required traits
   --> pallets/dao/src/lib.rs:327:28
    |
327 |         match Policies::<T>::get(&id) {
    |                                  ^^^ help: change this to: `id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

    Checking pallet-uniques v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-democracy v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
warning: redundant clone
   --> pallets/dao-membership/src/lib.rs:278:14
    |
278 |                     &[remove.clone()],
    |                             ^^^^^^^^ help: remove this
    |
    = note: `#[warn(clippy::redundant_clone)]` on by default
note: this value is dropped without further use
   --> pallets/dao-membership/src/lib.rs:278:8
    |
278 |                     &[remove.clone()],
    |                       ^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: `pallet-dao` (lib) generated 4 warnings
    Checking pallet-contracts v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-membership v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
warning: `pallet-dao-membership` (lib) generated 1 warning
    Checking pallet-assets v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
warning: returning the result of a `let` binding from a block
  --> pallets/dao-collective/src/lib.rs:98:3
   |
97 |         let more_than_majority = yes_votes * 2 > len;
   |         --------------------------------------------- unnecessary `let` binding
98 |         more_than_majority
   |         ^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(clippy::let_and_return)]` on by default
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_and_return
help: return the expression directly
   |
97 ~         
98 ~         yes_votes * 2 > len
   |

    Checking pallet-child-bounties v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-scheduler v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
warning: the borrowed expression implements the required traits
   --> pallets/dao-treasury/src/lib.rs:364:43
    |
364 |             let proposal = <Proposals<T, I>>::take(&dao_id, &proposal_id)
    |                                                    ^^^^^^^ help: change this to: `dao_id`
    |
    = note: `#[warn(clippy::needless_borrow)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: the borrowed expression implements the required traits
   --> pallets/dao-treasury/src/lib.rs:364:52
    |
364 |             let proposal = <Proposals<T, I>>::take(&dao_id, &proposal_id)
    |                                                             ^^^^^^^^^^^^ help: change this to: `proposal_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: the borrowed expression implements the required traits
   --> pallets/dao-collective/src/lib.rs:727:41
    |
727 |         let mut voting = Self::voting(dao_id, &proposal).ok_or(Error::<T, I>::ProposalMissing)?;
    |                                               ^^^^^^^^^ help: change this to: `proposal`
    |
    = note: `#[warn(clippy::needless_borrow)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: the borrowed expression implements the required traits
   --> pallets/dao-collective/src/lib.rs:767:34
    |
767 |         Voting::<T, I>::insert(dao_id, &proposal, voting);
    |                                        ^^^^^^^^^ help: change this to: `proposal`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: the borrowed expression implements the required traits
   --> pallets/dao-collective/src/lib.rs:780:37
    |
780 |         let voting = Self::voting(dao_id, &proposal_hash).ok_or(Error::<T, I>::ProposalMissing)?;
    |                                           ^^^^^^^^^^^^^^ help: change this to: `proposal_hash`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: the borrowed expression implements the required traits
   --> pallets/dao-collective/src/lib.rs:946:38
    |
946 |         ProposalOf::<T, I>::remove(dao_id, &proposal_hash);
    |                                            ^^^^^^^^^^^^^^ help: change this to: `proposal_hash`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: the borrowed expression implements the required traits
   --> pallets/dao-collective/src/lib.rs:947:34
    |
947 |         Voting::<T, I>::remove(dao_id, &proposal_hash);
    |                                        ^^^^^^^^^^^^^^ help: change this to: `proposal_hash`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: this expression can be written more simply using `.retain()`
   --> pallets/dao-collective/src/lib.rs:994:6
    |
994 | /                     votes.ayes = votes
995 | |                         .ayes
996 | |                         .into_iter()
997 | |                         .filter(|i| outgoing.binary_search(i).is_err())
998 | |                         .collect();
    | |__________________________________^ help: consider calling `.retain()` instead: `votes.ayes.retain(|i| outgoing.binary_search(i).is_err())`
    |
    = note: `#[warn(clippy::manual_retain)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#manual_retain

warning: this expression can be written more simply using `.retain()`
    --> pallets/dao-collective/src/lib.rs:999:6
     |
999  | /                     votes.nays = votes
1000 | |                         .nays
1001 | |                         .into_iter()
1002 | |                         .filter(|i| outgoing.binary_search(i).is_err())
1003 | |                         .collect();
     | |__________________________________^ help: consider calling `.retain()` instead: `votes.nays.retain(|i| outgoing.binary_search(i).is_err())`
     |
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#manual_retain

    Checking pallet-collective v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
warning: `pallet-dao-treasury` (lib) generated 2 warnings
    Checking pallet-conviction-voting v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
warning: `pallet-dao-collective` (lib) generated 8 warnings
    Checking pallet-referenda v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking substrate-state-trie-migration-rpc v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking substrate-frame-rpc-system v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking sc-consensus-babe-rpc v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-randomness-collective-flip v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-nicks v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-indices v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-proxy v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-vesting v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking frame-executive v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-sudo v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-elections-phragmen v5.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-nomination-pools v1.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-multisig v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-utility v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-society v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking node-rpc v3.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-staking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-authority-discovery v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-babe v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking pallet-grandpa v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
warning: this operation has no effect
   --> runtime/src/lib.rs:449:40
    |
449 |     pub const SignedRewardBase: Balance = 1 * DOLLARS;
    |                                           ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = note: `#[warn(clippy::identity_op)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:450:41
    |
450 |     pub const SignedDepositBase: Balance = 1 * DOLLARS;
    |                                            ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:451:41
    |
451 |     pub const SignedDepositByte: Balance = 1 * CENTS;
    |                                            ^^^^^^^^^ help: consider reducing it to: `CENTS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:606:43
    |
606 |     pub const ProposalBondMinimum: Balance = 1 * DOLLARS;
    |                                              ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:607:39
    |
607 |     pub const SpendPeriod: BlockNumber = 1 * MINUTES;
    |                                          ^^^^^^^^^^^ help: consider reducing it to: `MINUTES`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:609:40
    |
609 |     pub const TipCountdown: BlockNumber = 1 * DAYS;
    |                                           ^^^^^^^^ help: consider reducing it to: `DAYS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:611:44
    |
611 |     pub const TipReportDepositBase: Balance = 1 * DOLLARS;
    |                                               ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:612:42
    |
612 |     pub const DataDepositPerByte: Balance = 1 * CENTS;
    |                                             ^^^^^^^^^ help: consider reducing it to: `CENTS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:873:41
    |
873 |     pub const BountyDepositBase: Balance = 1 * DOLLARS;
    |                                            ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:875:41
    |
875 |     pub const CuratorDepositMin: Balance = 1 * DOLLARS;
    |                                            ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:877:52
    |
877 |     pub const BountyDepositPayoutDelay: BlockNumber = 1 * DAYS;
    |                                                       ^^^^^^^^ help: consider reducing it to: `DAYS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:898:47
    |
898 |     pub const ChildBountyValueMinimum: Balance = 1 * DOLLARS;
    |                                                  ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
    --> runtime/src/lib.rs:1029:43
     |
1029 |     pub const PreimageByteDeposit: Balance = 1 * CENTS;
     |                                              ^^^^^^^^^ help: consider reducing it to: `CENTS`
     |
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
    --> runtime/src/lib.rs:1095:36
     |
1095 |     pub const IndexDeposit: Balance = 1 * DOLLARS;
     |                                       ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
     |
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
    --> runtime/src/lib.rs:1181:35
     |
1181 |     pub const ItemDeposit: Balance = 1 * DOLLARS;
     |                                      ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
     |
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: `societal-node-runtime` (lib) generated 15 warnings
    Checking rocksdb v0.18.0
    Checking kvdb-rocksdb v0.15.2
    Checking sc-client-db v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking sc-service v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking sc-cli v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
    Checking node-inspect v0.9.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.28#ce10b9f2)
warning: this operation has no effect
   --> node/src/chain_spec.rs:239:19
    |
239 |             min_join_bond: 1 * DOLLARS,
    |                            ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = note: `#[warn(clippy::identity_op)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: redundant clone
   --> node/src/rpc.rs:115:47
    |
115 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
    |                                                  ^^^^^^^^ help: remove this
    |
    = note: `#[warn(clippy::redundant_clone)]` on by default
note: this value is dropped without further use
   --> node/src/rpc.rs:115:43
    |
115 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
    |                                              ^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: very complex type used. Consider factoring parts into `type` definitions
  --> node/src/service.rs:49:6
   |
49 |   ) -> Result<
   |  ______^
50 | |     sc_service::PartialComponents<
51 | |         FullClient,
52 | |         FullBackend,
...  |
70 | |     ServiceError,
71 | | > {
   | |_^
   |
   = note: `#[warn(clippy::type_complexity)]` on by default
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#type_complexity

warning: the borrowed expression implements the required traits
   --> node/src/service.rs:244:36
    |
244 |             let _ = std::fs::create_dir_all(&database_path);
    |                                             ^^^^^^^^^^^^^^ help: change this to: `database_path`
    |
    = note: `#[warn(clippy::needless_borrow)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: `societal-node` (lib) generated 4 warnings
warning: useless conversion to the same type: `u128`
   --> node/src/benchmarking.rs:105:12
    |
105 |                 value: self.value.into(),
    |                        ^^^^^^^^^^^^^^^^^ help: consider removing `.into()`: `self.value`
    |
    = note: `#[warn(clippy::useless_conversion)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#useless_conversion

warning: redundant clone
   --> node/src/benchmarking.rs:164:7
    |
164 |         call.clone(),
    |             ^^^^^^^^ help: remove this
    |
    = note: `#[warn(clippy::redundant_clone)]` on by default
note: this value is dropped without further use
   --> node/src/benchmarking.rs:164:3
    |
164 |         call.clone(),
    |         ^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> node/src/benchmarking.rs:166:40
    |
166 |         runtime::Signature::Sr25519(signature.clone()),
    |                                              ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> node/src/benchmarking.rs:166:31
    |
166 |         runtime::Signature::Sr25519(signature.clone()),
    |                                     ^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> node/src/benchmarking.rs:167:8
    |
167 |         extra.clone(),
    |              ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> node/src/benchmarking.rs:167:3
    |
167 |         extra.clone(),
    |         ^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> node/src/rpc.rs:115:47
    |
115 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
    |                                                  ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> node/src/rpc.rs:115:43
    |
115 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
    |                                              ^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: `societal-node` (bin "societal-node") generated 8 warnings (3 duplicates)
```

cargo audit found some problems, consider to review the project dependencies:

```
error: 3 vulnerabilities found!
warning: 5 allowed warnings found
```


### Frontend (Milestone 2)

No automated tests.

No warnings generated by ESlint.


### Running the system

Worked as described in the testing guide.





