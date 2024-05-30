# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/MeProtocol.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Me-Protocol/rusty-protocol-v0.1](https://github.com/Me-Protocol/rusty-protocol-v0.1/blob/31179935aa1c4e32b635ecb1b669786c21d95f91/license.md), [Me-Protocol/Rusty-Protocol-Backend-Portal](https://github.com/Me-Protocol/Rusty-Protocol-Backend-Portal/blob/d8e36d64df2b8fc11e598357afae04151ac00a89/license.md) | GPLv3 |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [README](https://github.com/Me-Protocol/rusty-protocol-v0.1/blob/7a68f619195704b679c66496ed0647e787d1ea05/README.md) | Overview of contracts. Tutorial ("that explains how a user, brand or third party application can interact with our protocol for the various specified use cases") missing. |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [testing_guide.md](https://github.com/Me-Protocol/rusty-protocol-v0.1/blob/de9f23122f5b58598f90a33a39967b4b8478c1be/testing_guide.md) | Guide fixed on request. Unit tests incomplete. |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/Me-Protocol/rusty-protocol-v0.1/blob/7a68f619195704b679c66496ed0647e787d1ea05/Dockerfile) | — |
| 0e. | Article | <ul><li>[ ] </li></ul> | [drive.google.com](https://drive.google.com/file/d/1sHMD_ZAZE8laRbTjFTAkWKcSXmEIWnFB/view?usp=sharing) | Same as M1. Also: [video](https://www.loom.com/share/8ec3df74fb414049a7e1f10a7f2aa7b5)
| 1. | Build out the Protocol Access Component | <ul><li>[x] </li></ul> | [modules/services/services](https://github.com/Me-Protocol/rusty-protocol-v0.1/tree/7a68f619195704b679c66496ed0647e787d1ea05/contracts/modules/services/services) | — |
| 2. | Build out the lens component | <ul><li>[ ] </li></ul> | link | Linked deliverable does not match description | 
| 3. | Building out the Governance Component | <ul><li>[ ] </li></ul> | [modules/peripherals/governance](https://github.com/Me-Protocol/rusty-protocol-v0.1/tree/7a68f619195704b679c66496ed0647e787d1ea05/contracts/modules/peripherals/governance), [modules/peripherals/votes](https://github.com/Me-Protocol/rusty-protocol-v0.1/tree/7a68f619195704b679c66496ed0647e787d1ea05/contracts/modules/peripherals/votes) | No tests | 
| 4. | Build out the Backend Service Components for the Me App | <ul><li>[x] </li></ul> | [Me-Protocol/Rusty-Protocol-Backend-Portal](https://github.com/Me-Protocol/Rusty-Protocol-Backend-Portal/tree/d8e36d64df2b8fc11e598357afae04151ac00a89) | — |


## General Notes

- Documentation incomplete (tutorial missing)
- No updates to lite paper. I suggest a separate, public article for this milestone and an update to the lite paper for M3. 
- Link for D2 links to price oracle
- No unit tests for D2 and D3

### `cargo test` output

```sh
> cargo +nightly test
warning: unused import: `psp22::PSP22Impl`
 --> contracts/controllers/deployables/reward.rs:5:8
  |
5 |     }, psp22::PSP22Impl},
  |        ^^^^^^^^^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

warning: unused imports: `psp22::*` and `psp34::extensions::enumerable`
 --> contracts/controllers/deployables/a_pool.rs:2:46
  |
2 |     contracts::{traits::{ access_control::*, psp22::*, psp34::*, pausable::* }, psp34::extensions::enumerable},
  |                                              ^^^^^^^^                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `psp22::*`
 --> contracts/controllers/deployables/treasury.rs:2:45
  |
2 |     contracts::traits::{ access_control::*, psp22::* },
  |                                             ^^^^^^^^

warning: unused import: `prelude::vec::Vec`
 --> contracts/controllers/deployables/treasury.rs:7:12
  |
7 | use ink::{ prelude::vec::Vec };
  |            ^^^^^^^^^^^^^^^^^

warning: unused import: `data::a_pool::*`
 --> contracts/controllers/deployables/treasury.rs:9:58
  |
9 | use crate::providers::{ common::{ errors::*, types::* }, data::a_pool::* };
  |                                                          ^^^^^^^^^^^^^^^

warning: unused import: `psp22::*`
 --> contracts/controllers/deployables/bounty.rs:2:45
  |
2 |     contracts::traits::{ access_control::*, psp22::* },
  |                                             ^^^^^^^^

warning: unused import: `prelude::vec::Vec`
 --> contracts/controllers/deployables/bounty.rs:6:12
  |
6 | use ink::{ prelude::vec::Vec };
  |            ^^^^^^^^^^^^^^^^^

warning: unused import: `data::a_pool::*`
 --> contracts/controllers/deployables/bounty.rs:8:44
  |
8 | use crate::providers::{ common::errors::*, data::a_pool::* };
  |                                            ^^^^^^^^^^^^^^^

warning: unused import: `psp22::*`
 --> contracts/controllers/deployables/payment.rs:2:45
  |
2 |     contracts::traits::{ access_control::*, psp22::* },
  |                                             ^^^^^^^^

warning: unused import: `openbrush::traits::String`
 --> contracts/controllers/deployables/payment.rs:5:5
  |
5 | use openbrush::traits::String;
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `prelude::vec::Vec`
 --> contracts/controllers/deployables/payment.rs:7:12
  |
7 | use ink::{ prelude::vec::Vec };
  |            ^^^^^^^^^^^^^^^^^

warning: unused imports: `data::a_pool::*` and `types::*`
 --> contracts/controllers/deployables/payment.rs:9:46
  |
9 | use crate::providers::{ common::{ errors::*, types::* }, data::a_pool::* };
  |                                              ^^^^^^^^    ^^^^^^^^^^^^^^^

warning: unused imports: `Balance` and `psp22::*`
 --> contracts/controllers/deployables/pool_initiator.rs:2:45
  |
2 |     contracts::traits::{ access_control::*, psp22::* },
  |                                             ^^^^^^^^
3 |     traits::{ AccountId, Balance },
  |                          ^^^^^^^

warning: unused import: `openbrush::traits::String`
 --> contracts/controllers/deployables/pool_initiator.rs:5:5
  |
5 | use openbrush::traits::String;
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `errors::*`
  --> contracts/controllers/deployables/pool_initiator.rs:10:35
   |
10 | use crate::providers::{ common::{ errors::*, types::* }, data::a_pool::* };
   |                                   ^^^^^^^^^

warning: unused import: `psp22::*`
 --> contracts/controllers/deployables/reward_initiator.rs:2:45
  |
2 |     contracts::traits::{ access_control::*, psp22::* },
  |                                             ^^^^^^^^

warning: unused import: `data::a_pool::*`
  --> contracts/controllers/deployables/reward_initiator.rs:10:58
   |
10 | use crate::providers::{ common::{ errors::*, types::* }, data::a_pool::* };
   |                                                          ^^^^^^^^^^^^^^^

warning: unused imports: `pausable::*` and `psp22::*`
 --> contracts/controllers/services/brands.rs:2:45
  |
2 |     contracts::traits::{ access_control::*, psp22::*, psp34::*, pausable::* },
  |                                             ^^^^^^^^            ^^^^^^^^^^^

warning: unused import: `prelude::vec::Vec`
 --> contracts/controllers/services/brands.rs:8:12
  |
8 | use ink::{ prelude::vec::Vec };
  |            ^^^^^^^^^^^^^^^^^

warning: unused imports: `String`, `access_control::*`, `pausable::*`, `psp22::*`, and `psp34::*`
 --> contracts/controllers/services/customers.rs:2:26
  |
2 |     contracts::traits::{ access_control::*, psp22::*, psp34::*, pausable::* },
  |                          ^^^^^^^^^^^^^^^^^  ^^^^^^^^  ^^^^^^^^  ^^^^^^^^^^^
3 |     traits::{ AccountId, Balance, String },
  |                                   ^^^^^^

warning: unused imports: `a_pool::*`, `a_reward::*`, and `brand::*`
 --> contracts/controllers/services/customers.rs:6:52
  |
6 | use crate::providers::{ common::errors::*, data::{ a_reward::*, brand::*, a_pool::* } };
  |                                                    ^^^^^^^^^^^  ^^^^^^^^  ^^^^^^^^^

warning: unused imports: `Balance`, `pausable::*`, `psp22::*`, and `psp34::*`
 --> contracts/controllers/services/admin.rs:2:45
  |
2 |     contracts::traits::{ access_control::*, psp22::*, psp34::*, pausable::* },
  |                                             ^^^^^^^^  ^^^^^^^^  ^^^^^^^^^^^
3 |     traits::{ AccountId, Balance, String },
  |                          ^^^^^^^

warning: unused imports: `a_pool::*`, `a_reward::*`, `brand::*`, and `treasury::*`
 --> contracts/controllers/services/admin.rs:6:64
  |
6 | ...rrors::*, types::*}, data::{ a_reward::*, brand::*, a_pool::*, protocol::*, treasury::* } };
  |                                 ^^^^^^^^^^^  ^^^^^^^^  ^^^^^^^^^               ^^^^^^^^^^^

warning: type `BRAND_ID_TYPE` should have an upper camel case name
 --> contracts/providers/common/types.rs:1:10
  |
1 | pub type BRAND_ID_TYPE = [u8; 10];
  |          ^^^^^^^^^^^^^ help: convert the identifier to upper camel case: `BrandIdType`
  |
  = note: `#[warn(non_camel_case_types)]` on by default

warning: unused import: `storage::traits::StorageLayout`
 --> contracts/providers/common/context.rs:3:12
  |
3 | use ink::{ storage::traits::StorageLayout };
  |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `crate::providers::common::database::*`
 --> contracts/providers/common/context.rs:4:5
  |
4 | use crate::providers::common::database::*;
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `Decode`
 --> contracts/providers/common/roleguard.rs:6:13
  |
6 | use scale::{Decode, Encode};
  |             ^^^^^^

warning: unused imports: `env::hash::Keccak256` and `storage::Mapping`
 --> contracts/providers/common/roleguard.rs:7:11
  |
7 | use ink::{env::hash::Keccak256, prelude::{collections::BTreeMap, vec::Vec}, storage::Mapping};
  |           ^^^^^^^^^^^^^^^^^^^^                                              ^^^^^^^^^^^^^^^^

warning: unused import: `crate::controllers::services::admin`
  --> contracts/providers/common/roleguard.rs:10:5
   |
10 | use crate::controllers::services::admin;
   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `crate::providers::common::database::*`
 --> contracts/providers/data/a_pool.rs:4:5
  |
4 | use crate::providers::common::database::*;
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `AccountId`
 --> contracts/providers/data/a_position.rs:2:46
  |
2 | use openbrush::{ storage::Mapping, traits::{ AccountId, Balance}, contracts::traits::psp34::Id };
  |                                              ^^^^^^^^^

warning: unused import: `crate::providers::common::database::*`
 --> contracts/providers/data/a_position.rs:4:5
  |
4 | use crate::providers::common::database::*;
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `core::clone`
 --> contracts/providers/data/a_reward.rs:1:5
  |
1 | use core::clone;
  |     ^^^^^^^^^^^

warning: unused import: `Balance`
 --> contracts/providers/data/a_reward.rs:3:37
  |
3 | use openbrush::traits::{ AccountId, Balance, String, Storage };
  |                                     ^^^^^^^

warning: unused import: `database::*`
 --> contracts/providers/data/a_reward.rs:5:33
  |
5 | use crate::providers::common::{ database::*, types::BRAND_ID_TYPE, errors::ProtocolError };
  |                                 ^^^^^^^^^^^

warning: unused import: `Balance`
 --> contracts/providers/data/brand.rs:1:37
  |
1 | use openbrush::traits::{ AccountId, Balance, Storage, String };
  |                                     ^^^^^^^

warning: unused imports: `database::*` and `errors::ProtocolError`
 --> contracts/providers/data/brand.rs:3:33
  |
3 | use crate::providers::common::{ database::*, errors::ProtocolError, types::* };
  |                                 ^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `core::clone`
 --> contracts/providers/data/protocol.rs:1:5
  |
1 | use core::clone;
  |     ^^^^^^^^^^^

warning: unused import: `String`
 --> contracts/providers/data/protocol.rs:3:48
  |
3 | use openbrush::{ traits::{ AccountId, Balance, String, Storage } };
  |                                                ^^^^^^

warning: unused import: `Mapping`
 --> contracts/providers/data/protocol.rs:4:46
  |
4 | use ink::{ storage::{ traits::StorageLayout, Mapping } };
  |                                              ^^^^^^^

warning: unused import: `database::*`
 --> contracts/providers/data/protocol.rs:5:33
  |
5 | use crate::providers::common::{ database::*, types::* };
  |                                 ^^^^^^^^^^^

warning: unused import: `crate::providers::common::database::*`
 --> contracts/providers/data/bounty.rs:3:5
  |
3 | use crate::providers::common::database::*;
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `database::*`
 --> contracts/providers/data/treasury.rs:3:33
  |
3 | use crate::providers::common::{ database::*, types::* };
  |                                 ^^^^^^^^^^^

warning: unused import: `traits::StorageLayout`
 --> contracts/providers/data/payment.rs:2:32
  |
2 | use ink::{ storage::{ Mapping, traits::StorageLayout } };
  |                                ^^^^^^^^^^^^^^^^^^^^^

warning: unused imports: `database::*` and `types::*`
 --> contracts/providers/data/payment.rs:3:33
  |
3 | use crate::providers::common::{ database::*, types::* };
  |                                 ^^^^^^^^^^^  ^^^^^^^^

warning: unused import: `Balance`
 --> contracts/providers/data/pool_initiator.rs:1:37
  |
1 | use openbrush::traits::{ AccountId, Balance };
  |                                     ^^^^^^^

warning: unused import: `traits::StorageLayout`
 --> contracts/providers/data/pool_initiator.rs:3:32
  |
3 | use ink::{ storage::{ Mapping, traits::StorageLayout } };
  |                                ^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `crate::providers::common::database::*`
 --> contracts/providers/data/pool_initiator.rs:4:5
  |
4 | use crate::providers::common::database::*;
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `Balance`
 --> contracts/providers/data/reward_initiator.rs:1:37
  |
1 | use openbrush::traits::{ AccountId, Balance };
  |                                     ^^^^^^^

warning: unused import: `traits::StorageLayout`
 --> contracts/providers/data/reward_initiator.rs:3:32
  |
3 | use ink::{ storage::{ Mapping, traits::StorageLayout } ,  prelude::vec::Vec,};
  |                                ^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `crate::providers::common::database::*`
 --> contracts/providers/data/reward_initiator.rs:4:5
  |
4 | use crate::providers::common::database::*;
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `openbrush::traits::String`
 --> contracts/providers/data/reward_initiator.rs:7:5
  |
7 | use openbrush::traits::String;
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^

warning: ambiguous glob re-exports
  --> contracts/providers/deployables/a_pool.rs:2:9
   |
2  |   pub use crate::{
   |  _________^
3  | |     providers::{
4  | |         data::{ a_pool::*, a_position::* },
5  | |         common::context::*,
6  | |         deployables::a_pool,
7  | |         common::{ roles::*, errors::ProtocolError, eunice::*, validator::* },
   | |                                                               ------------ but the name `ZERO_ADDRESS` in the value namespace is also re-exported here
8  | |     },
9  | |     controllers::deployables::a_pool::*,
10 | | };
   | |_^ the name `ZERO_ADDRESS` in the value namespace is first re-exported here
   |
   = note: `#[warn(ambiguous_glob_reexports)]` on by default

warning: unused imports: `common::constants::PRECISION` and `protocol::update_editable_protocol_config`
 --> contracts/providers/deployables/bounty.rs:1:25
  |
1 | ...ders::{ common::constants::PRECISION, data::{bounty::BountyRecord, protocol::update_editable_protocol_config} };
  |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: private item shadows public glob re-export
 --> contracts/providers/deployables/bounty.rs:1:62
  |
1 | use crate::providers::{ common::constants::PRECISION, data::{bounty::BountyRecord, protocol::update_editable_protocol_co...
  |                                                              ^^^^^^^^^^^^^^^^^^^^
  |
note: the name `BountyRecord` in the type namespace is supposed to be publicly re-exported here
 --> contracts/providers/deployables/bounty.rs:4:9
  |
4 |         data::bounty::*,
  |         ^^^^^^^^^^^^^^^
note: but the private item here shadows it
 --> contracts/providers/deployables/bounty.rs:1:62
  |
1 | use crate::providers::{ common::constants::PRECISION, data::{bounty::BountyRecord, protocol::update_editable_protocol_co...
  |                                                              ^^^^^^^^^^^^^^^^^^^^
  = note: `#[warn(hidden_glob_reexports)]` on by default

warning: ambiguous glob re-exports
 --> contracts/providers/deployables/bounty.rs:2:9
  |
2 |   pub use crate::{
  |  _________^
3 | |     providers::{
4 | |         data::bounty::*,
5 | |         common::{ roles::*, errors::ProtocolError, eunice::*, validator::* },
  | |                                                               ------------ but the name `ZERO_ADDRESS` in the value namespace is also re-exported here
6 | |     },
7 | |     controllers::deployables::bounty::*,
8 | | };
  | |_^ the name `ZERO_ADDRESS` in the value namespace is first re-exported here

warning: unused import: `env::call::ConstructorReturnType`
  --> contracts/providers/deployables/bounty.rs:10:54
   |
10 | use ink::{ prelude::vec::Vec, primitives::AccountId, env::call::ConstructorReturnType };
   |                                                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `modifier_definition`
  --> contracts/providers/deployables/bounty.rs:12:5
   |
12 |     modifier_definition,
   |     ^^^^^^^^^^^^^^^^^^^

warning: unused imports: `constants::PRECISION` and `data::treasury::*`
 --> contracts/providers/deployables/treasury.rs:1:35
  |
1 | use crate::providers::{ common::{ constants::PRECISION, types::* }, data::treasury::* };
  |                                   ^^^^^^^^^^^^^^^^^^^^              ^^^^^^^^^^^^^^^^^

warning: ambiguous glob re-exports
 --> contracts/providers/deployables/treasury.rs:2:9
  |
2 |   pub use crate::{
  |  _________^
3 | |     providers::{
4 | |         data::{ treasury::* },
5 | |         common::{ roles::*, errors::ProtocolError, eunice::*, validator::* },
  | |                                                               ------------ but the name `ZERO_ADDRESS` in the value namespace is also re-exported here
6 | |     },
7 | |     controllers::deployables::treasury::*,
8 | | };
  | |_^ the name `ZERO_ADDRESS` in the value namespace is first re-exported here

warning: unused import: `modifier_definition`
  --> contracts/providers/deployables/treasury.rs:13:5
   |
13 |     modifier_definition,
   |     ^^^^^^^^^^^^^^^^^^^

warning: unused imports: `constants::PRECISION`, `data::payment::*`, and `types::*`
 --> contracts/providers/services/payment.rs:1:35
  |
1 | use crate::providers::{ common::{ constants::PRECISION, types::* }, data::payment::* };
  |                                   ^^^^^^^^^^^^^^^^^^^^  ^^^^^^^^    ^^^^^^^^^^^^^^^^

warning: ambiguous glob re-exports
 --> contracts/providers/services/payment.rs:2:9
  |
2 |   pub use crate::{
  |  _________^
3 | |     providers::{
4 | |         data::{ payment::* },
5 | |         common::{ roles::*, errors::ProtocolError, eunice::*, validator::* },
  | |                                                               ------------ but the name `ZERO_ADDRESS` in the value namespace is also re-exported here
6 | |     },
7 | |     controllers::deployables::payment::*,
8 | | };
  | |_^ the name `ZERO_ADDRESS` in the value namespace is first re-exported here

warning: unused import: `openbrush::traits::String`
 --> contracts/providers/services/payment.rs:9:5
  |
9 | use openbrush::traits::String;
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `modifier_definition`
  --> contracts/providers/services/payment.rs:13:5
   |
13 |     modifier_definition,
   |     ^^^^^^^^^^^^^^^^^^^

warning: ambiguous glob re-exports
  --> contracts/providers/services/admin.rs:4:9
   |
4  |   pub use crate::
   |  _________^
5  | |     providers::{
6  | |         data::{ brand::*, a_reward::*, protocol::* },
7  | |         common::
...  |
10 | |         services::brands::*,
   | |         ------------------- but the name `ZERO_ADDRESS` in the value namespace is also re-exported here
11 | |     }
   | |_____^ the name `ZERO_ADDRESS` in the value namespace is first re-exported here

warning: unused imports: `CryptoHash`, `HashOutput`, `Keccak256`, and `prelude::vec::Vec`
  --> contracts/providers/services/admin.rs:15:5
   |
15 |     prelude::vec::Vec,
   |     ^^^^^^^^^^^^^^^^^
16 |     primitives::AccountId,
17 |     env::hash::{ Keccak256, CryptoHash, HashOutput },
   |                  ^^^^^^^^^  ^^^^^^^^^^  ^^^^^^^^^^

warning: unused imports: `Balance`, `modifier_definition`, `psp22::*`, `psp22::extensions::metadata::*`, `psp34::Id`, and `reentrancy_guard::*`
  --> contracts/providers/services/admin.rs:21:5
   |
21 |     modifier_definition,
   |     ^^^^^^^^^^^^^^^^^^^
...
24 |         traits::{ psp22::*, psp22::extensions::metadata::* },
   |                   ^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
25 |         reentrancy_guard::*,
   |         ^^^^^^^^^^^^^^^^^^^
26 |         psp34::Id,
   |         ^^^^^^^^^
...
29 |     traits::{ Balance, Storage, String },
   |               ^^^^^^^

warning: unused import: `scale::KeyedVec`
  --> contracts/providers/services/admin.rs:31:5
   |
31 | use scale::KeyedVec;
   |     ^^^^^^^^^^^^^^^

warning: unused imports: `providers::data::brand`, `reward`, and `treasury`
 --> contracts/providers/services/brands.rs:2:40
  |
2 | use crate::{controllers::deployables::{reward, treasury}, providers::data::brand};
  |                                        ^^^^^^  ^^^^^^^^   ^^^^^^^^^^^^^^^^^^^^^^

warning: unused imports: `CryptoHash`, `HashOutput`, and `Keccak256`
  --> contracts/providers/services/brands.rs:24:18
   |
24 |     env::hash::{ Keccak256, CryptoHash, HashOutput },
   |                  ^^^^^^^^^  ^^^^^^^^^^  ^^^^^^^^^^

warning: unused imports: `modifier_definition`, `modifiers`, `psp22::PSP22TransferImpl`, and `reentrancy_guard::*`
  --> contracts/providers/services/brands.rs:29:28
   |
29 |         access_control::*, psp22::PSP22TransferImpl, psp34::Id, reentrancy_guard::*, traits::psp22::{extensions::metada...
   |                            ^^^^^^^^^^^^^^^^^^^^^^^^             ^^^^^^^^^^^^^^^^^^^
30 |     }, modifier_definition, modifiers, traits::{ Balance, Storage, String }
   |        ^^^^^^^^^^^^^^^^^^^  ^^^^^^^^^

warning: unused import: `scale::KeyedVec`
  --> contracts/providers/services/brands.rs:32:5
   |
32 | use scale::KeyedVec;
   |     ^^^^^^^^^^^^^^^

warning: ambiguous glob re-exports
  --> contracts/providers/services/customers.rs:2:9
   |
2  |   pub use crate::{
   |  _________^
3  | |     providers::{
4  | |         data::{ brand::*, a_pool::*, a_reward::*, protocol::* },
5  | |         common::{
...  |
9  | |             validator::*,
   | |             ------------ but the name `ZERO_ADDRESS` in the value namespace is also re-exported here
...  |
17 | |     },
18 | | };
   | |_^ the name `ZERO_ADDRESS` in the value namespace is first re-exported here

warning: unused imports: `CryptoHash`, `HashOutput`, and `Keccak256`
  --> contracts/providers/services/customers.rs:23:18
   |
23 |     env::hash::{ Keccak256, CryptoHash, HashOutput },
   |                  ^^^^^^^^^  ^^^^^^^^^^  ^^^^^^^^^^

warning: ambiguous glob re-exports
  --> contracts/providers/services/customers.rs:26:9
   |
26 |   pub use openbrush::{
   |  _________^
27 | |     modifier_definition,
28 | |     contracts::{
29 | |         access_control::*,
30 | |         traits::{ psp22::*, psp22::extensions::metadata::* },
   | |                   -------- but the name `extensions` in the type namespace is also re-exported here
...  |
35 | |     traits::{ Balance, Storage, String },
36 | | };
   | |_^ the name `extensions` in the type namespace is first re-exported here

warning: ambiguous glob re-exports
  --> contracts/providers/services/customers.rs:26:9
   |
26 |   pub use openbrush::{
   |  _________^
27 | |     modifier_definition,
28 | |     contracts::{
29 | |         access_control::*,
30 | |         traits::{ psp22::*, psp22::extensions::metadata::* },
31 | |         reentrancy_guard::*,
   | |         ------------------- but the name `Data` in the type namespace is also re-exported here
...  |
35 | |     traits::{ Balance, Storage, String },
36 | | };
   | |_^ the name `Data` in the type namespace is first re-exported here

warning: unused import: `scale::KeyedVec`
  --> contracts/providers/services/customers.rs:37:5
   |
37 | use scale::KeyedVec;
   |     ^^^^^^^^^^^^^^^

warning: unused variable: `brand`
  --> contracts/providers/common/validator.rs:61:34
   |
61 | pub fn ensure_brand_is_not_empty(brand: BRAND_ID_TYPE) -> Result<(), ProtocolError> {
   |                                  ^^^^^ help: if this is intentional, prefix it with an underscore: `_brand`
   |
   = note: `#[warn(unused_variables)]` on by default

warning: value assigned to `withdrawable_me_amount` is never read
   --> contracts/providers/deployables/a_pool.rs:233:17
    |
233 |         let mut withdrawable_me_amount: Balance = 0;
    |                 ^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: maybe it is overwritten before being read?
    = note: `#[warn(unused_assignments)]` on by default

warning: variable does not need to be mutable
   --> contracts/providers/deployables/a_pool.rs:902:13
    |
902 | ...   let mut slippage = if slippage_in_precision == 0 {config.default_slippage_in_precision} else{slippage_in_precisi...
    |           ----^^^^^^^^
    |           |
    |           help: remove this `mut`
    |
    = note: `#[warn(unused_mut)]` on by default

warning: value assigned to `reward_amount_to_withdraw` is never read
    --> contracts/providers/deployables/a_pool.rs:1024:13
     |
1024 |     let mut reward_amount_to_withdraw = 0;
     |             ^^^^^^^^^^^^^^^^^^^^^^^^^
     |
     = help: maybe it is overwritten before being read?

warning: value assigned to `reward_amount_to_withdraw_a` is never read
    --> contracts/providers/deployables/a_pool.rs:1058:13
     |
1058 |     let mut reward_amount_to_withdraw_a = 0;
     |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^
     |
     = help: maybe it is overwritten before being read?

warning: value assigned to `reward_amount_to_withdraw_b` is never read
    --> contracts/providers/deployables/a_pool.rs:1059:13
     |
1059 |     let mut reward_amount_to_withdraw_b = 0;
     |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^
     |
     = help: maybe it is overwritten before being read?

warning: value assigned to `me_amount_to_withdraw_a` is never read
    --> contracts/providers/deployables/a_pool.rs:1060:13
     |
1060 |     let mut me_amount_to_withdraw_a = 0;
     |             ^^^^^^^^^^^^^^^^^^^^^^^
     |
     = help: maybe it is overwritten before being read?

warning: value assigned to `me_amount_to_withdraw_b` is never read
    --> contracts/providers/deployables/a_pool.rs:1061:13
     |
1061 |     let mut me_amount_to_withdraw_b = 0;
     |             ^^^^^^^^^^^^^^^^^^^^^^^
     |
     = help: maybe it is overwritten before being read?

warning: unused variable: `metadata`
  --> contracts/providers/deployables/treasury.rs:35:9
   |
35 |         metadata: Option<String>
   |         ^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_metadata`

warning: unused variable: `metadata`
  --> contracts/providers/deployables/treasury.rs:78:9
   |
78 |         metadata: Option<String>
   |         ^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_metadata`

warning: unused variable: `metadata`
   --> contracts/providers/deployables/treasury.rs:132:9
    |
132 |         metadata: Option<String>
    |         ^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_metadata`

warning: unused variable: `metadata`
   --> contracts/providers/deployables/treasury.rs:159:9
    |
159 |         metadata: Option<String>
    |         ^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_metadata`

warning: unused variable: `requestor`
   --> contracts/providers/deployables/treasury.rs:194:9
    |
194 |         requestor: AccountId
    |         ^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_requestor`

warning: unused variable: `requestor`
   --> contracts/providers/deployables/treasury.rs:212:39
    |
212 |     fn get_me_notify_limit(&mut self, requestor: AccountId) -> Result<Balance, ProtocolError> {
    |                                       ^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_requestor`

warning: unused variable: `requestor`
   --> contracts/providers/services/brands.rs:276:13
    |
276 |         let requestor = Self::env().caller();
    |             ^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_requestor`

warning: unused variable: `requestor`
   --> contracts/providers/services/brands.rs:292:13
    |
292 |         let requestor = Self::env().caller();
    |             ^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_requestor`

warning: unused variable: `position`
   --> contracts/providers/services/brands.rs:353:13
    |
353 |         let position = match is_empty_positions(&existing_positions) {
    |             ^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_position`

warning: unused variable: `requestor_id`
   --> contracts/providers/services/brands.rs:383:10
    |
383 |      let requestor_id = self.data::<BrandRecords>().id.get(requestor).unwrap_or_default();
    |          ^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_requestor_id`

warning: unused variable: `position`
   --> contracts/providers/services/brands.rs:391:10
    |
391 |      let position = match is_empty_positions(&existing_positions) {
    |          ^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_position`

warning: unused variable: `position`
   --> contracts/providers/services/brands.rs:423:11
    |
423 |       let position = match is_empty_positions(&existing_positions) {
    |           ^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_position`

warning: unused variable: `requestor_id`
   --> contracts/providers/services/brands.rs:463:13
    |
463 |         let requestor_id = self.data::<BrandRecords>().id.get(requestor).unwrap_or_default();
    |             ^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_requestor_id`

warning: variable does not need to be mutable
   --> contracts/providers/services/brands.rs:530:13
    |
530 |         let mut  brand_id = brand_record.id.get(&requestor).unwrap_or_default();
    |             -----^^^^^^^^
    |             |
    |             help: remove this `mut`

warning: unused variable: `auto_resume_conversations`
   --> contracts/providers/services/brands.rs:564:9
    |
564 |         auto_resume_conversations: bool
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_auto_resume_conversations`

warning: unused variable: `position`
   --> contracts/providers/services/brands.rs:683:9
    |
683 |         position: u128,
    |         ^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_position`

warning: function `bytes_to_string` is never used
   --> contracts/providers/common/roleguard.rs:415:4
    |
415 | fn bytes_to_string(bytes: &[u8]) -> String {
    |    ^^^^^^^^^^^^^^^
    |
    = note: `#[warn(dead_code)]` on by default

warning: unused `Result` that must be used
   --> contracts/providers/deployables/a_pool.rs:908:9
    |
908 |         ensure_value_is_not_zero(reward_amount);
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: this `Result` may be an `Err` variant, which should be handled
    = note: `#[warn(unused_must_use)]` on by default
help: use `let _ = ...` to ignore the resulting value
    |
908 |         let _ = ensure_value_is_not_zero(reward_amount);
    |         +++++++

warning: `global` (lib) generated 104 warnings (run `cargo fix --lib -p global` to apply 70 suggestions)
warning: unexpected `cfg` condition value: `__ink_dylint_Storage`
  --> contracts/modules/deployables/pool/pool.rs:74:5
   |
74 | /     #[derive(Default, Storage)]
75 | |     pub struct Pool {
76 | |         #[storage_field]
77 | |         pub pool_state: PoolState,
...  |
95 | |         pub guard: reentrancy_guard::Data,
96 | |     }
   | |_____^
   |
   = note: expected values for `feature` are: `default`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Storage` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration
   = note: `#[warn(unexpected_cfgs)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Constructor`
   --> contracts/modules/deployables/pool/pool.rs:307:9
    |
307 | /         pub fn new( 
308 | |             reward: AccountId, 
309 | |             me_token: AccountId,  
310 | |             config: PoolSetUpConfig 
...   |
350 | |             instance 
351 | |         } 
    | |_________^
    |
    = note: expected values for `feature` are: `default`, `ink-as-dependency`, `scale-info`, and `std`
    = help: consider adding `__ink_dylint_Constructor` as a feature in `Cargo.toml`
    = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration

warning: unused import: `common::roles::*`
  --> contracts/modules/deployables/pool/pool.rs:66:9
   |
66 |         common::roles::*,
   |         ^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused import: `traits::ownable`
  --> contracts/modules/deployables/pool/pool.rs:69:112
   |
69 | ...sions::enumerable::*, self}, reentrancy_guard::*, traits::ownable },
   |                                                      ^^^^^^^^^^^^^^^

warning: non-local `impl` definition, they should be avoided as they go against expectation
  --> contracts/modules/deployables/pool/pool.rs:74:5
   |
74 | /     #[derive(Default, Storage)]
75 | |     pub struct Pool {
76 | |         #[storage_field]
77 | |         pub pool_state: PoolState,
...  |
95 | |         pub guard: reentrancy_guard::Data,
96 | |     }
   | |_____^
   |
   = help: move this `impl` block outside the of the current constant `_` and up 2 bodies
   = note: an `impl` definition is non-local if it is nested inside an item and may impact type checking outside of that item. This can be the case if neither the trait or the self type are at the same nesting level as the `impl`
   = note: one exception to the rule are anon-const (`const _: () = { ... }`) at top-level module and anon-const at the same nesting as the trait or type
   = note: this lint may become deny-by-default in the edition 2024 and higher, see the tracking issue <https://github.com/rust-lang/rust/issues/120363>
   = note: `#[warn(non_local_definitions)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Storage`
  --> contracts/modules/deployables/reward/reward.rs:20:5
   |
20 | /     #[derive(Default, Storage)]
21 | |     pub struct Reward {
22 | |         #[storage_field]
23 | |         psp22: psp22::Data,
...  |
27 | |         metadata: metadata::Data,
28 | |     }
   | |_____^
   |
   = note: expected values for `feature` are: `default`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Storage` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration
   = note: `#[warn(unexpected_cfgs)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Constructor`
   --> contracts/modules/deployables/reward/reward.rs:93:9
    |
93  | /         pub fn new(
94  | |             brand: AccountId,
95  | |             name: Option<String>,
96  | |             symbol: Option<String>,
...   |
106 | |             instance
107 | |         }
    | |_________^
    |
    = note: expected values for `feature` are: `default`, `ink-as-dependency`, `scale-info`, and `std`
    = help: consider adding `__ink_dylint_Constructor` as a feature in `Cargo.toml`
    = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration

warning: unused imports: `access_control::Internal` and `burnable::*`
  --> contracts/modules/deployables/reward/reward.rs:14:97
   |
14 | ...sions::{ mintable::*, metadata::*, burnable::* }, self}, access_control::Internal },
   |                                       ^^^^^^^^^^^           ^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: non-local `impl` definition, they should be avoided as they go against expectation
  --> contracts/modules/deployables/reward/reward.rs:20:5
   |
20 | /     #[derive(Default, Storage)]
21 | |     pub struct Reward {
22 | |         #[storage_field]
23 | |         psp22: psp22::Data,
...  |
27 | |         metadata: metadata::Data,
28 | |     }
   | |_____^
   |
   = help: move this `impl` block outside the of the current constant `_` and up 2 bodies
   = note: an `impl` definition is non-local if it is nested inside an item and may impact type checking outside of that item. This can be the case if neither the trait or the self type are at the same nesting level as the `impl`
   = note: one exception to the rule are anon-const (`const _: () = { ... }`) at top-level module and anon-const at the same nesting as the trait or type
   = note: this lint may become deny-by-default in the edition 2024 and higher, see the tracking issue <https://github.com/rust-lang/rust/issues/120363>
   = note: `#[warn(non_local_definitions)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Storage`
 --> contracts/modules/peripherals/receiver/receiver.rs:6:5
  |
6 | /     pub struct Receiver {
7 | |         pub some_value: u32,
8 | |     }
  | |_____^
  |
  = note: expected values for `feature` are: `default`, `e2e-tests`, `ink-as-dependency`, `scale-info`, and `std`
  = help: consider adding `__ink_dylint_Storage` as a feature in `Cargo.toml`
  = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration
  = note: `#[warn(unexpected_cfgs)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Constructor`
  --> contracts/modules/peripherals/receiver/receiver.rs:12:9
   |
12 | /         pub fn new() -> Self {
13 | |             Self { some_value: 0 }
14 | |         }
   | |_________^
   |
   = note: expected values for `feature` are: `default`, `e2e-tests`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Constructor` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration

warning: unexpected `cfg` condition value: `__ink_dylint_Constructor`
  --> contracts/modules/peripherals/receiver/receiver.rs:16:9
   |
16 | /         pub fn default() -> Self {
17 | |             Self::new()
18 | |         }
   | |_________^
   |
   = note: expected values for `feature` are: `default`, `e2e-tests`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Constructor` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration

warning: non-local `impl` definition, they should be avoided as they go against expectation
 --> contracts/modules/peripherals/receiver/receiver.rs:6:5
  |
6 | /     pub struct Receiver {
7 | |         pub some_value: u32,
8 | |     }
  | |_____^
  |
  = help: move this `impl` block outside the of the current constant `_` and up 2 bodies
  = note: an `impl` definition is non-local if it is nested inside an item and may impact type checking outside of that item. This can be the case if neither the trait or the self type are at the same nesting level as the `impl`
  = note: one exception to the rule are anon-const (`const _: () = { ... }`) at top-level module and anon-const at the same nesting as the trait or type
  = note: this lint may become deny-by-default in the edition 2024 and higher, see the tracking issue <https://github.com/rust-lang/rust/issues/120363>
  = note: `#[warn(non_local_definitions)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Storage`
  --> contracts/modules/services/services/services.rs:23:5
   |
23 | /     #[derive(Default, Storage)]
24 | |     pub struct Services {
25 | |
26 | |         #[storage_field]
...  |
46 | |
47 | |     }
   | |_____^
   |
   = note: expected values for `feature` are: `default`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Storage` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration
   = note: `#[warn(unexpected_cfgs)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Constructor`
   --> contracts/modules/services/services/services.rs:349:9
    |
349 | /         pub fn new() -> Self {
350 | |
351 | |             let mut instance = Self::default(); 
...   |
363 | |             instance
364 | |         }
    | |_________^
    |
    = note: expected values for `feature` are: `default`, `ink-as-dependency`, `scale-info`, and `std`
    = help: consider adding `__ink_dylint_Constructor` as a feature in `Cargo.toml`
    = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration

warning: unused import: `prelude::vec::Vec`
 --> contracts/modules/services/services/services.rs:7:16
  |
7 |     use ink::{ prelude::vec::Vec};
  |                ^^^^^^^^^^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

warning: unused import: `controllers::services::customers`
 --> contracts/modules/services/services/services.rs:8:18
  |
8 |     use global::{controllers::services::customers, providers::{common::roleguard::RecordStorage, data::{a_reward::Reward...
  |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `*`
  --> contracts/modules/services/services/services.rs:10:38
   |
10 |         contracts::{access_control::{*, self}, governance::{*}},
   |                                      ^

warning: non-local `impl` definition, they should be avoided as they go against expectation
  --> contracts/modules/services/services/services.rs:23:5
   |
23 | /     #[derive(Default, Storage)]
24 | |     pub struct Services {
25 | |
26 | |         #[storage_field]
...  |
46 | |
47 | |     }
   | |_____^
   |
   = help: move this `impl` block outside the of the current constant `_` and up 2 bodies
   = note: an `impl` definition is non-local if it is nested inside an item and may impact type checking outside of that item. This can be the case if neither the trait or the self type are at the same nesting level as the `impl`
   = note: one exception to the rule are anon-const (`const _: () = { ... }`) at top-level module and anon-const at the same nesting as the trait or type
   = note: this lint may become deny-by-default in the edition 2024 and higher, see the tracking issue <https://github.com/rust-lang/rust/issues/120363>
   = note: `#[warn(non_local_definitions)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Storage`
  --> contracts/modules/services/payment/payment.rs:33:5
   |
33 | /     #[derive(Default, Storage)]
34 | |     pub struct Payment {
35 | |         #[storage_field]
36 | |         pub payment_state: PaymentStorage,
...  |
42 | |         pub guard: reentrancy_guard::Data,
43 | |     }
   | |_____^
   |
   = note: expected values for `feature` are: `default`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Storage` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration
   = note: `#[warn(unexpected_cfgs)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Constructor`
   --> contracts/modules/services/payment/payment.rs:109:9
    |
109 | /         pub fn new(me_token: AccountId) -> Self {
110 | |             let mut instance = Self::default();
111 | |             let caller = instance.env().caller();
...   |
119 | |             instance
120 | |         }
    | |_________^
    |
    = note: expected values for `feature` are: `default`, `ink-as-dependency`, `scale-info`, and `std`
    = help: consider adding `__ink_dylint_Constructor` as a feature in `Cargo.toml`
    = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration

warning: non-local `impl` definition, they should be avoided as they go against expectation
  --> contracts/modules/services/payment/payment.rs:33:5
   |
33 | /     #[derive(Default, Storage)]
34 | |     pub struct Payment {
35 | |         #[storage_field]
36 | |         pub payment_state: PaymentStorage,
...  |
42 | |         pub guard: reentrancy_guard::Data,
43 | |     }
   | |_____^
   |
   = help: move this `impl` block outside the of the current constant `_` and up 2 bodies
   = note: an `impl` definition is non-local if it is nested inside an item and may impact type checking outside of that item. This can be the case if neither the trait or the self type are at the same nesting level as the `impl`
   = note: one exception to the rule are anon-const (`const _: () = { ... }`) at top-level module and anon-const at the same nesting as the trait or type
   = note: this lint may become deny-by-default in the edition 2024 and higher, see the tracking issue <https://github.com/rust-lang/rust/issues/120363>
   = note: `#[warn(non_local_definitions)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Storage`
  --> contracts/modules/peripherals/governance/governance.rs:10:5
   |
10 | /     #[derive(Default, Storage)]
11 | |     pub struct Contract {
12 | |         #[storage_field]
13 | |         governor: governor::Data,
...  |
22 | |         mock_timestamp: Timestamp,
23 | |     }
   | |_____^
   |
   = note: expected values for `feature` are: `default`, `e2e-tests`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Storage` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration
   = note: `#[warn(unexpected_cfgs)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Constructor`
  --> contracts/modules/peripherals/governance/governance.rs:27:9
   |
27 | /         pub fn new(
28 | |             token: AccountId,
29 | |             voting_delay: u64,
30 | |             voting_period: u64,
...  |
43 | |             instance
44 | |         }
   | |_________^
   |
   = note: expected values for `feature` are: `default`, `e2e-tests`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Constructor` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration

warning: non-local `impl` definition, they should be avoided as they go against expectation
  --> contracts/modules/peripherals/governance/governance.rs:10:5
   |
10 | /     #[derive(Default, Storage)]
11 | |     pub struct Contract {
12 | |         #[storage_field]
13 | |         governor: governor::Data,
...  |
22 | |         mock_timestamp: Timestamp,
23 | |     }
   | |_____^
   |
   = help: move this `impl` block outside the of the current constant `_` and up 2 bodies
   = note: an `impl` definition is non-local if it is nested inside an item and may impact type checking outside of that item. This can be the case if neither the trait or the self type are at the same nesting level as the `impl`
   = note: one exception to the rule are anon-const (`const _: () = { ... }`) at top-level module and anon-const at the same nesting as the trait or type
   = note: this lint may become deny-by-default in the edition 2024 and higher, see the tracking issue <https://github.com/rust-lang/rust/issues/120363>
   = note: `#[warn(non_local_definitions)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Storage`
  --> contracts/modules/peripherals/votes/votes.rs:9:5
   |
9  | /     #[derive(Default, Storage)]
10 | |     pub struct Contract {
11 | |         #[storage_field]
12 | |         psp22: psp22::Data,
...  |
17 | |         mock_timestamp: Timestamp,
18 | |     }
   | |_____^
   |
   = note: expected values for `feature` are: `default`, `e2e-tests`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Storage` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration
   = note: `#[warn(unexpected_cfgs)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Constructor`
  --> contracts/modules/peripherals/votes/votes.rs:22:9
   |
22 | /         pub fn new(total_supply: Balance) -> Self {
23 | |             let mut instance = Self::default();
24 | |
25 | |             psp22::Internal::_mint_to(&mut instance, Self::env().caller(), total_supply).expect("Should mint");
...  |
29 | |             instance
30 | |         }
   | |_________^
   |
   = note: expected values for `feature` are: `default`, `e2e-tests`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Constructor` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration

warning: non-local `impl` definition, they should be avoided as they go against expectation
  --> contracts/modules/peripherals/votes/votes.rs:9:5
   |
9  | /     #[derive(Default, Storage)]
10 | |     pub struct Contract {
11 | |         #[storage_field]
12 | |         psp22: psp22::Data,
...  |
17 | |         mock_timestamp: Timestamp,
18 | |     }
   | |_____^
   |
   = help: move this `impl` block outside the of the current constant `_` and up 2 bodies
   = note: an `impl` definition is non-local if it is nested inside an item and may impact type checking outside of that item. This can be the case if neither the trait or the self type are at the same nesting level as the `impl`
   = note: one exception to the rule are anon-const (`const _: () = { ... }`) at top-level module and anon-const at the same nesting as the trait or type
   = note: this lint may become deny-by-default in the edition 2024 and higher, see the tracking issue <https://github.com/rust-lang/rust/issues/120363>
   = note: `#[warn(non_local_definitions)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Storage`
  --> contracts/modules/services/oracle/oracle.rs:20:5
   |
20 | /     pub struct Oracle {
21 | |         started: bool,
22 | |     }
   | |_____^
   |
   = note: expected values for `feature` are: `default`, `e2e-tests`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Storage` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration
   = note: `#[warn(unexpected_cfgs)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Constructor`
  --> contracts/modules/services/oracle/oracle.rs:27:9
   |
27 | /         pub fn new(init_started: bool) -> Self {
28 | |             Self { started: init_started }
29 | |         }
   | |_________^
   |
   = note: expected values for `feature` are: `default`, `e2e-tests`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Constructor` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration

warning: non-local `impl` definition, they should be avoided as they go against expectation
  --> contracts/modules/services/oracle/oracle.rs:20:5
   |
20 | /     pub struct Oracle {
21 | |         started: bool,
22 | |     }
   | |_____^
   |
   = help: move this `impl` block outside the of the current constant `_` and up 2 bodies
   = note: an `impl` definition is non-local if it is nested inside an item and may impact type checking outside of that item. This can be the case if neither the trait or the self type are at the same nesting level as the `impl`
   = note: one exception to the rule are anon-const (`const _: () = { ... }`) at top-level module and anon-const at the same nesting as the trait or type
   = note: this lint may become deny-by-default in the edition 2024 and higher, see the tracking issue <https://github.com/rust-lang/rust/issues/120363>
   = note: `#[warn(non_local_definitions)]` on by default

warning: `pool` (lib) generated 5 warnings (run `cargo fix --lib -p pool` to apply 2 suggestions)
warning: `reward` (lib) generated 4 warnings (run `cargo fix --lib -p reward` to apply 1 suggestion)
warning: `receiver` (lib) generated 4 warnings
warning: `services` (lib) generated 6 warnings (run `cargo fix --lib -p services` to apply 3 suggestions)
warning: `payment` (lib) generated 3 warnings
warning: `governance` (lib) generated 3 warnings
warning: `votes` (lib) generated 3 warnings
warning: `oracle` (lib) generated 3 warnings
warning: unexpected `cfg` condition value: `__ink_dylint_Storage`
  --> contracts/modules/deployables/reward_initiator/reward_initiator.rs:24:5
   |
24 | /     #[derive(Default, Storage)]
25 | |     pub struct RewardInitiator {
26 | |         #[storage_field]
27 | |         pub reward_initiator_storage: RewardInitiatorStorage,
...  |
30 | |         pub access: access_control::Data,
31 | |     }
   | |_____^
   |
   = note: expected values for `feature` are: `default`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Storage` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration
   = note: `#[warn(unexpected_cfgs)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Constructor`
   --> contracts/modules/deployables/reward_initiator/reward_initiator.rs:94:9
    |
94  | /         pub fn new(hash: Hash) -> Self {
95  | |             let mut instance = Self::default();
96  | |
97  | |             let caller = instance.env().caller();
...   |
105 | |             instance
106 | |         }
    | |_________^
    |
    = note: expected values for `feature` are: `default`, `ink-as-dependency`, `scale-info`, and `std`
    = help: consider adding `__ink_dylint_Constructor` as a feature in `Cargo.toml`
    = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration

warning: unused import: `ink::env`
  --> contracts/modules/deployables/reward_initiator/reward_initiator.rs:19:9
   |
19 |     use ink::env;
   |         ^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: non-local `impl` definition, they should be avoided as they go against expectation
  --> contracts/modules/deployables/reward_initiator/reward_initiator.rs:24:5
   |
24 | /     #[derive(Default, Storage)]
25 | |     pub struct RewardInitiator {
26 | |         #[storage_field]
27 | |         pub reward_initiator_storage: RewardInitiatorStorage,
...  |
30 | |         pub access: access_control::Data,
31 | |     }
   | |_____^
   |
   = help: move this `impl` block outside the of the current constant `_` and up 2 bodies
   = note: an `impl` definition is non-local if it is nested inside an item and may impact type checking outside of that item. This can be the case if neither the trait or the self type are at the same nesting level as the `impl`
   = note: one exception to the rule are anon-const (`const _: () = { ... }`) at top-level module and anon-const at the same nesting as the trait or type
   = note: this lint may become deny-by-default in the edition 2024 and higher, see the tracking issue <https://github.com/rust-lang/rust/issues/120363>
   = note: `#[warn(non_local_definitions)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Storage`
  --> contracts/modules/deployables/pool_initiator/pool_initiator.rs:22:5
   |
22 | /     #[derive(Default, Storage)]
23 | |     pub struct PoolInitiator {
24 | |         #[storage_field]
25 | |         pub pool_initiator_storage: PoolInitiatorStorage,
...  |
28 | |         pub access: access_control::Data,
29 | |     }
   | |_____^
   |
   = note: expected values for `feature` are: `default`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Storage` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration
   = note: `#[warn(unexpected_cfgs)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Constructor`
  --> contracts/modules/deployables/pool_initiator/pool_initiator.rs:86:9
   |
86 | /         pub fn new( hash: Hash) -> Self {
87 | |            let mut instance = Self::default();
88 | |
89 | |            let caller = instance.env().caller();
...  |
97 | |            instance
98 | |         }
   | |_________^
   |
   = note: expected values for `feature` are: `default`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Constructor` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration

warning: private item shadows public glob re-export
  --> contracts/modules/deployables/pool_initiator/pool_initiator.rs:7:55
   |
7  |     use global::providers::{data::pool_initiator::{*},services::payment::ProtocolError, common::types::BRAND_ID_TYPE};
   |                                                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
note: the name `ProtocolError` in the type namespace is supposed to be publicly re-exported here
  --> contracts/modules/deployables/pool_initiator/pool_initiator.rs:12:33
   |
12 | ...   deployables::{a_pool::{ *, PoolSetUpConfig, PoolConfig, POOL_ADMIN, POOL_MANAGER, PoolImpl }, bounty::{OPEN_REWARDS_MANAGER, OPEN_RE...
   |                               ^
note: but the private item here shadows it
  --> contracts/modules/deployables/pool_initiator/pool_initiator.rs:7:55
   |
7  |     use global::providers::{data::pool_initiator::{*},services::payment::ProtocolError, common::types::BRAND_ID_TYPE};
   |                                                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   = note: `#[warn(hidden_glob_reexports)]` on by default

warning: non-local `impl` definition, they should be avoided as they go against expectation
  --> contracts/modules/deployables/pool_initiator/pool_initiator.rs:22:5
   |
22 | /     #[derive(Default, Storage)]
23 | |     pub struct PoolInitiator {
24 | |         #[storage_field]
25 | |         pub pool_initiator_storage: PoolInitiatorStorage,
...  |
28 | |         pub access: access_control::Data,
29 | |     }
   | |_____^
   |
   = help: move this `impl` block outside the of the current constant `_` and up 2 bodies
   = note: an `impl` definition is non-local if it is nested inside an item and may impact type checking outside of that item. This can be the case if neither the trait or the self type are at the same nesting level as the `impl`
   = note: one exception to the rule are anon-const (`const _: () = { ... }`) at top-level module and anon-const at the same nesting as the trait or type
   = note: this lint may become deny-by-default in the edition 2024 and higher, see the tracking issue <https://github.com/rust-lang/rust/issues/120363>
   = note: `#[warn(non_local_definitions)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Storage`
  --> contracts/modules/peripherals/treasury/treasury.rs:51:5
   |
51 | /     #[derive(Default, Storage)]
52 | |     pub struct Treasury {
53 | |         
54 | |         #[storage_field]
...  |
61 | |         pub guard: reentrancy_guard::Data,
62 | |     }
   | |_____^
   |
   = note: expected values for `feature` are: `default`, `e2e-tests`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Storage` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration
   = note: `#[warn(unexpected_cfgs)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Constructor`
   --> contracts/modules/peripherals/treasury/treasury.rs:175:9
    |
175 | /         pub fn new(me_token: AccountId) -> Self {
176 | |             let mut instance = Self::default();
177 | |             let caller = instance.env().caller();
...   |
185 | |             instance
186 | |         }
    | |_________^
    |
    = note: expected values for `feature` are: `default`, `e2e-tests`, `ink-as-dependency`, `scale-info`, and `std`
    = help: consider adding `__ink_dylint_Constructor` as a feature in `Cargo.toml`
    = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration

warning: non-local `impl` definition, they should be avoided as they go against expectation
  --> contracts/modules/peripherals/treasury/treasury.rs:51:5
   |
51 | /     #[derive(Default, Storage)]
52 | |     pub struct Treasury {
53 | |         
54 | |         #[storage_field]
...  |
61 | |         pub guard: reentrancy_guard::Data,
62 | |     }
   | |_____^
   |
   = help: move this `impl` block outside the of the current constant `_` and up 2 bodies
   = note: an `impl` definition is non-local if it is nested inside an item and may impact type checking outside of that item. This can be the case if neither the trait or the self type are at the same nesting level as the `impl`
   = note: one exception to the rule are anon-const (`const _: () = { ... }`) at top-level module and anon-const at the same nesting as the trait or type
   = note: this lint may become deny-by-default in the edition 2024 and higher, see the tracking issue <https://github.com/rust-lang/rust/issues/120363>
   = note: `#[warn(non_local_definitions)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Storage`
  --> contracts/modules/peripherals/bounty/bounty.rs:45:5
   |
45 | /     #[derive(Default, Storage)]
46 | |     pub struct Bounty {
47 | |
48 | |         #[storage_field]
...  |
55 | |         pub guard: reentrancy_guard::Data,
56 | |     }
   | |_____^
   |
   = note: expected values for `feature` are: `default`, `e2e-tests`, `ink-as-dependency`, `scale-info`, and `std`
   = help: consider adding `__ink_dylint_Storage` as a feature in `Cargo.toml`
   = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration
   = note: `#[warn(unexpected_cfgs)]` on by default

warning: unexpected `cfg` condition value: `__ink_dylint_Constructor`
   --> contracts/modules/peripherals/bounty/bounty.rs:114:9
    |
114 | /         pub fn new(me_token: AccountId,) -> Self {
115 | |             let mut instance = Self::default();
116 | |             let caller = instance.env().caller();
...   |
126 | |             instance
127 | |         }
    | |_________^
    |
    = note: expected values for `feature` are: `default`, `e2e-tests`, `ink-as-dependency`, `scale-info`, and `std`
    = help: consider adding `__ink_dylint_Constructor` as a feature in `Cargo.toml`
    = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration

warning: non-local `impl` definition, they should be avoided as they go against expectation
  --> contracts/modules/peripherals/bounty/bounty.rs:45:5
   |
45 | /     #[derive(Default, Storage)]
46 | |     pub struct Bounty {
47 | |
48 | |         #[storage_field]
...  |
55 | |         pub guard: reentrancy_guard::Data,
56 | |     }
   | |_____^
   |
   = help: move this `impl` block outside the of the current constant `_` and up 2 bodies
   = note: an `impl` definition is non-local if it is nested inside an item and may impact type checking outside of that item. This can be the case if neither the trait or the self type are at the same nesting level as the `impl`
   = note: one exception to the rule are anon-const (`const _: () = { ... }`) at top-level module and anon-const at the same nesting as the trait or type
   = note: this lint may become deny-by-default in the edition 2024 and higher, see the tracking issue <https://github.com/rust-lang/rust/issues/120363>
   = note: `#[warn(non_local_definitions)]` on by default

warning: `reward_initiator` (lib) generated 4 warnings (run `cargo fix --lib -p reward_initiator` to apply 1 suggestion)
warning: `pool_initiator` (lib) generated 4 warnings
warning: `treasury` (lib) generated 3 warnings
warning: `bounty` (lib) generated 3 warnings
warning: unused import: `ink::primitives::Hash`
 --> tests/payment.rs:8:9
  |
8 |     use ink::primitives::Hash;
  |         ^^^^^^^^^^^^^^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

warning: unused import: `providers::data::payment::*`
  --> tests/payment.rs:10:19
   |
10 |     use global::{ providers::data::payment::* };
   |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused imports: `eunice::*`, `roles::*`, and `validator::*`
  --> tests/payment.rs:11:40
   |
11 |     use global::providers::  common::{ roles::*, errors::ProtocolError, eunice::*, validator::* };
   |                                        ^^^^^^^^                         ^^^^^^^^^  ^^^^^^^^^^^^

warning: unused imports: `AccountId` and `Balance`
  --> tests/payment.rs:12:47
   |
12 |     use openbrush::{ test_utils::*, traits::{ AccountId, Balance } };
   |                                               ^^^^^^^^^  ^^^^^^^

warning: unused import: `providers::data::payment::*`
  --> tests/payment.rs:13:19
   |
13 |     use global::{ providers::data::payment::* };
   |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused variable: `b`
  --> tests/payment.rs:21:13
   |
21 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`
   |
   = note: `#[warn(unused_variables)]` on by default

warning: unused variable: `b`
  --> tests/payment.rs:35:13
   |
35 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`

warning: unused variable: `b`
  --> tests/payment.rs:45:13
   |
45 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`

warning: unused variable: `b`
  --> tests/payment.rs:55:13
   |
55 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`

warning: unused variable: `b`
  --> tests/payment.rs:65:13
   |
65 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`

warning: unused variable: `b`
  --> tests/payment.rs:76:13
   |
76 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`

warning: unused import: `ink::primitives::Hash`
 --> tests/bounty.rs:8:9
  |
8 |     use ink::primitives::Hash;
  |         ^^^^^^^^^^^^^^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

warning: unused import: `providers::data::bounty::*`
  --> tests/bounty.rs:10:19
   |
10 |     use global::{ providers::data::bounty::* };
   |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused imports: `eunice::*`, `roles::*`, and `validator::*`
  --> tests/bounty.rs:11:40
   |
11 |     use global::providers::  common::{ roles::*, errors::ProtocolError, eunice::*, validator::* };
   |                                        ^^^^^^^^                         ^^^^^^^^^  ^^^^^^^^^^^^

warning: unused imports: `AccountId` and `Balance`
  --> tests/bounty.rs:12:47
   |
12 |     use openbrush::{ test_utils::*, traits::{ AccountId, Balance } };
   |                                               ^^^^^^^^^  ^^^^^^^

warning: unused import: `providers::data::bounty::*`
  --> tests/bounty.rs:13:19
   |
13 |     use global::{ providers::data::bounty::* };
   |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused variable: `b`
  --> tests/bounty.rs:21:13
   |
21 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`
   |
   = note: `#[warn(unused_variables)]` on by default

warning: unused import: `providers::data::a_pool::*`
 --> tests/pool.rs:9:19
  |
9 |     use global::{ providers::data::a_pool::* };
  |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

warning: unused imports: `eunice::*`, `roles::*`, and `validator::*`
  --> tests/pool.rs:10:40
   |
10 |     use global::providers::  common::{ roles::*, errors::ProtocolError, eunice::*, validator::* };
   |                                        ^^^^^^^^                         ^^^^^^^^^  ^^^^^^^^^^^^

warning: unused imports: `AccountId` and `Balance`
  --> tests/pool.rs:11:47
   |
11 |     use openbrush::{ test_utils::*, traits::{ AccountId, Balance } };
   |                                               ^^^^^^^^^  ^^^^^^^

warning: variable does not need to be mutable
  --> tests/pool.rs:20:13
   |
20 |         let mut  pool = Pool::new(
   |             -----^^^^
   |             |
   |             help: remove this `mut`
   |
   = note: `#[warn(unused_mut)]` on by default

warning: unused import: `providers::data::a_pool::*`
  --> tests/pool_initiator.rs:13:19
   |
13 |     use global::{ providers::data::a_pool::* };
   |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused imports: `errors::ProtocolError`, `eunice::*`, `roles::*`, and `validator::*`
  --> tests/pool_initiator.rs:14:40
   |
14 |     use global::providers::  common::{ roles::*, errors::ProtocolError, eunice::*, validator::* };
   |                                        ^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^  ^^^^^^^^^  ^^^^^^^^^^^^

warning: unused imports: `AccountId` and `Balance`
  --> tests/pool_initiator.rs:16:47
   |
16 |     use openbrush::{ test_utils::*, traits::{ AccountId, Balance } };
   |                                               ^^^^^^^^^  ^^^^^^^

warning: unused variable: `a`
  --> tests/pool_initiator.rs:23:13
   |
23 |         let a = accounts.bob;
   |             ^ help: if this is intentional, prefix it with an underscore: `_a`
   |
   = note: `#[warn(unused_variables)]` on by default

warning: unused variable: `b`
  --> tests/pool_initiator.rs:24:13
   |
24 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`

warning: unused variable: `a`
  --> tests/pool_initiator.rs:43:13
   |
43 |         let a = accounts.bob;
   |             ^ help: if this is intentional, prefix it with an underscore: `_a`

warning: unused variable: `b`
  --> tests/pool_initiator.rs:44:13
   |
44 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`

warning: unused variable: `a`
  --> tests/pool_initiator.rs:76:13
   |
76 |         let a = accounts.bob;
   |             ^ help: if this is intentional, prefix it with an underscore: `_a`

warning: unused variable: `b`
  --> tests/pool_initiator.rs:77:13
   |
77 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`

warning: unused variable: `pool_config`
  --> tests/pool_initiator.rs:90:13
   |
90 |         let pool_config=  PoolSetUpConfig {
   |             ^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_pool_config`

warning: unused import: `ink::primitives::Hash`
 --> tests/treasury.rs:8:9
  |
8 |     use ink::primitives::Hash;
  |         ^^^^^^^^^^^^^^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

warning: unused imports: `eunice::*`, `roles::*`, and `validator::*`
  --> tests/treasury.rs:10:40
   |
10 |     use global::providers::  common::{ roles::*, errors::ProtocolError, eunice::*, validator::* };
   |                                        ^^^^^^^^                         ^^^^^^^^^  ^^^^^^^^^^^^

warning: unused imports: `AccountId` and `Balance`
  --> tests/treasury.rs:11:47
   |
11 |     use openbrush::{ test_utils::*, traits::{ AccountId, Balance } };
   |                                               ^^^^^^^^^  ^^^^^^^

warning: unused import: `providers::data::treasury::*`
  --> tests/treasury.rs:12:19
   |
12 |     use global::{ providers::data::treasury::* };
   |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused variable: `b`
  --> tests/treasury.rs:20:13
   |
20 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`
   |
   = note: `#[warn(unused_variables)]` on by default

warning: unused variable: `b`
  --> tests/treasury.rs:30:13
   |
30 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`

warning: unused variable: `id`
  --> tests/treasury.rs:43:13
   |
43 |         let id: BRAND_ID_TYPE = [0; 10];
   |             ^^ help: if this is intentional, prefix it with an underscore: `_id`

warning: unused variable: `b`
  --> tests/treasury.rs:51:13
   |
51 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`

warning: unused variable: `id`
  --> tests/treasury.rs:53:13
   |
53 |         let id: BRAND_ID_TYPE = [0; 10];
   |             ^^ help: if this is intentional, prefix it with an underscore: `_id`

warning: unused variable: `b`
  --> tests/treasury.rs:62:13
   |
62 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`

warning: unused variable: `emitted_events`
  --> tests/reward_.rs:71:13
   |
71 |         let emitted_events = ink::env::test::recorded_events().collect::<Vec<_>>();
   |             ^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_emitted_events`
   |
   = note: `#[warn(unused_variables)]` on by default

warning: type alias `Event` is never used
  --> tests/reward_.rs:19:10
   |
19 |     type Event = <Reward as ::ink::reflect::ContractEventBase>::Type;
   |          ^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: function `assert_transfer_event` is never used
  --> tests/reward_.rs:21:8
   |
21 |     fn assert_transfer_event(
   |        ^^^^^^^^^^^^^^^^^^^^^

warning: unused variable: `a`
  --> tests/reward_initiator.rs:21:13
   |
21 |         let a = accounts.bob;
   |             ^ help: if this is intentional, prefix it with an underscore: `_a`
   |
   = note: `#[warn(unused_variables)]` on by default

warning: unused variable: `b`
  --> tests/reward_initiator.rs:22:13
   |
22 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`

warning: unused variable: `a`
  --> tests/reward_initiator.rs:41:13
   |
41 |         let a = accounts.bob;
   |             ^ help: if this is intentional, prefix it with an underscore: `_a`

warning: unused variable: `b`
  --> tests/reward_initiator.rs:42:13
   |
42 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`

warning: unused variable: `a`
  --> tests/reward_initiator.rs:74:13
   |
74 |         let a = accounts.bob;
   |             ^ help: if this is intentional, prefix it with an underscore: `_a`

warning: unused variable: `b`
  --> tests/reward_initiator.rs:75:13
   |
75 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`

warning: unused variable: `reward_config`
  --> tests/reward_initiator.rs:88:13
   |
88 |         let reward_config=  PoolSetUpConfig {
   |             ^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_reward_config`

warning: `meprotocol` (test "payment") generated 11 warnings (run `cargo fix --test "payment"` to apply 5 suggestions)
warning: `meprotocol` (test "bounty") generated 6 warnings (run `cargo fix --test "bounty"` to apply 5 suggestions)
warning: `meprotocol` (test "pool") generated 4 warnings (run `cargo fix --test "pool"` to apply 4 suggestions)
warning: `meprotocol` (test "pool_initiator") generated 10 warnings (run `cargo fix --test "pool_initiator"` to apply 3 suggestions)
warning: `meprotocol` (test "treasury") generated 10 warnings (run `cargo fix --test "treasury"` to apply 4 suggestions)
warning: `meprotocol` (test "reward_") generated 3 warnings
warning: `meprotocol` (test "reward_initiator") generated 7 warnings
    Finished `test` profile [unoptimized + debuginfo] target(s) in 0.15s
     Running unittests protocol.rs (target/debug/deps/protocol-e644af0418af4377)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/bounty.rs (target/debug/deps/bounty-a91a680532d76a3c)

running 3 tests
test bounty_test::trigger_limit_test ... ok
test bounty_test::new_works ... ok
test bounty_test::withdraw_bounty_test ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/payment.rs (target/debug/deps/payment-8ac2ff1c470d8f63)

running 6 tests
test payment_test::new_works ... ok
test payment_test::brand_service_payment_test ... ok
test payment_test::brand_me_balance_test ... ok
test payment_test::protocol_me_balance_test ... ok
test payment_test::brand_withdraw_me_test ... ok
test payment_test::protocol_withdraw_me_test ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/pool.rs (target/debug/deps/pool-f11de508e081baf9)

running 11 tests
test pool_test::new_works ... ok
test pool_test::get_open_rewards_state_test ... ok
test pool_test::get_liquidity_ratios_test ... ok
test pool_test::get_liquidity_ids_test ... ok
test pool_test::pause_open_rewards_fails ... ok
test pool_test::forcefully_withdraw_protocol_offset_me_tokens_fails ... ok
test pool_test::resume_open_rewards_fails ... ok
test pool_test::start_open_rewards_fail ... ok
test pool_test::withdraw_protocol_me_offset_only_me_tokens_fails ... ok
test pool_test::withdraw_protocol_me_offset_withdrawable_fails ... ok
test pool_test::withdraw_protocol_me_offset_with_rewards_if_need_be_fails ... ok

test result: ok. 11 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/pool_initiator.rs (target/debug/deps/pool_initiator-d8098392793b9bbf)

running 3 tests
test pool_initiator_test::new_works ... ok
test pool_initiator_test::update_pool_hash_test ... ok
test pool_initiator_test::create_new_pool ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/reward_.rs (target/debug/deps/reward_-0e9869f499b55017)

running 1 test
test unit_test::new_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/reward_initiator.rs (target/debug/deps/reward_initiator-8232937ccc65fa01)

running 3 tests
test reward_initiator_test::new_works ... ok
test reward_initiator_test::update_reward_hash_test ... ok
test reward_initiator_test::create_new_reward ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/treasury.rs (target/debug/deps/treasury-624715e4367411a9)

running 5 tests
test treasury_test::new_works ... ok
test treasury_test::get_me_notify_limit_test ... ok
test treasury_test::set_me_notify_limit_test ... ok
test treasury_test::get_reward_notify_limit_test ... ok
test treasury_test::withdraw_reward_and_or_me_test ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests protocol

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```