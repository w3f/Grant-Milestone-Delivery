# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [GPLv3](https://github.com/Zeeve-App/larch/blob/5a7d8f1ef13b4ddd49d3137e775a048d9a0c2c33/license) | - |
| 0b.  | Documentation | <ul><li>[ ] </li></ul> | [README](https://github.com/Zeeve-App/larch/blob/5a7d8f1ef13b4ddd49d3137e775a048d9a0c2c33/readme.md), [docs](https://github.com/Zeeve-App/larch/tree/5a7d8f1ef13b4ddd49d3137e775a048d9a0c2c33/docs), [web docs instructions](https://github.com/Zeeve-App/larch/blob/main/docs/development/index.md), [about page](https://github.com/Zeeve-App/larch/blob/5a7d8f1ef13b4ddd49d3137e775a048d9a0c2c33/packages/ui/src/pages/documentation/page.tsx) | See [documentation feedback](#documentation-feedback). |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [v1.0.0 release](https://github.com/Zeeve-App/larch/releases/tag/v1.0.0) | See [Testing Guide Feedback](#testing-guide-feedback) |
| 0d. | Standalone Executable | <ul><li>[x] </li></ul> | [v1.0.0 release binaries](https://github.com/Zeeve-App/larch/releases/tag/v1.0.0) | Binary for linux x64 platform and source code archives. |
| 1. | Initial Automation | <ul><li>[ ] </li></ul> | (will be tested when 0b., 0c. are fixed) | Spec: We will build the core GUI driven automation to create and deploy the substrate based Zombie-net configurations including relaychain and parachain configurations. |
| 2. | Configuration | <ul><li>[ ] </li></ul> | (will be tested when 0b., 0c. are fixed) | Spec: Parachain configuration is critical and complicated, we will provide the GUI based pick and choose for genesis parameters and chain configs to start with parachain setup for the desired Zombie-net |
| 3. | Node type support | <ul><li>[ ] </li></ul> | (will be tested when 0b., 0c. are fixed) | Spec: Implement setup of all node types including Full node, Validator node and Collator node for the respective relay chain and parachain within the configured Zombie-net. |
| 4. | Cloud agnostic setup | <ul><li>[ ] </li></ul> | (will be tested when 0b., 0c. are fixed) | Spec: The larch setup will be cloud agnostic and it can be installed on the choice of cloud, instructions and documentation will be provided for the same. |
| 5. | Network Management | <ul><li>[ ] </li></ul> | (will be tested when 0b., 0c. are fixed) | Spec: Implement the larch tool with a user-friendly interface, features for execution info, network deletion, template cloning, and management, along with robust error handling, for seamless setup of networks and templates. |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Documentation feedback

- [ ] It would be nice if there was a way to navigate the docs more easily. For example, you could add an *index.md* file to each directory and add links (and some useful content) to each of them. Some basic info about the project can be found on the web ui when running the code after buildiug it.

- [ ] I didn't identify any npm task called `prepare` as indicated in your [development index.md docs](https://github.com/Zeeve-App/larch/blob/5a7d8f1ef13b4ddd49d3137e775a048d9a0c2c33/docs/development/index.md).

- [ ] I didn't identify any "basic tutorial that explains how a user can (for example) create a new Substrate based Zombie-net nodes and initiate testing" as promised in the [spec](https://github.com/w3f/Grants-Program/blob/42b3fef6b2f60890ef8ee42215c267b11681e613/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation.md#L170):

    > We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) create a new Substrate based Zombie-net nodes and initiate testing, which will show how the new functionality works.


- [ ] There is currently 1 critical npm vulnerability:

    ```bash
    larch % npm i

    npm WARN deprecated @npmcli/move-file@2.0.1: This functionality has been moved to @npmcli/fs
    npm WARN deprecated @npmcli/move-file@1.1.2: This functionality has been moved to @npmcli/fs

    added 1389 packages, and audited 1393 packages in 15s

    196 packages are looking for funding
    run `npm fund` for details

    1 high severity vulnerability

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

- [ ] I didn't identify any testing guide. See [spec](https://github.com/w3f/Grants-Program/blob/42b3fef6b2f60890ef8ee42215c267b11681e613/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation.md#L171):

    > Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.
    
- [x] backend tests pass:

    ```bash
    backend % npm run test

    > larch-backend@1.0.0 test
    > vitest


    DEV  v0.30.1 /Users/xxx/repos/larch/packages/backend

    stdout | unknown test
    sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).

    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 16684992, Percent downloaded: 8.91

    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 41058304, Percent downloaded: 21.92

    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 64634816, Percent downloaded: 34.50

    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 90767360, Percent downloaded: 48.45

    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 108969984, Percent downloaded: 58.16

    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 127959040, Percent downloaded: 68.30

    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 147603456, Percent downloaded: 78.78

    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 163921920, Percent downloaded: 87.49

    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 183711104, Percent downloaded: 98.06

    stdout | __tests__/utils.test.ts > file download > should download file
    Total file size: 187351204, Current file size: 187351204, Percent downloaded: 100.00

    ✓ __tests__/utils.test.ts (4) 5097ms
    ✓ __tests__/module.providers.test.ts (2)

    Test Files  2 passed (2)
        Tests  6 passed (6)
    Start at  17:30:08
    Duration  5.36s (transform 110ms, setup 0ms, collect 257ms, tests 5.10s, environment 0ms, prepare 127ms)
    ```