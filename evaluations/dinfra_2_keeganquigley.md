# Evaluation

- **Status:** Accepted
- **Application Document:** [Application](https://github.com/w3f/Grants-Program/blob/master/applications/DINFRA.md)
- **Milestone:** 2
- **Previously successfully merged evaluation:** dastansam

**Deliverables**

| Number  | Deliverable                | Link                                                         | Notes                                                        |
| ------- | -------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **0a.** | License                    | [link](https://gitlab.com/dinfra/dinfra/-/blob/MILESTONE2/LICENSE?ref_type=tags) | Apache 2.0                                                   |
| **0b.** | Documentation              | [link](https://gitlab.com/dinfra/dinfra/-/blob/main/README.md?ref_type=heads) | Great docs!                  |
| **0c.** | Testing and Testing Guide  | [link](https://gitlab.com/dinfra/dinfra/-/blob/main/README.md?ref_type=heads#testing-guide) | Looks great. |
| **0d.** | Docker                     | [link](https://gitlab.com/dinfra/dinfra/-/blob/MILESTONE2/docker-compose.yml?ref_type=tags) | Works. |
| 1.      | DINFRA Provider Pallet     | [link](https://gitlab.com/dinfra/substrate-parachain/-/tree/MILESTONE2/pallets/dinfra-provider?ref_type=tags) | Looks great. |
| 2.      | DINFRA Subscription Pallet | [link](https://gitlab.com/dinfra/substrate-parachain/-/tree/MILESTONE2/pallets/dinfra-subscription?ref_type=tags) | Looks great. |
| 3.      | Chain Reactor Interface    | [link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE2/packages/ogate?ref_type=tags) | Looks great. |

# General Notes

Great work! Some tests weren't passing at first but issues were resolved. I was able to spin up all Zombienet chains and try out the pallets.

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

<details>

  <summary>Zombienet tests pass</summary>

```
Creating dinfra_zombietest_1 ... done
Attaching to dinfra_zombietest_1
zombietest_1   | Zombienet starting in TEST mode
zombietest_1   | Starting test test with data at ./data/test_1702939844
zombietest_1   | ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ 🛎️ Tests are currently running. Results will appear at the end                                                         │
zombietest_1   | └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   |         Launching network... this can take a while.
zombietest_1   | ╔════════════════════╤════════════════════════════════════════════════════════════════════════════════════════════════════╗
zombietest_1   | ║ 🧟 Zombienet 🧟    │ Initiation                                                                                         ║
zombietest_1   | ╟────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
zombietest_1   | ║ Provider           │ native                                                                                             ║
zombietest_1   | ╟────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
zombietest_1   | ║ Namespace          │ zombie-fe1ee32e5c8573ce24cc8c317b6c875e                                                            ║
zombietest_1   | ╟────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
zombietest_1   | ║ Temp Dir           │ ./data/test_1702939844                                                                             ║
zombietest_1   | ╚════════════════════╧════════════════════════════════════════════════════════════════════════════════════════════════════╝
zombietest_1   | ┌─────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Pod                     │ temp                                                                                               │
zombietest_1   | ├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Status                  │ Launching                                                                                          │
zombietest_1   | ├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Command                 │ bash -c polkadot build-spec --chain rococo-local --disable-default-bootnode > ./data/test_1702939… │
zombietest_1   | └─────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Pod                                    │ temp                                                                           │
zombietest_1   | ├────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Status                                 │ Ready                                                                          │
zombietest_1   | └────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌─────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Pod                     │ temp-1                                                                                             │
zombietest_1   | ├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Status                  │ Launching                                                                                          │
zombietest_1   | ├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Command                 │ bash -c dinfra-node build-spec  --disable-default-bootnode > ./data/test_1702939844/cfg/undefined… │
zombietest_1   | └─────────────────────────┴───────────────────────────────────────────────���────────────────────────────────────────────────────┘
zombietest_1   | ┌────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Pod                                    │ temp-1                                                                         │
zombietest_1   | ├────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Status                                 │ Ready                                                                          │
zombietest_1   | └────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ 🧹 Starting with a fresh authority set...                                                                              │
zombietest_1   | └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌──────────────────────────────┬────────────────────┬──────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ 👤 Added Genesis Authority   │ collator01         │ 5EKrBmFNpX3iFyMbr3RRzN92SLK1K7fkrQxNHpjHnFABHC4F                     │
zombietest_1   | └──────────────────────────────┴────────────────────┴──────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌──────────────────────────────┬────────────────────┬──────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ 👤 Added CollatorSelection   │ collator01         │ 5Fqdv43Ce4VWNmks2mMdMbyWi7oCeFvMairi9kr9ViEyFyB7                     │
zombietest_1   | └──────────────────────────────┴────────────────────┴──────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌─────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Pod                     │ temp-2                                                                                             │
zombietest_1   | ├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Status                  │ Launching                                                                                          │
zombietest_1   | ├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Command                 │ bash -c dinfra-node build-spec  --disable-default-bootnode --chain ./data/test_170293              │
zombietest_1   | │                         │ 9844/2000-rococo-local-plain.json  --raw > ./data/test_1702939844/2000-rococo-local-raw.js         │
zombietest_1   | │                         │ on                                                                                                 │
zombietest_1   | └─────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Pod                                    │ temp-2                                                                         │
zombietest_1   | ├────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Status                                 │ Ready                                                                          │
zombietest_1   | └────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌─────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Pod                     │ temp-collator                                                                                      │
zombietest_1   | ├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Status                  │ Launching                                                                                          │
zombietest_1   | ├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Command                 │ bash -c dinfra-node export-genesis-state --chain ./data/test_1702939844/2000-rococo-l              │
zombietest_1   | │                         │ ocal.json ./data/test_1702939844/cfg/genesis-state-2000 && dinfra-node export-genesis-wasm         │
zombietest_1   | │                         │  --chain ./data/test_1702939844/2000-rococo-local.json ./data/test_1702939844/cfg/genesis-         │
zombietest_1   | │                         │ wasm-2000                                                                                          │
zombietest_1   | └─────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Pod                                    │ temp-collator                                                                  │
zombietest_1   | ├────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Status                                 │ Ready                                                                          │
zombietest_1   | └────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
zombietest_1   | ║ ✓ Added Genesis Parachain 2000                                                                                         ║
zombietest_1   | ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
zombietest_1   | ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ 🧹 Starting with a fresh authority set...                                                                              │
zombietest_1   | └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
zombietest_1   | ║ 👤 Added Balance 2000000000000 for alice - 5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY                            ║
zombietest_1   | ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
zombietest_1   | ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
zombietest_1   | ║ 👤 Added Balance 2000000000000 for bob - 5HpG9w8EBLe5XCrbczpwq5TSXvedjrBGCwqxK1iQ7qUsSWFc                              ║
zombietest_1   | ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
zombietest_1   | ┌──────────────────────────────┬────────────────────┬──────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ 👤 Added Genesis Authority   │ alice              │ 5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY                     │
zombietest_1   | └──────────────────────────────┴────────────────────┴──────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌──────────────────────────────┬────────────────────┬──────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ 👤 Added Genesis Authority   │ bob                │ 5HpG9w8EBLe5XCrbczpwq5TSXvedjrBGCwqxK1iQ7qUsSWFc                     │
zombietest_1   | └──────────────────────────────┴────────────────────┴──────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌─────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Pod                     │ temp-3                                                                                             │
zombietest_1   | ├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Status                  │ Launching                                                                                          │
zombietest_1   | ├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Command                 │ bash -c polkadot build-spec --chain ./data/test_1702939844/rococo-local-plain.json --disable-defa… │
zombietest_1   | └─────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Pod                                    │ temp-3                                                                         │
zombietest_1   | ├────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Status                                 │ Ready                                                                          │
zombietest_1   | └────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
zombietest_1   | ║ Chain name: Rococo Local Testnet                                                                                       ║
zombietest_1   | ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
zombietest_1   | ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Rococo Local Testnet ⚙ Clear Boot Nodes                                                                                │
zombietest_1   | └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌─────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Pod                     │ alice                                                                                              │
zombietest_1   | ├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Status                  │ Launching                                                                                          │
zombietest_1   | ├─────────────────────────┼────────────────────────────────────────────────���───────────────────────────────────────────────────┤
zombietest_1   | │ Command                 │ polkadot --chain ./data/test_1702939844/alice/cfg/rococo-local.json --name alice --rp              │
zombietest_1   | │                         │ c-cors all --unsafe-rpc-external --rpc-methods unsafe --no-mdns --node-key 2bd806c97f0e00a         │
zombietest_1   | │                         │ f1a1fc3328fa763a9269723c8db8fac4f93af71db186d6e90 --no-telemetry --prometheus-external --v         │
zombietest_1   | │                         │ alidator --prometheus-port 46207 --rpc-port 37731 --listen-addr /ip4/0.0.0.0/tcp/45205/ws          │
zombietest_1   | │                         │ --base-path ./data/test_1702939844/alice/data                                                      │
zombietest_1   | └─────────────────────────┴────────────────────────────────────────────────────────────────────────────��───────────────────────┘
zombietest_1   | ┌────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Pod                                    │ alice                                                                          │
zombietest_1   | ├────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Status                                 │ Ready                                                                          │
zombietest_1   | └────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ╔════════════════════╤════════════════════════════════════════════════════════════════════════════════════════════════════╗
zombietest_1   | ║ Pod                │ alice                                                                                              ║
zombietest_1   | ╟────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
zombietest_1   | ║ Status             │ Running                                                                                            ║
zombietest_1   | ╟────────────────────╧────────────────────────────────────────────────────────────────────────────────────────────────────╢
zombietest_1   | ║ You can follow the logs of the node by running this command:                                                            ║
zombietest_1   | ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════════��══════════╝
zombietest_1   | tail -f  ./data/test_1702939844/alice.log
zombietest_1   | 
zombietest_1   | 
zombietest_1   | ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Rococo Local Testnet ⚙ Added Boot Nodes                                                                                │
zombietest_1   | ├────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ /ip4/127.0.0.1/tcp/45205/ws/p2p/12D3KooWQCkBm1BYtkHpocxCwMgR8yjitEeHGx8spzcDLGt2gkBm                                   │
zombietest_1   | └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌─────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Pod                     │ bob                                                                                                │
zombietest_1   | ├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Status                  │ Launching                                                                                          │
zombietest_1   | ├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Command                 │ polkadot --chain ./data/test_1702939844/bob/cfg/rococo-local.json --name bob --rpc-co              │
zombietest_1   | │                         │ rs all --unsafe-rpc-external --rpc-methods unsafe --no-mdns --node-key 81b637d8fcd2c6da635         │
zombietest_1   | │                         │ 9e6963113a1170de795e4b725b84d1e0b4cfd9ec58ce9 --no-telemetry --prometheus-external --valid         │
zombietest_1   | │                         │ ator --bootnodes /ip4/127.0.0.1/tcp/45205/ws/p2p/12D3KooWQCkBm1BYtkHpocxCwMgR8yjitEeHGx8sp         │
zombietest_1   | │                         │ zcDLGt2gkBm --prometheus-port 44405 --rpc-port 37732 --listen-addr /ip4/0.0.0.0/tcp/39973/         │
zombietest_1   | │                         │ ws --base-path ./data/test_1702939844/bob/data                                                     │
zombietest_1   | └─────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Pod                                    │ bob                                                                            │
zombietest_1   | ├────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Status                                 │ Ready                                                                          │
zombietest_1   | └────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ╔════════════════════╤════════════════════════════════════════════════════════════════════════════════════════════════════╗
zombietest_1   | ║ Pod                │ bob                                                                                                ║
zombietest_1   | ╟────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
zombietest_1   | ║ Status             │ Running                                                                                            ║
zombietest_1   | ╟────────────────────╧────────────────────────────────────────────────────────────────────────────────────────────────────╢
zombietest_1   | ║ You can follow the logs of the node by running this command:                                                            ║
zombietest_1   | ╚═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
zombietest_1   | tail -f  ./data/test_1702939844/bob.log
zombietest_1   | 
zombietest_1   | 
zombietest_1   | ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
zombietest_1   | ║ All relay chain nodes spawned...                                                                                       ║
zombietest_1   | ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
zombietest_1   | ┌─────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Pod                     │ collator01                                                                                         │
zombietest_1   | ├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Status                  │ Launching                                                                                          │
zombietest_1   | ├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Command                 │ dinfra-node --name collator01 --node-key 5e123980fad4770d9ab5b7df7bbee8499943822a8555              │
zombietest_1   | │                         │ d11995e8203210065342 --chain ./data/test_1702939844/collator01/cfg/rococo-local-2000.json          │
zombietest_1   | │                         │ --base-path ./data/test_1702939844/collator01/data --listen-addr /ip4/0.0.0.0/tcp/42283/ws         │
zombietest_1   | │                         │  --prometheus-external --rpc-cors all --unsafe-rpc-external --rpc-methods unsafe --prometh         │
zombietest_1   | │                         │ eus-port 40665 --rpc-port 37741 --collator -- --chain ./data/test_1702939844/collator01/cf         │
zombietest_1   | │                         │ g/rococo-local.json --execution wasm --port 38801 --rpc-port 45235                                 │
zombietest_1   | └─────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ Pod                                    │ collator01                                                                     │
zombietest_1   | ├────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Status                                 │ Ready                                                                          │
zombietest_1   | └────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ╔════════════════════╤════════════════════════════════════════════════════════════════════════════════════════════════════╗
zombietest_1   | ║ Pod                │ collator01                                                                                         ║
zombietest_1   | ╟────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
zombietest_1   | ║ Status             │ Running                                                                                            ║
zombietest_1   | ╟────────────────────╧────────────────────────────────────────────────────────────────────────────────────────────────────╢
zombietest_1   | ║ You can follow the logs of the node by running this command:                                                            ║
zombietest_1   | ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════════��══════════╝
zombietest_1   | tail -f  ./data/test_1702939844/collator01.log
zombietest_1   | 
zombietest_1   | 
zombietest_1   | ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ DINFRA Local Testnet ⚙ Added Boot Nodes                                                                                │
zombietest_1   | ├────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ /ip4/127.0.0.1/tcp/42283/ws/p2p/12D3KooWAieokPB4zt3dJJokhVZw8KoQuTgXEEyempJtr6pGkhrd                                   │
zombietest_1   | └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | 
zombietest_1   | Error   fetching metrics from: http://127.0.0.1:40665/metrics
zombietest_1   | 
zombietest_1   | Error   fetching metrics from: http://127.0.0.1:40665/metrics
zombietest_1   | 
zombietest_1   | Error   fetching metrics from: http://127.0.0.1:40665/metrics
zombietest_1   | 
zombietest_1   | Error   fetching metrics from: http://127.0.0.1:40665/metrics
zombietest_1   | ┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │                                                       Network launched 🚀🚀                                                       │
zombietest_1   | ├──────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Namespace                    │ zombie-fe1ee32e5c8573ce24cc8c317b6c875e                                                            │
zombietest_1   | ├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Provider                     │ native                                                                                             │
zombietest_1   | ├──────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │                                                         Node Information                                                          │
zombietest_1   | ├──────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Name                         │ alice                                                                                              │
zombietest_1   | ├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Direct Link                  │ https://polkadot.js.org/apps/?rpc=ws://127.0.0.1:37731#/explorer                                   │
zombietest_1   | ├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Prometheus Link              │ http://127.0.0.1:46207/metrics                                                                     │
zombietest_1   | ├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Log Cmd                      │ tail -f  ./data/test_1702939844/alice.log                                                          │
zombietest_1   | ├──────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │                                                         Node Information                                                          │
zombietest_1   | ├──────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Name                         │ bob                                                                                                │
zombietest_1   | ├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Direct Link                  │ https://polkadot.js.org/apps/?rpc=ws://127.0.0.1:37732#/explorer                                   │
zombietest_1   | ├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Prometheus Link              │ http://127.0.0.1:44405/metrics                                                                     │
zombietest_1   | ├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Log Cmd                      │ tail -f  ./data/test_1702939844/bob.log                                                            │
zombietest_1   | ├──────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │                                                         Node Information                                                          │
zombietest_1   | ├──────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Name                         │ collator01                                                                                         │
zombietest_1   | ├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Direct Link                  │ https://polkadot.js.org/apps/?rpc=ws://127.0.0.1:37741#/explorer                                   │
zombietest_1   | ├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Prometheus Link              │ http://127.0.0.1:40665/metrics                                                                     │
zombietest_1   | ├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Log Cmd                      │ tail -f  ./data/test_1702939844/collator01.log                                                     │
zombietest_1   | ├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ Parachain ID                 │ 2000                                                                                               │
zombietest_1   | ├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
zombietest_1   | │ ChainSpec Path               │ ./data/test_1702939844/2000-rococo-local.json                                                      │
zombietest_1   | └──────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ 🛎️ Tests are currently running. Results will appear at the end                                                         │
zombietest_1   | └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │                                                           Test Results                                                            │
zombietest_1   | └───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌──────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ 12/18/2023, 10:51:20 PM      │ ✅ alice: is up (63ms)                                                                             │
zombietest_1   | └──────────────────────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────��┘
zombietest_1   | ┌──────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ 12/18/2023, 10:51:20 PM      │ ✅ bob: is up (45ms)                                                                               │
zombietest_1   | └──────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌──────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ 12/18/2023, 10:51:20 PM      │ ✅ alice: reports node_roles is 4 (1ms)                                                            │
zombietest_1   | └──────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌──────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ 12/18/2023, 10:51:20 PM      │ ✅ alice: reports sub_libp2p_is_major_syncing is 0 (0ms)                                           │
zombietest_1   | └──────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌──────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ 12/18/2023, 10:51:20 PM      │ ✅ bob: log line matches "Imported #[0-9]+" within 30 seconds (1ms)                                │
zombietest_1   | └──────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌──────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ 12/18/2023, 10:51:20 PM      │ ✅ alice: log line matches "Imported #[0-9]+" within 30 seconds (1ms)                              │
zombietest_1   | └──────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
zombietest_1   | ┌──────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
zombietest_1   | │ 12/18/2023, 10:51:20 PM      │ ✅ collator01: is up (10ms)                                                                        │
zombietest_1   | └──────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘

```
</details>

<details>
<summary>Unit tests pass</summary>

```
  Building wheel for dinfra-client (setup.py) ... error
  ERROR: Command errored out with exit status 1:
   command: /home/ubuntu/dinfra/packages/acs-reactor/venv/bin/python3 -u -c 'import sys, setuptools, tokenize; sys.argv[0] = '"'"'/tmp/pip-req-build-qg347w83/setup.py'"'"'; __file__='"'"'/tmp/pip-req-build-qg347w83/setup.py'"'"';f=getattr(tokenize, '"'"'open'"'"', open)(__file__);code=f.read().replace('"'"'\r\n'"'"', '"'"'\n'"'"');f.close();exec(compile(code, __file__, '"'"'exec'"'"'))' bdist_wheel -d /tmp/pip-wheel-9kshdd_m
       cwd: /tmp/pip-req-build-qg347w83/
  Complete output (6 lines):
  usage: setup.py [global_opts] cmd1 [cmd1_opts] [cmd2 [cmd2_opts] ...]
     or: setup.py --help [cmd1 cmd2 ...]
     or: setup.py --help-commands
     or: setup.py cmd --help
  
  error: invalid command 'bdist_wheel'
  ----------------------------------------
  ERROR: Failed building wheel for dinfra-client
  Running setup.py clean for dinfra-client
Failed to build dinfra-client
Installing collected packages: dinfra-client
  Attempting uninstall: dinfra-client
    Found existing installation: dinfra-client 1.0.0
    Uninstalling dinfra-client-1.0.0:
      Successfully uninstalled dinfra-client-1.0.0
    Running setup.py install for dinfra-client ... done
Successfully installed dinfra-client-1.0.0
warning package.json: No license field
$ bash -c '. ./venv/bin/activate && pytest -m "not manual" test'
================================================================== test session starts ==================================================================
platform linux -- Python 3.8.10, pytest-7.4.3, pluggy-1.3.0
rootdir: /home/ubuntu/dinfra/packages/acs-reactor
configfile: pytest.ini
collected 8 items / 3 deselected / 5 selected                                                                                                           

test/test_ansible.py ..                                                                                                                           [ 40%]
test/test_jwt.py ...                                                                                                                              [100%]

============================================================ 5 passed, 3 deselected in 8.33s ============================================================
$ yarn git:init && cargo test --manifest-path ./parachain/Cargo.toml --release
$ git submodule init && git submodule update
warning: virtual workspace defaulting to `resolver = "1"` despite one or more workspace members being on edition 2021 which implies `resolver = "2"`
note: to keep the current resolver, specify `workspace.resolver = "1"` in the workspace root's manifest
note: to use the edition 2021 resolver, specify `workspace.resolver = "2"` in the workspace root's manifest
note: for more details see https://doc.rust-lang.org/cargo/reference/resolver.html#resolver-versions
   Compiling librocksdb-sys v0.11.0+8.1.1
   Compiling rococo-runtime v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling dinfra-runtime v0.1.0 (/home/ubuntu/dinfra/parachain/runtime)
   Compiling rocksdb v0.21.0
   Compiling kvdb-rocksdb v0.19.0
   Compiling sc-client-db v0.10.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-service v0.10.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-storage-monitor v0.1.0 (https://github.com/paritytech/substrate?branch=polkadot-v1.0.0#948fbd2f)
   Compiling sc-cli v0.10.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v1.0.0#948fbd2f)
   Compiling polkadot-node-metrics v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-overseer v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
⚡ Found 3 strongly connected components which includes at least one cycle each
cycle(001) ∈ α: ApprovalVoting ~~{"ApprovalDistributionMessage"}~~> ApprovalDistribution ~~{"ApprovalVotingMessage"}~~>  *
cycle(002) ∈ β: CandidateBacking ~~{"CollatorProtocolMessage"}~~> CollatorProtocol ~~{"CandidateBackingMessage"}~~>  *
cycle(003) ∈ γ: NetworkBridgeRx ~~{"GossipSupportMessage"}~~> GossipSupport ~~{"NetworkBridgeRxMessage"}~~>  *
   Compiling polkadot-node-subsystem v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-node-subsystem-util v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling cumulus-relay-chain-interface v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
   Compiling cumulus-primitives-parachain-inherent v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
   Compiling polkadot-availability-recovery v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-collator-protocol v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-node-collation-generation v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-network-bridge v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-node-core-runtime-api v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-node-core-pvf v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-node-core-candidate-validation v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling cumulus-client-pov-recovery v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
   Compiling polkadot-node-core-backing v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-approval-distribution v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-gossip-support v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-availability-distribution v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-node-core-pvf-checker v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-node-core-dispute-coordinator v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-node-core-bitfield-signing v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-availability-bitfield-distribution v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-node-core-av-store v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-statement-distribution v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-node-core-provisioner v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-dispute-distribution v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-node-core-chain-selection v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-node-core-approval-voting v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-node-core-parachains-inherent v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-node-core-chain-api v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling frame-benchmarking-cli v4.0.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v1.0.0#948fbd2f)
   Compiling cumulus-client-consensus-common v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
   Compiling cumulus-pallet-parachain-system v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
   Compiling cumulus-client-network v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
   Compiling try-runtime-cli v0.10.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v1.0.0#948fbd2f)
   Compiling cumulus-client-collator v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
   Compiling cumulus-relay-chain-rpc-interface v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
   Compiling cumulus-client-consensus-proposer v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
   Compiling cumulus-relay-chain-minimal-node v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
   Compiling cumulus-client-cli v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
   Compiling cumulus-client-consensus-aura v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
   Compiling polkadot-service v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling polkadot-cli v1.0.0 (https://github.com/paritytech/polkadot?branch=release-v1.0.0#c9ec8c5a)
   Compiling cumulus-relay-chain-inprocess-interface v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
   Compiling cumulus-client-service v0.1.0 (https://github.com/paritytech/cumulus.git?branch=polkadot-v1.0.0#0d17cf6b)
   Compiling dinfra-node v0.1.0 (/home/ubuntu/dinfra/parachain/node)
    Finished release [optimized] target(s) in 15m 34s
     Running unittests src/lib.rs (parachain/target/release/deps/dinfra_common-d8aed6605d3f1ea5)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (parachain/target/release/deps/dinfra_node-9404d7e9530b7a7c)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (parachain/target/release/deps/dinfra_runtime-63ff1a18309b65a7)

running 5 tests
test weights::block_weights::constants::test_weights::sane ... ok
test weights::paritydb_weights::constants::test_db_weights::sane ... ok
test weights::extrinsic_weights::constants::test_weights::sane ... ok
test weights::rocksdb_weights::constants::test_db_weights::sane ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (parachain/target/release/deps/pallet_dinfra_provider-581cbc3b89faff2f)

running 13 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::can_encode_an_offering ... ok
test tests::can_create_an_offering ... ok
test tests::can_not_award_an_existent_deployment_no_one_offers ... ok
test tests::can_not_award_an_unexistent_deployment ... ok
test tests::can_not_award_to_closed_offering ... ok
test tests::can_not_store_a_too_long_deployment_type ... ok
test tests::can_not_create_a_offering_twice ... ok
test tests::can_not_create_a_offering_with_invalid_deployment_type ... ok
test tests::can_not_store_a_too_long_description ... ok
test tests::can_store_a_deployment_type ... ok
test tests::can_not_store_same_deployment_descriptor_twice ... ok
test tests::deployments_are_awareded_as_load_balancing ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (parachain/target/release/deps/pallet_dinfra_subscription-03926640b3de6f98)

running 19 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::can_create_a_provider_selector ... ok
test tests::can_create_a_subscription_with_provider ... ok
test tests::can_create_a_subscription_with_selector ... ok
test tests::can_not_create_a_subscription_with_little_funding ... ok
test tests::can_not_create_a_provider_selector_with_too_many_selections ... ok
test tests::can_not_create_a_subscription_with_provider_but_missing_deployment_type ... ok
test tests::can_not_create_a_subscription_with_provider_and_selector ... ok
test tests::can_reschedule_the_termination_of_a_subscription ... ok
test tests::can_schedule_the_termination_of_a_subscription ... ok
test tests::can_serialize_a_subscription_info ... ok
test tests::check_subscription_funding_arithmetic ... ok
test tests::lifecycle_test_subscription_with_no_offering ... ok
test tests::can_serialize_provider_selector ... ok
test tests::lifecycle_test_subscription_with_offering_early_subscriber_cancellation ... ok
test tests::lifecycle_test_subscription_with_offering ... ok
test tests::lifecycle_test_subscription_with_offering_intermediate_additional_funding ... ok
test tests::lifecycle_test_subscription_with_offering_intermediate_settlement ... ok
test tests::lifecycle_test_subscription_with_offering_early_provider_cancellation ... ok

test result: ok. 19 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (parachain/target/release/deps/pallet_parachain_template-c17965d69407f6aa)

running 3 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::it_works_for_default_value ... ok
test tests::correct_error_for_none_value ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests dinfra-common

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests dinfra-runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dinfra-provider

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-dinfra-subscription

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-parachain-template

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

Done in 986.43s.
```

```
Successfully installed dinfra-client-1.0.0
warning package.json: No license field
$ bash -c '. ./venv/bin/activate && pytest -m "not manual" test'
================================================================== test session starts ==================================================================
platform linux -- Python 3.8.10, pytest-7.4.3, pluggy-1.3.0
rootdir: /home/ubuntu/dinfra/packages/acs-reactor
configfile: pytest.ini
collected 8 items / 3 deselected / 5 selected                                                                                                           

test/test_ansible.py ..                                                                                                                           [ 40%]
test/test_jwt.py ...                                                                                                                              [100%]

============================================================ 5 passed, 3 deselected in 9.31s ============================================================
Done in 45.61s.
```

</details>

<details>

  <summary>Docker successfully simulates life cycles</summary>

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
