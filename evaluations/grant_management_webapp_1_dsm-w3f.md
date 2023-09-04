
# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Grant_management_webapp.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul>| [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0) | |
| **0b.** | Documentation | <ul><li>[x] </li></ul>| [User Guide](https://docs.google.com/document/d/1BLBns9tTUSpJMu7MhuQdLZYF8mUBQ8TD/edit) | |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul>| - | |
| **0d.** | Docker | <ul><li>[x] </li></ul>| - |  | 
| 1 | Frontend | <ul><li>[x] </li></ul>| [Github Repository](https://github.com/antiers-solutions/gmw-frontend) |  |
| 2 | Backend | <ul><li>[x] </li></ul>| [Github Repository](https://github.com/antiers-solutions/gmw-backend) |  |
| 3 | Backend | <ul><li>[x] </li></ul>| [Github Repository](https://github.com/antiers-solutions/gmw-backend) |  |
| 4 | Data Base | <ul><li>[x] </li></ul>| [Github Repository](https://github.com/antiers-solutions/gmw-backend) |  |

## Evaluation V3

### Frontend

I tested it again. The filter based on name, data, status, and level are working, but I noticed it isn't working when used with the search bar, because the filter returns the table in alphabetical order with all Projects. Furthermore, the milestone table doesn't have borders in the overview of the project. However, for now, these two are a minor problem.

Another problem I found is related to the login functionality via SingIn with GitHub. When I try to login with CORS disabled in my browser, the login page opens and closes quickly. With CORS enabled, the login page works without problems, but I need to disable the CORS to use the application. I can login using the token with CORS disabled. So it isn't a big problem.

I could merge a team and change the stats from a project without problems.

## Evaluation V2

### Backend

This time, I could use it with and without Docker.

Without Docker, the application starts loading the `db-dump` and MongoDB stores the data. I ran the API tests, and all tests passed.

<details>

```
user@localhost:~/Documents/webapp/gmw-backend$ npm run test:api:coverage

> gmw-backend@1.0.0 test:api:coverage
> nyc --reporter=text mocha --timeout 30000 -r ts-node/register ./src/tests/Api/api.test.ts



 Connecting to mongodb server 
 Connecting to redis server 
 Redis connected 
 MongoDB connected 
 Data Successfully Stored to DB from json file 
 Creating test database... 
  POST /api/user/signup
User Signup
    ✔ It should return authToken and user github data (86ms)

  GET /api/teams/get-all
    ✔ It should return teams data

  GET /api/teams/get-by-id/:teamId
    ✔ It should return team data by its id 
    ✔ Giving wrong team id and it should return message Not Found! 

  GET /api/teams/search-by-name
    ✔ It should return teams data by its name
    ✔ Giving it wrong name it should return message Not Found !

  PUT /api/teams/merge-team updates
    ✔ It should updates the team name and return updated team id
    ✔ Giving wrong team id and it should return message Not Found!

  GET /api/project/get-all
    ✔ It should return all Project data

  GET /api/project/get-by-id/:projectId
    ✔ It should return Project data by project-id

  GET /api/project/search-by-name 
    ✔ Ir should return Project data by project-name

  GET /api/project/filter
    ✔ It should return Project by project-filter (level and status)

  GET /api/milestone/get-all
    ✔ It should return milestone data

  GET /api/milestone/get-by-projectId/:projectId
    ✔ It should return Milestone data by project-id

  GET /api/graph/get-projects-count-by-status
    ✔ It should return Project Count by its status (96ms)

  GET /api/graph/get-projects-count-by-level
    ✔ It should return Project Count by its level (86ms)

  GET /get-rejected-accepted-projects-year
    ✔ It should return Project Count by its level (45ms)

  DELETE /api/user/logout
    ✔ It should logout the user and return data null

 Dropping the test database... 
 Redis client disconnected 
 MongoDB disconnected 

  18 passing (857ms)

---------------------------|---------|----------|---------|---------|--------------------------------------------
File                       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                          
---------------------------|---------|----------|---------|---------|--------------------------------------------
All files                  |   84.08 |    61.03 |   92.42 |   84.12 |                                            
 controller-helpers        |    67.1 |    41.02 |   88.23 |   66.99 |                                            
  githubHook.helper.ts     |   28.84 |     1.21 |      50 |   28.84 | 25-119,132-152                             
  graph.helper.ts          |   81.81 |    57.14 |     100 |   81.81 | 49,94,145-154,167,170                      
  milestone.helper.ts      |   80.76 |       50 |     100 |   80.76 | 49,57-63,100,108                           
  projects.helper.ts       |   54.54 |     37.5 |   85.71 |   54.54 | 53,65-71,93,99,137,146,165-184,242,251-341 
  teams.helper.ts          |      90 |    78.57 |     100 |   89.83 | 32,47,71,120,161,212                       
  user.helper.ts           |   73.33 |       70 |      80 |   73.33 | 57,77-93,144,175,189-200,221               
 controllers               |    97.6 |    79.54 |   96.15 |    97.6 |                                            
  graph.controller.ts      |     100 |      100 |     100 |     100 |                                            
  milestone.controller.ts  |     100 |     87.5 |     100 |     100 | 54                                         
  projects.controller.ts   |   91.89 |       75 |   85.71 |   91.89 | 116-122                                    
  teams.controller.ts      |     100 |    83.33 |     100 |     100 | 60-77                                      
  user.controller.ts       |     100 |       75 |     100 |     100 | 37                                         
 db-dump                   |   89.47 |      100 |     100 |   88.88 |                                            
  index.ts                 |   89.47 |      100 |     100 |   88.88 | 14-18                                      
 helpers                   |   68.18 |       40 |   57.14 |   68.29 |                                            
  jsondata.helper.ts       |   66.66 |    33.33 |     100 |      65 | 12,19-24,31-33                             
  octoConnection.helper.ts |   69.56 |       50 |      50 |   71.42 | 30,39-44                                   
 middleware                |   84.21 |       70 |     100 |   83.33 |                                            
  sessionCheck.ts          |   84.21 |       70 |     100 |   83.33 | 54-66                                      
 models                    |     100 |      100 |     100 |     100 |                                            
  index.ts                 |     100 |      100 |     100 |     100 |                                            
 models/Milestone          |     100 |      100 |     100 |     100 |                                            
  index.ts                 |     100 |      100 |     100 |     100 |                                            
 models/Project            |     100 |      100 |     100 |     100 |                                            
  index.ts                 |     100 |      100 |     100 |     100 |                                            
 models/Proposal           |     100 |      100 |     100 |     100 |                                            
  index.ts                 |     100 |      100 |     100 |     100 |                                            
 models/Team               |     100 |      100 |     100 |     100 |                                            
  index.ts                 |     100 |      100 |     100 |     100 |                                            
 models/Users              |     100 |      100 |     100 |     100 |                                            
  index.ts                 |     100 |      100 |     100 |     100 |                                            
 mongoDB                   |   86.66 |       50 |   88.88 |   86.66 |                                            
  connection.ts            |   86.66 |       50 |   88.88 |   86.66 | 28-29,64-70                                
 tests/Api                 |   96.92 |    74.81 |   97.95 |   97.29 |                                            
  api.test.ts              |   96.92 |    74.81 |   97.95 |   97.29 | 43-46,456-458                              
 tests/connection          |     100 |      100 |     100 |     100 |                                            
  connection.ts            |     100 |      100 |     100 |     100 |                                            
 validation                |    87.5 |       50 |     100 |   85.71 |                                            
  user.validation.ts       |    87.5 |       50 |     100 |   85.71 | 15                                         
---------------------------|---------|----------|---------|---------|--------------------------------------------
```

</details>


### Frontend

I tested it, and in general, it works. I needed to deactivate the CORS to API Requests works. I could log in via token or sign in with GitHub. I have some doubts and improvement suggestions:

- I think the names of projects and teams are too small to read it. It is possible to configure that?
- It would be nice to have a functionality to sort the tables by other columns than name. In this way, we could for example sort by date or cost.
- The application button in the specific team isn't working. Will it be implemented in the future in the next milestone? 
- The team merge and the project status changes only in the database or in GitHub too? I haven't tested this function yet. If it changes github, how could we test it without using it in the production repositories? How did you tested it?
- What do you mean by a project? It is the same of a grant application?
- The milestone tables don't render the table borders, it is possible to render it?

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
