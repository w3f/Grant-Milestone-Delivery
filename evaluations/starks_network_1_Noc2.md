# Evaluation

* **Acceptance:** In progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/55
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | Apache | <ul><li>[x] </li></ul> |[Apache License](https://github.com/gbctech/starks-node/blob/master/LICENSE-APACHE2), [MIT License](https://github.com/gbctech/starks-node/blob/master/frame/distaff-vm/LICENSE) |  Apache 2.0 license, but also MIT for the distaff-vm, but the link to the licenses isn't set up correctly |
| 0b. | Documentation  | <ul><li>[ ] </li></ul>| [readme](https://github.com/gbctech/starks-node/blob/master/README.md), [Distaff readme](https://github.com/gbctech/starks-node/blob/master/frame/distaff-vm/README.md) | The distaff vm readme is just copy pasted
| 0c. | Testing Guide  | <ul><li>[ ] </li></ul>| [test files](https://github.com/gbctech/starks-node/tree/master/frame/distaff-vm/src/tests), [doc](https://github.com/gbctech/starks-node/blob/master/README.md) | Only the distaff VM is tested
| 1. | Substrate module: Distaff VM  | <ul><li>[ ] </li></ul>| [Distaff VM pallet](https://github.com/gbctech/starks-node/tree/master/frame/distaff-vm), [rpc](https://github.com/gbctech/starks-node/tree/master/client/rpc/src/distaff_vm), [rpc-api](https://github.com/gbctech/starks-node/tree/master/client/rpc-api/src/distaff_vm) | not a wasm pallet, no configuration/optimization |
| 2. | Substrate chain | <ul><li>[ ] </li></ul>| [Starks Node](https://github.com/gbctech/starks-node)| No runtime module|
| 3. | Docker | <ul><li>[x] </li></ul>| [Starks UI](https://hub.docker.com/repository/docker/starksnetwork/starks-ui), [Starks Node](https://hub.docker.com/repository/docker/starksnetwork/starks-node) | Works


## General Notes

Only integrated as rps call at the moment (not really a pallet, no rpc tests). No changes on the Distaff VM itself
