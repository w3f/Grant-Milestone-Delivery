# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/wasm-opt-for-rust.md
* **Milestone Number:** 2

**Context**

The goal of this milestone was to integrate [`wasm-opt-rs`] into `cargo-contract`.
This is the final milestone of the project.

[`wasm-opt-rs`]: https://github.com/brson/wasm-opt-rs

The project completed as expected.
The `wasm-opt` crate [has been integrated into `cargo-contract`](https://github.com/paritytech/cargo-contract/pull/766).
There were no new obstacles discovered in M2,
but there were some positive surprises:

1) [@athei](https://github.com/athei)
   [submitted a patch to replace `wasm-gc` with `wasm-opt` in `wasm-builder`](https://github.com/paritytech/substrate/pull/12280).
   The author of Binaryen has been helping meet their requirements.
2) [@dtolnay](https://github.com/dtolnay),
   author of `cxx`,
   extensively reviewed our code and made a number of improvements.
3) Stellar has begun [integrating it into Soroban](https://github.com/stellar/soroban-cli/pull/236).

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/brson/wasm-opt-rs/tree/v0.110.1 | |
| 0b. | Documentation | https://github.com/brson/wasm-opt-rs/tree/v0.110.1 | |
| 0c. | Testing Guide | https://github.com/brson/wasm-opt-rs/tree/v0.110.1/components/wasm-opt/tests <br> https://github.com/brson/wasm-opt-rs/tree/v0.110.1/components/conformance-tests/tests | |
| 0d. | Docker | Docker is not required for this project. | |
| 0e. | Article | https://brson.github.io/2022/10/26/creating-wasm-opt-rust-bindings-with-cxx | |
| 1. | APIs | https://docs.rs/wasm-opt/0.110.1/wasm_opt <br> https://docs.rs/wasm-opt-cxx-sys/0.110.1/wasm_opt_cxx_sys <br> https://docs.rs/wasm-opt-sys/0.110.1/wasm_opt_sys | |
| 2. | `cargo-contract` integration | https://github.com/paritytech/cargo-contract/pull/766 | |
| 3. | CI | https://github.com/brson/wasm-opt-rs/actions | ARM Linux CI is provided through Circle CI and is visible on pull requests, but not on the linked GitHub actions page. |

**Additional Information**

During the M1 review @lucasvanmol [noted that coverage tool `cargo-tarpaulin` segfaults on the `wasm-opt` crate](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/wasm-opt-rust_1_lucasvanmol.md).
We investigated briefly but `tarpaulin` is a complex instrumentation tool and fixing the problem is beyond the scope of this project.
We don't have evidence that the problem affects embedders of `wasm-opt` beyond perhaps making embedding projects untestable with `tarpaulin`.
We have noted this caveat in the `wasm-opt` docs.
We have [filed an issue against `cargo-tarpaulin`](https://github.com/xd009642/tarpaulin/issues/1126).
