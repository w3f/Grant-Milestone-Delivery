# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/frontier-pos-template.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 0a. | License| <ul><li>[x] </li></ul> | https://github.com/ChainSupport/frontier-pos-template?tab=readme-ov-file#license| |
| 0b. | Documentation| <ul><li>[x] </li></ul> | https://github.com/ChainSupport/frontier-pos-template/blob/main/README.md | |
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | https://github.com/ChainSupport/frontier-pos-template/blob/main/docs/tutorial.md#run-testnet-node | |
| 0d. | Docker | <ul><li>[x] </li></ul> | https://github.com/ChainSupport/frontier-pos-template/tree/main/docker | | 
| 1. | Client | <ul><li>[x] </li></ul> | https://github.com/ChainSupport/frontier-pos-template/tree/main/node/cli | | 
| 2. | crate: babe-consensus-data-provider | <ul><li>[x] </li></ul> | https://github.com/ChainSupport/frontier-pos-template/blob/main/client/babe-consensus-data-provider/src/lib.rs | |
| 3. | crate: ecdsa-keyring | <ul><li>[x] </li></ul> | https://github.com/ChainSupport/frontier-pos-template/blob/main/client/ecdsa-keyring/src/lib.rs | |
| 4. | Friendly code structure | <ul><li>[x] </li></ul> | https://github.com/ChainSupport/frontier-pos-template | |
| 5. | Substrate chain | <ul><li>[x] </li></ul> | https://github.com/ChainSupport/frontier-pos-template, https://github.com/superexchain/scs-chain | |

# General Notes

Node compiles w/ warnings:

<details>
  <summary>Output</summary>

```rust
   Compiling node-rpc v3.0.0-dev (/home/ubuntu/frontier-pos-template/node/rpc)
warning: unexpected `cfg` condition value: `txpool`
   --> node/rpc/src/eth.rs:206:11
    |
206 |     #[cfg(feature = "txpool")]
    |           ^^^^^^^^^^^^^^^^^^ help: remove the condition
    |
    = note: no expected values for `feature`
    = help: consider adding `txpool` as a feature in `Cargo.toml`
    = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration
    = note: `#[warn(unexpected_cfgs)]` on by default

warning: unexpected `cfg` condition value: `txpool`
   --> node/rpc/src/eth.rs:209:11
    |
209 |     #[cfg(feature = "txpool")]
    |           ^^^^^^^^^^^^^^^^^^ help: remove the condition
    |
    = note: no expected values for `feature`
    = help: consider adding `txpool` as a feature in `Cargo.toml`
    = note: see <https://doc.rust-lang.org/nightly/rustc/check-cfg/cargo-specifics.html> for more information about checking conditional configuration

warning: `node-rpc` (lib) generated 2 warnings
warning: unused import: `ByteArray`
  --> runtime/mainnet/src/lib.rs:96:14
   |
96 |     crypto::{ByteArray, KeyTypeId},
   |              ^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: type alias `VoterBagsListInstance` is never used
   --> runtime/mainnet/src/lib.rs:959:6
    |
959 | type VoterBagsListInstance = pallet_bags_list::Instance1;
    |      ^^^^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(dead_code)]` on by default

warning: unused import: `ByteArray`
  --> runtime/testnet/src/lib.rs:96:14
   |
96 |     crypto::{ByteArray, KeyTypeId},
   |              ^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: type alias `VoterBagsListInstance` is never used
   --> runtime/testnet/src/lib.rs:960:6
    |
960 | type VoterBagsListInstance = pallet_bags_list::Instance1;
    |      ^^^^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(dead_code)]` on by default

