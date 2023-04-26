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
- however, running the node failed with an "cannot deserialize module: UnknownOpcode(192)" error on my machine:

    ```bash
    liberland_substrate % cargo run --release -- --dev
        Finished release [optimized] target(s) in 0.81s
    warning: the following packages contain code that will be rejected by a future version of Rust: fs_extra v1.2.0, nalgebra v0.27.1
    note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 1`
        Running `target/release/substrate --dev`
    2023-04-26 15:39:16 Substrate Node    
    2023-04-26 15:39:16 ✌️  version 3.0.0-dev-bc60180005a    
    2023-04-26 15:39:16 ❤️  by Parity Technologies <admin@parity.io>, 2017-2023    
    2023-04-26 15:39:16 📋 Chain specification: Development    
    2023-04-26 15:39:16 🏷  Node name: slimy-statement-6443    
    2023-04-26 15:39:16 👤 Role: AUTHORITY    
    2023-04-26 15:39:16 💾 Database: RocksDb at /var/folders/9y/ny58jn152dzcqf036v5cb4nh0000gn/T/substrateyPhDzg/chains/dev/db/full    
    2023-04-26 15:39:16 ⛓  Native runtime: Liberland-8 (liberland-node-0.tx1.au10)    
    Error: Service(Client(VersionInvalid("cannot deserialize module: UnknownOpcode(192)")))
    2023-04-26 15:39:17 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators    
    2023-04-26 15:39:17 [0] 💸 generated 1 npos targets    
    2023-04-26 15:39:17 Cannot create a runtime error=Other("cannot deserialize module: UnknownOpcode(192)")
    ```

- when running the tests, most pass but the "benchmark_block_works" test fails:

```bash
    liberland_substrate % cargo test --release --features runtime-benchmarks
    Compiling kitchensink-runtime v3.0.0-dev (/Users/seraya/repos/liberland_substrate/bin/node/runtime)
    Compiling node-executor v3.0.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v0.9.37#f38bd667)
    Compiling node-cli v3.0.0-dev (/Users/seraya/repos/liberland_substrate/bin/node/cli)
        Finished release [optimized] target(s) in 2m 17s
    warning: the following packages contain code that will be rejected by a future version of Rust: fs_extra v1.2.0, nalgebra v0.27.1
    note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 1`
        Running unittests src/lib.rs (target/release/deps/kitchensink_runtime-c9093eaaac2d24f1)

    running 17 tests
    test impls::multiplier_tests::congested_chain_simulation ... ignored
    test __pallet_staking_reward_curve_test_module::reward_curve_piece_count ... ok
    test impls::multiplier_tests::multiplier_can_grow_from_zero ... ok
    test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test impls::multiplier_tests::multiplier_cannot_go_below_limit ... ok
    test impls::multiplier_tests::weight_mul_decrease_on_small_block ... ok
    test impls::multiplier_tests::stateless_weight_mul ... ok
    test __pallet_staking_reward_curve_test_module::reward_curve_precision ... ok
    test tests::call_size ... ok
    test tests::check_whitelist ... ok
    test tests::perbill_as_onchain_accuracy ... ok
    test tests::validate_transaction_submitter_bounds ... ok
    test impls::multiplier_tests::truth_value_update_poc_works ... ok
    test impls::multiplier_tests::weight_mul_grow_on_big_block ... ok
    test impls::multiplier_tests::weight_to_fee_should_not_overflow_on_large_weights ... ok
    test impls::multiplier_tests::min_change_per_day ... ok
    test impls::multiplier_tests::time_to_reach_zero ... ok

    test result: ok. 16 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 4.31s

        Running unittests src/lib.rs (target/release/deps/liberland_traits-3dbd387209bb90a0)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/release/deps/node_cli-d09e0ccbd5536ba7)

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

        Running unittests bin/main.rs (target/release/deps/substrate-553778a20ba6f399)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/benchmark_block_works.rs (target/release/deps/benchmark_block_works-e9a49d36ddb6b457)

    running 1 test
    test benchmark_block_works ... FAILED

    failures:

    ---- benchmark_block_works stdout ----
    Observed node output:
    2023-04-26 15:43:43 Substrate Node    
    2023-04-26 15:43:43 ✌️  version 3.0.0-dev-bc60180005a    
    2023-04-26 15:43:43 ❤️  by Parity Technologies <admin@parity.io>, 2017-2023    
    2023-04-26 15:43:43 📋 Chain specification: Development    
    2023-04-26 15:43:43 🏷  Node name: hard-to-find-steam-1441    
    2023-04-26 15:43:43 👤 Role: AUTHORITY    
    2023-04-26 15:43:43 💾 Database: RocksDb at /var/folders/9y/ny58jn152dzcqf036v5cb4nh0000gn/T/.tmp0G4LKy/chains/dev/db/full    
    2023-04-26 15:43:43 ⛓  Native runtime: Liberland-8 (liberland-node-0.tx1.au10)    
    2023-04-26 15:43:44 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators    
    2023-04-26 15:43:44 [0] 💸 generated 1 npos targets    
    Error: Service(Client(VersionInvalid("cannot deserialize module: UnknownOpcode(192)")))
    2023-04-26 15:43:44 Cannot create a runtime error=Other("cannot deserialize module: UnknownOpcode(192)")

    thread 'benchmark_block_works' panicked at 'We should get a WebSocket address', bin/node/cli/tests/common.rs:176:13
    note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace


    failures:
        benchmark_block_works

    test result: FAILED. 0 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.88s

    error: test failed, to rerun pass `-p node-cli --test benchmark_block_works`
```