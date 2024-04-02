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
```ts
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
Dockerfiles build successfully.
```sh
[+] Building 0.9s (17/17) FINISHED                                                                                                        docker:default
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 606B                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/python:3.11-slim-buster                                                                          0.7s
 => [internal] load metadata for docker.io/alpine/flake8:latest                                                                                     0.8s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => [stage-1 1/8] FROM docker.io/library/python:3.11-slim-buster@sha256:c46b0ae5728c2247b99903098ade3176a58e274d9c7d2efeaaab3e0621a53935            0.0s
 => [linter 1/4] FROM docker.io/alpine/flake8:latest@sha256:a9453629c78f0c5193c4a302b9e1f363eb7933f5b56c29e56d56f363f8ddc752                        0.0s
 => [internal] load build context                                                                                                                   0.0s
 => => transferring context: 177B                                                                                                                   0.0s
 => CACHED [stage-1 2/8] RUN apt-get update && apt-get install -y gcc g++                                                                           0.0s
 => CACHED [stage-1 3/8] COPY requirements.txt requirements.txt                                                                                     0.0s
 => CACHED [stage-1 4/8] RUN pip3 install -r requirements.txt --no-cache-dir                                                                        0.0s
 => CACHED [stage-1 5/8] RUN groupadd -r exporter && useradd -r -g exporter exporter                                                                0.0s
 => CACHED [linter 2/4] WORKDIR /apps/                                                                                                              0.0s
 => CACHED [linter 3/4] COPY . /apps/                                                                                                               0.0s
 => CACHED [linter 4/4] RUN flake8 --ignore="E501" *.py                                                                                             0.0s
 => CACHED [stage-1 6/8] COPY --from=linter /apps/common_exporter.py app.py                                                                         0.0s
 => CACHED [stage-1 7/8] COPY --from=linter /apps/functions.py functions.py                                                                         0.0s
 => exporting to image                                                                                                                              0.0s
 => => exporting layers                                                                                                                             0.0s
 => => writing image sha256:90ad88e0566bd8fcbacf6a590b0b2c1fedc0346a1a6dbc1aa5b7f0fbdce7a295                                                        0.0s
ubuntu@ip-172-31-26-193:~/polkadot_monitoring_service/exporters/common$ docker build . -f Dockerfile --build-arg exporter=finality_exporter
[+] Building 0.5s (17/17) FINISHED                                                                                                        docker:default
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 606B                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/python:3.11-slim-buster                                                                          0.4s
 => [internal] load metadata for docker.io/alpine/flake8:latest                                                                                     0.3s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => [stage-1 1/8] FROM docker.io/library/python:3.11-slim-buster@sha256:c46b0ae5728c2247b99903098ade3176a58e274d9c7d2efeaaab3e0621a53935            0.0s
 => [internal] load build context                                                                                                                   0.0s
 => => transferring context: 177B                                                                                                                   0.0s
 => [linter 1/4] FROM docker.io/alpine/flake8:latest@sha256:a9453629c78f0c5193c4a302b9e1f363eb7933f5b56c29e56d56f363f8ddc752                        0.0s
 => CACHED [stage-1 2/8] RUN apt-get update && apt-get install -y gcc g++                                                                           0.0s
 => CACHED [stage-1 3/8] COPY requirements.txt requirements.txt                                                                                     0.0s
 => CACHED [stage-1 4/8] RUN pip3 install -r requirements.txt --no-cache-dir                                                                        0.0s
 => CACHED [stage-1 5/8] RUN groupadd -r exporter && useradd -r -g exporter exporter                                                                0.0s
 => CACHED [linter 2/4] WORKDIR /apps/                                                                                                              0.0s
 => CACHED [linter 3/4] COPY . /apps/                                                                                                               0.0s
 => CACHED [linter 4/4] RUN flake8 --ignore="E501" *.py                                                                                             0.0s
 => CACHED [stage-1 6/8] COPY --from=linter /apps/finality_exporter.py app.py                                                                       0.0s
 => CACHED [stage-1 7/8] COPY --from=linter /apps/functions.py functions.py                                                                         0.0s
 => exporting to image                                                                                                                              0.0s
 => => exporting layers                                                                                                                             0.0s
 => => writing image sha256:3757779ab896e6c766b0eb252205aad3777ccce1e8e36f2a86df4260f9c86a85
```
