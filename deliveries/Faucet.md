# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [https://github.com/w3f/Grants-Program/blob/master/applications/Faucet.md](https://github.com/w3f/Grants-Program/blob/master/applications/Faucet.md)
* **Milestone Number:** 1

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [GitHub repo link](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/main/LICENSE) | Apache 2.0 license included |
| 0b. | Documentation | [GitHub repo link](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/main/README.md) | Documentation contains instructions for how to run, deploy and test one's own faucet. |
| 0c. | Testing Guide | [GitHub repo link](https://github.com/karooolis/sybil-resistant-substrate-faucet#testing) | Guide on how to run unit, integration and E2E tests. |
| 0d. | Article | [Google Docs link](https://docs.google.com/document/d/1PKMPsfVBZx7TPq0IIS6fWd15Fs8d8HgUAaFHuA18Pao/edit?usp=sharing) | |
| 1. | User Interface | [GitHub repo link](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/main/pages/index.tsx) | |
| 2. | Authentication | [GitHub repo link](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/main/pages/api/auth/%5B...nextauth%5D.ts) | Authentication handler. Authentication can be done via Twitter or GitHub providers. |  
| 3. | User status | [GitHub repo link](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/main/pages/api/claim/status.ts) | API endpoint returning whether a given user has already claimed tokens. |
| 4. | Faucet drip | [GitHub repo link](https://github.com/karooolis/sybil-resistant-substrate-faucet/blob/main/pages/api/claim/new.ts) | API endpoint for claiming tokens. |

**Additional Information**

The demo faucet can be viewed on https://sybil-resistant-substrate-faucet.vercel.app/.