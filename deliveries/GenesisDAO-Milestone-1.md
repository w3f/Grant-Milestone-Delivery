# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/GenesisDAO.md
* **Milestone Number:** 1

**Context** (optional)
This milestone is building the groundwork for future development of the DAO. It contains a setup of the node, frontend and backend services; introduces the first pallets, with the `dao-core` pallet in the center and ships a full design/logo guideline, wireframes for dao creation and the first High Fidelity Designs that we already start to implement.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | Licence | n/a | All repositories have a LICENSE.md file at their repo root. | 
| 0b. | Documentation | n/a | All repositories have a README.md file at their repo root, that is the entry point to the documentation. | 
| 0c. | Testing and Testing Guide | https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/docs/testing.md | We have unit and integration testing alongside with some information for manual testing. |
| 0d. | Docker | n/a | All repositories are dockerized. Enter the repo via command-line and run `docker compose up -d`
| 1. | Parachain setup | https://github.com/deep-ink-ventures/genesis-dao-node | This is the genesis dao blockchain. |
| 2. | pallet_dao_core | https://github.com/deep-ink-ventures/genesis-dao-node/tree/main/pallets/dao-core | Please note that we already started with Milestone 2, therefore this is already based on pallet-dao-assets, not the parity module | 
| 3. | Frontend Infrastructure | https://github.com/deep-ink-ventures/genesis-dao-frontend | This is the setup for the frontend infrastructure. Note that we already started with the polkadot.js integration towards our pallet, therefore this repository already includes a lot of interactions with the node and requires it to be running. See the [Manual Testing Guide](https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/docs/testing.md#manual-testing) for more information |
| 4. | Design and Product Flow | https://github.com/deep-ink-ventures/genesis-dao-frontend/blob/main/design/design.pdf | The file is to big to display in github, so please download it for review. |


**Additional Information**
We've already started with Milestone 2, therefore pallets like `dao-votes` or frontend integrations have already been started. You can ignore those.
