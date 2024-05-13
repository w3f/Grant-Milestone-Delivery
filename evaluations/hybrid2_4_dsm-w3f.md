# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/hybrid2.md
- **Milestone:** 4
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul>| [LICENSE](https://github.com/hybrid-explorer/hybrid-api-rs/blob/milestone-2.4/LICENSE) |  | 
| **0b.** | Documentation | <ul><li>[x] </li></ul>| [docs.rs](https://docs.rs/hybrid-api/latest/hybrid_api/) |  |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul>| [testing-guide.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-2.4/doc/testing-guide.md) | |
| **0d.** | Docker | <ul><li>[x] </li></ul>| [Dockerfile](https://github.com/hybrid-explorer/polkadot-indexer/blob/milestone-2.4/Dockerfile) | |
| 0e. | Article | <ul><li>[x] </li></ul>| [grant2.html](https://book.hybridscan.app/announcements/grant2.html) | |
| 1. | Status subscription | <ul><li>[x] </li></ul>| [websockets.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/16c66d0e9df6e6e77b9f5f78e5dcd715fe8c793c/src/websockets.rs#L220) | |
| 2. | Unsubscribing | <ul><li>[x] </li></ul>| [websockets.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/16c66d0e9df6e6e77b9f5f78e5dcd715fe8c793c/src/websockets.rs#L231) | |
| 3. | Report each index size | <ul><li>[x] </li></ul>| [websockets.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/16c66d0e9df6e6e77b9f5f78e5dcd715fe8c793c/src/websockets.rs#L234) | |
| 4. | Rust API | <ul><li>[x] </li></ul>| [crates.io](https://crates.io/crates/hybrid-api) | |

## Evaluation V1

### Unit Test

I ran the unit tests and checked its coverage using `cargo tarpaulin`. All tests are passing. The hybrid-api-rs have great coverage, and the `hybrid-indexer` could have better coverage.

```
user@localhost:~/Documents/hybrid/hybrid-indexer$ cargo test
	Finished test [unoptimized + debuginfo] target(s) in 0.29s
 	Running unittests src/lib.rs (target/debug/deps/hybrid_indexer-8a93d0066fcb9621)

running 25 tests
test tests::test_check_next_batch_block ... ok
test tests::test_bytes32_key ... ok
test tests::test_process_msg_bounty_index ... ok
test tests::test_process_msg_account_id ... ok
test tests::test_check_span ... ok
test tests::test_process_msg_chain_test_hash ... ok
test tests::test_process_msg_chain_test_index ... ok
test tests::test_process_msg_account_index ... ok
test tests::test_process_msg_proposal_index ... ok
test tests::test_u32_key ... ok
test tests::test_variant_key ... ok
test tests::test_process_msg_era_index ... ok
test tests::test_process_msg_session_index ... ok
test tests::test_process_msg_status ... ok
test tests::test_process_msg_ref_index ... ok
test tests::test_process_msg_proposal_hash ... ok
test tests::test_process_msg_preimage_hash ... ok
test tests::test_process_msg_registrar_index ... ok
test tests::test_process_msg_pool_id ... ok
test tests::test_load_spans ... ok
test tests::test_process_msg_subscribe_status ... ok
test tests::test_process_msg_tip_hash ... ok
test tests::test_process_msg_message_id ... ok
test tests::test_process_msg_variant ... ok
test tests::test_process_msg_subscribe_events ... ok

test result: ok. 25 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.10s

   Doc-tests hybrid-indexer

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


Mar 21 07:17:14.175  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| src/lib.rs: 51/110
|| src/shared.rs: 74/108
|| src/substrate.rs: 74/283
|| src/websockets.rs: 85/146
||
43.89% coverage, 284/647 lines covered


user@localhost:~/Documents/hybrid/hybrid-indexer/hybrid-api-rs$ cargo test
	Finished test [unoptimized + debuginfo] target(s) in 0.15s
 	Running unittests src/lib.rs (target/debug/deps/hybrid_api-be57d715a11c345c)

running 6 tests
test tests::test_subscribe_status ... ok
test tests::test_size_on_disk ... ok
test tests::test_variants ... ok
test tests::test_get_events ... ok
test tests::test_subscribe_events ... ok
test tests::test_status ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests hybrid-api

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


Mar 21 07:19:38.365  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| src/lib.rs: 147/167
||
88.02% coverage, 147/167 lines covered

```

### Docker

The Docker for the `polkadot-indexer` is working without problems.

```
user@localhost:~/Documents/hybrid/polkadot-indexer$ docker run -p 8172:8172 -it 2c4c128f7ce9  /bin/bash


root@bf9349f3e018:/usr/src/polkadot-indexer# ./target/release/polkadot-indexer -i --queue-depth 1
2024-03-21T10:59:42.385649Z  INFO hybrid_indexer: Indexing polkadot
2024-03-21T10:59:42.385702Z  INFO hybrid_indexer: Database path: /root/.local/share/hybrid-indexer/polkadot/db
2024-03-21T10:59:42.385709Z  INFO hybrid_indexer: Database mode: LowSpace
2024-03-21T10:59:42.385721Z  INFO hybrid_indexer: Database cache capacity: 1024.00 MiB
2024-03-21T10:59:42.396976Z  INFO hybrid_indexer: Connecting to: wss://rpc.polkadot.io:443
2024-03-21T10:59:44.765061Z  INFO hybrid_indexer::substrate: 📇 Event variant indexing: enabled
2024-03-21T10:59:44.765202Z  INFO hybrid_indexer::websockets: Listening on: 0.0.0.0:8172
2024-03-21T10:59:45.394315Z  INFO hybrid_indexer::substrate: 📚 Indexing backwards from #19,994,925
2024-03-21T10:59:45.394404Z  INFO hybrid_indexer::substrate: 📚 Queue depth: 1
2024-03-21T10:59:45.809172Z  INFO hybrid_indexer::substrate: Downloading metadata for spec version 1001002
2024-03-21T10:59:46.079169Z  INFO hybrid_indexer::substrate: Finished downloading metadata for spec version 1001002
2024-03-21T10:59:47.396005Z  INFO hybrid_indexer::substrate: 📚 #19,994,924: 0 blocks/sec, 48 events/sec, 53 keys/sec
2024-03-21T10:59:49.395798Z  INFO hybrid_indexer::substrate: 📚 #19,994,921: 1 blocks/sec, 80 events/sec, 93 keys/sec
2024-03-21T10:59:51.395880Z  INFO hybrid_indexer::substrate: 📚 #19,994,918: 1 blocks/sec, 71 events/sec, 77 keys/sec
2024-03-21T10:59:53.306000Z  INFO hybrid_indexer::substrate: ✨ #19,994,926: 72 events, 99 keys
2024-03-21T10:59:53.395455Z  INFO hybrid_indexer::substrate: 📚 #19,994,914: 2 blocks/sec, 122 events/sec, 163 keys/sec
2024-03-21T10:59:55.395962Z  INFO hybrid_indexer::substrate: 📚 #19,994,911: 1 blocks/sec, 80 events/sec, 94 keys/sec
```

### Status subscription and Unsubscribing

The command `subscribe-status` is subscribing, and after pressing `Ctrl+C` it unsubscribe.

```
user@localhost:~/Documents/hybrid$ hybrid --url ws://127.0.0.1:8172 subscribe-status
Indexed spans:
start: 19993780, end: 19995050
Indexed spans:
start: 19993774, end: 19995051
Indexed spans:
start: 19993761, end: 19995052
Indexed spans:
start: 19993755, end: 19995053
.
.
.
Indexed spans:
start: 19993614, end: 19995068
Indexed spans:
start: 19993607, end: 19995069
Indexed spans:
start: 19993594, end: 19995070
Indexed spans:
start: 19993588, end: 19995071
Indexed spans:
start: 19993575, end: 19995072
Indexed spans:
start: 19993568, end: 19995073
^Cunsubscribing
unsubscribed
```

The command `subscribe-events` works without problems too.

```
user@localhost:~/Documents/hybrid$ hybrid --url ws://127.0.0.1:8172 subscribe-events variant -p 0 -v 0
block number: 19995077, event index: 0
block number: 19995077, event index: 42
block number: 19993529, event index: 1
block number: 19993529, event index: 40
block number: 19993529, event index: 48
block number: 19993528, event index: 1
block number: 19993528, event index: 44
block number: 19993528, event index: 53
block number: 19993528, event index: 61
block number: 19993527, event index: 1
block number: 19993527, event index: 44
.
.
.
block number: 19993147, event index: 0
block number: 19993147, event index: 44
block number: 19993147, event index: 53
block number: 19993146, event index: 1
block number: 19993146, event index: 44
block number: 19993145, event index: 1
block number: 19993145, event index: 42
block number: 19993145, event index: 52
^Cunsubscribing
unsubscribed
```

### Report each index size

The command `size-on-disk` returns without problems a report of how much storage space is used by each index.

```
user@localhost:~/Documents/hybrid$ hybrid --url ws://127.0.0.1:8172 size-on-disk
Size on disk: 4.5 MiB
```

### Rust API

The `hybrid-cli` uses the `hybrid-api`, and it worked without problems.

### Code Quality

I ran `cargo clippy`, and it only returned a warning in the `hybrid-indexer` repository.

```
user@localhost:~/Documents/hybrid/hybrid-indexer$ cargo clippy
warning: you seem to be trying to use `match` for destructuring a single pattern. Consider using `if let`
   --> src/substrate.rs:306:13
	|
306 | /         	match events_sub_map.get_mut(&key) {
307 | |             	Some(txs) => {
308 | |                 	txs.retain(|value| !sub_response_tx.same_channel(value));
309 | |             	}
310 | |             	None => {}
311 | |         	};
	| |_____________^
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#single_match
	= note: `#[warn(clippy::single_match)]` on by default
help: try
	|
306 ~         	if let Some(txs) = events_sub_map.get_mut(&key) {
307 +             	txs.retain(|value| !sub_response_tx.same_channel(value));
308 ~         	};
	|

warning: `hybrid-indexer` (lib) generated 1 warning
	Finished dev [unoptimized + debuginfo] target(s) in 0.39s
```
