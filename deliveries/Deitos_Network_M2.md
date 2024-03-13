# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Deitos Network](https://github.com/w3f/Grants-Program/blob/master/applications/Deitos_Network.md)
* **Milestone Number:** 2

## Milestone 2: Integration and Storage Management

Following the successful completion of the first milestone, which established the foundational settings for the Deitos protocol and the Infrastructure Provider (IP) stack, the second milestone shifts focus towards the integration of the protocol with storage management processes. This phase is pivotal in enabling users to upload their files to the Hadoop Distributed File System (HDFS) in accordance with their agreements. Additionally, the Deitos Protocol has been enhanced through the inclusion of several key components, further augmenting its functionality and robustness. These enhancements include:

- **Data Integrity Protocol:** A mechanism designed to ensure the integrity and authenticity of the files stored within the infrastructure provider.

- **File Verification Process:** This process involves the systematic verification of files post-upload to confirm their integrity and compliance with the terms of the user agreement. 

- **Deitos Verifier:** A dedicated component responsible for executing the file verification process. The Deitos Verifier operates as an off-chain worker that retrieves and validates file hashes, comparing them against the hashes recorded on the blockchain at the time of upload.

- **CLI for Upload Process:** To streamline the file upload process, a specific Command Line Interface (CLI) tool has been developed. This tool simplifies interactions with the Deitos protocol for users, enabling them to efficiently upload files to HDFS under the terms of their agreements. The CLI tool embodies the user-friendly approach of the Deitos Protocol, making it accessible for users to securely manage their file uploads.

The integration of these components into the Deitos Protocol stack represents a significant advancement in the project's development. By focusing on data integrity, secure file verification, and user-friendly upload processes, the second milestone reinforces the protocol's capacity to provide a reliable and efficient decentralized storage solution. 


## Repository links

- https://github.com/Deitos-Network/deitos-node/tree/w3f-grant-m2-delivery
- https://github.com/Deitos-Network/deitos-ip/tree/w3f-grant-m2-delivery
- https://github.com/Deitos-Network/deitos-cli/tree/w3f-grant-m2-delivery
- https://github.com/Deitos-Network/deitos-gate/tree/w3f-grant-m2-delivery
- https://github.com/Deitos-Network/deitos-verifier/tree/w3f-grant-m2-delivery


## Deliverables of Milestone #1


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | The project will utilize the GNU General Public License v3 (GPLv3) license. |
| **0b.** | Documentation | Building upon the documentation provided in the first milestone, this milestone will introduce a new set of user guidelines. As the grant approaches its conclusion and all implementation details are settled, we will provide thorough protocol documentation. |
| **0c.** | Testing and Testing Guide | 1) All the different pallets and functionalities will contain their own unit testing contained in the `test.rs` files including the inline documentation for each test purpose. 2) This milestone will deliver the necessary tools to establish a local testing environment, allowing for comprehensive testing of all functionalities. |
| **0d.** | Docker | As we plan to deliver the software to infrastructures providers (IP) in docker images, all the protocol services will be configured and delivered in the  IP Docker image. |
| **0e.** | Articles | For the grant conclusion we will create two Medium articles: The first one will be a project introduction targeting a more general and wide audience. Some of the content will include: 1) Deitos Network introduction and network offering, 2) Roles and protocol functioning, 3) Design decisions. On the second article, we will delve into more technical information where the development aspect of this grant will be discussed. The audience for this second article will be more technical and the following items will be discussed: 1) Architecture in depths, 2) Substrate pallets descriptions, 3) Internal functioning of each module.   |
| 1. | Proxy Development | 1) Complete development and deployment of the described proxy ensuring interaction between infrastructure providers, consumers and the substrate node. 2) Mechanism to reserve resources on the infrastructure provider for a consumer upon agreement commitment. 3) A system focused on storage where user segmentation is achieved through dynamic users generated on Hadoop. 4) Authentication derived from a signed transaction initiated by the pallet-deitos pallet. 5) Development of a module to validate consumer signatures and commit actions upon successful verification, ensuring no traditional passwords are stored in the system. |
| 2. | File Uploads (Client Interface) | 1) Delivery of a client interface to facilitate file content splitting and hash calculation. 2) Creation of a generic algorithm to uniformly split files and calculate segment hashes. 3) Mechanism for producing and publishing signed transactions reflecting the computed results.|
| 3. | File Upload Verification (Provider Side) | 1) Using the previously generic algorithm to uniformly split files and calculate segment hashes for each file or part upon receiving the consumer's signed transaction. Files are marked as 'verified' post successful hash validation. 3) Constant monitoring of blocks to detect unverified files, triggering an OCW for hash verification based on consumer transactions. |
| 4. | Data Integrity Protocol | 1) Comprehensive development and deployment of the Data Integrity Protocol. 2) Utilizing BABE-generated randomness to select files/parts, directing infrastructure providers to create and validate respective hashes. 3) In case of hash mismatches during the data integrity protocol, a system to penalize the provider by reducing their staked amount. |

## Deliverable Links
| Number | Description | Link 
| -----: | ----------- | -----------
| **0a.** | Deitos Node License | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m2-delivery/LICENSE
| **0a.** | Deitos IP stack License | https://github.com/Deitos-Network/deitos-ip/blob/w3f-grant-m2-delivery/LICENSE
| **0a.** | Deitos CLI | https://github.com/Deitos-Network/deitos-cli/tree/w3f-grant-m2-delivery/LICENSE
| **0a.** | Deitos Gate License | https://github.com/Deitos-Network/deitos-gate/tree/w3f-grant-m2-delivery/LICENSE
| **0a.** | Deitos Verifier License | https://github.com/Deitos-Network/deitos-verifier/blob/w3f-grant-m2-delivery/LICENSE
| **0b.** | `pallet-deitos-fs` README Documentation | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m2-delivery/pallets/deitos-fs/README.md 
| **0b.** | `pallet-deitos-fs` Inline Documentation | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m2-delivery/pallets/deitos-fs/src/lib.rs
| **0b.** | Deitos IP Documentation | https://github.com/Deitos-Network/deitos-ip/blob/w3f-grant-m2-delivery/README.md
| **0c.** | `pallet-deitos-fs` Unit Testing | https://github.com/Deitos-Network/deitos-node/tree/w3f-grant-m2-delivery/pallets/deitos-fs/src/tests
| **0c.** | `pallet-deitos-fs` User Guide | https://github.com/Deitos-Network/deitos-node/blob/w3f-grant-m2-delivery/docs/pallet-deitos-user-guide.md (section 5)
| **0c.** |  Deitos IP Docker User Guide | https://github.com/Deitos-Network/deitos-ip/blob/w3f-grant-m2-delivery/README.md
| **0d.** | Deitos IP Docker User Guide | https://github.com/Deitos-Network/deitos-ip/blob/w3f-grant-m2-delivery
| **0e.** | Article #1 | https://forum.polkadot.network/t/deitos-network-forging-a-new-path-in-big-data-and-ai-with-blockchain-technology/4961
| **0e.** | Article #2 | https://medium.com/@deitos.network/deitos-network-web3-foundation-grant-f267cb10e7a8
| **2.** |   File Uploads (Client Interface)  | https://github.com/Deitos-Network/deitos-cli/tree/w3f-grant-m2-delivery
| **3.** |  File Upload Verification (Provider Side) | https://github.com/Deitos-Network/deitos-verifier/tree/w3f-grant-m2-delivery
| **4.** |  Data Integrity Protocol | https://github.com/Deitos-Network/deitos-node/tree/w3f-grant-m2-delivery/pallets/deitos-fs/lib.rs
