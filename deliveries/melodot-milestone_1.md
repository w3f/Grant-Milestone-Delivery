# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Application](https://github.com/w3f/Grants-Program/blob/master/applications/Melodot.md)
* **Milestone Number:** 1

**Context**

This milestone completes the core functionalities of Reed-Solomon erasure codes and KZG algorithms, which will be used in subsequent developments.

**Deliverables**

| Number  | Deliverable               | Link                                                         | Notes                                                        |
| ------- | ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **0a.** | License                   | [Apache](https://github.com/ZeroDAO/melodot/blob/w3f/LICENSE) | Apache 2.0                                                   |
| **0b.** | Documentation             | [Link](https://github.com/ZeroDAO/melodot/blob/w3f/crates/melo-erasure-coding/README.md) | The documentation explains the basic core functionalities, with more detailed information available in the inline documentation. |
| **0c.** | Testing and Testing Guide | [Tests](https://github.com/ZeroDAO/melodot/blob/w3f/crates/melo-erasure-coding/src/tests.rs) [Link](https://github.com/ZeroDAO/melodot/blob/w3f/crates/melo-erasure-coding/README.md#testing) | It covers unit tests for core functionalities and can also be tested through Docker. |
| **0d.** | Docker                    | [Link](https://github.com/ZeroDAO/melodot/blob/w3f/crates/melo-erasure-coding/README.md#docker) | Complete testing can be run in Docker.                       |
| 1.      | melo_erasure_coding       | [Crate](https://github.com/ZeroDAO/melodot/tree/w3f/crates/melo-erasure-coding) [Primitives](https://github.com/ZeroDAO/melodot/tree/w3f/primitives) | This implements the core functionalities used in the data availability layer, including data encoding, data extension, data recovery, and distributed generation. |

**Additional Information**

We will continue the development as planned in the milestone, and the next milestone will mainly focus on completing the consensus part of the chain.
