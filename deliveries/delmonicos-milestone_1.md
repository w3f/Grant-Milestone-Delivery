# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).** 

* **PR Link:** <https://github.com/w3f/Open-Grants-Program/pull/283> 

* **Milestone Number:** 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |
| 0a. | License | | Apache 2.0 / MIT / Unlicense |  
| 0b. | Documentation | https://github.com/Delmonicos/charger-node/blob/main/Web3-Grant/milestone1/testing-guide.md | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | https://github.com/Delmonicos/charger-node/blob/main/Web3-Grant/milestone1/testing-guide.md | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Substrate module: Identity | https://github.com/Delmonicos/pallet-did | Choose an existing [Identity](https://github.com/paritytech/substrate/tree/master/frame/identity) module to start from, integrate it with the project |
| 2. | Substrate module: Membership | https://github.com/Delmonicos/charger-node/tree/main/pallets/registrar | Integrate existing [Membership](https://github.com/paritytech/substrate/tree/master/frame/membership) module to start from, integrate it with the project | 
| 3. | Substrate module: Contracts | https://github.com/Delmonicos/charger-node/blob/main/runtime/src/lib.rs#L437 | Integrate [Contracts](https://github.com/paritytech/substrate/tree/master/frame/contracts) module in order to support Ink! smart contracts. Smart Contracts will be used to implement flexible and scalable tariff schemes. | 
| 4. | Substrate module: Charger | https://github.com/Delmonicos/charger-node/tree/main/pallets/charge-session | We will create a Substrate module (pallet) that will be connected to the charger interface and will collect charging sessions information. At this stage, the module will only listen to events coming from the charger and collect data coming from the charger. The Off-Chain worker architecture will be used to interact with the charger hardware. We will simulate the hardware at this stage. |
| 5. | Substrate chain | | Modules Identity and Charger of our custom chain will interact so that the information of who has accepted and completed a charging session will be store on the blockchain, signed by the charging station and by the user. |
| 6. | Docker | https://github.com/Delmonicos/charger-node/blob/main/Dockerfile | We will provide a dockerfile to demonstrate the full functionality of our chain |
