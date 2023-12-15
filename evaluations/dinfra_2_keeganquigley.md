# Evaluation

- **Status:** In progress
- **Application Document:** [Application](https://github.com/w3f/Grants-Program/blob/master/applications/DINFRA.md)
- **Milestone:** 2
- **Previously successfully merged evaluation:** dastansam

**Deliverables**

| Number  | Deliverable                | Link                                                         | Notes                                                        |
| ------- | -------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **0a.** | License                    | [link](https://gitlab.com/dinfra/dinfra/-/blob/MILESTONE2/LICENSE?ref_type=tags) | Apache 2.0                                                   |
| **0b.** | Documentation              | [link](https://gitlab.com/dinfra/dinfra/-/blob/main/README.md?ref_type=heads) |                   |
| **0c.** | Testing and Testing Guide  | [link](https://gitlab.com/dinfra/dinfra/-/blob/main/README.md?ref_type=heads#testing-guide) |  |
| **0d.** | Docker                     | [link](https://gitlab.com/dinfra/dinfra/-/blob/MILESTONE2/docker-compose.yml?ref_type=tags) |  |
| 1.      | DINFRA Provider Pallet     | [link](https://gitlab.com/dinfra/substrate-parachain/-/tree/MILESTONE2/pallets/dinfra-provider?ref_type=tags) |  |
| 2.      | DINFRA Subscription Pallet | [link](https://gitlab.com/dinfra/substrate-parachain/-/tree/MILESTONE2/pallets/dinfra-subscription?ref_type=tags) |  |
| 3.      | Chain Reactor Interface    | [link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE2/packages/ogate?ref_type=tags) |  |

# General Notes

<details>

  <summary>Docker builds successfully</summary>

```sh
[+] Building 86.8s (16/16) FINISHED                                                                                                       docker:default
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 301B                                                                                                                0.0s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => [internal] load metadata for docker.io/library/node:18-alpine                                                                                   1.2s
 => [internal] load metadata for docker.io/library/node:18                                                                                          1.2s
 => [builder 1/7] FROM docker.io/library/node:18@sha256:7a4282663db6f22326c03618eef4320fa3cf70c5c3715546f9779858dc0ed3fd                           20.0s
 => => resolve docker.io/library/node:18@sha256:7a4282663db6f22326c03618eef4320fa3cf70c5c3715546f9779858dc0ed3fd                                    0.0s
 => => sha256:d3a767d1d12e57724b9f254794e359f3b04d4d5ad966006e5b5cda78cc382762 64.13MB / 64.13MB                                                    1.3s
 => => sha256:7a4282663db6f22326c03618eef4320fa3cf70c5c3715546f9779858dc0ed3fd 1.21kB / 1.21kB                                                      0.0s
 => => sha256:90e5e7d8b87a34877f61c2b86d053db1c4f440b9054cf49573e3be5d6a674a47 49.58MB / 49.58MB                                                    1.0s
 => => sha256:27e1a8ca91d35598fbae8dee7f1c211f0f93cec529f6804a60e9301c53a604d0 24.05MB / 24.05MB                                                    1.0s
 => => sha256:a05097d229e35d2c7f3a82241beadae90fd3b5a13755090835e9cfdd74a21ef7 2.00kB / 2.00kB                                                      0.0s
 => => sha256:44b36f415b2c46d836b2a019d871526c21ec9d85e2479f75edb7601c0d461a97 7.53kB / 7.53kB                                                      0.0s
 => => extracting sha256:90e5e7d8b87a34877f61c2b86d053db1c4f440b9054cf49573e3be5d6a674a47                                                           3.3s
 => => sha256:711be5dc50448ab08ccab0b44d65962f36574d341749ab30651b78ec0d4bfd1c 211.07MB / 211.07MB                                                  4.4s
 => => sha256:22956530cc64ef2361591684e23e3b8e5bb5910da23197635a2b5b96a34b488d 3.37kB / 3.37kB                                                      1.3s
 => => sha256:71006d566071144b37a94e837ff4445a4a2dacee9c0ecd9bdebd557220186398 46.04MB / 46.04MB                                                    2.3s
 => => sha256:a27dc4a9ed9fe0d165c20471df01942d563ca25d41c4f6516c134bf0d35aa808 2.21MB / 2.21MB                                                      1.5s
 => => sha256:3a2c803d278113c2b2d56b0ee3c2f602276400989791ad085da4eb34e1cf0754 451B / 451B                                                          1.6s
 => => extracting sha256:27e1a8ca91d35598fbae8dee7f1c211f0f93cec529f6804a60e9301c53a604d0                                                           0.8s
 => => extracting sha256:d3a767d1d12e57724b9f254794e359f3b04d4d5ad966006e5b5cda78cc382762                                                           3.0s
 => => extracting sha256:711be5dc50448ab08ccab0b44d65962f36574d341749ab30651b78ec0d4bfd1c                                                           7.5s
 => => extracting sha256:22956530cc64ef2361591684e23e3b8e5bb5910da23197635a2b5b96a34b488d                                                           0.0s
 => => extracting sha256:71006d566071144b37a94e837ff4445a4a2dacee9c0ecd9bdebd557220186398                                                           2.4s
 => => extracting sha256:a27dc4a9ed9fe0d165c20471df01942d563ca25d41c4f6516c134bf0d35aa808                                                           0.1s
 => => extracting sha256:3a2c803d278113c2b2d56b0ee3c2f602276400989791ad085da4eb34e1cf0754                                                           0.0s
 => [stage-1 1/3] FROM docker.io/library/node:18-alpine@sha256:b1a0356f7d6b86c958a06949d3db3f7fb27f95f627aa6157cb98bc65c801efa2                     5.1s
 => => resolve docker.io/library/node:18-alpine@sha256:b1a0356f7d6b86c958a06949d3db3f7fb27f95f627aa6157cb98bc65c801efa2                             0.0s
 => => sha256:b1a0356f7d6b86c958a06949d3db3f7fb27f95f627aa6157cb98bc65c801efa2 1.43kB / 1.43kB                                                      0.0s
 => => sha256:8842b060b01af71c082cee310b428a2d825e940d9fd9e450e05d726aea66a480 1.16kB / 1.16kB                                                      0.0s
 => => sha256:f3776b60850deec9eb1da7746fa20b3f000bf153408dc896d6606704c83f948d 7.14kB / 7.14kB                                                      0.0s
 => => sha256:661ff4d9561e3fd050929ee5097067c34bafc523ee60f5294a37fd08056a73ca 3.41MB / 3.41MB                                                      1.8s
 => => extracting sha256:661ff4d9561e3fd050929ee5097067c34bafc523ee60f5294a37fd08056a73ca                                                           0.1s
 => => sha256:0f158788f409a5decd9495205daf4aa17df26d8219d6dc12acab5949342866fe 40.24MB / 40.24MB                                                    2.7s
 => => sha256:f028dff98271801e449c3ebac94a319851128c0ec687e13e00a68b2d98ec4700 2.34MB / 2.34MB                                                      2.6s
 => => sha256:18f25c33705ddc3351cc4893fdc0a38405bdd0741643798918fa2b0146fd5a9d 451B / 451B                                                          2.7s
 => => extracting sha256:0f158788f409a5decd9495205daf4aa17df26d8219d6dc12acab5949342866fe                                                           2.0s
 => => extracting sha256:f028dff98271801e449c3ebac94a319851128c0ec687e13e00a68b2d98ec4700                                                           0.1s
 => => extracting sha256:18f25c33705ddc3351cc4893fdc0a38405bdd0741643798918fa2b0146fd5a9d                                                           0.0s
 => [internal] load build context                                                                                                                   0.1s
 => => transferring context: 367.80kB                                                                                                               0.0s
 => [stage-1 2/3] WORKDIR /app                                                                                                                      4.8s
 => [builder 2/7] WORKDIR /app                                                                                                                      5.5s
 => [builder 3/7] COPY ./package.json ./                                                                                                            0.0s
 => [builder 4/7] COPY ./yarn.lock ./                                                                                                               0.0s
 => [builder 5/7] RUN yarn install                                                                                                                 29.3s
 => [builder 6/7] COPY . .                                                                                                                          0.1s
 => [builder 7/7] RUN yarn global add @nestjs/cli rimraf && yarn build                                                                             18.7s
 => [stage-1 3/3] COPY --from=builder /app ./                                                                                                       4.4s
 => exporting to image                                                                                                                              3.4s
 => => exporting layers                                                                                                                             3.4s
 => => writing image sha256:f679d49dae70b3ffa728e0fc0aff28b1280221a9c731ace875d9092e8c976bac                                                        0.0s
 => => naming to docker.io/library/dinfra_ogate                                                                                                     0.0s
Building acs-reactor
[+] Building 24.6s (7/8)                                                                                                                  docker:default
[+] Building 26.3s (7/8)                                                                                                                  docker:default
[+] Building 27.2s (7/8)                                                                                                                  docker:default
[+] Building 66.7s (9/9) FINISHED                                                                                                         docker:default
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 167B                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/python:3.8                                                                                       1.3s
 => [1/4] FROM docker.io/library/python:3.8@sha256:7264a50439679c2868a99f71a5c9b9831cc082b1d3f05c8643788e1d7914afeb                                 2.9s
 => => resolve docker.io/library/python:3.8@sha256:7264a50439679c2868a99f71a5c9b9831cc082b1d3f05c8643788e1d7914afeb                                 0.0s
 => => sha256:7264a50439679c2868a99f71a5c9b9831cc082b1d3f05c8643788e1d7914afeb 1.86kB / 1.86kB                                                      0.0s
 => => sha256:3c3270c231ce82b081e2527c60734395b951c0d0c8b9e6b3a3caa515a701b73a 2.01kB / 2.01kB                                                      0.0s
 => => sha256:8a61cde23424d30d0050cf384b4700250bc5198ce17773c737700fd5e670a06e 7.51kB / 7.51kB                                                      0.0s
 => => sha256:48b2d58a56e99520540b5ecafb202ae036a53b5a982845434722691ccba6499a 6.16MB / 6.16MB                                                      0.2s
 => => sha256:0a9c4786546c13ac4e6c2f770c6364aee71ca0cd483a848c1492730f334ae5ee 17.28MB / 17.28MB                                                    0.4s
 => => sha256:5575d20769f15dcea9755eb1473ed34381e479e294ab0cb9fc0a85d52701a388 232B / 232B                                                          0.3s
 => => extracting sha256:48b2d58a56e99520540b5ecafb202ae036a53b5a982845434722691ccba6499a                                                           0.6s
 => => sha256:4711d910ffa25756544938a346f48f59be0b2b66776faa909731f4f9e205bb5e 2.85MB / 2.85MB                                                      0.4s
 => => extracting sha256:0a9c4786546c13ac4e6c2f770c6364aee71ca0cd483a848c1492730f334ae5ee                                                           1.1s
 => => extracting sha256:5575d20769f15dcea9755eb1473ed34381e479e294ab0cb9fc0a85d52701a388                                                           0.0s
 => => extracting sha256:4711d910ffa25756544938a346f48f59be0b2b66776faa909731f4f9e205bb5e                                                           0.5s
 => [internal] load build context                                                                                                                   9.4s  => => transferring context: 366.62MB                                                                                                               9.3s
 => [2/4] WORKDIR /app                                                                                                                              0.7s
 => [3/4] COPY . /app                                                                                                                              10.0s  => [4/4] RUN pip install --no-cache-dir -r requirements.txt                                                                                       39.5s
 => exporting to image                                                                                                                              5.0s
 => => exporting layers                                                                                                                             5.0s  => => writing image sha256:82fc41343644dbe1b5e7e373dc791bfb0eb8b718ae3822a1fee38628f1106c6d                                                        0.0s 
 => => naming to docker.io/library/dinfra_acs-reactor                                                                                               0.0s 
Building zombienet
[+] Building 48.3s (20/20) FINISHED                                                                                                       docker:default
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 779B                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/node:18                                                                                          0.4s
 => [internal] load metadata for docker.io/parity/polkadot:v1.0.0                                                                                   1.3s
 => [internal] load metadata for docker.io/parity/polkadot-parachain:1.0.0                                                                          1.6s
 => [relaybuilder 1/1] FROM docker.io/parity/polkadot:v1.0.0@sha256:5a4a18f7044591158e2f651ef37807b85fa9e90eec4f7bc74fce69884420ba9a                5.0s
 => => resolve docker.io/parity/polkadot:v1.0.0@sha256:5a4a18f7044591158e2f651ef37807b85fa9e90eec4f7bc74fce69884420ba9a                             0.0s
 => => sha256:5a4a18f7044591158e2f651ef37807b85fa9e90eec4f7bc74fce69884420ba9a 855B / 855B                                                          0.0s
 => => sha256:8fee20143b56f8b0d9d1a04002e0666636f33d59bf76f8f47afa438233498145 862B / 862B                                                          0.0s
 => => sha256:10e23f611d8ed8a80c904af1f37f1188df2af3a9281e175e1d0bdbdf3893c778 6.20kB / 6.20kB                                                      0.0s
 => => sha256:4f4fb700ef54461cfa02571ae0db9a0dc1e0cdb5577484a6d75e68dc38e8acc1 32B / 32B                                                            1.0s
 => => sha256:01085d60b3a624c06a7132ff0749efc6e6565d9f2531d7685ff559fb5d0f669f 27.51MB / 27.51MB                                                    1.4s
 => => sha256:5a91df77b5430e07cf56f1955bb30d72c798f942c514fcd4db4ab47b22d3c980 46.11MB / 46.11MB                                                    2.1s
 => => extracting sha256:01085d60b3a624c06a7132ff0749efc6e6565d9f2531d7685ff559fb5d0f669f                                                           1.8s
 => => extracting sha256:5a91df77b5430e07cf56f1955bb30d72c798f942c514fcd4db4ab47b22d3c980                                                           1.3s
 => => extracting sha256:4f4fb700ef54461cfa02571ae0db9a0dc1e0cdb5577484a6d75e68dc38e8acc1                                                           0.0s
 => [internal] load build context                                                                                                                   0.0s
 => => transferring context: 2.30kB                                                                                                                 0.0s
 => [parabuilder 1/1] FROM docker.io/parity/polkadot-parachain:1.0.0@sha256:749460cbc3a94ba10e970815490ad4470a563499b2fd32c34a350428726a28e9        4.7s
 => => resolve docker.io/parity/polkadot-parachain:1.0.0@sha256:749460cbc3a94ba10e970815490ad4470a563499b2fd32c34a350428726a28e9                    0.0s
 => => sha256:749460cbc3a94ba10e970815490ad4470a563499b2fd32c34a350428726a28e9 1.58kB / 1.58kB                                                      0.0s
 => => sha256:902a2fdf16120b0ce002ad1e2e01d7e7defd00e48019b126a02c8fc0c65d06c2 8.45kB / 8.45kB                                                      0.0s
 => => sha256:b237fe92c4173e4dfb3ba82e76e5fed4b16186a6161e07af15814cb40eb9069d 29.54MB / 29.54MB                                                    0.6s
 => => sha256:99ba7777d07313b737296ba7e03c7a7d64f0164f04ba80a0f15692908af49a53 4.76MB / 4.76MB                                                      0.9s
 => => sha256:434f58eb496cfb4f0a147f2837e81c809a810ac9b69c42e1e117e8cbdf7d9f63 94B / 94B                                                            0.6s
 => => sha256:4e4e7ff99b01a8813d65d8e088265f9f2cf51f0eaefd018e3f8d110829406eda 54.91MB / 54.91MB                                                    2.7s
 => => extracting sha256:b237fe92c4173e4dfb3ba82e76e5fed4b16186a6161e07af15814cb40eb9069d                                                           1.7s
 => => sha256:12160d8e488c95aafd277cac7cb61084d8f29ba13af74b98a6d5589f77603482 10.11MB / 10.11MB                                                    1.5s
 => => sha256:4f4fb700ef54461cfa02571ae0db9a0dc1e0cdb5577484a6d75e68dc38e8acc1 32B / 32B                                                            1.0s
 => => extracting sha256:99ba7777d07313b737296ba7e03c7a7d64f0164f04ba80a0f15692908af49a53                                                           0.3s
 => => extracting sha256:434f58eb496cfb4f0a147f2837e81c809a810ac9b69c42e1e117e8cbdf7d9f63                                                           0.0s
 => => extracting sha256:4e4e7ff99b01a8813d65d8e088265f9f2cf51f0eaefd018e3f8d110829406eda                                                           1.2s
 => => extracting sha256:12160d8e488c95aafd277cac7cb61084d8f29ba13af74b98a6d5589f77603482                                                           0.2s
 => => extracting sha256:4f4fb700ef54461cfa02571ae0db9a0dc1e0cdb5577484a6d75e68dc38e8acc1                                                           0.0s
 => CACHED [stage-2  1/11] FROM docker.io/library/node:18@sha256:7a4282663db6f22326c03618eef4320fa3cf70c5c3715546f9779858dc0ed3fd                   0.0s
 => [stage-2  2/11] COPY --from=relaybuilder /usr/bin/polkadot /usr/local/bin                                                                       0.8s
 => [stage-2  3/11] COPY --from=parabuilder /usr/local/bin/polkadot-parachain /usr/local/bin                                                        1.1s
 => [stage-2  4/11] RUN apt update     && apt install -y multitail     && rm -rf /var/lib/apt/lists/*                                               4.1s
 => [stage-2  5/11] RUN npm install -g @zombienet/cli                                                                                              29.6s
 => [stage-2  6/11] COPY ./zombietail /usr/local/bin                                                                                                0.0s
 => [stage-2  7/11] COPY ./zombiestart /usr/local/bin                                                                                               0.1s
 => [stage-2  8/11] RUN useradd -m zombienet                                                                                                        0.3s
 => [stage-2  9/11] WORKDIR /home/zombienet                                                                                                         0.0s
 => [stage-2 10/11] RUN mkdir /home/zombienet/data                                                                                                  0.3s
 => [stage-2 11/11] COPY ./config.yaml .                                                                                                            0.0s
 => exporting to image                                                                                                                              2.8s
 => => exporting layers                                                                                                                             2.8s
 => => writing image sha256:2f87c4c7a614ec1573fee9ca559926a7e6e2629152cdd6ac0f36d23a5abb5d71                                                        0.0s
 => => naming to docker.io/library/dinfra_zombienet                                                                                                 0.0s
Done in 1281.59s.
```

Docker runs successfully and simulates deployment lifecycles:
```sh
ogate_1        | [Nest] 28  - 12/14/2023, 11:47:42 PM   DEBUG [DinfraParachainService] DINFRA Block: #2
acs-reactor_1  | 2023-12-14 23:47:48.0 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:47:54 PM   DEBUG [DinfraParachainService] DINFRA Block: #3
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-9458a226) (logid:598b25d6) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-9458a226) (logid:598b25d6) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-9458a226) (logid:598b25d6) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-9458a226) (logid:598b25d6) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-e62a1b37) (logid:967f7d68) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-reactor_1  | 2023-12-14 23:48:03.0 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:48:06 PM   DEBUG [DinfraParachainService] DINFRA Block: #4
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-13d3f871) (logid:ef672e0e) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-13d3f871) (logid:ef672e0e) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-13d3f871) (logid:ef672e0e) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-13d3f871) (logid:ef672e0e) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-b501de66) (logid:88a67a94) NetworkGarbageCollector uses '20' seconds for GC interval.
ogate_1        | [Nest] 28  - 12/14/2023, 11:48:18 PM   DEBUG [DinfraParachainService] DINFRA Block: #5
acs-reactor_1  | 2023-12-14 23:48:18.0 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:48:30 PM   DEBUG [DinfraParachainService] DINFRA Block: #6
acs-reactor_1  | 2023-12-14 23:48:33.0 INFO Received DINFRA event NoEvent
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-6cb260ba) (logid:417243a0) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-6cb260ba) (logid:417243a0) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-6cb260ba) (logid:417243a0) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-6cb260ba) (logid:417243a0) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-d1f0989c) (logid:ff73fe1e) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-1:ctx-342ef161) (logid:a1a95cf2) system memory from /proc: 16763502592
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-1:ctx-342ef161) (logid:a1a95cf2) free memory from /proc: 212082688
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-1:ctx-342ef161) (logid:a1a95cf2) used memory from /proc: 1963692
ogate_1        | [Nest] 28  - 12/14/2023, 11:48:42 PM   DEBUG [DinfraParachainService] DINFRA Block: #7
acs-reactor_1  | 2023-12-14 23:48:48.0 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:48:54 PM   DEBUG [DinfraParachainService] DINFRA Block: #8
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-743af347) (logid:85a071ab) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-743af347) (logid:85a071ab) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-743af347) (logid:85a071ab) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-743af347) (logid:85a071ab) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-534d0154) (logid:cf0fc01c) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-reactor_1  | 2023-12-14 23:49:03.0 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:49:06 PM   DEBUG [DinfraParachainService] DINFRA Block: #9
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-cf2b8dee) (logid:b79ef254) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-cf2b8dee) (logid:b79ef254) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-cf2b8dee) (logid:b79ef254) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-cf2b8dee) (logid:b79ef254) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-52c4b699) (logid:07532662) NetworkGarbageCollector uses '20' seconds for GC interval.
ogate_1        | [Nest] 28  - 12/14/2023, 11:49:18 PM   DEBUG [DinfraParachainService] DINFRA Block: #10
acs-reactor_1  | 2023-12-14 23:49:18.0 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:49:30 PM   DEBUG [DinfraParachainService] DINFRA Block: #11
acs-reactor_1  | 2023-12-14 23:49:33.0 INFO Received DINFRA event NoEvent
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-524e811b) (logid:37fb0d8d) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-524e811b) (logid:37fb0d8d) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-524e811b) (logid:37fb0d8d) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-524e811b) (logid:37fb0d8d) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-f68d7d1a) (logid:8b636bb2) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-4:ctx-376626c5) (logid:dbe7bd5a) system memory from /proc: 16763502592
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-4:ctx-376626c5) (logid:dbe7bd5a) free memory from /proc: 216612864
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-4:ctx-376626c5) (logid:dbe7bd5a) used memory from /proc: 1967632
ogate_1        | [Nest] 28  - 12/14/2023, 11:49:42 PM   DEBUG [DinfraParachainService] DINFRA Block: #12
acs-reactor_1  | 2023-12-14 23:49:48.0 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:49:54 PM   DEBUG [DinfraParachainService] DINFRA Block: #13
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-91756662) (logid:8c034048) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-91756662) (logid:8c034048) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-91756662) (logid:8c034048) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-91756662) (logid:8c034048) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-82ab1658) (logid:b765b396) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-reactor_1  | 2023-12-14 23:50:03.0 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:50:06 PM   DEBUG [DinfraParachainService] DINFRA Block: #14
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-1b29df45) (logid:8eced12f) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-1b29df45) (logid:8eced12f) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-1b29df45) (logid:8eced12f) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-1b29df45) (logid:8eced12f) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-ea7c6464) (logid:0a07fa84) NetworkGarbageCollector uses '20' seconds for GC interval.
ogate_1        | [Nest] 28  - 12/14/2023, 11:50:18 PM   DEBUG [DinfraParachainService] DINFRA Block: #15
acs-reactor_1  | 2023-12-14 23:50:18.0 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:50:30 PM   DEBUG [DinfraParachainService] DINFRA Block: #16
acs-reactor_1  | 2023-12-14 23:50:33.0 INFO Received DINFRA event NoEvent
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-c2a01d90) (logid:1e1e9c48) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-c2a01d90) (logid:1e1e9c48) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-c2a01d90) (logid:1e1e9c48) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-c2a01d90) (logid:1e1e9c48) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-9e36349c) (logid:512ce0f4) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-5:ctx-85124bf6) (logid:dad02f52) system memory from /proc: 16763502592
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-5:ctx-85124bf6) (logid:dad02f52) free memory from /proc: 325443584
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-5:ctx-85124bf6) (logid:dad02f52) used memory from /proc: 1973132
ogate_1        | [Nest] 28  - 12/14/2023, 11:50:42 PM   DEBUG [DinfraParachainService] DINFRA Block: #17
acs-reactor_1  | 2023-12-14 23:50:48.0 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:50:54 PM   DEBUG [DinfraParachainService] DINFRA Block: #18
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-a3810db1) (logid:95c141aa) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-a3810db1) (logid:95c141aa) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-a3810db1) (logid:95c141aa) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-a3810db1) (logid:95c141aa) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-b1070d32) (logid:5a9a34fb) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-reactor_1  | 2023-12-14 23:51:03.0 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:51:06 PM   DEBUG [DinfraParachainService] DINFRA Block: #19
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-21ab2064) (logid:026a8f77) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-21ab2064) (logid:026a8f77) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-21ab2064) (logid:026a8f77) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-21ab2064) (logid:026a8f77) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-7cf142ca) (logid:f4743eaa) NetworkGarbageCollector uses '20' seconds for GC interval.
ogate_1        | [Nest] 28  - 12/14/2023, 11:51:18 PM   DEBUG [DinfraParachainService] DINFRA Block: #20
acs-reactor_1  | 2023-12-14 23:51:18.1 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:51:30 PM   DEBUG [DinfraParachainService] DINFRA Block: #21
acs-reactor_1  | 2023-12-14 23:51:33.1 INFO Received DINFRA event NoEvent
acs-sim_1      | INFO  [c.c.r.ResourceLimitManagerImpl] (ResourceCountChecker-1:ctx-7072fee8) (logid:392acbcd) Started resource counters recalculation periodic task.
acs-sim_1      | WARN  [c.c.r.ResourceLimitManagerImpl] (ResourceCountChecker-1:ctx-7072fee8) (logid:392acbcd) Discrepancy in the resource count (original count=0 correct count = 4) for type volume for account ID 1 is fixed during resource count recalculation.
acs-sim_1      | WARN  [c.c.r.ResourceLimitManagerImpl] (ResourceCountChecker-1:ctx-7072fee8) (logid:392acbcd) Discrepency in the resource count has been detected (original count = 0 correct count = 4) for Type = volume for Domain ID = 1 is fixed during resource count recalculation.
acs-sim_1      | WARN  [c.c.r.ResourceLimitManagerImpl] (ResourceCountChecker-1:ctx-7072fee8) (logid:392acbcd) Discrepancy in the resource count (original count=0 correct count = 14) for type template for account ID 1 is fixed during resource count recalculation.
acs-sim_1      | WARN  [c.c.r.ResourceLimitManagerImpl] (ResourceCountChecker-1:ctx-7072fee8) (logid:392acbcd) Discrepency in the resource count has been detected (original count = 0 correct count = 14) for Type = template for Domain ID = 1 is fixed during resource count recalculation.
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-df2045ef) (logid:b1379685) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-df2045ef) (logid:b1379685) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-df2045ef) (logid:b1379685) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-df2045ef) (logid:b1379685) Found 0 disabled projects to cleanup
acs-sim_1      | WARN  [c.c.r.ResourceLimitManagerImpl] (ResourceCountChecker-1:ctx-7072fee8) (logid:392acbcd) Discrepency in the resource count has been detected (original count = 0 correct count = 8589934592) for Type = secondary_storage for Domain ID = 1 is fixed during resource count recalculation.
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-1e2ea27d) (logid:147fba7a) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-2:ctx-1f9ded2d) (logid:6843d680) system memory from /proc: 16763502592
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-2:ctx-1f9ded2d) (logid:6843d680) free memory from /proc: 320126976
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-2:ctx-1f9ded2d) (logid:6843d680) used memory from /proc: 1976148
ogate_1        | [Nest] 28  - 12/14/2023, 11:51:42 PM   DEBUG [DinfraParachainService] DINFRA Block: #22
acs-reactor_1  | 2023-12-14 23:51:48.1 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:51:54 PM   DEBUG [DinfraParachainService] DINFRA Block: #23
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-6eb38a89) (logid:ff8f640a) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-6eb38a89) (logid:ff8f640a) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-6eb38a89) (logid:ff8f640a) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-6eb38a89) (logid:ff8f640a) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-fbfa3ad8) (logid:51ca52ba) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-reactor_1  | 2023-12-14 23:52:03.1 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:52:06 PM   DEBUG [DinfraParachainService] DINFRA Block: #24
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-4bbcb403) (logid:ed790e34) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-4bbcb403) (logid:ed790e34) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-4bbcb403) (logid:ed790e34) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-4bbcb403) (logid:ed790e34) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-9a740a30) (logid:64faec08) NetworkGarbageCollector uses '20' seconds for GC interval.
ogate_1        | [Nest] 28  - 12/14/2023, 11:52:18 PM   DEBUG [DinfraParachainService] DINFRA Block: #25
acs-reactor_1  | 2023-12-14 23:52:18.1 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:52:30 PM   DEBUG [DinfraParachainService] DINFRA Block: #26
acs-reactor_1  | 2023-12-14 23:52:33.1 INFO Received DINFRA event NoEvent
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-c0a44d52) (logid:8d646197) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-c0a44d52) (logid:8d646197) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-c0a44d52) (logid:8d646197) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-c0a44d52) (logid:8d646197) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-9870f1f3) (logid:b2c198f3) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-4:ctx-cf5f7c2b) (logid:965b8ea2) system memory from /proc: 16763502592
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-4:ctx-cf5f7c2b) (logid:965b8ea2) free memory from /proc: 304562176
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-4:ctx-cf5f7c2b) (logid:965b8ea2) used memory from /proc: 1980788
ogate_1        | [Nest] 28  - 12/14/2023, 11:52:42 PM   DEBUG [DinfraParachainService] DINFRA Block: #27
acs-reactor_1  | 2023-12-14 23:52:48.1 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:52:54 PM   DEBUG [DinfraParachainService] DINFRA Block: #28
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-5f3c9f0d) (logid:e5915d19) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-5f3c9f0d) (logid:e5915d19) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-5f3c9f0d) (logid:e5915d19) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-5f3c9f0d) (logid:e5915d19) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-4c50f156) (logid:bdf0b681) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-reactor_1  | 2023-12-14 23:53:03.1 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:53:06 PM   DEBUG [DinfraParachainService] DINFRA Block: #29
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-6044328e) (logid:5b2b39ec) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-6044328e) (logid:5b2b39ec) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-6044328e) (logid:5b2b39ec) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-6044328e) (logid:5b2b39ec) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-37917423) (logid:a4cb589f) NetworkGarbageCollector uses '20' seconds for GC interval.
ogate_1        | [Nest] 28  - 12/14/2023, 11:53:18 PM   DEBUG [DinfraParachainService] DINFRA Block: #30
acs-reactor_1  | 2023-12-14 23:53:18.1 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:53:30 PM   DEBUG [DinfraParachainService] DINFRA Block: #31
acs-reactor_1  | 2023-12-14 23:53:33.1 INFO Received DINFRA event NoEvent
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-0532e19e) (logid:e0c7e609) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-0532e19e) (logid:e0c7e609) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-0532e19e) (logid:e0c7e609) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-0532e19e) (logid:e0c7e609) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-b31fdfd5) (logid:26b55eec) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-5:ctx-23ea6121) (logid:db2c66ed) system memory from /proc: 16763502592
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-5:ctx-23ea6121) (logid:db2c66ed) free memory from /proc: 285581312
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-5:ctx-23ea6121) (logid:db2c66ed) used memory from /proc: 1965832
ogate_1        | [Nest] 28  - 12/14/2023, 11:53:42 PM   DEBUG [DinfraParachainService] DINFRA Block: #32
acs-reactor_1  | 2023-12-14 23:53:48.1 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:53:54 PM   DEBUG [DinfraParachainService] DINFRA Block: #33
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-2b046984) (logid:827128f7) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-2b046984) (logid:827128f7) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-2b046984) (logid:827128f7) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-2b046984) (logid:827128f7) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-4a8b70e9) (logid:94718cca) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-reactor_1  | 2023-12-14 23:54:03.1 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:54:06 PM   DEBUG [DinfraParachainService] DINFRA Block: #34
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-f884c0f6) (logid:c4b5d90a) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-f884c0f6) (logid:c4b5d90a) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-f884c0f6) (logid:c4b5d90a) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-f884c0f6) (logid:c4b5d90a) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-5ccd1a86) (logid:397fbe3f) NetworkGarbageCollector uses '20' seconds for GC interval.
ogate_1        | [Nest] 28  - 12/14/2023, 11:54:18 PM   DEBUG [DinfraParachainService] DINFRA Block: #35
acs-reactor_1  | 2023-12-14 23:54:18.1 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:54:30 PM   DEBUG [DinfraParachainService] DINFRA Block: #36
acs-reactor_1  | 2023-12-14 23:54:33.1 INFO Received DINFRA event NoEvent
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-86c11f71) (logid:fe6464e1) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-86c11f71) (logid:fe6464e1) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-86c11f71) (logid:fe6464e1) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-86c11f71) (logid:fe6464e1) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-f7801da5) (logid:86d45d14) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-2:ctx-afdb883d) (logid:aeea2aca) system memory from /proc: 16763502592
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-2:ctx-afdb883d) (logid:aeea2aca) free memory from /proc: 298057728
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-2:ctx-afdb883d) (logid:aeea2aca) used memory from /proc: 1966452
ogate_1        | [Nest] 28  - 12/14/2023, 11:54:42 PM   DEBUG [DinfraParachainService] DINFRA Block: #37
acs-reactor_1  | 2023-12-14 23:54:48.1 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:54:54 PM   DEBUG [DinfraParachainService] DINFRA Block: #38
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-1d6486c3) (logid:99e6eac9) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-1d6486c3) (logid:99e6eac9) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-1d6486c3) (logid:99e6eac9) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-1d6486c3) (logid:99e6eac9) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-fbd4d28b) (logid:ccafc16b) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-reactor_1  | 2023-12-14 23:55:03.1 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:55:06 PM   DEBUG [DinfraParachainService] DINFRA Block: #39
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-512101c2) (logid:cf1fd13a) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-512101c2) (logid:cf1fd13a) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-512101c2) (logid:cf1fd13a) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-512101c2) (logid:cf1fd13a) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-468c96ab) (logid:873adfcf) NetworkGarbageCollector uses '20' seconds for GC interval.
ogate_1        | [Nest] 28  - 12/14/2023, 11:55:18 PM   DEBUG [DinfraParachainService] DINFRA Block: #40
acs-reactor_1  | 2023-12-14 23:55:18.1 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:55:30 PM   DEBUG [DinfraParachainService] DINFRA Block: #41
acs-reactor_1  | 2023-12-14 23:55:33.1 INFO Received DINFRA event NoEvent
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-11b68636) (logid:95c0b734) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-11b68636) (logid:95c0b734) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-11b68636) (logid:95c0b734) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-11b68636) (logid:95c0b734) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-a1bfb78f) (logid:9d7104ef) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-4:ctx-ef348cbe) (logid:68963d2c) system memory from /proc: 16763502592
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-4:ctx-ef348cbe) (logid:68963d2c) free memory from /proc: 295723008
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-4:ctx-ef348cbe) (logid:68963d2c) used memory from /proc: 1966748
ogate_1        | [Nest] 28  - 12/14/2023, 11:55:42 PM   DEBUG [DinfraParachainService] DINFRA Block: #42
acs-reactor_1  | 2023-12-14 23:55:48.1 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:55:54 PM   DEBUG [DinfraParachainService] DINFRA Block: #43
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-36da467d) (logid:27fe0a5e) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-36da467d) (logid:27fe0a5e) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-36da467d) (logid:27fe0a5e) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-36da467d) (logid:27fe0a5e) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-bcc67331) (logid:8e8163da) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-reactor_1  | 2023-12-14 23:56:03.1 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:56:06 PM   DEBUG [DinfraParachainService] DINFRA Block: #44
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-6ecd8a7d) (logid:ae579f64) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-6ecd8a7d) (logid:ae579f64) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-6ecd8a7d) (logid:ae579f64) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-6ecd8a7d) (logid:ae579f64) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-d2e00eb9) (logid:6fea8861) NetworkGarbageCollector uses '20' seconds for GC interval.
ogate_1        | [Nest] 28  - 12/14/2023, 11:56:18 PM   DEBUG [DinfraParachainService] DINFRA Block: #45
acs-reactor_1  | 2023-12-14 23:56:18.1 INFO Received DINFRA event NoEvent
ogate_1        | [Nest] 28  - 12/14/2023, 11:56:30 PM   DEBUG [DinfraParachainService] DINFRA Block: #46
acs-reactor_1  | 2023-12-14 23:56:33.1 INFO Received DINFRA event NoEvent
acs-sim_1      | INFO  [c.c.r.ResourceLimitManagerImpl] (ResourceCountChecker-1:ctx-02fa8726) (logid:6ffc743a) Started resource counters recalculation periodic task.
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-0b731551) (logid:0d976562) Found 0 removed accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-0b731551) (logid:0d976562) Found 0 disabled accounts to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-0b731551) (logid:0d976562) Found 0 inactive domains to cleanup
acs-sim_1      | INFO  [c.c.u.AccountManagerImpl] (AccountChecker-1:ctx-0b731551) (logid:0d976562) Found 0 disabled projects to cleanup
acs-sim_1      | INFO  [c.c.n.r.VirtualNetworkApplianceManagerImpl] (RouterStatusMonitor-1:ctx-9a2da40b) (logid:30aee822) Found 0 running routers. Fetching, analysing and updating DB for the health checks.
acs-sim_1      | INFO  [o.a.c.e.o.NetworkOrchestrator] (Network-Scavenger-1:ctx-2548b8d6) (logid:d98a769a) NetworkGarbageCollector uses '20' seconds for GC interval.
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-5:ctx-4ebf7926) (logid:fbb6e72c) system memory from /proc: 16763502592
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-5:ctx-4ebf7926) (logid:fbb6e72c) free memory from /proc: 278327296
acs-sim_1      | INFO  [c.c.s.StatsCollector] (StatsCollector-5:ctx-4ebf7926) (logid:fbb6e72c) used memory from /proc: 1967408
ogate_1        | [Nest] 28  - 12/14/2023, 11:56:42 PM   DEBUG [DinfraParachainService] DINFRA Block: #47
acs-reactor_1  | 2023-12-14 23:56:48.1 INFO Received DINFRA event NoEvent
acs-sim_1      | WARN  [c.c.s.StatsCollector] (StatsCollector-1:ctx-24c253ff) (logid:0c2b62be) Volume stats not implemented for this format type RAW
acs-sim_1      | WARN  [c.c.s.StatsCollector] (StatsCollector-1:ctx-24c253ff) (logid:0c2b62be) Volume stats not implemented for this format type RAW
acs-sim_1      | WARN  [c.c.s.StatsCollector] (StatsCollector-1:ctx-24c253ff) (logid:0c2b62be) Volume stats not implemented for this format type RAW
ogate_1        | [Nest] 28  - 12/14/2023, 11:56:54 PM   DEBUG [DinfraParachainService] DINFRA Block: #48
```
</details>


