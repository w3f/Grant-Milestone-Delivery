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
| 4. | Integration tests | <ul><li>[x] </li></ul> | [Oracle Integration Tests](https://github.com/subclone/payment-processor/tree/main/pcidss/e2e-tests) [Integration tests](https://github.com/subclone/iso8583-chain) | Good. |
| 5. | Makefile | <ul><li>[x] </li></ul> | [docker-compose](https://github.com/subclone/payment-processor/blob/main/docker-compose.yaml) [Makefile](https://github.com/subclone/payment-processor/blob/main/pcidss/Makefile) | Good. |

# General Notes

I'm able to successfully run payment processer and the ISO-8583 chain in tandem. Front-end works to simulate both card and crypto txs. This is a very interesting PoC that shows how it is possible to use substrate for integrating with ISO-8583 message formats. Basically the main problem that needs to be resolved now is how to revert txs.

Grantee fixed resolved all issues, see PR.

![alice](https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/21207281-9b77-43cf-bc26-6ccb07e56e13)

Offchain-workers properly supply balance and other data.

![Screenshot 2024-04-09 at 10 37 06 AM](https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/dcd09842-0814-4397-b17c-f8fb39ef4793)


Chain runs locally and in Docker:

```sh
docker run -it -p 9944:9944 kingleard/iso8583-chain --dev --tmp --unsafe-rpc-external --rpc-cors=all --rpc-methods=unsafe -loffchain-worker
WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
2024-04-05 21:58:07.480  INFO main sc_cli::runner: Substrate Node
2024-04-05 21:58:07.485  INFO main sc_cli::runner: ✌️  version 0.0.1-3c27d5df4f1
2024-04-05 21:58:07.485  INFO main sc_cli::runner: ❤️  by Dastanbek Samatov <dastanbeksamatov@gmail.com>, 2017-2024
2024-04-05 21:58:07.485  INFO main sc_cli::runner: 📋 Chain specification: Development
2024-04-05 21:58:07.485  INFO main sc_cli::runner: 🏷  Node name: forgetful-stream-1295
2024-04-05 21:58:07.486  INFO main sc_cli::runner: 👤 Role: AUTHORITY
2024-04-05 21:58:07.486  INFO main sc_cli::runner: 💾 Database: RocksDb at /tmp/substrateYLZVUp/chains/dev/db/full
2024-04-05 21:58:08.599  INFO main sc_service::client::client: 🔨 Initializing Genesis block/state (state: 0xb328…9ceb, header-hash: 0x94cb…180e)
2024-04-05 21:58:08.629  INFO main grandpa: 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.
2024-04-05 21:58:09.046  WARN main sc_service::config: Using default protocol ID "sup" because none is configured in the chain specs
2024-04-05 21:58:09.059  INFO main sub-libp2p: 🏷  Local node identity is: 12D3KooWAjxuBYd1awu2PZpFsnhciHcYE9Qx5GBLmBEjHbyrKK44
2024-04-05 21:58:09.110  INFO main sc_sysinfo: 💻 Operating system: linux
2024-04-05 21:58:09.110  INFO main sc_sysinfo: 💻 CPU architecture: x86_64
2024-04-05 21:58:09.110  INFO main sc_sysinfo: 💻 Target environment: gnu
2024-04-05 21:58:09.110  INFO main sc_sysinfo: 💻 Memory: 7846MB
2024-04-05 21:58:09.110  INFO main sc_sysinfo: 💻 Kernel: 6.5.11-linuxkit
2024-04-05 21:58:09.110  INFO main sc_sysinfo: 💻 Linux distribution: Debian GNU/Linux 11 (bullseye)
2024-04-05 21:58:09.110  INFO main sc_sysinfo: 💻 Virtual machine: no
2024-04-05 21:58:09.110  INFO main sc_service::builder: 📦 Highest known block at #0
2024-04-05 21:58:09.116  INFO tokio-runtime-worker substrate_prometheus_endpoint: 〽️ Prometheus exporter started at 127.0.0.1:9615
2024-04-05 21:58:09.127  INFO                 main sc_rpc_server: Running JSON-RPC server: addr=0.0.0.0:9944, allowed origins=["*"]
```

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
~~One error about Linux when trying to run Docker file on MacOS:~~

```sh
docker run -it -p 9944:9944 iso8583-chain --dev --tmp --unsafe-rpc-external --rpc-cors=all --rpc-methods=unsafe -loffchain-worker

rosetta error: failed to open elf at /lib64/ld-linux-x86-64.so.2
```
