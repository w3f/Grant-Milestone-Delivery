
# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Validator_Monitoring_Service.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul>| Apache 2.0 |  |
| 0b. | Documentation | <ul><li>[ ] </li></ul>| https://github.com/p2p-org/polkadot_monitoring_service/blob/main/docs/overview.md |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul>| https://github.com/p2p-org/polkadot_monitoring_service#events-exporters-and-grafana-dashboard |  |
| 0d. | Docker | <ul><li>[x] </li></ul>| https://github.com/p2p-org/polkadot_monitoring_service |  |
| 1. | Events exporter | <ul><li>[x] </li></ul>| https://github.com/p2p-org/polkadot_monitoring_service/tree/main/exporters/events |   |
| 2. | Telegram bot UI + support chat upgrades | <ul><li>[ ] </li></ul>| https://github.com/p2p-org/polkadot_monitoring_service/tree/main/bot | I didn't receive the personal dashboard.  |
| 3. | Create a landing page | <ul><li>[x] </li></ul>| https://maas.p2p.org/ |  |

## Evaluation V1

### About this Milestone

I noticed the Deliverables of this milestone delivery has some differences compared with the Application Document. Have you opened an [amendment request](https://github.com/w3f/Grants-Program#changes-to-a-grant-after-approval)? If not, you need to do it for change the deliverables of the milestones.

### Documentation

I noticed some broken links in the README, [the docker installation instructions](https://github.com/p2p-org/polkadot_monitoring_service/blob/main/README.md#how-to-setup-run-and-test), and all [links in the References](https://github.com/p2p-org/polkadot_monitoring_service/blob/main/README.md#how-to-setup-run-and-test). The documentation can be improved to better instructions to use the bot.

### Docker

The docker starts without problems.

### Telegram Bot

I created a new bot and used the commands `/start` and `/build`. After the build, I checked the `values.yml` (I changed the original Id).  

```
root@865c7112c54c:/app# cat values.yml
applications:
- 2784512564
```

Then, I used the command `/destroy` and checked again the `values.yml`.

```
root@865c7112c54c:/app# cat values.yml
applications: []
```

I built again and activated the `/promealert` and waited for the personalized Dashboard, but the bot didn't return anything related to the Dashboard. 

When I was testing the Dashboard, I received two alerts at different times.

```
Prometheus alerting

Severity: high
Alert name: Common exporter availibility
Message: Common exporter kusama_common_exporter is down.

You can always disable notification such this by calling /promalert

Feel free to contact us /support if any questions.
```

```
Prometheus alerting

Severity: high
Alert name: Common exporter availibility
Message: Common exporter polkadot_common_exporter is down.

You can always disable notification such this by calling /promalert

Feel free to contact us /support if any questions.
```

After receiving these alerts, I restarted the docker containers.

### Dashboard

For some reason, the docker container stopped working properly before the bot reported the problems mentioned above, but the functionalities of the dashboard seems to be fine.
