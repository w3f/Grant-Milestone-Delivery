# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/validated-streams.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/comrade-coop/validated-streams/blob/235a11f7e936c92975df777af2333f1fdb75d040/LICENSE) | MIT |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/comrade-coop/validated-streams/blob/7636767ca2b30c497d0e50c6aa0fad0b2700130d/README.md#example) | Good, simple testing setup. Inline docs so-so. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/comrade-coop/validated-streams/blob/7636767ca2b30c497d0e50c6aa0fad0b2700130d/README.md#testing) | `cargo tarpaulin` reports ~80% test coverage on pallet. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/comrade-coop/validated-streams/blob/235a11f7e936c92975df777af2333f1fdb75d040/Dockerfile), [script](https://github.com/comrade-coop/validated-streams/blob/235a11f7e936c92975df777af2333f1fdb75d040/scripts/run-example.sh) | — |
| 1. | Substrate pallet: Validated Streams | <ul><li>[x] </li></ul> | [/pallet](https://github.com/comrade-coop/validated-streams/tree/7636767ca2b30c497d0e50c6aa0fad0b2700130d/pallet) | — |
| 2. | Substrate module: Witnessed events gossip | <ul><li>[x] </li></ul> | [streams/services/events](https://github.com/comrade-coop/validated-streams/tree/7636767ca2b30c497d0e50c6aa0fad0b2700130d/node/src/streams/services/events) | — |
| 3. | Substrate module: Stream service | <ul><li>[x] </li></ul> | [streams/server](https://github.com/comrade-coop/validated-streams/blob/7636767ca2b30c497d0e50c6aa0fad0b2700130d/node/src/streams/server/mod.rs) | — |


## General Notes

Team discovered that Substrate's `GossipEngine` is [deprecated](https://github.com/paritytech/substrate/issues/13187#issuecomment-1398131943) and implemented [stream gossip](https://github.com/comrade-coop/validated-streams/blob/7636767ca2b30c497d0e50c6aa0fad0b2700130d/node/src/streams/gossip/mod.rs) directly.
