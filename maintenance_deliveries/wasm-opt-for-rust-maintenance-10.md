# Maintenance Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this delivery**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/maintenance/wasm-opt-for-rust.md
* **Delivery Number:** 10
* **Delivery Date:** 2023/10/03


**Context**

wasm-opt-rs are bindings to Binaryen wasm-opt.

The fixes we made last month caused a link-time regression,
which we have investigated and posted work-arounds for, but not yet fixed.

We helped finally land a fix for Unicode on Windows in upstream Binaryen.

**Deliverables**

Note: a full hourly accounting of work performed is included with the invoice.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Final testing of upstream unicode / windows patch | https://github.com/WebAssembly/binaryen/pull/5671#issuecomment-1720071079 | |
| 2. | Issue about llvm linkage regression | https://github.com/brson/wasm-opt-rs/issues/154#issuecomment-1720135560 | |
| 3. | More discussion of cc build caching | https://github.com/brson/wasm-opt-rs/issues/148#issuecomment-1720242399 | |

**Additional Information**

N/A
