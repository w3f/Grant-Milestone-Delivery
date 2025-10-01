# NFTAA — Milestone 3 Evaluation

- **Status:** Changes requested 
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/nftaa.md
- **Milestone:** 3

| Number | Deliverable | Approved | Link | Notes |
|------:|-------------|:--------:|------|-------|
| 0a. | License | [x] | See multiple repos in delivery | MIT licenses are present. |
| 0b. | Documentation | [x] | Website, Pallet wiki, Testing guide | Documentation present and accessible. |
| 0c. | Testing and Testing Guide | [ ] | Testing guide, unit tests, devnet | Low unit test coverage. Lack frontend setup guide. |
| 0d. | Docker | [ ] | Dockerfile and setup guide | Build failing. |
| 0e. | Article | [x] | Medium article | Article present. |
| 3a. | Web app integration | [ ] | koda.nftaa.xyz (marketplace) | See staking UI note below; requires staking integration per application scope. |
| 3b. | Marketplace app integration | [ ] | koda.nftaa.xyz + indexer + node | Pending manual verification of core flows locally due to setup problems. |

## Staking UI/Flow requirement (from application M3 → 3a)

In the grant application (M3 → 3a Web app integration), you explicitly promise a UI that lets users “play with staking, increase stake and unstake handled by NFTAA.” The M3 delivery shows a KodaDot-based marketplace integration, but I don’t see any staking UI/flows nor integration with the Polkadot Staking Dashboard (or an equivalent staking interface). Can you provide staking app integration?

## Testing coverage (current run)

- File: `polkadot-sdk/templates/parachain/pallets/pallet-nftaa/src/lib.rs`
- Coverage: 48 of 125 lines (38.40%)
- Broken link: The delivery references unit tests at `https://github.com/decenzio/nftaa/blob/main/src/tests.rs`, which returns 404. Please provide the correct URL to the unit tests.

Please increase coverage, especially for critical paths.

## Docker build failure (repro logs)

The Docker build failed due to a missing Git branch (`dev-2`) in `decenzio/polkadot-sdk`. Please review the branch/tag name or update the Dockerfile to a valid ref.

```text
$ docker build --platform linux/amd64 -t polkadot-sdk-image:latest .
[+] Building 5.1s (3/17)                                                                       docker:default
 => [internal] load build definition from Dockerfile                                                     0.2s
 => => transferring dockerfile: 1.50kB                                                                   0.0s
 => [internal] load metadata for docker.io/library/rust:latest                                           3.4s
 => [internal] load .dockerignore                                                                        0.2s
 => => transferring context: 46B                                                                         0.0s
 => [ 1/14] FROM docker.io/library/rust:latest@sha256:eabb786e74b520e7ea45baca03ea20c3e8c6dc037c392d457  1.2s
[+] Building 92.3s (11/17)                                                            docker:default7
 => [ 1/14] FROM docker.io/library/rust:latest@sha256:eabb786e74b520e7ea45baca03ea20c3e8c6dc037c392d457  40.0s 
 => => sha256:15b1d8a5ff03aeb0f14c8d39a60a73ef22f656550bfa1bb90d1850f25a0ac0 49.28MB / 49.28MB  5.1s 
 => => sha256:22718812f617084a0c5e539e02723b75bf79ea2a589430f820efcbb07f45b9 25.61MB / 25.61MB  4.7s
 => => sha256:401a98f7495bee3e8e6943da9f52f0ab1043c43eb1d107a3817fc2a4b916be 67.78MB / 67.78MB  5.7s 
 => => sha256:ad446e7df19acd39290d995e6d78ccbfde171596237968a140518b183d9 235.91MB / 235.91MB  21.2s
 => => sha256:0807dfd77f5a19f148b0befb80e3689209b7413ac391e7510e5156b6739 211.09MB / 211.09MB  19.8s
 => [ 2/14] RUN apt-get update && apt-get install -y     curl     wget     protobuf-compiler   22.2s
 => [ 3/14] RUN rustup toolchain install nightly                                               15.9s 
 => [ 4/14] RUN rustup default nightly                                                          0.5s 
 => [ 5/14] RUN rustup target add wasm32-unknown-unknown --toolchain nightly                    6.6s 
 => [ 6/14] RUN rustup component add rust-src --toolchain nightly                               1.8s 
 => [ 7/14] WORKDIR /usr/src/app                                                                0.2s 
 => ERROR [ 8/14] RUN git clone https://github.com/decenzio/polkadot-sdk.git --branch dev-2 --  0.9s 
------
 > [ 8/14] RUN git clone https://github.com/decenzio/polkadot-sdk.git --branch dev-2 --recurse-submodules:
0.368 Cloning into 'polkadot-sdk'...
0.796 fatal: Remote branch dev-2 not found in upstream origin
------
Dockerfile:25
--------------------
  25 | >>> RUN git clone https://github.com/decenzio/polkadot-sdk.git --branch dev-2 --recurse-submodules
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c git clone https://github.com/decenzio/polkadot-sdk.git --branch dev-2 --recurse-submodules" did not complete successfully: exit code: 128
```

## Indexer connectivity issue (RPC failures)

When running the indexer stack, the processor failed to connect to the configured RPC and kept backing off:

```text
processor-1  | ┌──────────────────┬──────────────────────────────────────────────────────────────┐
processor-1  | │ CHAIN            │ 'substrate'                                                  │
processor-1  | │ ARCHIVE_URL      │ 'https://v2.archive.subsquid.io/network/asset-hub-substrate' │
processor-1  | │ NODE_URL         │ 'ws://host.docker.internal:9920'                             │
processor-1  | └──────────────────┴──────────────────────────────────────────────────────────────┘
processor-1  | {"level":3,"ns":"sqd:processor:rpc","msg":"connection failure","rpcUrl":"ws://host.docker.internal:9920","reason":"RpcConnectionError: Socket error"}
(repeats with increasing backoff)
```

Request:
- Provide a working RPC configuration for the processor (instructions to run the node locally and make it reachable from containers).
- If relying on `host.docker.internal`, note that Linux Docker may not resolve this by default. I tested using Zombienet locally without Docker.
- Include environment variables or compose overrides required to bring the indexer to a healthy, processing state.

## Local environment notes

- I was able to run Zombienet without Docker, but there are no instructions to run the frontend locally and connect it to the indexer.
- The indexer connectivity problem above currently prevents continuing local end-to-end tests (frontend ↔ indexer ↔ node). Please provide local run instructions for the frontend (env vars, URLs) and a fix for indexer connectivity so I can proceed.
