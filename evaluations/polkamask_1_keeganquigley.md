# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkamask.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

**Deliverables**

| Number | Deliverable | Accepted | Link | Notes |
| ------ | ------------- | ------------- | ------------- | ------------- |
| 0a. | License Apache 2.0 | <ul><li>[x] </li></ul> | https://github.com/PolkaGate/polkaMask/blob/main/LICENSE.APACHE2 | 
| 0b. | Documentation | <ul><li>[x] </li></ul> | https://github.com/PolkaGate/polkaMask/wiki |  |
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | https://github.com/PolkaGate/polkaMask#running-the-repository |  | 
| 0d. | Docker | <ul><li>[x] </li></ul> | https://github.com/PolkaGate/polkaMask?tab=readme-ov-file#docker |  |
| 0e. | Article | <ul><li>[x] </li></ul> | https://medium.com/@polkagate/polkamask-polkadot-with-metamask-0d0e5e12f2d6 | 
| 1. | Polkagate Signer (Metamask Snap) | <ul><li>[x] </li></ul> | https://github.com/PolkaGate/polkaMask/tree/main/packages/snap |  |
| 2. | Upgraded Polkadot extension-dapp | <ul><li>[x] </li></ul> | https://github.com/PolkaGate/polkadot-js-extension/tree/master/packages/extension-dapp/src/snap |  |
| 3. | Upgraded Polkadot-Cloud | <ul><li>[x] </li></ul> | https://github.com/PolkaGate/polkadot-cloud-library/commit/a29606260ef6ef79137b745d2c5c1336346bcb02 |  |

# General Notes

## Tests

Unit tests passing:

```ts
yarn test
(node:49823) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 PASS  src/index.test.ts (51.901 s)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        52.256 s
```
Docker containers run successfully:

```sh
 => => extracting sha256:e5a7e61f6ff45ab19ba3bad8bfc4e38cdafbbca0cefcf1f81516bb14b6476557                            0.0s
 => [polkamask builder 2/9] RUN apt-get update &&   apt-get install --no-install-recommends -y build-essential cur  40.9s
 => [polkamask stage-1 2/3] WORKDIR /polkamask                                                                       1.0s
 => [polkamask builder 3/9] RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -                             4.0s
 => [dashboard builder 2/6] WORKDIR /app                                                                             0.1s
 => [dashboard builder 3/6] RUN echo "CACHEBUST=1706656771"                                                          0.1s
 => [dashboard builder 4/6] RUN git clone https://github.com/Nick-1979/staking-dashboard.git .                       9.3s
 => [polkamask builder 4/9] RUN apt-get install --no-install-recommends -y nodejs &&   apt-get clean &&   rm -rf /  39.6s
 => [dashboard builder 5/6] RUN apt update && apt install -y git                                                    11.1s
 => [dashboard builder 6/6] RUN yarn install && yarn build                                                          89.3s
 => [polkamask builder 5/9] RUN npm install yarn -g                                                                  1.2s
 => [polkamask builder 6/9] RUN echo "CACHEBUST=1706656771"                                                          0.3s
 => [polkamask builder 7/9] WORKDIR /polkamask                                                                       0.0s
 => [polkamask builder 8/9] RUN git clone https://github.com/PolkaGate/polkaMask.git .                               1.2s
 => [polkamask builder 9/9] RUN yarn && yarn build                                                                 172.1s
 => [dashboard stage-1 2/2] COPY --from=BUILDER /app/build /usr/share/nginx/html                                     0.1s
 => [dashboard] exporting to image                                                                                   0.1s
 => => exporting layers                                                                                              0.1s
 => => writing image sha256:8834dec2847fe5e695a312425fe74269f44ad486646914c84c3394daa8e3f1b0                         0.0s
 => => naming to docker.io/library/polkamask-dashboard                                                               0.0s
 => [polkamask stage-1 3/3] COPY --from=builder /polkamask/ ./                                                      16.6s
 => [polkamask] exporting to image                                                                                  13.8s
 => => exporting layers                                                                                             13.8s
 => => writing image sha256:66bf6963dbdf578133ef90fa92ac025c55e48be1e31f15042922911bc2843d16                         0.0s
 => => naming to docker.io/library/polkamask-polkamask                                                               0.0s
[+] Running 3/3
 ✔ Network polkamask_default        Created                                                                          0.0s
 ✔ Container polkamask-polkamask-1  Started                                                                          0.4s
 ✔ Container polkamask-dashboard-1  Started
```
```sh
docker ps
CONTAINER ID   IMAGE                 COMMAND                  CREATED          STATUS          PORTS                                            NAMES
f26ef6308ecc   polkamask-dashboard   "/docker-entrypoint.…"   21 seconds ago   Up 20 seconds   0.0.0.0:80->80/tcp                               polkamask-dashboard-1
9c94c1d87aff   polkamask-polkamask   "docker-entrypoint.s…"   21 seconds ago   Up 20 seconds   0.0.0.0:8000->8000/tcp, 0.0.0.0:8080->8080/tcp   polkamask-polkamask-1
```
