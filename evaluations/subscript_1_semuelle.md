# Evaluation

- **Status:** In Progress
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/61
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| --- | --- | --- | --- | --- |
| 0a. | Apache 2.0 License | <ul><li>[x] </li></ul> | [License file](https://github.com/ascontract/subscript/blob/9d8e6baf6401f62c31b186a0373dff779f192557/LICENSE) | — |
| 0b. | Testing | <ul><li>[ ] </li></ul> | [tests](https://github.com/ascontract/subscript/tree/9d8e6baf6401f62c31b186a0373dff779f192557/core/assembly/__tests__) | Minimal testing |
| 0c. | Documentation | <ul><li>[x] </li></ul> | [Readme1](https://github.com/ascontract/subscript/blob/master/README.md), [Readme2](https://github.com/ascontract/subscript/blob/9d8e6baf6401f62c31b186a0373dff779f192557/core/README.md) | Well structured |
| 1. | contract runtime environment | <ul><li>[x] </li></ul> | [code](https://github.com/ascontract/subscript/tree/9d8e6baf6401f62c31b186a0373dff779f192557/core/assembly/env) | — |
| 2. | core types | <ul><li>[x] </li></ul> | [code](https://github.com/ascontract/subscript/blob/9d8e6baf6401f62c31b186a0373dff779f192557/core/assembly/types.ts) | — |
| 3. | storage access | <ul><li>[x] </li></ul> | [code](https://github.com/ascontract/subscript/blob/9d8e6baf6401f62c31b186a0373dff779f192557/core/assembly/env/storage.ts) | `Storage.set`, `.get` and `.clear` |
| 4. | object packing utilty | <ul><li>[x] </li></ul> | [utils](https://github.com/ascontract/subscript/blob/9d8e6baf6401f62c31b186a0373dff779f192557/core/assembly/util.ts), [interface](https://github.com/ascontract/as-scale-codec/blob/3c7f3e438e4fb1c49fdfa8bc403851ef8596885c/assembly/interfaces/Codec.ts) | — |
| 5. | memory manipulation | <ul><li>[x] </li></ul> | [example](https://github.com/ascontract/subscript/blob/3f6ba906f721392d05412af916ac56ace859e993/core/assembly/crypto.ts#L13) | AS takes care of memory management, no explicit memory manipulation necessary. |
| 6. | contract event generation | <ul><li>[x] </li></ul> | [code](https://github.com/ascontract/subscript/blob/9d8e6baf6401f62c31b186a0373dff779f192557/core/assembly/env/contract.ts#L139) | — |
| 7. | contract call method | <ul><li>[x] </li></ul> | [example](https://github.com/ascontract/subscript/blob/9d8e6baf6401f62c31b186a0373dff779f192557/examples/erc20/assembly/index.ts#L140) | — |
| 8. | hash utility | <ul><li>[x] </li></ul> | [code](https://github.com/ascontract/subscript/blob/9d8e6baf6401f62c31b186a0373dff779f192557/core/assembly/crypto.ts) | — |
| 9. | `SCALE` codec | <ul><li>[x] </li></ul> | [repo](https://github.com/ascontract/as-scale-codec/tree/149c634773a0544b4919aa3fb6f474c4f0f8a9ad) | LimeChain's `as-scale-codec` implementation with patch |
| 10. | example for demonstration | <ul><li>[x] </li></ul> | [flipper](https://github.com/ascontract/subscript/tree/9d8e6baf6401f62c31b186a0373dff779f192557/examples/flipper)<br />[ERC20](https://github.com/ascontract/subscript/tree/9d8e6baf6401f62c31b186a0373dff779f192557/examples/erc20) | — |

## General Notes

Test environment:

- yarn 1.21.1
- node v12.14.1
