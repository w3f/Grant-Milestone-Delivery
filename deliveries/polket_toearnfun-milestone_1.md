# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [polket_toearnfun application](https://github.com/w3f/Grants-Program/blob/master/applications/polket_toearnfun.md)
* **Milestone Number:** 1

**Context**

In Milestone 1, we successfully completed the development and deployment of the `Polket` testnet. We developed the `ToEarnFun` Flutter app, integrated `polkawallet-sdk`, supported `polkadotjs` APIs, completed the on-chain registration and binding of `Jump Rope` equipment, and uploaded training reports to get `FUN` rewards.

**Deliverables**


| Number | Deliverable                            | Link                                                                                                                                                                                                    | Notes                                                                              |
|--------|----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| 0a.    | License                                | [GPL-v3.0](https://github.com/polketio/polket-node/blob/milestone-01-delivery/LICENSE)                                                                                                                  |                                                                                    |
| 0b.    | Documentation                          | [Doc](https://polketio.gitbook.io/toearnfun/)                                                                                                                                                           |                                                                                    |
| 0c.    | Testing Guide                          | [Rust Unit Test](https://github.com/polketio/polket-node/tree/milestone-01-delivery#testing), [ToEarnFun Demo Guide](https://polketio.gitbook.io/toearnfun/guides/how-to-run-toearnfun-app)             |                                                                                    |
| 0d.    | Docker                                 | [Dockfile](https://github.com/polketio/polket-node/blob/milestone-01-delivery/Dockerfile), [Run in docker](https://github.com/polketio/polket-node/tree/milestone-01-delivery#run-full-node-on-testnet) |                                                                                    |
| 1.     | Substrate module: pallet-vfe           | [Source code link](https://github.com/polketio/polket-node/tree/milestone-01-delivery/pallets/vfe)                                                                                                      | The core gameplay of ToEarnFun is implemented here.                                |
| 2.     | Substrate module: pallet-unique-id     | [Source code link](https://github.com/polketio/polket-node/tree/milestone-01-delivery/pallets/unique-id)                                                                                                | A module that provides the system with an auto-increment ID.                       |
| 3.     | Substrate module: pallet-currencies    | [Source code link](https://github.com/polketio/polket-node/tree/milestone-01-delivery/pallets/currencies)                                                                                               | This module combines pallet-balances and pallet-assets.                            |
| 4.     | Substrate module: pallet-support       | [Source code link](https://github.com/polketio/polket-node/tree/milestone-01-delivery/pallets/support)                                                                                                  |                                                                                    |
| 5.     | Flutter App: Smart Jump Rope supported | [Source code link](https://github.com/polketio/toearnfun_flutter_app/tree/milestone-01-delivery)                                                                                                        | Currently only tested for Android.                                                 |
| 6.     | Flutter App: Integrate polkawallet-sdk | [Source code link](https://github.com/polketio/toearnfun_flutter_app/tree/milestone-01-delivery)                                                                                                        | We use the [v0.5.0 SDK](https://github.com/polkawallet-io/sdk/releases/tag/0.5.0). |

**Additional Information**

We have created a branch `milestone-01-delivery` for review of this application. If you have any questions, please contact us in time.

- https://github.com/polketio/toearnfun_flutter_app/tree/milestone-01-delivery
- https://github.com/polketio/polket-node/tree/milestone-01-delivery
