# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/wasmedge_substrate.md
* **Milestone Number:** 1

**Context** (optional)

Enable Substrate to run on WasmEdge

Substrate version polkadot-v0.9.28 is included as a subtree in our repo, and we tested based on that version.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/second-state/substrate-wasmedge/blob/main/LICENSE | ...| 
| 0b. | Documentation | https://github.com/second-state/substrate-wasmedge/blob/main/README.md | ...| 
| 0c. | Testing Guide | https://github.com/second-state/substrate-wasmedge/blob/main/README.md | The documentation contains step-by-step guides for testing| 
| 0d. | Docker | n/a | We are using standard cross-platform Substrate build instructions. It should work on all flavors of Linux and Windows. No Docker is needed. | 
| 0e. | Article | https://blog.secondstate.io/post/20220811-substrate-on-wasmedge/ | ...| 
| 1. | Rust API | https://github.com/WasmEdge/WasmEdge/tree/master/bindings/rust | Docs: https://wasmedge.org/book/en/embed/rust.html | 
| 2. | Host wrapper | https://github.com/second-state/substrate-wasmedge/tree/main/substrate | It is implemented in our forked version of Substrate. | 
| 3. | Test | https://drive.google.com/file/d/1N6P1PesOWRQzatWfwb24oVbKRojM4Bp5/view?usp=sharing | A screencast demo showing the steps in the testing guide (README). | 

**Additional Information**

None.
