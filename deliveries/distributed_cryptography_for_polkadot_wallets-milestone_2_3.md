# Milestone Delivery :mailbox:


**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Distributed Cryptography for Polkadot Wallets](https://github.com/w3f/Grants-Program/blob/master/applications/distributed_cryptography_for_polkadot_wallets.md)
* **Milestone Number:** 2 & 3

**Context** (optional)

In this milestone we deliver an in-depth writeup of our research on threshold exponent verifiable random functions (TeVRFs) and their generalization of threshold committing VRFs (TCVRF).
Please note that this deviates from the original project plan. This deviation was communicated in https://github.com/w3f/Grants-Program/pull/1908.

**Deliverables for Milestones 2 and 3**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 2.0a. | Copyright and Licenses | https://github.com/perun-network/polkadot-wallet-grant/wiki | The PDF is located on the linked GitHub Wiki page. The license is specified on the PDF. | 
| 2.0b. | Documentation/Tutorial | https://github.com/perun-network/polkadot-wallet-grant/wiki | The same writeup serves as the documentation. |
| 2.0c. | Methodology | https://github.com/perun-network/polkadot-wallet-grant/wiki |  |
| 2.0d. | Infrastructure | https://github.com/perun-network/polkadot-wallet-grant/wiki | |
| 2.0e. | Article | https://github.com/perun-network/polkadot-wallet-grant/wiki | The writeup about TCVRF is given in the GitHub Wiki. |
| 2.1. | Security Model | https://github.com/perun-network/polkadot-wallet-grant/wiki | The writeup describes the security model for (Threshold) Committing VRFs, see Chapter 3 and Chapter 4, in particular. |
| 2.2. | Protocol Design | https://github.com/perun-network/polkadot-wallet-grant/wiki | The generic protocol of a TCVRF is presented in the writeup, see Chapter 5. |
| 2.3. | Protocol Evaluation | https://github.com/perun-network/polkadot-wallet-grant/wiki | We provide a formal security proof (see Appendix A and B) for our TCVRF construction and present practical evaluations in Chapter 7. |

**Deliverables for Milestone 3**
| Number | Deliverable              | Link | Notes |
|--------|---------------------------|------|-------|
| 3.0a   | Copyright and Licenses    | https://github.com/perun-network/polkadot-wallet-grant/wiki | The PDF is located on the linked GitHub Wiki page. The license is specified on the PDF. |
| 3.0b   | Documentation/Tutorial    | https://github.com/perun-network/polkadot-wallet-grant/wiki | The same writeup serves as the documentation. |
| 3.0c   | Methodology               | https://github.com/perun-network/polkadot-wallet-grant/wiki |       |
| 3.0d   | Infrastructure            | https://github.com/perun-network/polkadot-wallet-grant/wiki |       |
| 3.0e   | Article                   | https://github.com/perun-network/polkadot-wallet-grant/wiki | The writeup about TCVRFs is given in the GitHub Wiki. |
| 3.1    | Efficiency Improvements   | https://github.com/perun-network/polkadot-wallet-grant/wiki |Deviation: We instead present a generic TCVRF scheme that can bring effiency improvements for threshold signing protocols or derivations in threshold wallets.      |
| 3.2    | Stronger Security Model   | https://github.com/perun-network/polkadot-wallet-grant/wiki | Deviation: We instead develop a formal model for Threshold Committing VRFs, which are a generalization of TeVRFs |

**Additional Information**
As mentioned above, the course of this project does not fit the original milestone roadmap anymore. As is common for basic research projects, we found an interesting related problem in threshold eVRFs and decided to deviate from the original project plan after communicating this in the [application thread](https://github.com/w3f/Grants-Program/pull/1908). We are submitting our TeVRF-results for milestones 2 and 3, because those milestones most closely fit our work regarding content and effort put in.

**Outlook to Future Milestones**
We plan to complete the project and the remaining two milestones in the form of a whitepaper that describes the construction of a threshold Schnorr BIP32 wallet by making use of TeVRFs (which are the work of this milestone) to reduce communication complexity in the thresholdized node-derivation protocol. The whitepaper will also include a security analysis of the proposed threshold wallet.