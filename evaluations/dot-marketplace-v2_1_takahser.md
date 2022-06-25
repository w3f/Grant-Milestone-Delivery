# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace-phase2.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/WowLabz/tasking_backend/blob/90c698ae1c3774459374901cb78aeed66ffb0fd8/LICENSE) | - |
| 0b | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/WowLabz/dot-marketplace-v2/blob/3565c39e44c662c5c2335eb39d63e034bbf4385b/README.md), [Tasking Pallet](https://github.com/WowLabz/dot-marketplace-v2/blob/3565c39e44c662c5c2335eb39d63e034bbf4385b/pallets/pallet-tasking/src/lib.rs), [Chat Pallet](https://github.com/WowLabz/dot-marketplace-v2/blob/3565c39e44c662c5c2335eb39d63e034bbf4385b/pallets/pallet-chat/src/lib.rs) | Inline documentation exists, tutorial is located in the README |
| 0c | Testing Guide | <ul><li>[ ] </li></ul> | [Chat Pallet Tests](https://github.com/WowLabz/dot-marketplace-v2/blob/3565c39e44c662c5c2335eb39d63e034bbf4385b/pallets/pallet-chat/src/tests.rs), [Tasking Pallet Tests](https://github.com/WowLabz/dot-marketplace-v2/blob/3565c39e44c662c5c2335eb39d63e034bbf4385b/pallets/pallet-tasking/src/tests.rs) | See [Testing Guide Feedback](#testing-guide-feedback) |
| 0d | Docker Image | <ul><li>[ ] </li></ul> | [docker-compose file](https://github.com/WowLabz/dot-marketplace-v2/blob/3565c39e44c662c5c2335eb39d63e034bbf4385b/docker-compose.yml) | See [Docker Feedback](#docker-feedback) |
| 1 | Migrate [Tasking Pallet](https://github.com/WowLabz/tasking_backend/blob/11ff1dfe620016d2943adc7b7a0ba60f2d6413cd/pallets/pallet-tasking/src/lib.rs) from FRAME v1 to FRAME v2 | <ul><li>[x] </li></ul> | [Tasking Pallet](https://github.com/WowLabz/dot-marketplace-v2/tree/3565c39e44c662c5c2335eb39d63e034bbf4385b/pallets/pallet-tasking/src) | - |
| 2 | Chat Pallet | <ul><li>[x] </li></ul> | [Chat Pallet](https://github.com/WowLabz/dot-marketplace-v2/tree/3565c39e44c662c5c2335eb39d63e034bbf4385b/pallets/pallet-chat/src) | - |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

- Build succeeds, however, there are some warnings that should be easy to fix:

    ```bash
        $ cargo build --release
        warning: unused imports: `EncodeLike`, `Randomness`, `log`, `sp_runtime::traits::Hash`, `transactional`
        --> pallets/pallet-tasking/src/lib.rs:20:3
        |
        20 |         log,
        |         ^^^
        21 |         sp_runtime::traits::Hash,
        |         ^^^^^^^^^^^^^^^^^^^^^^^^
        22 |         traits::{ 
        23 |             Randomness, 
        |             ^^^^^^^^^^
        ...
        30 |         dispatch::{ EncodeLike },
        |                     ^^^^^^^^^^
        31 |         transactional
        |         ^^^^^^^^^^^^^
        |
        = note: `#[warn(unused_imports)]` on by default

        warning: type alias is never used: `AccountOf`
        --> pallets/pallet-tasking/src/lib.rs:36:2
        |
        36 |     type AccountOf<T> = <T as frame_system::Config>::AccountId;
        |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        |
        = note: `#[warn(dead_code)]` on by default

        warning: type alias is never used: `AccountId`
        --> pallets/pallet-tasking/src/lib.rs:40:2
        |
        40 |     type AccountId<T> = <T as frame_system::Config>::AccountId;
        |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

        warning: type alias is never used: `Balance`
        --> pallets/pallet-tasking/src/lib.rs:41:2
        |
        41 |     type Balance<T> = <<T as Config>::Currency as Currency<<T as frame_system::Config>::AccountId>>::Balance;
        |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

        warning: `pallet-tasking` (lib) generated 4 warnings
        warning: unused imports: `EncodeLike`, `LockIdentifier`, `Randomness`, `WithdrawReasons`, `log`, `sp_runtime::traits::Hash`, `tokens::ExistenceRequirement`, `transactional`
        --> pallets/pallet-chat/src/lib.rs:19:3
        |
        19 |         log,
        |         ^^^
        20 |         sp_runtime::traits::Hash,
        |         ^^^^^^^^^^^^^^^^^^^^^^^^
        21 |         traits::{ 
        22 |             Randomness, 
        |             ^^^^^^^^^^
        23 |             Currency, 
        24 |             tokens::ExistenceRequirement, 
        |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        25 |             LockIdentifier, 
        |             ^^^^^^^^^^^^^^
        26 |             WithdrawReasons, 
        |             ^^^^^^^^^^^^^^^
        ...
        29 |         dispatch::{ EncodeLike },
        |                     ^^^^^^^^^^
        30 |         transactional
        |         ^^^^^^^^^^^^^
        |
        = note: `#[warn(unused_imports)]` on by default

        warning: type alias is never used: `AccountId`
        --> pallets/pallet-chat/src/lib.rs:34:2
        |
        34 |     type AccountId<T> = <T as frame_system::Config>::AccountId;
        |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        |
        = note: `#[warn(dead_code)]` on by default

        warning: type alias is never used: `Balance`
        --> pallets/pallet-chat/src/lib.rs:35:2
        |
        35 |     type Balance<T> = <<T as Config>::Currency as Currency<<T as frame_system::Config>::AccountId>>::Balance;
        |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

        warning: associated function is never used: `new`
        --> pallets/pallet-chat/src/lib.rs:49:6
        |
        49 |         fn new(self) -> Self {
        |            ^^^

        warning: `pallet-chat` (lib) generated 4 warnings
            Finished release [optimized] target(s) in 0.30s
    ```

- Node can be run:

    ```bash
    $ cargo run --release -- --dev --tmp
            Finished release [optimized] target(s) in 3m 14s
        Running `target/release/node-template --dev --tmp`
    2022-06-20 11:06:12 Running in --dev mode, RPC CORS has been disabled.    
    2022-06-20 11:06:12 Substrate Node    
    2022-06-20 11:06:12 ✌️  version 4.0.0-dev-3565c39-x86_64-linux-gnu    
    2022-06-20 11:06:12 ❤️  by Substrate DevHub <https://github.com/substrate-developer-hub>, 2017-2022    
    2022-06-20 11:06:12 📋 Chain specification: Development    
    2022-06-20 11:06:12 🏷 Node name: receptive-tongue-2674    
    2022-06-20 11:06:12 👤 Role: AUTHORITY    
    2022-06-20 11:06:12 💾 Database: RocksDb at /tmp/substratejasTQT/chains/dev/db/full    
    2022-06-20 11:06:12 ⛓  Native runtime: node-template-100 (node-template-1.tx1.au1)    
    2022-06-20 11:06:12 🔨 Initializing Genesis block/state (state: 0xd786…d5b8, header-hash: 0xa5d0…11e6)    
    2022-06-20 11:06:12 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
    2022-06-20 11:06:12 ⏱  Loaded block-time = 6s from block 0xa5d056e1cc528e8fd954e44efe747306e88d6d164aaa1091ce1856be8d2d11e6    
    2022-06-20 11:06:12 Using default protocol ID "sup" because none is configured in the chain specs    
    2022-06-20 11:06:12 🏷 Local node identity is: 12D3KooWE7Ro9tcpabyDcN8CUHy4LaxEMfZCb8SSZjuMo1RWszwY    
    2022-06-20 11:06:12 📦 Highest known block at #0    
    ```





### Testing Guide Feedback

- Tests fail when running `cargo test`. Also, I wasn't able to find test instructions in the [README](https://github.com/WowLabz/dot-marketplace-v2/blob/3565c39e44c662c5c2335eb39d63e034bbf4385b/README.md):

    ```bash
    $ cargo test
    Compiling proc-macro2 v1.0.32
    Compiling unicode-xid v0.2.2
    Compiling syn v1.0.81
    Compiling libc v0.2.106
    Compiling version_check v0.9.3

    (...)

        Compiling pallet-session v4.0.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling pallet-aura v4.0.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    warning: unused imports: `EncodeLike`, `Randomness`, `log`, `sp_runtime::traits::Hash`, `transactional`
    --> pallets/pallet-tasking/src/lib.rs:20:3
    |
    20 |         log,
    |         ^^^
    21 |         sp_runtime::traits::Hash,
    |         ^^^^^^^^^^^^^^^^^^^^^^^^
    22 |         traits::{ 
    23 |             Randomness, 
    |             ^^^^^^^^^^
    ...
    30 |         dispatch::{ EncodeLike },
    |                     ^^^^^^^^^^
    31 |         transactional
    |         ^^^^^^^^^^^^^
    |
    = note: `#[warn(unused_imports)]` on by default

    warning: type alias is never used: `AccountOf`
    --> pallets/pallet-tasking/src/lib.rs:36:2
    |
    36 |     type AccountOf<T> = <T as frame_system::Config>::AccountId;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(dead_code)]` on by default

    warning: type alias is never used: `AccountId`
    --> pallets/pallet-tasking/src/lib.rs:40:2
    |
    40 |     type AccountId<T> = <T as frame_system::Config>::AccountId;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: type alias is never used: `Balance`
    --> pallets/pallet-tasking/src/lib.rs:41:2
    |
    41 |     type Balance<T> = <<T as Config>::Currency as Currency<<T as frame_system::Config>::AccountId>>::Balance;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    Compiling pallet-chat v4.0.0-dev (/home/xxx/repos/dot-marketplace-v2/pallets/pallet-chat)
    warning: `pallet-tasking` (lib) generated 4 warnings
    error[E0046]: not all trait items implemented, missing: `Currency`
    --> pallets/pallet-tasking/src/mock.rs:56:1
        |
    56  | impl pallet_template::Config for Test {
        | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ missing `Currency` in implementation
        |
    ::: pallets/pallet-tasking/src/lib.rs:146:9
        |
    146 |         type Currency: LockableCurrency<Self::AccountId>;
        |         ------------------------------------------------- `Currency` from trait

    warning: unused imports: `EncodeLike`, `LockIdentifier`, `Randomness`, `WithdrawReasons`, `log`, `sp_runtime::traits::Hash`, `tokens::ExistenceRequirement`, `transactional`
    --> pallets/pallet-chat/src/lib.rs:19:3
    |
    19 |         log,
    |         ^^^
    20 |         sp_runtime::traits::Hash,
    |         ^^^^^^^^^^^^^^^^^^^^^^^^
    21 |         traits::{ 
    22 |             Randomness, 
    |             ^^^^^^^^^^
    23 |             Currency, 
    24 |             tokens::ExistenceRequirement, 
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    25 |             LockIdentifier, 
    |             ^^^^^^^^^^^^^^
    26 |             WithdrawReasons, 
    |             ^^^^^^^^^^^^^^^
    ...
    29 |         dispatch::{ EncodeLike },
    |                     ^^^^^^^^^^
    30 |         transactional
    |         ^^^^^^^^^^^^^
    |
    = note: `#[warn(unused_imports)]` on by default

    error[E0599]: no function or associated item named `do_something` found for struct `pallet::Pallet` in the current scope
    --> pallets/pallet-tasking/src/tests.rs:8:30
        |
    8   |         assert_ok!(TemplateModule::do_something(Origin::signed(1), 42));
        |                                    ^^^^^^^^^^^^ function or associated item not found in `pallet::Pallet<mock::Test>`
        |
    ::: pallets/pallet-tasking/src/lib.rs:151:5
        |
    151 |     pub struct Pallet<T>(_);
        |     ------------------------ function or associated item `do_something` not found for this

    error[E0599]: no function or associated item named `something` found for struct `pallet::Pallet` in the current scope
    --> pallets/pallet-tasking/src/tests.rs:10:30
        |
    10  |         assert_eq!(TemplateModule::something(), Some(42));
        |                                    ^^^^^^^^^ function or associated item not found in `pallet::Pallet<mock::Test>`
        |
    ::: pallets/pallet-tasking/src/lib.rs:151:5
        |
    151 |     pub struct Pallet<T>(_);
        |     ------------------------ function or associated item `something` not found for this

    error[E0599]: no function or associated item named `cause_error` found for struct `pallet::Pallet` in the current scope
    --> pallets/pallet-tasking/src/tests.rs:18:32
        |
    18  |         assert_noop!(TemplateModule::cause_error(Origin::signed(1)), Error::<Test>::NoneValue);
        |                                      ^^^^^^^^^^^ function or associated item not found in `pallet::Pallet<mock::Test>`
        |
    ::: pallets/pallet-tasking/src/lib.rs:151:5
        |
    151 |     pub struct Pallet<T>(_);
        |     ------------------------ function or associated item `cause_error` not found for this

    warning: type alias is never used: `AccountId`
    --> pallets/pallet-chat/src/lib.rs:34:2
    |
    34 |     type AccountId<T> = <T as frame_system::Config>::AccountId;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(dead_code)]` on by default

    warning: type alias is never used: `Balance`
    --> pallets/pallet-chat/src/lib.rs:35:2
    |
    35 |     type Balance<T> = <<T as Config>::Currency as Currency<<T as frame_system::Config>::AccountId>>::Balance;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: associated function is never used: `new`
    --> pallets/pallet-chat/src/lib.rs:49:6
    |
    49 |         fn new(self) -> Self {
    |            ^^^

    Some errors have detailed explanations: E0046, E0599.
    For more information about an error, try `rustc --explain E0046`.
    warning: `pallet-tasking` (lib test) generated 1 warning (1 duplicate)
    error: could not compile `pallet-tasking` due to 4 previous errors; 1 warning emitted
    warning: build failed, waiting for other jobs to finish...
    warning: `pallet-chat` (lib) generated 4 warnings
    warning: `pallet-chat` (lib test) generated 4 warnings (4 duplicates)
    error: build failed
    ```

### Docker Feedback

- the start script fails:

    ```bash
    $ ./scripts/docker_run.sh
    *** Start Substrate node template ***
    Removing network dot-marketplace-v2_default
    WARNING: Network dot-marketplace-v2_default not found.
    ERROR: No such service: dev
    ```

- when running `docker compose` manually, the node is started successfully:

    ```bash
    $ docker-compose up
    Starting dot_marketplace_docker_dot_marketplace_node_1 ... done
    Attaching to dot_marketplace_docker_dot_marketplace_node_1
    dot_marketplace_node_1  | 2022-06-20 09:27:09 Running in --dev mode, RPC CORS has been disabled.    
    dot_marketplace_node_1  | 2022-06-20 09:27:09 Substrate Node    
    dot_marketplace_node_1  | 2022-06-20 09:27:09 ✌️  version 4.0.0-dev-3565c39-x86_64-linux-gnu    
    dot_marketplace_node_1  | 2022-06-20 09:27:09 ❤️  by Substrate DevHub <https://github.com/substrate-developer-hub>, 2017-2022    
    dot_marketplace_node_1  | 2022-06-20 09:27:09 📋 Chain specification: Development    
    dot_marketplace_node_1  | 2022-06-20 09:27:09 🏷 Node name: pastoral-rabbit-6561    
    dot_marketplace_node_1  | 2022-06-20 09:27:09 👤 Role: AUTHORITY    
    dot_marketplace_node_1  | 2022-06-20 09:27:09 💾 Database: RocksDb at /tmp/substrateub0G8y/chains/dev/db/full    
    dot_marketplace_node_1  | 2022-06-20 09:27:09 ⛓  Native runtime: node-template-100 (node-template-1.tx1.au1)    
    dot_marketplace_node_1  | 2022-06-20 09:27:09 🔨 Initializing Genesis block/state (state: 0x0808…6838, header-hash: 0xc5dc…0351)    
    dot_marketplace_node_1  | 2022-06-20 09:27:09 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
    dot_marketplace_node_1  | 2022-06-20 09:27:09 ⏱  Loaded block-time = 6s from block 0xc5dc6db6ddf9f580542aef20a6f47628d949856b879b44916a9b551276f20351    
    dot_marketplace_node_1  | 2022-06-20 09:27:09 Using default protocol ID "sup" because none is configured in the chain specs    
    dot_marketplace_node_1  | 2022-06-20 09:27:09 🏷 Local node identity is: 12D3KooWEec92wydxGNWyhLzMgJrKpEQBb3D97xS9Qudgvm22Lbp    
    dot_marketplace_node_1  | 2022-06-20 09:27:09 📦 Highest known block at #0    
    ```

- please fix the script or remove it, along with the instructions and replace it with instructions on how to run it manually