# Milestone Delivery :mailbox:



**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

> As W3F does not anymore offer payments in ETH, we switched to payment in USD in the submitted invoice

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Interstellar-Network.md

* **Milestone Number:**  2

**Context** (optional)

This milestone focuses on the on the fly's production of Display Garbled Circuits that will be used by the Trusted Transaction Validation Protocol TTVP. We demonstrate how those display circuits are produced and how the result of their evaluation/execution can be validated by the TTVP pallet. 

At this stage the TTVP pallet deliverable is still incomplete and implemented in OCW for demo purpose. 
- To simplify the demo on this respect, we provide an had hoc/limited version (with low resolution) of the display garbled circuit evaluator that output only a single image of the transaction message and the one time code to be validated. 
- In the final version, the mobile evaluator will generate a series of visual cryptographic frames/per seconds that will be written directly in the mobile framebuffer.

The next M3 milestone will focus on the execution of those circuits on the mobiles with a final version of the evaluator and on the TTVP friendly APIs that will hidden all the low-level complexity of circuit configuration, production, and validation.


**Deliverables**


### Milestone 2 — GC Management in Substrate modules and Transaction Validation protocol use case (first part)


| Number | Deliverable | Link | Notes  |
| -----: | ----------- | -----------|------------ |
| 0a. | Licence  |  APACHE 2.0 & GPL3 https://github.com/Interstellar-Network/api_garble/blob/main/LICENSE  https://github.com/Interstellar-Network/api_circuits/blob/main/LICENSE https://github.com/Interstellar-Network/lib_garble/blob/main/LICENSE https://github.com/Interstellar-Network/lib_circuits/blob/main/LICENSE | Only a part of the JustGarble repository is licenced with GPL3 and isolated with APIs |
| 0b. | Documentation  |  [code documentation](https://book.interstellar.gg/M2.html#code-documentation  ) | Please read first Garbled Circuit Factory (GCF) and Trusted Transaction Validation Protocol (TTVP) [overviews](https://book.interstellar.gg/M2.html#garbled-circuit-factory-gcf-overview)   |
| 0c. | Testing Guide | [testing guide](https://book.interstellar.gg/M2.html#testing-guide) | Core functions due to the specificity of the architecture are mainly covered with integration tests |
| 0d. | Dockers | `docker pull ghcr.io/interstellar-network/api_garble:milestone2` - `docker pull ghcr.io/interstellar-network/api_circuits:milestone2`-`docher pull ghcr.io/interstellar-network/lib_garble:milestone2` | APIS circuits and garble servers [How to launch apis dockers for the demo:]( https://book.interstellar.gg/M2_demo_tutorial.html#launch-api_circuit-docker)  and M2.3 to launch garbled circuit evaluator   |
| 0e. | Article | [article](https://book.interstellar.gg/M2.html#article)  |   links in Mx Interstellar Book  |  
| 1. | Substrate Module: OCWs GCF pallets |   [OCW Circuits](https://github.com/Interstellar-Network/substrate-offchain-worker-demo/tree/master/pallets/ocw-circuits) and  [OCW Garble](https://github.com/Interstellar-Network/substrate-offchain-worker-demo/tree/master/pallets/ocw-garble) pallets       | updated versions to manage the generation of Display Garbled Circuit to perform Transaction Validation |  
| 2. | Substrate module: TTVP Transaction Validation Protocol pallet| [TTVP (intermediary OCW version `txValidation` pallet for the demo)](https://github.com/Interstellar-Network/substrate-offchain-worker-demo/tree/master/pallets/tx-validation)    | limited TTVP pallet version to demonstrate the validation of garbled circuit metadata i.e. text message and one time code| 
| 3. | CLI Display Garbled Circuit Evaluation | `docher pull ghcr.io/interstellar-network/lib_garble:milestone2` | Client that Evaluate Display Garbled Circuit to display transaction message and one time code used by TTVP  [How to launch this docker for the demo](https://book.interstellar.gg/M2_demo_tutorial.html#32-create-the-garbled-circuits-in-the-above-folder)  | 

 
