# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/265 
* **Milestone Number:** 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

# SubstrateNetApi (NETStandard2.0)
*Just another Substrate .NET API*  
[![Build status](https://ci.appveyor.com/api/projects/status/jsei7yv376en17rr?svg=true)](https://ci.appveyor.com/project/darkfriend77/substratenetapi)
[![nuget](https://img.shields.io/nuget/v/SubstrateNetApi)](https://ci.appveyor.com/project/darkfriend77/substratenetapi/build/artifacts)
[![GitHub issues](https://img.shields.io/github/issues/darkfriend77/SubstrateNetApi.svg)](https://github.com/darkfriend77/SubstrateNetApi/issues)
[![license](https://img.shields.io/github/license/darkfriend77/SubstrateNetApi)](https://github.com/darkfriend77/SubstrateNetApi/blob/origin/LICENSE)
[![contributors](https://img.shields.io/github/contributors/darkfriend77/SubstrateNetApi)](https://github.com/darkfriend77/SubstrateNetApi/graphs/contributors)

**Milestone 1** (tag): https://github.com/dotmog/SubstrateNetApi/releases/tag/v1.0.1
**Milestone 1.1 (Changes Requested)** (tag): https://github.com/dotmog/SubstrateNetApi/releases/tag/v1.0.2

| Number | Deliverable | Link | Notes
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/LICENSE) |Apache 2.0 |
| 0b. | Documentation | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md) | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md#testing-guide) |  The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md) | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Basic API | | Second Round of refactoring and restructure the API |
| 2. | Subscriptions | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/9bea9a4dacda64d83d7dc9606f6a4e5c9af9fd2b/SubstrateNetApi/SubstrateClient.cs#L255) | Implement basic subscriptions | 
| 2a. | Subscriptions | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/9bea9a4dacda64d83d7dc9606f6a4e5c9af9fd2b/SubstrateNetApi/SubstrateClient.cs#L276) | Implement generic Callback for handling multiple subscriptions with subscriptionId |
| 2b. | Subscriptions | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/9bea9a4dacda64d83d7dc9606f6a4e5c9af9fd2b/SubstrateNetApi/SubstrateClient.cs#L71) | Added storage subscriptions, with paging |
| 2c. | Unit Tests | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/SubstrateNetApiTest/TypeConverters/TypeConverterTests.cs) | Create unit test for subscriptions |
| 3. | Refactoring | done | Refactor type converters to be generic and reusable inheriting from IType, BaseType & Struct Type |
| 4. | Pallet | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/9bea9a4dacda64d83d7dc9606f6a4e5c9af9fd2b/SubstrateNetApi/Modules/Author.cs#L40) | DotMogPallet add base functionality, MogwaiStruct, AccountConfig & BreedType | 
| 5. | Pallet | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/SubstrateNetApi/Model/Calls/GenericExtrinsicCall.cs) | DotMogPallet add pairing algorithm and MogwaiBios |
| 6. | Update | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/SubstrateNetApi/Model/Types/IType.cs) | Update to Substrate v3.0/0.9 – Apollo 14, adjust types |

https://ci.appveyor.com/project/darkfriend77/substratenetapi
