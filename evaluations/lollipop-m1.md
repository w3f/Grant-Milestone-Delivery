# Evaluation



- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Lollipop.md
- **Milestone:** 1


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/LollipopHQ/sbpf-on-polkavm/blob/main/LICENSE | Apache 2.0 |
| 0b. | Documentation |<ul><li>[x] </li></ul>| https://github.com/LollipopHQ/sbpf-on-polkavm#code-structure | Initial architecture documentation explaining sBPF execution in PVM |
| 0c. | Testing and Testing Guide |<ul><li>[x] </li></ul>| https://github.com/LollipopHQ/sbpf-on-polkavm/blob/main/README.md | Unit tests to measure compiled sBPF interpreter size |
| 0d. | Docker |<ul><li>[x] </li></ul>| https://hub.docker.com/repository/docker/yipinlollipop/sbpf_on_polkavm/general | Containerized and deploy to run Minimal sBPF Execution Test in PVM using Docker |
| 0e. | Article |<ul><li>[x] </li></ul>| https://medium.com/lollipop-builders/bridging-two-blockchain-worlds-inside-the-sbpf-polkavm-lollipop-initiative-00dcba14aa69 | ... |
| 1. | Compile `anza-xyz/sbpf` with `no_std` and analyze feasibility |<ul><li>[x] </li></ul>| https://github.com/LollipopHQ/sbpf | ... |
| 2. | Memory & Execution Profiling for Minimal sBPF |<ul><li>[x] </li></ul>| https://github.com/LollipopHQ/sbpf-on-polkavm?tab=readme-ov-file#profiling-statistics | ...|
| 3. | Fork `anza-xyz/sbpf` & Introduce PVM Service (`jam-pvm-common`) |<ul><li>[x] </li></ul>| https://github.com/LollipopHQ/sbpf-on-polkavm/tree/main/sbpf-jam | Refactored sBPF interpreter to work as a PolkaVM service using `jam-pvm-common`. |
| 4. | Compile & Measure sBPF Binary Size |<ul><li>[x] </li></ul>| https://github.com/LollipopHQ/sbpf-on-polkavm#profiling-statistics | According to memory profiling statistics, the size of the Binary is 143kb (<4mb) |
| 5. | Solana Account Model Integration |<ul><li>[x] </li></ul>| https://github.com/LollipopHQ/sbpf-on-polkavm/tree/main/sbpf-polkavm | Solana’s account model is ported. |
| 6. | Minimal sBPF Execution Test in PVM |<ul><li>[x] </li></ul>| https://github.com/LollipopHQ/sbpf-on-polkavm/tree/main/client | The test environment has been successfully deployed and tested. |

# General Notes

Solana program builds successfully with Anchor

```rust
   Compiling anchor-attribute-access-control v0.31.1
   Compiling anchor-derive-serde v0.31.1
   Compiling anchor-attribute-account v0.31.1
   Compiling anchor-derive-space v0.31.1
   Compiling base64 v0.21.7
   Compiling anchor-attribute-program v0.31.1
   Compiling anchor-lang v0.31.1
   Compiling counter v0.1.0 (/home/ubuntu/sbpf-on-polkavm/solana-programs/counter/programs/counter)
    Finished `test` profile [unoptimized + debuginfo] target(s) in 45.79s
     Running unittests src/lib.rs (/home/ubuntu/sbpf-on-polkavm/solana-programs/counter/target/debug/deps/counter-4965141007b339d4)
```
Program successfully initializes with the correct output:
```rust
```rust
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 8m 35s
     Running `target/debug/client`
[client/src/main.rs:26:5] program_keypair.pubkey() = EoXDvKpyju8yYcV5MP7BAULnffvKoRfXGxVriDg7MCJy
counter_pda J5xYKqho8rG6mbopLdi13hPzn9VWN5rwRHdg1z5th9N1
Calling counter Initialize instruction...
[level=2][]accumulate is called. slot: deadbeef, service id: beefdead, items' size: 1
sol_log_: Instruction: Initialize
sol_log_: initialize: EoXDvKpyju8yYcV5MP7BAULnffvKoRfXGxVriDg7MCJy
[level=2][sbpf-jam]program execution result: instruction_count: 140, program_result: 0
Counter: Counter { cnt: 0 } len: [255, 176, 4, 245, 188, 253, 124, 25, 0, 0, 0, 0]
Calling counter inc instruction...
[level=2][]accumulate is called. slot: deadbeef, service id: beefdead, items' size: 1
sol_log_: Instruction: Inc
sol_log_: Inc: EoXDvKpyju8yYcV5MP7BAULnffvKoRfXGxVriDg7MCJy
[level=2][sbpf-jam]program execution result: instruction_count: 140, program_result: 0
Counter: Counter { cnt: 1 } len: [255, 176, 4, 245, 188, 253, 124, 25, 1, 0, 0, 0]
Counter init space: 4
AccountsDB dropped and RocksDB closed
```
