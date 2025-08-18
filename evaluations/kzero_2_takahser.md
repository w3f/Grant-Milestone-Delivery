# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/KZero.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License                   | <ul><li>[x] </li></ul> | [GPLv3](https://github.com/kzero-xyz/kzero/blob/a837bce3cc791d296715a7264b1400b8210b5f31/LICENSE) | OK |
| 0b.    | Documentation             | <ul><li>[ ] </li></ul> | [pallet docs](https://github.com/kzero-xyz/kzero-grant-docs/blob/fe35c7bf7fafb05b2cc19ac4390ae63e7a900645/kzero-pallet-zklogin.md), [kzero primitive docs](https://github.com/kzero-xyz/kzero-grant-docs/blob/fe35c7bf7fafb05b2cc19ac4390ae63e7a900645/kzero-primitive-zklogin.md) | Extensive docs |
| 0c.    | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [pallet test instructions](https://github.com/kzero-xyz/kzero-grant-docs/blob/fe35c7bf7fafb05b2cc19ac4390ae63e7a900645/kzero-pallet-zklogin.md#running-the-tests), [kzero primitive test instructions](https://github.com/kzero-xyz/kzero-grant-docs/blob/fe35c7bf7fafb05b2cc19ac4390ae63e7a900645/kzero-primitive-zklogin.md#running-the-tests) | See [Testing Feedback](#testing-feedback) |
| 0d.    | Docker                    | <ul><li>[ ] </li></ul> | - |N/A |
| 1      | kzero-runtime             | <ul><li>[x] </li></ul> | [repo](https://github.com/kzero-xyz/kzero) | OK                                             |
| 2      | Tests                     | <ul><li>[ ] </li></ul> | [pallet tests](https://github.com/kzero-xyz/kzero-grant-docs/blob/fe35c7bf7fafb05b2cc19ac4390ae63e7a900645/kzero-pallet-zklogin.md#testing), [kzero primitive tests](https://github.com/kzero-xyz/kzero-grant-docs/blob/fe35c7bf7fafb05b2cc19ac4390ae63e7a900645/kzero-primitive-zklogin.md#testing) | See [Testing Feedback](#testing-feedback)                |
| 3      | docs                      | <ul><li>[x] </li></ul> | [docs](https://github.com/kzero-xyz/kzero-grant-docs/blob/fe35c7bf7fafb05b2cc19ac4390ae63e7a900645/kzero-integration-guide.md) | A tutorial for how to integrate Kzero into a substrate-based blockchain (testing outside scope) |

## General Notes

### Demo

- They organized an interactive demo (via video call), including:
    - [x] keypair generation, and giving the pub key the permission to do calls to google's jwk endpoint
    - [x] minimal ui allows for signing up via google, and receiving the JWT (though it didn't work on the first attempt)
    - [x] sending DOT to address works
    - [x] generating a zk proof works (proofs that the ephemeral key is authenticated to access the on-chain account that relates to the jwt received from google, without leaking any confidential details)
    - [x] transfer using `zkLogin.submitZkloginUnsigned` (note: eph. key has an expiration, so the right to control the account related to the jwt is timely limited)
 
Notably, some of these features are out of scope for M2, and instead part of M4 (e.g. the ui-related parts)
Overall, everything works well.

### Testing Feedback

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



- [ ] Pallet benchmark build fails
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo build --package node-template --release --features "primitive-zklogin/testing runtime-benchmarks"
    warning: /Users/seraya/repos/kzero/tests/tool/Cargo.toml: unused manifest key: dependencies.scale-codec.package
    warning: /Users/seraya/repos/kzero/runtime/Cargo.toml: unused manifest key: dependencies.scale-codec.package
      Compiling proc-macro2 v1.0.91
      
      (...)
      
      Compiling pallet-zklogin v0.1.0 (/Users/seraya/repos/kzero/frame/zklogin)
    error[E0432]: unresolved import `frame_benchmarking`
    --> frame/zklogin/src/benchmarking.rs:4:5
      |
    4 | use frame_benchmarking::benchmarks;
      |     ^^^^^^^^^^^^^^^^^^ use of undeclared crate or module `frame_benchmarking`

    warning: unused import: `super::*`
    --> frame/zklogin/src/benchmarking.rs:2:5
      |
    2 | use super::*;
      |     ^^^^^^^^
      |
      = note: `#[warn(unused_imports)]` on by default

    warning: unused imports: `RawOrigin` and `pallet_prelude::BlockNumberFor`
    --> frame/zklogin/src/benchmarking.rs:5:20
      |
    5 | use frame_system::{pallet_prelude::BlockNumberFor, RawOrigin};
      |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  ^^^^^^^^^

    warning: unused imports: `SignaturePayloadExt` and `TryIntoEphPubKey`
    --> frame/zklogin/src/benchmarking.rs:6:33
      |
    6 | use primitive_zklogin::traits::{SignaturePayloadExt, TryIntoEphPubKey};
      |                                 ^^^^^^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^

    warning: unused import: `sp_core::ed25519`
    --> frame/zklogin/src/benchmarking.rs:7:5
      |
    7 | use sp_core::ed25519;
      |     ^^^^^^^^^^^^^^^^

    warning: unused import: `sp_io::crypto::ed25519_generate`
    --> frame/zklogin/src/benchmarking.rs:8:5
      |
    8 | use sp_io::crypto::ed25519_generate;
      |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused import: `sp_runtime::traits::Dispatchable`
    --> frame/zklogin/src/benchmarking.rs:9:5
      |
    9 | use sp_runtime::traits::Dispatchable;
      |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused import: `frame_support::pallet_prelude::ValidateUnsigned`
      --> frame/zklogin/src/benchmarking.rs:10:5
      |
    10 | use frame_support::pallet_prelude::ValidateUnsigned;
      |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused import: `frame_support::assert_ok`
      --> frame/zklogin/src/benchmarking.rs:11:5
      |
    11 | use frame_support::assert_ok;
      |     ^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused import: `sp_runtime::generic::UncheckedExtrinsic`
      --> frame/zklogin/src/benchmarking.rs:13:5
      |
    13 | use sp_runtime::generic::UncheckedExtrinsic;
      |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused import: `hex`
      --> frame/zklogin/src/benchmarking.rs:14:5
      |
    14 | use hex;
      |     ^^^

    warning: unused import: `frame_support::traits::Currency`
      --> frame/zklogin/src/benchmarking.rs:15:5
      |
    15 | use frame_support::traits::Currency;
      |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused import: `pallet_balances::Pallet as BalancesPallet`
      --> frame/zklogin/src/benchmarking.rs:16:5
      |
    16 | use pallet_balances::Pallet as BalancesPallet;
      |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused import: `crate::Pallet as ZKLogin`
      --> frame/zklogin/src/benchmarking.rs:17:5
      |
    17 | use crate::Pallet as ZKLogin;
      |     ^^^^^^^^^^^^^^^^^^^^^^^^

    warning: unused imports: `BenchmarkJwks` and `BenchmarkKeys`
      --> frame/zklogin/src/benchmarking.rs:20:29
      |
    20 | use crate::benchmark_data::{BenchmarkJwks, BenchmarkKeys};
      |                             ^^^^^^^^^^^^^  ^^^^^^^^^^^^^

    warning: unused imports: `BigNumber`, `Claim`, `ZkLoginInputs`, `ZkLoginProof`, `ZkMaterialV1`, and `ZkMaterial`
    --> frame/zklogin/src/benchmark_data.rs:3:43
      |
    3 | use primitive_zklogin::{Jwk, JwkProvider, ZkMaterial, ZkMaterialV1, ZkLoginInputs, ZkLoginProof, Claim, BigNumber};
      |                                           ^^^^^^^^^^  ^^^^^^^^^^^^  ^^^^^^^^^^^^^  ^^^^^^^^^^^^  ^^^^^  ^^^^^^^^^

    warning: unused import: `U256`
    --> frame/zklogin/src/benchmark_data.rs:4:15
      |
    4 | use sp_core::{U256, ed25519};
      |               ^^^^

    warning: unused import: `hex`
    --> frame/zklogin/src/benchmark_data.rs:8:5
      |
    8 | use hex;
      |     ^^^

    warning: unused import: `RawOrigin`
      --> frame/zklogin/src/lib.rs:58:9
      |
    58 |         RawOrigin,
      |         ^^^^^^^^^

    For more information about this error, try `rustc --explain E0432`.
    warning: `pallet-zklogin` (lib) generated 18 warnings
    error: could not compile `pallet-zklogin` (lib) due to 1 previous error; 18 warnings emitted
    warning: build failed, waiting for other jobs to finish...
    ```
  </details>

- [x] KZero primitive tests pass
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo test -p primitive-zklogin --features testing

    warning: /Users/seraya/repos/kzero/tests/tool/Cargo.toml: unused manifest key: dependencies.scale-codec.package
    warning: /Users/seraya/repos/kzero/runtime/Cargo.toml: unused manifest key: dependencies.scale-codec.package
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
      Compiling primitive-zklogin v0.1.0 (/Users/seraya/repos/kzero/primitives/zklogin)
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
