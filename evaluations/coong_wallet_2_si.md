# Evaluation Coong Wallet


- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/coong_wallet.md
- **Milestone:** 2
- **Kusama Identity:** Ha27MB4gKH36ieRPa1T1ASqhUz4sVxMoVmK7o5CS6tXDqjW
- **Previously successfully merged evaluation:** 

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[Link](https://github.com/CoongCrafts/coong-wallet/blob/w3f-milestone-2/LICENSE)| License is Ok. Please add year and owner on line 189. |
| 0b.  | Documentation |<ul><li>[x] </li></ul>|[Link](https://github.com/CoongCrafts/coong-wallet/blob/w3f-milestone-2/README.md)|Documentation is extensive.  |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>|[Link](https://github.com/CoongCrafts/coong-wallet/tree/w3f-milestone-2#how-to-run-tests)| Test run successfully. There are plenty of tests so coverage is fairly high.|
| 0d.  | Docker |<ul><li>[x] </li></ul>|[Link](https://github.com/CoongCrafts/coong-wallet/blob/w3f-milestone-2/Dockerfile)| Good. Perhaps an improvement could be to add your images to DockerHub.  |
| 0e. | Article |<ul><li>[ ] </li></ul>| [Link](https://docs.google.com/document/d/1nZUzetDZvLReof3easrRvR5HQSpjags-XShYj55gJEo/edit?usp=sharing)| Your google docs requires persmission to be accessed. Publish your article on Medium or other open platforms. |
| 1.  | Wallet App |<ul><li>[x] </li></ul>|[Link](https://dapp.coongwallet.io/)| App implements the required features. |
| 2 | Demo App |<ul><li>[x] </li></ul>|[Link](https://www.youtube.com/watch?v=9fIcAlpx_UI)| Good demo videos that showcase implemented functionality. |



## General Notes

1. There are some warnings given by Yarn that are usually related to incompatible versions. 

```
➤ YN0000: ┌ Resolution step
➤ YN0002: │ @coong/base@workspace:packages/base doesn't provide @polkadot/api (p65e43), requested by @polkadot/extension-inject
➤ YN0002: │ @coong/ui@workspace:packages/ui doesn't provide @testing-library/dom (pdd159), requested by @testing-library/user-event
➤ YN0060: │ @coong/ui@workspace:packages/ui provides react (pa7263) with version 18.2.0, which doesn't satisfy what react-qr-reader requests
➤ YN0060: │ @coong/ui@workspace:packages/ui provides react-dom (p8ec15) with version 18.2.0, which doesn't satisfy what react-qr-reader requests
➤ YN0002: │ @coong/ui@workspace:packages/ui doesn't provide react-is (p15b34), requested by @polkadot/react-identicon
➤ YN0002: │ @coong/ui@workspace:packages/ui doesn't provide redux (pd0ab5), requested by redux-persist
➤ YN0002: │ @coong/ui@workspace:packages/ui doesn't provide vite (p55931), requested by @vitejs/plugin-react
➤ YN0002: │ @nrwl/devkit@npm:15.7.0 [efc3e] doesn't provide typescript (p6bdc1), requested by @phenomnomnominal/tsquery
➤ YN0000: │ Some peer dependencies are incorrectly met; run yarn explain peer-requirements <hash> for details, where <hash> is the six-letter p-prefixed code
➤ YN0000: └ Completed
➤ YN0000: ┌ Fetch step
➤ YN0000: └ Completed in 0s 280ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed
```

2. Test are passing successfully. There are some warnings that might require attention. 

```
 Test Files  20 passed (20)
      Tests  182 passed (182)
   Start at  18:28:51
   Duration  29.18s (transform 642ms, setup 3.17s, collect 65.35s, tests 91.66s)
```
3. Docker image build and run works correctly:

```
[+] Building 162.6s (12/12) FINISHED                                                                                                                                                                     
 => [internal] load build definition from Dockerfile                                                                                                                                                0.0s
 => => transferring dockerfile: 168B                                                                                                                                                                0.0s
 => [internal] load .dockerignore                                                                                                                                                                   0.0s
 => => transferring context: 199B                                                                                                                                                                   0.0s
 => [internal] load metadata for docker.io/library/node:18                                                                                                                                          1.9s
 => [auth] library/node:pull token for registry-1.docker.io                                                                                                                                         0.0s
 => [internal] load build context                                                                                                                                                                   0.6s
 => => transferring context: 3.17MB                                                                                                                                                                 0.1s
 => [1/6] FROM docker.io/library/node:18@sha256:4a55308cc855cba1a925d19ae4e45838741dad2fd7bb8949a93b2a0f2ae339e3                                                                                   65.2s
 => => resolve docker.io/library/node:18@sha256:4a55308cc855cba1a925d19ae4e45838741dad2fd7bb8949a93b2a0f2ae339e3                                                                                    0.0s
 => => sha256:a31111d070044ed920abddebc16bfa67a69fb0e0e782b703073c93ec10dedf67 49.57MB / 49.57MB                                                                                                   32.3s
 => => sha256:dd13397d6ccd754586b475131a51ebeb69394eb49de84b647f4fb6a38703da89 63.98MB / 63.98MB                                                                                                   52.7s
 => => sha256:4a55308cc855cba1a925d19ae4e45838741dad2fd7bb8949a93b2a0f2ae339e3 1.21kB / 1.21kB                                                                                                      0.0s
 => => sha256:5fea051bde96adaec8680ea3fcaff1168c955cc214609f3335c3c15fb21cafbf 2.00kB / 2.00kB                                                                                                      0.0s
 => => sha256:1551e40cd9c28a1ba7a54fdcb22fae37696d2ed74d333bb433c5184f2c9971b4 7.26kB / 7.26kB                                                                                                      0.0s
 => => sha256:2455b35210792787557bbd2b0b976aa27a8bd5931191be95c7291b93b9e38f6c 23.57MB / 23.57MB                                                                                                    4.0s
 => => sha256:344a74fed6660540130e12445bb29d7201f3d591b13bfd5021d2517c2a5ed7bf 202.40MB / 202.40MB                                                                                                 58.3s
 => => sha256:60b2c1a2936fca6d8e26d37e3399e436ddd9fd3d8cc845bfef21d16703cffb98 3.36kB / 3.36kB                                                                                                     33.3s
 => => extracting sha256:a31111d070044ed920abddebc16bfa67a69fb0e0e782b703073c93ec10dedf67                                                                                                           1.4s
 => => sha256:f3cb0cf1697ab893b4c718bf907613fade5463af153b7a257d0facf0024a0432 45.58MB / 45.58MB                                                                                                   49.7s
 => => extracting sha256:2455b35210792787557bbd2b0b976aa27a8bd5931191be95c7291b93b9e38f6c                                                                                                           0.5s
 => => sha256:88c3aa907dd4912b984c9d80421e4aa382ef592643430ab067e83c4d87250d13 2.28MB / 2.28MB                                                                                                     51.8s
 => => sha256:6c7a1e104b90daed6eb2165584d1a8228b19baced180ae3023237d4fd6787a50 450B / 450B                                                                                                         52.0s
 => => extracting sha256:dd13397d6ccd754586b475131a51ebeb69394eb49de84b647f4fb6a38703da89                                                                                                           1.9s
 => => extracting sha256:344a74fed6660540130e12445bb29d7201f3d591b13bfd5021d2517c2a5ed7bf                                                                                                           5.0s
 => => extracting sha256:60b2c1a2936fca6d8e26d37e3399e436ddd9fd3d8cc845bfef21d16703cffb98                                                                                                           0.0s
 => => extracting sha256:f3cb0cf1697ab893b4c718bf907613fade5463af153b7a257d0facf0024a0432                                                                                                           1.3s
 => => extracting sha256:88c3aa907dd4912b984c9d80421e4aa382ef592643430ab067e83c4d87250d13                                                                                                           0.1s
 => => extracting sha256:6c7a1e104b90daed6eb2165584d1a8228b19baced180ae3023237d4fd6787a50                                                                                                           0.0s
 => [2/6] WORKDIR /app                                                                                                                                                                              0.0s
 => [3/6] COPY package.json .                                                                                                                                                                       0.0s
 => [4/6] COPY yarn.lock .                                                                                                                                                                          0.0s
 => [5/6] COPY . .                                                                                                                                                                                  0.0s
 => [6/6] RUN yarn install                                                                                                                                                                         83.0s
 => exporting to image                                                                                                                                                                             12.4s
 => => exporting layers                                                                                                                                                                            12.4s
 => => writing image sha256:33964388f842d35758ec61ddf2f6b08e6a3992cb855a30cc7ddc330d566ae844                                                                                                        0.0s
 => => naming to docker.io/library/coong-wallet 
```

4. Creating a separate git branch for the delivery was a good idea to ensure that the functionality can be tested. Nice job! 