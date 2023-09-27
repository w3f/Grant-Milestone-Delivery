# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/GenesisDAO.md
* **Milestone Number:** 3

**Context** (optional)
This milestone is finalising the MVP. We now have a fully working core product to create and manage DAOs, council creation, proposal lifecycle and voting.

The product has it's own testnet:

- [the frontend](https://www.genesis-dao.org/)
- [the backend service](https://service.genesis-dao.org/redoc/)
- [the node](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fnode.genesis-dao.org#/)

> Note: This is a testnet. It does not have real tokens, the alice/bob testaccounts are available for free use and we are resetting this testnet regularly. Do not use for production use cases and do not except data to remain.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | Licence | n/a | All repositories have a LICENSE.md file at their repo root. | 
| 0b. | Documentation | n/a | All repositories have a README.md file at their repo root, that is the entry point to the documentation. | 
| 0c. | Testing and Testing Guide | https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/docs/testing.md | We have [unit](https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/docs/testing.md#unit-tests), [integration testing](https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/docs/testing.md#integration-tests). |
| 0d. | Docker | [node Dockerfile](https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/Dockerfile), [frontend Dockerfile](https://github.com/deep-ink-ventures/genesis-dao-frontend/blob/main/Dockerfile), [backend Dockerfile](https://github.com/deep-ink-ventures/genesis-dao-service/blob/main/Dockerfile) | All repositories are dockerized. |
| 0e. | Article | [Link](https://docs.google.com/document/d/1c3B9iyoHE7cP5a5qYwa-A_0Vy5zo1uAo-S1vcZ5h_B4/edit#heading=h.obore8uev3ox) | The article will be published right after the acceptance of this milestone. We'll reach out on how to increase visibillity |
| 1. | Substrate module: pallet_dao_vote | [Link](https://github.com/deep-ink-ventures/genesis-dao-node/tree/main/pallets/dao-votes) | The pallet has been finalized with flow adjustments as we have finalized the frontend. |
| 2. | Frontend Implementation	| [Website](https://genesis-dao.org). [Repo](https://github.com/deep-ink-ventures/genesis-dao-frontend) | The proposal lifecycle and votes flow is now implemented |
| 3. | Product Touches | n/a | We have done an extensive QA session and incorporated feedback into small details of the app, an [FAQ](https://genesis-dao.org/faq) page has been added as well. |
