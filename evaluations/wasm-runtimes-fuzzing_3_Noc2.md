# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/9
* **Milestone:** 3
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul>|[License](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/LICENSE)| The code has the correct license and references other implementations |
| 1. | Evaluation fuzzing hardness + improvement |<ul><li>[x] </li></ul>| [wasmprinter](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/wasmprinter.rs), [wain](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/wain.rs), [wat](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/wat.rs), [wast](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/wast.rs), [wasm3](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/wasm3.rs) | Implemented | 
| 2. | Differential fuzzing implementation |<ul><li>[x] </li></ul>| [here](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/e041e2c2dbb3940b1a5085d12e0181a3f82f4cd8/warf/targets/src/lib.rs#L7-L83)  | Implemented | 
| 3. | Grammar fuzzing implementation |<ul><li>[x] </li></ul>| [here](https://github.com/pventuzelo/wasm_runtimes_fuzzing/tree/master/warf/dictionary) and doc [here](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/warf_advanced_options.md#dict-only-for-target) | Allows you to provide dictionaries | 
| 4. | Improvement of the fuzzing |<ul><li>[x] </li></ul>| [warf/src/\*](https://github.com/pventuzelo/wasm_runtimes_fuzzing/tree/master/warf/src) | Huge code refactoring | 
| 5. | Tutorial for running fuzzers and use advanced CLI options |<ul><li>[x] </li></ul>| [docs/warf_advanced_options.md](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/warf_advanced_options.md) | It’s easy to follow the documentation. | 
| 6. | Unit test to verify fuzzing is deterministic and reproductible |<ul><li>[x] </li></ul>| [unittests](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/e041e2c2dbb3940b1a5085d12e0181a3f82f4cd8/warf/Makefile#L73-L117) | Initially I got some errors, but the following commit resolved it: https://github.com/pventuzelo/wasm_runtimes_fuzzing/commit/43dadb714a31f1156b718b4a4e064f3496990384 | 

## General Notes

The code is well documented and structured. The tool supports a lot of additional features, like sanitizer, deterministic fuzzing, multithreading and timeout and the list of issues found by the tool keeps increasing. 