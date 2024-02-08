# Maintenance Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this delivery**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/maintenance/wasm-opt-for-rust.md
* **Delivery Number:** 9
* **Delivery Date:** 2023/09/04


**Context**

We merged a big bugfix contribution -
we weren't running any of the binaryen DWARF passes at all,
and received a contribution to build, run and test them.
We released wasm-opt crate 0.114.1 with that fix.
We helped ink developers with a regression regarding sign-extension.
We continued working with upstream binaryen on Unicode fixes.

**Deliverables**

Note: a full hourly accounting of work performed is included with the invoice.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Discussion about the wasm sign-extension feature | https://github.com/paritytech/cargo-contract/issues/1239#issuecomment-1673837119 | |
| 2. | PR to compile the binaryen DWARF passes | https://github.com/brson/wasm-opt-rs/pull/151 | |
| 3. | wasm-opt 0.114.1 | https://crates.io/crates/wasm-opt/0.114.1 | |
| 4. | Discussion of C++ build caching | https://github.com/brson/wasm-opt-rs/issues/148#issuecomment-1701536008 | |
| 5. | Continued work on binaryen Unicode support | https://github.com/WebAssembly/binaryen/pull/5671#issuecomment-1701621675 | |

**Additional Information**

N/A
