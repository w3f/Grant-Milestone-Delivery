# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/faterium.md
* **Milestone Number:** 2

**Context**

The main goal of the Milestone 2 is to create UI design (see wireframes for the reference) and all main functionality of Faterium Platform: Communities, User Profiles, Categories, Assets, Crowdfunding Polls. After completion of Milestone 1 - we will have Golang Server that we will extend with new functionality: wallet connect, user profile configuration, community creation, asset creation, voting.

Please, see the Backend API design of the Faterium Platform above.

Also, we will prepare and publish and Article, that will explain a new concept of Crowdfunding Polls.

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| 0a. | License | https://github.com/faterium/faterium-dapp/blob/v0.2.1/LICENSE | Apache License 2.0 |
| 0b. | Documentation | https://github.com/faterium/faterium-dapp/blob/v0.2.1/README.md | [faterium-dapp/README](https://github.com/faterium/faterium-dapp/blob/v0.2.1/README.md) |
| 0c. | Testing Guide | https://github.com/faterium/faterium-dapp/tree/v0.2.1#local-testing-setup | Documentation on how to run PlayWright E2E tests for Faterium dApp (we implemented E2E tests for UI as it's makes sense more than Unit). And added [docker-compose file](https://github.com/faterium/faterium-dapp/blob/v0.2.1/docker-compose.yml) for better testing experience. |
| 0d. | Docker | [Faterium Server Dockerfile](https://github.com/faterium/faterium-server/blob/v0.2.1/Dockerfile) | Dockerfiles for [server](https://github.com/faterium/faterium-server/blob/v0.2.1/Dockerfile) and [docker-compose for web tests](https://github.com/faterium/faterium-dapp/blob/v0.2.1/docker-compose.yml). |
| 0e. | Article | https://medium.com/@dodorare/power-of-voting-why-does-the-world-need-a-universal-voting-platform-e98cf64e06c9 | We wrote an article that explains Faterium goals, Crowdfunding Polls, and future plans. [Published on Medium](https://medium.com/@dodorare/power-of-voting-why-does-the-world-need-a-universal-voting-platform-e98cf64e06c9). |
| 1. | Create design for Faterium dApp | https://dapp.faterium.com | We designed minimalistic Faterium UI that already available on https://dapp.faterium.com. |
| 2. | Extend Faterium server | https://github.com/faterium/faterium-server/tree/v0.2.1/ | We updated server collections for new features like: Communities, User Profiles, Categories, Assets. |
| 3. | All web pages for dApp | https://dapp.faterium.com | [Communities](https://dapp.faterium.com/communities), [Open Community](https://dapp.faterium.com/communities/polkadot), [User Profiles](https://dapp.faterium.com/profiles/jonsnowfan), [Categories](https://dapp.faterium.com/categories), [Category creation](https://dapp.faterium.com/create/category), [Assets creation](https://dapp.faterium.com/create/asset), [Crowdfunding Polls](https://dapp.faterium.com/create/poll), [User Profile configuration](https://dapp.faterium.com/create/profile), [Community creation](https://dapp.faterium.com/create/community) |
