# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [IPFS Utilities application](https://github.com/w3f/Grants-Program/pull/1187/files?short_path=abcff88#diff-abcff881021fa7b4a94dd848604fd46a3a07dcff623619e0b83e6d65842d85e9)
* **Milestone Number:** 1

**Context**

This delivery contains two repositories. One is providing the implementation of the IPFS integration into Substrate. The second is an example web3 client, that can be used for testing and explanations.

For more details please check the Grant application document.

**Deliverables**

List of public GitHub repositories as deliverables:
* [Substrate IPFS](https://github.com/TDSoftware/substrate-ipfs/tree/milestone-1)
* [Substrate IPFS UI Client](https://github.com/TDSoftware/substrate-ipfs-ui/tree/milestone-1)

| Number | Deliverable                                          | Link                                                                                                                                               | Notes                                                                                                                       |
| ------ | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                                              | https://github.com/TDSoftware/substrate-ipfs/blob/milestone-1/LICENSE-APACHE2                                                                      | Apache 2.0                                                                                                                  |
| 0b.    | Documentation                                        | https://github.com/TDSoftware/substrate-ipfs/blob/milestone-1/README.md https://github.com/TDSoftware/substrate-ipfs-ui/blob/milestone-1/README.md | We provided **inline documentation** of the code, a meaningful readme for all modified modules in the repositories.         |
| 0c.    | Testing                                              | https://github.com/TDSoftware/substrate-ipfs/blob/milestone-1/README.md https://github.com/TDSoftware/substrate-ipfs-ui/blob/milestone-1/README.md | Core functions are covered by unit tests as far as reasonably applicable to ensure functionality and robustness.            |
| 1.     | Implementation of the IPFS upload extrinsic          | https://github.com/TDSoftware/substrate-ipfs/blob/milestone-1/frame/tds-ipfs/src/lib.rs                                                            | Please check the tds-ipfs and tds-ipfs-core frame module.                                                                   |
| 2.     | Implementation to retrieve CID and store it on chain | https://github.com/TDSoftware/substrate-ipfs/blob/milestone-1/frame/tds-ipfs/                                                                      | Offchain logic was extended to allow submitting and storing the CID on chain.                                               |
| 3.     | Implementation of a web3 client                      | https://github.com/TDSoftware/substrate-ipfs-ui/tree/milestone-1                                                                                   | Please check the readme file for detail information.                                                                        |
| 4.     | Benchmark and adjustments                            | https://github.com/TDSoftware/substrate-ipfs-ui/tree/milestone-1                                                                                   | The web3 client was used to perform benchmarking. The results will be used for further optimisations of the implementation. |

**Additional Information**
We will continue on developing milestone 2 and will apply for another milestone (3) as we discovered potential optimisations during the benchmarking.
