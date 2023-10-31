# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul>| [GPLv3](https://github.com/Zeeve-App/larch/blob/8c4e3aa5199e35885ce7c5b8fbc02901077b3e0d/license) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul>| [Docs](https://github.com/Zeeve-App/larch/blob/84da44beea04a399d91b1eb88d586e5e7e5c0058/readme.md) | - |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul>| [Tutorial](https://github.com/Zeeve-App/larch/blob/84da44beea04a399d91b1eb88d586e5e7e5c0058/docs/user/tutorial.md), [Test instructions](https://github.com/Zeeve-App/larch/blob/84da44beea04a399d91b1eb88d586e5e7e5c0058/docs/development/test_coverage.md) | See [Testing Guide Feedback](#testing-guide-feedback) |
| 0d. | Standalone Executable | <ul><li>[x] </li></ul>| [Build instructions](https://github.com/Zeeve-App/larch/blob/84da44beea04a399d91b1eb88d586e5e7e5c0058/docs/development/binary_build.md) | Binary build passes and can be executed. The Web UI is accessible. |
| 0e. | Article | <ul><li>[ ] </li></ul>| (missing) | Spec: Using our PR channels, we will publish an **article** that explains the high-level overview of automation as part of the grant, followed by a set of extensive examples. |
| 1. | Design monitoring strategy | <ul><li>[ ] </li></ul>| (currently not working, see [Testing Guide Feedback](#testing-guide-feedback)) | Spec: The Zombie-net doesn't provide any embedded monitoring tool, we will with the zombie-net setup automation, automatically setup prometheus and Grafana while configuring the zombie-net. |
| 2. | Setup Dashboard | <ul><li>[ ] </li></ul>| (currently not working, see [Testing Guide Feedback](#testing-guide-feedback)) | Spec: The deployment done for Prometheus and Grafana will show standard Dashboard having system resource and zombie-net specific details shown on the aforementioned Grafana GUI Dashboard. |
| 3. | Activity | <ul><li>[ ] </li></ul>| (currently not working, see [Testing Guide Feedback](#testing-guide-feedback)) | Spec: The system will log all the activities and operations perform by the different users. |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Testing Guide Feedback

- [x] npm build passes:
  ```bash
  larch % npm i
    added 1289 packages, and audited 1293 packages in 8s

    213 packages are looking for funding
    run `npm fund` for details

    found 0 vulnerabilities
  larch % npm run build

    > build
    > ASSET_URL='/ui' lerna run build && cp -r packages/ui/dist packages/backend/dist/ui

    lerna notice cli v7.1.4
    
        ✔  larch-backend:build (1s)
        ✔  larch-cli:build (977ms)
        ✔  larch-ui:build (5s)

    ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

    >  Lerna (powered by Nx)   Successfully ran target build for 3 projects (5s)
  ```
- [x] binary build passes, creates binary:
  ```bash
  larch % npx lerna run package:linux
    lerna notice cli v7.1.4

    > larch-cli:"package:linux"

    > larch-cli@1.4.0 package:linux
    > pkg . -o ../../bins/larch-linux -t node18-linux
    > pkg@5.8.1
    > Fetching base Node.js binaries to PKG_CACHE_PATH

    ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

    >  Lerna (powered by Nx)   Successfully ran target package:linux for project larch-cli (18s)
    larch % ll bins                    
    total 130488
    -rwxr-xr-x@ 1 xxx  staff  65938514 Oct 16 11:14 larch-linux
  ```
- [x] tests pass:
  ```bash
  ~/larch# npm run test

  > test
  > lerna run test

  lerna notice cli v7.1.4

  > larch-backend:build

  > larch-backend@1.5.0 build
  > node scripts/version.mjs && node scripts/dashboard.mjs && rm -rf dist && tsc
  /root/larch/packages/backend/scripts
  /root/larch/packages/backend/scripts

  > larch-backend:test

  > larch-backend@1.5.0 test
  > vitest run
  RUN  v0.32.2 /root/larch/packages/backend
  stdout | unknown test
  sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
  stdout | unknown test
  sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
  stdout | unknown test
  Executing DB migrations
  stdout | unknown test
  Done executing DB migrations
  stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
  podman pod ps -f label=zombie-ns=zombie-6b302120 --format {{.Name}}
  stdout | unknown test
  Executing DB migrations
  stdout | __tests__/utils.test.ts > file download > should download file
  Total file size: 187351204, Current file size: 5846400, Percent downloaded: 3.12
  stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
  {
    id: '6f4b84dd-ca2b-4490-b4d6-9f1ab4531c9e',
    intention: 'NETWORK_CLEANUP',
    relatedId: 'zombie-6b302120',
    command: 'podman pod ps -f label=zombie-ns=zombie-6b302120 --format {{.Name}}',
    stdError: '',
    stdOutput: '',
    statusCode: 0,
    createdAt: '2023-10-31 13:54:15'
  }
  stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
  podman pod rm -f 
  stdout | unknown test
  Done executing DB migrations
  ui enabled
  api enabled
  GET /
  GET /ui/*
  GET /api/larch/network
  POST /api/larch/network/list
  POST /api/larch/network/create
  POST /api/larch/network/create
  POST /api/larch/network/update
  POST /api/larch/network/update
  GET /api/larch/network/delete
  POST /api/larch/network/test
  POST /api/larch/network/test
  GET /api/larch/network/run
  POST /api/larch/network/run-list
  GET /api/larch/network/status
  POST /api/larch/template/create
  POST /api/larch/template/create
  GET /api/larch/template
  POST /api/larch/template/update
  POST /api/larch/template/update
  GET /api/larch/template/delete
  POST /api/larch/template/list
  POST /api/larch/template/clone
  GET /api/larch/user_operation
  GET /api/larch/user_operation/purge
  POST /api/larch/user_operation/list
  GET /api/larch/version
  app is listening on port 9000
  stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
  {
    id: '76314b5c-bb0c-4428-9259-9211ebf69dbe',
    intention: 'NETWORK_CLEANUP',
    relatedId: 'zombie-6b302120',
    command: 'podman pod rm -f ',
    stdError: 'RXJyb3I6IG5hbWUgb3IgSUQgY2Fubm90IGJlIGVtcHR5Cg==',
    stdOutput: '',
    statusCode: 125,
    createdAt: '2023-10-31 13:54:16'
  }
  { removePodCode: 125 }
  stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
  podman network rm zombie-6b302120
  stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
  {
    id: '63c3f680-4ad7-4a15-b718-dd317dedec39',
    intention: 'NETWORK_CLEANUP',
    relatedId: 'zombie-6b302120',
    command: 'podman network rm zombie-6b302120',
    stdError: 'RXJyb3I6IHVuYWJsZSB0byBmaW5kIG5ldHdvcmsgY29uZmlndXJhdGlvbiBmb3Igem9tYmllLTZiMzAyMTIwOiBuZXR3b3JrIG5vdCBmb3VuZAo=',
    stdOutput: '',
    statusCode: 1,
    createdAt: '2023-10-31 13:54:16'
  }
  { removeNetworkCode: 1 }
  ✓ __tests__/module.providers.test.ts  (2 tests) 464ms
  stdout | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  Downloading Zombienet binary with version: 1.3.71
  stdout | __tests__/utils.test.ts > file download > should download file
  Total file size: 187351204, Current file size: 23747904, Percent downloaded: 12.68
  stdout | __tests__/utils.test.ts > file download > should download file
  Total file size: 187351204, Current file size: 43092288, Percent downloaded: 23.00
  stdout | __tests__/utils.test.ts > file download > should download file
  Total file size: 187351204, Current file size: 60645760, Percent downloaded: 32.37
  stdout | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  Total file size: 207956730, Current file size: 19910208, Percent downloaded: 9.57
  stdout | __tests__/utils.test.ts > file download > should download file
  Total file size: 187351204, Current file size: 78495680, Percent downloaded: 41.90
  stdout | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  Total file size: 207956730, Current file size: 38391424, Percent downloaded: 18.46
  stdout | __tests__/utils.test.ts > file download > should download file
  Total file size: 187351204, Current file size: 97701504, Percent downloaded: 52.15
  stdout | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  Total file size: 207956730, Current file size: 58059712, Percent downloaded: 27.92
  stdout | __tests__/utils.test.ts > file download > should download file
  Total file size: 187351204, Current file size: 115452992, Percent downloaded: 61.62
  stdout | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  Total file size: 207956730, Current file size: 76903808, Percent downloaded: 36.98
  stdout | __tests__/utils.test.ts > file download > should download file
  Total file size: 187351204, Current file size: 133249728, Percent downloaded: 71.12
  stdout | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  Total file size: 207956730, Current file size: 94023808, Percent downloaded: 45.21
  stdout | __tests__/utils.test.ts > file download > should download file
  Total file size: 187351204, Current file size: 152818368, Percent downloaded: 81.57
  stdout | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  Total file size: 207956730, Current file size: 114839104, Percent downloaded: 55.22
  stdout | __tests__/utils.test.ts > file download > should download file
  Total file size: 187351204, Current file size: 170261056, Percent downloaded: 90.88
  stdout | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  Total file size: 207956730, Current file size: 132561408, Percent downloaded: 63.74
  stdout | __tests__/utils.test.ts > file download > should download file
  Total file size: 187351204, Current file size: 187351204, Percent downloaded: 100.00
  ✓ __tests__/utils.test.ts  (4 tests) 5205ms
  stdout | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  Total file size: 207956730, Current file size: 150893952, Percent downloaded: 72.56
  stdout | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  Total file size: 207956730, Current file size: 171089152, Percent downloaded: 82.27
  stdout | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  <empty line>
  stderr | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  AppError: No exec record found for "TestingNetwork"
      at Module.getExecStatusCode (/root/larch/packages/backend/src/modules/models/exec_run.ts:172:11)
      at networkStatusUpdate (/root/larch/packages/backend/src/modules/network.ts:48:22) {
    cause: undefined,
    errorKind: 'NOT_FOUND'
  }
  stderr | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  <empty line>
  stdout | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  Total file size: 207956730, Current file size: 188340160, Percent downloaded: 90.57
  stderr | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  <empty line>
  stdout | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  Total file size: 207956730, Current file size: 207956730, Percent downloaded: 100.00
  Downloading of Zombienet binary is completed
  Providing execute permission to Zombienet binary
  Done providing execute permission to Zombienet binary
  stderr | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  <empty line>
  stdout | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  podman pull k8s.gcr.io/pause:3.5
  stderr | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  <empty line>
  stdout | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  {
    id: 'cda6ef05-2057-42a0-a0af-1afc36f7bec7',
    intention: 'PODMAN_PREREQUISITES',
    relatedId: 'TestingNetwork',
    command: 'podman pull k8s.gcr.io/pause:3.5',
    stdError: 'VHJ5aW5nIHRvIHB1bGwgazhzLmdjci5pby9wYXVzZTozLjUuLi4KR2V0dGluZyBpbWFnZSBzb3VyY2Ugc2lnbmF0dXJlcwpDb3B5aW5nIGJsb2Igc2hhMjU2OjAxOWQ4ZGEzM2Q5MTFkOWJhYWJlNThhZDYzZGVhMjEwN2VkMTUxMTVjY2EwZmMyN2ZjMGY2MjdlODJhNjk1YzEKQ29weWluZyBibG9iIHNoYTI1NjowMTlkOGRhMzNkOTExZDliYWFiZTU4YWQ2M2RlYTIxMDdlZDE1MTE1Y2NhMGZjMjdmYzBmNjI3ZTgyYTY5NWMxCkNvcHlpbmcgY29uZmlnIHNoYTI1NjplZDIxMGUzZTRhNWJhZTEyMzdmMWJiNDRkNzJhMDVhMmYxZTVjNmJmZTdhN2U3M2RhMTc5ZTI1MzQyNjljNDU5CldyaXRpbmcgbWFuaWZlc3QgdG8gaW1hZ2UgZGVzdGluYXRpb24KU3RvcmluZyBzaWduYXR1cmVzCg==',
    stdOutput: 'ZWQyMTBlM2U0YTViYWUxMjM3ZjFiYjQ0ZDcyYTA1YTJmMWU1YzZiZmU3YTdlNzNkYTE3OWUyNTM0MjY5YzQ1OQo=',
    statusCode: 0,
    createdAt: '2023-10-31 13:54:21'
  }
  stderr | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  <empty line>
  stdout | __tests__/routes.test.ts > Create Network Endpoint > should return an object with the network-name,directory-name,file-name and configuration-file
  /root/.larch/bin/zombienet-1.3.71 spawn /root/.larch/networks/TestingNetwork/0001-small-network.json --monitor --provider podman --dir /root/.larch/exec/TestingNetwork --force
  stdout | __tests__/routes.test.ts > Create Network Template API > should return a success value of true
  {
    success: true,
    result: { id: '8b0c66bf-ff31-4b6d-9491-94e1090b12a1' }
  }
  ✓ __tests__/routes.test.ts  (22 tests) 8040ms
  stdout | unknown test
  sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
  ✓ __tests__/zombienet.test.ts  (1 test) 5ms
  Test Files  4 passed (4)
        Tests  29 passed (29)
    Start at  13:54:14
    Duration  10.61s (transform 663ms, setup 0ms, collect 3.50s, tests 13.71s, environment 1ms, prepare 481ms)

  ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

  >  Lerna (powered by Nx)   Successfully ran target test for project larch-backend and 1 task it depends on (16s)
  ```
- [x] coverage report succeeds, although it could be improved, since it's currently at ~60-70%, depending on the metric:
  ```bash
  ~/larch# npm run coverage

  > coverage
  > lerna run coverage

  lerna notice cli v7.1.4

  > larch-backend:coverage

  > larch-backend@1.5.0 coverage
  > vitest run --coverage
  RUN  v0.32.2 /root/larch/packages/backend
        Coverage enabled with v8
  stdout | unknown test
  sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
  stdout | unknown test
  sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
  stdout | unknown test
  Executing DB migrations
  stdout | unknown test
  Done executing DB migrations
  stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
  podman pod ps -f label=zombie-ns=zombie-6b302120 --format {{.Name}}
  stdout | __tests__/utils.test.ts > file download > should download file
  Total file size: 187351204, Current file size: 36043423, Percent downloaded: 19.24
  stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
  {
    id: '2bfb134c-8fb2-4f33-88f0-b13bf7a04397',
    intention: 'NETWORK_CLEANUP',
    relatedId: 'zombie-6b302120',
    command: 'podman pod ps -f label=zombie-ns=zombie-6b302120 --format {{.Name}}',
    stdError: '',
    stdOutput: '',
    statusCode: 0,
    createdAt: '2023-10-31 13:56:53'
  }
  stdout | unknown test
  Executing DB migrations
  stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
  podman pod rm -f 
  stdout | unknown test
  Done executing DB migrations
  ui enabled
  api enabled
  GET /
  GET /ui/*
  GET /api/larch/network
  POST /api/larch/network/list
  POST /api/larch/network/create
  POST /api/larch/network/create
  POST /api/larch/network/update
  POST /api/larch/network/update
  GET /api/larch/network/delete
  POST /api/larch/network/test
  POST /api/larch/network/test
  GET /api/larch/network/run
  POST /api/larch/network/run-list
  GET /api/larch/network/status
  POST /api/larch/template/create
  POST /api/larch/template/create
  GET /api/larch/template
  POST /api/larch/template/update
  POST /api/larch/template/update
  GET /api/larch/template/delete
  POST /api/larch/template/list
  POST /api/larch/template/clone
  GET /api/larch/user_operation
  GET /api/larch/user_operation/purge
  POST /api/larch/user_operation/list
  GET /api/larch/version
  app is listening on port 9000
  stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
  {
    id: '8e2db6a2-d7b2-4e57-8c82-4df5b22d5012',
    intention: 'NETWORK_CLEANUP',
    relatedId: 'zombie-6b302120',
    command: 'podman pod rm -f ',
    stdError: 'RXJyb3I6IG5hbWUgb3IgSUQgY2Fubm90IGJlIGVtcHR5Cg==',
    stdOutput: '',
    statusCode: 125,
    createdAt: '2023-10-31 13:56:53'
  }
  { removePodCode: 125 }
  stdout | __tests__/utils.test.ts > file download > should download file
  Total file size: 187351204, Current file size: 82836127, Percent downloaded: 44.21
  stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
  podman network rm zombie-6b302120
  stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
  {
    id: '7585d809-7c1b-451e-afbc-2fcc7d869322',
    intention: 'NETWORK_CLEANUP',
    relatedId: 'zombie-6b302120',
    command: 'podman network rm zombie-6b302120',
    stdError: 'RXJyb3I6IHVuYWJsZSB0byBmaW5kIG5ldHdvcmsgY29uZmlndXJhdGlvbiBmb3Igem9tYmllLTZiMzAyMTIwOiBuZXR3b3JrIG5vdCBmb3VuZAo=',
    stdOutput: '',
    statusCode: 1,
    createdAt: '2023-10-31 13:56:53'
  }
  { removeNetworkCode: 1 }
  ✓ __tests__/module.providers.test.ts  (2 tests) 700ms
  stdout | __tests__/routes.test.ts > Create Network Template API > should return a success value of true
  {
    success: true,
    result: { id: '0377c51b-88b2-450d-b1dc-8551f59fcb80' }
  }
  stdout | __tests__/utils.test.ts > file download > should download file
  Total file size: 187351204, Current file size: 130464415, Percent downloaded: 69.64
  ✓ __tests__/routes.test.ts  (22 tests) 550ms
  stdout | __tests__/utils.test.ts > file download > should download file
  Total file size: 187351204, Current file size: 187351204, Percent downloaded: 100.00
  ✓ __tests__/utils.test.ts  (4 tests) 2364ms
  stdout | unknown test
  sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
  ✓ __tests__/zombienet.test.ts  (1 test) 6ms
  Test Files  4 passed (4)
        Tests  29 passed (29)
    Start at  13:56:51
    Duration  3.74s (transform 658ms, setup 1ms, collect 3.73s, tests 3.62s, environment 1ms, prepare 541ms)
  % Coverage report from v8
  -------------------|---------|----------|---------|---------|-------------------
  File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
  -------------------|---------|----------|---------|---------|-------------------
  All files          |   71.43 |    62.94 |   63.56 |   71.43 |                   
  src               |   91.47 |       80 |     100 |   91.47 |                   
    config.ts        |     100 |      100 |     100 |     100 |                   
    server.ts        |    86.9 |       80 |     100 |    86.9 | 43,66-75          
    version.ts       |     100 |      100 |     100 |     100 |                   
  src/api           |     100 |      100 |     100 |     100 |                   
    index.ts         |     100 |      100 |     100 |     100 |                   
  src/api/larch     |     100 |      100 |     100 |     100 |                   
    index.ts         |     100 |      100 |     100 |     100 |                   
  .../larch/network |   78.16 |    41.17 |   81.81 |   78.16 |                   
    controllers.ts   |   68.79 |    31.03 |   77.77 |   68.79 | ...38-239,243-244 
    routes.ts        |     100 |      100 |     100 |     100 |                   
    schemas.ts       |     100 |      100 |     100 |     100 |                   
    validations.ts   |     100 |      100 |     100 |     100 |                   
  ...larch/template |   75.94 |       55 |    87.5 |   75.94 |                   
    controllers.ts   |   69.07 |    56.25 |   83.33 |   69.07 | ...01-114,168-194 
    routes.ts        |     100 |      100 |     100 |     100 |                   
    schemas.ts       |     100 |      100 |     100 |     100 |                   
    validations.ts   |   67.34 |       50 |     100 |   67.34 | 25-32,40-47       
  ...user_operation |   93.33 |    42.85 |     100 |   93.33 |                   
    controllers.ts   |   90.78 |    42.85 |     100 |   90.78 | 36-42             
    routes.ts        |     100 |      100 |     100 |     100 |                   
  .../larch/version |   96.36 |       50 |     100 |   96.36 |                   
    controllers.ts   |   93.75 |       50 |     100 |   93.75 | 30-31             
    routes.ts        |     100 |      100 |     100 |     100 |                   
  src/modules       |   53.26 |    52.17 |   36.84 |   53.26 |                   
    exec_run.ts      |   82.29 |    58.33 |   66.66 |   82.29 | ...63,81-82,93-96 
    network.ts       |   43.78 |     37.5 |      50 |   43.78 | ...50-161,164-169 
    ..._operation.ts |     100 |      100 |     100 |     100 |                   
    zombienet.ts     |   36.02 |       50 |   11.11 |   36.02 | ...24-147,150-161 
  ...les/dashboards |     100 |      100 |     100 |     100 |                   
    index.ts         |     100 |      100 |     100 |     100 |                   
  src/modules/db    |     100 |      100 |     100 |     100 |                   
    sqlite.ts        |     100 |      100 |     100 |     100 |                   
  ...modules/models |   82.71 |    66.15 |   72.91 |   82.71 |                   
    exec_run.ts      |   82.58 |    76.47 |   73.33 |   82.58 | ...56-159,162-178 
    network.ts       |   69.59 |    53.33 |   53.84 |   69.59 | ...19-126,167-171 
    template.ts      |   94.02 |    66.66 |      90 |   94.02 | 71-78             
    ..._operation.ts |   89.38 |    66.66 |      80 |   89.38 | 59-66,76-79       
  ...ules/providers |   31.19 |       75 |   13.33 |   31.19 |                   
    common.ts        |    40.9 |      100 |       0 |    40.9 | 24-27,30-55,58-66 
    k8.ts            |   66.66 |      100 |       0 |   66.66 | 21-23,26-33       
    podman.ts        |   25.54 |       75 |      20 |   25.54 | ...06-250,253-321 
  ...oviders/podman |   75.55 |      100 |       0 |   75.55 |                   
    node-exporter.ts |   75.55 |      100 |       0 |   75.55 | 3-13              
  src/utils         |    84.3 |    87.87 |   76.19 |    84.3 |                   
    declaration.ts   |    91.3 |      100 |      75 |    91.3 | 59-64             
    download.ts      |    92.3 |    71.42 |     100 |    92.3 | 36-38,62-63       
    fs_helper.ts     |   85.96 |      100 |   57.14 |   85.96 | 48-49,52-57       
    misc.ts          |   52.32 |      100 |      75 |   52.32 | 46-86             
    pagination.ts    |   96.82 |    71.42 |     100 |   96.82 | 51-52             
    time.ts          |     100 |      100 |     100 |     100 |                   
    validation.ts    |     100 |      100 |     100 |     100 |                   
  -------------------|---------|----------|---------|---------|-------------------

  ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

  >  Lerna (powered by Nx)   Successfully ran target coverage for project larch-backend (7s)
  ```
- [ ] Tutorial: works until step 13, where I get the following error when creating the network from the template:
  ```bash
    ╔════════════════════╤════════════════════════════════════════════════════════════════════════════════════════════════════╗
    ║ 🧟 Zombienet 🧟    │ Initiation                                                                                         ║
    ╟────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
    ║ Provider           │ podman                                                                                             ║
    ╟────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
    ║ Namespace          │ zombie-133983c7                                                                                    ║
    ╟────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
    ║ Temp Dir           │ /root/.larch/exec/test-nw                                                                          ║
    ╚════════════════════╧════════════════════════════════════════════════════════════════════════════════════════════════════╝

    Error:  	 Error: Command failed with exit code 125: podman play kube --network zombie-133983c7 /root/.larch/exec/test-nw/prometheus.yaml
    time="2023-10-31T14:09:35Z" level=warning msg="Error validating CNI config file /etc/cni/net.d/zombie-133983c7.conflist: [plugin bridge does not support config version \"1.0.0\" plugin portmap does not support config version \"1.0.0\" plugin firewall does not support config version \"1.0.0\" plugin tuning does not support config version \"1.0.0\"]"
    Trying to pull docker.io/prom/prometheus:latest...
    Error: parsing image configuration: Error fetching blob: invalid status code from registry 503 (Service Unavailable)

    Error:  	 Error: Command failed with exit code 125: podman play kube --network zombie-133983c7 /root/.larch/exec/test-nw/prometheus.yaml
    time="2023-10-31T14:09:35Z" level=warning msg="Error validating CNI config file /etc/cni/net.d/zombie-133983c7.conflist: [plugin bridge does not support config version \"1.0.0\" plugin portmap does not support config version \"1.0.0\" plugin firewall does not support config version \"1.0.0\" plugin tuning does not support config version \"1.0.0\"]"
    Trying to pull docker.io/prom/prometheus:latest...
    Error: parsing image configuration: Error fetching blob: invalid status code from registry 503 (Service Unavailable)

    undefined
    ┌────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
    │ Node'              │ /root/.larch/exec/test-nw/logs                                                                     │
    │ s logs:0            │                                                                                                    │
    │ m                  │                                                                                                    │
    └────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
  ```
