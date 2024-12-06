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

~~The test is failing with errors but it's due to the .env setup.~~

~~After copying the example .env file the tests are currently failing with a lot of errors:~~

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

UPDATE: issues fixed.

## Docker

UPDATE: I am now able to successfully build the Docker file:

<details>
  <summary>Output</summary>

```sh
keegan@keegan-VMware-Virtual-Platform:~/relayer$ sudo docker-compose up --build
[sudo] password for keegan: 
[+] Building 134.2s (14/14) FINISHED                                                                                                                docker:default
 => [relayer internal] load build definition from local.Dockerfile                                                                                            0.0s
 => => transferring dockerfile: 300B                                                                                                                          0.0s
 => [relayer internal] load metadata for docker.io/library/node:18                                                                                            1.6s
 => [relayer internal] load .dockerignore                                                                                                                     0.1s
 => => transferring context: 2B                                                                                                                               0.0s
 => [relayer 1/9] FROM docker.io/library/node:18@sha256:b675228120948dcf40837b4d9c779fd855749eb4625c074b348dd714433f1cbd                                     37.0s
 => => resolve docker.io/library/node:18@sha256:b675228120948dcf40837b4d9c779fd855749eb4625c074b348dd714433f1cbd                                              0.0s
 => => sha256:b675228120948dcf40837b4d9c779fd855749eb4625c074b348dd714433f1cbd 6.41kB / 6.41kB                                                                0.0s
 => => sha256:9371b74049cb4bb6422e1f25c93f564ce9524a647fc951a35f0945efe3e96d4d 2.49kB / 2.49kB                                                                0.0s
 => => sha256:b2da2cb649e9f22d68ecc32c89d6833e6dc1705f0162c3f8a64df5772a470884 6.39kB / 6.39kB                                                                0.0s
 => => sha256:fdf894e782a221820acf469d425b802be26aedb5e5d26ea80a650ff6a974d488 48.50MB / 48.50MB                                                              3.0s
 => => sha256:5bd71677db44bb63b94de61b6f1f95d5540b4ba2d6a8a6bc4d19f422b25e0c2b 23.87MB / 23.87MB                                                              2.3s
 => => sha256:551df7f94f9c131f2fec0e8063142411365f0a1c88b935b9fac22be91af227e0 64.39MB / 64.39MB                                                              9.5s
 => => sha256:ce82e98d553dd62ca6a12bebfe83992ae9f9ae2748275e74b66a68cc094f868b 211.31MB / 211.31MB                                                           14.1s
 => => sha256:6399a464889d3eae2913051cb98c35d0b6bfa20ec77d6b3a04617d4a298a2a56 3.32kB / 3.32kB                                                                3.2s
 => => extracting sha256:fdf894e782a221820acf469d425b802be26aedb5e5d26ea80a650ff6a974d488                                                                     8.4s
 => => sha256:a3c94c84d15dfc1c2c202acca56d7327f541d62c10f9bc1dfb013a618aebd5f1 45.70MB / 45.70MB                                                              9.6s
 => => sha256:2cd8c50fd8ca9ed98f596afc5d92d00b4492b7b069d2d339a6ed8682fc568961 1.25MB / 1.25MB                                                                9.8s
 => => sha256:247468edfd9afcf43bf96caab52a1d979edd5eb13afcaf570c1513f4a35fa43f 446B / 446B                                                                    9.8s
 => => extracting sha256:5bd71677db44bb63b94de61b6f1f95d5540b4ba2d6a8a6bc4d19f422b25e0c2b                                                                     1.7s
 => => extracting sha256:551df7f94f9c131f2fec0e8063142411365f0a1c88b935b9fac22be91af227e0                                                                     5.0s
 => => extracting sha256:ce82e98d553dd62ca6a12bebfe83992ae9f9ae2748275e74b66a68cc094f868b                                                                     9.3s
 => => extracting sha256:6399a464889d3eae2913051cb98c35d0b6bfa20ec77d6b3a04617d4a298a2a56                                                                     0.0s
 => => extracting sha256:a3c94c84d15dfc1c2c202acca56d7327f541d62c10f9bc1dfb013a618aebd5f1                                                                     6.3s
 => => extracting sha256:2cd8c50fd8ca9ed98f596afc5d92d00b4492b7b069d2d339a6ed8682fc568961                                                                     0.1s
 => => extracting sha256:247468edfd9afcf43bf96caab52a1d979edd5eb13afcaf570c1513f4a35fa43f                                                                     0.0s
 => [relayer internal] load build context                                                                                                                     4.2s
 => => transferring context: 3.21MB                                                                                                                           3.7s
 => [relayer 2/9] WORKDIR /app                                                                                                                                2.7s
 => [relayer 3/9] RUN npm install -g typescript ts-node ethers@latest                                                                                         7.3s
 => [relayer 4/9] COPY package.json ./                                                                                                                        0.0s 
 => [relayer 5/9] COPY yarn.lock ./                                                                                                                           0.0s
 => [relayer 6/9] COPY tsconfig.json ./                                                                                                                       0.0s
 => [relayer 7/9] RUN yarn                                                                                                                                   37.0s
 => [relayer 8/9] COPY . .                                                                                                                                   23.2s
 => [relayer 9/9] RUN yarn build                                                                                                                              4.6s
 => [relayer] exporting to image                                                                                                                             20.6s
 => => exporting layers                                                                                                                                      20.6s
 => => writing image sha256:c51ca5cf0cbacb38269888877d7d469db5e4d5ecb98bc4ccb90c66470800f819                                                                  0.0s
 => => naming to docker.io/library/relayer-relayer                                                                                                            0.0s
[+] Running 2/2
 ✔ Container postgres  Recreated                                                                                                                              0.4s 
 ✔ Container relayer   Recreated                                                                                                                              0.1s 
Attaching to postgres, relayer
postgres  | 
postgres  | PostgreSQL Database directory appears to contain a database; Skipping initialization
postgres  | 
postgres  | 
postgres  | 2024-12-03 23:36:13.923 UTC [1] LOG:  starting PostgreSQL 17.2 (Debian 17.2-1.pgdg120+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
postgres  | 2024-12-03 23:36:13.972 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres  | 2024-12-03 23:36:13.972 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres  | 2024-12-03 23:36:13.974 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres  | 2024-12-03 23:36:13.998 UTC [27] LOG:  database system was shut down at 2024-12-03 23:36:12 UTC
postgres  | 2024-12-03 23:36:14.021 UTC [1] LOG:  database system is ready to accept connections
relayer   | yarn run v1.22.22
relayer   | $ npm exec node ./dist/index.js
relayer   | Server is running at http://localhost:8000
relayer   | Data Source has been initialized!
relayer   | 2024-12-03 23:36:16:3616 info: Update transaction statuses
relayer   | 2024-12-03 23:36:16:3616 info: Update transaction statuses
relayer   | 2024-12-03 23:36:16:3616 info: Update transaction statuses
relayer   | 2024-12-03 23:36:16:3616 info: Update transaction statuses
relayer   | 2024-12-03 23:36:16:3616 info: Update transaction statuses
relayer   | 2024-12-03 23:36:16:3616 info: SUI queue processor started
relayer   | 2024-12-03 23:36:16:3616 info: ETHEREUM queue processor started
relayer   | 2024-12-03 23:36:16:3616 info: OASIS queue processor started
relayer   | 2024-12-03 23:36:16:3616 info: POLKADOT queue processor started
relayer   | 2024-12-03 23:36:16:3616 info: NEAR queue processor started
relayer   | 2024-12-03 23:36:16:3616 info: Found 0 SUI pending transactions
relayer   | 2024-12-03 23:36:16:3616 info: 0 SUI proofs status checked
relayer   | 2024-12-03 23:36:16:3616 info: Found 0 ETHEREUM pending transactions
relayer   | 2024-12-03 23:36:16:3616 info: 0 ETHEREUM proofs status checked
relayer   | 2024-12-03 23:36:16:3616 info: No unlocked ETHEREUM accounts found. Skipping ETHEREUM queue processing
relayer   | 2024-12-03 23:36:16:3616 info: No unlocked NEAR accounts found. Skipping NEAR queue processing
relayer   | 2024-12-03 23:36:16:3616 info: No unlocked SUI accounts found. Skipping SUI queue processing
relayer   | 2024-12-03 23:36:16:3616 info: Found 0 NEAR pending transactions
relayer   | 2024-12-03 23:36:16:3616 info: 0 NEAR proofs status checked
relayer   | 2024-12-03 23:36:16:3616 info: Found 0 POLKADOT pending transactions
relayer   | 2024-12-03 23:36:16:3616 info: 0 POLKADOT proofs status checked
relayer   | 2024-12-03 23:36:16:3616 info: Found 0 OASIS pending transactions
relayer   | 2024-12-03 23:36:16:3616 info: 0 OASIS proofs status checked
relayer   | 2024-12-03 23:36:16:3616 info: No unlocked POLKADOT accounts found. Skipping POLKADOT queue processing
relayer   | 2024-12-03 23:36:16:3616 info: No unlocked OASIS accounts found. Skipping OASIS queue processing
relayer   | 2024-12-03 23:37:00:370 info: Update transaction statuses
relayer   | 2024-12-03 23:37:00:370 info: OASIS queue processor started
relayer   | 2024-12-03 23:37:00:370 info: Update transaction statuses
relayer   | 2024-12-03 23:37:00:370 info: Update transaction statuses
relayer   | 2024-12-03 23:37:00:370 info: Update transaction statuses
relayer   | 2024-12-03 23:37:00:370 info: Update transaction statuses
relayer   | 2024-12-03 23:37:00:370 info: SUI queue processor started
relayer   | 2024-12-03 23:37:00:370 info: ETHEREUM queue processor started
relayer   | 2024-12-03 23:37:00:370 info: POLKADOT queue processor started
relayer   | 2024-12-03 23:37:00:370 info: NEAR queue processor started
relayer   | 2024-12-03 23:37:00:370 info: No unlocked OASIS accounts found. Skipping OASIS queue processing
relayer   | 2024-12-03 23:37:00:370 info: Found 0 SUI pending transactions
relayer   | 2024-12-03 23:37:00:370 info: 0 SUI proofs status checked
relayer   | 2024-12-03 23:37:00:370 info: Found 0 NEAR pending transactions
relayer   | 2024-12-03 23:37:00:370 info: 0 NEAR proofs status checked
relayer   | 2024-12-03 23:37:00:370 info: Found 0 ETHEREUM pending transactions
relayer   | 2024-12-03 23:37:00:370 info: 0 ETHEREUM proofs status checked
relayer   | 2024-12-03 23:37:00:370 info: Found 0 OASIS pending transactions
relayer   | 2024-12-03 23:37:00:370 info: 0 OASIS proofs status checked
relayer   | 2024-12-03 23:37:00:370 info: Found 0 POLKADOT pending transactions
relayer   | 2024-12-03 23:37:00:370 info: 0 POLKADOT proofs status checked
relayer   | 2024-12-03 23:37:00:370 info: No unlocked SUI accounts found. Skipping SUI queue processing
relayer   | 2024-12-03 23:37:00:370 info: No unlocked NEAR accounts found. Skipping NEAR queue processing
relayer   | 2024-12-03 23:37:00:370 info: No unlocked POLKADOT accounts found. Skipping POLKADOT queue processing
relayer   | 2024-12-03 23:37:00:370 info: No unlocked ETHEREUM accounts found. Skipping ETHEREUM queue processing
```
</details>

