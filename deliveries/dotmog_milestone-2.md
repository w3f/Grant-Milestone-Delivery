# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/265 
* **Milestone Number:** 2

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

# SubstrateNetApi (NETStandard2.0)
*Just another Substrate .NET API*  
[![Build status](https://ci.appveyor.com/api/projects/status/jsei7yv376en17rr?svg=true)](https://ci.appveyor.com/project/darkfriend77/substratenetapi)
[![nuget](https://img.shields.io/nuget/v/SubstrateNetApi)](https://ci.appveyor.com/project/darkfriend77/substratenetapi/build/artifacts)
[![GitHub issues](https://img.shields.io/github/issues/darkfriend77/SubstrateNetApi.svg)](https://github.com/darkfriend77/SubstrateNetApi/issues)
[![license](https://img.shields.io/github/license/darkfriend77/SubstrateNetApi)](https://github.com/darkfriend77/SubstrateNetApi/blob/origin/LICENSE)
[![contributors](https://img.shields.io/github/contributors/darkfriend77/SubstrateNetApi)](https://github.com/darkfriend77/SubstrateNetApi/graphs/contributors)

**Milestone 2** (tag): https://github.com/dotmog/SubstrateNetApi/releases/tag/v1.0.3
**Milestone 2.1 (Changes Requested)** (tag): tbd

| Number | Deliverable | Link | Notes
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/LICENSE) |Apache 2.0 |
| 0b. | Documentation | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md) | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md#testing-guide) |  The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md) | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Basic API | done | Second Round of refactoring and restructure the API |
| 2. | Subscriptions | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/983b77efa4460eae413c52fe284c31123bd5a6c7/SubstrateNetApi/Modules/State.cs#L100) | Implement basic subscriptions | 
| 2a. | Subscriptions | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/SubstrateNetApi/SubscriptionListener.cs) | Implement generic Callback for handling multiple subscriptions with subscriptionId |
| 2b. | Subscriptions | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/983b77efa4460eae413c52fe284c31123bd5a6c7/SubstrateNetApi/Modules/State.cs#L49) | Added storage subscriptions, with paging |
| 2c. | Unit Tests | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/SubstrateNetApiTest/Subscription/SubscriptionTest.cs) | Create unit test for subscriptions |
| 3. | Refactoring | done | Refactor type converters to be generic and reusable inheriting from IType, BaseType & Struct Type |
| 4. | Pallet | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/9bea9a4dacda64d83d7dc9606f6a4e5c9af9fd2b/SubstrateNetApi/Modules/Author.cs#L40) | DotMogPallet add base functionality, MogwaiStruct, AccountConfig & BreedType | 
| 5. | Pallet | [LINK](https://github.com/dotmog/substrate/tree/dotmog_v3.0.0/bin/node/pallets/dotmog/src) | DotMogPallet add pairing algorithm and MogwaiBios |
| 6. | Update | [LINK](https://github.com/dotmog/substrate/commit/92a898c5f9f92d59cf10980f9f1623c70ffef39d#diff-572d688bd26b0a2a2fa69c889d99057d0fa1c21dcdaa4e345f5733b61a90336d) | Update to Substrate v3.0/0.9 – Apollo 14, adjust types |

https://ci.appveyor.com/project/darkfriend77/substratenetapi

Sidenote: We are currently refactoring our closed source gameEngine to a domain driven design, we will reapply for a follow up grant which will contain the API and an open sourced GameEngine, ready to use in unity as an free unity asset.
