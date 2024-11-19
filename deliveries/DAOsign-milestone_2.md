# Milestone Delivery :mailbox:



**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [DAOsign](https://github.com/w3f/Grants-Program/blob/master/applications/DAOsign.md)
* **Milestone Number:** 2

**Context** (optional)
> In this milestone DaoSign deliveries JS/Typescript library to simplify interacting with DaoSign smart contract.

**Deliverables**


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
|    0a. | License | [LICENSE](https://github.com/DAOsign/daosign-ink-js-sdk/blob/main/LICENSE) | Apache 2.0 |
|    0b. | Documentation                   | [Readme](https://github.com/DAOsign/daosign-ink-js-sdk/blob/main/README.md) | Instructions how to isntall library and how use it to store DaoSign proofs on-chain |
| 0c.    | Testing and Testing Guide |         https://github.com/DAOsign/daosign-ink-js-sdk?tab=readme-ov-file#testing                                                                                                               | Unit tests to ensure functionality and robustness. The guide describe how to run these tests.        |
| 0d.    | Docker                    |   https://github.com/DAOsign/polkadot-smart-contracts?tab=readme-ov-file#with-docker                                                                                                                     | Dockerfile(s) that can be used to test all the functionality 
|     1. | DAOsign Ink! JS SDK             | [Github Repo](https://github.com/DAOsign/daosign-ink-js-sdk), [npm package](https://www.npmjs.com/package/@daosign/polkadot)      | |
|     2. | DAOsign Application Integration |      [Github Repo](https://github.com/DAOsign/frontend) | DaoSign Frontend Application with Polkadot Smart Contract integration 


**Additional Information**

Here is example of DaoSign agreement proofs stored on Polkadot-based chain: https://app.dev.daosign.org/agreement/386869b1-af98-4be4-b582-d07b6bea9c07

You can click on Proofs:

![image](https://github.com/user-attachments/assets/4969b0cf-f16e-4f28-8de8-ce67f9150775)

Popup will appear:

![image](https://github.com/user-attachments/assets/9cd7c846-5726-4d09-a5df-0989c177f69a)

And then click on the [link](https://alephzero-testnet.subscan.io/extrinsic/0x8369934f419b3cc990466d0e856bb5a3565ce21389f74fe5cc9de1ad0e4e8fa0) and you will see transaction on block explorer.