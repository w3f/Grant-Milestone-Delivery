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
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [v1.0.0 release](https://github.com/Zeeve-App/larch/releases/tag/v1.0.0) | See [Testing Guide Feedback](#testing-guide-feedback) |
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
    
- [ ] backend tests ~~pass~~ fail now (even if I change the `larchVersion` to `1.0.1` in the [tests](https://github.com/Zeeve-App/larch/blob/1220dc56b235f60b150741d1b394dad5791e0db6/packages/backend/__tests__/routes.test.ts#L85)):

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
    ✓ __tests__/zombienet.test.ts  (1 test) 1ms
    stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
    podman pod ps -f label=zombie-ns=zombie-6b302120 --format {{.Name}}
    error occurred
    ❯ __tests__/module.providers.test.ts  (3 tests | 1 failed) 11ms
    ❯ __tests__/module.providers.test.ts > Podman > should get Podman cleanup
        → promise rejected "Error: spawn podman ENOENT" instead of resolving
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
    ❯ __tests__/routes.test.ts  (22 tests | 1 failed) 58ms
    ❯ __tests__/routes.test.ts > Version route endpoint > check for response and the type of response
        → expected { status: 'success', result: { …(2) } } to deeply equal { status: 'success', result: { …(2) } }
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 265920, Percent downloaded: 0.14
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 1733952, Percent downloaded: 0.93
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 5908800, Percent downloaded: 3.15
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 10107584, Percent downloaded: 5.39
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 14213120, Percent downloaded: 7.59
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 18578240, Percent downloaded: 9.92
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 23181504, Percent downloaded: 12.37
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 27754560, Percent downloaded: 14.81
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 32569536, Percent downloaded: 17.38
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 37470208, Percent downloaded: 20.00
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 42402496, Percent downloaded: 22.63
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 47400192, Percent downloaded: 25.30
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 52286912, Percent downloaded: 27.91
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 57603456, Percent downloaded: 30.75
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 62858240, Percent downloaded: 33.55
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 68130688, Percent downloaded: 36.37
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 73531584, Percent downloaded: 39.25
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 78399488, Percent downloaded: 41.85
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 83758848, Percent downloaded: 44.71
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 88818304, Percent downloaded: 47.41
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 94427200, Percent downloaded: 50.40
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 99853376, Percent downloaded: 53.30
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 105449664, Percent downloaded: 56.28
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 110970304, Percent downloaded: 59.23
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 116431744, Percent downloaded: 62.15
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 121982656, Percent downloaded: 65.11
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 127532288, Percent downloaded: 68.07
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 132945920, Percent downloaded: 70.96
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 138574912, Percent downloaded: 73.97
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 144123264, Percent downloaded: 76.93
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 149664064, Percent downloaded: 79.88
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 155072640, Percent downloaded: 82.77
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 160602112, Percent downloaded: 85.72
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 166243712, Percent downloaded: 88.73
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 171833728, Percent downloaded: 91.72
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 177389632, Percent downloaded: 94.68
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 182892672, Percent downloaded: 97.62
    ✓ __tests__/utils.test.ts  (4 tests) 16912ms
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 187351204, Percent downloaded: 100.00
    ⎯⎯⎯⎯⎯⎯⎯ Failed Tests 2 ⎯⎯⎯⎯⎯⎯⎯
    FAIL  __tests__/module.providers.test.ts > Podman > should get Podman cleanup
    Error: promise rejected "Error: spawn podman ENOENT" instead of resolving
    ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/2]⎯
    FAIL  __tests__/routes.test.ts > Version route endpoint > check for response and the type of response
    AssertionError: expected { status: 'success', result: { …(2) } } to deeply equal { status: 'success', result: { …(2) } }
    - Expected
    + Received
    Object {
        "result": Object {
    -     "larchVersion": "1.0.1",
    +     "larchVersion": "1.0.0",
        "zombienetVersion": "1.3.43",
        },
        "status": "success",
    }
    ❯ __tests__/routes.test.ts:81:22
        79|     expect(res && res.body && typeof res.body === 'object')
        80|     expect(res.statusCode).toEqual(200)
        81|     expect(res.body).toEqual({
        |                      ^
        82|         "status": "success",
        83|         "result": {
    ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/2]⎯
    ⎯⎯⎯⎯⎯⎯ Unhandled Errors ⎯⎯⎯⎯⎯⎯

    Vitest caught 1 unhandled error during the test run.
    This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected.
    ⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯
    Error: promise rejected "Error: spawn podman ENOENT" instead of resolving
    ❯ ../../node_modules/@vitest/expect/dist/index.js:1267:21
    ❯ processTicksAndRejections node:internal/process/task_queues:95:5
    This error originated in "__tests__/module.providers.test.ts" test file. It doesn't mean the error was thrown inside the file itself, but while it was running.
    The latest test that might've caused the error is "should check Zombie JSON for Zombienet network". It might mean one of the following:
    - The error was thrown, while Vitest was running this test.
    - This was the last recorded test before the error was thrown, if error originated after test finished its execution.
    ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
    Test Files  2 failed | 2 passed (4)
        Tests  2 failed | 28 passed (30)
        Errors  1 error
    Start at  16:00:56
    Duration  17.07s (transform 119ms, setup 0ms, collect 487ms, tests 16.98s, environment 0ms, prepare 146ms)
    npm ERR! Lifecycle script `test` failed with error: 
    npm ERR! Error: command failed 
    npm ERR!   in workspace: larch-backend@1.0.1 
    npm ERR!   at location: /Users/xxx/repos/larch/packages/backend 

    —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

    >  Lerna (powered by Nx)   Ran target test for project larch-backend and 1 task(s) they depend on (17s)
    
        ✖    1/2 failed
        ✔    1/2 succeeded [1 read from cache]
    ```

- [ ] coverage also fails:

    ```bash
    larch % npm run coverage

    > coverage
    > lerna run coverage

    lerna notice cli v7.1.0

    > larch-backend:coverage

    > larch-backend@1.0.1 coverage
    > vitest run --coverage
    RUN  v0.32.2 /Users/xxx/repos/larch/packages/backend
        Coverage enabled with v8
    stdout | unknown test
    sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
    stdout | unknown test
    sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
    ✓ __tests__/zombienet.test.ts  (1 test) 2ms
    stdout | __tests__/module.providers.test.ts > Podman > should get Podman cleanup
    podman pod ps -f label=zombie-ns=zombie-6b302120 --format {{.Name}}
    error occurred
    ❯ __tests__/module.providers.test.ts  (3 tests | 1 failed) 20ms
    ❯ __tests__/module.providers.test.ts > Podman > should get Podman cleanup
        → promise rejected "Error: spawn podman ENOENT" instead of resolving
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
    ❯ __tests__/routes.test.ts  (22 tests | 1 failed) 59ms
    ❯ __tests__/routes.test.ts > Version route endpoint > check for response and the type of response
        → expected { status: 'success', result: { …(2) } } to deeply equal { status: 'success', result: { …(2) } }
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 265920, Percent downloaded: 0.14
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 1765504, Percent downloaded: 0.94
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 9215296, Percent downloaded: 4.92
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 21394944, Percent downloaded: 11.42
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 31086528, Percent downloaded: 16.59
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 41959424, Percent downloaded: 22.40
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 52548288, Percent downloaded: 28.05
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 63514432, Percent downloaded: 33.90
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 73916992, Percent downloaded: 39.45
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 83616128, Percent downloaded: 44.63
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 95424064, Percent downloaded: 50.93
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 105266944, Percent downloaded: 56.19
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 115412416, Percent downloaded: 61.60
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 127290944, Percent downloaded: 67.94
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 137055872, Percent downloaded: 73.15
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 148368256, Percent downloaded: 79.19
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 158770944, Percent downloaded: 84.75
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 169967360, Percent downloaded: 90.72
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 180028416, Percent downloaded: 96.09
    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 187351204, Percent downloaded: 100.00
    ✓ __tests__/utils.test.ts  (4 tests) 10333ms
    ⎯⎯⎯⎯⎯⎯⎯ Failed Tests 2 ⎯⎯⎯⎯⎯⎯⎯
    FAIL  __tests__/module.providers.test.ts > Podman > should get Podman cleanup
    Error: promise rejected "Error: spawn podman ENOENT" instead of resolving
    ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/2]⎯
    FAIL  __tests__/routes.test.ts > Version route endpoint > check for response and the type of response
    AssertionError: expected { status: 'success', result: { …(2) } } to deeply equal { status: 'success', result: { …(2) } }
    - Expected
    + Received
    Object {
        "result": Object {
    -     "larchVersion": "1.0.1",
    +     "larchVersion": "1.0.0",
        "zombienetVersion": "1.3.43",
        },
        "status": "success",
    }
    ❯ __tests__/routes.test.ts:81:22
        79|     expect(res && res.body && typeof res.body === 'object')
        80|     expect(res.statusCode).toEqual(200)
        81|     expect(res.body).toEqual({
        |                      ^
        82|         "status": "success",
        83|         "result": {
    ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/2]⎯
    ⎯⎯⎯⎯⎯⎯ Unhandled Errors ⎯⎯⎯⎯⎯⎯

    Vitest caught 1 unhandled error during the test run.
    This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected.
    ⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯
    Error: promise rejected "Error: spawn podman ENOENT" instead of resolving
    ❯ ../../node_modules/@vitest/expect/dist/index.js:1267:21
    ❯ processTicksAndRejections node:internal/process/task_queues:95:5
    This error originated in "__tests__/module.providers.test.ts" test file. It doesn't mean the error was thrown inside the file itself, but while it was running.
    The latest test that might've caused the error is "should check Zombie JSON for Zombienet network". It might mean one of the following:
    - The error was thrown, while Vitest was running this test.
    - This was the last recorded test before the error was thrown, if error originated after test finished its execution.
    ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
    Test Files  2 failed | 2 passed (4)
        Tests  2 failed | 28 passed (30)
        Errors  1 error
    Start at  18:02:25
    Duration  10.53s (transform 150ms, setup 0ms, collect 613ms, tests 10.41s, environment 0ms, prepare 197ms)
    % Coverage report from v8
    -------------------|---------|----------|---------|---------|-------------------
    File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
    -------------------|---------|----------|---------|---------|-------------------
    All files          |   79.33 |    60.86 |   70.79 |   79.33 |                   
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
    src/modules       |   54.09 |       55 |   41.17 |   54.09 |                   
    exec_run.ts      |   63.54 |    66.66 |   66.66 |   63.54 | ...63,70-78,86-96 
    network.ts       |   45.06 |     37.5 |      50 |   45.06 | ...43-154,157-162 
    ..._operation.ts |     100 |      100 |     100 |     100 |                   
    zombienet.ts     |   45.04 |       50 |   14.28 |   45.04 | ...,76-98,101-111 
    src/modules/db    |   97.77 |    66.66 |     100 |   97.77 |                   
    sqlite.ts        |   97.77 |    66.66 |     100 |   97.77 | 41                
    ...modules/models |    80.3 |    60.31 |   65.95 |    80.3 |                   
    exec_run.ts      |   77.52 |     64.7 |      60 |   77.52 | ...56-159,162-178 
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
    npm ERR! Lifecycle script `coverage` failed with error: 
    npm ERR! Error: command failed 
    npm ERR!   in workspace: larch-backend@1.0.1 
    npm ERR!   at location: /Users/xxx/repos/larch/packages/backend 

    —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

    >  Lerna (powered by Nx)   Ran target coverage for project larch-backend (11s)
    
        ✖    1/1 failed
        ✔    0/1 succeeded [0 read from cache]
    ```