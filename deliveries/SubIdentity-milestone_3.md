# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [SubIdentity Application](https://github.com/w3f/Grants-Program/blob/master/applications/SubIdentity.md)
* **Milestone Number:** 3

**Context**

A basic application with a responsive design to search for identities by address and identity fields was developed as part of milestone 1. Milestone 2 focused on improving the web application's performance and adding the feature to connect to a custom node by providing the node endpoint.
As part of milestone 1, a user could, by default, query identities from Polkadot, Kusama or Westend. With milestone 2, any node whose respective chain implements the identity pallet can be added and used to lookup identities. 

By default, the SubIdentity web application uses the SubIdentity npm package to search identities on the respective chain for a provided node. The SubIdentity package contains required methods and interfaces for the SubIdentity web application, and the SubIdentity backend to search for identities on a substrate based chain implementing the identity pallet.
The SubIdentity backend was developed as part of milestone 2 to provide the SubIdentity web application with an API to search for identities with higher performance. Therefore, the SubIdentity backend provides the feature to index identities for a substrate based chain that implements the identity pallet by providing an endpoint for an archive node.

During the development of the 3. milestone we focused on the implementation of the Governance and Tresaury plugin. Therefore an indexer script was developed. The indexer can index a Substrate based blockchain to fetch detail information about identities. Besides that, a listener script keeps the cached data updated on our side.


**Deliverables**

Deliverables are three Github repositories:
* [web application](https://github.com/TDSoftware/subidentity-webapp)
* [package](https://github.com/TDSoftware/subidentity-package)
* [backend](https://github.com/TDSoftware/subidentity-backend)

For milestone 3 a Medium article was published:
* [SubIdentity Medium Article](https://medium.com/@s.dobschal/subidentity-a-search-tool-for-identities-on-substrate-blockchains-8f9858e206e)

Feel free to use the main branches for reviewing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/TDSoftware/subidentity-package/blob/main/LICENSE https://github.com/TDSoftware/subidentity-webapp/blob/main/LICENSE https://github.com/TDSoftware/subidentity-backend/blob/main/LICENSE | Apache 2.0 |
| 0b. | Documentation | https://github.com/TDSoftware/subidentity-webapp/blob/main/README.md https://github.com/TDSoftware/subidentity-webapp/blob/main/docs/Tutorial.md https://github.com/TDSoftware/subidentity-package/blob/main/README.md https://github.com/TDSoftware/subidentity-backend/blob/main/readme.md | We provided **inline documentation** of the code, a meaningful readme for all repositories and added a basic **tutorial** that explains how a user can use the application. |
| 0c. | Testing | https://github.com/TDSoftware/subidentity-webapp/blob/main/README.md	https://github.com/TDSoftware/subidentity-package/blob/main/README.md https://github.com/TDSoftware/subidentity-backend/blob/main/readme.md | Core functions are covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the readme files, we describe how to run these tests. |
| 1a. | Implement logic for default plugins - backend | https://github.com/TDSoftware/subidentity-backend/blob/main/src/api.ts https://github.com/TDSoftware/subidentity-backend/blob/main/src/indexer.ts | Implement logic to get information for default plugins governance, treasury and validator on backend, provide API for frontend. The indexer to retrieve the data for the plugins was developed too. |
| 1b. | Implement logic for default plugins - frontend | https://github.com/TDSoftware/subidentity-webapp/blob/main/src/views/IdentityView.vue | Implement logic to to get information for default plugins governance, treasury and validator; Consume provided API |
| 2. | Implement components for displaying default plugins | https://github.com/TDSoftware/subidentity-webapp/blob/main/src/views/IdentityView.vue | Implement UI for displaying default plugins |
| 3. | Implement logic for sending tokens | https://github.com/TDSoftware/subidentity-webapp/blob/main/src/components/partials/profile/SendTokenModal.vue | Implement logic to get balance of current account and make a transaction to displayed identity; consider transaction fees; use an open protocol (e.g. wallet connect) to establish a secure connection to a wallet |
| 4. | Implement UI for sending tokens | https://github.com/TDSoftware/subidentity-webapp/blob/main/src/components/partials/profile/SendTokenModal.vue | Implement UI for sending tokens, including a button to trigger a transaction, an input field and a display of balances and fees | 
| 5. | Quality Assurance | | Manual and automated QA |


**Additional Information**

The developed web application is hosted at https://subidentity.tdsoftware.de/. For testing we indexed the whole Polkadot chain to retrieve Treasury and Governance information. Next we are considering a follow up production ready version of the application.
We provided a public available high-fidelity, pixel perfect [design](https://www.figma.com/file/Rn8xSxi3flRBJ0Nf0GKWeK/SubIdentity-Public) too.
