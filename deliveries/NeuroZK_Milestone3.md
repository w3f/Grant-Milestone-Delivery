# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).** 

* **Application Document:** [https://github.com/w3f/Grants-Program/blob/master/applications/NeuroZK.md](https://github.com/Cyborg-Network/Grants-Program/blob/master/applications/NeuroZK.md)
* **Milestone Number:** 3

Context

NeuroZK Implementation
The NeuroZK implementation to verify the integrity of AI models executed in third party servers, using a SNARK based ZKML verification system on a substrate blockchain.


#### **Deliverables:**

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | [License](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/LICENSE) | GPLv3 |
| **0b.** | [Documentation](https://github.com/Cyborg-Network/cyborg-parachain/blob/nzk-grant/Local%20Testing%20NeuroZK_Milestone3.md) | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how users can (for example) deploy apps using yaml files through our interface |
| **0c.** | [Testing and Testing Guide](https://github.com/Cyborg-Network/cyborg-parachain/blob/nzk-grant/Local%20Testing%20NeuroZK_Milestone3.md) | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** |[Docker](https://github.com/Cyborg-Network/Cyborg-miner/blob/nzk-grant/docker-compose.yml) | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | [Article](https://medium.com/cn-milestones/verifying-ai-inference-integrity-on-the-blockchain-introducing-neurozk-by-cyborg-network-3877ccbf35cd) | We will publish a medium blog explaining the vision of NueroZK, current features and future plans |
| 1. | [Testing suite](https://github.com/Cyborg-Network/cyborg-parachain/blob/nzk-grant/pallets/neuro-zk/src/tests.rs) | We will provide a testing facility to examine the working of ZK verification tool with the Cyborg parachain.|
| 2. | [Substrate Module: ZK verifier](https://github.com/Cyborg-Network/cyborg-parachain/tree/nzk-grant/pallets/neuro-zk) | This pallet will be responsible for verifying and confirming proofs emitted by the offchain ZK worker through the cyborg oracle. |
| 3. | [Cyborg ZK worker](https://github.com/Cyborg-Network/Cyborg-miner/tree/nzk-grant) | A feature to the Cyborg worker node to posses specific instructions about ZK proof generation for a specific executed AI algorithm|
| 4. | [Substrate module: Worker Rewards](https://github.com/Cyborg-Network/cyborg-parachain/tree/nzk-grant/pallets/payment) | A custom pallet that holds the logic of assigning rewards to commited worker nodes for executing user tasks |
