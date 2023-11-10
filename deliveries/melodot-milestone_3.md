# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Application](https://github.com/w3f/Grants-Program/blob/master/applications/Melodot.md)
* **Milestone Number:** 3

**Context** (optional)

In this milestone, we have completed the core functionality related to sampling and implemented a light client.

| Number  | Deliverable               | Link                                                         | Notes                                                        |
| ------- | ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **0a.** | License                   | [ Apache](https://github.com/ZeroDAO/melodot/blob/w3f/LICENSE) | Apache 2.0                                                   |
| **0b.** | Documentation             | [docs](https://docs.melodot.io/)                             | Added introduction to node types and how to start a light client and interact with it |
| **0c.** | Testing and Testing Guide | [Testing Guide](https://github.com/ZeroDAO/melodot/blob/w3f/LIGHT_TESTING.md) | Added some tests and included e2e testing for the light client |
| **0d.** | Docker                    | [Start Testing](https://github.com/ZeroDAO/melodot/blob/w3f/LIGHT_TESTING.md#using-docker) | Support for starting and completing all tests in Docker      |
| **0e.** | Article                   | [medium](https://zerodao.medium.com/melodot-data-availability-layer-one-block-one-movie-cf831ad40e05) | As the first introductory article, introducing melodot and modular blockchains |
| 1.      | Light client              | [Light](https://github.com/ZeroDAO/melodot/tree/w3f/light)   | Includes sampling and RPC services                           |
| 2.      | melo_sampling             | [daser](https://github.com/ZeroDAO/melodot/tree/w3f/crates/daser) | An abstract crate for actual execution of data availability sampling, applied in both melodot-node and light client. |

**Additional Information**

1. In this milestone, we still have not dedicated much effort to address compilation issues on MacOS, but we commit to resolving this in the next milestone.
2. In the next milestone, we will implement the farmer client, including sampling, incentives, and data storage, while also supporting other nodes in obtaining specific data from the entire network.
