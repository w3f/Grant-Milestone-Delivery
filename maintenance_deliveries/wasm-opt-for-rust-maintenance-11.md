# Maintenance Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this delivery**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/maintenance/wasm-opt-for-rust.md
* **Delivery Number:** 11
* **Delivery Date:** 2023/11/02


**Context**

This is a project to maintain Rust bindings to Binaryen's wasm-opt tool.

We fixed the big regression related to DWARF passes by adding an optional "dwarf" feature to the crate, and published 0.114.2.
We upgraded to binaryen 116 and and published 0.116.0.


**Deliverables**

Note: a full hourly accounting of work performed is included with the invoice.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Fixes for DWARF regression | https://github.com/brson/wasm-opt-rs/pull/156 | |
| 2. | wasm-opt 0.114.2 | https://crates.io/crates/wasm-opt/0.114.2 | |
| 3. | Upgrade to binaryen 116 | https://github.com/brson/wasm-opt-rs/pull/155 | |
| 4. | wasm-opt 0.116.0 | https://crates.io/crates/wasm-opt/0.116.0 | |
| 5. | Discussion of the DWARF regression | https://github.com/brson/wasm-opt-rs/issues/154#issuecomment-1769743989 | |
| 6. | Update substrate to 0.116.0 | https://github.com/paritytech/polkadot-sdk/pull/1995 | |

**Additional Information**

N/A
