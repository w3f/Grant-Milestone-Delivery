# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/cyclops.md
* **Milestone Number:** 2

**Context** (optional)
In this second phase we have developed the back-end application for Cyclops using Node.js express. 

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | [link](https://github.com/ArthurHoeke/cyclops/blob/main/LICENSE) |
| **0b.** | Documentation | [link](https://github.com/ArthurHoeke/cyclops/blob/main/back-end/README.md) |
| **0c.** | Testing and Testing Guide | [link](https://github.com/ArthurHoeke/cyclops/blob/main/back-end/README.md) | After cloning the repository and installing all node packages run `npm test` to test the webservice and database functionality. Further testing can be done by following the installation tutorial and manually calling end-points. |
| **0d.** | Docker | [link](https://hub.docker.com/r/arthurhoeke/cyclops) | The docker image currently excludes the front-end. To test the deliverables and use `npm test`, I would recommend testing by cloning the repository instead of using docker.
| 1. | Express API endpoints | [link](https://github.com/ArthurHoeke/cyclops/blob/main/back-end/README.md) |
| 2. | Database structure | [link](https://github.com/ArthurHoeke/cyclops/blob/main/back-end/README.md) |
| 3. | SMTP functionality | [link](https://github.com/ArthurHoeke/cyclops/blob/main/back-end/app/Services/mail.services.js) |
| 4. | Subscan API | [link](https://github.com/ArthurHoeke/cyclops/blob/main/back-end/app/Utils/subscan.utils.js) |

**Additional Information**
To test features such as validator reward syncing a subscan API key is required. Due to the subscan terms of use I cannot share my own personal key in the documentation / repo, though feel free to sent me a message.
