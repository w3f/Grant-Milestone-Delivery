# Evaluation

* **Acceptance:** In progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/119
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [License](https://github.com/Kylin-Network/kylin-node/blob/main/LICENSE) |  Correct license  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Doc](https://github.com/Kylin-Network/documents) | A separate repo that contains all the docs  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Tutorial](https://github.com/Kylin-Network/documents/blob/main/Kylin-Network-Demo-Tutorial.md) | - |
| 1. | Oracle Node Module Repo | <ul><li>[x] </li></ul> | [Oracle Node](https://github.com/Kylin-Network/kylin-node)| Works |
| 2. | Data Feeding/Miner Repo | <ul><li>[x] </li></ul> | [Data Feeding/Miner](https://github.com/Kylin-Network/kylin-ocw-module)  | Mostly based on the [offchain worker example](https://github.com/paritytech/substrate/blob/master/frame/example-offchain-worker/src/lib.rs) |
| 3. | Datasource Sample Repo | <ul><li>[x] </li></ul> | [sample-data-fetcher](https://github.com/Kylin-Network/sample-data-fetcher) | Not rustdocs, only one test |
| 4. | Docker Image | <ul><li>[x] </li></ul> | [Docker Image](https://drive.google.com/file/d/1sdTbaEhWZdToZ3ASeoNerOeZwfNy4KPN/view?usp=sharing), [docker-compose.yml](https://github.com/Kylin-Network/kylin-node/blob/main/scripts/docker-compose.yml) | Initially I had some issues (e.g. ERROR: Couldn't find env file ), but everything works now.  |
| 5. | Contracts Repo | <ul><li>[ ] </li></ul> | [kylin-contracts](https://github.com/Kylin-Network/kylin-contracts) | - |
| 6. | Market Front-end Repo | <ul><li>[ ] </li></ul> | [kylin-market-frontend](https://github.com/Kylin-Network/kylin-market-frontend) | Doesn't install, outdated |
| 7. | Data Analytics Sample Repo | <ul><li>[x] </li></ul> | [contract was amended](https://github.com/w3f/Open-Grants-Program/commit/1aebbf9680aab2fdf2476e689debd974a1d884b3) | ELK (Elasticsearch, Logstash, and Kibana) to collect and analytics data rather than implement a full data analytics solution |


## General Notes

The original contract was [amended](https://github.com/w3f/Open-Grants-Program/commit/1aebbf9680aab2fdf2476e689debd974a1d884b3). 

The test coverage and inline documentation could be improved. In its current stage data is provided via off-chain worker , but there is no verification or anything similar (not part of this milestone). Also probably too much data is put on-chain. 
