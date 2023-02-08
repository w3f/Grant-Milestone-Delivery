# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/wasm-opt-for-rust.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/brson/wasm-opt-rs/tree/v0.110.1#license | MIT / Apache-2.0 |
| 0b. | Documentation |<ul><li>[x] </li></ul>| [readme](https://github.com/brson/wasm-opt-rs/tree/v0.110.1#readme), [API docs](https://docs.rs/wasm-opt/latest/wasm_opt/) | comprehensive and well-written
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| [instructions](https://github.com/brson/wasm-opt-rs/tree/v0.110.1#building-from-source), [wasm-opt tests](https://github.com/brson/wasm-opt-rs/tree/v0.110.1/components/wasm-opt/tests), [binaryen conformance tests](https://github.com/brson/wasm-opt-rs/tree/v0.110.1/components/conformance-tests/tests) | 
| 0d. | Docker |<ul><li>[x] </li></ul>| - | not required
| 0e. | Article |<ul><li>[x] </li></ul>| [blog post](https://brson.github.io/2022/10/26/creating-wasm-opt-rust-bindings-with-cxx) | As thorough as it gets and an excellent read
| 1. | APIs |<ul><li>[x] </li></ul>| https://docs.rs/wasm-opt/0.110.1/wasm_opt <br> https://docs.rs/wasm-opt-cxx-sys/0.110.1/wasm_opt_cxx_sys <br> https://docs.rs/wasm-opt-sys/0.110.1/wasm_opt_sys
| 2. | `cargo-contract` integration |<ul><li>[x] </li></ul>| [PR](https://github.com/paritytech/cargo-contract/pull/766) |
| 3. | CI |<ul><li>[x] </li></ul>| [GH actions](https://github.com/brson/wasm-opt-rs/actions) | ARM Linux CI provided through Circle CI

## General Notes

Excellet code, testing and documentation.
The API and its docs are extensive and carefully constructed, even though potentially not many people will be accessing the API directly.

The article is elaborate enough to constitute a separate milestone.
It walks the reader through all the challenges encountered in both milestones and makes the complex work carried out for this grant far more accessible to others.
It is  an enjoyable and instructive read.

The `wasm_opt` crate has already been integrated into substrate and other projects outside of the ecosystem.

More notes in the [delivery file](https://github.com/w3f/Grant-Milestone-Delivery/blob/8d3d279ebc009c4c19bc683d36aa9fed8ec1ac61/deliveries/wasm-opt-for-rust-m2.md).
