# Milestone Delivery :mailbox:



**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

> As W3F does not anymore offer payments in ETH, we switched to payment in USD in the submitted invoice

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Interstellar-Network.md

* **Milestone Number:**  4

**Context** (optional)

This milestone focuses on  the implementation of our Trusted Transaction Validation Protocol modules within TEE i.e Integritee workers


**Deliverables**


### Milestone 4 — Integration with SubstraTEE/IntegriTEE


| Number | Deliverable | Link | Notes  |
| -----: | ----------- | -----------|------------ |
| 0a. | Licence  |  APACHE 2.0 & GPL3 https://github.com/Interstellar-Network/api_garble/blob/main/LICENSE  https://github.com/Interstellar-Network/api_circuits/blob/main/LICENSE https://github.com/Interstellar-Network/lib_garble/blob/main/LICENSE https://github.com/Interstellar-Network/lib_circuits/blob/main/LICENSE https://github.com/Interstellar-Network/integritee-node/blob/interstellar/LICENSE https://github.com/Interstellar-Network/integritee-worker/blob/interstellar/LICENSE https://github.com/Interstellar-Network/pallets/blob/main/LICENSE | Only a part of the JustGarble repository is licenced with GPL3 and isolated with APIs |
| 0b. | Documentation  |  [code documentation](https://book.interstellar.gg/M4.html#code-documentation  ) | Please read first Garbled Circuit Factory (GCF) and Trusted Transaction Validation Protocol (TTVP) [overviews](https://book.interstellar.gg/M4.html#garbled-circuit-factory-gcf-overview)   |
| 0c. | Testing Guide | [testing guide](https://book.interstellar.gg/M4.html#testing-guide) | Core functions due to the specificity of the architecture are mainly covered with integration tests |
| 0d. | Dockers | [Docker compose demo](https://github.com/Interstellar-Network/Interstellar-Book/blob/docker-compose/docker-compose.yml) | [How to launch docker compose demo]( https://book.interstellar.gg/M4_demo_tutorial.html)   |
| 0e. | Article | [article](https://book.interstellar.gg/M3.html#article)  |   links in Mx Interstellar Book  |  
| 1. |  Integritee Worker |   [integritee-worker](https://github.com/Interstellar-Network/integritee-worker)           |
| 2. |  Integritee Node |   [node](https://github.com/Interstellar-Network/integritee-node)           |
| 3. | Pallet ocw-garble ported in Integritee Worker(TEE)| [ocw-garble](https://github.com/Interstellar-Network/pallets/tree/main/pallets/ocw-garble) |        | 
| 4. |  Pallet tx-validation ported in Integritee Worker(TEE)|   [tx-validation](https://github.com/Interstellar-Network/pallets/tree/main/pallets/tx-validation)           |    
| 5. |  New Pallet tx-registry in Integritee Worker(TEE)|   [tx-registry](https://github.com/Interstellar-Network/pallets/tree/main/pallets/tx-registry)           | 
| 6. |  Pallet library add *sgx* feature |   [ocw-common](https://github.com/Interstellar-Network/pallets/tree/main/ocw-common)           | 





 
