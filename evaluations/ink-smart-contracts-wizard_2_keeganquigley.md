
# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-smart-contract-wizard.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley


| Number | Deliverable   | Accepted | Link                                                                                 | Notes |
|--------|---------------|----------|----------------------------------------------------------------------------|-------|
| 0a.     | License   | <ul><li>[x] </li></ul> | Apache 2.0                            |       |
| 0b.     | Documentation       | <ul><li>[x] </li></ul> | https://github.com/avirajkhare00/ink-wizard/blob/main/README.md                                                                        | Documentation could be improved to show how to use it.   |
| 0c.     | Tests         | <ul><li>[x] </li></ul> | https://github.com/avirajkhare00/ink-wizard/tree/main/tests/commands                |    |
| 0d.     | Docker | <ul><li>[x] </li></ul> | https://github.com/avirajkhare00/ink-wizard/blob/main/Dockerfile | Builds and runs container successfully.      |
| 0e.     | Article | <ul><li>[x] </li></ul> | 
| 0.      | Smart Contract Generator CLI | <ul><li>[x] </li></ul> | https://github.com/Supercolony-net/openbrush-contracts | 
| 1.      | Push the Python package to PyPi | <ul><li>[x] </li></ul> | https://github.com/avirajkhare00/ink-wizard/tree/main/ink_wizard/template_generators | Looks good.
| 2.      | Creation of formula for CLI | <ul><li>[x] </li></ul> | https://github.com/avirajkhare00/homebrew-ink-wizard/blob/main/Formula/ink-wizard.rb | Looks good.

## General Notes

### Tests

Flipper contract fails to compile under +stable toolchain with following errors:
```rust
Compiling flipper v0.1.0 (/private/var/folders/6_/b7tdvp0d6h779ktj0h92w5km0000gn/T/cargo-contract_nrd4F6)
    Finished release [optimized] target(s) in 18.63s
 [3/6] Post processing wasm file
ERROR: Validation of the Wasm failed.


ERROR: An unexpected import function was found in the contract Wasm: get_storage.
The only allowed import functions are those starting with one of the following prefixes:
seal, memory


ERROR: An unexpected import function was found in the contract Wasm: value_transferred.
The only allowed import functions are those starting with one of the following prefixes:
seal, memory


ERROR: An unexpected import function was found in the contract Wasm: input.
The only allowed import functions are those starting with one of the following prefixes:
seal, memory


ERROR: An unexpected import function was found in the contract Wasm: debug_message.
The only allowed import functions are those starting with one of the following prefixes:
seal, memory


ERROR: An unexpected import function was found in the contract Wasm: set_storage.
The only allowed import functions are those starting with one of the following prefixes:
seal, memory
```
Running `cargo test` on the PSP22 contract results in the following error:
```rust
error[E0554]: `#![feature]` may not be used on the stable release channel
  --> /Users/keeganquigley/.cargo/git/checkouts/openbrush-contracts-4c291f7aab99c37d/14ff655/contracts/src/lib.rs:23:1
   |
23 | #![feature(min_specialization)]
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

For more information about this error, try `rustc --explain E0554`.
```
Running `cargo contract build` on PSP22 results in a lot of these identical errors:
```rust
::impls::ManualKey<1117114132_u32>` in future versions
   = note: upstream crates may add a new impl of trait `parity_scale_codec::WrapperTypeDecode` for type `std::option::Option<()>` in future versions
   = note: upstream crates may add a new impl of trait `parity_scale_codec::WrapperTypeDecode` for type `std::option::Option<()>` in future versions
   = note: upstream crates may add a new impl of trait `std::ops::Deref` for type `std::option::Option<()>` in future versions
   = note: upstream crates may add a new impl of trait `parity_scale_codec::WrapperTypeEncode` for type `std::option::Option<()>` in future versions
```
While trying it with the +nightly toolchain results in this common error:
```rust
cargo +nightly contract build
ERROR: Mismatching versions of `parity-scale-codec` were found!
Please ensure that your contract and your ink! dependencies use a compatible version of this package.
```
