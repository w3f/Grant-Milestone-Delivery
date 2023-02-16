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
| 4.  | Feature: Executions of workflows |<ul><li>[ ] </li></ul>| https://app.subrelay.xyz/#/home/history | Not fully evaluated yet | 
| 5.  | API |<ul><li>[ ] </li></ul>| https://api.subrelay.xyz/api | Fail to start | 
| 6.  | Integration |<ul><li>[ ] </li></ul>| https://app.subrelay.xyz | Not fully evaluated yet | 

## Evaluation V2

### Documentation

A quick start guide was provided. However, it is not enough to run the system properly. See the problems below.


Docker compose is still failing to start some services. The api and event service is restarting due to the lack of some dist files. See the traces below:

```
docker ps
CONTAINER ID   IMAGE                    COMMAND                  CREATED          STATUS                          PORTS                                            NAMES
098a3496ee76   subrelay-api_api         "docker-entrypoint.s…"   16 minutes ago   Restarting (1) 59 seconds ago                                                    subrelay-api_api_1
e2035ae2771f   subrelay-event-service   "docker-entrypoint.s…"   16 minutes ago   Restarting (1) 55 seconds ago                                                    subrelay-api_event-service_1
93d06cf0dfcb   dpage/pgadmin4           "/entrypoint.sh"         16 minutes ago   Up 16 minutes                   443/tcp, 0.0.0.0:5050->80/tcp, :::5050->80/tcp   subrelay-api_pgadmin_1
5a8edece279f   postgres                 "docker-entrypoint.s…"   16 minutes ago   Up 16 minutes                   0.0.0.0:5432->5432/tcp, :::5432->5432/tcp        subrelay-api_postgres_1
4643bf06c5f8   redis                    "docker-entrypoint.s…"   16 minutes ago   Up 16 minutes                   6379/tcp                                         subrelay-api_redis_1

```
Inspecting the logs of the api service:
```
docker logs subrelay-api_api_1
node:internal/modules/cjs/loader:1050
  throw err;
  ^                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                             
Error: Cannot find module '/app/dist/main'                                                                                                                                                                                                                   
    at Module._resolveFilename (node:internal/modules/cjs/loader:1047:15)                                                                                                                                                                                    
    at Module._load (node:internal/modules/cjs/loader:893:27)                                                                                                                                                                                                
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)                                                                                                                                                                    
    at node:internal/main/run_main_module:23:47 {                                                                                                                                                                                                            
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v18.14.0
```
Inspecting the logs of the event service. In this case seem that the database tables are not created only with the quickstart instructions.

```
docker logs subrelay-api_event-service_1

> event-service@0.0.1 start
> nest start

[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [NestFactory] Starting Nest application...
[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +43ms
[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [InstanceLoader] DiscoveryModule dependencies initialized +1ms
[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +1ms
[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [InstanceLoader] BullModule dependencies initialized +0ms
[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [InstanceLoader] ScheduleModule dependencies initialized +0ms
[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [InstanceLoader] EventEmitterModule dependencies initialized +1ms
[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [InstanceLoader] BullModule dependencies initialized +1ms
[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [InstanceLoader] DbModule dependencies initialized +0ms
[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [InstanceLoader] AppModule dependencies initialized +1ms
[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [InstanceLoader] BullModule dependencies initialized +6ms
[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [InstanceLoader] SubstrateModule dependencies initialized +1ms
[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [InstanceLoader] JobModule dependencies initialized +0ms
[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [RoutesResolver] AppController {/}: +8ms
[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [RouterExplorer] Mapped {/, GET} route +4ms
[Nest] 31  - 02/16/2023, 8:07:03 PM   DEBUG [DbService] Created a connection to DB
[Nest] 31  - 02/16/2023, 8:07:03 PM   DEBUG [DbService] Monitoring workflow . . .
[Nest] 31  - 02/16/2023, 8:07:03 PM     LOG [NestApplication] Nest application successfully started +12ms

/app/node_modules/pg-protocol/src/parser.ts:369
      name === 'notice' ? new NoticeMessage(length, messageValue) : new DatabaseError(messageValue, length, name)
                                                                    ^
error: relation "workflow_version" does not exist
    at Parser.parseErrorMessage (/app/node_modules/pg-protocol/src/parser.ts:369:69)
    at Parser.handlePacket (/app/node_modules/pg-protocol/src/parser.ts:188:21)
    at Parser.parse (/app/node_modules/pg-protocol/src/parser.ts:103:30)
    at Socket.<anonymous> (/app/node_modules/pg-protocol/src/index.ts:7:48)
    at Socket.emit (node:events:513:28)
    at addChunk (node:internal/streams/readable:324:12)
    at readableAddChunk (node:internal/streams/readable:297:9)
    at Socket.Readable.push (node:internal/streams/readable:234:10)
    at TCP.onStreamRead (node:internal/stream_base_commons:190:23)


```

### Code Quality
The problems reported by EsLint have been fixed.

### System Test

It seems that the history is now working (testes with the on-line app). We will test again when all parts are available for testing locally.


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
