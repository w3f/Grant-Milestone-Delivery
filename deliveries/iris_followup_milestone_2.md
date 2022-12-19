# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** In the case of a public [Grants Program](https://github.com/w3f/Grants-Program) application, please provide a link to the merged contract (the `.md` file in the [applications](https://github.com/w3f/Grants-Program/tree/master/applications) directory). In the case of a private application, please provide the name of the project. 
* **Milestone Number:** 2

**Context**

This milestone delivers the infrastructure to ingest data into the network and delegate decryption rights to authorized nodes.

* To securely ingest data, we implement two new RPC endpoints, 'iris_encrypt' that allows a node to encrypt data using proxy reencryption, and 'iris_decrypt' .
* We create two new node types, a 'proxy' node which enables the proxy reencryption mechanism and a 'gateway' node, which enables data ingestion and asset class creation.
* We reintegrate with IPFS by making http calls using the offchain client. We also build a module to bridge between IPFS and Iris.
* We modify the user interface to provide a simple way to start the ingestion process, view data about asset classes, and ultimately to decrypt and download data.

See the medium article, tech docs, and demo video for deeper context and more information.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/ideal-lab5/iris | Apache 2, GPL3| 
| 0b.  | Documentation | https://ideal-lab5.github.io | Also see codebase | 
| 0c.  | Testing Guide | https://docs.google.com/document/d/1GYizRCtMYxfZEdpaB8_VBwSaZdG3kZQAhRJI3OGmZqA/edit?usp=sharing | Also see documentation for in depth guides on getting set up |
| 0d.  | Docker |  Iris node: https://hub.docker.com/repository/docker/ideallabs/iris, Iris UI:  https://hub.docker.com/repository/docker/ideallabs/iris-ui | |
| 0e.  | Article | https://medium.com/ideal-labs/iris-update-milestone-2-29dcd8b79134 | |
| 1.  | Substrate Module: IrisProxy | https://github.com/ideal-lab5/iris/tree/main/pallets/iris-proxy | |
| 2.  | Substrate Module: IPFS | https://github.com/ideal-lab5/iris/tree/main/pallets/ipfs | |
| 3.  | Substrate Module: Gateway | https://github.com/ideal-lab5/iris/tree/main/pallets/gateway | |
| 4.  | Encryption Mechanism | Key fragment generation starts here: https://github.com/ideal-lab5/iris/blob/73735046ddf1776b912859daeab789a769130e72/pallets/iris-proxy/src/lib.rs#L584, see the whitepaper as well: https://github.com/ideal-lab5/whitepaper/blob/main/IRIS_PROTOCOL_DRAFT_0.0.1.pdf | |
| 5.  | RPC: Encryption RPC | https://github.com/ideal-lab5/iris/blob/ff95f2e811386f6231c441fafe3a1204ed82676b/pallets/iris-proxy/src/lib.rs#L518 | |
| 6.  | RPC: Decryption RPC | https://github.com/ideal-lab5/iris/blob/ff95f2e811386f6231c441fafe3a1204ed82676b/pallets/iris-proxy/src/lib.rs#L390 | |
| 7. | Testnet Setup | Documentation of hosted node setup: https://ideal-lab5.github.io/developers/nodes/ec2_setup.html | Testnet credentials, access to EC2 instances, and any other information will be made available to testers as needed. |
| 8. | User Interface | https://github.com/ideal-lab5/ui | |

**Additional Information**
