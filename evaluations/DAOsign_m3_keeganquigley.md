# Evaluation


- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/DAOsign.md
- **Milestone:** 3

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/DAOsign/relayer/blob/main/LICENSE) | Apache 2.0 |
| 0b. | Documentation                   | <ul><li>[x] </li></ul> | [Readme](https://github.com/DAOsign/relayer/blob/main/README.md) |  |
| 0c.    | Testing and Testing Guide | <ul><li>[x] </li></ul> |         https://github.com/DAOsign/relayer/blob/main/README.md#testing |         |
| 0d.    | Docker                    | <ul><li>[x] </li></ul> |   https://github.com/DAOsign/relayer?tab=readme-ov-file#with-docker    | 
| 1. | Gas Relayer             | <ul><li>[x] </li></ul> |[Github Repo](https://github.com/DAOsign/relayer)    |  |

# General Notes

The test is failing with errors but it's due to the .env setup.

After copying the example .env file the tests are currently failing with a lot of errors:

<details>
  <summary>Output</summary>

```ts
  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "[ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]".

      50 |
      51 |     const unlockedAccounts = await this.getUnlockedAccounts();
    > 52 |     console.log(unlockedAccounts);
         |             ^
      53 |
      54 |     if (!unlockedAccounts.length) {
      55 |       this.logger.info(`No unlocked ${this.networkName} accounts found. Skipping ${this.networkName} queue processing`);

      at console.log (node_modules/@jest/console/build/BufferedConsole.js:156:10)
      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)
      at fulfilled (src/worker/queue.service.ts:5:58)


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "[ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]".

      50 |
      51 |     const unlockedAccounts = await this.getUnlockedAccounts();
    > 52 |     console.log(unlockedAccounts);
         |             ^
      53 |
      54 |     if (!unlockedAccounts.length) {
      55 |       this.logger.info(`No unlocked ${this.networkName} accounts found. Skipping ${this.networkName} queue processing`);

      at console.log (node_modules/@jest/console/build/BufferedConsole.js:156:10)
      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)
      at fulfilled (src/worker/queue.service.ts:5:58)


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "[ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]".

      50 |
      51 |     const unlockedAccounts = await this.getUnlockedAccounts();
    > 52 |     console.log(unlockedAccounts);
         |             ^
      53 |
      54 |     if (!unlockedAccounts.length) {
      55 |       this.logger.info(`No unlocked ${this.networkName} accounts found. Skipping ${this.networkName} queue processing`);

      at console.log (node_modules/@jest/console/build/BufferedConsole.js:156:10)
      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)
      at fulfilled (src/worker/queue.service.ts:5:58)


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "[ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]".

      50 |
      51 |     const unlockedAccounts = await this.getUnlockedAccounts();
    > 52 |     console.log(unlockedAccounts);
         |             ^
      53 |
      54 |     if (!unlockedAccounts.length) {
      55 |       this.logger.info(`No unlocked ${this.networkName} accounts found. Skipping ${this.networkName} queue processing`);

      at console.log (node_modules/@jest/console/build/BufferedConsole.js:156:10)
      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)
      at fulfilled (src/worker/queue.service.ts:5:58)


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "[ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]".

      50 |
      51 |     const unlockedAccounts = await this.getUnlockedAccounts();
    > 52 |     console.log(unlockedAccounts);
         |             ^
      53 |
      54 |     if (!unlockedAccounts.length) {
      55 |       this.logger.info(`No unlocked ${this.networkName} accounts found. Skipping ${this.networkName} queue processing`);

      at console.log (node_modules/@jest/console/build/BufferedConsole.js:156:10)
      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)
      at fulfilled (src/worker/queue.service.ts:5:58)


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "[ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]".

      50 |
      51 |     const unlockedAccounts = await this.getUnlockedAccounts();
    > 52 |     console.log(unlockedAccounts);
         |             ^
      53 |
      54 |     if (!unlockedAccounts.length) {
      55 |       this.logger.info(`No unlocked ${this.networkName} accounts found. Skipping ${this.networkName} queue processing`);

      at console.log (node_modules/@jest/console/build/BufferedConsole.js:156:10)
      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)
      at fulfilled (src/worker/queue.service.ts:5:58)


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "[ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]".

      50 |
      51 |     const unlockedAccounts = await this.getUnlockedAccounts();
    > 52 |     console.log(unlockedAccounts);
         |             ^
      53 |
      54 |     if (!unlockedAccounts.length) {
      55 |       this.logger.info(`No unlocked ${this.networkName} accounts found. Skipping ${this.networkName} queue processing`);

      at console.log (node_modules/@jest/console/build/BufferedConsole.js:156:10)
      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)
      at fulfilled (src/worker/queue.service.ts:5:58)


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "[ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]".

      50 |
      51 |     const unlockedAccounts = await this.getUnlockedAccounts();
    > 52 |     console.log(unlockedAccounts);
         |             ^
      53 |
      54 |     if (!unlockedAccounts.length) {
      55 |       this.logger.info(`No unlocked ${this.networkName} accounts found. Skipping ${this.networkName} queue processing`);

      at console.log (node_modules/@jest/console/build/BufferedConsole.js:156:10)
      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)
      at fulfilled (src/worker/queue.service.ts:5:58)


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "[ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]".

      50 |
      51 |     const unlockedAccounts = await this.getUnlockedAccounts();
    > 52 |     console.log(unlockedAccounts);
         |             ^
      53 |
      54 |     if (!unlockedAccounts.length) {
      55 |       this.logger.info(`No unlocked ${this.networkName} accounts found. Skipping ${this.networkName} queue processing`);

      at console.log (node_modules/@jest/console/build/BufferedConsole.js:156:10)
      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)
      at fulfilled (src/worker/queue.service.ts:5:58)


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "[ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]".

      50 |
      51 |     const unlockedAccounts = await this.getUnlockedAccounts();
    > 52 |     console.log(unlockedAccounts);
         |             ^
      53 |
      54 |     if (!unlockedAccounts.length) {
      55 |       this.logger.info(`No unlocked ${this.networkName} accounts found. Skipping ${this.networkName} queue processing`);

      at console.log (node_modules/@jest/console/build/BufferedConsole.js:156:10)
      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)
      at fulfilled (src/worker/queue.service.ts:5:58)

A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.

Test Suites: 3 passed, 3 total
Tests:       28 passed, 28 total
Snapshots:   0 total
Time:        6.457 s
Ran all test suites matching /test/i.
Done in 7.00s.
ubuntu@ip-172-31-21-129:~/relayer$ ls
Dockerfile  LICENSE  README.md  jest.config.js  node_modules  package.json  src  tsconfig.json  yarn.lock
ubuntu@ip-172-31-21-129:~/relayer$ ls -a
.   .env          .eslintignore   .git     .gitignore       .prettierrc.json  LICENSE    jest.config.js  package.json  tsconfig.json
..  .env.example  .eslintrc.json  .github  .prettierignore  Dockerfile        README.md  node_modules    src           yarn.lock
ubuntu@ip-172-31-21-129:~/relayer$ vim .env
ubuntu@ip-172-31-21-129:~/relayer$ sudo rm -rf .env
ubuntu@ip-172-31-21-129:~/relayer$ ls
Dockerfile  LICENSE  README.md  jest.config.js  node_modules  package.json  src  tsconfig.json  yarn.lock
ubuntu@ip-172-31-21-129:~/relayer$ ls -a
.   .env.example   .eslintrc.json  .github     .prettierignore   Dockerfile  README.md       node_modules  src            yarn.lock
..  .eslintignore  .git            .gitignore  .prettierrc.json  LICENSE     jest.config.js  package.json  tsconfig.json
ubuntu@ip-172-31-21-129:~/relayer$ touch .env
ubuntu@ip-172-31-21-129:~/relayer$ vim .env
ubuntu@ip-172-31-21-129:~/relayer$ vim .env
ubuntu@ip-172-31-21-129:~/relayer$ yarn install
yarn install v1.22.22
warning ../package.json: No license field
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.33s.
ubuntu@ip-172-31-21-129:~/relayer$ yarn test
yarn run v1.22.22
warning ../package.json: No license field
$ jest test
 PASS  src/__tests__/utils.ts
 PASS  src/__tests__/queueService.ts
  ● Console

    console.log
      2024-11-20 22:15:23:1523 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      [ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]

      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)

    console.log
      2024-11-20 22:15:23:1523 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      [ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]

      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)

    console.log
      2024-11-20 22:15:23:1523 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: auth1 proof have no processed authority proof. Skipping.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      [ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]

      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)

    console.log
      2024-11-20 22:15:23:1523 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: sig1 proof have no processed signatures proof. Skipping.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      [ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]

      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)

    console.log
      2024-11-20 22:15:23:1523 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: auth1 proof have no processed authority proof. Skipping.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      [ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]

      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)

    console.log
      2024-11-20 22:15:23:1523 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: auth1 proof have no processed authority proof. Skipping.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      [ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]

      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)

    console.log
      2024-11-20 22:15:23:1523 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: Tried to process proof with empty account 8 Skipping.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      [ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]

      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)

    console.log
      2024-11-20 22:15:23:1523 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: Test error
          at /home/ubuntu/relayer/src/__tests__/queueService.ts:134:63
          at Generator.next (<anonymous>)
          at /home/ubuntu/relayer/src/__tests__/queueService.ts:8:71
          at new Promise (<anonymous>)
          at Object.<anonymous>.__awaiter (/home/ubuntu/relayer/src/__tests__/queueService.ts:4:12)
          at Object.<anonymous> (/home/ubuntu/relayer/src/__tests__/queueService.ts:130:94)
          at Promise.then.completed (/home/ubuntu/relayer/node_modules/jest-circus/build/utils.js:298:28)
          at new Promise (<anonymous>)
          at callAsyncCircusFn (/home/ubuntu/relayer/node_modules/jest-circus/build/utils.js:231:10)
          at _callCircusTest (/home/ubuntu/relayer/node_modules/jest-circus/build/run.js:316:40)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)
          at _runTest (/home/ubuntu/relayer/node_modules/jest-circus/build/run.js:252:3)
          at _runTestsForDescribeBlock (/home/ubuntu/relayer/node_modules/jest-circus/build/run.js:126:9)
          at _runTestsForDescribeBlock (/home/ubuntu/relayer/node_modules/jest-circus/build/run.js:121:9)
          at _runTestsForDescribeBlock (/home/ubuntu/relayer/node_modules/jest-circus/build/run.js:121:9)
          at run (/home/ubuntu/relayer/node_modules/jest-circus/build/run.js:71:3)
          at runAndTransformResultsToJestFormat (/home/ubuntu/relayer/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
          at jestAdapter (/home/ubuntu/relayer/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
          at runTestInternal (/home/ubuntu/relayer/node_modules/jest-runner/build/runTest.js:367:16)
          at runTest (/home/ubuntu/relayer/node_modules/jest-runner/build/runTest.js:444:34)
          at Object.worker (/home/ubuntu/relayer/node_modules/jest-runner/build/testWorker.js:106:12)

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)
          at Generator.throw (<anonymous>)

    console.log
      2024-11-20 22:15:23:1523 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      [ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]

      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)

    console.log
      2024-11-20 22:15:23:1523 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      []

      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)

    console.log
      2024-11-20 22:15:23:1523 info: No unlocked ETHEREUM accounts found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      [ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]

      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)

    console.log
      2024-11-20 22:15:23:1523 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      [ { account_id: 1, hd_path: "m/44'/60'/0'/0/0" } ]

      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)

    console.log
      2024-11-20 22:15:23:1523 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      [ { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' } ]

      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)

    console.log
      2024-11-20 22:15:23:1523 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      [
        { account_id: 1, hd_path: "m/44'/60'/0'/0/0", balance: '1000000' },
        { account_id: 2, hd_path: "m/44'/60'/0'/0/1", balance: '1000000' }
      ]

      at QueueService.<anonymous> (src/worker/queue.service.ts:52:13)

    console.log
      2024-11-20 22:15:23:1523 info: 2 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: 2 ETHEREUM unprocessed proofs found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-20 22:15:23:1523 info: Processed 2 ETHEREUM proofs.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18


  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Error while trying to write to graylog2: Error: getaddrinfo ENOTFOUND <Graylog server URL>
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
      errno: -3008,
      code: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: '<Graylog server URL>'
    }".

      at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:108:26) {
        errno: -3008,
        code: 'ENOTFOUND',
        syscall: 'getaddrinfo',
        hostname: '<Graylog server URL>'
      }".
      at console.error (node_modules/@jest/console/build/BufferedConsole.js:127:10)
      at graylog.<anonymous> (node_modules/winston-graylog2/lib/winston-graylog2.js:61:15)
      at node_modules/graylog2/graylog.js:269:18

 PASS  src/__tests__/proofService.ts
  ● Console

    console.log
      proof { id: 2, refId: 'authorityCID', network: 1, type: 2 }

      at ProofService.<anonymous> (src/services/proofService.ts:72:13)

    console.log
      proof { id: 3, refId: 'authorityCID', network: 1, type: 3 }

      at ProofService.<anonymous> (src/services/proofService.ts:72:13)

    console.log
      proof Promise {
        <rejected> Error: Creation error
            at /home/ubuntu/relayer/src/__tests__/proofService.ts:170:64
            at Generator.next (<anonymous>)
            at /home/ubuntu/relayer/src/__tests__/proofService.ts:8:71
            at new Promise (<anonymous>)
            at Object.<anonymous>.__awaiter (/home/ubuntu/relayer/src/__tests__/proofService.ts:4:12)
            at Object.<anonymous> (/home/ubuntu/relayer/src/__tests__/proofService.ts:138:90)
            at Promise.then.completed (/home/ubuntu/relayer/node_modules/jest-circus/build/utils.js:298:28)
            at new Promise (<anonymous>)
            at callAsyncCircusFn (/home/ubuntu/relayer/node_modules/jest-circus/build/utils.js:231:10)
            at _callCircusTest (/home/ubuntu/relayer/node_modules/jest-circus/build/run.js:316:40)
            at processTicksAndRejections (node:internal/process/task_queues:95:5)
            at _runTest (/home/ubuntu/relayer/node_modules/jest-circus/build/run.js:252:3)
            at _runTestsForDescribeBlock (/home/ubuntu/relayer/node_modules/jest-circus/build/run.js:126:9)
            at _runTestsForDescribeBlock (/home/ubuntu/relayer/node_modules/jest-circus/build/run.js:121:9)
            at _runTestsForDescribeBlock (/home/ubuntu/relayer/node_modules/jest-circus/build/run.js:121:9)
            at run (/home/ubuntu/relayer/node_modules/jest-circus/build/run.js:71:3)
            at runAndTransformResultsToJestFormat (/home/ubuntu/relayer/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
            at jestAdapter (/home/ubuntu/relayer/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
            at runTestInternal (/home/ubuntu/relayer/node_modules/jest-runner/build/runTest.js:367:16)
            at runTest (/home/ubuntu/relayer/node_modules/jest-runner/build/runTest.js:444:34)
            at Object.worker (/home/ubuntu/relayer/node_modules/jest-runner/build/testWorker.js:106:12)
      }

      at ProofService.<anonymous> (src/services/proofService.ts:72:13)

    console.log
      proof { id: 4, refId: 'authorityCID', network: 1, type: 4 }

      at ProofService.<anonymous> (src/services/proofService.ts:72:13)

A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.

Test Suites: 3 passed, 3 total
Tests:       28 passed, 28 total
Snapshots:   0 total
Time:        5.57 s, estimated 6 s
```
</details>

## Docker

I am able to build the Docker image but when I try to run it with `docker run --env-file .env daosign-relayer` I get the following error:

```sh
ubuntu@ip-172-31-21-129:~/relayer$ docker run --env-file .env daosign-relayer
yarn run v1.22.22
$ NODE_ENV=production npm exec node ./dist/index.js
1
/app/node_modules/ethers/lib.commonjs/utils/errors.js:149
        throw makeError(message, code, info);
        ^

TypeError: invalid BytesLike value (argument="value", value="0x<Ethereum private key>", code=INVALID_ARGUMENT, version=6.13.4)
    at makeError (/app/node_modules/ethers/lib.commonjs/utils/errors.js:122:21)
    at assert (/app/node_modules/ethers/lib.commonjs/utils/errors.js:149:15)
    at assertArgument (/app/node_modules/ethers/lib.commonjs/utils/errors.js:161:5)
    at _getBytes (/app/node_modules/ethers/lib.commonjs/utils/data.js:27:36)
    at getBytes (/app/node_modules/ethers/lib.commonjs/utils/data.js:37:12)
    at dataLength (/app/node_modules/ethers/lib.commonjs/utils/data.js:108:12)
    at new SigningKey (/app/node_modules/ethers/lib.commonjs/crypto/signing-key.js:22:66)
    at new Wallet (/app/node_modules/ethers/lib.commonjs/wallet/wallet.js:33:56)
    at new EthereumProofProvider (/app/dist/services/proof_provider/ethereum.js:29:24)
    at Object.<anonymous> (/app/dist/controllers/proof.js:24:5) {
  code: 'INVALID_ARGUMENT',
  argument: 'value',
  value: '0x<Ethereum private key>',
  shortMessage: 'invalid BytesLike value'
}

Node.js v18.20.5
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
