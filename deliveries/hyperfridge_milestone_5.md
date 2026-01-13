# Milestone Delivery :mailbox: Hyperfridge, MS5

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [Hyperfridge](https://github.com/w3f/Grants-Program/blob/master/applications/hyperfridge.md)

* **Milestone Number:** 5

**Context**

This milestone converts the Hyperfridge demo UI to use the new stablecoin parachain

**Deliverables**

| Number | Deliverable | Link | Notes/Specification |
| -----: | ----------- | ------ | ------------- |
| 0a. | License | [Licence](https://github.com/element36-io/ocw-ebics/blob/main/LICENSE) |  |
| 0b. | Documentation | [Documentation Root](https://github.com/element36-io/ocw-ebics/blob/main/README.md) |  |
| 0c. | Testing Guide | [Testing Guide](https://github.com/element36-io/ocw-ebics/blob/main/INSTRUCTIONS.md) | Use this as starting point to test the whole system.  |
| 0d. | Docker | [Docker](https://hub.docker.com/r/e36io/ebics-ocw/tags) | see main README how to use it |
| 0e. | Article| [Article](https://medium.com/@dastanbeksamatov/hyperfridge-bridging-traditional-banking-with-web3-using-zero-knowledge-proofs-0ce65f33085f) | Medium article |
| 1a. | Buy me a coffee dApp | [Demo](https://github.com/element36-io/ocw-ebics/tree/main/ebics-demo) | Convert the old demo to use new stablecoin parachain. Previous functionality is preserved with the addition of receipts available for self-validation. Also, necessary adjustments are made to support XCM minting/burning on Asset Hub. |
| 1b. | Proof-Download | [Proof](https://github.com/element36-io/ocw-ebics/blob/main/ebics-demo/src/ProofDownload.js) | UI will provide fetching bank statements, so that anyone can check the proofs offline by themselves, without UI or offchain worker. |
| 2. | Docker-Compose: node & Dapp | [docker compose](https://github.com/element36-io/ocw-ebics/blob/main/docker-compose-test.yml) | We will add the Dapp to the docker-compose file of previous Milestones to demonstrate the full functionality of our chain, the ocw, including a proxy for the FIAT Rest Interface. |

**Additional Information**

Not included in the deliverables:

- upgraded `substrate` dependencies to latest `stable2412` which took additional effort but was necessary to ensure compatibility with the latest `polkadot-js` libraries
- code refactoring of the pallets
