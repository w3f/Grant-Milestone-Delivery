# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/roloi-xcm-payment-automation.md
- **Milestone Number:** 2

**Context**

This is the second milestone of the project. This milestone aims to upgrade the previous version delivered in the first milestone.
The main focus of this milestone is to add PSP22 token payments, a new page to track users' payments and an ink! smart contract that works as the payment orchestrator.

**Deliverables**

| Number | Deliverable                                                    | Link                                                                                                                                | Notes                                                                          |
| ------ | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 0a.    | License                                                        | [Apache License 2.0](https://github.com/NeoPower-Digital/tempora/blob/main/LICENSE)                                                 | -                                                                              |
| 0b.    | Documentation                                                  | [Developer documentation & testing guide](https://github.com/NeoPower-Digital/tempora/blob/main/README.md)                          | GitHub Repository README file                                                  |
| 0c.    | Testing                                                        | [Tests](https://github.com/NeoPower-Digital/tempora/tree/main/__tests__)                                                            | -                                                                              |
| 0d.    | Article                                                        | [Delivery Article (In Review)](https://docs.google.com/document/d/1ZcPF7QCWMt-cmWC235_eSaSE9kqmyqM_RLDWQod-c_o/edit?usp=sharing)    | The article is under W3F review. It will be published on Medium when approved. |
| 1.     | UI                                                             | [UI repository](https://github.com/NeoPower-Digital/tempora)                                                                        | [Link to the dApp](https://tempora-dapp.vercel.app/)                           |
| 1a.    | My Payments Page                                               | [My Payments Page](https://github.com/NeoPower-Digital/tempora/tree/main/app/my-payments)                                           | -                                                                              |
| 2.     | Smart Contract                                                 | [ink! Smart Contract repository](https://github.com/NeoPower-Digital/tempora/tree/main/contracts/tempora_contract)                  | Rocstar Contract: `XCvScDrPTApJvBt5pYoJ89mpvhJVQ9Tvz3Up7CARFavsC1T`            |
| 2a.    | Transaction - Configure new recurring transfer                 | [Save Schedule Contract Message](https://github.com/NeoPower-Digital/tempora/blob/main/contracts/tempora_contract/lib.rs#L129)      | -                                                                              |
| 2b.    | Transaction - Modify the configuration of a recurring transfer | [Update Schedule Contract Message](https://github.com/NeoPower-Digital/tempora/blob/main/contracts/tempora_contract/lib.rs#L190)    | -                                                                              |
| 2c.    | Query - Get user recurring transfers                           | [Get User Schedules Contract Message](https://github.com/NeoPower-Digital/tempora/blob/main/contracts/tempora_contract/lib.rs#L217) | -                                                                              |
| 2d.    | Transaction - Execute a transfer                               | [Trigger Payment Contract Message](https://github.com/NeoPower-Digital/tempora/blob/main/contracts/tempora_contract/lib.rs#L243)    | -                                                                              |

**Additional Information**

Welcome to Tempora!

An opinionated and fully typed hook-based project to improve DX and simplify interaction with proxy accounts and XCM on Polkadot. Tempora is an example of how transactions can be automated by leveraging cross-chain communication.

Resources:

- Click [here](https://tempora-dapp.vercel.app/) to navigate to the deployed demo dApp.

- This is the second and final milestone of our [Grant](https://github.com/w3f/Grants-Program/blob/master/applications/roloi-xcm-payment-automation.md).
