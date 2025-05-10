# Milestone Delivery :mailbox:


**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Distributed Cryptography for Polkadot Wallets](https://github.com/w3f/Grants-Program/blob/master/applications/distributed_cryptography_for_polkadot_wallets.md)
* **Milestone Number:** 4 & 5

**Context** (optional)

In this milestone, we conclude our project with a discussion of how our previous work on threshold committing verifiable random functions (TCVRFs) can be used to more securely implement hardened node derivation in BIP-32 compatible threshold Schnorr wallets for Polkadot.
Please note that this deviates from the original project plan. This deviation was communicated and approved in https://github.com/w3f/Grants-Program/pull/1908 as well as in the previous milestone delivery.


**Deliverables for Milestones 4 and 5**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 4.0a. | Copyright and Licenses | https://github.com/perun-network/polkadot-wallet-grant/wiki | The PDF is located on the linked GitHub Wiki page. The license is specified on the PDF. |
| 4.0b. | Documentation/Tutorial | https://github.com/perun-network/polkadot-wallet-grant/wiki | The same writeup serves as the documentation. |
| 4.0c. | Methodology | https://github.com/perun-network/polkadot-wallet-grant/wiki |  |
| 4.0d. | Infrastructure | https://github.com/perun-network/polkadot-wallet-grant/wiki | |
| 4.0e. | Article | https://github.com/perun-network/polkadot-wallet-grant/wiki | All writeups are given in the GitHub Wiki. |
| 4.1. | Security Analysis | https://github.com/perun-network/polkadot-wallet-grant/wiki | The previous delivery on TCVrfs already contained an in-depth, formal security analysis. It is contained in the same repository. The final report additionally contains a short security analysis on the hardened node derivation using TCVrfs |
| 4.2. | Implementation Considerations | https://github.com/perun-network/polkadot-wallet-grant/wiki | After the agreed-upon deviation, our work focused more on TCVrfs than a holistic treatment of the resulting wallet. Nevertheless, some implementation considerations are given in the conclusion section of the final report. |

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 5.0a. | Copyright and Licenses | https://github.com/perun-network/polkadot-wallet-grant/wiki | The PDF is located on the linked GitHub Wiki page. The license is specified on the PDF. |
| 5.0b. | Documentation/Tutorial | https://github.com/perun-network/polkadot-wallet-grant/wiki | The same writeup serves as the documentation. |
| 5.0c. | Methodology | https://github.com/perun-network/polkadot-wallet-grant/wiki |  |
| 5.0d. | Infrastructure | https://github.com/perun-network/polkadot-wallet-grant/wiki | |
| 5.0e. | Article | https://github.com/perun-network/polkadot-wallet-grant/wiki | All writeups are given in the GitHub Wiki. |
| 5.1. | Whitepaper & Academic Publication | https://github.com/perun-network/polkadot-wallet-grant/wiki | The final report serves as whitepaper. We decided not to pursue academic publications to reasons outlined [here](https://github.com/w3f/Grants-Program/pull/1908). Nevertheless, the detailed work on TCVrf submitted in the previous milestones meets the high standards of academic work in the field. |
| 5.2. | Medium Article | https://github.com/perun-network/polkadot-wallet-grant/wiki | After successful review of this submission, we will publish a medium article on https://medium.com/perunnetwork, outlining our findings on TCVrfs and, more generally, our work throughout the course of this project. The medium article will follow the content of the final report, but with a lesser degree of technicality. Our medium article will include links to the reports we submitted as milestones throughout this project. |


**Additional Information**
As mentioned above, the course of this project does not fit the original milestone roadmap anymore. As is common for basic research projects, we found an interesting related problem in threshold eVRFs and decided to deviate from the original project plan after communicating this in the [application thread](https://github.com/w3f/Grants-Program/pull/1908).
With this milestone, we conclude the project by showing how our work on TCVrfs can improve security in threshold BIP32 wallets for Polkadot.
We thank the reviewers as well as project management from Polkadot's side for allowing us to pursue this interesting direction!