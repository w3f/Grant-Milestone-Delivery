
# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Grant_management_webapp.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul>| [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0) | |
| **0b.** | Documentation | <ul><li>[ ] </li></ul>| [User Guide](https://docs.google.com/document/d/1BLBns9tTUSpJMu7MhuQdLZYF8mUBQ8TD/edit) | Not fully evaluated yet. |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul>| - | Not fully evaluated yet. |
| **0d.** | Docker | <ul><li>[ ] </li></ul>| - | Not fully evaluated yet.   | 
| 1 | Frontend | <ul><li>[ ] </li></ul>| [Github Repository](https://github.com/antiers-solutions/gmw-frontend) | Not fully evaluated yet.  |
| 2 | Backend | <ul><li>[ ] </li></ul>| [Github Repository](https://github.com/antiers-solutions/gmw-backend) | Not fully evaluated yet.  |
| 3 | Backend | <ul><li>[ ] </li></ul>| [Github Repository](https://github.com/antiers-solutions/gmw-backend) | Not fully evaluated yet.  |
| 4 | Data Base | <ul><li>[ ] </li></ul>| [Github Repository](https://github.com/antiers-solutions/gmw-backend) | Not fully evaluated yet.  |

## Evaluation V1

### Backend

When I tried to run the Docker, I received this error.

```
user@localhost:~/Documents/webapp/gmw-frontend$ docker logs con_redis 
1:C 11 Aug 2023 15:12:40.105 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 11 Aug 2023 15:12:40.105 # Redis version=7.0.12, bits=64, commit=00000000, modified=0, pid=1, just started
1:C 11 Aug 2023 15:12:40.105 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
1:M 11 Aug 2023 15:12:40.105 * monotonic clock: POSIX clock_gettime
1:M 11 Aug 2023 15:12:40.106 * Running mode=standalone, port=6379.
1:M 11 Aug 2023 15:12:40.106 # Server initialized
1:M 11 Aug 2023 15:12:40.106 # WARNING Memory overcommit must be enabled! Without it, a background save or replication may fail under low memory condition. Being disabled, it can can also cause failures without low memory condition, see https://github.com/jemalloc/jemalloc/issues/1328. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
1:M 11 Aug 2023 15:12:40.106 * Ready to accept connections


user@localhost:~/Documents/webapp/gmw-frontend$ docker logs gmw_backend

> gmw-backend@1.0.0 prod
> NODE_ENV=prod node ./dist/server

 #Production Mode
 Connecting to mongodb server
 MongoDB connected
 Redis Server Error:  Error: connect ECONNREFUSED 127.0.0.1:6379
	at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1187:16) {
  errno: -111,
  code: 'ECONNREFUSED',
  syscall: 'connect',
  address: '127.0.0.1',
  port: 6379
}
 Reconnecting to redis server
 Redis Server Error:  Error: connect ECONNREFUSED 127.0.0.1:6379
	at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1187:16) {
  errno: -111,
  code: 'ECONNREFUSED',
  syscall: 'connect',
  address: '127.0.0.1',
  port: 6379
}
```

Docker seems to have started the Redis service, but the app couldn't connect to it. So I ran `redis-server` outside the Docker and solved this problem.

When I tried to use the API, I received `Unauthorized`. I'm having some problems to setup the backend. Could you explain how to properly config the application and the `.env`?

I ran the ` npm run test:coverage`, and all tests passed with good coverage.

<details>

```
user@localhost:~/Documents/webapp/gmw-backend$   npm run test:coverage

> gmw-backend@1.0.0 test:coverage
> nyc --reporter=text mocha -r ts-node/register ./src/tests/Unit/index.test.ts



  Unit Tests 
    Get Project Count By Status
      ✔ It should return data of type array 
    Get Project Count By Level
      ✔ It should return data of type array 
    Get Rejected And Accepted Projects Body
      ✔ It should return data of type array 
    Get all Teams Data 
      ✔ It should return object data of all teams 
    Get teams data by id 
      ✔ It should return object data of team 
      ✔ giving wrong teams id, it should return object that contains error and status code
    Get teams data by name 
      ✔ It should return object data of team 
      ✔ giving wrong teams name, it should return object that contains error and status code
    Modify teams data 
      ✔ giving wrong team id, it should return object that contains error and status code
    Get all Projects Data 
      ✔ It should return object data which contains projects of type array 
    Get Projects Data by id
      ✔ It should return object projects of type array 
      ✔ It should return object that contains error and status code 
    Get Projects Data by name
      ✔ It should return object projects of type array 
      ✔ It should return object that contains error and status code 
    Get filteredProject 
      ✔ It should return object projects of type array 
      ✔ giving wrong parameters, it should return object that contains error and status code
    Update project status 
      ✔ It should return data success and error false 
      ✔ giving wrong id, it should return object that contains error and status code
    Get MileStone Data 
      ✔ It should return object data which contains milestones of type array 
    Get MileStone Data by projectId
      ✔ It should return object data which contains data of type array 
      ✔ It should return object that contains error and status code 
    Making request for get pulls data to OctoHelper
      ✔ It should return data 


  22 passing (64ms)

--------------------------------|---------|----------|---------|---------|-----------------------------
File                            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s           
--------------------------------|---------|----------|---------|---------|-----------------------------
All files                       |   90.69 |     68.4 |   96.62 |   90.73 |                             
 controller-helpers             |   76.32 |    56.09 |     100 |   76.21 |                             
  graph.helper.ts               |   81.81 |    57.14 |     100 |   81.81 | 49,94,145-154,167,170       
  milestone.helper.ts           |   84.61 |     62.5 |     100 |   84.61 | 49,57-63,108                
  projects.helper.ts            |   68.18 |    56.25 |     100 |   68.18 | 53,65-71,99,146,184,251-341 
  teams.helper.ts               |   76.66 |    53.57 |     100 |   76.27 | 42,66-72,121,162,185-213    
 helpers                        |   73.91 |       50 |   66.66 |   76.19 |                             
  octoConnection.helper.ts      |   73.91 |       50 |   66.66 |   76.19 | 39-44                       
 models                         |     100 |      100 |     100 |     100 |                             
  index.ts                      |     100 |      100 |     100 |     100 |                             
 models/Milestone               |     100 |      100 |     100 |     100 |                             
  index.ts                      |     100 |      100 |     100 |     100 |                             
 models/Project                 |     100 |      100 |     100 |     100 |                             
  index.ts                      |     100 |      100 |     100 |     100 |                             
 models/Proposal                |     100 |      100 |     100 |     100 |                             
  index.ts                      |     100 |      100 |     100 |     100 |                             
 models/Team                    |     100 |      100 |     100 |     100 |                             
  index.ts                      |     100 |      100 |     100 |     100 |                             
 models/Users                   |     100 |      100 |     100 |     100 |                             
  index.ts                      |     100 |      100 |     100 |     100 |                             
 tests/Unit                     |     100 |      100 |     100 |     100 |                             
  index.test.ts                 |     100 |      100 |     100 |     100 |                             
  mockedData.ts                 |     100 |      100 |     100 |     100 |                             
 tests/Unit/GraphTests          |    92.3 |       75 |      90 |    92.1 |                             
  graphs.test.ts                |    92.3 |       75 |      90 |    92.1 | 57-59                       
 tests/Unit/MileStoneTests      |     100 |       75 |     100 |     100 |                             
  milestones.test.ts            |     100 |       75 |     100 |     100 | 21-61                       
 tests/Unit/OctoConnectionTests |     100 |      100 |     100 |     100 |                             
  octoConnection.test.ts        |     100 |      100 |     100 |     100 |                             
 tests/Unit/ProjectsTests       |     100 |       75 |     100 |     100 |                             
  projects.test.ts              |     100 |       75 |     100 |     100 | 21-200                      
 tests/Unit/TeamsTests          |     100 |       75 |     100 |     100 |                             
  teams.test.ts                 |     100 |       75 |     100 |     100 | 21-111                      
--------------------------------|---------|----------|---------|---------|-----------------------------
```

</details>

I ran `npm run lint` and received some warnings, for example:

<details>


```
/home/user/Documents/webapp/gmw-backend/src/tests/Unit/ProjectsTests/projects.test.ts
   23:44  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
   89:35  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  143:35  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  200:48  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/webapp/gmw-backend/src/tests/Unit/TeamsTests/teams.test.ts
   23:62  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
   60:48  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  111:63  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/webapp/gmw-backend/src/tests/Unit/mockedData.ts
 	1:24  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
   145:26  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
   328:25  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  9704:28  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/home/user/Documents/webapp/gmw-backend/src/utils/helper.utils.ts
  17:18  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  25:20  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  33:19  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  41:18  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  48:20  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

✖ 96 problems (0 errors, 96 warnings)

```

</details>


### Frontend

I was able to start the frontend. However, I couldn't test it because I couldn't properly run the backend. All automated tests passed.

<details>

```

user@localhost:~/Documents/webapp/gmw-frontend$ npm run test --coverage

> gmw-app@0.1.0 test
> npx jest

 PASS  src/tests/utils/UserGetApi.test.tsx
 PASS  src/tests/utils/GetStatusClass.test.tsx
 PASS  src/tests/utils/Api.test.tsx
 PASS  src/tests/utils/FirstLetterCapitalize.test.tsx
 PASS  src/tests/utils/AddZero.test.tsx
 PASS  src/tests/components/ProfileDropDown.test.tsx
 PASS  src/tests/components/ToolTip.test.tsx
 PASS  src/tests/components/Header.test.tsx
 PASS  src/tests/components/FormikControls.test.tsx
 PASS  src/tests/components/FilterDropdown.test.tsx
 PASS  src/tests/components/CustomPagination.test.tsx
 PASS  src/tests/pages/Dashboard.test.tsx
 PASS  src/tests/pages/TeamMainPage.test.tsx
 PASS  src/tests/pages/Team.test.tsx
 PASS  src/tests/pages/Projects.test.tsx
 PASS  src/tests/components/TeamMerge.test.tsx

Test Suites: 16 passed, 16 total
Tests:   	17 passed, 17 total
Snapshots:   0 total
Time:    	5.048 s, estimated 7 s
Ran all test suites.

```

</details>
