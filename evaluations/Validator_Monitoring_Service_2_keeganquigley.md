# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Validator_Monitoring_Service.md
- **Milestone:** 2

**Deliverables**

| Number | Deliverable | Accepted | Specification | Link | Notes |
| --- | --- | --- | --- | --- | --- |
| 0a. | License | <ul><li>[x] </li></ul> | Apache 2.0 |  |  | 
| 0b. | Documentation | <ul><li>[x] </li></ul> | We will provide a tutorial page that explains how a user can set up monitoring for selected validators. We show how our functionality works and give reasoning and explanations for all metrics that are shown to the user. |  |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | https://github.com/p2p-org/polkadot_monitoring_service |  |
| 0d. | Docker | <ul><li>[x] </li></ul> | We will provide a Dockerfile(s) that can be used to self-host the telegram bot and check the functionality. |  |  |
| 0e. | Article | <ul><li>[x] </li></ul> | We will publish an article that explains the user flow of our system and promotes using monitoring for validators operators. | https://p2p.org/economy/validator-monitoring-service-user-guide/ | A user guide that covers all functionality of the Grafana dashboard and telegram bot |
| 1. | Telegram bot adding alerting based on events | <ul><li>[x] </li></ul> | We will introduce a feature that allows users to subscribe to specific events. This means users can opt to receive Telegram notifications when their chosen validators receive rewards, are elected into the active set, and more. | Tg bot is made for self-hosted version (just follow the steps in repo and create your own tg bot) or by using our  bot: @p2pvalidator_monitoring_bot | The alerting subscription is added to the tg bot, and the alerting system is fully functional based on on-chain events exporters for all networks. |
| 2. | Improve UX Dashboard | <ul><li>[x] </li></ul> | We plan to streamline Grafana's interface by removing surplus controls, enhancing the quality of our charts, and implementing Kiosk mode. We aim to bolster security through provisioning measures, such as enforcing password changes for users. | Grafana is available either in self-hosted version (locally) or by using our bot @@p2pvalidator_monitoring_bot | The UX is improved; for a user, it’s possible to track all validators simultaneously (just with a simple filter) and well as a separate dashboard for major parachains for added. |
| 3. | Cover monitoring for parachains | <ul><li>[x] </li></ul> | We will add the support of the most popular parachains such as Moonbeam, Moonriver, Acala, Karura, Astar, Shiden | Also available by self-hosted version or in our bot @p2pvalidator_monitoring_bot | Grafana dashboard, monitoring, and alerting system is available for both relay chains, Polkadot and Kusama, as well as for major parachains such as Moonbeam, Moonriver, Acala, and Karura. |
| 4. | Auto-remove instances | <ul><li>[x] </li></ul> | We will develop a system that identifies and removes inactive Grafana instances. | Single instance solution made | Done; the system is automated and does not create a separate Grafana instance for each user. It simplifies the deployment and management of back-end infrastructure |

# General Notes

Services properly stop & start.
```rust
github_release_exporter_1     | 2024-04-02 09:37:24 INFO: 172.18.0.9 - - [02/Apr/2024 21:37:24] "GET /metrics HTTP/1.1" 200 -
grafana_1                     | logger=provisioning.dashboard type=file name="a unique provider name" t=2024-04-02T21:37:25.02648051Z level=warn msg="Not saving new dashboard due to restricted database access" provisioner="a unique provider name" file=/etc/grafana/provisioning/dashboards/astar.json folderId=0
kusama_finality_exporter_1    | 2024-04-02 09:37:25 CRITICAL: RPC enpdoint wss://kusama-rpc.polkadot.io marked as outaged
kusama_finality_exporter_1    | 2024-04-02 09:37:27 CRITICAL: RPC enpdoint wss://kusama-rpc.polkadot.io marked as outaged
polkadot_finality_exporter_1  | 2024-04-02 09:37:28 INFO: Round 5251 has processed. Prevotes: 297. Precommits:  169
kusama_finality_exporter_1    | 2024-04-02 09:37:28 CRITICAL: RPC enpdoint wss://kusama-rpc.polkadot.io marked as outaged
kusama_finality_exporter_1    | 2024-04-02 09:37:30 CRITICAL: RPC enpdoint wss://kusama-rpc.polkadot.io marked as outaged
kusama_common_exporter_1      | 2024-04-02 09:37:30 INFO: 172.18.0.9 - - [02/Apr/2024 21:37:30] "GET /metrics HTTP/1.1" 200 -
kusama_finality_exporter_1    | 2024-04-02 09:37:31 CRITICAL: RPC enpdoint wss://kusama-rpc.polkadot.io marked as outaged
polkadot_finality_exporter_1  | 2024-04-02 09:37:32 INFO: Round 5252 has processed. Prevotes: 297. Precommits:  0
kusama_finality_exporter_1    | 2024-04-02 09:37:33 CRITICAL: RPC enpdoint wss://kusama-rpc.polkadot.io marked as outaged
^CGracefully stopping... (press Ctrl+C again to force)
Stopping polkadot_monitoring_service_grafana_1                    ... done
Stopping polkadot_monitoring_service_validators_cache_1           ... done
Stopping polkadot_monitoring_service_alertmanager_1               ... done
Stopping polkadot_monitoring_service_polkadot_events_exporter_1   ... done
Stopping polkadot_monitoring_service_polkadot_common_exporter_1   ... done
Stopping polkadot_monitoring_service_kusama_finality_exporter_1   ... done
Stopping polkadot_monitoring_service_prometheus_1                 ... done
Stopping polkadot_monitoring_service_redis_1                      ... done
Stopping polkadot_monitoring_service_github_release_exporter_1    ... done
Stopping polkadot_monitoring_service_kusama_common_exporter_1     ... done
Stopping polkadot_monitoring_service_kusama_events_exporter_1     ... done
Stopping polkadot_monitoring_service_polkadot_finality_exporter_1 ... done
Stopping polkadot_monitoring_service_postgres_1                   ... done
Stopping polkadot_monitoring_service_pgadmin_1                    ... done
ubuntu@ip-172-31-26-193:~/polkadot_monitoring_service$
```
