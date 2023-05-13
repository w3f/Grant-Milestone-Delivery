# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-pallet-benchmarking.md 
* **Milestone Number:** 2

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License	| Unlicense
| 0b. |	Documentation | [demo](https://talenticaall-my.sharepoint.com/:v:/g/personal/nikhil_desai_talentica_com/Ea_GbRhTgKBAr1bdCRsT1ZwBvIwtZZrm5Fhkom49lYTMUQ?e=kfU4b4) | Inline documentation has been provided and the same has been explained in great detail in the README as well. A demo video has been recorded describing the benchmarking process. |
| 0c. | Testing Guide |  | The Solidity smart contracts implement trivial read/write for basic data types, have been tested and as mentioned, we've reused and extended the already tested frame-benchmarking-cli. |
| 0e. | Article | https://talenticaall-my.sharepoint.com/:w:/g/personal/nikhil_desai_talentica_com/ESEnZ3pFvdhHi4_8VLlQLWYBKEhAuUz5_ee5gSPnKYMSkw?e=zZmrMS | All the four implementation strategies have been benchmarked and the results are presented in a tabular form as well as bar graph. |
| 1. | Solidity(native and WASM) Smart Contract: Basic Read & Write | [Solidity-WASM](https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/tree/contracts-benchmarking/solidity-sample-contract) and [Solidity-Native](https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/solidity-native/template/benchmark-sample/build/contracts/BenchmarkSample.json) | The same Solidity smartcontract has been compiled to WASM and EVM. | 
| 2.  | Adapt the benchmarking framework |  | frame-benchmarking-cli has been adapted to work with smartcontracts(WASM and EVM). A generic utility has been provided to benchmark a call to any EVM function. | 

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
