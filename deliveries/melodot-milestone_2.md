# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Application](https://github.com/w3f/Grants-Program/blob/master/applications/Melodot.md)
* **Milestone Number:** 2

**Context**

The second milestone has completed the core functionalities of the data availability layer, and it is possible to start a substrate node.

**Deliverables**

| Number  | Deliverable                    | Link                                                         | Notes                                                        |
| ------- | ------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **0a.** | License                        | [Apache](https://github.com/ZeroDAO/melodot/blob/w3f/LICENSE) | Apache 2.0                                                   |
| **0b.** | Documentation                  | [Docs](https://docs.melodot.io/ )                            | It includes the `learn` and `guide` sections that provide a introduction to Melodot and how to use it, with more detailed information available in the inline documentation. |
| **0c.** | Testing and Testing Guide      | [Testing Guide](https://github.com/ZeroDAO/melodot/blob/w3f/TESTING.md) | Includes unit tests and e2e tests.                           |
| **0d.** | Docker                         | [Start](https://github.com/ZeroDAO/melodot/tree/w3f#5-docker) [Testing](https://github.com/ZeroDAO/melodot/blob/w3f/TESTING.md#using-docker) | Run all unit tests, run the development network, and execute e2e tests within Docker. |
| 1.      | Substrate pallet: excutive_das | [pallet](https://github.com/ZeroDAO/melodot/tree/w3f/crates/frame-executive-ext) | The existing pallet has been modified as expected to be compatible with the new block header while keeping all tests compatible. |
| 2.      | Substrate pallet: system_das   | [Pallet](https://github.com/ZeroDAO/melodot/tree/w3f/crates/frame-system-ext) | Extend the `frame-system` pallet to support the creation of extended headers. |
| 3.      | Substrate pallet: melo_store   | [Pallet](https://github.com/ZeroDAO/melodot/tree/w3f/crates/pallet-melo-store) | A core pallet for handling data availability. Main features include: 1) Registering applications. 2) Allowing users to submit data metadata. 3) Validators accessing off-chain storage via OCW and reporting unavailable data. 4) Interface for creating extended block header. |
| 4.      | melodot-client                 | [Node](https://github.com/ZeroDAO/melodot/tree/w3f/node)     | A substrate client containing a complete data availability layer. It has successfully completed all the core functions as expected, which can be validated through e2e tests. |

**Additional Information**

We will continue as planned to the next milestone, implementing the core functionalities of sampling and the light client.
