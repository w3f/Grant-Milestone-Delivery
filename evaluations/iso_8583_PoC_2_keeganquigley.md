# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ISO-8583-implementation.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Notes |
| -----: | ----------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [License](https://github.com/subclone/payment-processor/blob/main/LICENSE) [License 2](https://github.com/subclone/iso8583-chain/blob/main/LICENSE) | MIT |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README 1](https://github.com/subclone/payment-processor/tree/main) [README 2](https://github.com/subclone/iso8583-chain/blob/main/README.md) [Oracle Demo](https://github.com/subclone/payment-processor/blob/main/DEMO.md) [Chain Demo](https://github.com/subclone/iso8583-chain/blob/main/DEMO.md) |  |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Unit/Integration tests](https://github.com/subclone/payment-processor/tree/main/pcidss/oracle/src/tests), [ISO-8583 Pallet tests](https://github.com/subclone/iso8583-chain/blob/main/pallets/iso-8583/src/tests.rs), [Unit tests](https://github.com/subclone/payment-processor/blob/main/pcidss/core/src/bank_account/models.rs#L149) | Unit tests passing. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Docker Node](https://github.com/subclone/iso8583-chain/blob/main/Dockerfile) [Docker Oracle](https://github.com/subclone/payment-processor/blob/main/pcidss/Dockerfile) |  |
| **0e.** | Article | <ul><li>[x] </li></ul> | [Article](https://medium.com/@subclone/iso-8583-substrate-integration-poc-a9d4cb0ad17b) | Good. |
| 1. | Substrate Chain | <ul><li>[x] </li></ul> | [Substrate Chain](https://github.com/subclone/iso8583-chain) | Good. |
| 2. | Offchain Worker | <ul><li>[x] </li></ul> | [Offchain Worker](https://github.com/subclone/iso8583-chain/blob/main/pallets/iso-8583/src/lib.rs#L472) |Good. |
| 3. | ERC-20R Pallet | <ul><li>[x] </li></ul> | [ERC-20R Pallet](https://github.com/subclone/iso8583-chain/tree/main/pallets/iso-8583) | Good. |
| 4. | Integration tests | <ul><li>[x] </li></ul> | [Oracle Integration Tests](https://github.com/subclone/payment-processor/tree/main/pcidss/e2e-tests) [Integration tests](https://github.com/subclone/iso8583-chain) |  |
| 5. | Makefile | <ul><li>[x] </li></ul> | [docker-compose](https://github.com/subclone/payment-processor/blob/main/docker-compose.yaml) [Makefile](https://github.com/subclone/payment-processor/blob/main/pcidss/Makefile) |  |

# General Notes

I'm able to successfully run payment processer and the ISO-8583 chain in tandem.

18 unit tests now passing:

```rust
Compiling sc-statement-store v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#40e33957)
warning: unused import: `SignMessage`
  --> pallets/iso-8583/src/lib.rs:18:46
   |
18 |     offchain::{ForAll, SendUnsignedTransaction, SignMessage, SignedPayload, Signer},
   |                                                 ^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused variable: `signer`
   --> pallets/iso-8583/src/lib.rs:687:3
    |
687 |         signer: &Signer<T, T::AuthorityId, ForAll>,
    |         ^^^^^^ help: if this is intentional, prefix it with an underscore: `_signer`
    |
    = note: `#[warn(unused_variables)]` on by default

warning: `pallet-iso-8583` (lib test) generated 2 warnings (run `cargo fix --lib -p pallet-iso-8583 --tests` to apply 2 suggestions)
   Compiling wasm-opt v0.112.0
   Compiling substrate-wasm-builder v5.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#40e33957)
   Compiling iso-8583-runtime v0.1.0 (/home/ubuntu/iso8583-chain/runtime)
   Compiling rocksdb v0.21.0
   Compiling kvdb-rocksdb v0.19.0
   Compiling sc-client-db v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#40e33957)
   Compiling sc-service v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#40e33957)
   Compiling sc-cli v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#40e33957)
    Finished test [unoptimized + debuginfo] target(s) in 15m 14s
     Running unittests src/lib.rs (target/debug/deps/iso_8583_runtime-26c5e218fc572969)

running 1 test
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/iso8583_chain-52be6a1f357ee533)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/iso8583_chain-8ece725336399289)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_iso_8583-e16e105d2713b1f5)

running 18 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test impls::tests::test_balance_decoder ... ok
test tests::extrinsics::test_register ... ok
test tests::extrinsics::test_register_oracle_works ... ok
test tests::extrinsics::test_initiate_transfer ... ok
test tests::extrinsics::test_approve_transfer ... ok
test tests::extrinsics::test_remove_oracle ... ok
test tests::extrinsics::test_remove_works ... ok
test tests::extrinsics::test_reversal ... ok
test tests::extrinsics::test_submit_finality_works ... ok
test impls::tests::account_id_decoder_works ... ok
test tests::extrinsics::test_update_accounts ... ok
test tests::offchain_worker::fetch_balances_works ... ok
test tests::trait_tests::test_transfer_from_works ... ok
test tests::trait_tests::test_approve_works ... ok
test tests::trait_tests::test_transfer_works ... ok
test tests::offchain_worker::fetch_and_submit_updated_balances_works ... ok
test tests::offchain_worker::offchain_worker_works ... ok

test result: ok. 18 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.77s

   Doc-tests iso-8583-runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests iso8583-chain

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-iso-8583

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

ubuntu@ip-172-31-17-187:~/iso8583-chain$
```

~~One test failing:~~
```rust
    Checking pallet-transaction-payment-rpc v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#40e33957)
warning: unused import: `SignMessage`
  --> pallets/iso-8583/src/lib.rs:18:46
   |
18 |     offchain::{ForAll, SendUnsignedTransaction, SignMessage, SignedPayload, Signer},
   |                                                 ^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

    Checking frame-benchmarking-cli v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#40e33957)
error[E0063]: missing field `payment_processor_url` in initializer of `pallet::GenesisConfig<mock::Test>`
   --> pallets/iso-8583/src/mock.rs:167:3
    |
167 |         crate::GenesisConfig::<Test> {
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ missing `payment_processor_url`

For more information about this error, try `rustc --explain E0063`.
warning: `pallet-iso-8583` (lib test) generated 1 warning
error: could not compile `pallet-iso-8583` (lib test) due to 1 previous error; 1 warning emitted
```

