# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/massbit_route.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0.a    | License                                      | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/massbitprotocol/massbitchain/blob/5ef9f9a696ee281ec40b083a194a88dd6d2abc53/LICENSE) | Apache 2.0 |
| 0.b    | Documentation                                | <ul><li>[x] </li></ul> | [Components](https://docs.massbit.io/massbit-route-mbr/components), [Architecture](https://docs.massbit.io/massbit-route-mbr/architecture) | - |                                                                                |
| 0.c    | Testing Guide                                | <ul><li>[ ] </li></ul> | [Testing Guide](https://github.com/massbitprotocol/w3f-testing-guide/blob/244d0285032dfe914921b9913ea7a18d8b3ce3c9/README.md), [Testnet Guide](https://docs.massbit.io/massbit-route-mbr/use-massbit-route) | See [Testing Guide Feedback](#testing-guide-feedback) |
| 0.d    | Docker release                               | <ul><li>[x] </li></ul> | [main `docker-compose.yaml`](https://github.com/massbitprotocol/w3f-testing-guide/blob/4a16578a00436bdd6027abefc06e1f4bc118b49f/docker-compose.yaml), [gateway](https://github.com/massbitprotocol/w3f-testing-guide/blob/feature/grant-delivery-163/163/gateway-docker-compose.yaml), [node](https://github.com/massbitprotocol/w3f-testing-guide/blob/feature/grant-delivery-163/163/node-docker-compose.yaml) | See [Docker Feedback](#docker-feedback) |
| 0.e    | Article                                      | <ul><li>[x] </li></ul> | [Article](https://blog.massbit.io/launching-mbr-testnet-phase-ii-staking-with-rewards-2/) | - |
| 1.     | Massbit Core Implementation (Lua)            | <ul><li>[x] </li></ul> | [Massbit Core Repo](https://github.com/massbitprotocol/massbitroute/tree/cca002fb66895373017c13f69cd51e804084f105) | - |
| 2.     | Gateway Manager Implementation (C)           | <ul><li>[x] </li></ul> | [Gateway Manager Repo](https://github.com/massbitprotocol/massbitroute_gwman/tree/0eb414190204e4bded525a2bf29851818a01954c) | - |
| 3.     | Fisherman - Node Verification Service (Rust) | <ul><li>[x] </li></ul> | [Fisherman Repo](https://github.com/massbitprotocol/massbitroute_fisherman/tree/89579fb5be9fc96160886f006d6db960252b8be6) | Once a node goes offline, fishermen services will detect it and reflect it in the UI (tested). |
| 4.     | Massbit Nodes and Gateway  (Lua)             | <ul><li>[x] </li></ul> | [Node Repo](https://github.com/massbitprotocol/massbitroute_node/tree/0065bc1c027e2a05ac3c6dab6aa4128348b36815), [Gateway Repo](https://github.com/massbitprotocol/massbitroute_gateway/tree/4f6330ff6c62e525354a8f17c223584fa7168e1b) | There are 2 separate docker-compose files for the node and gateway (see 0.d Docker release) |
| 5.     | Web Portal implementation  (Vue.js)          | <ul><li>[x] </li></ul> | [dApp](https://github.com/massbitprotocol/mbr-app/tree/42aaf8ab94d8e4c2ba7a0e8ed9854c7beef15b5b) | The UI looks very mature already - it's performant and easy to understand. Features work smoothly, no bugs were identified. |
| 6.     | Pallet Implementation for Consumer dAPI fee and reward distribution for providers | <ul><li>[ ] </li></ul> | [Staking and Reward Pallet](https://github.com/massbitprotocol/massbitchain/blob/5ef9f9a696ee281ec40b083a194a88dd6d2abc53/pallets/dapi-staking/src/lib.rs) | More inline comments would be useful for other people who might want to reuse your code. |
| 7.     | Pallet Implementation for Node Provider/Delegator staking and reward distribution | <ul><li>[ ] </li></ul> | [Provider Staking Pallet](https://github.com/massbitprotocol/massbitchain/blob/5ef9f9a696ee281ec40b083a194a88dd6d2abc53/pallets/dapi/src/lib.rs) | More inline comments would be useful for other people who might want to reuse your code. |


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

- Core API Tests are currently failing:

    ```bash
    $ ./scripts/run _run_test
    Bailout called.  Further testing stopped:  ./t/api/api/000-create.t Api create new - Cannot start nginx using command "nginx -p /home/xxx/repos/massbitroute/t/servroot/ -c /home/xxx/repos/massbitroute/t/servroot/conf/nginx.conf > /dev/null" (status code 256).
    FAILED--Further testing stopped: ./t/api/api/000-create.t Api create new - Cannot start nginx using command "nginx -p /home/xxx/repos/massbitroute/t/servroot/ -c /home/xxx/repos/massbitroute/t/servroot/conf/nginx.conf > /dev/null" (status code 256).
    ```

- Chain Tests are currently failing (the given folder `targetxwfqnf` doesn't exist)

    ```bash
    $ cargo test
    error: Permission denied (os error 13) at path "/home/xxx/repos/massbitchain/targetPv2gzO"
    $ ls -la /home/xxx/repos/massbitchain/targetxwfqnf
    ls: cannot access '/home/xxx/repos/massbitchain/targetxwfqnf': No such file or directory
    ```

- Fisherman Tests are currently also failing:

    ```bash
    $ cargo tarpaulin -v
    error: could not compile `migrations_macros` due to 2 previous errors

    Caused by:
    process didn't exit successfully: `rustc --crate-name migrations_macros /home/xxx/.cargo/registry/src/github.com-1ecc6299db9ec823/migrations_macros-1.4.2/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi --crate-type proc-macro --emit=dep-info,link -C prefer-dynamic -C embed-bitcode=no -C debuginfo=2 --cfg 'feature="default"' -C metadata=3d9b37efe2366aee -C extra-filename=-3d9b37efe2366aee --out-dir /home/xxx/repos/massbitroute_fisherman/target/debug/deps -L dependency=/home/xxx/repos/massbitroute_fisherman/target/debug/deps --extern migrations_internals=/home/xxx/repos/massbitroute_fisherman/target/debug/deps/libmigrations_internals-330656982db456d3.rlib --extern proc_macro2=/home/xxx/repos/massbitroute_fisherman/target/debug/deps/libproc_macro2-1a91274e1ad830ba.rlib --extern quote=/home/xxx/repos/massbitroute_fisherman/target/debug/deps/libquote-f9800d15400775c0.rlib --extern syn=/home/xxx/repos/massbitroute_fisherman/target/debug/deps/libsyn-c683448ab8e12ce6.rlib --extern proc_macro --cap-lints allow -Cdebuginfo=2 --cfg=tarpaulin -Clink-dead-code` (exit status: 1)
    warning: build failed, waiting for other jobs to finish...
    error: Broken pipe (os error 32)
    error: build failed
    Aug 19 15:09:59.649 ERROR cargo_tarpaulin: Failed to compile tests! Error: migrations_macros: linking with `cc` failed: exit status: 1
    Error: "Failed to compile tests! Error: migrations_macros: linking with `cc` failed: exit status: 1"
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