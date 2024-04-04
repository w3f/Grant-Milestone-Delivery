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

Containers set up nicely:

```sh
docker ps
CONTAINER ID   IMAGE                                                    COMMAND                  CREATED          STATUS          PORTS                           NAMES
9a07074e4e6c   grafana/grafana:latest                                   "/run.sh"                46 seconds ago   Up 41 seconds   0.0.0.0:3000->3000/tcp          polkadot_monitoring_service-grafana-1
7d0198ae2382   polkadot_monitoring_service-validators_cache             "python3 update_cach…"   46 seconds ago   Up 41 seconds                                   polkadot_monitoring_service-validators_cache-1
70d53146be3e   prom/alertmanager:latest                                 "/bin/alertmanager -…"   46 seconds ago   Up 44 seconds   0.0.0.0:9093->9093/tcp          polkadot_monitoring_service-alertmanager-1
bdf6d607eae0   polkadot_monitoring_service-polkadot_finality_exporter   "python3 app.py"         46 seconds ago   Up 43 seconds                                   polkadot_monitoring_service-polkadot_finality_exporter-1
96c8a4f9cede   polkadot_monitoring_service-polkadot_events_exporter     "/app/events-exporter"   46 seconds ago   Up 44 seconds                                   polkadot_monitoring_service-polkadot_events_exporter-1
57030346aed0   polkadot_monitoring_service-kusama_events_exporter       "/app/events-exporter"   46 seconds ago   Up 43 seconds                                   polkadot_monitoring_service-kusama_events_exporter-1
2b0e329903f8   postgres:13                                              "docker-entrypoint.s…"   46 seconds ago   Up 44 seconds   0.0.0.0:5432->5432/tcp          polkadot_monitoring_service-postgres-1
54a598a146f2   prom/prometheus:latest                                   "/bin/prometheus --c…"   46 seconds ago   Up 43 seconds   0.0.0.0:9090->9090/tcp          polkadot_monitoring_service-prometheus-1
236a5d814a45   polkadot_monitoring_service-kusama_common_exporter       "python3 app.py"         46 seconds ago   Up 43 seconds                                   polkadot_monitoring_service-kusama_common_exporter-1
3b3184a2e268   redis:latest                                             "docker-entrypoint.s…"   46 seconds ago   Up 44 seconds   0.0.0.0:6379->6379/tcp          polkadot_monitoring_service-redis-1
04b84ba045db   dpage/pgadmin4                                           "/entrypoint.sh"         46 seconds ago   Up 44 seconds   443/tcp, 0.0.0.0:5050->80/tcp   polkadot_monitoring_service-pgadmin-1
ed94433dfa0a   polkadot_monitoring_service-bot                          "python3 ./"             46 seconds ago   Up 43 seconds   0.0.0.0:8080->8080/tcp          polkadot_monitoring_service-bot-1
a713cbfaa8ba   polkadot_monitoring_service-polkadot_common_exporter     "python3 app.py"         46 seconds ago   Up 44 seconds                                   polkadot_monitoring_service-polkadot_common_exporter-1
2294221eadcf   polkadot_monitoring_service-github_release_exporter      "python3 app.py"         46 seconds ago   Up 43 seconds                                   polkadot_monitoring_service-github_release_exporter-1
f0e1a0c861ed   polkadot_monitoring_service-kusama_finality_exporter     "python3 app.py"         46 seconds ago   Up 44 seconds
```

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
Works w/ Grafana on Polkadot, Kusama, Astar, Shiden, Acala, Karura, Moonbeam, Moonriver.

<details>
 <summary>Output</summary>
 
