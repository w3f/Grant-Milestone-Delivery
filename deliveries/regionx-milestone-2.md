# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

- **Application Document:**: [Application](https://github.com/w3f/Grants-Program/blob/master/applications/RegionX.md)
-   **Milestone Number:**  2

**Context**

RegionX is a project dedicated to developing components for the new Agile Coretime model.

For our second milesotne we have implemented a Coretime marketplace which functions based on the dynamic pricing model we described.

We have also conducted extensive research to identify viable solutions for parachains to integrate with such a marketplace in a decentralized manner.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [CoreHub](https://github.com/RegionX-Labs/CoreHub/blob/master/LICENSE) [RegionX contracts](https://github.com/RegionX-Labs/RegionX/blob/main/LICENSE) | GPLV3 License | 
| **0b.**  | Documentation | [White Paper](https://github.com/RegionX-Labs/Docs/blob/main/RegionX-Core.pdf) [Wiki](https://regionx.gitbook.io/wiki) | The White Paper, along with the detailed information on the Wiki page, is intended to provide a complete overview of all aspects of the project. | 
| **0c.** | Testing and Testing Guide | [Simulated Environment](https://github.com/RegionX-Labs/Coretime-Mock) [Contract Tests](https://github.com/RegionX-Labs/RegionX?tab=readme-ov-file#3-develop) [Local frontend testing](https://github.com/RegionX-Labs/CoreHub?tab=readme-ov-file#set-up-development-environment) | We enhanced the Coretime-Mock project for more straightforward testing. The contracts have been tested using both integration and typescript e2e tests. | 
| **0d.** | Docker | [Frontend Docker](https://github.com/RegionX-Labs/CoreHub?tab=readme-ov-file#run-with-docker) |  | 
| **0e.** | Article | [Medium Article](https://medium.com/@regionx/the-regionx-coretime-market-17c713cad755) |  | 
| **1.** | Cross-chain Transfer UI | [Code](https://github.com/RegionX-Labs/CoreHub/tree/master/src/pages/transfer) | Transferring from Contracts chain to the Coretime chain currently doesn't work ([details](https://github.com/paritytech/polkadot-sdk/pull/3553)) | 
| **2.** | Coretime Market Dashboard UI | [Code](https://github.com/RegionX-Labs/CoreHub/blob/master/src/pages/market/marketplace.tsx)  | | 
| **3.** | Coretime Market contract | [Code](https://github.com/RegionX-Labs/RegionX/tree/main/contracts/coretime_market), [e2e-tests](https://github.com/RegionX-Labs/RegionX/tree/main/tests) |  | 
| **4.** | Coretime Market developer documentation | [Wiki: Integration with the market](https://regionx.gitbook.io/wiki/build/integration-with-the-coretime-market) |  | 

**Additional Information**

It is recommended to test contract-related functionalities using Astar's local chain, where both the contracts chain. In this case, when testing the frontend, the RPC endpoint for both the relay chain and contracts chain should be set to the same value.

NOTE: Listing regions on the market doesn't work with the Shibuya runtime for some reason; however, it functions correctly on the local chain.
