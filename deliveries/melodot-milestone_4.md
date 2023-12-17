# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Application](https://github.com/w3f/Grants-Program/blob/master/applications/Melodot.md)
* **Milestone Number:** 4

**Context**

In this milestone, we primarily completed a PoC-level PoSpace, a Pallet for farmers to claim rewards, and a farmer client.

**Deliverables**

| Number  | Deliverable               | Link                                                         | Notes                                                        |
| ------- | ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **0a.** | License                   | [Apache](https://github.com/ZeroDAO/melodot/blob/w3f/LICENSE) | Apache 2.0                                                   |
| **0b.** | Documentation             | [Link](https://docs.melodot.io/guide/node/strating-a-farmer-client/) | Inline documentation for public interfaces and functions has been added, and relevant documentation for the farmer client has been updated. |
| **0c.** | Testing and Testing Guide | [Link](https://github.com/ZeroDAO/melodot/blob/w3f/FARMER_TESTING.md) | Newly added modules include unit tests, and support e2e testing of the farmer client, which you can learn more about through the testing guide. |
| **0d.** | Docker                    | [Link](https://github.com/ZeroDAO/melodot/blob/w3f/FARMER_TESTING.md#using-docker) | Complete testing can be run in Docker.                       |
| **0e.** | Article                   | [Link](https://melodot.medium.com/making-polkadot-the-global-consensus-layer-aefe6d6836ef) | We have published an article explaining domain-specific blockchains, the progress of Melodot, and future work. |
| 1.      | melo_farmer               | [Link](https://github.com/ZeroDAO/melodot/tree/w3f/farmer)   | Implemented the farmer client for core functionalities like generating and storing data, and claiming rewards. |
| 2.      | melo_PoSpace              | [Proof-of-Space](https://github.com/ZeroDAO/melodot/tree/w3f/crates/proof-of-space)    [pallet](https://github.com/ZeroDAO/melodot/tree/w3f/crates/pallet-farmers-fortune) | Implemented PoSpace and the corresponding Pallet.            |

**Additional Information**

We still haven't had much time to address the compilation issues on MacOS, considering it's an upstream library problem and we are about to upgrade the substrate version, delaying the resolution is the best approach. Meanwhile, we have started working on the development of the ReStaking layer, Redot, which plans to support multiple data availability layers and endow Polkadot with data availability layer capabilities through staking.
