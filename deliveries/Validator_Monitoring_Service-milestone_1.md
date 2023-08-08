# MaaS Milestone 1

# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones.
> 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.
> 

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/pull/1791
- **Milestone Number:** 1

**Context** (optional)

During the current milestone, our team prioritized enhancing technical aspects associated with user onboarding and incorporating validator-related events into our monitoring processes. We redesigned our Telegram bot entirely to streamline the user experience by enabling them to acquire their personal dashboard credentials directly from the bot. As a result, the selection of  validators to monitor happens directly from within users’ dashboards.

Moreover, we integrated a range of validator-related events into the dashboard, including balances, Imonline, proxy, staking, ParasDisputes, and others. These events, which significantly impact validator operations, provide a more comprehensive view of the validator's functioning. Alongside these advancements, we launched a new webpage to introduce our services to users, intending to bolster user understanding and engagement.

The current deliverable is a portable version of our service. That means that we provide two components 1) exporters and a Grafana instance. 2) tg bot. In the portable version, these components are independent and fully working locally. To set up monitoring as a service one needs to use his/her own infrastructure (which is impossible to provide in a repository). However, we provide all the necessary tools and run an our own monitoring as a service.  

**Deliverables**

| Number | Deliverable | Link | Notes |
| --- | --- | --- | --- |
| 0a. | License | Apache 2.0 |  |
| 0b. | Documentation | https://github.com/p2p-org/polkadot_monitoring_service/blob/main/docs/overview.md | And  |
| 0c. | Testing Guide | https://github.com/p2p-org/polkadot_monitoring_service#events-exporters-and-grafana-dashboard | You need to test two components: 
1) exporters and a Grafana instance: after running docker-compose, go to the local Grafana http://127.0.0.1:3000/d/fDrj0_EGz/p2p-org-polkadot-kusama-dashboard?orgId=1 and check that for the validators the collection of metrics started (the dashboard is not empty)
2) tg bot: follow the instruction in the read me (tg bot should generate values.yml for the Grafana) |
| 0d. | Docker | https://github.com/p2p-org/polkadot_monitoring_service |  |
| 1. | Events exporter | https://github.com/p2p-org/polkadot_monitoring_service/tree/main/exporters/events | We collect data for unique metrics such as finality (prevotes and pre commits), common data (rewards points, etc), and validator-related events. 
Everything dockerised  |
| 2. | Telegram bot UI + support chat upgrades | https://github.com/p2p-org/polkadot_monitoring_service/tree/main/bot | A bot provides full monitoring as a service and sets up a personal Grafana dashboard for every platform user (you do not need to run tg bot if you run it only locally and only for yourself (without external users).  |
| 3. | Create a landing page | https://maas.p2p.org/ | Template in figma: https://www.figma.com/file/QUcO9g8FoiXDlNBUmIkdXm/MaaS?type=design&mode=design&t=LpmIkQyUPFyiSni6-0 |

**Additional Information**

The delivery plan for the Milestone 2 which covers all deliverables indicated in the proposal :
