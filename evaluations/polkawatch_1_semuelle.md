# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Polkawatch.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/969d022cf6226a180edb9d33bafc0a77237f2e46/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [Readme.md](https://gitlab.com/polkawatch/polkawatch/-/tree/969d022cf6226a180edb9d33bafc0a77237f2e46) | Multiple Readme.md files across the repository context-linked. In-line code Documentation. |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [Readme.md](https://gitlab.com/polkawatch/polkawatch/-/tree/969d022cf6226a180edb9d33bafc0a77237f2e46#testing-guide) | Included as part of Documentation covers unit testing, integration (e2e) testing, and test deployment of the system. |
| 0d. | Docker | <ul><li>[ ] </li></ul> | [docker-compose.yml](https://gitlab.com/polkawatch/polkawatch/-/blob/969d022cf6226a180edb9d33bafc0a77237f2e46/docker-compose.yml) | Docker Compose for development and testing (with multiple profiles) and Docker Compose for deployment using Gitlab Pipeline deliverables. |
| 1. | Indexer Extension | <ul><li>[ ] </li></ul> | [packages/indexer](https://gitlab.com/polkawatch/polkawatch/-/tree/b495feca9e1a0c8afa14724346a1fcbaaec4f657/packages/indexer) | The Indexer extends the archive (subquery) engine by means of a 2nd-pass indexing that builds the inverted index (elasticsearch). Builds the traces and logs/labels data quality issues. |
| 2. | Live Query Server | <ul><li>[ ] </li></ul> | [packages/lqs](https://gitlab.com/polkawatch/polkawatch/-/tree/9583321456e4cae382fb406fa250c121fd0c084f/packages/lqs) | LQS Node Module that provides a programatic interface to the indexer. Adding new queries has been simplified as much as possible, Documentation on extending with additional queries is provided. Multiple instances of queries are also provided. |
| 3. | Gitlab Pipelines | <ul><li>[ ] </li></ul> | [.gitlab-ci.yml](https://gitlab.com/polkawatch/polkawatch/-/blob/cf2bd5038eedc2035afdd892e10a4a583dfeb0d8/.gitlab-ci.yml) | [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/main/.gitlab-ci.yml) | A Gitlab pipeline runs Unit tests on every commit or PR. Additionally a docker image release can be triggered, conversioning and upload to docker hub is automated too. |
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
