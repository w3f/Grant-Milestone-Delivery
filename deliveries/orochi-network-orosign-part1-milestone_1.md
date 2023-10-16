# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSdSqj2vYjvpiIytkjcc40Pwl0Eg76WGUAq5L9e8eFuuOegmLw/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/orochi-network-orosign-part1.md
- **Pull Request:** https://github.com/w3f/Grants-Program/pull/1786
- **Milestone Number:** 1

Orochi Network Research and Development Team have completed the following deliverables for the first milestone of the Orosign project.

Threshold Signature: Research topic is build a secured MPC ECDSA and EdDSA that compatible with Polkadot signature system.

- **Introduction:** Introduce about academic research and industrial research about MPC in ECDSA and EdDSA
- **Definition and Security:** Security properties of MPC in ECDSA and EdDSA
- **Construction**
  - **Key Generation:** Distribtued Key Generation
  - **Signing:** Distributed Signing
  - **Verification:** Compatible with centralized signature
  - **Supporting Algorithms:** Required support algorithms for MPC to be constructed
  - **Identifying Aborts:** How to identify aborts in MPC
- **Implementation Guideline**

| Number  | Deliverable                                                                                                                                                                                             | Specification                                                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                                                                                                                                                                                 | [Creative Commons Zero v1.0 Universal](https://github.com/orochi-network/orochi-network.github.io/blob/main/LICENSE)                                       |
| **0b.** | [Research](https://docs.orochi.network/threshold-ecdsa/chapter.html)                                                                                                                                    | Researching about Polkadot signature system and research their compatibility with MPC by which we can be fully comptabile with Polkadot and its parachains |
| **0c.** | [Research](https://docs.orochi.network/threshold-ecdsa/threshold-ecdsa-introduction/introduction.html)                                                                                                  | Public technical report for every research we made, everything published under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)               |
| **1.**  | [Research](https://docs.orochi.network/threshold-ecdsa/threshold-ecdsa-construction/introduction.html)                                                                                                  | Researching about MPC in ECDSA and EdDSA (all supported signatures by Polkadot)                                                                            |
| **2.**  | [Research](https://docs.orochi.network/threshold-ecdsa/intended-implementation/threshold-ecdsa-for-secp256k1.html)                                                                                      | Researching MPC for `secp256k1` and providing the document that describe how the MPC will be built and its security consideration                          |
| **3.**  | [Research](https://docs.orochi.network/threshold-ecdsa/intended-implementation/threshold-eddsa-for-ed25519.html)                                                                                        | Researching MPC for `ed25519` and providing the document that describe how the MPC will be built and its security consideration                            |
| **4.**  | [Research](https://docs.orochi.network/threshold-ecdsa/intended-implementation/threshold-eddsa-for-sr25519.html) [\*](https://docs.orochi.network/threshold-ecdsa/frost-construction/introduction.html) | Researching MPC in `sr25519` and providing the document that describe how the MPC will be built and its security consideration                             |