~~I am able to build the Docker image but when I try to run it with `docker run --env-file .env daosign-relayer` I get the following error:~~

## Tests

Unit tests are now all passing:

<details>
  <summary>Output</summary>

```rust
ubuntu@ip-172-31-27-130:~/relayer$ yarn test
yarn run v1.22.22
warning ../package.json: No license field
$ jest test
 PASS  src/__tests__/utils.ts
 PASS  src/__tests__/queueService.ts (5.701 s)
  ● Console

    console.log
      2024-11-27 21:22:59:2259 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: auth1 proof have no processed authority proof. Skipping.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: sig1 proof have no processed signatures proof. Skipping.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: auth1 proof have no processed authority proof. Skipping.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: auth1 proof have no processed authority proof. Skipping.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: Tried to process proof with empty account 8 Skipping.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: No unlocked ETHEREUM accounts found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: 1 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: No unprocessed ETHEREUM proofs found. Skipping ETHEREUM queue processing

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: ETHEREUM queue processor started

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: 2 ETHEREUM unlocked accounts found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: 2 ETHEREUM unprocessed proofs found.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

    console.log
      2024-11-27 21:23:00:230 info: Processed 2 ETHEREUM proofs.

      at Console.log (node_modules/winston/lib/winston/transports/console.js:87:23)

 PASS  src/__tests__/proofService.ts (5.77 s)
A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.

Test Suites: 3 passed, 3 total
Tests:       28 passed, 28 total
Snapshots:   0 total
Time:        6.509 s
Ran all test suites matching /test/i.
Done in 7.05s.
```
</details>

