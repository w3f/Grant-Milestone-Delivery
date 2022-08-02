# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:**  [LINK](https://github.com/w3f/Grants-Program/blob/master/applications/ajuna_network_follow_up.md) 
* **Milestone Number:** 2

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [Apache 2.0 / MIT / Unlicense](https://github.com/ajuna-network/Ajuna.SDK/blob/main/LICENSE) | Done. |
| 0b. | Documentation | [General Ducumentation](https://github.com/ajuna-network/Open-Grants-Program/issues/24) | This an ongoing proccess and we are working on it. |
| 0c. | Testing Guide | [Unit-test coverage & Guide](https://github.com/ajuna-network/Open-Grants-Program/issues/25) | API Tests, and genereated Artefact testing. |
| 0d. | Article/Tutorial | [Article or Tutorial](https://github.com/ajuna-network/Open-Grants-Program/issues/26) | Already videos and tutorials in prep, see link. |
| 1. | Pallet | [Scheduled Events & Matchmaker](https://github.com/ajuna-network/Open-Grants-Program/issues/28) | Done. But not satisfying for Ajuna, reworking. |  
| 2. | Game Engine |
| 2a. | Game Engine | [Concept game engine and architecture](https://github.com/ajuna-network/Open-Grants-Program/issues/29) | We definitifly need to have a wiki! |
| 2b. | Game Engine | [Account, Player, Wallet, Mnemonic](https://github.com/ajuna-network/Open-Grants-Program/issues/30) | Done. |
| 2c. | Game Engine | [Asset Transfer, Buy/Sell, Auction](https://github.com/ajuna-network/Open-Grants-Program/issues/31) | Done. |
| 2d. | Game Engine | [GameEventSystem](https://github.com/ajuna-network/Open-Grants-Program/issues/32) | Done. |
| 2e. | Game Engine | [Subscription/Event Service](https://github.com/ajuna-network/Open-Grants-Program/issues/33) | Done. |
| 2f. | Game Engine | [Custom Game Logic layer](https://github.com/ajuna-network/Open-Grants-Program/issues/34) | No more manual work needed, with the generator. |
| 3. | Service Layer |
| 3a. | Service Layer | [Concept and Artefacts](https://github.com/ajuna-network/Open-Grants-Program/issues/35) | Done. |
| 3b. | Service Layer | [Global storage access](https://github.com/JetonNetwork/JtonNetwork.ServiceLayer/pull/1) | Done. | 
| 3c. | Service Layer | [All Pallets](https://github.com/ajuna-network/Open-Grants-Program/issues/37) | Done. | 
| 3c. | Service Layer | [Persistence layer](https://github.com/ajuna-network/Open-Grants-Program/issues/38) | Added Delegate for generic persistance layer, file, db, etc. | 
| 3d. | Service Layer | [Event Triggers](https://github.com/ajuna-network/SubstrateNET/blob/master/SubstrateNET.UnityDemo/Assets/Scripts/MenuController.cs) | All possible usages on storage changes are demoed in here, ongoing |
| 4. | Rest API | [Rest API](https://github.com/ajuna-network/Open-Grants-Program/issues/40) | Done. |
| 5. | Basic Bot | [Plays DOT4G](https://github.com/ajuna-network/Open-Grants-Program/issues/41) | Done, currently playing over Layer 1 and Layer 2 for fast state transition, overkill for the task, but necessary as a prototype for fast gameplay, which can compete with traditional gameplay while maintaining a decentralized environment. |
| 6. | Tutorial | [Tutorials](https://github.com/ajuna-network/Open-Grants-Program/issues/42) | This is an ongoing proccess, some parts are already in progress, but we need more time as it is part of Ajuna Networks delivery for game developers, will be finished with the last milestone. |
| 7. | Generator | [Ajuna.SDK](https://github.com/ajuna-network/Ajuna.SDK) | Done! Finally! |
| 7a. | MetaData | [Metadata](https://github.com/ajuna-network/Ajuna.NetApi/blob/031942faa11c49eb7cfb0a589422539bb6ad42f3/Ajuna.NetApi/SubstrateClient.cs#L73) | This is deprecated, no step in between, json file can still be obtained, by calling [substrateClientExt.MetaData.Serialize()](https://github.com/ajuna-network/Ajuna.NetApi/blob/031942faa11c49eb7cfb0a589422539bb6ad42f3/Ajuna.NetApi/Model/Meta/MetaData.cs#L32) |
| 7b. | Generator | [Ajuna.NetApiExt Generator, including all Types](https://github.com/ajuna-network/SubstrateNET/tree/master/SubstrateNET.NetApi/Generated/Model) | Done, including test of each type that is exposed in a storage with mocked data |
| 7c. | Generator | [Storage Generator, including all Pallets](https://github.com/ajuna-network/SubstrateNET/tree/master/SubstrateNET.NetApi/Generated/Model) | Done, same as previous as the types are part of the storage.
| 7d. | Generator | [Rest Generator, including all Pallets](https://github.com/ajuna-network/SubstrateNET/tree/master/SubstrateNET.RestService/Generated/Storage) | Done. |


# Ajuna.NetApi & Ajuna.SDK
| Project | Description                                                                                                                                                                                                                                                                               | NuGet 
|---|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
| Ajuna.NetApi | Ajuna .NET API Full-featured substrate node API                                                                                                                                                                                          | [![Nuget](https://img.shields.io/nuget/v/Ajuna.NetApi)](https://www.nuget.org/packages/Ajuna.NetApi/) |
| Ajuna.ServiceLayer | Implements the fundamental layer to access substrate node storage changes with a convenient API.                                                                                                                                                                                          | [![Nuget](https://img.shields.io/nuget/v/Ajuna.ServiceLayer)](https://www.nuget.org/packages/Ajuna.ServiceLayer/) |
| Ajuna.ServiceLayer.Model | Implements standard classes to easily share types between services and clients.                                                                                                                                                                                                           | [![Nuget](https://img.shields.io/nuget/v/Ajuna.ServiceLayer.Model)](https://www.nuget.org/packages/Ajuna.ServiceLayer.Model/) |
| Ajuna.AspNetCore | Implements extensions to the service layer that allow for quickly building a RESTful service to access your substrate node storage.                                                                                                                                                       | [![Nuget](https://img.shields.io/nuget/v/Ajuna.AspNetCore)](https://www.nuget.org/packages/Ajuna.AspNetCore/) |
| Ajuna.DotNet, Ajuna.DotNet.Template | .NET developer toolchain to scaffold actual projects such as a RESTful service including all the storage classes, types, and consumer clients. The projects generated with the generator toolchain are intended to be used for scaffolding and starting a substrate node service quickly. | [![Nuget](https://img.shields.io/nuget/v/Ajuna.DotNet)](https://www.nuget.org/packages/Ajuna.DotNet/) [![Nuget](https://img.shields.io/nuget/v/Ajuna.DotNet.Template)](https://www.nuget.org/packages/Ajuna.DotNet.Template/)|

