# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Profond.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/profondHQ/profond-analytics/blob/9922ea6effd5d5e593e954f75f93b749853d7872/LICENSE) | MIT |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [profondHQ/profond-backend-api](https://github.com/profondHQ/profond-backend-api/tree/542216b6203782e1e899681f9709c4d6f3a4312f), [profond.gitbook.io](https://profond.gitbook.io/docs/) | — |
| 0c. | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [profondHQ/profond-backend-api](https://github.com/profondHQ/profond-backend-api/tree/7b79b8c43908a0e60afb4e802a203307a2819b0d#test), [profondHQ/profond-psp22-contract](https://github.com/profondHQ/profond-psp22-contract/tree/9cdb77965af20020556253074d947a11245ea062#-run-integration-test) | Some tests currently failing |
| 0d. | Article | <ul><li>[x] </li></ul> | [profond.gitbook.io](https://profond.gitbook.io/docs/analytics-and-api) | Added on request |
| 1. | Analytic Functionality | <ul><li>[ ] </li></ul> | [profondHQ/profond-analytics](https://github.com/profondHQ/profond-analytics/tree/9922ea6effd5d5e593e954f75f93b749853d7872) | — |
| 2.  | REST API Service | <ul><li>[ ] </li></ul> | [profondHQ/profond-backend-api](https://github.com/profondHQ/profond-backend-api/tree/7b79b8c43908a0e60afb4e802a203307a2819b0d) | Deployed at https://api.profond.ai/ |


## General Notes

- Deployed at https://profond.ai/

### Test output

#### yarn run test

```sh
> yarn run test
yarn run v1.22.19
$ jest
 PASS  src/app.controller.spec.ts (5.719 s)
 FAIL  src/stats/stats.service.spec.ts
  ● Test suite failed to run

    Cannot find module 'src/constants' from 'stats/stats.service.ts'

    Require stack:
      stats/stats.service.ts
      stats/stats.service.spec.ts

      1 | import { Inject, Injectable } from "@nestjs/common";
    > 2 | import { PG_CONNECTION } from "src/constants";
        | ^
      3 |
      4 | @Injectable()
      5 | export class StatsService {

      at Resolver._throwModNotFoundError (../node_modules/jest-resolve/build/resolver.js:427:11)
      at Object.<anonymous> (stats/stats.service.ts:2:1)
      at Object.<anonymous> (stats/stats.service.spec.ts:2:1)

 FAIL  src/stats/stats.controller.spec.ts
  ● Test suite failed to run

    Cannot find module 'src/constants' from 'stats/stats.service.ts'

    Require stack:
      stats/stats.service.ts
      stats/stats.controller.ts
      stats/stats.controller.spec.ts

      1 | import { Inject, Injectable } from "@nestjs/common";
    > 2 | import { PG_CONNECTION } from "src/constants";
        | ^
      3 |
      4 | @Injectable()
      5 | export class StatsService {

      at Resolver._throwModNotFoundError (../node_modules/jest-resolve/build/resolver.js:427:11)
      at Object.<anonymous> (stats/stats.service.ts:2:1)
      at Object.<anonymous> (stats/stats.controller.ts:2:1)
      at Object.<anonymous> (stats/stats.controller.spec.ts:2:1)

 PASS  src/coin/coin.service.spec.ts (7.806 s)
 PASS  src/collection/collection.service.spec.ts (7.812 s)
A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.

Test Suites: 2 failed, 3 passed, 5 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        8.684 s
```


#### yarn run test:e2e

```sh
> yarn run test:e2e
yarn run v1.22.19
$ jest --config ./test/jest-e2e.json
 FAIL  test/app.e2e-spec.ts
  ● Test suite failed to run

    Cannot find module 'src/constants' from '../src/stats/stats.service.ts'

    Require stack:
      /home/profond/profond-backend-api/src/stats/stats.service.ts
      /home/profond/profond-backend-api/src/stats/stats.module.ts
      /home/profond/profond-backend-api/src/app.module.ts
      app.e2e-spec.ts

      1 | import { Inject, Injectable } from "@nestjs/common";
    > 2 | import { PG_CONNECTION } from "src/constants";
        | ^
      3 |
      4 | @Injectable()
      5 | export class StatsService {

      at Resolver._throwModNotFoundError (../node_modules/jest-resolve/build/resolver.js:427:11)
      at Object.<anonymous> (../src/stats/stats.service.ts:2:1)
      at Object.<anonymous> (../src/stats/stats.module.ts:2:1)
      at Object.<anonymous> (../src/app.module.ts:8:1)
      at Object.<anonymous> (app.e2e-spec.ts:4:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        3.012 s
Ran all test suites.
```
