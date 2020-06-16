# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** [WebAssembly Runtimes Fuzzing grant application](https://github.com/w3f/Open-Grants-Program/pull/9). 
* **Milestone Number:** [Milestone 3](https://github.com/w3f/Open-Grants-Program/blob/master/applications/wasm_runtimes_fuzzing.md#milestone-3---fuzzing--improvement)

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. 

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1.  | Project development | [wasmprinter](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/wasmprinter.rs), [wain](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/wain.rs), [wat](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/wat.rs), [wast](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/wast.rs), [wasm3](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/wasm3.rs) | Fuzzing hardness improvement and 5 new targets added |
| 2.  | Fuzzing Implementation | [here](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/e041e2c2dbb3940b1a5085d12e0181a3f82f4cd8/warf/targets/src/lib.rs#L7-L83) | Differential fuzzing implementations (fuzz_diff_parsing, fuzz_diff_all_validate, fuzz_diff_instantiate, fuzz_diff_wat_parsing) |
| 3.  | Fuzzing Implementation | Support of dictionary [here](https://github.com/pventuzelo/wasm_runtimes_fuzzing/tree/master/warf/dictionary) and doc [here](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/warf_advanced_options.md#dict-only-for-target) | Grammar/Dictionary fuzzing implementation |
| 4.  | Project development | [warf/src/\*](https://github.com/pventuzelo/wasm_runtimes_fuzzing/tree/master/warf/src) | Improvement of the fuzzing: optimization and reworking of the codebase, update fuzzers|
| 5.  | Delivery reports | [docs/warf_advanced_options.md](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/warf_advanced_options.md) | Tutorial for running fuzzers and use advanced CLI options |
| 6.  | Unittest | Implementation of [seed](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/warf_advanced_options.md#seed) and modification of the [unittests](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/e041e2c2dbb3940b1a5085d12e0181a3f82f4cd8/warf/Makefile#L73-L117) | unit test to verify fuzzing is deterministic and reproductible |  


Additional Information:
- 8 new bugs has been found with 2 of them discovered because of differential fuzzing.
- Those 2 bugs are logic bugs and they are impossible to catch with classical fuzzing since they will not make the program to crash.
- All bugs are listed in the [trophies](https://github.com/pventuzelo/wasm_runtimes_fuzzing#trophies) section.
- Some new ones should be reported next month.
