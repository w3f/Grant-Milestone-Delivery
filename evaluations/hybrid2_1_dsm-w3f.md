# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/hybrid2.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [LICENSE](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/LICENSE) | Apache 2.0 | 
| 0b. | Documentation |<ul><li>[x] </li></ul>| [tutorial.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/doc/tutorial.md) | | 
| 0c. | Testing and Testing Guide |<ul><li>[x] </li></ul>| [testing-guide.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/doc/testing-guide.md) | This guide explains how to verify the deliverables in this milestone. | 
| 0d. | Docker |<ul><li>[x] </li></ul>| [README.md](https://github.com/hybrid-explorer/polkadot-indexer/blob/main/README.md#docker) | | 
| 1. | Combine head and batch indexer threads |<ul><li>[x] </li></ul>| [substrate.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/src/substrate.rs#L636) | Avoids the same metadata being downloaded twice and reduces complexity. | 
| 2.  | Check correct chain |<ul><li>[x] </li></ul>| [lib.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/src/lib.rs#L130) | Genesis block of both database and endpoint are checked. | 
| 3.  | Improved logging |<ul><li>[x] </li></ul>| [lib.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/src/lib.rs#L91) | log macros are now used for all console output | 
| 4.  | Improved error checking |<ul><li>[x] </li></ul>| [shared.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/src/shared.rs#L11) | `?` is used instead of `.unwrap()` for most error handling. | 

## Evaluation V1

### Tests

All tests passed:

<details>

```
user@localhost:~/Documents/hybrid/hybrid-indexer$ cargo test
	Finished test [unoptimized + debuginfo] target(s) in 0.15s
 	Running unittests src/lib.rs (target/debug/deps/hybrid_indexer-f615bd37aed18357)

running 46 tests
test tests::test_candidate_hash_key ... ok
test tests::test_account_id_key ... ok
test tests::test_index_event_registrar_index ... ok
test tests::test_index_event_session_index ... ok
test tests::test_index_event_proposal_hash ... ok
test tests::test_index_event_pool_id ... ok
test tests::test_index_event_ref_index ... ok
test tests::test_preimage_hash_key ... ok
test tests::test_message_id_key ... ok
test tests::test_index_event_preimage_hash ... ok
test tests::test_index_event_tip_hash ... ok
test tests::test_index_event_proposal_index ... ok
test tests::test_index_event_candidate_hash ... ok
test tests::test_index_event_era_index ... ok
test tests::test_index_event_para_id ... ok
test tests::test_index_event_account_index ... ok
test tests::test_index_event_message_id ... ok
test tests::test_index_event_auction_index ... ok
test tests::test_index_event_account_id ... ok
test tests::test_index_event_bounty_index ... ok
test tests::test_index_event_variant ... ok
test tests::test_process_msg_auction_index ... ok
test tests::test_process_msg_bounty_index ... ok
test tests::test_process_msg_account_index ... ok
test tests::test_process_msg_candidate_hash ... ok
test tests::test_proposal_hash_key ... ok
test tests::test_process_msg_era_index ... ok
test tests::test_tip_hash_key ... ok
test tests::test_u32_key ... ok
test tests::test_variant_key ... ok
test tests::test_vector_as_u8_2_array ... ok
test tests::test_vector_as_u8_32_array ... ok
test tests::test_vector_as_u8_4_array ... ok
test tests::test_process_msg_message_id ... ok
test tests::test_process_msg_pool_id ... ok
test tests::test_process_msg_para_id ... ok
test tests::test_process_msg_account_id ... ok
test tests::test_process_msg_preimage_hash ... ok
test tests::test_process_msg_proposal_hash ... ok
test tests::test_process_msg_registrar_index ... ok
test tests::test_process_msg_ref_index ... ok
test tests::test_process_msg_session_index ... ok
test tests::test_process_msg_proposal_index ... ok
test tests::test_process_msg_status ... ok
test tests::test_process_msg_variant ... ok
test tests::test_process_msg_tip_hash ... ok

test result: ok. 46 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.51s

   Doc-tests hybrid-indexer

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

</details>

I ran `cargo tarpaulin` to check the coverage. The coverage could be better in general, but it isn't mandatory.

```
Oct 04 08:07:55.626  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| src/lib.rs: 63/120
|| src/shared.rs: 72/86
|| src/substrate.rs: 109/289
|| src/websockets.rs: 153/214
||
55.99% coverage, 397/709 lines covered
```

### Manual Test

I followed the [Testing Guide](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/doc/testing-guide.md). I had no problems, and it worked as expected. Here are some logs:

- Deliverable 1 - Combine head and batch indexer threads

    <details>

    ```
    user@localhost:~/Documents/hybrid/hybrid-indexer/polkadot-indexer$ docker run --rm -p 8172:8172 f7e5407238f4 -c polkadot -b 17520000 -p 8172
    [2023-10-04T11:38:12Z INFO  hybrid_indexer] Indexing polkadot
    [2023-10-04T11:38:12Z INFO  hybrid_indexer] Opening db: /root/.local/share/hybrid-indexer/polkadot/db
    [2023-10-04T11:38:12Z INFO  hybrid_indexer] Connecting to: wss://rpc.polkadot.io:443
    [2023-10-04T11:38:12Z INFO  hybrid_indexer::websockets] Listening on: 0.0.0.0:8172
    [2023-10-04T11:38:12Z INFO  hybrid_indexer::substrate] 📚 Batch indexing from #17520000
    [2023-10-04T11:38:12Z INFO  hybrid_indexer::substrate] Downloading metadata for spec version 9430
    [2023-10-04T11:38:14Z INFO  hybrid_indexer::substrate] 📚 #17520461, 230 blocks/sec, 13063 events/sec
    [2023-10-04T11:38:15Z INFO  hybrid_indexer::substrate] ✨ #17574101, 37 events
    [2023-10-04T11:38:16Z INFO  hybrid_indexer::substrate] 📚 #17520971, 253 blocks/sec, 11615 events/sec
    [2023-10-04T11:38:18Z INFO  hybrid_indexer::substrate] 📚 #17521482, 253 blocks/sec, 12238 events/sec
    [2023-10-04T11:38:20Z INFO  hybrid_indexer::substrate] 📚 #17521986, 254 blocks/sec, 12516 events/sec
    [2023-10-04T11:38:22Z INFO  hybrid_indexer::substrate] 📚 #17522526, 265 blocks/sec, 12177 events/sec
    [2023-10-04T11:38:24Z INFO  hybrid_indexer::substrate] ✨ #17574102, 52 events
    [2023-10-04T11:38:24Z INFO  hybrid_indexer::substrate] 📚 #17523028, 256 blocks/sec, 11253 events/sec
    [2023-10-04T11:38:26Z INFO  hybrid_indexer::substrate] 📚 #17523562, 265 blocks/sec, 11395 events/sec
    [2023-10-04T11:38:28Z INFO  hybrid_indexer::substrate] ✨ #17574103, 43 events
    [2023-10-04T11:38:28Z INFO  hybrid_indexer::substrate] 📚 #17524078, 252 blocks/sec, 10420 events/sec
    [2023-10-04T11:38:30Z INFO  hybrid_indexer::substrate] 📚 #17524599, 266 blocks/sec, 11059 events/sec
    [2023-10-04T11:38:32Z INFO  hybrid_indexer::substrate] 📚 #17525172, 278 blocks/sec, 11381 events/sec
    [2023-10-04T11:38:34Z INFO  hybrid_indexer::substrate] 📚 #17525714, 277 blocks/sec, 11398 events/sec
    [2023-10-04T11:38:36Z INFO  hybrid_indexer::substrate] ✨ #17574104, 38 events
    [2023-10-04T11:38:36Z INFO  hybrid_indexer::substrate] 📚 #17526214, 252 blocks/sec, 10268 events/sec
    [2023-10-04T11:38:38Z INFO  hybrid_indexer::substrate] 📚 #17526784, 283 blocks/sec, 11918 events/sec
    [2023-10-04T11:38:40Z INFO  hybrid_indexer::substrate] ✨ #17574105, 55 events
    [2023-10-04T11:38:40Z INFO  hybrid_indexer::substrate] 📚 #17527315, 265 blocks/sec, 11100 events/sec
    [2023-10-04T11:38:42Z INFO  hybrid_indexer::substrate] 📚 #17527901, 289 blocks/sec, 12179 events/sec
    [2023-10-04T11:38:44Z INFO  hybrid_indexer::substrate] 📚 #17528457, 281 blocks/sec, 12164 events/sec
    [2023-10-04T11:38:46Z INFO  hybrid_indexer::substrate] 📚 #17529046, 295 blocks/sec, 12784 events/sec
    [2023-10-04T11:38:48Z INFO  hybrid_indexer::substrate] ✨ #17574106, 40 events
    [2023-10-04T11:38:48Z INFO  hybrid_indexer::substrate] 📚 #17529576, 260 blocks/sec, 11461 events/sec
    [2023-10-04T11:38:50Z INFO  hybrid_indexer::substrate] 📚 #17530079, 255 blocks/sec, 11439 events/sec
    [2023-10-04T11:38:52Z INFO  hybrid_indexer::substrate] ✨ #17574107, 47 events
    [2023-10-04T11:38:52Z INFO  hybrid_indexer::substrate] 📚 #17530641, 280 blocks/sec, 12714 events/sec
    [2023-10-04T11:38:54Z INFO  hybrid_indexer::substrate] 📚 #17531220, 286 blocks/sec, 12868 events/sec
    [2023-10-04T11:38:56Z INFO  hybrid_indexer::substrate] 📚 #17531786, 287 blocks/sec, 12721 events/sec
    [2023-10-04T11:38:56Z INFO  hybrid_indexer::substrate] ✨ #17574108, 39 events
    [2023-10-04T11:38:58Z INFO  hybrid_indexer::substrate] 📚 #17532360, 285 blocks/sec, 12675 events/sec
    [2023-10-04T11:39:00Z INFO  hybrid_indexer::substrate] 📚 #17532898, 270 blocks/sec, 12309 events/sec
    [2023-10-04T11:39:02Z INFO  hybrid_indexer::substrate] 📚 #17533367, 226 blocks/sec, 16811 events/sec
    [2023-10-04T11:39:04Z INFO  hybrid_indexer::substrate] 📚 #17533809, 228 blocks/sec, 20296 events/sec
    [2023-10-04T11:39:05Z INFO  hybrid_indexer::substrate] ✨ #17574109, 38 events
    [2023-10-04T11:39:06Z INFO  hybrid_indexer::substrate] 📚 #17534346, 268 blocks/sec, 13107 events/sec
    [2023-10-04T11:39:08Z INFO  hybrid_indexer::substrate] 📚 #17534852, 253 blocks/sec, 12473 events/sec
    [2023-10-04T11:39:09Z INFO  hybrid_indexer::substrate] ✨ #17574110, 40 events
    [2023-10-04T11:39:10Z INFO  hybrid_indexer::substrate] 📚 #17535210, 178 blocks/sec, 9111 events/sec
    [2023-10-04T11:39:12Z INFO  hybrid_indexer::substrate] 📚 #17535782, 286 blocks/sec, 12845 events/sec
    [2023-10-04T11:39:14Z INFO  hybrid_indexer::substrate] 📚 #17536395, 304 blocks/sec, 14295 events/sec
    [2023-10-04T11:39:16Z INFO  hybrid_indexer::substrate] 📚 #17536966, 283 blocks/sec, 12375 events/sec
    [2023-10-04T11:39:17Z INFO  hybrid_indexer::substrate] ✨ #17574111, 44 events
    [2023-10-04T11:39:18Z INFO  hybrid_indexer::substrate] 📚 #17537507, 267 blocks/sec, 11803 events/sec
    [2023-10-04T11:39:20Z INFO  hybrid_indexer::substrate] 📚 #17537992, 249 blocks/sec, 11663 events/sec
    [2023-10-04T11:39:22Z INFO  hybrid_indexer::substrate] 📚 #17538563, 285 blocks/sec, 12709 events/sec
    [2023-10-04T11:39:24Z INFO  hybrid_indexer::substrate] 📚 #17539148, 292 blocks/sec, 12298 events/sec
    [2023-10-04T11:39:26Z INFO  hybrid_indexer::substrate] 📚 #17539766, 298 blocks/sec, 12624 events/sec
    [2023-10-04T11:39:28Z INFO  hybrid_indexer::substrate] 📚 #17540324, 283 blocks/sec, 13296 events/sec
    [2023-10-04T11:39:29Z INFO  hybrid_indexer::substrate] ✨ #17574112, 43 events
    [2023-10-04T11:39:30Z INFO  hybrid_indexer::substrate] 📚 #17540849, 267 blocks/sec, 11609 events/sec
    [2023-10-04T11:39:32Z INFO  hybrid_indexer::substrate] 📚 #17541417, 283 blocks/sec, 12264 events/sec
    [2023-10-04T11:39:34Z INFO  hybrid_indexer::substrate] ✨ #17574113, 37 events
    [2023-10-04T11:39:34Z INFO  hybrid_indexer::substrate] 📚 #17541965, 274 blocks/sec, 12156 events/sec
    [2023-10-04T11:39:36Z INFO  hybrid_indexer::substrate] 📚 #17542552, 293 blocks/sec, 13121 events/sec
    [2023-10-04T11:39:38Z INFO  hybrid_indexer::substrate] ✨ #17574114, 37 events
    [2023-10-04T11:39:38Z INFO  hybrid_indexer::substrate] 📚 #17543057, 250 blocks/sec, 11268 events/sec
    [2023-10-04T11:39:40Z INFO  hybrid_indexer::substrate] 📚 #17543654, 300 blocks/sec, 13363 events/sec
    [2023-10-04T11:39:42Z INFO  hybrid_indexer::substrate] ✨ #17574115, 44 events
    [2023-10-04T11:39:42Z INFO  hybrid_indexer::substrate] 📚 #17544188, 267 blocks/sec, 12984 events/sec
    [2023-10-04T11:39:44Z INFO  hybrid_indexer::substrate] 📚 #17544699, 253 blocks/sec, 11783 events/sec
    [2023-10-04T11:39:46Z INFO  hybrid_indexer::substrate] ✨ #17574116, 39 events
    [2023-10-04T11:39:46Z INFO  hybrid_indexer::substrate] 📚 #17545230, 264 blocks/sec, 11704 events/sec
    [2023-10-04T11:39:48Z INFO  hybrid_indexer::substrate] 📚 #17545799, 285 blocks/sec, 12979 events/sec
    [2023-10-04T11:39:50Z INFO  hybrid_indexer::substrate] 📚 #17546324, 263 blocks/sec, 12341 events/sec
    [2023-10-04T11:39:52Z INFO  hybrid_indexer::substrate] 📚 #17546892, 283 blocks/sec, 12595 events/sec
    [2023-10-04T11:39:54Z INFO  hybrid_indexer::substrate] ✨ #17574117, 44 events
    [2023-10-04T11:39:54Z INFO  hybrid_indexer::substrate] 📚 #17547433, 266 blocks/sec, 12035 events/sec
    [2023-10-04T11:39:56Z INFO  hybrid_indexer::substrate] 📚 #17547886, 224 blocks/sec, 22340 events/sec
    [2023-10-04T11:39:58Z INFO  hybrid_indexer::substrate] ✨ #17574118, 40 events
    [2023-10-04T11:39:58Z INFO  hybrid_indexer::substrate] 📚 #17548353, 235 blocks/sec, 15591 events/sec
    [2023-10-04T11:40:00Z INFO  hybrid_indexer::substrate] 📚 #17548803, 222 blocks/sec, 12759 events/sec
    [2023-10-04T11:40:02Z INFO  hybrid_indexer::substrate] 📚 #17549305, 258 blocks/sec, 12237 events/sec
    [2023-10-04T11:40:04Z INFO  hybrid_indexer::substrate] 📚 #17549884, 288 blocks/sec, 14194 events/sec
    [2023-10-04T11:40:06Z INFO  hybrid_indexer::substrate] ✨ #17574119, 39 events
    [2023-10-04T11:40:06Z INFO  hybrid_indexer::substrate] 📚 #17550417, 262 blocks/sec, 12171 events/sec
    [2023-10-04T11:40:08Z INFO  hybrid_indexer::substrate] 📚 #17551005, 299 blocks/sec, 13463 events/sec
    [2023-10-04T11:40:10Z INFO  hybrid_indexer::substrate] 📚 #17551574, 278 blocks/sec, 12310 events/sec
    [2023-10-04T11:40:10Z INFO  hybrid_indexer::substrate] ✨ #17574120, 37 events
    [2023-10-04T11:40:12Z INFO  hybrid_indexer::substrate] 📚 #17552098, 269 blocks/sec, 11289 events/sec
    [2023-10-04T11:40:14Z INFO  hybrid_indexer::substrate] 📚 #17552630, 263 blocks/sec, 10933 events/sec
    [2023-10-04T11:40:14Z INFO  hybrid_indexer::substrate] ✨ #17574121, 36 events
    [2023-10-04T11:40:16Z INFO  hybrid_indexer::substrate] 📚 #17553193, 284 blocks/sec, 11891 events/sec
    [2023-10-04T11:40:18Z INFO  hybrid_indexer::substrate] 📚 #17553792, 294 blocks/sec, 12287 events/sec
    [2023-10-04T11:40:20Z INFO  hybrid_indexer::substrate] 📚 #17554380, 295 blocks/sec, 12710 events/sec
    [2023-10-04T11:40:22Z INFO  hybrid_indexer::substrate] 📚 #17554996, 311 blocks/sec, 13060 events/sec
    [2023-10-04T11:40:24Z INFO  hybrid_indexer::substrate] 📚 #17555557, 279 blocks/sec, 11492 events/sec
    [2023-10-04T11:40:26Z INFO  hybrid_indexer::substrate] 📚 #17556138, 290 blocks/sec, 11976 events/sec
    [2023-10-04T11:40:27Z INFO  hybrid_indexer::substrate] ✨ #17574122, 70 events
    [2023-10-04T11:40:27Z INFO  hybrid_indexer::substrate] ✨ #17574123, 39 events
    [2023-10-04T11:40:28Z INFO  hybrid_indexer::substrate] 📚 #17556649, 256 blocks/sec, 10867 events/sec
    [2023-10-04T11:40:30Z INFO  hybrid_indexer::substrate] 📚 #17557244, 294 blocks/sec, 12509 events/sec
    [2023-10-04T11:40:32Z INFO  hybrid_indexer::substrate] 📚 #17557828, 292 blocks/sec, 12709 events/sec
    [2023-10-04T11:40:34Z INFO  hybrid_indexer::substrate] 📚 #17558386, 278 blocks/sec, 12329 events/sec
    [2023-10-04T11:40:35Z INFO  hybrid_indexer::substrate] ✨ #17574124, 39 events
    [2023-10-04T11:40:36Z INFO  hybrid_indexer::substrate] 📚 #17558887, 251 blocks/sec, 11539 events/sec
    [2023-10-04T11:40:38Z INFO  hybrid_indexer::substrate] 📚 #17559396, 255 blocks/sec, 11033 events/sec
    [2023-10-04T11:40:39Z INFO  hybrid_indexer::substrate] ✨ #17574125, 39 events
    [2023-10-04T11:40:40Z INFO  hybrid_indexer::substrate] 📚 #17559962, 281 blocks/sec, 12369 events/sec
    [2023-10-04T11:40:42Z INFO  hybrid_indexer::substrate] 📚 #17560571, 301 blocks/sec, 13941 events/sec
    [2023-10-04T11:40:44Z INFO  hybrid_indexer::substrate] 📚 #17561002, 217 blocks/sec, 10659 events/sec
    [2023-10-04T11:40:46Z INFO  hybrid_indexer::substrate] 📚 #17561601, 299 blocks/sec, 13031 events/sec
    [2023-10-04T11:40:47Z INFO  hybrid_indexer::substrate] ✨ #17574126, 39 events
    [2023-10-04T11:40:48Z INFO  hybrid_indexer::substrate] 📚 #17562145, 267 blocks/sec, 13986 events/sec
    [2023-10-04T11:40:50Z INFO  hybrid_indexer::substrate] 📚 #17562493, 177 blocks/sec, 21598 events/sec
    [2023-10-04T11:40:51Z INFO  hybrid_indexer::substrate] ✨ #17574127, 45 events
    [2023-10-04T11:40:52Z INFO  hybrid_indexer::substrate] 📚 #17563008, 257 blocks/sec, 13593 events/sec
    [2023-10-04T11:40:54Z INFO  hybrid_indexer::substrate] 📚 #17563591, 288 blocks/sec, 13675 events/sec
    [2023-10-04T11:40:56Z INFO  hybrid_indexer::substrate] 📚 #17564153, 280 blocks/sec, 13265 events/sec
    [2023-10-04T11:40:58Z INFO  hybrid_indexer::substrate] 📚 #17564709, 280 blocks/sec, 12398 events/sec
    [2023-10-04T11:41:00Z INFO  hybrid_indexer::substrate] ✨ #17574128, 39 events
    [2023-10-04T11:41:00Z INFO  hybrid_indexer::substrate] 📚 #17565255, 273 blocks/sec, 12509 events/sec
    [2023-10-04T11:41:02Z INFO  hybrid_indexer::substrate] 📚 #17565836, 289 blocks/sec, 13083 events/sec
    [2023-10-04T11:41:04Z INFO  hybrid_indexer::substrate] ✨ #17574129, 45 events
    [2023-10-04T11:41:04Z INFO  hybrid_indexer::substrate] 📚 #17566416, 288 blocks/sec, 13132 events/sec
    [2023-10-04T11:41:06Z INFO  hybrid_indexer::substrate] 📚 #17567002, 296 blocks/sec, 13157 events/sec
    [2023-10-04T11:41:08Z INFO  hybrid_indexer::substrate] 📚 #17567589, 287 blocks/sec, 12124 events/sec
    [2023-10-04T11:41:10Z INFO  hybrid_indexer::substrate] 📚 #17568194, 308 blocks/sec, 13256 events/sec
    [2023-10-04T11:41:12Z INFO  hybrid_indexer::substrate] 📚 #17568790, 296 blocks/sec, 12278 events/sec
    [2023-10-04T11:41:14Z INFO  hybrid_indexer::substrate] 📚 #17569392, 302 blocks/sec, 12442 events/sec
    [2023-10-04T11:41:16Z INFO  hybrid_indexer::substrate] ✨ #17574130, 39 events
    [2023-10-04T11:41:16Z INFO  hybrid_indexer::substrate] ✨ #17574131, 46 events
    [2023-10-04T11:41:16Z INFO  hybrid_indexer::substrate] 📚 #17569939, 272 blocks/sec, 11467 events/sec
    [2023-10-04T11:41:18Z INFO  hybrid_indexer::substrate] 📚 #17570545, 303 blocks/sec, 12950 events/sec
    [2023-10-04T11:41:20Z INFO  hybrid_indexer::substrate] 📚 #17571146, 300 blocks/sec, 12518 events/sec
    [2023-10-04T11:41:22Z INFO  hybrid_indexer::substrate] 📚 #17571701, 273 blocks/sec, 12206 events/sec
    [2023-10-04T11:41:24Z INFO  hybrid_indexer::substrate] ✨ #17574132, 40 events
    [2023-10-04T11:41:24Z INFO  hybrid_indexer::substrate] 📚 #17572242, 275 blocks/sec, 12594 events/sec
    [2023-10-04T11:41:26Z INFO  hybrid_indexer::substrate] 📚 #17572813, 283 blocks/sec, 12612 events/sec
    [2023-10-04T11:41:28Z INFO  hybrid_indexer::substrate] ✨ #17574133, 38 events
    [2023-10-04T11:41:28Z INFO  hybrid_indexer::substrate] 📚 #17573430, 297 blocks/sec, 13225 events/sec
    [2023-10-04T11:41:30Z INFO  hybrid_indexer::substrate] 📚 #17574019, 308 blocks/sec, 13111 events/sec
    [2023-10-04T11:41:31Z INFO  hybrid_indexer::substrate] 📚 Finished batch indexing.
    [2023-10-04T11:41:33Z INFO  hybrid_indexer::substrate] ✨ #17574134, 38 events
    [2023-10-04T11:41:41Z INFO  hybrid_indexer::substrate] ✨ #17574135, 40 events
    [2023-10-04T11:41:45Z INFO  hybrid_indexer::substrate] ✨ #17574136, 38 events
    [2023-10-04T11:41:53Z INFO  hybrid_indexer::substrate] ✨ #17574137, 47 events
    [2023-10-04T11:41:58Z INFO  hybrid_indexer::substrate] ✨ #17574138, 38 events
    [2023-10-04T11:42:06Z INFO  hybrid_indexer::substrate] ✨ #17574139, 38 events
    [2023-10-04T11:42:10Z INFO  hybrid_indexer::substrate] ✨ #17574140, 37 events
    [2023-10-04T11:42:18Z INFO  hybrid_indexer::substrate] ✨ #17574141, 37 events
    [2023-10-04T11:42:22Z INFO  hybrid_indexer::substrate] ✨ #17574142, 46 events
    [2023-10-04T11:42:30Z INFO  hybrid_indexer::substrate] ✨ #17574143, 41 events
    [2023-10-04T11:42:34Z INFO  hybrid_indexer::substrate] ✨ #17574144, 61 events
    [2023-10-04T11:42:42Z INFO  hybrid_indexer::substrate] ✨ #17574145, 61 events
    [2023-10-04T11:42:47Z INFO  hybrid_indexer::substrate] ✨ #17574146, 40 events
    [2023-10-04T11:42:51Z INFO  hybrid_indexer::substrate] ✨ #17574147, 38 events
    ```

    </details>

- Deliverable 2 - Check correct chain
    
    ```
    user@localhost:~/Documents/hybrid/hybrid-indexer/polkadot-indexer$ docker run --rm -p 8172:8172 f7e5407238f4  -c polkadot -p 8172 -u wss://kusama-rpc.polkadot.io:443
    [2023-10-04T11:46:45Z INFO  hybrid_indexer] Indexing polkadot
    [2023-10-04T11:46:45Z INFO  hybrid_indexer] Opening db: /root/.local/share/hybrid-indexer/polkadot/db
    [2023-10-04T11:46:45Z INFO  hybrid_indexer] Connecting to: wss://kusama-rpc.polkadot.io:443
    [2023-10-04T11:46:45Z ERROR hybrid_indexer] Chain has wrong genesis hash.
    [2023-10-04T11:46:45Z ERROR hybrid_indexer] Correct hash: 0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3
    [2023-10-04T11:46:45Z ERROR hybrid_indexer] Chain hash:   0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe
    [2023-10-04T11:46:45Z INFO  hybrid_indexer] Closing db.
    ```


- Deriverable 3 - Improved logging

    <details>

    Verbose:

    ```
    user@localhost:~/Documents/hybrid/hybrid-indexer/polkadot-indexer$ docker run --rm -p 8172:8172 f7e5407238f4  -c polkadot -b 17520000 -p 8172 -v
    [2023-10-04T11:59:09Z INFO  hybrid_indexer] Indexing polkadot
    [2023-10-04T11:59:09Z INFO  hybrid_indexer] Opening db: /root/.local/share/hybrid-indexer/polkadot/db
    [2023-10-04T11:59:09Z DEBUG sled::pagecache::snapshot] no previous snapshot found
    [2023-10-04T11:59:09Z DEBUG sled::pagecache::iterator] ordering before clearing tears: {}, max_header_stable_lsn: 0
    [2023-10-04T11:59:09Z DEBUG sled::pagecache::iterator] in clean_tail_tears, found missing item in tail: None and we'll scan segments {} above lowest lsn 0
    [2023-10-04T11:59:09Z DEBUG sled::pagecache::iterator] unable to load new segment: Io(Custom { kind: Other, error: "no segments remaining to iterate over" })
    [2023-10-04T11:59:09Z DEBUG sled::pagecache::iterator] filtering out segments after detected tear at (lsn, lid) -1
    [2023-10-04T11:59:09Z DEBUG sled::pagecache::iterator] unable to load new segment: Io(Custom { kind: Other, error: "no segments remaining to iterate over" })
    [2023-10-04T11:59:09Z DEBUG sled::pagecache::segment] SA starting with tip 0 stable -1 free {}
    [2023-10-04T11:59:09Z DEBUG sled::pagecache::iobuf] starting log for a totally fresh system
    [2023-10-04T11:59:09Z DEBUG sled::pagecache::segment] segment accountant returning offset: 0 for lsn 0 on deck: {}
    [2023-10-04T11:59:09Z DEBUG sled::pagecache::iobuf] starting IoBufs with next_lsn: 0 next_lid: 0
    [2023-10-04T11:59:09Z DEBUG sled::pagecache::iobuf] storing lsn 0 in beginning of buffer
    [2023-10-04T11:59:09Z DEBUG sled::pagecache] load_snapshot loading pages from 0..0
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 3 for root of new_tree [95, 95, 115, 108, 101, 100, 95, 95, 100, 101, 102, 97, 117, 108, 116]
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 5 for root of new_tree [118, 97, 114, 105, 97, 110, 116]
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 7 for root of new_tree [97, 99, 99, 111, 117, 110, 116, 95, 105, 100]
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 9 for root of new_tree [97, 99, 99, 111, 117, 110, 116, 95, 105, 110, 100, 101, 120]
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 11 for root of new_tree [97, 117, 99, 116, 105, 111, 110, 95, 105, 110, 100, 101, 120]
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 13 for root of new_tree [98, 111, 117, 110, 116, 121, 95, 105, 110, 100, 101, 120]
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 15 for root of new_tree [99, 97, 110, 100, 105, 97, 116, 101, 95, 104, 97, 115, 104]
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 17 for root of new_tree [101, 114, 97, 95, 105, 110, 100, 101, 120]
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 19 for root of new_tree [109, 101, 115, 115, 97, 103, 101, 95, 105, 100]
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 21 for root of new_tree [112, 97, 114, 97, 95, 105, 100]
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 23 for root of new_tree [112, 111, 111, 108, 95, 105, 100]
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 25 for root of new_tree [112, 114, 101, 105, 109, 97, 103, 101, 95, 104, 97, 115, 104]
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 27 for root of new_tree [112, 114, 111, 112, 111, 115, 97, 108, 95, 104, 97, 115, 104]
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 29 for root of new_tree [112, 114, 111, 112, 111, 115, 97, 108, 95, 105, 110, 100, 101, 120]
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 31 for root of new_tree [114, 101, 102, 95, 105, 110, 100, 101, 120]
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 33 for root of new_tree [114, 101, 103, 105, 115, 116, 114, 97, 114, 95, 105, 110, 100, 101, 120]
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 35 for root of new_tree [115, 101, 115, 115, 105, 111, 110, 95, 105, 110, 100, 101, 120]
    [2023-10-04T11:59:09Z DEBUG sled::pagecache::iobuf] advancing offset within the current segment from 0 to 2766
    [2023-10-04T11:59:09Z DEBUG sled::meta] allocated pid 37 for root of new_tree [116, 105, 112, 95, 104, 97, 115, 104]
    [2023-10-04T11:59:09Z INFO  hybrid_indexer] Connecting to: wss://rpc.polkadot.io:443
    [2023-10-04T11:59:09Z DEBUG sled::pagecache::iobuf] wrote lsns 0-2765 to disk at offsets 0-2765, maxed false complete_len 2766
    [2023-10-04T11:59:09Z DEBUG sled::pagecache::iobuf] mark_interval(0, 2766)
    [2023-10-04T11:59:09Z DEBUG sled::pagecache::iobuf] new highest interval: 0 - 2765
    [2023-10-04T11:59:10Z DEBUG rustls::client::hs] No cached session for DnsName("rpc.polkadot.io")
    [2023-10-04T11:59:10Z DEBUG rustls::client::hs] Not resuming any session
    [2023-10-04T11:59:10Z DEBUG rustls::client::hs] Using ciphersuite TLS13_AES_256_GCM_SHA384
    [2023-10-04T11:59:10Z DEBUG rustls::client::tls13] Not resuming
    [2023-10-04T11:59:10Z DEBUG rustls::client::tls13] TLS1.3 encrypted extensions: [ServerNameAck]
    [2023-10-04T11:59:10Z DEBUG rustls::client::hs] ALPN protocol is None
    [2023-10-04T11:59:10Z DEBUG sled::pagecache::iobuf] advancing offset within the current segment from 2766 to 3100
    [2023-10-04T11:59:10Z DEBUG sled::pagecache::iobuf] wrote lsns 2766-3099 to disk at offsets 2766-3099, maxed false complete_len 334
    [2023-10-04T11:59:10Z DEBUG sled::pagecache::iobuf] mark_interval(2766, 334)
    [2023-10-04T11:59:10Z DEBUG sled::pagecache::iobuf] new highest interval: 2766 - 3099
    [2023-10-04T11:59:10Z INFO  hybrid_indexer::websockets] Listening on: 0.0.0.0:8172
    [2023-10-04T11:59:10Z INFO  hybrid_indexer::substrate] 📚 Batch indexing from #17520000
    ```

    </details>

    If I run the indexer on an invalid block with quiet.

    ```
    user@localhost:~/Documents/hybrid/hybrid-indexer/polkadot-indexer$ docker run --rm -p 8172:8172 f7e5407238f4 -c polkadot -b 20000000 -p 8172 -q
    [2023-10-04T12:46:48Z ERROR hybrid_indexer::substrate] 📚 Block not found #20000000
    ```

- Deriverable 4 - Improved error checking
    ```
    user@localhost:~/Documents/hybrid/hybrid-indexer/polkadot-indexer$ docker run --rm -p 8172:8172 f7e5407238f4 -c polkadot -b 20000000 -p 8172
    [2023-10-04T12:31:11Z INFO  hybrid_indexer] Indexing polkadot
    [2023-10-04T12:31:11Z INFO  hybrid_indexer] Opening db: /root/.local/share/hybrid-indexer/polkadot/db
    [2023-10-04T12:31:11Z INFO  hybrid_indexer] Connecting to: wss://rpc.polkadot.io:443
    [2023-10-04T12:31:12Z INFO  hybrid_indexer::websockets] Listening on: 0.0.0.0:8172
    [2023-10-04T12:31:12Z INFO  hybrid_indexer::substrate] 📚 Batch indexing from #20000000
    [2023-10-04T12:31:12Z ERROR hybrid_indexer::substrate] 📚 Block not found #20000000
    [2023-10-04T12:31:16Z INFO  hybrid_indexer::substrate] Downloading metadata for spec version 9430
    [2023-10-04T12:31:16Z INFO  hybrid_indexer::substrate] ✨ #17574630, 39 events
    ^C[2023-10-04T12:31:24Z INFO  hybrid_indexer] Exiting.
    [2023-10-04T12:31:24Z INFO  hybrid_indexer] Closing db.
    ```

### Code Quality

I ran cargo clippy, and received no warnings.
