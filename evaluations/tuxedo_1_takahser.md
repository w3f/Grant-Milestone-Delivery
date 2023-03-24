# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/Off-Narrative-Labs/Tuxedo/blob/424ab4e73caa73b4434a7dc498b2f0ec70ef511d/LICENSE) | - |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [deployed docs](https://off-narrative-labs.github.io/Tuxedo/tuxedo_core/index.html), [README](https://github.com/Off-Narrative-Labs/Tuxedo/blob/424ab4e73caa73b4434a7dc498b2f0ec70ef511d/README.md) | see [documentation feedback](#documentation-feedback) |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [testing instructions](https://github.com/Off-Narrative-Labs/Tuxedo#testing-and-code-quality), [inline tests](https://github.com/Off-Narrative-Labs/Tuxedo/blob/afc6035e6c07f83df883619786facd40ecef7fa5/tuxedo-core/src/dynamic_typing.rs#L139) | see [testing feedback](#testing-feedback) |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [published packages](https://github.com/orgs/Off-Narrative-Labs/packages) | see [docker feedback](#docker-feedback) |
| 1. | Tuxedo Core | <ul><li>[ ] </li></ul> | (will be reviewed, once 0a.-0d. are fixed) | Spec: *We will create the core of the Tuxedo System, analogous to FRAME Executive and FRAME System* |
| 2. | Token Piece | <ul><li>[ ] </li></ul> | (will be reviewed, once 0a.-0d. are fixed) | Spec: *We will create the first Tuxedo piece that serves as a cryptocurrency, analogous to Pallet Balances* |
| 3. | Tuxedo Node Template | <ul><li>[ ] </li></ul> | (will be reviewed, once 0a.-0d. are fixed) | Spec: *We will create a Substrate node with the runtime built with Tuxedo and including the Token piece. Together this will represent a bitcoin-like token (not PoW though, only the token logic is bitcoin-like)* |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Documentation Feedback

- inline comments: very appropriate, not too many, not too few
- builds work for both `node-template` and `tuxedo-template-wallet`:

    ```bash
    % cargo build --release -p node-template
        Blocking waiting for file lock on package cache
        Blocking waiting for file lock on package cache
        Compiling libc v0.2.139
        (...)
        Compiling sc-cli v0.10.0-dev (https://github.com/paritytech/substrate.git?tag=monthly-2023-03#ad539964)
    Finished release [optimized] target(s) in 7m 49s
    ```

    ```bash
    % cargo build --release -p tuxedo-template-wallet
        Compiling subtle v2.4.1
        Compiling byteorder v1.4.3
        (...)
        Compiling tuxedo-template-wallet v1.0.0-dev (/Users/seraya/repos/Tuxedo/wallet)
    Finished release [optimized] target(s) in 45.00s
    ```

- node runs:

    ```bash
    Tuxedo % ./target/release/node-template --dev

    2023-03-13 18:51:07 Substrate Node    
    2023-03-13 18:51:07 ✌️  version 4.0.0-dev-afc6035e6c0    
    2023-03-13 18:51:07 ❤️  by , 2017-2023    
    2023-03-13 18:51:07 📋 Chain specification: Development    
    2023-03-13 18:51:07 🏷  Node name: sour-brick-8663    
    2023-03-13 18:51:07 👤 Role: AUTHORITY    
    2023-03-13 18:51:07 💾 Database: RocksDb at /var/folders/9y/ny58jn152dzcqf036v5cb4nh0000gn/T/substrateF3TJsJ/chains/dev/db/full    
    2023-03-13 18:51:07 ⛓  Native runtime: tuxedo-template-runtime-1 (tuxedo-template-runtime-1.tx1.au1)    
    2023-03-13 18:51:07 🔨 Initializing Genesis block/state (state: 0x26c2…eb1b, header-hash: 0x3465…c2bb)    
    2023-03-13 18:51:07 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
    2023-03-13 18:51:07 Using default protocol ID "sup" because none is configured in the chain specs    
    2023-03-13 18:51:07 🏷  Local node identity is: 12D3KooWKi8ze5sJCtGmvVbtXP63LfosZQPtHJZBJfqGtFSxhN7s    
    2023-03-13 18:51:07 💻 Operating system: macos    
    2023-03-13 18:51:07 💻 CPU architecture: aarch64    
    2023-03-13 18:51:07 📦 Highest known block at #0    
    2023-03-13 18:51:07 〽️ Prometheus exporter started at 127.0.0.1:9615    
    2023-03-13 18:51:07 Running JSON-RPC HTTP server: addr=127.0.0.1:9933, allowed origins=["*"]    
    2023-03-13 18:51:07 Running JSON-RPC WS server: addr=127.0.0.1:9944, allowed origins=["*"]    
    2023-03-13 18:51:09 🙌 Starting consensus session on top of parent 0x3465b4afb06d8169aec84358f5d245c91827fb72126c4d57b7596bfa136ac2bb  
    ```

