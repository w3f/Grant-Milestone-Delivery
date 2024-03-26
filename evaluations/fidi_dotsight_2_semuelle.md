# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/fidi-dotsight-analytics.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul> | [fidi-tech/dotsight](https://github.com/fidi-tech/dotsight/blob/c5aa6c5b043693be3829a542bd38474a292a76f3/LICENSE), [fidi-tech/dotsight-ui](https://github.com/fidi-tech/dotsight-ui/blob/3e9f8efdeb15d0c80f0caff112e9a7a2df09f7f9/LICENSE) | Apache License 2.0 |
| **0b.** | Documentation | <ul><li>[ ] </li></ul> | [docs.fidi.tech](https://docs.fidi.tech/fidi-overview/fidi-analytics-portal) | We will provide documentation on every supported metrics class and an educational tutorial explaining the typical way to interpret the data, navigate the developer UI, specify the required metadata, deploy a data interface configuration, and select the desired dashboard. |
| **0c.** | Testing | <ul><li>[x] </li></ul> | [fidi-tech/dotsight-ui](https://github.com/search?q=repo%3Afidi-tech%2Fdotsight-ui+spec.tsx&type=code), [fidi-tech/dotsight](https://github.com/search?q=repo%3Afidi-tech%2Fdotsight%20spec.ts&type=code) | See output below |
| **1a.** | dApp-level signals: collator metrics | <ul><li>[ ] </li></ul> | link | We will generalize prior work from Milestone 1 to span collator/nominator activity and make metrics such as uptime, block production rate, block processing time, rank/nominator rank, name, and value locked available in the views. For 1a-2a, the respective GraphQL squid query and GiantSquid's code are also in scope; the UI components will be written in React + Typescript, and the backend code in Typescript + Nest + PGSQL.|
| **1b.** | dApp-level signals: user activity | <ul><li>[ ] </li></ul> | link | Additionally, the dApp-specific user activity metrics will be surfaced, e.g., UAW, net new wallets,  historical transactions, volume, and balance per dApp. Respective squid query and GS code are also in scope. |
| **2a.** | Network-level signals | <ul><li>[ ] </li></ul> | link | We will generalize prior work from Milestone 1 to span L1-level metrics and activity made available in the developer UI, e.g., UAW per network, number of new wallets, adoption rates, unstaked tokens currently in wallets, tokens in circulation, and tokens staked or locked. Respective squid query and GS code are also in scope. |


## General Notes

- Documentation doesn't seem up to spec


### `npm run test:cov` output

```sh
----------------------------------------------------------------|---------|----------|---------|---------|---------------------
File                                                            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s   
----------------------------------------------------------------|---------|----------|---------|---------|---------------------
All files                                                       |   40.47 |    38.76 |   37.95 |   40.91 |                     
 app                                                            |     100 |      100 |     100 |     100 |                     
  layout.tsx                                                    |     100 |      100 |     100 |     100 |                     
  page.tsx                                                      |     100 |      100 |     100 |     100 |                     
 app/login                                                      |       0 |        0 |       0 |       0 |                     
  page.tsx                                                      |       0 |        0 |       0 |       0 | 3-43                
 app/login/components/Button                                    |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-20                
 app/widget                                                     |     100 |    66.66 |     100 |     100 |                     
  page.tsx                                                      |     100 |    66.66 |     100 |     100 | 61                  
 app/widget/[id]                                                |       0 |        0 |       0 |       0 |                     
  page.tsx                                                      |       0 |        0 |       0 |       0 | 3-38                
 app/widget/[id]/hooks                                          |      80 |      100 |      75 |   81.81 |                     
  index.ts                                                      |       0 |      100 |       0 |       0 | 3-8                 
  useWidget.ts                                                  |     100 |      100 |     100 |     100 |                     
 entities/MetricValue/model                                     |   90.47 |    85.71 |     100 |   90.47 |                     
  index.ts                                                      |   90.47 |    85.71 |     100 |   90.47 | 35,45               
 entities/category/model                                        |   73.33 |      100 |      50 |   78.94 |                     
  actions.ts                                                    |       0 |      100 |     100 |       0 | 1-3                 
  adapter.ts                                                    |     100 |      100 |     100 |     100 |                     
  getters.ts                                                    |   77.77 |      100 |   66.66 |     100 |                     
  index.ts                                                      |     100 |      100 |     100 |     100 |                     
  reducer.ts                                                    |   66.66 |      100 |     100 |     100 |                     
  selectors.ts                                                  |      75 |      100 |       0 |   66.66 | 5                   
  slice.ts                                                      |      80 |      100 |       0 |      75 | 10                  
  types.ts                                                      |     100 |      100 |     100 |     100 |                     
 entities/category/model/providers                              |       0 |      100 |       0 |       0 |                     
  getCategoriesList.ts                                          |       0 |      100 |       0 |       0 | 3-9                 
 entities/metric/model                                          |   31.42 |      100 |   42.85 |      25 |                     
  actions.ts                                                    |       0 |      100 |     100 |       0 | 1-3                 
  adapter.ts                                                    |       0 |      100 |     100 |       0 | 1-5                 
  getters.ts                                                    |   73.33 |      100 |      60 |     100 |                     
  index.ts                                                      |       0 |      100 |     100 |       0 | 1-2                 
  reducer.ts                                                    |       0 |      100 |     100 |       0 | 1-3                 
  selectors.ts                                                  |       0 |      100 |       0 |       0 | 1-5                 
  slice.ts                                                      |       0 |      100 |       0 |       0 | 1-10                
 entities/metric/model/providers                                |       0 |      100 |       0 |       0 |                     
  getMetricsByWidgetId.ts                                       |       0 |      100 |       0 |       0 | 4-13                
  setMetricsByWidgetId.ts                                       |       0 |      100 |       0 |       0 | 4-17                
 entities/preset/model                                          |       0 |      100 |       0 |       0 |                     
  actions.ts                                                    |       0 |      100 |     100 |       0 | 1-3                 
  adapter.ts                                                    |       0 |      100 |     100 |       0 | 1-5                 
  getters.ts                                                    |       0 |      100 |       0 |       0 | 3-6                 
  index.ts                                                      |       0 |      100 |     100 |       0 | 1-2                 
  reducer.ts                                                    |       0 |      100 |     100 |       0 | 1-3                 
  selectors.ts                                                  |       0 |      100 |       0 |       0 | 1-5                 
  slice.ts                                                      |       0 |      100 |       0 |       0 | 1-10                
 entities/subCategory/model                                     |      25 |      100 |   33.33 |   21.05 |                     
  actions.ts                                                    |       0 |      100 |     100 |       0 | 1-3                 
  adapter.ts                                                    |       0 |      100 |     100 |       0 | 1-5                 
  getters.ts                                                    |   66.66 |      100 |      50 |     100 |                     
  index.ts                                                      |       0 |      100 |     100 |       0 | 1-2                 
  reducer.ts                                                    |       0 |      100 |     100 |       0 | 1-3                 
  selectors.ts                                                  |       0 |      100 |       0 |       0 | 1-5                 
  slice.ts                                                      |       0 |      100 |       0 |       0 | 1-10                
 entities/subCategory/model/providers                           |       0 |      100 |       0 |       0 |                     
  getSubCategoriesByWidgetId.ts                                 |       0 |      100 |       0 |       0 | 4-10                
  setSubCategoriesByWidgetId.ts                                 |       0 |      100 |       0 |       0 | 4-14                
 entities/unit/model                                            |     100 |      100 |     100 |     100 |                     
  index.ts                                                      |     100 |      100 |     100 |     100 |                     
 entities/widget/model                                          |   44.89 |      100 |   58.33 |   28.57 |                     
  actions.ts                                                    |       0 |      100 |     100 |       0 | 1-7                 
  adapter.ts                                                    |       0 |      100 |     100 |       0 | 1-5                 
  getters.ts                                                    |   91.66 |      100 |    87.5 |     100 |                     
  index.ts                                                      |       0 |      100 |     100 |       0 | 1-2                 
  reducer.ts                                                    |       0 |      100 |     100 |       0 | 1-3                 
  selectors.ts                                                  |       0 |      100 |       0 |       0 | 1-5                 
  slice.ts                                                      |       0 |      100 |       0 |       0 | 1-16                
 entities/widget/model/providers                                |       0 |      100 |       0 |       0 |                     
  deleteWidgetById.ts                                           |       0 |      100 |       0 |       0 | 3-11                
  getWidgetById.ts                                              |       0 |      100 |       0 |       0 | 3-11                
  getWidgets.ts                                                 |       0 |      100 |       0 |       0 | 3-9                 
  updateWidgetById.ts                                           |       0 |      100 |       0 |       0 | 3-12                
 features/HOC/withAuth/ui                                       |   94.73 |    66.66 |     100 |   94.44 |                     
  index.tsx                                                     |   94.73 |    66.66 |     100 |   94.44 | 22                  
 features/HOC/withConfirmation/ui                               |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-59                
 features/TilesSelector                                         |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-65                
 features/WizardControls                                        |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-22                
 features/mainLayout/ui                                         |     100 |      100 |     100 |     100 |                     
  index.tsx                                                     |     100 |      100 |     100 |     100 |                     
 features/widgetViews/ui                                        |       0 |        0 |       0 |       0 |                     
  constants.ts                                                  |       0 |        0 |       0 |       0 | 1                   
  index.ts                                                      |       0 |      100 |     100 |       0 | 5-24                
 features/widgetViews/ui/LineChart                              |   52.94 |      100 |     100 |   53.33 |                     
  helpers.ts                                                    |     100 |      100 |     100 |     100 |                     
  index.tsx                                                     |       0 |      100 |     100 |       0 | 1-17                
 features/widgetViews/ui/LineChart/placeholder                  |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-29                
 features/widgetViews/ui/LineChart/widget                       |       0 |        0 |       0 |       0 |                     
  helpers.ts                                                    |       0 |        0 |       0 |       0 | 4-22                
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-97                
 features/widgetViews/ui/LineChart/widget/components/Legend     |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-35                
 features/widgetViews/ui/LineChart/widget/components/LegendLine |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-10                
 features/widgetViews/ui/LineChart/widget/components/Tooltip    |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-39                
 features/widgetViews/ui/LineChart/widget/hooks                 |   95.83 |       50 |     100 |   95.45 |                     
  index.ts                                                      |     100 |      100 |     100 |     100 |                     
  useDataset.ts                                                 |   94.73 |       50 |     100 |   94.44 | 19                  
 features/widgetViews/ui/Radar                                  |      60 |      100 |     100 |   61.11 |                     
  helpers.ts                                                    |     100 |      100 |     100 |     100 |                     
  index.tsx                                                     |       0 |      100 |     100 |       0 | 1-17                
 features/widgetViews/ui/Radar/placeholder                      |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-29                
 features/widgetViews/ui/Radar/widget                           |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-61                
 features/widgetViews/ui/Radar/widget/components/Legend         |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-31                
 features/widgetViews/ui/Radar/widget/components/LegendLine     |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-10                
 features/widgetViews/ui/Radar/widget/components/Tick           |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-19                
 features/widgetViews/ui/Radar/widget/components/Tooltip        |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-40                
 features/widgetViews/ui/Radar/widget/hooks                     |     100 |      100 |     100 |     100 |                     
  index.ts                                                      |     100 |      100 |     100 |     100 |                     
  useDataset.ts                                                 |     100 |      100 |     100 |     100 |                     
 features/widgetViews/ui/Table                                  |       0 |      100 |     100 |       0 |                     
  index.tsx                                                     |       0 |      100 |     100 |       0 | 1-15                
 features/widgetViews/ui/Table/placeholder                      |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-29                
 features/widgetViews/ui/Table/widget                           |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-30                
 features/widgetViews/ui/Table/widget/hooks                     |   90.47 |       80 |     100 |   89.47 |                     
  index.ts                                                      |     100 |      100 |     100 |     100 |                     
  useDataset.ts                                                 |    87.5 |       80 |     100 |   86.66 | 18,24               
 infra/providers                                                |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-4                 
 infra/providers/redux                                          |       0 |      100 |       0 |       0 |                     
  index.ts                                                      |       0 |      100 |       0 |       0 | 1-11                
  rootReducer.ts                                                |       0 |      100 |     100 |       0 | 1-7                 
 shared/api                                                     |       0 |      100 |     100 |       0 |                     
  index.ts                                                      |       0 |      100 |     100 |       0 | 1                   
 shared/api/dotsight                                            |   52.45 |      100 |       0 |   43.75 |                     
  base.ts                                                       |      75 |      100 |     100 |     100 |                     
  category.ts                                                   |   66.66 |      100 |       0 |      60 | 6-7                 
  index.ts                                                      |     100 |      100 |     100 |     100 |                     
  widget.ts                                                     |   46.93 |      100 |       0 |   34.21 | ...-56,78-92,96-100 
 shared/config                                                  |      50 |       20 |       0 |    62.5 |                     
  index.ts                                                      |      50 |       20 |       0 |    62.5 | 2-5                 
 shared/constants                                               |     100 |      100 |     100 |     100 |                     
  cookies.ts                                                    |     100 |      100 |     100 |     100 |                     
 shared/lib                                                     |     100 |      100 |     100 |     100 |                     
  color.ts                                                      |     100 |      100 |     100 |     100 |                     
  currency.ts                                                   |     100 |      100 |     100 |     100 |                     
  date.ts                                                       |     100 |      100 |     100 |     100 |                     
  object.ts                                                     |     100 |      100 |     100 |     100 |                     
  string.ts                                                     |     100 |      100 |     100 |     100 |                     
  unit.ts                                                       |     100 |      100 |     100 |     100 |                     
 shared/ui                                                      |       0 |      100 |     100 |       0 |                     
  index.ts                                                      |       0 |      100 |     100 |       0 | 1-5                 
 shared/ui/Bar                                                  |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-9                 
 shared/ui/Button                                               |     100 |       75 |     100 |     100 |                     
  index.tsx                                                     |     100 |       75 |     100 |     100 | 28-29,31            
 shared/ui/Card                                                 |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-5                 
 shared/ui/Checkbox                                             |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-10                
 shared/ui/ColorInput                                           |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-47                
 shared/ui/Copyrights                                           |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-32                
 shared/ui/CroppedText                                          |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-37                
 shared/ui/ErrorPlaceholder                                     |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-19                
 shared/ui/HideableBlock                                        |    90.9 |      100 |      50 |     100 |                     
  index.tsx                                                     |    90.9 |      100 |      50 |     100 |                     
 shared/ui/InPlaceEdit                                          |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-22                
 shared/ui/InPlaceEdit/hooks                                    |   76.66 |    66.66 |      75 |   81.48 |                     
  index.ts                                                      |   76.66 |    66.66 |      75 |   81.48 | 19,25,31-33         
 shared/ui/Input                                                |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-13                
 shared/ui/InputV2                                              |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-9                 
 shared/ui/LineChart                                            |     100 |      100 |     100 |     100 |                     
  index.tsx                                                     |     100 |      100 |     100 |     100 |                     
 shared/ui/Loader                                               |     100 |      100 |     100 |     100 |                     
  index.tsx                                                     |     100 |      100 |     100 |     100 |                     
 shared/ui/Module                                               |     100 |      100 |     100 |     100 |                     
  index.tsx                                                     |     100 |      100 |     100 |     100 |                     
 shared/ui/NFT                                                  |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-66                
 shared/ui/NameWithIcon                                         |     100 |      100 |     100 |     100 |                     
  index.tsx                                                     |     100 |      100 |     100 |     100 |                     
 shared/ui/Palette                                              |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-11                
 shared/ui/PaletteRadio                                         |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-38                
 shared/ui/PieChart                                             |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-29                
 shared/ui/Selector                                             |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-24                
 shared/ui/StepTitle                                            |     100 |      100 |     100 |     100 |                     
  index.tsx                                                     |     100 |      100 |     100 |     100 |                     
 shared/ui/Table                                                |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-27                
 shared/ui/Text                                                 |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-7                 
 shared/ui/Tile                                                 |     100 |      100 |     100 |     100 |                     
  index.tsx                                                     |     100 |      100 |     100 |     100 |                     
 shared/ui/Toggler                                              |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-48                
 shared/ui/WidgetTypeTag                                        |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-14                
 shared/ui/icons                                                |   96.55 |      100 |     100 |     100 |                     
  index.ts                                                      |   96.55 |      100 |     100 |     100 |                     
 shared/ui/styles                                               |       0 |        0 |       0 |       0 |                     
  palettes.ts                                                   |       0 |        0 |       0 |       0 | 1-11                
 widgets/Footer                                                 |       0 |      100 |     100 |       0 |                     
  index.tsx                                                     |       0 |      100 |     100 |       0 | 1-32                
 widgets/Header                                                 |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 3-27                
 widgets/MetricsSelector                                        |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-119               
 widgets/MetricsSelector/components/Title                       |       0 |      100 |     100 |       0 |                     
  index.tsx                                                     |       0 |      100 |     100 |       0 | 1-7                 
 widgets/MetricsSelector/hooks                                  |   77.77 |       40 |    87.5 |   79.41 |                     
  index.ts                                                      |       0 |        0 |       0 |       0 | 2-18                
  useMetrics.ts                                                 |     100 |    66.66 |     100 |     100 | 29                  
 widgets/SubCategoriesSelector                                  |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-104               
 widgets/SubCategoriesSelector/components/Title                 |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-53                
 widgets/SubCategoriesSelector/hooks                            |     100 |      100 |     100 |     100 |                     
  index.ts                                                      |     100 |      100 |     100 |     100 |                     
  useSubCategories.ts                                           |     100 |      100 |     100 |     100 |                     
  useWidget.ts                                                  |     100 |      100 |     100 |     100 |                     
 widgets/WidgetConfigurator                                     |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-73                
 widgets/WidgetConfigurator/components/Breadcrumbs              |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 3-15                
 widgets/WidgetConfigurator/components/Breadcrumbs/hooks        |   73.68 |      100 |      75 |      75 |                     
  index.ts                                                      |       0 |      100 |       0 |       0 | 3-7                 
  useWidget.ts                                                  |     100 |      100 |     100 |     100 |                     
 widgets/WidgetConfigurator/components/Preview                  |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-23                
 widgets/WidgetConfigurator/components/Preview/hooks            |      75 |      100 |   83.33 |   77.77 |                     
  index.ts                                                      |       0 |      100 |       0 |       0 | 3-8                 
  useData.ts                                                    |     100 |      100 |     100 |     100 |                     
 widgets/WidgetConfigurator/components/Types                    |       0 |      100 |       0 |       0 |                     
  index.tsx                                                     |       0 |      100 |       0 |       0 | 1-28                
 widgets/WidgetConfigurator/components/Types/hooks              |   88.88 |    92.85 |   91.66 |   89.74 |                     
  index.ts                                                      |       0 |      100 |       0 |       0 | 3-7                 
  useTypes.ts                                                   |     100 |    92.85 |     100 |     100 | 43                  
 widgets/WidgetConfigurator/hooks                               |   64.28 |      100 |   66.66 |   63.63 |                     
  index.ts                                                      |       0 |      100 |       0 |       0 | 3-7                 
  useViewType.ts                                                |     100 |      100 |     100 |     100 |                     
 widgets/WidgetsList                                            |       0 |        0 |       0 |       0 |                     
  index.tsx                                                     |       0 |        0 |       0 |       0 | 1-39                
 widgets/WidgetsList/hooks                                      |   79.16 |      100 |      80 |   81.81 |                     
  index.ts                                                      |       0 |      100 |       0 |       0 | 1-5                 
  widgets.ts                                                    |     100 |      100 |     100 |     100 |                     
----------------------------------------------------------------|---------|----------|---------|---------|---------------------

Test Suites: 30 passed, 30 total
Tests:       83 passed, 83 total
Snapshots:   0 total
Time:        7.98 s
Ran all test suites.
```

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