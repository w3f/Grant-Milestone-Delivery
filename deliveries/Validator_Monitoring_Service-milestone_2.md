# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones.
> 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.
> 

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Validator_Monitoring_Service.md
- **Milestone Number:** 2

**Context** (optional)

The 2nd milestone took much longer than we originally expected.  Please accept our apologies, and we appreciate the patience of W3F. The short update on this milestone is that all deliverables have been completed. The most important things in this Milestone were the full updating of the telegram bot (now it is much easier to manage Grafana access, and subscriptions to alerts were added) and the support of major parachains.  The value of our Monitoring tool is that it’s easily adaptable for many more alert types (we added the essential alerts — taken from our everyday usage), and the support for more parachains could be added easily.

**Deliverables**

| Number | Deliverable | Specification | Link | Notes |
| --- | --- | --- | --- | --- |
| 0a. | License | Apache 2.0 |  |  |
| 0b. | Documentation | We will provide a tutorial page that explains how a user can set up monitoring for selected validators. We show how our functionality works and give reasoning and explanations for all metrics that are shown to the user. |  |  |
| 0c. | Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | https://github.com/p2p-org/polkadot_monitoring_service |  |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to self-host the telegram bot and check the functionality. |  |  |
| 0e. | Article | We will publish an article that explains the user flow of our system and promotes using monitoring for validators operators. | https://p2p.org/economy/validator-monitoring-service-user-guide/ | A user guide that covers all functionality of the Grafana dashboard and telegram bot |
| 1. | Telegram bot adding alerting based on events | We will introduce a feature that allows users to subscribe to specific events. This means users can opt to receive Telegram notifications when their chosen validators receive rewards, are elected into the active set, and more. | Tg bot is made for self-hosted version (just follow the steps in repo and create your own tg bot) or by using our  bot: @p2pvalidator_monitoring_bot | The alerting subscription is added to the tg bot, and the alerting system is fully functional based on on-chain events exporters for all networks. |
| 2. | Improve UX Dashboard | We plan to streamline Grafana's interface by removing surplus controls, enhancing the quality of our charts, and implementing Kiosk mode. We aim to bolster security through provisioning measures, such as enforcing password changes for users. | Grafana is available either in self-hosted version (locally) or by using our bot @@p2pvalidator_monitoring_bot | The UX is improved; for a user, it’s possible to track all validators simultaneously (just with a simple filter) and well as a separate dashboard for major parachains for added. |
| 3. | Cover monitoring for parachains | We will add the support of the most popular parachains such as Moonbeam, Moonriver, Acala, Karura, Astar, Shiden | Also available by self-hosted version or in our bot @p2pvalidator_monitoring_bot | Grafana dashboard, monitoring, and alerting system is available for both relay chains, Polkadot and Kusama, as well as for major parachains such as Moonbeam, Moonriver, Acala, and Karura. |
| 4. | Auto-remove instances | We will develop a system that identifies and removes inactive Grafana instances. | Single instance solution made | Done; the system is automated and does not create a separate Grafana instance for each user. It simplifies the deployment and management of back-end infrastructure |
