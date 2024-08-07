# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Plutonication.md
- **Milestone:** 4
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Licence | <ul><li>[x] </li></ul> | [Plutonication](https://github.com/RostislavLitovkin/Plutonication/blob/Grant-delivery-4/packages/extension/LICENSE) |  | 
| 0b.  | Documentation | <ul><li>[x] </li></ul> | Documentation for building the Plutonication is in [Readme](https://github.com/RostislavLitovkin/Plutonication/blob/Grant-delivery-4/README.md). Inline documentation is also provided. |  |
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | E2E testing: Download [Plutonication Extension from the Chrome web store](https://chromewebstore.google.com/detail/plutonication-extension-p/lndgpmicmhdhbmaebmghjjhaoglnaakl) and [PlutoWallet from Google Play](https://play.google.com/store/apps/details?id=com.rostislavlitovkin.plutowallet). Then, you can try to go to any dApp, for example https://polkadot.js.org/apps/ and you should see the Plutonication modal. Just scan the QR code by your phone and connect your wallet. |  |
| 0d. | Docker | <ul><li>[x] </li></ul> | Not provided |  |
| 0e. | Article | <ul><li>[x] </li></ul> | [Medium article](https://medium.com/@rostislavlitovkin/plutonication-cross-platform-connection-for-polkadot-wallets-a237c342d616) | |
| 1. | Plutonication Extension | <ul><li>[x] </li></ul> | https://github.com/RostislavLitovkin/Plutonication/tree/Grant-delivery-4/packages/extension |  |
| 1a. | inject(..) | <ul><li>[x] </li></ul> | [inject](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/extension/src/page.ts#L10) |  |
| 1b. | onReceivePublicKey | <ul><li>[x] </li></ul> | [onReceivePublicKey](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/plutonication/src/PlutonicationDAppClient.ts#L46) |  |
| 1c. | signPayloadAsync | <ul><li>[x] </li></ul> | [signPayload](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/plutonication/src/PlutonicationDAppClient.ts#L78) |  |
| 1d. | payload_signature | <ul><li>[x] </li></ul> | [payload_signature](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/plutonication/src/PlutonicationDAppClient.ts#L83) | |
| 1e. | signRawAsync | <ul><li>[x] </li></ul> | [signRaw](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/plutonication/src/PlutonicationDAppClient.ts#L91) | |
| 1f. | raw_signature | <ul><li>[x] </li></ul> | [raw_signature](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/plutonication/src/PlutonicationDAppClient.ts#L96) | |
| 2. | Chrome browser extension | <ul><li>[x] </li></ul> | Published to [Chrome web store](https://chromewebstore.google.com/detail/plutonication-extension-p/lndgpmicmhdhbmaebmghjjhaoglnaakl) | |

## Evaluation V2

### Docker

The Docker for the dApp example is now working without problems.

```
docker ps
CONTAINER ID   IMAGE                          	COMMAND              	CREATED      	STATUS      	PORTS                                   	NAMES
90c47d04f239   plutonication-react-dapp-example   "docker-entrypoint.s…"   12 minutes ago   Up 12 minutes   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp   musing_einstein
```

### Automated Tests

We ran the tests, and this time all passed.

```
npx playwright test

added 5 packages, and audited 6 packages in 4s

found 0 vulnerabilities

Running 5 tests using 1 worker
[chromium] › Penetration.spec.ts:9:5 › dApp does not behave correctly
2024-08-05 11:27:17    	API/INIT: RPC methods not decorated: alephNode_emergencyFinalize, alephNode_getBlockAuthor, alephNode_ready, health, payment_queryFeeInfo, system_syncStat
2024-08-05 11:27:17    	API/INIT: aleph-node/73: Not decorating unknown runtime apis: 0x2be3f75b696ad1f6/1
Connected to api
Receive payload
Payload to Sign 0x00000000430000001100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
[chromium] › plutonication.spec.ts:9:5 › Communication between dApp and Wallet
2024-08-05 11:27:30    	API/INIT: RPC methods not decorated: alephNode_emergencyFinalize, alephNode_getBlockAuthor, alephNode_ready, health, payment_queryFeeInfo, system_syncStat
2024-08-05 11:27:30    	API/INIT: aleph-node/73: Not decorating unknown runtime apis: 0x2be3f75b696ad1f6/1
Connected to api
Receive payload
Payload to Sign 0xac050700004769bbe59968882c1597ec1151621f0193547285125f1c1337371c013ff61f0f0080c6a47e8d03481c0400430000001100000005d5279c52c484cc80396535a316add7d47b1c5b9e0398dd1f584149341460c5d12ff783a76a5e07156d2a3ff61745b3a1f892bf6247c1b3bf0fd7ba2085eda6
Received raw: [object Object]
  Slow test file: [chromium] › plutonication.spec.ts (40.7s)
  Consider splitting slow test files to speed up parallel execution
  5 passed (55.6s)

To open last HTML report run:

  npx playwright show-report
```

### E2E Tests

We tested deliverable `1a`, connecting the wallet on the `polkadot.js` dApp using the Plutonication Extension.

Image showing the extension generating the QR code to connect the wallet.

![unnamed (7)](https://github.com/user-attachments/assets/c1d2fa87-800d-42f0-9645-fd0e914eef86)


After scanning, the app shows it is connected.

![unnamed (8)](https://github.com/user-attachments/assets/6fa4afeb-fc76-486c-83fd-5bdd3a24278c)


Image showing the account from the wallet connected to the `polkadot.js`.

![unnamed (9)](https://github.com/user-attachments/assets/e69f43cb-8519-4e39-a7c0-c1c35035b840)

We tested the deliverables `1b` to `1f` using the dApp example. 

After connecting the wallet, the dApp successfully got the account information.

![unnamed (10)](https://github.com/user-attachments/assets/c0dbda0d-4b1a-4eae-92eb-2050a4f0c58b)

We could use the `sign message`.

Confirmation on the smartphone:

![unnamed (11)](https://github.com/user-attachments/assets/f8752b98-335c-4df1-beee-72d54d43c25b)

The console log shows the signature:

![unnamed (12)](https://github.com/user-attachments/assets/38f5020e-4176-4885-9bbb-3893efc0d107)

We could use the sign `balance_transfer`.

Confirmation on the smartphone:

![unnamed (13)](https://github.com/user-attachments/assets/68b03c65-9646-4151-9218-84857559da3e)

`Polkadot.js` shows the transfer was successful:

![unnamed (14)](https://github.com/user-attachments/assets/74bad34e-a216-4d2e-9042-a785f8fde2f9)


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
