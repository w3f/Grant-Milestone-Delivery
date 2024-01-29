# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/PoCS.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

|Number|Deliverable|Accepted|Link|Notes|
|-------------|-------------|------------- |------------- |------------- |
|0a.|License| <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/auguth/pocs/blob/master/LICENSE) |-|
|0b.|Documentation| <ul><li>[x] </li></ul> | [Inline Documentation](https://auguth.github.io/pocs/target/doc/pallet_contracts/) ||
|0c.|Testing Guide| <ul><li>[x] </li></ul> | [Testing guide](https://github.com/auguth/pocs/blob/master/README.md#testing) , [Node Setup & Run](https://github.com/auguth/pocs/blob/master/README.md#run-pocs-node) ||
|0d.|Docker | <ul><li>[x] </li></ul> | [DockerImage 2.46GB compressed](https://hub.docker.com/r/jobyreuben/pocs-w3f-m1/tags) , [Dockerfile](https://github.com/auguth/pocs/blob/master/Dockerfile)|  |
|0e.|Article (Repo Readme) / External Documentation| <ul><li>[x] </li></ul> | [PoCS article](https://github.com/auguth/pocs/blob/master/README.md) ||
|1.|Delivery| <ul><li>[x] </li></ul> | [PoCS Node](https://github.com/auguth/pocs/tree/master) ||

# General Notes

## Tests

Unit tests pass but with multiple warnings, as team already mentioned.

<details>
  <summary>Node tests</summary>

```rust
warning: unused variable: `call`
   --> runtime/src/lib.rs:131:14
    |
131 |     fn contains(call: &RuntimeCall) -> bool {
    |                 ^^^^ help: if this is intentional, prefix it with an underscore: `_call`
    |
    = note: `#[warn(unused_variables)]` on by default

warning: type alias `Migrations` is never used
   --> runtime/src/lib.rs:819:6
    |
819 | type Migrations = (
    |      ^^^^^^^^^^
    |
    = note: `#[warn(dead_code)]` on by default

warning: `pocs-runtime` (lib test) generated 5 warnings (5 duplicates)
warning: `pocs-runtime` (lib) generated 5 warnings (run `cargo fix --lib -p pocs-runtime` to apply 3 suggestions)
   Compiling rocksdb v0.21.0
   Compiling kvdb-rocksdb v0.19.0
   Compiling sc-client-db v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-service v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-storage-monitor v0.1.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-cli v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
warning: warn(unused_crate_dependencies) is ignored unless specified at crate level
  --> node/src/rpc.rs:32:9
   |
32 | #![warn(unused_crate_dependencies)]
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_attributes)]` on by default

warning: `pocs` (lib test) generated 1 warning (1 duplicate)
warning: `pocs` (lib) generated 1 warning
warning: `pocs` (bin "pocs" test) generated 1 warning (1 duplicate)
    Finished test [unoptimized + debuginfo] target(s) in 15m 34s
     Running unittests src/lib.rs (target/debug/deps/node_primitives-80e2a9868c9e8d19)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_contracts-8e183dc368ffb258)

running 4 tests
test tests::pocs_account_stake_event ... ok
test tests::pocs_contract_stake_event ... ok
test tests::pocs_update_delegate_valid_owner ... ok
test tests::pocs_update_delegate_invalid_owner ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 230 filtered out; finished in 0.02s

     Running unittests src/lib.rs (target/debug/deps/pallet_contracts_primitives-914709a9539f3b89)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_contracts_proc_macro-16f4f48f28f91fd2)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pocs-fc65372f9f7d7169)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/pocs-3952a24fc5d4610c)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pocs_runtime-e3e923c7aebf348e)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 4 filtered out; finished in 0.00s
```
</details>

<details>
  <summary>Pallet tests</summary>

```rust
warning: unused imports: `CallFlags`, `ReturnCode`
  --> pallets/contracts/src/wasm/mod.rs:31:52
   |
31 |     AllowDeprecatedInterface, AllowUnstableInterface, CallFlags, Environment, ReturnCode, Runtime,
   |                                                       ^^^^^^^^^               ^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

   Compiling sc-consensus-grandpa-rpc v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-consensus-babe-rpc v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling substrate-frame-rpc-system v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pallet-transaction-payment-rpc v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-basic-authorship v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-statement-store v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pallet-proxy v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
warning: unused import: `CallFlags`
  --> pallets/contracts/src/wasm/mod.rs:31:52
   |
31 |     AllowDeprecatedInterface, AllowUnstableInterface, CallFlags, Environment, ReturnCode, Runtime,
   |                                                       ^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused import: `KeyOwnerProofSystem`
  --> pallets/contracts/src/tests.rs:45:49
   |
45 |         OnInitialize, StorageVersion, WithdrawReasons,KeyOwnerProofSystem,
   |                                                       ^^^^^^^^^^^^^^^^^^^

warning: unused import: `pallet_session::historical as pallet_session_historical`
  --> pallets/contracts/src/tests.rs:52:5
   |
52 | use pallet_session::historical as pallet_session_historical;
   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused imports: `DigestItem`, `Digest`, `Header`, `TestXt`
  --> pallets/contracts/src/tests.rs:57:17
   |
57 |     testing::{H256,Digest, DigestItem, Header, TestXt},
   |                    ^^^^^^  ^^^^^^^^^^  ^^^^^^  ^^^^^^

warning: unused import: `Config as StakingCon`
   --> pallets/contracts/src/lib.rs:130:22
    |
130 | use pallet_staking::{Config as StakingCon};
    |                      ^^^^^^^^^^^^^^^^^^^^

warning: use of deprecated type alias `frame_system::Module`: use `Pallet` instead
    --> pallets/contracts/src/tests.rs:5907:30
     |
5907 |         let events = frame_system::Module::<Test>::events();
     |                                    ^^^^^^
     |
     = note: `#[warn(deprecated)]` on by default

warning: use of deprecated type alias `frame_system::Module`: use `Pallet` instead
    --> pallets/contracts/src/tests.rs:5953:30
     |
5953 |         let events = frame_system::Module::<Test>::events();
     |                                    ^^^^^^

warning: use of deprecated type alias `frame_system::Module`: use `Pallet` instead
    --> pallets/contracts/src/tests.rs:5998:30
     |
5998 |         let events = frame_system::Module::<Test>::events();
     |                                    ^^^^^^

warning: use of deprecated type alias `frame_system::Module`: use `Pallet` instead
    --> pallets/contracts/src/tests.rs:6040:30
     |
6040 |         let events = frame_system::Module::<Test>::events();
     |                                    ^^^^^^

warning: use of deprecated type alias `frame_system::Module`: use `Pallet` instead
    --> pallets/contracts/src/tests.rs:6062:30
     |
6062 |         let events = frame_system::Module::<Test>::events();
     |                                    ^^^^^^

warning: unused import: `Saturating`
  --> pallets/contracts/src/gasstakeinfo.rs:22:11
   |
22 |     traits::{Saturating},
   |              ^^^^^^^^^^

warning: unused import: `Config`
   --> pallets/contracts/src/lib.rs:130:22
    |
130 | use pallet_staking::{Config as StakingCon};
    |                      ^^^^^^

warning: call to `.clone()` on a reference in this situation does nothing
  --> pallets/contracts/src/wasm/prepare.rs:83:29
   |
83 |             Module::new(&engine, code.clone()).map_err(|_| "Can't load the module into wasmi!")?;
   |                                      ^^^^^^^^ help: remove this redundant call
   |
   = note: the type `[u8]` does not implement `Clone`, so calling `clone` on `&[u8]` copies the reference, which does not do anything and can be removed
   = note: `#[warn(noop_method_call)]` on by default

warning: unused implementer of `frame_support::traits::Imbalance` that must be used
   --> pallets/contracts/src/migration/v10.rs:187:5
    |
187 |                 T::ContractCurrency::deposit_creating(&deposit_account, min_balance);
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(unused_must_use)]` on by default

warning: `pallet-contracts` (lib) generated 5 warnings (run `cargo fix --lib -p pallet-contracts` to apply 2 suggestions)
warning: unused import: `Header`
  --> pallets/contracts/src/tests.rs:58:65
   |
58 |     traits::{BlakeTwo256, Convert, Hash, IdentityLookup,OpaqueKeys,Header as _},
   |                                                                    ^^^^^^

warning: unused import: `OpaqueKeys`
  --> pallets/contracts/src/tests.rs:58:54
   |
58 |     traits::{BlakeTwo256, Convert, Hash, IdentityLookup,OpaqueKeys,Header as _},
   |                                                         ^^^^^^^^^^

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/exec.rs:2135:8
     |
2135 |             let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |                 ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`
     |
     = note: `#[warn(unused_variables)]` on by default

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/exec.rs:2136:8
     |
2136 |             let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(origin.clone(),CHARLIE);
     |                 ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/exec.rs:2297:8
     |
2297 |             let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |                 ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/exec.rs:2298:8
     |
2298 |             let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,CHARLIE);
     |                 ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/exec.rs:2416:8
     |
2416 |             let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |                 ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/exec.rs:2417:8
     |
2417 |             let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,CHARLIE);
     |                 ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/exec.rs:2467:8
     |
2467 |             let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |                 ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/exec.rs:2468:8
     |
2468 |             let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,CHARLIE);
     |                 ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/exec.rs:2840:8
     |
