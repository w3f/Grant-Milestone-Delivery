# Evaluation


- **Status:** Accepted
- **Application Document:** [hybrid](https://github.com/w3f/Grants-Program/blob/master/applications/hybrid.md). 
- **Milestone:** 2
- **Kusama Identity:** Eexv1mKLiCidz2gGh6vfowtXgSSc7mvD4xEb2ji998W4DPs
- **Previously successfully merged evaluation:** All evaluations by `ali-usama`

| Number | Deliverable                    | Accepted               | Link                                                                                                           | Evaluation Notes                                        |
|--------|--------------------------------|------------------------|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| 0a.    | LICENCE                        | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-2/LICENSE)                       | Correct Licence                                         |
| 0b.    | Documentation                  | <ul><li>[x] </li></ul> | [READMe](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-2/README.md)                         | Well-structured & Well-explained docs                   |
| 0c.    | Testing & Testing Guide        | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-2/README.md#testing-guide)    | All tests passed. Output attached below                 |
| 0d.    | Docker                         | <ul><li>[x] </li></ul> | [Docker](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-2/README.md#docker)                  | Image built and ran successfully. Output attached below |
| 1.     | Event subscription API         | <ul><li>[x] </li></ul> | [WebSocket](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-2/src/websockets.rs#L415)         | Working as expected                                     |
| 2.     | Live DApp                      | <ul><li>[x] </li></ul> | [IndexerClient](https://github.com/hybrid-explorer/hybrid-dapp/blob/milestone-2/src/lib/IndexerClient.ts#L112) |                                                         |
| 3.     | Full polkadot Event Indexing   | <ul><li>[x] </li></ul> | [substrate](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-2/src/substrate.rs#L377)          |                                                         |
| 4.     | Variant index                  | <ul><li>[x] </li></ul> | [substrate](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-2/src/substrate.rs#L235)          |                                                         |
| 5.     | Increased Decentralization     | <ul><li>[x] </li></ul> | [IndexerClient](https://github.com/hybrid-explorer/hybrid-dapp/blob/milestone-2/src/lib/IndexerClient.ts#L12)  |                                                         |
| 6.     | Asynchronous block downloading | <ul><li>[x] </li></ul> | [substrate](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-2/src/substrate.rs#L536)          |                                                         |


## General Notes

The repository is well-structured and well-documented. The functionalities mentioned in the milestone are working fine, however, the only point that needs some attention is the code duplication in the `websocket.rs`.
The test cases are also well-written and cover most of the features delivered in the milestone. 
## `cargo test` output
```
running 45 tests
test tests::test_candidate_hash_key ... ok
test tests::test_account_id_key ... ok
test tests::test_index_event_message_id ... ok
test tests::test_index_event_auction_index ... ok
test tests::test_index_event_candidate_hash ... ok
test tests::test_index_event_era_index ... ok
test tests::test_index_event_account_index ... ok
test tests::test_index_event_para_id ... ok
test tests::test_index_event_account_id ... ok
test tests::test_index_event_bounty_index ... ok
test tests::test_index_event_pool_id ... ok
test tests::test_index_event_ref_index ... ok
test tests::test_index_event_session_index ... ok
test tests::test_index_event_preimage_hash ... ok
test tests::test_index_event_proposal_hash ... ok
test tests::test_index_event_registrar_index ... ok
test tests::test_index_event_proposal_index ... ok
test tests::test_message_id_key ... ok
test tests::test_preimage_hash_key ... ok
test tests::test_index_event_tip_hash ... ok
test tests::test_process_msg_account_id ... ok
test tests::test_index_event_variant ... ok
test tests::test_process_msg_auction_index ... ok
test tests::test_process_msg_account_index ... ok
test tests::test_process_msg_candidate_hash ... ok
test tests::test_process_msg_bounty_index ... ok
test tests::test_process_msg_message_id ... ok
test tests::test_process_msg_pool_id ... ok
test tests::test_process_msg_proposal_hash ... ok
test tests::test_process_msg_preimage_hash ... ok
test tests::test_process_msg_ref_index ... ok
test tests::test_process_msg_proposal_index ... ok
test tests::test_proposal_hash_key ... ok
test tests::test_tip_hash_key ... ok
test tests::test_u32_key ... ok
test tests::test_process_msg_era_index ... ok
test tests::test_process_msg_registrar_index ... ok
test tests::test_variant_key ... ok
test tests::test_process_msg_para_id ... ok
test tests::test_vector_as_u8_32_array ... ok
test tests::test_vector_as_u8_4_array ... ok
test tests::test_process_msg_variant ... ok
test tests::test_process_msg_session_index ... ok
test tests::test_process_msg_tip_hash ... ok
test tests::test_process_msg_status ... ok

test result: ok. 45 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.23s
```

## `docker run` output
```
$ docker run --rm -p 8172:8172 f022848a4bc322252fa95bfe6e0f02d0cd2c06f295838a7ff51ff55e7d1cb1e3
    Finished release [optimized] target(s) in 0.28s
     Running `target/release/hybrid-indexer --block-height 15870000`
Opened database.
Connected to Substrate node.
Listening on: 0.0.0.0:8172
Downloading metadata for spec version 9180
 ✨ #15920452
Downloading metadata for spec version 9370
Downloading metadata for spec version 9370
 ✨ #15920453
 ✨ #15920454
 ✨ #15920455
 ✨ #15920456
 ✨ #15920457
 📚 #15870100, 8 blocks/sec
 ✨ #15920458
 ✨ #15920459
 📚 #15870200, 13 blocks/sec
 ✨ #15920460
 📚 #15870300, 10 blocks/sec
 📚 #15870400, 12 blocks/sec
 ✨ #15920461
 📚 #15870500, 19 blocks/sec
 ✨ #15920462
 📚 #15870600, 22 blocks/sec
 ✨ #15920463
 📚 #15870700, 21 blocks/sec
 ✨ #15920464
 📚 #15870800, 22 blocks/sec
 ✨ #15920465
 📚 #15870900, 30 blocks/sec
 📚 #15871000, 22 blocks/sec
 ✨ #15920466

```