# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. 
> 

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).** 

* **PR Link:** <https://github.com/w3f/Open-Grants-Program/pull/283> 

* **Milestone Number:** 2

* **Milestone tag:** [milestone-2](https://github.com/Delmonicos/charger-node/tree/milestone-2)

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |
| 0a. | License | https://github.com/Delmonicos/charger-node/blob/milestone-2/LICENSE | Apache 2.0 |  
| 0b. | Documentation | https://github.com/Delmonicos/charger-node/blob/milestone-2/Web3-Grant/milestone2/testing-guide.md | The testing guide describes what has been developed in this milestone and how to test it. |
| 0c. | Testing Guide | https://github.com/Delmonicos/charger-node/blob/milestone-2/Web3-Grant/milestone2/testing-guide.md | The code has unit-test. | 
| 1. | Substrate module: Identity | https://github.com/Delmonicos/pallet-did | We have integrated the Did module identity to support users identities and chargers identities.  |
| 2. | Substrate module: Registrar | https://github.com/Delmonicos/charger-node/tree/milestone-2/pallets/registrar | We have integrated the registrar module to verify that chargers have account chargers, and to control list of authorized offchain workers (for charge session or payments)| 
| 3. | Substrate module: Contracts |  | The contract module has been integrated but we decided not to use Smart Contract due to compilation problems related to the fact that we also use offchain-worker. We use the tariff-manager pallet to do the job that could have been done by the smart contract. | 
| 4. | Substrate module: TariffManager | https://github.com/Delmonicos/charger-node/tree/milestone-2/pallets/tariff-manager | This pallet represents the price list used by the chain. Currently, there is only a fixed price per kWh, but this module will allow to adjust the prices according to different parameters (type of subscription of the user, time of the charge, ...) | 
| 5. | Substrate module: Payment | https://github.com/Delmonicos/charger-node/tree/milestone-2/pallets/session-payment | The payment module collect proofs of payment consents from the users and initiate payments to the bank by sending the proof and the payment instruction through Offchain-worker. |
| 6. | Substrate module: Charger | https://github.com/Delmonicos/charger-node/tree/milestone-2/pallets/charge-session | We have created a Substrate module (pallet) that is connected to the charger interface and that collects charging sessions information. At this stage, the module only listens to events coming from the charger and collect data coming from the charger. The Off-Chain worker architecture is used to interact with the charger hardware. We only simulate the hardware at this stage. |
| 7. | Substrate chain | | Modules Identity and Charger of our custom chain interact so that the information of who has accepted and completed a charging session is stored on the chain, signed by the charging station and by the user. All the payment events (payment requested, payment executed, ...) are recorded in the chain. |
| 7. | Docker | https://github.com/Delmonicos/charger-node/blob/milestone-2/Dockerfile | The dockerfile build and starts the node in development mode. |
