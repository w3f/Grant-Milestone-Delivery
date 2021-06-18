# Evaluation

- **Status:** Accepted
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/265
- **Milestone:** 1
- **Previously successfully merged evaluation:** all by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/blob/v1.0.2/LICENSE) | |
| 0b. | Documentation |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/blob/v1.0.2/README.md) | Could be expanded, but perfectly fine for the scope of this grant |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/blob/v1.0.2/README.md#testing-guide) | Added per request | 
| 0d. | Article/Tutorial |<ul><li>[x] </li></ul>| | Recommending for a later milestone
| 1. | Basic API |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/tree/v1.0.2/SubstrateNetApi) | |
| -- 1a. | MetaData Model |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/blob/v1.0.2/SubstrateNetApi/MetaDataParser.cs) |  |  
| -- 1b. | Connection |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/blob/v1.0.2/SubstrateNetApi/SubstrateClient.cs#L147) |  |  
| -- 1c. | Class Model |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/tree/v1.0.2/SubstrateNetApi/Model) | |  
| -- 1d. | Logging |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/blob/v1.0.2/SubstrateNetApi/SubstrateClient.cs#L34) | |  
| -- 1e. | Errorhandling |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/tree/v1.0.2/SubstrateNetApi/Exceptions) | Error handling partially handled only through logger. | 
| -- 1f. | Unit Tests |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/tree/v1.0.2/SubstrateNetApiTest/ClientTests) | | 
| 2. | Storage Call |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/blob/v1.0.2/SubstrateNetApi/SubstrateClient.cs#L255) | | 
| -- 2a. | Generic Call |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/blob/v1.0.2/SubstrateNetApi/SubstrateClient.cs#L276) | |
| -- 2b. | Type Converter |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/blob/v1.0.2/SubstrateNetApi/SubstrateClient.cs#L71) | |
| -- 2c. | Unit Tests |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/blob/v1.0.2/SubstrateNetApiTest/TypeConverters/TypeConverterTests.cs) | |
| 3. | Refactoring |<ul><li>[x] </li></ul>| | Ongoing work, team is continuously active on GitHub |
| 4. | Submit Extrinsic |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/blob/9bea9a4dacda64d83d7dc9606f6a4e5c9af9fd2b/SubstrateNetApi/Modules/Author.cs#L40) |  | 
| -- 4a. | Generic Call |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/SubstrateNetApi/Model/Calls/GenericExtrinsicCall.cs) |  |
| -- 4b. | Encoding |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/SubstrateNetApi/Model/Types/IType.cs) |  |
| -- 4c. | Unit Tests |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/tree/origin/SubstrateNetApiTest/Extrinsic) |  |
| 5. | Testing |<ul><li>[x] </li></ul>| [LINK](https://github.com/dotmog/SubstrateNetApi/blob/origin/DemoApiTest/Program.cs) | 65% coverage for SubstrateNetApi. Tests partially modified to connect to Polkadot RPC node | 

## General Notes

Hard to believe this is just a hobby project. Team have put a lot of work into the project and are interested in applying for a grant to develop it further.

Some refactoring and better documentation needed, plus more decoupling from their application but this is all definitely outside the scope of this grant.

Improvements listed under the [release notes](https://github.com/dotmog/SubstrateNetApi/releases/tag/v1.0.2) were made in response to feedback.
