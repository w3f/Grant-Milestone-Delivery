# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/typink.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Links | Notes |
| -----: | ----------- | ----- | ------ | ------ |
| **0a.** | License | <ul><li>[x] </li></ul> | [MIT](https://github.com/dedotdev/typink/blob/w3f-delivery-m2/LICENSE) | |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | - [README](https://github.com/dedotdev/typink/blob/w3f-delivery-m2/README.md) <br />- [Demo](https://github.com/dedotdev/typink/tree/w3f-delivery-m2/examples/demo) (https://typink-demo.netlify.app/) <br />- [Demo SubConnect](https://github.com/dedotdev/typink/tree/w3f-delivery-m2/examples/demo-subconnect) (https://typink-subconnect.netlify.app/) | |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Install & setup typink project](https://github.com/dedotdev/typink/tree/w3f-delivery-m2?tab=readme-ov-file#getting-started) |  |
| **0d.** | Article | <ul><li>[x] </li></ul> | [Introducing Typink](https://docs.dedot.dev/typink/introducing-typink) | |
| 1. | Helpers & Utilities | <ul><li>[x] </li></ul> | Delivered [Helpers & Utilities](https://grants.web3.foundation/applications/typink#helpers--utilities) including: <br/> - [formatBalance](https://github.com/dedotdev/typink/blob/w3f-delivery-m2/packages/typink/src/utils/formatBalance.ts) <br /> - [Human-readable error messages](https://github.com/dedotdev/typink/blob/w3f-delivery-m2/packages/typink/src/utils/errors.ts) <br /> - [List of ink!-contracts supported networks](https://github.com/dedotdev/typink/tree/w3f-delivery-m2/packages/typink/src/networks) <br /> - [txToaster](https://github.com/dedotdev/typink/blob/w3f-delivery-m2/packages/create-typink/src/templates/default/ui/src/utils/txToaster.tsx): Transaction notification & progress updates  |  |
| 2. | CLI & boilerplate template project | <ul><li>[x] </li></ul> | Delivered [CLI & template project](https://grants.web3.foundation/applications/typink#cli--boilerplatestarter-project-template) including: <br/> - [create-typink](https://github.com/dedotdev/typink/tree/w3f-delivery-m2/packages/create-typink) cli package ([npm package](https://www.npmjs.com/package/create-typink)) <br /> - [Template project](https://github.com/dedotdev/typink/tree/w3f-delivery-m2/packages/create-typink/src/templates/default) |  |
| 3. | Example dapp | <ul><li>[x] </li></ul> | - Tutorial: [Develop ink! dApp using Typink](https://docs.dedot.dev/help-and-faq/tutorials/develop-ink-dapp-using-typink) <br /> - [Sample dapp - PSP22 Transfer](https://psp22-transfer.netlify.app/) ([Github Repo](https://github.com/sinzii/psp22-transfer))  |   |

# General Notes

~~Getting an error when trying to build a test greeter contract:~~

<details>
  <summary>Output</summary>

```ts
npx create-typink@latest
(node:4845) ExperimentalWarning: CommonJS module /home/ubuntu/.nvm/versions/node/v23.2.0/lib/node_modules/npm/node_modules/debug/src/node.js is loading ES Module /home/ubuntu/.nvm/versions/node/v23.2.0/lib/node_modules/npm/node_modules/supports-color/index.js using require().
Support for loading ES Module in require() is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Need to install the following packages:
create-typink@0.1.0
Ok to proceed? (y) y


░█▀▀░█▀▄░█▀▀░█▀█░▀█▀░█▀▀░░░░░▀█▀░█░█░█▀█░▀█▀░█▀█░█░█
░█░░░█▀▄░█▀▀░█▀█░░█░░█▀▀░▄▄▄░░█░░░█░░█▀▀░░█░░█░█░█▀▄
░▀▀▀░▀░▀░▀▀▀░▀░▀░░▀░░▀▀▀░░░░░░▀░░░▀░░▀░░░▀▀▀░▀░▀░▀░▀

✔ Your project name: test
✔ What example contract do you want to use? greeter
✔ What wallet connector do you want to use? Default
✔ What networks do you want to connect? Pop Testnet
✔ 📁 Create project directory /home/ubuntu/test
✔ 🚀 Creating a new Typink app in test
✖ Command failed with exit code 1: yarn install
  Usage Error: The nearest package directory (/home/ubuntu/test) doesn't seem to be part of the project declared in
  /home/ubuntu.
  - If /home/ubuntu isn't intended to be a project, remove any yarn.lock and/or package.json file there.
  - If /home/ubuntu is intended to be a project, it might be that you forgot to list test in its workspace configuration.
  - Finally, if /home/ubuntu is fine and you intend test to be treated as a completely separate project (not even a
  workspace), create an empty yarn.lock file in it.
  $ yarn install [--json] [--immutable] [--immutable-cache] [--refresh-lockfile] [--check-cache] [--check-resolutions]
  [--inline-builds] [--mode #0]
◼ 🧹 Formatting the code with Prettier
◼ 🚨 Create the very first Git commit
🚨 An error occurred: ExecaError: Command failed with exit code 1: yarn install

Usage Error: The nearest package directory (/home/ubuntu/test) doesn't seem to be part of the project declared in /home/ubuntu.

- If /home/ubuntu isn't intended to be a project, remove any yarn.lock and/or package.json file there.
- If /home/ubuntu is intended to be a project, it might be that you forgot to list test in its workspace configuration.
- Finally, if /home/ubuntu is fine and you intend test to be treated as a completely separate project (not even a workspace), create an empty yarn.lock file in it.

$ yarn install [--json] [--immutable] [--immutable-cache] [--refresh-lockfile] [--check-cache] [--check-resolutions] [--inline-builds] [--mode #0]
    at getFinalError (file:///home/ubuntu/.npm/_npx/ee0b8ab848e051d2/node_modules/execa/lib/return/final-error.js:6:9)
    at makeError (file:///home/ubuntu/.npm/_npx/ee0b8ab848e051d2/node_modules/execa/lib/return/result.js:108:16)
    at getAsyncResult (file:///home/ubuntu/.npm/_npx/ee0b8ab848e051d2/node_modules/execa/lib/methods/main-async.js:167:4)
    at handlePromise (file:///home/ubuntu/.npm/_npx/ee0b8ab848e051d2/node_modules/execa/lib/methods/main-async.js:150:17)
    at async installPackages (file:///home/ubuntu/.npm/_npx/ee0b8ab848e051d2/node_modules/create-typink/tasks/installPackages.js:3:5)
    at async Task.run (file:///home/ubuntu/.npm/_npx/ee0b8ab848e051d2/node_modules/listr2/dist/index.js:2058:11) {
  shortMessage: 'Command failed with exit code 1: yarn install',
  command: 'yarn install',
  escapedCommand: 'yarn install',
  cwd: '/home/ubuntu/test',
  durationMs: 1868.838993,
  failed: true,
  timedOut: false,
  isCanceled: false,
  isGracefullyCanceled: false,
  isTerminated: false,
  isMaxBuffer: false,
  isForcefullyTerminated: false,
  exitCode: 1,
  stdout: "\x1B[31m\x1B[1mUsage Error\x1B[22m\x1B[39m: The nearest package directory (/home/ubuntu/test) doesn't seem to be part of the project declared in /home/ubuntu.\n" +
    '\n' +
    "- If /home/ubuntu isn't intended to be a project, remove any yarn.lock and/or package.json file there.\n" +
    '- If /home/ubuntu is intended to be a project, it might be that you forgot to list test in its workspace configuration.\n' +
    '- Finally, if /home/ubuntu is fine and you intend test to be treated as a completely separate project (not even a workspace), create an empty yarn.lock file in it.\n' +
    '\n' +
    '\x1B[1m$ \x1B[22myarn install [--json] [--immutable] [--immutable-cache] [--refresh-lockfile] [--check-cache] [--check-resolutions] [--inline-builds] [--mode #0]',
  stderr: '',
  stdio: [
    undefined,
    "\x1B[31m\x1B[1mUsage Error\x1B[22m\x1B[39m: The nearest package directory (/home/ubuntu/test) doesn't seem to be part of the project declared in /home/ubuntu.\n" +
      '\n' +
      "- If /home/ubuntu isn't intended to be a project, remove any yarn.lock and/or package.json file there.\n" +
      '- If /home/ubuntu is intended to be a project, it might be that you forgot to list test in its workspace configuration.\n' +
      '- Finally, if /home/ubuntu is fine and you intend test to be treated as a completely separate project (not even a workspace), create an empty yarn.lock file in it.\n' +
      '\n' +
      '\x1B[1m$ \x1B[22myarn install [--json] [--immutable] [--immutable-cache] [--refresh-lockfile] [--check-cache] [--check-resolutions] [--inline-builds] [--mode #0]',
    ''
  ],
  ipcOutput: [],
  pipedFrom: []
}
🚨 Sorry, exiting...
```
</details>

~~I get a different error when trying the psp22 contract:~~

<details>
  <summary>Output</summary>

```ts
npx create-typink@latest
(node:5023) ExperimentalWarning: CommonJS module /home/ubuntu/.nvm/versions/node/v23.2.0/lib/node_modules/npm/node_modules/debug/src/node.js is loading ES Module /home/ubuntu/.nvm/versions/node/v23.2.0/lib/node_modules/npm/node_modules/supports-color/index.js using require().
Support for loading ES Module in require() is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

░█▀▀░█▀▄░█▀▀░█▀█░▀█▀░█▀▀░░░░░▀█▀░█░█░█▀█░▀█▀░█▀█░█░█
░█░░░█▀▄░█▀▀░█▀█░░█░░█▀▀░▄▄▄░░█░░░█░░█▀▀░░█░░█░█░█▀▄
░▀▀▀░▀░▀░▀▀▀░▀░▀░░▀░░▀▀▀░░░░░░▀░░░▀░░▀░░░▀▀▀░▀░▀░▀░▀

✔ Your project name: test
✔ What example contract do you want to use? psp22
✔ What wallet connector do you want to use? Default
✔ What networks do you want to connect? Pop Testnet
✖ Failed to create project directory: test with error: Command failed with exit code 1: mkdir test
  mkdir: cannot create directory ‘test’: File exists
◼ 🚀 Creating a new Typink app in test
◼ 📦 Installing dependencies with yarn, this could take a while
◼ 🧹 Formatting the code with Prettier
◼ 🚨 Create the very first Git commit
🚨 An error occurred: Error: Failed to create project directory: test with error: Command failed with exit code 1: mkdir test

mkdir: cannot create directory ‘test’: File exists
    at createProjectDirectory (file:///home/ubuntu/.npm/_npx/ee0b8ab848e051d2/node_modules/create-typink/tasks/createProjectDirectory.js:10:15)
    at async Task.run (file:///home/ubuntu/.npm/_npx/ee0b8ab848e051d2/node_modules/listr2/dist/index.js:2058:11)
🚨 Sorry, exiting...
```
</details>

UPDATE: I am now able to create contracts using the CLI:
```ts
ubuntu@ip-172-31-23-44:~$ npx create-typink@latest

░█▀▀░█▀▄░█▀▀░█▀█░▀█▀░█▀▀░░░░░▀█▀░█░█░█▀█░▀█▀░█▀█░█░█
░█░░░█▀▄░█▀▀░█▀█░░█░░█▀▀░▄▄▄░░█░░░█░░█▀▀░░█░░█░█░█▀▄
░▀▀▀░▀░▀░▀▀▀░▀░▀░░▀░░▀▀▀░░░░░░▀░░░▀░░▀░░░▀▀▀░▀░▀░▀░▀

✔ Your project name: new_app_maybe
✔ What example contract do you want to use? greeter
✔ What wallet connector do you want to use? Default
✔ What networks do you want to connect? Pop Testnet
✔ 📁 Create project directory /home/ubuntu/new_app_maybe
✔ 🚀 Creating a new Typink app in new_app_maybe
✔ 📦 Installing dependencies with yarn, this could take a while
✔ 🧹 Formatting the code with Prettier
✔ 🚨 Create the very first Git commit

🎉 Your project is ready!
➡️ To get started:
    $ cd new_app_maybe
    $ yarn start
```

PSP22:
```ts
ubuntu@ip-172-31-23-44:~$ npx create-typink@latest

░█▀▀░█▀▄░█▀▀░█▀█░▀█▀░█▀▀░░░░░▀█▀░█░█░█▀█░▀█▀░█▀█░█░█
░█░░░█▀▄░█▀▀░█▀█░░█░░█▀▀░▄▄▄░░█░░░█░░█▀▀░░█░░█░█░█▀▄
░▀▀▀░▀░▀░▀▀▀░▀░▀░░▀░░▀▀▀░░░░░░▀░░░▀░░▀░░░▀▀▀░▀░▀░▀░▀

✔ Your project name: new_psp22
✔ What example contract do you want to use? psp22
✔ What wallet connector do you want to use? Default
✔ What networks do you want to connect? Pop Testnet
✔ 📁 Create project directory /home/ubuntu/new_psp22
✔ 🚀 Creating a new Typink app in new_psp22
✔ 📦 Installing dependencies with yarn, this could take a while
✔ 🧹 Formatting the code with Prettier
✔ 🚨 Create the very first Git commit

🎉 Your project is ready!
➡️ To get started:
    $ cd new_psp22
    $ yarn start
```
```ts
ubuntu@ip-172-31-23-44:~/new_psp22$ yarn start
The CJS build of Vite's Node API is deprecated. See https://vite.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.

  VITE v5.4.14  ready in 779 ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Testing

Unit tests passing with some warnings:

<details>
  <summary>Output</summary>

```tsubuntu@ip-172-31-23-44:~/typink$ yarn test
lerna notice cli v7.4.2
lerna verb packageConfigs Resolving packages based on package.json "workspaces" configuration.
lerna verb rootPath /home/ubuntu/typink
lerna info versioning independent
lerna verb run Nx target configuration was not found. Task dependencies will not be automatically included.

> typink:test

(node:6050) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 RUN  v2.1.8 /home/ubuntu/typink/packages/typink
stderr | src/hooks/__tests__/useContractQuery.test.ts > useContractQuery > should handle errors from the contract query
Error in contract query: Error: Test error
    at /home/ubuntu/typink/packages/typink/src/hooks/__tests__/useContractQuery.test.ts:169:25
    at file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:146:14
    at file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:533:11
    at runWithTimeout (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:39:7)
    at runTest (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:1056:17)
    at runSuite (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:1205:15)
    at runSuite (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:1205:15)
    at runFiles (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:1262:5)
    at startTests (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:1271:3)
    at file:///home/ubuntu/typink/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11
stderr | src/hooks/__tests__/useContractQuery.test.ts > useContractQuery > should reset error state on successful query after an error
Error in contract query: Error: Test error
    at /home/ubuntu/typink/packages/typink/src/hooks/__tests__/useContractQuery.test.ts:190:23
    at file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:146:14
    at file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:533:11
    at runWithTimeout (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:39:7)
    at runTest (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:1056:17)
    at runSuite (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:1205:15)
    at runSuite (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:1205:15)
    at runFiles (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:1262:5)
    at startTests (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:1271:3)
    at file:///home/ubuntu/typink/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11
 ✓ src/hooks/__tests__/useContractQuery.test.ts (10 tests) 307ms
 ✓ src/utils/__tests__/errors.test.ts (22 tests) 8ms
stdout | src/hooks/__tests__/useDeployerTx.test.ts > useDeployerTx > should call the contract method with correct parameters
Dry run result: {
  data: { isOk: true },
  raw: { gasRequired: { refTime: 1000n, proofSize: 1000n } }
}
stdout | src/hooks/__tests__/useDeployerTx.test.ts > useDeployerTx > should update inProgress and inBestBlockProgress states
Dry run result: {
  data: { isOk: true },
  raw: { gasRequired: { refTime: 1000n, proofSize: 1000n } }
}
stdout | src/hooks/__tests__/useDeployerTx.test.ts > useDeployerTx > should throw error on dry run with errors
Dry run result: {
  data: { isErr: true, err: 'Contract error' },
  raw: { gasRequired: { refTime: 1000n, proofSize: 1000n } }
}
 ✓ src/hooks/__tests__/useDeployerTx.test.ts (7 tests) 61ms
stdout | src/hooks/__tests__/useContractTx.test.ts > useContractTx > should call the contract method with correct parameters
Dry run result: {
  data: { isOk: true },
  raw: { gasRequired: { refTime: 1000n, proofSize: 1000n } }
}
stdout | src/hooks/__tests__/useContractTx.test.ts > useContractTx > should update inProgress and inBestBlockProgress states
Dry run result: {
  data: { isOk: true },
  raw: { gasRequired: { refTime: 1000n, proofSize: 1000n } }
}
stdout | src/hooks/__tests__/useContractTx.test.ts > useContractTx > should throw error on dry run with errors
Dry run result: {
  data: { isErr: true, err: 'Contract error' },
  raw: { gasRequired: { refTime: 1000n, proofSize: 1000n } }
}
stderr | src/hooks/__tests__/useContractTx.test.ts > useContractTx > should throw error on dry run with errors
ContractMessageError [DedotError]: Contract Message Error: Contract error
    at signAndSend (/home/ubuntu/typink/packages/typink/src/hooks/useContractTx.ts:138:15) {
  error: 'Contract error'
}
stderr | src/hooks/__tests__/useContractTx.test.ts > useContractTx > should throw an error when balance is insufficient
BalanceInsufficientError [DedotError]: Insufficient balance to perform this transaction
    at /home/ubuntu/typink/packages/typink/src/hooks/__tests__/useContractTx.test.ts:184:58
    at file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:146:14
    at file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:533:11
    at runWithTimeout (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:39:7)
    at runTest (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:1056:17)
    at runSuite (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:1205:15)
    at runSuite (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:1205:15)
    at runFiles (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:1262:5)
    at startTests (file:///home/ubuntu/typink/node_modules/@vitest/runner/dist/index.js:1271:3)
    at file:///home/ubuntu/typink/node_modules/vitest/dist/chunks/runBaseTests.3qpJUEJM.js:126:11 {
  caller: 'mock-address'
}
 ✓ src/hooks/__tests__/useContractTx.test.ts (7 tests) 66ms
 ✓ src/hooks/__tests__/usePSP22Balance.test.ts (5 tests) 85ms
stderr | src/hooks/__tests__/useContract.test.ts > useContract > should throw TypinkError when contract deployment is not found
Error: Uncaught [DedotError: Contract deployment with id: non-existent-contract not found on network: test-network]
    at reportException (/home/ubuntu/typink/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24)
    at innerInvokeEventListeners (/home/ubuntu/typink/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
    at invokeEventListeners (/home/ubuntu/typink/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
    at HTMLUnknownElementImpl._dispatch (/home/ubuntu/typink/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
    at HTMLUnknownElementImpl.dispatchEvent (/home/ubuntu/typink/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
    at HTMLUnknownElement.dispatchEvent (/home/ubuntu/typink/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
    at Object.invokeGuardedCallbackDev (/home/ubuntu/typink/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
    at invokeGuardedCallback (/home/ubuntu/typink/node_modules/react-dom/cjs/react-dom.development.js:4277:31)
    at reportUncaughtErrorInDEV (/home/ubuntu/typink/node_modules/react-dom/cjs/react-dom.development.js:22877:5)
    at captureCommitPhaseError (/home/ubuntu/typink/node_modules/react-dom/cjs/react-dom.development.js:27165:5) TypinkError [DedotError]: Contract deployment with id: non-existent-contract not found on network: test-network
    at /home/ubuntu/typink/packages/typink/src/hooks/useContract.ts:39:15
    at commitHookEffectListMount (/home/ubuntu/typink/node_modules/react-dom/cjs/react-dom.development.js:23189:26)
    at commitPassiveMountOnFiber (/home/ubuntu/typink/node_modules/react-dom/cjs/react-dom.development.js:24970:11)
    at commitPassiveMountEffects_complete (/home/ubuntu/typink/node_modules/react-dom/cjs/react-dom.development.js:24930:9)
    at commitPassiveMountEffects_begin (/home/ubuntu/typink/node_modules/react-dom/cjs/react-dom.development.js:24917:7)
    at commitPassiveMountEffects (/home/ubuntu/typink/node_modules/react-dom/cjs/react-dom.development.js:24905:3)
    at flushPassiveEffectsImpl (/home/ubuntu/typink/node_modules/react-dom/cjs/react-dom.development.js:27078:3)
    at flushPassiveEffects (/home/ubuntu/typink/node_modules/react-dom/cjs/react-dom.development.js:27023:14)
    at /home/ubuntu/typink/node_modules/react-dom/cjs/react-dom.development.js:26808:9
    at flushActQueue (/home/ubuntu/typink/node_modules/react/cjs/react.development.js:2667:24)
The above error occurred in the <TestComponent> component:
    at TestComponent (/home/ubuntu/typink/node_modules/@testing-library/react/dist/pure.js:323:5)
Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
 ✓ src/hooks/__tests__/useContract.test.ts (6 tests) 50ms
 ✓ src/hooks/__tests__/useDeployer.test.ts (4 tests) 29ms
 ✓ src/hooks/__tests__/useBalances.test.ts (3 tests) 27ms
 ✓ src/hooks/__tests__/useWatchContractEvent.test.ts (3 tests) 183ms
 ✓ src/hooks/__tests__/useRawContract.test.ts (5 tests) 28ms
 ✓ src/utils/__tests__/formatBalance.test.ts (5 tests) 25ms
 ✓ src/hooks/internal/__tests__/useDeepDeps.test.ts (7 tests) 29ms
 ✓ src/hooks/__tests__/useBalance.test.ts (6 tests) 23ms
 Test Files  13 passed (13)
      Tests  90 passed (90)
   Start at  22:25:59
   Duration  13.55s (transform 454ms, setup 0ms, collect 4.85s, tests 922ms, environment 5.27s, prepare 927ms)

 ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

 >  Lerna (powered by Nx)   Successfully ran target test for project typink
```
</details>
