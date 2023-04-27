# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/project_silentdata.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a.  | License | <ul><li>[x] </li></ul> | [Node.js library](https://github.com/appliedblockchain/silentdata-node-public/blob/main/LICENSE) <br/>[Smart contract](https://github.com/appliedblockchain/silentdata-polkadot-public/blob/main/LICENSE) | ...|
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Silent Data whitepaper](https://www.linkedin.com/smart-links/AQEE0cyaT_nw0g) <br/>[Node.js library](https://github.com/appliedblockchain/silentdata-node/blob/main/README.md) <br/>[Smart contract](https://github.com/appliedblockchain/silentdata-polkadot/blob/main/README.md) | ...|
| 0c.  | Testing Guide | <ul><li>[x] </li></ul> |[Guide](https://docs.google.com/document/d/1B5woRIl_ZNuahx007V6nXmjW3_Ne4aQ4kVFB-I_Bu0M/edit?usp=sharing) | ...|
| 0d.  | Docker | <ul><li>[x] </li></ul> |[Node.js library usage example](https://github.com/appliedblockchain/silentdata-polkadot/blob/main/examples/Dockerfile) <br/>[Silent Data pallet](https://github.com/appliedblockchain/silentdata-polkadot/blob/main/docker/Dockerfile.node) | ...|
| 0e.  | Article | <ul><li>[x] </li></ul> |[Polkadot Foundation Partnership Silent Data](https://www.linkedin.com/pulse/polkadot-foundation-partnership-silent-data-silentdata)| ...|
| 1.  | Library | <ul><li>[x] </li></ul> |[silentdata-node](https://github.com/appliedblockchain/silentdata-node) | ...|
| 2.  | Smart Contract | <ul><li>[x] </li></ul> |[silentdata-polkadot](https://github.com/appliedblockchain/silentdata-polkadot) | ...|
| 3.  | Extension | <ul><li>[x] </li></ul> |[Secure enclave](https://github.com/appliedblockchain/silentdata-defi-core/compare/v0.4.0...v0.5.0-rc1) <br/>[Web application](https://github.com/appliedblockchain/silentdata-defi-app/compare/v0.4.0...v0.5.0-rc1) | Will these private repos be published? |

# General Notes

## Tests

6 tests for the pallet are successful:
```rust
running 6 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::decode_works ... ok
test tests::verify_and_decode_verify_error_catching_works ... ok
test tests::verify_and_decode_decode_error_catching_works ... ok
test tests::verify_and_decode_works ... ok
test tests::verify_works ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

   Doc-tests silentdata

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
4 tests run successfully for the smart-contract:
```rust
running 4 tests
test silentdata::tests::decode_works ... ok
test silentdata::tests::sd_input_works ... ok
test silentdata::tests::verify_works ... ok
test silentdata::tests::verify_and_decode_works ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
Docker image builds successfully for `silentdata-example`:
```
docker build -t silentdata-example .

[+] Building 25.1s (13/13) FINISHED
 => [internal] load build definition from Dockerfile                                                                  0.0s
 => => transferring dockerfile: 303B                                                                                  0.0s
 => [internal] load .dockerignore                                                                                     0.0s
 => => transferring context: 2B                                                                                       0.0s
 => [internal] load metadata for docker.io/library/node:18.15.0-alpine                                                4.5s
 => [1/8] FROM docker.io/library/node:18.15.0-alpine@sha256:47d97b93629d9461d64197773966cc49081cf4463b1b07de5a38b6bd  9.6s
 => => resolve docker.io/library/node:18.15.0-alpine@sha256:47d97b93629d9461d64197773966cc49081cf4463b1b07de5a38b6bd  0.0s
 => => sha256:b72efe9f0095ca57468b4819027821ad7ffdf41d6f29bc4a5f60d6e57b668ee1 1.16kB / 1.16kB                        0.0s
 => => sha256:eef8c5727bcaf118e0a2496ecf95736e5398fa0287cb4ad62e6cce47e6b3b49a 6.50kB / 6.50kB                        0.0s
 => => sha256:c41833b44d910632b415cd89a9cdaa4d62c9725dc56c99a7ddadafd6719960f9 3.26MB / 3.26MB                        3.7s
 => => sha256:81f6a0834130c13021a8c15962b9a471ba9c6b0650adbcf10a2b38202528a6e3 47.36MB / 47.36MB                      8.6s
 => => sha256:aa1d735907bcf7391aae13109442305ecde66573fc5c08015929144948f3cb10 2.41MB / 2.41MB                        2.2s
 => => sha256:47d97b93629d9461d64197773966cc49081cf4463b1b07de5a38b6bd5acfbe9d 1.43kB / 1.43kB                        0.0s
 => => sha256:465dcb965cfbe29db48105551b722c68494b7c3b6f364ee2da8a4a378c2d0230 446B / 446B                            2.5s
 => => extracting sha256:c41833b44d910632b415cd89a9cdaa4d62c9725dc56c99a7ddadafd6719960f9                             0.1s
 => => extracting sha256:81f6a0834130c13021a8c15962b9a471ba9c6b0650adbcf10a2b38202528a6e3                             0.7s
 => => extracting sha256:aa1d735907bcf7391aae13109442305ecde66573fc5c08015929144948f3cb10                             0.1s
 => => extracting sha256:465dcb965cfbe29db48105551b722c68494b7c3b6f364ee2da8a4a378c2d0230                             0.0s
 => [internal] load build context                                                                                     0.1s
 => => transferring context: 276.36kB                                                                                 0.0s
 => [2/8] WORKDIR /app                                                                                                0.2s
 => [3/8] RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > /app/.npmrc                                      0.1s
 => [4/8] COPY *.json /app                                                                                            0.0s
 => [5/8] COPY src /app/src                                                                                           0.0s
 => [6/8] RUN npm install                                                                                             7.3s
 => [7/8] RUN rm -f /app/.npmrc                                                                                       0.3s
 => [8/8] RUN npm run build                                                                                           2.4s
 => exporting to image                                                                                                0.5s
 => => exporting layers                                                                                               0.5s
 => => writing image sha256:166414d1cac1dc8c830fa4e2cd3f65cbb25aa749f67882a2fc6537af75cb7b5c                          0.0s
 => => naming to docker.io/library/silentdata-example 
 ```
 Docker image successfully builds and runs for the pallet as well. I'm also able to manually build the pallet into the node.
