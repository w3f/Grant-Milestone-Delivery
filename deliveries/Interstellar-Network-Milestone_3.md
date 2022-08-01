# Milestone Delivery :mailbox:



**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

> As W3F does not anymore offer payments in ETH, we switched to payment in USD in the submitted invoice

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Interstellar-Network.md

* **Milestone Number:**  3

**Context** (optional)

This milestone focuses on  the implementation of our Trusted Transaction Validation Protocol TTVP client 
on mobile devices. We have in the previous milestone demonstrated how display circuits are produced by Garbled Circuits Factory to be validated with TTVP pallet.
We now demonstrate the TTVP client within a wallet on a mobile devices registered with the mobile TEE registry pallet on the blockchain. 
The TTVP client enables hardware-backed higly secure validation/confirmation of transactions or sensitive operations to be executed by blockchain TEE nodes.
> We have experienced unexpected complexity and issues especially related to low level Rust/C++ implementation of our TTVP client on mobile devices, especially with the renderer layer. On top of that we have also started to implement our CI workflow. All this have generated a significant delay for this miletsone  delivery.


**Deliverables**


### Milestone 3 — Transaction Validation Protocol use case (second part)


| Number | Deliverable | Link | Notes  |
| -----: | ----------- | -----------|------------ |
| 0a. | Licence  |  APACHE 2.0 & GPL3 https://github.com/Interstellar-Network/api_garble/blob/main/LICENSE  https://github.com/Interstellar-Network/api_circuits/blob/main/LICENSE https://github.com/Interstellar-Network/lib_garble/blob/main/LICENSE https://github.com/Interstellar-Network/lib_circuits/blob/main/LICENSE | Only a part of the JustGarble repository is licenced with GPL3 and isolated with APIs |
| 0b. | Documentation  |  [code documentation](https://book.interstellar.gg/M3.html#code-documentation  ) | Please read first Garbled Circuit Factory (GCF) and Trusted Transaction Validation Protocol (TTVP) [overviews](https://book.interstellar.gg/M2.html#garbled-circuit-factory-gcf-overview)   |
| 0c. | Testing Guide | [testing guide](https://book.interstellar.gg/M3.html#testing-guide) | Core functions due to the specificity of the architecture are mainly covered with integration tests |
| 0d. | Dockers | [Docker compose](https://github.com/Interstellar-Network/Interstellar-Book/blob/docker-compose/docker-compose.yml) | [How to launch docker compose]( https://book.interstellar.gg/M3_demo_tutorial.html)   |
| 0e. | Article | [article](https://book.interstellar.gg/M3.html#article)  |   links in Mx Interstellar Book  |  
| 1. | Mobile TTVP Client (android) |  [APK file and code](https://github.com/Interstellar-Network/wallet-app/releases/tag/milestone3)    | The core code of Mobile TTVP client is shared by both Android and iOS, however the iOS version is not yet fully tested but a tested build will also be avalaible for iOS |  
| 2. | Substrate Module Mobile Registry|[Mobile Registry]( https://github.com/Interstellar-Network/substrate-offchain-worker-demo/tree/master/pallets/mobile-registry)  | This is the basic public mobile registry part that will remain on the non-TEE part of the blockchain, the other part will be delivered in M4| 
| 3. | Substrate Module TTVP pallet with mobile | [TTVP]( https://github.com/Interstellar-Network/substrate-offchain-worker-demo/tree/master/pallets/tx-validation ) | Update of the TTVP pallet to handle Transaction/sensitive operation confirmation on the mbile  | 

 
