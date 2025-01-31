# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [https://github.com/w3f/Grants-Program/blob/master/applications/NeuroZK.md](https://github.com/Cyborg-Network/Grants-Program/blob/master/applications/NeuroZK.md)
* **Milestone Number:** 2

**Context**

## Cyborg Worker Node Implementation

An [ORML](https://github.com/open-web3-stack/open-runtime-module-library) based custom oracle for private and secure data exchange within the cyborg parachain.

**Deliverables** 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how users can launch a cyborg worker node using their local local machine|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to run a cyborg worker node locally. |
| 1. | Working Demo | We will provide video documentation to help developers understand the process of connecting and managing a cyborg worker node.|
| 2. | Substrate Module: Payments | This pallet will be responsible for estimating the costs for executing a task based on server specifications and time. |
| 3. | Substrate Module: Inventory | This pallet will be responsible for uniquely mapping each worker node uniquely in the onchain inventory to keep track of server status. |
| 4. | Substrate Node implementation: Cyborg Worker | A custom node implementation to contribute compute power to the cyborg parachain and earn rewards for contributions|
| 5. | Cyborg Connect: Provide Compute (Feature)  | The UI implementation to support deployment and management of Cyborg worker nodes|
