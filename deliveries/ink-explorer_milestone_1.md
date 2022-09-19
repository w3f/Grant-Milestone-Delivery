# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-explorer.md
* **Milestone Number:** 1

**Context** (optional)

Ink Explorer is an application that provides Ink contracts related information on Substrate based blockchains. It subscribes to blockchain and Ink modules events and store the information on its own PostgreSQL database. The backend exposes an API that can interact with the DB and run fast queries to get specific information in a short time.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/blockcoders/ink-substrate-explorer-api/blob/main/LICENSE | MIT |
| 0b. | Documentation | https://github.com/blockcoders/ink-substrate-explorer-api/blob/main/README.md, https://github.com/blockcoders/ink-substrate-explorer-api/blob/main/README-es.md | **english** and **spanish** versions of the documentation |
| 0c. | Testing Guide | https://github.com/blockcoders/ink-substrate-explorer-api#test | Unit test and end to end tests will cover the core functions to ensure everything works as expected |
| 0d. | Docker | https://github.com/blockcoders/ink-substrate-explorer-api/blob/main/Dockerfile | A Dockerfile will be provided that will be able to start the node |
| 1. | Create database | https://github.com/blockcoders/ink-substrate-explorer-api/blob/main/docker-compose.yaml#L26-L38 | Create a docker container to start a PostgreSQL database to store all the information |
| 2. | Backend service | https://github.com/blockcoders/ink-substrate-explorer-api/tree/main/src | a typescript service that subscribes to blockchain events and Ink modules events. |
| 3. | API | https://github.com/blockcoders/ink-substrate-explorer-api/blob/main/src/schema.graphql | functionality to expose an API that gets the contracts data |
| 4. | Testing | https://github.com/blockcoders/ink-substrate-explorer-api/actions/runs/3070814266/jobs/4960918723 | Achieve a testing coverage of the functionalities above 90% |
