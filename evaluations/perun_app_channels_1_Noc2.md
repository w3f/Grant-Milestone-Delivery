# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/perun_app_channels.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/perun-network/perun-polkadot-pallet/blob/master/LICENSE) | Correct License |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/README.md) | Clear readme and the code is well documented |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Tests](https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/README.md#tests) | Works |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/Dockerfile) | Works |
| 1. | App identifier and data | <ul><li>[x] </li></ul> | [types.rs:Params](https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/src/types.rs#L71) | |
| 2. | App registry | <ul><li>[ ] </li></ul> | [types.rs:AppRegistry](https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/src/types.rs#55) | Includes a mocked implementation that is used for testing. Not sure if this was coordinated with Ajuna |
| 3. | Progress function | <ul><li>[x] </li></ul> | [lib.rs:progress](https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/src/lib.rs#L340), [types.rs:RegisteredState](https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/src/types.rs#L131), [lib.rs:dispute](https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/src/lib.rs#L277), [lib.rs:conclude](https://github.com/perun-network/perun-polkadot-pallet/blob/54c55acabfe2f5b57a79b4330726cf572453c0f0/src/lib.rs#L399) | Progress function was implemented |

## General Notes

 Well tested and documented. The implementation is according to the contract. Everything immediately worked