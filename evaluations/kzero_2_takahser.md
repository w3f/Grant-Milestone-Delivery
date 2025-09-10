# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/KZero.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License                   | <ul><li>[x] </li></ul> | [GPLv3](https://github.com/kzero-xyz/kzero/blob/a837bce3cc791d296715a7264b1400b8210b5f31/LICENSE) | OK |
| 0b.    | Documentation             | <ul><li>[x] </li></ul> | [pallet docs](https://github.com/kzero-xyz/kzero-grant-docs/blob/fe35c7bf7fafb05b2cc19ac4390ae63e7a900645/kzero-pallet-zklogin.md), [kzero primitive docs](https://github.com/kzero-xyz/kzero-grant-docs/blob/fe35c7bf7fafb05b2cc19ac4390ae63e7a900645/kzero-primitive-zklogin.md) | Extensive docs |
| 0c.    | Testing and Testing Guide | <ul><li>[x] </li></ul> | [pallet test instructions](https://github.com/kzero-xyz/kzero-grant-docs/blob/fe35c7bf7fafb05b2cc19ac4390ae63e7a900645/kzero-pallet-zklogin.md#running-the-tests), [kzero primitive test instructions](https://github.com/kzero-xyz/kzero-grant-docs/blob/fe35c7bf7fafb05b2cc19ac4390ae63e7a900645/kzero-primitive-zklogin.md#running-the-tests) | See [Testing Feedback](#testing-feedback) |
| 0d.    | Docker                    | <ul><li>[x] </li></ul> | [Instructions](https://github.com/kzero-xyz/kzero-grant-docs/blob/3f2d770218c93da310f20e731e17fb4f5763fbf4/m2-docker-tutorial.md) | OK |
| 1      | kzero-runtime             | <ul><li>[x] </li></ul> | [repo](https://github.com/kzero-xyz/kzero) | OK                                             |
| 2      | Tests                     | <ul><li>[x] </li></ul> | [pallet tests](https://github.com/kzero-xyz/kzero-grant-docs/blob/fe35c7bf7fafb05b2cc19ac4390ae63e7a900645/kzero-pallet-zklogin.md#testing), [kzero primitive tests](https://github.com/kzero-xyz/kzero-grant-docs/blob/fe35c7bf7fafb05b2cc19ac4390ae63e7a900645/kzero-primitive-zklogin.md#testing) | See [Testing Feedback](#testing-feedback)                |
| 3      | docs                      | <ul><li>[x] </li></ul> | [docs](https://github.com/kzero-xyz/kzero-grant-docs/blob/fe35c7bf7fafb05b2cc19ac4390ae63e7a900645/kzero-integration-guide.md) | A tutorial for how to integrate Kzero into a substrate-based blockchain (testing outside scope) |

## General Notes

### Testing Feedback

#### Demo

- They organized an interactive demo (via video call), including:
    - [x] keypair generation, and giving the pub key the permission to do calls to google's jwk endpoint
    - [x] minimal ui allows for signing up via google, and receiving the JWT (though it didn't work on the first attempt)
    - [x] sending DOT to address works
    - [x] generating a zk proof works (proofs that the ephemeral key is authenticated to access the on-chain account that relates to the jwt received from google, without leaking any confidential details)
    - [x] transfer using `zkLogin.submitZkloginUnsigned` (note: eph. key has an expiration, so the right to control the account related to the jwt is timely limited)
 
Notably, some of these features are out of scope for M2, and instead part of M4 (e.g. the ui-related parts)
Overall, everything works well.

#### Testruns, Builds, Benchmarks, etc.

Some of the tests and build logs include warnings. Additionally, the pallet benchmark build failed.

- [x] Pallet tests pass (covers zkLogin, JWK, proxy, and recovery flows, as well as error and edge cases)
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo test -p pallet-zklogin

    warning: /Users/xxx/repos/kzero/runtime/Cargo.toml: unused manifest key: dependencies.scale-codec.package
    warning: /Users/xxx/repos/kzero/tests/tool/Cargo.toml: unused manifest key: dependencies.scale-codec.package
      Compiling proc-macro2 v1.0.91
      
      (...)
      
      Compiling pallet-zklogin v0.1.0 (/Users/xxx/repos/kzero/frame/zklogin)
    warning: unused import: `RawOrigin`
      --> frame/zklogin/src/lib.rs:58:9
      |
    58 |         RawOrigin,
      |         ^^^^^^^^^
      |
      = note: `#[warn(unused_imports)]` on by default

    warning: `pallet-zklogin` (lib) generated 1 warning (run `cargo fix --lib -p pallet-zklogin` to apply 1 suggestion)
    warning: `pallet-zklogin` (lib test) generated 1 warning (1 duplicate)
        Finished `test` profile [unoptimized + debuginfo] target(s) in 1m 00s
        Running unittests src/lib.rs (target/debug/deps/pallet_zklogin-ea4b4b8a47777831)

    running 22 tests
    test tests::test_parse_jwk_with_google_format ... ok
    test tests::test_parse_jwk_missing_required_fields ... ok
    test tests::test_check_jwk_not_onchain_when_not_exists ... ok
    test tests::test_parse_jwk_success ... ok
    test tests::test_check_jwk_not_onchain_when_different_content ... ok
    test tests::test_check_jwk_not_onchain_when_same_content ... ok
    test tests::test_fetch_jwks ... ok
    test tests::test_genesis_config_builds ... ok
    test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_update_keys ... ok
    test tests::test_set_jwk ... ok
    test tests::test_submit_jwks_unsigned ... ok
    test tests::basic_setup_works ... ok
    test tests::validate_unsigned_should_fail_when_jwk_not_match ... ok
    test tests::validate_add_proxy_should_work ... ok
    test tests::validate_proxy_call_should_work ... ok
    test tests::validate_create_recovery_should_work ... ok
    test tests::validate_remove_proxy_should_work ... ok
    test tests::validate_complete_recovery_flow_should_work ... ok
    test tests::test_submit_zklogin_unsigned ... ok
    test tests::should_weight_the_same ... ok
    test tests::validate_unsigned_should_work ... ok

    test result: ok. 22 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 32.99s

      Doc-tests pallet_zklogin

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```
  </details>

- [x] Pallet benchmark build passes with some warnings
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo build --package node-template --release --features "primitive-zklogin/testing runtime-benchmarks"
    warning: /Users/xxx/repos/kzero/tests/tool/Cargo.toml: unused manifest key: dependencies.scale-codec.package
    warning: /Users/xxx/repos/kzero/runtime/Cargo.toml: unused manifest key: dependencies.scale-codec.package
      Compiling openssl v0.10.68
    
      (...)

      warning: unused import: `RawOrigin`
        --> frame/zklogin/src/lib.rs:58:9
        |
      58 |         RawOrigin,
        |         ^^^^^^^^^
        |
        = note: `#[warn(unused_imports)]` on by default

      Compiling kvdb-rocksdb v0.19.0
      Compiling sc-client-db v0.44.0 (https://github.com/paritytech/polkadot-sdk?branch=stable2407#92be93c7)
        warning: `pallet-zklogin` (lib) generated 1 warning (run `cargo fix --lib -p pallet-zklogin` to apply 1 suggestion)
      Compiling str0m v0.5.1
      
      (...)
      
      Compiling frame-benchmarking-cli v42.0.1 (https://github.com/paritytech/polkadot-sdk?branch=stable2407#92be93c7)
        Finished `release` profile [optimized] target(s) in 2m 23s
    ```
  </details>

- [x] Benchmark generation passes.

  <details>
    <summary>Output</summary>

    ```zsh
    % ./target/release/node-template benchmark pallet \
    --chain dev \
    --pallet pallet_zklogin \
    --extrinsic '*' \
    --steps 50 \
    --repeat 20 \
    --output frame/zklogin/src/newWeight.rs
    # --output frame/zklogin/src/weights.rs
    2025-08-18 18:36:57 Using the chain spec instead of the runtime to generate the genesis state is deprecated. Please remove the `--chain`/`--dev`/`--local` argument, point `--runtime` to your runtime blob and set `--genesis-builder=runtime`. This warning may become a hard error any time after December 2024.    
    2025-08-18 18:36:57 Loading WASM from genesis state    
    2025-08-18 18:36:57 [  0 % ] Starting benchmark: pallet_zklogin::submit_jwks_unsigned    
    2025-08-18 18:37:02 [  0 % ] Running  benchmark: pallet_zklogin::submit_jwks_unsigned(1 args) 41/50 1/1    
    2025-08-18 18:37:04 [ 33 % ] Starting benchmark: pallet_zklogin::update_keys    
    2025-08-18 18:37:08 [ 33 % ] Running  benchmark: pallet_zklogin::update_keys(1 args) 28/50 1/1    
    2025-08-18 18:37:13 [ 33 % ] Running  benchmark: pallet_zklogin::update_keys(1 args) 42/50 1/1    
    2025-08-18 18:37:17 [ 66 % ] Starting benchmark: pallet_zklogin::set_jwk    
    Pallet: "pallet_zklogin", Extrinsic: "submit_jwks_unsigned", Lowest values: [], Highest values: [], Steps: 50, Repeat: 20
    Raw Storage Info
    ========
    Storage: `ZkLogin::Jwks` (r:0 w:10)
    Proof: `ZkLogin::Jwks` (`max_values`: None, `max_size`: None, mode: `Measured`)

    Median Slopes Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=      4.2
        + c     11.8
                  µs

    Reads = 0 + (0 * c)
    Writes = 0 + (1 * c)
    Recorded proof Size = 42 + (0 * c)

    Min Squares Analysis
    ========
    -- Extrinsic Time --

    Data points distribution:
        c   mean µs  sigma µs       %
        0      3.28     0.448   13.6%
        1     17.34     0.651    3.7%
        2     28.26     0.912    3.2%
        3     38.48     1.117    2.9%
        4     49.78     1.446    2.9%
        5     64.44     1.971    3.0%
        6     76.44     2.499    3.2%
        7      86.1       2.7    3.1%
        8     100.3     3.614    3.6%
        9     110.3     3.252    2.9%
      10     125.2     5.249    4.1%

    Quality and confidence:
    param     error
    c         0.038

    Model:
    Time ~=    3.854
        + c    11.92
                  µs

    Reads = 0 + (0 * c)
    Writes = 0 + (1 * c)
    Recorded proof Size = 28 + (2 * c)

    Pallet: "pallet_zklogin", Extrinsic: "update_keys", Lowest values: [], Highest values: [], Steps: 50, Repeat: 20
    Raw Storage Info
    ========
    Storage: `ZkLogin::Keys` (r:1 w:1)
    Proof: `ZkLogin::Keys` (`max_values`: Some(1), `max_size`: None, mode: `Measured`)

    Median Slopes Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=     10.8
        + c      0.4
                  µs

    Reads = 1 + (0 * c)
    Writes = 1 + (0 * c)
    Recorded proof Size = 42 + (0 * c)

    Min Squares Analysis
    ========
    -- Extrinsic Time --

    Data points distribution:
        c   mean µs  sigma µs       %
        0       9.4     0.489    5.2%
        1     11.16     0.856    7.6%
        2        12     0.721    6.0%
        3     14.16     0.945    6.6%
        4     11.74     0.715    6.0%
        5     12.14      1.51   12.4%
        6     13.36     1.533   11.4%
        7     14.36     1.109    7.7%
        8     14.66     1.159    7.9%
        9      13.9     0.994    7.1%
      10      13.2     0.979    7.4%

    Quality and confidence:
    param     error
    c         0.021

    Model:
    Time ~=     10.7
        + c    0.436
                  µs

    Reads = 1 + (0 * c)
    Writes = 1 + (0 * c)
    Recorded proof Size = 42 + (0 * c)

    Pallet: "pallet_zklogin", Extrinsic: "set_jwk", Lowest values: [], Highest values: [], Steps: 50, Repeat: 20
    Raw Storage Info
    ========
    Storage: `ZkLogin::Jwks` (r:0 w:1)
    Proof: `ZkLogin::Jwks` (`max_values`: None, `max_size`: None, mode: `Measured`)

    Median Slopes Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=       15
                  µs

    Reads = 0
    Writes = 1
    Recorded proof Size = 0

    Min Squares Analysis
    ========
    -- Extrinsic Time --

    Model:
    Time ~=       15
                  µs

    Reads = 0
    Writes = 1
    Recorded proof Size = 0

    Created file: "frame/zklogin/src/newWeight.rs"
    zsh: command not found: #
    ```
  </details>

- [x] KZero primitive tests pass
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo test -p primitive-zklogin --features testing

    warning: /Users/xxx/repos/kzero/tests/tool/Cargo.toml: unused manifest key: dependencies.scale-codec.package
    warning: /Users/xxx/repos/kzero/runtime/Cargo.toml: unused manifest key: dependencies.scale-codec.package
      Compiling libc v0.2.169
      Compiling scale-info v2.11.6
      Compiling hash-db v0.16.0
      Compiling serde_json v1.0.133
      Compiling trie-root v0.18.0
      Compiling memory-db v0.32.0
      Compiling trie-db v0.29.1
      Compiling bounded-collections v0.2.2
      Compiling primitive-types v0.12.2
      Compiling sp-arithmetic v26.0.0 (https://github.com/paritytech/polkadot-sdk?branch=stable2407#92be93c7)
      Compiling sp-runtime-interface v28.0.0 (https://github.com/paritytech/polkadot-sdk?branch=stable2407#92be93c7)
      Compiling cc v1.0.83
      Compiling sp-weights v31.0.0 (https://github.com/paritytech/polkadot-sdk?branch=stable2407#92be93c7)
      Compiling secp256k1-sys v0.9.2
      Compiling backtrace v0.3.69
      Compiling ring v0.17.7
      Compiling sp-panic-handler v13.0.0 (https://github.com/paritytech/polkadot-sdk?branch=stable2407#92be93c7)
      Compiling secp256k1 v0.28.1
      Compiling sp-core v34.0.0 (https://github.com/paritytech/polkadot-sdk?branch=stable2407#92be93c7)
      Compiling jsonwebtoken v9.3.0 (https://github.com/mimir-labs/jsonwebtoken?branch=no_std_v9.3.0#0f29e31f)
      Compiling sp-trie v37.0.0 (https://github.com/paritytech/polkadot-sdk?branch=stable2407#92be93c7)
      Compiling sp-keystore v0.40.0 (https://github.com/paritytech/polkadot-sdk?branch=stable2407#92be93c7)
      Compiling sp-state-machine v0.43.0 (https://github.com/paritytech/polkadot-sdk?branch=stable2407#92be93c7)
      Compiling sp-io v38.0.1 (https://github.com/paritytech/polkadot-sdk?branch=stable2407#92be93c7)
      Compiling sp-application-crypto v38.0.0 (https://github.com/paritytech/polkadot-sdk?branch=stable2407#92be93c7)
      Compiling sp-runtime v39.0.3 (https://github.com/paritytech/polkadot-sdk?branch=stable2407#92be93c7)
      Compiling primitive-zklogin v0.1.0 (/Users/xxx/repos/kzero/primitives/zklogin)
    warning: unused imports: `ExtrinsicExt` and `SignaturePayloadExt`
    --> primitives/zklogin/src/tests.rs:8:21
      |
    8 | use crate::traits::{ExtrinsicExt, ReplaceSender, SignaturePayloadExt, TryIntoEphPubKey};
      |                     ^^^^^^^^^^^^                 ^^^^^^^^^^^^^^^^^^^
      |
      = note: `#[warn(unused_imports)]` on by default

    warning: unused import: `sp_runtime::traits::Clear`
      --> primitives/zklogin/src/tests.rs:21:5
      |
    21 | use sp_runtime::traits::Clear;
      |     ^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused import: `std::str::FromStr`
      --> primitives/zklogin/src/tests.rs:22:5
      |
    22 | use std::str::FromStr;
      |     ^^^^^^^^^^^^^^^^^

    warning: `primitive-zklogin` (lib test) generated 3 warnings (run `cargo fix --lib -p primitive-zklogin --tests` to apply 3 suggestions)
        Finished `test` profile [unoptimized + debuginfo] target(s) in 21.62s
        Running unittests src/lib.rs (target/debug/deps/primitive_zklogin-90d85a9e32260e26)

    running 13 tests
    test tests::test_replace_sender ... ok
    test tests::test_try_into_eph_pubkey ... ok
    test tests::test_invalid_affine_should_not_be_on_curve ... ok
    test tests::test_invalid_affine_type_should_be_rejected ... ok
    test tests::test_hash_to_field_overflow - should panic ... ok
    test tests::test_valid_affine_should_be_on_curve ... ok
    test tests::test_hash_to_field ... ok
    test tests::zk_login_should_fail_when_address_seed_not_match ... ok
    test tests::zk_login_should_fail_when_eph_pubkey_not_match ... ok
    test tests::zk_login_should_fail_when_max_epoch_not_match ... ok
    test tests::zk_login_should_fail_when_jwk_not_match ... ok
    test tests::verify_zklogin ... ok
    test tests::test_to_poseidon_hash ... ok

    test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 8.28s

      Doc-tests primitive_zklogin

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```
  </details>
