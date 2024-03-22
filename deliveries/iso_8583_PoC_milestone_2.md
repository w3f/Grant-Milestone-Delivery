# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Application](https://github.com/w3f/Grants-Program/blob/master/applications/ISO-8583-implementation.md)
* **Milestone Number:** 2

**Context** (optional)

This milestone builds on the previous one by adding crucial part of the PoC: blockchain integration. The Oracle Gateway is now able to process ISO-8583 messages from the Substrate chain and sync with it.

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ----- |
| **0a.** | License | [License](https://github.com/subclone/payment-processor/blob/main/LICENSE) [License 2](https://github.com/subclone/iso8583-chain/blob/main/LICENSE) | MIT |
| **0b.** | Documentation | [README 1](https://github.com/subclone/payment-processor/tree/main) [README 2](https://github.com/subclone/iso8583-chain/blob/main/README.md) [Oracle Demo](https://github.com/subclone/payment-processor/blob/main/DEMO.md) [Chain Demo](https://github.com/subclone/iso8583-chain/blob/main/DEMO.md) | Main README files in both repos contain general information about the project. `DEMO.md` files in the root directories provide a step by step guide for testing/QAing the features and deliverables. |
| **0c.** | Testing and Testing Guide | [Unit/Integration tests](https://github.com/subclone/payment-processor/tree/main/pcidss/oracle/src/tests), [ISO-8583 Pallet tests](https://github.com/subclone/iso8583-chain/blob/main/pallets/iso-8583/src/tests.rs), [Unit tests](https://github.com/subclone/payment-processor/blob/main/pcidss/core/src/bank_account/models.rs#L149) | Integration tests and unit tests are provided. Integration tests are written to ensure ISO-8583 message is being processed correctly, and that `watcher` service correctly detects and interprets `on-chain` events. Stanard Substrate integration tests are also provided. Unit tests are written over primitive models and functions. |
| **0d.** | Docker | [Docker Node](https://github.com/subclone/iso8583-chain/blob/main/Dockerfile) [Docker Oracle](https://github.com/subclone/payment-processor/blob/main/pcidss/Dockerfile) | Dockerfiles for Oracle and Node are provided |
| 1. | Substrate Chain| [Substrate Chain](https://github.com/subclone/iso8583-chain) | Substrate chain is forked from `substrate-node-template` and modified to have 3s of block time, 6 decimals and extremely low transaction fees. |
| 2. | Offchain Worker | [Offchain Worker](https://github.com/subclone/iso8583-chain/blob/main/pallets/iso-8583/src/lib.rs#L472) | An offchain worker is implemented that runs every 10 blocks. In each run, it reads the latest balance of registered addresses and submits the balance on-chain. It signs and provides the signature of the payload with the request to payment processor server for authentication. |
| 3. | ERC-20R Pallet| [ERC-20R Pallet](https://github.com/subclone/iso8583-chain) | ISO-8583 pallet is added that also implementes ERC20-R standard. It guarantees reversability by giving max allowance to the system/pallet account. Apart from the ERC20R standard, pallet is also responsible for offchain-workers, controlling token issuance, and keeping the registry of associated bank accounts. |
| 4. | Integration tests | [Oracle Integration Tests](https://github.com/subclone/payment-processor/tree/main/pcidss/e2e-tests) [Integration tests](https://github.com/subclone/iso8583-chain) | Integration tests are added for the chain and for the heavily modified PCIDSS Oracle Gateway. |
| 5. | Makefile | [docker-compose](https://github.com/subclone/payment-processor/blob/main/docker-compose.yaml) [Makefile](https://github.com/subclone/payment-processor/blob/main/pcidss/Makefile) | `docker-compose` file is provided that runs all the services, including the chain, oracle, and the interface. `Makefile` is also provided, but more as a reference. |

**Additional Information**

[`DEMO.md`](https://github.com/subclone/payment-processor/blob/main/DEMO.md) provides a comprehensive step-by-step guide to run the demo of the whole PoC.

This milestone was a lot more challenging than I expected. Surprisingly, huge part of the work for this milestone was not related to the chain, but rather in integration with the chain. Big chunk of the PCIDSS Oracle Gateway was either rewritten or heavily modified.

In the application document, it was mentioned that `integration tests` with `zombienet` will be added. However, this does not make sense for a solo chain, so I have added a different kind of integration tests.

NOTE: Parties involved in ISO-8583 are also simulated in a naive way, i.e there is only one bank that is issuing cards, so all transactions are "on-us". However, the PoC implementation of ISO-8583 integration on a Substrate based blockchain can be considered complete.
