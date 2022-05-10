# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [SubIdentity Application](https://github.com/w3f/Grants-Program/blob/master/applications/SubIdentity.md)
* **Milestone Number:** 1

**Context**

A basic application with a responsive design was developed which supports querying by address and identity fields. A user can, by default, query identities from Polkadot, Kusama or Westend. After a search is done, a list view with all results is displayed. An identity can be selected from the list by clicking on the table row. This is to present its details in an identity view. The SubIdentity web application uses the SubIdentity npm package to search for identities on a given node. The SubIdentity package contains required methods and interfaces for the SubIdentity web application to search for identities on a substrate based chain implementing the identity pallet.

**Deliverables**

Deliverables are two Github repositories:
* [web application](https://github.com/TDSoftware/subidentity-webapp)
* [package](https://github.com/TDSoftware/subidentity-package)

Feel free to use the main branches for reviewing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/TDSoftware/subidentity-package/blob/main/LICENSE https://github.com/TDSoftware/subidentity-webapp/blob/main/LICENSE | Apache 2.0 |
| 0b. | Documentation | https://github.com/TDSoftware/subidentity-webapp/blob/main/README.md https://github.com/TDSoftware/subidentity-webapp/blob/main/docs/Tutorial.md https://github.com/TDSoftware/subidentity-package/blob/main/README.md | We provided **inline documentation** of the code, a meaningful readme and added a basic **tutorial** that explains how a user can use the application. |
| 0c.	| Testing | https://github.com/TDSoftware/subidentity-webapp/blob/main/README.md	https://github.com/TDSoftware/subidentity-package/blob/main/README.md | Core functions are covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the readme files, we describe how to run these tests. |
| 1. | Concept and design | https://www.figma.com/file/Rn8xSxi3flRBJ0Nf0GKWeK/SubIdentity-Public?node-id=0%3A1 | We created a high-fidelity, responsive, pixel perfect design for a search view, a list view and a detailed identity view. |  
| 2. | Implement logic for querying identities | https://github.com/TDSoftware/subidentity-package/blob/main/src/identities.ts | We implement the logic to receive identities from a substrate-based chain implementing the Identity pallet in a npm package. |
| 3. | Implement UI for search and list view | https://github.com/TDSoftware/subidentity-webapp/blob/main/src/views/SearchView.vue https://github.com/TDSoftware/subidentity-webapp/blob/main/src/views/ListView.vue | Build UI with Vue.js |  
| 4. | Implement UI for detailed identity view | https://github.com/TDSoftware/subidentity-webapp/blob/main/src/views/IdentityView.vue | The identity view can easily be extended with custom plugins. A detailed description can be found in the [readme](https://github.com/TDSoftware/subidentity-webapp/blob/main/README.md). | 

**Additional Information**

A web application with the core functionality was developed as part of milestone 1 and is hosted at https://subidentity.tdsoftware.de/. Next we will focus on implementing the deliverables for Milestone 2, while also looking to fix some open design issues.
