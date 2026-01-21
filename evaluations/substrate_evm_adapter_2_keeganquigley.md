# Evaluation

- **Status:** in progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/substrate-evm-adapter.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Notes/Specification |
| -----: | ----------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [License](https://github.com/subclone/subeth/blob/main/LICENSE) | MIT |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Documentation](https://github.com/subclone/subeth/blob/main/INSTRUCTIONS.md) | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Tests](https://github.com/subclone/subeth/blob/main/chain/pallets/evm-adapter/src/tests.rs) | Core functions will be fully covered by comprehensive unit and integration tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Docker](https://github.com/subclone/subeth/blob/main/chain/Dockerfile) | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | <ul><li>[x] </li></ul> | [Article](https://medium.com/@subclone/subeth-bridging-ethereum-tools-to-substrate-chains-dfd81547d802) | I will publish an article that explains the complete lifecycle and future plans of the project |
| 1. | EVM Adapter Pallet | <ul><li>[x] </li></ul> | [evm-adapter](https://github.com/subclone/subeth/tree/main/chain/pallets/evm-adapter) | We will create a pallet that will be responsible for bridging the gap between the ETH RPC adapter and the Substrate chain. It will have the ability to dispatch FRAME calls, opt-in possibility to execute EVM bytecode, and handle account mapping. Another main responsibility of the pallet will be handling signature verification. Some parts of this pallet can be inspired from `frontier`'s pallet `pallet-ethereum` but needs refinement and some modification. |
| 2. | Substrate Node | <ul><li>[x] </li></ul> | [Template node](https://github.com/subclone/subeth/tree/main/chain) | We will create a Substrate node that has two runtimes: with and without the `pallet-evm`. Both will contain `evm-adapter` pallet, but only the one with `pallet-evm` will be able to execute EVM bytecode. This will demonstrate two main use-cases of this pallet. |
| 3. | MVP Demo DApp | <ul><li>[x] </li></ul> | [Simple dApp](https://github.com/subclone/subeth/tree/main/simple-dapp) | We will provide a small EVM DApp that demonstrates the integration of the pallet and RPC adapter. This will be a basic web page that can sign and send custom extrinsic with Metamask, read the state of Substrate pallets. |
| 4. | `docker-compose` | <ul><li>[x] </li></ul> | [docker-compose](https://github.com/subclone/subeth/blob/main/docker-compose.yml) | We will provide a `docker-compose` file that will run the whole project. |

# General Notes

## Testing

Unit tests are now passing:

```rust
cargo test
    Finished `test` profile [unoptimized + debuginfo] target(s) in 2.69s
warning: the following packages contain code that will be rejected by a future version of Rust: trie-db v0.29.1
note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 1`
     Running unittests src/main.rs (target/debug/deps/subeth-dcd4595c4d22c030)

running 16 tests
test adapter::tests::test_pallet_mapping_works ... ok
test adapter::tests::test_storage_key_works ... ok
test adapter::tests::test_hash_and_truncate ... ok
test cache::tests::test_insert_and_retrieve ... ok
test cache::tests::test_latest_block ... ok
test cache::tests::test_capacity_limit ... ok
test tests::test_e2e_balance_transfer ... ignored, Requires custom chain with EvmAdapter pallet (cd chain && cargo run -- --dev)
test tests::test_call_data_encoding_various_amounts ... ok
test tests::test_fetch_local_metadata ... ignored, Requires local Substrate node at ws://127.0.0.1:9944
test tests::test_generic_scale_encoded_call_dispatch ... ok
test tests::test_pallet_address_encoding ... ok
test tests::test_signature_format ... ok
test tests::test_ethereum_transaction_encoding ... ok
test tests::test_transfer_transaction_construction ... ok
test tests::test_integration_flow_documentation ... ok
test tests::test_transaction_message_hash ... ok

test result: ok. 14 passed; 0 failed; 2 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
