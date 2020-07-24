# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** [WebAssembly Runtimes Fuzzing grant application](https://github.com/w3f/Open-Grants-Program/pull/9). 
* **Milestone Number:** [Milestone 4](https://github.com/w3f/Open-Grants-Program/blob/master/applications/wasm_runtimes_fuzzing.md#milestone-4---performance--documentation)

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. 

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |  ------------- | 
| 1.  | Tutorial | [how_to_add_new_fuzz_target.md](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/how_to_add_new_fuzz_target.md) | Runtime integration tutorial |
| 2.  | Tutorial | [WARF_SUBCOMMANDS.md](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/WARF_SUBCOMMANDS.md), [warf_advanced_options.md](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/warf_advanced_options.md) | Utilisation tutorial |
| 3.  | Documentation | [Internals.md](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/Internals.md#global-functionnement) | Internal architecture |
| 4.  | Documentation | [Internals.md (fuzzing-engines)](Internals.md#fuzzing-engines) | Details fuzzing engines & techniques |
| 5.  | Performance testing | Leveraging Rust borrowing to improve [fuzzing performances](https://github.com/pventuzelo/wasm_runtimes_fuzzing/commit/7b47782f01187571446f2f2d376a1d6183ee68ff) | Improve fuzzing performances and implement differential fuzzing debugging |

Additional Information:
- 6 new bugs has been found.
- I have some other crashes to analyzed but I'm waiting for projects developers to fix the current ones first.
- I'm planning to continued to improve the tool and report crashes this summer.
