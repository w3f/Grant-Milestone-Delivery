# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/openbrush-follow-up-2.md
* **Milestone Number:** 7

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/727-Ventures/openbrush-contracts/blob/main/LICENSE | | 
| 0b.  | Documentation | https://github.com/727-Ventures/openbrush-contracts/tree/main/examples/psp22_pallet | The README describes the flow of `PSP22Pallet` smart contract and how it connects smart contract with the `pallet-assets` and standardizes assets from `pallet-assets` | 
| 1.  | Implement `AssetPallet` chain extension on substrate level to work with `pallet-assets` in runtime | https://github.com/727-Ventures/pallet-assets-chain-extension/blob/main/src/substrate.rs |  | 
| 2.  | Implement AssetPallet chain extension in OpenBrush | https://github.com/727-Ventures/pallet-assets-chain-extension/blob/main/src/ink.rs | You can build an ink! smart contract with this chain extension to allow communication of your smart contract with pallet-asset | 
| 3.  | Implement PSP22 with that chain extension in OpenBrush | https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/src/token/psp22_pallet | PSP22Pallet standard with all PSP22 extensions | 
| 4.  | Create standards for `AssetPallet` Chain Extension and for `PSP22Asset` extension | https://github.com/paritytech/chainextension-registry | The ink! team created a chain extension registry, and we registered the `pallet-assets` chain extension there. | 
| 5.  | Advanced ink! unit testing framework | https://github.com/paritytech/ink/pull/1589 | We created a pull request to ink! repository with the advanced ink! unit testing. |
| 6.  | Support of XCM and cross transferring of `PSP22` tokens | https://medium.com/@krikolkk/xcm-and-cross-chain-asset-transferring-6922a0ba209 | The `pallet-assets` supports XCM, we created an article on how this works, and a guide how to do it. |
| 7.  | Add support for ink! 4.0 | https://github.com/727-Ventures/openbrush-contracts/releases/tag/3.0.0-beta | We released a new version of OpenBrush, which supports the latest ink! 4 version |
| 8a.  | Marketing - Create 2 educational video for OpenBrush/ink! | https://www.youtube.com/watch?v=Rp5XvMM7ba8 https://www.youtube.com/watch?v=JDua1vwBR5I | We started a tutorial series on ink! smart-contracts development, with two entry point videos: an introduction to ink! and the requirements to work with ink!, and a tutorial on how to create a `PSP22` smart contract. |
| 8b.  | Marketing - The website upgrade | https://github.com/727-Ventures/openbrush-website/pull/56 | We did some SEO in this PR of OpenBrush website.  |

Testing this delivery:
- Deliverable 0b.:
  - The whole flow of the `PSP22Pallet` and `pallet-assets` is described in the README provided
- Deliverables 1,2,3,4:
  - The goal of these deliverables is usage of `pallet-assets` chain extension within ink! smart contracts to allow communication of the smart contract with the `pallet-assets`
  - We achieve this by implementing the substrate part of our chain extension in the node, and implementing the ink! part of the chain extension in our smart contract
  - The substrate contracts node (which you can find [here](https://github.com/paritytech/substrate-contracts-node/releases/tag/v0.23.0) already implements the substrate part of the `pallet-assets` chain extension (Deliverable 1), so we can use this node to test this functionality
  - In OpenBrush we implemented a smart contract with the ink! part of the chain extension (Deliverables 2, 3). You can deploy this contract on your local substrate-contracts-node and test its functionality, or just automatically test it with `npm run test` (the tests `MY_PSP22_PALLET`, `MY_PSP22_PALLET_BURNABLE`, `MY_PSP22_METADATA` and `MY_PSP22_PALLET_MINTABLE` are testing the pallet asset chain extension functionality)
  - ink! team created a [chain-extension registry](https://github.com/paritytech/chainextension-registry) which standardizes the chain extensions. Our team registered the pallet-assets chain extension in [this commit](https://github.com/paritytech/chainextension-registry/commit/5d4d180e62d0cc8df01093c2440fb13521722688) (completing Deliverable 4)
- Deliverable 5:
  - Our team created a [PR to ink! repository](https://github.com/paritytech/ink/pull/1589) with this functionality. We also added [test](https://github.com/paritytech/ink/blob/d5524bda1d8ffb558c5f83f1a8f82749730b8e52/examples/delegator/adder/lib.rs) which tests the cross-contract calls, you can test it by running the ink! unit test with `cargo test` on [these contracts](https://github.com/paritytech/ink/tree/d5524bda1d8ffb558c5f83f1a8f82749730b8e52/examples/reentrancy). This functionality works on-chain, the point of the deliverable was adding this utility to off-chain testing environment, so this is the only way you can test this deliverable.
- Delivearble 6:
  - The `pallet-assets` already supports XCM, that's why we created an article on how this works, and a guide how to do it on medium.
- Deliverable 7:
  - OpenBrush now uses ink! 4.0.0-beta, therefore testing the OpenBrush repository either with `npm run test` (integration tests) or `RUSTFLAGS="-D warnings" cargo +nightly test --workspace --features test-all -- --test-threads=10` (unit tests) will show the results of this deliverable (everything works). You can even deploy some of the OpenBrush smart contracts on your local testing node and test its functionality to see that it works.
- Deliverable 8a.:
  - We created the two tutorials mentioned. This is just the beginning of our tutorial series and there will be more in the future.
- Deliverable 8b.:
  - We added some SEO to our website, however it may take some time to show results.
- Notes to testing:
  - Please, make sure that before any tests you meet the following requirements:
    - You have installed the `cargo-contract` version `2.0.0-beta.1` (`cargo install cargo-contract --version 2.0.0-beta.1`)
    - You have added the nightly toolchain of rust (`rustup toolchain add nightly`)
  - When running the integration tests, please make sure you are running a local testing node
    - We recommend (the default) latest version (0.23) of `substrate-contracts-node`. You can find the node [here](https://github.com/paritytech/substrate-contracts-node/releases/tag/v0.23.0).
