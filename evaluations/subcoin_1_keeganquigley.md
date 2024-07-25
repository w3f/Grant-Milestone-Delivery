# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Subcoin.md
- **Milestone:** 1

| Number | Deliverable             | Accepted | Link |
| ---    | ---                     | --- | --- |
| 0a.    | License                 | <ul><li>[x] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/LICENSE |
| 0b.    | Documentation           | <ul><li>[x] </li></ul> | Each module has its own docs. The rendered inline rustdoc is deployed at https://subcoin-project.github.io/subcoin/. https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/docs/src/usage.md#import-bitcoin-blocks-from-bitcoind-database describes how importing bitcoin blocks into subcoin works. |
| 0c.    | Testing and Testing Guide | <ul><li>[ ] </li></ul> | Install rust on your system and use this command to run tests: https://github.com/subcoin-project/subcoin/tree/subcoin-milestone-1?tab=readme-ov-file#run-tests |
| 0d.    | Docker                  | <ul><li>[ ] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/Dockerfile The docker image built from this Dockerfile is also available as mentioned in the Documentation 0b |
| 1.     | `pallet-bitcoin`        | <ul><li>[ ] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/crates/pallet-bitcoin/src/lib.rs |
| 2.     | `subcoin-runtime`       | <ul><li>[ ] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/crates/subcoin-runtime/src/lib.rs |
| 3.     | `sc-consensus-nakamoto` | <ul><li>[ ] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/crates/sc-consensus-nakamoto/src/block_import.rs |
| 4.     | `subcoin-node`          | <ul><li>[ ] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/crates/subcoin-node/src/lib.rs |

# General Notes

Builds and runs successfully using:

`docker build -t subcoin-node --file ./Dockerfile .`
`docker run -d subcoin-node`

`ubuntu@ip-172-31-19-85:~/subcoin$ docker run -d subcoin-node
dca693f9a95cb5c850ad0ef9bc2bd93919ee360ef155bb0d3741834badb226c5`

Also directly from GH with `docker pull ghcr.io/subcoin-project/subcoin:v0.1.0`

## Tests

Unit tests all passing:

```rust
    Finished `test` profile [unoptimized + debuginfo] target(s) in 15m 56s
     Running unittests src/lib.rs (target/debug/deps/pallet_bitcoin-5a032c981f885c6f)

running 1 test
test tests::test_runtime_txid_type ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_executive-0f2fe428f34ee43f)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/sc_consensus_nakamoto-99988c667bff10eb)

running 2 tests
test verification::header_verify::tests::test_calculate_next_work_required ... ok
test verification::tests::test_find_utxo_in_current_block ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.21s

     Running unittests src/lib.rs (target/debug/deps/sc_fast_sync_backend-e8f6c6930431c426)

running 2 tests
test tests::append_and_retrieve_justifications ... ok
test tests::store_duplicate_justifications_is_forbidden ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/subcoin_informant-04a6e33ea3800abb)

running 1 test
test display::test_display_block_hash ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/subcoin_network-c2ad83641583c585)

running 7 tests
test orphan_blocks_pool::tests::orphan_block_pool_insert_orphan_block ... ok
test checkpoint::tests::test_next_checkpoint ... ok
test orphan_blocks_pool::tests::orphan_block_pool_insert_unknown_block ... ok
test orphan_blocks_pool::tests::orphan_block_pool_remove_known_blocks ... ok
test orphan_blocks_pool::tests::orphan_block_pool_remove_blocks_for_parent ... ok
test orphan_blocks_pool::tests::orphan_block_pool_remove_blocks ... ok
test block_downloader::blocks_first::tests::duplicate_block_announcement_should_not_be_downloaded_again ... ok

test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 15.60s

     Running unittests src/lib.rs (target/debug/deps/subcoin_node-65d40021ef3083a5)

running 2 tests
test tests::rocksdb_disabled_in_substrate ... ok
test commands::tools::tests::test_revert_sha256d ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/bin/subcoin.rs (target/debug/deps/subcoin-297521d1e0499150)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/subcoin_primitives-a84d48eba265fe61)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/subcoin_rpc-d34f3b96549b39ab)

running 1 test
test blockchain::tests::test_block_hash_serde ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/subcoin_runtime-e2c302348a4e7257)

running 2 tests
test test_genesis_config_builds ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/subcoin_runtime_primitives-6e43d92ef6aec823)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/subcoin_service-457362af512f27c8)

running 1 test
test block_executor::tests::off_runtime_in_memory_executor_should_produce_same_result_as_runtime_disk_executor ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 36.63s

     Running unittests src/lib.rs (target/debug/deps/subcoin_test_service-10ac58993e90da48)
```
```sh
ubuntu@ip-172-31-17-233:~/subcoin$ docker pull ghcr.io/subcoin-project/subcoin:v0.1.0
v0.1.0: Pulling from subcoin-project/subcoin
3713021b0277: Pull complete 
d309287c926f: Pull complete 
e8b859817000: Pull complete 
Digest: sha256:1d6673c9dd75ede5c64fa33117e675630e1a2b1d6755d02e0b99c9ce77b4eb4e
Status: Downloaded newer image for ghcr.io/subcoin-project/subcoin:v0.1.0
ghcr.io/subcoin-project/subcoin:v0.1.0
```
