# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/60099582c4d4a711c23a50c4c12cafb8eb444cf0/applications/wika_network.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [MIT License](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/LICENSE) | MIT License |
| 0b. | Documentation |<ul><li>[ ] </li></ul>| [README](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/README.md), [change log](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/template_change_log.md) | Github instructions (README & change log) are sufficient, however inline code comments can still be improved. Please consider adding detailed comments on the mapping handlers, the plugins and other core functions that anybody reusing your code may be interested to change. |
| 0c. | Testing Guide |<ul><li>[ ] </li></ul>| [Unit Tests](https://github.com/randombishop/wika_etl/tree/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/src/tests) | See [Tests Feedback](#tests-feedback) |
| 0d. | Docker |<ul><li>[x] </li></ul>| [docker-compose.yml file](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/docker-compose.yml) | Spins up containers using the following images: <ul><li>subql-node for listening to substrate chain data</li><li>subql-query for querying the persisted chain data</li><li>postgres, elasticsearch and neo4j for persisting the chain data</li><li>kibana, a web-based ui for accessing elasticsearch-persisted data</li></ul> |
| 0e. | Article |<ul><li>[x] </li></ul>| [Medium Article](https://wikanetwork.medium.com/the-wika-network-dataset-bbb936cb27c3) | Medium article explaining project structure, showing example queries for ES and Neo4J and containing deploy guide |
| 1. | ETL |<ul><li>[x] </li></ul>| [`startBlock` configuration](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/project.yaml#L13), [block listener config](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/project.yaml), [block listener](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/src/mappings/mappingHandlers.ts#L147) | Wika Network relies on the [subql-node docker image](https://hub.docker.com/layers/onfinality/subql-node/v0.27.2/images/sha256-737fcf1f89ce099545f80f69cd024e478bbecff96283a6cab35f6790394e3811?context=explore) for querying the substrate chain. |
| 2. | ETL Elastic Search |<ul><li>[x] </li></ul>| [Elastic Search Plugin](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/src/plugins/elastic_search.ts) | - |
| 3. | ETL Neo4J |<ul><li>[x] </li></ul>| [Neo4J Plugin](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/src/plugins/neo4j.ts) | - |
| 4. | ETL Error Recovery |<ul><li>[ ] </li></ul>| [Mail sending service](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/src/plugins/emails.ts), [Mail alert config](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/docker-compose.yml#L61-L65) | The spec `PluginEmails > should send a test email` is currently failing, see [Tests Feedback](#tests-feedback). |
| 5. | ETL Logging |<ul><li>[x] </li></ul>| [Logging usage example](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/src/mappings/mappingHandlers.ts#L151) | The [pino logger](https://www.npmjs.com/package/pino) is used for logging new blocks, `UrlRegisteredEvent` events, errors and db initiate events. The JavaScript-native `console.log` can't be used because it's a sandboxed environment. |
| 6. | Configuration |<ul><li>[ ] </li></ul>| [docker-compose.yml file](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/docker-compose.yml), [project.yaml](https://github.com/randombishop/wika_etl/blob/038978c07f297de6056c688dc00e688e4fb99a5c/subql_wika/project.yaml) | The connection between subql and db containers is configured in the `docker-compose.yml` file. Subql itself is configured in the `project.yaml` file. However, I didn't identify a way to change the config file using en environment variable (which was part of the milestone in the original grant application). |
| 7. | Example clients |<ul><li>[x] </li></ul>| [Elastic Search example client](https://es-test.wika.network/), [Neo4J example client](http://neo4j-test.wika.network:7474/) | - |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

### Mapping Handlers Feedback

- Currently, the `handleLikeEvent` and `handleUrlRegisteredEvent` seem to contain a lot of duplicated code. Consider extracting the common logic into (a) seperate function(s).
- Throughout the project there are some unused variables and imports. Consider using a linter to automatically identify this sort of problems and improve overall code quality, e.g. [TypeScript ESLint](https://typescript-eslint.io/).

### Tests Feedback

- I didn't find any tests for the mapping handlers which I'd consider to be core logic
- Currently, 6 of 37 tests fail:

```bash
# yarn test
yarn run v1.22.15
$ mocha dist/tests --timeout 5000
(node:596) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
(Use `node --trace-deprecation ...` to show where the warning was created)


  PluginElasticSearch
    URL CRUD
      deleteUrl
        1) should delete a URL node if it exists
      postUrl
        2) should create a new URL doc
      getUrl
        3) should fetch the URL doc we just created
      postUrl
        4) should update the doc

  PluginEmails
    5) should send a test email

  fetchMetadata
    for valid urls
(node:596) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
      ✔ should work for https://www.wika.network/ (63ms)
      6) should work for https://github.com/randombishop/wika_etl
    for invalid urls
      ✔ should return null

  PluginNeo4j
    URL CRUD
      deleteUrl
        ✔ should delete a URL node if it exists
      createUrl
        ✔ should create a new URL node
      fetchUrl
        ✔ should fetch the URL node we just created
      updateUrl
        ✔ should update the URL and add to numLikes
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


  31 passing (21s)
  6 failing

  1) PluginElasticSearch
       URL CRUD
         deleteUrl
           should delete a URL node if it exists:
     FetchError: request to http://es:9200/url/_doc/5ba534e2895f5119fc0bcab447a61104 failed, reason: getaddrinfo EAI_AGAIN es
      at ClientRequest.<anonymous> (node_modules/node-fetch/lib/index.js:1491:11)
      at ClientRequest.emit (node:events:390:28)
      at Socket.socketErrorListener (node:_http_client:447:9)
      at Socket.emit (node:events:390:28)
      at emitErrorNT (node:internal/streams/destroy:157:8)
      at emitErrorCloseNT (node:internal/streams/destroy:122:3)
      at processTicksAndRejections (node:internal/process/task_queues:83:21)

  2) PluginElasticSearch
       URL CRUD
         postUrl
           should create a new URL doc:
     Error: Timeout of 5000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (/app/dist/tests/tests_elastic.js)
      at listOnTimeout (node:internal/timers:557:17)
      at processTimers (node:internal/timers:500:7)

  3) PluginElasticSearch
       URL CRUD
         getUrl
           should fetch the URL doc we just created:
     Error: Timeout of 5000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (/app/dist/tests/tests_elastic.js)
      at listOnTimeout (node:internal/timers:557:17)
      at processTimers (node:internal/timers:500:7)

  4) PluginElasticSearch
       URL CRUD
         postUrl
           should update the doc:
     FetchError: request to http://es:9200/url/_doc/5ba534e2895f5119fc0bcab447a61104 failed, reason: getaddrinfo EAI_AGAIN es
      at ClientRequest.<anonymous> (node_modules/node-fetch/lib/index.js:1491:11)
      at ClientRequest.emit (node:events:390:28)
      at Socket.socketErrorListener (node:_http_client:447:9)
      at Socket.emit (node:events:390:28)
      at emitErrorNT (node:internal/streams/destroy:157:8)
      at emitErrorCloseNT (node:internal/streams/destroy:122:3)
      at processTicksAndRejections (node:internal/process/task_queues:83:21)

  5) PluginEmails
       should send a test email:
     TypeError: Only absolute URLs are supported
      at getNodeRequestOptions (node_modules/node-fetch/lib/index.js:1327:9)
      at /app/node_modules/node-fetch/lib/index.js:1440:19
      at new Promise (<anonymous>)
      at fetch (node_modules/node-fetch/lib/index.js:1437:9)
      at PluginEmails.sendError (dist/plugins/emails.js:35:57)
      at Context.<anonymous> (dist/tests/tests_emails.js:8:22)
      at processImmediate (node:internal/timers:464:21)

  6) fetchMetadata
       for valid urls
         should work for https://github.com/randombishop/wika_etl:

      AssertionError: expected 'https://opengraph.githubassets.com/4c96abea53e105751300eab9412a10d78636768326ffe58418e6dfc5667ec15b/randombishop/wika_etl' to equal 'https://opengraph.githubassets.com/1eb16d9d35b2a179a6b0c41c4fc97356852d3457a40196d1bf73dabc1717d5d8/randombishop/wika_etl'
      + expected - actual

      -https://opengraph.githubassets.com/4c96abea53e105751300eab9412a10d78636768326ffe58418e6dfc5667ec15b/randombishop/wika_etl
      +https://opengraph.githubassets.com/1eb16d9d35b2a179a6b0c41c4fc97356852d3457a40196d1bf73dabc1717d5d8/randombishop/wika_etl
      
      at Context.<anonymous> (dist/tests/tests_metadata.js:33:51)
      at processTicksAndRejections (node:internal/process/task_queues:96:5)



error Command failed with exit code 6.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```