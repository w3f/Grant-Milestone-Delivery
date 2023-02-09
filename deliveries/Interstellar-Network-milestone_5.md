# Milestone Delivery :mailbox:



**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

> As W3F does not anymore offer payments in ETH, we switched to payment in USD in the submitted invoice

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Interstellar-Network.md  (amended for M5)

* **Milestone Number:**  5

**Context** (optional)

Our core security solution has successfully demonstrated a proof-of-concept with a major architectural enhancement.
The integration of Garbled Circuit production directly into TEE nodes has eliminated the requirement 
for an external TEE-protected service for garbled circuits generation.

However, as identified in our recent M5 amendment, the integrated Fancy Garbling scheme, designed for two-party computation, 
is facing performance challenges with displaying the confirmation screen. To resolve these issues in the follow-up grant, we plan to possibly add 
a permutation-based garbling approach to the garbling pallet, similar to the one utilized in our M3 delivery. 
This update is expected to improve performance beyond our M3 results. In addition, design improvements to the circuits will be incorporated 
to aim a user experience close to our simulations.

As a result, we will have two optimized garbling schemes; one for two-party computation and the other for single-use garbled circuits.

**Deliverables**

### Milestone 5 — GCF Garbling service part in TEE nodes (amended)


| Number | Deliverable | Link | Notes  |
| -----: | ----------- | -----------|------------ |
| 0a. | Licence  |  APACHE 2.0, MIT | | no more GPL licence |
| 0b. | Documentation  |  [code documentation](https://book.interstellar.gg/M4.html#code-documentation  ) | Please read first Garbled Circuit Factory (GCF) and Trusted Transaction Validation Protocol (TTVP) [overviews](https://book.interstellar.gg/M4.html#garbled-circuit-factory-gcf-overview)   |
| 0c. | Testing Guide | [testing guide](https://book.interstellar.gg/M4.html#testing-guide) | Core functions due to the specificity of the architecture are mainly covered with integration tests |
| 0d. | Dockers | [Docker compose demo](https://github.com/Interstellar-Network/Interstellar-Book/blob/docker-compose/docker-compose.yml) | [How to launch docker compose demo]( https://book.interstellar.gg/M4_demo_tutorial.html)   |
| 0e. | Article | [article](https://book.interstellar.gg/M4.html#article)  |   links in Mx Interstellar Book  - (not officially publish as we are still in stealth mode) |  
| 1. | Replacement of JustGarble (GPL) with Swanky/Fancy-Garbling (MIT)| |In order to use a TEE framework we need a non-GPL garbling scheme code | 
| 2. | Circuit Garbling in substrate TEE nodes | | the generation of Garbled Circuits is now in TEE pallet | 
| 3. | Android client garbled circuit evaluation updated | | as explain in the amendment, current performance of fancy garbling is not adapted to display circuits, we still include it in the client to demonstrate integration of this GC evalaution scheme in the mobile client for future use, potentially with two-party computation| |