2840 |             let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |                 ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/exec.rs:2841:8
     |
2841 |             let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,CHARLIE);
     |                 ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/exec.rs:3043:8
     |
3043 |             let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |                 ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/exec.rs:3044:8
     |
3044 |             let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,CHARLIE);
     |                 ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/exec.rs:3108:8
     |
3108 |             let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |                 ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/exec.rs:3109:8
     |
3109 |             let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,CHARLIE);
     |                 ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/tests.rs:1081:7
     |
1081 |         let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |             ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/tests.rs:1082:7
     |
1082 |         let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,addr1.clone());
     |             ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info3`
    --> pallets/contracts/src/tests.rs:1087:7
     |
1087 |         let contract_stake_info3 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |             ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info3`

warning: unused variable: `account_stake_info3`
    --> pallets/contracts/src/tests.rs:1088:7
     |
1088 |         let account_stake_info3 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,addr2.clone());
     |             ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info3`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/tests.rs:3107:7
     |
3107 |         let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |             ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/tests.rs:3108:7
     |
3108 |         let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,addr_callee.clone());
     |             ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/tests.rs:5127:7
     |
5127 |         let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |             ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/tests.rs:5128:7
     |
5128 |         let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,addr.clone());
     |             ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: type alias `AccountId64` is never used
  --> pallets/contracts/src/tests.rs:64:6
   |
64 | type AccountId64 = u64;
   |      ^^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: type alias `Nonce` is never used
  --> pallets/contracts/src/tests.rs:65:6
   |
65 | type Nonce = u32;
   |      ^^^^^

warning: type alias `Balance` is never used
  --> pallets/contracts/src/tests.rs:66:6
   |
66 | type Balance = u64;
   |      ^^^^^^^

warning: unused implementer of `hidden_include::traits::Imbalance` that must be used
   --> pallets/contracts/src/migration/v10.rs:187:5
    |
187 |                 T::ContractCurrency::deposit_creating(&deposit_account, min_balance);
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(unused_must_use)]` on by default

