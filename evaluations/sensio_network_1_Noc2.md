# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/5 
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul>|[License](https://gitlab.com/sensio_group/starter/-/blob/master/LICENSE)| - |
| 1. | Substrate based chain |<ul><li>[x] </li></ul>| [GitLab](https://gitlab.com/sensio_group/network-node) | The chain is up and running see: http://explorer.sensio.network/ | 
| 2.  | PoE runtime	 |<ul><li>[x] </li></ul>|[GitLab](https://gitlab.com/sensio_group/network-node/-/tree/master/pallets/poe)| The pallet contains some basic comments + tests. It currently contains no transaction weights. Some additional explanation/introduction would be useful. | 
| 3. | Unit tests |<ul><li>[x] </li></ul>|[lib.rs](https://gitlab.com/sensio_group/network-node/-/blob/10-merge-requests-from-here-improvements-in-general-for-0-2-0/pallets/poe/src/lib.rs)| 7 tests, all pass| 
| 4. | Docker image |<ul><li>[x] </li></ul>|[Node](https://hub.docker.com/r/7signals/sensio), [Explorer](https://hub.docker.com/r/7signals/sensio-explorer) | It works, but more explanation for how to run and test it would be useful. | 
| 5. | Tutorial && docs |<ul><li>[x] </li></ul>| [GitLab](https://gitlab.com/sensio_group/starter), [Wiki](https://wiki.sensio.dev), [Tutorial](https://wiki.sensio.dev/#/tutorials?id=intro-to-sensio-network-rules-and-proofs) | After my initial feedback the readme was improved and a tutorial was added.  | 

## General Notes

The project overall looks really good and it's an interesting concept. It would be nice if the wiki/tutorial could explain the benefit of the solution better (e.g. how it prevents Copyright infringement, potential attacks, etc.). 

The current interface had some minor issues, the public hosted version didn’t allow me to select a “rule” as part of the second step. The private version showed me that the “This proof has already been claimed” and after a while also “Proof is created! Proof ID is bafk2bzaceduoi53qyp6usjrarqe2iefk4s66gixyuyylhw66o3oucpnbyowei You better copy it” although it was already claimed. 
