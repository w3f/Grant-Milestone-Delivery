# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/PoCS.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

|Number|Deliverable|Accepted|Link|Notes|
|-------------|-------------|------------- |------------- |------------- |
|0a.|License| <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/auguth/pocs/blob/master/LICENSE) |-|
|0b.|Documentation| <ul><li>[x] </li></ul> | [Inline Documentation](https://auguth.github.io/pocs/target/doc/pallet_contracts/) | Looks good. |
|0c.|Testing Guide| <ul><li>[x] </li></ul> | [Testing guide](https://github.com/auguth/pocs/blob/master/README.md#testing) , [Node Setup & Run](https://github.com/auguth/pocs/blob/master/README.md#run-pocs-node) | Looks good. |
|0d.|Docker | <ul><li>[x] </li></ul> | [DockerImage 2.46GB compressed](https://hub.docker.com/r/jobyreuben/pocs-w3f-m1/tags) , [Dockerfile](https://github.com/auguth/pocs/blob/master/Dockerfile)| Runs successfully. |
|0e.|Article (Repo Readme) / External Documentation| <ul><li>[x] </li></ul> | [PoCS article](https://github.com/auguth/pocs/blob/master/README.md) | For last milestone, should be public-facing blog article.|
|1.|Delivery| <ul><li>[x] </li></ul> | [PoCS Node](https://github.com/auguth/pocs/tree/master) | Looks good. |

# General Notes



## Docker

Docker file runs successfully:

<details>
  <summary>Dockerfile</summary>

```sh
ERROR: Encountered errors while bringing up the project.
ubuntu@ip-172-31-27-78:~/pocs$ docker build -t pocs:latest .
[+] Building 0.9s (16/16) FINISHED                                                                                                        docker:default
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 1.32kB                                                                                                              0.0s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 59B                                                                                                                    0.0s
 => [internal] load metadata for docker.io/library/ubuntu:latest                                                                                    0.8s
 => [internal] load build context                                                                                                                   0.0s
 => => transferring context: 10.40kB                                                                                                                0.0s
 => [ 1/11] FROM docker.io/library/ubuntu:latest@sha256:e6173d4dc55e76b87c4af8db8821b1feae4146dd47341e4d431118c7dd060a74                            0.0s
 => CACHED [ 2/11] RUN apt-get update &&     apt-get install -y     build-essential     clang     curl     libssl-dev     protobuf-compiler         0.0s
 => CACHED [ 3/11] RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y                                                      0.0s
 => CACHED [ 4/11] RUN USER=root cargo new --bin pocs                                                                                               0.0s
 => CACHED [ 5/11] WORKDIR /pocs                                                                                                                    0.0s
 => CACHED [ 6/11] RUN rustup default stable &&     rustup update                                                                                   0.0s
 => CACHED [ 7/11] RUN rustup install nightly-2023-12-21                                                                                            0.0s
 => CACHED [ 8/11] RUN rustup target add wasm32-unknown-unknown --toolchain nightly-2023-12-21                                                      0.0s
 => CACHED [ 9/11] RUN rustup override set nightly-2023-12-21                                                                                       0.0s
 => CACHED [10/11] COPY . .                                                                                                                         0.0s
 => CACHED [11/11] RUN cargo build --release                                                                                                        0.0s
 => exporting to image                                                                                                                              0.0s
 => => exporting layers                                                                                                                             0.0s
 => => writing image sha256:e93bf8c07a34bd017cab6f4250cfd2c50fa49f10a2033970687849d7ebc417c0                                                        0.0s
 => => naming to docker.io/library/pocs:latest                                                                                                      0.0s
ubuntu@ip-172-31-27-78:~/pocs$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
ubuntu@ip-172-31-27-78:~/pocs$ docker ls
docker: 'ls' is not a docker command.
See 'docker --help'
ubuntu@ip-172-31-27-78:~/pocs$ docker image ls
REPOSITORY       TAG       IMAGE ID       CREATED         SIZE
pocs             latest    e93bf8c07a34   7 minutes ago   9.48GB
pocs_pocs-node   latest    e93bf8c07a34   7 minutes ago   9.48GB
hello-world      latest    feb5d9fea6a5   2 years ago     13.3kB
ubuntu@ip-172-31-27-78:~/pocs$ docker run --network="host" --rm e93bf8c07a34
2024-01-29 21:34:29 Substrate Node    
2024-01-29 21:34:29 ✌️  version 4.0.0-dev-unknown    
2024-01-29 21:34:29 ❤️  by Auguth, 2023-2024    
2024-01-29 21:34:29 📋 Chain specification: Development    
2024-01-29 21:34:29 🏷  Node name: embarrassed-shake-7000    
2024-01-29 21:34:29 👤 Role: AUTHORITY    
2024-01-29 21:34:29 💾 Database: RocksDb at /tmp/substrateeIyPai/chains/dev/db/full    
2024-01-29 21:34:32 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators    
2024-01-29 21:34:32 [0] 💸 generated 1 npos targets    
2024-01-29 21:34:34 🔨 Initializing Genesis block/state (state: 0x0fc7…eff9, header-hash: 0x2bfb…6c0d)    
2024-01-29 21:34:34 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
2024-01-29 21:34:36 👶 Creating empty BABE epoch changes on what appears to be first startup.    
2024-01-29 21:34:36 Using default protocol ID "sup" because none is configured in the chain specs    
2024-01-29 21:34:36 🏷  Local node identity is: 12D3KooWLtTNVVP1TgUZQmq5pFe4gV8z26yJgzxcUVWoL9rhJ3pi    
2024-01-29 21:34:36 💻 Operating system: linux    
2024-01-29 21:34:36 💻 CPU architecture: x86_64    
2024-01-29 21:34:36 💻 Target environment: gnu    
2024-01-29 21:34:36 💻 CPU: Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz    
2024-01-29 21:34:36 💻 CPU cores: 4    
2024-01-29 21:34:36 💻 Memory: 15986MB    
2024-01-29 21:34:36 💻 Kernel: 5.15.0-1051-aws    
2024-01-29 21:34:36 💻 Linux distribution: Ubuntu 22.04.3 LTS    
2024-01-29 21:34:36 💻 Virtual machine: yes    
2024-01-29 21:34:36 📦 Highest known block at #0    
2024-01-29 21:34:36 〽️ Prometheus exporter started at 127.0.0.1:9615    
2024-01-29 21:34:36 Running JSON-RPC server: addr=0.0.0.0:9944, allowed origins=["Unsafe"]    
2024-01-29 21:34:36 🏁 CPU score: 924.41 MiBs    
2024-01-29 21:34:36 🏁 Memory score: 8.38 GiBs    
2024-01-29 21:34:36 🏁 Disk score (seq. writes): 326.79 MiBs    
2024-01-29 21:34:36 🏁 Disk score (rand. writes): 61.00 MiBs    
2024-01-29 21:34:36 ⚠️  The hardware does not meet the minimal requirements for role 'Authority'.    
2024-01-29 21:34:36 👶 Starting BABE Authorship worker    
2024-01-29 21:34:39 🙌 Starting consensus session on top of parent 0x2bfba092fe0c71a6d990a11a044093545ffd2481dd54f1df0479989a6e236c0d    
2024-01-29 21:34:39 🎁 Prepared block for proposing at 1 (0 ms) [hash: 0x91c5002b72c2dfa15749a5adbda18e8b0566e8bd8c9338a515326f6f07a03f7f; parent_hash: 0x2bfb…6c0d; extrinsics (1): [0x97b1…ae6f]    
2024-01-29 21:34:39 🔖 Pre-sealed block for proposal at 1. Hash now 0x481378baaabf6d47ff9516c777136944e4fa66b2a3aa606967ac569c97f99d97, previously 0x91c5002b72c2dfa15749a5adbda18e8b0566e8bd8c9338a515326f6f07a03f7f.    
2024-01-29 21:34:39 👶 New epoch 0 launching at block 0x4813…9d97 (block slot 568854693 >= start slot 568854693).    
2024-01-29 21:34:39 👶 Next epoch starts at slot 568854893    
2024-01-29 21:34:39 ✨ Imported #1 (0x4813…9d97)    
2024-01-29 21:34:41 💤 Idle (0 peers), best: #1 (0x4813…9d97), finalized #0 (0x2bfb…6c0d), ⬇ 0 ⬆ 0    
2024-01-29 21:34:42 🙌 Starting consensus session on top of parent 0x481378baaabf6d47ff9516c777136944e4fa66b2a3aa606967ac569c97f99d97    
2024-01-29 21:34:42 🎁 Prepared block for proposing at 2 (0 ms) [hash: 0x289ce84da56a2e30335f6083680126bd33016a7ac9fcbf05e0afeb8132b6df5d; parent_hash: 0x4813…9d97; extrinsics (1): [0xb15d…70e3]    
2024-01-29 21:34:42 🔖 Pre-sealed block for proposal at 2. Hash now 0x76b0cb3bd8edb6adf528fa103c65e4a373ec0e3ab3821d56df390be3c7da7945, previously 0x289ce84da56a2e30335f6083680126bd33016a7ac9fcbf05e0afeb8132b6df5d.    
2024-01-29 21:34:42 ✨ Imported #2 (0x76b0…7945)    
2024-01-29 21:34:45 🙌 Starting consensus session on top of parent 0x76b0cb3bd8edb6adf528fa103c65e4a373ec0e3ab3821d56df390be3c7da7945    
2024-01-29 21:34:45 🎁 Prepared block for proposing at 3 (0 ms) [hash: 0xc7a4ff6faf9f246961c305370908b42e858751f8fc652ec4f5faaf02200f04ea; parent_hash: 0x76b0…7945; extrinsics (1): [0x4581…1141]    
2024-01-29 21:34:45 🔖 Pre-sealed block for proposal at 3. Hash now 0x77291fb4f2662a989c9f0d68d074642c381c286860dbfb0e3b69bc7b0085f2d4, previously 0xc7a4ff6faf9f246961c305370908b42e858751f8fc652ec4f5faaf02200f04ea.    
2024-01-29 21:34:45 ✨ Imported #3 (0x7729…f2d4)
```
</details>

UPDATE: Docker Compose is working now:

```sh
 => => exporting layers                                                                                                                                 53.2s 
 => => writing image sha256:554a8da46400b40c4ace962e1a6114d5daf891cfefb32dbfe7eb35c10580c623                                                             0.0s 
 => => naming to docker.io/library/pocs-node                                                                                                             0.0s 
[+] Running 3/3                                                                                                                                               
 ✔ Network pocs_default          Created                                                                                                                 0.1s 
 ✔ Volume "pocs_substrate-data"  Created                                                                                                                 0.0s 
 ✔ Container pocs                Started
```

~~`docker-compose up --build -d` fails:~~

```sh
Creating pocs ... error

ERROR: for pocs  Cannot start service pocs-node: failed to create task for container: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: exec: "--dev": executable file not found in $PATH: unknown

ERROR: for pocs-node  Cannot start service pocs-node: failed to create task for container: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: exec: "--dev": executable file not found in $PATH: unknown
ERROR: Encountered errors while bringing up the project.
```

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

Full `cargo +nightly clippy` output:

<details>
  <summary>Full output</summary>

```rust
warning: using tabs in doc comments is not recommended
  --> pallets/contracts/src/schedule.rs:44:5
   |
44 | ///                 globals: 3,
   |     ^^^^^^^^ help: consider using four spaces per tab
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#tabs_in_doc_comments
   = note: `#[warn(clippy::tabs_in_doc_comments)]` on by default

warning: using tabs in doc comments is not recommended
  --> pallets/contracts/src/schedule.rs:45:5
   |
45 | ///                 parameters: 3,
   |     ^^^^^^^^ help: consider using four spaces per tab
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#tabs_in_doc_comments

warning: using tabs in doc comments is not recommended
  --> pallets/contracts/src/schedule.rs:46:5
   |
46 | ///                 memory_pages: 16,
   |     ^^^^^^^^ help: consider using four spaces per tab
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#tabs_in_doc_comments

warning: using tabs in doc comments is not recommended
  --> pallets/contracts/src/schedule.rs:47:5
   |
47 | ///                 table_size: 3,
   |     ^^^^^^^^ help: consider using four spaces per tab
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#tabs_in_doc_comments

warning: using tabs in doc comments is not recommended
  --> pallets/contracts/src/schedule.rs:48:5
   |
48 | ///                 br_table_size: 3,
   |     ^^^^^^^^ help: consider using four spaces per tab
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#tabs_in_doc_comments

warning: using tabs in doc comments is not recommended
  --> pallets/contracts/src/schedule.rs:49:5
   |
49 | ///                 .. Default::default()
   |     ^^^^^^^^ help: consider using four spaces per tab
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#tabs_in_doc_comments

warning: using tabs in doc comments is not recommended
  --> pallets/contracts/src/schedule.rs:50:5
   |
50 | ///             },
   |     ^^^^ help: consider using four spaces per tab
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#tabs_in_doc_comments

warning: using tabs in doc comments is not recommended
  --> pallets/contracts/src/schedule.rs:54:5
   |
54 | ///             .. Default::default()
   |     ^^^^ help: consider using four spaces per tab
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#tabs_in_doc_comments

warning: unused imports: `CallFlags`, `ReturnCode`
  --> pallets/contracts/src/wasm/mod.rs:31:52
   |
31 |     AllowDeprecatedInterface, AllowUnstableInterface, CallFlags, Environment, ReturnCode, Runtime,
   |                                                       ^^^^^^^^^               ^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: using tabs in doc comments is not recommended
   --> pallets/contracts/src/migration.rs:186:6
    |
186 |     ///     let _ = <(NoopMigration<1>, NoopMigration<3>)>::VERSION_RANGE;
    |         ^^^^ help: consider using four spaces per tab
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#tabs_in_doc_comments

warning: using tabs in doc comments is not recommended
   --> pallets/contracts/src/migration.rs:191:6
    |
191 |     ///     let _ = <(NoopMigration<1>, NoopMigration<2>)>::VERSION_RANGE;
    |         ^^^^ help: consider using four spaces per tab
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#tabs_in_doc_comments

    Checking pallet-transaction-payment-rpc v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
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

warning: this returns a `Result<_, ()>`
   --> pallets/contracts/src/exec.rs:286:2
    |
286 |     fn ecdsa_recover(&self, signature: &[u8; 65], message_hash: &[u8; 32]) -> Result<[u8; 33], ()>;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: use a custom `Error` type instead
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#result_unit_err
    = note: `#[warn(clippy::result_unit_err)]` on by default

warning: this returns a `Result<_, ()>`
   --> pallets/contracts/src/exec.rs:292:2
    |
292 |     fn ecdsa_to_eth_address(&self, pk: &[u8; 33]) -> Result<[u8; 20], ()>;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: use a custom `Error` type instead
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#result_unit_err

warning: this expression creates a reference which is immediately dereferenced by the compiler
   --> pallets/contracts/src/exec.rs:526:56
    |
526 |             CachedContract::Terminated(deposit_account) => Some(&deposit_account),
    |                                                                 ^^^^^^^^^^^^^^^^ help: change this to: `deposit_account`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow
    = note: `#[warn(clippy::needless_borrow)]` on by default

warning: the borrowed expression implements the required traits
   --> pallets/contracts/src/exec.rs:592:44
    |
592 |             let contract = <ContractInfoOf<T>>::get(&account_id);
    |                                                     ^^^^^^^^^^^ help: change this to: `account_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args
    = note: `#[warn(clippy::needless_borrows_for_generic_args)]` on by default

warning: this function has too many arguments (9/7)
   --> pallets/contracts/src/exec.rs:629:2
    |
629 | /     pub fn run_call(
630 | |         origin: Origin<T>,
631 | |         dest: T::AccountId,
632 | |         gas_meter: &'a mut GasMeter<T>,
...   |
638 | |         determinism: Determinism,
639 | |     ) -> Result<ExecReturnValue, ExecError> {
    | |___________________________________________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments
    = note: `#[warn(clippy::too_many_arguments)]` on by default

warning: this function has too many arguments (9/7)
   --> pallets/contracts/src/exec.rs:663:2
    |
663 | /     pub fn run_instantiate(
664 | |         origin: T::AccountId,
665 | |         executable: E,
666 | |         gas_meter: &'a mut GasMeter<T>,
...   |
672 | |         debug_message: Option<&'a mut DebugBufferVec<T>>,
673 | |     ) -> Result<(T::AccountId, ExecReturnValue), ExecError> {
    | |___________________________________________________________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments

warning: this function has too many arguments (8/7)
   --> pallets/contracts/src/exec.rs:695:2
    |
695 | /     fn new(
696 | |         args: FrameArgs<T, E>,
697 | |         origin: Origin<T>,
698 | |         gas_meter: &'a mut GasMeter<T>,
...   |
703 | |         determinism: Determinism,
704 | |     ) -> Result<(Self, E), ExecError> {
    | |_____________________________________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments

warning: this expression creates a reference which is immediately dereferenced by the compiler
   --> pallets/contracts/src/exec.rs:767:7
    |
767 |                         &executable.code_hash(),
    |                         ^^^^^^^^^^^^^^^^^^^^^^^ help: change this to: `executable.code_hash()`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: this let-binding has unit value
   --> pallets/contracts/src/exec.rs:944:6
    |
944 | /            let _update_scarcity_info_event = Contracts::<T>::deposit_event(
945 | |                vec![T::Hashing::hash_of(&account_id.clone())],
946 | |                Event::ContractStakeinfoevnet {
947 | |                    contract_address: account_id.clone(),
...   |
950 | |                },
951 | |            );
    | |_____________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_unit_value
    = note: `#[warn(clippy::let_unit_value)]` on by default
help: omit the `let` binding
    |
944 ~            Contracts::<T>::deposit_event(
945 +                vec![T::Hashing::hash_of(&account_id.clone())],
946 +                Event::ContractStakeinfoevnet {
947 +                    contract_address: account_id.clone(),
948 +                    reputation: new_scarcity_info.reputation,
949 +                    recent_blockheight: new_scarcity_info.recent_blockheight,
950 +                },
951 +            );
    |

warning: called `map(f)` on an `Option` value where `f` is a closure that returns the unit type `()`
   --> pallets/contracts/src/exec.rs:999:4
    |
999 |             self.nonce.as_mut().map(|c| *c = c.wrapping_sub(1));
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-
    |             |
    |             help: try: `if let Some(c) = self.nonce.as_mut() { ... }`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#option_map_unit_fn
    = note: `#[warn(clippy::option_map_unit_fn)]` on by default

warning: useless conversion to the same type: `&exec::Key<T>`
    --> pallets/contracts/src/exec.rs:1306:45
     |
1306 |         self.top_frame_mut().contract_info().size(key.into())
     |                                                   ^^^^^^^^^^ help: consider removing `.into()`: `key`
     |
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#useless_conversion
     = note: `#[warn(clippy::useless_conversion)]` on by default

warning: useless conversion to the same type: `&exec::Key<T>`
    --> pallets/contracts/src/exec.rs:1317:4
     |
1317 |             key.into(),
     |             ^^^^^^^^^^ help: consider removing `.into()`: `key`
     |
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#useless_conversion

warning: the borrowed expression implements the required traits
    --> pallets/contracts/src/exec.rs:1340:37
     |
1340 |         ContractInfoOf::<T>::contains_key(&address)
     |                                           ^^^^^^^^ help: change this to: `address`
     |
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: the borrowed expression implements the required traits
    --> pallets/contracts/src/exec.rs:1344:28
     |
1344 |         <ContractInfoOf<T>>::get(&address).map(|contract| contract.code_hash)
     |                                  ^^^^^^^^ help: change this to: `address`
     |
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: unnecessary closure used to substitute value for `Option::None`
   --> pallets/contracts/src/gas.rs:124:19
    |
124 |         self.gas_left = self.gas_left.checked_sub(&amount).ok_or_else(|| <Error<T>>::OutOfGas)?;
    |                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-----------------------------------
    |                                                            |
    |                                                            help: use `ok_or(..)` instead: `ok_or(<Error<T>>::OutOfGas)`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unnecessary_lazy_evaluations
    = note: `#[warn(clippy::unnecessary_lazy_evaluations)]` on by default

warning: unnecessary closure used to substitute value for `Option::None`
   --> pallets/contracts/src/gas.rs:174:19
    |
174 |         self.gas_left = self.gas_left.checked_sub(&amount).ok_or_else(|| Error::<T>::OutOfGas)?;
    |                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-----------------------------------
    |                                                            |
    |                                                            help: use `ok_or(..)` instead: `ok_or(Error::<T>::OutOfGas)`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unnecessary_lazy_evaluations

warning: unnecessary closure used to substitute value for `Option::None`
   --> pallets/contracts/src/gas.rs:205:24
    |
205 |               let ref_time_left = self
    |  _________________________________^
206 | |                 .gas_left
207 | |                 .ref_time()
208 | |                 .checked_sub(reftime_consumed)
209 | |                 .ok_or_else(|| Error::<T>::OutOfGas)?;
    | |__________________----------------------------------^
    |                    |
    |                    help: use `ok_or(..)` instead: `ok_or(Error::<T>::OutOfGas)`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unnecessary_lazy_evaluations

warning: unneeded `return` statement
   --> pallets/contracts/src/storage/meter.rs:360:3
    |
360 | /         return match origin {
361 | |             Origin::Root => Ok(Self {
362 | |                 limit: limit.unwrap_or(T::DefaultDepositLimit::get()),
363 | |                 ..Default::default()
...   |
368 | |             },
369 | |         }
    | |_________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_return
    = note: `#[warn(clippy::needless_return)]` on by default
help: remove `return`
    |
360 ~         match origin {
361 ~             Origin::Root => Ok(Self {
362 ~                 limit: limit.unwrap_or(T::DefaultDepositLimit::get()),
363 ~                 ..Default::default()
364 ~             }),
365 ~             Origin::Signed(o) => {
366 ~                 let limit = E::check_limit(o, limit, min_leftover)?;
367 ~                 Ok(Self { limit, ..Default::default() })
368 ~             },
369 ~         }
    |

warning: this expression creates a reference which is immediately dereferenced by the compiler
   --> pallets/contracts/src/storage/meter.rs:543:33
    |
543 |                     System::<T>::dec_consumers(&deposit_account);
    |                                                ^^^^^^^^^^^^^^^^ help: change this to: `deposit_account`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: type parameter `T` goes unused in function definition
  --> pallets/contracts/src/wasm/prepare.rs:56:12
   |
56 |     pub fn new<T>(
   |               ^^^ help: consider removing the parameter
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#extra_unused_type_parameters
   = note: `#[warn(clippy::extra_unused_type_parameters)]` on by default

warning: this expression creates a reference which is immediately dereferenced by the compiler
   --> pallets/contracts/src/wasm/prepare.rs:253:3
    |
253 |         &code,
    |         ^^^^^ help: change this to: `code`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: `Box::new(_)` of default value
   --> pallets/contracts/src/wasm/runtime.rs:469:26
    |
469 |             chain_extension: Some(Box::new(Default::default())),
    |                                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: try: `Box::default()`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#box_default
    = note: `#[warn(clippy::box_default)]` on by default

warning: methods with the following characteristics: (`to_*` and `self` type is not `Copy`) usually take `self` by reference
   --> pallets/contracts/src/wasm/runtime.rs:482:29
    |
482 |     pub fn to_execution_result(self, sandbox_result: Result<(), wasmi::Error>) -> ExecResult {
    |                                ^^^^
    |
    = help: consider choosing a less ambiguous name
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#wrong_self_convention
    = note: `#[warn(clippy::wrong_self_convention)]` on by default

warning: unnecessary closure used to substitute value for `Option::None`
   --> pallets/contracts/src/wasm/runtime.rs:582:4
    |
582 |             memory.get(ptr..ptr + buf.len()).ok_or_else(|| Error::<E::T>::OutOfBounds)?;
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-----------------------------------------
    |                                              |
    |                                              help: use `ok_or(..)` instead: `ok_or(Error::<E::T>::OutOfBounds)`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unnecessary_lazy_evaluations

warning: unnecessary closure used to substitute value for `Option::None`
   --> pallets/contracts/src/wasm/runtime.rs:599:27
    |
599 |           let mut bound_checked = memory
    |  _________________________________^
600 | |             .get(ptr..ptr + D::max_encoded_len() as usize)
601 | |             .ok_or_else(|| Error::<E::T>::OutOfBounds)?;
    | |______________----------------------------------------^
    |                |
    |                help: use `ok_or(..)` instead: `ok_or(Error::<E::T>::OutOfBounds)`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unnecessary_lazy_evaluations

warning: casting to the same type is unnecessary (`usize` -> `usize`)
   --> pallets/contracts/src/wasm/runtime.rs:600:20
    |
600 |             .get(ptr..ptr + D::max_encoded_len() as usize)
    |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: try: `D::max_encoded_len()`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unnecessary_cast
    = note: `#[warn(clippy::unnecessary_cast)]` on by default

warning: unnecessary closure used to substitute value for `Option::None`
   --> pallets/contracts/src/wasm/runtime.rs:626:4
    |
626 |             memory.get(ptr..ptr + len as usize).ok_or_else(|| Error::<E::T>::OutOfBounds)?;
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-----------------------------------------
    |                                                 |
    |                                                 help: use `ok_or(..)` instead: `ok_or(Error::<E::T>::OutOfBounds)`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unnecessary_lazy_evaluations

warning: unnecessary closure used to substitute value for `Option::None`
   --> pallets/contracts/src/wasm/runtime.rs:692:4
    |
692 |             memory.get_mut(ptr..ptr + buf.len()).ok_or_else(|| Error::<E::T>::OutOfBounds)?;
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-----------------------------------------
    |                                                  |
    |                                                  help: use `ok_or(..)` instead: `ok_or(Error::<E::T>::OutOfBounds)`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unnecessary_lazy_evaluations

warning: this function has too many arguments (8/7)
   --> pallets/contracts/src/wasm/runtime.rs:866:2
    |
866 | /     fn call(
867 | |         &mut self,
868 | |         memory: &mut [u8],
869 | |         flags: CallFlags,
...   |
874 | |         output_len_ptr: u32,
875 | |     ) -> Result<ReturnCode, TrapReason> {
    | |_______________________________________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments

warning: this function has too many arguments (14/7)
   --> pallets/contracts/src/wasm/runtime.rs:944:2
    |
944 | /     fn instantiate(
945 | |         &mut self,
946 | |         memory: &mut [u8],
947 | |         code_hash_ptr: u32,
...   |
958 | |         salt_len: u32,
959 | |     ) -> Result<ReturnCode, TrapReason> {
    | |_______________________________________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments

warning: matching on `Some` with `ok()` is redundant
    --> pallets/contracts/src/wasm/runtime.rs:2557:4
     |
2557 |             if let Some(msg) = core::str::from_utf8(&data).ok() {
     |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     |
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#match_result_ok
     = note: `#[warn(clippy::match_result_ok)]` on by default
help: consider matching on `Ok(msg)` and removing the call to `ok` instead
     |
2557 |             if let Ok(msg) = core::str::from_utf8(&data) {
     |             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

warning: this expression creates a reference which is immediately dereferenced by the compiler
   --> pallets/contracts/src/wasm/mod.rs:186:41
    |
186 |         let contract = LoadedModule::new::<T>(&code, determinism, Some(stack_limits))?;
    |                                               ^^^^^ help: change this to: `code`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: the borrowed expression implements the required traits
   --> pallets/contracts/src/wasm/mod.rs:254:38
    |
254 |         <CodeInfoOf<T>>::try_mutate_exists(&code_hash, |existing| {
    |                                            ^^^^^^^^^^ help: change this to: `code_hash`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: the borrowed expression implements the required traits
   --> pallets/contracts/src/wasm/mod.rs:260:31
    |
260 |                 <PristineCode<T>>::remove(&code_hash);
    |                                           ^^^^^^^^^^ help: change this to: `code_hash`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: use of `expect` followed by a function call
   --> pallets/contracts/src/migration/v12.rs:135:6
    |
135 |                 .expect(format!("No PrefabWasmModule found for code_hash: {:?}", hash).as_str());
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: try: `unwrap_or_else(|| panic!("No PrefabWasmModule found for code_hash: {:?}", hash))`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#expect_fun_call
    = note: `#[warn(clippy::expect_fun_call)]` on by default

warning: methods called `new` usually return `Self`
   --> pallets/contracts/src/migration.rs:196:2
    |
196 |     fn new(version: StorageVersion) -> Cursor;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#new_ret_no_self
    = note: `#[warn(clippy::new_ret_no_self)]` on by default

warning: useless conversion to the same type: `frame_support::dispatch::Weight`
   --> pallets/contracts/src/lib.rs:649:16
    |
649 |                 gas_limit: gas_limit.into(),
    |                            ^^^^^^^^^^^^^^^^ help: consider removing `.into()`: `gas_limit`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#useless_conversion

warning: this let-binding has unit value
   --> pallets/contracts/src/lib.rs:745:4
    |
745 | /             let _contractinfoevent = Self::deposit_event(
746 | |                 vec![T::Hashing::hash_of(&_address.clone())],
747 | |                 Event::ContractStakeinfoevnet {
748 | |                     contract_address: _address.clone(),
...   |
751 | |                 },
752 | |             );
    | |______________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_unit_value
help: omit the `let` binding
    |
745 ~             Self::deposit_event(
746 ~                 vec![T::Hashing::hash_of(&_address.clone())],
747 ~                 Event::ContractStakeinfoevnet {
748 ~                     contract_address: _address.clone(),
749 ~                     reputation: contract_stake_info.reputation,
750 ~                     recent_blockheight: contract_stake_info.recent_blockheight,
751 ~                 },
752 ~             );
    |

warning: this let-binding has unit value
   --> pallets/contracts/src/lib.rs:753:4
    |
753 | /             let _accountinfoevent = Self::deposit_event(
754 | |                 vec![T::Hashing::hash_of(&_address.clone())],
755 | |                 Event::AccountStakeinfoevnet {
756 | |                     contract_address: _address.clone(),
...   |
760 | |                 },
761 | |             );
    | |______________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_unit_value
help: omit the `let` binding
    |
753 ~             Self::deposit_event(
754 ~                 vec![T::Hashing::hash_of(&_address.clone())],
755 ~                 Event::AccountStakeinfoevnet {
756 ~                     contract_address: _address.clone(),
757 ~                     owner: account_stake_info.owner,
758 ~                     delegate_to: account_stake_info.delegate_to,
759 ~                     delegate_at: account_stake_info.delegate_at,
760 ~                 },
761 ~             );
    |

warning: this let-binding has unit value
   --> pallets/contracts/src/lib.rs:802:5
    |
802 | /                 let _eventemit = Self::deposit_event(
803 | |                     vec![T::Hashing::hash_of(&contract_address.clone())],
804 | |                     Event::AccountStakeinfoevnet {
805 | |                         contract_address: contract_address.clone(),
...   |
809 | |                     },
810 | |                 );
    | |__________________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_unit_value
help: omit the `let` binding
    |
802 ~                 Self::deposit_event(
803 ~                     vec![T::Hashing::hash_of(&contract_address.clone())],
804 ~                     Event::AccountStakeinfoevnet {
805 ~                         contract_address: contract_address.clone(),
806 ~                         owner: new_account_stake_info.owner,
807 ~                         delegate_to: new_account_stake_info.delegate_to,
808 ~                         delegate_at: new_account_stake_info.delegate_at,
809 ~                     },
810 ~                 );
    |

warning: this let-binding has unit value
   --> pallets/contracts/src/lib.rs:811:5
    |
811 | /                 let _contractinfoevent = Self::deposit_event(
812 | |                     vec![T::Hashing::hash_of(&contract_address.clone())],
813 | |                     Event::ContractStakeinfoevnet {
814 | |                         contract_address: contract_address.clone(),
...   |
817 | |                     },
818 | |                 );
    | |__________________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_unit_value
help: omit the `let` binding
    |
811 ~                 Self::deposit_event(
812 ~                     vec![T::Hashing::hash_of(&contract_address.clone())],
813 ~                     Event::ContractStakeinfoevnet {
814 ~                         contract_address: contract_address.clone(),
815 ~                         reputation: new_contract_stake_info.reputation,
816 ~                         recent_blockheight: new_contract_stake_info.recent_blockheight,
817 ~                     },
818 ~                 );
    |

warning: useless conversion to the same type: `sp_runtime::DispatchError`
    --> pallets/contracts/src/lib.rs:1266:36
     |
1266 |                 result: Err(ExecError { error: e.into(), origin: ErrorOrigin::Caller }),
     |                                                ^^^^^^^^ help: consider removing `.into()`: `e`
     |
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#useless_conversion

warning: this function has too many arguments (9/7)
    --> pallets/contracts/src/lib.rs:1435:2
     |
1435 | /     pub fn bare_call(
1436 | |         origin: T::AccountId,
1437 | |         dest: T::AccountId,
1438 | |         value: BalanceOf<T>,
...    |
1444 | |         determinism: Determinism,
1445 | |     ) -> ContractExecResult<BalanceOf<T>, EventRecordOf<T>> {
     | |___________________________________________________________^
     |
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments

warning: this function has too many arguments (9/7)
    --> pallets/contracts/src/lib.rs:1493:2
     |
1493 | /     pub fn bare_instantiate(
1494 | |         origin: T::AccountId,
1495 | |         value: BalanceOf<T>,
1496 | |         gas_limit: Weight,
...    |
1502 | |         collect_events: CollectEvents,
1503 | |     ) -> ContractInstantiateResult<T::AccountId, BalanceOf<T>, EventRecordOf<T>> {
     | |________________________________________________________________________________^
     |
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments

warning: useless conversion to the same type: `<<T as pallet::Config>::ContractCurrency as frame_support::traits::Currency<<T as frame_system::Config>::AccountId>>::Balance`
    --> pallets/contracts/src/lib.rs:1544:53
     |
1544 |                     storage_deposit_limit.map(|l| l.saturating_sub(deposit.into()));
     |                                                                    ^^^^^^^^^^^^^^ help: consider removing `.into()`: `deposit`
     |
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#useless_conversion

warning: useless conversion to the same type: `exec::Key<T>`
    --> pallets/contracts/src/lib.rs:1622:5
     |
1622 |               &Key::<T>::try_from_var(key)
     |  ______________^
1623 | |                 .map_err(|_| ContractAccessError::KeyDecodingFailed)?
1624 | |                 .into(),
     | |_______________________^
     |
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#useless_conversion
help: consider removing `.into()`
     |
1622 ~             &Key::<T>::try_from_var(key)
1623 ~                 .map_err(|_| ContractAccessError::KeyDecodingFailed)?,
     |

warning: this function has too many arguments (8/7)
    --> pallets/contracts/src/lib.rs:1680:1
     |
1680 | / sp_api::decl_runtime_apis! {
1681 | |     /// The API used to dry-run contract interactions.
1682 | |     #[api_version(2)]
1683 | |     pub trait ContractsApi<AccountId, Balance, BlockNumber, Hash, EventRecord> where
...    |
1734 | |     }
1735 | | }
     | |_^
     |
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments
     = note: this warning originates in the macro `sp_api::decl_runtime_apis` (in Nightly builds, run with -Z macro-backtrace for more info)

warning: this function has too many arguments (9/7)
    --> pallets/contracts/src/lib.rs:1680:1
     |
1680 | / sp_api::decl_runtime_apis! {
1681 | |     /// The API used to dry-run contract interactions.
1682 | |     #[api_version(2)]
1683 | |     pub trait ContractsApi<AccountId, Balance, BlockNumber, Hash, EventRecord> where
...    |
1734 | |     }
1735 | | }
     | |_^
     |
     = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments
     = note: this warning originates in the macro `sp_api::decl_runtime_apis` (in Nightly builds, run with -Z macro-backtrace for more info)

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

warning: `pallet-contracts` (lib) generated 63 warnings (run `cargo clippy --fix --lib -p pallet-contracts` to apply 36 suggestions)
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

warning: this operation has no effect
   --> runtime/src/lib.rs:245:39
    |
245 |     pub const ApprovalDeposit: Balance = 1 * DOLLARS;
    |                                          ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op
    = note: `#[warn(clippy::identity_op)]` on by default

warning: this operation has no effect
   --> runtime/src/lib.rs:248:46
    |
248 |     pub const MetadataDepositPerByte: Balance = 1 * DOLLARS;
    |                                                 ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:332:42
    |
332 |     pub const ExistentialDeposit: Balance = 1 * DOLLARS;
    |                                             ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:380:40
    |
380 |     pub const SignedRewardBase: Balance = 1 * DOLLARS;
    |                                           ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:381:41
    |
381 |     pub const SignedDepositBase: Balance = 1 * DOLLARS;
    |                                            ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: this operation has no effect
   --> runtime/src/lib.rs:382:41
    |
382 |     pub const SignedDepositByte: Balance = 1 * CENTS;
    |                                            ^^^^^^^^^ help: consider reducing it to: `CENTS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op

warning: `pocs-runtime` (lib) generated 11 warnings (run `cargo clippy --fix --lib -p pocs-runtime` to apply 9 suggestions)
    Checking rocksdb v0.21.0
    Checking kvdb-rocksdb v0.19.0
    Checking sc-client-db v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
    Checking sc-service v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
    Checking sc-storage-monitor v0.1.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
    Checking sc-cli v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
    Checking frame-benchmarking-cli v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
warning: warn(unused_crate_dependencies) is ignored unless specified at crate level
  --> node/src/rpc.rs:32:9
   |
32 | #![warn(unused_crate_dependencies)]
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_attributes)]` on by default

warning: useless conversion to the same type: `rand::seq::SliceChooseIter<'_, [(sp_runtime::AccountId32, sp_runtime::AccountId32, sp_consensus_babe::app::Public, sp_consensus_grandpa::app::Public, pallet_im_online::sr25519::app_sr25519::Public)], (sp_runtime::AccountId32, sp_runtime::AccountId32, sp_consensus_babe::app::Public, sp_consensus_grandpa::app::Public, pallet_im_online::sr25519::app_sr25519::Public)>`
   --> node/src/chain_spec.rs:296:22
    |
296 |               let nominations = initial_authorities
    |  _______________________________^
297 | |                 .as_slice()
298 | |                 .choose_multiple(&mut rng, count)
299 | |                 .into_iter()
    | |____________________________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#useless_conversion
    = note: `#[warn(clippy::useless_conversion)]` on by default
help: consider removing `.into_iter()`
    |
296 ~             let nominations = initial_authorities
297 ~                 .as_slice()
298 ~                 .choose_multiple(&mut rng, count)
    |

warning: this operation has no effect
   --> node/src/chain_spec.rs:344:19
    |
344 |             min_join_bond: 1 * DOLLARS,
    |                            ^^^^^^^^^^^ help: consider reducing it to: `DOLLARS`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#identity_op
    = note: `#[warn(clippy::identity_op)]` on by default

warning: the borrowed expression implements the required traits
  --> node/src/service.rs:94:36
   |
94 |             let _ = std::fs::create_dir_all(&database_path);
   |                                             ^^^^^^^^^^^^^^ help: change this to: `database_path`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args
   = note: `#[warn(clippy::needless_borrows_for_generic_args)]` on by default

warning: very complex type used. Consider factoring parts into `type` definitions
   --> node/src/service.rs:318:6
    |
318 |   ) -> Result<
    |  ______^
319 | |     sc_service::PartialComponents<
320 | |         FullClient,
321 | |         FullBackend,
...   |
340 | |     ServiceError,
341 | | > {
    | |_^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#type_complexity
    = note: `#[warn(clippy::type_complexity)]` on by default

warning: this expression creates a reference which is immediately dereferenced by the compiler
   --> node/src/service.rs:353:57
    |
353 |     let executor = sc_service::new_native_or_wasm_executor(&config);
    |                                                            ^^^^^^^ help: change this to: `config`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow
    = note: `#[warn(clippy::needless_borrow)]` on by default

warning: large size difference between variants
  --> node/src/cli.rs:26:1
   |
26 | / pub enum Subcommand {
27 | |     /// Key management cli utilities
28 | |     #[command(subcommand)]
29 | |     Key(sc_cli::KeySubcommand),
   | |     -------------------------- the second-largest variant contains at least 264 bytes
...  |
54 | |     Benchmark(frame_benchmarking_cli::BenchmarkCmd),
   | |     ----------------------------------------------- the largest variant contains at least 488 bytes
...  |
65 | |     ChainInfo(sc_cli::ChainInfoCmd),
66 | | }
   | |_^ the entire enum is at least 488 bytes
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#large_enum_variant
   = note: `#[warn(clippy::large_enum_variant)]` on by default
help: consider boxing the large fields to reduce the total size of the enum
   |
54 |     Benchmark(Box<frame_benchmarking_cli::BenchmarkCmd>),
   |               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

warning: `pocs` (lib) generated 7 warnings (run `cargo clippy --fix --lib -p pocs` to apply 4 suggestions)
warning: `pocs` (bin "pocs") generated 7 warnings (7 duplicates)
```
</details>

## Node

Node runs manually with `./target/release/pocs --dev`, but with the following warnings:

<details>
  <summary>Output</summary>

```rust
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
   Compiling wasm-opt v0.112.0
   Compiling substrate-wasm-builder v5.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling pocs-runtime v4.0.0-dev (/Users/keeganquigley/pocs/runtime)
   Compiling rocksdb v0.21.0
   Compiling kvdb-rocksdb v0.19.0
   Compiling sc-client-db v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-service v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-storage-monitor v0.1.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-cli v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
warning: unused imports: `EnsureRootWithSuccess`, `EnsureSignedBy`, `EnsureWithSuccess`
  --> runtime/src/lib.rs:22:69
   |
22 | ...eights},EnsureRoot, EnsureRootWithSuccess, EnsureSigned, EnsureSignedBy, EnsureWithSuccess};
   |                        ^^^^^^^^^^^^^^^^^^^^^                ^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^
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

warning: warn(unused_crate_dependencies) is ignored unless specified at crate level
  --> node/src/rpc.rs:32:9
   |
32 | #![warn(unused_crate_dependencies)]
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_attributes)]` on by default

warning: `pocs-runtime` (lib) generated 5 warnings (run `cargo fix --lib -p pocs-runtime` to apply 3 suggestions)
warning: `pocs` (lib) generated 1 warning
warning: `pocs` (bin "pocs") generated 1 warning (1 duplicate)
    Finished release [optimized] target(s) in 7m 15s
```
</details>
