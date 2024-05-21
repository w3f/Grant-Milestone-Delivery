# General Notes

## Demos

`Echo_server` works with 1 warning:
```rust
warning: type `EchoServer` is more private than the item `setup_node`
  --> src/main.rs:31:1
   |
31 | pub async fn setup_node(ports: (Port, Port)) -> Core<EchoServer> {
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function `setup_node` is reachable at visibility `pub`
   |
note: but type `EchoServer` is only usable at visibility `pub(crate)`
  --> src/main.rs:14:1
   |
14 | struct EchoServer;
   | ^^^^^^^^^^^^^^^^^
   = note: `#[warn(private_interfaces)]` on by default

warning: `echo_server` (bin "echo_server") generated 1 warning
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 1m 20s
     Running `target/debug/echo_server`
Welcome to the Echo-Server SwarmNl example.
Type into the terminal and watch it get echoed back to you.
Enter your input (Ctrl+D to end):
52ten
--> 52ten
```

Node panics successfully after timeout:
```rust
We're listening on the /ip4/172.17.0.1/udp/49606/quic-v1
[1] >>>> Writing file location to DHT: config_file
thread 'main' panicked at src/main.rs:195:43:
called `Result::unwrap()` on an `Err` value: KadStoreRecordError([99, 111, 110, 102, 105, 103, 95, 102, 105, 108, 101])
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

`file_sharing_app` works succesfully:

```rust
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/127.0.0.1/tcp/49666
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.31.30.147/tcp/49666
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.17.0.1/tcp/49666
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/127.0.0.1/udp/49606/quic-v1
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.31.30.147/udp/49606/quic-v1
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.17.0.1/udp/49606/quic-v1
Connection established with peer: PeerId("12D3KooWS8jmLE1Fbh82FER3kZ4iNQWy5aq8BZ7WgqD7ZpHmDaVs")
[1] >>>> Writing file location to DHT: config_file
Record successfully written to DHT. Key: [99, 111, 110, 102, 105, 103, 95, 102, 105, 108, 101]
Received incoming RPC: [[98, 111, 111, 116, 115, 116, 114, 97, 112, 95, 99, 111, 110, 102, 105, 103, 46, 105, 110, 105]]
File read successfully: bootstrap_config.ini
```
```rust
[2] >>>> File read from DHT: bootstrap_config.ini
[2] >>>> A fetch request has been sent to peer: PeerId("12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu")
[2] >>>> Here is the file delivered from the remote peer:

; Copyright (c) 2024 Algorealm
; A typical template showing the various configurations for bootstraping a node

; If this section is missing, the default ports will be used upon node setup
[ports]
; TCP/IP port to listen on
tcp=3000
; UDP port to listen on
udp=4000

; This section is for the node's identity and cryptographic keypair
; If this section is missing, a Ed25519 keypair will be generated upon node setup
[auth]
; Type of keypair to generate for node identity and message auth e.g RSA, EDSA, Ed25519
crypto=Ed25519
; The protobuf serialized format of the node's cryptographic keypair
protobuf_keypair=[]

[bootstrap]
; The boostrap nodes to connect to immediately after start up
boot_nodes=[12D3KooWGfbL6ZNGWqS11MoptH2A7DB1DG6u85FhXBUPXPVkVVRq:/ip4/x.x.x.x/tcp/1509, QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt:/ip4/x.x.x.x/tcp/1509]

[blacklist]
; The list of blacklisted peers we don't want to have anything to do with
blacklist=[12D3KooWGfbL6ZNGWqS11MoptH2A7DB1DG6u85FhXBUPXPVkVVRq, QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt]
```

`simple_test` works successfully:

