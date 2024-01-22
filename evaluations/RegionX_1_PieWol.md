# Evaluation


- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/pull/2080 
- **Milestone:** 1
- **Kusama Identity:** [HHEEgVzcqL3kCXgsxSfJMbsTy8dxoTctuXtpY94n4s8F4pS](https://kusama.subscan.io/account/HHEEgVzcqL3kCXgsxSfJMbsTy8dxoTctuXtpY94n4s8F4pS)
- **Previously successfully merged evaluation:** Calamar M3


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- |------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [CoreHub](https://github.com/RegionX-Labs/CoreHub/blob/master/LICENSE) [RegionX contracts](https://github.com/RegionX-Labs/RegionX/blob/main/LICENSE)  | GPLV3 License | 
| **0b.**  | Documentation | <ul><li>[x] </li></ul> | [Article](https://medium.com/@regionx/regionx-corehub-a-central-hub-for-managing-polkadot-blockspace-3f8715add25a) [Wiki](https://regionx.gitbook.io/wiki) | | 
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Simulated Environment](https://github.com/RegionX-Labs/Coretime-Mock) [Testing Locally](https://github.com/RegionX-Labs/CoreHub?tab=readme-ov-file#set-up-development-environment) |  | 
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Frontend Docker](https://github.com/RegionX-Labs/CoreHub?tab=readme-ov-file#run-with-docker) |  | 
| **0e.** | Article | <ul><li>[x] </li></ul> | [Medium Article](https://medium.com/@regionx/regionx-corehub-a-central-hub-for-managing-polkadot-blockspace-3f8715add25a) |  | 
| **1.** | Mock Coretime Parachain runtime | <ul><li>[x] </li></ul> | [Coretime-Mock](https://github.com/RegionX-Labs/Coretime-Mock) | All code related to local testing is located in the Coretime-Mock directory. | 
| **2.** | Simulated Local Network | <ul><li>[x] </li></ul> | [Coretime-Mock](https://github.com/RegionX-Labs/Coretime-Mock) | | 
| **3.** | Coretime UI | <ul><li>[x] </li></ul> | [CoreHub](https://github.com/RegionX-Labs/CoreHub) | | 
| **4.** | Cross-chain Regions | <ul><li>[x] </li></ul> | [XcRegions](https://github.com/RegionX-Labs/RegionX/tree/main/contracts/xc-regions) | | 
| **5.** | xcRegion developer documentation | <ul><li>[x] </li></ul> | [Github Docs](https://github.com/RegionX-Labs/RegionX?tab=readme-ov-file#21-cross-chain-regions) [Wiki: Cross-chain regions](https://regionx.gitbook.io/wiki/advanced/cross-chain-regions) [Wiki: Integration with xcRegions](https://regionx.gitbook.io/wiki/build/integration-with-xcregions) | |

## General Notes
The docs you wrote including the wiki and general readmes are very easy to follow and provide a good intro to this attempt to introduce more possibilities for regions. Also the additional articles you linked are very helpful for understanding this matter as a whole. The article is good.


## xc-region contracts
The contracts and the tests look good. Everything worked. Be it the e2e testing with the provided astar runtime or the unit tests. Deployment via the zombienet init script worked.

## CoreHub
All the functionality shown in the application seems to be there. I tested it with the fully initialized CoreTime-Mock. Every feature in the region management worked as shown in the application. Transfers aswell. The Docker image works perfectly fine.

## CoreTime-Mock
The zombienet environment worked well given your scripts and instructions. I appreciate your quick fixes and responses to get the initial problems resolved. 




