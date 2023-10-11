# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dotly.md
* **Milestone Number:** 1

**Context** This is the delivery milestone of the project. In this milestone, I have completed the backend and frontend of the project. I have also deployed the project to the production environment. You can find the live version of the project [here](https://dotly.net/). I used a random address for test purposes, you can change with any polkadot address you want.


**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | [https://github.com/justmert/dotly-backend/LICENSE](https://github.com/justmert/dotly-backend/blob/master/LICENSE) - [https://github.com/justmert/dotly-frontend/LICENSE](https://github.com/justmert/dotly-frontend/blob/master/LICENSE) | MIT License |
| **0b.** | Documentation | [https://github.com/justmert/dotly-backend/README.md](https://github.com/justmert/dotly-backend/blob/master/README.md) - [https://github.com/justmert/dotly-frontend/README.md](https://github.com/justmert/dotly-frontend/blob/master/README.md) | Documentations will be presented as readme files for frontend and backend seperately |
| **0c.** | Testing and Testing Guide | https://github.com/justmert/dotly-backend?tab=readme-ov-file#how-to-run-tests | After you run backend locally, you can run tests as mentioned in the link |
| **0d.** | Docker | ----- | Not Applicable, needs manual processes like firebase setup |
| **0e.** | Article | ---- | Will be published |
| 1. | Search Page | https://dotly.net/ | You can enter a polkadot address on this page|
| 2. | Overview Page | https://dotly.net/overview/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m | |
| 3. |  Overview Page - Brief Stats |  https://dotly.net/overview/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m#account | |
| 4. |  Overview Page - Parachain Balance Pie | https://dotly.net/overview/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m#balance-distribution |  |
| 5. |  Overview Page - Parachain Balance List | https://dotly.net/overview/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m#balance-distribution | |
| 6. |  Overview Page - Weekly Transaction Rate | https://dotly.net/extrinsics/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m#stats | Moved to extrinsics |
| 7. | Stats Page | https://dotly.net/stats/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m |
| 8. |  Stats Page - Balance History | https://dotly.net/stats/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m#transfer-history | |
| 9. |  Stats Page - Transaction History | https://dotly.net/stats/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m#transfer-relationship | |
| 10. |  Stats Page - Top Senders/Receivers | https://dotly.net/stats/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m#transfer-relationship | |
| 11. |  Stats Page - Incoming/Outgoing Transfer Widget | https://dotly.net/stats/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m#total-transfers | |
| 12. | Stats Page - Staking/Pool Reward History | https://dotly.net/rewards/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m#reward-history | Created a new page called rewards. |
| 13. | Extrinsics Page | https://dotly.net/extrinsics/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m | |
| 14. | Extrinsics Page - Extrinsics Count History | https://dotly.net/extrinsics/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m#activity | |
| 15. | Extrinsics Page - Extrinsics Success Rate | https://dotly.net/extrinsics/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m#success-rate | |
| 16. | Extrinsics Page - Top Interacted Modules/Calls  | https://dotly.net/extrinsics/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m#recent-extrinsics | |
| 17. | Extrinsics Page - Action Insight | https://dotly.net/extrinsics/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m#distribution | |
| 18. | Badges Page | https://dotly.net/badges/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m | |
| 19. | Badges Page - Badges | https://dotly.net/badges/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m | |
| 20. | Google Analytics Integration | -- | Google analytics added to project, just definition of environment variable is enough to track | |
| 21. | Share Feature | https://dotly.net/overview/17bR6rzVsVrzVJS1hM4dSJU43z2MUmz7ZDpPLh8y2fqVg7m | |

**Additional Information**

To run and test the project locally, you can follow the steps below:

1. Visit Backend Repo and follow the instructions to run the backend locally
2. Visit Frontend Repo and follow the instructions to run the frontend locally

**P.S:** To use frontend locally, you need to run backend locally as well, otherwise you will not be able to see any data. I gave detailed instructions on both repos, but if you have any questions, please let me know.
