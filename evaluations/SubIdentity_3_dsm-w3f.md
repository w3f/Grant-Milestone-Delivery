
# Evaluation

- **Status:** In Progress
- **Application Document:** [SubIdentity Application](https://github.com/w3f/Grants-Program/blob/master/applications/SubIdentity.md) 
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/pull/463

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [package](https://github.com/TDSoftware/subidentity-package/blob/main/LICENSE) [webapp](https://github.com/TDSoftware/subidentity-webapp/blob/main/LICENSE) [backend](https://github.com/TDSoftware/subidentity-backend/blob/main/LICENSE) | Apache 2.0 |
| 0b. | Documentation |<ul><li>[ ] </li></ul>| https://github.com/TDSoftware/subidentity-webapp/blob/main/README.md https://github.com/TDSoftware/subidentity-webapp/blob/main/docs/Tutorial.md https://github.com/TDSoftware/subidentity-package/blob/main/README.md https://github.com/TDSoftware/subidentity-backend/blob/main/readme.md | Needs more detailed tutorial for running locally. Code documentation is missing in some parts of the software. |
| 0c. | Testing |<ul><li>[ ] </li></ul>| https://github.com/TDSoftware/subidentity-webapp/blob/main/README.md	https://github.com/TDSoftware/subidentity-package/blob/main/README.md https://github.com/TDSoftware/subidentity-backend/blob/main/readme.md | Minor improvements are needed on unit tests. |
| 0d. | Article | <ul><li>[x] </li></ul>| [SubIdentity Medium Article](https://medium.com/@s.dobschal/subidentity-a-search-tool-for-identities-on-substrate-blockchains-8f9858e206e) | |
| 1a. | Implement logic for default plugins - backend |<ul><li>[ ] </li></ul>| https://github.com/TDSoftware/subidentity-backend/blob/main/src/api.ts https://github.com/TDSoftware/subidentity-backend/blob/main/src/indexer.ts | I was not able to run it locally.  |
| 1b. | Implement logic for default plugins - frontend |<ul><li>[ ] </li></ul>| https://github.com/TDSoftware/subidentity-webapp/blob/main/src/views/IdentityView.vue | I was not able to run it locally. |
| 2. | Implement components for displaying default plugins |<ul><li>[ ] </li></ul>| https://github.com/TDSoftware/subidentity-webapp/blob/main/src/views/IdentityView.vue | I was not able to run it locally. |
| 3. | Implement logic for sending tokens |<ul><li>[ ] </li></ul>| https://github.com/TDSoftware/subidentity-webapp/blob/main/src/components/partials/profile/SendTokenModal.vue | I was not able to run it locally. |
| 4. | Implement UI for sending tokens |<ul><li>[ ] </li></ul>| https://github.com/TDSoftware/subidentity-webapp/blob/main/src/components/partials/profile/SendTokenModal.vue | I was not able to run it locally. | 
| 5. | Quality Assurance |<ul><li>[ ] </li></ul>| Manual and automated QA | I was not able to find any e2e automated testing as stated that will be performed in the grant application. |


## General Notes


## Repositories
* [web application](https://github.com/TDSoftware/subidentity-webapp)
* [package](https://github.com/TDSoftware/subidentity-package)
* [backend](https://github.com/TDSoftware/subidentity-backend)


----------------------

# Findings :

## Hosted website (https://subidentity.tdsoftware.de) - Exploratory testing (performed by Lucas)

### Identity tab

https://subidentity.tdsoftware.de/chain/westend/identity/5DJNbshySebwXdM43ZjfX2UcM8aDFoWkMbCeoskjCNumZEvH

-> clicking on website link does not redirect to website properly

### Send Tokens button

Tried to send 1 WND to Gav but it only sent 0.000 ... 1 : https://westend.subscan.io/extrinsic/12390275-2
I'm assuming its sending plancks instead of full WNDs which is probably why trying to send 0.1 or 0.01 WND did not work

### New tabs/plugins (governance & treasury tabs)

Only implemeted for polkadot (on hosted website, atleast)
Governance tab is cool, treasury tab is a bit messy for some examples, I think due to a bug. See example: https://subidentity.tdsoftware.de/chain/polkadot/identity/12mP4sjCfKbDyMRAEyLpkeHeoYtS5USY4x34n9NMwQrcEyoh

## Documentation

Quick look at https://github.com/TDSoftware/subidentity-webapp/blob/main/docs/Tutorial.md seems like it wasn't updated to include the governance tabs.


## Unit tests (performed by Lucas and Diogo)

### subidentity-package

All tests pass, here is jest coverage output (by adding `--coverage` to `"test": "jest --config jestconfig.json --coverage"` in `package.json` and running `npm run test`):

```
$ npm run test                                   
> @npmjs_tdsoftware/subidentity@0.3.1 test
> jest --config jestconfig.json --coverage

 PASS  src/pagination.test.ts
 PASS  src/identities.test.ts
 PASS  src/utilities.test.ts
---------------|---------|----------|---------|---------|------------------------------------------------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                          
---------------|---------|----------|---------|---------|------------------------------------------------------------
All files      |   80.45 |    56.03 |   92.72 |      80 |                                                            
 identities.ts |   78.53 |    48.45 |   95.83 |   78.26 | 68,120-121,146,148,160-163,181-194,226-236,243-264,286,297 
 mockData.ts   |   95.83 |      100 |      95 |   95.65 | 101                                                        
 pagination.ts |     100 |      100 |     100 |     100 |                                                            
 utilities.ts  |   73.46 |    91.66 |   77.77 |      70 | 19-20,24-33,91-93                                          
---------------|---------|----------|---------|---------|------------------------------------------------------------

Test Suites: 3 passed, 3 total
Tests:       24 passed, 24 total
Snapshots:   0 total
Time:        2.692 s, estimated 18 s
Ran all test suites.
```

Some of it is perhaps a bit low (`identities.ts`, `utilities.ts`). Some error-handling paths and conditionals are not covered. The functions `_getIdentityFromIndex`, `connectToWsProvider` and `getChainStatus` are not covered at all. 

Running lint command 28 problems (0 errors, 28 warnings) were found. Please review which ones make sense to fix.

There are JSDoc for public methods but for private methods (prefix _) there is no code documentation. Is a good practice also document private methods. 

### subidentity-backend

Note that you need to run the following commands before the tests pass:

> Btw, this spins up a mysql database with default passwords, so don't expose the ports to the internet (3306 & 5001)

```
cp .env.template .env
docker-compose up -d
```

Then you can run `npm run test` (all tests pass).

Result (with coverage):

```
> subidentity-backend@0.3.0 test
> jest --forceExit --maxWorkers=1 --silent --coverage

 PASS  src/routes/identities/identityRouter.test.ts
 PASS  src/routes/versionRouter.test.ts
 PASS  src/routes/chains/chainRouter.test.ts
---------------------------------|---------|----------|---------|---------|---------------------
File                             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s   
---------------------------------|---------|----------|---------|---------|---------------------
All files                        |   67.86 |    43.07 |   51.72 |   70.08 |                     
 src                             |   93.54 |       50 |     100 |    93.1 |                     
  api.ts                         |   93.54 |       50 |     100 |    93.1 | 6,47                
 src/lib                         |   57.84 |     7.69 |   53.12 |   60.82 |                     
  MySQLRepository.ts             |   23.52 |        0 |       0 |      25 | 12-36               
  mysqlDatabase.ts               |      60 |    16.66 |   53.84 |   65.21 | 51-56,61-66,100-105 
  testSetup.ts                   |     100 |      100 |     100 |     100 |                     
  typeChecker.ts                 |   33.33 |        0 |       0 |   33.33 | 4-5,10-15,20-21,26  
 src/repositories                |   48.14 |        0 |   23.68 |   49.05 |                     
  accountRepository.ts           |   18.75 |        0 |       0 |      20 | 8-38                
  chainRepository.ts             |   66.66 |      100 |      50 |   66.66 | 22-35               
  councilMotionRepository.ts     |    62.5 |      100 |   33.33 |    62.5 | 8-13                
  councilMotionVoteRepository.ts |    62.5 |      100 |   33.33 |    62.5 | 8-13                
  identityRepository.ts          |   27.58 |        0 |       0 |   28.57 | 16-124              
  proposalRepository.ts          |      50 |      100 |      25 |      50 | 8-18                
  referendumVoteRepository.ts    |    62.5 |      100 |   33.33 |    62.5 | 8-14                
  tipProposalRepository.ts       |    62.5 |      100 |   33.33 |    62.5 | 8-13                
  tipRepository.ts               |   83.33 |      100 |      50 |   83.33 | 8                   
  wsProviderRepository.ts        |     100 |      100 |     100 |     100 |                     
 src/routes                      |     100 |      100 |     100 |     100 |                     
  versionRouter.ts               |     100 |      100 |     100 |     100 |                     
 src/routes/chains               |   86.66 |    71.42 |     100 |     100 |                     
  chainRouter.ts                 |   86.66 |    71.42 |     100 |     100 | 17-25               
 src/routes/identities           |   90.16 |    77.77 |     100 |   98.11 |                     
  identityRouter.ts              |   90.16 |    77.77 |     100 |   98.11 | 58                  
 src/services                    |   69.02 |    51.21 |    62.5 |   71.55 |                     
  chainService.ts                |   34.28 |        0 |      50 |   34.28 | 13-40,47,52-58,64   
  governanceService.ts           |     100 |      100 |     100 |     100 |                     
  identityService.ts             |   83.05 |    63.63 |   66.66 |   89.09 | 55,68-72            
  treasuryService.ts             |     100 |      100 |     100 |     100 |                     
  wsProviderService.ts           |      50 |      100 |       0 |      50 | 6-10                
 src/services/mapper             |   71.42 |    11.11 |   53.84 |   71.42 |                     
  accountActivityMapper.ts       |   57.14 |        0 |      50 |   57.14 | 14,30,46,62,78,94   
  chainMapper.ts                 |     100 |      100 |     100 |     100 |                     
 src/services/utils              |      80 |       40 |     100 |      80 |                     
  paginationUtil.ts              |      80 |       40 |     100 |      80 | 11,13               
 src/types/enums                 |     100 |      100 |     100 |     100 |                     
  ChainStatus.ts                 |     100 |      100 |     100 |     100 |                     
---------------------------------|---------|----------|---------|---------|---------------------

Test Suites: 3 passed, 3 total
Tests:       18 passed, 18 total
Snapshots:   0 total
Time:        3.052 s, estimated 5 s
Force exiting Jest: Have you considered using `--detectOpenHandles` to detect async operations that kept running after all tests were finished?
```

There are many modules with low coverage (less than 50%), please improve the testing coverage. 

The linter reported 107 problems (0 errors, 107 warnings). Please review and fix the warnings that make sense to fix.

There are many functions without or with incomplete documentation. Please improve the documentation coverage of the code.

### subidentity-webapp

Jest w/ `--coverage`:

```
----------------------------------------|---------|----------|---------|---------|--------------------------------------------------
File                                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                
----------------------------------------|---------|----------|---------|---------|--------------------------------------------------
All files                               |   60.49 |    54.49 |   62.37 |   58.49 |                                                  
 src                                    |     100 |      100 |     100 |     100 |                                                  
  constants.ts                          |     100 |      100 |     100 |     100 |                                                  
 src/assets/icons                       |     100 |      100 |     100 |     100 |                                                  
  add-circle-outline-sub.svg            |     100 |      100 |     100 |     100 |                                                  
  close-circle-outline.svg              |     100 |      100 |     100 |     100 |                                                  
  create-outline-primary.svg            |     100 |      100 |     100 |     100 |                                                  
  search-outline-muted.svg              |     100 |      100 |     100 |     100 |                                                  
  setting-lines.svg                     |     100 |      100 |     100 |     100 |                                                  
  warning-outline.svg                   |     100 |      100 |     100 |     100 |                                                  
 src/components/common                  |   78.84 |    63.46 |   70.37 |   75.58 |                                                  
  Accordion.vue                         |     100 |      100 |     100 |     100 |                                                  
  Alert.vue                             |     100 |      100 |     100 |     100 |                                                  
  CustomSelect.vue                      |   77.77 |    66.66 |   66.66 |   77.27 | 130-135,157                                      
  Modal.vue                             |   83.33 |      100 |      50 |      75 | 35                                               
  Pagination.vue                        |   64.86 |       40 |    62.5 |   62.85 | 100-107,113,115,120,150-156                      
  Spinner.vue                           |     100 |      100 |     100 |     100 |                                                  
  TimeAgo.vue                           |   85.71 |       75 |      75 |   83.33 | 30-31                                            
 src/components/partials/IdentitySearch |   83.33 |    84.44 |    82.6 |   82.35 |                                                  
  CustomNodeModal.vue                   |   86.84 |       84 |     100 |   85.71 | 127-134                                          
  IdentitySearch.vue                    |   81.42 |       85 |   76.47 |   80.59 | 176-179,199-203,214,271-275,291-295,311          
 src/components/partials/profile        |   88.46 |    83.33 |   84.61 |      88 |                                                  
  SendTokenModal.vue                    |   88.46 |    83.33 |   84.61 |      88 | 139-140,178-179,225-226                          
 src/store                              |   18.46 |    11.11 |      24 |   17.96 |                                                  
  index.ts                              |   18.46 |    11.11 |      24 |   17.96 | 64-82,94-122,141-307,316-317,322,327-331,337-440 
 src/util                               |   52.94 |    45.83 |   61.53 |    52.5 |                                                  
  chains.ts                             |   47.61 |        0 |     100 |    42.1 | 34-40,52-57                                      
  http.ts                               |   32.14 |       40 |   33.33 |      32 | 14-22,27-33,37-45                                
  storage.ts                            |   52.94 |    33.33 |      40 |   52.94 | 9,14,25-30,34                                    
  timeBetween.ts                        |   89.47 |     87.5 |     100 |   89.47 | 22-23                                            
----------------------------------------|---------|----------|---------|---------|--------------------------------------------------
Test Suites: 10 passed, 10 total
Tests:       40 passed, 40 total
Snapshots:   0 total
Time:        9.479 s, estimated 25 s
```

The store module has low testing coverage. Application state coverage should be covered by testing to guarantee that it works properly. Maybe an automated e2e test would help in this part. 

There is no source code documentation at all. 

Lint found 2 problems (0 errors, 2 warnings). Please review, they look pretty easy to fix. 

I was not able to find the automated e2e testing stated in the grant application. Were any automated e2e testing performed? (Selenium, Cypress)



### Running the software (for development)

During the step of running the scheduler `npm run dev-scheduler` the following message showed up:


```2022-09-12 09:30:02          API-WS: disconnected from ws://fake.io: 1006:: connection failed
Could not fetch identities scheduled for ws://fake.io
Could not connect to endpoint.
```
How can I change the ws provider?


### Running the software (for production)


During the step of running backend (in production mode), this error showed up:

`npm run start-listener`

`Error: Cannot find module 'minimist'`

Then I ran `npm install minimist` and bypassed this problem. Please notice that this shouldn't be necessary.

After that, I ran again and got this other error:

```
(node:91628) UnhandledPromiseRejectionWarning: Error: Could not find chain with given wsProvider
    at Object.<anonymous> (/home/diogo/Documents/W3F/Subidentity/subidentity-backend/dist/src/services/chainService.js:76:23) 
```

How can I set the wsProvider or bypass this problem? 


### Accessing the API

I tried to make some requests for http://localhost:5001 while the backend was running but the return was a 404 `Cannot GET /`.


Please provide more detailed instructions for running the application locally. I think a tutorial should be a good way to fulfill this requirement.
