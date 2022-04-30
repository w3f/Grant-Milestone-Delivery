# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/7e34710aff6c941d2a3e65302fbcdbb1c43c466f/applications/wika_network.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [License](https://github.com/randombishop/wika_api/blob/b99941d39605c906c5ef95fbd0010b78a757156b/LICENSE) | MIT License |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/randombishop/wika_api/blob/b99941d39605c906c5ef95fbd0010b78a757156b/README.md), [Swagger API Doc](https://api-test.wika.network/doc/) | All core functions have inline comments. Documentation within the README as well as the Swagger API are on a comprehensive level as well. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Test Guide](https://github.com/randombishop/wika_api/blob/b99941d39605c906c5ef95fbd0010b78a757156b/README.md#starting-up-devtest-databases) | See [Testing Guide Feedback](#testing-guide-feedback) |
| 0d. | Docker | <ul><li>[x] </li></ul> | [docker-compose.yaml](https://github.com/randombishop/wika_api/blob/b99941d39605c906c5ef95fbd0010b78a757156b/api/docker-compose.yaml) | - |
| 0e. | Article | <ul><li>[x] </li></ul> | [Medium Article](https://wikanetwork.medium.com/the-wika-network-api-4309e48a7d4f) | - |
| 1. | list_url_by_liker(address) | <ul><li>[x] </li></ul> | [Implementation of `GET /user/:user/liked_urls`](https://github.com/randombishop/wika_api/blob/292848c4330b767715b6b82b5517fab1b9132d8a/api/src/app.controller.ts#L51) | See [API Feedback](#api-feedback) |
| 2. | list_url_by_owner(address) | <ul><li>[x] </li></ul> | [Implementation of `GET /user/:user/owned_urls`](https://github.com/randombishop/wika_api/blob/292848c4330b767715b6b82b5517fab1b9132d8a/api/src/app.controller.ts#L73) | See [API Feedback](#api-feedback) |  
| 3. | search(query) | <ul><li>[x] </li></ul> | [Implementation of `GET /user/:user/search/:query`](https://github.com/randombishop/wika_api/blob/292848c4330b767715b6b82b5517fab1b9132d8a/api/src/app.controller.ts#L95) | See [API Feedback](#api-feedback) |  
| 4. | recommend(address) | <ul><li>[x] </li></ul> | [Implementation of `GET /user/:user/recommend`](https://github.com/randombishop/wika_api/blob/292848c4330b767715b6b82b5517fab1b9132d8a/api/src/app.controller.ts#L127) | See [API Feedback](#api-feedback) | 


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

- overall very clean, high-quality code using the latest frameworks and extensions (TypeScript, NestJs) and best practices
- personally, I liked that you used decorators and dependency injection throughout the codebase
- there are some warnings in the tests, see [Testing Guide Feedback](#testing-guide-feedback)

### Testing Guide Feedback

- All core functions are fully covered by unit tests
- The README contained all neccessary steps to run the tests in an easy-to-understand manner

- Linting passes
    ```bash
    $ yarn lint
    yarn run v1.22.18
    $ eslint "{src,apps,libs,test}/**/*.ts" --fix
    Done in 2.14s.
    ```

- Tests pass with warnings

    ```bash
    $ yarn test
    yarn run v1.22.18
    $ jest --forceExit
    (node:121349) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
    (Use `node --trace-deprecation ...` to show where the warning was created)
    PASS  src/elastic.service.spec.ts
    (node:121343) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
    (Use `node --trace-deprecation ...` to show where the warning was created)
    PASS  src/neo4j.service.spec.ts
    PASS  src/app.controller.spec.ts
    A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.

    Test Suites: 3 passed, 3 total
    Tests:       20 passed, 20 total
    Snapshots:   0 total
    Time:        3.573 s
    ```

- When running the tests with the suggested arugment `--detectOpenHandles` (see above), the report indicates that some handles haven't been closed. To prevent memory leaks or other complications, I reccommend to review these, if that hasn't already happened. Also, while I haven't looked at it in detail, [this StackOverflow post](https://stackoverflow.com/questions/50818367/how-to-fix-err-jest-has-detected-the-following-3-open-handles-potentially-keepin) might help. Since the tests pass, it's not a reason to reject this deliverable though.

    ```bash
    $ yarn test
    yarn run v1.22.18
    $ jest --detectOpenHandles --forceExit
    (node:122322) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
    (Use `node --trace-deprecation ...` to show where the warning was created)
    PASS  src/app.controller.spec.ts
    PASS  src/neo4j.service.spec.ts
    PASS  src/elastic.service.spec.ts

    Test Suites: 3 passed, 3 total
    Tests:       20 passed, 20 total
    Snapshots:   0 total
    Time:        2.566 s, estimated 3 s
    Ran all test suites.

    Jest has detected the following 3 open handles potentially keeping Jest from exiting:

    ●  TCPWRAP

        43 |   async fetchProperties(cql: string, params: object = null) {
        44 |     const session = this.driver.session();
        > 45 |     const result = await session.run(cql, params);
            |                                  ^
        46 |     const records = [];
        47 |     for (let i = 0; i < result.records.length; i++) {
        48 |       records.push(result.records[i].get(0).properties);

        at _connect (../node_modules/neo4j-driver-bolt-connection/lib/channel/node/node-channel.js:120:36)
        at new NodeChannel (../node_modules/neo4j-driver-bolt-connection/lib/channel/node/node-channel.js:200:22)
        at createChannel (../node_modules/neo4j-driver-bolt-connection/lib/connection/connection-channel.js:93:87)
        at createChannelConnection (../node_modules/neo4j-driver-bolt-connection/lib/connection/connection-channel.js:95:19)
        at DirectConnectionProvider._createChannelConnection (../node_modules/neo4j-driver-bolt-connection/lib/connection-provider/connection-provider-pooled.js:109:69)
        at DirectConnectionProvider.Object.<anonymous>.PooledConnectionProvider._createConnection (../node_modules/neo4j-driver-bolt-connection/lib/connection-provider/connection-provider-pooled.js:133:21)
        at Pool.<anonymous> (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:261:51)
        at step (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:51:23)
        at Object.next (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:32:53)
        at ../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:26:71
        at Object.<anonymous>.__awaiter (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:22:12)
        at Pool.Object.<anonymous>.Pool._acquire (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:208:16)
        at Pool.Object.<anonymous>.Pool.acquire (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:106:21)
        at DirectConnectionProvider.Object.<anonymous>.DirectConnectionProvider.acquireConnection (../node_modules/neo4j-driver-bolt-connection/lib/connection-provider/connection-provider-direct.js:102:14)
        at ConnectionHolder.Object.<anonymous>.ConnectionHolder.initializeConnection (../node_modules/neo4j-driver-core/lib/internal/connection-holder.js:87:64)
        at Session.Object.<anonymous>.Session._run (../node_modules/neo4j-driver-core/lib/session.js:161:51)
        at Session.Object.<anonymous>.Session.run (../node_modules/neo4j-driver-core/lib/session.js:139:21)
        at Neo4jService.fetchProperties (neo4j.service.ts:45:34)
        at Neo4jService.fetch2url (neo4j.service.ts:62:29)
        at Neo4jService.listUrlsByUserRelation (neo4j.service.ts:82:17)
        at Neo4jService.listUrlsByLiker (neo4j.service.ts:91:17)
        at AppController.listUrlsByLiker (app.controller.ts:70:23)
        at Object.<anonymous> (app.controller.spec.ts:36:40)


    ●  TCPWRAP

        43 |   async fetchProperties(cql: string, params: object = null) {
        44 |     const session = this.driver.session();
        > 45 |     const result = await session.run(cql, params);
            |                                  ^
        46 |     const records = [];
        47 |     for (let i = 0; i < result.records.length; i++) {
        48 |       records.push(result.records[i].get(0).properties);

        at _connect (../node_modules/neo4j-driver-bolt-connection/lib/channel/node/node-channel.js:120:36)
        at new NodeChannel (../node_modules/neo4j-driver-bolt-connection/lib/channel/node/node-channel.js:200:22)
        at createChannel (../node_modules/neo4j-driver-bolt-connection/lib/connection/connection-channel.js:93:87)
        at createChannelConnection (../node_modules/neo4j-driver-bolt-connection/lib/connection/connection-channel.js:95:19)
        at DirectConnectionProvider._createChannelConnection (../node_modules/neo4j-driver-bolt-connection/lib/connection-provider/connection-provider-pooled.js:109:69)
        at DirectConnectionProvider.Object.<anonymous>.PooledConnectionProvider._createConnection (../node_modules/neo4j-driver-bolt-connection/lib/connection-provider/connection-provider-pooled.js:133:21)
        at Pool.<anonymous> (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:261:51)
        at step (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:51:23)
        at Object.next (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:32:53)
        at ../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:26:71
        at Object.<anonymous>.__awaiter (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:22:12)
        at Pool.Object.<anonymous>.Pool._acquire (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:208:16)
        at Pool.Object.<anonymous>.Pool.acquire (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:106:21)
        at DirectConnectionProvider.Object.<anonymous>.DirectConnectionProvider.acquireConnection (../node_modules/neo4j-driver-bolt-connection/lib/connection-provider/connection-provider-direct.js:102:14)
        at ConnectionHolder.Object.<anonymous>.ConnectionHolder.initializeConnection (../node_modules/neo4j-driver-core/lib/internal/connection-holder.js:87:64)
        at Session.Object.<anonymous>.Session._run (../node_modules/neo4j-driver-core/lib/session.js:161:51)
        at Session.Object.<anonymous>.Session.run (../node_modules/neo4j-driver-core/lib/session.js:139:21)
        at Neo4jService.fetchProperties (neo4j.service.ts:45:34)
        at Neo4jService.fetch2url (neo4j.service.ts:62:29)
        at Neo4jService.listUrlsByUserRelation (neo4j.service.ts:82:17)
        at Neo4jService.listUrlsByOwner (neo4j.service.ts:100:17)
        at AppController.listUrlsByOwner (app.controller.ts:92:23)
        at Object.<anonymous> (app.controller.spec.ts:43:40)


    ●  TCPWRAP

        43 |   async fetchProperties(cql: string, params: object = null) {
        44 |     const session = this.driver.session();
        > 45 |     const result = await session.run(cql, params);
            |                                  ^
        46 |     const records = [];
        47 |     for (let i = 0; i < result.records.length; i++) {
        48 |       records.push(result.records[i].get(0).properties);

        at _connect (../node_modules/neo4j-driver-bolt-connection/lib/channel/node/node-channel.js:120:36)
        at new NodeChannel (../node_modules/neo4j-driver-bolt-connection/lib/channel/node/node-channel.js:200:22)
        at createChannel (../node_modules/neo4j-driver-bolt-connection/lib/connection/connection-channel.js:93:87)
        at createChannelConnection (../node_modules/neo4j-driver-bolt-connection/lib/connection/connection-channel.js:95:19)
        at DirectConnectionProvider._createChannelConnection (../node_modules/neo4j-driver-bolt-connection/lib/connection-provider/connection-provider-pooled.js:109:69)
        at DirectConnectionProvider.Object.<anonymous>.PooledConnectionProvider._createConnection (../node_modules/neo4j-driver-bolt-connection/lib/connection-provider/connection-provider-pooled.js:133:21)
        at Pool.<anonymous> (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:261:51)
        at step (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:51:23)
        at Object.next (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:32:53)
        at ../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:26:71
        at Object.<anonymous>.__awaiter (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:22:12)
        at Pool.Object.<anonymous>.Pool._acquire (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:208:16)
        at Pool.Object.<anonymous>.Pool.acquire (../node_modules/neo4j-driver-bolt-connection/lib/pool/pool.js:106:21)
        at DirectConnectionProvider.Object.<anonymous>.DirectConnectionProvider.acquireConnection (../node_modules/neo4j-driver-bolt-connection/lib/connection-provider/connection-provider-direct.js:102:14)
        at ConnectionHolder.Object.<anonymous>.ConnectionHolder.initializeConnection (../node_modules/neo4j-driver-core/lib/internal/connection-holder.js:87:64)
        at Session.Object.<anonymous>.Session._run (../node_modules/neo4j-driver-core/lib/session.js:161:51)
        at Session.Object.<anonymous>.Session.run (../node_modules/neo4j-driver-core/lib/session.js:139:21)
        at Neo4jService.fetchProperties (neo4j.service.ts:45:34)
        at Neo4jService.fetch2url (neo4j.service.ts:62:29)
        at Neo4jService.listUrlsByNetwork (neo4j.service.ts:120:17)
        at AppController.recommend (app.controller.ts:157:44)
        at Object.<anonymous> (app.controller.spec.ts:75:42)

    Done in 3.06s.
    ```

#### Docker Feedback

- infrastructure starts up fine, no issues

    ```bash
    $ docker ps
    CONTAINER ID   IMAGE                                                  COMMAND                  CREATED       STATUS                 PORTS                                                                                            NAMES
    798685aaa204   docker.elastic.co/elasticsearch/elasticsearch:7.16.3   "/bin/tini -- /usr/l…"   3 hours ago   Up 3 hours             0.0.0.0:9200->9200/tcp, :::9200->9200/tcp, 9300/tcp                                              test_db_es_1
    276a3a67e1e0   docker.elastic.co/kibana/kibana:7.16.3                 "/bin/tini -- /usr/l…"   3 hours ago   Up 3 hours             0.0.0.0:5601->5601/tcp, :::5601->5601/tcp                                                        test_db_kibana_1
    2d6b84875d74   neo4j                                                  "tini -g -- /startup…"   3 hours ago   Up 3 hours (healthy)   0.0.0.0:7474->7474/tcp, :::7474->7474/tcp, 7473/tcp, 0.0.0.0:7687->7687/tcp, :::7687->7687/tcp   test_db_neo4j_1
    ```

#### API Feedback

- API starts up fine

    ```bash
    $ yarn start
    yarn run v1.22.18
    $ nest start
    [Nest] 156396  - 04/28/2022, 1:33:20 PM     LOG [NestFactory] Starting Nest application...
    [Nest] 156396  - 04/28/2022, 1:33:20 PM     LOG [InstanceLoader] AppModule dependencies initialized +14ms
    [Nest] 156396  - 04/28/2022, 1:33:20 PM     LOG [RoutesResolver] AppController {/}: +318ms
    [Nest] 156396  - 04/28/2022, 1:33:20 PM     LOG [RouterExplorer] Mapped {/ping, GET} route +1ms
    [Nest] 156396  - 04/28/2022, 1:33:20 PM     LOG [RouterExplorer] Mapped {/user/:user/liked_urls, GET} route +1ms
    [Nest] 156396  - 04/28/2022, 1:33:20 PM     LOG [RouterExplorer] Mapped {/user/:user/owned_urls, GET} route +0ms
    [Nest] 156396  - 04/28/2022, 1:33:20 PM     LOG [RouterExplorer] Mapped {/user/:user/search/:query, GET} route +0ms
    [Nest] 156396  - 04/28/2022, 1:33:20 PM     LOG [RouterExplorer] Mapped {/user/:user/recommend, GET} route +0ms
    [Nest] 156396  - 04/28/2022, 1:33:20 PM     LOG [NestApplication] Nest application successfully started +1ms
    (node:156396) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
    (Use `node --trace-deprecation ...` to show where the warning was created)
    ```
- Endpoints can be called and return responses, tested using swagger-ui