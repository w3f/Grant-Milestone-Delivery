# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ocelloids_xcm_monitoring_service.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/sodazone/xcm-monitoring/blob/910ee7f37cd19e41a3b3f57e82f4dffb10588a94/LICENSE) | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/sodazone/xcm-monitoring/blob/910ee7f37cd19e41a3b3f57e82f4dffb10588a94/README.md), [ADMINISTRATION](https://github.com/sodazone/xcm-monitoring/blob/910ee7f37cd19e41a3b3f57e82f4dffb10588a94/guides/ADMINISTRATION.md), [SUBSCRIPTION](https://github.com/sodazone/xcm-monitoring/blob/910ee7f37cd19e41a3b3f57e82f4dffb10588a94/guides/SUBSCRIPTION.md) | — |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/sodazone/xcm-monitoring/blob/910ee7f37cd19e41a3b3f57e82f4dffb10588a94/README.md#testing) | Good coverage |
| **0d.** | Docker        | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/sodazone/xcm-monitoring/blob/910ee7f37cd19e41a3b3f57e82f4dffb10588a94/Dockerfile) | See also https://hub.docker.com/r/sodazone/xcm-monitoring |
| 1. | XCM Monitoring Service | <ul><li>[x] </li></ul> | [sodazone/xcm-monitoring](https://github.com/sodazone/xcm-monitoring/tree/910ee7f37cd19e41a3b3f57e82f4dffb10588a94) | — |
| 2. | Management Tools | <ul><li>[x] </li></ul> | [src/services/admin](https://github.com/sodazone/xcm-monitoring/tree/910ee7f37cd19e41a3b3f57e82f4dffb10588a94/src/services/admin) | See also [ADMINISTRATION.md](https://github.com/sodazone/xcm-monitoring/blob/910ee7f37cd19e41a3b3f57e82f4dffb10588a94/guides/ADMINISTRATION.md) |


## General Notes

### `npm run test` output

```sh
> xcm-monitoring@1.0.0 test
> NODE_OPTIONS="--experimental-vm-modules --no-warnings" npx jest

 PASS  src/services/persistence/janitor.spec.ts (7.973 s)
 PASS  src/services/persistence/subs.spec.ts
 PASS  src/services/notification/webhook.spec.ts (10.815 s)
 PASS  src/services/networking/connector.spec.ts (15.678 s)
 PASS  src/services/persistence/scheduler.spec.ts
 PASS  src/services/monitoring/switchboard.spec.ts (16.806 s)
 PASS  src/services/monitoring/matching.spec.ts
 PASS  src/services/monitoring/head-catcher.spec.ts (19.858 s)
 PASS  src/services/monitoring/ops/xcmp.spec.ts (11.586 s)
 PASS  src/services/monitoring/ops/dmp.spec.ts (20.641 s)
 PASS  src/services/monitoring/ops/ump.spec.ts (10.326 s)
 PASS  src/server.spec.ts (23.724 s)
-----------------------------|---------|----------|---------|---------|-------------------------
File                         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s       
-----------------------------|---------|----------|---------|---------|-------------------------
All files                    |    95.1 |     88.8 |   94.29 |      95 |                         
 src                         |     100 |      100 |     100 |     100 |                         
  environment.ts             |     100 |      100 |     100 |     100 |                         
  errors.ts                  |     100 |      100 |     100 |     100 |                         
  server.ts                  |     100 |      100 |     100 |     100 |                         
 src/services                |     100 |      100 |     100 |     100 |                         
  auth.ts                    |     100 |      100 |     100 |     100 |                         
  config.ts                  |     100 |      100 |     100 |     100 |                         
  root.ts                    |     100 |      100 |     100 |     100 |                         
  types.ts                   |     100 |      100 |     100 |     100 |                         
 src/services/admin          |   89.47 |      100 |   83.33 |   89.47 |                         
  routes.ts                  |   89.47 |      100 |   83.33 |   89.47 | 81-82,88-89             
 src/services/monitoring     |   95.96 |    91.42 |    92.2 |   95.83 |                         
  head-catcher.ts            |   96.94 |       85 |   93.75 |   96.87 | 128,156,339,452         
  matching.ts                |   94.33 |      100 |     100 |   94.33 | 106-115                 
  plugin.ts                  |     100 |      100 |     100 |     100 |                         
  switchboard.ts             |    94.4 |      100 |   89.65 |   93.96 | 120,216,263,324-327,492 
  types.ts                   |   98.21 |      100 |   85.71 |   98.21 | 75                      
 src/services/monitoring/api |   97.67 |      100 |      90 |   97.56 |                         
  routes.ts                  |   97.67 |      100 |      90 |   97.56 | 44                      
 src/services/monitoring/ops |   92.62 |    88.88 |   98.21 |    92.5 |                         
  criteria.ts                |     100 |      100 |     100 |     100 |                         
  dmp.ts                     |   86.44 |     90.9 |   94.44 |   86.44 | 123,165-173,216-219     
  ump.ts                     |     100 |      100 |     100 |     100 |                         
  util.ts                    |     100 |       50 |     100 |     100 | 13                      
  xcmp.ts                    |   96.29 |       75 |     100 |   96.29 | 134                     
 src/services/networking     |   94.02 |       75 |     100 |   93.84 |                         
  connector.ts               |   93.44 |       75 |     100 |   93.33 | 36,82,121,138           
  plugin.ts                  |     100 |      100 |     100 |     100 |                         
 src/services/notification   |   89.74 |    81.81 |     100 |   89.74 |                         
  hub.ts                     |      80 |      100 |     100 |      80 | 30                      
  log.ts                     |     100 |      100 |     100 |     100 |                         
  webhook.ts                 |   90.32 |    81.81 |     100 |   90.32 | 81-82,117               
 src/services/persistence    |   95.59 |    88.23 |   91.89 |   95.56 |                         
  janitor.ts                 |     100 |      100 |     100 |     100 |                         
  plugin.ts                  |   94.44 |      100 |      80 |   94.44 | 52                      
  scheduler.ts               |   93.33 |      100 |    90.9 |   93.18 | 92,117,134              
  subs.ts                    |   96.47 |    77.77 |   94.44 |   96.47 | 176-181                 
-----------------------------|---------|----------|---------|---------|-------------------------

Test Suites: 12 passed, 12 total
Tests:       81 passed, 81 total
Snapshots:   0 total
Time:        24.86 s
Ran all test suites.
```
