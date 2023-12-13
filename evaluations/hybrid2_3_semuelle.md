# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/hybrid2.md
- **Milestone:** 3
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/hybrid-explorer/hybrid-indexer/blob/47d9c4efcef524da8bb36ccb56f74cec3cf84055/LICENSE) | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [doc/tutorial.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/47d9c4efcef524da8bb36ccb56f74cec3cf84055/doc/tutorial.md) | Inline docs sporadic, but ok. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [link](https://github.com/hybrid-explorer/hybrid-indexer/blob/47d9c4efcef524da8bb36ccb56f74cec3cf84055/doc/testing-guide.md) | Guide is very easy to follow. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/hybrid-explorer/polkadot-indexer/blob/ecda47e178cba55826b006c8ff52a53c4c0551dd/Dockerfile) | — |
| 1. | Support additional indexes | <ul><li>[x] </li></ul> | [src/shared.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/47d9c4efcef524da8bb36ccb56f74cec3cf84055/src/shared.rs#L42) | — |
| 2. | Variant index optional | <ul><li>[x] </li></ul> | [src/substrate.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/47d9c4efcef524da8bb36ccb56f74cec3cf84055/src/substrate.rs#L179) | — |
| 3. | Expose cache_capacity() and mode() | <ul><li>[x] </li></ul> | [link](https://github.com/hybrid-explorer/hybrid-indexer/blob/47d9c4efcef524da8bb36ccb56f74cec3cf84055/src/lib.rs#L102) | — |


## General Notes

### `cargo test` output


```sh
running 22 tests
test tests::test_check_next_batch_block ... ok
test tests::test_bytes32_key ... ok
test tests::test_process_msg_chain_test_index ... ok
test tests::test_load_spans ... ok
test tests::test_process_msg_era_index ... ok
test tests::test_process_msg_chain_test_hash ... ok
test tests::test_check_span ... ok
test tests::test_process_msg_bounty_index ... ok
test tests::test_process_msg_account_id ... ok
test tests::test_process_msg_account_index ... ok
test tests::test_process_msg_proposal_index ... ok
test tests::test_process_msg_message_id ... ok
test tests::test_process_msg_ref_index ... ok
test tests::test_u32_key ... ok
test tests::test_variant_key ... ok
test tests::test_process_msg_preimage_hash ... ok
test tests::test_process_msg_pool_id ... ok
test tests::test_process_msg_proposal_hash ... ok
test tests::test_process_msg_session_index ... ok
test tests::test_process_msg_tip_hash ... ok
test tests::test_process_msg_registrar_index ... ok
test tests::test_process_msg_variant ... ok

test result: ok. 22 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.18s

   Doc-tests hybrid-indexer

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```