```rust
[[Node 1]] >> Peer PeerId("12D3KooWJvEyRcFnhwyRuMSt6nLVs1fnv8gHULRRNBJoBCkqbPYx") just joined the mesh network for topic: game_group
[[Node 1]] >> incoming data from peer -> guess: 10
[[Node 1]] >> Node (1) score: 0
[[Node 1]] >> incoming data from peer -> guess: 2
[[Node 1]] >> Node (1) score: 1
[[Node 1]] >> incoming data from peer -> guess: 8
[[Node 1]] >> Node (1) score: 2
[[Node 1]] >> incoming data from peer -> guess: 8
[[Node 1]] >> Node (1) score: 2
[[Node 1]] >> incoming data from peer -> guess: 3
[[Node 1]] >> Node (1) score: 3
[[Node 1]] >> incoming data from peer -> guess: 6
[[Node 1]] >> Node (1) score: 3
[[Node 1]] >> incoming data from peer -> guess: 1
[[Node 1]] >> Node (1) score: 3
[[Node 1]] >> incoming data from peer -> guess: 5
[[Node 1]] >> Node (1) score: 4
[[Node 1]] >> incoming data from peer -> guess: 2
[[Node 1]] >> Congratulations! Node 1 is the winner.
[[Node 1]] >> incoming data from peer -> guess: 10
ubuntu@ip-172-31-30-147:~/SwarmNL/tutorials/simple_game$
```
```rust
[[Node 2]] >> Peer PeerId("12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu") just joined the mesh network for topic: game_group
[[Node 2]] >> incoming data from peer -> guess: 5
[[Node 2]] >> Node (2) score: 0
[[Node 2]] >> Message dropped, remote guess: 19
[[Node 2]] >> Message dropped, remote guess: 15
[[Node 2]] >> incoming data from peer -> guess: 4
[[Node 2]] >> Node (2) score: 1
[[Node 2]] >> Message dropped, remote guess: 14
[[Node 2]] >> incoming data from peer -> guess: 6
[[Node 2]] >> Node (2) score: 1
[[Node 2]] >> incoming data from peer -> guess: 1
[[Node 2]] >> Node (2) score: 2
[[Node 2]] >> Message dropped, remote guess: 20
[[Node 2]] >> Message dropped, remote guess: 13
[[Node 2]] >> incoming data from peer -> guess: 10
[[Node 2]] >> Node (2) score: 2
[[Node 2]] >> incoming data from peer -> win: 10
[[Node 2]] >> Game Over! Node 1 is the winner.
ubuntu@ip-172-31-30-147:~/SwarmNL/tutorials/simple_game$
```

## Testing

Node behavior tests pass:
```rust
running 5 tests
test core::tests::node_behaviour::node_default_behavior_works ... ok
test core::tests::node_behaviour::node_custom_setup_works ... ok
test core::tests::node_behaviour::node_custom_behavior_with_network_id_works ... ok
test core::tests::node_behaviour::node_custom_behavior_with_network_id_fails - should panic ... ok
test core::tests::node_behaviour::node_save_keypair_offline_works_tokio ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 32 filtered out; finished in 1.18s
```

Peer dialing tests pass:
```rust
running 1 test
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/127.0.0.1/tcp/49666
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.31.30.147/tcp/49666
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.17.0.1/tcp/49666
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/127.0.0.1/udp/49606/quic-v1
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.31.30.147/udp/49606/quic-v1
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.17.0.1/udp/49606/quic-v1
test core::tests::layer_communication::dialing_peer_works has been running for over 60 seconds
Connection established with peer: PeerId("12D3KooWF1CHdjFBRBRgbunEMpwKaeon36uUB1XybcYm45GUDQTB")
Connection established with peer: PeerId("12D3KooWF1CHdjFBRBRgbunEMpwKaeon36uUB1XybcYm45GUDQTB")
```

