# Milestone Delivery :mailbox

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Ventur Application](https://github.com/w3f/Grants-Program/blob/master/applications/ventur.md)
* **Milestone Number:** 2

**Context**
This milestone builds out an RFP process pallet and an NT-NFT pallet.

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------ | ----------- | ---- | ----- |
| 0a.| License | <https://github.com/Popular-Coding/ventur/blob/main/LICENSE> | In our application we initially specified the MIT license, we now believe the GPLv3 to be a better fit for this work.|
| 0b.| Documentation | <https://github.com/Popular-Coding/ventur#run-tests> | Our README documents the steps to spin up and test a Ventur node with the Milestone 2 pallets.  Inline documentation is present in both the rfp and nt-nft pallets.   |
| 0c.| Testing Guide | <https://github.com/Popular-Coding/ventur#run-tests> | ... |
| 0d.| Docker | <https://github.com/Popular-Coding/ventur#running-a-ventur-node-docker> | ... |
| 0e.| Article | <https://docs.google.com/document/d/1nsOrO7E-vR-4T_PvFiBMPn977d7tf1jdD2JIWGs3r-w/edit?usp=sharing> | This will be published on Medium and PolkaVerse after approval. |
| 1. | Substrate module: rfp-process| <https://github.com/Popular-Coding/ventur/tree/main/pallets/rfp> | ... |
| 2. | Substrate module: nt-nft | <https://github.com/Popular-Coding/ventur/tree/main/pallets/nt-nft> | This module attributes part of its approach to interacting with nfts to Parity's Unique pallet, while we are not using their function code, our choice and naming of extrinsics for interfacing with collection and item creation are directly inspired by the Uniques pallet's approach.  The Uniques pallet is licensed under Apache-2.0 which is compatible with this pallet's GPLv3 license. |
| 3. | Substrate chain: Ventur | <https://github.com/Popular-Coding/ventur> | ... |
