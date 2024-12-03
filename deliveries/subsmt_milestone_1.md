# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [https://github.com/w3f/Grants-Program/blob/master/applications/subsmt.md](https://github.com/w3f/Grants-Program/blob/master/applications/subsmt.md)
* **Milestone Number:** 1

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

This is a web backend implementation of a Sparse Merkle Tree, designed to provide powerful and comprehensive backend functionality, along with simpler, more understandable, and user-friendly on-chain verification methods. It aims to achieve better compatibility with the Polkadot ecosystem's technology, making this template suitable for future development within the Polkadot ecosystem. It can be applied to any scenario that requires saving on-chain storage and computation resources, such as airdrops.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Documentation |[https://github.com/farcloud-labs/subsmt/blob/main/README.md](https://github.com/farcloud-labs/subsmt/blob/main/README.md)| We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.| 
| 2. | Testing and Testing Guide | [https://github.com/farcloud-labs/subsmt/blob/main/docs/test-guide.md](https://github.com/farcloud-labs/subsmt/blob/main/docs/test-guide.md) | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. （Currently, each module has comprehensive test coverage implemented.）| 
| 3. | Docker |[https://github.com/farcloud-labs/subsmt/blob/main/README.md#docker](https://github.com/farcloud-labs/subsmt/blob/main/README.md#docker) | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.|
| 4. | rust crate: SMT-api | [https://github.com/farcloud-labs/subsmt/blob/main/backend/src/lib.rs](https://github.com/farcloud-labs/subsmt/blob/main/backend/src/lib.rs)| Basic APIs based on rocksdb, such as new verify_root method, update, insert and get_futrue_root, etc.|
| 5. | Substrate module: SMT| [https://github.com/farcloud-labs/subsmt/blob/main/pallet/SMT/src/lib.rs](https://github.com/farcloud-labs/subsmt/blob/main/pallet/SMT/src/lib.rs)| We will create a Substrate module that will verify Merkle root. |
| 6. | Smart contracts(ink): SMT | [https://github.com/farcloud-labs/subsmt/blob/main/ink-contract/SMT/lib.rs](https://github.com/farcloud-labs/subsmt/blob/main/ink-contract/SMT/lib.rs)| We will deliver a set of ink! smart contracts that will will verify Merkle root. |
| 7. | backend| [https://github.com/farcloud-labs/subsmt/blob/main/backend/main.py](https://github.com/farcloud-labs/subsmt/blob/main/backend/main.py)| backend, used for permanent storage(based on rocksdb) of off-chain data and provision of rpc services. | 
| 8. | network | [https://github.com/farcloud-labs/polkadot-sdk](https://github.com/farcloud-labs/polkadot-sdk), [https://github.com/farcloud-labs/polkadot-sdk/blob/master/substrate/bin/node/runtime/src/lib.rs#L2647](https://github.com/farcloud-labs/polkadot-sdk/blob/master/substrate/bin/node/runtime/src/lib.rs#L2647)| A basic network with SMT pallet and contract pallet for testing smart contracts and SMT pallet functions.| 

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
