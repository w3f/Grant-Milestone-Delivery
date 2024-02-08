# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/fidi-dotsight-analytics.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight/blob/main/LICENSE) | 
| **0b.** | Documentation | <ul><li>[x] </li></ul> |[LINK](https://github.com/fidi-tech/dotsight/blob/main/README.md) [Documentation](https://docs.fidi.tech/)| Well written docs. |
| **0c.** | Testing | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight/blob/12280b45f5f1ddd855d6b91eaee4abbf1916f534/src/data-sources/collection/debank/wallet.datasource.spec.ts#L5) |  Tests all passing.
| **1a.** | GiantSquid data funneling | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight/blob/12280b45f5f1ddd855d6b91eaee4abbf1916f534/src/data-sources/collection/giant-squid/stats/wallet-token.datasource.ts#L22) [USAGE](https://github.com/fidi-tech/dotsight/blob/main/README.md#sample-pipeline-subsquid-sourced) | All working as expected.
| **1b.** | Data Aggregation module | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight/tree/12280b45f5f1ddd855d6b91eaee4abbf1916f534/src/pipelines/services/pipeline/config) [USAGE](https://github.com/fidi-tech/dotsight/blob/main/README.md#pipeline-creation) |  
| **1c.** | Off-chain sourced addresses support | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight/blob/main/src/middlewares/collection/coingecko/wallet-token-price.middleware.ts) See also [Middleware](https://github.com/fidi-tech/dotsight/blob/main/README.md#middlewares) |
| **2a.** | Data Interface for developers | <ul><li>[x] </li></ul> |[LINK](https://github.com/fidi-tech/dotsight/tree/main#contributing) |
| **2b.** | Schema mapping and morphing | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight/blob/main/src/mappers/abstract.mapper.ts) Done by the corresponding [mappers](https://github.com/fidi-tech/dotsight/blob/main/README.md#mappers). |
| **2c.** | Data interface: view construction | <ul><li>[x] </li></ul> | n/a | |
| **2d.** | Data interface: Deployment | <ul><li>[x] </li></ul> | n/a | |
| **3a.** | Dashboards: Default Analytical Views | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight/blob/12280b45f5f1ddd855d6b91eaee4abbf1916f534/src/data-sources/collection/giant-squid/stats/wallet-token.datasource.ts#L22) [USAGE](https://github.com/fidi-tech/dotsight/blob/main/README.md#sample-pipeline-subsquid-sourced)  | 
| **3b.** | Dashboards: Advanced Staking View | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight/blob/12280b45f5f1ddd855d6b91eaee4abbf1916f534/src/data-sources/collection/giant-squid/stats/wallet-token.datasource.ts#L22) [USAGE](https://github.com/fidi-tech/dotsight/blob/main/README.md#sample-pipeline-subsquid-sourced) |  |
| **4a.** | Lighthouse use cases: Squids for Wallet-specific metrics | <ul><li>[x] </li></ul> |  [LINK](https://github.com/fidi-tech/dotsight/blob/12280b45f5f1ddd855d6b91eaee4abbf1916f534/src/data-sources/collection/giant-squid/stats/wallet-token.datasource.ts#L22) [USAGE](https://github.com/fidi-tech/dotsight/blob/main/README.md#sample-pipeline-subsquid-sourced) |   | 
| **4b.** | Lighthouse use cases: Squids for dApp-specific metrics | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight/blob/12280b45f5f1ddd855d6b91eaee4abbf1916f534/src/data-sources/collection/giant-squid/stats/wallet-token.datasource.ts#L22) [USAGE](https://github.com/fidi-tech/dotsight/blob/main/README.md#sample-pipeline-subsquid-sourced)  |   |
| **4c.** | Lighthouse use cases: customized dApp views | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight/blob/12280b45f5f1ddd855d6b91eaee4abbf1916f534/src/data-sources/collection/giant-squid/stats/wallet-token.datasource.ts#L22) [USAGE](https://github.com/fidi-tech/dotsight/blob/main/README.md#sample-pipeline-subsquid-sourced) |  |

# General Notes

Thank you for the robust documentation! CLI application is working nicely. I'm able to use curl to display the query results for the pre-defined pipelines:
```sh
curl "localhost:3000/pipelines/polkadot-coin/execute?mapperIds[]=dot-value-distribution&walletIds[]=16ZL8yLyXv3V3L3z9ofR1ovFLziyXaN1DPq4yffMAZ9czzBD&walletIds"
{"dot-value-distribution":{"items":[{"id":"16ZL8yLyXv3V3L3z9ofR1ovFLziyXaN1DPq4yffMAZ9czzBD-DOT","name":"16ZL8yLyXv3V3L3z9ofR1ovFLziyXaN1DPq4yffMAZ9czzBD","value":{"usd":245301175.01310474}}]}}%                                                  
curl "localhost:3000/pipelines/polkadot-coin/execute?mapperIds[]=dot-value-distribution&walletIds[]=16ZL8yLyXv3V3L3z9ofR1ovFLziyXaN1DPq4yffMAZ9czzBD&walletIds[]=12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW&currencies[]=eth&currencies[]=usd"
{"dot-value-distribution":{"items":[{"id":"12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW-DOT","name":"12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW","value":{"eth":98579.6938809727,"usd":161788639.5382557}},{"id":"16ZL8yLyXv3V3L3z9ofR1ovFLziyXaN1DPq4yffMAZ9czzBD-DOT","name":"16ZL8yLyXv3V3L3z9ofR1ovFLziyXaN1DPq4yffMAZ9czzBD","value":{"eth":149464.8500070791,"usd":245301175.01310474}}]}}%
```
Code is clean but could perhaps use more inline comments.

<details>

  <summary>Coingecko Middleware Example</summary>

  ```ts
[CoingeckoWalletTokenPriceMiddleware][Request] GET https://api.coingecko.com/coins/list
[CoingeckoWalletTokenPriceMiddleware][Response] GET https://api.coingecko.com/coins/list 200:OK
[CoingeckoWalletTokenPriceMiddleware][Request] GET https://api.coingecko.com/simple/price
[CoingeckoWalletTokenPriceMiddleware][Response] GET https://api.coingecko.com/simple/price 200:OK
[CoingeckoWalletTokenPriceMiddleware][Request] GET https://api.coingecko.com/coins/list
[CoingeckoWalletTokenPriceMiddleware][Response] GET https://api.coingecko.com/coins/list 200:OK
[CoingeckoWalletTokenPriceMiddleware][Request] GET https://api.coingecko.com/simple/price
[CoingeckoWalletTokenPriceMiddleware][Response] GET https://api.coingecko.com/simple/price 200:OK
[CoingeckoWalletTokenPriceMiddleware][Request] GET https://api.coingecko.com/coins/list
[CoingeckoWalletTokenPriceMiddleware][Response] GET https://api.coingecko.com/coins/list 200:OK
[CoingeckoWalletTokenPriceMiddleware][Request] GET https://api.coingecko.com/simple/price
[CoingeckoWalletTokenPriceMiddleware][Response] GET https://api.coingecko.com/simple/price 200:OK
[CoingeckoWalletTokenPriceMiddleware][Request] GET https://api.coingecko.com/coins/list
[CoingeckoWalletTokenPriceMiddleware][Response] GET https://api.coingecko.com/coins/list 200:OK
[CoingeckoWalletTokenPriceMiddleware][Request] GET https://api.coingecko.com/simple/price
[CoingeckoWalletTokenPriceMiddleware][Response] GET https://api.coingecko.com/simple/price 200:OK
```
</details>

<details>
  
  <summary>Unit tests are passing:</summary>

  ```ts
 PASS  src/data-sources/collection/debank/wallet-token.datasource.spec.ts
 PASS  src/data-sources/collection/debank/wallet-token.protocol.datasource.spec.ts
 PASS  src/data-sources/collection/dapp-radar/protocol.datasource.spec.ts
 PASS  src/data-sources/collection/debank/wallet.datasource.spec.ts
 PASS  src/data-sources/collection/giant-squid/stats/wallet-token.datasource.spec.ts
 PASS  src/mappers/collection/distribution/distribution.mapper.spec.ts
 PASS  src/pipelines/services/execute-pipeline/execute-pipeline.service.spec.ts (5.865 s)
 PASS  src/middlewares/services/middleware/middleware.service.spec.ts
 PASS  src/pipelines/services/pipeline/pipeline.service.spec.ts
 PASS  src/pipelines/pipelines.controller.spec.ts
 PASS  src/mappers/abstract.mapper.spec.ts
 PASS  src/mappers/services/mapper/mapper.service.spec.ts
 PASS  src/mixers/abstract.mixer.spec.ts
 PASS  src/data-sources/services/data-source/data-source.service.spec.ts
 PASS  src/mixers/services/mixer/mixer.service.spec.ts

Test Suites: 15 passed, 15 total
Tests:       49 passed, 49 total
Snapshots:   0 total
Time:        7.284 s
Ran all test suites.
ubuntu@ip-172-31-18-129:~/dotsight$ 
```
</details>

<details>

  <summary>Good test coverage:</summary>
  
```ts
  -----------------------------------------------|---------|----------|---------|---------|-------------------
File                                           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------------------------------|---------|----------|---------|---------|-------------------
All files                                      |   74.88 |    47.72 |   83.33 |    75.5 |
 src                                           |       0 |      100 |       0 |       0 |
  app.module.ts                                |       0 |      100 |     100 |       0 | 1-7
  main.ts                                      |       0 |      100 |       0 |       0 | 1-24
 src/common                                    |      60 |      100 |      20 |   55.55 |
  currecies.ts                                 |     100 |      100 |     100 |     100 |
  http.ts                                      |   55.55 |      100 |      20 |      50 | 8-13,19-24
 src/data-sources                              |   66.66 |      100 |     100 |   72.72 |
  abstract.data-source.ts                      |     100 |      100 |     100 |     100 |
  abstract.protocol.data-source.ts             |     100 |      100 |     100 |     100 |
  abstract.wallet-token.data-source.ts         |     100 |      100 |     100 |     100 |
  abstract.wallet.data-source.ts               |     100 |      100 |     100 |     100 |
  data-sources.module.ts                       |       0 |      100 |     100 |       0 | 1-8
 src/data-sources/collection                   |     100 |      100 |     100 |     100 |
  index.ts                                     |     100 |      100 |     100 |     100 |
 src/data-sources/collection/dapp-radar        |     100 |       50 |     100 |     100 |
  protocol.datasource.ts                       |     100 |       50 |     100 |     100 | 70-84
 src/data-sources/collection/debank            |     100 |    83.33 |     100 |     100 |
  wallet-token.datasource.ts                   |     100 |      100 |     100 |     100 |
  wallet-token.protocol.datasource.ts          |     100 |    66.66 |     100 |     100 | 139
  wallet.datasource.ts                         |     100 |      100 |     100 |     100 |
 src/data-sources/collection/giant-squid/stats |     100 |      100 |     100 |     100 |
  wallet-token.datasource.ts                   |     100 |      100 |     100 |     100 |
 src/data-sources/entities                     |     100 |      100 |     100 |     100 |
  data-source.entity.ts                        |     100 |      100 |     100 |     100 |
 src/data-sources/services/data-source         |     100 |      100 |     100 |     100 |
  data-source.service.ts                       |     100 |      100 |     100 |     100 |
 src/mappers                                   |   42.85 |      100 |     100 |      50 |
  abstract.mapper.ts                           |     100 |      100 |     100 |     100 |
  mappers.module.ts                            |       0 |      100 |     100 |       0 | 1-8
 src/mappers/collection                        |     100 |      100 |     100 |     100 |
  index.ts                                     |     100 |      100 |     100 |     100 |
 src/mappers/collection/distribution           |     100 |      100 |     100 |     100 |
  distribution.mapper.ts                       |     100 |      100 |     100 |     100 |
 src/mappers/entities                          |     100 |      100 |     100 |     100 |
  mapper.entity.ts                             |     100 |      100 |     100 |     100 |
 src/mappers/services/mapper                   |     100 |      100 |     100 |     100 |
  mapper.service.ts                            |     100 |      100 |     100 |     100 |
 src/middlewares                               |   30.76 |      100 |     100 |   33.33 |
  abstract.middleware.ts                       |     100 |      100 |     100 |     100 |
  abstract.protocol.middleware.ts              |       0 |      100 |     100 |       0 | 1-4
  abstract.wallet-token.middleware.ts          |     100 |      100 |     100 |     100 |
  abstract.wallet.middleware.ts                |       0 |      100 |     100 |       0 | 1-4
  middlewares.module.ts                        |       0 |      100 |     100 |       0 | 1-10
 src/middlewares/collection                    |     100 |      100 |     100 |     100 |
  index.ts                                     |     100 |      100 |     100 |     100 |
 src/middlewares/collection/coingecko          |   16.39 |     5.55 |   16.66 |   16.66 |
  wallet-token-price.middleware.ts             |   16.39 |     5.55 |   16.66 |   16.66 | 35,48-177
 src/middlewares/entities                      |     100 |      100 |     100 |     100 |
  middleware.entity.ts                         |     100 |      100 |     100 |     100 |
 src/middlewares/services/middleware           |     100 |      100 |     100 |     100 |
  middleware.service.ts                        |     100 |      100 |     100 |     100 |
 src/mixers                                    |   63.63 |      100 |     100 |      70 |
  abstract.mixer.ts                            |     100 |      100 |     100 |     100 |
  mixers.module.ts                             |       0 |      100 |     100 |       0 | 1-8
 src/mixers/entities                           |     100 |      100 |     100 |     100 |
  mixer.entity.ts                              |     100 |      100 |     100 |     100 |
 src/mixers/services/mixer                     |     100 |      100 |     100 |     100 |
  mixer.service.ts                             |     100 |      100 |     100 |     100 |
 src/pipelines                                 |   44.44 |      100 |     100 |   43.75 |
  pipelines.controller.ts                      |     100 |      100 |     100 |     100 |
  pipelines.module.ts                          |       0 |      100 |     100 |       0 | 1-15
 src/pipelines/dto                             |     100 |      100 |     100 |     100 |
  execute-pipeline.dto.ts                      |     100 |      100 |     100 |     100 |
 src/pipelines/entities                        |     100 |      100 |     100 |     100 |
  pipeline.entity.ts                           |     100 |      100 |     100 |     100 |
 src/pipelines/services/execute-pipeline       |   95.74 |      100 |     100 |   95.45 |
  execute-pipeline.service.ts                  |   95.74 |      100 |     100 |   95.45 | 94-98
 src/pipelines/services/pipeline               |     100 |      100 |     100 |     100 |
  pipeline.service.ts                          |     100 |      100 |     100 |     100 |
 src/pipelines/services/pipeline/config        |   88.88 |        0 |     100 |   88.88 |
  debank.pipeline.config.ts                    |     100 |      100 |     100 |     100 |
  pipeline.config.ts                           |   85.71 |        0 |     100 |   85.71 | 7
  polkadot.pipeline.config.ts                  |     100 |      100 |     100 |     100 |
-----------------------------------------------|---------|----------|---------|---------|-------------------

Test Suites: 15 passed, 15 total
Tests:       49 passed, 49 total
Snapshots:   0 total
Time:        7.32 s
Ran all test suites.
```
</details>

<details>

  <summary>App starts successfully:</summary>

```ts
> @fidi/dotsight@0.0.1 start
> nest start

[Nest] 5405  - 09/15/2023, 3:23:26 PM     LOG [NestFactory] Starting Nest application...
[Nest] 5405  - 09/15/2023, 3:23:26 PM     LOG [InstanceLoader] AppModule dependencies initialized +6ms
[Nest] 5405  - 09/15/2023, 3:23:26 PM     LOG [InstanceLoader] MappersModule dependencies initialized +0ms
[Nest] 5405  - 09/15/2023, 3:23:26 PM     LOG [InstanceLoader] DataSourcesModule dependencies initialized +0ms
[Nest] 5405  - 09/15/2023, 3:23:26 PM     LOG [InstanceLoader] MixersModule dependencies initialized +0ms
[Nest] 5405  - 09/15/2023, 3:23:26 PM     LOG [InstanceLoader] MiddlewaresModule dependencies initialized +0ms
[Nest] 5405  - 09/15/2023, 3:23:26 PM     LOG [InstanceLoader] HttpModule dependencies initialized +0ms
[Nest] 5405  - 09/15/2023, 3:23:26 PM     LOG [InstanceLoader] PipelinesModule dependencies initialized +0ms
[Nest] 5405  - 09/15/2023, 3:23:26 PM     LOG [RoutesResolver] PipelinesController {/pipelines}: +13ms
[Nest] 5405  - 09/15/2023, 3:23:26 PM     LOG [RouterExplorer] Mapped {/pipelines/:pipelineId/execute, GET} route +1ms
[Nest] 5405  - 09/15/2023, 3:23:26 PM     LOG [NestApplication] Nest application successfully started +1ms
```
</details>
