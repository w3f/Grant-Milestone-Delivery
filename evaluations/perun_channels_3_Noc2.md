# Evaluation

- **Status:** Accepted
- **PR Link:** https://github.com/w3f/Grants-Program/pull/437
* **Milestone:** 3
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache License 2.0](https://github.com/perun-network/perun-polkadot-appdemo/blob/0387dd6dd73c3b2ec11c8d8028c8fb6fbb908f9b/LICENSE) | Correct License |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/perun-network/perun-polkadot-appdemo/blob/0387dd6dd73c3b2ec11c8d8028c8fb6fbb908f9b/README.md) | Well documented  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/perun-network/perun-polkadot-appdemo/blob/0387dd6dd73c3b2ec11c8d8028c8fb6fbb908f9b/README.md) | Easy to follow  |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Node:Dockerfile](https://github.com/perun-network/perun-polkadot-node/blob/a5d1981f7d7ad6132a37405ec01f22ae4bba2ed1/node/Dockerfile) | Works |
| 0e. | Article | <ul><li>[x] </li></ul> | [Google Doc](https://docs.google.com/document/d/1aO05SZgDmabtYBNySm91It7oxinTFg-HArs7N4_aA4Y/edit) | Looks good. Already in contact with grantspr |
| 1. | Pallet game logic | <ul><li>[x] </li></ul> | [Node:app.rs](https://github.com/perun-network/perun-polkadot-node/blob/a5d1981f7d7ad6132a37405ec01f22ae4bba2ed1/node/runtime/src/app.rs), [Pallet:PR#21](https://github.com/perun-network/perun-polkadot-pallet/pull/21), [Pallet:PR#22](https://github.com/perun-network/perun-polkadot-pallet/pull/22) | Implemented a simple on-chain logic for the Tic-tac-toe game |
| 2. | Off-chain game logic | <ul><li>[x] </li></ul> | [app/](https://github.com/perun-network/perun-polkadot-appdemo/tree/0387dd6dd73c3b2ec11c8d8028c8fb6fbb908f9b/app) | implemented the off-chain game logic as promised |
| 3. | Game client | <ul><li>[x] </li></ul> | [client/](https://github.com/perun-network/perun-polkadot-appdemo/tree/0387dd6dd73c3b2ec11c8d8028c8fb6fbb908f9b/client) | Implemented as promised, not sure how easy it is to port this to C# |


## General Notes

Everything immediately worked and the documentation and testing guide was easy to follow. The Tic-Tac-Toe game is obviously a very simple example, but it’s actually really nice to play this in the CLI. 
