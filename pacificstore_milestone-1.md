# Milestone Delivery :mailbox:


**The [invoice `form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone - BTC Address changed.**  

* **PR Link:** [PR LINK](https://github.com/w3f/Open-Grants-Program/pull/110)

* **Milestone Number:** 1

### Milestone 1 - PacificStore  orderbook On Polkadot 

- **Programming Language & framework**:Rust  with substrate

| Number | Deliverable                                       | Link | Notes |
| ------ | --------------------------------------------------| ---- | -------|
| 0a.    | License |  |Unlicense|
| 0b.    | Documentation                                      | [Doc](https://github.com/vlbos/pacific-store-node/blob/milestone-1/doc/pacific_store_milestone1.md)  | Describe functionalities |
| 0c.    | Testing Guide                                      | [Doc](https://github.com/vlbos/pacific-store-node/blob/milestone-1/doc/pacific_store_milestone1_testing_guide.md)  | Describe quick start,how to use,test example |
| 1.     | Substrate Runtime Module:backend orderbook |[Orderbook](https://github.com/vlbos/pacific-store-node/tree/milestone-1/pallets/orderbook)|The orderbook includes:`postOrder``postAssetWhitelist`,`getOrder`,`getOrders`,`getAsset`,`getAssets`.|
| 2.     | Substrate Runtime Module:wyvern Exchange |[WyvernExchange](https://github.com/vlbos/pacific-store-node/tree/milestone-1/pallets/wyvern-exchange) |The Exchange includes:`hashOrder`,`requireValidOrder`,`validateOrderParameters`,`validateOrder`,`approveOrder`,`cancelOrder`.[wyvern](https://github.com/ProjectOpenSea/wyvern-js/blob/master/src/wyvern-ethereum/contracts/exchange/ExchangeCore.sol)|
| 3.    | Unit Tests                             |[Orderbook](https://github.com/vlbos/pacific-store-node/blob/milestone-1/pallets/orderbook/src/tests.rs);[WyvernExchange Tests](https://github.com/vlbos/pacific-store-node/blob/milestone-1/pallets/wyvern-exchange/src/tests.rs) |The code will have 95% unit-test coverage to ensure functionality |
| 4.    | Docker file                            | [Link](https://github.com/vlbos/pacific-store-node/blob/milestone-1/Dockerfile)|Docker image with a Substrate chain using the sdk, demonstrating its functionality |
| 5.    | Medium article                            | [Link](https://vlbos2018.medium.com/pacificstore-orderbook-wyvernexchange-modules-bca9af39111)| Describe Quickstart,How to use, demonstrating its functionality |