warning: `pallet-contracts` (lib test) generated 40 warnings (2 duplicates) (run `cargo fix --lib -p pallet-contracts --tests` to apply 27 suggestions)
   Compiling wasm-opt v0.112.0
   Compiling substrate-wasm-builder v5.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pocs-runtime v4.0.0-dev (/home/ubuntu/pocs/runtime)
warning: unused imports: `EnsureRootWithSuccess`, `EnsureSignedBy`, `EnsureWithSuccess`
  --> runtime/src/lib.rs:22:69
   |
22 | use frame_system::{ limits::{BlockLength, BlockWeights},EnsureRoot, EnsureRootWithSuccess, EnsureSigned, EnsureSignedBy, EnsureWithSuccess};
   |                                                                     ^^^^^^^^^^^^^^^^^^^^^                ^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused import: `currency::*`
  --> runtime/src/lib.rs:41:17
   |
41 | use constants::{currency::*, time::*};
   |                 ^^^^^^^^^^^

warning: use of deprecated constant `WhereSection::_w`: 
                 It is deprecated to use a `where` clause in `construct_runtime`.
                 Please instead use `frame_system::Config` to set the `Block` type and delete this clause. 
                 It is planned to be removed in December 2023.
         
                 For more info see:
                     <https://github.com/paritytech/substrate/pull/14437>
   --> runtime/src/lib.rs:753:1
    |
