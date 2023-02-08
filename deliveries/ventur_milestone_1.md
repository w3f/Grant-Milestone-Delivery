# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Ventur Application](https://github.com/w3f/Grants-Program/blob/master/applications/ventur.md)
* **Milestone Number:** 1

**Context**
This milestone builds out funding and payment functionalities.  Our next milestone will tie these functionalities into logic for handling an RFP process.

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------ | ----------- | ---- | ----- |
| 0a.| License | https://github.com/Popular-Coding/ventur/blob/main/LICENSE | In our application we initially specified the MIT license, we now believe the GPLv3 to be a better fit for this work.| 
| 0b.| Documentation | https://github.com/Popular-Coding/ventur#run-tests | Our README documents the steps to spin up and test a Ventur node with the Milestone 1 pallets.  Inline documentation is present in both the payment and escrow pallets.   | 
| 0c.| Testing Guide | https://github.com/Popular-Coding/ventur#run-tests | ... | 
| 0d.| Docker | https://github.com/Popular-Coding/ventur#running-a-ventur-node-docker | ... | 
| 0e.| Article | https://docs.google.com/document/d/1aQOTNwcOgZ5_8VDloDmaGEs6si9hm5dCMSDXFHwo4LY/edit?usp=sharing | This will be published on Medium after approval. | 
| 1. | Substrate module: escrow | https://github.com/Popular-Coding/ventur/tree/main/pallets/escrow | This deliverable implements a substrate pallet that enables multi admin fund pools that allow for crowd contributions.  As noted in our application, it may be pertinent to rename this pallet from "escrow" to something more along the lines of RFP Funds.  Additionally, in milestone 2 escrow payout functionality will likely shift from current admin called extrinsics to calls by admin designated RFPs. | 
| 2. | Substrate module: contracted-payment-process | https://github.com/Popular-Coding/ventur/tree/main/pallets/payments | ... |
| 3. | Substrate chain: Ventur | https://github.com/Popular-Coding/ventur | ... |
