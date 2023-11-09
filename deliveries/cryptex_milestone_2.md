# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/cryptex.md
* **Milestone Number:** 2

**Context** (optional)

The Etf Network is a Substrate-based blockchain that utilizes identity-based encryption and zero knowledge proofs to enable "encryption to the future", or timelock encryption. It uses a slot-based consensus system as a reference clock to which messages can be encrypted. The initial implementation uses a fork of Aura to implement a proof-of-authority version of ETF, where authorities are IBE master key custodians. Valid blocks authored in future slots contain the corresponding secret keys. To put it another way, each slot has a unique, publicly calculable identity, and whenever a block is authored in that slot, the identity owners leaks their secret key.

In the 2nd milestone we deliver tools requried to perform timelock encryption on the network. Additionally, we deliver a typescript library and custom smoldot/substrate-connect fork to easily integrate into a user interface.

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | https://github.com/ideal-lab5/substrate/blob/etf/LICENSE-GPL3 | GPLv3 | 
| **0b.** | Documentation | https://ideal-lab5.github.io | also see inline documentation |
| **0c.** | Testing and Testing Guide | https://docs.google.com/document/d/1wyWSHl-MJtiaFzuZqsPTAq0ABRCw9RlxIjt5m6pEOUY/edit?usp=sharing  |  |
| **0d.** | Docker | https://hub.docker.com/repository/docker/ideallabs/etf/general | |
| **0e.** | Article | https://ideallabs.substack.com/p/e1d2e89b-ec19-477d-8781-7401fc3efbbe | unpublished, pending milestone 2 acceptance. |
| 1. | Light Client | [smoldot fork](https://github.com/ideal-lab5/smoldot/tree/etf), [substrate-connect fork](https://github.com/ideal-lab5/substrate-connect/tree/etf) |  |
| 2 | User Interface: setup | [the UI](https://github.com/ideal-lab5/etf.js/tree/main/examples) | A guide on running and testing the interface can be found in the testing document. We also have built a [CLI](https://github.com/ideal-lab5/etf-cli) to demonstrate integration of the etf-sdk in rust. |
| 3. | SDK: Slot Scheduling | [implementation](https://github.com/ideal-lab5/etf.js/blob/77da831ffe3a93964790a7bcf1e5a53ddf362050/src/etf.ts#L42), [tests](https://github.com/ideal-lab5/etf.js/blob/77da831ffe3a93964790a7bcf1e5a53ddf362050/src/etf.test.spec.ts#L6) | [docs](https://ideal-lab5.github.io/etf_js.html#slot-scheduler) |
| 4. | SDK: Encryption | [in etf.js](https://github.com/ideal-lab5/etf.js/blob/77da831ffe3a93964790a7bcf1e5a53ddf362050/src/etf.ts#L138) which calls the [client](https://github.com/ideal-lab5/etf-sdk/blob/4182f34ac51800e48e6a62d1aa1996181567513e/crypto/src/client/client.rs#L72) | Tests are found in the same file as implementations. See [here](https://ideal-lab5.github.io/etf_sdk.html#encryption-and-decryption) for more implementation details. |
| 5. | SDK: Decryption | [in etf.js](https://github.com/ideal-lab5/etf.js/blob/77da831ffe3a93964790a7bcf1e5a53ddf362050/src/etf.ts#L160) which calls the [client](https://github.com/ideal-lab5/etf-sdk/blob/4182f34ac51800e48e6a62d1aa1996181567513e/crypto/src/client/client.rs#L116) |

**Additional Information**