753 | / construct_runtime!(
754 | |     pub struct Runtime
755 | |     where
756 | |         Block = Block,
...   |
784 | |     }
785 | | );
    | |_^
    |
    = note: `#[warn(deprecated)]` on by default
    = note: this warning originates in the macro `frame_support::match_and_insert` which comes from the expansion of the macro `construct_runtime` (in Nightly builds, run with -Z macro-backtrace for more info)

warning: unused variable: `call`
   --> runtime/src/lib.rs:131:14
    |
131 |     fn contains(call: &RuntimeCall) -> bool {
    |                 ^^^^ help: if this is intentional, prefix it with an underscore: `_call`
    |
    = note: `#[warn(unused_variables)]` on by default

warning: type alias `Migrations` is never used
   --> runtime/src/lib.rs:819:6
    |
819 | type Migrations = (
    |      ^^^^^^^^^^
    |
    = note: `#[warn(dead_code)]` on by default

warning: `pocs-runtime` (lib test) generated 5 warnings (5 duplicates)
warning: `pocs-runtime` (lib) generated 5 warnings (run `cargo fix --lib -p pocs-runtime` to apply 3 suggestions)
   Compiling rocksdb v0.21.0
   Compiling kvdb-rocksdb v0.19.0
   Compiling sc-client-db v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-service v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-storage-monitor v0.1.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-cli v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
warning: warn(unused_crate_dependencies) is ignored unless specified at crate level
  --> node/src/rpc.rs:32:9
   |
32 | #![warn(unused_crate_dependencies)]
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_attributes)]` on by default

warning: `pocs` (lib test) generated 1 warning (1 duplicate)
warning: `pocs` (lib) generated 1 warning
warning: `pocs` (bin "pocs" test) generated 1 warning (1 duplicate)
    Finished test [unoptimized + debuginfo] target(s) in 15m 34s
     Running unittests src/lib.rs (target/debug/deps/node_primitives-80e2a9868c9e8d19)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_contracts-8e183dc368ffb258)

running 4 tests
test tests::pocs_account_stake_event ... ok
test tests::pocs_contract_stake_event ... ok
test tests::pocs_update_delegate_valid_owner ... ok
test tests::pocs_update_delegate_invalid_owner ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 230 filtered out; finished in 0.02s

     Running unittests src/lib.rs (target/debug/deps/pallet_contracts_primitives-914709a9539f3b89)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_contracts_proc_macro-16f4f48f28f91fd2)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pocs-fc65372f9f7d7169)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/pocs-3952a24fc5d4610c)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pocs_runtime-e3e923c7aebf348e)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 4 filtered out; finished in 0.00s

ubuntu@ip-172-31-27-78:~/pocs$ cargo test pallet-contracts
warning: virtual workspace defaulting to `resolver = "1"` despite one or more workspace members being on edition 2021 which implies `resolver = "2"`
note: to keep the current resolver, specify `workspace.resolver = "1"` in the workspace root's manifest
note: to use the edition 2021 resolver, specify `workspace.resolver = "2"` in the workspace root's manifest
note: for more details see https://doc.rust-lang.org/cargo/reference/resolver.html#resolver-versions
   Compiling ring v0.16.20
   Compiling rustls v0.20.9
warning: unused imports: `CallFlags`, `ReturnCode`
  --> pallets/contracts/src/wasm/mod.rs:31:52
   |
31 |     AllowDeprecatedInterface, AllowUnstableInterface, CallFlags, Environment, ReturnCode, Runtime,
   |                                                       ^^^^^^^^^               ^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused import: `Saturating`
  --> pallets/contracts/src/gasstakeinfo.rs:22:11
   |
22 |     traits::{Saturating},
   |              ^^^^^^^^^^

warning: unused import: `Config`
   --> pallets/contracts/src/lib.rs:130:22
    |
130 | use pallet_staking::{Config as StakingCon};
    |                      ^^^^^^

warning: call to `.clone()` on a reference in this situation does nothing
  --> pallets/contracts/src/wasm/prepare.rs:83:29
   |
83 |             Module::new(&engine, code.clone()).map_err(|_| "Can't load the module into wasmi!")?;
   |                                      ^^^^^^^^ help: remove this redundant call
   |
   = note: the type `[u8]` does not implement `Clone`, so calling `clone` on `&[u8]` copies the reference, which does not do anything and can be removed
   = note: `#[warn(noop_method_call)]` on by default

