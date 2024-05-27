# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/swarm-nl.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Notes |
| -----: | ----------- | ------------- | ------------- | ------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/algorealmInc/SwarmNL/blob/main/LICENSE) | |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Rust docs](https://algorealminc.github.io/SwarmNL/swarm_nl/index.html), [Examples and tutorials of demo apps](https://github.com/algorealmInc/SwarmNL/tree/main/tutorials) and [Generic examples of how to integrate SwarmNl](https://algorealminc.github.io/SwarmNL/swarm_nl/index.html#features-and-examples) | Great docs. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Testing guide](https://algorealminc.github.io/SwarmNL/swarm_nl/testing_guide/index.html) | Very clean & thorough testing guides. |
| **0d.** | Docker files | <ul><li>[x] </li></ul> | [Echo server Docker file](https://github.com/algorealmInc/SwarmNL/blob/main/tutorials/echo_server/Dockerfile), [File sharing app Docker file](https://github.com/algorealmInc/SwarmNL/blob/main/tutorials/file_sharing_app/Dockerfile) and [Simple game demo](https://github.com/algorealmInc/SwarmNL/tree/main/tutorials/simple_game) | Works, see notes. |
| 1. | SwarmNL configuration module | <ul><li>[x] </li></ul> | [Setup module](https://github.com/algorealmInc/SwarmNL/blob/main/swarm_nl/src/setup.rs) | Works |
| 2. | Gossipsub | <ul><li>[x] </li></ul> | [Core module](https://github.com/algorealmInc/SwarmNL/blob/main/swarm_nl/src/core/mod.rs) | Works |

# General Notes

Everything worked out of the box. Very clean code with great inline comments, great documentation & testing, good coverage, and the example demos are very helpful to see how everything works. Nice work!

## Demos

For all tutorials, Docker complains about not having a Cargo.lock file when run independently of cargo:

<details>
  <summary>Error Output</summary>

```
ubuntu@ip-172-31-26-100:~/SwarmNL/tutorials/echo_server$ docker build -t echo-server .
[+] Building 1.2s (7/9)                                                                                                                   docker:default
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 382B                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/rust:latest                                                                                      0.7s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => CACHED [1/5] FROM docker.io/library/rust:latest@sha256:5907e96b0293eb53bcc8f09b4883d71449808af289862950ede9a0e3cca44ff5                         0.0s
 => [internal] load build context                                                                                                                   0.4s
 => => transferring context: 6.40kB                                                                                                                 0.4s
 => [2/5] WORKDIR /usr/src/swarmnl-echo-server                                                                                                      0.0s
 => ERROR [3/5] COPY Cargo.toml Cargo.lock ./                                                                                                       0.0s
------
 > [3/5] COPY Cargo.toml Cargo.lock ./:
------
Dockerfile:8
--------------------
   6 |     
   7 |     # Copy the Cargo.toml and Cargo.lock files to leverage Docker cache
   8 | >>> COPY Cargo.toml Cargo.lock ./
   9 |     COPY . .
  10 |     
--------------------
ERROR: failed to solve: failed to compute cache key: failed to calculate checksum of ref 4b785416-72dd-423f-8121-7cae594f4729::t7ulpy81tww0dom36u49v40xf: "/Cargo.lock": not found
```
</details>

I have to compile the tutorial first and then it will run successfully. Perhaps this could be optimized.

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

Docker builds and runs successfully:
```ts
[+] Building 131.0s (10/10) FINISHED                                                                                                      docker:default
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 382B                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/rust:latest                                                                                      0.4s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => [1/5] FROM docker.io/library/rust:latest@sha256:5907e96b0293eb53bcc8f09b4883d71449808af289862950ede9a0e3cca44ff5                                0.0s
 => [internal] load build context                                                                                                                   8.8s
 => => transferring context: 1.39GB                                                                                                                 8.8s
 => CACHED [2/5] WORKDIR /usr/src/swarmnl-echo-server                                                                                               0.0s
 => [3/5] COPY Cargo.toml Cargo.lock ./                                                                                                            10.0s
 => [4/5] COPY . .                                                                                                                                 11.8s
 => [5/5] RUN cargo build                                                                                                                          89.2s
 => exporting to image                                                                                                                             10.6s 
 => => exporting layers                                                                                                                            10.6s 
 => => writing image sha256:a225b1faefbb38d0e886e2084a5eba96e26738ecf977b0460f2a476c3cb979ce                                                        0.0s 
 => => naming to docker.io/library/echo-server
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

Docker builds and runs successfully:
```ts
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 470B                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/rust:latest                                                                                      0.6s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => [1/7] FROM docker.io/library/rust:latest@sha256:5907e96b0293eb53bcc8f09b4883d71449808af289862950ede9a0e3cca44ff5                                0.0s
 => [internal] load build context                                                                                                                   0.2s
 => => transferring context: 333.69kB                                                                                                               0.1s
 => CACHED [2/7] WORKDIR /usr/src/swarmnl-file-sharing-demo                                                                                         0.0s
 => CACHED [3/7] COPY Cargo.toml Cargo.lock ./                                                                                                      0.0s
 => CACHED [4/7] COPY . .                                                                                                                           0.0s
 => CACHED [5/7] RUN cargo build --release                                                                                                          0.0s
 => CACHED [6/7] COPY run_both_nodes.sh .                                                                                                           0.0s
 => CACHED [7/7] RUN chmod +x run_both_nodes.sh                                                                                                     0.0s
 => exporting to image                                                                                                                              0.0s
 => => exporting layers                                                                                                                             0.0s
 => => writing image sha256:61785ca3ef7e44ddae1180e43cf97b1060e3723fd8695e25ac0f5ac44757bdf6                                                        0.0s
 => => naming to docker.io/library/file-sharing-demo 
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
Runs on Docker as well:
```sh
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 469B                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/rust:latest                                                                                      0.7s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => [1/7] FROM docker.io/library/rust:latest@sha256:5907e96b0293eb53bcc8f09b4883d71449808af289862950ede9a0e3cca44ff5                               29.9s
 => => resolve docker.io/library/rust:latest@sha256:5907e96b0293eb53bcc8f09b4883d71449808af289862950ede9a0e3cca44ff5                                0.0s
 => => sha256:c6cf28de8a067787ee0d08f8b01d7f1566a508b56f6e549687b41dfd375f12c7 49.58MB / 49.58MB                                                    2.0s
 => => sha256:5907e96b0293eb53bcc8f09b4883d71449808af289862950ede9a0e3cca44ff5 7.75kB / 7.75kB                                                      0.0s
 => => sha256:653bd24b9a8f9800c67df55fea5637a97152153fd744a4ef78dd41f7ddc40144 1.94kB / 1.94kB                                                      0.0s
 => => sha256:79cde1389f0f961fd6d2b324077ecb41b6f68b8db483f698581cb36465f64da5 4.33kB / 4.33kB                                                      0.0s
 => => sha256:891494355808bdd3db5552f0d3723fd0fa826675f774853796fafa221d850d42 24.05MB / 24.05MB                                                    2.6s
 => => sha256:6582c62583ef22717db8d306b1d6a0c288089ff607d9c0d2d81c4f8973cbfee3 64.14MB / 64.14MB                                                    4.0s
 => => extracting sha256:c6cf28de8a067787ee0d08f8b01d7f1566a508b56f6e549687b41dfd375f12c7                                                           4.2s
 => => sha256:63d588af17b3d24f31c833a1afc581f37c1459eafeaad3061d75e81455638b7d 177.59MB / 177.59MB                                                  7.9s
 => => sha256:bf2c3e352f3d2eed4eda4feeed44a1022a881058df20ac0584db70c138b041e2 211.21MB / 211.21MB                                                 12.5s
 => => extracting sha256:891494355808bdd3db5552f0d3723fd0fa826675f774853796fafa221d850d42                                                           1.0s
 => => extracting sha256:6582c62583ef22717db8d306b1d6a0c288089ff607d9c0d2d81c4f8973cbfee3                                                           4.2s
 => => extracting sha256:bf2c3e352f3d2eed4eda4feeed44a1022a881058df20ac0584db70c138b041e2                                                           7.3s
 => => extracting sha256:63d588af17b3d24f31c833a1afc581f37c1459eafeaad3061d75e81455638b7d                                                           3.4s
 => [internal] load build context                                                                                                                  15.4s
 => => transferring context: 1.73GB                                                                                                                14.8s
 => [2/7] WORKDIR /usr/src/swarmnl-simple-game-demo                                                                                                38.4s
 => [3/7] COPY Cargo.toml Cargo.lock ./                                                                                                             0.1s
 => [4/7] COPY . .                                                                                                                                 26.9s
 => [5/7] RUN cargo build --release                                                                                                               129.3s
 => [6/7] COPY run_both_nodes.sh .                                                                                                                  0.1s 
 => [7/7] RUN chmod +x run_both_nodes.sh                                                                                                            0.3s 
 => exporting to image                                                                                                                              8.9s 
 => => exporting layers                                                                                                                             8.8s
 => => writing image sha256:f615c7fc10c656dd44ce738ed1a4d165bebd5bedf3da816cc2d17124471d537e                                                        0.0s
 => => naming to docker.io/library/simple-game-demo
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
