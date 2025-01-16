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

## Tests

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
