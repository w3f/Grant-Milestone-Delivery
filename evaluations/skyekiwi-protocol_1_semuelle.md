# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/skyekiwi-protocol.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [skyekiwi/skyekiwi-protocol](https://github.com/skyekiwi/skyekiwi-protocol/blob/5765ddcd892b9ac9c762ed35524150f08bafba13/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [skyekiwi/skyekiwi-protocol](https://github.com/skyekiwi/skyekiwi-protocol/tree/ab19ace5e5b820777bddefa0d514db3c4b255fc9#install) | Inline documentation added on request |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [skyekiwi/skyekiwi-protocol](https://github.com/skyekiwi/skyekiwi-protocol/tree/5765ddcd892b9ac9c762ed35524150f08bafba13#installation--testing) | Deployed on Jupiter + Crust Rocky |
| 1. | Core Protocol | <ul><li>[x] </li></ul> | [skyekiwi/skyekiwi-protocol](https://github.com/skyekiwi/skyekiwi-protocol/blob/b46329d5e1bad4abcaef20f5854e593e860a4d1e/packages/driver/src/index.ts#L17) | — |
| 2. | Smart Contract | <ul><li>[x] </li></ul> | [skyekiwi/contract-demo](https://github.com/skyekiwi/contract-demo/tree/c1118b218b4e597c8373a649f52b131081e09b4a/simple-storage/contracts) | Documentation added on request |
| 3. | Polkadot.js | <ul><li>[x] </li></ul> | [polkadot-js/common](https://github.com/polkadot-js/common/pull/1070) | merged |


## General Notes

### Coverage report

```
----------------------|---------|----------|---------|---------|
File                  | % Stmts | % Branch | % Funcs | % Lines |
----------------------|---------|----------|---------|---------|
All files             |   73.94 |    57.61 |   88.29 |   73.79 |
 crust-network/src    |   58.62 |    35.29 |   66.66 |   58.62 |
  index.ts            |   58.62 |    35.29 |   66.66 |   58.62 |
 crypto/src           |      88 |    61.53 |   86.95 |   87.23 |
  asymmetric.ts       |     100 |      100 |     100 |     100 |
  encryptionSchema.ts |   73.33 |       50 |      60 |   69.23 |
  index.ts            |       0 |        0 |       0 |       0 |
  seal.ts             |   95.65 |       50 |     100 |   95.23 |
  sealer.ts           |    64.7 |       50 |      80 |    62.5 |
  sign.ts             |     100 |      100 |     100 |     100 |
  symmetric.ts        |     100 |      100 |     100 |     100 |
  tss.ts              |   93.75 |       75 |     100 |   93.33 |
 driver/mock          |       0 |        0 |       0 |       0 |
  types.ts            |       0 |        0 |       0 |       0 |
 driver/src           |   95.08 |       70 |     100 |   95.08 |
  index.ts            |   95.08 |       70 |     100 |   95.08 |
 file/src             |   68.75 |       50 |      75 |      70 |
  index.ts            |   68.75 |       50 |      75 |      70 |
 ipfs/src             |   50.41 |       60 |   85.71 |   48.69 |
  index.ts            |   50.41 |       60 |   85.71 |   48.69 |
 metadata/src         |   85.71 |    65.21 |     100 |   85.71 |
  index.ts            |   85.71 |    65.21 |     100 |   85.71 |
 util/src             |      80 |    67.64 |   93.33 |   82.92 |
  index.ts            |       0 |        0 |       0 |       0 |
  logger.ts           |     100 |      100 |     100 |     100 |
  sendTx.ts           |   66.66 |       68 |      80 |   73.68 |
  util.ts             |   90.47 |    66.66 |     100 |   89.47 |
 wasm-contract/mock   |       0 |        0 |       0 |       0 |
  types.ts            |       0 |        0 |       0 |       0 |
 wasm-contract/src    |   68.75 |    35.29 |     100 |   68.75 |
  index.ts            |   68.75 |    35.29 |     100 |   68.75 |
----------------------|---------|----------|---------|---------|

```

