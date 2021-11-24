# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/perun_channels-integration.md
* **Milestone:** 4
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/perun-network/perun-polkadot-pallet/blob/master/LICENSE) | Correct License |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/perun-network/perun-polkadot-pallet/blob/master/README.md) | Looks good |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/perun-network/perun-polkadot-pallet/blob/master/README.md) | Looks good |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/perun-network/perun-polkadot-pallet/blob/master/Dockerfile) | Looks good |
| 1. | Weight estimation | <ul><li>[x] </li></ul> | [benchmarking.rs](https://github.com/perun-network/perun-polkadot-pallet/blob/master/src/benchmarking.rs), [weights.rs](https://github.com/perun-network/perun-polkadot-pallet/blob/master/src/weights.rs) | According to the contract |
| 2. | Code Coverage | <ul><li>[x] </li></ul> | [rust.yml](https://github.com/perun-network/perun-polkadot-pallet/blob/master/.github/workflows/rust.yml) | Implemented |

## General Notes

At the beginning, I ran into some issues when I tried to compile it with my local rust version, but apparently this was simply because of my rust setup. Apart from this everything works. The code is well documented and they have 96% codecov. They also followed the benchmarking documentation. Not sure how much extra work they put into improving the weights. For clarification, this review is not a security audit of the weights or the pallet!


