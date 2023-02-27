# Maintenance Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this delivery**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/maintenance/wasm-opt-for-rust.md
* **Delivery Number:** 1
* **Delivery Date:** 2023/01/01


**Context**

We released version `0.111.0` of the `wasm-opt` crate, upgrading to Binaryen 111,
and submitted pull requests to `cargo-contract` and `substrate`.
We made several additional minor fixes.


**Deliverables**

Note: a full hourly accounting of work performed is included with the invoice.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Upgraded to Binaryen 111 | https://github.com/brson/wasm-opt-rs/pull/119 | |
| 2. | Handled FFI strings more efficiently | https://github.com/brson/wasm-opt-rs/pull/120 | |
| 3. | Fixed feature selection | https://github.com/brson/wasm-opt-rs/pull/126 | It essentially did not work previously. |
| 4. | Fixed CI matrix | https://github.com/brson/wasm-opt-rs/pull/125 | We weren't covering some configs we thought we were. |
| 5. | Rleased `wasm-opt` `0.111.0` | https://crates.io/crates/wasm-opt/0.111.0 | | 
| 6. | Upgraded `cargo-contract` | https://github.com/paritytech/cargo-contract/pull/888 | |
| 7. | Upgraded `substrate` | https://github.com/paritytech/substrate/pull/13038 | |


**Additional Information**

N/A
