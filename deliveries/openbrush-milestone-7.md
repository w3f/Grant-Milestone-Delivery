# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/openbrush-follow-up-2.md
* **Milestone Number:** 7

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/727-Ventures/openbrush-contracts/blob/main/LICENSE | | 
| 0b.  | Documentation | https://github.com/727-Ventures/openbrush-contracts/tree/main/examples/psp22_pallet | | 
| 1.  | Implement `AssetPallet` chain extension on substrate level to work with `pallet-assets` in runtime | https://github.com/727-Ventures/pallet-assets-chain-extension/blob/main/src/substrate.rs |  | 
| 2.  | Implement AssetPallet chain extension in OpenBrush | https://github.com/727-Ventures/pallet-assets-chain-extension/blob/main/src/ink.rs | You can build an ink! smart contract with this chain extension to allow communication of your smart contract with pallet-asset | 
| 3.  | Implement PSP22 with that chain extension in OpenBrush | https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/src/token/psp22_pallet | PSP22Pallet standard with all PSP22 extensions | 
| 4.  | Create standards for `AssetPallet` Chain Extension and for `PSP22Asset` extension | https://github.com/paritytech/chainextension-registry | The ink! team created a chain extension registry, and we registered the `pallet-assets` chain extension there. | 
| 5.  | Advanced ink! unit testing framework | https://github.com/paritytech/ink/pull/1589 | We created a pull request to ink! repository with the advanced ink! unit testing. |
| 6.  | Support of XCM and cross transferring of `PSP22` tokens | https://medium.com/@krikolkk/xcm-and-cross-chain-asset-transferring-6922a0ba209 | The `pallet-assets` supports XCM, we created an article on how this works, and a guide how to do it. |
| 7.  | Add support for ink! 4.0 | https://github.com/727-Ventures/openbrush-contracts/releases/tag/3.0.0-beta | We released a new version of OpenBrush, which supports the latest ink! 4 version |
| 8a.  | Marketing - Create 2 educational video for OpenBrush/ink! | https://www.youtube.com/watch?v=Rp5XvMM7ba8 https://www.youtube.com/watch?v=JDua1vwBR5I | We started a tutorial series on ink! smart-contracts development, with two entry point videos: an introduction to ink! and the requirements to work with ink!, and a tutorial on how to create a `PSP22` smart contract. |
| 8b.  | Marketing - The website upgrade |  | We added some SEO to the openbrush website. However, the repository is private and it may take some time to show result. |
