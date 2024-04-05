# Milestone Delivery :mailbox:


**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Futur Protocol](https://github.com/RELAI-Network/Grants-Program/blob/fd99d75e580c84560d8099cb404d4b10b48295b4/applications/FuturFusion.md)
* **Milestone Number:** 1

**Deliverables**



| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [Apache 2.0](https://github.com/RELAI-Network/relai-network/blob/main/LICENSE) |  	Apache License 2.0 | 
| 0b. | Documentation | [Substrate Documentation](https://github.com/RELAI-Network/relai-network) | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. | 
| 0c. | Testing and Testing Guide | [Relai Network Pallets](https://github.com/RELAI-Network/relai-network/blob/main/README.md#testing)| Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0d. | Articles |[Futur Protocol Stack](https://blog.relai.network/futur-protocol-stack)<br/> [Futur Console Account Creation](https://blog.relai.network/futur-console-account-creation-relai-network-devnet)<br/> [Futur Console Book Publishing](https://blog.relai.network/futur-console-book-publication-relai-network-devnet) <br/> [Futur Console App/Game Publishing](https://blog.relai.network/futur-console-appgame-creation-relai-network-devnet)<br/> [Futur Store App Guide](https://blog.relai.network/futur-store-app-devnet-relai-network)| Articles explaining the FuturStore stack will be published. There will be article for FuturStore users and also for App developers wanting to submit apps on the store. |
| 1 | Futur Store Mobile app |[Futur Store mobile app](https://github.com/RELAI-Network/futurstore-app)|A Flutter mobile app store, displays catalog of published apps. Users can browse and install available apps.|
| 2 | Futur Protocol Runtime modules |[Futur-Asset-Reg and Futur-Creators-Reg](https://github.com/RELAI-Network/relai-network/tree/main/pallets)|`Futur-Creators-Reg` manages the registration of developers and book publishers with the following extrinsics: `SetRegistrationFee` `RegisterDev`,`UnRegisterDev` <br/>`Futur-Assets-Reg` manages the publication of assets apps, games or book with the following extrinsics: `SubmitAsset`,`UpdateAsset`, `BuyAsset`,`PublishAsset`, ,`UnPublishAsset`|
| 3 | SAST/DAST module |[Mobsf](https://mobsf.github.io/docs)|Static and Dynamic Analysis component for scanning submited apks for checking security. We have a server instance running Mobsf exposing API|   
| 4 | Futur Console |[Futur Console](https://github.com/RELAI-Network/futur-console-react)|Web portal for app submission and management (similar to google play console) built in React|   
| 5 | Backend Server|[Cloud Functions](https://github.com/RELAI-Network/relai-fn)|Cloud Functions serving API endpoint, ex: verifying review signatures, upload asset to IPFS,...| 
| 6 | Storage Layer|`IPFS via Crust` and `Firebase Storage`|IPFS via Crust Network Gateway and Firebase Storage | 
| 7 | Kaggu|[Kaggu Ebook Reader](https://github.com/RELAI-Network/kaggu)| Ebook Reader for the ebooks purchased through Futur Store app | 


**Additional Information**
> Any further comments on the milestone that you would like to share with us.
