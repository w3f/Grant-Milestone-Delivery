# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [TREX Network](https://github.com/w3f/Grants-Program/blob/master/applications/TREX_Network.md)
* **Milestone Number:** 1

**Context** (optional)

We achieved below milestones in the last two quarters:
1. Developed open-source blockchain node [Link](https://github.com/NexTokenTech/TREX) that supports decentralized remote attestation of trusted execution environment (TEE) and decentralized timed-release encryption with a threshold crypto-system. 
2. Developed open-source TEE runtime [Link](https://github.com/NexTokenTech/trex-keyholder) that supports hardware remote attestation, network time security protocol (RFC 8915), and secured timed-release mechanism inside TEE.


**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [License](https://github.com/NexTokenTech/TREX/blob/main/LICENSE)|Apache License
| 0b. | Documentation |[Documentation](https://github.com/NexTokenTech/trex-doc-md) |We will provide both **inline documentation** of the code, API documentation and a basic **tutorial** that explains how a dApp user can publish his timed-release data on the blockchain. |
| 0c. | Testing Guide | [Node test](https://github.com/NexTokenTech/TREX)<br>  [Key-holder test](https://github.com/NexTokenTech/trex-keyholder) | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the README file of each project's root directory, we will describe how to run these tests. |
| 0d. | Docker |[Docker for TREX node](https://github.com/NexTokenTech/TREX/blob/main/docker-compose.yml)| We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone (Key-holder requires special hardware, which is not supported by Docker). |
| 0e. | Article |[Article](https://1drv.ms/b/s!AmAQnrV8ivm-hvFujGzjI5uaNzGdBQ?e=Ygvfj0)| The white paper introduce the TREX network and its architecture & technology. 
| 1. | TREX key-holder (off-chain worker) | [Key-holder](https://github.com/NexTokenTech/trex-keyholder) |A TREX off-chain worker (named as "key-holder") in TEE so that client can safely send encrypted data to the network and send the shielded key to the key-holder. The key-holder worker is remotely attested by a decentralized network so that the worker node cannot manipulate the release of the encrypted data. The "key-holder" node will provide a key-holder service to hold the key piece inside the TEE and release it until it expired.
| 2. | TREX node | [TREX node](https://github.com/NexTokenTech/TREX) |A TREX core node provides pallets and APIs so that a key-holder can publish its remote attestation reports on the chain and other clients can access the report to verify its TEE. The TREX node also provides APIs to post timed-released data and expired keys to unlock those datas.
| 3. | CLI tool | [Key-holder CLI](https://github.com/NexTokenTech/trex-keyholder) [TREX account CLI](https://github.com/NexTokenTech/trex-account-funds)|A CLI tool to provide basic blockchain and TEE functionalities like generation of accounts, checking account balance and getting public key for shielding encryption key.

**Additional Information**

The TREX testnet is not being deployed on Azure cloud service. The testnet provides RPC interfaces and supports runtime API calls from the frontend applications. Please email <team@trex.ink> to get the testnet access if necessary.