```py
gadmin-1                     | pgAdmin 4 - Application Initialisation
pgadmin-1                     | ======================================
pgadmin-1                     |
moonbeam_exporter-1           | 2024-04-04 06:59:50 INFO: Processing block 5873160
moonbeam_exporter-1           | 2024-04-04 06:59:50 INFO: Collator 0x002ad15f48168f2b40083cc704833b91f278e2e6 has just constructed block 5873160
pgadmin-1                     | postfix/postlog: starting the Postfix mail system
shiden_exporter-1             | 2024-04-04 06:59:54 INFO: Processing block 6254577
polkadot_finality_exporter-1  | 2024-04-04 06:59:54 INFO: Round 2960 has processed. Prevotes: 296. Precommits:  0
polkadot_finality_exporter-1  | 2024-04-04 06:59:54 INFO: Round 2962 has processed. Prevotes: 297. Precommits:  193
polkadot_finality_exporter-1  | 2024-04-04 06:59:54 INFO: Round 2963 has processed. Prevotes: 297. Precommits:  178
acala_exporter-1              | 2024-04-04 06:59:55 INFO: 172.24.0.13 - - [04/Apr/2024 18:59:55] "GET /metrics HTTP/1.1" 200 -
pgadmin-1                     | [2024-04-04 18:59:56 +0000] [1] [INFO] Starting gunicorn 20.1.0
pgadmin-1                     | [2024-04-04 18:59:56 +0000] [1] [INFO] Listening at: http://[::]:80 (1)
pgadmin-1                     | [2024-04-04 18:59:56 +0000] [1] [INFO] Using worker: gthread
pgadmin-1                     | [2024-04-04 18:59:56 +0000] [117] [INFO] Booting worker with pid: 117
grafana-1                     | logger=provisioning.dashboard type=file name="a unique provider name" t=2024-04-04T18:59:57.124290004Z level=warn msg="Not saving new dashboard due to restricted database access" provisioner="a unique provider name" file=/etc/grafana/provisioning/dashboards/manta.json folderId=0
astar_exporter-1              | 2024-04-04 06:59:57 INFO: 172.24.0.13 - - [04/Apr/2024 18:59:57] "GET /metrics HTTP/1.1" 200 -
shiden_exporter-1             | 2024-04-04 06:59:57 INFO: 172.24.0.13 - - [04/Apr/2024 18:59:57] "GET /metrics HTTP/1.1" 200 -
moonriver_exporter-1          | 2024-04-04 06:59:58 INFO: Processing block 6480606
astar_exporter-1              | 2024-04-04 06:59:58 INFO: Processing block 5885887
polkadot_common_exporter-1    | 2024-04-04 06:59:58 INFO: 172.24.0.13 - - [04/Apr/2024 18:59:58] "GET /metrics HTTP/1.1" 200 -
moonriver_exporter-1          | 2024-04-04 06:59:58 INFO: Collator 0x6e31b30b8fd37a47941907686b80b46d2d747bbd has just constructed block 6480606
kusama_finality_exporter-1    | 2024-04-04 06:59:58 INFO: Round 455 has processed. Prevotes: 969. Precommits:  2
karura_exporter-1             | 2024-04-04 06:59:58 INFO: 172.24.0.13 - - [04/Apr/2024 18:59:58] "GET /metrics HTTP/1.1" 200 -
kusama_finality_exporter-1    | 2024-04-04 06:59:58 INFO: Round 456 has processed. Prevotes: 328. Precommits:  2
kusama_finality_exporter-1    | 2024-04-04 06:59:59 INFO: Round 458 has processed. Prevotes: 975. Precommits:  2
kusama_finality_exporter-1    | 2024-04-04 06:59:59 INFO: Round 459 has processed. Prevotes: 975. Precommits:  2
moonbeam_exporter-1           | 2024-04-04 06:59:59 INFO: 172.24.0.13 - - [04/Apr/2024 18:59:59] "GET /metrics HTTP/1.1" 200 -
kusama_finality_exporter-1    | 2024-04-04 06:59:59 INFO: 172.24.0.13 - - [04/Apr/2024 18:59:59] "GET /metrics HTTP/1.1" 200 -
moonbeam_exporter-1           | 2024-04-04 07:00:01 INFO: Processing block 5873161
moonbeam_exporter-1           | 2024-04-04 07:00:02 INFO: Collator 0x5d6d1a59fd3e6cf325faccbea4d1265b15d34acb has just constructed block 5873161
shiden_exporter-1             | 2024-04-04 07:00:05 INFO: Collator bKjjDERBmcQMmpyxepykZJRMJDnbdCjWBQs8LJvGEbjKSME has just constructed block 6254577
polkadot_finality_exporter-1  | 2024-04-04 07:00:06 INFO: Round 2964 has processed. Prevotes: 296. Precommits:  0
polkadot_finality_exporter-1  | 2024-04-04 07:00:06 INFO: Round 2965 has processed. Prevotes: 296. Precommits:  0
polkadot_finality_exporter-1  | 2024-04-04 07:00:06 INFO: Round 2966 has processed. Prevotes: 297. Precommits:  96
grafana-1                     | logger=provisioning.dashboard type=file name="a unique provider name" t=2024-04-04T19:00:07.129430426Z level=warn msg="Not saving new dashboard due to restricted database access" provisioner="a unique provider name" file=/etc/grafana/provisioning/dashboards/manta.json folderId=0
kusama_common_exporter-1      | 2024-04-04 07:00:07 INFO: 172.24.0.13 - - [04/Apr/2024 19:00:07] "GET /metrics HTTP/1.1" 200 -
shiden_exporter-1             | 2024-04-04 07:00:09 INFO: Processing block 6254578
kusama_finality_exporter-1    | 2024-04-04 07:00:13 INFO: Round 460 has processed. Prevotes: 973. Precommits:  105
kusama_finality_exporter-1    | 2024-04-04 07:00:13 INFO: Round 461 has processed. Prevotes: 974. Precommits:  240
polkadot_finality_exporter-1  | 2024-04-04 07:00:13 INFO: 172.24.0.13 - - [04/Apr/2024 19:00:13] "GET /metrics HTTP/1.1" 200 -
kusama_finality_exporter-1    | 2024-04-04 07:00:13 INFO: Round 462 has processed. Prevotes: 973. Precommits:  2
kusama_finality_exporter-1    | 2024-04-04 07:00:13 INFO: Round 463 has processed. Prevotes: 972. Precommits:  2
astar_exporter-1              | 2024-04-04 07:00:13 INFO: Collator XBFG36u1VwfunFERSjDAywJGsG86atqccCukQ33jsVQYCJD has just constructed block 5885887
moonriver_exporter-1          | 2024-04-04 07:00:14 INFO: Processing block 6480607
moonriver_exporter-1          | 2024-04-04 07:00:14 INFO: Collator 0x7234af900afaca291b551b0386b962dd9d571434 has just constructed block 6480607
moonriver_exporter-1          | 2024-04-04 07:00:14 INFO: 172.24.0.13 - - [04/Apr/2024 19:00:14] "GET /metrics HTTP/1.1" 200 -
moonbeam_exporter-1           | 2024-04-04 07:00:16 INFO: Processing block 5873162
moonbeam_exporter-1           | 2024-04-04 07:00:16 INFO: Collator 0x834e4e90718673cbc3508a29877b20c5c2ba2417 has just constructed block 5873162
grafana-1                     | logger=provisioning.dashboard t=2024-04-04T19:00:17.106091708Z level=warn msg="the same UID is used more than once" orgId=1 uid=a3546873-0ef7-4ff6-97a8-c2875878762e times=2 providers="[a unique provider name]"
grafana-1                     | logger=provisioning.dashboard t=2024-04-04T19:00:17.106972125Z level=warn msg="dashboards provisioning provider has no database write permissions because of duplicates" provider="a unique provider name" orgId=1
github_release_exporter-1     | 2024-04-04 07:00:17 INFO: 172.24.0.13 - - [04/Apr/2024 19:00:17] "GET /metrics HTTP/1.1" 200 -
grafana-1                     | logger=provisioning.dashboard type=file name="a unique provider name" t=2024-04-04T19:00:17.119104041Z level=warn msg="Not saving new dashboard due to restricted database access" provisioner="a unique provider name" file=/etc/grafana/provisioning/dashboards/manta.json folderId=0
astar_exporter-1              | 2024-04-04 07:00:17 INFO: Processing block 5885889
polkadot_finality_exporter-1  | 2024-04-04 07:00:17 INFO: Round 2967 has processed. Prevotes: 296. Precommits:  0
polkadot_finality_exporter-1  | 2024-04-04 07:00:17 INFO: Round 2968 has processed. Prevotes: 297. Precommits:  0
polkadot_finality_exporter-1  | 2024-04-04 07:00:17 INFO: Round 2969 has processed. Prevotes: 297. Precommits:  0
astar_exporter-1              | 2024-04-04 07:00:18 INFO: Collator WDa63eyRCLi9TPe4ePtuJUqg32S2aqfaw7NnbLD33WnRJMu has just constructed block 5885889
shiden_exporter-1             | 2024-04-04 07:00:21 INFO: Collator aRgPWGYew35zUyEdo3tKEZUVo4zuPJWxStSWf5kXqXNWqes has just constructed block 6254578
shiden_exporter-1             | 2024-04-04 07:00:25 INFO: Processing block 6254580
acala_exporter-1              | 2024-04-04 07:00:25 INFO: 172.24.0.13 - - [04/Apr/2024 19:00:25] "GET /metrics HTTP/1.1" 200 -
shiden_exporter-1             | 2024-04-04 07:00:25 INFO: Collator WDa63eyRCLi9TPe4ePtuJUqg32S2aqfaw7NnbLD33WnRJMu has just constructed block 6254580
moonriver_exporter-1          | 2024-04-04 07:00:26 INFO: Processing block 6480608
moonriver_exporter-1          | 2024-04-04 07:00:26 INFO: Collator 0x4828e3d2a1c4b0a90a2a125b9d53204efaf876a5 has just constructed block 6480608
moonbeam_exporter-1           | 2024-04-04 07:00:27 INFO: Processing block 5873163
grafana-1                     | logger=provisioning.dashboard type=file name="a unique provider name" t=2024-04-04T19:00:27.185081754Z level=warn msg="Not saving new dashboard due to restricted database access" provisioner="a unique provider name" file=/etc/grafana/provisioning/dashboards/manta.json folderId=0
astar_exporter-1              | 2024-04-04 07:00:27 INFO: 172.24.0.13 - - [04/Apr/2024 19:00:27] "GET /metrics HTTP/1.1" 200 -
moonbeam_exporter-1           | 2024-04-04 07:00:27 INFO: Collator 0xa345728816d83533a24bf1d980009f3b01cec2fe has just constructed block 5873163
shiden_exporter-1             | 2024-04-04 07:00:27 INFO: 172.24.0.13 - - [04/Apr/2024 19:00:27] "GET /metrics HTTP/1.1" 200 -
polkadot_common_exporter-1    | 2024-04-04 07:00:28 INFO: 172.24.0.13 - - [04/Apr/2024 19:00:28] "GET /metrics HTTP/1.1" 200 -
karura_exporter-1             | 2024-04-04 07:00:28 INFO: 172.24.0.13 - - [04/Apr/2024 19:00:28] "GET /metrics HTTP/1.1" 200 -
kusama_finality_exporter-1    | 2024-04-04 07:00:29 INFO: Round 464 has processed. Prevotes: 957. Precommits:  2
kusama_finality_exporter-1    | 2024-04-04 07:00:29 INFO: Round 465 has processed. Prevotes: 969. Precommits:  232
kusama_finality_exporter-1    | 2024-04-04 07:00:29 INFO: Round 466 has processed. Prevotes: 970. Precommits:  2
kusama_finality_exporter-1    | 2024-04-04 07:00:29 INFO: Round 467 has processed. Prevotes: 970. Precommits:  2
moonbeam_exporter-1           | 2024-04-04 07:00:29 INFO: 172.24.0.13 - - [04/Apr/2024 19:00:29] "GET /metrics HTTP/1.1" 200 -
kusama_finality_exporter-1    | 2024-04-04 07:00:29 INFO: 172.24.0.13 - - [04/Apr/2024 19:00:29] "GET /metrics HTTP/1.1" 200 -
polkadot_finality_exporter-1  | 2024-04-04 07:00:30 INFO: Round 2970 has processed. Prevotes: 297. Precommits:  190
polkadot_finality_exporter-1  | 2024-04-04 07:00:30 INFO: Round 2971 has processed. Prevotes: 296. Precommits:  198
polkadot_events_exporter-1    | time="2024-04-04T19:00:35Z" level=info msg="exporters average events rate 138/min" func="main.(*HeadReader).Read.func1" file="/build/cmd/events-exporter/reader.go:264"
kusama_events_exporter-1      | time="2024-04-04T19:00:35Z" level=info msg="exporters average events rate 163/min" func="main.(*HeadReader).Read.func1" file="/build/cmd/events-exporter/reader.go:264"
grafana-1                     | logger=provisioning.dashboard type=file name="a unique provider name" t=2024-04-04T19:00:37.120252093Z level=warn msg="Not saving new dashboard due to restricted database access" provisioner="a unique provider name" file=/etc/grafana/provisioning/dashboards/manta.json folderId=0
kusama_common_exporter-1      | 2024-04-04 07:00:37 INFO: 172.24.0.13 - - [04/Apr/2024 19:00:37] "GET /metrics HTTP/1.1" 200 -
astar_exporter-1              | 2024-04-04 07:00:38 INFO: Processing block 5885891
moonriver_exporter-1          | 2024-04-04 07:00:39 INFO: Processing block 6480609
moonriver_exporter-1          | 2024-04-04 07:00:39 INFO: Collator 0x2bcb75e8590f945596e44a94c6b9ba327745117a has just constructed block 6480609
astar_exporter-1              | 2024-04-04 07:00:39 INFO: Collator YvWEPYi6BRqpLeKQRQP1XZoWc6JM3LoZDCXgMNgtswXULvb has just constructed block 5885891
grafana-1                     | logger=infra.usagestats t=2024-04-04T19:00:41.813195845Z level=info msg="Usage stats are ready to report"
polkadot_finality_exporter-1  | 2024-04-04 07:00:43 INFO: 172.24.0.13 - - [04/Apr/2024 19:00:43] "GET /metrics HTTP/1.1" 200 -
shiden_exporter-1             | 2024-04-04 07:00:43 INFO: Processing block 6254581
shiden_exporter-1             | 2024-04-04 07:00:44 INFO: Collator X7akruMgRDexYc4oCrfky25ksVyEArKDRa9jFDiaaJt5dWh has just constructed block 6254581
moonriver_exporter-1          | 2024-04-04 07:00:44 INFO: 172.24.0.13 - - [04/Apr/2024 19:00:44] "GET /metrics HTTP/1.1" 200 -
moonbeam_exporter-1           | 2024-04-04 07:00:45 INFO: Processing block 5873164
moonbeam_exporter-1           | 2024-04-04 07:00:45 INFO: Collator 0x0fc18c08667dc0c026659ad11a73920bd5d5eeac has just constructed block 5873164
```
</details>
