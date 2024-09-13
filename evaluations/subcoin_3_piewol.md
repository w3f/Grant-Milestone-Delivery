# Evaluation

- **Status:** accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Subcoin.md
- **Milestone:** 3

| Number | Deliverable    | Accepted | Link | Notes |
| -- | --  | ---    | --- | --- |
| 0a.    | License                 | <ul><li>[x] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-3/LICENSE |  MIT  |
| 0b.    | Documentation           | <ul><li>[x] </li></ul> | Each module has its own docs. The rendered inline rustdoc is deployed at https://subcoin-project.github.io/subcoin/.  | nice |
| 0c.    | Testing and Testing Guide | <ul><li>[x] </li></ul> |  https://github.com/subcoin-project/subcoin/tree/subcoin-milestone-3?tab=readme-ov-file#run-tests |  all passing  |
| 0d.    | Docker                  | <ul><li>[x] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-3/Dockerfile The docker image is available at https://github.com/subcoin-project/subcoin/pkgs/container/subcoin/263310548?tag=v0.3.0   | builds and runs  |
| 1.     | Article	       | <ul><li>[x] </li></ul> | 	https://liuchengxu.notion.site/Subcoin-A-Step-Toward-Decentralized-Fast-Sync-for-Bitcoin-68762427a4484d73906a91602d789be9 | well written, thanks! |
| 2.     | Fast Sync | <ul><li>[x] </li></ul> |  https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-3/docs/src/test_fast_sync.md | works exactly as described in the guide. nice. |
| 3.     | Bitcoin Transaction Broadcasting | <ul><li>[x] </li></ul> |  https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-3/docs/src/test_bitcoin_transaction_broadcasting.md  | ok |

# General Notes
 With the feedback from the last milestone it was easy to evaluate this one. Guide and article are well written.

## Documentation

Good documentation as in the previous milestone.

In https://subcoin-project.github.io/subcoin/subcoin_runtime/index.html are still some items undocumented. It would be great if that could be extended slightly.

## Tests

All tests are passing.

<details>

    cargo test --workspace --all

    Compiling subcoin-node v0.1.0 (/home/ubuntu/subcoin/crates/subcoin-node)
        Finished `test` profile [unoptimized + debuginfo] target(s) in 12.69s
        Running unittests src/lib.rs (target/debug/deps/pallet_bitcoin-1ca1506fd8cd4465)

    running 1 test
    test tests::test_runtime_txid_type ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/pallet_executive-adb5e7d285e3be20)


    running 2 tests
    test verification::header_verify::tests::test_calculate_next_work_required ... ok
    test verification::tests::test_find_utxo_in_current_block ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.17s

        Running unittests src/lib.rs (target/debug/deps/sc_fast_sync_backend-d17e25075740f59b)

    running 2 tests
    test tests::append_and_retrieve_justifications ... ok
    test tests::store_duplicate_justifications_is_forbidden ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running unittests src/lib.rs (target/debug/deps/subcoin_informant-dc64abc34ae0787b)

    running 1 test
    test display::test_display_block_hash ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/subcoin_network-eb9dbe0d175e2251)

    running 7 tests
    test checkpoint::tests::test_next_checkpoint ... ok
    test orphan_blocks_pool::tests::orphan_block_pool_insert_orphan_block ... ok
    test orphan_blocks_pool::tests::orphan_block_pool_insert_unknown_block ... ok
    test orphan_blocks_pool::tests::orphan_block_pool_remove_blocks_for_parent ... ok
    test orphan_blocks_pool::tests::orphan_block_pool_remove_known_blocks ... ok
    test orphan_blocks_pool::tests::orphan_block_pool_remove_blocks ... ok
    test block_downloader::blocks_first::tests::duplicate_block_announcement_should_not_be_downloaded_again ... ok

    test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 9.89s

        Running unittests src/lib.rs (target/debug/deps/subcoin_node-b459dd99b58a6132)

    running 2 tests
    test tests::rocksdb_disabled_in_substrate ... ok
    test commands::tools::tests::test_revert_sha256d ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/bin/subcoin.rs (target/debug/deps/subcoin-e1b07d62ac9fddec)

    running 1 test
    test blockchain::tests::test_block_hash_serde ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/subcoin_runtime-2379d27afbe589f3)

    running 2 tests
    test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test test_genesis_config_builds ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s

        Running unittests src/lib.rs (target/debug/deps/subcoin_runtime_primitives-53afd9758b6530b0)


    running 2 tests
    test block_executor::tests::inspect_substrate_header_size ... ignored
    test block_executor::tests::off_runtime_in_memory_executor_should_produce_same_result_as_runtime_disk_executor ... ok

    test result: ok. 1 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 21.46s

        Running unittests src/lib.rs (target/debug/deps/subcoin_test_service-6f82fe824c6b894c)

    