warning: unused implementer of `frame_support::traits::Imbalance` that must be used
   --> pallets/contracts/src/migration/v10.rs:187:5
    |
187 |                 T::ContractCurrency::deposit_creating(&deposit_account, min_balance);
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(unused_must_use)]` on by default

warning: `pallet-contracts` (lib) generated 5 warnings (run `cargo fix --lib -p pallet-contracts` to apply 2 suggestions)
warning: unused imports: `EnsureRootWithSuccess`, `EnsureSignedBy`, `EnsureWithSuccess`
  --> runtime/src/lib.rs:22:69
   |
22 | use frame_system::{ limits::{BlockLength, BlockWeights},EnsureRoot, EnsureRootWithSuccess, EnsureSigned, EnsureSignedBy, EnsureWithSuccess};
   |                                                                     ^^^^^^^^^^^^^^^^^^^^^                ^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused import: `currency::*`
  --> runtime/src/lib.rs:41:17
   |
41 | use constants::{currency::*, time::*};
   |                 ^^^^^^^^^^^

warning: use of deprecated constant `WhereSection::_w`: 
                 It is deprecated to use a `where` clause in `construct_runtime`.
                 Please instead use `frame_system::Config` to set the `Block` type and delete this clause. 
                 It is planned to be removed in December 2023.
         
                 For more info see:
                     <https://github.com/paritytech/substrate/pull/14437>
   --> runtime/src/lib.rs:753:1
    |
753 | / construct_runtime!(
754 | |     pub struct Runtime
755 | |     where
756 | |         Block = Block,
...   |
784 | |     }
785 | | );
    | |_^
    |
    = note: `#[warn(deprecated)]` on by default
    = note: this warning originates in the macro `frame_support::match_and_insert` which comes from the expansion of the macro `construct_runtime` (in Nightly builds, run with -Z macro-backtrace for more info)

warning: unused variable: `call`
   --> runtime/src/lib.rs:131:14
    |
