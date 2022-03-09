# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/60099582c4d4a711c23a50c4c12cafb8eb444cf0/applications/wika_network.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [MIT License](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/LICENSE) | MIT License |
| 0b. | Documentation |<ul><li>[x] </li></ul>| [README](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/README.md), [change log](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/template_change_log.md) | Github instructions (README, change log) are sufficient |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| [Unit Tests](https://github.com/randombishop/wika_etl/tree/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/src/tests) | See [Tests Feedback](#tests-feedback) |
| 0d. | Docker |<ul><li>[x] </li></ul>| [docker-compose.yml file](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/docker-compose.yml) | Spins up containers using the following images: <ul><li>subql-node for listening to substrate chain data</li><li>subql-query for querying the persisted chain data</li><li>postgres, elasticsearch and neo4j for persisting the chain data</li><li>kibana, a web-based ui for accessing elasticsearch-persisted data</li></ul> |
| 0e. | Article |<ul><li>[x] </li></ul>| [Medium Article](https://wikanetwork.medium.com/the-wika-network-dataset-bbb936cb27c3) | Medium article explaining project structure, showing example queries for ES and Neo4J and containing deploy guide |
| 1. | ETL |<ul><li>[x] </li></ul>| [`startBlock` configuration](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/project.yaml#L13), [block listener config](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/project.yaml), [block listener](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/src/mappings/mappingHandlers.ts#L147) | Wika Network relies on the [subql-node docker image](https://hub.docker.com/layers/onfinality/subql-node/v0.27.2/images/sha256-737fcf1f89ce099545f80f69cd024e478bbecff96283a6cab35f6790394e3811?context=explore) for querying the substrate chain. |
| 2. | ETL Elastic Search |<ul><li>[x] </li></ul>| [Elastic Search Plugin](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/src/plugins/elastic_search.ts) | - |
| 3. | ETL Neo4J |<ul><li>[x] </li></ul>| [Neo4J Plugin](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/src/plugins/neo4j.ts) | - |
| 4. | ETL Error Recovery |<ul><li>[x] </li></ul>| [Mail sending service](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/src/plugins/emails.ts), [Mail alert config](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/docker-compose.yml#L61-L65) | The spec `PluginEmails > should send a test email` only works if an email server is configured, see [Tests Feedback](#tests-feedback). |
| 5. | ETL Logging |<ul><li>[x] </li></ul>| [Logging usage example](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/src/mappings/mappingHandlers.ts#L151) | The [pino logger](https://www.npmjs.com/package/pino) is used for logging new blocks, `UrlRegisteredEvent` events, errors and db initiate events. The JavaScript-native `console.log` can't be used because it's a sandboxed environment. |
| 6. | Configuration |<ul><li>[x] </li></ul>| [docker-compose.yml file](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/docker-compose.yml), [project.yaml](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/project.yaml), [README](https://github.com/randombishop/wika_etl/tree/6bd9733c4885b2531031a2379a02cb3f0af292da#configuration-options) | The connection between subql and db containers is configured in the `docker-compose.yml` file. Subql itself is configured in the `project.yaml` file. Configuration options are described in the [README](https://github.com/randombishop/wika_etl/tree/6bd9733c4885b2531031a2379a02cb3f0af292da#configuration-options). |
| 7. | Example clients |<ul><li>[x] </li></ul>| [Elastic Search example client](https://es-test.wika.network/), [Neo4J example client](http://neo4j-test.wika.network:7474/) | - |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

### Tests Feedback

- Tests for mapping handlers were added, test coverage is sufficient now
- Tests pass now, with the exception for the `PluginEmails` tests in the case that no emailserver is configured since there is no easy way to [automate them](https://github.com/w3f/Grant-Milestone-Delivery/pull/365#issuecomment-1060022626)
- Test output:

```bash
$ docker exec -it subql_wika_subquery-node_1 sh
/ # cd app
/app # yarn test
yarn run v1.22.15
$ mocha dist/tests --timeout 5000 --exit 
(node:66) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
(Use `node --trace-deprecation ...` to show where the warning was created)


  PluginElasticSearch
    URL CRUD
      deleteUrl
        ✔ should delete a URL node if it exists
      postUrl
        ✔ should create a new URL doc (83ms)
      getUrl
        ✔ should fetch the URL doc we just created
      postUrl
        ✔ should update the doc

  PluginEmails
PluginEmails is disabled
    ✔ should send a test email if enabled

  handleLikeEvent
handleLikeEvent : 123/5 : aaaaaaaaaaaaaaa : https://www.wika.network/: 1
postgres is disabled
(node:66) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
postgres is disabled
    ✔ should process the like event with no errors and increment the number of likes (1446ms)

  handleUrlRegisteredEvent
handleUrlRegisteredEvent : 1/0b616d66133e1e57e216fa16ab5b6847 : aaaaaaaaaaaaaaa : https://www.wika.network/
postgres is disabled
postgres is disabled
    ✔ should process the event with no errors and save the ownership (130ms)

  fetchMetadata
    for valid urls
      ✔ should work for https://www.wika.network/
      ✔ should work for https://github.com/randombishop/wika_etl (436ms)
    for invalid urls
      ✔ should return null

  PluginNeo4j
    URL CRUD
      deleteUrl
        ✔ should delete a URL node if it exists (46ms)
      createUrl
        ✔ should create a new URL node
      fetchUrl
        ✔ should fetch the URL node we just created
      updateUrl
        ✔ should update the URL and add to numLikes (47ms)
    USER CRUD
      deleteUser
        ✔ should delete a User node if it exists
      createUser
        ✔ should create a new User node
      fetchUser
        ✔ should fetch the User node we just created
      updateUser
        ✔ should update the User and add to numLikes
    LIKES CRUD
      deleteLIKES
        ✔ should delete a LIKE relation if it exists
      createLIKES
        ✔ should create a new LIKE relation
      fetchLIKES
        ✔ should fetch the LIKE relation we just created
      updateLIKES
        ✔ should update the LIKES relation and add to numLikes
    delete Users and Urls
      ✔ should delete testUser2
      ✔ should delete testUser3
      ✔ should delete testUser4
      ✔ should delete testUrl2
      ✔ should delete testUrl3
      ✔ should delete testUrl4
    OWNS CRUD
      deleteOWNS
        ✔ should delete a OWNS relation if it exists
      createOWNS
        ✔ should create a new OWNS relation
      fetchOWNS
        ✔ should fetch the OWNS relation we just created
    handleLikeEvent
      ✔ should create a LIKES relation for new user and new url
      ✔ should create a LIKES relation for new user and existing url
      ✔ should create a LIKES relation for existing user and new url
      ✔ should create a LIKES relation for existing user and existing url
      ✔ should update an existing LIKES relation
    handleUrlRegisteredEvent
      ✔ should create a OWNS relation for new user and new url
      ✔ should create a OWNS relation for an existing user and existing url
    dispose
      ✔ should close the driver


  39 passing (3s)

Done in 3.07s.
```