# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/cyclops.md
* **Milestone Number:** 3

**Context** (optional)
The last milestone of our grant, implementing the back-end API into the front-end.

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | [link](https://github.com/ArthurHoeke/cyclops/blob/main/LICENSE) |
| **0b.** | Documentation | [link](https://github.com/ArthurHoeke/cyclops/blob/main/back-end/README.md) |
| **0c.** | Testing and Testing Guide | [link](https://github.com/ArthurHoeke/cyclops/) | Refer to the previous two milestones, testing documentation available on the GitHub repo. |
| **0d.** | Docker | [front-end](https://hub.docker.com/r/decentradot/cyclops-front-end) [back-end](https://hub.docker.com/r/decentradot/cyclops-back-end) | The docker image is meant for doing local testing, if you want to implement HTTPS / create a production build please clone the GitHub repo.
| **0e.** | Article | [link](https://medium.com/@arthurh/cyclops-validator-dashboard-a-comprehensive-validator-dashboard-for-polkadot-f1afc1e3d83a) | Setup guide is included in the GitHub README
| 1. | API Service | [link](https://github.com/ArthurHoeke/cyclops/blob/main/front-end/src/app/services/dashboard/dashboard.service.ts) |
| 2. | Display data | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) |
| 3. | Elected / waiting | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) |
| 4. | Reward tracking | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) |
| 5. | Token price tracking | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) |
| 6. | ERA | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) |
| 7. | 1kv statistics | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) |
| 8. | Stash | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) |
| 9. | PDF reports |[link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) |
| 10. | E-mail alert system | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) |
| 11. | ERA point tracking | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) |

**Additional Information**
To test features such as adding a validator and reward syncing a subscan API key is required. Due to the subscan terms of use I cannot share my own personal key in the documentation / repo, though feel free to contact me. Alternatively, you can use our demo over at https://cyclops.decentradot.com/ for testing.
