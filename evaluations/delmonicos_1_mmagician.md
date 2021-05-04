# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/283
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [node](https://github.com/Delmonicos/charger-node/blob/main/LICENSE), [DID pallet](https://github.com/Delmonicos/pallet-did/blob/master/LICENSE) |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [testing guide](https://github.com/Delmonicos/charger-node/blob/milestone-1/Web3-Grant/milestone1/testing-guide.md) |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | as above | 
| 0d. | Article/Tutorial | <ul><li>[x] </li></ul> | as above |
| 1. | Substrate module: Identity | <ul><li>[x] </li></ul> | [DID pallet](https://github.com/Delmonicos/pallet-did/) | [PR created](https://github.com/substrate-developer-hub/pallet-did/pull/15) to update the pallet to substrate v3 |
| 2. | Substrate module: Membership | <ul><li>[] </li></ul> |  
| 3. | Substrate module: Contracts | <ul><li>[x] </li></ul> | [integration into runtime](https://github.com/Delmonicos/charger-node/blob/main/runtime/Cargo.toml#L62) |
| 4. | Substrate module: Charger | <ul><li>[x] </li></ul> | [charger session module](https://github.com/Delmonicos/charger-node/tree/main/pallets/charge-session) |
| 5. | Substrate chain | <ul><li>[x] </li></ul> | [runtime](https://github.com/Delmonicos/charger-node/tree/main/runtime) |
| 6. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/Delmonicos/charger-node/blob/main/Dockerfile) | `docker build .`; `./docker_build.sh` |

## General Notes

###
Minor requirements changes: registrar vs. membership pallet

###
Extra:

[PR](https://github.com/substrate-developer-hub/pallet-did/pull/15) to update the DID pallet to substrate 3.0. Still in review.
