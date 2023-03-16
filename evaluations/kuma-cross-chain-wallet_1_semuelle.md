# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/cross-chain-wallet.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/blockcoders/kuma-wallet/blob/8ab34f8af7e0d4a314bbf4d63784b3d4aa39776d/LICENSE) | MIT |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/blockcoders/kuma-wallet/blob/8ab34f8af7e0d4a314bbf4d63784b3d4aa39776d/README.md), [README-es](https://github.com/blockcoders/kuma-wallet/blob/8ab34f8af7e0d4a314bbf4d63784b3d4aa39776d/README-es.md) | Easy build and installation. Tested on Firefox. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/blockcoders/kuma-wallet#running-tests) | Coverage reported as >90%. |
| 1. | Chrome/Firefox Extension | <ul><li>[x] </li></ul> | [README](https://github.com/blockcoders/kuma-wallet/blob/8ab34f8af7e0d4a314bbf4d63784b3d4aa39776d/README.md#chrome-and-brave) | — |  
| 2. | EVM/WASM accounts | <ul><li>[x] </li></ul> | [src/accounts](https://github.com/blockcoders/kuma-wallet/blob/8ab34f8af7e0d4a314bbf4d63784b3d4aa39776d/src/accounts/AccountManager.ts) | — |
| 3. | Switch between networks | <ul><li>[x] </li></ul> | [src/providers/networkProvider](https://github.com/blockcoders/kuma-wallet/blob/8ab34f8af7e0d4a314bbf4d63784b3d4aa39776d/src/providers/networkProvider/NetworkProvider.tsx) | 11 networks currently. |
| 4. | Display accounts | <ul><li>[x] </li></ul> | [src/providers/accountProvider](https://github.com/blockcoders/kuma-wallet/blob/8ab34f8af7e0d4a314bbf4d63784b3d4aa39776d/src/providers/accountProvider/AccountProvider.tsx) | — |
| 5. | Balances | <ul><li>[ ] </li></ul> | link | 0.01 KSM don't show in the $ total. I suggest adding decimals for small amounts. |


## General Notes

- Rococo is named "Contracts testnet" (?)
- No (visual) connection between relay- and parachains. Perhaps intentional. Begs the question if users even need to know what a relaychain is.
- Docker deliverable dropped as it's not necessary
