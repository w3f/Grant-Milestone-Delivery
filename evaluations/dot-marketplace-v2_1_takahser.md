# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace-phase2.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/WowLabz/tasking_backend/blob/90c698ae1c3774459374901cb78aeed66ffb0fd8/LICENSE) | - |
| 0b | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/WowLabz/dot-marketplace-v2/blob/3565c39e44c662c5c2335eb39d63e034bbf4385b/README.md), [Tasking Pallet](https://github.com/WowLabz/dot-marketplace-v2/blob/3565c39e44c662c5c2335eb39d63e034bbf4385b/pallets/pallet-tasking/src/lib.rs), [Chat Pallet](https://github.com/WowLabz/dot-marketplace-v2/blob/3565c39e44c662c5c2335eb39d63e034bbf4385b/pallets/pallet-chat/src/lib.rs) | Inline documentation exists, tutorial is located in the README |
| 0c | Testing Guide | <ul><li>[x] </li></ul> | [Chat Pallet Tests](https://github.com/WowLabz/dot-marketplace-v2/blob/3565c39e44c662c5c2335eb39d63e034bbf4385b/pallets/pallet-chat/src/tests.rs), [Tasking Pallet Tests](https://github.com/WowLabz/dot-marketplace-v2/blob/3565c39e44c662c5c2335eb39d63e034bbf4385b/pallets/pallet-tasking/src/tests.rs) | See [Testing Guide Feedback](#testing-guide-feedback) |
| 0d | Docker Image | <ul><li>[x] </li></ul> | [docker-compose file](https://github.com/WowLabz/dot-marketplace-v2/blob/3565c39e44c662c5c2335eb39d63e034bbf4385b/docker-compose.yml) | See [Docker Feedback](#docker-feedback) |
| 1 | Migrate [Tasking Pallet](https://github.com/WowLabz/tasking_backend/blob/11ff1dfe620016d2943adc7b7a0ba60f2d6413cd/pallets/pallet-tasking/src/lib.rs) from FRAME v1 to FRAME v2 | <ul><li>[x] </li></ul> | [Tasking Pallet](https://github.com/WowLabz/dot-marketplace-v2/tree/3565c39e44c662c5c2335eb39d63e034bbf4385b/pallets/pallet-tasking/src) | - |
| 2 | Chat Pallet | <ul><li>[x] </li></ul> | [Chat Pallet](https://github.com/WowLabz/dot-marketplace-v2/tree/3565c39e44c662c5c2335eb39d63e034bbf4385b/pallets/pallet-chat/src) | - |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

- Build succeeds ~~, however, there are some warnings that should be easy to fix~~ _2022-06-30 Warnings are fixed now_:

    ```bash
    $ cargo build --release

    Compiling librocksdb-sys v6.20.3
    Compiling node-template-runtime v4.0.0-dev (/Users/seraya/repos/dot-marketplace-v2/runtime)
    Compiling sc-executor-wasmtime v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling rocksdb v0.17.0
    Compiling kvdb-rocksdb v0.14.0
    Compiling sc-executor v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-client-api v4.0.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-consensus v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-block-builder v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-state-db v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-tracing v4.0.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-transaction-pool v4.0.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-basic-authorship v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-client-db v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-network v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-consensus-slots v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-consensus-aura v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-chain-spec v4.0.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-offchain v4.0.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-informant v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-network-gossip v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-rpc-api v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-finality-grandpa v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-rpc v4.0.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling substrate-frame-rpc-system v4.0.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-service v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling sc-cli v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling frame-benchmarking-cli v4.0.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
    Compiling node-template v4.0.0-dev (/Users/seraya/repos/dot-marketplace-v2/node)
        Finished release [optimized] target(s) in 2m 34s
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

- ~~Tests fail when running `cargo test`. Also, I wasn't able to find test instructions in the [README](https://github.com/WowLabz/dot-marketplace-v2/blob/3565c39e44c662c5c2335eb39d63e034bbf4385b/README.md)~~ _2022-06-30 Tests pass now_:

    ```bash
    $ cargo test
    
    (...)

    Compiling frame-benchmarking-cli v4.0.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2021-12#b6c1c1bc)
        Finished test [unoptimized + debuginfo] target(s) in 2m 22s
        Running unittests (target/debug/deps/node_template-fbcfc693993ba826)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests (target/debug/deps/node_template-4dabf8070e0c7760)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests (target/debug/deps/node_template_runtime-bf987555e9a50bdd)

    running 1 test
    test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests (target/debug/deps/pallet_chat-014d4faf71669d2d)

    running 6 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_write_message ... ok
    test tests::test_storage_schema ... ok
    test tests::test_mark_as_read ... ok
    test tests::test_reply_message ... ok
    test tests::stress_test_write_message ... ok

    test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 45.78s

        Running unittests (target/debug/deps/pallet_tasking-b631207e639127c2)

    running 6 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_create_task ... ok
    test tests::test_bid_for_task ... ok
    test tests::test_task_completed ... ok
    test tests::test_approve_task ... ok
    test tests::test_provide_customer_ratings ... ok

    test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

    Doc-tests node-template

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests node-template-runtime

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-chat

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-tasking

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```

### Docker Feedback

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
- there used to be a failing script which was supposed to do the same, but was approved upon request