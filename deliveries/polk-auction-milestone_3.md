# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** Link to the merged contract [application](https://github.com/w3f/Grants-Program/tree/master/applications/polk-auction.md) and [PR](https://github.com/w3f/Grants-Program/pull/452). 
* **Milestone Number:** 3

**Deliverables**
This is the last deliverable. Which is only the proof that the project has been deployed, is running and accessible from the public.

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ---- | ----- |
| 0a. | License | NA  | |
| 0b. | Documentation | NA | |
| 0c. | Testing Guide | NA | |
| 0d. | Docker | NA | |
| 0e. | Article | [Reddit post on r/Polkadot](https://www.reddit.com/r/Polkadot/comments/v1osc8/polkauction_is_live/), and the same on [r/Kusama](https://www.reddit.com/r/Kusama/comments/v1orsn/polkauction_is_live/)  | |
| 1. | Deployment of nodes | [PolkAuction Kusama Node](https://telemetry.polkadot.io/#list/0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe)  | Due to the limited size of the current VPS, there is no Polkadot node running  |
| 2. | Deployment of sidecar-api | NA  | Not a public API (however, based on [the code](https://github.com/CrommVardek/polk-auction-core/tree/develop/docker)) you can see own it was deployed |
| 3. | Deployment of polk-auction-core | NA  | Not a public API (however, based on [the code](https://github.com/CrommVardek/polk-auction-core/tree/develop/docker)) you can see own it was deployed |
| 4. | Deployment of polk-auction-ui | [PolkAuction](http://www.polkauction.io)   |   | 

**Additional Information**

This is the last milestone, however, I'd like to share the few things I plan to add/change in the next months (years maybe, given the fact I've been slow to delivery this project) - listed only what is visible by users: 

 - Add an SSL layer (already in progress, UI is done and the backend is in progress). The website can already be accessed by https port, but it is not fully functional. 
 - Two hosting nodes (not only one)
 - Small UI changes to facilitate usage
 - Allow users to contribute directly with the Polkadot.js extension
