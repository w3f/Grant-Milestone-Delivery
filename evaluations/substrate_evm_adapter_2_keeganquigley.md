# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/substrate-evm-adapter.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Notes |
| -----: | ----------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [License](https://github.com/subclone/subeth/blob/main/LICENSE) | MIT |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Documentation](https://github.com/subclone/subeth/blob/main/INSTRUCTIONS.md) |  |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Tests](https://github.com/subclone/subeth/blob/main/chain/pallets/evm-adapter/src/tests.rs) |  |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Docker](https://github.com/subclone/subeth/blob/main/chain/Dockerfile) |  |
| **0e.** | Article | <ul><li>[x] </li></ul> | [Article](https://medium.com/@subclone/subeth-bridging-ethereum-tools-to-substrate-chains-dfd81547d802) |  |
| 1. | EVM Adapter Pallet | <ul><li>[x] </li></ul> | [evm-adapter](https://github.com/subclone/subeth/tree/main/chain/pallets/evm-adapter) |  |
| 2. | Substrate Node | <ul><li>[x] </li></ul> | [Template node](https://github.com/subclone/subeth/tree/main/chain) |  |
| 3. | MVP Demo DApp | <ul><li>[x] </li></ul> | [Simple dApp](https://github.com/subclone/subeth/tree/main/simple-dapp) |  |
| 4. | `docker-compose` | <ul><li>[x] </li></ul> | [docker-compose](https://github.com/subclone/subeth/blob/main/docker-compose.yml) |  |

# General Notes

Docker Compose file fixed upon request. I was able to have Claude create a Python script to start the local node, start the Subeth adapter, and test the connection. I could:

- Sign an Eth tx
- Send it to balances pallet via the EVM adapter
- Show the tx hash and confirmation
- Display before/after balances

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