- PoC wallet CLI `help` command works:

    ```bash
    Tuxedo % ./target/release/tuxedo-template-wallet --help

    A simple example / template wallet built for the tuxedo template runtime

    Usage: tuxedo-template-wallet [OPTIONS] <COMMAND>

    Commands:
    amoeba-demo  Demonstrate creating an amoeba and performing mitosis on it
    verify-coin  Verify that a particular coin exists in storage. Show its value and owner
    spend-coins  Spend some coins
    help         Print this message or the help of the given subcommand(s)

    Options:
    -e, --endpoint <ENDPOINT>  RPC endpoint of the node that this wallet will connect to [default: http://localhost:9933]
    -h, --help                 Print help
    -V, --version              Print version
    ```

- ~~However, the alledged genesis utxo for `coin000000000000000000000000000000000000000000000000000000000000000000000000` doesn't exist~~ The previous command was wrong. `verify-coin` now works correctly and shows the genesis utxo:

    ```bash
    Tuxedo % ./target/release/tuxedo-template-wallet verify-coin 000000000000000000000000000000000000000000000000000000000000000000000000

    000000000000000000000000000000000000000000000000000000000000000000000000: Found coin worth 100 units owned by 0xd2bf4b844dfefd6772a8843e669f943408966a977e3ae2af1dd78e0f55f4df67
    ```

### Testing Feedback

