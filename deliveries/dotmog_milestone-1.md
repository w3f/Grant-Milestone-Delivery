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

| Number | Deliverable | Link | Notes
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/LICENSE) |Apache 2.0 |
| 0b. | Documentation | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md) | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | [LINK](https://github.com/dotmog/SubstrateNetApi/tree/origin/SubstrateNetApiTest) |  The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md) | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Basic API | | Create a solid base for the API, to be reusable, easy to use and simple to maintain |
| 1a. | MetaData Model | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/SubstrateNetApi/MetaDataParser.cs) | read & parse metadata v11, v12 to json, [DOTMog.json](https://github.com/dotmog/SubstrateNetApi/blob/origin/DemoApiTest/DOTMogNET.json) |  
| 1b. | Connection | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/9bea9a4dacda64d83d7dc9606f6a4e5c9af9fd2b/SubstrateNetApi/SubstrateClient.cs#L147) | Connect & disconnect to node, with StreamJsonRpc, avoid reinventing the wheel where possible |  
| 1c. | Class Model | [LINK](https://github.com/dotmog/SubstrateNetApi/tree/origin/SubstrateNetApi/Model) | Create basic class model, for the API |  
| 1d. | Logging | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/SubstrateNetApi/SubstrateClient.cs#L34) | Basic NLog implementation, make sure it's usable with Unity3D |  
| 1e. | Errorhandling | [LINK](https://github.com/dotmog/SubstrateNetApi/tree/origin/SubstrateNetApi/Exceptions) | Implement specific errorhandling | 
| 1f. | Unit Tests | [LINK](https://github.com/dotmog/SubstrateNetApi/tree/origin/SubstrateNetApiTest/ClientTests) | Create unit test cases | 
| 2. | Storage Call | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/9bea9a4dacda64d83d7dc9606f6a4e5c9af9fd2b/SubstrateNetApi/SubstrateClient.cs#L255) | Implement basic storage call | 
| 2a. | Generic Call | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/9bea9a4dacda64d83d7dc9606f6a4e5c9af9fd2b/SubstrateNetApi/SubstrateClient.cs#L276) | Implement generic type read from metadata |
| 2b. | Type Converter | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/9bea9a4dacda64d83d7dc9606f6a4e5c9af9fd2b/SubstrateNetApi/SubstrateClient.cs#L71) | Add type converter logic for basic types |
| 2c. | Unit Tests | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/SubstrateNetApiTest/TypeConverters/TypeConverterTests.cs) | Create unit test cases |
| 3. | Refactoring | done | First Round of refactoring and restructure the API |
| 4. | Submit Extrinsic | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/9bea9a4dacda64d83d7dc9606f6a4e5c9af9fd2b/SubstrateNetApi/Modules/Author.cs#L40) | Implement basic extrinsic submits | 
| 4a. | Generic Call | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/SubstrateNetApi/Model/Calls/GenericExtrinsicCall.cs) | Implement typed extrinsic submits, to make access easier |
| 4b. | Encoding | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/SubstrateNetApi/Model/Types/IType.cs) | Add type encoding to the type converter class |
| 4c. | Unit Tests | [LINK](https://github.com/dotmog/SubstrateNetApi/tree/origin/SubstrateNetApiTest/Extrinsic) | Create unit test cases, with payload testing signed and unsigned |
| 5. | Testing | [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/DemoApiTest/Program.cs) | Add overall tests including connection to a node | 

https://ci.appveyor.com/project/darkfriend77/substratenetapi
