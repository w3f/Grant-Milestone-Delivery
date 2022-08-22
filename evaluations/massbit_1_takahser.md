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

- Core API Tests are currently failing. Note: this has to be run inside the mbr_api container.

    ```bash
    $ docker exec -it mbr_api_163 bash
    root@053d138d95d9:/massbit# bash ./run_unit_test.sh

    #   Failed test 't/api/api/000-create.t Api create new - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"result":false,"err_code":100}
    # '
    #     doesn't match '(?^:"result":true)'

    #   Failed test 't/api/api/000-create.t Check raw data if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/api/000-create.t Check raw data if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '<html>
    # <head><title>404 Not Found</title></head>
    # <body>
    # <center><h1>404 Not Found</h1></center>
    # <hr><center>openresty/1.19.9.1</center>
    # </body>
    # </html>
    # '
    #     doesn't match '(?^:"id":"c237c346-7a0f-478b-bc0c-e3ca2522948f")'
    t/api/api/000-create.t .................. 5/? 
    #   Failed test 't/api/api/000-create.t Check ID conf if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/api/000-create.t Check ID conf if created or not - response_body - response is expected (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1665.
    #          got: "<html>\x{0d}\x{0a}<head><title>404 Not Found</title></head>\x{0d}"...
    #       length: 159
    #     expected: ""
    #       length: 0
    #     strings begin to differ at char 1 (line 1 column 1)
    # Looks like you failed 5 tests of 6.
    t/api/api/000-create.t .................. Dubious, test returned 5 (wstat 1280, 0x500)
    Failed 5/6 subtests 
    t/api/api/001-update-entrypoints.t ...... 1/? 
    #   Failed test 't/api/api/001-update-entrypoints.t Api update entrypoints - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"result":false,"err_code":100}
    # '
    #     doesn't match '(?^:"result":true)'
    t/api/api/001-update-entrypoints.t ...... 3/? 
    #   Failed test 't/api/api/001-update-entrypoints.t Api get and check if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"result":false,"err_code":100}
    # '
    #     doesn't match '(?^:"entrypoints":)'
    t/api/api/001-update-entrypoints.t ...... 5/? 
    #   Failed test 't/api/api/001-update-entrypoints.t Check raw data if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/api/001-update-entrypoints.t Check raw data if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '<html>
    # <head><title>404 Not Found</title></head>
    # <body>
    # <center><h1>404 Not Found</h1></center>
    # <hr><center>openresty/1.19.9.1</center>
    # </body>
    # </html>
    # '
    #     doesn't match '(?^:"id":"c237c346-7a0f-478b-bc0c-e3ca2522948f")'
    t/api/api/001-update-entrypoints.t ...... 7/? 
    #   Failed test 't/api/api/001-update-entrypoints.t Check ID conf if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/api/001-update-entrypoints.t Check ID conf if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '<html>
    # <head><title>404 Not Found</title></head>
    # <body>
    # <center><h1>404 Not Found</h1></center>
    # <hr><center>openresty/1.19.9.1</center>
    # </body>
    # </html>
    # '
    #     doesn't match '(?^:server_name \~\^\(\?\<myid\>c237c346-7a0f-478b-bc0c-e3ca2522948f)'

    #   Failed test 't/api/api/001-update-entrypoints.t Check blockchain-network conf if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/api/001-update-entrypoints.t Check blockchain-network conf if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '<html>
    # <head><title>404 Not Found</title></head>
    # <body>
    # <center><h1>404 Not Found</h1></center>
    # <hr><center>openresty/1.19.9.1</center>
    # </body>
    # </html>
    # '
    #     doesn't match '(?^:server_name \~\^\(\?\<myid\>c237c346-7a0f-478b-bc0c-e3ca2522948f)'
    # Looks like you failed 8 tests of 10.
    t/api/api/001-update-entrypoints.t ...... Dubious, test returned 8 (wstat 2048, 0x800)
    Failed 8/10 subtests 
    t/api/api/002-update-disabled.t ......... 1/? 
    #   Failed test 't/api/api/002-update-disabled.t Api update entrypoints - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"err_code":100,"result":false}
    # '
    #     doesn't match '(?^:"result":true)'

    #   Failed test 't/api/api/002-update-disabled.t Api get and check if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"result":false,"err_code":100}
    # '
    #     doesn't match '(?^:"status":0)'
    t/api/api/002-update-disabled.t ......... 5/? 
    #   Failed test 't/api/api/002-update-disabled.t Check blockchain-network conf if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/api/002-update-disabled.t Check blockchain-network conf if created or not - response_body - response is expected (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1665.
    #          got: "<html>\x{0d}\x{0a}<head><title>404 Not Found</title></head>\x{0d}"...
    #       length: 159
    #     expected: ""
    #       length: 0
    #     strings begin to differ at char 1 (line 1 column 1)
    # Looks like you failed 4 tests of 6.
    t/api/api/002-update-disabled.t ......... Dubious, test returned 4 (wstat 1024, 0x400)
    Failed 4/6 subtests 
    t/api/api/003-delete.t .................. 1/? 
    #   Failed test 't/api/api/003-delete.t Api update entrypoints - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"err_code":100,"result":false}
    # '
    #     doesn't match '(?^:"result":true)'
    t/api/api/003-delete.t .................. 5/? 
    #   Failed test 't/api/api/003-delete.t Check blockchain-network conf if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/api/003-delete.t Check blockchain-network conf if created or not - response_body - response is expected (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1665.
    #          got: "<html>\x{0d}\x{0a}<head><title>404 Not Found</title></head>\x{0d}"...
    #       length: 159
    #     expected: ""
    #       length: 0
    #     strings begin to differ at char 1 (line 1 column 1)
    # Looks like you failed 3 tests of 6.
    t/api/api/003-delete.t .................. Dubious, test returned 3 (wstat 768, 0x300)
    Failed 3/6 subtests 
    t/api/gateway/000-create.t .............. 1/? 
    #   Failed test 't/api/gateway/000-create.t Gateway create new - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"result":false,"err_code":100}
    # '
    #     doesn't match '(?^:"result":true)'
    t/api/gateway/000-create.t .............. 3/? 
    #   Failed test 't/api/gateway/000-create.t Api get and check if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"result":false,"err_code":100}
    # '
    #     doesn't match '(?^:"status":0)'
    # Looks like you failed 2 tests of 4.
    t/api/gateway/000-create.t .............. Dubious, test returned 2 (wstat 512, 0x200)
    Failed 2/4 subtests 
    t/api/gateway/001-update-enabled.t ...... 1/? 
    #   Failed test 't/api/gateway/001-update-enabled.t Gateway update - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"err_code":100,"result":false}
    # '
    #     doesn't match '(?^:"result":true)'
    t/api/gateway/001-update-enabled.t ...... 3/? 
    #   Failed test 't/api/gateway/001-update-enabled.t Api get and check if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"err_code":100,"result":false}
    # '
    #     doesn't match '(?^:"status":1)'
    t/api/gateway/001-update-enabled.t ...... 5/? 
    #   Failed test 't/api/gateway/001-update-enabled.t Check raw data if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/gateway/001-update-enabled.t Check raw data if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '<html>
    # <head><title>404 Not Found</title></head>
    # <body>
    # <center><h1>404 Not Found</h1></center>
    # <hr><center>openresty/1.19.9.1</center>
    # </body>
    # </html>
    # '
    #     doesn't match '(?^:"status":1)'
    # Looks like you failed 4 tests of 6.
    t/api/gateway/001-update-enabled.t ...... Dubious, test returned 4 (wstat 1024, 0x400)
    Failed 4/6 subtests 
    t/api/gateway/002-update-approved.t ..... 1/? 
    #   Failed test 't/api/gateway/002-update-approved.t Gateway update - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"err_code":100,"result":false}
    # '
    #     doesn't match '(?^:"result":true)'

    #   Failed test 't/api/gateway/002-update-approved.t Api get and check if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"err_code":100,"result":false}
    # '
    #     doesn't match '(?^:"approved":1)'
    t/api/gateway/002-update-approved.t ..... 5/? 
    #   Failed test 't/api/gateway/002-update-approved.t Check raw data if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/gateway/002-update-approved.t Check raw data if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '<html>
    # <head><title>404 Not Found</title></head>
    # <body>
    # <center><h1>404 Not Found</h1></center>
    # <hr><center>openresty/1.19.9.1</center>
    # </body>
    # </html>
    # '
    #     doesn't match '(?^:eth-mainnet-60173a87-4d2b-469b-b02c-6f212794136c)'

    #   Failed test 't/api/gateway/002-update-approved.t Check raw data if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/gateway/002-update-approved.t Check raw data if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '<html>
    # <head><title>404 Not Found</title></head>
    # <body>
    # <center><h1>404 Not Found</h1></center>
    # <hr><center>openresty/1.19.9.1</center>
    # </body>
    # </html>
    # '
    #     doesn't match '(?^:60173a87-4d2b-469b-b02c-6f212794136c)'
    t/api/gateway/002-update-approved.t ..... 9/? 
    #   Failed test 't/api/gateway/002-update-approved.t Check raw data if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/gateway/002-update-approved.t Check raw data if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '<html>
    # <head><title>404 Not Found</title></head>
    # <body>
    # <center><h1>404 Not Found</h1></center>
    # <hr><center>openresty/1.19.9.1</center>
    # </body>
    # </html>
    # '
    #     doesn't match '(?^:60173a87-4d2b-469b-b02c-6f212794136c)'
    t/api/gateway/002-update-approved.t ..... 11/? 
    #   Failed test 't/api/gateway/002-update-approved.t Check raw data if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/gateway/002-update-approved.t Check raw data if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '<html>
    # <head><title>404 Not Found</title></head>
    # <body>
    # <center><h1>404 Not Found</h1></center>
    # <hr><center>openresty/1.19.9.1</center>
    # </body>
    # </html>
    # '
    #     doesn't match '(?^:60173a87-4d2b-469b-b02c-6f212794136c)'
    t/api/gateway/002-update-approved.t ..... 13/? 
    #   Failed test 't/api/gateway/002-update-approved.t Check raw data if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/gateway/002-update-approved.t Check raw data if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '<html>
    # <head><title>404 Not Found</title></head>
    # <body>
    # <center><h1>404 Not Found</h1></center>
    # <hr><center>openresty/1.19.9.1</center>
    # </body>
    # </html>
    # '
    #     doesn't match '(?^:60173a87-4d2b-469b-b02c-6f212794136c.eth-mainnet)'

    #   Failed test 't/api/gateway/002-update-approved.t Check raw data if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/gateway/002-update-approved.t Check raw data if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '<html>
    # <head><title>404 Not Found</title></head>
    # <body>
    # <center><h1>404 Not Found</h1></center>
    # <hr><center>openresty/1.19.9.1</center>
    # </body>
    # </html>
    # '
    #     doesn't match '(?^:89a21b17-1bbe-4a6b-a5b5-9351d3eb8c81 eth mainnet)'

    #   Failed test 't/api/gateway/002-update-approved.t Check raw data if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/gateway/002-update-approved.t Check raw data if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '<html>
    # <head><title>404 Not Found</title></head>
    # <body>
    # <center><h1>404 Not Found</h1></center>
    # <hr><center>openresty/1.19.9.1</center>
    # </body>
    # </html>
    # '
    #     doesn't match '(?^:89a21b17-1bbe-4a6b-a5b5-9351d3eb8c81 eth mainnet)'
    t/api/gateway/002-update-approved.t ..... 19/? 
    #   Failed test 't/api/gateway/002-update-approved.t Check raw data if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/gateway/002-update-approved.t Check raw data if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '<html>
    # <head><title>404 Not Found</title></head>
    # <body>
    # <center><h1>404 Not Found</h1></center>
    # <hr><center>openresty/1.19.9.1</center>
    # </body>
    # </html>
    # '
    #     doesn't match '(?^:89a21b17-1bbe-4a6b-a5b5-9351d3eb8c81 eth mainnet)'
    # Looks like you failed 18 tests of 20.
    t/api/gateway/002-update-approved.t ..... Dubious, test returned 18 (wstat 4608, 0x1200)
    Failed 18/20 subtests 
    t/api/gateway/003-update-disapproved.t .. 1/? 
    #   Failed test 't/api/gateway/003-update-disapproved.t Gateway update - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"result":false,"err_code":100}
    # '
    #     doesn't match '(?^:"result":true)'
    t/api/gateway/003-update-disapproved.t .. 3/? 
    #   Failed test 't/api/gateway/003-update-disapproved.t Api get and check if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"err_code":100,"result":false}
    # '
    #     doesn't match '(?^:"approved":0)'
    # Looks like you failed 2 tests of 4.
    t/api/gateway/003-update-disapproved.t .. Dubious, test returned 2 (wstat 512, 0x200)
    Failed 2/4 subtests 
    t/api/node/000-create.t ................. 1/? 
    #   Failed test 't/api/node/000-create.t Node create new - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"result":false,"err_code":100}
    # '
    #     doesn't match '(?^:"result":true)'
    t/api/node/000-create.t ................. 3/? 
    #   Failed test 't/api/node/000-create.t Node get and check if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"result":false,"err_code":100}
    # '
    #     doesn't match '(?^:"approved":0)'
    # Looks like you failed 2 tests of 4.
    t/api/node/000-create.t ................. Dubious, test returned 2 (wstat 512, 0x200)
    Failed 2/4 subtests 
    t/api/node/001-register.t ............... 3/? 
    #   Failed test 't/api/node/001-register.t Node get and check if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"err_code":100,"result":false}
    # '
    #     doesn't match '(?^:"approved":0)'

    #   Failed test 't/api/node/001-register.t Check raw data if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/node/001-register.t Check raw data if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '<html>
    # <head><title>404 Not Found</title></head>
    # <body>
    # <center><h1>404 Not Found</h1></center>
    # <hr><center>openresty/1.19.9.1</center>
    # </body>
    # </html>
    # '
    #     doesn't match '(?^:"id":"fd6d64f8-70fb-4c12-aa8a-bdc2805a38a4")'
    t/api/node/001-register.t ............... 7/? 
    #   Failed test 't/api/node/001-register.t Check raw data if created or not - status code ok'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 936.
    #          got: '404'
    #     expected: '200'

    #   Failed test 't/api/node/001-register.t Check raw data if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '<html>
    # <head><title>404 Not Found</title></head>
    # <body>
    # <center><h1>404 Not Found</h1></center>
    # <hr><center>openresty/1.19.9.1</center>
    # </body>
    # </html>
    # '
    #     doesn't match '(?^:server_name fd6d64f8-70fb-4c12-aa8a-bdc2805a38a4.node.mbr.massbitroute.net)'
    # Looks like you failed 5 tests of 8.
    t/api/node/001-register.t ............... Dubious, test returned 5 (wstat 1280, 0x500)
    Failed 5/8 subtests 
    t/api/node/010-update-enabled.t ......... 1/? 
    #   Failed test 't/api/node/010-update-enabled.t Node update - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"err_code":100,"result":false}
    # '
    #     doesn't match '(?^:"result":true)'
    t/api/node/010-update-enabled.t ......... 3/? 
    #   Failed test 't/api/node/010-update-enabled.t Node get and check if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"err_code":100,"result":false}
    # '
    #     doesn't match '(?^:"status":1)'
    # Looks like you failed 2 tests of 4.
    t/api/node/010-update-enabled.t ......... Dubious, test returned 2 (wstat 512, 0x200)
    Failed 2/4 subtests 
    t/api/node/011-update-approved.t ........ 1/? 
    #   Failed test 't/api/node/011-update-approved.t Node update - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"result":false,"err_code":100}
    # '
    #     doesn't match '(?^:"result":true)'

    #   Failed test 't/api/node/011-update-approved.t Node get and check if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"err_code":100,"result":false}
    # '
    #     doesn't match '(?^:"approved":1)'
    # Looks like you failed 2 tests of 4.
    t/api/node/011-update-approved.t ........ Dubious, test returned 2 (wstat 512, 0x200)
    Failed 2/4 subtests 
    t/api/node/012-update-disapproved.t ..... 1/? 
    #   Failed test 't/api/node/012-update-disapproved.t Node update - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"err_code":100,"result":false}
    # '
    #     doesn't match '(?^:"result":true)'
    t/api/node/012-update-disapproved.t ..... 3/? 
    #   Failed test 't/api/node/012-update-disapproved.t Node get and check if created or not - response_body - like (repeated req 0, req 0)'
    #   at /usr/local/share/perl/5.30.0/Test/Nginx/Socket.pm line 1657.
    #                   '{"err_code":100,"result":false}
    # '
    #     doesn't match '(?^:"approved":0)'
    # Looks like you failed 2 tests of 4.
    t/api/node/012-update-disapproved.t ..... Dubious, test returned 2 (wstat 512, 0x200)
    Failed 2/4 subtests 

    Test Summary Report
    -------------------
    t/api/api/000-create.t                (Wstat: 1280 Tests: 6 Failed: 5)
    Failed tests:  2-6
    Non-zero exit status: 5
    t/api/api/001-update-entrypoints.t    (Wstat: 2048 Tests: 10 Failed: 8)
    Failed tests:  2, 4-10
    Non-zero exit status: 8
    t/api/api/002-update-disabled.t       (Wstat: 1024 Tests: 6 Failed: 4)
    Failed tests:  2, 4-6
    Non-zero exit status: 4
    t/api/api/003-delete.t                (Wstat: 768 Tests: 6 Failed: 3)
    Failed tests:  2, 5-6
    Non-zero exit status: 3
    t/api/gateway/000-create.t            (Wstat: 512 Tests: 4 Failed: 2)
    Failed tests:  2, 4
    Non-zero exit status: 2
    t/api/gateway/001-update-enabled.t    (Wstat: 1024 Tests: 6 Failed: 4)
    Failed tests:  2, 4-6
    Non-zero exit status: 4
    t/api/gateway/002-update-approved.t   (Wstat: 4608 Tests: 20 Failed: 18)
    Failed tests:  2, 4-20
    Non-zero exit status: 18
    t/api/gateway/003-update-disapproved.t (Wstat: 512 Tests: 4 Failed: 2)
    Failed tests:  2, 4
    Non-zero exit status: 2
    t/api/node/000-create.t               (Wstat: 512 Tests: 4 Failed: 2)
    Failed tests:  2, 4
    Non-zero exit status: 2
    t/api/node/001-register.t             (Wstat: 1280 Tests: 8 Failed: 5)
    Failed tests:  4-8
    Non-zero exit status: 5
    t/api/node/010-update-enabled.t       (Wstat: 512 Tests: 4 Failed: 2)
    Failed tests:  2, 4
    Non-zero exit status: 2
    t/api/node/011-update-approved.t      (Wstat: 512 Tests: 4 Failed: 2)
    Failed tests:  2, 4
    Non-zero exit status: 2
    t/api/node/012-update-disapproved.t   (Wstat: 512 Tests: 4 Failed: 2)
    Failed tests:  2, 4
    Non-zero exit status: 2
    Files=13, Tests=86, 35 wallclock secs ( 0.04 usr  0.02 sys +  1.54 cusr  0.72 csys =  2.32 CPU)
    Result: FAIL
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

- Fisherman Tests are currently also failing:

    ```bash
    $ cargo tarpaulin -v
            Running `rustc --crate-name sea_orm_migration --edition=2021 /home/seraya/.cargo/registry/src/github.com-1ecc6299db9ec823/sea-orm-migration-0.8.3/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts --crate-type lib --emit=dep-info,metadata,link -C embed-bitcode=no -C debuginfo=2 -C metadata=e2771940cc7ae202 -C extra-filename=-e2771940cc7ae202 --out-dir /home/seraya/repos/massbitroute_fisherman/target/debug/deps -L dependency=/home/seraya/repos/massbitroute_fisherman/target/debug/deps --extern async_trait=/home/seraya/repos/massbitroute_fisherman/target/debug/deps/libasync_trait-292d1141c7ae2b94.so --extern clap=/home/seraya/repos/massbitroute_fisherman/target/debug/deps/libclap-fdda7181d438dff7.rmeta --extern dotenv=/home/seraya/repos/massbitroute_fisherman/target/debug/deps/libdotenv-700445d3d22bfbe4.rmeta --extern sea_orm=/home/seraya/repos/massbitroute_fisherman/target/debug/deps/libsea_orm-fc6e82eeff39febe.rmeta --extern sea_orm_cli=/home/seraya/repos/massbitroute_fisherman/target/debug/deps/libsea_orm_cli-b7cf004d9d5e5659.rmeta --extern sea_schema=/home/seraya/repos/massbitroute_fisherman/target/debug/deps/libsea_schema-0ac54271c3b65a7e.rmeta --extern tracing=/home/seraya/repos/massbitroute_fisherman/target/debug/deps/libtracing-744ece3e53eb2a48.rmeta --extern tracing_subscriber=/home/seraya/repos/massbitroute_fisherman/target/debug/deps/libtracing_subscriber-4aea1b459029d38e.rmeta --cap-lints allow -Cdebuginfo=2 --cfg=tarpaulin -Clink-dead-code`
    Aug 22 14:14:44.327 DEBUG cargo_tarpaulin::cargo: Linker paths: ["/usr/lib/x86_64-linux-gnu", "/home/seraya/repos/massbitroute_fisherman/target/debug/build/libnghttp2-sys-d9ee638ecc4ba134/out/i/lib", "/home/seraya/repos/massbitroute_fisherman/target/debug/build/curl-sys-ac2d783be39586fd/out/build"]
    error: Broken pipe (os error 32)
    warning: build failed, waiting for other jobs to finish...
    error: Broken pipe (os error 32)
    error: build failed
    Aug 22 14:14:45.120 ERROR cargo_tarpaulin: Failed to compile tests! Error: common: there is no argument named `DEFAULT_KEY`
    Error: "Failed to compile tests! Error: common: there is no argument named `DEFAULT_KEY`"
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