Second node communicates and exits successfully:
```rust
running 1 test
Second node here!
Dailing /ip4/127.0.0.1/tcp/49666
Peer id: 12D3KooWF1CHdjFBRBRgbunEMpwKaeon36uUB1XybcYm45GUDQTB
We're listening on the /ip4/127.0.0.1/tcp/49667
Peer id: 12D3KooWF1CHdjFBRBRgbunEMpwKaeon36uUB1XybcYm45GUDQTB
We're listening on the /ip4/172.31.30.147/tcp/49667
Peer id: 12D3KooWF1CHdjFBRBRgbunEMpwKaeon36uUB1XybcYm45GUDQTB
We're listening on the /ip4/172.17.0.1/tcp/49667
Peer id: 12D3KooWF1CHdjFBRBRgbunEMpwKaeon36uUB1XybcYm45GUDQTB
We're listening on the /ip4/127.0.0.1/udp/49607/quic-v1
Peer id: 12D3KooWF1CHdjFBRBRgbunEMpwKaeon36uUB1XybcYm45GUDQTB
We're listening on the /ip4/172.31.30.147/udp/49607/quic-v1
Peer id: 12D3KooWF1CHdjFBRBRgbunEMpwKaeon36uUB1XybcYm45GUDQTB
We're listening on the /ip4/172.17.0.1/udp/49607/quic-v1
Connection established with peer: PeerId("12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu")
Connection established with peer: PeerId("12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu")
test core::tests::layer_communication::dialing_peer_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 37 filtered out; finished in 4.01s
```

Fetching test is successful:
```rust
running 1 test
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/127.0.0.1/tcp/49666
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.31.30.147/tcp/49666
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.17.0.1/tcp/49666
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/127.0.0.1/udp/49606/quic-v1
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.31.30.147/udp/49606/quic-v1
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.17.0.1/udp/49606/quic-v1
This is the server node for rpc testing
test core::tests::layer_communication::rpc_fetch_works has been running for over 60 seconds
Connection established with peer: PeerId("12D3KooWB5HnWhrGgDadfeAaTYwapi8VauuiTV8QxdLzPHjww8nQ")
Recvd incoming RPC: [[83, 111, 109, 101, 70, 101, 116, 99, 104, 75, 101, 121]]
```

Second node receives incoming RPC:
```rust
Second node here!
Dailing /ip4/127.0.0.1/tcp/49666
Peer id: 12D3KooWB5HnWhrGgDadfeAaTYwapi8VauuiTV8QxdLzPHjww8nQ
We're listening on the /ip4/127.0.0.1/tcp/49667
Peer id: 12D3KooWB5HnWhrGgDadfeAaTYwapi8VauuiTV8QxdLzPHjww8nQ
We're listening on the /ip4/172.31.30.147/tcp/49667
Peer id: 12D3KooWB5HnWhrGgDadfeAaTYwapi8VauuiTV8QxdLzPHjww8nQ
We're listening on the /ip4/172.17.0.1/tcp/49667
Peer id: 12D3KooWB5HnWhrGgDadfeAaTYwapi8VauuiTV8QxdLzPHjww8nQ
We're listening on the /ip4/127.0.0.1/udp/49607/quic-v1
Peer id: 12D3KooWB5HnWhrGgDadfeAaTYwapi8VauuiTV8QxdLzPHjww8nQ
We're listening on the /ip4/172.31.30.147/udp/49607/quic-v1
Peer id: 12D3KooWB5HnWhrGgDadfeAaTYwapi8VauuiTV8QxdLzPHjww8nQ
We're listening on the /ip4/172.17.0.1/udp/49607/quic-v1
Connection established with peer: PeerId("12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu")
This is the client node for rpc testing
test core::tests::layer_communication::rpc_fetch_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 37 filtered out; finished in 4.01s
```

