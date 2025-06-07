# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/typink.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Links | Notes |
| -----: | ----------- | ----- | ------ | ------ |
| **0a.** | License | <ul><li>[x] </li></ul> | [MIT](https://github.com/dedotdev/typink/blob/w3f-delivery-m2/LICENSE) | |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | - [README](https://github.com/dedotdev/typink/blob/w3f-delivery-m2/README.md) <br />- [Demo](https://github.com/dedotdev/typink/tree/w3f-delivery-m2/examples/demo) (https://typink-demo.netlify.app/) <br />- [Demo SubConnect](https://github.com/dedotdev/typink/tree/w3f-delivery-m2/examples/demo-subconnect) (https://typink-subconnect.netlify.app/) | Very robust docs|
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Install & setup typink project](https://github.com/dedotdev/typink/tree/w3f-delivery-m2?tab=readme-ov-file#getting-started) | Good coverage |
| **0d.** | Article | <ul><li>[x] </li></ul> | [Introducing Typink](https://docs.dedot.dev/typink/introducing-typink) | |
| 1. | Helpers & Utilities | <ul><li>[x] </li></ul> | Delivered [Helpers & Utilities](https://grants.web3.foundation/applications/typink#helpers--utilities) including: <br/> - [formatBalance](https://github.com/dedotdev/typink/blob/w3f-delivery-m2/packages/typink/src/utils/formatBalance.ts) <br /> - [Human-readable error messages](https://github.com/dedotdev/typink/blob/w3f-delivery-m2/packages/typink/src/utils/errors.ts) <br /> - [List of ink!-contracts supported networks](https://github.com/dedotdev/typink/tree/w3f-delivery-m2/packages/typink/src/networks) <br /> - [txToaster](https://github.com/dedotdev/typink/blob/w3f-delivery-m2/packages/create-typink/src/templates/default/ui/src/utils/txToaster.tsx): Transaction notification & progress updates  | Works |
| 2. | CLI & boilerplate template project | <ul><li>[x] </li></ul> | Delivered [CLI & template project](https://grants.web3.foundation/applications/typink#cli--boilerplatestarter-project-template) including: <br/> - [create-typink](https://github.com/dedotdev/typink/tree/w3f-delivery-m2/packages/create-typink) cli package ([npm package](https://www.npmjs.com/package/create-typink)) <br /> - [Template project](https://github.com/dedotdev/typink/tree/w3f-delivery-m2/packages/create-typink/src/templates/default) | Works |
| 3. | Example dapp | <ul><li>[x] </li></ul> | - Tutorial: [Develop ink! dApp using Typink](https://docs.dedot.dev/help-and-faq/tutorials/develop-ink-dapp-using-typink) <br /> - [Sample dapp - PSP22 Transfer](https://psp22-transfer.netlify.app/) ([Github Repo](https://github.com/sinzii/psp22-transfer))  | Works |

# General Notes

Excellent work as usual! Wonderful documentation & tutorials. I was able to make it through the tutorial to deploy smart contracts locally using the CLI tool, and see it on the UI. I was also able to use the demo app to interact with contracts on the POP chain, such as update the message on the Greeter contract, as well as mint assets with the PSP22 contract.

![typink](https://github.com/user-attachments/assets/f813e72c-3dd7-4dd9-8a51-d2cb5484f417)

![typink2](https://github.com/user-attachments/assets/e170ef0e-2764-455a-8095-b72b81b0e081)

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

Zombienet config works:

<details>
  <summary>Output</summary>

```ts
docker run -p 9944:9944 -p 9933:9933 --platform linux/amd64 typink-zbn
╔════════════════════╤════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ 🧟 Zombienet 🧟    │ Initiation                                                                                         ║
╟────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
║ Provider           │ native                                                                                             ║
╟────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
║ Namespace          │ zombie-0f7bc705088658f144e12d163cc1dfba                                                            ║
╟────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
║ Temp Dir           │ /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI                                       ║
╚════════════════════╧════════════════════════════════════════════════════════════════════════════════════════════════════╝
┌─────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Pod                     │ temp                                                                                               │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Status                  │ Launching                                                                                          │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Command                 │ bash -c polkadot build-spec --chain rococo-local --disable-default-bootnode > /tmp/zombie-0f7bc70… │
└─────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Pod                                    │ temp                                                                           │
├────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ Status                                 │ Ready                                                                          │
└────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Pod                     │ temp-1                                                                                             │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Status                  │ Launching                                                                                          │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Command                 │ bash -c polkadot-parachain build-spec --chain contracts-rococo-dev --disable-default-              │
│                         │ bootnode > /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/cfg/contracts-roco         │
│                         │ co-dev-plain.json                                                                                  │
└─────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Pod                                    │ temp-1                                                                         │
├────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ Status                                 │ Ready                                                                          │
└────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ 🧹 Starting with a fresh authority set...                                                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌──────────────────────────────┬────────────────────┬──────────────────────────────────────────────────────────────────────┐
│ 👤 Added Genesis Authority   │ collator-0         │ 5Cg3AuHeM3RDi7JW81Rd38K5vkC39qzhxqBdtZPgdLLAW59Y                     │
└──────────────────────────────┴────────────────────┴──────────────────────────────────────────────────────────────────────┘
┌──────────────────────────────┬────────────────────┬──────────────────────────────────────────────────────────────────────┐
│ 👤 Added CollatorSelection   │ collator-0         │ 5ED3j9hh9aTPAodQ2AmcWzsca64kpcWZKFpz9d6Btu4b7EKc                     │
└──────────────────────────────┴────────────────────┴──────────────────────────────────────────────────────────────────────┘
┌─────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Pod                     │ temp-2                                                                                             │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Status                  │ Launching                                                                                          │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Command                 │ bash -c polkadot-parachain build-spec --chain /tmp/zombie-0f7bc705088658f144e12d163cc              │
│                         │ 1dfba_-1-wPU3pvXT4NzI/contracts-rococo-dev-2000-rococo-local-plain.json --disable-default-         │
│                         │ bootnode  --raw > /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/contracts-r         │
│                         │ ococo-dev-2000-rococo-local-raw.json                                                               │
└─────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Pod                                    │ temp-2                                                                         │
├────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ Status                                 │ Ready                                                                          │
└────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Pod                     │ temp-collator                                                                                      │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Status                  │ Launching                                                                                          │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Command                 │ bash -c polkadot-parachain export-genesis-head -d /tmp/zombie-0f7bc705088658f144e12d1              │
│                         │ 63cc1dfba_-1-wPU3pvXT4NzI/export-genesis-state/2000 --chain /tmp/zombie-0f7bc705088658f144         │
│                         │ e12d163cc1dfba_-1-wPU3pvXT4NzI/contracts-rococo-dev-2000-rococo-local.json /tmp/zombie-0f7         │
│                         │ bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/cfg/genesis-state-2000 && polkadot-parachain         │
│                         │  export-genesis-wasm --chain /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/         │
│                         │ contracts-rococo-dev-2000-rococo-local.json /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-         │
│                         │ 1-wPU3pvXT4NzI/cfg/genesis-wasm-2000                                                               │
└─────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Pod                                    │ temp-collator                                                                  │
├────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ Status                                 │ Ready                                                                          │
└────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ ✓ Added Genesis Parachain 2000                                                                                         ║
╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                                        ║
║ 	 ⚙ Updating Chain Genesis Configuration (path: /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/rococo-lo… ║
╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ ✓ Updated Genesis Configuration [ key : balances ]                                                                     ║
╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ 🧹 Starting with a fresh authority set...                                                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ 👤 Added Balance 2000000000000 for alice - 5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY                            ║
╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ 👤 Added Balance 2000000000000 for bob - 5HpG9w8EBLe5XCrbczpwq5TSXvedjrBGCwqxK1iQ7qUsSWFc                              ║
╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
┌──────────────────────────────┬────────────────────┬──────────────────────────────────────────────────────────────────────┐
│ 👤 Added Genesis Authority   │ alice              │ 5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY                     │
└──────────────────────────────┴────────────────────┴──────────────────────────────────────────────────────────────────────┘
┌──────────────────────────────┬────────────────────┬──────────────────────────────────────────────────────────────────────┐
│ 👤 Added Genesis Authority   │ bob                │ 5HpG9w8EBLe5XCrbczpwq5TSXvedjrBGCwqxK1iQ7qUsSWFc                     │
└──────────────────────────────┴────────────────────┴──────────────────────────────────────────────────────────────────────┘
┌─────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Pod                     │ temp-3                                                                                             │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Status                  │ Launching                                                                                          │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Command                 │ bash -c polkadot build-spec --chain /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-w              │
│                         │ PU3pvXT4NzI/rococo-local-plain.json --disable-default-bootnode  --raw > /tmp/zombie-0f7bc7         │
│                         │ 05088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/rococo-local-raw.json                                   │
└─────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Pod                                    │ temp-3                                                                         │
├────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ Status                                 │ Ready                                                                          │
└────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Chain name: Rococo Local Testnet                                                                                       ║
╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Rococo Local Testnet ⚙ Clear Boot Nodes                                                                                │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Pod                     │ alice                                                                                              │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Status                  │ Launching                                                                                          │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Command                 │ polkadot --chain /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/alice/c              │
│                         │ fg/rococo-local.json --name alice --rpc-cors all --unsafe-rpc-external --rpc-methods unsaf         │
│                         │ e -lparachain=debug --no-mdns --node-key 2bd806c97f0e00af1a1fc3328fa763a9269723c8db8fac4f9         │
│                         │ 3af71db186d6e90 --no-telemetry --prometheus-external --validator --insecure-validator-i-kn         │
│                         │ ow-what-i-do --prometheus-port 34405 --rpc-port 9933 --listen-addr /ip4/0.0.0.0/tcp/40559/         │
│                         │ ws --base-path /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/alice/data             │
│                         │                                                                                                    │
└─────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Pod                                    │ alice                                                                          │
├────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ Status                                 │ Ready                                                                          │
└────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
╔════════════════════╤════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Pod                │ alice                                                                                              ║
╟────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
║ Status             │ Running                                                                                            ║
╟────────────────────╧────────────────────────────────────────────────────────────────────────────────────────────────────╢
║ You can follow the logs of the node by running this command:                                                            ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
tail -f  /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/alice.log


┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Rococo Local Testnet ⚙ Added Boot Nodes                                                                                │
├────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ /ip4/127.0.0.1/tcp/40559/ws/p2p/12D3KooWQCkBm1BYtkHpocxCwMgR8yjitEeHGx8spzcDLGt2gkBm                                   │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Pod                     │ bob                                                                                                │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Status                  │ Launching                                                                                          │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Command                 │ polkadot --chain /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/bob/cfg              │
│                         │ /rococo-local.json --name bob --rpc-cors all --unsafe-rpc-external --rpc-methods unsafe -l         │
│                         │ parachain=debug --no-mdns --node-key 81b637d8fcd2c6da6359e6963113a1170de795e4b725b84d1e0b4         │
│                         │ cfd9ec58ce9 --no-telemetry --prometheus-external --validator --insecure-validator-i-know-w         │
│                         │ hat-i-do --bootnodes /ip4/127.0.0.1/tcp/40559/ws/p2p/12D3KooWQCkBm1BYtkHpocxCwMgR8yjitEeHG         │
│                         │ x8spzcDLGt2gkBm --prometheus-port 37953 --rpc-port 9934 --listen-addr /ip4/0.0.0.0/tcp/414         │
│                         │ 53/ws --base-path /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/bob/data            │
│                         │ m                                                                                                  │
└─────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Pod                                    │ bob                                                                            │
├────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ Status                                 │ Ready                                                                          │
└────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
╔════════════════════╤════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Pod                │ bob                                                                                                ║
╟────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
║ Status             │ Running                                                                                            ║
╟────────────────────╧────────────────────────────────────────────────────────────────────────────────────────────────────╢
║ You can follow the logs of the node by running this command:                                                            ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
tail -f  /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/bob.log


╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ All relay chain nodes spawned...                                                                                       ║
╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
┌─────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Pod                     │ collator-0                                                                                         │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Status                  │ Launching                                                                                          │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Command                 │ polkadot-parachain --name collator-0 --node-key ffe88964342ffcfb5b07f2048a9a75af6a16c              │
│                         │ a0ff58eb85d9579f2a230945e73 --chain /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pv         │
│                         │ XT4NzI/collator-0/cfg/contracts-rococo-dev_rococo-local-2000.json --base-path /tmp/zombie-         │
│                         │ 0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/collator-0/data --listen-addr /ip4/0.0.0.         │
│                         │ 0/tcp/43221/ws --prometheus-external --rpc-cors all --unsafe-rpc-external --rpc-methods un         │
│                         │ safe --prometheus-port 35023 --rpc-port 9944 --collator -- --chain /tmp/zombie-0f7bc705088         │
│                         │ 658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/collator-0/cfg/rococo-local.json --execution wasm --         │
│                         │ port 38665 --rpc-port 43367                                                                        │
└─────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Pod                                    │ collator-0                                                                     │
├────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ Status                                 │ Ready                                                                          │
└────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
╔════════════════════╤════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Pod                │ collator-0                                                                                         ║
╟────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
║ Status             │ Running                                                                                            ║
╟────────────────────╧────────────────────────────────────────────────────────────────────────────────────────────────────╢
║ You can follow the logs of the node by running this command:                                                            ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
tail -f  /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/collator-0.log


┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Contracts on Rococo Development ⚙ Added Boot Nodes                                                                     │
├────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ /ip4/127.0.0.1/tcp/43221/ws/p2p/12D3KooWNZZCu7CeNRvs5uQMzjedhApiXuPh9DMfXMmREUYcE7Wh                                   │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
(node:1) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `zombienet-linux-x64 --trace-warnings ...` to show where the warning was created)

Error 	 fetching metrics from: http://127.0.0.1:35023/metrics 

Error 	 fetching metrics from: http://127.0.0.1:35023/metrics 

Error 	 fetching metrics from: http://127.0.0.1:35023/metrics 

Error 	 fetching metrics from: http://127.0.0.1:35023/metrics 

Error 	 fetching metrics from: http://127.0.0.1:35023/metrics 
┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                                       Network launched 🚀🚀                                                       │
├──────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Namespace                    │ zombie-0f7bc705088658f144e12d163cc1dfba                                                            │
├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Provider                     │ native                                                                                             │
├──────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                         Node Information                                                          │
├──────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Name                         │ alice                                                                                              │
├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Direct Link                  │ https://polkadot.js.org/apps/?rpc=ws://127.0.0.1:9933#/explorer                                    │
├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Prometheus Link              │ http://127.0.0.1:34405/metrics                                                                     │
├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Log Cmd                      │ tail -f  /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/alice.log                    │
├──────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                         Node Information                                                          │
├──────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Name                         │ bob                                                                                                │
├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Direct Link                  │ https://polkadot.js.org/apps/?rpc=ws://127.0.0.1:9934#/explorer                                    │
├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Prometheus Link              │ http://127.0.0.1:37953/metrics                                                                     │
├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Log Cmd                      │ tail -f  /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/bob.log                      │
├──────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                         Node Information                                                          │
├──────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Name                         │ collator-0                                                                                         │
├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Direct Link                  │ https://polkadot.js.org/apps/?rpc=ws://127.0.0.1:9944#/explorer                                    │
├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Prometheus Link              │ http://127.0.0.1:35023/metrics                                                                     │
├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Log Cmd                      │ tail -f  /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/collator-0.log               │
├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Parachain ID                 │ 2000                                                                                               │
├──────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ChainSpec Path               │ /tmp/zombie-0f7bc705088658f144e12d163cc1dfba_-1-wPU3pvXT4NzI/contracts-rococo-dev-2000-rococo-loc… │
└──────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
</details>

E2E tests mostly pass but w/ some errors:

<details>
  <summary>Output</summary>

```ts
stdout | src/basic.test.ts
Connect to ws://127.0.0.1:9944

stdout | src/basic.test.ts
Current finalized block number: 51

stdout | src/basic.test.ts > basic client operations > should get current block number
Current block number: 55

stdout | src/basic.test.ts > basic client operations > should fetch account balance
Account balance: {
  nonce: 8,
  consumers: 1,
  providers: 1,
  sufficients: 0,
  data: {
    free: 1152921484476122753n,
    reserved: 3635156955n,
    frozen: 0n,
    flags: 170141183460469231731687303715884105728n
  }
}

stdout | src/basic.test.ts > basic client operations > should transfer balance successfully
Transaction status: Validated
Transaction status: Broadcasting

stdout | src/basic.test.ts > basic client operations > should transfer balance successfully
Current finalized block number: 52

stdout | src/basic.test.ts > basic client operations > should transfer balance successfully
Transaction status: BestChainBlockIncluded

stdout | src/basic.test.ts
Disconnected from ws://127.0.0.1:9944

 ✓ src/basic.test.ts (3) 12141ms
 ✓ src/hooks/useBalance.test.ts (7) 1355ms
 ❯ src/hooks/useContract.test.ts (3) 122344ms
   ❯ useContract (3) 120045ms
     ⠇ [ beforeAll ]
     ↓ get flipper value [skipped]
     ↓ should initialize contract instance successfully [skipped]
     ↓ should update contract instance when defaultCaller changes [skipped]
 ✓ src/hooks/useContractQuery.test.ts (5) 56126ms
 ✓ src/hooks/useContractTx.test.ts (3) 58108ms
 ✓ src/hooks/useDeployer.test.ts (2) 1924ms
 ✓ src/hooks/useDeployerTx.test.ts (2) 9620ms
 ✓ src/hooks/usePSP22Balance.test.ts (6) 23974ms
 ✓ src/hooks/useRawContract.test.ts (4) 10075ms

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/hooks/useContract.test.ts > useContract
Error: Hook timed out in 120000ms.
If this is a long-running hook, pass a timeout value as the last argument or configure it globally with "hookTimeout".
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Errors ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

Vitest caught 7 unhandled errors during the test run.
This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected.

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
ChainHeadBlockNotPinnedError: Block hash 0x3c8d32f78de934c872260f18a676daa66108fd67201a8e46c0893e0610a3124d is not pinned
 ❯ ChainHead.#ensurePinnedHash ../../node_modules/@dedot/api/json-rpc/group/ChainHead/ChainHead.js:332:23
 ❯ ChainHead.body ../../node_modules/@dedot/api/json-rpc/group/ChainHead/ChainHead.js:458:50
 ❯ processTicksAndRejections node:internal/process/task_queues:105:5
 ❯ checkTxIsOnChain ../../node_modules/@dedot/api/extrinsic/submittable/SubmittableExtrinsicV2.js:37:25

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: { retryStrategy: undefined }
This error originated in "src/hooks/useContract.test.ts" test file. It doesn't mean the error was thrown inside the file itself, but while it was running.
The latest test that might've caused the error is "useContract". It might mean one of the following:
- The error was thrown, while Vitest was running this test.
- If the error occurred after the test had been completed, this was the last documented test before it was thrown.

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
ChainHeadBlockNotPinnedError: Block hash 0x6ac3cd77a65deac8a59eeba7ed1237c432809017a49a010ca26ab3869136eb6b is not pinned
 ❯ ChainHead.#ensurePinnedHash ../../node_modules/@dedot/api/json-rpc/group/ChainHead/ChainHead.js:332:23
 ❯ ChainHead.body ../../node_modules/@dedot/api/json-rpc/group/ChainHead/ChainHead.js:458:50
 ❯ processTicksAndRejections node:internal/process/task_queues:105:5
 ❯ checkTxIsOnChain ../../node_modules/@dedot/api/extrinsic/submittable/SubmittableExtrinsicV2.js:37:25

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: { retryStrategy: undefined }
This error originated in "src/hooks/useContract.test.ts" test file. It doesn't mean the error was thrown inside the file itself, but while it was running.
The latest test that might've caused the error is "useContract". It might mean one of the following:
- The error was thrown, while Vitest was running this test.
- If the error occurred after the test had been completed, this was the last documented test before it was thrown.

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
ChainHeadBlockNotPinnedError: Block hash 0x2daa200b670f64215f6a3f676b4ac02a292bee4aed407ad2e1d745c04bec03ec is not pinned
 ❯ ChainHead.#ensurePinnedHash ../../node_modules/@dedot/api/json-rpc/group/ChainHead/ChainHead.js:332:23
 ❯ ChainHead.body ../../node_modules/@dedot/api/json-rpc/group/ChainHead/ChainHead.js:458:50
 ❯ processTicksAndRejections node:internal/process/task_queues:105:5
 ❯ checkTxIsOnChain ../../node_modules/@dedot/api/extrinsic/submittable/SubmittableExtrinsicV2.js:37:25

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: { retryStrategy: undefined }
This error originated in "src/hooks/useContract.test.ts" test file. It doesn't mean the error was thrown inside the file itself, but while it was running.
The latest test that might've caused the error is "useContract". It might mean one of the following:
- The error was thrown, while Vitest was running this test.
- If the error occurred after the test had been completed, this was the last documented test before it was thrown.

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
ChainHeadBlockNotPinnedError: Block hash 0x5545cb3142b8d533b9f047d05e0202239534b930c95dd867218a8ae522c7ab42 is not pinned
 ❯ ChainHead.#ensurePinnedHash ../../node_modules/@dedot/api/json-rpc/group/ChainHead/ChainHead.js:332:23
 ❯ ChainHead.body ../../node_modules/@dedot/api/json-rpc/group/ChainHead/ChainHead.js:458:50
 ❯ processTicksAndRejections node:internal/process/task_queues:105:5
 ❯ checkTxIsOnChain ../../node_modules/@dedot/api/extrinsic/submittable/SubmittableExtrinsicV2.js:37:25

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: { retryStrategy: undefined }
This error originated in "src/hooks/useContract.test.ts" test file. It doesn't mean the error was thrown inside the file itself, but while it was running.
The latest test that might've caused the error is "useContract". It might mean one of the following:
- The error was thrown, while Vitest was running this test.
- If the error occurred after the test had been completed, this was the last documented test before it was thrown.

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
ChainHeadBlockNotPinnedError: Block hash 0x04096ab5afcc2d5d1774dfd6ab03140ab3781b00e0b614acc6f3a5c355038a40 is not pinned
 ❯ ChainHead.#ensurePinnedHash ../../node_modules/@dedot/api/json-rpc/group/ChainHead/ChainHead.js:332:23
 ❯ ChainHead.body ../../node_modules/@dedot/api/json-rpc/group/ChainHead/ChainHead.js:458:50
 ❯ processTicksAndRejections node:internal/process/task_queues:105:5
 ❯ checkTxIsOnChain ../../node_modules/@dedot/api/extrinsic/submittable/SubmittableExtrinsicV2.js:37:25

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: { retryStrategy: undefined }
This error originated in "src/hooks/useContract.test.ts" test file. It doesn't mean the error was thrown inside the file itself, but while it was running.
The latest test that might've caused the error is "useContract". It might mean one of the following:
- The error was thrown, while Vitest was running this test.
- If the error occurred after the test had been completed, this was the last documented test before it was thrown.

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
ChainHeadBlockNotPinnedError: Block hash 0xafc87f8af5af87960e58b56a61a3cb98f8e2664787914bc58e0d689e1a59aab5 is not pinned
 ❯ ChainHead.#ensurePinnedHash ../../node_modules/@dedot/api/json-rpc/group/ChainHead/ChainHead.js:332:23
 ❯ ChainHead.body ../../node_modules/@dedot/api/json-rpc/group/ChainHead/ChainHead.js:458:50
 ❯ processTicksAndRejections node:internal/process/task_queues:105:5
 ❯ checkTxIsOnChain ../../node_modules/@dedot/api/extrinsic/submittable/SubmittableExtrinsicV2.js:37:25

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: { retryStrategy: undefined }
This error originated in "src/hooks/useContract.test.ts" test file. It doesn't mean the error was thrown inside the file itself, but while it was running.
The latest test that might've caused the error is "useContract". It might mean one of the following:
- The error was thrown, while Vitest was running this test.
- If the error occurred after the test had been completed, this was the last documented test before it was thrown.

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
ChainHeadBlockNotPinnedError: Block hash 0x995aada9ca653f597b60eb1025908ea7c780d5c8a8cf16e34f29fc9d6fc6ab30 is not pinned
 ❯ ChainHead.#ensurePinnedHash ../../node_modules/@dedot/api/json-rpc/group/ChainHead/ChainHead.js:332:23
 ❯ ChainHead.body ../../node_modules/@dedot/api/json-rpc/group/ChainHead/ChainHead.js:458:50
 ❯ processTicksAndRejections node:internal/process/task_queues:105:5
 ❯ checkTxIsOnChain ../../node_modules/@dedot/api/extrinsic/submittable/SubmittableExtrinsicV2.js:37:25

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: { retryStrategy: undefined }
This error originated in "src/hooks/useContract.test.ts" test file. It doesn't mean the error was thrown inside the file itself, but while it was running.
The latest test that might've caused the error is "useContract". It might mean one of the following:
- The error was thrown, while Vitest was running this test.
- If the error occurred after the test had been completed, this was the last documented test before it was thrown.
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 Test Files  1 failed | 8 passed (9)
      Tests  32 passed | 3 skipped (35)
     Errors  7 errors
   Start at  16:18:50
   Duration  322.01s (transform 540ms, setup 1.29s, collect 20.06s, tests 295.67s, environment 2.89s, prepare 812ms)
```
</details>
