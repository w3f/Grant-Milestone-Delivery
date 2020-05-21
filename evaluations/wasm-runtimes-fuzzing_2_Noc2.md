# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/9
* **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul>|[License](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/LICENSE)| - |
| 1. | Runtimes Integration |<ul><li>[x] </li></ul>|[public APIs](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/lib.rs)| The previous listed runtimes are integrated | 
| 2.  | CLI tool |<ul><li>[x] </li></ul>| [CLI](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/WARF_SUBCOMMANDS.md#execute-one-wasm-module-throw-all-targets-execute-all) | Allows execution of wasm modules through all runtimes| 
| 3. | Improvement of the project (threading, runtimes perf monitoring) |<ul><li>[x] </li></ul>|[benchmark-all](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/WARF_SUBCOMMANDS.md#benchmark-execution-targets-speed-benchmark-all) | Benchmarking integrated |
| 4. | Fuzzing harness per runtimes |<ul><li>[x] </li></ul>|[Fuzzing harness](https://github.com/pventuzelo/wasm_runtimes_fuzzing/tree/master/warf/targets/src)|I had some issues with lightbeam, but it is still under development. Pventuzelo reported multiple issue on the lightbeam [repo](https://github.com/bytecodealliance/wasmtime/issues?q=is%3Aissue+author%3Apventuzelo+lightbeam+is%3Aopen)| 
| 5. | Runtimes dockers |<ul><li>[x] </li></ul>|[Dockerfile](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/Dockerfile)| -| 
| 6. | Delivery reports |<ul><li>[x] </li></ul>|[docs](https://github.com/pventuzelo/wasm_runtimes_fuzzing/tree/master/docs)| The docs folder describes everything, including “How to analyze a crash” or “How to integrate a new target”. |  
| 7. | unit testing |<ul><li>[x] </li></ul>|[make test\*](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/c4e12bb9b35c09fb9f9434e08eb3b893b979f671/warf/Makefile#L60-L117) and [github actions](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/.github/workflows/rust.yml)| The unit tests work (except of the lightbeam tests) and the github action integration is very useful. | 

## General Notes

The code is well tested and documented. Currently 7 bugs has been found, there are listed in the [trophies section](https://github.com/pventuzelo/wasm_runtimes_fuzzing/tree/master/trophies), including wasmtime issues.
