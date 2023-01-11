# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/xcm-sdk.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/blockcoders/xcm-sdk/blob/main/LICENSE |  |
| 0b. | Documentation |<ul><li>[ ] </li></ul>| https://github.com/blockcoders/xcm-sdk/blob/main/README.md, https://github.com/blockcoders/xcm-sdk/blob/main/README-es.md | Not fully evaluated yet |
| 0c. | Testing Guide |<ul><li>[ ] </li></ul>| https://github.com/blockcoders/xcm-sdk#testing | Not fully evaluated yet |
| 1. | Create Messages Types |<ul><li>[ ] </li></ul>| https://github.com/blockcoders/xcm-sdk/blob/main/src/interfaces/index.ts | Not fully evaluated yet |
| 2. | Send XCM messages |<ul><li>[ ] </li></ul>| https://github.com/blockcoders/xcm-sdk/blob/main/src/provider.ts | Not fully evaluated yet |
| 3. | Testing |<ul><li>[ ] </li></ul>| https://coveralls.io/github/blockcoders/xcm-sdk?branch=main | Incomplete and failing scripts for system testing. |

**General Notes**

## Evaluation V2

The warnings in the unit tests and from ESLint were solved. 

Regarding the system tests: 

* Only the limited version of the methods were used in the system tests. Please include system tests for the other functions available.

- rococo-to-rockmine - worked, the assets were transfered. tx: 0x7aac9818bc7ce4f91a94ac4ca48798b68450a7a45d3693c45c6b401f917ace39
- rococo-to-dali - the XCM msg was sent but the asset was not transfered. Please explain. tx: 0xf73f0408b2a5fd5f060a01a22eef6ce96dd4cac3cc448f62c8b3e29893cc6e45
- rockmine-to-rococo - worked, the assets were transfered. tx: 0x44ccd0a55079683146b5fb9c32e891346824d410f44b899333a01d27b29dc750
- rockmine-to-dali-roc.ts - the XCM msg was sent but the asset was not transfered. Please explain. tx: 0x41a008489fce5bcb43c33be579481ffb36f328f4b61b989bee23058958f87550
- rockmine-to-dali-asset.ts - the XCM msg was sent but the asset was not transfered. Please explain. tx: 0x8d15e12be2cc7fbfdfb42aa5584555871f40a0ae0c7dfa198a73f943582d6dc2

The XCM transactions which uses limitedReserveTransferAssets function are returning FailedToTransactAsset as showed below: 

