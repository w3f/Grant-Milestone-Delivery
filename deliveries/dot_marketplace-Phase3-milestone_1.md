# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSdSqj2vYjvpiIytkjcc40Pwl0Eg76WGUAq5L9e8eFuuOegmLw/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**

* **PR Link:** https://github.com/w3f/Grants-Program/pull/1205
* **Milestone Number:** 1


| Number | Deliverable | Link | Notes |
| ------ | ----------- | ---- |----------------- |
| 0a. | License | [Apache 2.0](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase3_Milestone1/LICENSE)| Apache 2.0 |
| 0b.  | Documentation | Pallet Tasking Backend - [github.io-tasking](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase3_Milestone1/pallets/pallet-tasking/src/lib.rs), [Readme](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase3_Milestone1/README.md) | Inline documentation of the code and a tutorial that explains how a user can use Dot Marketplace and understand the flow of the tasking and chat pallets. |
| 0c.  | Testing Guide | [Testing Guide](https://github.com/WowLabz/dot_marketplace_docker/tree/Phase3_Milestone1)| Guide with unit testing and implementations |
| 0d. | Docker | [docker-compose](https://github.com/WowLabz/dot_marketplace_docker/blob/Phase3_Milestone1/docker-compose.yml)| The docker image contains the entire Dot Marketplace for Phase 3 Milestone 1 with Frame V2 version for anybody to just deploy it on their terminal without cloning the repo explicitly, it will be explained along with the commands for testing and running the image.|
| 1 | Project Structure | [Source code](https://github.com/WowLabz/dot-marketplace-v2/tree/Phase3_Milestone1/pallets/pallet-tasking/src)| The existing application only allows one milestone per project. Phase 3 modifies it to allow a publisher to add multiple milestones under the same project.  |
| 2 | Multiple Bidders | [Source code](https://github.com/WowLabz/dot-marketplace-v2/tree/Phase3_Milestone1/pallets/pallet-tasking/src)| Multiple bidders can now bid for the same milestone, and the publisher can choose one worker based on the bidder ratings  |
| 3 | Escrow | [Source code](https://github.com/WowLabz/dot-marketplace-v2/tree/Phase3_Milestone1/pallets/pallet-tasking/src)| Multiple subaccounts are created for a project to account for each milestone and make it easier to store all funds for transfer/exchange.  |
