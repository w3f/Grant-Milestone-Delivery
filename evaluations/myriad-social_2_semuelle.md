# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/myriad_social.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/myriadsocial/myriad-node-parachain/blob/7619f605f165b9c53dd14f1ddbcdd86b7b5e07cb/LICENSE) | AGPL-3.0 license |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [docs/milestone-2-documentation.md](https://github.com/myriadsocial/myriad-web/blob/fb9656ca9ac9f1e3106c5f0ebf99301a7288fec4/docs/milestone-2-documentation.md) | — |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [docs/milestone-2-testing-guide.md](https://github.com/myriadsocial/myriad-web/blob/1e8d1b60c78d4bef8bf9066e144cce62ee9d4645/docs/milestone-2-testing-guide.md) | see [General Notes](#general-notes) |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/myriadsocial/myriad-node-parachain/blob/737473bf60f5f8aa3b85e61480736a97853c9646/Dockerfile) | — |
| 1. | Native Currency Integration | <ul><li>[x] </li></ul> | [docs/milestone-2-documentation.md](https://github.com/myriadsocial/myriad-web/blob/1e8d1b60c78d4bef8bf9066e144cce62ee9d4645/docs/milestone-2-documentation.md) | Tested on testnet.myriad.social |
| 2. | Wallet Integration | <ul><li>[x] </li></ul> | [src/helpers/wallet.ts](https://github.com/myriadsocial/myriad-web/blob/1e8d1b60c78d4bef8bf9066e144cce62ee9d4645/src/helpers/wallet.ts) | — |


## General Notes

Testing guide only includes manual tests. Run `cargo test` on parachain repo/pallet for unit tests.

### Compiler warnings (`cargo test`)

```sh
warning: unused imports: `AccountIdConversion`, `Currency`, `DispatchError`, `ExistenceRequirement`, `Zero`, `weights::Weight`
 --> pallets/access_token/src/functions.rs:4:12
  |
4 |         traits::{AccountIdConversion, Zero},
  |                  ^^^^^^^^^^^^^^^^^^^  ^^^^
5 |         DispatchError,
  |         ^^^^^^^^^^^^^
6 |     },
7 |     traits::{Currency, ExistenceRequirement},
  |              ^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^
8 |     weights::Weight,
  |     ^^^^^^^^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

warning: unused import: `frame_system::pallet_prelude::BlockNumberFor`
  --> pallets/access_token/src/functions.rs:11:5
   |
11 | use frame_system::pallet_prelude::BlockNumberFor;
   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `sp_std::vec::Vec`
  --> pallets/access_token/src/functions.rs:12:5
   |
12 | use sp_std::vec::Vec;
   |     ^^^^^^^^^^^^^^^^

warning: unused import: `ExistenceRequirement`
 --> pallets/access_token/src/impl_access_token.rs:2:29
  |
2 | use frame_support::traits::{ExistenceRequirement, Get};
  |                             ^^^^^^^^^^^^^^^^^^^^

warning: unused import: `frame_system::pallet_prelude::BlockNumberFor`
 --> pallets/access_token/src/impl_access_token.rs:3:5
  |
3 | use frame_system::pallet_prelude::BlockNumberFor;
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `frame_system::pallet_prelude::BlockNumberFor`
 --> pallets/access_token/src/interface.rs:1:5
  |
1 | use frame_system::pallet_prelude::BlockNumberFor;
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `traits::Currency`
 --> pallets/access_token/src/types.rs:2:72
  |
2 | use frame_support::{pallet_prelude::*, sp_runtime::traits::Saturating, traits::Currency};
  |                                                                        ^^^^^^^^^^^^^^^^

warning: unused import: `frame_system::pallet_prelude::BlockNumberFor`
 --> pallets/access_token/src/types.rs:3:5
  |
3 | use frame_system::pallet_prelude::BlockNumberFor;
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `Get`
 --> pallets/access_token/src/impl_access_token.rs:2:51
  |
2 | use frame_support::traits::{ExistenceRequirement, Get};
  |                                                   ^^^

warning: unused import: `sp_runtime::traits::Saturating`
 --> pallets/access_token/src/types.rs:2:40
  |
2 | use frame_support::{pallet_prelude::*, sp_runtime::traits::Saturating, traits::Currency};
  |                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `traits::Get`
  --> pallets/access_token/src/lib.rs:38:60
   |
38 |     use frame_support::{dispatch::DispatchResultWithPostInfo, traits::Get, Blake2_128Concat};
   |                                                               ^^^^^^^^^^^

warning: unused variable: `access_token`
  --> pallets/access_token/src/impl_access_token.rs:39:7
   |
39 |         let access_token = AccessTokenByHash::<T>::get(hash)
   |             ^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_access_token`
   |
   = note: `#[warn(unused_variables)]` on by default

warning: constant `PALLET_ID` is never used
  --> pallets/access_token/src/functions.rs:14:7
   |
14 | const PALLET_ID: PalletId = PalletId(*b"AccTkn!!");
   |       ^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: `pallet-access-token` (lib) generated 13 warnings (run `cargo fix --lib -p pallet-access-token` to apply 9 suggestions)

...

   Compiling pallet-tipping v0.0.1 (/home/sebastian/work/w3f/code/grants/deliverables/myriad-social/myriad-node-parachain/pallets/tipping)
warning: unused import: `Status`
 --> pallets/server/src/tests.rs:1:64
  |
1 | use crate::{self as pallet_server, mock::*, ActionType, Error, Status};
  |                                                                ^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

warning: unused import: `traits::OnInitialize`
 --> pallets/server/src/tests.rs:2:45
  |
2 | use frame_support::{assert_noop, assert_ok, traits::OnInitialize};
  |                                             ^^^^^^^^^^^^^^^^^^^^

warning: `pallet-server` (lib test) generated 2 warnings (run `cargo fix --lib -p pallet-server --tests` to apply 2 suggestions)
warning: unused import: `ConstU32`
  --> pallets/access_token/src/mock.rs:10:11
   |
10 |     traits::{ConstU32, Everything},
   |              ^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused import: `Error`
 --> pallets/access_token/src/tests.rs:1:51
  |
1 | use crate::{self as pallet_access_token, mock::*, Error, Scopes, TimelineId};
  |                                                   ^^^^^

warning: unused imports: `assert_noop`, `traits::OnInitialize`
 --> pallets/access_token/src/tests.rs:3:2
  |
3 |     assert_noop, assert_ok,
  |     ^^^^^^^^^^^
4 |     sp_runtime::traits::{Hash, Keccak256},
5 |     traits::OnInitialize,
  |     ^^^^^^^^^^^^^^^^^^^^

warning: unused imports: `AccountIdConversion`, `Currency`, `DispatchError`, `ExistenceRequirement`, `Zero`, `weights::Weight`
 --> pallets/access_token/src/functions.rs:4:12
  |
4 |         traits::{AccountIdConversion, Zero},
  |                  ^^^^^^^^^^^^^^^^^^^  ^^^^
5 |         DispatchError,
  |         ^^^^^^^^^^^^^
6 |     },
7 |     traits::{Currency, ExistenceRequirement},
  |              ^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^
8 |     weights::Weight,
  |     ^^^^^^^^^^^^^^^

warning: unused variable: `alice_public`
  --> pallets/access_token/src/mock.rs:98:7
   |
98 |         let alice_public = account_key("alice");
   |             ^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_alice_public`
   |
   = note: `#[warn(unused_variables)]` on by default

warning: unused variable: `bob_public`
  --> pallets/access_token/src/mock.rs:99:7
   |
99 |         let bob_public = account_key("bob");
   |             ^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_bob_public`

warning: unused variable: `john_public`
   --> pallets/access_token/src/mock.rs:100:7
    |
100 |         let john_public = account_key("john");
    |             ^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_john_public`

warning: unused variable: `satoshi_public`
   --> pallets/access_token/src/mock.rs:101:7
    |
101 |         let satoshi_public = account_key("satoshi");
    |             ^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_satoshi_public`

warning: unused variable: `access_token`
  --> pallets/access_token/src/impl_access_token.rs:39:7
   |
39 |         let access_token = AccessTokenByHash::<T>::get(hash)
   |             ^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_access_token`

warning: variable does not need to be mutable
  --> pallets/access_token/src/mock.rs:96:7
   |
96 |         let mut t = system::GenesisConfig::<Test>::default().build_storage().unwrap();
   |             ----^
   |             |
   |             help: remove this `mut`
   |
   = note: `#[warn(unused_mut)]` on by default

warning: `pallet-access-token` (lib test) generated 21 warnings (11 duplicates) (run `cargo fix --lib -p pallet-access-token --tests` to apply 10 suggestions)

...

warning: use of deprecated struct `cumulus_client_consensus_aura::BuildAuraConsensusParams`: Use the `aura::collators::basic` collator instead
  --> node/src/service.rs:13:52
   |
13 | use cumulus_client_consensus_aura::{AuraConsensus, BuildAuraConsensusParams, SlotProportion};
   |                                                    ^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(deprecated)]` on by default

warning: use of deprecated function `cumulus_client_service::start_collator`: use start_relay_chain_tasks instead
  --> node/src/service.rs:18:67
   |
18 |     build_network, build_relay_chain_interface, prepare_node_config, start_collator,
   |                                                                      ^^^^^^^^^^^^^^

warning: use of deprecated function `cumulus_client_service::start_full_node`: use start_relay_chain_tasks instead
  --> node/src/service.rs:19:2
   |
19 |     start_full_node, BuildNetworkParams, CollatorSybilResistance, StartCollatorParams,
   |     ^^^^^^^^^^^^^^^

warning: use of deprecated function `cumulus_client_service::start_collator`: use start_relay_chain_tasks instead
   --> node/src/service.rs:309:3
    |
309 |         start_collator(params).await?;
    |         ^^^^^^^^^^^^^^

warning: use of deprecated function `cumulus_client_service::start_full_node`: use start_relay_chain_tasks instead
   --> node/src/service.rs:323:3
    |
323 |         start_full_node(params)?;
    |         ^^^^^^^^^^^^^^^

warning: use of deprecated struct `cumulus_client_consensus_aura::BuildAuraConsensusParams`: Use the `aura::collators::basic` collator instead
   --> node/src/service.rs:393:15
    |
393 |     let params = BuildAuraConsensusParams {
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^

warning: use of deprecated associated function `sc_executor::NativeElseWasmExecutor::<D>::new`: use `Self::new_with_wasm_executor` method instead of it
  --> node/src/service.rs:88:36
   |
88 |     let executor = ParachainExecutor::new(
   |                                       ^^^

warning: use of deprecated field `cumulus_client_consensus_aura::BuildAuraConsensusParams::proposer_factory`: Use the `aura::collators::basic` collator instead
   --> node/src/service.rs:394:3
    |
394 |         proposer_factory,
    |         ^^^^^^^^^^^^^^^^

warning: use of deprecated field `cumulus_client_consensus_aura::BuildAuraConsensusParams::create_inherent_data_providers`: Use the `aura::collators::basic` collator instead
   --> node/src/service.rs:395:3
    |
395 | /         create_inherent_data_providers: move |_, (relay_parent, validation_data)| {
396 | |             let relay_chain_interface = relay_chain_interface.clone();
397 | |             async move {
398 | |                 let parachain_inherent =
...   |
420 | |             }
421 | |         },
    | |_________^

warning: use of deprecated field `cumulus_client_consensus_aura::BuildAuraConsensusParams::block_import`: Use the `aura::collators::basic` collator instead
   --> node/src/service.rs:422:3
    |
422 |         block_import,
    |         ^^^^^^^^^^^^

warning: use of deprecated field `cumulus_client_consensus_aura::BuildAuraConsensusParams::para_client`: Use the `aura::collators::basic` collator instead
   --> node/src/service.rs:423:3
    |
423 |         para_client: client,
    |         ^^^^^^^^^^^^^^^^^^^

warning: use of deprecated field `cumulus_client_consensus_aura::BuildAuraConsensusParams::backoff_authoring_blocks`: Use the `aura::collators::basic` collator instead
   --> node/src/service.rs:424:3
    |
424 |         backoff_authoring_blocks: Option::<()>::None,
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: use of deprecated field `cumulus_client_consensus_aura::BuildAuraConsensusParams::sync_oracle`: Use the `aura::collators::basic` collator instead
   --> node/src/service.rs:425:3
    |
425 |         sync_oracle,
    |         ^^^^^^^^^^^

warning: use of deprecated field `cumulus_client_consensus_aura::BuildAuraConsensusParams::keystore`: Use the `aura::collators::basic` collator instead
   --> node/src/service.rs:426:3
    |
426 |         keystore,
    |         ^^^^^^^^

warning: use of deprecated field `cumulus_client_consensus_aura::BuildAuraConsensusParams::force_authoring`: Use the `aura::collators::basic` collator instead
   --> node/src/service.rs:427:3
    |
427 |         force_authoring,
    |         ^^^^^^^^^^^^^^^

warning: use of deprecated field `cumulus_client_consensus_aura::BuildAuraConsensusParams::slot_duration`: Use the `aura::collators::basic` collator instead
   --> node/src/service.rs:428:3
    |
428 |         slot_duration,
    |         ^^^^^^^^^^^^^

warning: use of deprecated field `cumulus_client_consensus_aura::BuildAuraConsensusParams::block_proposal_slot_portion`: Use the `aura::collators::basic` collator instead
   --> node/src/service.rs:430:3
    |
430 |         block_proposal_slot_portion: SlotProportion::new(1f32 / 24f32),
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: use of deprecated field `cumulus_client_consensus_aura::BuildAuraConsensusParams::max_block_proposal_slot_portion`: Use the `aura::collators::basic` collator instead
   --> node/src/service.rs:432:3
    |
432 |         max_block_proposal_slot_portion: Some(SlotProportion::new(1f32 / 16f32)),
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: use of deprecated field `cumulus_client_consensus_aura::BuildAuraConsensusParams::telemetry`: Use the `aura::collators::basic` collator instead
   --> node/src/service.rs:433:3
    |
433 |         telemetry,
    |         ^^^^^^^^^

warning: use of deprecated associated function `cumulus_client_consensus_aura::AuraConsensus::<B, CIDP, ()>::build`: Use the `aura::collators::basic` collator instead
   --> node/src/service.rs:436:20
    |
436 |     Ok(AuraConsensus::build::<sp_consensus_aura::sr25519::AuthorityPair, _, _, _, _, _, _>(params))
    |                       ^^^^^

warning: `myriad` (bin "myriad" test) generated 20 warnings

```

