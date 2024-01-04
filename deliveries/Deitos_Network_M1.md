# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** In the case of a public [Grants Program](https://github.com/w3f/Grants-Program) application, please provide a link to the merged contract (the `.md` file in the [applications](https://github.com/w3f/Grants-Program/tree/master/applications) directory). In the case of a private application, please provide the name of the project.
* [Deitos Network Grant Application([https://github.com/w3f/Grants-Program](https://github.com/w3f/Grants-Program/blob/master/applications/Deitos_Network.md))
* **Milestone Number:** e.g. 1

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | The project will utilize the Apache 2.0 license. |
| **0b.** | Documentation | All the functionalities developed in this milestone will contain the corresponding inline code documentation. In addition, all the configuration for the services included in the Infrastructure Provider will be documented. |
| **0c.** | Testing and Testing Guide | 1) All the different pallets and functionalities will contain their own unit testing contained in the `test.rs` files including the inline documentation for each test purpose. 2) Comprehensive testing guide for interacting with all the functionalities from the  `pallet-deitos`. 3) User guide to start the Docker file provided in the delivery item **0d.**|
| **0d.** | Docker file | 1) Provision of a Docker file encapsulating all essential services. 2) Streamlined deployment of services: Hadoop, Spark, Hive, YARN, Llama v2, and the substrate node. 3) A docker-compose file to simplify onboarding and integration for providers. |
| 1. | Substrate Node with BABE consensus | 1) Reconfiguration of the node to employ the BABE consensus protocol in place of the Aura consensus. 2) Integration of the respective VRF setup for BABE consensus. 3) Proper configurations on the node side like integrating the `BabeBlockImport`, initiating BABE workers, and setting inherents from `sp_consensus_babe` on the node service.rs file beyond just embedding the pallet-babe in the runtime|
| 2. | Pallet Deitos foundation (pallet-deitos) | 1) Introduction of foundational elements of the pallet, incorporating storage items for cataloging Provider data, the specifics of agreements between Providers and Consumers, the reputation system and the data integrity protocol. 2) Framework scaffolding for future enhancements. 3) Groundwork for the data integrity protocol to be executed by this pallet's off-chain worker. |
| 3. | Registration of Infrastructure Provider (pallet-deitos) | 1) Mechanism for infrastructure provider registration within the pallet-deitos. 2) Requirement of reserving a certain amount of funds. 3) Groundwork for attestation process initiation for new entrants. This will be completed in the next milestone with the data integrity protocol. |
| 4. | Agreements Module (pallet-deitos) | 1) Functionality to define agreements between users and infrastructure providers. 2) Outline of storage quotas and its duration based on block by block reward dynamics. 3) Introduction of pertinent extrinsics, storage components, and events for agreements. 4) Mechanism where the consumer reserves a value based on the agreement's terms, leveraging either the ReservedCurrency trait from pallet-balances or the MutateHold trait from Fungibles depending of the pallet-balances migration status.  |
| 5. | Agreements termination and on-chain reputation (pallet-deitos) | 1) Termination agreement procedure where consumer's data and corresponding resources get free from the infrastructure provider. 2) Data Integrity protocol clean up. 3) On chain reputation module based on feedback from the other party.  |

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
