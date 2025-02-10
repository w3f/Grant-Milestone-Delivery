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

Getting an error when trying to build a test greeter contract:

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

I get a different error when trying the psp22 contract:

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

## Testing
