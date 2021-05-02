# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/265 
* **Milestone Number:** 3

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

# SubstrateNetApi (NETStandard2.0)
*Just another Substrate .NET API*  
[![Build status](https://ci.appveyor.com/api/projects/status/jsei7yv376en17rr?svg=true)](https://ci.appveyor.com/project/darkfriend77/substratenetapi)
[![nuget](https://img.shields.io/nuget/v/SubstrateNetApi)](https://ci.appveyor.com/project/darkfriend77/substratenetapi/build/artifacts)
[![GitHub issues](https://img.shields.io/github/issues/darkfriend77/SubstrateNetApi.svg)](https://github.com/darkfriend77/SubstrateNetApi/issues)
[![license](https://img.shields.io/github/license/darkfriend77/SubstrateNetApi)](https://github.com/darkfriend77/SubstrateNetApi/blob/origin/LICENSE)
[![contributors](https://img.shields.io/github/contributors/darkfriend77/SubstrateNetApi)](https://github.com/darkfriend77/SubstrateNetApi/graphs/contributors)

**Milestone 3** (tag): ...

**Milestone 3.1 (Changes Requested)** (tag): tbd

| Number | Deliverable | Link | Notes
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/LICENSE) |Apache 2.0 |
| 0b. | Documentation | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md) | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md#testing-guide) |  The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md) | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Wallet | [LINK](https://github.com/dotmog/SubstrateNetApi/tree/origin/SubstrateNetWallet) | Add basic wallet functions to be used in the game |
| 1a. | Wallet | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/SubstrateNetWallet/ManagedAes.cs) | AES wallet file encryption, make sure that it is usable on Unity3D Mobile deployments, Android & iOs. |
| 1b. | Wallet | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/3d2a4f42260baac8961bf887db2cb9f6e1a3df77/SubstrateNetWallet/Wallet.cs#L175) | Wallet unlock and create, subscription to account and updates |
| 1c. | Wallet | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/3d2a4f42260baac8961bf887db2cb9f6e1a3df77/SubstrateNetWallet/Wallet.cs#L269) | Add events so game can register to changes, like mogwai creation, or extrinsic finalization |
| 2. | Examples | [LINK](https://github.com/dotmog/Unity3DExample) | Provide basic examples of Unity3D application using the SubstrateNetApi |
| 2a. | Examples | [LINK](https://github.com/dotmog/Unity3DExample/blob/master/Assets/Scripts/MetaDataCrawler.cs#L11) | Simple connection example | 
| 2b. | Examples | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/3d2a4f42260baac8961bf887db2cb9f6e1a3df77/SubstrateNetWalletTest/WalletTest.cs#L175) | Small wallet example |
| 3. | Documentation | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md) | Add documentation to the usage of the SubstrateNetApi |

https://ci.appveyor.com/project/darkfriend77/substratenetapi

Sidenote: We are currently refactoring our closed source GameEngine to a domain driven design, we will reapply for a follow up grant which will contain the API and an open sourced GameEngine, ready to use in unity as an free unity asset.
