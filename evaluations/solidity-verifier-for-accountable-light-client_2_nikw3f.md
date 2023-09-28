# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/solidity-verifier-for-accountable-light-client.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by nikw3f

| Number  | Deliverable               | Accepted               | Link                                          | Notes                                                        |
| ------- | ------------------------- | -----------------------| --------------------------------------------- | ------------------------------------------------------------ |
| **0a.** | License                   | <ul><li>[x] </li></ul> | Apache-2.0                                                   | Apache 2.0                                                             |
| **0b.** | Documentation             | <ul><li>[x] </li></ul> | https://darwinia-network.github.io/apk-verifier/index.html   | Documentation is comprehensive but please add some details on APK verifier on the [homepage](https://darwinia-network.github.io/apk-verifier/index.html)                                                          |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | https://github.com/darwinia-network/apk-verifier#run-test-in-docker | Tests are working as expected.                                                              |
| 1.      | Libraries preparation     | <ul><li>[x] </li></ul> | 1. The solidity friendly fiat-shamir transformation. [code](https://github.com/darwinia-network/apk-verifier/blob/main/src/common/transcript/Simple.sol)<br />2. Lagrange evaluation. [code](https://github.com/darwinia-network/apk-verifier/blob/main/src/common/poly/evaluations/Lagrange.sol) <br />3. KZG verification. [code](https://github.com/darwinia-network/apk-verifier/blob/6b8bfd37e2c4142bf08d8c98f61a1d3e0c3df57d/src/common/pcs/kzg/KZG.sol) |  All three solidity files working fine.                                                       |
| 2.      | Basic verifier            | <ul><li>[x] </li></ul> | [code](https://github.com/darwinia-network/apk-verifier/blob/main/src/Basic.sol) |  Looks good.                                                            |
| 3.      | Packed verifier           | <ul><li>[x] </li></ul> | [code](https://github.com/darwinia-network/apk-verifier/blob/main/src/Packed.sol) |  Looks good.                                                          |

# General Notes

Good work! Everything works as expected. I was able to run docker and run tests on solidity basic and packed verifiers.

### Docker

```bash

Docker is running fine. Node is able to start and produce blocks.

➜  apk-verifier git:(main) docker run -it --name my_container ghcr.io/darwinia-network/apk-verifier:v0.1.1 "./bin/darwinia --chain pangolin-dev --alice --tmp --rpc-external --rpc-cors all --execution=native"

Unable to find image 'ghcr.io/darwinia-network/apk-verifier:v0.1.1' locally
v0.1.1: Pulling from darwinia-network/apk-verifier
167b8a53ca45: Pull complete
b47a222d28fa: Pull complete
debce5f9f3a9: Pull complete
1d7ca7cd2e06: Pull complete
2f47d826831b: Pull complete
7935a20e0ce2: Pull complete
6ec273e8a214: Pull complete
b425f65510c0: Pull complete
2d7f5c3bc41b: Pull complete
2998afef691e: Pull complete
864dbc5f419c: Pull complete
8ed8d743922f: Pull complete
41a639e58443: Pull complete
Digest: sha256:9994fea0ec7bb9ead63e8c77f03eeab14b23bdc41daf0d6dfa97baf48783ca3c
Status: Downloaded newer image for ghcr.io/darwinia-network/apk-verifier:v0.1.1
WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
<jemalloc>: MADV_DONTNEED does not work (memset will be used instead)
<jemalloc>: (This is the expected behaviour if you are running under QEMU)
2023-09-28 10:47:53 Darwinia
2023-09-28 10:47:53 ✌️  version 6.4.0-8e0b2c0413a
2023-09-28 10:47:53 ❤️  by Darwinia Network <hello@darwinia.network>, 2018-2023
2023-09-28 10:47:53 📋 Chain specification: Pangolin2 Development
2023-09-28 10:47:53 🏷  Node name: Alice
2023-09-28 10:47:53 👤 Role: AUTHORITY
2023-09-28 10:47:53 💾 Database: RocksDb at /tmp/substrateqmJWDX/chains/pangolin2-development/db/full
2023-09-28 10:47:53 ⛓  Native runtime: Pangolin2-6404 (DarwiniaOfficialRust-0.tx0.au0)
2023-09-28 10:47:54 [pallet::staking] assembling new collators for new session 0 at #0
2023-09-28 10:47:54 [pallet::staking] assembling new collators for new session 1 at #0
2023-09-28 10:47:55 Parachain id: Id(2105)
2023-09-28 10:47:55 Parachain Account: 5Ec4AhNxga1JYLioRBNxfRnovheDELVbZTRSnKMgvSVPvNcN
2023-09-28 10:47:55 Parachain genesis state: 0x000000000000000000000000000000000000000000000000000000000000000000e6602cb6269590bdd91073d167d0063d50ee1b30fd7355ba9a04c8884cf6fa4803170a2e7597b7b7e3d84c05391d139a62b157e78786d8c082f29dcf4c11131400
2023-09-28 10:47:55 Is collating: yes
2023-09-28 10:47:55 [pallet::staking] assembling new collators for new session 0 at #0
2023-09-28 10:47:55 [pallet::staking] assembling new collators for new session 1 at #0
2023-09-28 10:47:56 You're running on a system with a broken `madvise(MADV_DONTNEED)` implementation. This will result in lower performance.
2023-09-28 10:48:06 🔨 Initializing Genesis block/state (state: 0xcda3…ff74, header-hash: 0xacba…0c23)
2023-09-28 10:48:17 🏷  Local node identity is: 12D3KooWDPAiQ49RjcVV5YwXXVsmaGBGwhiux9UnsJBhR86xJXR6
2023-09-28 10:48:17 💻 Operating system: linux
2023-09-28 10:48:17 💻 CPU architecture: x86_64
2023-09-28 10:48:17 💻 Target environment: gnu
2023-09-28 10:48:17 💻 Memory: 7850MB
2023-09-28 10:48:17 💻 Kernel: 6.3.13-linuxkit
2023-09-28 10:48:17 💻 Linux distribution: Debian GNU/Linux 12 (bookworm)
2023-09-28 10:48:17 💻 Virtual machine: no
2023-09-28 10:48:17 📦 Highest known block at #0
2023-09-28 10:48:17 〽️ Prometheus exporter started at 127.0.0.1:9615
2023-09-28 10:48:17 Running JSON-RPC server: addr=0.0.0.0:9944, allowed origins=["*"]
2023-09-28 10:48:22 💤 Idle (0 peers), best: #0 (0xacba…0c23), finalized #0 (0xacba…0c23), ⬇ 0 ⬆ 0
2023-09-28 10:48:24 🙌 Starting consensus session on top of parent 0xacba599f0d144292b6138b35aee4234c440ef063b50e91ab884487cc12690c23
2023-09-28 10:48:24 🎁 Prepared block for proposing at 1 (14 ms) [hash: 0xe03719d6333f6ca1197e497a7c0a7a590e84fddaa7e3f483c1ed363fb267e73f; parent_hash: 0xacba…0c23; extrinsics (2): [0xa8cf…0175, 0x7e49…4cd0]]
2023-09-28 10:48:24 🔖 Pre-sealed block for proposal at 1. Hash now 0xfbb5459f4fdd215b8f99ea77cfde52cad90a9b3ba445d950b675a72887a6c074, previously 0xe03719d6333f6ca1197e497a7c0a7a590e84fddaa7e3f483c1ed363fb267e73f.
2023-09-28 10:48:24 ✨ Imported #1 (0xfbb5…c074)
2023-09-28 10:48:27 💤 Idle (0 peers), best: #1 (0xfbb5…c074), finalized #1 (0xfbb5…c074), ⬇ 0 ⬆ 0
2023-09-28 10:48:32 💤 Idle (0 peers), best: #1 (0xfbb5…c074), finalized #1 (0xfbb5…c074), ⬇ 0 ⬆ 0
2023-09-28 10:48:34 Accepting new connection 1/100
2023-09-28 10:48:36 🙌 Starting consensus session on top of parent 0xfbb5459f4fdd215b8f99ea77cfde52cad90a9b3ba445d950b675a72887a6c074
2023-09-28 10:48:36 🎁 Prepared block for proposing at 2 (3 ms) [hash: 0xf0778ee935cdc13ad41eeaa0f216dc594d79b0eeee3c3e79b4357a7344d70b7a; parent_hash: 0xfbb5…c074; extrinsics (2): [0x5e09…d7b3, 0x9bd2…c2e9]]
2023-09-28 10:48:36 🔖 Pre-sealed block for proposal at 2. Hash now 0x3fe637f8edc793c9b3fa1ecca23313c9aee2727aed41d75f0747f15322854517, previously 0xf0778ee935cdc13ad41eeaa0f216dc594d79b0eeee3c3e79b4357a7344d70b7a.
```


### Basic verifier

Basic verifier worked fine.

```bash

root@0358c738402a:/usr/src/app# make deploy-basic
[⠒] Compiling...
[⠔] Installing solc version 0.8.21
[⠘] Successfully installed solc 0.8.21
[⠆] Compiling 66 files with 0.8.21
[⠢] Solc 0.8.21 finished in 351.48s
Compiler run successful!
Script ran successfully.

## Setting up (1) EVMs.

==========================

Chain 43

Estimated gas price: 1649.017470321 gwei

Estimated total gas used for script: 6620137

Estimated amount required: 10.916721568918453977 ETH

==========================

###
Finding wallets for all the necessary addresses...
##
Sending transactions [0 - 2].
⠙ [00:00:00] [#######################################################################################################################################################################################] 3/3 txes (0.0s)
Transactions saved to: /usr/src/app/broadcast/Basic.s.sol/43/run-latest.json

Sensitive values saved to: /usr/src/app/cache/Basic.s.sol/43/run-latest.json

##
Waiting for receipts.
⠚ [00:00:06] [###################################################################################################################################################################################] 3/3 receipts (0.0s)
##### 43
✅  [Success]Hash: 0x0bbe1281ca7fdbe0bff37062f07b17c120be920243fa412fa35adbef69cf7401
Contract Address: 0xc01Ee7f10EA4aF4673cFff62710E1D7792aBa8f3
Block: 32
Paid: 0.520197402169992339 ETH (315459 gas * 1649.017470321 gwei)


##### 43
✅  [Success]Hash: 0xffa18bdebe42c2345cdaf0f1e62a32ee75950e5e439a63f51d558a2bd2e1a7f2
Contract Address: 0x970951a12F975E6762482ACA81E57D5A2A4e73F4
Block: 32
Paid: 0.398029942881261054 ETH (241374 gas * 1649.017470321 gwei)


##### 43
✅  [Success]Hash: 0x9223c2aaa9b2c252fbdd265438a03c0fff63fe962881783e2c8dd95988cd28da
Contract Address: 0x3ed62137c5DB927cb137c26455969116BF0c23Cb
Block: 32
Paid: 7.479252307055991501 ETH (4535581 gas * 1649.017470321 gwei)


Transactions saved to: /usr/src/app/broadcast/Basic.s.sol/43/run-latest.json

Sensitive values saved to: /usr/src/app/cache/Basic.s.sol/43/run-latest.json



==========================

ONCHAIN EXECUTION COMPLETE & SUCCESSFUL.
Total Paid: 8.397479652107244894 ETH (5092414 gas * avg 1649.017470321 gwei)

Transactions saved to: /usr/src/app/broadcast/Basic.s.sol/43/run-latest.json

Sensitive values saved to: /usr/src/app/cache/Basic.s.sol/43/run-latest.json

```


### Packed verifier

Packed verifier worked fine.

```bash

root@0358c738402a:/usr/src/app# make deploy-packed
[⠑] Compiling...
No files changed, compilation skipped
Script ran successfully.

## Setting up (1) EVMs.

==========================

Chain 43

Estimated gas price: 1648.616142628 gwei

Estimated total gas used for script: 7450257

Estimated amount required: 12.282613956927255396 ETH

==========================

###
Finding wallets for all the necessary addresses...
##
Sending transactions [0 - 2].
⠙ [00:00:00] [#######################################################################################################################################################################################] 3/3 txes (0.0s)
Transactions saved to: /usr/src/app/broadcast/Packed.s.sol/43/run-latest.json

Sensitive values saved to: /usr/src/app/cache/Packed.s.sol/43/run-latest.json

##
Waiting for receipts.
⠚ [00:00:11] [###################################################################################################################################################################################] 3/3 receipts (0.0s)
##### 43
✅  [Success]Hash: 0x4beaeb03372bf3a73a234dbafc9a27604e9072728e75dfc8057bff4caa16dfae
Contract Address: 0x962c0940d72E7Db6c9a5F81f1cA87D8DB2B82A23
Block: 46
Paid: 0.520070799737286252 ETH (315459 gas * 1648.616142628 gwei)


##### 43
✅  [Success]Hash: 0x11f5fdda32595548d4a2583a9f999d0c4ccd3d797b1871bde595a7f37724b6e0
Contract Address: 0x5CC307268a1393AB9A764A20DACE848AB8275c46
Block: 46
Paid: 0.397933072810690872 ETH (241374 gas * 1648.616142628 gwei)


##### 43
✅  [Success]Hash: 0xc474ce2a4e0e26d319850dfae9c424bc16905c74d621fe4acfc76fc445b330f9
Contract Address: 0xeAB4eEBa1FF8504c124D031F6844AD98d07C318f
Block: 46
Paid: 8.53016248513652678 ETH (5174135 gas * 1648.616142628 gwei)


Transactions saved to: /usr/src/app/broadcast/Packed.s.sol/43/run-latest.json

Sensitive values saved to: /usr/src/app/cache/Packed.s.sol/43/run-latest.json



==========================

ONCHAIN EXECUTION COMPLETE & SUCCESSFUL.
Total Paid: 9.448166357684503904 ETH (5730968 gas * avg 1648.616142628 gwei)

Transactions saved to: /usr/src/app/broadcast/Packed.s.sol/43/run-latest.json

Sensitive values saved to: /usr/src/app/cache/Packed.s.sol/43/run-latest.json

```


### ADDR Tests

```bash
root@0358c738402a:/usr/src/app# make test-basic  ADDR=0x3ed62137c5DB927cb137c26455969116BF0c23Cb
0x0000000000000000000000000000000000000000000000000000000000000001


root@0358c738402a:/usr/src/app# make test-packed ADDR=0xeAB4eEBa1FF8504c124D031F6844AD98d07C318f
0x0000000000000000000000000000000000000000000000000000000000000001
```