Kademlia tests pass:
```rust
running 1 test
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/127.0.0.1/tcp/51666
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.31.30.147/tcp/51666
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.17.0.1/tcp/51666
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/127.0.0.1/udp/51606/quic-v1
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.31.30.147/udp/51606/quic-v1
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.17.0.1/udp/51606/quic-v1
```
```rust
running 1 test
Second node here!
Dailing /ip4/127.0.0.1/tcp/51666
Peer id: 12D3KooWK6EsocWXJ8kCkydnTfRVEdmHMNNkc8RRVxhqicEn9LBb
We're listening on the /ip4/127.0.0.1/tcp/51667
Peer id: 12D3KooWK6EsocWXJ8kCkydnTfRVEdmHMNNkc8RRVxhqicEn9LBb
We're listening on the /ip4/172.31.30.147/tcp/51667
Peer id: 12D3KooWK6EsocWXJ8kCkydnTfRVEdmHMNNkc8RRVxhqicEn9LBb
We're listening on the /ip4/172.17.0.1/tcp/51667
Peer id: 12D3KooWK6EsocWXJ8kCkydnTfRVEdmHMNNkc8RRVxhqicEn9LBb
We're listening on the /ip4/127.0.0.1/udp/51607/quic-v1
Peer id: 12D3KooWK6EsocWXJ8kCkydnTfRVEdmHMNNkc8RRVxhqicEn9LBb
We're listening on the /ip4/172.31.30.147/udp/51607/quic-v1
Peer id: 12D3KooWK6EsocWXJ8kCkydnTfRVEdmHMNNkc8RRVxhqicEn9LBb
We're listening on the /ip4/172.17.0.1/udp/51607/quic-v1
test core::tests::layer_communication::kademlia_record_store_itest_works has been running for over 60 seconds
```

Records providers tests pass:
```rust
running 1 test
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/127.0.0.1/tcp/51066
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.31.30.147/tcp/51066
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.17.0.1/tcp/51066
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/127.0.0.1/udp/51006/quic-v1
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.31.30.147/udp/51006/quic-v1
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.17.0.1/udp/51006/quic-v1
Connection established with peer: PeerId("12D3KooWEJ9WT6Lk5BfqkYDzjYn7t6zyMuUo1BqCR6vjJFNd9uz2")
test core::tests::layer_communication::kademlia_provider_records_itest_works has been running for over 60 seconds
```
```rust
running 1 test
Second node here!
Dailing /ip4/127.0.0.1/tcp/51066
Peer id: 12D3KooWEJ9WT6Lk5BfqkYDzjYn7t6zyMuUo1BqCR6vjJFNd9uz2
We're listening on the /ip4/127.0.0.1/tcp/51067
Peer id: 12D3KooWEJ9WT6Lk5BfqkYDzjYn7t6zyMuUo1BqCR6vjJFNd9uz2
We're listening on the /ip4/172.31.30.147/tcp/51067
Peer id: 12D3KooWEJ9WT6Lk5BfqkYDzjYn7t6zyMuUo1BqCR6vjJFNd9uz2
We're listening on the /ip4/172.17.0.1/tcp/51067
Peer id: 12D3KooWEJ9WT6Lk5BfqkYDzjYn7t6zyMuUo1BqCR6vjJFNd9uz2
We're listening on the /ip4/127.0.0.1/udp/51007/quic-v1
Peer id: 12D3KooWEJ9WT6Lk5BfqkYDzjYn7t6zyMuUo1BqCR6vjJFNd9uz2
We're listening on the /ip4/172.31.30.147/udp/51007/quic-v1
Peer id: 12D3KooWEJ9WT6Lk5BfqkYDzjYn7t6zyMuUo1BqCR6vjJFNd9uz2
We're listening on the /ip4/172.17.0.1/udp/51007/quic-v1
Connection established with peer: PeerId("12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu")
test core::tests::layer_communication::kademlia_provider_records_itest_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 38 filtered out; finished in 11.01s
```

