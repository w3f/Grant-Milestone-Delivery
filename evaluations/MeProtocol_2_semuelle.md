# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/MeProtocol.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[ ] </li></ul> | [Me-Protocol/rusty-protocol-v0.1](https://github.com/Me-Protocol/rusty-protocol-v0.1/blob/31179935aa1c4e32b635ecb1b669786c21d95f91/license.md), Me-Protocol/Rusty-Protocol-Backend-Portal | GPLv3 |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | link | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user, brand or third party application can interact with our protocol for the various specified use cases |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | link | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | <ul><li>[ ] </li></ul> | link | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | <ul><li>[ ] </li></ul> | link | We will publish a **lite paper** to describe the architecture and its implementation
| 1. | Build out the Protocol Access Component | <ul><li>[ ] </li></ul> | link | We will implement the Access Component, which consists of contract routers that abstract the core protocol services and provide functions that brands, customers, protocol admins, and third-party applications can use to safely interact with the protocol. These are similar to the Uniswap router contracts, but instead of just one general contract, the contracts are split into Customer, Brand, Admin, and in the future Third-Party Contracts, based on the role of the requestor. A brand router, for example, will expose the functions that allow a brand to create a reward (using the reward factory), mint additional rewards or burn existing rewards, add or remove rewards from the liquidity pool, top up fee wallet, etc. <br/> **Languages and framework:** Ink! |
| 2. | Build out the lens component | <ul><li>[ ] </li></ul> | link | We will implement the Lens Component that provides introspection into the protocol. This component is comprised of the Secretary and Loupe Modules. The Secretary Contract would provide business information like how many brands are connected to the protocol, total loyalty rewards in pools, etc. The Loupe Contract provides protocol architecture information, such as what functions the protocol supports and where these functions are deployed (it is an implementation of the EIP2535 DiamondLoupe Contract) etc. <br/> **Languages and framework:** Ink!| 
| 3. | Building out the Governance Component | <ul><li>[ ] </li></ul> | link | We will implement the Governor Facet that will help to manage access control across the protocol and also help to manage governance rules for future proposals and updates. <br/> **Languages and framework:** Ink!| 
| 4. | Build out the Backend Service Components for the Me App | <ul><li>[ ] </li></ul> | link | We will implement some key utilities for the back-end services to be used by integrated apps, such as logging (Winston); data caching (Redis Cache); search indexing (Elastic search); database and connection (Postgres TypeOrm); mailing service (Nestjs nodemailer with sendgrid abi); image upload with (Fastify multipart); and entities and their relationships (Typescript, NestJs, PostgreSQL).|
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
