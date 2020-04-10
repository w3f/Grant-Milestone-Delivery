# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** [WebAssembly Runtimes Fuzzing grant application](https://github.com/w3f/Open-Grants-Program/pull/9). 
* **Milestone Number:** [Milestone 1](https://github.com/w3f/Open-Grants-Program/blob/master/applications/wasm_runtimes_fuzzing.md#milestone-1---discovery--project-architecture)

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. 

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Integration Plan | [INTEGRATION.md](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/documentation/INTEGRATION.md) | List of major WebAssembly runtimes used in Polkadot ecosystem and APIs to interact with them. |  
| 2.  | Project development | [cli tool](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/cli.rs) + [project code](https://github.com/pventuzelo/wasm_runtimes_fuzzing/tree/master/warf) | Development of the project base (architecture and interface) |  
| 3.  | APIs | [APIs](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/common/src/lib.rs) + [doc](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/documentation/how_to_add_new_fuzz_target.md) | Creation of integration APIs + documentation |
| 4.  | Delivery report | [README.md](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/README.md#quick-start) + [cli usage](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/documentation/warf_cli_tutorial.md) | Tutorial for project installation and testings |

Additional Information:
- During testing of the first milestone, this project already found one bug inside wasmer WebAssembly VM - details [here](https://github.com/wasmerio/wasmer/issues/1372).