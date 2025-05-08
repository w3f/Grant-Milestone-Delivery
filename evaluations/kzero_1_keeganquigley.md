# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/KZero.md
- **Milestone:** 1

| Number | Deliverable               | Accepted | Specification                                                | Notes |
| ------ | ------------------------- | ------------------------- | ------------------------- | ------------------------------------------------------------ |
| 0a.    | License                   | <ul><li>[x] </li></ul> | GPLv3                                                        |
| 0b.    | Documentation             | <ul><li>[x] </li></ul> | We will provide technical documentation for the code, as well as deployment and testing guides, explaining key function calls and how users can start and test our ZKP-related server, which will demonstrate how it works. |
| 0c.    | Testing and Testing Guide | <ul><li>[x] </li></ul> | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d.    | Docker                    | <ul><li>[x] </li></ul> | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1      | Kzero Circuit Code        | <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-circuit|
| 2      | Kzero Circuit Guide        | <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-circuit|
| 3      | Kzero Circuit Testing cases | <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-circuit/tree/dev/test|
| 4      | ZKP Witness & Proof Generation Guide | <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-grant-docs/blob/main/kzero-zkp-service-guide.md  |
| 5      | All-in-One ZKP Witness & Proof Generation Service| <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-service |
| 6      | ZKP Service Testing Doc| <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-grant-docs/blob/main/kzero-common-package-test.md |

# General Notes

I'm now able to generate the witness, generate the proof, and verify it.

~~I'm able to compile the circuits w/ some warnings:~~

UPDATE: Team fixed warnings.

<details>
  <summary>Output</summary>

```ts
circom circuits/zkLogin.circom --r1cs --wasm --sym --c
template instances: 919
non-linear constraints: 1048569
linear constraints: 0
public inputs: 1
private inputs: 2082 (2061 belong to witness)
public outputs: 0
wires: 1020160
labels: 5677224
Written successfully: ./zkLogin.r1cs
Written successfully: ./zkLogin.sym
Written successfully: ./zkLogin_cpp/zkLogin.cpp and ./zkLogin_cpp/zkLogin.dat
Written successfully: ./zkLogin_cpp/main.cpp, circom.hpp, calcwit.hpp, calcwit.cpp, fr.hpp, fr.cpp, fr.asm and Makefile
Written successfully: ./zkLogin_js/zkLogin.wasm
Everything went okay
```
</details>

## Testing

`npm test` still fails:

```ts
npm test

> test
> mocha -r esbuild-register test/**/*.test.ts --timeout 100000 --exit


 Exception during run: Error [ERR_INTERNAL_ASSERTION]: Cannot require() ES Module /home/ubuntu/kzero-circuit/node_modules/chai/chai.js because it is not yet fully loaded. This may be caused by a race condition if the module is simultaneously dynamically import()-ed via Promise.all(). Try await-ing the import() sequentially in a loop instead. (from /home/ubuntu/kzero-circuit/test/zkLogin.test.ts)
This is caused by either a bug in Node.js or incorrect usage of Node.js internals.
Please open an issue with this stack trace at https://github.com/nodejs/node/issues

    at assert.fail (node:internal/assert:17:9)
    at ModuleLoader.importSyncForRequire (node:internal/modules/esm/loader:383:16)
    at loadESMFromCJS (node:internal/modules/cjs/loader:1565:24)
    at Module._compile (node:internal/modules/cjs/loader:1716:5)
    at node:internal/modules/cjs/loader:1899:10
    at Object.newLoader (/home/ubuntu/kzero-circuit/node_modules/esbuild-register/dist/node.js:2262:9)
    at extensions..js (/home/ubuntu/kzero-circuit/node_modules/esbuild-register/dist/node.js:4833:24)
    at Module.load (node:internal/modules/cjs/loader:1469:32)
    at Module._load (node:internal/modules/cjs/loader:1286:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Module.require (node:internal/modules/cjs/loader:1491:12)
    at require (node:internal/modules/helpers:135:16)
    at Object.<anonymous> (/home/ubuntu/kzero-circuit/test/zkLogin.test.ts:2:24)
    at Module._compile (node:internal/modules/cjs/loader:1734:14)
    at Module._compile (/home/ubuntu/kzero-circuit/node_modules/esbuild-register/dist/node.js:2258:26)
    at loadTS (node:internal/modules/cjs/loader:1826:10)
    at Object.newLoader [as .ts] (/home/ubuntu/kzero-circuit/node_modules/esbuild-register/dist/node.js:2262:9)
    at Module.load (node:internal/modules/cjs/loader:1469:32)
    at Module._load (node:internal/modules/cjs/loader:1286:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Module.require (node:internal/modules/cjs/loader:1491:12)
    at require (node:internal/modules/helpers:135:16)
    at exports.requireOrImport (/home/ubuntu/kzero-circuit/node_modules/mocha/lib/nodejs/esm-utils.js:53:16)
    at async exports.loadFilesAsync (/home/ubuntu/kzero-circuit/node_modules/mocha/lib/nodejs/esm-utils.js:100:20)
    at async singleRun (/home/ubuntu/kzero-circuit/node_modules/mocha/lib/cli/run-helpers.js:162:3)
    at async exports.handler (/home/ubuntu/kzero-circuit/node_modules/mocha/lib/cli/run.js:375:5) {
  code: 'ERR_INTERNAL_ASSERTION'
}
```
