# Evaluation

- **Status:** Accepted
- **Application Document:** [Validator-Monitoring-Service](https://github.com/w3f/Grants-Program/blob/master/applications/Validator_Monitoring_Service.md) 
- **Milestone:** 1
- **Kusama Identity:** Eexv1mKLiCidz2gGh6vfowtXgSSc7mvD4xEb2ji998W4DPs
- **Previously successfully merged evaluation:** All evaluations by ali-usama

| Number | Deliverable                             | Accepted               | Link                                                                                                                                                                                             | Evaluation Notes                                                |
|--------|-----------------------------------------|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| 0a.    | Licence                                 | <ul><li>[ ] </li></ul> | [Apache 2.0](https://github.com/p2p-org/polkadot_monitoring_service/blob/main/LICENSE)                                                                                                           | Correct Licence                                                 |
| 0b.    | Documentation                           | <ul><li>[ ] </li></ul> | [Project overview](https://github.com/p2p-org/polkadot_monitoring_service/blob/main/docs/overview.md), <br/>[ReadMe](https://github.com/p2p-org/polkadot_monitoring_service/blob/main/README.md) | Well-written docs                                               |
| 0c.    | Testing Guide                           | <ul><li>[ ] </li></ul> | [Setup, run and Test](https://github.com/p2p-org/polkadot_monitoring_service#how-to-setup-run-and-test)                                                                                          | Working as per application                                      |
| 0d.    | Docker                                  | <ul><li>[ ] </li></ul> | [Docker Setup](https://github.com/p2p-org/polkadot_monitoring_service#how-to-setup-run-and-test)                                                                                                 | Docker containers running successfully. Outputs attached below. |
| 1.     | Events explorer                         | <ul><li>[ ] </li></ul> | [events](https://github.com/p2p-org/polkadot_monitoring_service/tree/main/exporters/events)                                                                                                      | Working as per application                                      |
| 2.     | Telegram bot UI + support chat upgrades | <ul><li>[ ] </li></ul> | [bot](https://github.com/p2p-org/polkadot_monitoring_service/tree/main/bot)                                                                                                                      | Working as per application                                      |
| 3.     | Create a landing page                   | <ul><li>[ ] </li></ul> | https://maas.p2p.org/                                                                                                                                                                            | Nice looking designs and pages                                  |


## General Notes

The delivery repo is well-structured and the documentation could include some more details. However, no critical issues were found during testing as the docker containers were working as expected.

### `docker-compose` outputs
1. `docker-compose -f docker-compose.yml -f polkadot.yml up`
```commandline
[+] Running 59/36
 ✔ prometheus 12 layers [⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                                                                                              504.5s 
 ✔ grafana 9 layers [⣿⣿⣿⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                                                                                                     846.2s 
 ✔ pgadmin 14 layers [⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                                                                                              1566.5s 
 ✔ postgres 13 layers [⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                                                                                              1011.5s 
 ✔ alertmanager 6 layers [⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                                                                                                   106.3s 
                                                                                                                                                                                                                                                                                                                             
[+] Building 1901.6s (60/60) FINISHED                                                                                                                             
 => [polkadot_finality_exporter internal] load build definition from Dockerfile                                                                              0.0s
 => => transferring dockerfile: 606B                                                                                                                         0.0s
 => [polkadot_finality_exporter internal] load .dockerignore                                                                                                 0.0s
 => => transferring context: 2B                                                                                                                              0.0s
 => [polkadot_common_exporter internal] load metadata for docker.io/library/python:3.11-slim-buster                                                         11.0s
 => [polkadot_common_exporter internal] load metadata for docker.io/alpine/flake8:latest                                                                    11.2s
 => [polkadot_events_exporter internal] load build definition from Dockerfile                                                                                0.0s
 => => transferring dockerfile: 499B                                                                                                                         0.0s
 => [polkadot_events_exporter internal] load .dockerignore                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                              0.0s
 => [polkadot_events_exporter internal] load metadata for docker.io/library/alpine:3.17                                                                     10.6s
 => [polkadot_events_exporter internal] load metadata for docker.io/golangci/golangci-lint:v1.53-alpine                                                     10.3s
 => [polkadot_events_exporter internal] load metadata for docker.io/library/golang:1.20-alpine                                                              11.8s
 => [polkadot_common_exporter internal] load .dockerignore                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                              0.0s
 => [polkadot_common_exporter internal] load build definition from Dockerfile                                                                                0.0s
 => => transferring dockerfile: 606B                                                                                                                         0.0s
 => [bot internal] load .dockerignore                                                                                                                        0.2s
 => => transferring context: 2B                                                                                                                              0.0s
 => [bot internal] load build definition from Dockerfile                                                                                                     0.2s
 => => transferring dockerfile: 282B                                                                                                                         0.0s
 => [bot internal] load metadata for docker.io/library/ubuntu:22.04                                                                                          6.9s
 => [bot 1/6] FROM docker.io/library/ubuntu:22.04@sha256:0bced47fffa3361afa981854fcabcd4577cd43cebbb808cea2b1f33a3dd7f508                                  261.8s
 => => resolve docker.io/library/ubuntu:22.04@sha256:0bced47fffa3361afa981854fcabcd4577cd43cebbb808cea2b1f33a3dd7f508                                        0.0s
 => => sha256:3153aa388d026c26a2235e1ed0163e350e451f41a8a313e1804d7e1afb857ab4 29.53MB / 29.53MB                                                           260.3s
 => => sha256:0bced47fffa3361afa981854fcabcd4577cd43cebbb808cea2b1f33a3dd7f508 1.13kB / 1.13kB                                                               0.0s
 => => sha256:b060fffe8e1561c9c3e6dea6db487b900100fc26830b9ea2ec966c151ab4c020 424B / 424B                                                                   0.0s
 => => sha256:5a81c4b8502e4979e75bd8f91343b95b0d695ab67f241dbed0d1530a35bde1eb 2.30kB / 2.30kB                                                               0.0s
 => => extracting sha256:3153aa388d026c26a2235e1ed0163e350e451f41a8a313e1804d7e1afb857ab4                                                                    1.3s
 => [bot internal] load build context                                                                                                                        0.0s
 => => transferring context: 24.05kB                                                                                                                         0.0s
 => [polkadot_common_exporter stage-1 1/8] FROM docker.io/library/python:3.11-slim-buster@sha256:c46b0ae5728c2247b99903098ade3176a58e274d9c7d2efeaaab3e06  347.6s
 => => resolve docker.io/library/python:3.11-slim-buster@sha256:c46b0ae5728c2247b99903098ade3176a58e274d9c7d2efeaaab3e0621a53935                             0.0s
 => => sha256:c46b0ae5728c2247b99903098ade3176a58e274d9c7d2efeaaab3e0621a53935 988B / 988B                                                                   0.0s
 => => sha256:b94af75d4ff65c50bf1b2119bca6d0ba707037bacd0cb75314801a6953c03241 1.37kB / 1.37kB                                                               0.0s
 => => sha256:db841a2e8ab326bf1101c5714186094fa05d3277c5b2dbcec943dade361b269f 6.83kB / 6.83kB                                                               0.0s
 => => sha256:8b91b88d557765cd8c6802668755a3f6dc4337b6ce15a17e4857139e5fc964f3 27.14MB / 27.14MB                                                           344.9s
 => => sha256:824416e234237961c9c5d4f41dfe5b295a3c35a671ee52889bfb08d8e257ec4c 2.78MB / 2.78MB                                                             115.4s
 => => sha256:482d64d97d4e63625e51301e23ca7ff526afaf40710da26704d9ce2e1a6168fa 12.00MB / 12.00MB                                                           145.9s
 => => sha256:c87b3089b2ed5584d9a52ddf02017556958f287dd63945476fbcd191954e6faf 244B / 244B                                                                 147.0s
 => => sha256:91bdacd599c69598dd6fbd7f97f7059b565f6f3015a04b6ab9e8db254a41652c 3.38MB / 3.38MB                                                             176.9s
 => => extracting sha256:8b91b88d557765cd8c6802668755a3f6dc4337b6ce15a17e4857139e5fc964f3                                                                    1.4s
 => => extracting sha256:824416e234237961c9c5d4f41dfe5b295a3c35a671ee52889bfb08d8e257ec4c                                                                    0.3s
 => => extracting sha256:482d64d97d4e63625e51301e23ca7ff526afaf40710da26704d9ce2e1a6168fa                                                                    0.5s
 => => extracting sha256:c87b3089b2ed5584d9a52ddf02017556958f287dd63945476fbcd191954e6faf                                                                    0.0s
 => => extracting sha256:91bdacd599c69598dd6fbd7f97f7059b565f6f3015a04b6ab9e8db254a41652c                                                                    0.3s
 => [polkadot_finality_exporter linter 1/4] FROM docker.io/alpine/flake8:latest@sha256:650d28dc43cba13893a0a4f79dcf30d27f87c1d8410d90663deb32fbaeccdbd1     83.0s
 => => resolve docker.io/alpine/flake8:latest@sha256:650d28dc43cba13893a0a4f79dcf30d27f87c1d8410d90663deb32fbaeccdbd1                                        0.0s
 => => sha256:4164c08feddd514d2a65057b01a5c479cd5c7f47dff0ac5cc86da2fb33297989 7.20kB / 7.20kB                                                               0.0s
 => => sha256:66e1d5e70e420aa86a23bd8b4eebf2a6eb60b4aff9ee8a6ca52e27f51f57b1be 622.31kB / 622.31kB                                                           4.0s
 => => sha256:650d28dc43cba13893a0a4f79dcf30d27f87c1d8410d90663deb32fbaeccdbd1 1.86kB / 1.86kB                                                               0.0s
 => => sha256:df4a3bcf30e4dfaf52168b415fe6a6a2dd13c78f019a0ff50830d3e25c93f4e4 1.88kB / 1.88kB                                                               0.0s
 => => sha256:7264a8db6415046d36d16ba98b79778e18accee6ffa71850405994cffa9be7de 3.40MB / 3.40MB                                                              15.5s
 => => sha256:64dfa579cd50a595f06f3624aeb7685c7371c66c1d147193c78c965b360b50ee 12.44MB / 12.44MB                                                            59.7s
 => => extracting sha256:7264a8db6415046d36d16ba98b79778e18accee6ffa71850405994cffa9be7de                                                                    0.1s
 => => sha256:afa58c10ee340fbac79916187fec941df8b21c5fc45dd2fe8c4ebf6c22e5f44b 240B / 240B                                                                  23.8s
 => => extracting sha256:66e1d5e70e420aa86a23bd8b4eebf2a6eb60b4aff9ee8a6ca52e27f51f57b1be                                                                    0.2s
 => => sha256:cd87b3fa61f879ef0261866806c886eb949ecaee952a8eecd077f828deb02a80 3.09MB / 3.09MB                                                              39.6s
 => => sha256:f497d210ac873aeb1b6711371de640609bc9e7a3e637e6dc31113ef1371b3489 4.67MB / 4.67MB                                                              82.4s
 => => extracting sha256:64dfa579cd50a595f06f3624aeb7685c7371c66c1d147193c78c965b360b50ee                                                                    0.6s
 => => sha256:46ee0c18e167a12f1ca6fefead4ef9625175be0be6e8f34b18e1c7deba8617a3 30.11kB / 30.11kB                                                            63.9s
 => => extracting sha256:afa58c10ee340fbac79916187fec941df8b21c5fc45dd2fe8c4ebf6c22e5f44b                                                                    0.0s
 => => extracting sha256:cd87b3fa61f879ef0261866806c886eb949ecaee952a8eecd077f828deb02a80                                                                    0.3s
 => => sha256:614a63c1188fde81c814208ef28d66dd85c17d8593c439710e54bfb5a6d3d4ff 94B / 94B                                                                    65.5s
 => => extracting sha256:f497d210ac873aeb1b6711371de640609bc9e7a3e637e6dc31113ef1371b3489                                                                    0.4s
 => => extracting sha256:46ee0c18e167a12f1ca6fefead4ef9625175be0be6e8f34b18e1c7deba8617a3                                                                    0.0s
 => => extracting sha256:614a63c1188fde81c814208ef28d66dd85c17d8593c439710e54bfb5a6d3d4ff                                                                    0.0s
 => [polkadot_finality_exporter internal] load build context                                                                                                 0.0s
 => => transferring context: 23.85kB                                                                                                                         0.0s
 => [polkadot_common_exporter internal] load build context                                                                                                   0.1s
 => => transferring context: 23.85kB                                                                                                                         0.0s
 => [polkadot_events_exporter stage-2 1/3] FROM docker.io/library/alpine:3.17@sha256:f71a5f071694a785e064f05fed657bf8277f1b2113a8ed70c90ad486d6ee54dc      212.0s
 => => resolve docker.io/library/alpine:3.17@sha256:f71a5f071694a785e064f05fed657bf8277f1b2113a8ed70c90ad486d6ee54dc                                         0.0s
 => => sha256:f71a5f071694a785e064f05fed657bf8277f1b2113a8ed70c90ad486d6ee54dc 1.64kB / 1.64kB                                                               0.0s
 => => sha256:7298bd41b8aee1adde2a0a2819f695b5057bfd0234bf250f0e5d9946c7ab38bd 528B / 528B                                                                   0.0s
 => => sha256:1e0b8b5322fc6afc339bb325d3ec739cba6e87a7f0bb4b7e55b52f7feb965dd3 1.47kB / 1.47kB                                                               0.0s
 => => sha256:9398808236ffac29e60c04ec906d8d409af7fa19dc57d8c65ad167e9c4967006 3.38MB / 3.38MB                                                             211.7s
 => => extracting sha256:9398808236ffac29e60c04ec906d8d409af7fa19dc57d8c65ad167e9c4967006                                                                    0.1s
 => [polkadot_events_exporter linter 1/4] FROM docker.io/golangci/golangci-lint:v1.53-alpine@sha256:b61d8503f0ad16499c023772301ec8c0f2559bf76c28d228c390  1577.9s
 => => resolve docker.io/golangci/golangci-lint:v1.53-alpine@sha256:b61d8503f0ad16499c023772301ec8c0f2559bf76c28d228c390446c5e647f55                         0.0s
 => => sha256:b61d8503f0ad16499c023772301ec8c0f2559bf76c28d228c390446c5e647f55 1.61kB / 1.61kB                                                               0.0s
 => => sha256:d86cc9dc62c86fbd1e7b07534d502bcc7e7df0e2d50bf2279e79eaf2301e7c0b 1.44kB / 1.44kB                                                               0.0s
 => => sha256:b424bae4051f9681207065a8e5bd0d00e00de6bd9972732df2983bbe0e020115 5.27kB / 5.27kB                                                               0.0s
 => => sha256:7f9bcf943fa5571df036dca6da19434d38edf546ef8bb04ddbc803634cc9a3b8 284.71kB / 284.71kB                                                         266.4s
 => => extracting sha256:7f9bcf943fa5571df036dca6da19434d38edf546ef8bb04ddbc803634cc9a3b8                                                                    0.2s
 => => sha256:ee52342d2eff6551935616ac36a72d1c8a116bcf454e22ce50061be1c14bc5cf 100.94MB / 100.94MB                                                        1570.0s
 => => sha256:5107867bbeaf1ff53c00102bd5046a59c1daf6eb36caf190abafa4cc43aea99b 156B / 156B                                                                 347.5s
 => => sha256:7ce39fe7ff377af74987e132ef93db0d10dea14884db72f7c786db964bfe73f5 82.39MB / 82.39MB                                                          1359.0s
 => => sha256:f2b139911cec05a332db58ef5cb521e9e6ebd95f42cf68d53526d7b083b2b5a7 9.99MB / 9.99MB                                                            1470.8s
 => => extracting sha256:ee52342d2eff6551935616ac36a72d1c8a116bcf454e22ce50061be1c14bc5cf                                                                    4.6s
 => => extracting sha256:5107867bbeaf1ff53c00102bd5046a59c1daf6eb36caf190abafa4cc43aea99b                                                                    0.0s
 => => extracting sha256:7ce39fe7ff377af74987e132ef93db0d10dea14884db72f7c786db964bfe73f5                                                                    2.6s
 => => extracting sha256:f2b139911cec05a332db58ef5cb521e9e6ebd95f42cf68d53526d7b083b2b5a7                                                                    0.2s
 => [polkadot_events_exporter builder 1/6] FROM docker.io/library/golang:1.20-alpine@sha256:03278bc16e1a5b4fb6cdd3462108c060aa1e9c2353ce4d15d744b3c40168  1552.5s
 => => resolve docker.io/library/golang:1.20-alpine@sha256:03278bc16e1a5b4fb6cdd3462108c060aa1e9c2353ce4d15d744b3c40168677d                                  0.0s
 => => sha256:03278bc16e1a5b4fb6cdd3462108c060aa1e9c2353ce4d15d744b3c40168677d 1.65kB / 1.65kB                                                               0.0s
 => => sha256:b4939bb9fe501a8ba9aea26ef49a76df9c92dc9d05893c5cefb3e68304f0b573 1.16kB / 1.16kB                                                               0.0s
 => => sha256:33cf23191acb31d966d6c5fbb984189329abb007a7e865009244292ba84cda52 5.18kB / 5.18kB                                                               0.0s
 => => sha256:7264a8db6415046d36d16ba98b79778e18accee6ffa71850405994cffa9be7de 3.40MB / 3.40MB                                                              14.8s
 => => extracting sha256:7264a8db6415046d36d16ba98b79778e18accee6ffa71850405994cffa9be7de                                                                    0.1s
 => => sha256:c4d48a809fc2256f8aa0aeee47998488d64409855adba00a7cb3007ab9f3286e 284.69kB / 284.69kB                                                         215.6s
 => => extracting sha256:c4d48a809fc2256f8aa0aeee47998488d64409855adba00a7cb3007ab9f3286e                                                                    0.1s
 => => sha256:1e790db5857269a95a948a96f0e3304c851351e588262d58504700b2e73fb7fe 100.95MB / 100.95MB                                                        1547.5s
 => => sha256:727f4e1a48a681e22437b6c14b04a4e287386f50f1be21ef490a1e28fd276a91 155B / 155B                                                                 261.5s
 => => extracting sha256:1e790db5857269a95a948a96f0e3304c851351e588262d58504700b2e73fb7fe                                                                    4.5s
 => => extracting sha256:727f4e1a48a681e22437b6c14b04a4e287386f50f1be21ef490a1e28fd276a91                                                                    0.0s
 => [polkadot_events_exporter internal] load build context                                                                                                   0.0s
 => => transferring context: 54.94kB                                                                                                                         0.0s
 => [polkadot_common_exporter linter 2/4] WORKDIR /apps/                                                                                                     0.1s
 => [polkadot_finality_exporter linter 3/4] COPY . /apps/                                                                                                    0.0s
 => [polkadot_finality_exporter linter 4/4] RUN flake8 --ignore="E501" *.py                                                                                  0.9s
 => [bot 2/6] RUN apt update && apt install -y gcc g++ libpq-dev git python3 python3-pip                                                                   581.6s
 => [polkadot_common_exporter stage-1 2/8] RUN apt-get update && apt-get install -y gcc g++                                                                761.0s
 => [polkadot_finality_exporter stage-1 2/8] RUN apt-get update && apt-get install -y gcc g++                                                              720.0s
 => [bot 3/6] COPY requirements.txt requirements.txt                                                                                                         0.0s
 => [bot 4/6] RUN pip3 install -r requirements.txt                                                                                                         177.5s
 => [bot 5/6] COPY app app                                                                                                                                   0.0s
 => [bot 6/6] WORKDIR app                                                                                                                                    0.0s
 => [bot] exporting to image                                                                                                                                 4.2s
 => => exporting layers                                                                                                                                      4.2s
 => => writing image sha256:9056f217dafc3ed1307de277902a5d18435f9601af75e68fa7e20ff553d81582                                                                 0.0s
 => => naming to docker.io/library/polkadot_monitoring_service-bot                                                                                           0.0s
 => [polkadot_finality_exporter stage-1 3/8] COPY requirements.txt requirements.txt                                                                          0.0s
 => [polkadot_finality_exporter stage-1 4/8] RUN pip3 install -r requirements.txt --no-cache-dir                                                           374.9s
 => [polkadot_common_exporter stage-1 3/8] COPY requirements.txt requirements.txt                                                                            0.0s
 => [polkadot_common_exporter stage-1 4/8] RUN pip3 install -r requirements.txt --no-cache-dir                                                             318.6s
 => [polkadot_common_exporter stage-1 5/8] RUN groupadd -r exporter && useradd -r -g exporter exporter                                                       0.5s
 => CACHED [polkadot_common_exporter linter 3/4] COPY . /apps/                                                                                               0.0s
 => CACHED [polkadot_common_exporter linter 4/4] RUN flake8 --ignore="E501" *.py                                                                             0.0s
 => [polkadot_common_exporter stage-1 6/8] COPY --from=linter /apps/common_exporter.py app.py                                                                0.0s
 => [polkadot_common_exporter stage-1 7/8] COPY --from=linter /apps/functions.py functions.py                                                                0.0s
 => [polkadot_common_exporter] exporting to image                                                                                                            1.2s
 => => exporting layers                                                                                                                                      1.2s
 => => writing image sha256:a4b43bdc172757e5136697926597e44aea823a766125cc4ff1418a7ca58e07ff                                                                 0.0s
 => => naming to docker.io/library/polkadot_monitoring_service-polkadot_common_exporter                                                                      0.0s
 => [polkadot_finality_exporter stage-1 5/8] RUN groupadd -r exporter && useradd -r -g exporter exporter                                                     0.7s
 => [polkadot_finality_exporter stage-1 6/8] COPY --from=linter /apps/finality_exporter.py app.py                                                            0.2s
 => [polkadot_finality_exporter stage-1 7/8] COPY --from=linter /apps/functions.py functions.py                                                              0.1s
 => [polkadot_finality_exporter] exporting to image                                                                                                          2.0s
 => => exporting layers                                                                                                                                      2.0s
 => => writing image sha256:f7b0dcd8a1bfd1229c2145e567f480df9eba59eb921e3b1844da32ceacad5d4a                                                                 0.0s
 => => naming to docker.io/library/polkadot_monitoring_service-polkadot_finality_exporter                                                                    0.0s
 => [polkadot_events_exporter builder 2/6] WORKDIR /build/                                                                                                   0.5s
 => [polkadot_events_exporter linter 2/4] WORKDIR /build/                                                                                                    0.8s
 => [polkadot_events_exporter linter 3/4] COPY . .                                                                                                           0.0s
 => [polkadot_events_exporter linter 4/4] RUN golangci-lint run --timeout=180s                                                                             108.1s
 => [polkadot_events_exporter builder 3/6] COPY --from=linter /build/go.mod /build/go.sum ./                                                                 0.1s
 => [polkadot_events_exporter builder 4/6] RUN go mod download && go mod verify                                                                            187.5s
 => [polkadot_events_exporter builder 5/6] COPY --from=linter /build/ .                                                                                      0.0s
 => [polkadot_events_exporter builder 6/6] RUN   go build -v -o events-exporter ./cmd/events-exporter/                                                      14.5s
 => [polkadot_events_exporter stage-2 2/3] COPY --from=builder /build/events-exporter /app/                                                                  0.0s
 => [polkadot_events_exporter stage-2 3/3] WORKDIR /app                                                                                                      0.0s
 => [polkadot_events_exporter] exporting to image                                                                                                            0.1s
 => => exporting layers                                                                                                                                      0.1s
 => => writing image sha256:cbca278e6e08f5b93d86777853313b279e4eb3b9ee4176cb6a62295f629107c6                                                                 0.0s
 => => naming to docker.io/library/polkadot_monitoring_service-polkadot_events_exporter                                                                      0.0s
[+] Running 18/18
 ✔ Network polkadot_monitoring_service_monitoring                      Created                                                                               0.1s 
 ✔ Network polkadot_monitoring_service_bot                             Created                                                                               0.0s 
 ✔ Network polkadot_monitoring_service_postgres                        Created                                                                               0.1s 
 ✔ Network polkadot_monitoring_service_exporters                       Created                                                                               0.0s 
 ✔ Volume "polkadot_monitoring_service_pgadmin"                        Created                                                                               0.0s 
 ✔ Volume "polkadot_monitoring_service_postgres"                       Created                                                                               0.0s 
 ✔ Volume "polkadot_monitoring_service_prometheus_data"                Created                                                                               0.0s 
 ✔ Volume "polkadot_monitoring_service_alertmanager-data"              Created                                                                               0.0s 
 ✔ Volume "polkadot_monitoring_service_grafana_data"                   Created                                                                               0.0s 
 ✔ Container polkadot_monitoring_service-prometheus-1                  Created                                                                               0.2s 
 ✔ Container polkadot_monitoring_service-polkadot_common_exporter-1    Created                                                                               0.2s 
 ✔ Container postgres                                                  Created                                                                               0.2s 
 ✔ Container polkadot_monitoring_service-polkadot_events_exporter-1    Created                                                                               0.2s 
 ✔ Container pgadmin                                                   Created                                                                               0.2s 
 ✔ Container polkadot_monitoring_service-bot-1                         Created                                                                               0.2s 
 ✔ Container polkadot_monitoring_service-polkadot_finality_exporter-1  Created                                                                               0.1s 
 ✔ Container polkadot_monitoring_service-alertmanager-1                Created                                                                               0.2s 
 ✔ Container polkadot_monitoring_service-grafana-1                     Created                                                                               0.2s 
Attaching to pgadmin, polkadot_monitoring_service-alertmanager-1, polkadot_monitoring_service-bot-1, polkadot_monitoring_service-grafana-1, polkadot_monitoring_service-polkadot_common_exporter-1, polkadot_monitoring_service-polkadot_events_exporter-1, polkadot_monitoring_service-polkadot_finality_exporter-1, polkadot_monitoring_service-prometheus-1, postgres
```
2. `docker-compose -f docker-compose.yml -f polkadot.yml -f kusama.yml up`
```commandline
[+] Building 17.6s (49/49) FINISHED                                                                                                                               
 => [kusama_events_exporter internal] load build definition from Dockerfile                                                                                  0.0s
 => => transferring dockerfile: 499B                                                                                                                         0.0s
 => [kusama_events_exporter internal] load .dockerignore                                                                                                     0.0s
 => => transferring context: 2B                                                                                                                              0.0s
 => [kusama_events_exporter internal] load metadata for docker.io/library/alpine:3.17                                                                       16.4s
 => [kusama_events_exporter internal] load metadata for docker.io/golangci/golangci-lint:v1.53-alpine                                                       17.5s
 => [kusama_events_exporter internal] load metadata for docker.io/library/golang:1.20-alpine                                                                17.3s
 => [kusama_common_exporter internal] load .dockerignore                                                                                                     0.0s
 => => transferring context: 2B                                                                                                                              0.0s
 => [kusama_common_exporter internal] load build definition from Dockerfile                                                                                  0.0s
 => => transferring dockerfile: 606B                                                                                                                         0.0s
 => [kusama_common_exporter internal] load metadata for docker.io/library/python:3.11-slim-buster                                                           17.1s
 => [kusama_common_exporter internal] load metadata for docker.io/alpine/flake8:latest                                                                      13.4s
 => [kusama_finality_exporter internal] load build definition from Dockerfile                                                                                0.0s
 => => transferring dockerfile: 606B                                                                                                                         0.0s
 => [kusama_finality_exporter internal] load .dockerignore                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                              0.0s
 => [kusama_finality_exporter stage-1 1/8] FROM docker.io/library/python:3.11-slim-buster@sha256:c46b0ae5728c2247b99903098ade3176a58e274d9c7d2efeaaab3e0621  0.0s
 => [kusama_common_exporter internal] load build context                                                                                                     0.0s
 => => transferring context: 177B                                                                                                                            0.0s
 => [kusama_finality_exporter linter 1/4] FROM docker.io/alpine/flake8:latest@sha256:650d28dc43cba13893a0a4f79dcf30d27f87c1d8410d90663deb32fbaeccdbd1        0.0s
 => [kusama_finality_exporter internal] load build context                                                                                                   0.0s
 => => transferring context: 177B                                                                                                                            0.0s
 => CACHED [kusama_common_exporter stage-1 2/8] RUN apt-get update && apt-get install -y gcc g++                                                             0.0s
 => CACHED [kusama_common_exporter stage-1 3/8] COPY requirements.txt requirements.txt                                                                       0.0s
 => CACHED [kusama_common_exporter stage-1 4/8] RUN pip3 install -r requirements.txt --no-cache-dir                                                          0.0s
 => CACHED [kusama_common_exporter stage-1 5/8] RUN groupadd -r exporter && useradd -r -g exporter exporter                                                  0.0s
 => CACHED [kusama_finality_exporter linter 2/4] WORKDIR /apps/                                                                                              0.0s
 => CACHED [kusama_common_exporter linter 3/4] COPY . /apps/                                                                                                 0.0s
 => CACHED [kusama_common_exporter linter 4/4] RUN flake8 --ignore="E501" *.py                                                                               0.0s
 => CACHED [kusama_common_exporter stage-1 6/8] COPY --from=linter /apps/common_exporter.py app.py                                                           0.0s
 => CACHED [kusama_common_exporter stage-1 7/8] COPY --from=linter /apps/functions.py functions.py                                                           0.0s
 => [kusama_common_exporter] exporting to image                                                                                                              0.0s
 => => exporting layers                                                                                                                                      0.0s
 => => writing image sha256:97ef603636c72e6df1c1a23b850d28c82fc7a1690c54efcbb20f8ab3337ad663                                                                 0.0s
 => => naming to docker.io/library/polkadot_monitoring_service-kusama_common_exporter                                                                        0.0s
 => CACHED [kusama_finality_exporter stage-1 2/8] RUN apt-get update && apt-get install -y gcc g++                                                           0.0s
 => CACHED [kusama_finality_exporter stage-1 3/8] COPY requirements.txt requirements.txt                                                                     0.0s
 => CACHED [kusama_finality_exporter stage-1 4/8] RUN pip3 install -r requirements.txt --no-cache-dir                                                        0.0s
 => CACHED [kusama_finality_exporter stage-1 5/8] RUN groupadd -r exporter && useradd -r -g exporter exporter                                                0.0s
 => CACHED [kusama_finality_exporter linter 3/4] COPY . /apps/                                                                                               0.0s
 => CACHED [kusama_finality_exporter linter 4/4] RUN flake8 --ignore="E501" *.py                                                                             0.0s
 => CACHED [kusama_finality_exporter stage-1 6/8] COPY --from=linter /apps/finality_exporter.py app.py                                                       0.0s
 => CACHED [kusama_finality_exporter stage-1 7/8] COPY --from=linter /apps/functions.py functions.py                                                         0.0s
 => [kusama_finality_exporter] exporting to image                                                                                                            0.0s
 => => exporting layers                                                                                                                                      0.0s
 => => writing image sha256:4ba72a209e032fb81f9402371f4c28dc50fd0e2d4eb04484d5acc313f974c809                                                                 0.0s
 => => naming to docker.io/library/polkadot_monitoring_service-kusama_finality_exporter                                                                      0.0s
 => [kusama_events_exporter stage-2 1/3] FROM docker.io/library/alpine:3.17@sha256:f71a5f071694a785e064f05fed657bf8277f1b2113a8ed70c90ad486d6ee54dc          0.0s
 => [kusama_events_exporter linter 1/4] FROM docker.io/golangci/golangci-lint:v1.53-alpine@sha256:b61d8503f0ad16499c023772301ec8c0f2559bf76c28d228c390446c5  0.0s
 => [kusama_events_exporter internal] load build context                                                                                                     0.0s
 => => transferring context: 736B                                                                                                                            0.0s
 => [kusama_events_exporter builder 1/6] FROM docker.io/library/golang:1.20-alpine@sha256:03278bc16e1a5b4fb6cdd3462108c060aa1e9c2353ce4d15d744b3c40168677d   0.0s
 => CACHED [kusama_events_exporter builder 2/6] WORKDIR /build/                                                                                              0.0s
 => CACHED [kusama_events_exporter linter 2/4] WORKDIR /build/                                                                                               0.0s
 => CACHED [kusama_events_exporter linter 3/4] COPY . .                                                                                                      0.0s
 => CACHED [kusama_events_exporter linter 4/4] RUN golangci-lint run --timeout=180s                                                                          0.0s
 => CACHED [kusama_events_exporter builder 3/6] COPY --from=linter /build/go.mod /build/go.sum ./                                                            0.0s
 => CACHED [kusama_events_exporter builder 4/6] RUN go mod download && go mod verify                                                                         0.0s
 => CACHED [kusama_events_exporter builder 5/6] COPY --from=linter /build/ .                                                                                 0.0s
 => CACHED [kusama_events_exporter builder 6/6] RUN   go build -v -o events-exporter ./cmd/events-exporter/                                                  0.0s
 => CACHED [kusama_events_exporter stage-2 2/3] COPY --from=builder /build/events-exporter /app/                                                             0.0s
 => CACHED [kusama_events_exporter stage-2 3/3] WORKDIR /app                                                                                                 0.0s
 => [kusama_events_exporter] exporting to image                                                                                                              0.0s
 => => exporting layers                                                                                                                                      0.0s
 => => writing image sha256:5b57e5cfe51a029c8c03c154986011cccefb806f9c8f2daa721268cf9e67d3f7                                                                 0.0s
 => => naming to docker.io/library/polkadot_monitoring_service-kusama_events_exporter                                                                        0.0s
[+] Running 12/12
 ✔ Container polkadot_monitoring_service-kusama_events_exporter-1      Created                                                                               0.1s 
 ✔ Container polkadot_monitoring_service-kusama_common_exporter-1      Created                                                                               0.1s 
 ✔ Container polkadot_monitoring_service-kusama_finality_exporter-1    Created                                                                               0.1s 
 ✔ Container pgadmin                                                   Created                                                                               0.0s 
 ✔ Container postgres                                                  Created                                                                               0.0s 
 ✔ Container polkadot_monitoring_service-prometheus-1                  Created                                                                               0.0s 
 ✔ Container polkadot_monitoring_service-alertmanager-1                Created                                                                               0.0s 
 ✔ Container polkadot_monitoring_service-polkadot_common_exporter-1    Created                                                                               0.0s 
 ✔ Container polkadot_monitoring_service-bot-1                         Created                                                                               0.0s 
 ✔ Container polkadot_monitoring_service-grafana-1                     Created                                                                               0.0s 
 ✔ Container polkadot_monitoring_service-polkadot_events_exporter-1    Created                                                                               0.0s 
 ✔ Container polkadot_monitoring_service-polkadot_finality_exporter-1  Created                                                                               0.0s 
Attaching to pgadmin, polkadot_monitoring_service-alertmanager-1, polkadot_monitoring_service-bot-1, polkadot_monitoring_service-grafana-1, polkadot_monitoring_service-kusama_common_exporter-1, polkadot_monitoring_service-kusama_events_exporter-1, polkadot_monitoring_service-kusama_finality_exporter-1, polkadot_monitoring_service-polkadot_common_exporter-1, polkadot_monitoring_service-polkadot_events_exporter-1, polkadot_monitoring_service-polkadot_finality_exporter-1, polkadot_monitoring_service-prometheus-1, postgres
```