# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone - BTC Address changed.**  

* **PR Link:** [PR LINK](https://github.com/w3f/Open-Grants-Program/pull/110)

* **Milestone Number:** 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.                                                               |

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |
| 1. | oracle pallet | https://github.com/aresprotocols/ares-module/blob/main/substrate-node-template/pallets/pallet-ares/src/lib.rs | read storage,event, error and module define |
| 2. | scanner | https://github.com/aresprotocols/ares-module/blob/main/fetch-data/index.js| scan transaction event and request http api |
| 3. | provider | https://github.com/aresprotocols/ares-module/blob/main/aggregate-ares/README.md | fetch huobi and okex price |
| 4. | Testing | https://github.com/aresprotocols/ares-module/blob/main/substrate-node-template/pallets/pallet-ares/src/tests.rs|test module method |
| 5. | example for demonstration | https://github.com/aresprotocols/ares-module/blob/main/fetch-data/README.md|listen for event requests and  aggregate price to oracle|
| 6. | Documentation | https://github.com/aresprotocols/ares-module/blob/main/README.md  |these modules related and how to used|



### Milestone 1 - Opensea.js backend  orderbook On Polkadot 

- **Programming Language & framework**:Rust  with substrate

| Number | Deliverable                                       | Link | Notes |
| ------ | --------------------------------------------------| ---- | -------|
| 1.     | Documentation                                      | [Doc](https://github.com/vlbos/pacific-store-node/blob/dev/doc/pacific_store_milestone1.md)  | Describe functionalities and instructions on compiling |
| 2.     | Substrate Runtime Module:backend orderbook |[Orderbook](https://github.com/vlbos/pacific-store-node/tree/dev/pallets/orderbook)|The orderbook includes:`postOrder``postAssetWhitelist`,`getOrder`,`getOrders`,`getAsset`,`getAssets`.|
| 3.     | Substrate Runtime Module:wyvern Exchange |[WyvernExchange](https://github.com/vlbos/pacific-store-node/tree/dev/pallets/wyvern-exchange) |The Exchange includes:`hashOrder`,`requireValidOrder`,`validateOrderParameters`,`validateOrder`,`approveOrder`,`cancelOrder`.[wyvern](https://github.com/ProjectOpenSea/wyvern-js/blob/master/src/wyvern-ethereum/contracts/exchange/ExchangeCore.sol)|
| 4.    | Unit Tests                             |[Orderbook](https://github.com/vlbos/pacific-store-node/blob/dev/pallets/orderbook/src/tests.rs);[WyvernExchange Tests](https://github.com/vlbos/pacific-store-node/blob/dev/pallets/wyvern-exchange/src/tests.rs) |The code will have 95% unit-test coverage to ensure functionality |
| 5.    | Docker file                            | [Link](https://github.com/vlbos/pacific-store-node/blob/dev/Dockerfile)|Docker image with a Substrate chain using the sdk, demonstrating its functionality |



