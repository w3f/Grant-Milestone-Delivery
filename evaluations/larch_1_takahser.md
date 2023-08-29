# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [GPLv3](https://github.com/Zeeve-App/larch/blob/5a7d8f1ef13b4ddd49d3137e775a048d9a0c2c33/license) | - |
| 0b.  | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/Zeeve-App/larch/blob/5a7d8f1ef13b4ddd49d3137e775a048d9a0c2c33/readme.md), [docs](https://github.com/Zeeve-App/larch/tree/5a7d8f1ef13b4ddd49d3137e775a048d9a0c2c33/docs), [web docs instructions](https://github.com/Zeeve-App/larch/blob/main/docs/development/index.md), [about page](https://github.com/Zeeve-App/larch/blob/5a7d8f1ef13b4ddd49d3137e775a048d9a0c2c33/packages/ui/src/pages/documentation/page.tsx), [tutorial](https://github.com/Zeeve-App/larch/blob/1220dc56b235f60b150741d1b394dad5791e0db6/docs/user/tutorial.md) | See [documentation feedback](#documentation-feedback). |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [v1.0.0 release](https://github.com/Zeeve-App/larch/releases/tag/v1.0.0) | See [Testing Guide Feedback](#testing-guide-feedback) |
| 0d. | Standalone Executable | <ul><li>[x] </li></ul> | [v1.0.0 release binaries](https://github.com/Zeeve-App/larch/releases/tag/v1.0.0) | Binary for linux x64 platform and source code archives. |
| 1. | Initial Automation | <ul><li>[ ] </li></ul> | (currently being tested, will give more feedback soon) | Spec: We will build the core GUI driven automation to create and deploy the substrate based Zombie-net configurations including relaychain and parachain configurations. |
| 2. | Configuration | <ul><li>[ ] </li></ul> | (currently being tested, will give more feedback soon) | Spec: Parachain configuration is critical and complicated, we will provide the GUI based pick and choose for genesis parameters and chain configs to start with parachain setup for the desired Zombie-net |
| 3. | Node type support | <ul><li>[ ] </li></ul> | (currently being tested, will give more feedback soon) | Spec: Implement setup of all node types including Full node, Validator node and Collator node for the respective relay chain and parachain within the configured Zombie-net. |
| 4. | Cloud agnostic setup | <ul><li>[ ] </li></ul> | (currently being tested, will give more feedback soon) | Spec: The larch setup will be cloud agnostic and it can be installed on the choice of cloud, instructions and documentation will be provided for the same. |
| 5. | Network Management | <ul><li>[ ] </li></ul> | (currently being tested, will give more feedback soon) | Spec: Implement the larch tool with a user-friendly interface, features for execution info, network deletion, template cloning, and management, along with robust error handling, for seamless setup of networks and templates. |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

- [x] in general, it would be good if all the dialoges that contain a form would support the option to submit the form by pressing the *enter* key. To support that, you can work with html `<form>`s. => [issue](https://github.com/Zeeve-App/larch/issues/138) created

### Documentation feedback

- [x] ~~It would be nice if there was a way to navigate the docs more easily. For example, you could add an *index.md* file to each directory and add links (and some useful content) to each of them.~~ => fixed

- [x] ~~Some basic info about the project can be found on the web ui when running the code after buildiug it. However, they're not very well written.~~ => improved

- [x] ~~I didn't identify any npm task called `prepare` as indicated in your [development index.md docs](https://github.com/Zeeve-App/larch/blob/5a7d8f1ef13b4ddd49d3137e775a048d9a0c2c33/docs/development/index.md).~~ => seems like that task is not needed anymore - it has been removed from the doc

- [x] ~~I didn't identify any "basic tutorial that explains how a user can (for example) create a new Substrate based Zombie-net nodes and initiate testing" as promised in the [spec](https://github.com/w3f/Grants-Program/blob/42b3fef6b2f60890ef8ee42215c267b11681e613/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation.md#L170):~~ => fixed, see [here](https://github.com/Zeeve-App/larch/blob/1220dc56b235f60b150741d1b394dad5791e0db6/docs/user/tutorial.md)

   > ~~We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) create a new Substrate based Zombie-net nodes and initiate testing, which will show how the new functionality works.~~


- [x] ~~There is currently 1 critical npm vulnerability:~~ => fixed although there are warnings, but I'm willing to accept it as long as there are no critical vulnerabilities. See updated excerpt:

    ```bash
    larch % npm i

    added 1258 packages, and audited 1262 packages in 25s

    204 packages are looking for funding
    run `npm fund` for details

    7 moderate severity vulnerabilities

    To address all issues, run:
    npm audit fix

    Run `npm audit` for details.
    ```

- [x] build passes:

    ```bash
    larch % npm run build


    > build
    > ASSET_URL='/ui' lerna run build && cp -r packages/ui/dist packages/backend/dist/ui

    lerna notice cli v6.6.1

        ✔  larch-backend:build (2s)
        ✔  larch-cli:build (1s)
        ✔  larch-ui:build (7s)

    ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

    >  Lerna (powered by Nx)   Successfully ran target build for 3 projects (7s)
    ```

- [x] built code can be run successfully:

    ```bash
    % npm run start


    > start
    > cd packages/cli && npm run start


    > larch-cli@1.0.0 start
    > node dist/index.js

    sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
    Welcome to Larch
    Executing DB migrations
    Done executing DB migrations
    ui enabled
    api enabled
    app is listening on port 9000
    ```

### Testing Guide Feedback

- [x] ~~I didn't identify any testing guide. See [spec](https://github.com/w3f/Grants-Program/blob/42b3fef6b2f60890ef8ee42215c267b11681e613/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation.md#L171):~~ => a guide has been [added](https://github.com/Zeeve-App/larch/blob/1220dc56b235f60b150741d1b394dad5791e0db6/docs/development/test_coverage.md)

    > ~~Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.~~
    
- [x] backend tests ~~pass~~ ~~fail now (even if I change the `larchVersion` to `1.0.1` in the [tests](https://github.com/Zeeve-App/larch/blob/1220dc56b235f60b150741d1b394dad5791e0db6/packages/backend/__tests__/routes.test.ts#L85))~~ pass again, after installing podman:

    ```bash
    larch % npm run test

    > test
    > lerna run test

    lerna notice cli v7.1.0

    > larch-backend:build  [existing outputs match the cache, left as is]


    > larch-backend@1.0.1 build
    > node scripts/version.mjs && rm -rf dist && tsc

    /Users/xxx/repos/larch/packages/backend/scripts

    > larch-backend:test

    > larch-backend@1.0.1 test
    > vitest run
    RUN  v0.32.2 /Users/xxx/repos/larch/packages/backend
    stdout | unknown test
    sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
    stdout | unknown test
    sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
    ✓ __tests__/zombienet.test.ts  (1 test) 2ms
    stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
    podman pod ps -f label=zombie-ns=zombie-6b302120 --format {{.Name}}
    stdout | unknown test
    sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
    stdout | unknown test
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
    ✓ __tests__/routes.test.ts  (22 tests) 58ms
    stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
    {
    id: '0b4a3864-3da8-439d-b8ab-ea70452df428',
    intention: 'NETWORK_CLEANUP',
    relatedId: 'zombie-6b302120',
    command: 'podman pod ps -f label=zombie-ns=zombie-6b302120 --format {{.Name}}',
    stdError: 'Q2Fubm90IGNvbm5lY3QgdG8gUG9kbWFuLiBQbGVhc2UgdmVyaWZ5IHlvdXIgY29ubmVjdGlvbiB0byB0aGUgTGludXggc3lzdGVtIHVzaW5nIGBwb2RtYW4gc3lzdGVtIGNvbm5lY3Rpb24gbGlzdGAsIG9yIHRyeSBgcG9kbWFuIG1hY2hpbmUgaW5pdGAgYW5kIGBwb2RtYW4gbWFjaGluZSBzdGFydGAgdG8gbWFuYWdlIGEgbmV3IExpbnV4IFZNCkVycm9yOiB1bmFibGUgdG8gY29ubmVjdCB0byBQb2RtYW4gc29ja2V0OiBHZXQgImh0dHA6Ly9kL3Y0LjUuMS9saWJwb2QvX3BpbmciOiBkaWFsIHVuaXggLy8vdmFyL2ZvbGRlcnMvZnAvYzluc2JjMWQ2X3FndmsyNHdmZGY5eWMwMDAwMGduL1QvcG9kbWFuLXJ1bi0tMS9wb2RtYW4vcG9kbWFuLnNvY2s6IGNvbm5lY3Q6IG5vIHN1Y2ggZmlsZSBvciBkaXJlY3RvcnkK',
    stdOutput: '',
    statusCode: 125,
    createdAt: '2023-07-12 12:15:53'
    }
    ✓ __tests__/module.providers.test.ts  (3 tests) 637ms
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 277679, Percent downloaded: 0.15
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 187351204, Percent downloaded: 100.00
    Test Files  4 passed (4)
        Tests  30 passed (30)
    Start at  14:15:53
    Duration  10.47s (transform 122ms, setup 1ms, collect 487ms, tests 11.05s, environment 0ms, prepare 149ms)

    ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

    >  Lerna (powered by Nx)   Successfully ran target test for project larch-backend and 1 task it depends on (11s)
    
    Nx read the output from the cache instead of running the command for 1 out of 2 tasks.
    ```

- [x] coverage ~~also fails~~ passes as well after installing podman, shows test coverage >50% in almost all of the files:

    ```bash
    larch % npm run coverage

    > coverage
    > lerna run coverage

    lerna notice cli v7.1.0

    > larch-backend:coverage

    > larch-backend@1.0.1 coverage
    > vitest run --coverage
    RUN  v0.32.2 /Users/seraya/repos/larch/packages/backend
        Coverage enabled with v8
    stdout | unknown test
    sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
    stdout | unknown test
    sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
    stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
    podman pod ps -f label=zombie-ns=zombie-6b302120 --format {{.Name}}
    ✓ __tests__/zombienet.test.ts  (1 test) 2ms
    stdout | unknown test
    sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
    stdout | unknown test
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
    ✓ __tests__/routes.test.ts  (22 tests) 52ms
    stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
    {
    id: '08a5d876-1df3-43ba-a980-683e13acec76',
    intention: 'NETWORK_CLEANUP',
    relatedId: 'zombie-6b302120',
    command: 'podman pod ps -f label=zombie-ns=zombie-6b302120 --format {{.Name}}',
    stdError: 'Q2Fubm90IGNvbm5lY3QgdG8gUG9kbWFuLiBQbGVhc2UgdmVyaWZ5IHlvdXIgY29ubmVjdGlvbiB0byB0aGUgTGludXggc3lzdGVtIHVzaW5nIGBwb2RtYW4gc3lzdGVtIGNvbm5lY3Rpb24gbGlzdGAsIG9yIHRyeSBgcG9kbWFuIG1hY2hpbmUgaW5pdGAgYW5kIGBwb2RtYW4gbWFjaGluZSBzdGFydGAgdG8gbWFuYWdlIGEgbmV3IExpbnV4IFZNCkVycm9yOiB1bmFibGUgdG8gY29ubmVjdCB0byBQb2RtYW4gc29ja2V0OiBHZXQgImh0dHA6Ly9kL3Y0LjUuMS9saWJwb2QvX3BpbmciOiBkaWFsIHVuaXggLy8vdmFyL2ZvbGRlcnMvZnAvYzluc2JjMWQ2X3FndmsyNHdmZGY5eWMwMDAwMGduL1QvcG9kbWFuLXJ1bi0tMS9wb2RtYW4vcG9kbWFuLnNvY2s6IGNvbm5lY3Q6IG5vIHN1Y2ggZmlsZSBvciBkaXJlY3RvcnkK',
    stdOutput: '',
    statusCode: 125,
    createdAt: '2023-07-12 12:18:35'
    }
    ✓ __tests__/module.providers.test.ts  (3 tests) 642ms
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 260565, Percent downloaded: 0.14
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 187351204, Percent downloaded: 100.00
    ✓ __tests__/utils.test.ts  (4 tests) 10153ms
    Test Files  4 passed (4)
        Tests  30 passed (30)
    Start at  14:18:34
    Duration  10.34s (transform 114ms, setup 0ms, collect 508ms, tests 10.85s, environment 0ms, prepare 175ms)
    % Coverage report from v8
    -------------------|---------|----------|---------|---------|-------------------
    File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
    -------------------|---------|----------|---------|---------|-------------------
    All files          |   80.45 |    62.23 |   72.56 |   80.45 |                   
    src               |    91.4 |       80 |     100 |    91.4 |                   
    config.ts        |     100 |      100 |     100 |     100 |                   
    server.ts        |    86.9 |       80 |     100 |    86.9 | 43,66-75          
    version.ts       |     100 |      100 |     100 |     100 |                   
    src/api           |     100 |      100 |     100 |     100 |                   
    index.ts         |     100 |      100 |     100 |     100 |                   
    src/api/larch     |     100 |      100 |     100 |     100 |                   
    index.ts         |     100 |      100 |     100 |     100 |                   
    .../larch/network |   78.35 |    48.14 |   81.81 |   78.35 |                   
    controllers.ts   |   68.53 |    36.36 |   77.77 |   68.53 | ...97-200,215-216 
    routes.ts        |     100 |      100 |     100 |     100 |                   
    schemas.ts       |     100 |      100 |     100 |     100 |                   
    validations.ts   |     100 |      100 |     100 |     100 |                   
    ...larch/template |    80.2 |    41.17 |    87.5 |    80.2 |                   
    controllers.ts   |    75.3 |    38.46 |   83.33 |    75.3 | ...20-126,154-166 
    routes.ts        |     100 |      100 |     100 |     100 |                   
    schemas.ts       |     100 |      100 |     100 |     100 |                   
    validations.ts   |   67.34 |       50 |     100 |   67.34 | 25-32,40-47       
    ...user_operation |   93.33 |    42.85 |     100 |   93.33 |                   
    controllers.ts   |   90.78 |    42.85 |     100 |   90.78 | 36-42             
    routes.ts        |     100 |      100 |     100 |     100 |                   
    .../larch/version |   96.36 |       50 |     100 |   96.36 |                   
    controllers.ts   |   93.75 |       50 |     100 |   93.75 | 30-31             
    routes.ts        |     100 |      100 |     100 |     100 |                   
    src/modules       |   58.56 |    52.17 |   41.17 |   58.56 |                   
    exec_run.ts      |   82.29 |    58.33 |   66.66 |   82.29 | ...63,81-82,93-96 
    network.ts       |   45.06 |     37.5 |      50 |   45.06 | ...43-154,157-162 
    ..._operation.ts |     100 |      100 |     100 |     100 |                   
    zombienet.ts     |   45.04 |       50 |   14.28 |   45.04 | ...,76-98,101-111 
    src/modules/db    |     100 |      100 |     100 |     100 |                   
    sqlite.ts        |     100 |      100 |     100 |     100 |                   
    ...modules/models |   81.83 |    63.49 |   70.21 |   81.83 |                   
    exec_run.ts      |   82.58 |    76.47 |   73.33 |   82.58 | ...56-159,162-178 
    network.ts       |   69.59 |    53.33 |   53.84 |   69.59 | ...19-126,167-171 
    template.ts      |   90.55 |    56.25 |   77.77 |   90.55 | 71-78,88-91       
    ..._operation.ts |   89.38 |    66.66 |      80 |   89.38 | 59-66,76-79       
    ...ules/providers |   63.79 |    57.14 |   66.66 |   63.79 |                   
    common.ts        |   65.21 |       50 |      50 |   65.21 | 21-36             
    podman.ts        |   62.85 |       60 |      75 |   62.85 | 37-58,61-64       
    src/utils         |   96.15 |    87.87 |   88.88 |   96.15 |                   
    declaration.ts   |    91.3 |      100 |      75 |    91.3 | 59-64             
    download.ts      |    92.3 |    71.42 |     100 |    92.3 | 36-38,62-63       
    fs_helper.ts     |     100 |      100 |      80 |     100 |                   
    misc.ts          |     100 |      100 |     100 |     100 |                   
    pagination.ts    |   96.82 |    71.42 |     100 |   96.82 | 51-52             
    time.ts          |     100 |      100 |     100 |     100 |                   
    validation.ts    |     100 |      100 |     100 |     100 |                   
    -------------------|---------|----------|---------|---------|-------------------

    ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

    >  Lerna (powered by Nx)   Successfully ran target coverage for project larch-backend (11s)
    ```