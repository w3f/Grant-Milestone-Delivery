# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** [WebAssembly Runtimes Fuzzing grant application](https://github.com/w3f/Open-Grants-Program/pull/9). 
* **Milestone Number:** [Milestone 2](https://github.com/w3f/Open-Grants-Program/blob/master/applications/wasm_runtimes_fuzzing.md#milestone-2---webassembly-vmparsers-integration)

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. 

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1.  | Runtimes Integration | public APIs for fuzzing and debug [here](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/targets/src/lib.rs) | Integration with previously listed runtimes engines. |  
| 2.  | CLI tool | [execute-all](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/WARF_SUBCOMMANDS.md#execute-one-wasm-module-throw-all-targets-execute-all) subcommand | Command line tool allowing execution of wasm modules through all runtimes. |  
| 3.  | Project development | [benchmark-all](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/docs/WARF_SUBCOMMANDS.md#benchmark-execution-targets-speed-benchmark-all) subcommand | Improvement of the project (threading, runtimes perf monitoring) |  
| 4.  | Project development | fuzzing harnesses are inside [targets folder](https://github.com/pventuzelo/wasm_runtimes_fuzzing/tree/master/warf/targets/src) | Development of fuzzing harness per runtimes. |
| 5.  | Runtimes dockers | [Dockerfile](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/warf/Dockerfile) | Docker to install runtimes engines easily |
| 6.  | Delivery reports | [docs](https://github.com/pventuzelo/wasm_runtimes_fuzzing/tree/master/docs) folder | Tutorial for runtimes installation, compilation, how to run tools and unittests |
| 7.  | Unittest | [make test\*](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/c4e12bb9b35c09fb9f9434e08eb3b893b979f671/warf/Makefile#L60-L117) and [github actions](https://github.com/pventuzelo/wasm_runtimes_fuzzing/blob/master/.github/workflows/rust.yml) | unit test to verify all runtimes engines work as expected |  

Additional Information:
- Currently 5 bugs has been found, there are listed in the [trophies](https://github.com/pventuzelo/wasm_runtimes_fuzzing#trophies) section.
- Fuzzers are currently running and some other bugs should be reported this month.