Gossipsub tests pass:
```rust
running 1 test
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/127.0.0.1/tcp/49775
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.31.30.147/tcp/49775
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.17.0.1/tcp/49775
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/127.0.0.1/udp/49779/quic-v1
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.31.30.147/udp/49779/quic-v1
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.17.0.1/udp/49779/quic-v1
Subscription successfull
Connection established with peer: PeerId("12D3KooWPDDWFndnHBSz83XNV5WtFHuuG4dVSLsDELkeG8H11K6F")
```
```rust
running 1 test
Second node here!
Dailing /ip4/127.0.0.1/tcp/49775
Peer id: 12D3KooWPDDWFndnHBSz83XNV5WtFHuuG4dVSLsDELkeG8H11K6F
We're listening on the /ip4/127.0.0.1/tcp/51767
Peer id: 12D3KooWPDDWFndnHBSz83XNV5WtFHuuG4dVSLsDELkeG8H11K6F
We're listening on the /ip4/172.31.30.147/tcp/51767
Peer id: 12D3KooWPDDWFndnHBSz83XNV5WtFHuuG4dVSLsDELkeG8H11K6F
We're listening on the /ip4/172.17.0.1/tcp/51767
Peer id: 12D3KooWPDDWFndnHBSz83XNV5WtFHuuG4dVSLsDELkeG8H11K6F
We're listening on the /ip4/127.0.0.1/udp/51707/quic-v1
Peer id: 12D3KooWPDDWFndnHBSz83XNV5WtFHuuG4dVSLsDELkeG8H11K6F
We're listening on the /ip4/172.31.30.147/udp/51707/quic-v1
Peer id: 12D3KooWPDDWFndnHBSz83XNV5WtFHuuG4dVSLsDELkeG8H11K6F
We're listening on the /ip4/172.17.0.1/udp/51707/quic-v1
Connection established with peer: PeerId("12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu")
Subscription successfull
test core::tests::layer_communication::gossipsub_join_exit_itest_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 37 filtered out; finished in 14.01s
```

Publish/Subscribe tests pass:
```rust
running 1 test
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/127.0.0.1/tcp/49885
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.31.30.147/tcp/49885
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.17.0.1/tcp/49885
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/127.0.0.1/udp/49889/quic-v1
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.31.30.147/udp/49889/quic-v1
Peer id: 12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu
We're listening on the /ip4/172.17.0.1/udp/49889/quic-v1
Subscription successfull
Connection established with peer: PeerId("12D3KooWKr2jgNZmu6kHqWxRLCxpyh2MzpZ2WY4S8pCatdcXUFSB")
Recvd incoming gossip: ["Apple", "nike"]
```
```rust
running 1 test
Second node here!
Dailing /ip4/127.0.0.1/tcp/49885
Peer id: 12D3KooWKr2jgNZmu6kHqWxRLCxpyh2MzpZ2WY4S8pCatdcXUFSB
We're listening on the /ip4/127.0.0.1/tcp/51887
Peer id: 12D3KooWKr2jgNZmu6kHqWxRLCxpyh2MzpZ2WY4S8pCatdcXUFSB
We're listening on the /ip4/172.31.30.147/tcp/51887
Peer id: 12D3KooWKr2jgNZmu6kHqWxRLCxpyh2MzpZ2WY4S8pCatdcXUFSB
We're listening on the /ip4/172.17.0.1/tcp/51887
Peer id: 12D3KooWKr2jgNZmu6kHqWxRLCxpyh2MzpZ2WY4S8pCatdcXUFSB
We're listening on the /ip4/127.0.0.1/udp/51887/quic-v1
Peer id: 12D3KooWKr2jgNZmu6kHqWxRLCxpyh2MzpZ2WY4S8pCatdcXUFSB
We're listening on the /ip4/172.31.30.147/udp/51887/quic-v1
Peer id: 12D3KooWKr2jgNZmu6kHqWxRLCxpyh2MzpZ2WY4S8pCatdcXUFSB
We're listening on the /ip4/172.17.0.1/udp/51887/quic-v1
Connection established with peer: PeerId("12D3KooWCHqiBVTsUDy4ZtcV2Ds7rxt2HGuaT5dHTKskw68Y8AWu")
Subscription successfull
GossipsubBroadcastSuccess
test core::tests::layer_communication::gossipsub_message_itest_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 37 filtered out; finished in 7.02s
```
