# General Notes

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
