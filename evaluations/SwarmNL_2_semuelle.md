# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/swarm-nl.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/algorealmInc/SwarmNL/blob/9049b7d0578529a5d86e5d872934b2cc192abe8d/LICENSE) | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Rust docs](https://algorealminc.github.io/SwarmNL/swarm_nl/index.html)| — |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [`tests`](https://github.com/algorealmInc/SwarmNL/tree/9049b7d0578529a5d86e5d872934b2cc192abe8d/swarm-nl/src/core/tests), [testing guide](https://algorealminc.github.io/SwarmNL/swarm_nl/testing_guide/index.html) | — |
| **0d.** | Docker files | <ul><li>[x] </li></ul> | [/examples](https://github.com/algorealmInc/SwarmNL/tree/9049b7d0578529a5d86e5d872934b2cc192abe8d/examples) | Dockerfiles for every example |
| 1. | Research | <ul><li>[x] </li></ul> | [research.md](https://github.com/algorealmInc/SwarmNL/blob/9049b7d0578529a5d86e5d872934b2cc192abe8d/research.md) | — |
| 2. | Scaling (implementation of sharding, data-forwarding and fault-tolerant algorithms to SwarmNL) | <ul><li>[x] </li></ul> | [core/replication.rs](https://github.com/algorealmInc/SwarmNL/blob/9049b7d0578529a5d86e5d872934b2cc192abe8d/swarm-nl/src/core/replication.rs) and [core/sharding.rs](https://github.com/algorealmInc/SwarmNL/blob/9049b7d0578529a5d86e5d872934b2cc192abe8d/swarm-nl/src/core/sharding.rs) | — |
| 3. | IPFS integration | <ul><li>[x] </li></ul> | [examples/ipfs](https://github.com/algorealmInc/SwarmNL/tree/9049b7d0578529a5d86e5d872934b2cc192abe8d/examples/ipfs) | — |
| 4. | Extendability of library | <ul><li>[x] </li></ul> | [examples/http-client](https://github.com/algorealmInc/SwarmNL/tree/9049b7d0578529a5d86e5d872934b2cc192abe8d/examples/http-client) | Demo of SwarmNL's interface posting data to an HTTP server |


## General Notes

- —

### `cargo test` output

```sh
Running unittests src/lib.rs (target/debug/deps/swarm_nl-5997663f32b803a3)

running 6 tests
test core::tests::node_behaviour::node_custom_setup_works ... ok
test core::tests::node_behaviour::node_custom_behavior_with_network_id_works ... ok
test core::tests::node_behaviour::node_custom_behavior_with_network_id_fails - should panic ... ok
test core::tests::node_behaviour::node_default_behavior_works ... ok
test core::tests::node_behaviour::node_save_keypair_offline_works_tokio ... ok
test core::tests::replication::eventual_consistency::new_node_join_and_sync_works ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 52 filtered out; finished in 26.14s
```

### Eventual Consistency demo output

```sh
Running `target/debug/eventual_consistency_model`
Dailing /ip4/127.0.0.1/tcp/49193
Dailing /ip4/127.0.0.1/tcp/49595
Joining replica network
Replica network successfully joined
Peer id: 12D3KooWQDpMufFJytG2xQuz7JzfK2vBH2g3XXBJ9v2xY7SegRUk
We're listening on /ip4/127.0.0.1/tcp/49194
Peer id: 12D3KooWQDpMufFJytG2xQuz7JzfK2vBH2g3XXBJ9v2xY7SegRUk
We're listening on /ip4/192.168.178.21/tcp/49194
Peer id: 12D3KooWQDpMufFJytG2xQuz7JzfK2vBH2g3XXBJ9v2xY7SegRUk
We're listening on /ip4/172.17.0.1/tcp/49194
Peer id: 12D3KooWQDpMufFJytG2xQuz7JzfK2vBH2g3XXBJ9v2xY7SegRUk
We're listening on /ip4/192.168.178.26/tcp/49194
Peer id: 12D3KooWQDpMufFJytG2xQuz7JzfK2vBH2g3XXBJ9v2xY7SegRUk
We're listening on /ip4/127.0.0.1/udp/55092/quic-v1
Peer id: 12D3KooWQDpMufFJytG2xQuz7JzfK2vBH2g3XXBJ9v2xY7SegRUk
We're listening on /ip4/192.168.178.21/udp/55092/quic-v1
Peer id: 12D3KooWQDpMufFJytG2xQuz7JzfK2vBH2g3XXBJ9v2xY7SegRUk
We're listening on /ip4/172.17.0.1/udp/55092/quic-v1
Peer id: 12D3KooWQDpMufFJytG2xQuz7JzfK2vBH2g3XXBJ9v2xY7SegRUk
We're listening on /ip4/192.168.178.26/udp/55092/quic-v1

===================
Replication Test Menu
Usage:
repl <data> - Replicate to peers
read        - Read content from buffer
exit        - Exit the application
> repl Apples
Replicating data: Apples
Replication successful
> Recieved incoming replica data from 12D3KooWFPuUnCFtbhtWPQk1HSGEiDxzVrQAxYZW5zuv2kGrsam4
Recieved incoming replica data from 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
read
Reading contents from buffer...
Buffer Data: Oranges
Buffer Data: Bananas
```