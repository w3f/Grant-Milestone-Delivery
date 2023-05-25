# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/GenesisDAO.md
* **Milestone Number:** 2

**Context** (optional)
This milestone is the finishing the substrate work and introduces a backend service with a lot of support for the frontend. 

We have implemented the UI Designs provided in the last milestone and created a testnet!

Visit it at ...

- [the frontend](https://www.genesis-dao.org/)
- [the backend service](https://service.genesis-dao.org/redoc/)
- [the node](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fnode.genesis-dao.org#/)

> Note: This is a testnet. It does not have real tokens, the alice/bob testaccounts are available for free use and we are resetting this testnet regularly. Do not use for production use cases and do not except data to remain.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | Licence | n/a | All repositories have a LICENSE.md file at their repo root. | 
| 0b. | Documentation | n/a | All repositories have a README.md file at their repo root, that is the entry point to the documentation. | 
| 0c. | Testing and Testing Guide | https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/docs/testing.md | We have [unit](https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/docs/testing.md#unit-tests), [integration testing](https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/docs/testing.md#integration-tests) and a [manual testing](https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/docs/testing.md#manual-voting) guide. The frontend can as well be tried out [here](https://www.genesis-dao.org/)  |
| 0d. | Docker | [node Dockerfile](https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/Dockerfile), [frontend Dockerfile](https://github.com/deep-ink-ventures/genesis-dao-frontend/blob/main/Dockerfile), [backend Dockerfile](https://github.com/deep-ink-ventures/genesis-dao-service/blob/main/Dockerfile) | All repositories are dockerized. |
| 1. | Substrate module: pallet_dao_asset | [pallet](https://github.com/deep-ink-ventures/genesis-dao-node/tree/main/pallets/dao-assets) with [checkpoint functionality](https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/pallets/dao-assets/src/functions.rs#L56-L130) | The assets pallet for the DAO |
| 2. | Substrate module: pallet_dao_vote	| https://github.com/deep-ink-ventures/genesis-dao-node/tree/main/pallets/dao-votes | The vote pallet with the full proposal lifecycle implementation | 
| 3. | Frontend Implementation	 | https://genesis-dao.org | The entire dao creation process within the UI. |
| 4. | Design and Product Flow | https://github.com/deep-ink-ventures/genesis-dao-frontend/blob/main/design/Proposal.pdf | This file contains wireframes and designs for the proposal flow, that we'll implement in the next milestone |

