# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/polkamusic.md
* **Milestone Number:** 1

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |https://github.com/polkamusic/PolkaMusic-Core/blob/main/LICENSE| Apache License 2.0 | 
| 0b.  | Documentation |https://github.com/polkamusic/PolkaMusic-Core/blob/main/README.md| The readme file contains all the information regarding the Rights Management contracts| 
| 0c.  | Testing Guide |https://github.com/polkamusic/PolkaMusic-Core/blob/main/doc/examples_data.md| The file consists of example data that can be used to create a Rights Management Contract|
| 1. |  Contract Rights Management Pallet |https://github.com/polkamusic/PolkaMusic-Core/blob/main/pallets/crm/src/lib.rs| The pallet allows users to create Rights Management Contracts with quorum percentage thresholds which are required to be satisfied before any changes can take place to the contract. The meta-data is stored on IPFS instead of blockchain for efficiency.|
| 2. | Rights Management Portal |https://github.com/polkamusic/Rights-Management-Portal| The GUI accepts the music and artwork file from the user, collects the meta-data and packages into DDEX compatible csv before uploading all the 3 files to IPFS. The returned hash is stored on the blockchain along with rights management quorum thresholds through the Rights Managament Pallet|
