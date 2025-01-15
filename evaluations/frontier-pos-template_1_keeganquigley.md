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

Only one unit test, very low coverage:

```rust
    Finished `test` profile [unoptimized + debuginfo] target(s) in 10m 18s
2025-01-15T19:09:49.030243Z  INFO cargo_tarpaulin::process_handling::linux: Launching test
2025-01-15T19:09:49.030287Z  INFO cargo_tarpaulin::process_handling: running /home/ubuntu/frontier-pos-template/target/debug/deps/babe_consensus_data_provider-1f34ada6eb019ebc

running 1 test
test test::make_vrf_signature_should_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.40s

2025-01-15T19:09:58.364068Z  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| client/babe-consensus-data-provider/src/lib.rs: 10/67
|| node/cli/src/benchmarking.rs: 0/34
|| node/cli/src/chain_spec/mainnet.rs: 0/2
|| node/cli/src/chain_spec/testnet.rs: 0/2
|| node/cli/src/eth.rs: 0/42
|| node/cli/src/service.rs: 0/434
|| node/inspect/src/command.rs: 0/14
|| node/inspect/src/lib.rs: 0/78
|| node/rpc/src/eth.rs: 0/77
|| node/rpc/src/lib.rs: 0/79
|| runtime/mainnet/src/lib.rs: 0/40
|| runtime/mainnet/src/precompiles.rs: 0/22
|| runtime/testnet/src/lib.rs: 0/40
|| runtime/testnet/src/precompiles.rs: 0/22
|| 
1.05% coverage, 10/953 lines covered
```
