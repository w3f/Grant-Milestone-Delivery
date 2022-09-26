# Evaluation

- **Status:** Accepted
- **Application Document:** private
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.  | License | <ul><li>[x] </li></ul> | **Statemine** https://github.com/zondax/ledger-statemine/blob/master/LICENSE <br> <br> **Statemint** https://github.com/zondax/ledger-statemint/blob/master/LICENSE <br> <br> Substrate RS https://github.com/zondax/ledger-substrate-rs/blob/master/LICENSE <br> <br> Polkadot.js  https://github.com/zondax/ledger-polkadot-js/blob/master/LICENSE | Apache 2.0  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | **Statemine** https://github.com/Zondax/ledger-statemine/blob/main/docs/APDUSPEC.md <br> <br>   **Statemint** https://github.com/Zondax/ledger-statemint/blob/main/docs/APDUSPEC.md | Hosted under https://docs.zondax.ch
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | **Statemine** https://github.com/Zondax/ledger-statemine/blob/master/docs/build.md <br> Supported extrinsics https://github.com/Zondax/ledger-statemine/blob/main/docs/supported_latest.md <br> <br> **Statemint** https://github.com/Zondax/ledger-statemint/blob/master/docs/build.md <br> Supported extrinsics https://github.com/Zondax/ledger-statemint/blob/main/docs/supported_latest.md | 
| Item 1 - Req 1 | Substrate-based app based on Polkadot chain and Ledger app | <ul><li>[x] </li></ul> | **Statemine** https://github.com/Zondax/ledger-statemine <br> <br>  **Statemint** https://github.com/Zondax/ledger-statemine |   |
| Item 1 - Req 2 | Extend support for multisig pallet | <ul><li>[x] </li></ul> | **Statemine** https://github.com/Zondax/ledger-statemine/blob/76a69f2ee005cc9ca40361dc1dcb52fe82db8ed4/app/src/substrate/substrate_dispatch_V7.c#L260-L299  <br> <br>  **Statemint** https://github.com/Zondax/ledger-statemint/blob/ae36d96f26d0e371f61dcd77ae10465aaf8ea912/app/src/substrate/substrate_dispatch_V6.c#L237-L276 |    |
| Item 1 - Req 3 | Support for both ed25519 and sr25519 signature schemes | <ul><li>[x] </li></ul> |  **SR25519-Statemine** https://github.com/Zondax/ledger-statemine/blob/76a69f2ee005cc9ca40361dc1dcb52fe82db8ed4/tests_zemu/tests/sr25519.test.ts#L43-L203  <br> <br>  **SR25519-Statemint** https://github.com/Zondax/ledger-statemint/blob/1edaa1b776088d699890857395aab698a7003d05/tests_zemu/tests/sr25519.test.ts#L43-L203  <br> <br> **ED25519 - Statemine** https://github.com/Zondax/ledger-statemine/blob/76a69f2ee005cc9ca40361dc1dcb52fe82db8ed4/tests_zemu/tests/standard.test.ts#L40-L240 <br><br> **ED25519 - Statemint** https://github.com/Zondax/ledger-statemint/blob/1edaa1b776088d699890857395aab698a7003d05/tests_zemu/tests/standard.test.ts#L40-L240    |   |
| Item 1 - Req 4 | Extend support for Assets pallet | <ul><li>[x] </li></ul> |  **Statemine** <br><br> Documentation: https://github.com/Zondax/ledger-statemine#assets  <br> <br> Code: https://github.com/Zondax/ledger-statemine/blob/76a69f2ee005cc9ca40361dc1dcb52fe82db8ed4/app/src/substrate/substrate_dispatch_V7.c#L388-L607 <br><br> **Statemint** <br><br> Documentation https://github.com/Zondax/ledger-statemint#assets  <br><br> Code: https://github.com/Zondax/ledger-statemint/blob/1edaa1b776088d699890857395aab698a7003d05/app/src/substrate/substrate_dispatch_V7.c#L388-L607 |
| Item 1 - Req 5 | Integration example and npm package support | <ul><li>[x] </li></ul> | Code https://github.com/Zondax/ledger-substrate-js/blob/d3e206606164c6b58f8cfefa24025099cd2eb683/src/index.js#L364-L370  <br><br> npm package: https://www.npmjs.com/package/@zondax/ledger-substrate <br><br> Integration example: https://github.com/zondax/ledger-substrate-js#example | More comprehensive integration examples would be useful |

## General Notes

Great quality code, frequently maintained and includes an extensive testing suite, including using their own Ledger emulator.
The apps have been updated in the meantime to support far more functionality than what was described in the initial contract for this grant.

The documentation for `ledger-substrate-js` was improved in response to feedback, although only the integration with the Statemine and Statemint apps was part of this delivery.
