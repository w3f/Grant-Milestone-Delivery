# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/fidi-dotsight-analytics.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0. | Apache License 2.0 | <ul><li>[ ] </li></ul> | [fidi-tech/dotsight](https://github.com/fidi-tech/dotsight/blob/c5aa6c5b043693be3829a542bd38474a292a76f3/LICENSE), [fidi-tech/dotsight-ui](https://github.com/fidi-tech/dotsight-ui/blob/3e9f8efdeb15d0c80f0caff112e9a7a2df09f7f9/LICENSE) | Apache License 2.0 |
| **0b.** | Documentation | <ul><li>[ ] </li></ul> | [docs.fidi.tech](https://docs.fidi.tech/fidi-overview/fidi-analytics-portal) | We will provide documentation on every supported metrics class and an educational tutorial explaining the typical way to interpret the data, navigate the developer UI, specify the required metadata, deploy a data interface configuration, and select the desired dashboard. |
| **0c.** | Testing | <ul><li>[ ] </li></ul> | link | Core functions will be fully covered by a unit and integration tests suite to ensure robustness, deployment, and serving times. |
| **1a.** | dApp-level signals: collator metrics | <ul><li>[ ] </li></ul> | link | We will generalize prior work from Milestone 1 to span collator/nominator activity and make metrics such as uptime, block production rate, block processing time, rank/nominator rank, name, and value locked available in the views. For 1a-2a, the respective GraphQL squid query and GiantSquid's code are also in scope; the UI components will be written in React + Typescript, and the backend code in Typescript + Nest + PGSQL.|
| **1b.** | dApp-level signals: user activity | Additionally, the dApp-specific user activity metrics will be surfaced, e.g., UAW, net new wallets,  historical transactions, volume, and balance per dApp. Respective squid query and GS code are also in scope. |
| **2a.** | Network-level signals | <ul><li>[ ] </li></ul> | link | We will generalize prior work from Milestone 1 to span L1-level metrics and activity made available in the developer UI, e.g., UAW per network, number of new wallets, adoption rates, unstaked tokens currently in wallets, tokens in circulation, and tokens staked or locked. Respective squid query and GS code are also in scope. |
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —


### `npm run test:cov` output

```sh
> npm run test:cov

> @fidi/dotsight@0.0.1 test:cov
> jest --coverage

 PASS  src/data-sources/collection/dapp-radar/dapp.datasource.spec.ts (14.364 s)
 PASS  src/data-sources/collection/bigquery-public-data/network.datasource.spec.ts (14.446 s)
 PASS  src/common/math.spec.ts
 PASS  src/data-sources/collection/debank/wallet-nft.datasource.spec.ts (16.682 s)
 PASS  src/data-sources/collection/debank/wallet.datasource.spec.ts (16.71 s)
 PASS  src/data-sources/collection/debank/wallet-token.datasource.spec.ts (16.771 s)
 PASS  src/users/services/user/user.service.spec.ts
 PASS  src/auth/services/auth/auth.service.spec.ts
 PASS  src/auth/auth.controller.spec.ts (19.082 s)
 PASS  src/widgets/widget.controller.spec.ts (23.872 s)
------------------------------------------------------|---------|----------|---------|---------|-----------------------------
File                                                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s           
------------------------------------------------------|---------|----------|---------|---------|-----------------------------
All files                                             |   45.81 |     9.69 |   22.39 |   45.05 |                             
 src                                                  |       0 |      100 |       0 |       0 |                             
  app.module.ts                                       |       0 |      100 |     100 |       0 | 1-24                        
  main.ts                                             |       0 |      100 |       0 |       0 | 1-41                        
 src/auth                                             |   34.61 |        0 |      25 |   34.69 |                             
  auth.controller.dev.ts                              |       0 |      100 |       0 |       0 | 1-53                        
  auth.controller.ts                                  |   94.73 |      100 |      50 |   94.44 | 47                          
  auth.module.ts                                      |       0 |        0 |     100 |       0 | 1-27                        
 src/auth/decorators                                  |      50 |      100 |       0 |      50 |                             
  authId.decorator.ts                                 |      50 |      100 |       0 |      50 | 4-5                         
 src/auth/guards                                      |   67.85 |        0 |      50 |    62.5 |                             
  github.guard.ts                                     |     100 |      100 |     100 |     100 |                             
  google.guard.ts                                     |     100 |      100 |     100 |     100 |                             
  jwt.guard.ts                                        |   43.75 |        0 |      50 |      40 | 17-30                       
  twitter.guard.ts                                    |     100 |      100 |     100 |     100 |                             
 src/auth/services/auth                               |      55 |        0 |      20 |   52.63 |                             
  auth.service.ts                                     |      55 |        0 |      20 |   52.63 | 23-55                       
 src/auth/strategies                                  |       0 |        0 |       0 |       0 |                             
  github.strategy.ts                                  |       0 |        0 |       0 |       0 | 1-33                        
  google-oidc.strategy.ts                             |       0 |        0 |       0 |       0 | 1-28                        
  twitter.strategy.ts                                 |       0 |        0 |       0 |       0 | 1-33                        
 src/categories                                       |       0 |      100 |       0 |       0 |                             
  categories.controller.ts                            |       0 |      100 |       0 |       0 | 1-28                        
  categories.module.ts                                |       0 |      100 |     100 |       0 | 1-10                        
 src/categories/dto                                   |       0 |      100 |     100 |       0 |                             
  category.dto.ts                                     |       0 |      100 |     100 |       0 | 2-19                        
 src/categories/services                              |      20 |        0 |       0 |   16.66 |                             
  categories.service.ts                               |      20 |        0 |       0 |   16.66 | 12-52                       
 src/common                                           |   85.45 |      100 |   44.44 |      84 |                             
  csv.ts                                              |     100 |      100 |     100 |     100 |                             
  currecies.ts                                        |     100 |      100 |     100 |     100 |                             
  http.ts                                             |   33.33 |      100 |       0 |      25 | 5-24                        
  math.ts                                             |     100 |      100 |     100 |     100 |                             
  regexp.ts                                           |       0 |      100 |     100 |       0 | 1-4                         
 src/common/categories                                |   44.44 |        0 |      20 |   41.17 |                             
  abstract.category.ts                                |   44.44 |        0 |      20 |   41.17 | 53-71                       
 src/common/categories/collection                     |     100 |      100 |     100 |     100 |                             
  index.ts                                            |     100 |      100 |     100 |     100 |                             
 src/common/categories/collection/network             |   45.45 |        0 |      20 |   45.45 |                             
  dapps.ts                                            |     100 |      100 |     100 |     100 |                             
  metrics.ts                                          |     100 |      100 |     100 |     100 |                             
  network.category.ts                                 |   36.84 |        0 |      20 |   36.84 | 21,29-60                    
  networks.ts                                         |     100 |      100 |     100 |     100 |                             
 src/common/categories/collection/token               |      40 |        0 |      20 |      40 |                             
  metrics.ts                                          |     100 |      100 |     100 |     100 |                             
  token.category.ts                                   |   33.33 |        0 |      20 |   33.33 | 20,28-59                    
  tokens.ts                                           |     100 |      100 |     100 |     100 |                             
 src/common/categories/collection/wallet              |    55.1 |        0 |   13.33 |   46.34 |                             
  metrics.ts                                          |     100 |      100 |     100 |     100 |                             
  presets.ts                                          |     100 |      100 |     100 |     100 |                             
  validators.ts                                       |   58.06 |        0 |       0 |   43.47 | 5,7-10,14,16,18,20-24,29,37 
  wallet.category.ts                                  |   43.75 |        0 |   28.57 |   43.75 | 20,28-47                    
 src/common/spec                                      |     100 |      100 |     100 |     100 |                             
  db.ts                                               |     100 |      100 |     100 |     100 |                             
 src/data-sources                                     |   58.06 |      100 |      10 |      60 |                             
  abstract.data-source.ts                             |      60 |      100 |   14.28 |      60 | 97-121                      
  abstract.network.data-source.ts                     |      75 |      100 |       0 |      75 | 18                          
  abstract.token.data-source.ts                       |      75 |      100 |       0 |      75 | 18                          
  abstract.wallet.data-source.ts                      |      75 |      100 |       0 |      75 | 18                          
  data-sources.module.ts                              |       0 |      100 |     100 |       0 | 1-8                         
 src/data-sources/collection                          |     100 |      100 |     100 |     100 |                             
  index.ts                                            |     100 |      100 |     100 |     100 |                             
 src/data-sources/collection/bigquery-public-data     |      85 |      100 |      70 |   83.78 |                             
  const.ts                                            |     100 |      100 |     100 |     100 |                             
  network.datasource.ts                               |   81.81 |      100 |   66.66 |   81.81 | 30-42,151-157               
  queries.ts                                          |     100 |      100 |     100 |     100 |                             
 src/data-sources/collection/chainlink                |   15.27 |        0 |       0 |   15.49 |                             
  abi.ts                                              |     100 |      100 |     100 |     100 |                             
  token.datasource.ts                                 |   14.08 |        0 |       0 |   14.28 | 39-239                      
 src/data-sources/collection/chainlink/ethereum       |   57.14 |      100 |       0 |   66.66 |                             
  config.ts                                           |     100 |      100 |     100 |     100 |                             
  token.datasource.ts                                 |      50 |      100 |       0 |      60 | 10-14                       
 src/data-sources/collection/chainlink/moonbeam       |   57.14 |      100 |       0 |   66.66 |                             
  config.ts                                           |     100 |      100 |     100 |     100 |                             
  token.datasource.ts                                 |      50 |      100 |       0 |      60 | 10-14                       
 src/data-sources/collection/dapp-radar               |   80.48 |       40 |   53.84 |      80 |                             
  dapp.datasource.ts                                  |   80.48 |       40 |   53.84 |      80 | 52-64,99,106,183-189        
 src/data-sources/collection/debank                   |      70 |       75 |   37.14 |   73.68 |                             
  wallet-nft.datasource.ts                            |   69.56 |      100 |   41.66 |   72.72 | 25-37,99-107                
  wallet-token.datasource.ts                          |   70.96 |       50 |   36.36 |   73.33 | 41-53,123-125,159-167       
  wallet.datasource.ts                                |   69.23 |      100 |   33.33 |      75 | 22-34,118-126               
 src/data-sources/collection/parity/active-addresses  |   20.58 |        0 |       0 |   21.21 |                             
  network.datasource.ts                               |   20.58 |        0 |       0 |   21.21 | 31-103                      
 src/data-sources/collection/parity/polkadot-treasury |   20.58 |        0 |       0 |   21.21 |                             
  network.datasource.ts                               |   20.58 |        0 |       0 |   21.21 | 31-103                      
 src/data-sources/collection/parity/transactions      |   20.58 |        0 |       0 |   21.21 |                             
  network.datasource.ts                               |   20.58 |        0 |       0 |   21.21 | 31-103                      
 src/data-sources/collection/parity/unique-addresses  |   20.58 |        0 |       0 |   21.21 |                             
  network.datasource.ts                               |   20.58 |        0 |       0 |   21.21 | 25,43-103                   
 src/data-sources/entities                            |       0 |      100 |     100 |       0 |                             
  data-source.entity.ts                               |       0 |      100 |     100 |       0 | 1-19                        
 src/data-sources/services/data-source                |      20 |    21.05 |   11.11 |   16.66 |                             
  data-source.service.ts                              |      20 |    21.05 |   11.11 |   16.66 | 94-158                      
 src/users                                            |     100 |      100 |     100 |     100 |                             
  users.module.ts                                     |     100 |      100 |     100 |     100 |                             
 src/users/entities                                   |     100 |      100 |     100 |     100 |                             
  credential.entity.ts                                |     100 |      100 |     100 |     100 |                             
  user.entity.ts                                      |     100 |      100 |     100 |     100 |                             
 src/users/services/user                              |   36.66 |        0 |      25 |   34.48 |                             
  user.service.ts                                     |   36.66 |        0 |      25 |   34.48 | 19-71                       
 src/widgets                                          |    84.5 |        0 |     100 |    85.5 |                             
  widgets.controller.ts                               |     100 |        0 |     100 |     100 | 69                          
  widgets.module.ts                                   |       0 |      100 |     100 |       0 | 1-21                        
 src/widgets/dto                                      |     100 |      100 |     100 |     100 |                             
  create-widget.dto.ts                                |     100 |      100 |     100 |     100 |                             
  execute-params.dto.ts                               |     100 |      100 |     100 |     100 |                             
  execute-widget.dto.ts                               |     100 |      100 |     100 |     100 |                             
  get-metrics.dto.ts                                  |     100 |      100 |     100 |     100 |                             
  get-subcategories.dto.ts                            |     100 |      100 |     100 |     100 |                             
  get-widgets.dto.ts                                  |     100 |      100 |     100 |     100 |                             
  metric.dto.ts                                       |     100 |      100 |     100 |     100 |                             
  save-widget.dto.ts                                  |     100 |      100 |     100 |     100 |                             
  set-metrics.dto.ts                                  |     100 |      100 |     100 |     100 |                             
  set-subcategories.dto.ts                            |     100 |      100 |     100 |     100 |                             
  subcategory.dto.ts                                  |     100 |      100 |     100 |     100 |                             
 src/widgets/entities                                 |     100 |      100 |     100 |     100 |                             
  widget.entity.ts                                    |     100 |      100 |     100 |     100 |                             
 src/widgets/services/widget                          |   13.21 |        0 |    4.87 |   12.42 |                             
  execute-widget.service.ts                           |   13.63 |        0 |    7.69 |    12.3 | 32-219                      
  widget.service.ts                                   |   12.96 |        0 |    3.57 |    12.5 | 30-280                      
 src/widgets/services/widget-ability                  |   21.42 |        0 |   13.33 |   18.51 |                             
  widget-ability.service.ts                           |   21.42 |        0 |   13.33 |   18.51 | 19-86                       
------------------------------------------------------|---------|----------|---------|---------|-----------------------------

Test Suites: 10 passed, 10 total
Tests:       36 passed, 36 total
Snapshots:   0 total
Time:        39.335 s
Ran all test suites.
```