131 |     fn contains(call: &RuntimeCall) -> bool {
    |                 ^^^^ help: if this is intentional, prefix it with an underscore: `_call`
    |
    = note: `#[warn(unused_variables)]` on by default

warning: type alias `Migrations` is never used
   --> runtime/src/lib.rs:819:6
    |
819 | type Migrations = (
    |      ^^^^^^^^^^
    |
    = note: `#[warn(dead_code)]` on by default

warning: `pocs-runtime` (lib) generated 5 warnings (run `cargo fix --lib -p pocs-runtime` to apply 3 suggestions)
warning: `pocs-runtime` (lib test) generated 5 warnings (5 duplicates)
warning: unused import: `CallFlags`
  --> pallets/contracts/src/wasm/mod.rs:31:52
   |
31 |     AllowDeprecatedInterface, AllowUnstableInterface, CallFlags, Environment, ReturnCode, Runtime,
   |                                                       ^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused import: `KeyOwnerProofSystem`
  --> pallets/contracts/src/tests.rs:45:49
   |
45 |         OnInitialize, StorageVersion, WithdrawReasons,KeyOwnerProofSystem,
   |                                                       ^^^^^^^^^^^^^^^^^^^

warning: unused import: `pallet_session::historical as pallet_session_historical`
  --> pallets/contracts/src/tests.rs:52:5
   |
52 | use pallet_session::historical as pallet_session_historical;
   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused imports: `DigestItem`, `Digest`, `Header`, `TestXt`
  --> pallets/contracts/src/tests.rs:57:17
   |
57 |     testing::{H256,Digest, DigestItem, Header, TestXt},
   |                    ^^^^^^  ^^^^^^^^^^  ^^^^^^  ^^^^^^

warning: unused import: `Config as StakingCon`
   --> pallets/contracts/src/lib.rs:130:22
    |
130 | use pallet_staking::{Config as StakingCon};
    |                      ^^^^^^^^^^^^^^^^^^^^

warning: use of deprecated type alias `frame_system::Module`: use `Pallet` instead
    --> pallets/contracts/src/tests.rs:5907:30
     |
5907 |         let events = frame_system::Module::<Test>::events();
     |                                    ^^^^^^
     |
     = note: `#[warn(deprecated)]` on by default

warning: use of deprecated type alias `frame_system::Module`: use `Pallet` instead
    --> pallets/contracts/src/tests.rs:5953:30
     |
5953 |         let events = frame_system::Module::<Test>::events();
     |                                    ^^^^^^

warning: use of deprecated type alias `frame_system::Module`: use `Pallet` instead
    --> pallets/contracts/src/tests.rs:5998:30
     |
5998 |         let events = frame_system::Module::<Test>::events();
     |                                    ^^^^^^

warning: use of deprecated type alias `frame_system::Module`: use `Pallet` instead
    --> pallets/contracts/src/tests.rs:6040:30
     |
6040 |         let events = frame_system::Module::<Test>::events();
     |                                    ^^^^^^

warning: use of deprecated type alias `frame_system::Module`: use `Pallet` instead
    --> pallets/contracts/src/tests.rs:6062:30
     |
6062 |         let events = frame_system::Module::<Test>::events();
     |                                    ^^^^^^

warning: unused import: `Header`
  --> pallets/contracts/src/tests.rs:58:65
   |
58 |     traits::{BlakeTwo256, Convert, Hash, IdentityLookup,OpaqueKeys,Header as _},
   |                                                                    ^^^^^^

warning: unused import: `OpaqueKeys`
  --> pallets/contracts/src/tests.rs:58:54
   |
58 |     traits::{BlakeTwo256, Convert, Hash, IdentityLookup,OpaqueKeys,Header as _},
   |                                                         ^^^^^^^^^^

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/exec.rs:2135:8
     |
2135 |             let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |                 ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`
     |
     = note: `#[warn(unused_variables)]` on by default

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/exec.rs:2136:8
     |
2136 |             let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(origin.clone(),CHARLIE);
     |                 ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/exec.rs:2297:8
     |
2297 |             let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |                 ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/exec.rs:2298:8
     |
2298 |             let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,CHARLIE);
     |                 ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/exec.rs:2416:8
     |
2416 |             let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |                 ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/exec.rs:2417:8
     |
2417 |             let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,CHARLIE);
     |                 ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/exec.rs:2467:8
     |
2467 |             let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |                 ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/exec.rs:2468:8
     |
2468 |             let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,CHARLIE);
     |                 ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/exec.rs:2840:8
     |
2840 |             let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |                 ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/exec.rs:2841:8
     |
2841 |             let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,CHARLIE);
     |                 ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/exec.rs:3043:8
     |
3043 |             let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |                 ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/exec.rs:3044:8
     |
3044 |             let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,CHARLIE);
     |                 ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/exec.rs:3108:8
     |
