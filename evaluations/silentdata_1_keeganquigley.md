# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/project_silentdata.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a.  | License | <ul><li>[x] </li></ul> | [Node.js library](https://github.com/appliedblockchain/silentdata-node-public/blob/main/LICENSE) <br/>[Smart contract](https://github.com/appliedblockchain/silentdata-polkadot-public/blob/main/LICENSE) | Ok. |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Silent Data whitepaper](https://www.linkedin.com/smart-links/AQEE0cyaT_nw0g) <br/>[Node.js library](https://github.com/appliedblockchain/silentdata-node/blob/main/README.md) <br/>[Smart contract](https://github.com/appliedblockchain/silentdata-polkadot/blob/main/README.md) | Ok. |
| 0c.  | Testing Guide | <ul><li>[x] </li></ul> |[Guide](https://docs.google.com/document/d/1B5woRIl_ZNuahx007V6nXmjW3_Ne4aQ4kVFB-I_Bu0M/edit?usp=sharing) | Ok. |
| 0d.  | Docker | <ul><li>[x] </li></ul> |[Node.js library usage example](https://github.com/appliedblockchain/silentdata-polkadot/blob/main/examples/Dockerfile) <br/>[Silent Data pallet](https://github.com/appliedblockchain/silentdata-polkadot/blob/main/docker/Dockerfile.node) | Ok. |
| 0e.  | Article | <ul><li>[x] </li></ul> |[Polkadot Foundation Partnership Silent Data](https://www.linkedin.com/pulse/polkadot-foundation-partnership-silent-data-silentdata)| Ok. |
| 1.  | Library | <ul><li>[x] </li></ul> |[silentdata-node](https://github.com/appliedblockchain/silentdata-node) | Ok. |
| 2.  | Smart Contract | <ul><li>[x] </li></ul> |[silentdata-polkadot](https://github.com/appliedblockchain/silentdata-polkadot) | Ok. |
| 3.  | Extension | <ul><li>[x] </li></ul> | | Ok. |

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
 
 Instagram checks work in Docker but `npm run build` fails with the following errors:
 ```
 npm run build

> examples@1.0.0 build
> npm run clean && tsc


> examples@1.0.0 clean
> rm -rf ./dist

src/index.ts:1:19 - error TS2307: Cannot find module 'yargs' or its corresponding type declarations.

1 import yargs from 'yargs'
                    ~~~~~~~

src/index.ts:4:20 - error TS2580: Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.

4 const argv = yargs(process.argv.slice(2))
                     ~~~~~~~

src/index.ts:29:3 - error TS2584: Cannot find name 'console'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.

29   console.log(`An error occurred: ${error.message}`)
     ~~~~~~~

src/lib.ts:1:68 - error TS2307: Cannot find module '@appliedblockchain/silentdata-node' or its corresponding type declarations.

1 import { silentdata, Silentdata, CheckType, CheckBlockchain } from '@appliedblockchain/silentdata-node'
                                                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/lib.ts:13:3 - error TS2584: Cannot find name 'console'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.

13   console.log(check.data)
     ~~~~~~~

src/util.ts:1:62 - error TS2307: Cannot find module '@appliedblockchain/silentdata-node' or its corresponding type declarations.

1 import { CheckResource, InstagramCheckCertificateData } from '@appliedblockchain/silentdata-node'
                                                               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/util.ts:2:23 - error TS2307: Cannot find module 'secp256k1' or its corresponding type declarations.

2 import secp256k1 from 'secp256k1'
                        ~~~~~~~~~~~

src/util.ts:3:20 - error TS2307: Cannot find module 'keccak' or its corresponding type declarations.

3 import create from 'keccak'
                     ~~~~~~~~

src/util.ts:35:21 - error TS2580: Cannot find name 'Buffer'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.

35   const signature = Buffer.from(signatureHex, 'hex')
                       ~~~~~~

src/util.ts:36:19 - error TS2580: Cannot find name 'Buffer'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.

36   const message = Buffer.from(messageHex, 'hex')
                     ~~~~~~

src/util.ts:39:22 - error TS2580: Cannot find name 'Buffer'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.

39   const signingKey = Buffer.from(signingKeyHex, 'hex')
                        ~~~~~~

src/util.ts:42:9 - error TS2580: Cannot find name 'Buffer'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.

42     if (Buffer.compare(signingKey, Buffer.from(recoveredKey)) === 0) {
           ~~~~~~

src/util.ts:42:36 - error TS2580: Cannot find name 'Buffer'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.

42     if (Buffer.compare(signingKey, Buffer.from(recoveredKey)) === 0) {
                                      ~~~~~~

src/util.ts:50:3 - error TS2584: Cannot find name 'console'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.

50   console.log('Proof certificate:')
     ~~~~~~~

src/util.ts:51:3 - error TS2584: Cannot find name 'console'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.

51   console.log(parseCertificateData(check))
     ~~~~~~~

src/util.ts:52:3 - error TS2584: Cannot find name 'console'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.

52   console.log('Proof verification:')
     ~~~~~~~

src/util.ts:53:37 - error TS2550: Property 'entries' does not exist on type 'ObjectConstructor'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2017' or later.

53   for (const [key, value] of Object.entries(check.data)) {
                                       ~~~~~~~

src/util.ts:55:7 - error TS2584: Cannot find name 'console'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.

55       console.log(key + ' = ' + addRecoveryId(value, check.data.rawData, check.data.signingKey))
         ~~~~~~~

src/util.ts:57:7 - error TS2584: Cannot find name 'console'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.

57       console.log(key + ' = ' + value)
         ~~~~~~~


Found 19 errors in 3 files.

Errors  Files
     3  src/index.ts:1
     2  src/lib.ts:1
    14  src/util.ts:1
```
**UPDATE:** Build issues were resolved.

In the `silentdata-node` repo, yarn is unsuccessful in installing the dependancies:
```
ubuntu@ip-172-31-3-233:~$ yarn add @appliedblockchain/silentdata-node
yarn add v1.22.19
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 18 new dependencies.
info Direct dependencies
└─ @appliedblockchain/silentdata-node@0.4.0
info All dependencies
├─ @appliedblockchain/silentdata-node@0.4.0
├─ @peculiar/webcrypto@1.4.3
├─ asn1js@3.0.5
├─ asynckit@0.4.0
├─ axios@1.4.0
├─ bytestreamjs@2.0.1
├─ cbor@8.1.0
├─ combined-stream@1.0.8
├─ delayed-stream@1.0.0
├─ follow-redirects@1.15.2
├─ form-data@4.0.0
├─ mime-db@1.52.0
├─ mime-types@2.1.35
├─ nofilter@3.1.0
├─ pkijs@3.0.14
├─ proxy-from-env@1.1.0
├─ tweetnacl@1.0.3
└─ webcrypto-core@1.7.7
Done in 5.18s.
info There appears to be trouble with the npm registry (returned undefined). Retrying...
info There appears to be trouble with the npm registry (returned undefined). Retrying...
```
## Guide

I'm able to get through the guide and register and create an API key. Building the Docker file works, but then for some reason the command fails:
```
docker run silentdata-example \
--clientId={8eb12c0d-5352-4bcb-b5da-d02c3dd61ea1} \
--clientSecret={myapikey} \
--action=create \
--walletAddress={WALLET_ADDRESS}
An error occurred: Client ID or API key incorrect
```
