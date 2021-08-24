# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** Link to the merged contract [application](https://github.com/w3f/Grants-Program/tree/master/applications/polk-auction.md) and [PR](https://github.com/w3f/Grants-Program/pull/452). 
* **Milestone Number:** 1


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [Apache 2.0](https://github.com/CrommVardek/polk-auction-core/blob/develop/LICENSE) |
| 0b. | Documentation | [Readme documentation](https://github.com/CrommVardek/polk-auction-core/blob/develop/README.md)
| 0c. | Testing Guide | [Testing section](https://github.com/CrommVardek/polk-auction-core/blob/develop/README.md#Tests) |
| 0d. | Docker | [Dockerfile](https://github.com/CrommVardek/polk-auction-core/blob/develop/Dockerfile) |
| 1. | Current-Auction end-point | [Endpoint implementation](https://github.com/CrommVardek/polk-auction-core/blob/develop/src/main/polkauction/core/route/AuctionRouting.kt)  |  The websocket client to connect to a node was not developed. An off-chain database is used to store information about the known parachains.
| 2. | Current-Parachains end-point |  [Endpoint implementation](https://github.com/CrommVardek/polk-auction-core/blob/develop/src/main/polkauction/core/route/ParachainRouting.kt) |  The websocket client to connect to a node was not developed. An off-chain database is used to store information about the known parachains.
| 3. | Current-Crowdloan end-point |  [Endpoint implementation](https://github.com/CrommVardek/polk-auction-core/blob/develop/src/main/polkauction/core/route/CrowdloanRouting.kt)  | The websocket client to connect to a node was not developed. An off-chain database is used to store information about the known parachains.

