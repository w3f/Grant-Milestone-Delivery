# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [https://github.com/w3f/Grants-Program/blob/master/applications/NeuroZK.md](https://github.com/Cyborg-Network/Grants-Program/blob/master/applications/NeuroZK.md)
* **Milestone Number:** 1

**Context**

## Cyborg Oracle Implementation

An [ORML](https://github.com/open-web3-stack/open-runtime-module-library) based custom oracle for private and secure data exchange within the cyborg parachain.

**Deliverables** 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | [License](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/LICENSE) | GPLv3 |
| **0b.** | [Documentation](https://github.com/Cyborg-Network/cyborg-parachain/blob/testing-doc-update/Local%20Testing.md) | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how users can (for example) deploy docker images using our interface. |
| **0c.** | [Testing and Testing Guide](https://github.com/Cyborg-Network/cyborg-parachain/blob/testing-doc-update/Local%20Testing.md) | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to deploy a local cyborg parachain and test the features of this delivery. |
| 1. | Working Demo | We will provide video documentation to help developers understand the process of testing the Orcale implementation.|
| 2. | [Substrate Module: Status Aggregator](https://github.com/Cyborg-Network/cyborg-parachain/tree/testing-doc-update/pallets/status-aggregator)  | This pallet will be responsible for establishing communication and regulating the use of an oracle. |
| 3. | [Front end App: Cyborg Connect](https://github.com/Cyborg-Network/cyborg-connect) | Updated UI with features to display Task verification and result information from Oracle |
| 4. | [Cyborg Oracle](https://github.com/Cyborg-Network/cyborg-parachain/tree/master/runtime) | An ORML based oracle implementation to seamless exchange data packets between cyborg parachain and connected offchain clusters|

