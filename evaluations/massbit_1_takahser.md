# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/massbit_route.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0.a    | License                                      | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/massbitprotocol/massbitchain/blob/5ef9f9a696ee281ec40b083a194a88dd6d2abc53/LICENSE) | Apache 2.0 |
| 0.b    | Documentation                                | <ul><li>[x] </li></ul> | [Components](https://docs.massbit.io/massbit-route-mbr/components), [Architecture](https://docs.massbit.io/massbit-route-mbr/architecture) | - |                                                                                |
| 0.c    | Testing Guide                                | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/massbitprotocol/w3f-testing-guide/blob/244d0285032dfe914921b9913ea7a18d8b3ce3c9/README.md), [Testnet Guide](https://docs.massbit.io/massbit-route-mbr/use-massbit-route) | See [Testing Guide Feedback](#testing-guide-feedback) |
| 0.d    | Docker release                               | <ul><li>[x] </li></ul> | [main `docker-compose.yaml`](https://github.com/massbitprotocol/w3f-testing-guide/blob/4a16578a00436bdd6027abefc06e1f4bc118b49f/docker-compose.yaml), [gateway](https://github.com/massbitprotocol/w3f-testing-guide/blob/feature/grant-delivery-163/163/gateway-docker-compose.yaml), [node](https://github.com/massbitprotocol/w3f-testing-guide/blob/feature/grant-delivery-163/163/node-docker-compose.yaml) | See [Docker Feedback](#docker-feedback) |
| 0.e    | Article                                      | <ul><li>[x] </li></ul> | [Article](https://blog.massbit.io/launching-mbr-testnet-phase-ii-staking-with-rewards-2/) | - |
| 1.     | Massbit Core Implementation (Lua)            | <ul><li>[x] </li></ul> | [Massbit Core Repo](https://github.com/massbitprotocol/massbitroute/tree/cca002fb66895373017c13f69cd51e804084f105) | - |
| 2.     | Gateway Manager Implementation (C)           | <ul><li>[x] </li></ul> | [Gateway Manager Repo](https://github.com/massbitprotocol/massbitroute_gwman/tree/0eb414190204e4bded525a2bf29851818a01954c) | - |
| 3.     | Fisherman - Node Verification Service (Rust) | <ul><li>[x] </li></ul> | [Fisherman Repo](https://github.com/massbitprotocol/massbitroute_fisherman/tree/89579fb5be9fc96160886f006d6db960252b8be6) | Once a node goes offline, fishermen services will detect it and reflect it in the UI (tested). |
| 4.     | Massbit Nodes and Gateway  (Lua)             | <ul><li>[x] </li></ul> | [Node Repo](https://github.com/massbitprotocol/massbitroute_node/tree/0065bc1c027e2a05ac3c6dab6aa4128348b36815), [Gateway Repo](https://github.com/massbitprotocol/massbitroute_gateway/tree/4f6330ff6c62e525354a8f17c223584fa7168e1b) | There are 2 separate docker-compose files for the node and gateway (see 0.d Docker release) |
| 5.     | Web Portal implementation  (Vue.js)          | <ul><li>[x] </li></ul> | [dApp](https://github.com/massbitprotocol/mbr-app/tree/42aaf8ab94d8e4c2ba7a0e8ed9854c7beef15b5b) | The UI looks very mature already - it's performant and easy to understand. Features work smoothly, no bugs were identified. |
| 6.     | Pallet Implementation for Consumer dAPI fee and reward distribution for providers | <ul><li>[x] </li></ul> | [Staking and Reward Pallet](https://github.com/massbitprotocol/massbitchain/blob/94f6ee1a5a602ee4418bbfb4bc6cc3d141345f12/pallets/dapi-staking/src/lib.rs) | More inline comments would be useful for other people who might want to reuse your code. |
| 7.     | Pallet Implementation for Node Provider/Delegator staking and reward distribution | <ul><li>[x] </li></ul> | [Provider Staking Pallet](https://github.com/massbitprotocol/massbitchain/blob/4b0efe054c3c71d32d3f6a46491669b3e9d26bab/pallets/dapi/src/lib.rs) | More inline comments would be useful for other people who might want to reuse your code. |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

### Testing Guide Feedback

- docker-compose infrastructure starts successfully:

    ```bash
    $ # 1) create network
    $ docker network create -d bridge --gateway 172.24.24.1 --subnet 172.24.24.0/24   mbr_test_network

    $ # 2) start containers
    $ docker-compose up -d 
    Creating mbr_chain   ... done
    Creating mbr_git     ... done
    Creating mbr_redis   ... done
    Creating mbr_db      ... done
    Creating mbr_api     ... done
    Creating mbr_gwman         ... done
    Creating mbr_stat    ... done
    Creating mbr_monitor ... done
    Creating mbr_portal_worker ... done
    Creating mbr_portal_api    ... done
    Creating mbr_portal_admin  ... done
    Creating mbr_web                 ... done
    Creating mbr_fisherman_scheduler ... done

    # 3) check container status
    $ docker ps
    CONTAINER ID   IMAGE                                              COMMAND                  CREATED       STATUS       PORTS                                           NAMES
    07d37e4a4943   massbit/massbitroute_web:v0.1                      "docker-entrypoint.s…"   2 hours ago   Up 2 hours   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp       mbr_web
    e8133dcca47c   massbit/massbitroute_fisherman:v0.1                "supervisord -n"         2 hours ago   Up 2 hours   0.0.0.0:80->80/tcp, :::80->80/tcp               mbr_fisherman_scheduler
    9bba549dbdb1   massbit/massbitroute_portal:v0.1                   "docker-entrypoint.s…"   2 hours ago   Up 2 hours   0.0.0.0:3006->3006/tcp, :::3006->3006/tcp       mbr_portal_admin
    db01c11f84b0   massbit/massbitroute_portal:v0.1                   "docker-entrypoint.s…"   2 hours ago   Up 2 hours   0.0.0.0:3001->3001/tcp, :::3001->3001/tcp       mbr_portal_api
    4649ae750936   massbit/massbitroute_portal:v0.1                   "docker-entrypoint.s…"   2 hours ago   Up 2 hours   0.0.0.0:30001->30001/tcp, :::30001->30001/tcp   mbr_portal_worker
    cbac25f5df77   massbit/massbitroute_gwman_dev:0.0.1-shamu-dev     "/usr/bin/supervisor…"   2 hours ago   Up 2 hours                                                   mbr_gwman
    5ab3bf62a1e6   postgres:14.4-alpine                               "docker-entrypoint.s…"   2 hours ago   Up 2 hours   0.0.0.0:5432->5432/tcp, :::5432->5432/tcp       mbr_db
    d351d987e5b9   massbit/massbitroute_monitor_dev:0.0.1-shamu-dev   "/usr/bin/supervisor…"   2 hours ago   Up 2 hours                                                   mbr_monitor
    330b9a622014   massbit/massbitroute_stat_dev:0.0.1-shamu-dev      "/usr/bin/supervisor…"   2 hours ago   Up 2 hours                                                   mbr_stat
    efc92565ff50   redis:7.0.2-alpine                                 "docker-entrypoint.s…"   2 hours ago   Up 2 hours   0.0.0.0:6379->6379/tcp, :::6379->6379/tcp       mbr_redis
    7b573874dbab   massbit/massbitroute_api_dev:0.0.1-shamu-dev       "/usr/bin/supervisor…"   2 hours ago   Up 2 hours                                                   mbr_api
    fb96e1f08215   massbit/massbitroute_git_dev:0.0.1-shamu-dev       "/usr/bin/supervisor…"   2 hours ago   Up 2 hours                                                   mbr_git
    faae8c1fd94d   massbit/massbitroute_chain:v0.1                    "bash entrypoint.sh"     2 hours ago   Up 2 hours   0.0.0.0:9944->9944/tcp, :::9944->9944/tcp       mbr_chain
    ```

- `mbr_api` services are running:

    ```bash
    $ docker exec -it mbr_api bash
    root@7b573874dbab:/# cd /massbit/massbitroute/app/src/sites/services/api/
    root@7b573874dbab:/massbit/massbitroute/app/src/sites/services/api# ./cmd_server status
    path:/massbit/massbitroute/app/src/sites/services/api/apps/api
    beanstalkd                       RUNNING   pid 223, uptime 1:45:43
    monitor_client                   RUNNING   pid 205, uptime 1:45:43
    nginx                            RUNNING   pid 707, uptime 1:45:39
    redis                            RUNNING   pid 221, uptime 1:45:43
    worker-portal-api:00             RUNNING   pid 2988, uptime 1:45:09
    worker-portal-api:01             RUNNING   pid 3008, uptime 1:45:09
    worker-portal-api:02             RUNNING   pid 2991, uptime 1:45:09
    worker-portal-api:03             RUNNING   pid 2990, uptime 1:45:09
    worker-portal-api:04             RUNNING   pid 2989, uptime 1:45:09
    worker-portal-api:05             RUNNING   pid 3003, uptime 1:45:09
    worker-portal-api:06             RUNNING   pid 3010, uptime 1:45:09
    worker-portal-api:07             RUNNING   pid 2993, uptime 1:45:09
    worker-portal-api:08             RUNNING   pid 2992, uptime 1:45:09
    worker-portal-api:09             RUNNING   pid 3000, uptime 1:45:09
    ```

- db schema migration succeeds:

    ```bash
    $ docker exec -it mbr_portal_api bash
    root@db01c11f84b0:/app# npm run dbm:init

    > massbit-user-management@1.0.0 dbm:init
    > ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js schema:sync

    (...)
    
    Schema synchronization finished successfully.
    ```

- Fisherman service is running:

    ```bash
    $ docker exec -it mbr_fisherman_scheduler bash
    root@e8133dcca47c:/usr/local/bin# supervisorctl status
    fisherman                        RUNNING   pid 7, uptime 1:46:46
    scheduler                        RUNNING   pid 8, uptime 1:46:46
    ```

- Core API Tests are passing. Note: this has to be run inside the mbr_api container.

    ```bash
    $ docker exec -it mbr_api_163 bash

    root@9e764933a07a:/# cd /massbit/massbitroute/app/src/sites/services/api/
    root@9e764933a07a:/massbit/massbitroute/app/src/sites/services/api# 
    root@9e764933a07a:/massbit/massbitroute/app/src/sites/services/api# git fetch --all --tags;git checkout tags/v0.1.11
    HEAD is now at f48cef9 test: test api miss provider property
    root@9e764933a07a:/massbit/massbitroute/app/src/sites/services/api# supervisorctl stop mbr_api_monitor
    root@9e764933a07a:/massbit/massbitroute/app/src/sites/services/api# rm  src/env.lua
    root@9e764933a07a:/massbit/massbitroute/app/src/sites/services/api# rm  env/env.lua
    root@9e764933a07a:/massbit/massbitroute/app/src/sites/services/api# ./scripts/run _install_test
    root@9e764933a07a:/massbit/massbitroute/app/src/sites/services/api# ./scripts/run _run_test
    path:/massbit/massbitroute/app/src/sites/services/api/apps/api
    path:/massbit/massbitroute/app/src/sites/services/api/apps/api
    t/api/api/000-create.t .................. ok   
    t/api/api/001-update-entrypoints.t ...... ok    
    t/api/api/002-update-disabled.t ......... ok   
    t/api/api/003-delete.t .................. ok   
    t/api/gateway/000-create.t .............. ok   
    t/api/gateway/001-update-enabled.t ...... ok   
    t/api/gateway/002-update-approved.t ..... ok    
    t/api/gateway/003-update-disapproved.t .. ok   
    t/api/node/000-create.t ................. ok   
    t/api/node/001-register.t ............... ok   
    t/api/node/010-update-enabled.t ......... ok   
    t/api/node/011-update-approved.t ........ ok   
    t/api/node/012-update-disapproved.t ..... ok   
    All tests successful.
    Files=13, Tests=86, 42 wallclock secs ( 0.05 usr  0.00 sys +  1.48 cusr  0.83 csys =  2.36 CPU)
    Result: PASS
    ```

- Chain Tests are passing, with 2 minor warnings, but they'll be fixed shortly by the grantee

    ```bash
    $ cargo test
    
    (...)

    warning: struct is never constructed: `ExternalityBuilder`
    --> pallets/dapi/src/mock.rs:153:12
        |
    153 | pub struct ExternalityBuilder;
        |            ^^^^^^^^^^^^^^^^^^
        |
        = note: `#[warn(dead_code)]` on by default

    warning: associated function is never used: `build`
    --> pallets/dapi/src/mock.rs:156:9
        |
    156 |     pub fn build() -> TestExternalities {
        |            ^^^^^


        test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/keiko_runtime-d75f5835594723ac)

    (...)

    running 1 test
    test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/local_runtime-7cd16be709df6c2a)

    running 1 test
    test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/massbit_node-2caf6d78f4583304)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests bin/main.rs (target/debug/deps/massbit_node-4b21e53b94379c27)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/pallet_block_reward-8662ed1a29a7bc10)

    running 8 tests
    test tests::distribution_config_is_invalid ... ok
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::default_distribution_config_is_valid ... ok
    test tests::distribution_config_is_valid ... ok
    test tests::set_configuration_success ... ok
    test tests::set_configuration_fail ... ok
    test tests::inflation_and_total_issuance_as_expected ... ok
    test tests::reward_distribution_as_expected ... ok

    test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s

        Running unittests src/lib.rs (target/debug/deps/pallet_dapi-86ee53651f07dd6a)

    running 1 test
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/pallet_dapi_staking-a30585c0b337167d)

    running 7 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::reward_is_ok ... ok
    test tests::unregister_stake_and_unstake_is_not_ok ... ok
    test tests::register_is_ok ... ok
    test tests::unregister_after_register_is_ok ... ok
    test tests::register_same_provider_twice_fails ... ok
    test tests::on_initialize_is_ok ... ok

    test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running unittests src/lib.rs (target/debug/deps/pallet_validator_set-001bf3c1140bf27a)

    running 16 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::cannot_set_genesis_value_twice - should panic ... ok
    test tests::set_invulnerables ... ok
    test tests::basic_setup_works ... ok
    test tests::register_as_candidate_successfully ... ok
    test tests::cannot_register_as_candidate_if_insufficient_fund ... ok
    test tests::set_desired_candidates ... ok
    test tests::cannot_register_as_candidate_if_already_invulnerable ... ok
    test tests::cannot_register_candidate_if_too_many ... ok
    test tests::set_candidacy_bond ... ok
    test tests::cannot_register_duplicate_candidate ... ok
    test tests::authorship_event_handler ... ok
    test tests::cannot_unregister_candidate_if_too_few ... ok
    test tests::leave_intent ... ok
    test tests::session_management_works ... ok
    test tests::kick_and_slash_mechanism ... ok

    test result: ok. 16 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s
    ```

- Fisherman Tests are passing, coverage sits at 57%:

    ```bash
    $ cargo tarpaulin -v
   
    (...)
   
    Aug 22 15:00:48.587  INFO cargo_tarpaulin::report: Coverage Results:
    || Uncovered Lines:
    || common/src/component.rs: 31-32, 35-36, 38, 41, 46-47, 75, 77-79, 113-119, 154-157, 159-161
    || common/src/job_action.rs: 33-34
    || common/src/job_manage.rs: 94-95, 124-125, 127-128, 151, 174-179, 181-183, 248-252
    || common/src/jobs.rs: 52-53, 148-149, 157, 196
    || common/src/models/plan_entity.rs: 53, 55-56, 64, 66-70
    || common/src/models/response_values.rs: 21, 29, 38-39
    || common/src/task_spawn.rs: 11-12, 24
    || common/src/tasks/command/mod.rs: 20
    || common/src/tasks/eth/benchmark/executor.rs: 36, 41, 43, 49, 52, 55-58, 60-72, 74, 76-78, 81, 84, 87-89, 92-95, 99-100, 104, 108-111, 119, 122, 124-128, 136-137, 145-147, 153-155, 157, 159-161, 163, 167, 171, 173-174, 177, 179, 181, 183, 186-190, 193, 198, 201-203, 205-207, 209-211, 214-215, 223-229, 231-232, 235-236, 240-245, 248-249, 251, 254-255
    || common/src/tasks/eth/benchmark/mod.rs: 15-17, 22-26
    || common/src/tasks/http_request/models.rs: 76, 80, 83, 110-112, 117-121, 213-214, 227-228, 237, 239-240, 242, 253-254, 262, 266, 269, 272, 275, 326-327, 331, 380
    || common/src/tasks/mod.rs: 31, 36, 38-40, 42, 50-51, 53, 55, 68, 71, 80, 82-86, 88-90, 94-95, 97, 111-112, 115, 136, 152, 175-176, 190-191, 195, 199, 242
    || common/src/tasks/ping/executor.rs: 20, 23, 29, 31-32, 34-35, 38-40, 43, 45, 48, 52, 54, 60-65, 67, 69-70, 73-75, 77, 79-82
    || common/src/tasks/ping/mod.rs: 19-21, 26-30, 53-54, 59, 62, 65
    || common/src/tasks/rpc_request/executor.rs: 18, 20, 26, 28-29, 31-32, 35-37, 40, 42, 45, 49, 51, 57-62, 64, 66, 70-73, 76
    || common/src/tasks/rpc_request/mod.rs: 11-12, 25, 28, 31, 42, 58-60, 65-69, 75-76
    || common/src/tasks/websocket_request/models.rs: 41-42, 47, 51, 53, 70-72, 77-81, 123-124, 162-163, 177-178, 187, 189-190, 192, 201, 203-204, 206, 212, 216, 219, 222, 225, 244-245, 249, 298
    || common/src/util.rs: 23-25, 32
    || common/src/workers.rs: 36, 51, 63, 84-85, 90-91, 97-98, 100, 124-129, 131-134, 136-137, 139-144, 146-148, 167-168, 170-174, 176, 182
    || entity/src/converter/mod.rs: 81-83, 85, 91, 93-98, 100-108, 114-115, 118-122, 125, 133-137, 140, 148, 150-156, 272, 274-282, 289, 291-293, 298-300, 305, 307-316, 322-325, 328-330, 332
    || entity/src/seaorm/job_assignments.rs: 23-24
    || entity/src/seaorm/job_result_benchmarks.rs: 32-33
    || entity/src/seaorm/job_result_http_requests.rs: 29-30
    || entity/src/seaorm/job_result_latest_blocks.rs: 30-31
    || entity/src/seaorm/job_result_pings.rs: 25-26
    || entity/src/seaorm/jobs.rs: 31-32
    || entity/src/seaorm/plans.rs: 25-26
    || entity/src/seaorm/provider_latest_blocks.rs: 25-26
    || entity/src/seaorm/providers.rs: 21-22
    || entity/src/seaorm/seaql_migrations.rs: 17-18
    || entity/src/seaorm/worker_provider_maps.rs: 25-26
    || entity/src/seaorm/workers.rs: 24-25
    || fisherman/src/lib.rs: 25, 31, 34, 36, 38-40, 42, 44
    || fisherman/src/main.rs: 26, 28, 30, 33-35, 38, 40, 42-44, 46-48, 50-60, 86, 93-96, 101-104, 108
    || fisherman/src/models/job.rs: 52-54, 56, 59, 61-64, 66, 70-77, 80, 82, 86
    || fisherman/src/server_builder.rs: 45-46, 110-111, 128-131, 144-147, 160, 190-195, 198, 201, 204, 208, 244, 254
    || fisherman/src/services/execution.rs: 32-33, 35-36, 46, 49, 51-54, 56-58, 61-69, 71, 76-77, 79-81, 84-89, 95-96
    || fisherman/src/services/reporter.rs: 15, 21-26, 28-32, 34, 38-39, 43-52, 54, 57-60
    || fisherman/src/services/webservice.rs: 15, 44, 49-50, 52, 56-57
    || fisherman/src/tasks/http_request/executor.rs: 42, 47, 61, 82-85, 87-88, 90, 95, 110, 115, 128, 138-139, 152-157, 159-161, 166, 168, 172, 174-176, 178-180, 183, 372, 383, 401, 435
    || fisherman/src/tasks/mod.rs: 12-17, 20
    || fisherman/src/tasks/websocket_request/executor.rs: 45, 55, 64-65, 67, 71, 82-83, 89, 94, 99, 101, 106, 114-119, 121, 126, 144-145, 151, 153, 161-167, 169, 172, 174-175, 177, 181-183, 188-189, 191-193, 195-196, 199, 201, 204-208, 210-211, 213, 306-308, 380-382
    || fisherman/src/tasks/websocket_request/mod.rs: 8, 12
    || fisherman/src/tasks/websocket_request/wsclient_builder.rs: 50, 54-56, 59, 76-78, 80, 85, 137-141, 168, 172, 175, 179-180, 182, 193-194, 196, 206-207, 209
    || logger/src/core_logger.rs: 19-20, 29
    || logger/src/helper.rs: 12-14, 19-22, 24-25, 27-29, 32, 35-36, 38-40, 43
    || migration/src/lib.rs: 9-11
    || migration/src/m20220101_000001_create_table.rs: 7, 14, 365, 546-550, 552, 555
    || migration/src/m20220707_add_table_provider_latest_block.rs: 7, 30-34, 385, 388
    || migration/src/main.rs: 3, 5
    || scheduler/src/lib.rs: 23, 25, 30, 32, 34, 36, 38, 54-57, 60, 63, 66, 68, 70, 72, 74
    || scheduler/src/main.rs: 32, 34, 36, 50-51, 53, 58, 60-61, 63-66, 68, 70-73, 75-82, 84, 88-92, 95-101, 104-108, 110, 113, 116-119, 122-126, 128-129, 131-135, 139-143, 147
    || scheduler/src/models/component.rs: 14-16, 18, 21, 24-25, 49-51
    || scheduler/src/models/job_result_cache.rs: 32, 50, 54-62, 64, 66-67, 69-72, 78, 88-90, 95, 100-104, 106-108, 110, 114, 133-135, 137-139, 141, 161, 179, 185, 187, 189-193, 198-201, 204, 207-209, 222, 227, 233-235, 238, 240, 244-246, 248-249, 256-258, 263, 265
    || scheduler/src/models/jobs.rs: 32-39, 41-42, 44-45, 47, 49-50, 52, 70-72, 75, 99-104, 132, 148-150, 153-155, 162
    || scheduler/src/models/providers.rs: 57, 112, 116
    || scheduler/src/models/workers.rs: 40-42, 46-47, 69-70, 73-75, 80-82, 99, 105-107
    || scheduler/src/persistence/services/job_result_service.rs: 26, 31, 33, 36-37, 40-42, 44, 55-59, 61, 64-67, 69, 72, 76, 78, 80, 82, 84, 86-95, 97-98, 102-103, 106, 108-109, 112-113, 115-116, 120, 122-123, 125-127, 151-153, 158, 162-164, 166-168, 170, 229-231, 278
    || scheduler/src/persistence/services/job_service.rs: 32-34, 57-59, 67, 76, 96, 100-102, 104-106, 109, 111-113
    || scheduler/src/persistence/services/mod.rs: 15-17, 19-22, 24
    || scheduler/src/persistence/services/plan_service.rs: 26, 62, 67-69, 71-77, 79, 82-87, 90-92, 94, 96, 99, 137, 164, 188, 207-212, 216, 260
    || scheduler/src/persistence/services/provider_service.rs: 36, 40-47, 49-50, 54-63, 65-66, 68, 71, 74-75, 78-81, 85-87, 89-91
    || scheduler/src/persistence/services/worker_service.rs: 26-27, 38-40, 42, 51
    || scheduler/src/provider/scanner.rs: 78-80, 90-92, 118, 120, 137, 142, 153-154, 240
    || scheduler/src/report_processors/adapters/csv_appender.rs: 10, 16-17, 19-20, 22, 26-27, 36, 40-41
    || scheduler/src/report_processors/adapters/helper/latest_block.rs: 34, 50-53, 57-58, 60-62, 64-66, 68-69, 87, 89, 93, 95-103, 107, 109-111, 114, 117-120, 122, 124-126, 132, 138-140, 143-145, 147-148, 151-153, 155, 157, 159, 161-167, 170-175, 179-180, 184, 186
    || scheduler/src/report_processors/adapters/mod.rs: 21, 26, 28-29, 32, 36, 44, 48, 50, 54, 59-63
    || scheduler/src/report_processors/adapters/postgres_appender.rs: 40-41, 45, 52-53, 55-57, 59-64, 69-70, 72-73, 75, 80-81, 83, 92-93, 95, 98-99, 101, 131, 135, 137-142, 144-145, 149-151, 153, 155, 157, 159-180, 182-183, 185, 188, 191-192, 195-198, 202-204, 206-208, 212-213
    || scheduler/src/report_processors/adapters/providers_map_appender.rs: 20-21, 28-29, 31-34, 36-38, 40-45, 47-50, 52, 55, 58, 60-61, 64-68, 72-73, 75, 77, 79, 81-84, 86, 88-96, 99, 101, 103-104
    || scheduler/src/report_processors/adapters/result_cache_appender.rs: 15, 22, 24-25, 27-30, 33-34, 38-43, 45, 47, 49-50
    || scheduler/src/report_processors/channel.rs: 6
    || scheduler/src/report_processors/regular_processor.rs: 20, 26-27, 32, 36, 44, 49, 51, 53-54, 56-57, 59-60, 63, 65-68, 70-71, 73-77, 82
    || scheduler/src/report_processors/verification_processor.rs: 34, 49, 52-53, 58, 62, 69, 75-76, 78-79, 81-84, 86-87, 89, 91-92, 96-97, 99, 101, 103, 105, 107-113, 118, 121-122, 124, 126, 128, 131-132, 135, 138-140, 143, 145-146, 148-149, 151-152, 157-161, 163, 168, 173, 179, 183-184, 186-187, 189, 194, 208, 215-216, 218, 221, 223, 227, 229, 231-234, 242-243, 247-251, 255, 259, 263-264, 267-268, 270, 272, 276-278, 281, 284, 291, 294, 296-297, 299-300, 302, 304, 308-310, 315, 321-322, 325
    || scheduler/src/server_builder.rs: 56, 58-63, 170-173, 186-189, 218-221, 234, 236, 238-245, 250-251, 255, 258, 261, 290, 292, 294-296, 302-304, 318-323, 326, 329, 332, 336
    || scheduler/src/service/check_worker_health.rs: 23, 25, 27, 46, 50, 53-58, 60-61, 63-65, 69, 71-73, 79, 81, 83-87, 89-90, 98-101, 103-107, 111-112, 115-116, 121-123, 125, 127-132, 134
    || scheduler/src/service/comparator/default_comparator.rs: 9-10, 12-14, 16, 21-22, 24, 29-31, 33, 35
    || scheduler/src/service/comparator/dot_comparator.rs: 16, 21-22, 35
    || scheduler/src/service/comparator/eth_comparator.rs: 34
    || scheduler/src/service/comparator/mod.rs: 25
    || scheduler/src/service/delivery.rs: 22, 29, 32-43, 45, 47, 49-52, 54, 56, 59-60, 62
    || scheduler/src/service/generator/mod.rs: 70, 145, 243, 343, 437
    || scheduler/src/service/generator/regular.rs: 55-57, 113-114, 116, 118-119, 123-124, 127, 151
    || scheduler/src/service/generator/verification.rs: 62-63, 81, 83, 85, 116, 119, 121, 135-137, 139, 143-148, 150, 152, 154, 157-159, 161-162, 165, 168-169, 204, 206-207, 225, 246, 328-330, 389-390, 392, 394-395, 399-400, 403
    || scheduler/src/service/judgment/benchmark_judg.rs: 77-78, 149, 151, 225, 228, 244, 249
    || scheduler/src/service/judgment/http_latestblock_judg.rs: 49, 120-121, 140-142, 158-159, 256, 273-275, 277
    || scheduler/src/service/judgment/http_ping_judg.rs: 189, 201, 215, 217, 224, 232-233, 235, 243, 246
    || scheduler/src/service/judgment/main_judg.rs: 173-174, 176, 180, 194, 196-197, 199-203, 205-207, 272, 275
    || scheduler/src/service/judgment/mod.rs: 37-38, 40-41, 43-46, 55, 61, 69
    || scheduler/src/service/judgment/websocket_judg.rs: 38-39, 45, 50-51, 54-55, 57-58, 60
    || scheduler/src/service/processor.rs: 24-25, 27, 32-34, 36-37, 40, 42, 54-56, 58-60, 62-64, 66-68
    || scheduler/src/service/report_portal.rs: 48, 54-56, 59-62, 69, 75-78, 84-85, 88-89, 91, 93, 98, 100, 107-109, 111, 113-114, 116-117, 119-123, 127-131, 133-134, 138, 142-144
    || scheduler/src/service/webservice.rs: 15-16, 26, 28-29, 31, 35, 40-41, 43, 48-49, 51, 59, 64-67, 69
    || scheduler/src/state/processor.rs: 27, 35-36, 38-43, 46-47, 50-51, 73-79, 82-83, 86-87, 89, 91, 95-99, 101, 105-106, 108, 110
    || scheduler/src/state/scheduler_state.rs: 58-61, 78-79, 81-82, 84, 87, 89-90, 92, 95
    || scheduler/src/tasks/benchmark/generator.rs: 82-83, 92, 94-95, 97, 108-109, 117, 121, 124, 127, 130, 214-215, 217, 220, 225-228, 230-231, 233-235, 241, 287
    || scheduler/src/tasks/generator.rs: 26-27, 29, 34, 45, 53-56, 58-59, 61, 64, 71-78, 81
    || scheduler/src/tasks/http_request/generator.rs: 54, 146, 183, 188, 217, 224-229, 232, 236
    || scheduler/src/tasks/websocket/generator.rs: 55, 146, 161, 169-171, 174, 176-180, 182-183, 186-188, 191-196, 198, 202, 205, 209-210, 212, 219-224, 227, 231
    || test_util/src/helper.rs: 58, 62-63, 82, 90-91
    || test_util/src/main.rs: 5-6, 9-10, 12-13, 16-17, 20
    || test_util/src/tests/basic.rs: 3-4, 8-9
    || wrap_wrk/src/lib.rs: 45, 402-404, 406
    || Tested/Total Lines:
    || common/src/component.rs: 17/43
    || common/src/job_action.rs: 0/2
    || common/src/job_manage.rs: 13/34
    || common/src/jobs.rs: 34/40
    || common/src/lib.rs: 2/2
    || common/src/models/plan_entity.rs: 8/17
    || common/src/models/response_values.rs: 15/19
    || common/src/task_spawn.rs: 4/7
    || common/src/tasks/command/mod.rs: 0/1
    || common/src/tasks/eth/benchmark/executor.rs: 0/110
    || common/src/tasks/eth/benchmark/mod.rs: 0/8
    || common/src/tasks/http_request/models.rs: 66/96
    || common/src/tasks/mod.rs: 78/114
    || common/src/tasks/ping/executor.rs: 0/32
    || common/src/tasks/ping/mod.rs: 0/13
    || common/src/tasks/rpc_request/executor.rs: 0/28
    || common/src/tasks/rpc_request/mod.rs: 0/16
    || common/src/tasks/websocket_request/models.rs: 56/92
    || common/src/util.rs: 26/30
    || common/src/workers.rs: 21/61
    || entity/src/converter/mod.rs: 66/144
    || entity/src/seaorm/job_assignments.rs: 0/2
    || entity/src/seaorm/job_result_benchmarks.rs: 0/2
    || entity/src/seaorm/job_result_http_requests.rs: 0/2
    || entity/src/seaorm/job_result_latest_blocks.rs: 0/2
    || entity/src/seaorm/job_result_pings.rs: 0/2
    || entity/src/seaorm/jobs.rs: 0/2
    || entity/src/seaorm/plans.rs: 0/2
    || entity/src/seaorm/provider_latest_blocks.rs: 0/2
    || entity/src/seaorm/providers.rs: 0/2
    || entity/src/seaorm/seaql_migrations.rs: 0/2
    || entity/src/seaorm/worker_provider_maps.rs: 0/2
    || entity/src/seaorm/workers.rs: 0/2
    || fisherman/src/lib.rs: 5/14
    || fisherman/src/main.rs: 44/79
    || fisherman/src/models/job.rs: 89/110
    || fisherman/src/server_builder.rs: 105/130
    || fisherman/src/server_config.rs: 7/7
    || fisherman/src/services/execution.rs: 0/36
    || fisherman/src/services/reporter.rs: 0/30
    || fisherman/src/services/webservice.rs: 14/21
    || fisherman/src/state.rs: 4/4
    || fisherman/src/tasks/http_request/executor.rs: 129/168
    || fisherman/src/tasks/mod.rs: 0/7
    || fisherman/src/tasks/websocket_request/executor.rs: 107/170
    || fisherman/src/tasks/websocket_request/mod.rs: 0/2
    || fisherman/src/tasks/websocket_request/wsclient_builder.rs: 70/97
    || logger/src/core_logger.rs: 7/10
    || logger/src/helper.rs: 11/30
    || migration/src/lib.rs: 0/3
    || migration/src/m20220101_000001_create_table.rs: 0/10
    || migration/src/m20220707_add_table_provider_latest_block.rs: 0/8
    || migration/src/main.rs: 0/2
    || scheduler/src/lib.rs: 13/31
    || scheduler/src/main.rs: 0/68
    || scheduler/src/models/component.rs: 1/11
    || scheduler/src/models/job_result.rs: 1/1
    || scheduler/src/models/job_result_cache.rs: 9/83
    || scheduler/src/models/jobs.rs: 63/97
    || scheduler/src/models/providers.rs: 35/38
    || scheduler/src/models/workers.rs: 36/53
    || scheduler/src/persistence/services/job_result_service.rs: 98/166
    || scheduler/src/persistence/services/job_service.rs: 24/43
    || scheduler/src/persistence/services/mod.rs: 0/8
    || scheduler/src/persistence/services/plan_service.rs: 13/49
    || scheduler/src/persistence/services/provider_service.rs: 5/42
    || scheduler/src/persistence/services/worker_service.rs: 16/23
    || scheduler/src/provider/scanner.rs: 91/104
    || scheduler/src/report_processors/adapters/csv_appender.rs: 0/11
    || scheduler/src/report_processors/adapters/helper/latest_block.rs: 0/72
    || scheduler/src/report_processors/adapters/mod.rs: 0/15
    || scheduler/src/report_processors/adapters/postgres_appender.rs: 0/84
    || scheduler/src/report_processors/adapters/providers_map_appender.rs: 0/54
    || scheduler/src/report_processors/adapters/result_cache_appender.rs: 0/20
    || scheduler/src/report_processors/channel.rs: 0/1
    || scheduler/src/report_processors/regular_processor.rs: 0/27
    || scheduler/src/report_processors/verification_processor.rs: 0/114
    || scheduler/src/server_builder.rs: 162/214
    || scheduler/src/server_config.rs: 11/11
    || scheduler/src/service/check_worker_health.rs: 0/53
    || scheduler/src/service/comparator/default_comparator.rs: 0/14
    || scheduler/src/service/comparator/dot_comparator.rs: 10/14
    || scheduler/src/service/comparator/eth_comparator.rs: 22/23
    || scheduler/src/service/comparator/mod.rs: 15/16
    || scheduler/src/service/delivery.rs: 0/25
    || scheduler/src/service/generator/mod.rs: 211/216
    || scheduler/src/service/generator/regular.rs: 74/86
    || scheduler/src/service/generator/verification.rs: 86/131
    || scheduler/src/service/judgment/benchmark_judg.rs: 100/108
    || scheduler/src/service/judgment/http_latestblock_judg.rs: 134/147
    || scheduler/src/service/judgment/http_ping_judg.rs: 76/86
    || scheduler/src/service/judgment/main_judg.rs: 168/185
    || scheduler/src/service/judgment/mod.rs: 9/20
    || scheduler/src/service/judgment/websocket_judg.rs: 5/15
    || scheduler/src/service/processor.rs: 4/26
    || scheduler/src/service/report_portal.rs: 0/45
    || scheduler/src/service/webservice.rs: 6/25
    || scheduler/src/state/processor.rs: 7/43
    || scheduler/src/state/scheduler_state.rs: 14/28
    || scheduler/src/tasks/benchmark/generator.rs: 94/122
    || scheduler/src/tasks/generator.rs: 8/30
    || scheduler/src/tasks/http_request/generator.rs: 91/104
    || scheduler/src/tasks/websocket/generator.rs: 65/102
    || test_util/src/helper.rs: 106/112
    || test_util/src/main.rs: 0/9
    || test_util/src/tests/basic.rs: 2/6
    || wrap_wrk/src/lib.rs: 33/38
    || wrap_wrk/src/main.rs: 30/30
    || 
    56.98% coverage, 2946/5170 lines covered
    ```

### Docker Feedback

- Docker infrastructure runs:

    ```bash
    $ docker ps
    CONTAINER ID   IMAGE                                     COMMAND                  CREATED       STATUS       PORTS             NAMES
    614b1e0ee76a   massbit/massbitroute_fisherman:v0.1.0     "supervisord -n"         5 hours ago   Up 5 hours   80/tcp            mbr_fisherman_worker_1_163
    6e8810d95a79   massbit/massbitroute_fisherman:v0.1.0     "supervisord -n"         5 hours ago   Up 5 hours   80/tcp            mbr_fisherman_worker_2_163
    218a2ed59ec0   massbit/massbitroute_web:v0.1             "docker-entrypoint.s…"   5 hours ago   Up 5 hours   3000/tcp          mbr_web_163
    caae0af8694f   massbit/massbitroute_fisherman:v0.1.0     "supervisord -n"         5 hours ago   Up 5 hours   80/tcp            mbr_fisherman_scheduler_163
    8867dabf13f9   massbit/massbitroute_portal:v0.1.0-dev    "docker-entrypoint.s…"   5 hours ago   Up 5 hours                     mbr_portal_admin_163
    4fd0cf157926   massbit/massbitroute_portal:v0.1.0-dev    "docker-entrypoint.s…"   5 hours ago   Up 5 hours                     mbr_portal_api_163
    50dc713a275d   massbit/massbitroute_portal:v0.1.0-dev    "docker-entrypoint.s…"   5 hours ago   Up 5 hours                     mbr_portal_worker_163
    65e0101f3c17   massbit/massbitroute_staking:v0.1-dev     "docker-entrypoint.s…"   5 hours ago   Up 5 hours                     mbr_staking_163
    570d5d491a76   massbit/massbitroute_stat:v0.1.0          "/usr/bin/supervisor…"   5 hours ago   Up 5 hours                     mbr_stat_163
    ebaa43324792   massbit/massbitroute_test_proxy:v0.1.0    "/usr/bin/openresty …"   5 hours ago   Up 5 hours   80/tcp, 443/tcp   mbr_proxy_163
    592045d08e28   massbit/massbitroute_test_client:v0.1.0   "/docker-entrypoint.…"   5 hours ago   Up 5 hours   80/tcp            mbr_test_client_163
    abce39b6fa08   redis:7.0.2-alpine                        "docker-entrypoint.s…"   5 hours ago   Up 5 hours   6379/tcp          mbr_redis_163
    480d923a841f   massbit/massbitroute_chain:v0.1           "bash entrypoint.sh"     5 hours ago   Up 5 hours                     mbr_chain_163
    74b0242d2415   massbit/massbitroute_monitor:v0.1.0       "/usr/bin/supervisor…"   5 hours ago   Up 5 hours                     mbr_monitor_163
    4cec2b3dcaf0   massbit/massbitroute_api:v0.1.7           "/usr/bin/supervisor…"   5 hours ago   Up 5 hours                     mbr_api_163
    ef2bd308aa3f   postgres:14.4-alpine                      "docker-entrypoint.s…"   5 hours ago   Up 5 hours   5432/tcp          mbr_db_163
    1aa43c7990aa   massbit/massbitroute_gwman:v0.1.0         "/usr/bin/supervisor…"   5 hours ago   Up 5 hours                     mbr_gwman_163
    e431a6e83a78   massbit/massbitroute_git:v0.1.9           "/usr/bin/supervisor…"   5 hours ago   Up 5 hours                     mbr_git_163
    ```