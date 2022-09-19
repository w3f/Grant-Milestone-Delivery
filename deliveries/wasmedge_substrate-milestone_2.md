# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/wasmedge_substrate.md
* **Milestone Number:** 2

**Context** (optional)

Create docs and config options to select between multiple WebAssembly runtimes

We want to support both WasmEdge and wasmtime as runtimes for substrate.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/second-state/substrate-wasmedge/blob/main/LICENSE | ...| 
| 0b. | Documentation | https://github.com/second-state/substrate-wasmedge/blob/main/README.md | ...| 
| 0c. | Testing Guide | https://github.com/second-state/substrate-wasmedge/blob/main/README.md | The documentation contains step-by-step guides for testing| 
| 0d. | Docker | n/a | We are using standard cross-platform Substrate build instructions. It should work on all flavors of Linux and Windows. No Docker is needed. | 
| 0e. | Article | https://blog.secondstate.io/post/20220811-substrate-on-wasmedge/ | ...| 
| 1. | Software | https://github.com/second-state/substrate-wasmedge/ | The `--wasm-execution` CLI option in `cargo run` allows us to choose between the two WebAssembly runtime (WasmEdge or wasmtime) for the substrate node. | 
| 2. | Upstream PR | n/a | We would like to get guidance from Substrate developers in terms of whether / how they would like us to contribute back to the upstream Substrate project. We would like to postpone the upstream PR to milestone #3 after this discussion. | 

**Additional Information**

You can see the `--wasm-execution` option at work from the screencast demo video: https://drive.google.com/file/d/1N6P1PesOWRQzatWfwb24oVbKRojM4Bp5/view?usp=sharing
