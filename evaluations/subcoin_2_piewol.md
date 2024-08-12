# Evaluation

- **Status:** in progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Subcoin.md
- **Milestone:** 2

| Number | Deliverable    | Accepted | Link | Notes |
| -- | --  | ---    | --- | --- |
| 0a.    | License                 | <ul><li>[x] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-2/LICENSE |  --  |
| 0b.    | Documentation           | <ul><li>[ ] </li></ul> | Each module has its own docs. The rendered inline rustdoc is deployed at https://subcoin-project.github.io/subcoin/.  | some elements e.g. structs are still without inline doc |
| 0c.    | Testing and Testing Guide | <ul><li>[x] </li></ul> |  https://github.com/subcoin-project/subcoin/tree/subcoin-milestone-2?tab=readme-ov-file#run-tests |  see general notes  |
| 0d.    | Docker                  | <ul><li>[ ] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-2/Dockerfile The docker image is available at https://github.com/subcoin-project/subcoin/pkgs/container/subcoin/249545041?tag=v0.2.0  |  builds. see notes. |
| 1.     | Block Verification	       | <ul><li>[ ] </li></ul> | 	https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-2/crates/sc-consensus-nakamoto/src/verification.rs |  how comes that there are no tests? Is this directly from ``rust-bitcoin``? |
| 2.     | `bitcoin-network`       | <ul><li>[x] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-2/crates/subcoin-network/src/lib.rs | works, gets peers and imports blocks  |

# General Notes


In ``pallet-bitcoin`` you use the error message "txid must be encoded correctly; qed" both for encoding and decoding operations. I think it would be great it these error messages were unique for both operations. Furthermore it looks like the result type in the trait is used for a reason as the writer can emit errors. Whats the reason you put an `.expect()` here allowing for a panic? Basically, why are you sure that it will never happen? 

Are you planning to introduce more tests to vital modules? ``pallet-bitcoin`` currently only has one test to check on encoding. Unit tests should cover the logic you have implemented.

## Documentation

Some elements e.g. structs are still without inline doc. It would be great if this could be completed.

## Tests
All tests are passing. Some modules are without tests.



<details>

     ubuntu@ip-172-31-30-101:~/subcoin$ cargo test --workspace --all
     warning: /home/ubuntu/subcoin/crates/sc-consensus-nakamoto/Cargo.toml: version requirement `0.105.0+25.1` for dependency `bitcoinconsensus` includes semver metadata which will be ignored, removing the metadata is recommended to avoid confusion
     warning: skipping duplicate package `embedded` found at `/home/ubuntu/.cargo/git/checkouts/rust-bitcoin-a512414fb5559947/3415d99/bitcoin/embedded`
     warning: skipping duplicate package `embedded` found at `/home/ubuntu/.cargo/git/checkouts/rust-bitcoin-a512414fb5559947/e38bc26/bitcoin/embedded`
     Finished `test` profile [unoptimized + debuginfo] target(s) in 1.90s
          Running unittests src/lib.rs (target/debug/deps/pallet_bitcoin-5a032c981f885c6f)

     running 1 test
     test tests::test_runtime_txid_type ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

          Running unittests src/lib.rs (target/debug/deps/pallet_executive-0f2fe428f34ee43f)

     running 0 tests

     test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

          Running unittests src/lib.rs (target/debug/deps/sc_consensus_nakamoto-673b557354b8ad14)

     running 2 tests
     test verification::header_verify::tests::test_calculate_next_work_required ... ok
     test verification::tests::test_find_utxo_in_current_block ... ok

     test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.20s

          Running unittests src/lib.rs (target/debug/deps/sc_fast_sync_backend-e8f6c6930431c426)

     running 2 tests
     test tests::store_duplicate_justifications_is_forbidden ... ok
     test tests::append_and_retrieve_justifications ... ok

     test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

          Running unittests src/lib.rs (target/debug/deps/subcoin_informant-bf64c25aba820de6)

     running 1 test
     test display::test_display_block_hash ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

          Running unittests src/lib.rs (target/debug/deps/subcoin_network-7673d06b806b8fbc)

     running 7 tests
     test orphan_blocks_pool::tests::orphan_block_pool_insert_orphan_block ... ok
     test orphan_blocks_pool::tests::orphan_block_pool_insert_unknown_block ... ok
     test checkpoint::tests::test_next_checkpoint ... ok
     test orphan_blocks_pool::tests::orphan_block_pool_remove_known_blocks ... ok
     test orphan_blocks_pool::tests::orphan_block_pool_remove_blocks_for_parent ... ok
     test orphan_blocks_pool::tests::orphan_block_pool_remove_blocks ... ok
     test block_downloader::blocks_first::tests::duplicate_block_announcement_should_not_be_downloaded_again ... ok

     test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 15.65s

          Running unittests src/lib.rs (target/debug/deps/subcoin_node-1d2acafb14d4f921)

     running 2 tests
     test tests::rocksdb_disabled_in_substrate ... ok
     test commands::tools::tests::test_revert_sha256d ... ok

     test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

          Running unittests src/bin/subcoin.rs (target/debug/deps/subcoin-a75fb5552deb51bf)

     running 0 tests

     test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

          Running unittests src/lib.rs (target/debug/deps/subcoin_primitives-a84d48eba265fe61)

     running 0 tests

     test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

          Running unittests src/lib.rs (target/debug/deps/subcoin_rpc-f6259db14fa5b487)

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

          Running unittests src/lib.rs (target/debug/deps/subcoin_service-0b18db2ae41f5b3f)

     running 1 test
     test block_executor::tests::off_runtime_in_memory_executor_should_produce_same_result_as_runtime_disk_executor ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 36.71


