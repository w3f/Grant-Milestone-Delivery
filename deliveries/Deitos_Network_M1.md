# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Deitos Network](https://github.com/w3f/Grants-Program/blob/master/applications/Deitos_Network.md)
* **Milestone Number:** 1

## Context
In this first Deitos Network milestone of the W3F grant, the work planned by the team has been successfully completed. On the Infrastructure Provider (IP) side, the technology stack comprising Hadoop, Spark, Hive, Jupyter, Llama v2, and the Substrate Node with the pallet-deitos is consolidated into a Docker file. This arrangement enables straightforward deployment of the applications constituting the IP's technological components. This includes not only the service configuration but also a docker-compose file for simplified onboarding and integration. It is important to note that at this stage of the grant, the technology stack is not integrated with the Deitos protocol. Integration is planned for subsequent milestones with the addition of the data integrity protocol and proxy. Currently, the Docker file allows users to interact with services, emphasizing usability, and supports file uploading using webHDFS authenticated with the Delegation Token generated from the Kerberos keytab file. This is a noteworthy process, as future proxy functionality will depend on this setup to manage access in accordance with protocol-defined Agreements.
The IP tech stack can be found under the repository: [Deitos IP Repository](https://github.com/Deitos-Network/deitos-ip/tree/w3f-grant-m1-delivery)

From a blockchain functionality perspective, the foundational work for the Deitos business logic has been developed. Via pallet-deitos, infrastructure providers can register in the network, allowing the protocol to monitor available and utilized resources. This includes the initial introduction of storage items for cataloging Provider data and the specifics of agreements between Providers and Consumer. The basic framework for the core operational aspect of Deitos, namely the Agreements between IPs and consumers, has also been established. It is essential to mention that aspects related to Deitos tokenomics or Agreements' economic decisions are currently placeholders, with definitive versions to be implemented following comprehensive tokenomics consulting. Additionally, a mechanism for infrastructure provider registration is set up, requiring a certain amount of funds to be reserved, as mentioned in Deliverable 3. The pallet-deitos is implemented in a Substrate node with Babe block builder consensus to manage the randomness generated from VRF. The reconfiguration of the node to employ the BABE consensus protocol is a crucial part of Deliverable 1, enhancing the node's functionality and consensus integrity.** While the ultimate objective for Deitos is to evolve into a Polkadot parachain, the current focus on a Substrate node is considered more practical for testing and is expected to ease the backporting of code from the Substrate node to a parachain node. This strategic decision aligns with the project's long-term vision and practical considerations for development and testing.
The project adheres to the GPLv3 license as ensuring openness and compliance.
The Deitos Substrate Node development is located at the repository: [Deitos Node Repository](https://github.com/Deitos-Network/deitos-node/tree/w3f-grant-m1-delivery)

## Repository links

| Repository link | Milestone Delivery Branch | Last Commit Hash
| :----- | :----------- | :----------- |
| https://github.com/Deitos-Network/deitos-node/tree/w3f-grant-m1-delivery | w3f-grant-m1-delivery  | a3437731fff2adbeb314d2d89bb9a2cb109bf140 |
| https://github.com/Deitos-Network/deitos-ip/tree/w3f-grant-m1-delivery | w3f-grant-m1-delivery  | 39488fdc2fc831d63dceb5eebcd6165247d5ae6b |

## Deliverables of Milestone #1


| Number | Deliverable |  Specification |
| -----: | ----------- | ----------- |
| **0a.** | License | The project will utilize the GNU General Public License v3 (GPLv3) license. | 
| **0b.** | Documentation | All the functionalities developed in this milestone will contain the corresponding inline code documentation. In addition, all the configuration for the services included in the Infrastructure Provider will be documented. |
| **0c.** | Testing and Testing Guide | 1) All the different pallets and functionalities will contain their own unit testing contained in the `test.rs` files including the inline documentation for each test purpose. 2) Comprehensive testing guide for interacting with all the functionalities from the  `pallet-deitos`. 3) User guide to start the Docker file provided in the delivery item **0d.**|
| **0d.** | Docker file | 1) Provision of a Docker file encapsulating all essential services. 2) Streamlined deployment of services: Hadoop, Spark, Hive, YARN, Llama v2, and the substrate node. 3) A docker-compose file to simplify onboarding and integration for providers. |
| 1. | Substrate Node with BABE consensus | 1) Reconfiguration of the node to employ the BABE consensus protocol in place of the Aura consensus. 2) Integration of the respective VRF setup for BABE consensus. 3) Proper configurations on the node side like integrating the `BabeBlockImport`, initiating BABE workers, and setting inherents from `sp_consensus_babe` on the node service.rs file beyond just embedding the pallet-babe in the runtime|
| 2. | Pallet Deitos foundation (pallet-deitos) | 1) Introduction of foundational elements of the pallet, incorporating storage items for cataloging Provider data, the specifics of agreements between Providers and Consumers, the reputation system and the data integrity protocol. 2) Framework scaffolding for future enhancements. 3) Groundwork for the data integrity protocol to be executed by this pallet's off-chain worker. |
| 3. | Registration of Infrastructure Provider (pallet-deitos) | 1) Mechanism for infrastructure provider registration within the pallet-deitos. 2) Requirement of reserving a certain amount of funds. 3) Groundwork for attestation process initiation for new entrants. This will be completed in the next milestone with the data integrity protocol. |
| 4. | Agreements Module (pallet-deitos) | 1) Functionality to define agreements between users and infrastructure providers. 2) Outline of storage quotas and its duration based on block by block reward dynamics. 3) Introduction of pertinent extrinsics, storage components, and events for agreements. 4) Mechanism where the consumer reserves a value based on the agreement's terms, leveraging either the ReservedCurrency trait from pallet-balances or the MutateHold trait from Fungibles depending of the pallet-balances migration status.  |
| 5. | Agreements termination and on-chain reputation (pallet-deitos) | 1) Termination agreement procedure where consumer's data and corresponding resources get free from the infrastructure provider. 2) Data Integrity protocol clean up. 3) On chain reputation module based on feedback from the other party.  |

