# Milestone Delivery :mailbox: Hyperfridge, MS1


**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Hyperfridge](https://github.com/w3f/Grants-Program/blob/master/applications/hyperfridge.md)
  
* **Milestone Number:** 1

**Context** 

MS1 uses the Risk-Zero framework to create Zero-Knowledge proofs for banking-data. The proof is used to check soundness of data provided which will later be presented to an Off-Chain-Worker and a Node. The STARK proves reserves (balance) or payments (transactions, but a node can also trigger FIAT payments!). Milestone 2 will create the REST-APIs to make the proofs available, Milestones 3-5 will cover integration in an off-chain-worker which updates a node and finally an application ("buy me a coffee") which puts it all together. 

**Deliverables**

| Number | Deliverable | Link | Notes/Specification |
| -----: | ----------- | ------ | ------------- |
| 0a. | License | [Licence](https://github.com/element36-io/hyperfridge-r0/blob/main/LICENSE) |  |
| 0b. | Documentation | [Documentation Root](https://github.com/element36-io/hyperfridge-r0/blob/main/README.md) |  |
| 0c. | Testing Guide | [Testing Guide](https://github.com/element36-io/hyperfridge-r0/blob/main/docs/INSTRUCTIONS.md) | Use this as starting point to run the tests.  |
| 0d. | Docker |  | [Dockerhub](https://hub.docker.com/r/e36io/hyperfridge-r0/tags), see Testing Guide how to use. |
| 1a. | risc0 Guest Program | [Repo](https://github.com/element36-io/hyperfridge-r0/tree/main/methods/guest) | Covered by Testing Guide. See [proofing system](https://github.com/element36-io/hyperfridge-r0/blob/main/docs/crypto.md) for a cryptographic overview.  |
| 1b. | Generate Receipt | [Testing Guide](https://github.com/element36-io/hyperfridge-r0/blob/main/docs/INSTRUCTIONS.md) | Covered by Testing Guide. Generate [receipt](https://dev.risczero.com/terminology#receipt) which proves that the computation (e.g. balance) is correct and signed by the bank. |
| 1c. | Validator | [Repo](https://github.com/element36-io/hyperfridge-r0/tree/main/verifier) | Covered by testing guide. Validate Receipts (STARKs) via command line.|
| 1d. | Hyperfridge Crate | [Repo](https://github.com/element36-io/hyperfridge-r0/tree/main/host) | Covered by testing guide. |
| 2. | Unit Tests | [Testing Guide](https://github.com/element36-io/hyperfridge-r0/blob/main/docs/INSTRUCTIONS.md) | Includes edge cases. Code coverage for unit tests of guest can not be collected due to the framework architecture (ELF, Risc V instuction set), but comprehensive tests and test data is provided. |
| 3. | Performance Benchmark | [Benchmarks](https://github.com/element36-io/hyperfridge-r0/blob/main/docs/runtime.md) | With hardware acceleration, execution time can be reduced to 5-10 minutes. No acceleration: 2-3 hours, but Risc0 framework provides a fast dev-mode. |

**Additional Information**
None. 
