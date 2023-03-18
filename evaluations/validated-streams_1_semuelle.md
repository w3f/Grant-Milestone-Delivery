# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/validated-streams.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/comrade-coop/validated-streams/blob/235a11f7e936c92975df777af2333f1fdb75d040/LICENSE) | MIT (most of the code) / GPLv3 (any sections depending on Substrate Client) |
| **0b.** | Documentation | <ul><li>[ ] </li></ul> | link | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul> | link | `cargo tarpaulin` reports ~80% test coverage on pallet. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/comrade-coop/validated-streams/blob/235a11f7e936c92975df777af2333f1fdb75d040/Dockerfile), [script](https://github.com/comrade-coop/validated-streams/blob/235a11f7e936c92975df777af2333f1fdb75d040/scripts/run-example.sh) | — |
| 1. | Substrate pallet: Validated Streams | <ul><li>[ ] </li></ul> | link | We will create a Substrate pallet that will receive witnessed event extrinsics and communicate them to other Substrate pallets. <!-- Note: as we(/I) are not 100% familiar with Substrate pallet interactions, we cannot specify the exact API yet. We would, however, seek to implement best practices observed in other similar Substrate pallets. --> |
| 2. | Substrate module: Witnessed events gossip | <ul><li>[ ] </li></ul> | link | The Witnessed events gossip module will implement part of the Validated Streams protocol as described above, gossiping signatures about event hashes witnessed by the validator node and submitting them to the Tx pool once enough signatures are collected. |
| 3. | Substrate module: Stream service | <ul><li>[ ] </li></ul> | link | The Stream service module will allow applications to connect to the validator node as a "trusted client", witnessing events observed in the off-chain world and receiving receipts of completed events. |
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