![screen](https://user-images.githubusercontent.com/112647953/211804995-75fabf14-01a0-4820-86de-22c5c00532ee.jpg)


## Evaluation V1

### Testing

The tests are running and passing with good coverage. However, there is a msg of a connection failure in almost all test cases. This could indicate that the transactions are not being executed since there is no local blockchain running. Please provide explanations on this msg and better instructions on the setup environment needed to run the automated tests.


```
  Provider
    ✔ should instance
    ✔ should save injecto signer
    limited teleport assets
      ✔ should send teleport asset from relaychain to parachain
2023-01-06 10:38:31          API-WS: disconnected from ws://localhost:40320: 1006:: connection failed
      ✔ should send teleport asset from relaychain to parachain with injector
2023-01-06 10:38:31          API-WS: disconnected from ws://localhost:40320: 1006:: connection failed
      ✔ should send teleport asset from parachain to relaychain
2023-01-06 10:38:31          API-WS: disconnected from ws://localhost:41000: 1006:: connection failed
      ✔ should send teleport asset from parachain to relaychain account native format
2023-01-06 10:38:31          API-WS: disconnected from ws://localhost:41000: 1006:: connection failed
      ✔ should show error after send tx
2023-01-06 10:38:31          API-WS: disconnected from ws://localhost:41000: 1006:: connection failed
      ✔ should show error
2023-01-06 10:38:31          API-WS: disconnected from ws://localhost:41000: 1006:: connection failed
    teleport assets
      ✔ should send asset from relaychain to parachain
2023-01-06 10:38:31          API-WS: disconnected from ws://localhost:40320: 1006:: connection failed
      ✔ should show error
2023-01-06 10:38:31          API-WS: disconnected from ws://localhost:40320: 1006:: connection failed
    limited reserve transfer assets
      ✔ should transfer asset from relaychain to parachain
2023-01-06 10:38:31          API-WS: disconnected from ws://localhost:40320: 1006:: connection failed
      ✔ should show error
2023-01-06 10:38:31          API-WS: disconnected from ws://localhost:40320: 1006:: connection failed
    reserve transfer assets
      ✔ should transfer asset from relaychain to parachain
2023-01-06 10:38:31          API-WS: disconnected from ws://localhost:40320: 1006:: connection failed
      ✔ should show error
2023-01-06 10:38:31          API-WS: disconnected from ws://localhost:40320: 1006:: connection failed

  Utils
    getPallet
      ✔ should return xcmPallet
      ✔ should return polkadotXcm
      ✔ should return error


  17 passing (152ms)

-------------|---------|----------|---------|---------|-------------------
File         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------|---------|----------|---------|---------|-------------------
All files    |     100 |    81.42 |     100 |     100 |                   
 provider.ts |     100 |    80.43 |     100 |     100 | 68-170            
 utils.ts    |     100 |    83.33 |     100 |     100 | 58-83,86          
-------------|---------|----------|---------|---------|-------------------

=============================== Coverage summary ===============================
Statements   : 100% ( 91/91 )
Branches     : 81.42% ( 57/70 )
Functions    : 100% ( 25/25 )
Lines        : 100% ( 78/78 )
================================================================================
```

### System tests

 I saw that there are instructions for running some transactions in Rococo, however, when I tried to execute some examples it fail. See the prints below. Please provide one or more scripts for system testing. The examples in the SDK are good for the developers but for system testing purposes I shouldn't do the programming of the examples. 

Code:

```
import { web3FromAddress, web3Accounts, web3Enable } from "@polkadot/extension-dapp";
import { Provider } from "xcm-sdk";

const fun = async () =>{
  const extensions = await web3Enable("my cool dapp");
  const accounts = await web3Accounts();
  console.log(accounts);  
  const accountId = accounts[0].address;

  const injector = await web3FromAddress(accountId);

  const provider = new Provider("wss://rococo-rpc.polkadot.io", accountId);
  console.log(provider);
  provider.setInjectorSigner(injector.signer);

  const destination = "Parachain"
  const destinationValue = 2000 // Rockmine parchain id
  const beneficiary = "AccountId32"
  const beneficiaryValue = "GbxefAnqRioX195Vc5jApLdUi8qc2D7A6FNzLPe2JmVLVRm" // account address
  const amount = 1000000000000000

  const res = await provider.limitedTeleportAssets({
  destination,
  destinationValue,
  beneficiary,
  beneficiaryValue,
  amount,
  });

  console.log(res);
}

fun();
```

Log:

```
Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools react-dom.development.js:29840
web3Enable: Enabled 1 extension: polkadot-js/0.44.1 2 bundle.js:102
web3Accounts: Found 6 addresses bundle.js:137
Array(6) [ {…}, {…}, {…}, {…}, {…}, {…} ]
App.js:9
web3Accounts: Found 6 addresses bundle.js:137
Array(6) [ {…}, {…}, {…}, {…}, {…}, {…} ]
App.js:9
web3Accounts: Found 6 addresses bundle.js:137
Object { rpc: "wss://rococo-rpc.polkadot.io", signer: "5G6LzLpvD4hsmMKdiuGgGrydL7rboMPvhiQdbg7gYWYzbV5q" }
App.js:15
web3Accounts: Found 6 addresses bundle.js:137
Object { rpc: "wss://rococo-rpc.polkadot.io", signer: "5G6LzLpvD4hsmMKdiuGgGrydL7rboMPvhiQdbg7gYWYzbV5q" }
App.js:15
Uncaught (in promise) TypeError: provider.setInjectorSigner is not a function
    fun App.js:16
    App App.js:37
    React 8
    workLoop scheduler.development.js:266
    flushWork scheduler.development.js:239
    performWorkUntilDeadline scheduler.development.js:533
    js scheduler.development.js:571
    js scheduler.development.js:633
    factory react refresh:6
    Webpack 24

```

### Code Quality

Two warnings generated by ESLint:

```
/home/diogo/workspace/w3f/xcm-sdk/src/tests/provider.spec.ts
  78:21  warning  'signer' is defined but never used  @typescript-eslint/no-unused-vars

/home/diogo/workspace/w3f/xcm-sdk/src/utils.ts
  82:43  warning  'api' is defined but never used  @typescript-eslint/no-unused-vars

✖ 2 problems (0 errors, 2 warnings)
```
