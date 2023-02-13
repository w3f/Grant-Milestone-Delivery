# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/subrelay.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/subrelay/subrelay-api/blob/main/LICENSE https://github.com/subrelay/interface/blob/main/LICENSE | | 
| 0b.  | Documentation |<ul><li>[ ] </li></ul>| https://github.com/subrelay/interface#readme https://github.com/subrelay/subrelay-api#readme  https://api.subrelay.xyz/api | Not fully evaluated yet | 
| 0c. | Docker file |<ul><li>[ ] </li></ul>| https://github.com/subrelay/subrelay-api#self-hosting | Fail to start | 
| 1.  | Feature: Authentication by PolkadotJs wallet |<ul><li>[ ] </li></ul>| https://app.subrelay.xyz/#/welcome | Not fully evaluated yet |
| 2.  | Feature: Create a new workflow |<ul><li>[ ] </li></ul>| https://app.subrelay.xyz/#/editor/new-flow/trigger | Not fully evaluated yet | 
| 3.  | Feature: List of workflows |<ul><li>[ ] </li></ul>| https://app.subrelay.xyz/#/home/workflows | Not fully evaluated yet | 
| 4.  | Feature: Executions of workflows |<ul><li>[ ] </li></ul>| https://app.subrelay.xyz/#/home/history | Does not display the history | 
| 5.  | API |<ul><li>[ ] </li></ul>| https://api.subrelay.xyz/api | Fail to start | 
| 6.  | Integration |<ul><li>[ ] </li></ul>| https://app.subrelay.xyz | Not fully evaluated yet | 

## Evaluation V1

### Documentation

Please provide a testing guide for the application with examples and expected results. We also notice that in the installation guide, the interface is pointing to an external server (see .env). Please provide instructions to test all components locally.

### Interface

We tried the interface locally but using an external API. We notice that when a workflow is created and executed the events don't appear in history.


*Workflow*
![image (5)](https://user-images.githubusercontent.com/112647953/218554654-60b4b6e8-2aa4-4432-869c-cbd31b637d76.png)

*History*

![image (6)](https://user-images.githubusercontent.com/112647953/218554719-6028d51d-4bc3-4616-83e8-b09c93ff7ba0.png)

### Subrelay API

I ran `npm install` and got some vulnerabilities.

```
user@localhost:~/Documents/Subrelay/subrelay-api$ npm install
npm WARN ERESOLVE overriding peer dependency
npm WARN While resolving: jest-config@28.1.3
npm WARN Found: @types/node@18.11.7
npm WARN node_modules/jest-config/node_modules/@types/node
npm WARN
npm WARN Could not resolve dependency:
npm WARN peerOptional @types/node@"*" from jest-config@28.1.3
npm WARN node_modules/jest-config
npm WARN   jest-config@"^28.1.3" from @jest/core@28.1.3
npm WARN   node_modules/@jest/core
npm WARN   1 more (jest-cli)

up to date, audited 884 packages in 5s

105 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (1 moderate, 4 high, 3 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

I ran `npm start` and got this error:

```
user@localhost:~/Documents/Subrelay/subrelay-api$ npm start

> subrelay-api@0.0.1 start
> nest start

event-service/src/db/db.service.ts:7:35 - error TS2307: Cannot find module 'src/common/type' or its corresponding type declarations.

7 import { JobEvent, JobName } from 'src/common/type';
                                	~~~~~~~~~~~~~~~~~
event-service/src/job/job.service.ts:5:35 - error TS2307: Cannot find module 'src/common/type' or its corresponding type declarations.

5 import { JobEvent, JobName } from 'src/common/type';
                                	~~~~~~~~~~~~~~~~~
event-service/src/job/job.service.ts:30:68 - error TS2554: Expected 2 arguments, but got 3.

30       	await this.substrateService.subscribeNewHeads(rpc, name, chainUuid);
                                                                  	~~~~~~~~~
event-service/src/substrate/substrate.service.ts:7:28 - error TS2307: Cannot find module 'src/common/type' or its corresponding type declarations.

7 import { ChainEvent } from 'src/common/type';
                         	~~~~~~~~~~~~~~~~~

Found 4 error(s).

```

I ran `docker-compose up -d --build` and got the same error as before to start the services:


```
user@localhost:~/Documents/Subrelay/subrelay-api$ docker-compose up -d --build
Building api
Step 1/8 : FROM node:18 As development
 ---> 451d8f004bba
Step 2/8 : WORKDIR /app
 ---> Using cache
 ---> 50b92b11069d
Step 3/8 : COPY package*.json ./
 ---> Using cache
 ---> d7caf2f822e7
Step 4/8 : RUN npm install
 ---> Using cache
 ---> da290eab8c4e
Step 5/8 : COPY . .
 ---> Using cache
 ---> 26d5726270a5
Step 6/8 : RUN npm run build
 ---> Running in 34058a70c1d7

> subrelay-api@0.0.1 prebuild
> rimraf dist


> subrelay-api@0.0.1 build
> nest build

Found 4 error(s).

event-service/src/db/db.service.ts:7:35 - error TS2307: Cannot find module 'src/common/type' or its corresponding type declarations.

7 import { JobEvent, JobName } from 'src/common/type';
                                	~~~~~~~~~~~~~~~~~
event-service/src/job/job.service.ts:5:35 - error TS2307: Cannot find module 'src/common/type' or its corresponding type declarations.

5 import { JobEvent, JobName } from 'src/common/type';
                                	~~~~~~~~~~~~~~~~~
event-service/src/job/job.service.ts:30:68 - error TS2554: Expected 2 arguments, but got 3.

30       	await this.substrateService.subscribeNewHeads(rpc, name, chainUuid);
                                                                  	~~~~~~~~~
event-service/src/substrate/substrate.service.ts:7:28 - error TS2307: Cannot find module 'src/common/type' or its corresponding type declarations.

7 import { ChainEvent } from 'src/common/type';
                         	~~~~~~~~~~~~~~~~~

ERROR: Service 'api' failed to build: The command '/bin/sh -c npm run build' returned a non-zero code: 1

ERROR: Service 'api' failed to build: The command '/bin/sh -c npm run build' returned a non-zero code: 1
```

To test the subrelay-API, I need a testing Guide with examples to follow.


### Code Quality

For the Interface, I used EsLint to check syntax and find some problems.

```
user@localhost:~/Documents/Subrelay/interface$ npx eslint src

/home/user/Documents/Subrelay/interface/src/components/__tests__/HelloWorld.cy.js
   3:1  error  'describe' is not defined  no-undef
   4:3  error  'it' is not defined    	no-undef
   5:5  error  'cy' is not defined    	no-undef
   8:3  error  'it' is not defined    	no-undef
   9:5  error  'cy' is not defined    	no-undef
  10:5  error  'cy' is not defined    	no-undef

/home/user/Documents/Subrelay/interface/src/composables/query.js
  131:53  error  Unexpected constant condition                                     	no-constant-condition
  165:9   error  Must use `.value` to read or write the value wrapped by `computed()`  vue/no-ref-as-operand
  179:53  error  Unexpected constant condition                                     	no-constant-condition

/home/user/Documents/Subrelay/interface/src/main.js
  17:15  error  Component name "Icon" should always be multi-word  vue/multi-word-component-names

/home/user/Documents/Subrelay/interface/src/store/history.js
  2:8  error  'axios' is defined but never used  no-unused-vars

/home/user/Documents/Subrelay/interface/src/store/workflow.js
  1:8  error  'axios' is defined but never used  no-unused-vars

✖ 12 problems (12 errors, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```
