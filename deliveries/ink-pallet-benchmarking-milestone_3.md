# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  I tried filling the form but encountered an error when I was trying to submit it.

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-pallet-benchmarking-phase-2.md 
* **Milestone Number:** 3

**Context** (optional)
There are multiple ways to implement the logic in substrate i.e using pallets or ink smart contracts, or even writing solidity code and compiling it to WASM with the help of a solang compiler. We have to benchmark the performance metrics of the logic implemented using each of the above methods. We have already benchmarked the storage performance(basic data types) of each of the implementations as part of Milestone 1 and 2. Now, we will benchmark CPU-intensive logic, events emission and cross-contract calls across all the four implementations. We hope this will help new developers in deciding the best approach to implement the logic.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |  |
| **0b.** | Documentation | [README](https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/README.md) |  |
| **0c.** | Testing and Testing Guide | N/A | The added code utilizes a core module of substrate itself, the benchmarking pallet. |
| **0d.** | Docker | Not Applicable. |  |
| 0e. | Article | https://talenticaall-my.sharepoint.com/:w:/g/personal/nikhil_desai_talentica_com/ESEnZ3pFvdhHi4_8VLlQLWYBKEhAuUz5_ee5gSPnKYMSkw?e=zZmrMS | Three compute-intensive functions, one event emission and cross-contract calls wherever possible are benchmarked. |
| 1. | Pallet CPU-intensive extrinsic | https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/pallets/template/src/lib.rs | Three compute-intensive candidates are chosen. |
| 2. | Ink! CPU-intensive function | https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/test/lib.rs | The same three compute-intensive candidates are chosen. |
| 3. | Solidity-WASM and Solidity-Native CPU-intensive function | https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/solidity-sample-contract/sample.sol | The same three compute-intensive candidates are chosen. |
| 4. | CPU-intensive benchmarks | https://talenticaall-my.sharepoint.com/:w:/g/personal/nikhil_desai_talentica_com/ESEnZ3pFvdhHi4_8VLlQLWYBKEhAuUz5_ee5gSPnKYMSkw?e=zZmrMS | The table within the document shows how each implementation performs. |
| 5. | Pallet cross-contract call | https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/pallets/callee/src/lib.rs | The template pallet calls this callee pallet's extrinsic. |
| 6. | Ink! cross-contract call | https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/inner/lib.rs | The sample test Ink! smart contract calls the inner contract's exposed function. |
| 7. | cross-contract benchmarks | https://talenticaall-my.sharepoint.com/:w:/g/personal/nikhil_desai_talentica_com/ESEnZ3pFvdhHi4_8VLlQLWYBKEhAuUz5_ee5gSPnKYMSkw?e=zZmrMS | The table within the document shows how each implementation performs. |
| 8. | Solidity-WASM and Solidity-Native cross-contract call | Add another Solidity contract and invoke it from the sample Solidity contract. (Note: There are [unresolved issues](https://github.com/hyperledger/solang/issues/666) questioning the feasibility of cross-contract calls in Solidity-WASM and Solidity-Native. Nevertheless, an attempt will be made to see if it's possible. | An attempt was made to benchmark cross-contract call from Solidity-Native to another contract of the same implementation, however it couldn't be done. |
| 9. | Pallet events | https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/pallets/template/src/lib.rs |  |
| 10. | Ink! events | https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/test/lib.rs |  |
| 11. | Solidity-WASM and Solidity-Native events | https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/solidity-sample-contract/sample.sol |  |
| 12. | Benchmark events across implementations | https://talenticaall-my.sharepoint.com/:w:/g/personal/nikhil_desai_talentica_com/ESEnZ3pFvdhHi4_8VLlQLWYBKEhAuUz5_ee5gSPnKYMSkw?e=zZmrMS | The table within the document shows how each implementation performs. | 

**Additional Information**
None
