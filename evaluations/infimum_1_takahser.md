# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/infimum.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [MIT](https://github.com/rhysbalevicius/infimum/blob/aed324e94084f734d8a6110b2a41ff905349edb1/LICENSE) | - |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [Guide](https://github.com/rhysbalevicius/infimum/tree/aed324e94084f734d8a6110b2a41ff905349edb1#usage) | See [Documentation Feedback](#documentation-feedback) |
| 0c. | Testing | <ul><li>[x] </li></ul> | | See [Testing Feedback](#testing-feedback) |
| 1a. | Substrate pallet | <ul><li>[ ] </li></ul> | (currently being evaluated) | Spec: Methods 1.ii.a to 1.ii.i (listed under deliverables in the project overview) without verification functionality provided by Groth16 proving system. |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Note: The builds were ran on a MacBook Pro M2, MacOs 14.3

### Documentation Feedback

- [x] Docker-based Build ~~currently fails~~ passes
  
  <details>
    <summary>Output</summary>

    ```zsh
    infimum % docker compose --profile dev up
    [+] Running 1/1
    ! pallet-base Warning                                                                                                                                                                                                                                    2.4s 
    [+] Building 610.2s (30/30) FINISHED                                                                                                                                                                                                      docker:desktop-linux
    => [pallet-base internal] load build definition from Dockerfile.base                                                                                                                                                                                     0.0s
    => => transferring dockerfile: 854B                                                                                                                                                                                                                      0.0s
    => [pallet-base internal] load metadata for docker.io/library/rust:1.74.1-slim                                                                                                                                                                           2.3s
    => [pallet-base internal] load .dockerignore                                                                                                                                                                                                             0.0s
    => => transferring context: 2B                                                                                                                                                                                                                           0.0s
    => [pallet-base  1/11] FROM docker.io/library/rust:1.74.1-slim@sha256:53596c66027523b2289c6e7c96bff119416be22d2cf52734b4962e13371c54cf                                                                                                                  12.3s
    => => resolve docker.io/library/rust:1.74.1-slim@sha256:53596c66027523b2289c6e7c96bff119416be22d2cf52734b4962e13371c54cf                                                                                                                                 0.0s
    => => sha256:6de2b1bae375f8282350ed3de56e7f12bf160649d06ffb78518bd74bb71b8d1d 315.80MB / 315.80MB                                                                                                                                                        8.2s
    => => sha256:53596c66027523b2289c6e7c96bff119416be22d2cf52734b4962e13371c54cf 984B / 984B                                                                                                                                                                0.0s
    => => sha256:e6ed1bc5dee5d6fa8bb1c5a92565ba8037c84491545f494a073599c3a079c903 742B / 742B                                                                                                                                                                0.0s
    => => sha256:db03bffb7019f4c2fe42d020cff55928ca6873c264bf1fc54d29d3569e3696ab 4.86kB / 4.86kB                                                                                                                                                            0.0s
    => => sha256:24e221e92a36ab5b0075dd156b4f2ff095532a9b0927946cf6070bb1bea208b8 29.16MB / 29.16MB                                                                                                                                                          1.0s
    => => extracting sha256:24e221e92a36ab5b0075dd156b4f2ff095532a9b0927946cf6070bb1bea208b8                                                                                                                                                                 1.4s
    => => extracting sha256:6de2b1bae375f8282350ed3de56e7f12bf160649d06ffb78518bd74bb71b8d1d                                                                                                                                                                 3.8s
    => [pallet-base internal] load build context                                                                                                                                                                                                             5.9s
    => => transferring context: 1.27GB                                                                                                                                                                                                                       5.6s
    => [pallet-base  2/11] RUN ln -snf /usr/share/zoneinfo/America/New_York /etc/localtime && echo America/New_York > /etc/timezone                                                                                                                          0.3s
    => [pallet-base  3/11] RUN rustup update     && rustup update nightly     && rustup target add wasm32-unknown-unknown                                                                                                                                   11.0s
    => [pallet-base  4/11] RUN apt-get update -y && apt-get install -y     build-essential     clang     curl     git     libssl-dev     protobuf-compiler                                                                                                  28.9s 
    => [pallet-base  5/11] RUN git clone https://github.com/substrate-developer-hub/substrate-node-template.git /node                                                                                                                                        2.9s 
    => [pallet-base  6/11] COPY ./.dev/Cargo.toml ./node/Cargo.toml                                                                                                                                                                                          0.0s 
    => [pallet-base  7/11] COPY ./.dev/runtime/Cargo.toml ./node/runtime/Cargo.toml                                                                                                                                                                          0.0s 
    => [pallet-base  8/11] COPY ./.dev/runtime/src/lib.rs ./node/runtime/src/lib.rs                                                                                                                                                                          0.0s 
    => [pallet-base  9/11] COPY ./pallet ./node/pallets/infimum                                                                                                                                                                                              1.7s 
    => [pallet-base 10/11] WORKDIR /node                                                                                                                                                                                                                     0.0s 
    => [pallet-base 11/11] RUN cargo build --release                                                                                                                                                                                                       348.5s
    => [pallet-base] exporting to image                                                                                                                                                                                                                     22.0s 
    => => exporting layers                                                                                                                                                                                                                                  22.0s 
    => => writing image sha256:0ef4db4b32f8a43f952fe571f2b7c9ce971ffb8ca94645ec5cfbfe092bfa23c1                                                                                                                                                              0.0s 
    => => naming to docker.io/library/pallet-base                                                                                                                                                                                                            0.0s 
    => [runtime-node internal] load build definition from Dockerfile.node                                                                                                                                                                                    0.0s 
    => => transferring dockerfile: 110B                                                                                                                                                                                                                      0.0s 
    => [runtime-node internal] load metadata for docker.io/library/pallet-base:latest                                                                                                                                                                        0.0s
    => [runtime-node internal] load .dockerignore                                                                                                                                                                                                            0.0s
    => => transferring context: 2B                                                                                                                                                                                                                           0.0s
    => [runtime-node 1/1] FROM docker.io/library/pallet-base:latest                                                                                                                                                                                          0.0s
    => [runtime-node] exporting to image                                                                                                                                                                                                                     0.0s
    => => exporting layers                                                                                                                                                                                                                                   0.0s
    => => writing image sha256:1880603977bdcd22da6e1ac348e5f1201f5d92b6c9fa175dca767898d4e6abbd                                                                                                                                                              0.0s
    => => naming to docker.io/library/infimum-runtime-node                                                                                                                                                                                                   0.0s
    => [frontend internal] load build definition from Dockerfile.frontend                                                                                                                                                                                    0.0s
    => => transferring dockerfile: 281B                                                                                                                                                                                                                      0.0s
    => [frontend internal] load metadata for docker.io/library/node:21.6.0-slim                                                                                                                                                                              2.4s
    => [frontend internal] load .dockerignore                                                                                                                                                                                                                0.0s
    => => transferring context: 2B                                                                                                                                                                                                                           0.0s
    => [frontend 1/5] FROM docker.io/library/node:21.6.0-slim@sha256:e8a7eb273ef8a9ebc03f0ad03c0fd4bbc3562ec244691e6fc37344ee2c4357d2                                                                                                                        3.3s
    => => resolve docker.io/library/node:21.6.0-slim@sha256:e8a7eb273ef8a9ebc03f0ad03c0fd4bbc3562ec244691e6fc37344ee2c4357d2                                                                                                                                 0.0s
    => => sha256:25da51c5e49e29061de78c1f0b6bfa3239d9d76a2ba7c012c89deb55a17843b9 41.71MB / 41.71MB                                                                                                                                                          2.4s
    => => sha256:e8a7eb273ef8a9ebc03f0ad03c0fd4bbc3562ec244691e6fc37344ee2c4357d2 1.21kB / 1.21kB                                                                                                                                                            0.0s
    => => sha256:97ec840b5b9ce2e14bccc60a69ffd2b6e390f5db578f45eab79719dfcc126c1e 1.37kB / 1.37kB                                                                                                                                                            0.0s
    => => sha256:b16fa84908d4e0db5cdae40deabe7e28616550a072c118eb54805a2fafc3ed33 7.63kB / 7.63kB                                                                                                                                                            0.0s
    => => sha256:a5573528b1f0cf2f5d87c94fe0aee9d8967d5de98258be9303c3c6fa477824ec 29.16MB / 29.16MB                                                                                                                                                          1.1s
    => => sha256:0ad18ba74ea9ba2e25e81027c035b5658ba7cd68adfe50c829f2f6f6f6590830 3.36kB / 3.36kB                                                                                                                                                            0.9s
    => => sha256:b40473433bfb42c6eb15e19a76371cc890efc2adfedd48833a3cc826d0c825d1 2.70MB / 2.70MB                                                                                                                                                            1.6s
    => => sha256:3449ebc49596b9553d8e6093251e96414316faf45566a52a6f3f1f33250cd432 452B / 452B                                                                                                                                                                1.6s
    => => extracting sha256:a5573528b1f0cf2f5d87c94fe0aee9d8967d5de98258be9303c3c6fa477824ec                                                                                                                                                                 0.8s
    => => extracting sha256:0ad18ba74ea9ba2e25e81027c035b5658ba7cd68adfe50c829f2f6f6f6590830                                                                                                                                                                 0.0s
    => => extracting sha256:25da51c5e49e29061de78c1f0b6bfa3239d9d76a2ba7c012c89deb55a17843b9                                                                                                                                                                 0.8s
    => => extracting sha256:b40473433bfb42c6eb15e19a76371cc890efc2adfedd48833a3cc826d0c825d1                                                                                                                                                                 0.0s
    => => extracting sha256:3449ebc49596b9553d8e6093251e96414316faf45566a52a6f3f1f33250cd432                                                                                                                                                                 0.0s
    => [frontend 2/5] RUN apt-get update -y && apt-get install git -y                                                                                                                                                                                       14.6s
    => [frontend 3/5] RUN git clone --branch infimum https://github.com/rhysbalevicius/substrate-front-end-template                                                                                                                                          0.9s 
    => [frontend 4/5] WORKDIR /substrate-front-end-template                                                                                                                                                                                                  0.0s 
    => [frontend 5/5] RUN npm install                                                                                                                                                                                                                      156.2s 
    => [frontend] exporting to image                                                                                                                                                                                                                         2.4s 
    => => exporting layers                                                                                                                                                                                                                                   2.4s 
    => => writing image sha256:01ebd54da31eb024623a1d22ee3e4378eeb5effe91b98165653c8c26d4a75021                                                                                                                                                              0.0s 
    => => naming to docker.io/library/infimum-frontend                                                                                                                                                                                                       0.0s 
    [+] Running 4/2                                                                                                                                                                                                                                                
    ✔ Network infimum_default           Created                                                                                                                                                                                                              0.0s 
    ✔ Container infimum-pallet-base-1   Created                                                                                                                                                                                                              0.1s 
    ✔ Container infimum-runtime-node-1  Created                                                                                                                                                                                                              0.0s 
    ✔ Container infimum-frontend-1      Created                                                                                                                                                                                                              0.0s 
    Attaching to frontend-1, pallet-base-1, runtime-node-1
    pallet-base-1 exited with code 0
    runtime-node-1  | 2024-02-19 16:24:00 Substrate Node    
    runtime-node-1  | 2024-02-19 16:24:00 ✌️  version 4.0.0-dev-2ad9b78c7b5    
    runtime-node-1  | 2024-02-19 16:24:00 ❤️  by Substrate DevHub <https://github.com/substrate-developer-hub>, 2017-2024    
    runtime-node-1  | 2024-02-19 16:24:00 📋 Chain specification: Development    
    runtime-node-1  | 2024-02-19 16:24:00 🏷  Node name: extra-small-thing-6164    
    runtime-node-1  | 2024-02-19 16:24:00 👤 Role: AUTHORITY    
    runtime-node-1  | 2024-02-19 16:24:00 💾 Database: RocksDb at /tmp/substrate3BSJ9D/chains/dev/db/full    
    runtime-node-1  | 2024-02-19 16:24:00 🔨 Initializing Genesis block/state (state: 0xd249…bfac, header-hash: 0xfb2e…e482)    
    runtime-node-1  | 2024-02-19 16:24:00 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
    frontend-1      | 
    frontend-1      | > substrate-front-end-template@monthly-2022-01 start
    frontend-1      | > react-app-rewired start
    frontend-1      | 
    runtime-node-1  | 2024-02-19 16:24:00 Using default protocol ID "sup" because none is configured in the chain specs    
    runtime-node-1  | 2024-02-19 16:24:00 🏷  Local node identity is: 12D3KooWAeNq2aQyNQDeNkTvpaNZvr7jA11QDvkRNQgArSmEedgE    
    runtime-node-1  | 2024-02-19 16:24:00 💻 Operating system: linux    
    runtime-node-1  | 2024-02-19 16:24:00 💻 CPU architecture: aarch64    
    runtime-node-1  | 2024-02-19 16:24:00 💻 Target environment: gnu    
    runtime-node-1  | 2024-02-19 16:24:00 💻 Memory: 7840MB    
    runtime-node-1  | 2024-02-19 16:24:00 💻 Kernel: 6.6.12-linuxkit    
    runtime-node-1  | 2024-02-19 16:24:00 💻 Linux distribution: Debian GNU/Linux 12 (bookworm)    
    runtime-node-1  | 2024-02-19 16:24:00 💻 Virtual machine: no    
    runtime-node-1  | 2024-02-19 16:24:00 📦 Highest known block at #0    
    runtime-node-1  | 2024-02-19 16:24:00 〽️ Prometheus exporter started at 127.0.0.1:9615    
    runtime-node-1  | 2024-02-19 16:24:00 Running JSON-RPC server: addr=0.0.0.0:9944, allowed origins=["*"]    
    frontend-1      | (node:34) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
    frontend-1      | (Use `node --trace-deprecation ...` to show where the warning was created)
    frontend-1      | (node:34) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
    frontend-1      | Starting the development server...
    frontend-1      | 
    frontend-1      | One of your dependencies, babel-preset-react-app, is importing the
    frontend-1      | "@babel/plugin-proposal-private-property-in-object" package without
    frontend-1      | declaring it in its dependencies. This is currently working because
    frontend-1      | "@babel/plugin-proposal-private-property-in-object" is already in your
    frontend-1      | node_modules folder for unrelated reasons, but it may break at any time.
    frontend-1      | 
    frontend-1      | babel-preset-react-app is part of the create-react-app project, which
    frontend-1      | is not maintianed anymore. It is thus unlikely that this bug will
    frontend-1      | ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
    frontend-1      | your devDependencies to work around this error. This will make this message
    frontend-1      | go away.
    frontend-1      |   
    runtime-node-1  | 2024-02-19 16:24:05 💤 Idle (0 peers), best: #0 (0xfb2e…e482), finalized #0 (0xfb2e…e482), ⬇ 0 ⬆ 0    
    runtime-node-1  | 2024-02-19 16:24:06 🙌 Starting consensus session on top of parent 0xfb2e5e1dd39344b2f075ab415581be892152b2357d5ae32d53e1b41374dce482    
    runtime-node-1  | 2024-02-19 16:24:06 🎁 Prepared block for proposing at 1 (0 ms) [hash: 0xed7e5062a793bf538a4b6d6e2d9502673081969261df504154b3d725f349bf53; parent_hash: 0xfb2e…e482; extrinsics (1): [0xec75…8989] 
    ```
  </details>

### Testing Feedback

- [x] Tests pass ~~, but there are a lot of warnings~~ => warnings got fixed in newest revision
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo +nightly test --manifest-path=./pallet/Cargo.toml
        Updating git repository `https://github.com/paritytech/polkadot-sdk.git`
      Compiling sp-std v14.0.0 (https://github.com/paritytech/polkadot-sdk.git#12e5e19c)
      Compiling pallet-infimum v4.0.0-dev (/Users/xxx/repos/infimum/pallet)
        Finished test [unoptimized + debuginfo] target(s) in 15m 11s
        Running unittests src/lib.rs (pallet/target/debug/deps/pallet_infimum-b22f4ccecc1cbfed)

    running 23 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::merge_poll_state ... ok
    test tests::coordinator_key_rotation_malformed ... ok
    test tests::coordinator_key_rotation_during_poll ... ok
    test tests::coordinator_registration_malformed ... ok
    test tests::coordinator_key_rotation ... ok
    test tests::coordinator_registration ... ok
    test tests::coordinator_registration_duplicated ... ok
    test tests::commit_outcome ... ok
    test tests::participant_interaction_outside_period ... ok
    test tests::participant_registration_no_poll ... ok
    test tests::poll_creation ... ok
    test tests::poll_nullify_during_extant ... ok
    test tests::poll_creation_by_non_coordinator ... ok
    test tests::poll_creation_during_extant ... ok
    test tests::poll_creation_malformed ... ok
    test tests::register_as_participant_outside_period ... ok
    test tests::poll_creation_beyond_limit ... ok
    test tests::register_as_participant ... ok
    test tests::participant_limit_reached ... ok
    test tests::participant_interaction ... ok
    test tests::poll_nullify_missing_outcome ... ok
    test tests::participant_interaction_limit ... ok

    test result: ok. 23 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.06s

      Doc-tests pallet-infimum

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```
  </details>

- [x] Docker-based tests ~~can't be run since the build fails:~~ pass, although there are some warnings:

  <details>
    <summary>Output</summary>

    ```zsh
    infimum % docker compose --profile test up
    [+] Building 0.0s (5/5) FINISHED                                                                                                                                                                    docker:desktop-linux
    => [test internal] load build definition from Dockerfile.node                                                                                                                                                      0.0s
    => => transferring dockerfile: 110B                                                                                                                                                                                0.0s
    => [test internal] load metadata for docker.io/library/pallet-base:latest                                                                                                                                          0.0s
    => [test internal] load .dockerignore                                                                                                                                                                              0.0s
    => => transferring context: 2B                                                                                                                                                                                     0.0s
    => CACHED [test 1/1] FROM docker.io/library/pallet-base:latest                                                                                                                                                     0.0s
    => [test] exporting to image                                                                                                                                                                                       0.0s
    => => exporting layers                                                                                                                                                                                             0.0s
    => => writing image sha256:d0e963cff1ecdcf2aefefb3ba189bb026f41987a1676ada45f36297cdad0ad34                                                                                                                        0.0s
    => => naming to docker.io/library/infimum-test                                                                                                                                                                     0.0s
    [+] Running 2/0
    ✔ Container infimum-pallet-base-1  Created                                                                                                                                                                         0.0s 
    ✔ Container infimum-test-1         Created                                                                                                                                                                         0.0s 
    Attaching to pallet-base-1, test-1
    pallet-base-1 exited with code 0
    test-1         | warning: virtual workspace defaulting to `resolver = "1"` despite one or more workspace members being on edition 2021 which implies `resolver = "2"`
    test-1         | note: to keep the current resolver, specify `workspace.resolver = "1"` in the workspace root's manifest
    test-1         | note: to use the edition 2021 resolver, specify `workspace.resolver = "2"` in the workspace root's manifest
    test-1         | note: for more details see https://doc.rust-lang.org/cargo/reference/resolver.html#resolver-versions
    test-1         |    Compiling proc-macro2 v1.0.66
    
    (...)

    test-1         |    Compiling pallet-infimum v4.0.0-dev (/node/pallets/infimum)
    test-1         | warning: the item `Error` is imported redundantly
    test-1         |  --> pallets/infimum/src/tests.rs:2:22
    test-1         |   |
    test-1         | 1 | use super::*;
    test-1         |   |     -------- the item `Error` is already imported here
    test-1         | 2 | use crate::{mock::*, Error};
    test-1         |   |                      ^^^^^
    test-1         |   |
    test-1         |   = note: `#[warn(unused_imports)]` on by default
    test-1         | 
    test-1         | warning: `pallet-infimum` (lib test) generated 1 warning
    test-1         |     Finished `test` profile [unoptimized + debuginfo] target(s) in 35.50s
    test-1         |      Running unittests src/lib.rs (target/debug/deps/pallet_infimum-fe60883ca54106ce)
    test-1         | 
    test-1         | running 23 tests
    test-1         | test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test-1         | test tests::commit_outcome ... ok
    test-1         | test tests::coordinator_key_rotation_malformed ... ok
    test-1         | test tests::coordinator_registration ... ok
    test-1         | test tests::coordinator_key_rotation_during_poll ... ok
    test-1         | test tests::coordinator_registration_duplicated ... ok
    test-1         | test tests::coordinator_key_rotation ... ok
    test-1         | test tests::coordinator_registration_malformed ... ok
    test-1         | test tests::merge_poll_state ... ok
    test-1         | test tests::poll_creation ... ok
    test-1         | test tests::poll_creation_during_extant ... ok
    test-1         | test tests::poll_creation_by_non_coordinator ... ok
    test-1         | test tests::poll_creation_malformed ... ok
    test-1         | test tests::participant_registration_no_poll ... ok
    test-1         | test tests::poll_creation_beyond_limit ... ok
    test-1         | test tests::participant_interaction_outside_period ... ok
    test-1         | test tests::register_as_participant_outside_period ... ok
    test-1         | test tests::poll_nullify_during_extant ... ok
    test-1         | test tests::register_as_participant ... ok
    test-1         | test tests::participant_limit_reached ... ok
    test-1         | test tests::participant_interaction ... ok
    test-1         | test tests::poll_nullify_missing_outcome ... ok
    test-1         | test tests::participant_interaction_limit ... ok
    test-1         | 
    test-1         | test result: ok. 23 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s
    test-1         | 
    test-1         |    Doc-tests pallet-infimum
    test-1         | 
    test-1         | running 0 tests
    test-1         | 
    test-1         | test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    test-1         | 
    test-1 exited with code 0
    ```
  </details>
