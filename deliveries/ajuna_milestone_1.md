# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:**  [LINK](https://github.com/w3f/Grants-Program/blob/master/applications/ajuna_network_follow_up.md) 
* **Milestone Number:** 1

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

# SubstrateNetApi (NETStandard2.0)
*Just another Substrate .NET API*  
[![Build status](https://ci.appveyor.com/api/projects/status/jsei7yv376en17rr?svg=true)](https://ci.appveyor.com/project/darkfriend77/substratenetapi)
[![nuget](https://img.shields.io/nuget/v/SubstrateNetApi)](https://ci.appveyor.com/project/darkfriend77/substratenetapi/build/artifacts)
[![GitHub issues](https://img.shields.io/github/issues/darkfriend77/SubstrateNetApi.svg)](https://github.com/darkfriend77/SubstrateNetApi/issues)
[![license](https://img.shields.io/github/license/darkfriend77/SubstrateNetApi)](https://github.com/darkfriend77/SubstrateNetApi/blob/origin/LICENSE)
[![contributors](https://img.shields.io/github/contributors/darkfriend77/SubstrateNetApi)](https://github.com/darkfriend77/SubstrateNetApi/graphs/contributors)

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LINK](https://github.com/JetonNetwork/SubstrateNetApi/blob/origin/LICENSE) | | 
| 0b. | Documentation | [LINK](https://github.com/JetonNetwork/SubstrateNetApi/wiki) | | 
| 0c. | Testing Guide | [LINK](https://github.com/JetonNetwork/SubstrateNetApi/wiki/Testing) | | 
| 0d. | Article/Tutorial | [LINK](https://medium.com/polkadot-play/project-introduction-681820988416) | | 
| 1. | Enhance API | | Generic handling of Types & Metadata, Custom Pallet & Type support | 
| 1a. | Enhance API | [LINK](https://github.com/JetonNetwork/Open-Grants-Program/issues/6#issuecomment-860226675) | Extend Generic Types for Vec & Option | 
| 1b. | Enhance API | [LINK](https://github.com/JetonNetwork/SubstrateNetApi/tree/origin/SubstrateNetApi/Model/Custom) | Implement Extension Custom Pallets & Types for PolkaDot, Kusama, DOTMog & UniqueNetwork | 
| 1c. | Enhance API | [LINK](https://github.com/JetonNetwork/SubstrateNetApi/blob/origin/SubstrateNetApi/TypeConverters/GenericTypeConverter.cs) | Generic Approach on Encode & Decode of Types | 
| 1d. | Enhance API | [LINK](https://github.com/JetonNetwork/Open-Grants-Program/issues/9#issuecomment-860231871) | Implement Rust special enums, who are used like structs | 
| 2. | Schnorrkel | [LINK1](https://github.com/dotmog/Schnorrkel),[LINK2](https://github.com/dotmog/Schnorrkel/blob/main/SchnorrkelTest/Schnorrkel.cs) | Reintegrate Schnorrkel, into SubstrateNetApi | 
| 2a. | Schnorrkel | [LINK1](https://www.nuget.org/packages/Schnorrkel/),[LINK2]() | Publish Schnorrkel project, with proper licensing as nuget package | 
| 2b. | Schnorrkel | [LINK1](https://github.com/JetonNetwork/SubstrateNetApi/commit/01abe3aa3d9e8aca0bf63a5c6f9bbfbd2eb780a0),[LINK2](https://github.com/JetonNetwork/SubstrateNetApi/blob/origin/SubstrateNetApiTest/Keys/Sr25519Tests.cs) | Implement SR25519, similar to ED25519 in SubstrateNetApi | 
| 3. | Mnemonic | [LINK](https://github.com/JetonNetwork/SubstrateNetApi/commit/01abe3aa3d9e8aca0bf63a5c6f9bbfbd2eb780a0) | Add mnemonic seed, in SubstrateNetApi | 
| 3a. | Mnemonic | [LINK](https://github.com/JetonNetwork/SubstrateNetApi/blob/503c3c1b73ab4a2e6fd6fcf3b653af0b5375da31/SubstrateNetWallet/Wallet.cs#L125) | Add mnemonic seed, recovery on lost password or wallet file | 
| 6. | Documentation | | | 
| 6a. | Inline Documentation | [LINK]() | Add inline documentation to make code more understandable | 
| 6b. | Wiki | [LINK1](https://github.com/JetonNetwork/SubstrateNetApi/wiki/Extension#extension),[LINK2](https://github.com/JetonNetwork/SubstrateNetApi/wiki/Types#custom-type),[LINK3](https://github.com/JetonNetwork/SubstrateNetApi/wiki/Usage#access-metadata-as-json-chain-specific) | Add a structured wiki, include components and workflows, ex. updateing blockchain metadata, implementing custom pallets, implementing custom types .... | 
| 6c. | Types | [LINK](https://github.com/JetonNetwork/SubstrateNetApi/wiki) | Wiki documentation on workflow for adding types and maintaining the api | 
| 6d. | Node | [LINK](https://github.com/JetonNetwork/SubstrateNetApi/wiki/Testing#node-template) | Add documentation how to setup live node-template testing, for extrinsic | 
| 6e. | Custom Test | [LINK](https://github.com/JetonNetwork/Open-Grants-Program/issues/20#issuecomment-879431163) | Add documentation for custom pallet and type testing | 
| 7. | Jeton Network | [LINK]() | **JetonNetwork has been rebranded to Polkadot Play** the apperance is underconstruction under www.polkadotplay.com | 
| 7a. | Jeton Network | [LINK](https://medium.polkadotplay.com/w3f-open-grant-substratenetapi-85701e9e6494) | Article and Blog about this open grant and the deliverables, at least one deep dive post into each milestone subject area, SubstrateNetApi, GameEngine, ServiceLayer & ConnectFour (if accpeted) | 

https://ci.appveyor.com/project/darkfriend77/substratenetapi
