# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Open-Grants-Program/blob/master/applications/dora-factory-molochdao-v1-v2.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [license](https://github.com/DoraFactory/Substrate-Moloch-V2/blob/3e000a08679609029276767cdb013edcfe6db12d/LICENSE) | MIT |
| 0b. | Testing Guide | <ul><li>[x] </li></ul> | [gh](https://github.com/DoraFactory/Substrate-Moloch-V2/blob/ced0a467e80d1f11f74f44dc5f922e30f93872ca/doc/test-guide.md) | tarpaulin reports 93% code coverage |
| 1. | MolochDAO v2 Substrate Pallet | <ul><li>[x] </li></ul> | [gh](https://github.com/DoraFactory/Substrate-Moloch-V2/blob/ced0a467e80d1f11f74f44dc5f922e30f93872ca/pallets/moloch-v2/src/lib.rs) | see [General Notes](#general-notes) |
| 2. | Test | <ul><li>[x] </li></ul> | [gh](https://github.com/DoraFactory/Substrate-Moloch-V2/blob/3e000a08679609029276767cdb013edcfe6db12d/pallets/moloch-v2/src/tests.rs) | — |


## General Notes

- `[replace]` section of Cargo.toml needs to be removed (for CPUs other than Apple M1) before compilation works
- requires manual changes in `sc-finality-grandpa`, due to [an old bug](https://gitlab.parity.io/parity/substrate/-/commit/755514de62330b747cebe1cc56d5356a065c3bdc#43a9429a78633c01d35ca02dc7b6b762fdd20b7c_38_37)
- no multi-token support
