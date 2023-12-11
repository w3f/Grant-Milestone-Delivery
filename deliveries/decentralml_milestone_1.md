# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [LINK](https://github.com/w3f/Grants-Program/blob/master/applications/decentral_ml.md) 
* **Milestone Number:** 1

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.


# DecentralML (Task<DecentralML> Substrate Pallet and Associated Python Extrinisics Client )
*Just another Substrate Pallet API*  
<!-- [![Build status](https://ci.appveyor.com/project/livetreetech/decentralml)](https://ci.appveyor.com/project/livetreetech/decentralml) -->
[![GitHub issues](https://img.shields.io/github/issues/livetreetech/DecentralML.svg)](https://github.com/livetreetech/DecentralML/issues)
[![license](https://img.shields.io/github/license/livetreetech/DecentralML)](https://github.com/livetreetech/DecentralML/blob/origin/LICENSE)
[![contributors](https://img.shields.io/github/contributors/livetreetech/DecentralML)](https://github.com/livetreetech/DecentralML/graphs/contributors)

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LINK](https://img.shields.io/github/license/livetreetech/DecentralML) | | 
| 0b. | Documentation | [LINK](https://decentralml.gitbook.io/introduction/) | | 
| 0c. | Testing and Testing Guide | [LINK](https://github.com/livetreetech/DecentralML/blob/main/README.md) | | 
| 0d. | Docker | [LINK](https://github.com/livetreetech/DecentralML/tree/main/docker) | | 
| 1. | Data Management Implementation | [LINK](https://github.com/livetreetech/DecentralML/blob/main/README.md) |  See the DecentralML Rust pallet [LINK](https://github.com/livetreetech/DecentralML/blob/main/substrate-node-decentralml/pallets/decentralml/src/lib.rs) The calling Python client [LINK](https://github.com/livetreetech/DecentralML/tree/main/substrate-client-decentralml) The DecentralML pallet integrates a decentralised storage system, with initial support for IPFS, there are associated paramaters allowing for various decentralised storage mechanisms, providing adaptability. The pallet includes an on-chain staking and payment mechanism, ensuring that Model Engineers, Data Annotators, and Data Contributors are incentivised and compensated through Tasks. We think this is really powerful. We envision the ability to execute Dockers completely automated (we are actively exploring WASM-based Dockers with possible off-chain workers.). Anyhow, the groundwork we are doing here serves as a really good base. Integration with Python Client Library enables seamless interaction for the data science objectives of the project i.e. between off-chain model management and on-chain processes  | 
| 2. | Federated Learning Consensus| [LINK](https://github.com/livetreetech/DecentralML/blob/main/substrate-node-decentralml/pallets/decentralml/src/lib.rs) | There is the deposit and financial administrative functions while creating the task i.e. depositing Currency; at the moment we are not using [ORML Currency](https://marketplace.substrate.io/pallets/orml-currencies) any suggestions welcome here) Note: "Data Contributors" can use TensorFlow's Federated Learning which for the moment is implemented through the parameter model_contributor_script_path inside the TaskInfo. We currently are exploring loading and executing this within a Docker based Python environment. NOTE: The defineDataContributors is the create_task "Origin" with the reward being deposited as part of the task creation. Validate_task_result will  deliver three validation strategies for task results: Auto which automatically transfers the worker the reward funds, Manual whereabouts the Creator needs to manually assigned or Custom which will faciliates more advanced validation methods. We have utilised Storage BoundedVectors to manage resources for optimal  performance as Task/user participation grows.


**Additional Information**
> The list_tasks and list_task_results [LINK](https://decentralml.gitbook.io/introduction/) functionalities are integrated into the framework through various pallet Storage parameters. For instance, OpenTasks specifically tracks open tasks, ensuring easy access and management. We anticipate dApps will be able to readily use these and have been looking into Unity integrations. We spent time on storage optimisation which now stores only indexes and keys, essentially creating the join tables, to enhance performance and access speed. We're currently re-evaluating the role of "Clients" within the framework. The team is exploring the idea of moving client-related functionalities to a dedicated marketplace or a DEX-style pallet. This consideration arises from our observation that Tasks and Client interactions might be better managed in a separate environments. This separation could potentially introduce a payment model for accessing Tasks i.e. pay to access the Task, although this is still under discussion and development. At present, our primary focus is on the foundational aspects of our platform: placing model tasks on-chain, managing task assignments, and sending task results. We feel positive and are about half way from a comprehensive utilisation of the framework which will include further data science activities. Open to further discussions and would be happy to arrange a call to get into any details. Thanks for your support, any assistance or pointers you can lend. 