</details>

## Docker
Image is building. 

<details>

````
ubuntu@ip-172-31-30-101:~/subcoin$ sudo docker build .
[+] Building 1843.6s (12/12) FINISHED                            docker:default
 => [internal] load build definition from Dockerfile                       0.1s
 => => transferring dockerfile: 1.35kB                                     0.0s
 => [internal] load metadata for docker.io/library/ubuntu:22.04            1.3s
 => [internal] load .dockerignore                                          0.0s
 => => transferring context: 2B                                            0.0s
 => [internal] load build context                                        134.7s
 => => transferring context: 12.66GB                                     134.6s
 => [builder 1/5] FROM docker.io/library/ubuntu:22.04@sha256:340d9b015b19  3.5s
 => => resolve docker.io/library/ubuntu:22.04@sha256:340d9b015b194dc6e2a1  0.0s
 => => sha256:340d9b015b194dc6e2a13938944e0d016e57b967996 1.13kB / 1.13kB  0.0s
 => => sha256:0eb0f877e1c869a300c442c41120e778db7161419244ee5 424B / 424B  0.0s
 => => sha256:8a3cdc4d1ad3e314a91f76b7b99eed443f2152e3a9b 2.30kB / 2.30kB  0.0s
 => => sha256:3713021b02770a720dea9b54c03d0ed83e03a2ef5 29.53MB / 29.53MB  1.2s
 => => extracting sha256:3713021b02770a720dea9b54c03d0ed83e03a2ef5dce2898  2.0s
 => [builder 2/5] WORKDIR /src                                           146.8s
 => [builder 3/5] RUN apt-get update &&     DEBIAN_FRONTEND=noninteracti  43.5s
 => [builder 4/5] COPY . .                                               176.3s 
 => [builder 5/5] RUN /root/.cargo/bin/cargo build     --locked     --  1465.3s 
 => [stage-1 2/3] COPY --from=builder /subcoin /subcoin                    0.2s 
 => [stage-1 3/3] RUN mkdir /node-data && chown nobody:nogroup /node-data  0.2s 
 => exporting to image                                                     0.3s 
 => => exporting layers                                                    0.3s 
 => => writing image sha256:9037f7d697a3625c15bc64fd85433e07bc5ebf0aebe98  0.0s
 ````

</details>

## Docker

Sadly I can't figure out how to start the node in docker. If I try to use `docker run <image_id> run` I get the following error. Any idea how I can make it work?

````
root@ip-172-31-30-101:/home/ubuntu/subcoin# docker run 53fbb385df41 run
Error: Service(Client(Backend("IO Error: Permission denied (os error 13)")))
2024-08-12 12:35:07 Subcoin Node    
2024-08-12 12:35:07 ✌️  version 0.1.0-e6379c5efc5d1e16f98ad6524f3fcb3e218c4908    
2024-08-12 12:35:07 ❤️  by xuliuchengxlc@gmail.com, 2024-2024    
2024-08-12 12:35:07 📋 Chain specification: Bitcoin    
2024-08-12 12:35:07 🏷  Node name: joyous-side-1016    
2024-08-12 12:35:07 👤 Role: FULL    
2024-08-12 12:35:07 💾 Database: ParityDb at /nonexistent/.local/share/subcoin/chains/mainnet/paritydb/full  
````



