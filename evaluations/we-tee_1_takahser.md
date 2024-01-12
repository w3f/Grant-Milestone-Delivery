# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/WeTEE_Network.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Apache License 2.0](https://github.com/wetee-dao/chain/blob/0a9e6c090402b950ab2f17b502368df6118bfb7a/LICENSE)  | - |
| **0b.** | Documentation | <ul><li>[ ] </li></ul> | [M1 docs](https://github.com/wetee-dao/chain/blob/0a9e6c090402b950ab2f17b502368df6118bfb7a/docs/grants/milestone-1-documentation.md)  | See [Documentation Feedback](#documentation-feedback) |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Test guide](https://github.com/wetee-dao/chain/blob/0a9e6c090402b950ab2f17b502368df6118bfb7a/docs/grants/milestone-1-test.md)  | See [Testing Feedback](#testing-feedback) |
| **0d.** | Docker | <ul><li>[ ] </li></ul> | [Docker run instructions](https://github.com/wetee-dao/chain/blob/0a9e6c090402b950ab2f17b502368df6118bfb7a/docs/run-docker.md) | See [Documentation Feedback](#documentation-feedback) |
| 01. | Substrate module: worker | <ul><li>[ ] </li></ul> | (to be evaluated, once 0b./0d. are accepted)  | Spec: This pallet provides modules for the registration and staking of miner nodes, as well as accepting proof-of-work data and detailed file hashes and addresses from miners, and also provides withdrawal functions for miners, as well as closure (which can only be executed if all services have already stopped/migrated), and also provides channels for users to complain about miner nodes.<br /> 1. Worker cluster register <br /> 2. Worker cluster mortgage <br /> 3. Worker cluster upload proof of work data <br /> 4. Worker cluster withdrawal <br /> 5. Worker cluster stop <br /> 6. Worker cluster report |
| 02. | Substrate module: app | <ul><li>[ ] </li></ul> | (to be evaluated, once 0b./0d. are accepted)  | Spec: This pallet provides users with the function of deploying and updating applications, as well as an interface for topping up applications. Users can prepay for the operation of the application, and miners can only unlock the fees paid by users after uploading proof of work.<br />1. TEE app create <br /> 2. TEE app update <br /> 3. TEE app set settings <br /> 4. TEE app recharge <br /> 5. TEE app stop |
| 03. | Substrate module: task | <ul><li>[ ] </li></ul> | (to be evaluated, once 0b./0d. are accepted)  | Spec: This pallet provides users with the function of deploying and updating periodic/temporary tasks, where users can set the execution time and cycle of tasks. It also provides an interface for users to recharge their applications, allowing them to prepay for the operation of the application. Miners can only obtain revenue after uploading proof-of-work for single-task work.<br /> 1. TEE task create <br /> 2. TEE task update <br /> 3. TEE task set execute settings <br /> 4. TEE task recharge <br /> 5. TEE task stop |



Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Documentation Feedback

- [] Build docker image: currently generates an error when run on macbook pro m2

  <details>
      <summary>Output</summary>

      ```zsh
      % docker build -f ./pos_build.Dockerfile -t wetee/wetee-node:dev .
      [+] Building 1339.7s (7/11)                                                                                                               docker:desktop-linux
      => [internal] load build definition from pos_build.Dockerfile                                                                                            0.0s
      => => transferring dockerfile: 378B                                                                                                                      0.0s
      => [internal] load .dockerignore                                                                                                                         0.0s
      => => transferring context: 96B                                                                                                                          0.0s
      => [internal] load metadata for docker.io/library/ubuntu:22.04                                                                                          17.0s
      => [internal] load metadata for docker.io/paritytech/ci-linux:production                                                                                11.6s
      => [internal] load build context                                                                                                                         0.2s
      => => transferring context: 24.75MB                                                                                                                      0.1s
      => CACHED [builder 1/4] FROM docker.io/paritytech/ci-linux:production@sha256:dc9abf9e877c5bad94828245406dac8a186530e1ad6a1b5f2072e5e19e1f64b4            0.0s
      => [stage-1 1/3] FROM docker.io/library/ubuntu:22.04@sha256:6042500cf4b44023ea1894effe7890666b0c5c7871ed83a97c36c76ae560bb9b                          1322.6s
      => => resolve docker.io/library/ubuntu:22.04@sha256:6042500cf4b44023ea1894effe7890666b0c5c7871ed83a97c36c76ae560bb9b                                     0.0s
      [+] Building 1339.8s (7/11)                                                                                                               docker:desktop-linux
      => [stage-1 1/3] FROM docker.io/library/ubuntu:22.04@sha256:6042500cf4b44023ea1894effe7890666b0c5c7871ed83a97c36c76ae560bb9b                          1322.7s
      => => resolve docker.io/library/ubuntu:22.04@sha256:6042500cf4b44023ea1894effe7890666b0c5c7871ed83a97c36c76ae560bb9b                                     0.0s
      => => sha256:6042500cf4b44023ea1894effe7890666b0c5c7871ed83a97c36c76ae560bb9b 1.13kB / 1.13kB                                                            0.0s
      => => sha256:ba545858745d6307f0d1064d0d25365466f78d02f866cf4efb9e1326a4c196ca 424B / 424B                                                                0.0s
      => => sha256:da935f0649133cbea2f5ad83db14bf782aa5ee9ad17cd609253e3750201a9298 2.32kB / 2.32kB                                                            0.0s
      => => sha256:005e2837585d0b391170fd9faf2e0c279d64ba0eb011cda8dedf28cb5839861e 12.58MB / 27.36MB                                                       1322.7s
      => [builder 2/4] COPY . .                                                                                                                                0.1s
      => [builder 3/4] RUN cargo build --locked --release                                                                                                   1322.5s
                                                                                                                                                                    
                                                                                                                                                                    
                                                                                                                                                                    
      [+] Building 1381.2s (9/11)                                                                                                               docker:desktop-linux 
      => [internal] load build definition from pos_build.Dockerfile                                                                                            0.0s 
      => => transferring dockerfile: 378B                                                                                                                      0.0s 
      => [internal] load .dockerignore                                                                                                                         0.0s 
      => => transferring context: 96B                                                                                                                          0.0s 
      => [internal] load metadata for docker.io/library/ubuntu:22.04                                                                                          17.0s 
      => [internal] load metadata for docker.io/paritytech/ci-linux:production                                                                                11.6s 
      => [internal] load build context                                                                                                                         0.2s 
      => => transferring context: 24.75MB                                                                                                                      0.1s 
      => CACHED [builder 1/4] FROM docker.io/paritytech/ci-linux:production@sha256:dc9abf9e877c5bad94828245406dac8a186530e1ad6a1b5f2072e5e19e1f64b4            0.0s
      => CANCELED [stage-1 1/3] FROM docker.io/library/ubuntu:22.04@sha256:6042500cf4b44023ea1894effe7890666b0c5c7871ed83a97c36c76ae560bb9b                 1364.1s
      => => resolve docker.io/library/ubuntu:22.04@sha256:6042500cf4b44023ea1894effe7890666b0c5c7871ed83a97c36c76ae560bb9b                                     0.0s
      => => sha256:6042500cf4b44023ea1894effe7890666b0c5c7871ed83a97c36c76ae560bb9b 1.13kB / 1.13kB                                                            0.0s
      => => sha256:ba545858745d6307f0d1064d0d25365466f78d02f866cf4efb9e1326a4c196ca 424B / 424B                                                                0.0s
      => => sha256:da935f0649133cbea2f5ad83db14bf782aa5ee9ad17cd609253e3750201a9298 2.32kB / 2.32kB                                                            0.0s
      => => sha256:005e2837585d0b391170fd9faf2e0c279d64ba0eb011cda8dedf28cb5839861e 12.58MB / 27.36MB                                                       1364.1s
      => [builder 2/4] COPY . .                                                                                                                                0.1s
      => ERROR [builder 3/4] RUN cargo build --locked --release                                                                                             1363.8s
      ------
      > [builder 3/4] RUN cargo build --locked --release:
      0.182 info: syncing channel updates for 'nightly-2023-08-22-x86_64-unknown-linux-gnu'
      25.19 info: latest update on 2023-08-22, rust version 1.74.0-nightly (ef85656a1 2023-08-21)
      25.20 info: downloading component 'cargo'
      1333.8 info: retrying download for 'https://static.rust-lang.org/dist/2023-08-22/cargo-nightly-x86_64-unknown-linux-gnu.tar.xz'
      1343.8 info: retrying download for 'https://static.rust-lang.org/dist/2023-08-22/cargo-nightly-x86_64-unknown-linux-gnu.tar.xz'
      1353.8 info: retrying download for 'https://static.rust-lang.org/dist/2023-08-22/cargo-nightly-x86_64-unknown-linux-gnu.tar.xz'
      1363.8 info: retrying download for 'https://static.rust-lang.org/dist/2023-08-22/cargo-nightly-x86_64-unknown-linux-gnu.tar.xz'
      1363.8 error: component download failed for cargo-x86_64-unknown-linux-gnu
      1363.8 
      1363.8 Caused by:
      1363.8     could not download file from 'https://static.rust-lang.org/dist/2023-08-22/cargo-nightly-x86_64-unknown-linux-gnu.tar.xz' to '/usr/local/rustup/downloads/49f5c4d796fe15d1578d71d39e1b12b2db5b258a94ddae29a44a226942f44919.partial'
      ------
      pos_build.Dockerfile:4
      --------------------
        2 |     WORKDIR /
        3 |     COPY . .
        4 | >>> RUN cargo build --locked --release
        5 |     
        6 |     
      --------------------
      ERROR: failed to solve: process "/bin/sh -c cargo build --locked --release" did not complete successfully: exit code: 1
      ```
  </details>

- [] Run node using docker (TODO)

### Testing Feedback

All automated tests pass:

- [x] Test all pallets
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo test -- --nocapture
        Finished test [unoptimized + debuginfo] target(s) in 1.17s
        Running unittests src/lib.rs (target/debug/deps/wetee_app-a01ebd5a15b72652)

    running 12 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::create ... ok
    test tests::set_settings_should_fail ... ok
    test tests::get_fee ... ok
    test tests::get_fee_should_fail ... ok
    test tests::set_settings ... ok
    test tests::charge2 ... ok
    test tests::recharge ... ok
    test tests::stop ... ok
    test tests::stop_should_fail ... ok
    test tests::update ... ok
    test tests::update_should_fail ... ok

    test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_assets-7c9f31cb84b7d5be)

    running 4 tests

    初始化 TOKEN 池 =>> Asset_id:5000 ||| Free_amount: 99

    初始化 TOKEN 池 =>> Asset_id:5000 ||| Free_amount: 99

    初始化 TOKEN 池 =>> Asset_id:5000 ||| Free_amount: 99

    Transfer =>> Asset_id:0 ||| Free_amount: 10000
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok

    Transfer =>> Asset_id:0 ||| Free_amount: 10000

    Transfer =>> Asset_id:0 ||| Free_amount: 10000
    alice_dao token 99 

    test tests::test_create_asset ... ok

    alice_dao token 98

    Transfer =>> Asset_id:5000 ||| Free_amount: 1
    test tests::test_asset_burn ... ok

    alice_dao token 98 ||| bob_dao token 1

    test tests::test_asset_trans ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_gov-29e16c6fcd4b70aa)

    running 6 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::proposal_should_work ... ok
    test tests::vote_should_work ... ok
    test tests::cancel_vote_should_work ... ok
    test tests::run_proposal_should_work ... ok
    test tests::unlock_should_work ... ok

    test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_guild-4120a0677acac11f)

    running 2 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_guild_join_request ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_node-27b27a12fb44bfbf)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/main.rs (target/debug/deps/wetee_node-77565bc4a3cf5261)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_org-e29d937fa3e78fd2)

    running 6 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::get_dao_account_id ... ok
    test tests::get_creator ... ok
    test tests::get_dao ... ok
    test tests::roadmap_task ... ok
    test tests::create_dao_should_work ... ok

    test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_primitives-8d1a59034b207de8)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_project-8e50831e71cd2b03)

    running 3 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    项目成员 => BoundedVec([AccountId([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), AccountId([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])], 1000000)
    项目成员 => BoundedVec([AccountId([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), AccountId([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])], 1000000)
    test tests::test_project_join_request ... ok
    dao_id => 5000 project_dao => 19 dao => 80
    alice_dao => 99 ||| bob_dao => 100 
    dao_id => 5000 project_dao => 9 dao => 80
    alice_dao => 109 ||| bob_dao => 100 
    test tests::test_task ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_rpc-9187d2d93edf1bc3)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_runtime-3a74eb1287d7ab6f)

    running 1 test
    test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_runtime_api-dbfd4a0aa793e43d)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_sudo-31fce7a3816dff6d)

    running 4 tests
    test tests::close_sudo_should_work ... ok
    test tests::sudo_should_work ... ok
    test tests::set_sudo ... ok
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_task-70d66afd371fbde7)

    running 12 tests
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::set_settings_should_fail ... ok
    test tests::set_settings ... ok
    test tests::update_should_fail ... ok
    test tests::get_fee_should_fail ... ok
    test tests::stop_should_fail ... ok
    test tests::stop ... ok
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    test tests::update ... ok
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    test tests::get_fee ... ok
    test tests::create ... ok
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    test tests::charge2 ... ok
    test tests::recharge ... ok

    test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_treasury-e8aea1ab5f78d5e4)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_worker-967c630a89b086f1)

    running 26 tests
    test tests::cluster_register_should_fail3 ... ok
    test tests::cluster_register_should_fail ... ok
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::cluster_proof_upload_should_fail2 ... ok
    test tests::cluster_mortgage_should_fail2 ... ok
    test tests::cluster_register_should_fail2 ... ok
    test tests::cluster_proof_upload_should_fail ... ok
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    test tests::cluster_mortgage ... ok
    test tests::cluster_mortgage_should_fail ... ok
    test tests::cluster_register ... ok
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    test tests::cluster_report ... ok
    test tests::cluster_proof_upload ... ok
    test tests::cluster_stop_should_fail ... ok
    test tests::cluster_stop_should_fail2 ... ok
    test tests::cluster_stop ... ok
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    test tests::cluster_unmortgage_should_fail2 ... ok
    test tests::cluster_report_close_should_fail ... ok
    test tests::cluster_report_close ... ok
    test tests::cluster_report_should_fail ... ok
    test tests::cluster_unmortgage ... ok
    test tests::cluster_unmortgage_should_fail ... ok
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    test tests::work_proof_upload_should_fail ... ok
    test tests::cluster_unmortgage_should_fail3 ... ok
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    test tests::cluster_withdrawal ... ok
    test tests::work_proof_upload_should_fail2 ... ok
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    test tests::work_proof_upload ... ok

    test result: ok. 26 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

      Doc-tests wetee-app

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-assets

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-gov

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-guild

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-node

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-org

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-primitives

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-project

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-rpc

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-runtime

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-runtime-api

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-sudo

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-task

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-treasury

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-worker

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```
  </details>

- [x] Test Worker pallet
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo test -p wetee-worker -- --nocapture

        Finished test [unoptimized + debuginfo] target(s) in 1.11s
        Running unittests src/lib.rs (target/debug/deps/wetee_worker-cf42e245b64419bc)

    running 26 tests
    test tests::cluster_register_should_fail3 ... ok
    test tests::cluster_register_should_fail2 ... ok
    test tests::cluster_register_should_fail ... ok
    test tests::cluster_proof_upload_should_fail2 ... ok
    test tests::cluster_proof_upload_should_fail ... ok
    test tests::cluster_mortgage_should_fail ... ok
    test tests::cluster_register ... ok
    test tests::cluster_mortgage_should_fail2 ... ok
    test tests::cluster_proof_upload ... ok
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    test tests::cluster_mortgage ... ok
    test tests::cluster_stop ... ok
    test tests::cluster_stop_should_fail ... ok
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    test tests::cluster_unmortgage_should_fail ... ok
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    test tests::cluster_stop_should_fail2 ... ok
    test tests::cluster_unmortgage_should_fail3 ... ok
    test tests::cluster_unmortgage_should_fail2 ... ok
    test tests::cluster_report ... ok
    test tests::cluster_unmortgage ... ok
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    test tests::cluster_report_close_should_fail ... ok
    test tests::cluster_report_should_fail ... ok
    test tests::work_proof_upload_should_fail ... ok
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    test tests::cluster_report_close ... ok
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    test tests::cluster_withdrawal ... ok
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    test tests::work_proof_upload ... ok
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    test tests::work_proof_upload_should_fail2 ... ok

    test result: ok. 26 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

      Doc-tests wetee-worker

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```
  </details>

