# Maintenance Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this delivery**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/maintenance/wasm-opt-for-rust.md
* **Delivery Number:** 3
* **Delivery Date:** 2023/03/01


**Context**

The primary thing we did this month was
complete a patch that lets Binaryen handle Unicode paths on Windows.
That patch is up for review but will need some rework.

We upgraded wasm-opt-rs to Binaryen 112,
but have not made a release yet.

Next month we will release wasm-opt-rs 0.112.0,
and hopefully merge Windows Unicode support into Binaryen.


**Deliverables**

Note: a full hourly accounting of work performed is included with the invoice.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Upgraded binaryen to version 112 | https://github.com/brson/wasm-opt-rs/pull/137 | |
| 2. | Modified binaryen to support Unicode on Windows | https://github.com/WebAssembly/binaryen/pull/5514 | |


**Additional Information**

N/A
