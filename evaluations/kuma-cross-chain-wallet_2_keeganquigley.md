# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/cross-chain-wallet.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- |------------- | ------------- |
| 0a. | License | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/LICENSE | MIT |
| 0b. | Documentation | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/README.md, https://github.com/blockcoders/kuma-wallet/blob/main/README-es.md |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet#running-locally |  |
| 1. | Custom tokens | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/src/pages/manageAssets/ManageAssets.tsx |  |
| 2. | Mesasges EVM - WASM | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/src/pages/signMessage/SignMessage.tsx |  |
| 3. | Transfer EVM - WASM | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/src/pages/send/Send.tsx |  |
| 4. | Transaction history | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/src/entries/background/index.ts |  |
| 5. | Explorer link | <ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/src/constants/chains.ts |  |

# General

## Tests

All 411 unit tests pass:
```js
 Test Files  56 passed (56)
      Tests  411 passed (411)
   Start at  16:35:02
   Duration  10.59s (transform 1.12s, setup 5.28s, collect 11.92s, tests 3.88s, environment 10.89s, prepare 2.42s)
```
