# Evaluation


* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/125
* **Milestone:** 1
* **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
* **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 1. | Apache License 2.0 | <ul><li>[x] </li></ul> | [Link](https://github.com/Pocket4D/Polkadot-Dart/blob/e2b81941e2d28ef67a64436a785d9af6211d0eb5/LICENSE) | — |
| 2. | bindings/crypto |<ul><li>[x] </li></ul>| [crypto](https://github.com/Pocket4D/Polkadot-Dart/tree/fe359243b8fd143717f6881cb98232c256dceac1/lib/crypto) |  complete |
| 3.  | util_crypto |<ul><li>[x] </li></ul>| [util_crypto](https://github.com/Pocket4D/Polkadot-Dart/blob/fe359243b8fd143717f6881cb98232c256dceac1/lib/util_crypto) |  complete |
| 4. | utils |<ul><li>[x] </li></ul>| [utils](https://github.com/Pocket4D/Polkadot-Dart/blob/db0957492d4f2285c1ef6c9fd9bd8330e0cef333/lib/utils) |  complete |
| 5. | keyring |<ul><li>[x] </li></ul>| [keyring](https://github.com/Pocket4D/Polkadot-Dart/blob/9c63944fc62e0bac883d3a2b3252482869f88bfd/lib/keyring) |  complete |
| 6.  | networks |<ul><li>[x] </li></ul>| [networks](https://github.com/Pocket4D/Polkadot-Dart/blob/353e93f2ec16b68d8f513aec6a1d736a833a151d/lib/networks) |  complete |
| 7. | tests |<ul><li>[ ] </li></ul>| [test folder](https://github.com/Pocket4D/Polkadot-Dart/blob/1916b4392f27e5cae4c8d4c5d3a4805ed7c7da41/test) | see [General Notes](#general-notes) |



## General Notes

All packages are _thoroughly_ ported. README describes scope, building and testing. Code documentation would be useful, but was agreed to be part of Milestone 3.

Issues with cross-compilation under Linux were quickly addressed. `flutter test` shows ~82% coverage.
