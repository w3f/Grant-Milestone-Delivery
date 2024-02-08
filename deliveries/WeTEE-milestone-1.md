# Milestone Delivery :mailbox:


**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [WeTEE Network](https://github.com/w3f/Grants-Program/blob/master/applications/WeTEE_Network.md)
* **Milestone Number:** 1

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [Apache 2.0](https://github.com/wetee-dao/chain/blob/main/LICENSE) |  	Apache License 2.0 | 
| 0b. | Documentation | [Milestone 1 Documentation](https://github.com/wetee-dao/chain/blob/main/docs/grants/milestone-1-documentation.md) | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. | 
| 0c. | Testing and Testing Guide | [Test guide link](https://github.com/wetee-dao/chain/blob/main/docs/grants/milestone-1-test.md) <br/>[Worker test link](https://github.com/wetee-dao/chain/blob/main/packages/pallets/wetee-worker/src/tests.rs) <br/> [App test link](https://github.com/wetee-dao/chain/blob/main/packages/pallets/wetee-app/src/tests.rs) <br/> [Task test link](https://github.com/wetee-dao/chain/blob/main/packages/pallets/wetee-task/src/tests.rs)  | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0d. | Docker | [DockerFile](https://github.com/wetee-dao/chain/blob/main/pos_build.Dockerfile)<br/> [Build and run Docker](https://github.com/wetee-dao/chain/blob/main/docs/run-docker.md) | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. | 
| 01. | Substrate module: worker | https://github.com/wetee-dao/chain/tree/main/packages/pallets/wetee-worker | This pallet provides modules for the registration and staking of miner nodes, as well as accepting proof-of-work data and detailed file hashes and addresses from miners, and also provides withdrawal functions for miners, as well as closure (which can only be executed if all services have already stopped/migrated), and also provides channels for users to complain about miner nodes.<br/>1. Worker cluster register<br/>2. Worker cluster mortgage<br/>3. Worker cluster upload proof of work data<br/>4. Worker cluster withdrawal<br/>5. Worker cluster stop<br/>6. Worker cluster report| 
| 02. | Substrate module: app | https://github.com/wetee-dao/chain/tree/main/packages/pallets/wetee-app | This pallet provides users with the function of deploying and updating applications, as well as an interface for topping up applications. Users can prepay for the operation of the application, and miners can only unlock the fees paid by users after uploading proof of work.<br/>1. TEE app create<br/>2. TEE app update<br/>3. TEE app set settings<br/>4. TEE app recharge<br/>5. TEE app stop | 
| 03. | Substrate module: task | https://github.com/wetee-dao/chain/tree/main/packages/pallets/wetee-task | This pallet provides users with the function of deploying and updating periodic/temporary tasks, where users can set the execution time and cycle of tasks. It also provides an interface for users to recharge their applications, allowing them to prepay for the operation of the application. Miners can only obtain revenue after uploading proof-of-work for single-task work.<br/>1. TEE task create<br/>2. TEE task update<br/>3. TEE task set execute settings<br/>4. TEE task recharge<br/>5. TEE task stop | 

