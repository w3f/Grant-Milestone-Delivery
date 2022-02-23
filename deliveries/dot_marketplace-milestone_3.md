# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Dot Marketplace Proposal](https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace.md). 
* **Milestone Number:** 3

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
>
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable                     | Link                                                         | Notes                                                        |
| ------ | ------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 0a.    | License                         | [Apache 2.0](https://github.com/) |                                                              |
| 0b.    | Documentation                   | Pallet Tasking Backend - [github.io](https://github.com/WowLabz/tasking_backend/tree/Phase1_Milestone3) | Follow the README for application logic & flow |
| 0c.    | Testing Guide                   | [Testing Guide](https://github.com/WowLabz/dot_marketplace_docker/blob/Phase1_Milestone3/README.md) | Guide with unit testing and implementation |
| 0d.    | Docker | [Docker](https://github.com/WowLabz/dot_marketplace_docker/tree/Phase1_Milestone3) | Docker repo for the all services in dot_marketplace |
| 1.     | Multiuser Module | [Frontend Multiuser Module](https://github.com/WowLabz/tasking_frontend/blob/Phase1_Milestone3/src/View/Modules/DashBoard/CardForAirDrop.js), [Backend Air Drop Module](https://github.com/WowLabz/tasking_backend/blob/Phase1_Milestone3/pallets/pallet-tasking/src/lib.rs#L459-L505) | Support for multiple Substrate seed users to test the functionality and make the task based transactions as per the Status mentioned. Substrate based Lockable currency for reserving user funds and allowing the escrow unlock after the approved status.         |
| 2.     | Tagging Module | [Tagging Module](https://github.com/WowLabz/authentication_service/blob/version/2.0/src/models/user.rs#L9-L41) | Support for smart tags with the user profiles for programmatic track/domain alignment in the future        |
| 3.     | File Transfer Module  | [File Transfer Module](https://github.com/WowLabz/authentication_service/blob/version/2.0/src/services/file_service.rs) | API connections to cloud storage async upload/download of small files via Rocket      |
| 4.     | Frontend App | [Frontend App](https://github.com/WowLabz/tasking_frontend/tree/Phase1_Milestone3/src) | Supporting frontend UI to test the aforementioned functionality   |
| 5.     | Website | [Dot Marketplace](https://www.dotmarketplace.co/)|Dedicated one page website for Dot Marketplace |  
| 6.     | Article | [Article](https://medium.com/@Dot_Marketplace/introducing-dot-marketplace-microtasking-app-for-crypto-communities-1063ec69bcb9)|Website article sharing the motivation behind Dot Marketplace and how to make best use of it      |
