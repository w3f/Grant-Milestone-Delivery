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

| Number | Deliverable                                        | Specification |
| ------ | -------------------------------------------------- | -------|
| 1.     | Documentation                                      | Describe functionalities and instructions on compiling   |
| 2.     | Substrate Runtime Module:backend orderbook |The orderbook includes:`postOrder``postAssetWhitelist`,`getOrder`,`getOrders`,`getAsset`,`getAssets`.|
| 3.     | Substrate Runtime Module:wyvern Exchange |The Exchange includes:`hashOrder`,`requireValidOrder`,`validateOrderParameters`,`validateOrder`,`approveOrder`,`cancelOrder`.[wyvern](https://github.com/ProjectOpenSea/wyvern-js/blob/master/src/wyvern-ethereum/contracts/exchange/ExchangeCore.sol) |
| 4.    | Unit Tests                             | The code will have 95% unit-test coverage to ensure functionality |
| 5.    | Docker file                            | Docker image with a Substrate chain using the sdk, demonstrating its functionality |


### Milestone 1  交付需要开发或其他工作
#### Substrate Runtime Module:backend orderbook 
opensea-js orderbook backend后端没有开源
需要实现支持[opensea-js api](https://github.com/ProjectOpenSea/opensea-js/blob/master/src/api.ts)
前端相应功能的后端orderbook 
接收请求
`postOrder``postAssetWhitelist`,`getOrder`,`getOrders`,`getAsset`,`getAssets`
后处理及存储实现
当前实现[链接](https://github.com/vlbos/substrate-enterprise-sample/blob/orderbook/chain/pallets/orderbook/src/lib.rs)


#### Substrate Runtime Module:wyvern Exchange
需要按[wyvern-ethereum](https://github.com/ProjectOpenSea/wyvern-js/tree/master/src/wyvern-ethereum/contracts/exchange)
* Exchange.sol            
* ExchangeCore.sol        
* SaleKindInterface.sol
用户Rust Substrate Runtime Module实现对应功能
`hashOrder`,`requireValidOrder`,`validateOrderParameters`,`validateOrder`,`approveOrder`,`cancelOrder`


#### 交付

##### 示例
example for demonstration 
参考示例
https://substrate.dev/docs/en/tutorials/build-a-dapp/front-end

##### 文档
Documentation
参考示例
https://github.com/xz-cn/nft_parachain/blob/master/doc/demo_milestone1-2.md


#####  Docker file 
参考示例
https://github.com/xz-cn/nft_parachain/blob/master/Dockerfile


##### 其他NFT代码
opensea-js 实现使用NFT token，registry，erc721 等可以直接使用，不用开发，可能有版本编译问题
参考代码
https://github.com/xz-cn/nft_parachain
https://github.com/danforbes/pallet-nft
https://github.com/juniuszhou/nft-registry
https://github.com/usetech-llc/nft_pallet_v1
https://github.com/danforbes/substratekitties
https://github.com/danforbes/substratekitties
https://github.com/shawntabrizi/substrate-erc721


https://github.com/vlbos/substrate-collectables-workshop.git


