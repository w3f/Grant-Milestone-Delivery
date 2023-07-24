# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/contracts-tool.md
* **Milestone Number:** 1

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [GPLv3](https://github.com/paritytech/smart-bench/blob/master/LICENSE) ||
| **0b.** | Documentation | [README for tool](https://github.com/paritytech/smart-bench/blob/master/README.md), [README for docker](https://github.com/paritytech/smart-bench/blob/master/launch/README.md) ||
| **0c.** | Testing and Testing Guide | [README](https://github.com/paritytech/smart-bench/blob/master/README.md) |Integration tests are provided. Unit tests would require to mock node responses, which cause huge maintenance overhead|
| **0d.** | Docker | [Dockerfile](https://github.com/paritytech/smart-bench/blob/master/launch/smart_bench.Dockerfile) ||
| 1. | Updated evm contracts | [Evm support](https://github.com/paritytech/smart-bench/tree/master/src/evm) ||
| 2. | Support for solidity-wasm contracts | [Solidity-wasm](https://github.com/paritytech/smart-bench/tree/master/src/wasm) ||
| 3. | Launch scripts | [Launch scripts](https://github.com/paritytech/smart-bench/tree/master/launch) ||

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
