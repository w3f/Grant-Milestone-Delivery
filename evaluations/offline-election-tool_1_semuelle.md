# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/OfflineElectionTool.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/antiers-solutions/polkadot-staking-miner/blob/d13195d05bb42e0adbb4a05102a150c780dbfbc1/LICENSE) | GPLv3 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/antiers-solutions/polkadot-staking-miner/blob/d13195d05bb42e0adbb4a05102a150c780dbfbc1/README.md) | — |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/antiers-solutions/polkadot-staking-miner/tree/feat/offline-election-prediction-tool?tab=readme-ov-file#test-locally) | Unit tests for the election logic; guide on how to run and interpret the results. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/antiers-solutions/polkadot-staking-miner/blob/c3ba626ffd7b74b9272023586fbc252ba15a7998/Dockerfile) | — |
| 1. | Core Election Engine	 | <ul><li>[ ] </li></ul> | [antiers-solutions/polkadot-staking-miner](https://github.com/antiers-solutions/polkadot-staking-miner/blob/c3ba626ffd7b74b9272023586fbc252ba15a7998/src/commands/predict.rs) | See review starting [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/1288#issuecomment-3486905864). |
| 2. | Custom Inputs Support | <ul><li>[x] </li></ul> | [antiers-solutions/polkadot-staking-miner](https://github.com/antiers-solutions/polkadot-staking-miner/blob/c3ba626ffd7b74b9272023586fbc252ba15a7998/src/commands/predict.rs) | See review starting [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/1288#issuecomment-3486905864). |


## General Notes

Merged into paritytech/polkadot-staking-miner: https://github.com/paritytech/polkadot-staking-miner/pull/1189
