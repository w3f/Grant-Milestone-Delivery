# Evaluation

- **Status:** In Progress
- **Application Document:**  https://github.com/w3f/Open-Grants-Program/blob/master/applications/delmonicos.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0. | License | <ul><li>[x] </li></ul> | [gh1](https://github.com/Delmonicos/pallet-did/blob/56637e66f8264667e868137cab17149cdee93931/LICENSE), [gh2](https://github.com/Delmonicos/charger-node/blob/8d64f602a37b1dfff7bafbaa5540c77714568bdd/LICENSE) | — |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [gh](https://github.com/Delmonicos/charger-node/blob/8d64f602a37b1dfff7bafbaa5540c77714568bdd/Web3-Grant/milestone2/testing-guide.md) | — |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [gh](https://github.com/Delmonicos/charger-node/blob/8d64f602a37b1dfff7bafbaa5540c77714568bdd/Web3-Grant/milestone2/testing-guide.md) | Decent code coverage.  |
| 0d. | Article/Tutorial | <ul><li>[ ] </li></ul> | link | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Substrate module: Identity | <ul><li>[ ] </li></ul> | link | Adapt [Identity](https://github.com/paritytech/substrate/tree/master/frame/identity) module with the required information that are needed for charging purpose |  
| 2. | Substrate module: Membership | <ul><li>[ ] </li></ul> | link | Implement [Membership](https://github.com/paritytech/substrate/tree/master/frame/membership) module check if the connected user has subscribed to the service or is allowed to initiate one time payment by his bank, using SEPA Instant payment or SEPA Mandate. |  
| 3. | Substrate Tariff Smart Contract | <ul><li>[ ] </li></ul> | link | Develop a first simple tariff smart contract with a fixed price by KWh.  |
| 4. | Substrate module: Payment | <ul><li>[ ] </li></ul> | link | We will create a Substrate module (pallet) that will initiate payment to the bank when the charging session is finished and the total price is known. The Off-Chain worker architecture will be used to interact with the charger hardware. We will simulate the hardware at this stage. |  
| 5. | Substrate module: Charger | <ul><li>[ ] </li></ul> | link | The Charger Module will evolve in order to be able to initiate command on the charging station (starting a session or stopping a session). |
| 6. | Substrate chain | <ul><li>[ ] </li></ul> | link | All Modules will interact to handle a first simple use case where an authorized user is detected, initiate and complete a charging session. Payment is initiated by the charging station to the bank. |  
| 7. | Docker | <ul><li>[ ] </li></ul> | link | We will provide a dockerfile to demonstrate the full functionality of our chain |



## General Notes

-
