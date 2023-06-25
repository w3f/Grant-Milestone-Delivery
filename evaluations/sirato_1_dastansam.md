# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/pull/1608
- **Milestone:** 1
- **Kusama Identity:** [Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP](https://sub.id/Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP)
- **Previously successfully merged evaluation:** N/A

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/web3labs/epirus-substrate/blob/main/LICENSE | Correct license | 
| 0b. | Documentation | Project README: https://github.com/web3labs/epirus-substrate/tree/main/explorer-ui#readme <br/> Video demo: https://www.loom.com/share/85fb7a8cbe6e40ba9bcadd804b7e6bc5 | Well documented |
| 0c. | Testing Guide | UI unit tests: https://github.com/web3labs/epirus-substrate/blob/main/explorer-ui/README.md#testing | UI, coverage, analysis tests and linting are passing. Logs attached below. | 
| 0d. | Docker | UI Docker image: [ghcr.io/web3labs/epirus-substrate-ui:latest](https://github.com/web3labs/epirus-substrate/pkgs/container/epirus-substrate-ui) <br /> Docker compose for running all explorer components locally: https://github.com/web3labs/epirus-substrate/tree/main/local-testnet | Was able to compile and run the docker image. When running the local testnet with docker compose, UI is not running (logs below) |
| 1. | Updated Explorer UI | https://github.com/web3labs/epirus-substrate/tree/main/explorer-ui | Can confirm the new folders (`./src/components/blocks/` and `./src/components/extrinsics/`) are present and changes have been made acoording to the application. Explorer compiles and runs successfully. |
| 2. | Public explorer instance | https://substrate.sirato.xyz | Public explorer instance for Rococo-Contracts. A new menu item `Blocks` has been added to the side navbar | New navbar is present and the explorer is running |

## General Notes

In general, it's documented well and majority of the instructions are clear. Code is well written and structured. The only issue I had was with running the local testnet with docker compose. The UI container is not running, I attached the logs related to `explorer-ui` container [below](#logs).

When installing the dependencies, I couldn't do it with simple `npm install` command, I had to force install the dependencies with `npm install --force`. I am not completely sure if it's because of some upstream issues with npm or dependencies, but I think it should either be fixed to work with `npm install` or documented that it should be installed with `npm install --force`.

### Code suggestions

I noticed that `.env` file is not gitignored. It's not a big deal, but it's better to keep it out of the repository. You can set the environment variables in the `.env` file in `.env.example` and use it as a fallback file.

### Logs

<details>

  <summary>Test outputs</summary>

```sh
npm test

Test Suites: 68 passed, 68 total
Tests:       187 passed, 187 total
Snapshots:   0 total
Time:        6.56 s
Ran all test suites.
```

</details>

<details>

  <summary>Test coverage</summary>

```sh
File                             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s               
---------------------------------|---------|----------|---------|---------|---------------------------------
All files                        |   86.67 |    77.41 |   84.22 |   86.74 |                                 
 src                             |     100 |    66.66 |     100 |     100 |                                 
  App.tsx                        |     100 |    66.66 |     100 |     100 | 28-34                           
 src/components                  |      50 |      100 |      50 |      50 |                                 
  BlocksHomePage.tsx             |       0 |      100 |       0 |       0 | 8                               
  HomePage.tsx                   |     100 |      100 |     100 |     100 |                                 
 src/components/accounts         |   94.44 |     92.5 |      90 |   94.44 |                                 
  AccountAddress.tsx             |     100 |      100 |     100 |     100 |                                 
  AccountLink.tsx                |     100 |      100 |     100 |     100 |                                 
  AccountList.tsx                |     100 |      100 |     100 |     100 |                                 
  AccountPage.tsx                |   93.33 |       70 |     100 |   93.33 | 93                              
  AccountRow.tsx                 |     100 |      100 |     100 |     100 |                                 
  AccountsPage.tsx               |      50 |      100 |      50 |      50 | 29                              
 src/components/activities       |   81.39 |    74.28 |      75 |   81.39 |                                 
  ActivitiesPage.tsx             |      75 |    83.33 |      50 |      75 | 25,50-60                        
  ActivityList.tsx               |     100 |      100 |     100 |     100 |                                 
  ActivityRow.tsx                |   76.19 |    65.21 |   66.66 |   76.19 | 27-34,71                        
  ActivityTab.tsx                |     100 |      100 |     100 |     100 |                                 
 src/components/badges           |     100 |      100 |     100 |     100 |                                 
  BlockBadge.tsx                 |     100 |      100 |     100 |     100 |                                 
  CheckBadge.tsx                 |     100 |      100 |     100 |     100 |                                 
  CodeBadge.tsx                  |     100 |      100 |     100 |     100 |                                 
  CrossBadge.tsx                 |     100 |      100 |     100 |     100 |                                 
 src/components/blocks           |   93.54 |    66.66 |     100 |   93.54 |                                 
  BlockId.tsx                    |   66.66 |     62.5 |     100 |   66.66 | 49                              
  BlockLink.tsx                  |     100 |    83.33 |     100 |     100 | 24                              
  BlockList.tsx                  |     100 |    66.66 |     100 |     100 | 82-88                           
  BlockPage.tsx                  |   92.85 |       75 |     100 |   92.85 | 78                              
  BlockRow.tsx                   |     100 |       40 |     100 |     100 | 13-38                           
  BlocksPage.tsx                 |     100 |      100 |     100 |     100 |                                 
 src/components/blocks/events    |     100 |    83.33 |     100 |     100 |                                 
  EventList.tsx                  |     100 |    83.33 |     100 |     100 | 72                              
  EventRow.tsx                   |     100 |      100 |     100 |     100 |                                 
  EventsTab.tsx                  |     100 |      100 |     100 |     100 |                                 
 src/components/codes            |   90.62 |    77.77 |   80.95 |    91.8 |                                 
  BinaryTab.tsx                  |   88.88 |       75 |     100 |     100 | 24                              
  CodeHash.tsx                   |     100 |      100 |     100 |     100 |                                 
  CodeLink.tsx                   |     100 |      100 |     100 |     100 |                                 
  CodeList.tsx                   |     100 |       50 |     100 |     100 | 57,71-77                        
  CodePage.tsx                   |   95.23 |    73.33 |     100 |   95.23 | 106                             
  CodeRow.tsx                    |     100 |      100 |     100 |     100 |                                 
  CodeTab.tsx                    |   33.33 |      100 |   33.33 |   33.33 | 16-30                           
  CodesPage.tsx                  |   33.33 |      100 |   33.33 |   33.33 | 29-37                           
  HexView.tsx                    |     100 |      100 |     100 |     100 |                                 
 src/components/codes/sources    |   88.18 |     84.5 |   87.14 |   89.03 |                                 
  ErrorView.tsx                  |     100 |      100 |     100 |     100 |                                 
  FileBox.tsx                    |     100 |      100 |     100 |     100 |                                 
  FileList.tsx                   |   81.81 |       75 |   66.66 |      90 | 40                              
  FileView.tsx                   |   95.45 |    91.66 |     100 |   95.45 | 53                              
  FilesNavigation.tsx            |    87.8 |     91.3 |   86.66 |   86.84 | 33,44,109,118,123               
  MetadataView.tsx               |   86.36 |       80 |     100 |   86.36 | 80-83,95                        
  ProcessingView.tsx             |     100 |    85.71 |     100 |     100 | 24-30                           
  SourceCode.tsx                 |     100 |      100 |     100 |     100 |                                 
  SourceTab.tsx                  |   96.55 |     86.2 |     100 |   96.55 | 45                              
  UnverifiedView.tsx             |   76.47 |     77.5 |   72.22 |   78.46 | 39-40,44-47,111-112,163-169,284 
  VerifiedView.tsx               |     100 |      100 |     100 |     100 |                                 
 src/components/commons          |   82.35 |    75.24 |   86.11 |   82.35 |                                 
  Alert.tsx                      |     100 |      100 |     100 |     100 |                                 
  Box.tsx                        |     100 |      100 |     100 |     100 |                                 
  Copy.tsx                       |   83.33 |      100 |   66.66 |   83.33 | 14                              
  Definitions.tsx                |      75 |       80 |     100 |      75 | 14                              
  ExtrinsicSummary.tsx           |     100 |    61.53 |     100 |     100 | 11,47-49                        
  Label.tsx                      |     100 |      100 |     100 |     100 |                                 
  Lane.tsx                       |     100 |      100 |     100 |     100 |                                 
  List.tsx                       |   83.33 |       80 |      80 |   83.33 | 37                              
  Segment.tsx                    |     100 |     92.3 |     100 |     100 | 37                              
  Select.tsx                     |   85.71 |    69.23 |      75 |   85.71 | 122-129                         
  Tag.tsx                        |     100 |      100 |     100 |     100 |                                 
  Text.tsx                       |   58.82 |    57.14 |      75 |   58.82 | 10,26-33,51                     
  Toast.tsx                      |     100 |      100 |     100 |     100 |                                 
  Tooltip.tsx                    |     100 |      100 |     100 |     100 |                                 
 src/components/contracts        |   89.39 |    71.92 |      84 |   89.39 |                                 
  ContractList.tsx               |     100 |    66.66 |     100 |     100 | 79-85                           
  ContractPage.tsx               |   94.44 |     61.9 |     100 |   94.44 | 137                             
  ContractRow.tsx                |     100 |        0 |     100 |     100 | 13                              
  ContractTab.tsx                |      75 |      100 |      75 |      75 | 38                              
  ContractTermination.tsx        |     100 |      100 |     100 |     100 |                                 
  ContractUpgrade.tsx            |     100 |      100 |     100 |     100 |                                 
  ContractsPage.tsx              |   33.33 |      100 |   33.33 |   33.33 | 28-36                           
  DataView.tsx                   |      88 |       80 |    87.5 |      88 | 44,116,121                      
 src/components/contracts/events |   84.61 |       50 |   71.42 |   84.61 |                                 
  EventList.tsx                  |     100 |       50 |     100 |     100 | 63,77-83                        
  EventRow.tsx                   |     100 |      100 |     100 |     100 |                                 
  EventTab.tsx                   |   33.33 |      100 |   33.33 |   33.33 | 24-27                           
 src/components/extrinsics       |   93.02 |    61.11 |     100 |   93.02 |                                 
  EventList.tsx                  |     100 |    66.66 |     100 |     100 | 60-66                           
  EventRow.tsx                   |     100 |      100 |     100 |     100 |                                 
  EventsTab.tsx                  |     100 |      100 |     100 |     100 |                                 
  ExtrinsicId.tsx                |   66.66 |       50 |     100 |   66.66 | 36                              
  ExtrinsicLink.tsx              |      75 |    66.66 |     100 |      75 | 22                              
  ExtrinsicPage.tsx              |   92.85 |    64.28 |     100 |   92.85 | 86                              
  ExtrinsicRow.tsx               |     100 |    33.33 |     100 |     100 | 13-29                           
  ExtrinsicsList.tsx             |     100 |    66.66 |     100 |     100 | 49-55                           
  ExtrinsicsTab.tsx              |     100 |      100 |     100 |     100 |                                 
 src/components/loading          |   93.33 |      100 |   88.88 |   93.33 |                                 
  Loading.tsx                    |   93.33 |      100 |   88.88 |   93.33 | 29                              
 src/components/navigation       |      70 |    55.55 |      55 |   69.23 |                                 
  Breadcrumbs.tsx                |     100 |      100 |     100 |     100 |                                 
  MainNav.tsx                    |   36.36 |    18.18 |   14.28 |   36.36 | 71-118,268-282                  
  Pagination.tsx                 |   58.33 |       60 |      25 |   58.33 | 9,17-18,31-47                   
  SideBar.tsx                    |     100 |     87.5 |     100 |     100 | 22                              
  Tabs.tsx                       |     100 |      100 |     100 |     100 |                                 
 src/components/query            |   89.55 |    75.67 |   86.95 |   89.39 |                                 
  Filters.tsx                    |   86.84 |    58.33 |   92.85 |   86.48 | 31,127-131                      
  ListQuery.tsx                  |   96.15 |    83.33 |   83.33 |   96.15 | 56                              
  SortBy.tsx                     |   66.66 |      100 |   66.66 |   66.66 | 22                              
 src/components/query/filters    |   63.04 |    66.66 |   72.22 |   63.04 |                                 
  Chip.tsx                       |     100 |      100 |     100 |     100 |                                 
  DateRangeFilter.tsx            |   17.64 |    22.22 |      25 |   17.64 | 9-15,35-59                      
  EnumTypeFilter.tsx             |    92.3 |     90.9 |     100 |    92.3 | 58                              
  TextFilter.tsx                 |   86.66 |    85.71 |   66.66 |   86.66 | 10-13                           
 src/components/query/search     |   72.61 |    61.53 |    61.9 |   72.28 |                                 
  SearchBox.tsx                  |   72.36 |     60.6 |   61.11 |      72 | 66-67,79-80,114,131-153,229-238 
  SearchResults.tsx              |      75 |    66.66 |   66.66 |      75 | 32,57                           
 src/components/responsive       |     100 |     87.5 |     100 |     100 |                                 
  Media.tsx                      |     100 |     87.5 |     100 |     100 | 10                              
 src/contexts                    |     100 |      100 |     100 |     100 |                                 
  ChainContext.tsx               |     100 |      100 |     100 |     100 |                                 
  chainNames.ts                  |     100 |      100 |     100 |     100 |                                 
 src/formats                     |     100 |      100 |     100 |     100 |                                 
  bytes.ts                       |     100 |      100 |     100 |     100 |                                 
  text.ts                        |     100 |      100 |     100 |     100 |                                 
  time.ts                        |     100 |      100 |     100 |     100 |                                 
  units.ts                       |     100 |      100 |     100 |     100 |                                 
 src/highlight                   |     100 |      100 |     100 |     100 |                                 
  index.ts                       |     100 |      100 |     100 |     100 |                                 
 src/hooks                       |   72.22 |       75 |      80 |   68.75 |                                 
  useSquid.ts                    |   72.22 |       75 |      80 |   68.75 | 41-44,51-52,61                  
 src/utils                       |     100 |      100 |     100 |     100 |                                 
  args.ts                        |     100 |      100 |     100 |     100 |                                 
  errors.ts                      |     100 |      100 |     100 |     100 |                                 
  hashcode.ts                    |     100 |      100 |     100 |     100 |                                 
  hex.ts                         |     100 |      100 |     100 |     100 |                                 
  strings.ts                     |     100 |      100 |     100 |     100 |                                 
---------------------------------|---------|----------|---------|---------|---------------------------------

Test Suites: 68 passed, 68 total
Tests:       187 passed, 187 total
Snapshots:   0 total
Time:        6.152 s
Ran all test suites.
```

</details>

<details>

<summary>Linting</summary>

```sh

> explorer-ui@0.1.0 lint:fix
> eslint --fix 'src/**/*.{js,jsx,ts,tsx}'


/Users/dastan@enjin.io/Documents/dastan/evaluations/epirus-substrate/explorer-ui/src/components/blocks/BlockList.test.tsx
  6:10  error  'contractByDeployer' is defined but never used  no-unused-vars

/Users/dastan@enjin.io/Documents/dastan/evaluations/epirus-substrate/explorer-ui/src/components/blocks/BlocksPage.test.tsx
  8:10  error  'Edge' is defined but never used        no-unused-vars
  9:10  error  'LightBlock' is defined but never used  no-unused-vars

/Users/dastan@enjin.io/Documents/dastan/evaluations/epirus-substrate/explorer-ui/src/components/blocks/events/EventRow.test.tsx
  6:10  error  'LightExtrinsic' is defined but never used  no-unused-vars

/Users/dastan@enjin.io/Documents/dastan/evaluations/epirus-substrate/explorer-ui/src/components/extrinsics/EventRow.test.tsx
  6:10  error  'LightExtrinsic' is defined but never used  no-unused-vars

✖ 5 problems (5 errors, 0 warnings)
```

</details>

<details>

<summary>Docker</summary>

```sh
> docker build -t epirus-substrate-ui:develop .

 => exporting to image                                                                                                                                                         0.1s
 => => exporting layers                                                                                                                                                        0.1s
 => => writing image sha256:ca85d4c333e5bd81318c475e69a740e0ce3d59df4707f1cdd1282a39ce053320                                                                                   0.0s
 => => naming to docker.io/library/epirus-substrate-ui:develop   
```

</details>

<details>

<summary>Local testnet docker compose</summary>

```sh
explorer-ui                | 
explorer-ui                |   Provided flags:
explorer-ui                |     --config-name = ./runtime-env.js
explorer-ui                |     --env-file = ./.env
explorer-ui                | 
explorer-ui                |   Your environment variables will be available on 'window.__RUNTIME_CONFIG__'
explorer-ui                |   
explorer-ui                | Successfully generated your runtime-env config!
explorer-ui                |   Result: window.__RUNTIME_CONFIG__ = {"REACT_APP_SQUID_ENDPOINT":"http://localhost:4000/graphql","REACT_APP_SQUID_ARCHIVE_ENDPOINT":"http://localhost:4444/graphql","REACT_APP_SOURCE_CODE_ENABLED":"true","REACT_APP_VERIFIER_ENDPOINT":"http://127.0.0.1:3001","REACT_APP_VERIFIER_WS_ENDPOINT":"ws://127.0.0.1:3001"};
explorer-ui                | 
explorer-ui                |   Thank you for using runtime-env-cra!
explorer-ui                |   
explorer-ui                | 2023/06/25 20:24:49 [notice] 1#1: using the "epoll" event method
explorer-ui                | 2023/06/25 20:24:49 [notice] 1#1: nginx/1.24.0
explorer-ui                | 2023/06/25 20:24:49 [notice] 1#1: built by gcc 12.2.1 20220924 (Alpine 12.2.1_git20220924-r4) 
explorer-ui                | 2023/06/25 20:24:49 [notice] 1#1: OS: Linux 5.15.49-linuxkit
explorer-ui                | 2023/06/25 20:24:49 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576
explorer-ui                | 2023/06/25 20:24:49 [notice] 1#1: start worker processes
explorer-ui                | 2023/06/25 20:24:49 [notice] 1#1: start worker process 24
explorer-ui                | 2023/06/25 20:24:49 [notice] 1#1: start worker process 25
explorer-ui                | 2023/06/25 20:24:49 [notice] 1#1: start worker process 26
explorer-ui                | 2023/06/25 20:24:49 [notice] 1#1: start worker process 27
explorer-ui                | 2023/06/25 20:24:49 [notice] 1#1: start worker process 30
explorer-ui                | 2023/06/25 20:24:49 [emerg] 26#26: io_setup() failed (38: Function not implemented)
explorer-ui                | 2023/06/25 20:24:49 [emerg] 25#25: io_setup() failed (38: Function not implemented)
explorer-ui                | 2023/06/25 20:24:49 [emerg] 27#27: io_setup() failed (38: Function not implemented)
explorer-ui                | 2023/06/25 20:24:49 [emerg] 30#30: io_setup() failed (38: Function not implemented)
explorer-ui                | 2023/06/25 20:24:49 [emerg] 24#24: io_setup() failed (38: Function not implemented)
```

</details>