### `cargo test` output

```sh
     Running unittests src/main.rs (target/debug/deps/myriad-cff53edd154b7de1)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/myriad_runtime-21a1ec4217bdd1ff)

running 5 tests
test weights::extrinsic_weights::constants::test_weights::sane ... ok
test weights::paritydb_weights::constants::test_db_weights::sane ... ok
test weights::rocksdb_weights::constants::test_db_weights::sane ... ok
test weights::block_weights::constants::test_weights::sane ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

     Running unittests src/lib.rs (target/debug/deps/pallet_access_token-bd669c1c6a0d417b)

running 2 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::create_works ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.32s

     Running unittests src/lib.rs (target/debug/deps/pallet_server-5919515a86111eb5)

running 23 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::cant_cancel_deregister_when_not_unstaked ... ok
test tests::cant_cancel_deregister_when_server_id_not_exists ... ok
test tests::cant_deregister_when_max_scheduled_per_block_over_limit ... ok
test tests::cant_change_api_url_when_server_id_not_exist ... ok
test tests::cant_cancel_deregister_when_unauthorized ... ok
test tests::cancel_deregister_works ... ok
test tests::cant_change_api_url_when_api_url_exist ... ok
test tests::cant_change_api_url_when_not_owner ... ok
test tests::cant_deregister_when_server_id_not_exist ... ok
test tests::cant_increase_stake_amount_when_server_id_not_exist ... ok
test tests::cant_increase_stake_amount_when_not_owner ... ok
test tests::cant_deregister_when_not_owner ... ok
test tests::cant_register_when_api_url_exist ... ok
test tests::cant_transfer_owner_when_server_id_not_exist ... ok
test tests::cant_update_server_where_already_deregister ... ok
test tests::cant_transfer_owner_when_not_owner ... ok
test tests::decrease_stake_amount_works ... ok
test tests::change_api_url_works ... ok
test tests::deregister_works ... ok
test tests::register_works ... ok
test tests::increase_stake_amount_works ... ok
test tests::transfer_owner_works ... ok

test result: ok. 23 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 2.23s

     Running unittests src/lib.rs (target/debug/deps/pallet_tipping-280ce08ee48d22dc)

running 12 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
Jan 15 16:00:39.432 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
test tests::pay_content_to_escrow_works ... ok
Jan 15 16:00:39.535 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
test tests::pay_content_with_myria_works ... ok
test tests::send_tip_assets_works ... ok
Jan 15 16:00:39.547 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
test tests::pay_content_with_assets_works ... ok
test tests::cant_pay_content_when_insufficient_balance ... ok
test tests::send_tip_myria_works ... ok
test tests::claim_reference_works ... ok
test tests::claim_tip_works ... ok
Jan 15 16:00:40.747 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
Jan 15 16:00:40.748 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
test tests::withdrawal_fee_works ... ok
test tests::cant_claim_reference ... ok
Jan 15 16:00:40.855 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
Jan 15 16:00:40.856 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
test tests::withdrawal_reward_works ... ok

test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 2.60s
```