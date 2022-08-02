# Evaluation

- **Status:** In Progress
- **Application Document:** private
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| Item 1 - Req 1 | Substrate-based app based on Polkadot chain and Ledger app | <ul><li>[x] </li></ul> | **Statemine** https://github.com/Zondax/ledger-statemint/blob/ae36d96f26d0e371f61dcd77ae10465aaf8ea912/app/src/substrate/substrate_dispatch_V6.c#L237-L276  <br> <br>  **Statemint** https://github.com/Zondax/ledger-statemint/blob/ae36d96f26d0e371f61dcd77ae10465aaf8ea912/app/src/substrate/substrate_dispatch_V6.c#L237-L276  |   |
| Item 1 - Req 2 | Extend support for multisig pallet | <ul><li>[x] </li></ul> | **Statemine** https://github.com/Zondax/ledger-statemine/blob/main/app/src/substrate/substrate_dispatch_V6.c#L230-L269  <br> <br>  **Statemint** https://github.com/Zondax/ledger-statemint/blob/ae36d96f26d0e371f61dcd77ae10465aaf8ea912/app/src/substrate/substrate_dispatch_V6.c#L237-L276 |    |
| Item 1 - Req 3 | Support for both ed25519 and sr25519 signature schemes | <ul><li>[x] </li></ul> |  **SR25519-Statemine** https://github.com/Zondax/ledger-statemine/blob/main/tests_zemu/tests/sr25519.test.ts#L43-L203  <br> <br>  **SR25519-Statemint** https://github.com/Zondax/ledger-statemint/blob/ae36d96f26d0e371f61dcd77ae10465aaf8ea912/tests_zemu/tests/sr25519.test.ts#L43-L203  <br> <br> **ED25519 - Statemine** https://github.com/Zondax/ledger-statemine/blob/main/tests_zemu/tests/standard.test.ts#L40-L240 <br><br> **ED25519 - Statemint** https://github.com/Zondax/ledger-statemint/blob/main/tests_zemu/tests/standard.test.ts#L40-L240    |   |
| Item 1 - Req 4 | Extend support for Assets pallet | <ul><li>[x] </li></ul> |  **Statemine** <br><br> Documentation: https://github.com/Zondax/ledger-statemine#assets  <br> <br> Code: https://github.com/Zondax/ledger-statemine/blob/492414804baae586d051f8534dd9b1466369ef3b/app/src/substrate/substrate_dispatch_V6.c#L334-L536 <br><br> **Statemint** <br><br> Documentation https://github.com/Zondax/ledger-statemint#assets  <br><br> Code: https://github.com/Zondax/ledger-statemint/blob/ae36d96f26d0e371f61dcd77ae10465aaf8ea912/app/src/substrate/substrate_dispatch_V7.c#L372-L519 |
| Item 1 - Req 5 | Integration example and npm package support | <ul><li>[ ] </li></ul> | Code https://github.com/Zondax/ledger-substrate-js/blob/d3e206606164c6b58f8cfefa24025099cd2eb683/src/index.js#L364-L370  <br><br> npm package: https://www.npmjs.com/package/@zondax/ledger-substrate <br><br> Statemine integration example: https://github.com/Zondax/ledger-statemine/blob/main/tests_zemu/tests/standard.test.ts#L154-L193  <br><br> Statemint integration example: https://github.com/Zondax/ledger-statemint/blob/main/tests_zemu/tests/standard.test.ts#L154-L193 | Some clear integration examples instead of a test case would be great |

## General Notes

