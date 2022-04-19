# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Wika Network](https://github.com/w3f/Grants-Program/blob/master/applications/wika_network.md)

* **Milestone Number:** 2

**Context**

REST API to consume the blockchain data synced into Neo4j and Elastic Search (see milestone 1 for the ETL performing the sync.)

[Medium article](https://wikanetwork.medium.com/the-wika-network-api-4309e48a7d4f)

**Deliverables**

All deliverables are merged into `master` branch of the repo [wika_api](https://github.com/randombishop/wika_api)

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [MIT LICENSE](https://github.com/randombishop/wika_api/blob/master/LICENSE) | The original specs specified Apache but we switched to MIT for consistency with Subquery
| 0b. | Documentation | [README](https://github.com/randombishop/wika_api/blob/master/README.md) [Swagger docs](https://api-test.wika.network/doc) | When up and running, the webserver also publishes Swagger documentation and a test front-end at /docs 
| 0c. | Testing Guide | [*.spec.ts](https://github.com/randombishop/wika_api/tree/master/api/src) | yarn test / See repo README for instructions on how to run the tests
| 0d. | Docker | [docker-compose.yaml](https://github.com/randombishop/wika_api/blob/master/api/docker-compose.yaml) |
| 0e. | Article | [Medium article](https://wikanetwork.medium.com/the-wika-network-api-4309e48a7d4f) | Short article to describe this repo and advertise project progress.
| 1. | list_url_by_liker(address) | [app.controller.ts line 51](https://github.com/randombishop/wika_api/blob/292848c4330b767715b6b82b5517fab1b9132d8a/api/src/app.controller.ts#L51) | The actual route is GET /user/:user/liked_urls
| 2. | list_url_by_owner(address) | [app.controller.ts line 73](https://github.com/randombishop/wika_api/blob/292848c4330b767715b6b82b5517fab1b9132d8a/api/src/app.controller.ts#L73) | The actual route is GET /user/:user/owned_urls
| 3. | search(query) | [app.controller.ts line 95](https://github.com/randombishop/wika_api/blob/292848c4330b767715b6b82b5517fab1b9132d8a/api/src/app.controller.ts#L95) | The actual route is GET /user/:user/search/:query
| 4. | recommend(address) | [app.controller.ts line 127](https://github.com/randombishop/wika_api/blob/292848c4330b767715b6b82b5517fab1b9132d8a/api/src/app.controller.ts#L127) | The actual route is GET /user/:user/recommend



**Additional Information**

Local tests PASS.

Deployed on a GCP instance and currently up and running at https://api-test.wika.network/doc 