## Deliverable Links
| Number | Description | Link |  Hash |
| -----: | ----------- | ----------- | ----------- |
| **0a.** | Deitos Node License | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m1-delivery/LICENSE | 11bbdc02896e03995f26f5ea6cf0baedef951ae7 |
| **0a.** | Deitos IP stack License | https://github.com/Deitos-Network/deitos-ip/blob/w3f-grant-m1-delivery/LICENSE | 34ce61df3c03f4642267d939d3eded107d932610 |
| **0b.** | `pallet-deitos` README Documentation | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m1-delivery/pallets/deitos/README.md | f7af5fc320669855a581c072fba2f9487001c486 |
| **0b.** | `pallet-deitos` Inline Documentation | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m1-delivery/pallets/deitos/src/lib.rs | b1fd4cca0e774d4f2d50cb1cb7be14f81c848840 |
| **0b.** | Deitos IP Documentation | https://github.com/Deitos-Network/deitos-ip/blob/w3f-grant-m1-delivery/README.md | 8d35bf081280c9717acc839ae938e018634c9baf |
| **0c.** | `pallet-deitos` Unit Testing | https://github.com/Deitos-Network/deitos-node/tree/w3f-grant-m1-delivery/pallets/deitos/src/tests | f5a25ce45b57256913bcf25802c08d90b9d6a1da |
| **0c.** | `pallet-deitos` User Guide | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m1-delivery/docs/pallet-deitos-user-guide.md | 418dccef0c75cb4a2449c32740876c875eb27277 |
| **0c.** |  Deitos IP Docker User Guide | https://github.com/Deitos-Network/deitos-ip/blob/w3f-grant-m1-delivery/README.md | 8d35bf081280c9717acc839ae938e018634c9baf |
| **1.** |  Substrate Node with BABE consensus | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m1-delivery/runtime/src/lib.rs#L306 | db136ddf24f94a6c89d2f06171b6f74b887b762e |
| **2.** |  `pallet-deitos` Foundation | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m1-delivery/pallets/deitos/ | cb5fb49e310c105869c2eba8de29e0ca6e0d15c2 |
| **3.** |  `pallet-deitos` IP Registration | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m1-delivery/pallets/deitos/ | cb5fb49e310c105869c2eba8de29e0ca6e0d15c2 |
| **4.** |  `pallet-deitos` Agreemnent module | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m1-delivery/pallets/deitos/ | cb5fb49e310c105869c2eba8de29e0ca6e0d15c2 |
| **5.** |  `pallet-deitos` Agreements termination and on-chain reputation | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m1-delivery/pallets/deitos/ | cb5fb49e310c105869c2eba8de29e0ca6e0d15c2 |


