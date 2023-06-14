# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Open rollup - MVP - Phase 1](https://github.com/w3f/Grants-Program/blob/master/applications/openrollup-mvp-phase-1.md)
* **Milestone Number:** 1

**Context** 

Open rollup pallet provides a general zk-rollup framework for all substrate-based blockchains. The milestone completes the Pallet of the Substrate.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE] | Apache 2.0 |
| 0b. | Documentation | [README] | The README introduces the repository and its functionality. The source code is documented. |
| 0c. | Testing Guide | [README] | The README describes how to test the game client. |
| 0d. | Docker | [Node:Dockerfile] | The Dockerfile can be used to run test. |
| 0e. | Article | [Node:pallet-publish.md] | The article explains what was done. |
| 1.  | Open rollup Pallet | [Node:Github] | We have implemented the core data types and the functions of Open rollup pallet. |
| 2.  | Miden verifier in Open rollup Pallet | [Node:VerifierMod] [Node:VerifierMiden]| We have implemented the verifier trait, and a miden verifier. |

[License]: https://github.com/open-rollup/pallet-open-rollup/blob/w3f-grant-phase-1-milestone-1/LICENSE
[README]: https://github.com/open-rollup/pallet-open-rollup/blob/w3f-grant-phase-1-milestone-1/README.md
[Node:Dockerfile]: https://github.com/open-rollup/pallet-open-rollup/blob/w3f-grant-phase-1-milestone-1/Dockerfile
[Node:pallet-publish.md]: https://github.com/open-rollup/blog/blob/main/pallet-publish.md
[Node:Github]: https://github.com/open-rollup/pallet-open-rollup/tree/w3f-grant-phase-1-milestone-1
[Node:VerifierMod]: https://github.com/open-rollup/pallet-open-rollup/blob/w3f-grant-phase-1-milestone-1/src/verifier/mod.rs
[Node:VerifierMiden]: https://github.com/open-rollup/pallet-open-rollup/blob/w3f-grant-phase-1-milestone-1/src/verifier/miden_verifier.rs

**Additional Information**

It is still very difficult to develop a practical [Miden-vm](https://github.com/0xPolygonMiden/miden-vm) program, and we will continue to study the development of zkvm in the future.
