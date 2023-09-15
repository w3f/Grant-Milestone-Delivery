# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Application](https://github.com/w3f/Grants-Program/blob/master/applications/ISO-8583-implementation.md)
* **Milestone Number:** 1

**Context** (optional)

This milestone is mainly about setting up the infrastructure for implementing ISO-8583 standard for Substrate.

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ----- |
| **0a.** | License | [License](https://github.com/subclone/payment-processor/blob/main/LICENSE) | MIT |
| **0b.** | Documentation | [Main README](https://github.com/subclone/payment-processor/tree/main) | Main README file contains links to all the crate-specific relevant documentation. Each crate is documented. |
| **0c.** | Testing and Testing Guide | [Unit/Integration tests](https://github.com/subclone/payment-processor/tree/main/pcidss/oracle/src/tests), [Unit tests](https://github.com/subclone/payment-processor/blob/main/pcidss/core/src/bank_account/models.rs#L149) | Integration tests and unit tests are provided. Integration tests are written to ensure ISO-8583 message is being processed correctly. Unit tests are written over primitive models and functions. |
| **0d.** | Docker | [Dockerfile](https://github.com/subclone/payment-processor/blob/main/pcidss/Dockerfile) | Dockerfile for Oracle |
| 1. | Merchant App | [Merchant App](https://github.com/subclone/payment-processor/tree/main/interface) | This is a demo interface that uses the PCIDSS Oracle Gateway and Payment Processor to simulate bank dashboard and demo checkout page. |
| 2. | Payment Processor | [Payment processor server](https://github.com/subclone/payment-processor/tree/main/payment-processor) | Simulates a traditional payment processor which is used to process ISO-8583 messages from clients (i.e PoS terminals, ATMs, web payment gateways, etc.) and send them to the appropriate destination. You could think of it as a naive simulation of Stripe or PayPal. |
| 3. | PCIDSS Compliant Gateway | [Oracle](https://github.com/subclone/payment-processor/tree/main/pcidss/oracle) | PCIDSS Compliant Oracle contains set of services to process ISO-8583 messages, sync with Substrate chain and maintain local ledger. In a nutshell, it mocks a traditional bank which has issued some cards and is currently used for implementing a PoC implementation of ISO-8583 on a Substrate based blockchain. Substrate chain connection is not implemented yet. |
| 4. | Makefile | [Makefile](https://github.com/subclone/payment-processor/blob/main/pcidss/Makefile) | Makefile consists of commands to ease the development and testing. |

**Additional Information**

This milestone was a lot more challenging than I expected. I had to learn a lot of new things about ISO-8583 standard and deal with unmaintained packages. Parties involved in ISO-8583 are also simulated in a naive way, i.e there is only one bank that is issuing cards, so all transactions are "on-us". However, the core functionality and infrastructure that enables ISO-8583 integration with Substrate is complete.

There were some tough design decisions that I had to make. For example, I had to use JSON RPC instead of message broker (although they are very similar). I am using [`jsonrpsee`](https:://github.com/paritytech/jsonrpsee.git). 
