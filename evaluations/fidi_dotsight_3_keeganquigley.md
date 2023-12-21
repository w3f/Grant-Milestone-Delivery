# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/fidi-dotsight-analytics.md
- **Milestone:** 3
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight/blob/main/LICENSE) | |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [LINK](https://docs.fidi.tech/dotsight-library/dotsight-overview) | |
| **0c.** | Testing | <ul><li>[ ] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight/blob/main/src/pipelines/pipelines.controller.spec.ts) | |
| **1a.** | dApp-level signals | <ul><li>[x] </li></ul> | [LINK](https://docs.fidi.tech/dotsight-library/supported-metrics-types) | |
| **1b.** | Online testing & deployment | <ul><li>[ ] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight-ui/blob/main/src/features/PipelineExecution/ui/index.tsx) |  |
| **2a.** | Deployment validation & View status | <ul><li>[ ] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight-ui/blob/main/src/features/PipelineExecution/ui/index.tsx) |  |
| **2b.** | Automated and ad-hoc deployment | <ul><li>[x] </li></ul> | [Docs](https://docs.fidi.tech/dotsight-library/developer-guide)[ Data Service](https://github.com/fidi-tech/dotsight/blob/main/README.md#quick-start) [UI](https://github.com/fidi-tech/dotsight-ui)|  |
| **2c.** | Data interface: view construction | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight-ui/blob/main/src/features/widgetTypeSelector/ui/index.tsx) |  |
| **2d.** | Data interface: Deployment | <ul><li>[x] </li></ul> | [LINK](https://docs.fidi.tech/code-free-analytics/widgets-collection) |  |

# General Notes

I'm able to use the app and get most of the way through creating a pipeline.

![fidi](https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/aa09d13c-5603-43b8-9505-631b82137daf)

![fidi key](https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/ae9f8d22-6445-4554-b2b2-2ef8b7404c6f)

## Tests

Unit tests pass with overall good coverage:

<details>
 <summary>Output</summary>

```ts
npm run typeorm:run-migrations

> @fidi/dotsight@0.0.1 typeorm:run-migrations
> npm run typeorm -- migration:run -d ./typeorm.config.ts


> @fidi/dotsight@0.0.1 typeorm
> ts-node ./node_modules/typeorm/cli migration:run -d ./typeorm.config.ts

Error during migration run:
Error: getaddrinfo ENOTFOUND dotsight
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:71:26) {
  errno: -3008,
  code: 'ENOTFOUND',
  syscall: 'getaddrinfo',
  hostname: 'dotsight'
}
npm notice
npm notice New major version of npm available! 9.6.5 -> 10.2.5
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.2.5
npm notice Run npm install -g npm@10.2.5 to update!
npm notice
npm notice
npm notice New major version of npm available! 9.6.5 -> 10.2.5
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.2.5
npm notice Run npm install -g npm@10.2.5 to update!
npm notice
npm run test:cov

> @fidi/dotsight@0.0.1 test:cov
> jest --coverage

 PASS  src/data-sources/collection/dapp-radar/protocol.datasource.spec.ts (5.333 s)
 PASS  src/data-sources/collection/debank/wallet-token.protocol.datasource.spec.ts (5.341 s)
 PASS  src/data-sources/collection/debank/wallet-token.datasource.spec.ts (5.595 s)
 PASS  src/data-sources/collection/giant-squid/stats/wallet-token.datasource.spec.ts
 PASS  src/data-sources/collection/rpc/erc20.datasource.spec.ts
 PASS  src/mappers/abstract.mapper.spec.ts
 PASS  src/data-sources/collection/debank/wallet.datasource.spec.ts
 PASS  src/pipelines/services/pipeline/pipeline.service.spec.ts (6.888 s)
 PASS  src/widgets/services/widget/widget.service.spec.ts (6.956 s)
 PASS  src/mappers/collection/single-metric/single-metric.mapper.spec.ts
 PASS  src/data-sources/collection/chainlink/token.datasource.spec.ts
 PASS  src/mappers/collection/distribution/distribution.mapper.spec.ts
 PASS  src/data-sources/abstract.data-source.spec.ts
 PASS  src/mappers/services/mapper/mapper.service.spec.ts
 PASS  src/pipelines/services/execute-pipeline/execute-pipeline.service.spec.ts (8.031 s)
 PASS  src/common/math.spec.ts
 PASS  src/mixers/abstract.mixer.spec.ts
 PASS  src/middlewares/services/middleware/middleware.service.spec.ts
 PASS  src/mixers/services/mixer/mixer.service.spec.ts
 PASS  src/pipelines/pipelines.controller.spec.ts (8.347 s)
 PASS  src/auth/auth.controller.spec.ts
 PASS  src/data-sources/services/data-source/data-source.service.spec.ts
 PASS  src/auth/services/auth/auth.service.spec.ts
 PASS  src/users/services/user/user.service.spec.ts
-----------------------------------------------|---------|----------|---------|---------|---------------------------------
File                                           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------------------------------|---------|----------|---------|---------|---------------------------------
All files                                      |   71.36 |    42.85 |   69.75 |   71.09 |
 src                                           |       0 |      100 |       0 |       0 |
  app.module.ts                                |       0 |      100 |     100 |       0 | 1-24
  main.ts                                      |       0 |      100 |       0 |       0 | 1-41
 src/auth                                      |   34.61 |        0 |      25 |   34.69 |
  auth.controller.dev.ts                       |       0 |      100 |       0 |       0 | 1-53
  auth.controller.ts                           |   94.73 |      100 |      50 |   94.44 | 47
  auth.module.ts                               |       0 |        0 |     100 |       0 | 1-27
 src/auth/decorators                           |      50 |      100 |       0 |      50 |
  authId.decorator.ts                          |      50 |      100 |       0 |      50 | 4-5
 src/auth/guards                               |   67.85 |        0 |      50 |    62.5 |
  github.guard.ts                              |     100 |      100 |     100 |     100 |
  google.guard.ts                              |     100 |      100 |     100 |     100 |
  jwt.guard.ts                                 |   43.75 |        0 |      50 |      40 | 17-30
  twitter.guard.ts                             |     100 |      100 |     100 |     100 |
 src/auth/services/auth                        |      55 |        0 |      20 |   52.63 |
  auth.service.ts                              |      55 |        0 |      20 |   52.63 | 23-55
 src/auth/strategies                           |       0 |        0 |       0 |       0 |
  github.strategy.ts                           |       0 |        0 |       0 |       0 | 1-33
  google-oidc.strategy.ts                      |       0 |        0 |       0 |       0 | 1-28
  twitter.strategy.ts                          |       0 |        0 |       0 |       0 | 1-33
 src/common                                    |      90 |      100 |   42.85 |   89.18 |
  currecies.ts                                 |     100 |      100 |     100 |     100 |
  http.ts                                      |   55.55 |      100 |      20 |      50 | 8-13,19-24
  math.ts                                      |     100 |      100 |     100 |     100 |
  regexp.ts                                    |     100 |      100 |     100 |     100 |
 src/common/spec                               |     100 |      100 |     100 |     100 |
  db.ts                                        |     100 |      100 |     100 |     100 |
 src/data-sources                              |   76.66 |      100 |      90 |   79.31 |
  abstract.data-source.ts                      |   91.66 |      100 |   83.33 |   91.66 | 51
  abstract.protocol.data-source.ts             |     100 |      100 |     100 |     100 |
  abstract.token.data-source.ts                |     100 |      100 |     100 |     100 |
  abstract.wallet-token.data-source.ts         |     100 |      100 |     100 |     100 |
  abstract.wallet.data-source.ts               |     100 |      100 |     100 |     100 |
  data-sources.module.ts                       |       0 |      100 |     100 |       0 | 1-11
 src/data-sources/collection                   |     100 |      100 |     100 |     100 |
  index.ts                                     |     100 |      100 |     100 |     100 |
 src/data-sources/collection/chainlink         |     100 |      100 |     100 |     100 |
  abi.ts                                       |     100 |      100 |     100 |     100 |
  config.ts                                    |     100 |      100 |     100 |     100 |
  token.datasource.ts                          |     100 |      100 |     100 |     100 |
 src/data-sources/collection/dapp-radar        |     100 |       50 |     100 |     100 |
  protocol.datasource.ts                       |     100 |       50 |     100 |     100 | 102-116
 src/data-sources/collection/debank            |     100 |    83.33 |     100 |     100 |
  wallet-token.datasource.ts                   |     100 |      100 |     100 |     100 |
  wallet-token.protocol.datasource.ts          |     100 |    66.66 |     100 |     100 | 165
  wallet.datasource.ts                         |     100 |      100 |     100 |     100 |
 src/data-sources/collection/giant-squid/stats |      95 |        0 |     100 |      95 |
  wallet-token.datasource.ts                   |      95 |        0 |     100 |      95 | 98
 src/data-sources/collection/rpc               |     100 |      100 |     100 |     100 |
  erc20.datasource.ts                          |     100 |      100 |     100 |     100 |
 src/data-sources/entities                     |     100 |      100 |     100 |     100 |
  data-source.entity.ts                        |     100 |      100 |     100 |     100 |
 src/data-sources/services/data-source         |   74.19 |       50 |      50 |   73.33 |
  data-source.service.ts                       |   74.19 |       50 |      50 |   73.33 | 57-61,80-91
 src/datashapes                                |     100 |      100 |     100 |     100 |
  distribution.datashape.ts                    |     100 |      100 |     100 |     100 |
  single-metric.datashape.ts                   |     100 |      100 |     100 |     100 |
 src/entities                                  |     100 |      100 |     100 |     100 |
  const.ts                                     |     100 |      100 |     100 |     100 |
  protocol.entity.ts                           |     100 |      100 |     100 |     100 |
  token.entity.ts                              |     100 |      100 |     100 |     100 |
  wallet-token.entity.ts                       |     100 |      100 |     100 |     100 |
  wallet.entity.ts                             |     100 |      100 |     100 |     100 |
 src/mappers                                   |   94.73 |      100 |   85.71 |   94.44 |
  abstract.mapper.ts                           |    92.3 |      100 |   85.71 |    92.3 | 38
  mappers.module.ts                            |     100 |      100 |     100 |     100 |
 src/mappers/collection                        |     100 |      100 |     100 |     100 |
  index.ts                                     |     100 |      100 |     100 |     100 |
 src/mappers/collection/distribution           |     100 |      100 |     100 |     100 |
  distribution.mapper.ts                       |     100 |      100 |     100 |     100 |
 src/mappers/collection/single-metric          |   85.71 |       20 |     100 |   85.71 |
  single-metric.mapper.ts                      |   85.71 |       20 |     100 |   85.71 | 89,100-103
 src/mappers/entities                          |     100 |      100 |     100 |     100 |
  mapper.entity.ts                             |     100 |      100 |     100 |     100 |
 src/mappers/services/mapper                   |      80 |    66.66 |   53.33 |   81.57 |
  mapper.service.ts                            |      80 |    66.66 |   53.33 |   81.57 | 55,120-142
 src/middlewares                               |   26.31 |      100 |   16.66 |   27.77 |
  abstract.middleware.ts                       |      60 |      100 |   33.33 |      60 | 19-23
  abstract.protocol.middleware.ts              |       0 |      100 |       0 |       0 | 1-9
  abstract.wallet-token.middleware.ts          |   66.66 |      100 |       0 |   66.66 | 9
  abstract.wallet.middleware.ts                |       0 |      100 |       0 |       0 | 1-10
  middlewares.module.ts                        |       0 |      100 |     100 |       0 | 1-10
 src/middlewares/collection                    |     100 |      100 |     100 |     100 |
  index.ts                                     |     100 |      100 |     100 |     100 |
 src/middlewares/collection/coingecko          |   16.39 |     5.55 |   16.66 |   16.66 |
  wallet-token-price.middleware.ts             |   16.39 |     5.55 |   16.66 |   16.66 | 35,48-177
 src/middlewares/entities                      |     100 |      100 |     100 |     100 |
  middleware.entity.ts                         |     100 |      100 |     100 |     100 |
 src/middlewares/services/middleware           |   64.28 |       50 |      50 |   61.53 |
  middleware.service.ts                        |   64.28 |       50 |      50 |   61.53 | 22-30
 src/mixers                                    |   63.63 |      100 |     100 |      70 |
  abstract.mixer.ts                            |     100 |      100 |     100 |     100 |
  mixers.module.ts                             |       0 |      100 |     100 |       0 | 1-8
 src/mixers/entities                           |     100 |      100 |     100 |     100 |
  mixer.entity.ts                              |     100 |      100 |     100 |     100 |
 src/mixers/services/mixer                     |     100 |      100 |     100 |     100 |
  mixer.service.ts                             |     100 |      100 |     100 |     100 |
 src/pipelines                                 |   55.85 |    33.33 |   57.14 |   55.96 |
  pipelines.controller.ts                      |   63.91 |    33.33 |   57.14 |   63.54 | ...-262,275-286,300-302,312-313
  pipelines.module.ts                          |       0 |      100 |     100 |       0 | 1-26
 src/pipelines/dto                             |     100 |      100 |     100 |     100 |
  add-data-source.dto.ts                       |     100 |      100 |     100 |     100 |
  add-mapper.dto.ts                            |     100 |      100 |     100 |     100 |
  add-widget.dto.ts                            |     100 |      100 |     100 |     100 |
  create-pipeline.dto.ts                       |     100 |      100 |     100 |     100 |
  execute-pipeline.dto.ts                      |     100 |      100 |     100 |     100 |
  patch-pipeline.dto.ts                        |     100 |      100 |     100 |     100 |
 src/pipelines/entities                        |      80 |        0 |   78.57 |   76.92 |
  pipeline.entity.ts                           |      80 |        0 |   78.57 |   76.92 | 22,71-76,101-103
 src/pipelines/services/execute-pipeline       |   94.59 |      100 |   85.71 |   94.36 |
  execute-pipeline.service.ts                  |   94.59 |      100 |   85.71 |   94.36 | 101-103,105-109
 src/pipelines/services/pipeline               |     100 |      100 |     100 |     100 |
  pipeline.service.ts                          |     100 |      100 |     100 |     100 |
 src/pipelines/services/pipeline-ability       |   35.71 |        0 |   14.28 |   30.76 |
  pipeline-ability.service.ts                  |   35.71 |        0 |   14.28 |   30.76 | 11-35
 src/users                                     |     100 |      100 |     100 |     100 |
  users.module.ts                              |     100 |      100 |     100 |     100 |
 src/users/entities                            |     100 |      100 |     100 |     100 |
  credential.entity.ts                         |     100 |      100 |     100 |     100 |
  user.entity.ts                               |     100 |      100 |     100 |     100 |
 src/users/services/user                       |   36.66 |        0 |      25 |   34.48 |
  user.service.ts                              |   36.66 |        0 |      25 |   34.48 | 19-71
 src/widgets                                   |       0 |      100 |     100 |       0 |
  widgets.module.ts                            |       0 |      100 |     100 |       0 | 1-12
 src/widgets/entities                          |     100 |      100 |     100 |     100 |
  widget.entity.ts                             |     100 |      100 |     100 |     100 |
 src/widgets/services/widget                   |     100 |      100 |     100 |     100 |
  widget.service.ts                            |     100 |      100 |     100 |     100 |
-----------------------------------------------|---------|----------|---------|---------|---------------------------------

Test Suites: 24 passed, 24 total
Tests:       129 passed, 129 total
Snapshots:   0 total
Time:        13.563 s
Ran all test suites.
```
</details>

## Back-end

The Docker container runs successfully:
```sh
docker compose up -d

[+] Running 15/15
 ✔ db 14 layers [⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                                                             13.5s
   ✔ 24e221e92a36 Pull complete                                                                                      3.5s
   ✔ 85b20a3ade36 Pull complete                                                                                      0.9s
   ✔ dfccb87eabcd Pull complete                                                                                      1.4s
   ✔ c2b36c21cfca Pull complete                                                                                      2.2s
   ✔ b6773915c6e6 Pull complete                                                                                      5.4s
   ✔ 0f1622bae22c Pull complete                                                                                      3.8s
   ✔ 1fa0f3ae7f27 Pull complete                                                                                      3.9s
   ✔ 90e24ee29327 Pull complete                                                                                      4.2s
   ✔ 5b5e3d50b597 Pull complete                                                                                     10.1s
   ✔ 0109b546d717 Pull complete                                                                                      4.6s
   ✔ 77071f9d5376 Pull complete                                                                                      5.6s
   ✔ a03caa73b840 Pull complete                                                                                      6.6s
   ✔ 70606bcdcc01 Pull complete                                                                                      6.6s
   ✔ 9911f6f158a5 Pull complete                                                                                      7.3s
[+] Running 2/2
 ✔ Network dotsight_default  Created                                                                                 0.0s
 ✔ Container dotsight-db-1   Started                                                                                 0.7s
docker ps
CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS          PORTS                    NAMES
2f6180b1d0b5   postgres:16   "docker-entrypoint.s…"   15 seconds ago   Up 14 seconds   0.0.0.0:5433->5432/tcp   dotsight-db-1
```
But still getting an error when running the first command:
```ts
npm run typeorm:run-migrations

> @fidi/dotsight@0.0.1 typeorm:run-migrations
> npm run typeorm -- migration:run -d ./typeorm.config.ts


> @fidi/dotsight@0.0.1 typeorm
> ts-node ./node_modules/typeorm/cli migration:run -d ./typeorm.config.ts

Error during migration run:
Error: getaddrinfo ENOTFOUND dotsight
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:71:26) {
  errno: -3008,
  code: 'ENOTFOUND',
  syscall: 'getaddrinfo',
  hostname: 'dotsight'
}
```
```ts
npm start

> @fidi/dotsight@0.0.1 start
> nest start

[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [NestFactory] Starting Nest application...
[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [InstanceLoader] AppModule dependencies initialized +13ms
[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [InstanceLoader] MixersModule dependencies initialized +0ms
[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [InstanceLoader] MiddlewaresModule dependencies initialized +0ms
[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [InstanceLoader] HttpModule dependencies initialized +0ms
[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [InstanceLoader] JwtModule dependencies initialized +0ms
[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +1ms
[Nest] 7404  - 12/21/2023, 2:00:34 PM   ERROR [TypeOrmModule] Unable to connect to the database. Retrying (1)...
Error: getaddrinfo ENOTFOUND dotsight
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:71:26)
[Nest] 7404  - 12/21/2023, 2:00:37 PM   ERROR [TypeOrmModule] Unable to connect to the database. Retrying (2)...
Error: getaddrinfo ENOTFOUND dotsight
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:71:26)
```
My .env file looks like this:
```
DB_HOST=dotsight
DB_PORT=5433
DB_NAME=dotsight
DB_USERNAME=dotsight
DB_PASSWORD=d0tS1gHtRul3z
JWT_SECRET=secret-jwt
SESSION_SECRET=some-secret
UI_HOST=http://localhost:3001
```
# UI

UI unit tests pass successfully:

<details>
 <summary>Output</summary>

```ts
npm run test

> my-app@0.1.0 test
> jest

(node:11260) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:11273) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:11271) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:11275) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:11272) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:11277) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:11274) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:11276) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 PASS  src/entities/pipeline/model/steps.spec.ts
 PASS  src/features/widget/ui/pieChart/hooks/widget.spec.ts
 PASS  src/features/dataSourceSelector/lib/hooks/useDataSourceOptionsForPipeline.spec.ts
 PASS  src/features/mapperSelector/lib/hooks/useOnNextStep.spec.ts
  ● Console

    console.error
      Warning: Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: an object with keys {some}.
          at TestComponent (/Users/keeganquigley/dotsight-ui/node_modules/@testing-library/react/dist/pure.js:278:5)

      28 |
      29 |   it('returns formRef', () => {
    > 30 |     const {result} = renderHook(() => useOnNextStep({
         |                                ^
      31 |       ref: {some: 'ref'} as any as Ref<any>,
      32 |       pipelineId: 'pid',
      33 |       selectedType: 'st',

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at imperativeHandleEffect (node_modules/react-dom/cjs/react-dom.development.js:17142:9)
      at commitHookEffectListMount (node_modules/react-dom/cjs/react-dom.development.js:23150:26)
      at commitLayoutEffectOnFiber (node_modules/react-dom/cjs/react-dom.development.js:23273:15)
      at commitLayoutMountEffects_complete (node_modules/react-dom/cjs/react-dom.development.js:24688:9)
      at commitLayoutEffects_begin (node_modules/react-dom/cjs/react-dom.development.js:24674:7)
      at commitLayoutEffects (node_modules/react-dom/cjs/react-dom.development.js:24612:3)
      at commitRootImpl (node_modules/react-dom/cjs/react-dom.development.js:26823:5)
      at commitRoot (node_modules/react-dom/cjs/react-dom.development.js:26682:5)
      at finishConcurrentRender (node_modules/react-dom/cjs/react-dom.development.js:25981:9)
      at performConcurrentWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:25809:7)
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:46:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:161:26)
      at render (node_modules/@testing-library/react/dist/pure.js:247:10)
      at renderHook (node_modules/@testing-library/react/dist/pure.js:289:7)
      at Object.<anonymous> (src/features/mapperSelector/lib/hooks/useOnNextStep.spec.ts:30:32)

 PASS  src/features/widgetTypeSelector/lib/hooks/useWidgetTypesForPipeline.spec.ts
 PASS  src/features/mapperSelector/lib/hooks/useMapperOptionsForPipeline.spec.ts
 PASS  src/features/mapperSelector/lib/hooks/index.spec.ts
 PASS  src/features/widget/lib/useWidgetData.spec.ts
  ● Console

    console.error
      Warning: An update to TestComponent inside a test was not wrapped in act(...).

      When testing, code that causes React state updates should be wrapped into act(...):

      act(() => {
        /* fire events that update state */
      });
      /* assert on the output */

      This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
          at TestComponent (/Users/keeganquigley/dotsight-ui/node_modules/@testing-library/react/dist/pure.js:278:5)

      52 |         dispatch(loadingAction());
      53 |         const response = await executePipeline({pipelineId, widgetIds: [widgetId], params});
    > 54 |         dispatch(dataAction(response.data[widgetId] as D));
         |         ^
      55 |       } catch (err) {
      56 |         console.error(err);
      57 |         dispatch(errorAction(err as Error));

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (node_modules/react-dom/cjs/react-dom.development.js:27589:9)
      at scheduleUpdateOnFiber (node_modules/react-dom/cjs/react-dom.development.js:25508:5)
      at dispatchReducerAction (node_modules/react-dom/cjs/react-dom.development.js:17452:7)
      at dispatch (src/features/widget/lib/useWidgetData.ts:54:9)

    console.error
      error

      54 |         dispatch(dataAction(response.data[widgetId] as D));
      55 |       } catch (err) {
    > 56 |         console.error(err);
         |                 ^
      57 |         dispatch(errorAction(err as Error));
      58 |       }
      59 |     })();

      at error (src/features/widget/lib/useWidgetData.ts:56:17)

 PASS  src/widgets/pipelinesList/ui/index.spec.tsx
 PASS  src/features/mapperSelector/lib/hooks/useMapperConfiguration.spec.ts
 PASS  src/features/widgetTypeSelector/lib/hooks/useOnNextStep.spec.ts
 PASS  src/features/dataSourceSelector/lib/hooks/index.spec.ts
 PASS  src/features/mapperSelector/lib/hooks/useRefetchSuggestions.spec.ts
 PASS  src/app/page.spec.tsx
 PASS  src/features/dataSourceSelector/lib/hooks/useDataSourceConfiguration.spec.ts
 PASS  src/entities/pipeline/model/setPipelineDataSource.spec.ts
 PASS  src/entities/pipeline/model/providers/updateName.spec.ts
 PASS  src/features/HOC/withAuth/ui/index.spec.tsx
 PASS  src/entities/pipeline/model/fetchPipelineById.spec.ts
 PASS  src/shared/lib/color.spec.ts
 PASS  src/shared/lib/unit.spec.ts
 PASS  src/features/dataSourceSelector/lib/hooks/useRefetchSuggestions.spec.ts
 PASS  src/app/pipeline/[id]/page.spec.tsx
 PASS  src/widgets/createPipeline/ui/index.spec.tsx
 PASS  src/features/mainLayout/ui/index.spec.tsx
 PASS  src/app/layout.spec.tsx
  ● Console

    console.error
      Warning: validateDOMNesting(...): <html> cannot appear as a child of <div>.
          at html
          at children (/Users/keeganquigley/dotsight-ui/src/app/layout.tsx:9:3)

      15 | describe('RootLayout', () => {
      16 |   it('renders children wrapped in the Providers', () => {
    > 17 |     render(<RootLayout><div>My test</div></RootLayout>);
         |           ^
      18 |
      19 |     const provider = screen.getByTestId('providers');
      20 |     expect(provider).toBeInTheDocument();

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at validateDOMNesting (node_modules/react-dom/cjs/react-dom.development.js:10847:7)
      at createInstance (node_modules/react-dom/cjs/react-dom.development.js:10930:5)
      at completeWork (node_modules/react-dom/cjs/react-dom.development.js:22187:28)
      at completeUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26593:16)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26568:5)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:26466:5)
      at renderRootSync (node_modules/react-dom/cjs/react-dom.development.js:26434:7)
      at performConcurrentWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:25738:74)
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:46:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:161:26)
      at render (node_modules/@testing-library/react/dist/pure.js:247:10)
      at Object.<anonymous> (src/app/layout.spec.tsx:17:11)


Test Suites: 26 passed, 26 total
Tests:       61 passed, 61 total
Snapshots:   0 total
Time:        2.242 s
Ran all test suites.
```
</details>

App starts successfully:
```ts
npm run build

> my-app@0.1.0 build
> next build

(node:9491) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 ✓ Creating an optimized production build
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
   Collecting page data  ..(node:9533) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9532) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9540) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9544) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9542) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9543) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9541) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 ✓ Collecting page data
   Generating static pages (0/6)  [    ](node:9546) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9535) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9545) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9545) ExperimentalWarning: buffer.Blob is an experimental feature. This feature could change at any time
(node:9534) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 ✓ Generating static pages (6/6)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    1.14 kB         132 kB
├ ○ /_not-found                          885 B          81.6 kB
├ ○ /login                               8 kB           88.7 kB
└ λ /pipeline/[id]                       351 kB          482 kB
+ First Load JS shared by all            80.7 kB
  ├ chunks/864-38e210505956e733.js       27.6 kB
  ├ chunks/fd9d1056-24a81e82ede0df4d.js  51 kB
  ├ chunks/main-app-4b29246d184fa03c.js  240 B
  └ chunks/webpack-14ce02176bb4ae81.js   1.91 kB


λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
```
```ts
npm start

> my-app@0.1.0 start
> next start -p 3001

(node:9732) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
  ▲ Next.js 13.5.4
  - Local:        http://localhost:3001

 ✓ Ready in 108ms
```
