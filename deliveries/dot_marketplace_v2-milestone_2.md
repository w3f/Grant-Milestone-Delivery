# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSdSqj2vYjvpiIytkjcc40Pwl0Eg76WGUAq5L9e8eFuuOegmLw/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**

* **PR Link:** https://github.com/w3f/Grants-Program/pull/832
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace-phase2.md
* **Milestone Number:** 2


| Number | Deliverable | Accepted | Link | Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | [x] | [Apache 2.0](https://github.com/WowLabz/tasking_backend/blob/main/LICENSE)| Apache 2.0 |
| 0b.  | Documentation | [x] | Pallet Tasking Backend - [github.io](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs), [Readme](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/README.md) | Inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of the tasking pallet. |
| 0c.  | Testing Guide | [x] | [Testing Guide](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/testing_guide.md)| Guide to setup the implementations|
| 0d. | Docker | [x] | [docker-compose](https://github.com/WowLabz/dot_marketplace_docker/blob/Phase2_Milestone2/docker-compose.yml)| kindly follow the [GUIDE](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/testing_guide.md) to run the docker image |
| 1 | Decentralized Court Module | [x] | [Source code](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs)| An on chain decentralized court for dispute resolution within the ecosystem. |
| 1a | Disapprove Task | [x] | [Source code](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs#:~:text=pub%20fn%20disapprove_task)| In the case of a customer not being satisfied by the work submitted by the service provider (worker). A set of jurors is formed (court-summon) to resolve the dispute and pass a verdict. |
| 1b | Disapprove Rating | [x] | [Source code](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs#:~:text=pub%20fn%20disapprove_rating)| The customer or the service provider, once they have received their rating for a particular task and are not satisfied by it. |
| 1c | General Dispute | [x] | [Source code](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs#:~:text=pub%20fn%20raise_dispute)| A general dispute function for cases that do not fall under the categories mentioned in 1a and 1b. |
| 2 | Jury | [x] | [Source code](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs#:~:text=pub%20fn%20accept_jury_duty)| The chain specification of the testnet is modified to include more users with necessary specifications to be a part of the jury. The specifications include having average user rating above a certain threshold and being an expert in the field of the task. A list of potential jurors are notified and they have a period of one day to accept jury duty, with the maximum number of juors capped to 5 per dispute. |
| 3 | Voting module | [x] | [Source code](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs#:~:text=pallet%3A%3Aweight(10_000)%5D-,pub%20fn%20cast_vote)| Each juror can review the dispute and cast their vote which also includes their rating for both the customer and the worker. After a period of two days all the juror votes are counted and a winner is identified. |
| 4 | Escrow | [x] | [Source code](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs#:~:text=pub%20fn%20escrow_account_id)| Single account for storing all the funds for transfer/exchange. Account for creating task, bidding for the task, transferring juror fees (if the court is summoned), transferring winner fees. |
| 5 | Scheduler | [x] | [Source code](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs#:~:text=pub%20fn%20register_case)| Custom event scheduler built based on block number to facilitate the waiting periods for jury acceptance and juror voting. |
  
