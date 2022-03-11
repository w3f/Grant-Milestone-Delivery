# Milestone Delivery :mailbox:



**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

>The company registration is pending and we still haven't received our VAT ID.
Our invoice with "VAT ID: registration pending" is compliant with the french law. However, we will have to reissue the same invoice with the VAT ID as soon as we receive it. 

* **Application Document:** https://github.com/w3f/Grants-Program/blob/3892460da004c06a0cec0e4b55d90bef96f2523e/applications/Interstellar-Network.md

**Context** (optional)

We refactored and changed the architecture of our pre-existing production grade Garbled Circuit Factory in order to integrate it with a substrate node. We took advantage of this change to split the architecture and separate the circuit generation from garbled circuit production.
 As a consequence, due to this architecture modification, we have adapted our deliverables accordingly:
 - There are now two OCWs with their respectives APIs, one for configuration and the logical circuit generation and one for thr garbled circuit production.
 - GCF substrate interface M1.1 is managed with two gRPC servers with two apis that depend of circuit types.
 - M1.2 OCW CFG handle configuration features, master files but also the generation of logical circuits.
 - M1.3 CLI is replaced by usage of substrate front end.
 - M1.4 OCW GCF manages Garbled Circuit production.

**Deliverables**


### Milestone 1 — Implement GCF Substrate modules


| Number | Deliverable | Link | Notes  |
| -----: | ----------- | -----------|------------ |
| 0a. | Licence  |  APACHE 2.0 & GPL3 | Only a part of the JustGarble repository is licenced with GPL3 and isolated with APIs | 
| 0b. | Documentation  |  [code documentation](https://book.interstellar.gg/M1.html#garbled-circuit-factory-gcf-and-circuit-types-overview) |   |
| 0c. | Testing Guide | [testing guide](https://book.interstellar.gg/M1.html#testing-guide) | Core functions due to the specificity of the architecture are mainly covered with integration tests |
| 0d. | Docker | [docker api_garble](https://github.com/orgs/Interstellar-Network/packages/container/package/api_garble) `docker pull ghcr.io/interstellar-network/api_garble:milestone1` [docker api_circuit](https://github.com/orgs/Interstellar-Network/packages/container/package/api_circuits) `docker pull ghcr.io/interstellar-network/api_circuits:milestone1` |  [How to use the dockers for demo:]( https://book.interstellar.gg/M1_demo_tutorial.html)     |
| 0e. | Article | [article](https://book.interstellar.gg/M1.html#article)  |   Will be published beginning of next week  |  
| 1. | GCF Substrate Interface  |[1: api_circuit](https://github.com/Interstellar-Network/api_circuits/tree/main) [2: api_garble](https://github.com/Interstellar-Network/api_garble)  |  GCF APIs is splitted |https://github.com/Interstellar-Network/api_garble/tree/w3f-milestone1 | We replaced GCF CFG with another GCF APIs for garbled circuit production  |  
| 2. | Substrate module: OCW CFG | [pallet ocwExample](https://github.com/Interstellar-Network/substrate-offchain-worker-demo/tree/interstellar/pallets/example-offchain-worker)| This OCW demo pallet i.e. `ocwExample` manages the master files for GCF configuration and the generation of logical circuits (used for production of garbled circuits managed by M1.4) 
| 3. | ~~Substrate GCF CFG CLI~~ |  | **CLI not needed anymore** Replaced by substrate front end and direct upload of config files/master files in IPFS | 
| 4. | Substrate module: OCW GCF | [pallet ocwDemo](https://github.com/Interstellar-Network/substrate-offchain-worker-demo/tree/interstellar/pallets/ocw)| This OCW demo pallet i.e. `ocwDemo` manages the launch of garbled circuit production.
 

