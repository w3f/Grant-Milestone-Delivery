# Evaluation

- **Status:** Accepted
- **Application Document:** [contracts-tool](https://github.com/smiasojed/Grants-Program/blob/master/applications/contracts-tool.md) 
- **Milestone:** 1
- **Kusama Identity:** Eexv1mKLiCidz2gGh6vfowtXgSSc7mvD4xEb2ji998W4DPs
- **Previously successfully merged evaluation:** All evaluations by ali-usama

| Number | Deliverable                         | Accepted               | Link                                                                                                                                                                                       | Evaluation Notes                                |
|--------|-------------------------------------|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| 0a.    | Licence                             | <ul><li>[x] </li></ul> | [GPLv3](https://github.com/paritytech/smart-bench/blob/master/LICENSE)                                                                                                                     | Correct Licence                                 |
| 0b.    | Documentation                       | <ul><li>[x] </li></ul> | [Tool README](https://github.com/paritytech/smart-bench/blob/master/README.md),<br/>[Docker README](https://github.com/paritytech/smart-bench/blob/master/README.md)                       | Well-structured/Well-written docs               |
| 0c.    | Testing & Testing Guide             | <ul><li>[x] </li></ul> | [Integration tests](https://github.com/paritytech/smart-bench/blob/master/README.md#integration-tests),<br/>[Usage](https://github.com/paritytech/smart-bench/blob/master/README.md#usage) | All tests passed. Output attached below         |
| 0d.    | Docker                              | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/paritytech/smart-bench/blob/master/launch/smart_bench.Dockerfile)                                                                                          | Docker images building and running successfully |
| 1.     | Updated EVM Contracts               | <ul><li>[x] </li></ul> | [EVM support](https://github.com/paritytech/smart-bench/tree/master/src/evm)                                                                                                               | Working as per application                      |
| 2.     | Support for Solidity WASM Contracts | <ul><li>[x] </li></ul> | [Solidity-WASM](https://github.com/paritytech/smart-bench/tree/master/src/wasm)                                                                                                            | Working as per application                      |
| 3.     | Launch Scripts                      | <ul><li>[x] </li></ul> | [Launch Scripts](https://github.com/paritytech/smart-bench/tree/master/launch)                                                                                                             | All Scripts working without any issues          |


## General Notes

The repository is well-structured and well-documented covering a fair share of ground in test cases. The docs related to each section are quite helpful in setting up and testing the milestone. The docker images also built and ran successfully. Overall, it's an excellent delivery with no critical issues found.

## `cargo test` output
```commandline
$ cargo test
    Finished test [unoptimized + debuginfo] target(s) in 0.31s
     Running unittests src/main.rs (target/debug/deps/smart_bench-816ffebb68e5d754)

running 5 tests
test integration_tests::test_bad_contract_name_fail ... ok
test integration_tests::test_solidity_evm_contract_success ... ok
test integration_tests::test_bad_contract_node_port_fail ... ok
2023-07-22 10:14:46.197  INFO main sc_cli::runner: Substrate Contracts Node    
2023-07-22 10:14:46.198  INFO main sc_cli::runner: ✌️  version 0.24.0-fe448511262    
2023-07-22 10:14:46.198  INFO main sc_cli::runner: ❤️  by Parity Technologies <admin@parity.io>, 2021-2023    
2023-07-22 10:14:46.198  INFO main sc_cli::runner: 📋 Chain specification: Development    
2023-07-22 10:14:46.198  INFO main sc_cli::runner: 🏷  Node name: faded-division-6828    
2023-07-22 10:14:46.198  INFO main sc_cli::runner: 👤 Role: AUTHORITY    
2023-07-22 10:14:46.198  INFO main sc_cli::runner: 💾 Database: ParityDb at /tmp/cargo-contract.cli.test.node6IIn4r/chains/dev/paritydb/full    
2023-07-22 10:14:46.198  INFO main sc_cli::runner: ⛓  Native runtime: substrate-contracts-node-100 (substrate-contracts-node-1.tx1.au1)    
2023-07-22 10:14:47.995  INFO main sc_rpc_server: Running JSON-RPC HTTP server: addr=127.0.0.1:9933, allowed origins=["*"]    
2023-07-22 10:14:47.996  INFO main sc_rpc_server: Running JSON-RPC WS server: addr=127.0.0.1:9944, allowed origins=["*"]    
2023-07-22 10:14:48.987 ERROR tokio-runtime-worker jsonrpsee_server::transport::ws: WS transport error: i/o error: Transport endpoint is not connected (os error 107); terminate connection: 2
test integration_tests::test_ink_contract_success ... ok
2023-07-22 10:14:49.002  INFO main sc_cli::runner: Substrate Contracts Node    
2023-07-22 10:14:49.002  INFO main sc_cli::runner: ✌️  version 0.24.0-fe448511262    
2023-07-22 10:14:49.002  INFO main sc_cli::runner: ❤️  by Parity Technologies <admin@parity.io>, 2021-2023    
2023-07-22 10:14:49.002  INFO main sc_cli::runner: 📋 Chain specification: Development    
2023-07-22 10:14:49.002  INFO main sc_cli::runner: 🏷  Node name: flawless-shake-6152    
2023-07-22 10:14:49.002  INFO main sc_cli::runner: 👤 Role: AUTHORITY    
2023-07-22 10:14:49.002  INFO main sc_cli::runner: 💾 Database: ParityDb at /tmp/cargo-contract.cli.test.nodeomcwiV/chains/dev/paritydb/full    
2023-07-22 10:14:49.002  INFO main sc_cli::runner: ⛓  Native runtime: substrate-contracts-node-100 (substrate-contracts-node-1.tx1.au1)    
2023-07-22 10:14:50.812  INFO main sc_rpc_server: Running JSON-RPC HTTP server: addr=127.0.0.1:9933, allowed origins=["*"]    
2023-07-22 10:14:50.812  INFO main sc_rpc_server: Running JSON-RPC WS server: addr=127.0.0.1:9944, allowed origins=["*"]    
2023-07-22 10:14:51.915 DEBUG tokio-runtime-worker runtime::contracts: Execution finished with debug buffer: call: seal_set_storage=4294967295,
    
2023-07-22 10:14:51.960 DEBUG tokio-runtime-worker runtime::contracts: Execution finished with debug buffer: call: seal_get_storage: =0,
call: seal_set_storage=1,
    
2023-07-22 10:14:51.984 ERROR tokio-runtime-worker jsonrpsee_server::transport::ws: WS transport error: i/o error: Transport endpoint is not connected (os error 107); terminate connection: 2
test integration_tests::test_solidity_wasm_contract_success ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 13.89s
```

## `build.sh` output
```commandline
$ ./build.sh 
[polkadot-parachain] already exists
[polkadot] already exists
[zombienet] already exists
[moonbeam] already exists
[+] Building 765.6s (17/17) FINISHED                                                                                                                                            
 => [internal] load .dockerignore                                                                                                                                          0.0s
 => => transferring context: 2B                                                                                                                                            0.0s
 => [internal] load build definition from smart_bench.Dockerfile                                                                                                           0.0s
 => => transferring dockerfile: 1.26kB                                                                                                                                     0.0s
 => [internal] load metadata for docker.io/library/ubuntu:20.04                                                                                                           13.3s
 => [internal] load metadata for docker.io/paritytech/ci-linux:production                                                                                                 13.2s
 => [internal] load build context                                                                                                                                          8.4s
 => => transferring context: 785.36MB                                                                                                                                      8.3s
 => [builder 1/4] FROM docker.io/paritytech/ci-linux:production@sha256:dc9abf9e877c5bad94828245406dac8a186530e1ad6a1b5f2072e5e19e1f64b4                                  338.5s
 => => resolve docker.io/paritytech/ci-linux:production@sha256:dc9abf9e877c5bad94828245406dac8a186530e1ad6a1b5f2072e5e19e1f64b4                                            0.0s
 => => sha256:2d60a4916bc3faa064d298c966fd315dd26cd42fd54ec492ec238a99f649ca50 10.01kB / 10.01kB                                                                           0.0s
 => => sha256:9d21b12d5fab9ab82969054d72411ce627c209257df64b6057016c981e163c30 31.42MB / 31.42MB                                                                          26.3s
 => => sha256:94ec252bb138516408d499a54bd40801d1c76e3e0182571a90bb138e86cce7e3 588.46MB / 588.46MB                                                                       310.6s
 => => sha256:935ba62d5fdff39246cf9fca5697ae756bfdc34b2957c935254f447f1a296165 409.86MB / 409.86MB                                                                       257.4s
 => => sha256:dc9abf9e877c5bad94828245406dac8a186530e1ad6a1b5f2072e5e19e1f64b4 762B / 762B                                                                                 0.0s
 => => extracting sha256:9d21b12d5fab9ab82969054d72411ce627c209257df64b6057016c981e163c30                                                                                  1.5s
 => => extracting sha256:94ec252bb138516408d499a54bd40801d1c76e3e0182571a90bb138e86cce7e3                                                                                 17.0s
 => => extracting sha256:935ba62d5fdff39246cf9fca5697ae756bfdc34b2957c935254f447f1a296165                                                                                 10.0s
 => [stage-1 1/7] FROM docker.io/library/ubuntu:20.04@sha256:c9820a44b950956a790c354700c1166a7ec648bc0d215fa438d3a339812f1d01                                             56.3s
 => => resolve docker.io/library/ubuntu:20.04@sha256:c9820a44b950956a790c354700c1166a7ec648bc0d215fa438d3a339812f1d01                                                      0.0s
 => => sha256:14be0685b7682b182af5b862c9638cb1cb4ca1a70bd5aa90deed96e9cca881e7 2.30kB / 2.30kB                                                                             0.0s
 => => sha256:c9820a44b950956a790c354700c1166a7ec648bc0d215fa438d3a339812f1d01 1.13kB / 1.13kB                                                                             0.0s
 => => sha256:8c38f4ea0b178a98e4f9f831b29b7966d6654414c1dc008591c6ec77de3bf2c9 424B / 424B                                                                                 0.0s
 => => sha256:01085d60b3a624c06a7132ff0749efc6e6565d9f2531d7685ff559fb5d0f669f 27.51MB / 27.51MB                                                                          55.0s
 => => extracting sha256:01085d60b3a624c06a7132ff0749efc6e6565d9f2531d7685ff559fb5d0f669f                                                                                  1.1s 
 => [stage-1 2/7] RUN apt-get update         && DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y    libssl1.1=1.1.1f-1ubuntu2.19    netcat=1.20  89.1s 
 => [builder 2/4] COPY . /smart-bench                                                                                                                                      1.6s 
 => [builder 3/4] WORKDIR /smart-bench                                                                                                                                     0.0s 
 => [builder 4/4] RUN cargo install --root /usr/local/ --locked --path .  && cargo clean  && rm -rf /usr/local/cargo/registry  && rm -rf /usr/local/cargo/git            402.9s 
 => [stage-1 3/7] COPY --from=builder /usr/local/bin/smart-bench /usr/local/bin                                                                                            0.1s 
 => [stage-1 4/7] COPY launch/bin/* /usr/local/smart-bench/bin/                                                                                                            5.5s 
 => [stage-1 5/7] COPY launch/../contracts /usr/local/smart-bench/contracts                                                                                                0.1s 
 => [stage-1 6/7] COPY launch/configs/* /usr/local/smart-bench/config/                                                                                                     0.1s 
 => [stage-1 7/7] COPY launch/entrypoint.sh /entrypoint.sh                                                                                                                 0.1s 
 => exporting to image                                                                                                                                                     3.2s 
 => => exporting layers                                                                                                                                                    3.2s
 => => writing image sha256:7bbf257cb397d59c634f2f6f6fdc256b3fc068eaab524ee10f06cc5e7344833b                                                                               0.0s
 => => naming to docker.io/library/smart-bench:latest 
```