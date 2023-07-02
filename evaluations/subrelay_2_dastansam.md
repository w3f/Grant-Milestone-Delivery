# Evaluation

- **Status:** In Progress
- **Application Document:** [Application](https://github.com/Szegoo/Grants-Program/blob/42b031052c16670685c65a409d91779d0069903a/applications/Dotflow.md)
- **Milestone:** 2
- **Kusama Identity:** [Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP](https://sub.id/Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP)
- **Previously successfully merged evaluation:** [Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/subrelay_1_dsm-w3f.md)

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/subrelay/subrelay-api/blob/main/LICENSE https://github.com/subrelay/interface/blob/main/LICENSE | | 
| 0b.  | Documentation | https://docs.subrelay.com/ | Extensive documentation. In some places invalid url is present https://app.subrelay.xyz (forgot to rename?) | 
| 0c. | Testing and Testing Guide | https://github.com/subrelay/interface/tree/main/cypress https://github.com/subrelay/subrelay-api/tree/main/test | Couldn't run integration tests, more on this below. | 
| 0d. | Docker file | https://docs.subrelay.com/self-hosted/getting-started | Working as expected. | 
| 0e. | Article | https://docs.subrelay.com | Documentation page is working as expected. | 
| 1.  | Feature: Email integration | https://docs.subrelay.com/user-guide/email | Working as expected (screenshots attached below) |
| 2.  | Feature: Telegram integration| https://docs.subrelay.com/user-guide/telegram | Working as expected (screenshots attached below) | 
| 3.  | Feature: Discord integration | https://docs.subrelay.com/user-guide/discord | Working as expected (screenshots attached below) | 
| 4.  | Feature: Workflow execution detail | https://app.subrelay.com/logs | Working as expected (screenshots attached below) | 
| 5.  | API | https://github.com/subrelay/subrelay-api | Runs locally, tests are provided and well documented | 
| 6.  | Integration | https://github.com/subrelay/interface | Looks smooth, every page works as expected. |

## General Notes

In general, all the features are delivered, I was able to test them on production and everything works as expected. 

The only thing that I couldn't test locally was the integration tests. Initially the errors were related to Postgres DB, I resolved them and even run the `migration` script that you run in the CI `yarn run typeorm migration:run`. But I still get several errors and all tests are failing. Maybe this is related to my local environment, regardless, I think this part of the code is missing some documentation. I see that issues are related to DB and missing tokens for Discord and Telegram bots. Would be great if you could provide some pre-requisites for running the integration tests locally.

### Outputs

<details>

<summary>Integration tests</summary>

```bash
yarn run v1.22.19
$ jest --config ./test/jest-e2e.json
 FAIL  test/user.e2e-spec.ts
  User
    GET /user/info
      ✕ Get user info
    GET user/connections/discord
      ✕ Update nonexistence discord connection
      ✕ Update discord connection
    GET user/connections/telegram
      ✕ Update nonexistence telegram connection
      ✕ Update telegram connection
    DELETE user/connections/discord
      ✕ Delete discord connection
    DELETE user/connections/telegram
      ✕ Delete telegram connection

● User › GET /user/info › Get user info

    QueryFailedError: relation "user" does not exist

      at PostgresQueryRunner.query (../src/driver/postgres/PostgresQueryRunner.ts:299:19)
      at SelectQueryBuilder.loadRawResults (../src/query-builder/SelectQueryBuilder.ts:3789:25)
      at SelectQueryBuilder.executeEntitiesAndRawResults (../src/query-builder/SelectQueryBuilder.ts:3541:26)
      at SelectQueryBuilder.getRawAndEntities (../src/query-builder/SelectQueryBuilder.ts:1670:29)
      at SelectQueryBuilder.getMany (../src/query-builder/SelectQueryBuilder.ts:1760:25)
      at ../src/persistence/SubjectDatabaseEntityLoader.ts:118:32
          at async Promise.all (index 0)
      at SubjectDatabaseEntityLoader.load (../src/persistence/SubjectDatabaseEntityLoader.ts:150:9)
      at ../src/persistence/EntityPersistExecutor.ts:116:21


● Chain › GET /chains › Get all chains

QueryFailedError: relation "chain" does not exist

    at PostgresQueryRunner.query (../src/driver/postgres/PostgresQueryRunner.ts:299:19)
    at SelectQueryBuilder.loadRawResults (../src/query-builder/SelectQueryBuilder.ts:3789:25)
    at SelectQueryBuilder.getRawMany (../src/query-builder/SelectQueryBuilder.ts:1626:29)
    at ChainService.onModuleInit (../src/chain/chain.service.ts:33:20)
        at async Promise.all (index 0)
    at callModuleInitHook (../node_modules/@nestjs/core/hooks/on-module-init.hook.js:43:5)
    at Proxy.callInitHook (../node_modules/@nestjs/core/nest-application-context.js:224:13)
    at Proxy.init (../node_modules/@nestjs/core/nest-application.js:98:9)
    at Object.<anonymous> (chain.e2e-spec.ts:34:5)


[Nest] 67837  - 07/02/2023, 11:33:12 PM   ERROR [ClientService] Failed to connect to Discord API
[Nest] 67837  - 07/02/2023, 11:33:12 PM   ERROR [ClientService] Error [TokenInvalid]: An invalid token was provided.
 FAIL  test/task.e2e-spec.ts (5.445 s)
● Task › GET /tasks/filter/operators › Get operators for filter task

Error [TokenInvalid]: An invalid token was provided.

    at Client.login (../node_modules/discord.js/src/client/Client.js:214:52)
    at ClientService.onApplicationBootstrap (../node_modules/@discord-nestjs/core/src/services/client.service.ts:55:25)
    at MapIterator.iteratee (../node_modules/@nestjs/core/hooks/on-app-bootstrap.hook.js:22:43)
    at MapIterator.next (../node_modules/iterare/src/map.ts:9:39)
    at IteratorWithOperators.next (../node_modules/iterare/src/iterate.ts:19:28)
        at Function.from (<anonymous>)
    at IteratorWithOperators.toArray (../node_modules/iterare/src/iterate.ts:227:22)
    at callOperator (../node_modules/@nestjs/core/hooks/on-app-bootstrap.hook.js:23:10)
    at callModuleBootstrapHook (../node_modules/@nestjs/core/hooks/on-app-bootstrap.hook.js:43:23)
    at Proxy.callBootstrapHook (../node_modules/@nestjs/core/nest-application-context.js:244:55)

● Task › POST /tasks/run › Telegram task › Failed with nonexistence event ID

Error [TokenInvalid]: An invalid token was provided.

    at Client.login (../node_modules/discord.js/src/client/Client.js:214:52)
    at ClientService.onApplicationBootstrap (../node_modules/@discord-nestjs/core/src/services/client.service.ts:55:25)
    at MapIterator.iteratee (../node_modules/@nestjs/core/hooks/on-app-bootstrap.hook.js:22:43)
    at MapIterator.next (../node_modules/iterare/src/map.ts:9:39)
    at IteratorWithOperators.next (../node_modules/iterare/src/iterate.ts:19:28)
        at Function.from (<anonymous>)
    at IteratorWithOperators.toArray (../node_modules/iterare/src/iterate.ts:227:22)
    at callOperator (../node_modules/@nestjs/core/hooks/on-app-bootstrap.hook.js:23:10)
    at callModuleBootstrapHook (../node_modules/@nestjs/core/hooks/on-app-bootstrap.hook.js:43:23)
    at Proxy.callBootstrapHook (../node_modules/@nestjs/core/nest-application-context.js:244:55)

● Task › DELETE /workflow/{workflow_id} › Delete a nonexistence workflow

QueryFailedError: relation "chain" does not exist

    at PostgresQueryRunner.query (../src/driver/postgres/PostgresQueryRunner.ts:299:19)
    at SelectQueryBuilder.loadRawResults (../src/query-builder/SelectQueryBuilder.ts:3789:25)
    at SelectQueryBuilder.getRawMany (../src/query-builder/SelectQueryBuilder.ts:1626:29)
    at ChainService.onModuleInit (../src/chain/chain.service.ts:33:20)
        at async Promise.all (index 0)
    at callModuleInitHook (../node_modules/@nestjs/core/hooks/on-module-init.hook.js:43:5)
    at Proxy.callInitHook (../node_modules/@nestjs/core/nest-application-context.js:224:13)
    at Proxy.init (../node_modules/@nestjs/core/nest-application.js:98:9)

A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.
Test Suites: 4 failed, 4 total
Tests:       49 failed, 49 total
Snapshots:   0 total
Time:        6.232 s, estimated 7 s
Ran all test suites.
error Command failed with exit code 1.
```

</details>

### Screenshots

#### Email

#### Webhook

#### Discord

#### Telegram