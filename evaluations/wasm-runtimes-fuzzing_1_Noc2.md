# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/9 
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** [polkakey_1_Noc2](.polkakey_1_Noc2.md)

| Number | Deliverable | Accepted |Link | Evaluation Notes |
| ------------- | ------------- |------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul>|[License](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/LICENSE)| - | 
| 1. | Integration Plan	|<ul><li>[x] </li></ul>| [INTEGRATION.md](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/documentation/INTEGRATION.md) | List of projects sound reasonable | 
| 2.  | Project development |<ul><li>[x] </li></ul>|[cli tool](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/cli.rs) + [project code](https://github.com/pventuzelo/wasm_runtimes_fuzzing/tree/master/warf)| Basic cli tool works as intended. I had some issues with the setup of Honggfuzz and AFL, but Patrick helped me to resolve these very quickly. | 
| 3.  | APIs |<ul><li>[x] </li></ul>|[APIs](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/common/src/lib.rs) + [doc](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/documentation/how_to_add_new_fuzz_target.md)| Looks good | 
| 4.  | Delivery report |<ul><li>[x] </li></ul>|[README.md](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/README.md#quick-start) + [cli usage](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/documentation/warf_cli_tutorial.md)| Looks good, only “sudo apt install build-essential binutils-dev libunwind-dev libblocksruntime-dev” should be added to the readme | 

## General Notes

Even though it’s only the first phase the tool already helped to discover some bugs. The readme and code is well structured. The minor issues I had with the setup were resolved and answered literally within minutes. 
