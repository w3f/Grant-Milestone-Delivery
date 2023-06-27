# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/validated-streams.md
- **Milestone:** 2 
- **Kusama Identity:** [HZrUkonEQc9tReQNndBTML5NbYWBaj8KGaHUGGxwq3jP9PY](https://explorer.polkascan.io/kusama/account/HZrUkonEQc9tReQNndBTML5NbYWBaj8KGaHUGGxwq3jP9PY)
- **Previously successfully merged evaluation:** none

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/comrade-coop/validated-streams/blob/6f9478b84ea5730fceaae50c04b62e1ecee88fed/LICENSE) | MIT |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/comrade-coop/validated-streams/blob/6f9478b84ea5730fceaae50c04b62e1ecee88fed/README.md) | easy to follow description with a schematic. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Running tests](https://github.com/comrade-coop/validated-streams/blob/6f9478b84ea5730fceaae50c04b62e1ecee88fed/README.md#testing) <br> [proofs](https://github.com/comrade-coop/validated-streams/blob/6f9478b84ea5730fceaae50c04b62e1ecee88fed/consensus/src/proofs/tests.rs) <br> [events](https://github.com/comrade-coop/validated-streams/blob/b5a9437b2e59881a64c63596ded9144f72a39ad5/consensus/src/events/tests.rs) <br> [pallet](https://github.com/comrade-coop/validated-streams/blob/a8a55ab7f2f16401c8aefefccdcdfa4638ddb39a/pallet/src/tests.rs) | <ul><li> with 'on-chain proofs' : `cargo tarpaulin` reports ~27% test coverage for 'consensus' crate with 19 tests and ~7% coverage for 'pallet' crate with 8 tests. </li></ul><ul><li> Without 'on-chain proofs' : `cargo tarpaulin` reports ~27% test coverage for the 'consensus' crate with 19 tests and ~5% coverage for the 'pallet' with 3 tests. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Main](https://github.com/comrade-coop/validated-streams/blob/64db1c20f561115f807f41c5da58bca7b3325d5a/Dockerfile) <br> [IRC](https://github.com/comrade-coop/validated-streams/blob/beb99456091f33f1f1b3cf6a555ff656c107e9cf/samples/irc/Dockerfile) <br> [Test script](https://github.com/comrade-coop/validated-streams/blob/f0acdceb66846ab001e652a14a38a71a7ec6b05c/samples/basic/run-example.sh) <br> [Benchmark](https://github.com/comrade-coop/validated-streams/blob/64db1c20f561115f807f41c5da58bca7b3325d5a/samples/tps-benchmark/Dockerfile) | Docker examples are working as intended. |
| **0e.** | Article |  <ul><li>[x] </li></ul> |[Google Docs link](https://docs.google.com/document/u/1/d/12EsVUDydsDWfngQP6-zYRiC-dFbn696Evr3VSxgcpjU/edit) | --
| 1. | Substrate module: Witnessed events block import | <ul><li>[x] </li></ul> |[Old](https://github.com/comrade-coop/validated-streams/blob/fa7e20c5f0bf34cd8b89f975eceb6e29955202ab/node/src/streams/services/witness_block_import.rs) <br><br>[New](https://github.com/comrade-coop/validated-streams/blob/9d1dd933395f9cca69834ccb43b3330922d531c4/consensus/src/block_import.rs) | The new implementation matches the description in the delivery documentation. |
| 2. | Real-life testing | <ul><li>[x] </li></ul> | [TPS benchmark](https://github.com/comrade-coop/validated-streams/tree/c083a83ad497dcb338501c66691680b1acfc29f0/samples/tps-benchmark) | With the use of Docker, the benchmark runs smoothly. However, I was unable to test the benchmark that didn't use Docker. (I didn't have access to multiple hardwares to test it.) |
| 3. | .NET client sample | <ul><li>[x] </li></ul> | [IRC sample](https://github.com/comrade-coop/validated-streams/tree/5dc862fc2fe3cab7e8b6e2272b89ff21607a4038/samples/irc) | IRC sample worked nicely 


<br>

## General Notes
- **26.06.23** : 
  
  - The main delta of M2 compared to M1 seemed to be 1) implementation of a substrate module for importing witnessed events and 2) devising a practical benchmark/application sample.
  - As stated by the grantee, quantitative reporting of the TPS benchmark is still pending. However, considering that the assessment of performance is context-dependent and there are no specific hard requirements for evaluation, I consider the current contribution acceptable.  

<br>

## Outstanding Issues
- **26.06.23** : 
  
  - All outstanding issues were resolved. Please check the previous evaluation in case of need: [link](https://github.com/w3f/Grant-Milestone-Delivery/blob/0ff27610f39a30dfe7e27bdbc18a70ced73b546e/evaluations/validated-streams_2_arahangua.md) 