warning: `kitchensink-mainnet-runtime` (lib) generated 2 warnings
client_loop: send disconnect: Broken pipe47/2250: kitchensink-testnet-runtime
```
</details>

Docker Compose now works to run both nodes:
```rust
60abbaee033ab406266bb177a276, previously 0xe69dc86852a3052106978fbc1a53880b271641d9077d02eec816f91f4a074780.    
alice_1       | 2025-01-16 22:17:21 🏆 Imported #94 (0xa1c2…edcf → 0x339a…a276)    
bob_1         | 2025-01-16 22:17:21 🏆 Imported #94 (0xa1c2…edcf → 0x339a…a276)    
bob_1         | 2025-01-16 22:17:21 💤 Idle (1 peers), best: #94 (0x339a…a276), finalized #91 (0x3eec…beb6), ⬇ 0.8kiB/s ⬆ 0.5kiB/s    
alice_1       | 2025-01-16 22:17:21 💤 Idle (1 peers), best: #94 (0x339a…a276), finalized #91 (0x3eec…beb6), ⬇ 0.5kiB/s ⬆ 0.8kiB/s    
alice_1       | 2025-01-16 22:17:24 🙌 Starting consensus session on top of parent 0x339a942e228e960a69ad0bde6097a7b85bee60abbaee033ab406266bb177a276    
alice_1       | 2025-01-16 22:17:24 🎁 Prepared block for proposing at 95 (2 ms) [hash: 0xbef826e4cbda184879aebf305712893122f0858cf5cf23e00dbd0a5c411366e5; parent_hash: 0x339a…a276; extrinsics (1): [0x3151…da17]    
alice_1       | 2025-01-16 22:17:24 🔖 Pre-sealed block for proposal at 95. Hash now 0x59f43cd2eb9b68132867a27a17a3c4cd110c6473608bce5839498357c9de823c, previously 0xbef826e4cbda184879aebf305712893122f0858cf5cf23e00dbd0a5c411366e5.    
alice_1       | 2025-01-16 22:17:24 🏆 Imported #95 (0x339a…a276 → 0x59f4…823c)    
bob_1         | 2025-01-16 22:17:24 🏆 Imported #95 (0x339a…a276 → 0x59f4…823c)    
^CGracefully stopping... (press Ctrl+C again to force)
Stopping frontier-pos-template_bob_1        ... done
Stopping frontier-pos-template_alice_1      ... done
```

## Tests

Tarpaulin coverage for `babe-consensus-data-provider`:
```rust
Finished `test` profile [unoptimized + debuginfo] target(s) in 12m 15s
2025-01-16T21:32:55.768695Z  INFO cargo_tarpaulin::process_handling::linux: Launching test
2025-01-16T21:32:55.769415Z  INFO cargo_tarpaulin::process_handling: running /home/ubuntu/frontier-pos-template/target/debug/deps/babe_consensus_data_provider-1f34ada6eb019ebc

running 1 test
test test::make_vrf_signature_should_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.50s

2025-01-16T21:33:06.770727Z  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| client/babe-consensus-data-provider/src/lib.rs: 10/67 +0.00%
|| node/cli/src/benchmarking.rs: 0/34 +0.00%
|| node/cli/src/chain_spec/mainnet.rs: 0/2 +0.00%
|| node/cli/src/chain_spec/testnet.rs: 0/2 +0.00%
|| node/cli/src/eth.rs: 0/42 +0.00%
|| node/cli/src/service.rs: 0/434 +0.00%
|| node/inspect/src/command.rs: 0/14 +0.00%
|| node/inspect/src/lib.rs: 0/78 +0.00%
|| node/rpc/src/eth.rs: 0/77 +0.00%
|| node/rpc/src/lib.rs: 0/79 +0.00%
|| runtime/mainnet/src/lib.rs: 0/40 +0.00%
|| runtime/mainnet/src/precompiles.rs: 0/22 +0.00%
|| runtime/testnet/src/lib.rs: 0/40 +0.00%
|| runtime/testnet/src/precompiles.rs: 0/22 +0.00%
|| 
1.05% coverage, 10/953 lines covered, +0.00% change in coverage
```
Tarpaulin coverage for `ecdsa-keyring`:
```rust
test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 15.45s

2025-01-16T21:36:45.106545Z  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| client/babe-consensus-data-provider/src/lib.rs: 0/44 -14.93%
|| client/ecdsa-keyring/src/lib.rs: 47/71
|| node/cli/src/benchmarking.rs: 0/34 +0.00%
|| node/cli/src/chain_spec/mainnet.rs: 0/2 +0.00%
|| node/cli/src/chain_spec/testnet.rs: 0/2 +0.00%
|| node/cli/src/eth.rs: 0/42 +0.00%
|| node/cli/src/service.rs: 0/434 +0.00%
|| node/inspect/src/command.rs: 0/14 +0.00%
|| node/inspect/src/lib.rs: 0/78 +0.00%
|| node/rpc/src/eth.rs: 0/77 +0.00%
|| node/rpc/src/lib.rs: 0/79 +0.00%
|| runtime/mainnet/src/lib.rs: 0/40 +0.00%
|| runtime/mainnet/src/precompiles.rs: 0/22 +0.00%
|| runtime/testnet/src/lib.rs: 0/40 +0.00%
|| runtime/testnet/src/precompiles.rs: 0/22 +0.00%
|| 
4.70% coverage, 47/1001 lines covered, +3.65% change in coverage
```

Unit test for `babe-consensus-data-provider`:
```rust
     Running unittests src/lib.rs (target/debug/deps/babe_consensus_data_provider-1f34ada6eb019ebc)

running 1 test
new_randomness: [184, 41, 121, 36, 127, 195, 163, 68, 130, 182, 200, 76, 132, 19, 73, 163, 157, 157, 252, 66, 121, 55, 45, 99, 141, 249, 29, 240, 145, 53, 178, 68]
test test::make_vrf_signature_should_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.24s

   Doc-tests babe_consensus_data_provider

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
Unit test for `ecdsa-keyring`:
```rust
     Running unittests src/lib.rs (target/debug/deps/ecdsa_keyring-c4d4b39fc7d7be02)

running 1 test
test test::test ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 7.64s

   Doc-tests ecdsa_keyring

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

Cargo clippy returns compile errors:

```rust
Checking fc-cli v1.0.0-dev (https://github.com/ChainSupport/frontier.git?branch=release-polkadot-v1.13.0#de644003) error[E0425]: cannot find function `run` in crate `node_cli`   --> node/cli/bin/main.rs:27:15    | 27 |     node_cli::run()    |               ^^^ not found in `node_cli`    | help: consider importing one of these items    | 23 + use crate::cumulus_client_consensus_aura::collators::basic::run;    | 23 + use crate::cumulus_client_consensus_aura::collators::lookahead::run;    | 23 + use crate::polkadot_cli::run;    | 23 + use crate::sc_mixnet::run;    |      and 1 other candidate help: if you import `run`, refer to it directly    | 27 -     node_cli::run() 27 +     run()    | For more information about this error, try `rustc --explain E0425`. error: could not compile `staging-node-cli` (bin "substrate") due to 1 previous error
```
Cargo clippy works for testnet features:

```rust
cargo clippy --features testnet
⚡ Found 3 strongly connected components which includes at least one cycle each
cycle(001) ∈ α: DisputeCoordinator ~~{"DisputeDistributionMessage"}~~> DisputeDistribution ~~{"DisputeCoordinatorMessage"}~~>  *
cycle(002) ∈ β: CandidateBacking ~~{"CollatorProtocolMessage"}~~> CollatorProtocol ~~{"CandidateBackingMessage"}~~>  *
cycle(003) ∈ γ: NetworkBridgeRx ~~{"GossipSupportMessage"}~~> GossipSupport ~~{"NetworkBridgeRxMessage"}~~>  *
   Compiling staging-node-cli v3.0.0-dev (/home/ubuntu/frontier-pos-template/node/cli)
    Checking kitchensink-testnet-runtime v3.0.0-dev (/home/ubuntu/frontier-pos-template/runtime/testnet)
    Checking kitchensink-mainnet-runtime v3.0.0-dev (/home/ubuntu/frontier-pos-template/runtime/mainnet)
warning: using `clone` on type `AccountId20` which implements the `Copy` trait
   --> node/cli/src/benchmarking.rs:120:23
    |
120 |                 dest: self.dest.clone().into(),
    |                       ^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `self.dest`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy
    = note: `-W clippy::clone-on-copy` implied by `-W clippy::complexity`
    = help: to override `-W clippy::complexity` add `#[allow(clippy::clone_on_copy)]`

warning: `staging-node-cli` (lib) generated 1 warning (run `cargo clippy --fix --lib -p staging-node-cli` to apply 1 suggestion)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 1m 12s
```
Cargo clippy also works for mainnet features:

```rust
cargo clippy --features mainnet
⚡ Found 3 strongly connected components which includes at least one cycle each
cycle(001) ∈ α: DisputeCoordinator ~~{"DisputeDistributionMessage"}~~> DisputeDistribution ~~{"DisputeCoordinatorMessage"}~~>  *
cycle(002) ∈ β: CandidateBacking ~~{"CollatorProtocolMessage"}~~> CollatorProtocol ~~{"CandidateBackingMessage"}~~>  *
cycle(003) ∈ γ: NetworkBridgeRx ~~{"GossipSupportMessage"}~~> GossipSupport ~~{"NetworkBridgeRxMessage"}~~>  *
   Compiling staging-node-cli v3.0.0-dev (/home/ubuntu/frontier-pos-template/node/cli)
warning: using `clone` on type `AccountId20` which implements the `Copy` trait
   --> node/cli/src/benchmarking.rs:120:23
    |
120 |                 dest: self.dest.clone().into(),
    |                       ^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `self.dest`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy
    = note: `-W clippy::clone-on-copy` implied by `-W clippy::complexity`
    = help: to override `-W clippy::complexity` add `#[allow(clippy::clone_on_copy)]`

warning: `staging-node-cli` (lib) generated 1 warning (run `cargo clippy --fix --lib -p staging-node-cli` to apply 1 suggestion)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 41.69s
```
