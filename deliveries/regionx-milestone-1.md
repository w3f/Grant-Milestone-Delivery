# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

- **Application Document:** [Application](https://github.com/w3f/Grants-Program/blob/master/applications/RegionX.md)
-   **Milestone Number:**  1

**Context**

RegionX is a project dedicated to developing components for the new Agile Coretime model.

As part of our first milestone, we have developed two main components: the XcRegions contract and the CoreHub UI, referred to in the application as 'Coretime UI'.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [CoreHub](https://github.com/RegionX-Labs/CoreHub/blob/master/LICENSE) [RegionX contracts](https://github.com/RegionX-Labs/RegionX/blob/main/LICENSE) | GPLV3 License | 
| **0b.**  | Documentation | [Article](https://medium.com/@regionx/regionx-corehub-a-central-hub-for-managing-polkadot-blockspace-3f8715add25a) [Wiki](https://regionx.gitbook.io/wiki) | The developed UI is explained in the Medium article. We have additionally also provided documentation about other aspects of the project on our Wiki page. | 
| **0c.** | Testing and Testing Guide | [Simulated Environment](https://github.com/RegionX-Labs/Coretime-Mock) [Testing Locally](https://github.com/RegionX-Labs/CoreHub?tab=readme-ov-file#set-up-development-environment) | We developed the Coretime-Mock project to facilitate easy testing of all the frontend and contract code. | 
| **0d.** | Docker | [Frontend Docker](https://github.com/RegionX-Labs/CoreHub?tab=readme-ov-file#run-with-docker) |  | 
| **0e.** | Article | [Medium Article](https://medium.com/@regionx/regionx-corehub-a-central-hub-for-managing-polkadot-blockspace-3f8715add25a) |  | 
| **1.** | Mock Coretime Parachain runtime | [Coretime-Mock](https://github.com/RegionX-Labs/Coretime-Mock) | All code related to local testing is located in the Coretime-Mock directory. Initially, we began by developing a custom mock runtime([link](https://github.com/RegionX-Labs/Coretime-Mock/pull/11)). However, in the meantime, the actual Coretime chain has been implemented, so we now utilize that. | 
| **2.** | Simulated Local Network | [Coretime-Mock](https://github.com/RegionX-Labs/Coretime-Mock)  | We also added support for testing with Chopsticks, which can be a very convenient method for testing parts of the frontend. | 
| **3.** | Coretime UI | [CoreHub](https://github.com/RegionX-Labs/CoreHub) | Now reffered to as CoreHub. NOTE for testing: The broker pallet has a bug with interlacing: https://github.com/paritytech/polkadot-sdk/pull/2811  | 
| **4.** | Cross-chain Regions | [XcRegions](https://github.com/RegionX-Labs/RegionX/tree/main/contracts/xc-regions) | The code for the xc-regions contract. | 
| **5.** | xcRegion developer documentation | [Github Docs](https://github.com/RegionX-Labs/RegionX?tab=readme-ov-file#21-cross-chain-regions) [Wiki: Cross-chain regions](https://regionx.gitbook.io/wiki/advanced/cross-chain-regions) [Wiki: Integration with xcRegions](https://regionx.gitbook.io/wiki/build/integration-with-xcregions) |  | 
