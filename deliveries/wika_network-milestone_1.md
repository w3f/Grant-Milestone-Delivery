# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** 
[Wika Network](https://github.com/w3f/Grants-Program/blob/master/applications/wika_network.md)

* **Milestone Number:** 
1

**Context**

Dockerized ETL Service to sync Wika blockchain data with 3 indexed databases: Postgres, Neo4j and Elastic Search.

[Medium article](https://wikanetwork.medium.com/the-wika-network-dataset-bbb936cb27c3)

**Deliverables**
All deliverables are merged into `master` branch of the repo [wika_etl](https://github.com/randombishop/wika_etl)

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [MIT LICENSE](https://github.com/randombishop/wika_etl/blob/master/LICENSE) | The original specs specified Apache but we switched to MIT for consistency with Subquery
| 0b. | Documentation | [README](https://github.com/randombishop/wika_etl/blob/master/README.md) |
| 0c. | Testing Guide | [tests](https://github.com/randombishop/wika_etl/tree/master/subql_wika/src/tests) | See repo README for instructions on how to run the tests
| 0d. | Docker | [docker-compose.yml](https://github.com/randombishop/wika_etl/blob/master/subql_wika/docker-compose.yml) |
| 0e. | Article | [Medium article](https://wikanetwork.medium.com/the-wika-network-dataset-bbb936cb27c3) | Since everything is packaged in a unique repo with an easy to use docker-compose, we compiled all 3 databases in one single article.
| 1. | ETL | [wika_etl](https://github.com/randombishop/wika_etl) | 
| 2. | ETL Elastic Search | [wika_etl](https://github.com/randombishop/wika_etl) |   
| 3. | ETL Neo4J | [wika_etl](https://github.com/randombishop/wika_etl) |  
| 4. | ETL Error Recovery | [wika_etl](https://github.com/randombishop/wika_etl) | 
| 5. | ETL Logging | [wika_etl](https://github.com/randombishop/wika_etl) |  
| 6. | Configuration | [README](https://github.com/randombishop/wika_etl/blob/master/README.md)  |  
| 7. | Example clients | [Elastic search](https://es-test.wika.network) [Neo4J](http://neo4j-test.wika.network:7474) | Kibana and Neo4J web client included in docker-compose 


**Additional Information**
Local tests PASS.
Deployed on a GCP instance and currently up and running. 