</details>

## Fast sync

<details>

        2024-09-11 08:58:16.803  INFO main sc_rpc_server: Running JSON-RPC server: addr=127.0.0.1:38005, allowed origins=["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]    
    2024-09-11 08:58:16.803  INFO tokio-runtime-worker subcoin_network: Subcoin block sync is disabled until Substrate fast sync is complete
    2024-09-11 08:58:16.803  INFO tokio-runtime-worker subcoin_network: 🔊 Listening on 127.0.0.1:8333
    2024-09-11 08:58:16.805  INFO tokio-runtime-worker libp2p_mdns::behaviour: discovered: 12D3KooWSGDsbNRjwzsakY93L4sg6YiQrEg7geNTpXRaqfaUkLyP /ip4/172.31.21.95/tcp/30333/ws    
    2024-09-11 08:58:16.806  INFO tokio-runtime-worker libp2p_mdns::behaviour: discovered: 12D3KooWSGDsbNRjwzsakY93L4sg6YiQrEg7geNTpXRaqfaUkLyP /ip4/172.17.0.1/tcp/30333/ws    
    2024-09-11 08:58:17.246 DEBUG tokio-runtime-worker subcoin_network::connection: New connection peer_addr=142.132.135.164:8333 local_addr=172.31.21.95:37440 direction=Outbound connect_latency=6
    2024-09-11 08:58:17.250 DEBUG tokio-runtime-worker subcoin_network::connection: New connection peer_addr=51.77.152.20:8333 local_addr=172.31.21.95:58968 direction=Outbound connect_latency=10
    2024-09-11 08:58:17.251 DEBUG tokio-runtime-worker subcoin_network::connection: New connection peer_addr=84.146.196.78:8333 local_addr=172.31.21.95:44932 direction=Outbound connect_latency=12
    2024-09-11 08:58:17.254 DEBUG tokio-runtime-worker subcoin_network::connection: New connection peer_addr=2.233.91.176:8333 local_addr=172.31.21.95:34500 direction=Outbound connect_latency=14
    2024-09-11 08:58:17.256 DEBUG tokio-runtime-worker subcoin_network::peer_manager: Received version from 142.132.135.164:8333 version=70016 user_agent="/Satoshi:26.0.0/" start_height=860856
    2024-09-11 08:58:17.256 DEBUG tokio-runtime-worker subcoin_network::peer_manager: 🤝 Completed handshake peer=142.132.135.164:8333 direction=Outbound
    2024-09-11 08:58:17.266 DEBUG tokio-runtime-worker subcoin_network::connection: New connection peer_addr=193.86.97.61:8333 local_addr=172.31.21.95:35286 direction=Outbound connect_latency=27
    2024-09-11 08:58:17.266 DEBUG tokio-runtime-worker subcoin_network::peer_manager: Received version from 84.146.196.78:8333 version=70016 user_agent="/Satoshi:27.1.0/" start_height=860856
    2024-09-11 08:58:17.266 DEBUG tokio-runtime-worker subcoin_network::peer_manager: 🤝 Completed handshake peer=84.146.196.78:8333 direction=Outbound
    2024-09-11 08:58:17.268 DEBUG tokio-runtime-worker subcoin_network::peer_manager: Received version from 51.77.152.20:8333 version=70015 user_agent="/Satoshi:0.18.1/" start_height=860856
    2024-09-11 08:58:17.268 DEBUG tokio-runtime-worker subcoin_network::peer_manager: 🤝 Completed handshake peer=51.77.152.20:8333 direction=Outbound
    2024-09-11 08:58:17.280 DEBUG tokio-runtime-worker subcoin_network::peer_manager: Added 628 addresses from 142.132.135.164:8333
    2024-09-11 08:58:17.292 DEBUG tokio-runtime-worker subcoin_network::peer_manager: Received version from 193.86.97.61:8333 version=70016 user_agent="/Satoshi:26.0.0/" start_height=860856
    2024-09-11 08:58:17.293 DEBUG tokio-runtime-worker subcoin_network::peer_manager: 🤝 Completed handshake peer=193.86.97.61:8333 direction=Outbound
    2024-09-11 08:58:17.315 DEBUG tokio-runtime-worker subcoin_network::connection: New connection peer_addr=84.71.214.189:8333 local_addr=172.31.21.95:40778 direction=Outbound connect_latency=75
    2024-09-11 08:58:17.333 DEBUG tokio-runtime-worker subcoin_network::connection: New connection peer_addr=203.11.72.76:8333 local_addr=172.31.21.95:42796 direction=Outbound connect_latency=93
    2024-09-11 08:58:17.335 DEBUG tokio-runtime-worker subcoin_network::peer_manager: Added 640 addresses from 84.146.196.78:8333
    2024-09-11 08:58:17.374 DEBUG tokio-runtime-worker subcoin_network::peer_manager: Added 494 addresses from 193.86.97.61:8333
    2024-09-11 08:58:17.399 DEBUG tokio-runtime-worker subcoin_network::peer_manager: Received version from 84.71.214.189:8333 version=70016 user_agent="/Satoshi:25.0.0/" start_height=860856
    2024-09-11 08:58:17.399 DEBUG tokio-runtime-worker subcoin_network::peer_manager: 🤝 Completed handshake peer=84.71.214.189:8333 direction=Outbound
    2024-09-11 08:58:17.425 DEBUG tokio-runtime-worker subcoin_network::connection: New connection peer_addr=34.101.229.34:8333 local_addr=172.31.21.95:44024 direction=Outbound connect_latency=185
    2024-09-11 08:58:17.484 DEBUG tokio-runtime-worker subcoin_network::peer_manager: Added 268 addresses from 84.71.214.189:8333
    2024-09-11 08:58:17.601 DEBUG tokio-runtime-worker subcoin_network::peer_manager: 💔 Disconnecting peer reason=PeerShutdown peer_id=84.146.196.78:8333
    2024-09-11 08:58:17.745 DEBUG tokio-runtime-worker sync: Substream opened for 12D3KooWSGDsbNRjwzsakY93L4sg6YiQrEg7geNTpXRaqfaUkLyP, handshake [1, 190, 65, 0, 0, 191, 75, 204, 200, 174, 84, 26, 223, 124, 81, 208, 205, 235, 181, 158, 217, 148, 124, 157, 80, 101, 126, 93, 162, 148, 113, 166, 51, 209, 120, 136, 201, 195, 236, 93, 130, 40, 167, 5, 49, 98, 170, 146, 255, 34, 235, 117, 124, 231, 48, 171, 21, 142, 103, 79, 251, 249, 131, 196, 122, 165, 232, 82, 204]    
    2024-09-11 08:58:17.745 DEBUG tokio-runtime-worker sync: New peer 12D3KooWSGDsbNRjwzsakY93L4sg6YiQrEg7geNTpXRaqfaUkLyP with best hash 0xbf4b…88c9 (16830).    
    2024-09-11 08:58:17.745 DEBUG tokio-runtime-worker sync: Connected 12D3KooWSGDsbNRjwzsakY93L4sg6YiQrEg7geNTpXRaqfaUkLyP    
    2024-09-11 08:58:18.672  INFO tokio-runtime-worker subcoin_service::finalizer: ✅ Successfully finalized block #7400,0x46d2…7a53
    2024-09-11 08:58:18.782 DEBUG tokio-runtime-worker subcoin_network::peer_manager: Received version from 34.101.229.34:8333 version=70015 user_agent="/Satoshi:0.20.1/" start_height=860856
    2024-09-11 08:58:18.782 DEBUG tokio-runtime-worker subcoin_network::peer_manager: 🤝 Completed handshake peer=34.101.229.34:8333 direction=Outbound
    2024-09-11 08:58:18.843  INFO tokio-runtime-worker subcoin_service::finalizer: ✅ Successfully finalized block #16824,0xaad8…a292
    2024-09-11 08:58:18.844 DEBUG tokio-runtime-worker sync: Starting state sync for #16824 (0xaad8…a292)    
    2024-09-11 08:58:18.889 DEBUG tokio-runtime-worker subcoin_network::peer_manager: Received version from 203.11.72.76:8333 version=70016 user_agent="/Satoshi:27.1.0/" start_height=860856
    2024-09-11 08:58:18.889 DEBUG tokio-runtime-worker subcoin_network::peer_manager: 🤝 Completed handshake peer=203.11.72.76:8333 direction=Outbound
    2024-09-11 08:58:18.943 DEBUG tokio-runtime-worker sync: Importing state data from 12D3KooWSGDsbNRjwzsakY93L4sg6YiQrEg7geNTpXRaqfaUkLyP with 1 keys, 0 proof nodes.    
    2024-09-11 08:58:18.943 DEBUG tokio-runtime-worker sync: Importing state from Some(be89f1f86dcd96a26d6c3308a396e3812149f4e1bd7e9f4e1c267e017c117d87c362f1c9298d79cd3f7663dd3e6fb490d261c73b6a461e6ec802948d70c0b4cb00000000) to Some(26aa394eea5630e07c48ae0c9558cef702a5c1b19ab7a04f536c519aca4983ac)    
    2024-09-11 08:58:18.976 DEBUG tokio-runtime-worker sync: Importing state data from 12D3KooWSGDsbNRjwzsakY93L4sg6YiQrEg7geNTpXRaqfaUkLyP with 1 keys, 0 proof nodes.    
    2024-09-11 08:58:18.976 DEBUG tokio-runtime-worker sync: Importing state from Some(be89f1f86dcd96a26d6c3308a396e3814e7b9012096b41c4eb3aaf947f6ea429) to Some(be89f1f86dcd96a26d6c3308a396e3812149f4e1bd7e9f4e1c267e017c117d87c3635ca87d17d3162430ead8c6dc10c48752c2f3d9d099086ce7312547467be700000000)    
    2024-09-11 08:58:18.976 DEBUG tokio-runtime-worker sync: State download is complete. Import is queued    
    2024-09-11 08:58:19.140  INFO tokio-runtime-worker sync: State sync is complete (1 MiB), restarting block sync.    
    2024-09-11 08:58:19.140 DEBUG tokio-runtime-worker sync: Starting from finalized state #16824    
    2024-09-11 08:58:19.140 DEBUG tokio-runtime-worker sync: Restarted with 16824 (0xaad8…a292)    
    2024-09-11 08:58:19.140 DEBUG tokio-runtime-worker sync: New peer 12D3KooWSGDsbNRjwzsakY93L4sg6YiQrEg7geNTpXRaqfaUkLyP with known best hash 0xbf4b…88c9 (16830).    

</details>

## Docker

The node starts and immediately imports blocks.

<details>

````
2024-09-11 08:21:46 Subcoin Node    
2024-09-11 08:21:46 ✌️  version 0.1.0-9aa98a2348b    
2024-09-11 08:21:46 ❤️  by xuliuchengxlc@gmail.com, 2024-2024    
2024-09-11 08:21:46 📋 Chain specification: Bitcoin    
2024-09-11 08:21:46 🏷  Node name: merciful-island-3877    
2024-09-11 08:21:46 👤 Role: FULL    
2024-09-11 08:21:46 💾 Database: ParityDb at /root/.local/share/subcoin/chains/mainnet/paritydb/full    
2024-09-11 08:21:46 🔨 Initializing Genesis block/state (state: 0x5200…eebb, header-hash: 0xc3ec…52cc)    
2024-09-11 08:21:49 🏁 CPU score: 781.38 MiBs    
2024-09-11 08:21:49 🏁 Memory score: 9.03 GiBs    
2024-09-11 08:21:49 🏁 Disk score (seq. writes): 191.41 MiBs    
2024-09-11 08:21:49 🏁 Disk score (rand. writes): 69.87 MiBs    
2024-09-11 08:21:49 📦 Highest known block at #0
2024-09-11 08:21:49 🏷  Local node identity is: 12D3KooWBDyKYMn53mJsqMvCxbzqhnzCgVFM4RXJFq3C6b59w52k    
2024-09-11 08:21:49 Running libp2p network backend    
2024-09-11 08:21:49 💻 Operating system: linux    
2024-09-11 08:21:49 💻 CPU architecture: x86_64    
2024-09-11 08:21:49 💻 Target environment: gnu    
2024-09-11 08:21:49 💻 CPU: Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz    
2024-09-11 08:21:49 💻 CPU cores: 8    
2024-09-11 08:21:49 💻 Memory: 32094MB    
2024-09-11 08:21:49 💻 Kernel: 6.8.0-1012-aws    
2024-09-11 08:21:49 💻 Linux distribution: Ubuntu 22.04.4 LTS    
2024-09-11 08:21:49 💻 Virtual machine: yes    
2024-09-11 08:21:49 〽️ Prometheus exporter started at 127.0.0.1:9615    
2024-09-11 08:21:49 Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]    
2024-09-11 08:21:49 🔊 Listening on 127.0.0.1:8333
2024-09-11 08:21:53 🏆 Imported #1 (0xc3ec…52cc → 0xf209…0809)    
2024-09-11 08:21:53 🏆 Imported #2 (0xf209…0809 → 0xa06c…2604)    
2024-09-11 08:21:53 🏆 Imported #3 (0xa06c…2604 → 0x412a…00a6)    
2024-09-11 08:21:53 🏆 Imported #4 (0x412a…00a6 → 0xd951…9eda)    
2024-09-11 08:21:53 🏆 Imported #5 (0xd951…9eda → 0x2212…c9c6)    
2024-09-11 08:21:53 🏆 Imported #6 (0x2212…c9c6 → 0x2687…838b)    
2024-09-11 08:21:53 🏆 Imported #7 (0x2687…838b → 0x5eb9…6fad)    
2024-09-11 08:21:53 🏆 Imported #8 (0x5eb9…6fad → 0x5c57…dfff)    
2024-09-11 08:21:53 🏆 Imported #9 (0x5c57…dfff → 0xbea5…d100)    
2024-09-11 08:21:53 🏆 Imported #10 (0xbea5…d100 → 0x738f…19d6)
````

</details>





