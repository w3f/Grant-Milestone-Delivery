# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/perun_channels-integration.md
* **Milestone:** 4
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/perun-network/perun-polkadot-pallet/blob/master/LICENSE) | Correct License |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/perun-network/perun-polkadot-pallet/blob/master/README.md) |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/perun-network/perun-polkadot-pallet/blob/master/README.md) |  |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/perun-network/perun-polkadot-pallet/blob/master/Dockerfile) |  |
| 1. | Weight estimation | <ul><li>[ ] </li></ul> | [benchmarking.rs](https://github.com/perun-network/perun-polkadot-pallet/blob/master/src/benchmarking.rs), [weights.rs](https://github.com/perun-network/perun-polkadot-pallet/blob/master/src/weights.rs) |  |
| 2. | Code Coverage | <ul><li>[ ] </li></ul> | [rust.yml](https://github.com/perun-network/perun-polkadot-pallet/blob/master/.github/workflows/rust.yml) |  |

## General Notes

I ran into issues when I tried to compile it with my local rust version. Potentially just an issue with the specific version. 