3108 |             let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |                 ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/exec.rs:3109:8
     |
3109 |             let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,CHARLIE);
     |                 ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/tests.rs:1081:7
     |
1081 |         let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |             ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/tests.rs:1082:7
     |
1082 |         let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,addr1.clone());
     |             ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info3`
    --> pallets/contracts/src/tests.rs:1087:7
     |
1087 |         let contract_stake_info3 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |             ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info3`

warning: unused variable: `account_stake_info3`
    --> pallets/contracts/src/tests.rs:1088:7
     |
1088 |         let account_stake_info3 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,addr2.clone());
     |             ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info3`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/tests.rs:3107:7
     |
3107 |         let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |             ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/tests.rs:3108:7
     |
3108 |         let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,addr_callee.clone());
     |             ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: unused variable: `contract_stake_info2`
    --> pallets/contracts/src/tests.rs:5127:7
     |
5127 |         let contract_stake_info2 = ContractScarcityInfo::<Test>::set_scarcity_info();
     |             ^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_contract_stake_info2`

warning: unused variable: `account_stake_info2`
    --> pallets/contracts/src/tests.rs:5128:7
     |
5128 |         let account_stake_info2 = AccountStakeinfo::<Test>::set_new_stakeinfo(ALICE,addr.clone());
     |             ^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_account_stake_info2`

warning: type alias `AccountId64` is never used
  --> pallets/contracts/src/tests.rs:64:6
   |
64 | type AccountId64 = u64;
   |      ^^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: type alias `Nonce` is never used
  --> pallets/contracts/src/tests.rs:65:6
   |
65 | type Nonce = u32;
   |      ^^^^^

warning: type alias `Balance` is never used
  --> pallets/contracts/src/tests.rs:66:6
   |
66 | type Balance = u64;
   |      ^^^^^^^

warning: unused implementer of `hidden_include::traits::Imbalance` that must be used
   --> pallets/contracts/src/migration/v10.rs:187:5
    |
187 |                 T::ContractCurrency::deposit_creating(&deposit_account, min_balance);
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(unused_must_use)]` on by default

warning: `pallet-contracts` (lib test) generated 40 warnings (2 duplicates) (run `cargo fix --lib -p pallet-contracts --tests` to apply 27 suggestions)
   Compiling futures-rustls v0.22.2
   Compiling libp2p-websocket v0.41.0
   Compiling libp2p v0.51.4
   Compiling sc-network v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-telemetry v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-sysinfo v6.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-consensus-slots v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-basic-authorship v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-consensus-babe v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-chain-spec v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-network-light v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-network-bitswap v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-network-transactions v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-network-sync v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-rpc-api v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-rpc-spec-v2 v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-informant v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-network-gossip v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-consensus-grandpa v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-rpc v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-service v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-consensus-grandpa-rpc v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-consensus-babe-rpc v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling substrate-frame-rpc-system v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-offchain v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-cli v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling frame-benchmarking-cli v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pocs v4.0.0-dev (/home/ubuntu/pocs/node)
warning: warn(unused_crate_dependencies) is ignored unless specified at crate level
  --> node/src/rpc.rs:32:9
   |
32 | #![warn(unused_crate_dependencies)]
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_attributes)]` on by default

warning: `pocs` (lib test) generated 1 warning (1 duplicate)
warning: `pocs` (lib) generated 1 warning
warning: `pocs` (bin "pocs" test) generated 1 warning (1 duplicate)
    Finished test [unoptimized + debuginfo] target(s) in 31.76s
     Running unittests src/lib.rs (target/debug/deps/node_primitives-80e2a9868c9e8d19)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_contracts-8e183dc368ffb258)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 234 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_contracts_primitives-914709a9539f3b89)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_contracts_proc_macro-16f4f48f28f91fd2)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pocs-fc65372f9f7d7169)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/pocs-3952a24fc5d4610c)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pocs_runtime-e3e923c7aebf348e)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 4 filtered out; finished in 0.00s
```
</details>

