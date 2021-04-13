# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).** 

* **PR Link:** <https://github.com/w3f/Open-Grants-Program/pull/283> 

* **Milestone Number:** 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |
| 0a. | License | https://github.com/Delmonicos/charger-node/blob/main/LICENSE | Apache 2.0 |  
| 0b. | Documentation | https://github.com/Delmonicos/charger-node/blob/main/Web3-Grant/milestone1/testing-guide.md | The testing guide describes what has been developed in this milestone and how to test it. |
| 0c. | Testing Guide | https://github.com/Delmonicos/charger-node/blob/main/Web3-Grant/milestone1/testing-guide.md | The code has unit-test. | 
| 1. | Substrate module: Identity | https://github.com/Delmonicos/pallet-did | We have integrated the Did module identity to support users identities and chargers identities.  |
| 2. | Substrate module: Registrar | https://github.com/Delmonicos/charger-node/tree/main/pallets/registrar | We have integrated the registrar module to verify that chargers have account chargers.| 
| 3. | Substrate module: Contracts |  | Integrate [Contracts](https://github.com/paritytech/substrate/tree/master/frame/contracts) module in order to support Ink! smart contracts. Smart Contracts will be used to implement flexible and scalable tariff schemes. | 
| 4. | Substrate module: Charger | https://github.com/Delmonicos/charger-node/tree/main/pallets/charge-session | We have created a Substrate module (pallet) that is connected to the charger interface and thats collects charging sessions information. At this stage, the module only listens to events coming from the charger and collect data coming from the charger. The Off-Chain worker architecture is used to interact with the charger hardware. We only simulate the hardware at this stage. |
| 5. | Substrate chain | | Modules Identity and Charger of our custom chain interact so that the information of who has accepted and completed a charging session is stored on the chain, signed by the charging station and by the user. |
| 6. | Docker | https://github.com/Delmonicos/charger-node/blob/main/Dockerfile | The dockerfile build and starts the node in development mode. |
