# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/MeProtocol.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 0a | License | <ul><li>[x] </li></ul> |[GPL v3](https://github.com/Me-Protocol/rusty-protocol-v0.1/blob/milestone-1/license.md)| ...| 
| 0b | Documentation | <ul><li>[x] </li></ul> | [Milestone 1 Documentation](https://github.com/Me-Protocol/rusty-protocol-v0.1/blob/milestone-1/README.md)  | Ok. | 
| 0c | Testing Guide | <ul><li>[x] </li></ul> |<ul> <li> [Test Scripts](https://github.com/Me-Protocol/rusty-protocol-v0.1/tree/milestone-1/tests)  </li> <li> [Guide for running tests](https://github.com/Me-Protocol/rusty-protocol-v0.1/blob/milestone-1/testing_guide.md) </li></ul>| Ok.| 
| 0d | Docker | <ul><li>[x] </li></ul> |<ul> <li>[Docker File For Tests](https://github.com/Me-Protocol/rusty-protocol-v0.1/blob/milestone-1/Dockerfile)</li><li> [Guide to Run Test With Docker File](https://github.com/Me-Protocol/rusty-protocol-v0.1/blob/milestone-1/testing_guide.md#running-the-docker-file-for-the-e2e-test)</li></ul>| Ok.| 
| 0e | Article | <ul><li>[x] </li></ul> | <ul> <li>https://www.loom.com/share/8ec3df74fb414049a7e1f10a7f2aa7b5</li><li>[Document](https://drive.google.com/file/d/1sHMD_ZAZE8laRbTjFTAkWKcSXmEIWnFB/view?usp=sharing)</li></ul>| Ok.| 
| 1. | Build out the Pool Component | <ul><li>[x] </li></ul> | <ul>  <li>[Pool](https://github.com/Me-Protocol/rusty-protocol-v0.1/tree/milestone-1/contracts/modules/deployables/pool)</li><li>[Pool Initiator](https://github.com/Me-Protocol/rusty-protocol-v0.1/tree/milestone-1/contracts/modules/deployables/pool_initiator)</li></ul> | Ok.| 
| 2. | Build out the rewards factory component | <ul><li>[x] </li></ul> |<ul>  <li>[Reward](https://github.com/Me-Protocol/rusty-protocol-v0.1/tree/milestone-1/contracts/modules/deployables/reward)</li><li> [Reward Initiator (Factory)](https://github.com/Me-Protocol/rusty-protocol-v0.1/tree/milestone-1/contracts/modules/deployables/reward_initiator) | Ok.| 
| 3. | Build out the Rewards Periphery Component | <ul><li>[x] </li></ul> |<ul>  <li> [Treasury](https://github.com/Me-Protocol/rusty-protocol-v0.1/tree/milestone-1/contracts/modules/peripherals/treasury) </li><li> [Bounty](https://github.com/Me-Protocol/rusty-protocol-v0.1/tree/milestone-1/contracts/modules/peripherals/bounty)| Ok.| 
| 4. | Build out the service payment component | <ul><li>[x] </li></ul> |[Service Payment](https://github.com/Me-Protocol/rusty-protocol-v0.1/tree/milestone-1/contracts/modules/services/payment)| Ok.| 
| 5. | Build Out the Rewards Valuation Oracle Component | <ul><li>[x] </li></ul> |[Valuation Oracle](https://github.com/Me-Protocol/rusty-protocol-v0.1/tree/milestone-1/contracts/modules/services/oracle)| Ok.| 

# General Notes

Issues were resolved and everything is working as expected. Thanks for the quick communication and looking forward to the next one!

## Evaluation v2

Issues have been resolved, and all TS unit tests are now passing successfully.

<details>

  <summary>Output</summary>

```sh
docker build -t my-rust-environment .

[+] Building 52.6s (13/13) FINISHED
 => [internal] load build definition from Dockerfile                                                                 0.0s
 => => transferring dockerfile: 782B                                                                                 0.0s
 => [internal] load .dockerignore                                                                                    0.0s
 => => transferring context: 2B                                                                                      0.0s
 => [internal] load metadata for docker.io/library/node:16.15.1                                                      1.3s
 => [1/8] FROM docker.io/library/node:16.15.1@sha256:a13d2d2aec7f0dae18a52ca4d38b592e45a45cc4456ffab82e5ff10d8a53d  31.7s
 => => resolve docker.io/library/node:16.15.1@sha256:a13d2d2aec7f0dae18a52ca4d38b592e45a45cc4456ffab82e5ff10d8a53d0  0.0s
 => => sha256:bc263109e229d53373522bd6e33fdba6d3bfcf77e206ffe5ef9176be57e8b89a 2.21kB / 2.21kB                       0.0s
 => => sha256:8d6f1451981514e25c21542f5c7ee9bb90052b8856b484ce47294cbf1fd5a234 49.23MB / 49.23MB                    22.8s
 => => sha256:8ccc9fb4baf6e7f2e6ee18ed689c8ee1171c6751c8bbd317d580a193da27a5f1 7.72MB / 7.72MB                       1.3s
 => => sha256:a13d2d2aec7f0dae18a52ca4d38b592e45a45cc4456ffab82e5ff10d8a53d042 1.21kB / 1.21kB                       0.0s
 => => sha256:7bfe40651606734d05c5ed76e674e38b83a8754a40752570d9138dc90dec7da7 7.75kB / 7.75kB                       0.0s
 => => sha256:620d55693ed5943ab298346d9ccafefdd6d6f33994e6820a857737df89b65f3a 9.77MB / 9.77MB                       2.1s
 => => sha256:82dcb0fa2b6020cd95c3972ec0fe03da38862f57574fe03a49360713d6f415d6 52.17MB / 52.17MB                    20.0s
 => => sha256:d75d85ab89337b32fb8b4e0454a157fa71a765a1daf512255323edd5f3f0afe7 184.07MB / 184.07MB                  25.7s
 => => sha256:58af0698dc7f636576a444c050fdf327087c17ca5f52bf8691359e902a42a86e 4.09kB / 4.09kB                      20.2s
 => => sha256:243578413ac7caadf2789a3fe21f81e64636ca617009cc0397582d2e773cf37f 34.22MB / 34.22MB                    24.7s
 => => extracting sha256:8d6f1451981514e25c21542f5c7ee9bb90052b8856b484ce47294cbf1fd5a234                            1.5s
 => => sha256:2734a9c1b6cd2bcbde2458ee9302344c2642ac2938a10204364ceb8a7404edb4 2.29MB / 2.29MB                      23.4s
 => => sha256:74aa9c8d3d8de31f9be6e2087cc7d3fa02bd0ad2bc7d482b9c7582edb378366e 451B / 451B                          23.5s
 => => extracting sha256:8ccc9fb4baf6e7f2e6ee18ed689c8ee1171c6751c8bbd317d580a193da27a5f1                            0.2s
 => => extracting sha256:620d55693ed5943ab298346d9ccafefdd6d6f33994e6820a857737df89b65f3a                            0.1s
 => => extracting sha256:82dcb0fa2b6020cd95c3972ec0fe03da38862f57574fe03a49360713d6f415d6                            1.5s
 => => extracting sha256:d75d85ab89337b32fb8b4e0454a157fa71a765a1daf512255323edd5f3f0afe7                            4.2s
 => => extracting sha256:58af0698dc7f636576a444c050fdf327087c17ca5f52bf8691359e902a42a86e                            0.0s
 => => extracting sha256:243578413ac7caadf2789a3fe21f81e64636ca617009cc0397582d2e773cf37f                            0.8s
 => => extracting sha256:2734a9c1b6cd2bcbde2458ee9302344c2642ac2938a10204364ceb8a7404edb4                            0.0s
 => => extracting sha256:74aa9c8d3d8de31f9be6e2087cc7d3fa02bd0ad2bc7d482b9c7582edb378366e                            0.0s
 => [internal] load build context                                                                                    0.0s
 => => transferring context: 2.36MB                                                                                  0.0s
 => [2/8] COPY ./typechain-generated /app/typechain-generated                                                        0.5s
 => [3/8] COPY package.json /app/package.json                                                                        0.0s
 => [4/8] COPY yarn.lock /app/yarn.lock                                                                              0.0s
 => [5/8] COPY tsconfig.json /app/tsconfig.json                                                                      0.0s
 => [6/8] COPY ./tests /app/tests                                                                                    0.0s
 => [7/8] WORKDIR /app                                                                                               0.0s
 => [8/8] RUN yarn install --non-interactive --frozen-lockfile                                                      16.7s
 => exporting to image                                                                                               2.2s
 => => exporting layers                                                                                              2.2s
 => => writing image sha256:a50c686a1b13c50a9395b123b487ceaa536195b5c129957643a069e64d9e4b4c                         0.0s
 => => naming to docker.io/library/my-rust-environment:latest
 ```

Tests are successful now:
```ts
docker run -it my-rust-environment


  Bounty Test
    recordDepositedBountyRewards
balance of bounty 100
      ✔ Should successfully record bounty amount (299ms)
balance of bounty 0
      ✔ Should fail because your are trying to record an amount you didn't deposit (201ms)
    withdrawBountyRewards
balance of bounty before withdrawal 9900
      ✔ Should successfully withdraw from bounty pool (220ms)
      ✔ Should fail because caller is not a me-protocol admin (246ms)
      ✔ Should fail because caller is trying to withdraw out of range (206ms)
    setBountyTriggerLimit
balance of bounty 100
      ✔ Should successfully set bounty_reward trigger limit (247ms)
balance of bounty 100
      ✔ Should fail because caller is not protocol (237ms)

  Pool Test
1260018
    ✔ should start open rewards with correct R value and Signer (672ms)

  Payment Service Test
    ✔ Should be able to deposit into the contract (195ms)
    ✔ Should reject if user doesnt create me allowance for contract (175ms)
    ✔ Should reject if user without funds in contract try to withdraw (252ms)
    ✔ User should be able to withdraw funds (245ms)
    ✔ User balance in contract should reduce after paying for service (238ms)
    ✔ User without funds in contract should not be able to pay for services (247ms)
    ✔ Should reject if user try to pay above his funds in contract (246ms)
    ✔ Should reject if none admin calls the protocolWithdrawMe (239ms)
    ✔ Should admin should be able to withdraw me paid for services  (265ms)
    ✔ Should reject if admin try to withdraw higher than services paid for (276ms)

  Pool Test
The res true
    ✔ should start open rewards with correct R value and Signer (435ms)
    ✔ should pause open rewards with correct Signer and State (396ms)
    ✔ should resume open rewards with correct Signer and State (469ms)
    ✔ should provide open rewards state (479ms)
position [ { u128: ReturnNumber { rawNumber: <BN: 1> } } ]
output 1
result for first index 100
    ✔ should record added liquidity (457ms)
    ✔ should record added liqudity to the same position (473ms)
    ✔ should withdraw the liqudity provided (440ms)
true
    ✔ should add_open_rewards_manager (470ms)
Check if still the mananger false
    ✔ should remove_open_rewards_manager (393ms)
    ✔ should get the liquidity ratios in the pool (384ms)
    ✔ should get the addresses of the pool initiator and the tokens in the pool (323ms)
    ✔ should get the state of the pool (337ms)
    ✔ should get the configuration of the pool (349ms)
    ✔ Should initiate outgoing conversation (445ms)

  Pool inititiator Test
    ✔ Should reject when called by unauthourized account  (241ms)
48
    ✔ Should be able to create a new pool (260ms)

  Reward Test
    ✔ mints initial rewards (85ms)
    ✔ only brand can mint type a (97ms)
    ✔ only brand can mint type b (111ms)
    ✔ brand can burn (108ms)

  reward inititiator Test
    ✔ Should be able to create a new  (141ms)
    ✔ Should reject when called by none admin  (138ms)
    ✔ Should store the new contract address successfully  (136ms)
[
  '5Fa4u9dM7oVgCHwkkfCuQuzQjopNQgks9re2zbj8yaeiAKmf',
  '5Dkb7hitWMJCwzeXrFamDBUko3RvesTJobMCBTPdQZFkHyZj'
]
    ✔ Should return the array of all newly created rewards  (174ms)

  Treasury Test
    recordDepositedRewardAndOrMe
me balance is 100, reward balance is 100
      ✔ Should successfully deposit tokens to the treasury (352ms)
me balance is 0, reward balance is 0
      ✔ Should fail because you are trying to deposit zero tokens (221ms)
      ✔ Should fail because you are trying to record less me tokens than deposited (273ms)
      ✔ Should fail because you are trying to record less reward tokens than deposited (306ms)
    recordDepositedCai
      ✔ Should successfully call the recordDepositedCai to record tokens deposited into the treasury (230ms)
      ✔ Should fail because you are trying to record zero me tokens (217ms)
      ✔ Should fail because you are trying to record less me tokens than deposited (215ms)
    withdrawRewardAndOrMe
me balance is 100, reward balance is 100
      ✔ Should successfully withdraw tokens from the treasury after depositing (303ms)
      ✔ Should fail because you are trying to withdraw zero tokens (271ms)
      ✔ Should fail because you are trying to withdraw more me tokens than deposited (282ms)
      ✔ Should fail because you are trying to withdraw less reward tokens than deposited (277ms)
      ✔ Should fail because caller is not allowed to make this call (not admin) (271ms)
    payForSomeCosts
      ✔ Should successfully deposit tokens and pay for some cost (something) (285ms)
      ✔ Should fail because you are trying to deposit zero me tokens (275ms)
      ✔ Should fail because you are trying to pay more me tokens than the deposited (282ms)
      ✔ Should fail because you are not an admin (260ms)


  58 passing (16s)

npm notice
npm notice New major version of npm available! 8.11.0 -> 10.2.5
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.2.5
npm notice Run npm install -g npm@10.2.5 to update!
```
</details>

`cargo test` still fails because you have to use `cargo +nightly test`, please update this in the instructions. Cargo tests all passing.

<details>

  <summary>Output</summary>

```rust
warning: unused import: `psp22::PSP22Impl`
 --> contracts/controllers/deployables/reward.rs:5:8
  |
5 |     }, psp22::PSP22Impl},
  |        ^^^^^^^^^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

warning: unused imports: `psp22::*`, `psp34::extensions::enumerable`
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

warning: unused imports: `data::a_pool::*`, `types::*`
 --> contracts/controllers/deployables/payment.rs:9:46
  |
9 | use crate::providers::{ common::{ errors::*, types::* }, data::a_pool::* };
  |                                              ^^^^^^^^    ^^^^^^^^^^^^^^^

warning: unused imports: `Balance`, `psp22::*`
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

warning: unused imports: `pausable::*`, `psp22::*`, `psp34::*`
 --> contracts/controllers/services/brands.rs:2:45
  |
2 |     contracts::traits::{ access_control::*, psp22::*, psp34::*, pausable::* },
  |                                             ^^^^^^^^  ^^^^^^^^  ^^^^^^^^^^^

warning: unused imports: `String`, `access_control::*`, `pausable::*`, `psp22::*`, `psp34::*`
 --> contracts/controllers/services/customers.rs:2:26
  |
2 |     contracts::traits::{ access_control::*, psp22::*, psp34::*, pausable::* },
  |                          ^^^^^^^^^^^^^^^^^  ^^^^^^^^  ^^^^^^^^  ^^^^^^^^^^^
3 |     traits::{ AccountId, Balance, String },
  |                                   ^^^^^^

warning: unused imports: `a_pool::*`, `a_reward::*`, `brand::*`
 --> contracts/controllers/services/customers.rs:6:52
  |
6 | use crate::providers::{ common::errors::*, data::{ a_reward::*, brand::*, a_pool::* } };
  |                                                    ^^^^^^^^^^^  ^^^^^^^^  ^^^^^^^^^

warning: unused imports: `pausable::*`, `psp22::*`, `psp34::*`
 --> contracts/controllers/services/admin.rs:2:45
  |
2 |     contracts::traits::{ access_control::*, psp22::*, psp34::*, pausable::* },
  |                                             ^^^^^^^^  ^^^^^^^^  ^^^^^^^^^^^

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

warning: unused import: `Balance`
 --> contracts/providers/data/a_reward.rs:1:37
  |
1 | use openbrush::traits::{ AccountId, Balance, String, Storage };
  |                                     ^^^^^^^

warning: unused import: `database::*`
 --> contracts/providers/data/a_reward.rs:3:33
  |
3 | use crate::providers::common::{ database::*, types::BRAND_ID_TYPE, errors::ProtocolError };
  |                                 ^^^^^^^^^^^

warning: unused import: `Balance`
 --> contracts/providers/data/brand.rs:1:39
  |
1 | use openbrush::{ traits::{ AccountId, Balance, String } };
  |                                       ^^^^^^^

warning: unused import: `database::*`
 --> contracts/providers/data/brand.rs:3:33
  |
3 | use crate::providers::common::{ database::*, types::* };
  |                                 ^^^^^^^^^^^

warning: unused import: `String`
 --> contracts/providers/data/protocol.rs:1:48
  |
1 | use openbrush::{ traits::{ AccountId, Balance, String, Storage } };
  |                                                ^^^^^^

warning: unused import: `Mapping`
 --> contracts/providers/data/protocol.rs:2:46
  |
2 | use ink::{ storage::{ traits::StorageLayout, Mapping } };
  |                                              ^^^^^^^

warning: unused import: `database::*`
 --> contracts/providers/data/protocol.rs:3:33
  |
3 | use crate::providers::common::{ database::*, types::* };
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

warning: unused imports: `database::*`, `types::*`
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

warning: unused imports: `common::constants::PRECISION`, `protocol::update_editable_protocol_config`
 --> contracts/providers/deployables/bounty.rs:1:25
  |
1 | ...rs::{ common::constants::PRECISION, data::{bounty::BountyRecord, protocol::update_editable_protocol_config} };
  |          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: private item shadows public glob re-export
 --> contracts/providers/deployables/bounty.rs:1:62
  |
1 | use crate::providers::{ common::constants::PRECISION, data::{bounty::BountyRecord, protocol::update_editable_protoc...
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
1 | use crate::providers::{ common::constants::PRECISION, data::{bounty::BountyRecord, protocol::update_editable_protoc...
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

warning: unused imports: `constants::PRECISION`, `data::treasury::*`
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

warning: unused imports: `constants::PRECISION`, `data::payment::*`, `types::*`
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
902 | ...   let mut slippage = if slippage_in_precision == 0 {config.default_slippage_in_precision} else{slippage_in_pr...
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
   |
   = note: `#[warn(unused_variables)]` on by default

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

   Compiling pool v0.1.1 (/Users/keeganquigley/rusty-protocol-v0.1/contracts/modules/deployables/pool)
   Compiling reward v0.1.0 (/Users/keeganquigley/rusty-protocol-v0.1/contracts/modules/deployables/reward)
   Compiling bounty v0.1.0 (/Users/keeganquigley/rusty-protocol-v0.1/contracts/modules/peripherals/bounty)
   Compiling payment v0.1.0 (/Users/keeganquigley/rusty-protocol-v0.1/contracts/modules/services/payment)
   Compiling oracle v0.1.0 (/Users/keeganquigley/rusty-protocol-v0.1/contracts/modules/services/oracle)
   Compiling treasury v0.1.0 (/Users/keeganquigley/rusty-protocol-v0.1/contracts/modules/peripherals/treasury)
warning: unused imports: `access_control::Internal`, `burnable::*`
  --> contracts/modules/deployables/reward/reward.rs:14:97
   |
14 | ...ns::{ mintable::*, metadata::*, burnable::* }, self}, access_control::Internal },
   |                                    ^^^^^^^^^^^           ^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused import: `common::roles::*`
  --> contracts/modules/deployables/pool/pool.rs:67:9
   |
67 |         common::roles::*,
   |         ^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused import: `traits::ownable`
  --> contracts/modules/deployables/pool/pool.rs:70:112
   |
70 | ...ons::enumerable::*, self}, reentrancy_guard::*, traits::ownable },
   |                                                    ^^^^^^^^^^^^^^^

   Compiling reward_initiator v0.1.0 (/Users/keeganquigley/rusty-protocol-v0.1/contracts/modules/deployables/reward_initiator)
warning: `global` (lib) generated 70 warnings (run `cargo fix --lib -p global` to apply 57 suggestions)
warning: unused import: `ink::env`
  --> contracts/modules/deployables/reward_initiator/reward_initiator.rs:19:9
   |
19 |     use ink::env;
   |         ^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: `reward` (lib) generated 1 warning (run `cargo fix --lib -p reward` to apply 1 suggestion)
warning: `reward_initiator` (lib) generated 1 warning (run `cargo fix --lib -p reward_initiator` to apply 1 suggestion)
   Compiling pool_initiator v0.1.0 (/Users/keeganquigley/rusty-protocol-v0.1/contracts/modules/deployables/pool_initiator)
warning: unused import: `brand`
 --> contracts/modules/deployables/pool_initiator/pool_initiator.rs:7:57
  |
7 |     use global::providers::{data::{pool_initiator::{*}, brand},services::{ payment::ProtocolError}, common::types::...
  |                                                         ^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

warning: private item shadows public glob re-export
  --> contracts/modules/deployables/pool_initiator/pool_initiator.rs:7:76
   |
7  |     use global::providers::{data::{pool_initiator::{*}, brand},services::{ payment::ProtocolError}, common::types:...
   |                                                                            ^^^^^^^^^^^^^^^^^^^^^^
   |
note: the name `ProtocolError` in the type namespace is supposed to be publicly re-exported here
  --> contracts/modules/deployables/pool_initiator/pool_initiator.rs:13:33
   |
13 | ...   deployables::{a_pool::{ *, PoolSetUpConfig, PoolConfig, POOL_ADMIN, POOL_MANAGER, PoolImpl }, bounty::{OPEN_...
   |                               ^
note: but the private item here shadows it
  --> contracts/modules/deployables/pool_initiator/pool_initiator.rs:7:76
   |
7  |     use global::providers::{data::{pool_initiator::{*}, brand},services::{ payment::ProtocolError}, common::types:...
   |                                                                            ^^^^^^^^^^^^^^^^^^^^^^
   = note: `#[warn(hidden_glob_reexports)]` on by default

warning: unused import: `common::roles::*`
  --> contracts/modules/deployables/pool_initiator/pool_initiator.rs:14:9
   |
14 |         common::roles::*,
   |         ^^^^^^^^^^^^^^^^

warning: unused import: `ink::env`
  --> contracts/modules/deployables/pool_initiator/pool_initiator.rs:21:9
   |
21 |     use ink::env;
   |         ^^^^^^^^

warning: unused import: `global::controllers::deployables::pool_initiator`
  --> contracts/modules/deployables/pool_initiator/pool_initiator.rs:10:9
   |
10 |     use global::controllers::deployables::pool_initiator::*;
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Compiling meprotocol v0.1.0 (/Users/keeganquigley/rusty-protocol-v0.1)
warning: `pool` (lib) generated 2 warnings (run `cargo fix --lib -p pool` to apply 2 suggestions)
warning: `pool_initiator` (lib) generated 5 warnings (run `cargo fix --lib -p pool_initiator` to apply 3 suggestions)
warning: unused import: `providers::data::a_pool::*`
  --> tests/pool_initiator.rs:13:19
   |
13 |     use global::{ providers::data::a_pool::* };
   |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused imports: `errors::ProtocolError`, `eunice::*`, `roles::*`, `validator::*`
  --> tests/pool_initiator.rs:14:40
   |
14 |     use global::providers::  common::{ roles::*, errors::ProtocolError, eunice::*, validator::* };
   |                                        ^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^  ^^^^^^^^^  ^^^^^^^^^^^^

warning: unused imports: `AccountId`, `Balance`
  --> tests/pool_initiator.rs:16:47
   |
16 |     use openbrush::{ test_utils::*, traits::{ AccountId, Balance } };
   |                                               ^^^^^^^^^  ^^^^^^^

warning: unused import: `ink::primitives::Hash`
 --> tests/treasury.rs:8:9
  |
8 |     use ink::primitives::Hash;
  |         ^^^^^^^^^^^^^^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

warning: unused imports: `eunice::*`, `roles::*`, `validator::*`
  --> tests/treasury.rs:10:40
   |
10 |     use global::providers::  common::{ roles::*, errors::ProtocolError, eunice::*, validator::* };
   |                                        ^^^^^^^^                         ^^^^^^^^^  ^^^^^^^^^^^^

warning: unused imports: `AccountId`, `Balance`
  --> tests/treasury.rs:11:47
   |
11 |     use openbrush::{ test_utils::*, traits::{ AccountId, Balance } };
   |                                               ^^^^^^^^^  ^^^^^^^

warning: unused import: `providers::data::treasury::*`
  --> tests/treasury.rs:12:19
   |
12 |     use global::{ providers::data::treasury::* };
   |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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

warning: unused imports: `eunice::*`, `roles::*`, `validator::*`
  --> tests/payment.rs:11:40
   |
11 |     use global::providers::  common::{ roles::*, errors::ProtocolError, eunice::*, validator::* };
   |                                        ^^^^^^^^                         ^^^^^^^^^  ^^^^^^^^^^^^

warning: unused imports: `AccountId`, `Balance`
  --> tests/payment.rs:12:47
   |
12 |     use openbrush::{ test_utils::*, traits::{ AccountId, Balance } };
   |                                               ^^^^^^^^^  ^^^^^^^

warning: unused import: `providers::data::payment::*`
  --> tests/payment.rs:13:19
   |
13 |     use global::{ providers::data::payment::* };
   |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^

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

warning: unused imports: `eunice::*`, `roles::*`, `validator::*`
  --> tests/bounty.rs:11:40
   |
11 |     use global::providers::  common::{ roles::*, errors::ProtocolError, eunice::*, validator::* };
   |                                        ^^^^^^^^                         ^^^^^^^^^  ^^^^^^^^^^^^

warning: unused imports: `AccountId`, `Balance`
  --> tests/bounty.rs:12:47
   |
12 |     use openbrush::{ test_utils::*, traits::{ AccountId, Balance } };
   |                                               ^^^^^^^^^  ^^^^^^^

warning: unused import: `providers::data::bounty::*`
  --> tests/bounty.rs:13:19
   |
13 |     use global::{ providers::data::bounty::* };
   |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: unused import: `providers::data::a_pool::*`
 --> tests/pool.rs:9:19
  |
9 |     use global::{ providers::data::a_pool::* };
  |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

warning: unused imports: `eunice::*`, `roles::*`, `validator::*`
  --> tests/pool.rs:10:40
   |
10 |     use global::providers::  common::{ roles::*, errors::ProtocolError, eunice::*, validator::* };
   |                                        ^^^^^^^^                         ^^^^^^^^^  ^^^^^^^^^^^^

warning: unused imports: `AccountId`, `Balance`
  --> tests/pool.rs:11:47
   |
11 |     use openbrush::{ test_utils::*, traits::{ AccountId, Balance } };
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

warning: unused variable: `b`
  --> tests/payment.rs:21:13
   |
21 |         let b = accounts.alice;
   |             ^ help: if this is intentional, prefix it with an underscore: `_b`
   |
   = note: `#[warn(unused_variables)]` on by default

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

warning: unused variable: `b`
  --> tests/bounty.rs:21:13
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

warning: unused variable: `emitted_events`
  --> tests/reward_.rs:71:13
   |
71 |         let emitted_events = ink::env::test::recorded_events().collect::<Vec<_>>();
   |             ^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_emitted_events`
   |
   = note: `#[warn(unused_variables)]` on by default

warning: variable does not need to be mutable
  --> tests/pool.rs:20:13
   |
20 |         let mut  pool = Pool::new(
   |             -----^^^^
   |             |
   |             help: remove this `mut`
   |
   = note: `#[warn(unused_mut)]` on by default

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

warning: `meprotocol` (test "pool_initiator") generated 10 warnings (run `cargo fix --test "pool_initiator"` to apply 10 suggestions)
warning: `meprotocol` (test "reward_initiator") generated 7 warnings (run `cargo fix --test "reward_initiator"` to apply 7 suggestions)
warning: `meprotocol` (test "payment") generated 11 warnings (run `cargo fix --test "payment"` to apply 11 suggestions)
warning: `meprotocol` (test "treasury") generated 10 warnings (run `cargo fix --test "treasury"` to apply 10 suggestions)
warning: `meprotocol` (test "bounty") generated 6 warnings (run `cargo fix --test "bounty"` to apply 6 suggestions)
warning: `meprotocol` (test "reward_") generated 3 warnings (run `cargo fix --test "reward_"` to apply 1 suggestion)
warning: `meprotocol` (test "pool") generated 4 warnings (run `cargo fix --test "pool"` to apply 4 suggestions)
    Finished test [unoptimized + debuginfo] target(s) in 25.79s
     Running unittests protocol.rs (target/debug/deps/protocol-1e1624a09b19f728)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/bounty.rs (target/debug/deps/bounty-ac14a6ef7e551d08)

running 3 tests
test bounty_test::new_works ... ok
test bounty_test::withdraw_bounty_test ... ok
test bounty_test::trigger_limit_test ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/payment.rs (target/debug/deps/payment-a0dfe3ade1ba11b7)

running 6 tests
test payment_test::protocol_me_balance_test ... ok
test payment_test::brand_me_balance_test ... ok
test payment_test::brand_withdraw_me_test ... ok
test payment_test::new_works ... ok
test payment_test::brand_service_payment_test ... ok
test payment_test::protocol_withdraw_me_test ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/pool.rs (target/debug/deps/pool-005e659c3324adbe)

running 11 tests
test pool_test::start_open_rewards_fail ... ok
test pool_test::new_works ... ok
test pool_test::get_liquidity_ratios_test ... ok
test pool_test::resume_open_rewards_fails ... ok
test pool_test::get_open_rewards_state_test ... ok
test pool_test::get_liquidity_ids_test ... ok
test pool_test::forcefully_withdraw_protocol_offset_me_tokens_fails ... ok
test pool_test::pause_open_rewards_fails ... ok
test pool_test::withdraw_protocol_me_offset_only_me_tokens_fails ... ok
test pool_test::withdraw_protocol_me_offset_with_rewards_if_need_be_fails ... ok
test pool_test::withdraw_protocol_me_offset_withdrawable_fails ... ok

test result: ok. 11 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/pool_initiator.rs (target/debug/deps/pool_initiator-4fa05327887da14c)

running 3 tests
test pool_initiator_test::create_new_pool ... ok
test pool_initiator_test::new_works ... ok
test pool_initiator_test::update_pool_hash_test ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/reward_.rs (target/debug/deps/reward_-8dd52dd6788d678b)

running 1 test
test unit_test::new_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/reward_initiator.rs (target/debug/deps/reward_initiator-4d505ec9052e5a4b)

running 3 tests
test reward_initiator_test::new_works ... ok
test reward_initiator_test::update_reward_hash_test ... ok
test reward_initiator_test::create_new_reward ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/treasury.rs (target/debug/deps/treasury-a95e9fd25ead11b1)

running 5 tests
test treasury_test::withdraw_reward_and_or_me_test ... ok
test treasury_test::set_me_notify_limit_test ... ok
test treasury_test::get_reward_notify_limit_test ... ok
test treasury_test::new_works ... ok
test treasury_test::get_me_notify_limit_test ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests protocol

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
</details>

58 e2e tests all passing:

<details>

  <summary>Output</summary>

```ts
docker run -p 9944:9944 my-rust-environment:v1


  Bounty Test
    recordDepositedBountyRewards
balance of bounty 100
      ✔ Should successfully record bounty amount (317ms)
balance of bounty 0
      ✔ Should fail because your are trying to record an amount you didn't deposit (189ms)
    withdrawBountyRewards
balance of bounty before withdrawal 9900
      ✔ Should successfully withdraw from bounty pool (278ms)
      ✔ Should fail because caller is not a me-protocol admin (248ms)
      ✔ Should fail because caller is trying to withdraw out of range (283ms)
    setBountyTriggerLimit
balance of bounty 100
      ✔ Should successfully set bounty_reward trigger limit (205ms)
balance of bounty 100
      ✔ Should fail because caller is not protocol (206ms)

  Pool Test
1260018
    ✔ should start open rewards with correct R value and Signer (703ms)

  Payment Service Test
    ✔ Should be able to deposit into the contract (232ms)
    ✔ Should reject if user doesnt create me allowance for contract (185ms)
    ✔ Should reject if user without funds in contract try to withdraw (237ms)
    ✔ User should be able to withdraw funds (258ms)
    ✔ User balance in contract should reduce after paying for service (240ms)
    ✔ User without funds in contract should not be able to pay for services (255ms)
    ✔ Should reject if user try to pay above his funds in contract (263ms)
    ✔ Should reject if none admin calls the protocolWithdrawMe (267ms)
    ✔ Should admin should be able to withdraw me paid for services  (281ms)
    ✔ Should reject if admin try to withdraw higher than services paid for (286ms)

  Pool Test
The res true
    ✔ should start open rewards with correct R value and Signer (484ms)
    ✔ should pause open rewards with correct Signer and State (420ms)
    ✔ should resume open rewards with correct Signer and State (443ms)
    ✔ should provide open rewards state (381ms)
position [ { u128: ReturnNumber { rawNumber: <BN: 1> } } ]
output 1
result for first index 100
    ✔ should record added liquidity (435ms)
    ✔ should record added liqudity to the same position (504ms)
    ✔ should withdraw the liqudity provided (508ms)
true
    ✔ should add_open_rewards_manager (503ms)
Check if still the mananger false
    ✔ should remove_open_rewards_manager (405ms)
    ✔ should get the liquidity ratios in the pool (402ms)
    ✔ should get the addresses of the pool initiator and the tokens in the pool (332ms)
    ✔ should get the state of the pool (357ms)
    ✔ should get the configuration of the pool (352ms)
    ✔ Should initiate outgoing conversation (440ms)

  Pool inititiator Test
    ✔ Should reject when called by unauthourized account  (270ms)
48
    ✔ Should be able to create a new pool (245ms)

  Reward Test
    ✔ mints initial rewards (85ms)
    ✔ only brand can mint type a (100ms)
    ✔ only brand can mint type b (114ms)
    ✔ brand can burn (117ms)

  reward inititiator Test
    ✔ Should be able to create a new  (143ms)
    ✔ Should reject when called by none admin  (146ms)
    ✔ Should store the new contract address successfully  (140ms)
[
  '5FJipkZbe3zDiZsBZrjuf1iKnJfJFLmFRyU5gsVXHwWN8N7H',
  '5FRc3W8pGGRR5449s69KvasbGF6vW7AKYwPopt2V12ovWmaj'
]
    ✔ Should return the array of all newly created rewards  (176ms)

  Treasury Test
    recordDepositedRewardAndOrMe
me balance is 100, reward balance is 100
      ✔ Should successfully deposit tokens to the treasury (263ms)
me balance is 0, reward balance is 0
      ✔ Should fail because you are trying to deposit zero tokens (228ms)
      ✔ Should fail because you are trying to record less me tokens than deposited (269ms)
      ✔ Should fail because you are trying to record less reward tokens than deposited (261ms)
    recordDepositedCai
      ✔ Should successfully call the recordDepositedCai to record tokens deposited into the treasury (235ms)
      ✔ Should fail because you are trying to record zero me tokens (234ms)
      ✔ Should fail because you are trying to record less me tokens than deposited (253ms)
    withdrawRewardAndOrMe
me balance is 100, reward balance is 100
      ✔ Should successfully withdraw tokens from the treasury after depositing (331ms)
      ✔ Should fail because you are trying to withdraw zero tokens (312ms)
      ✔ Should fail because you are trying to withdraw more me tokens than deposited (328ms)
      ✔ Should fail because you are trying to withdraw less reward tokens than deposited (396ms)
      ✔ Should fail because caller is not allowed to make this call (not admin) (352ms)
    payForSomeCosts
      ✔ Should successfully deposit tokens and pay for some cost (something) (392ms)
      ✔ Should fail because you are trying to deposit zero me tokens (468ms)
      ✔ Should fail because you are trying to pay more me tokens than the deposited (441ms)
      ✔ Should fail because you are not an admin (336ms)


  58 passing (18s)
```
</details>

Substrate-contracts-node has a couple RPC errors, but successfully logs the events:

<details>

  <summary>Output</summary>

```rust
2023-12-08 12:54:10.988  INFO main sc_rpc_server: Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["*"]
2023-12-08 12:54:25.934 ERROR tokio-runtime-worker sc_consensus_manual_seal::rpc: Consensus with no RPC sender encountered an error: Transaction pool is empty, set create_empty to true, if you want to create empty blocks
2023-12-08 12:54:26.407 ERROR tokio-runtime-worker sc_consensus_manual_seal::rpc: Consensus with no RPC sender encountered an error: Transaction pool is empty, set create_empty to true, if you want to create empty blocks
2023-12-08 12:54:28.587 DEBUG tokio-runtime-worker runtime::contracts: Execution finished with debug buffer: in
found position 0
finished dealing with position
checking token
token exists
owner correct
sufficient balance
making update
obtaining amount to withdraw
transferring tokens

2023-12-08 12:54:29.138 DEBUG tokio-runtime-worker runtime::contracts: Execution finished with debug buffer: in
found position 0
finished dealing with position
checking token
token exists
owner correct
sufficient balance
making update
obtaining amount to withdraw
transferring tokens

2023-12-08 12:55:43.902 DEBUG tokio-runtime-worker runtime::contracts: Execution finished with debug buffer: in
found position 0
finished dealing with position
checking token
token exists
owner correct
sufficient balance
making update
obtaining amount to withdraw
transferring tokens

2023-12-08 12:55:44.401 DEBUG tokio-runtime-worker runtime::contracts: Execution finished with debug buffer: in
found position 0
finished dealing with position
checking token
token exists
owner correct
sufficient balance
making update
obtaining amount to withdraw
transferring tokens
```
</details>

## Evaluation v1

Docker fails:

```sh
docker build -t my-rust-environment .

[+] Building 0.4s (6/11)
 => [internal] load build definition from Dockerfile                                                                 0.0s
 => => transferring dockerfile: 752B                                                                                 0.0s
 => [internal] load .dockerignore                                                                                    0.0s
 => => transferring context: 2B                                                                                      0.0s
 => [internal] load metadata for docker.io/library/node:16.15.1                                                      0.4s
 => CANCELED [1/7] FROM docker.io/library/node:16.15.1@sha256:a13d2d2aec7f0dae18a52ca4d38b592e45a45cc4456ffab82e5ff  0.0s
 => => resolve docker.io/library/node:16.15.1@sha256:a13d2d2aec7f0dae18a52ca4d38b592e45a45cc4456ffab82e5ff10d8a53d0  0.0s
 => => sha256:a13d2d2aec7f0dae18a52ca4d38b592e45a45cc4456ffab82e5ff10d8a53d042 1.21kB / 1.21kB                       0.0s
 => => sha256:bc263109e229d53373522bd6e33fdba6d3bfcf77e206ffe5ef9176be57e8b89a 2.21kB / 2.21kB                       0.0s
 => => sha256:7bfe40651606734d05c5ed76e674e38b83a8754a40752570d9138dc90dec7da7 7.75kB / 7.75kB                       0.0s
 => [internal] load build context                                                                                    0.0s
 => => transferring context: 1.00kB                                                                                  0.0s
 => ERROR [2/7] COPY ./typechain-generated /app/typechain-generated                                                  0.0s
------
 > [2/7] COPY ./typechain-generated /app/typechain-generated:
------
failed to compute cache key: failed to calculate checksum of ref 3f71efc0-eddb-44f4-9e7c-7d0dbe37e813::fif4m6t1e6opjjelr8qsk6k01: "/typechain-generated": not found
```
Building contracts manually also fails:

```rust
warning: `global` (lib) generated 75 warnings (run `cargo fix --lib -p global` to apply 62 suggestions)
   Compiling oracle v0.1.0 (/private/var/folders/6_/b7tdvp0d6h779ktj0h92w5km0000gn/T/cargo-contract_johhjA)
    Finished release [optimized] target(s) in 22.40s
 [2/4] Post processing code
ERROR: Loading of original wasm failed

Caused by:
    0: Loading of wasm module at '/Users/keeganquigley/rusty-protocol-v0.1/contracts/modules/services/oracle/target/ink/wasm32-unknown-unknown/release/oracle.wasm' failed
    1: Unknown opcode 192
```
