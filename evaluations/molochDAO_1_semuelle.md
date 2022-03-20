# Evaluation

- **Status:** Accepted
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/393
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0. | MIT License | <ul><li>[x] </li></ul> | [github](https://github.com/DoraFactory/Substrate-Moloch-V1/blob/4f40fcbf50b46e8abefdc02d46dca8cd5d587d23/LICENSE) | — |
| 1. | MolochDAO v1 Pallet on Substrate| <ul><li>[x] </li></ul> | [github](https://github.com/DoraFactory/Substrate-Moloch-V1/tree/4f40fcbf50b46e8abefdc02d46dca8cd5d587d23) | Summon DAO, create & submit proposal, vote on & process proposal, guild bank, ragequit. |
| 2.  | Test Guide | <ul><li>[x] </li></ul> | [github](https://github.com/DoraFactory/Substrate-Moloch-V1/blob/4f40fcbf50b46e8abefdc02d46dca8cd5d587d23/doc/test-guide.md) | tested locally and remotely |
| 3.  | Unit Test | <ul><li>[x] </li></ul> | [github](https://github.com/DoraFactory/Substrate-Moloch-V1/blob/4f40fcbf50b46e8abefdc02d46dca8cd5d587d23/pallets/moloch-v1/src/tests.rs) | Three tests covering happy path of most central functions |

## General Notes

- Build initially failed, `nightly-2020-10-05` works
- Very few unit tests, fails to show robustness
- Inline documentation okay