- [x] Test Tee App pallet
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo test -p wetee-app -- --nocapture
      Compiling wetee-app v1.0.0 (/Users/xxx/repos/chain/packages/pallets/wetee-app)
        Finished test [unoptimized + debuginfo] target(s) in 5.89s
        Running unittests src/lib.rs (target/debug/deps/wetee_app-b102c0f9909f73ca)

    running 12 tests
    test tests::get_fee_should_fail ... ok
    test tests::stop_should_fail ... ok
    test tests::set_settings ... ok
    test tests::update_should_fail ... ok
    test tests::update ... ok
    test tests::recharge ... ok
    test tests::charge2 ... ok
    test tests::create ... ok
    test tests::get_fee ... ok
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::set_settings_should_fail ... ok
    test tests::stop ... ok

    test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

      Doc-tests wetee-app

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```
  </details>

- [x] Test Tee Task pallet
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo test -p wetee-task -- --nocapture
      Compiling wetee-task v1.0.0 (/Users/xxx/repos/chain/packages/pallets/wetee-task)
        Finished test [unoptimized + debuginfo] target(s) in 3.13s
        Running unittests src/lib.rs (target/debug/deps/wetee_task-91635d8c308a4b3d)

    running 12 tests
    test tests::stop_should_fail ... ok
    test tests::get_fee_should_fail ... ok
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    test tests::create ... ok
    test tests::get_fee ... ok
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    test tests::update_should_fail ... ok
    test tests::charge2 ... ok
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::stop ... ok
    test tests::set_settings ... ok
    test tests::update ... ok
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    test tests::set_settings_should_fail ... ok
    test tests::recharge ... ok

    test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

      Doc-tests wetee-task

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    
    ```
  </details>

