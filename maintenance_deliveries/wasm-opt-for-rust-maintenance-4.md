# Maintenance Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this delivery**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/maintenance/wasm-opt-for-rust.md
* **Delivery Number:** 4
* **Delivery Date:** 2023/04/02


**Context**

I completed the upgrade to Binaryen 112,
published a new release,
and submitted PRs to cargo-contract and substrate-wasm-builder.

My patch to Binaryen to fix Unicode paths on Windows is still in review,
and I responded to upstream's questions.

A bug was reported against wasm-opt-rs.
I investigated and it was not a bug.


**Deliverables**

Note: a full hourly accounting of work performed is included with the invoice.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Bumped wasm-opt to 0.112.0 | https://github.com/brson/wasm-opt-rs/pull/138 | |
| 2. | Upgraded cargo-contract | https://github.com/paritytech/cargo-contract/pull/1012 | |
| 3. | Upgraded substrate-wasm-builder | https://github.com/paritytech/substrate/pull/13574 | |
| 4. | Investigated reported segfault | https://github.com/brson/wasm-opt-rs/issues/140#issuecomment-1487542386 | |
| 5. | Investigated options for C++ Unicode handling for upstream patch | https://github.com/WebAssembly/binaryen/pull/5514#issuecomment-1487625712 | |


**Additional Information**

N/A
