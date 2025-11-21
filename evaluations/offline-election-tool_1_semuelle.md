# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/OfflineElectionTool.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/antiers-solutions/polkadot-staking-miner/blob/d13195d05bb42e0adbb4a05102a150c780dbfbc1/LICENSE) | GPLv3 |
| **0b.** | Documentation | <ul><li>[ ] </li></ul> | [README](https://github.com/antiers-solutions/polkadot-staking-miner/blob/d13195d05bb42e0adbb4a05102a150c780dbfbc1/README.md) | Inline code documentation and a tutorial explaining how to simulate an election with default or custom inputs via CLI. |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul> | link | Unit tests for the election logic; guide on how to run and interpret the results. |
| **0d.** | Docker | <ul><li>[ ] </li></ul> | [Dockerfile.README.md](https://github.com/antiers-solutions/polkadot-staking-miner/blob/d13195d05bb42e0adbb4a05102a150c780dbfbc1/Dockerfile.README.md), [Dockerfile](https://github.com/antiers-solutions/polkadot-staking-miner/blob/feat/offline-election-prediction-tool/Dockerfile) | Dockerfile to build and run the CLI simulator locally. |
| 1. | Core Election Engine	 | <ul><li>[ ] </li></ul> | link | Updated version of the existing election script with support for accurate simulation of on-chain validator election logic using Phragmén algorithm. |
| 2. | Custom Inputs Support | <ul><li>[ ] </li></ul> | link | Allows passing custom active set size, voters, candidates, and their stakes via JSON input. |


## General Notes

- See also discussion here: https://github.com/paritytech/polkadot-staking-miner/pull/1189
