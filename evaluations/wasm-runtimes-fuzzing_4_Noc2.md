# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/9
* **Milestone:** 4
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul>|[License](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/LICENSE)| The code has the correct license and references other implementations |
| 1. | Runtime integration tutorial |<ul><li>[x] </li></ul>| [how_to_add_new_fuzz_target.md](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/how_to_add_new_fuzz_target.md) | Integrated | 
| 2. | Utilisation tutorial |<ul><li>[x] </li></ul>| [WARF_SUBCOMMANDS.md](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/WARF_SUBCOMMANDS.md), [warf_advanced_options.md](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/warf_advanced_options.md) | Integrated | 
| 3. | Documentation: Internal architecture |<ul><li>[x] </li></ul>| [Internals.md](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/Internals.md#architecture-of-the-project) | Integrated | 
| 4. | Documentation: Details fuzzing engines & techniques |<ul><li>[x] </li></ul>| [Internals.md (fuzzing-engines)](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/Internals.md#fuzzing-engines)  | Integrated | 
| 5. | Improve fuzzing performances and benchmarks |<ul><li>[x] </li></ul>| [fuzzing performances](https://github.com/pventuzelo/wasm_runtimes_fuzzing/commit/7b47782f01187571446f2f2d376a1d6183ee68ff) | Only rust rust borrowing implemented | 


## General Notes

Everything still works. The milestone mostly contained documentation. 6 new bugs were found. No major performances and benchmarks improvements. 