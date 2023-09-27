# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/liberland.md
- **Milestone:** 2
- **Kusama Identity:** Ha27MB4gKH36ieRPa1T1ASqhUz4sVxMoVmK7o5CS6tXDqjW
- **Previously successfully merged evaluation:** https://github.com/UniversalDot/Grant-Milestone-Delivery/blob/master/evaluations/crossbow_1_jkl.md

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul> | [Link](https://github.com/liberland/liberland_substrate/blob/main/LICENSE-MIT)| License is Ok. The MIT license is also referenced in their pallets.|
| 0b.  | Documentation |<ul><li>[x] </li></ul> | [Link](https://liberland-1.gitbook.io/wiki/v/public-documents/blockchain/for-developers-and-testers)| Good inline documentation in pallets. It contains dispatchable functions, configs, etc. The Gitbook is also good, but can be further imrproved. See 1. in General Notes.|
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| [Testing Guide](https://docs.google.com/document/d/1ntrT6bafTD2LfXUG9QLxOieogXELn9icN1y__EGfZ98/edit#heading=h.yfda4shb4ggs) | ~~I can see you have created tests for your pallets. Please include a short guide on how to run these tests. Incude this guide in your README document.~~ See [Testing Guide Feedback](#testing-guide-feedback) |
| 0d.  | Docker |<ul><li>[x] </li></ul> | [Link](https://hub.docker.com/layers/liberland/blockchain-node/latest/images/sha256-e59f697c8df37b6c8c509e1c949cb23c052b4e95463f087abb044d4873a791b5?context=explore) | Docker Image works. See 3. In General notes. |
| 0e. | Article |<ul><li>[x] </li></ul> | [Link](https://docs.google.com/document/d/1IiOEka3eZOOyM7GuT5aVJYihdSz3qYbWqwcTNS_Pvqg/edit#heading=h.gvgdsh4wfciv)| Draft is ok.|
| 1.  | Land owner Pallet |<ul><li>[x] </li></ul> | [Modified NFT Pallet](https://github.com/liberland/liberland_substrate/tree/bc60180005a17a3953c95b96fb06b95fe539f6cb/frame/nfts), [Office Pallet](https://github.com/liberland/liberland_substrate/tree/d2f9692e7137d830b6ea681b22e44d91b4255b97/frame/office), [PR for on-chain Geo validation](https://github.com/liberland/liberland_substrate/pull/291/files#diff-2126ae6766e9fabbb2462c7c1d2b0494c27b7c6e518f4672b1cc3a9d335afb3cR323) | See [Land owner Pallet Feedback](#landowner-pallet-feedback) |
| 2 | Metaverse integration Pallet |<ul><li>[x] </li></ul>| [Deployed Metaverse](https://liberverse.net/), [Live API](http://api.liberverse.net/v1/plots), [api repo](https://github.com/DorianSternVukotic/liberland-middleware-api/tree/3c71577108b1035fb8e7c1cd35ad224e53ea6a61) | See [Metaverse Integration Pallet Feedback](#metaverse-integration-pallet-feedback) |
| 3 | Company Registration Pallet |<ul><li>[x] </li></ul> | [Link](https://github.com/liberland/liberland_substrate/blob/main/frame/registry/src/lib.rs)| Good. But it seems to be inspired from the original substrate [Registry pallet](https://github.com/liberland/liberland_substrate/blob/main/frame/registry/src/lib.rs)|



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

I've added my remarks below in separate chapters:

- [Testing Guide Feedback](#testing-guide-feedback)
- [Landowner Pallet Feedback](#landowner-pallet-feedback)
- [Metaverse Integration Pallet Feedback](#metaverse-integration-pallet-feedback)

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

- when running the tests, ~~most pass but the ~~"benchmark_block_works"~~ "temp_base_path_works" test fails~~ they all pass:

```bash
    liberland_substrate % cargo test --release --features runtime-benchmarks
    running 17 tests
    test impls::multiplier_tests::congested_chain_simulation ... ignored
    test __pallet_staking_reward_curve_test_module::reward_curve_piece_count ... ok
    test tests::call_size ... ok
    test tests::perbill_as_onchain_accuracy ... ok
    test tests::check_whitelist ... ok
    test tests::validate_transaction_submitter_bounds ... ok
    test impls::multiplier_tests::multiplier_can_grow_from_zero ... ok
    test impls::multiplier_tests::weight_mul_decrease_on_small_block ... ok
    test impls::multiplier_tests::multiplier_cannot_go_below_limit ... ok
    test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test impls::multiplier_tests::stateless_weight_mul ... ok
    test impls::multiplier_tests::truth_value_update_poc_works ... ok
    test impls::multiplier_tests::weight_to_fee_should_not_overflow_on_large_weights ... ok
    test impls::multiplier_tests::weight_mul_grow_on_big_block ... ok
    test __pallet_staking_reward_curve_test_module::reward_curve_precision ... ok
    test impls::multiplier_tests::min_change_per_day ... ok
    test impls::multiplier_tests::time_to_reach_zero ... ok

    test result: ok. 16 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 5.20s


    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 8 tests
    test chain_spec::tests::test_connectivity ... ignored
    test service::tests::test_consensus ... ignored
    test service::tests::test_sync ... ignored
    test chain_spec::tests::test_mainnet_chain_spec ... ok
    test chain_spec::tests::test_bastiat_test_net_chain_spec ... ok
    test chain_spec::tests::test_staging_test_net_chain_spec ... ok
    test chain_spec::tests::test_create_development_chain_spec ... ok
    test chain_spec::tests::test_create_local_testnet_chain_spec ... ok

    test result: ok. 5 passed; 0 failed; 3 ignored; 0 measured; 0 filtered out; finished in 0.05s


    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 1 test
    test benchmark_block_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 35.41s


    running 1 test
    test benchmark_extrinsic_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 7.32s


    running 1 test
    test benchmark_machine_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.21s


    running 1 test
    test benchmark_overhead_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 3.64s


    running 1 test
    test benchmark_pallet_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 8.70s


    running 1 test
    test benchmark_storage_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 2.27s


    running 1 test
    test build_spec_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.06s


    running 1 test
    Completed in 200 ms.
    test check_block_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 35.89s


    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 1 test
    test export_import_revert ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 51.61s


    running 1 test
    Header:
    Header { parent_hash: 0xa43cf5a71ecedbfb937170779b80cf98a92eb3cc2951d24a39d66525f4612cd4, number: 1, state_root: 0x2d4dc5655d08817923bb91df275a0fd237473988a308925becea23459e34a787, extrinsics_root: 0x6b9b2af53b4a2ccf00ffe5698b8760af862f767a200b4e4d88d3cf63b7938899, digest: Digest { logs: [DigestItem::PreRuntime([66, 65, 66, 69], [2, 0, 0, 0, 0, 130, 79, 190, 16, 0, 0, 0, 0]), DigestItem::Consensus([66, 65, 66, 69], [1, 4, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162, 125, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), DigestItem::Seal([66, 65, 66, 69], [230, 81, 33, 33, 189, 143, 33, 123, 46, 13, 211, 142, 60, 38, 4, 196, 161, 121, 27, 43, 53, 247, 76, 77, 183, 205, 180, 146, 180, 219, 85, 123, 144, 184, 106, 250, 116, 26, 201, 205, 5, 84, 63, 124, 106, 147, 230, 143, 182, 180, 26, 78, 249, 118, 60, 241, 22, 108, 34, 254, 214, 115, 72, 130])] } }
    Block bytes: a43cf5a71ecedbfb937170779b80cf98a92eb3cc2951d24a39d66525f4612cd4042d4dc5655d08817923bb91df275a0fd237473988a308925becea23459e34a7876b9b2af53b4a2ccf00ffe5698b8760af862f767a200b4e4d88d3cf63b79388990c0642414245340200000000824fbe1000000000044241424529010104d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0100000000000000000000000000000000000000000000000000000000000000000000000000000005424142450101e6512121bd8f217b2e0dd38e3c2604c4a1791b2b35f74c4db7cdb492b4db557b90b86afa741ac9cd05543f7c6a93e68fb6b41a4ef9763cf1166c22fed673488204280403000be176676c8801
    Extrinsics (1)
    - 0:
    0403000be176676c8801
    Bytes: 280403000be176676c8801

    test inspect_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 31.91s


    running 1 test
    "/tmp/.tmpUAYxR5/chains/dev/db/full" removed.
    test purge_chain_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 33.60s


    running 1 test
    test remember_state_pruning_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 49.35s


    running 2 tests
    test running_two_nodes_with_the_same_ws_port_should_work ... ok
    test running_the_node_works_and_can_be_interrupted has been running for over 60 seconds
    test running_the_node_works_and_can_be_interrupted ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 66.06s


    running 1 test
    test telemetry_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 3.93s


    running 1 test
    test temp_base_path_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 33.65s


    running 2 tests
    test test_regex_matches_properly ... ok
    test version_is_full ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s


    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 80 tests
    test benchmarking::bench_external_propose ... ok
    (...)
    test benchmarking::bench_second ... ok

    test result: ok. 80 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.19s


    running 82 tests
    test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    (...)
    test benchmarking::bench_election_phragmen ... ok

    test result: ok. 82 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.66s


    running 36 tests
    test benchmarking::bench_remove_sub ... ok
    (...)
    test benchmarking::bench_kill_identity ... ok

    test result: ok. 36 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s


    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 22 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    (...)
    test benchmarking::benchmark_tests::test_benchmarks ... ok

    test result: ok. 22 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.43s


    running 29 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    (...)
    test tests::treasury_llm_transfer_to_politipool_locks_funds ... ok

    test result: ok. 29 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s


    running 81 tests
    test benchmarking::bench_burn ... ok
    (...)
    test benchmarking::bench_destroy ... ok

    test result: ok. 81 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.04s


    running 16 tests
    test tests::remove_clerk_deposits_event ... ok
    (...)
    test tests::set_clerk_verifies_origin ... ok

    test result: ok. 16 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 46 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    (...)
    test tests::request_registration_frees_reserves_if_possible ... ok

    test result: ok. 46 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s


    running 161 tests
    test benchmarking::bench_force_no_eras ... ok
    (...)
    test benchmarking::bench_get_npos_voters ... ok

    test result: ok. 161 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.44s


    running 2 tests
    test src/lib.rs - benches::add_benchmarks (line 1717) ... ignored
    test src/lib.rs - benches::list_benchmarks (line 1717) ... ignored

    test result: ok. 0 passed; 0 failed; 2 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 3 tests
    test src/lib.rs - (line 14) ... ignored
    test src/lib.rs - (line 20) ... ignored
    test src/lib.rs - (line 34) ... ignored

    test result: ok. 0 passed; 0 failed; 3 ignored; 0 measured; 0 filtered out; finished in 0.01s


    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 1 test
    test src/lib.rs - (line 41) ... ignored

    test result: ok. 0 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 0.00s


    running 1 test
    test src/lib.rs - (line 159) ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.59s
```

## Landowner Pallet Feedback

Previous comment by @JosephKnecht-lab:

> Your pallet is almost exact fork from pallet-nfts. You have made small modificaiton to add citizenship information. In the original application you state you will use geo coordination but I don't see this reflected in code. Can you make the requirements for this pallet more explicit?

Final assessment by @takahser:

While there is no Landowner pallet, the functionality described in the grant proposal is covered by the NFT and Office pallets. In the previous version that @JosephKnecht-lab assessed, there was no on-chain validation logic for creating plots but this was fixed by a [follow-up PR](https://github.com/liberland/liberland_substrate/pull/291/files#diff-2126ae6766e9fabbb2462c7c1d2b0494c27b7c6e518f4672b1cc3a9d335afb3cR323). The validation takes care that plots are stored only if they're not self-intersecting, contain a minimum number of points (3), are correctly structured and are located within the allowed coordinates as configured (for the sake of this use case, the allowed coordinates equal the coordinates of Liberland). Personally, I agree with the approach to re-use the existing NFTs pallet rather than recreating the logic and adding the missing bits on top of it. This has been smoke-tested successfully.

## Metaverse Integration Pallet Feedback

Previous comment by @JosephKnecht-lab:

> Based on the submitted requirements in your application [document](https://github.com/w3f/Grants-Program/blob/master/applications/liberland.md), you have not provided a pallet implementation. I understand that requirements can change during development, but these changes have to be reflected back in the original requirements document.

Final assessment by @takahser:

Similarly to the Landowner Pallet, while there is no pallet called "Metaverse Integration Pallet", the functionality the grantee promised in their proposal has actually been implemented. While the plotdata for the metaverse is stored on-chain in an efficient, encoded format, their centrally hosted middleware allows for easy decoding into a format that can be interpreted more easily by the metaverse. They also implemented an [on-chain role-based access model](https://github.com/liberland/liberland_substrate/blob/bc60180005a17a3953c95b96fb06b95fe539f6cb/bin/node/runtime/src/lib.rs#L300-L331). This has been smoke-tested successfully.
