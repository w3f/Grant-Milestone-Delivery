# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSdSqj2vYjvpiIytkjcc40Pwl0Eg76WGUAq5L9e8eFuuOegmLw/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace-phase2.md
* **Milestone Number:** 1


| Number | Deliverable | Accepted | Link | Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/WowLabz/tasking_backend/blob/Phase1_Milestone1/LICENSE)| Apache 2.0 |
| 0b.  | Documentation | <ul><li>[x] </li></ul> | Pallet Tasking Backend - [github.io-tasking](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone1/pallets/pallet-tasking/src/lib.rs), Pallet Chat Backend -[github.io-chat](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone1/pallets/pallet-chat/src/lib.rs),  [Readme](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone1/README.md) | Inline documentation of the code and a tutorial that explains how a user can use Dot Marketplace and understand the flow of the tasking and chat pallets. |
| 0c.  | Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone1/testing_guide_phase2_milestone1.md)| Guide with unit testing and implementations |
| 0d. | Docker | <ul><li>[x] </li></ul> | [docker-compose](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone1/docker-compose.yml)| The docker image contains the entire Dot Marketplace for Phase 2 Milestone 1 with Frame V2 version for anybody to just deploy it on their terminal without cloning the repo explicitly, it will be explained along with the commands for testing and running the image.|
| 1 | Migrate [Tasking Pallet](https://github.com/WowLabz/tasking_backend/blob/11ff1dfe620016d2943adc7b7a0ba60f2d6413cd/pallets/pallet-tasking/src/lib.rs) from FRAME v1 to FRAME v2  | <ul><li>[x] </li></ul> | [Source code](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone1/pallets/pallet-tasking/src)| The existing Tasking Pallet will be migrated to FRAME v2 to account for the new features provided by the framework  |
| 2 | Chat Pallet | <ul><li>[x] </li></ul> | [Source code](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone1/pallets/pallet-chat/src)| Chat functionality is to be exposed and consumed between the customer and the service provider to ease communication and this will be integrated with the tasking pallet's frame v2 version  |
