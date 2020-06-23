# Evaluation

* **Status:** In Progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/9
* **Milestone:** 3
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul>|[License](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/LICENSE)| - |
| 1. | Evaluation fuzzing hardness + improvement |<ul><li>[ ] </li></ul>| [wasmprinter](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/wasmprinter.rs), [wain](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/wain.rs), [wat](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/wat.rs), [wast](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/wast.rs), [wasm3](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/wasm3.rs) |  | 
| 2. | Differential fuzzing implementation |<ul><li>[ ] </li></ul>| [here](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/e041e2c2dbb3940b1a5085d12e0181a3f82f4cd8/warf/targets/src/lib.rs#L7-L83)  |  | 
| 3. | Grammar fuzzing implementation |<ul><li>[ ] </li></ul>| [here](https://github.com/pventuzelo/wasm_runtimes_fuzzing/tree/master/warf/dictionary) and doc [here](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/warf_advanced_options.md#dict-only-for-target) |  | 
| 4. | Improvement of the fuzzing |<ul><li>[ ] </li></ul>| [warf/src/\*](https://github.com/pventuzelo/wasm_runtimes_fuzzing/tree/master/warf/src) |  | 
| 5. | Tutorial for running fuzzers and use advanced CLI options |<ul><li>[ ] </li></ul>| [docs/warf_advanced_options.md](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/warf_advanced_options.md) |  | 
| 6. | Unit test to verify fuzzing is deterministic and reproductible |<ul><li>[ ] </li></ul>| [unittests](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/e041e2c2dbb3940b1a5085d12e0181a3f82f4cd8/warf/Makefile#L73-L117) | errorE0599 | 


## General Notes

