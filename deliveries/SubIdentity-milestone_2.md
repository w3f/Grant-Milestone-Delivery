# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [SubIdentity Application](https://github.com/w3f/Grants-Program/blob/master/applications/SubIdentity.md)
* **Milestone Number:** 2

**Context**

A basic application with a responsive design to search for identities by address and identity fields was developed as part of milestone 1. Milestone 2 focused on improving the web application's performance and adding the feature to connect to a custom node by providing the node endpoint.
As part of milestone 1, a user could, by default, query identities from Polkadot, Kusama or Westend. With milestone 2, any node whose respective chain implements the identity pallet can be added and used to lookup identities. 
By default, the SubIdentity web application uses the SubIdentity npm package to search identities on the respective chain for a provided node. The SubIdentity package contains required methods and interfaces for the SubIdentity web application, and the SubIdentity backend to search for identities on a substrate based chain implementing the identity pallet.
The SubIdentity backend was developed as part of milestone 2 to provide the SubIdentity web application with an API to search for identities with higher performance. Therefore, the SubIdentity backend provides the feature to index identities for a substrate based chain that implements the identity pallet by providing an endpoint for an archive node.

**Deliverables**

Deliverables are three Github repositories:
* [web application](https://github.com/TDSoftware/subidentity-webapp)
* [package](https://github.com/TDSoftware/subidentity-package)
* [backend](https://github.com/TDSoftware/subidentity-backend)

Feel free to use the main branches for reviewing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/TDSoftware/subidentity-package/blob/main/LICENSE https://github.com/TDSoftware/subidentity-webapp/blob/main/LICENSE https://github.com/TDSoftware/subidentity-backend/blob/main/LICENSE | Apache 2.0 |
| 0b. | Documentation | https://github.com/TDSoftware/subidentity-webapp/blob/main/README.md https://github.com/TDSoftware/subidentity-webapp/blob/main/docs/Tutorial.md https://github.com/TDSoftware/subidentity-package/blob/main/README.md https://github.com/TDSoftware/subidentity-backend/blob/main/readme.md | We provided **inline documentation** of the code, a meaningful readme for all repositories and added a basic **tutorial** that explains how a user can use the application. |
| 0c. | Testing | https://github.com/TDSoftware/subidentity-webapp/blob/main/README.md	https://github.com/TDSoftware/subidentity-package/blob/main/README.md https://github.com/TDSoftware/subidentity-backend/blob/main/readme.md | Core functions are covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the readme files, we describe how to run these tests. |
| 1. | Implement offline mode | https://github.com/TDSoftware/subidentity-webapp/blob/main/src/components/partials/IdentitySearch/CustomNodeModal.vue https://github.com/TDSoftware/subidentity-webapp/blob/main/src/components/partials/IdentitySearch/IdentitySearch.vue https://github.com/TDSoftware/subidentity-webapp/blob/main/src/util/storage.ts | We implemented necessary functionality to enable a user to connect to a custom node and fetch identities from there. |
| 2. | Implement UI for node selection | https://github.com/TDSoftware/subidentity-webapp/blob/main/src/components/partials/IdentitySearch/CustomNodeModal.vue https://github.com/TDSoftware/subidentity-webapp/blob/main/src/components/common/CustomSelect.vue | We built a UI with Vue.js to enable a user to connect to a custom node from the UI |
| 3. | Implement URL param logic | https://github.com/TDSoftware/subidentity-webapp/blob/main/src/views/ListView.vue https://github.com/TDSoftware/subidentity-webapp/blob/main/src/views/IdentityView.vue | URL parameter logic was implemented for search query, chain, page and address |  
| 4a. | Performance improvement | https://github.com/TDSoftware/subidentity-backend | The performance of the web application could be significantly improved by using the developed backend to fetch identities. | 
| 4b. | Backend Development | https://github.com/TDSoftware/subidentity-backend https://github.com/TDSoftware/subidentity-backend/blob/main/src/routes/chains/chainRouter.ts  https://github.com/TDSoftware/subidentity-backend/blob/main/src/routes/identities/identityRouter.ts https://github.com/TDSoftware/subidentity-backend/blob/main/src/services/schedulerService.ts | A backend with Node.js was implemented to increase performance through indexing and an API was provided for the web application. | 
| 4c. | Consume API | https://github.com/TDSoftware/subidentity-webapp/blob/main/src/store/index.ts | If the API is available, the provided API will be used to fetch information instead of the npm package to increase the performance.| 

**Additional Information**

The developed web application is hosted at https://subidentity.tdsoftware.de/. Next, we will focus on extending the backend indexing functionality and implement the deliverables for milestone 3, while also looking to constantly improve our documentation, unit tests and code quality.
We provided an updated high-fidelity, pixel perfect [design](https://www.figma.com/file/Rn8xSxi3flRBJ0Nf0GKWeK/SubIdentity-Public) for milestone 2.
