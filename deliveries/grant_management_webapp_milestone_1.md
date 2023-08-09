# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Grant Management Webapp](https://github.com/w3f/Grants-Program/blob/master/applications/Grant_management_webapp.md)
* **Milestone Number:** 1

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0) | Apache-2.0 |
| **0b.** | Documentation | [User Guide](https://docs.google.com/document/d/1BLBns9tTUSpJMu7MhuQdLZYF8mUBQ8TD/edit) | **Inline documents can be found in the repositories** and User guide is for UI/UX components. |
| **0c.** | Testing and Testing Guide | - | The respective Test files can be found alongside the project repositories with guidelines in readme files. |
| **0d.** | Docker | - | The dockerfiles can be found alongside the project repositories.  |
| 1 | Frontend | [Github Repository](https://github.com/antiers-solutions/gmw-frontend) | The link leads to the repository of the front end components of the application, the guidelines to operate it can be found in readme file. |
| 2 | Backend | [Github Repository](https://github.com/antiers-solutions/gmw-backend) | Database Integrations and data extractor is implemented here. |
| 3 | Backend | [Github Repository](https://github.com/antiers-solutions/gmw-backend) | Github Webhook API implementaion can be found here. |
| 4 | Data Base | [Github Repository](https://github.com/antiers-solutions/gmw-backend) | DB schema is implemented here. |


**Additional Information**
1. The code for Deliverable 2 (extractor and db integration) can be found in:
```bash
  gmw-backend/src/controllers
```
2. The code for Deliverable 3 (webhooks) can be found in:
```bash
  gmw-backend/src/controllers/githubHook.controller.ts
```
3. The code for deliverable 4 (DataBase Schema) can be found in:
```bash
  gmw-backend/src/models
```