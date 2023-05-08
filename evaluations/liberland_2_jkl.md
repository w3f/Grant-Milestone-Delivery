# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/liberland.md
- **Milestone:** 2
- **Kusama Identity:** Ha27MB4gKH36ieRPa1T1ASqhUz4sVxMoVmK7o5CS6tXDqjW
- **Previously successfully merged evaluation:** https://github.com/UniversalDot/Grant-Milestone-Delivery/blob/master/evaluations/crossbow_1_jkl.md

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[Link](https://github.com/liberland/liberland_substrate/blob/main/LICENSE-MIT)| License is Ok. The MIT license is also referenced in their pallets.|
| 0b.  | Documentation |<ul><li>[x] </li></ul>|[Link](https://liberland-1.gitbook.io/wiki/v/public-documents/blockchain/for-developers-and-testers)| Good inline documentation in pallets. It contains dispatchable functions, configs, etc. The Gitbook is also good, but can be further imrproved. See 1. in General Notes.|
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| ... | ~~I can see you have created tests for your pallets. Please include a short guide on how to run these tests. Incude this guide in your README document.~~ See [Testing Guide Feedback](#testing-guide-feedback) |
| 0d.  | Docker |<ul><li>[x] </li></ul>|[Link](https://hub.docker.com/layers/liberland/blockchain-node/latest/images/sha256-e59f697c8df37b6c8c509e1c949cb23c052b4e95463f087abb044d4873a791b5?context=explore)|Docker Image works. See 3. In General notes. |
| 0e. | Article |<ul><li>[x] </li></ul>|[Link](https://docs.google.com/document/d/1IiOEka3eZOOyM7GuT5aVJYihdSz3qYbWqwcTNS_Pvqg/edit#heading=h.gvgdsh4wfciv)| Draft is ok.|
| 1.  | Land owner Pallet |<ul><li>[ ] </li></ul>|[Link](https://github.com/liberland/liberland_substrate/tree/main/frame/nfts)| Your pallet is almost exact fork from pallet-nfts. You have made small modificaiton to add citizenship information. In the original application you state you will use geo coordination but I don't see this reflected in code. Can you make the requirements for this pallet more explicit?|
| 2 | Metaverse integration Pallet |<ul><li>[ ] </li></ul>|...| Based on the submitted requirements in your application [document](https://github.com/w3f/Grants-Program/blob/master/applications/liberland.md), you have not provided a pallet implementation. I understand that requirements can change during development, but these changes have to be reflected back in the original requirements document.  |
| 3 | Company Registration Pallet |<ul><li>[x] </li></ul>|[Link](https://github.com/liberland/liberland_substrate/blob/main/frame/registry/src/lib.rs)| Good. But it seems to be inspired from the original substrate [Registry pallet](https://github.com/liberland/liberland_substrate/blob/main/frame/registry/src/lib.rs)|



## General Notes

1. In your documentation [here](https://liberland-1.gitbook.io/wiki/v/public-documents/blockchain/for-developers-and-testers/testing_guide), you are including link to google doc, instead of having the information available on the wiki. Consolidate your documentation in one place so you have one source of truth. 

2. In your Testing Guide, you are including some keys together with the mnemonics used to derive the keys. Make sure you keep all key information interally and preferably private, even if you are using for testing accounts. 

3. Docker image works. It seems we can run your node in --dev mode and from chain-spec. Maybe you can include this in your documentation. 

```
2023-04-14 13:26:06 Substrate Node    
2023-04-14 13:26:06 ✌️  version 3.0.0-dev-unknown    
2023-04-14 13:26:06 ❤️  by Parity Technologies <admin@parity.io>, 2017-2023    
2023-04-14 13:26:06 📋 Chain specification: Development    
2023-04-14 13:26:06 🏷  Node name: spotted-wool-7161    
2023-04-14 13:26:06 👤 Role: AUTHORITY    
2023-04-14 13:26:06 💾 Database: RocksDb at /tmp/substrateAV9b9f/chains/dev/db/full    
2023-04-14 13:26:06 ⛓  Native runtime: Liberland-8 (liberland-node-0.tx1.au10)    
2023-04-14 13:26:09 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators    
2023-04-14 13:26:09 [0] 💸 generated 1 npos targets    
2023-04-14 13:26:10 You're running on a system with a broken `madvise(MADV_DONTNEED)` implementation. This will result in lower performance.    
2023-04-14 13:26:27 🔨 Initializing Genesis block/state (state: 0x12f5…4c6f, header-hash: 0x9f82…9441)    
2023-04-14 13:26:27 👴 Loading GRANDPA authority set from genesis on what appears to be first startup. 
```

###  Concluding Remarks

#### Remarks by @JosephKnecht-lab


Based on my evaluation, you have not provided all the deliverables as described in you application. Thus I have to reject this delivery. My advise is to update your initial application with the exact deliverables that you are delivering for this milestone, before it can be accepted. 

Furthermore, a lot of your pallets are derivative work from already existing pallets (such as registry, nfts) and I would expect more original work for grant submission. 

Note that this evaluation is not binding since I do not work of Web3 Foundation, so the Web3 team can accept your delivery in its current state.

#### Remarks by @takahser

(TODO)

## Testing Guide Feedback

- testing instructions can found in the [gitbook](https://liberland-1.gitbook.io/wiki/v/public-documents/blockchain/for-developers-and-testers/dev#run-automated-tests)
- ~~however, running the node failed with an "cannot deserialize module: UnknownOpcode(192)" error on my machine~~ the node can be run successfully:

    ```bash
    liberland_substrate % cargo run --release -- --dev
        (...)
        Compiling sc-basic-authorship v0.10.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v0.9.37#f38bd667)
            Finished release [optimized] target(s) in 1m 19s
            Running `target/release/substrate --dev`
        2023-05-08 23:53:04 Substrate Node    
        2023-05-08 23:53:04 ✌️  version 3.0.0-dev-bc60180005a    
        2023-05-08 23:53:04 ❤️  by Parity Technologies <admin@parity.io>, 2017-2023    
        2023-05-08 23:53:04 📋 Chain specification: Development    
        2023-05-08 23:53:04 🏷  Node name: jaded-ticket-2873    
        2023-05-08 23:53:04 👤 Role: AUTHORITY    
        2023-05-08 23:53:04 💾 Database: RocksDb at /var/folders/9y/ny58jn152dzcqf036v5cb4nh0000gn/T/substratexgcdzb/chains/dev/db/full    
        2023-05-08 23:53:04 ⛓  Native runtime: Liberland-8 (liberland-node-0.tx1.au10)    
        2023-05-08 23:53:05 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators    
        2023-05-08 23:53:05 [0] 💸 generated 1 npos targets    
        2023-05-08 23:53:06 🔨 Initializing Genesis block/state (state: 0x724a…1821, header-hash: 0xd235…2507)    
        2023-05-08 23:53:06 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
        2023-05-08 23:53:07 👶 Creating empty BABE epoch changes on what appears to be first startup.    
        2023-05-08 23:53:07 Using default protocol ID "sup" because none is configured in the chain specs    
        2023-05-08 23:53:07 🏷  Local node identity is: 12D3KooWLq8fs6WMwp783ETG4Ck4Wsu7SKECqcWARkvR7Et6QpdA    
        2023-05-08 23:53:07 💻 Operating system: macos    
        2023-05-08 23:53:07 💻 CPU architecture: aarch64    
        2023-05-08 23:53:07 📦 Highest known block at #0    
        2023-05-08 23:53:07 〽️ Prometheus exporter started at 127.0.0.1:9615    
        2023-05-08 23:53:07 Running JSON-RPC HTTP server: addr=127.0.0.1:9933, allowed origins=["*"]    
        2023-05-08 23:53:07 Running JSON-RPC WS server: addr=127.0.0.1:9944, allowed origins=["*"]    
        2023-05-08 23:53:07 🏁 CPU score: 718.16 MiBs    
        2023-05-08 23:53:07 🏁 Memory score: 41.01 GiBs    
        2023-05-08 23:53:07 🏁 Disk score (seq. writes): 3.05 GiBs    
        2023-05-08 23:53:07 🏁 Disk score (rand. writes): 442.05 MiBs    
        2023-05-08 23:53:07 👶 Starting BABE Authorship worker    
        2023-05-08 23:53:12 🙌 Starting consensus session on top of parent 0xd2352ca73715ed46b279cd3a3e6dbc3f11ed17f710a200d954777405c9842507    
        2023-05-08 23:53:12 🎁 Prepared block for proposing at 1 (1 ms) [hash: 0xbe8f75bc8fa31df6cebf7a73556205eff75ce20902a19667d6b1190dd484c832; parent_hash: 0xd235…2507; extrinsics (1): [0x0cc8…b01e]]    
        2023-05-08 23:53:12 🔖 Pre-sealed block for proposal at 1. Hash now 0xe325a2316b5f622f5b7ae76bcc1143af3b8a3ded12e6962098a4b86293950c3f, previously 0xbe8f75bc8fa31df6cebf7a73556205eff75ce20902a19667d6b1190dd484c832.    
        2023-05-08 23:53:12 👶 New epoch 0 launching at block 0xe325…0c3f (block slot 280597132 >= start slot 280597132).    
        2023-05-08 23:53:12 👶 Next epoch starts at slot 280597732    
        2023-05-08 23:53:12 ✨ Imported #1 (0xe325…0c3f)    
    ```

- when running the tests, most pass but the ~~"benchmark_block_works"~~ "temp_base_path_works" test fails:

```bash
    liberland_substrate % cargo test --release --features runtime-benchmarks
    running 17 tests
    test impls::multiplier_tests::congested_chain_simulation ... ignored
    test __pallet_staking_reward_curve_test_module::reward_curve_piece_count ... ok
    test impls::multiplier_tests::multiplier_cannot_go_below_limit ... ok
    test impls::multiplier_tests::weight_mul_decrease_on_small_block ... ok
    test impls::multiplier_tests::multiplier_can_grow_from_zero ... ok
    test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test impls::multiplier_tests::stateless_weight_mul ... ok
    test tests::call_size ... ok
    test tests::check_whitelist ... ok
    test impls::multiplier_tests::truth_value_update_poc_works ... ok
    test tests::perbill_as_onchain_accuracy ... ok
    test tests::validate_transaction_submitter_bounds ... ok
    test impls::multiplier_tests::weight_mul_grow_on_big_block ... ok
    test __pallet_staking_reward_curve_test_module::reward_curve_precision ... ok
    test impls::multiplier_tests::weight_to_fee_should_not_overflow_on_large_weights ... ok
    test impls::multiplier_tests::min_change_per_day ... ok
    test impls::multiplier_tests::time_to_reach_zero ... ok

    test result: ok. 16 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 5.49s

        Running unittests src/lib.rs (target/release/deps/liberland_traits-3dbd387209bb90a0)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/release/deps/node_cli-d09e0ccbd5536ba7)

    running 8 tests
    test chain_spec::tests::test_connectivity ... ignored
    test service::tests::test_consensus ... ignored
    test service::tests::test_sync ... ignored
    test chain_spec::tests::test_bastiat_test_net_chain_spec ... ok
    test chain_spec::tests::test_mainnet_chain_spec ... ok
    test chain_spec::tests::test_staging_test_net_chain_spec ... ok
    test chain_spec::tests::test_create_development_chain_spec ... ok
    test chain_spec::tests::test_create_local_testnet_chain_spec ... ok

    test result: ok. 5 passed; 0 failed; 3 ignored; 0 measured; 0 filtered out; finished in 0.07s

        Running unittests bin/main.rs (target/release/deps/substrate-553778a20ba6f399)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/benchmark_block_works.rs (target/release/deps/benchmark_block_works-e9a49d36ddb6b457)

    running 1 test
    2023-05-09 00:00:21 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators    
    2023-05-09 00:00:21 [0] 💸 generated 1 npos targets    
    2023-05-09 00:00:22 Block 1 with     1 tx used  87.18% of its weight (     2,026,916 of      2,324,862 ns)    
    test benchmark_block_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 35.17s

        Running tests/benchmark_extrinsic_works.rs (target/release/deps/benchmark_extrinsic_works-eb21c36b1e1f7e51)

    running 1 test
    2023-05-09 00:00:23 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators    
    2023-05-09 00:00:23 [0] 💸 generated 1 npos targets    
    2023-05-09 00:00:24 🔨 Initializing Genesis block/state (state: 0xa32b…2aa4, header-hash: 0x6f97…bd46)    
    2023-05-09 00:00:24 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
    2023-05-09 00:00:26 👶 Creating empty BABE epoch changes on what appears to be first startup.    
    2023-05-09 00:00:26 Running 10 warmups...    
    2023-05-09 00:00:26 Executing block 10 times    
    2023-05-09 00:00:26 Building block, this takes some time...    
    2023-05-09 00:00:26 Extrinsics per block: 10    
    2023-05-09 00:00:26 Running 10 warmups...    
    2023-05-09 00:00:26 Executing block 10 times    
    2023-05-09 00:00:26 Executing a system::remark extrinsic takes[ns]:
    Total: 1111543
    Min: 109967, Max: 113209
    Average: 111154, Median: 111121, Stddev: 794.93
    Percentiles 99th, 95th, 75th: 113209, 113209, 111284    
    2023-05-09 00:00:26 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators    
    2023-05-09 00:00:26 [0] 💸 generated 1 npos targets    
    2023-05-09 00:00:27 🔨 Initializing Genesis block/state (state: 0xa32b…2aa4, header-hash: 0x6f97…bd46)    
    2023-05-09 00:00:27 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
    2023-05-09 00:00:28 👶 Creating empty BABE epoch changes on what appears to be first startup.    
    2023-05-09 00:00:28 Running 10 warmups...    
    2023-05-09 00:00:28 Executing block 10 times    
    2023-05-09 00:00:28 Building block, this takes some time...    
    2023-05-09 00:00:28 Extrinsics per block: 10    
    2023-05-09 00:00:28 Running 10 warmups...    
    2023-05-09 00:00:29 Executing block 10 times    
    2023-05-09 00:00:29 Executing a balances::transfer_keep_alive extrinsic takes[ns]:
    Total: 1275331
    Min: 126327, Max: 128677
    Average: 127533, Median: 127502, Stddev: 540.83
    Percentiles 99th, 95th, 75th: 128677, 128677, 127727    
    test benchmark_extrinsic_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 5.56s

        Running tests/benchmark_machine_works.rs (target/release/deps/benchmark_machine_works-7dd51b2f06747f10)

    running 1 test
    2023-05-09 00:00:29 Running machine benchmarks...    
    2023-05-09 00:00:30 
    +----------+----------------+-------------+-------------+-------------------+
    | Category | Function       | Score       | Minimum     | Result            |
    +===========================================================================+
    | CPU      | BLAKE2-256     | 739.61 MiBs | 1.00 GiBs   | ❌ Fail ( 71.9 %) |
    |----------+----------------+-------------+-------------+-------------------|
    | CPU      | SR25519-Verify | 627.37 KiBs | 666.00 KiBs | ✅ Pass ( 94.2 %) |
    |----------+----------------+-------------+-------------+-------------------|
    | Memory   | Copy           | 40.89 GiBs  | 14.32 GiBs  | ✅ Pass (285.5 %) |
    |----------+----------------+-------------+-------------+-------------------|
    | Disk     | Seq Write      | 3.12 GiBs   | 450.00 MiBs | ✅ Pass (709.5 %) |
    |----------+----------------+-------------+-------------+-------------------|
    | Disk     | Rnd Write      | 371.19 MiBs | 200.00 MiBs | ✅ Pass (185.6 %) |
    +----------+----------------+-------------+-------------+-------------------+
    From 5 benchmarks in total, 4 passed and 1 failed (10% fault tolerance).    
    2023-05-09 00:00:30 The hardware fails to meet the requirements    
    2023-05-09 00:00:30 Ignoring error since --allow-fail is set: UnmetRequirement    
    test benchmark_machine_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.08s

        Running tests/benchmark_overhead_works.rs (target/release/deps/benchmark_overhead_works-8079529d01c667fd)

    running 1 test
    2023-05-09 00:00:31 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators    
    2023-05-09 00:00:31 [0] 💸 generated 1 npos targets    
    2023-05-09 00:00:33 🔨 Initializing Genesis block/state (state: 0xa32b…2aa4, header-hash: 0x6f97…bd46)    
    2023-05-09 00:00:33 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
    2023-05-09 00:00:34 👶 Creating empty BABE epoch changes on what appears to be first startup.    
    2023-05-09 00:00:34 Running 10 warmups...    
    2023-05-09 00:00:34 Executing block 10 times    
    2023-05-09 00:00:34 Per-block execution overhead [ns]:
    Total: 4131542
    Min: 409083, Max: 417541
    Average: 413154, Median: 413334, Stddev: 2310.71
    Percentiles 99th, 95th, 75th: 417541, 417541, 414125    
    2023-05-09 00:00:34 Writing weights to "/private/var/folders/9y/ny58jn152dzcqf036v5cb4nh0000gn/T/.tmpAR1nny/block_weights.rs"    
    2023-05-09 00:00:34 Running 10 warmups...    
    2023-05-09 00:00:34 Executing block 10 times    
    2023-05-09 00:00:34 Building block, this takes some time...    
    2023-05-09 00:00:34 Extrinsics per block: 10    
    2023-05-09 00:00:34 Running 10 warmups...    
    2023-05-09 00:00:34 Executing block 10 times    
    2023-05-09 00:00:34 Per-extrinsic execution overhead [ns]:
    Total: 1159871
    Min: 109628, Max: 125433
    Average: 115987, Median: 113599, Stddev: 5426.06
    Percentiles 99th, 95th, 75th: 125433, 125433, 120862    
    2023-05-09 00:00:34 Writing weights to "/private/var/folders/9y/ny58jn152dzcqf036v5cb4nh0000gn/T/.tmpAR1nny/extrinsic_weights.rs"    
    test benchmark_overhead_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 3.06s

        Running tests/benchmark_pallet_works.rs (target/release/deps/benchmark_pallet_works-9bda471b214e7fad)

    running 1 test
    test benchmark_pallet_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 7.20s

        Running tests/benchmark_storage_works.rs (target/release/deps/benchmark_storage_works-f7bab32d73a75457)

    running 1 test
    2023-05-09 00:00:43 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators    
    2023-05-09 00:00:43 [0] 💸 generated 1 npos targets    
    2023-05-09 00:00:43 🔨 Initializing Genesis block/state (state: 0xa32b…2aa4, header-hash: 0x6f97…bd46)    
    2023-05-09 00:00:43 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
    2023-05-09 00:00:43 👶 Creating empty BABE epoch changes on what appears to be first startup.    
    2023-05-09 00:00:43 Preparing keys from block 0x6f97…bd46    
    2023-05-09 00:00:43 Reading 221 keys    
    2023-05-09 00:00:43 Reading 0 child keys    
    2023-05-09 00:00:43 Time summary [ns]:
    Total: 1853788
    Min: 2541, Max: 607166
    Average: 8388, Median: 5750, Stddev: 40410.09
    Percentiles 99th, 95th, 75th: 9583, 8208, 6875
    Value size summary:
    Total: 1891837
    Min: 0, Max: 1885107
    Average: 8560, Median: 16, Stddev: 126516.76
    Percentiles 99th, 95th, 75th: 257, 80, 50    
    2023-05-09 00:00:43 Preparing keys from block 0x6f97…bd46    
    2023-05-09 00:00:43 Writing 221 keys    
    2023-05-09 00:00:43 Writing 0 child keys    
    2023-05-09 00:00:43 Time summary [ns]:
    Total: 10282179
    Min: 12875, Max: 3722708
    Average: 46525, Median: 29375, Stddev: 248015.17
    Percentiles 99th, 95th, 75th: 51792, 45084, 36084
    Value size summary:
    Total: 1891837
    Min: 0, Max: 1885107
    Average: 8560, Median: 16, Stddev: 126516.76
    Percentiles 99th, 95th, 75th: 257, 80, 50    
    2023-05-09 00:00:43 Writing weights to "/private/var/folders/9y/ny58jn152dzcqf036v5cb4nh0000gn/T/.tmpVpIqZ2/rocksdb_weights.rs"    
    2023-05-09 00:00:44 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators    
    2023-05-09 00:00:44 [0] 💸 generated 1 npos targets    
    2023-05-09 00:00:44 🔨 Initializing Genesis block/state (state: 0xa32b…2aa4, header-hash: 0x6f97…bd46)    
    2023-05-09 00:00:44 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
    2023-05-09 00:00:44 👶 Creating empty BABE epoch changes on what appears to be first startup.    
    2023-05-09 00:00:44 Preparing keys from block 0x6f97…bd46    
    2023-05-09 00:00:44 Reading 221 keys    
    2023-05-09 00:00:44 Reading 0 child keys    
    2023-05-09 00:00:44 Time summary [ns]:
    Total: 1116501
    Min: 1625, Max: 447833
    Average: 5052, Median: 3000, Stddev: 29861.15
    Percentiles 99th, 95th, 75th: 4875, 4291, 3542
    Value size summary:
    Total: 1891837
    Min: 0, Max: 1885107
    Average: 8560, Median: 16, Stddev: 126516.76
    Percentiles 99th, 95th, 75th: 257, 80, 50    
    2023-05-09 00:00:44 Preparing keys from block 0x6f97…bd46    
    2023-05-09 00:00:44 Writing 221 keys    
    2023-05-09 00:00:44 Writing 0 child keys    
    2023-05-09 00:00:44 Time summary [ns]:
    Total: 8023915
    Min: 6125, Max: 2992541
    Average: 36307, Median: 21375, Stddev: 199535.93
    Percentiles 99th, 95th, 75th: 62167, 39084, 28250
    Value size summary:
    Total: 1891837
    Min: 0, Max: 1885107
    Average: 8560, Median: 16, Stddev: 126516.76
    Percentiles 99th, 95th, 75th: 257, 80, 50    
    2023-05-09 00:00:44 Writing weights to "/private/var/folders/9y/ny58jn152dzcqf036v5cb4nh0000gn/T/.tmpVpIqZ2/paritydb_weights.rs"    
    test benchmark_storage_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.34s

        Running tests/build_spec_works.rs (target/release/deps/build_spec_works-7ce3b9f353ffa322)

    running 1 test
    test build_spec_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.08s

        Running tests/check_block_works.rs (target/release/deps/check_block_works-658f72842aa4be29)

    running 1 test
    2023-05-09 00:01:19 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators    
    2023-05-09 00:01:19 [0] 💸 generated 1 npos targets    
    2023-05-09 00:01:20 Essential task `transaction-pool-task-0` failed. Shutting down service.    
    2023-05-09 00:01:20 Essential task `transaction-pool-task-1` failed. Shutting down service.    
    2023-05-09 00:01:20 Essential task `txpool-background` failed. Shutting down service.    
    Completed in 205 ms.
    2023-05-09 00:01:20 🎉 Imported 1 blocks. Best: #5    
    test check_block_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 34.52s

        Running tests/common.rs (target/release/deps/common-3c7dbd281c5a592e)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/export_import_flow.rs (target/release/deps/export_import_flow-ab2472eff51e7049)

    running 1 test
    test export_import_revert ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 47.42s

        Running tests/inspect_works.rs (target/release/deps/inspect_works-5c288fd6c0437cca)

    running 1 test
    Header:
    Header { parent_hash: 0x6f970a8b8c1c0c22f08cbcf1972d7dfe22b07033bd4a7a395b93718e6c2abd46, number: 1, state_root: 0xb3d9bf1491ce5a07325cdcbc9aa32c020f739ee1659f70a44a35bf8a3273366b, extrinsics_root: 0x53537dfe4639e05afdbacb346f6ec25f70017ba6469a71c0daddd773d7d76a9e, digest: Digest { logs: [DigestItem::PreRuntime([66, 65, 66, 69], [1, 0, 0, 0, 0, 231, 146, 185, 16, 0, 0, 0, 0, 64, 24, 253, 32, 17, 252, 124, 46, 130, 224, 129, 179, 204, 22, 116, 51, 222, 148, 29, 148, 106, 143, 81, 63, 172, 92, 238, 52, 110, 240, 241, 55, 82, 132, 207, 22, 170, 230, 89, 129, 63, 186, 80, 8, 137, 244, 92, 146, 37, 201, 64, 123, 232, 230, 80, 204, 81, 33, 102, 38, 255, 49, 26, 1, 66, 172, 235, 35, 238, 49, 76, 236, 144, 22, 138, 96, 52, 222, 239, 26, 27, 132, 58, 241, 84, 147, 67, 195, 0, 170, 189, 241, 1, 195, 45, 13]), DigestItem::Consensus([66, 65, 66, 69], [1, 4, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162, 125, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), DigestItem::Seal([66, 65, 66, 69], [152, 208, 67, 126, 168, 163, 254, 218, 93, 109, 67, 168, 115, 104, 160, 214, 102, 148, 177, 237, 99, 208, 151, 243, 80, 151, 251, 179, 54, 209, 139, 8, 216, 37, 129, 126, 156, 96, 69, 144, 210, 15, 81, 13, 86, 46, 79, 95, 190, 53, 4, 239, 89, 247, 176, 188, 215, 78, 219, 104, 72, 62, 148, 143])] } }
    Block bytes: 6f970a8b8c1c0c22f08cbcf1972d7dfe22b07033bd4a7a395b93718e6c2abd4604b3d9bf1491ce5a07325cdcbc9aa32c020f739ee1659f70a44a35bf8a3273366b53537dfe4639e05afdbacb346f6ec25f70017ba6469a71c0daddd773d7d76a9e0c0642414245b5010100000000e792b910000000004018fd2011fc7c2e82e081b3cc167433de941d946a8f513fac5cee346ef0f1375284cf16aae659813fba500889f45c9225c9407be8e650cc51216626ff311a0142aceb23ee314cec90168a6034deef1a1b843af1549343c300aabdf101c32d0d044241424529010104d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d010000000000000000000000000000000000000000000000000000000000000000000000000000000542414245010198d0437ea8a3feda5d6d43a87368a0d66694b1ed63d097f35097fbb336d18b08d825817e9c604590d20f510d562e4f5fbe3504ef59f7b0bcd74edb68483e948f04280403000b150663fd8701
    Extrinsics (1)
    - 0:
    0403000b150663fd8701
    Bytes: 280403000b150663fd8701

    2023-05-09 00:02:43 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators    
    2023-05-09 00:02:43 [0] 💸 generated 1 npos targets    
    test inspect_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 33.06s

        Running tests/purge_chain_works.rs (target/release/deps/purge_chain_works-cbed17a6f6b2c882)

    running 1 test
    "/var/folders/9y/ny58jn152dzcqf036v5cb4nh0000gn/T/.tmpn0EHdz/chains/dev/db/full" removed.
    test purge_chain_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 28.92s

        Running tests/remember_state_pruning_works.rs (target/release/deps/remember_state_pruning_works-bd26946e35662c94)

    running 1 test
    test remember_state_pruning_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 48.16s

        Running tests/running_the_node_and_interrupt.rs (target/release/deps/running_the_node_and_interrupt-06d6d6d35892714e)

    running 2 tests
    test running_two_nodes_with_the_same_ws_port_should_work ... ok
    test running_the_node_works_and_can_be_interrupted has been running for over 60 seconds
    test running_the_node_works_and_can_be_interrupted ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 64.34s

        Running tests/telemetry.rs (target/release/deps/telemetry-70b016d40750c500)

    running 1 test
    test telemetry_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 3.55s

        Running tests/temp_base_path_works.rs (target/release/deps/temp_base_path_works-ac4b16e8df8a2d3b)

    running 1 test
    test temp_base_path_works ... FAILED

    failures:

    ---- temp_base_path_works stdout ----
    thread 'temp_base_path_works' panicked at 'assertion failed: !db_path.exists()', bin/node/cli/tests/temp_base_path_works.rs:62:5
    note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace


    failures:
        temp_base_path_works

    test result: FAILED. 0 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 32.72s

    error: test failed, to rerun pass `-p node-cli --test temp_base_path_works`
```