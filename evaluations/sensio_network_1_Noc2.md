# Evaluation

* **Status:** In Progress
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
| 5. | Tutorial && docs |<ul><li>[ ] </li></ul>| [GitLab](https://gitlab.com/sensio_group/starter), [Wiki](https://wiki.sensio.dev) | The readme file of the node currently doesn’t contain any information. Also a tutorial or guide would be nice. Everything else looks good, although the wiki is obviously still WIP. | 

## General Notes

In progress
