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
