# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSdSqj2vYjvpiIytkjcc40Pwl0Eg76WGUAq5L9e8eFuuOegmLw/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**

* **Application Document:** [dot_marketplace-Phase3.md](https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace-Phase3.md)
* **Milestone Number:** 2


| Number | Deliverable | Link | Notes |
| ------ | ----------- | ---- |----------------- |
| 0a. | License | [Apache 2.0](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase3_Milestone2/LICENSE)| Apache 2.0 |
| 0b.  | Documentation | Pallet Tasking Backend - [github.io-tasking](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase3_Milestone2/pallets/pallet-tasking/src/lib.rs), [Readme](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase3_Milestone2/README.md) | Inline documentation of the code and a tutorial that explains how a user can use Dot Marketplace and understand the flow of the tasking and chat pallets. |
| 0c.  | Testing Guide | [Testing Guide](https://github.com/WowLabz/dot_marketplace_docker/tree/Phase3_Milestone2)| Guide with unit testing and implementations |
| 0d. | Docker | [docker-compose](https://github.com/WowLabz/dot_marketplace_docker/blob/Phase3_Milestone2/docker-compose.yml)| The docker image contains the entire Dot Marketplace for Phase 3 Milestone 2 with Frame V2 version for anybody to just deploy it on their terminal without cloning the repo explicitly, it will be explained along with the commands for testing and running the image.|
| 1 | Decentralized Court Module | [Source code](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase3_Milestone2/pallets/pallet-tasking/src/lib.rs)| An on-chain decentralized court for dispute resolution within the ecosystem. |
| 1a | Disapprove Milestone | [Source code](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase3_Milestone2/pallets/pallet-tasking/src/lib.rs#L825-L873) | In the case of a customer not being satisfied with the work submitted by the service provider (worker). A set of jurors is shortlisted (court summon) to resolve the dispute and pass a verdict. |
| 1b | Disapprove Rating | [Source code](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase3_Milestone2/pallets/pallet-tasking/src/lib.rs#L729-L823) | The customer or the service provider, once they have received their rating for a particular milestone and are not satisfied with it. |
| 1c | General Dispute | [Source code](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase3_Milestone2/pallets/pallet-tasking/src/lib.rs#L657-L727) | A general dispute function for cases that do not fall under the categories mentioned in 1a and 1b. |
| 2 | Voting module | [Source code](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase3_Milestone2/pallets/pallet-tasking/src/lib.rs#L875-L988) | Each juror can review the dispute and cast their vote, which also includes their rating for both the customer and the worker. After two days, all the juror votes are counted, and a winner is identified. |
| 3 | Frontend App | [Source code](https://github.com/WowLabz/tasking_frontend/tree/Phase3_Milestone2/src) | Supporting frontend UI to test the aforementioned functionality. |
