# Evaluation

- **Status:** In Progress
- **Application Document:** [hybrid](https://github.com/w3f/Grants-Program/blob/master/applications/hybrid.md) 
- **Milestone:** 3
- **Kusama Identity:** Eexv1mKLiCidz2gGh6vfowtXgSSc7mvD4xEb2ji998W4DPs
- **Previously successfully merged evaluation:** All evaluations by ali-usama

| Number | Deliverable             | Accepted               | Link                                                                                                                                                                        | Evaluation Notes                            |
|--------|-------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| 0a.    | Licence                 | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/LICENSE)                                                                                           | Correct Licence                             |
| 0b.    | Documentation           | <ul><li>[x] </li></ul> | [Tutorial](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/doc/tutorial.md)<br/>[README](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/README.md) | Detailed documentation                      |
| 0c.    | Testing & Testing Guide | <ul><li>[x] </li></ul> | [Testing-Guide](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/doc/testing-guide.md)                                                                           | All test cases pass. Output attached below. |
| 0d.    | Docker                  | <ul><li>[x] </li></ul> | [Docker ReadMe](https://github.com/hybrid-explorer/polkadot-indexer/blob/main/README.md#docker)                                                                             | ...                                         |
| 0e.    | Blog post               | <ul><li>[x] </li></ul> | [Launch-Announcement](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/doc/launch-announcement.md)                                                               | Well-writen article                         |
| 1.     | Hybrid indexer library  | <ul><li>[x] </li></ul> | [substrate-pallet](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/src/substrate_pallets.rs)                                                                    | Working as per application                  |
| 2.     | Polkadot Indexer        | <ul><li>[x] </li></ul> | [polkadot-indexer](https://github.com/hybrid-explorer/polkadot-indexer)                                                                                                     | Working as per application                  |
| 3.     | Chain Select            | <ul><li>[x] </li></ul> | [hybrid-dapp](https://github.com/hybrid-explorer/hybrid-dapp)                                                                                                               | Working as per application                  |


## General Notes

### `cargo test` output
```commandline
Running unittests src/lib.rs (target/debug/deps/hybrid_indexer-ce6bf8f9bfcc9c20)

running 45 tests
test tests::test_candidate_hash_key ... ok
test tests::test_account_id_key ... ok
test tests::test_index_event_era_index ... ok
test tests::test_index_event_para_id ... ok
test tests::test_index_event_auction_index ... ok
test tests::test_index_event_bounty_index ... ok
test tests::test_index_event_account_id ... ok
test tests::test_index_event_message_id ... ok
test tests::test_index_event_account_index ... ok
test tests::test_index_event_candidate_hash ... ok
test tests::test_index_event_session_index ... ok
test tests::test_index_event_proposal_index ... ok
test tests::test_index_event_preimage_hash ... ok
test tests::test_message_id_key ... ok
test tests::test_preimage_hash_key ... ok
test tests::test_index_event_pool_id ... ok
test tests::test_index_event_registrar_index ... ok
test tests::test_index_event_ref_index ... ok
test tests::test_index_event_tip_hash ... ok
test tests::test_index_event_proposal_hash ... ok
test tests::test_process_msg_account_index ... ok
test tests::test_process_msg_account_id ... ok
test tests::test_index_event_variant ... ok
test tests::test_process_msg_auction_index ... ok
test tests::test_process_msg_message_id ... ok
test tests::test_process_msg_era_index ... ok
test tests::test_process_msg_para_id ... ok
test tests::test_process_msg_candidate_hash ... ok
test tests::test_process_msg_bounty_index ... ok
test tests::test_process_msg_proposal_hash ... ok
test tests::test_process_msg_pool_id ... ok
test tests::test_process_msg_ref_index ... ok
test tests::test_proposal_hash_key ... ok
test tests::test_tip_hash_key ... ok
test tests::test_u32_key ... ok
test tests::test_variant_key ... ok
test tests::test_vector_as_u8_32_array ... ok
test tests::test_vector_as_u8_4_array ... ok
test tests::test_process_msg_status ... ok
test tests::test_process_msg_session_index ... ok
test tests::test_process_msg_tip_hash ... ok
test tests::test_process_msg_preimage_hash ... ok
test tests::test_process_msg_registrar_index ... ok
test tests::test_process_msg_variant ... ok
test tests::test_process_msg_proposal_index ... ok

test result: ok. 45 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.21s

   Doc-tests hybrid-indexer

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```