# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/perun_channels-integration.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/perun-network/perun-polkadot-backend/blob/main/LICENSE) | Correct License |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/perun-network/perun-polkadot-backend/blob/main/README.md) | Looks good. A comment regarding the go version might be helpful.  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/perun-network/perun-polkadot-backend/blob/main/README.md) | Clean and easy to follow instructions |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Docker](https://github.com/perun-network/perun-polkadot-backend/blob/main/docker-compose.yml) | Works |
| 1. | Wallet abstraction | <ul><li>[x] </li></ul> | [wallet](https://github.com/perun-network/perun-polkadot-backend/tree/main/wallet) | Implemented |

## General Notes

Everything immediately works and is documented and tested. Only one minor thing, it requires a go version above go1.16, since embedded files were added in go1.16.