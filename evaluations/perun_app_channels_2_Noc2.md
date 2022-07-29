# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/perun_app_channels.md
* **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [License](https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/LICENSE) | Correct License |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Readme](https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/README.md) | Short, but sufficient  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [appchannel_test.go](https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/client/appchannel_test.go), [Readme](https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/README.md) | Short, but sufficient |
| 0d. | Docker | <ul><li>[x] </li></ul> | [docker-compose.yml](https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/docker-compose.yml) | Works |
| 1. | Update backend | <ul><li>[x] </li></ul> | [go.mod](https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/go.mod) | Works |
| 2. | App identifier and data | <ul><li>[x] </li></ul> | [channel.go](https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/channel/channel.go), [encoding.go](https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/channel/encoding.go) | Works |
| 3. | Progress function | <ul><li>[x] </li></ul> | [adjudicator.go](https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/channel/pallet/adjudicator.go), [adjudicator_sub.go](https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/channel/pallet/adjudicator_sub.go), [event.go](https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/channel/event.go), [channel.go](https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/channel/channel.go), [appchannel_test.go](https://github.com/perun-network/perun-polkadot-backend/blob/46d11537a97a268fe0fe62d95c53182086fe3e66/client/appchannel_test.go) | Works |

## General Notes

The main work of the grant is part of this PR: https://github.com/perun-network/perun-polkadot-backend/pull/12 As always, everything immediately worked and it's well tested. The implementation is according to the contract. 