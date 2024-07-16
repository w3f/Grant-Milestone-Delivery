
# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Plutonication.md
- **Milestone:** 4
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Licence | <ul><li>[x] </li></ul> | [Plutonication](https://github.com/RostislavLitovkin/Plutonication/blob/Grant-delivery-4/packages/extension/LICENSE) | MIT | 
| 0b.  | Documentation | <ul><li>[ ] </li></ul> | Documentation for building the Plutonication is in [Readme](https://github.com/RostislavLitovkin/Plutonication/blob/Grant-delivery-4/README.md). Inline documentation is also provided. | Some tests are failing, docker example does not work |
| 0c. | Testing and Testing Guide | <ul><li>[ ] </li></ul> | E2E testing: Download [Plutonication Extension from the Chrome web store](https://chromewebstore.google.com/detail/plutonication-extension-p/lndgpmicmhdhbmaebmghjjhaoglnaakl) and [PlutoWallet from Google Play](https://play.google.com/store/apps/details?id=com.rostislavlitovkin.plutowallet). Then, you can try to go to any dApp, for example https://polkadot.js.org/apps/ and you should see the Plutonication modal. Just scan the QR code by your phone and connect your wallet. | Some parts are not working properly |
| 0d. | Docker | <ul><li>[ ] </li></ul> | Not provided | Some examples with docker are not working |
| 0e. | Article | <ul><li>[x] </li></ul> | [Medium article](https://medium.com/@rostislavlitovkin/plutonication-cross-platform-connection-for-polkadot-wallets-a237c342d616) | |
| 1. | Plutonication Extension | <ul><li>[ ] </li></ul> | https://github.com/RostislavLitovkin/Plutonication/tree/Grant-delivery-4/packages/extension | Not fully evaluated yet |
| 1a. | inject(..) | <ul><li>[ ] </li></ul> | [inject](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/extension/src/page.ts#L10) | Not fully evaluated yet |
| 1b. | onReceivePublicKey | <ul><li>[ ] </li></ul> | [onReceivePublicKey](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/plutonication/src/PlutonicationDAppClient.ts#L46) | Not fully evaluated yet |
| 1c. | signPayloadAsync | <ul><li>[ ] </li></ul> | [signPayload](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/plutonication/src/PlutonicationDAppClient.ts#L78) | Not fully evaluated yet |
| 1d. | payload_signature | <ul><li>[ ] </li></ul> | [payload_signature](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/plutonication/src/PlutonicationDAppClient.ts#L83) | Not fully evaluated yet |
| 1e. | signRawAsync | <ul><li>[ ] </li></ul> | [signRaw](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/plutonication/src/PlutonicationDAppClient.ts#L91) | Not fully evaluated yet |
| 1f. | raw_signature | <ul><li>[ ] </li></ul> | [raw_signature](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/plutonication/src/PlutonicationDAppClient.ts#L96) | Not fully evaluated yet |
| 2. | Chrome browser extension | <ul><li>[ ] </li></ul> | Published to [Chrome web store](https://chromewebstore.google.com/detail/plutonication-extension-p/lndgpmicmhdhbmaebmghjjhaoglnaakl) | Not fully evaluated yet |


## Evaluation V1

### Documentation

I was able to install and build the application. I was able to run the example without docker. However, the React App example is not running with docker:

```
docker run -p 3000:3000 plutonication-react-dapp-example

> example_dapp@0.1.0 start
> react-scripts start

/react-app/node_modules/schema-utils/node_modules/ajv-keywords/dist/index.js:25
        throw new Error("Unknown keyword " + keyword);
        ^

Error: Unknown keyword formatMinimum
    at get (/react-app/node_modules/schema-utils/node_modules/ajv-keywords/dist/index.js:25:15)
    at ajvKeywords (/react-app/node_modules/schema-utils/node_modules/ajv-keywords/dist/index.js:10:13)
    at Object.<anonymous> (/react-app/node_modules/schema-utils/dist/validate.js:58:1)
    at Module._compile (node:internal/modules/cjs/loader:1467:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1551:10)
    at Module.load (node:internal/modules/cjs/loader:1282:32)
    at Module._load (node:internal/modules/cjs/loader:1098:12)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:215:24)
    at Module.require (node:internal/modules/cjs/loader:1304:12)

Node.js v22.4.1
```

Some automated tests are failing:

```
npm run test

> plutonication@1.0.0 test
> cd packages/tests && npx playwright test


Running 5 tests using 1 worker
[chromium] › Penetration.spec.ts:9:5 › dApp does not behave correctly
2024-07-15 13:40:56        API/INIT: RPC methods not decorated: alephNode_emergencyFinalize, alephNode_getBlockAuthor, alephNode_ready, health, payment_queryFeeInfo, system_syncStat
2024-07-15 13:40:56        API/INIT: aleph-node/73: Not decorating unknown runtime apis: 0x2be3f75b696ad1f6/1
Connected to api
  1) [chromium] › Penetration.spec.ts:9:5 › dApp does not behave correctly ─────────────────────────

    Test timeout of 30000ms exceeded.

[chromium] › plutonication.spec.ts:9:5 › Communication between dApp and Wallet
2024-07-15 13:41:27        API/INIT: RPC methods not decorated: alephNode_emergencyFinalize, alephNode_getBlockAuthor, alephNode_ready, health, payment_queryFeeInfo, system_syncStat
2024-07-15 13:41:27        API/INIT: aleph-node/73: Not decorating unknown runtime apis: 0x2be3f75b696ad1f6/1
Connected to api
  2) [chromium] › plutonication.spec.ts:9:5 › Communication between dApp and Wallet ────────────────

    Test timeout of 30000ms exceeded.

  3) [chromium] › plutonication.spec.ts:128:5 › Disconnect dApp ────────────────────────────────────

    Test timeout of 30000ms exceeded.

  Slow test file: [chromium] › Penetration.spec.ts (30.0s)
  Consider splitting slow test files to speed up parallel execution
  3 failed
    [chromium] › Penetration.spec.ts:9:5 › dApp does not behave correctly ──────────────────────────
    [chromium] › plutonication.spec.ts:9:5 › Communication between dApp and Wallet ─────────────────
    [chromium] › plutonication.spec.ts:128:5 › Disconnect dApp ─────────────────────────────────────
  2 passed (1.8m)


```

### E2E Tests

I was able to install the mobile app and Google Chrome extension. The connection between the plugin and mobile app sometimes does work and sometimes doesn't. The observed behavior is the mobile app says that the wallet is connected however, sometimes the QR code from the plugin does not close and the app does not recognize the wallet as connected.


Furthermore, I was not able to successfully sign a transaction when the wallet was connected. The mobile app asks for confirmation and says that it was signed but Polkadot.js does not complete the transaction.