- good unit test coverage
- tests are usually inline, there have no dedicated testing files been identifies, which is absolutely fine
- all tests pass:

    ```bash
    Tuxedo % cargo test
    Compiling pin-project-lite v0.2.9
    (...)
    Compiling node-template v4.0.0-dev (/Users/seraya/repos/Tuxedo/node)
        Finished test [unoptimized + debuginfo] target(s) in 1m 02s
        Running unittests src/lib.rs (target/debug/deps/node_template-f7df98c3daca95a4)

        running 0 tests

        test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

            Running unittests src/main.rs (target/debug/deps/node_template-78357103ce6c7197)

        running 0 tests

        test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

            Running unittests src/lib.rs (target/debug/deps/tuxedo_core-37d385160829fb41)

        running 35 tests
        test dynamic_typing::tests::display_wrong_type_error ... ok
        test dynamic_typing::tests::display_decoding_failed_error ... ok
        test dynamic_typing::tests::extract_works ... ok
        test dynamic_typing::tests::extract_wrong_type ... ok
        test dynamic_typing::tests::extract_decode_fails ... ok
        test executive::tests::apply_invalid_extrinsic_rejects ... ok
        test executive::tests::apply_empty_works ... ok
        test executive::tests::apply_with_missing_input_fails ... ok
        test executive::tests::execute_empty_block_works ... ok
        test executive::tests::execute_block_with_transaction_works ... ok
        test executive::tests::apply_valid_extrinsic_work ... ok
        test executive::tests::execute_block_invalid_transaction - should panic ... ok
        test executive::tests::execute_block_extrinsic_root_mismatch - should panic ... ok
        test executive::tests::close_block_works ... ok
        test executive::tests::execute_block_state_root_mismatch - should panic ... ok
        test executive::tests::validate_empty_works ... ok
        test executive::tests::update_storage_adds_output ... ok
        test executive::tests::open_block_works ... ok
        test executive::tests::update_storage_consumes_input ... ok
        test executive::tests::validate_with_missing_input_works ... ok
        test executive::tests::validate_with_output_works ... ok
        test executive::tests::validate_with_input_works ... ok
        test executive::tests::validate_with_duplicate_input_fails ... ok
        test redeemer::test::sig_check_with_bad_sig ... ok
        test redeemer::test::test_redeemer_fails ... ok
        test executive::tests::validate_with_pre_existing_output_fails ... ok
        test redeemer::test::test_redeemer_passes ... ok
        test redeemer::test::up_for_grabs_always_redeems ... ok
        test types::tests::extrinsic_is_signed_works ... ok
        test types::tests::extrinsic_no_signed_payload ... ok
        test verifier::testing::test_verifier_fails ... ok
        test verifier::testing::test_verifier_passes ... ok
        test executive::tests::validate_with_unsatisfied_redeemer_fails ... ok
        test executive::tests::validate_with_verifier_error_fails ... ok
        test redeemer::test::sig_check_with_good_sig ... ok

        test result: ok. 35 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.05s

            Running unittests src/lib.rs (target/debug/deps/tuxedo_template_runtime-9f47dd40cde68e54)

        running 59 tests
        test amoeba::test::creation_with_no_output_fails ... ok
        test amoeba::test::creation_multiple_fails ... ok
        test amoeba::test::death_badly_typed_input ... ok
        test amoeba::test::creation_with_badly_typed_output_fails ... ok
        test amoeba::test::creation_with_inputs_fails ... ok
        test amoeba::test::death_multiple_inputs ... ok
        test amoeba::test::creation_valid_transaction_works ... ok
        test amoeba::test::creation_invalid_generation_fails ... ok
        test amoeba::test::death_no_input ... ok
        test amoeba::test::death_valid_transaction_works ... ok
        test amoeba::test::death_with_output ... ok
        test amoeba::test::mitosis_badly_typed_input ... ok
        test amoeba::test::mitosis_badly_typed_output ... ok
        test amoeba::test::mitosis_no_input ... ok
        test amoeba::test::mitosis_only_one_output ... ok
        test amoeba::test::mitosis_too_many_outputs ... ok
        test amoeba::test::mitosis_valid_transaction_works ... ok
        test amoeba::test::mitosis_wrong_generation ... ok
        test kitties::test::breed_dad_when_he_is_tired_fails ... ok
        test kitties::test::breed_mom_when_she_gave_birth_recently_fails ... ok
        test kitties::test::breed_two_dads_fails ... ok
        test kitties::test::breed_two_moms_fails ... ok
        test kitties::test::breed_wrong_input_type_fails ... ok
        test kitties::test::breed_wrong_output_type_fails ... ok
        test kitties::test::check_child_dad_parent_tired_fails ... ok
        test kitties::test::check_child_dna_incorrect_fails ... ok
        test kitties::test::check_child_free_breedings_incorrect_fails ... ok
        test kitties::test::check_child_mom_parent_recently_gave_birth_fails ... ok
        test kitties::test::check_child_num_breedings_non_zero_fails ... ok
        test kitties::test::check_dad_breedings_overflow_fails ... ok
        test kitties::test::check_dad_free_breedings_zero_fails ... ok
        test kitties::test::check_mom_breedings_overflow_fails ... ok
        test kitties::test::check_mom_free_breedings_zero_fails ... ok
        test kitties::test::check_new_dad_dna_doesnt_match_old_fails ... ok
        test kitties::test::check_new_dad_num_breedings_incorrect_fails ... ok
        test kitties::test::check_new_dad_free_breedings_incorrect_fails ... ok
        test kitties::test::check_new_mom_dna_doesnt_match_old_fails ... ok
        test kitties::test::check_new_mom_num_breedings_incorrect_fails ... ok
        test kitties::test::check_new_mom_free_breedings_incorrect_fails ... ok
        test kitties::test::first_input_not_mom_fails ... ok
        test kitties::test::first_output_not_mom_fails ... ok
        test kitties::test::inputs_dont_contain_two_parents_fails ... ok
        test kitties::test::outputs_dont_contain_all_family_members_fails ... ok
        test kitties::test::second_input_not_dad_fails ... ok
        test kitties::test::second_output_not_dad_fails ... ok
        test kitties::test::third_output_not_child_fails ... ok
        test money::test::mint_valid_transaction_works ... ok
        test money::test::mint_with_no_outputs_fails ... ok
        test money::test::mint_with_inputs_fails ... ok
        test money::test::mint_wrong_output_type_fails ... ok
        test money::test::spend_no_inputs_fails ... ok
        test money::test::mint_with_zero_value_output_fails ... ok
        test money::test::spend_no_outputs_is_a_burn ... ok
        test money::test::spend_output_value_exceeds_input_value_fails ... ok
        test money::test::spend_with_zero_value_output_fails ... ok
        test money::test::spend_valid_transaction_work ... ok
        test money::test::spend_wrong_input_type_fails ... ok
        test money::test::spend_wrong_output_type_fails ... ok
        test tests::utxo_money_test_genesis ... ok

        test result: ok. 59 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.05s

            Running unittests src/main.rs (target/debug/deps/tuxedo_template_wallet-ec5aab02a9ed5a15)

        running 0 tests

        test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Doc-tests node-template

        running 0 tests

        test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Doc-tests tuxedo-core

        running 0 tests

        test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Doc-tests tuxedo-template-runtime

        running 0 tests

        test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```

