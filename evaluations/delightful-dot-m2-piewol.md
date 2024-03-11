# Evaluation


- **Status:** in progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/delightfuldot.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All evaluations by PieWol


**Milestone 1**

|  Number | Deliverable                           | Accepted |Link  | Evaluation Notes  |
|--------:|---------------------------------------| :------: |-----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| **0a.** | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/LICENSE) |  |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | - [README](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2) <br/> - [Playground Sandbox](https://codesandbox.io/p/devbox/trydedot-th96cm?file=%2Fmain.ts%3A24%2C26) |  |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | - [How to install & run the library](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2?tab=readme-ov-file#have-a-quick-taste) <br/> - [Zombienet Tests](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2/zombienet-tests/src), [GH Action](https://github.com/dedotdev/dedot/actions/workflows/zombienet-tests.yml)  | Run tests instructions: <br/> 1. Clone the [project](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2) <br/> 2. Run `yarn install` <br/> 3. Run `yarn test` |
| 1. | More core functionalities | <ul><li>[x] </li></ul> | - Transaction Apis ([TxExecutor](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/packages/api/src/executor/TxExecutor.ts), [Extrinsic Codec](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/packages/codecs/src/codecs/extrinsic/Extrinsic.ts), [Signed Extensions](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2/packages/api/src/extrinsic/extensions)) <br/> - Runtime Apis ([Executor](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/packages/api/src/executor/RuntimeApiExecutor.ts), [Runtime Api Specs](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/packages/specs/src/runtime/all.ts)) <br/> |  |



## General Notes
