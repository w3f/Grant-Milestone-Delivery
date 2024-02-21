# Evaluation


- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/roloi-xcm-payment-automation.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by PieWol

**Deliverables**

| Number | Deliverable                                                    | Accepted              | Link                                                                                                                                | Evaluation Notes                                                               |
| ------ | -------------------------------------------------------------- |---------------------- |-----------------------------------------------------------------------------------------------------------------------------------  | ------------------------------------------------------------------------------ |
| 0a.    | License                                                        | <ul><li>[] </li></ul> | [Apache License 2.0](https://github.com/NeoPower-Digital/tempora/blob/main/LICENSE)                                                 | -                                                                              |
| 0b.    | Documentation                                                  | <ul><li>[] </li></ul> | [Developer documentation & testing guide](https://github.com/NeoPower-Digital/tempora/blob/main/README.md)                          | GitHub Repository README file                                                  |
| 0c.    | Testing                                                        | <ul><li>[] </li></ul> | [Tests](https://github.com/NeoPower-Digital/tempora/tree/main/__tests__)                                                            | -                                                                              |
| 0d.    | Article                                                        | <ul><li>[] </li></ul> | [Delivery Article (In Review)](https://docs.google.com/document/d/1ZcPF7QCWMt-cmWC235_eSaSE9kqmyqM_RLDWQod-c_o/edit?usp=sharing)    | The article is under W3F review. It will be published on Medium when approved. |
| 1.     | UI                                                             | <ul><li>[] </li></ul> | [UI repository](https://github.com/NeoPower-Digital/tempora)                                                                        | [Link to the dApp](https://tempora-dapp.vercel.app/)                           |
| 1a.    | My Payments Page                                               | <ul><li>[] </li></ul> | [My Payments Page](https://github.com/NeoPower-Digital/tempora/tree/main/app/my-payments)                                           | -                                                                              |
| 2.     | Smart Contract                                                 | <ul><li>[] </li></ul> | [ink! Smart Contract repository](https://github.com/NeoPower-Digital/tempora/tree/main/contracts/tempora_contract)                  | Rocstar Contract: `XCvScDrPTApJvBt5pYoJ89mpvhJVQ9Tvz3Up7CARFavsC1T`            |
| 2a.    | Transaction - Configure new recurring transfer                 | <ul><li>[] </li></ul> | [Save Schedule Contract Message](https://github.com/NeoPower-Digital/tempora/blob/main/contracts/tempora_contract/lib.rs#L129)      | -                                                                              |
| 2b.    | Transaction - Modify the configuration of a recurring transfer | <ul><li>[] </li></ul> | [Update Schedule Contract Message](https://github.com/NeoPower-Digital/tempora/blob/main/contracts/tempora_contract/lib.rs#L190)    | -                                                                              |
| 2c.    | Query - Get user recurring transfers                           | <ul><li>[] </li></ul> | [Get User Schedules Contract Message](https://github.com/NeoPower-Digital/tempora/blob/main/contracts/tempora_contract/lib.rs#L217) | -                                                                              |
| 2d.    | Transaction - Execute a transfer                               | <ul><li>[] </li></ul> | [Trigger Payment Contract Message](https://github.com/NeoPower-Digital/tempora/blob/main/contracts/tempora_contract/lib.rs#L243)    | -                                                                              |