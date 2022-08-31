# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Contract](https://github.com/w3f/Grants-Program/blob/master/applications/QRUCIAL_DAO.md)
* **Milestone Number:** 1

**Context** (optional)

We have developed the core system of QRUCIAL DAO. After further research, our whitepaper and system's topology are published.

The two main development goals have been reached for milestone 1: an auditor pallet with ELO scoring has been implemented and automated off-chain tools are executed when a security audit is requested.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [Link](https://github.com/Qrucial/QRUCIAL-DAO/blob/milestone1/LICENSE) | - |
| 0b. | Documentation | [Wiki](https://github.com/Qrucial/QRUCIAL-DAO/wiki) and [Whitepaper](https://github.com/Qrucial/QRUCIAL-DAO/blob/milestone1/docs/QRUCIAL_DAO_Whitepaper.pdf) | - |
| 0c. | Testing Guide | [Development and testing guide](https://github.com/Qrucial/QRUCIAL-DAO/wiki/Development-and-testing-guide) | - |
| 0d. | Docker | [Docker](https://github.com/Qrucial/QRUCIAL-DAO/blob/milestone1/docker/files/dockerfile) and [node-setup.sh](https://github.com/Qrucial/QRUCIAL-DAO/blob/milestone1/node-setup.sh) | The node-setup.sh prepares the system as a native node, while we also have the Docker image which starts the full system inside a container. Additionally ExoTools can be run as separate docker images. |
| 1. | Substrate runtime | [Crate source](https://github.com/Qrucial/QRUCIAL-DAO/tree/milestone1/qdao-node/runtime) | - |
| 2. | Substrate pallet: ExoSys | [Crate source](https://github.com/Qrucial/QRUCIAL-DAO/tree/milestone1/qdao-node/exo-pallet) | - |
| 3. | Substrate pallet: AuditorRep | [Crate source](https://github.com/Qrucial/QRUCIAL-DAO/tree/milestone1/qdao-node/audit-pallet) | - |
| 4. | Substrate report storage | [Part of ExoTool](https://github.com/Qrucial/QRUCIAL-DAO/blob/milestone1/exotools/lar.py) | - |
| 5. | Substrate pallet: governance | [Sudo](https://github.com/Qrucial/QRUCIAL-DAO/blob/167d856b87f6ea21c86dd3f3c556ab8e70bb6f35/qdao-node/runtime/src/lib.rs#L306) | In this phase we don't need more than the sudo. We also decided not to use Polkadot's democracy pallet, but build our own in Q4 2022. |



**Additional Information**
- When we requested the Grant, CCTF was not ready to provide hacker reputation data from its smart contract, but since the last week, CCTF vol9 has been upgraded. It means the data is now available and gets extended in future CCTF rounds: the smart contract with the data can be found here: [Read contract code and data](https://polygonscan.com/address/0x36a1424da63a50627863d8f65c0669da7347814a#readContract)
- Through discussions with contributors to the Polkadot ecosystem, we found it might be a good idea to integrate QRUCIAL DAO into the Substrate Builders Program's security processes. We plan to propose in details after Grant delivery.
