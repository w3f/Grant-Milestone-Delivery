# Evaluation

- **Status:** In Progress
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/Web3Go.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [ui](https://github.com/web3go-xyz/portal-ui/blob/756f98c7b7f4e905c71aecc3cde4203f87788286/LICENSE), [service](https://github.com/web3go-xyz/portal-service/blob/9c36e31f1dff908a4cec1ad73746b5df6fabc624/LICENSE) (Apache 2.0), [RMRK indexer](https://github.com/web3go-xyz/RMRK-Indexer/blob/6e294a5f51251db856eee485cdf9fee5a000d329/LICENSE), [crowdloan indexer](https://github.com/web3go-xyz/Crowdloan-Indexer/blob/67551bab9e6666bf8ef6436ad2e65697c2e6ee59/LICENSE), [Moonbeam indexer](https://github.com/web3go-xyz/moonbeam-balance-indexer/blob/aff17fa1960a527845462af5c28370b2e31c61d4/LICENSE), [Polkadot indexer](https://github.com/web3go-xyz/polkadot-balance-indexer/blob/73cba611e20686ee7d1a83fcfc7cd7411dafd04b/LICENSE) (MIT) | —
| 0b. | Documentation | <ul><li>[x] </li></ul> | [web3go.xyz](https://doc.web3go.xyz) | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the existing data board, and use the UI to create/publish their own customized data board|
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |
| 0d. | Docker | <ul><li>[ ] </li></ul> | [UI](https://github.com/web3go-xyz/portal-ui/blob/756f98c7b7f4e905c71aecc3cde4203f87788286/Dockerfile), [service](https://github.com/web3go-xyz/portal-service/blob/9c36e31f1dff908a4cec1ad73746b5df6fabc624/Dockerfile) | see [General Notes](#general-notes) |
| 0e. | Article | <ul><li>[x] </li></ul> | [medium](https://web3go.medium.com/introducing-web3go-fcf5f1880a72), [medium](https://web3go.medium.com/rmrk-nft-garden-dashboard-introduction-2e773238db01), [medium](https://web3go.medium.com/moonbeam-moonriver-staking-dashboards-tracking-and-simulation-14fcc6f7024e) | —
| 1.a & 1.b | Indexer | <ul><li>[x] </li></ul> | [RMRK](https://github.com/web3go-xyz/RMRK-Indexer), [crowdloan](https://github.com/web3go-xyz/Crowdloan-Indexer), [moonbeam](https://github.com/web3go-xyz/moonbeam-balance-indexer), [polkadot](https://github.com/web3go-xyz/polkadot-balance-indexer) | — |
| 2. | UI Module:general WebApp | <ul><li>[ ] </li></ul> | link | visible on https://web3go.xyz, unable to reproduce so far. |  
| 3. | 3 more Data Boards: | <ul><li>[ ] </li></ul> | [NFT Profiler](https://web3go.xyz/#/NFTProfiler), [MOVR staking](https://web3go.xyz/#/Moonriver), GLMR staking | visible on https://web3go.xyz, unable to reproduce so far. |  
| 4. | UI Module: semi-automatic chart generation | <ul><li>[x] </li></ul> | [web3go-xyz/portal-ui](https://github.com/web3go-xyz/portal-ui/blob/7d10c762c052d5dee87a8466f6093befc58a9adf/src/components/customQuery/CustomQuery.vue) | — |
| 5. | Support more Kusama Token: | <ul><li>[x] </li></ul> | [MOVR](https://github.com/web3go-xyz/moonbeam-balance-indexer/tree/moonriver-balance-indexer), [RMRK NFTs](https://github.com/web3go-xyz/RMRK-Indexer) | Pivoted from KAR and kUSD to MOVR and RMRK |


## General Notes

- Service expects MySQL schema and tables to be set up (`npm run start` fails with `Access denied for user 'xxx'@'localhost' to database 'ido-platform'`), no instructions how to reproduce
- `npm audit` shows
  - 45 vulnerabilities (26 moderate, 15 high, 4 critical) for `portal-ui`
  - 24 vulnerabilities (4 moderate, 18 high, 2 critical) for `portal-service`
- `docker build -t portal-service:v1 .` fails with:

```sh
gyp ERR! configure error 
gyp ERR! stack Error: Could not find any Python installation to use
gyp ERR! stack     at PythonFinder.fail (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/find-python.js:330:47)
gyp ERR! stack     at PythonFinder.runChecks (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/find-python.js:159:21)
gyp ERR! stack     at PythonFinder.<anonymous> (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/find-python.js:202:16)
gyp ERR! stack     at PythonFinder.execFileCallback (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/find-python.js:294:16)
gyp ERR! stack     at exithandler (node:child_process:406:5)
gyp ERR! stack     at ChildProcess.errorhandler (node:child_process:418:5)
gyp ERR! stack     at ChildProcess.emit (node:events:526:28)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (node:internal/child_process:289:12)
gyp ERR! stack     at onErrorNT (node:internal/child_process:478:16)
gyp ERR! stack     at processTicksAndRejections (node:internal/process/task_queues:83:21)
gyp ERR! System Linux 5.13.0-37-generic
gyp ERR! command \"/usr/local/bin/node\" \"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js\" \"rebuild\"
gyp ERR! cwd /app/node_modules/event-loop-stats
gyp ERR! node -v v16.14.2
gyp ERR! node-gyp -v v8.4.1
gyp ERR! not ok"
```

- `npm run build` on the ui fails with

```sh
 ERROR  Failed to compile with 1 error                                                                                                    15:47:37

 error  in ./node_modules/@polkadot/util-crypto/key/DeriveJunction.js

Module parse failed: Unexpected character '#' (9:2)
File was processed with these loaders:
 * ./node_modules/@open-wc/webpack-import-meta-loader/webpack-import-meta-loader.js
You may need an additional loader to handle the result of these loaders.
| const JUNCTION_ID_LEN = 32;
| export class DeriveJunction {
>   #chainCode = new Uint8Array(32);
|   #isHard = false;
```
