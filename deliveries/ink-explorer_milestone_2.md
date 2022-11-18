# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-explorer.md
* **Milestone Number:** 2

**Context** (optional)

Ink Explorer is an application that provides Ink contracts related information on Substrate based blockchains. It subscribes to blockchain and Ink modules events and store the information on its own PostgreSQL database. The backend exposes an API that can interact with the DB and run fast queries to get specific information in a short time.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/blockcoders/ink-substrate-explorer-frontend/blob/main/LICENSE | MIT |
| 0b. | Documentation | https://github.com/blockcoders/ink-substrate-explorer-frontend/blob/main/README.md, https://github.com/blockcoders/ink-substrate-explorer-frontend/blob/main/README-es.md | **english** and **spanish** versions of the documentation |
| 0c. | Testing Guide | https://github.com/blockcoders/ink-substrate-explorer-frontend#testing | Unit test and end to end tests will cover the core functions to ensure everything works as expected |
| 0d. | Docker | https://github.com/blockcoders/ink-substrate-explorer-frontend/blob/main/Dockerfile | A Dockerfile will be provided that will be able to start the node |
| 0e. | Article | https://docs.google.com/document/d/1jFJZGC26lBJbEEJUmJeQKEbOeXz9w4CypohX23npOaI/edit?usp=sharing | A Draft for the medium article. |
| 1. | Create App | https://github.com/blockcoders/ink-substrate-explorer-frontend/tree/main/pages | Frontend application that follows the proposed design. |
| 2. | Support for Spanish speakers community | | Translate the app to spanish and add support to switch languages. |  
| 4. | Testing | https://coveralls.io/github/blockcoders/ink-substrate-explorer-frontend?branch=main | Achieve a testing coverage of the functionalities above 90% |
| 4. | Final setups | https://hub.docker.com/repository/docker/blockcoders/ink-substrate-explorer-frontend | Deal with all production issues/configuration requirements such as creating the final docker image, reviewing the documentation and verifying everything works fine. |
| 5. | Deploy the app | https://ink-explorer.blockcoders.io/contracts | Define the final domain and deploy the app. |