- The [CI on GitHub](https://github.com/Off-Narrative-Labs/Tuxedo/actions/runs/4409652419/jobs/7726203651) doesn't show the clippy warnings that occur on my machine. ~~However, clippy shows some warnings:~~

    ```bash
    Tuxedo % cargo +nightly clippy

        Blocking waiting for file lock on build directory
    Compiling tuxedo-template-runtime v1.0.0-dev (/Users/seraya/repos/Tuxedo/tuxedo-template-runtime)
        Checking tuxedo-core v1.0.0-dev (/Users/seraya/repos/Tuxedo/tuxedo-core)
    Compiling node-template v4.0.0-dev (/Users/seraya/repos/Tuxedo/node)
    warning: variables can be used directly in the `format!` string
    --> tuxedo-core/src/executive.rs:287:27
        |
    287 |                 Err(e) => panic!("{:?}", e),
        |                           ^^^^^^^^^^^^^^^^^
        |
        = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
        = note: `#[warn(clippy::uninlined_format_args)]` on by default
    help: change this to
        |
    287 -                 Err(e) => panic!("{:?}", e),
    287 +                 Err(e) => panic!("{e:?}"),
        |

    warning: `tuxedo-core` (lib) generated 1 warning (run `cargo clippy --fix --lib -p tuxedo-core` to apply 1 suggestion)
        Checking tuxedo-template-wallet v1.0.0-dev (/Users/seraya/repos/Tuxedo/wallet)
    warning: variables can be used directly in the `format!` string
    --> wallet/src/amoeba.rs:44:5
    |
    44 |     println!("Node's response to spawn transaction: {:?}", spawn_response);
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
    = note: `#[warn(clippy::uninlined_format_args)]` on by default
    help: change this to
    |
    44 -     println!("Node's response to spawn transaction: {:?}", spawn_response);
    44 +     println!("Node's response to spawn transaction: {spawn_response:?}");
    |

    warning: variables can be used directly in the `format!` string
    --> wallet/src/amoeba.rs:54:5
    |
    54 |     println!("Eve Amoeba retrieved from storage: {:?}", eve_from_storage);
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
    help: change this to
    |
    54 -     println!("Eve Amoeba retrieved from storage: {:?}", eve_from_storage);
    54 +     println!("Eve Amoeba retrieved from storage: {eve_from_storage:?}");
    |

    warning: variables can be used directly in the `format!` string
    --> wallet/src/amoeba.rs:98:5
        |
    98  | /     println!(
    99  | |         "Node's response to mitosis transaction: {:?}",
    100 | |         mitosis_response
    101 | |     );
        | |_____^
        |
        = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args

    warning: variables can be used directly in the `format!` string
    --> wallet/src/amoeba.rs:111:5
        |
    111 | /     println!(
    112 | |         "Cain Amoeba retrieved from storage: {:?}",
    113 | |         cain_from_storage
    114 | |     );
        | |_____^
        |
        = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args

    warning: variables can be used directly in the `format!` string
    --> wallet/src/amoeba.rs:119:5
        |
    119 | /     println!(
    120 | |         "Able Amoeba retrieved from storage: {:?}",
    121 | |         able_from_storage
    122 | |     );
        | |_____^
        |
        = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args

    warning: variables can be used directly in the `format!` string
    --> wallet/src/money.rs:22:5
    |
    22 |     println!("The args are:: {:?}", args);
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
    help: change this to
    |
    22 -     println!("The args are:: {:?}", args);
    22 +     println!("The args are:: {args:?}");
    |

    warning: variables can be used directly in the `format!` string
    --> wallet/src/money.rs:69:5
    |
    69 | /     println!(
    70 | |         "Node's response to spend transaction: {:?}",
    71 | |         genesis_spend_response
    72 | |     );
    | |_____^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args

    warning: `tuxedo-template-wallet` (bin "tuxedo-template-wallet") generated 7 warnings (run `cargo clippy --fix --bin "tuxedo-template-wallet"` to apply 7 suggestions)
    warning: variables can be used directly in the `format!` string
    --> node/src/service.rs:175:48
        |
    175 |                   return Err(ServiceError::Other(format!(
        |  ________________________________________________^
    176 | |                     "Error hooking up remote keystore for {}: {}",
    177 | |                     url, e
    178 | |                 )))
        | |_________________^
        |
        = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
        = note: `#[warn(clippy::uninlined_format_args)]` on by default

    warning: `node-template` (lib) generated 1 warning (run `cargo clippy --fix --lib -p node-template` to apply 1 suggestion)
    warning: `node-template` (bin "node-template") generated 1 warning (1 duplicate)
        Finished dev [unoptimized + debuginfo] target(s) in 21.29s
    ```

### Docker Feedback

- node image works fine:

    ```bash
    Tuxedo % docker run --network host ghcr.io/off-narrative-labs/tuxedo --dev
    zsh: command not found: #
    Unable to find image 'ghcr.io/off-narrative-labs/tuxedo:latest' locally
    latest: Pulling from off-narrative-labs/tuxedo
    7608715873ec: Pull complete 
    77ff31fc74a3: Pull complete 
    ebdcb33fdc02: Pull complete 
    Digest: sha256:ad790c281aaeae3e67a49ae6df3b88739742d14e6d1e1321ede0a334b150fbc7
    Status: Downloaded newer image for ghcr.io/off-narrative-labs/tuxedo:latest
    WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
    2023-03-13 18:04:06 Substrate Node    
    2023-03-13 18:04:06 ✌️  version 4.0.0-dev-424ab4e73ca    
    2023-03-13 18:04:06 ❤️  by , 2017-2023    
    2023-03-13 18:04:06 📋 Chain specification: Development    
    2023-03-13 18:04:06 🏷  Node name: fresh-bath-4834    
    2023-03-13 18:04:06 👤 Role: AUTHORITY    
    2023-03-13 18:04:06 💾 Database: RocksDb at /tmp/substratewCRbKx/chains/dev/db/full    
    2023-03-13 18:04:06 ⛓  Native runtime: tuxedo-template-runtime-1 (tuxedo-template-runtime-1.tx1.au1)    
    2023-03-13 18:04:07 You're running on a system with a broken `madvise(MADV_DONTNEED)` implementation. This will result in lower performance.    
    2023-03-13 18:04:09 🔨 Initializing Genesis block/state (state: 0x44b7…748a, header-hash: 0x8c1a…c727)    
    2023-03-13 18:04:09 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
    2023-03-13 18:04:10 Using default protocol ID "sup" because none is configured in the chain specs    
    2023-03-13 18:04:10 🏷  Local node identity is: 12D3KooWHRSnRgsAEVv8b88EtvPPbHF9P33EWw5BPLwceFpp7W23    
    2023-03-13 18:04:10 💻 Operating system: linux    
    2023-03-13 18:04:10 💻 CPU architecture: x86_64    
    2023-03-13 18:04:10 💻 Target environment: gnu    
    2023-03-13 18:04:10 💻 Memory: 7851MB    
    2023-03-13 18:04:10 💻 Kernel: 5.10.104-linuxkit    
    2023-03-13 18:04:10 💻 Linux distribution: Ubuntu 20.04.5 LTS    
    2023-03-13 18:04:10 💻 Virtual machine: no    
    2023-03-13 18:04:10 📦 Highest known block at #0    
    2023-03-13 18:04:10 〽️ Prometheus exporter started at 127.0.0.1:9615    
    2023-03-13 18:04:10 Running JSON-RPC HTTP server: addr=127.0.0.1:9933, allowed origins=["*"]    
    2023-03-13 18:04:10 Running JSON-RPC WS server: addr=127.0.0.1:9944, allowed origins=["*"]    
    2023-03-13 18:04:12 🙌 Starting consensus session on top of parent 0x8c1a152b5e8e2346829ea4c9679e3d328f11a7df7f21a00d66442fbc3e57c727    
    ```

- PoC wallet image CLI works fine:

    ```bash
    Tuxedo % docker run --network host ghcr.io/off-narrative-labs/tuxedo-wallet --help

    Unable to find image 'ghcr.io/off-narrative-labs/tuxedo-wallet:latest' locally
    latest: Pulling from off-narrative-labs/tuxedo-wallet
    7608715873ec: Already exists 
    63355a720e28: Pull complete 
    ec50d501709b: Pull complete 
    Digest: sha256:490e5786a7077160568accae7834d9dc0bbf7ee6eeff114f8588e69b9fd056db
    Status: Downloaded newer image for ghcr.io/off-narrative-labs/tuxedo-wallet:latest
    WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
    A simple example / template wallet built for the tuxedo template runtime

    Usage: tuxedo-template-wallet [OPTIONS] <COMMAND>

    Commands:
    amoeba-demo  Demonstrate creating an amoeba and performing mitosis on it
    verify-coin  Verify that a particular coin exists in storage. Show its value and owner
    spend-coins  Spend some coins
    help         Print this message or the help of the given subcommand(s)

    Options:
    -e, --endpoint <ENDPOINT>  RPC endpoint of the node that this wallet will connect to [default: http://localhost:9933]
    -h, --help                 Print help
    -V, --version              Print version
    ```

- ~~However, PoC wallet's alledged genesis utxo for `coin000000000000000000000000000000000000000000000000000000000000000000000000` doesn't exist (same problem as described in the [documentation feedback section](#documentation-feedback))~~ Analogous to the previously existing problem described in [documentation feedback section](#documentation-feedback), with the correct command the genesis utxo is found:

    ```bash
    Tuxedo % docker run --network host ghcr.io/off-narrative-labs/tuxedo-wallet verify-coin 000000000000000000000000000000000000000000000000000000000000000000000000            
    WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
    000000000000000000000000000000000000000000000000000000000000000000000000: Found coin worth 100 units owned by 0xd2bf4b844dfefd6772a8843e669f943408966a977e3ae2af1dd78e0f55f4df67
    ```

- Split the 100 tokens into two of values 20 and 25, burning the remaining 5

    ```bash
    Tuxedo % docker run --network host ghcr.io/off-narrative-labs/tuxedo-wallet spend-coins \
    --input 000000000000000000000000000000000000000000000000000000000000000000000000 \
    --output-amount 20 \
    --output-amount 25

    The args are:: SpendArgs { seed: "news slush supreme milk chapter athlete soap sausage put clutch what kitten", input: ["000000000000000000000000000000000000000000000000000000000000000000000000"], recipient: "d2bf4b844dfefd6772a8843e669f943408966a977e3ae2af1dd78e0f55f4df67", output_amount: [20, 25] }
    000000000000000000000000000000000000000000000000000000000000000000000000: Found coin worth 100 units owned by 0xd2bf4b844dfefd6772a8843e669f943408966a977e3ae2af1dd78e0f55f4df67
    Node's response to spend transaction: Ok("0x9f7ab373e0179ce366c14a227765d0328a47d46e28ca50e987a6b5339a914253")
    77dbc3dacaf32779e14be6ac60b9f8347170703c95039cda016213f064054a1500000000: Found coin worth 20 units owned by 0xd2bf4b844dfefd6772a8843e669f943408966a977e3ae2af1dd78e0f55f4df67
    77dbc3dacaf32779e14be6ac60b9f8347170703c95039cda016213f064054a1501000000: Found coin worth 25 units owned by 0xd2bf4b844dfefd6772a8843e669f943408966a977e3ae2af1dd78e0f55f4df67
    ```

- Further split the 25 token utxo into 10 and 5, burning the remaining 10

    ```bash
    Tuxedo % docker run --network host ghcr.io/off-narrative-labs/tuxedo-wallet spend-coins \
    --input 77dbc3dacaf32779e14be6ac60b9f8347170703c95039cda016213f064054a1501000000 \   
    --output-amount 10 \
    --output-amount 5

    The args are:: SpendArgs { seed: "news slush supreme milk chapter athlete soap sausage put clutch what kitten", input: ["77dbc3dacaf32779e14be6ac60b9f8347170703c95039cda016213f064054a1501000000"], recipient: "d2bf4b844dfefd6772a8843e669f943408966a977e3ae2af1dd78e0f55f4df67", output_amount: [10, 5] }
    77dbc3dacaf32779e14be6ac60b9f8347170703c95039cda016213f064054a1501000000: Found coin worth 25 units owned by 0xd2bf4b844dfefd6772a8843e669f943408966a977e3ae2af1dd78e0f55f4df67
    Node's response to spend transaction: Ok("0xa8a43f24f35b884b524284f4301dfe1deb08a21b75edee559a8d6e01f8c3fb81")
    92c805dbaa88e20670aac3925e53726dc3b7e173a94ffc170b573f5e7213f96c00000000: Found coin worth 10 units owned by 0xd2bf4b844dfefd6772a8843e669f943408966a977e3ae2af1dd78e0f55f4df67
    92c805dbaa88e20670aac3925e53726dc3b7e173a94ffc170b573f5e7213f96c01000000: Found coin worth 5 units owned by 0xd2bf4b844dfefd6772a8843e669f943408966a977e3ae2af1dd78e0f55f4df67
    ```

- Join the 20 token utxo and 10 token utxo back into a single 30 token utxo, burning nothing

    ```bash
    % docker run --network host ghcr.io/off-narrative-labs/tuxedo-wallet spend-coins \
    --input 77dbc3dacaf32779e14be6ac60b9f8347170703c95039cda016213f064054a1500000000 \
    --input 92c805dbaa88e20670aac3925e53726dc3b7e173a94ffc170b573f5e7213f96c00000000 \
    --output-amount 30

    The args are:: SpendArgs { seed: "news slush supreme milk chapter athlete soap sausage put clutch what kitten", input: ["77dbc3dacaf32779e14be6ac60b9f8347170703c95039cda016213f064054a1500000000", "92c805dbaa88e20670aac3925e53726dc3b7e173a94ffc170b573f5e7213f96c00000000"], recipient: "d2bf4b844dfefd6772a8843e669f943408966a977e3ae2af1dd78e0f55f4df67", output_amount: [30] }
    77dbc3dacaf32779e14be6ac60b9f8347170703c95039cda016213f064054a1500000000: Found coin worth 20 units owned by 0xd2bf4b844dfefd6772a8843e669f943408966a977e3ae2af1dd78e0f55f4df67
    92c805dbaa88e20670aac3925e53726dc3b7e173a94ffc170b573f5e7213f96c00000000: Found coin worth 10 units owned by 0xd2bf4b844dfefd6772a8843e669f943408966a977e3ae2af1dd78e0f55f4df67
    Node's response to spend transaction: Ok("0x98369bb4ebe44cea83fe606b6910d75cc773a824d282a612eb1ce30829a4ecf1")
    d09cabc07411f7e0d5277334e5ccfc90b0cf4377eddf4794a2081382e28749d500000000: Found coin worth 30 units owned by 0xd2bf4b844dfefd6772a8843e669f943408966a977e3ae2af1dd78e0f55f4df67
    ```
