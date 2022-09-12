# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_explorer.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** Link

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/web3labs/epirus-substrate/blob/main/LICENSE | Apache License 2.0 | 
| 0b. | Documentation |<ul><li>[x] </li></ul>| https://github.com/web3labs/epirus-substrate/blob/main/README.md | Excellent documentation |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| https://github.com/web3labs/epirus-substrate/blob/main/explorer-ui/README.md#testing https://github.com/web3labs/epirus-substrate/blob/main/squid-ink/README.md#testing| Great testing coverage overall, all tests pass. | 
| 0d. | Docker |<ul><li>[x] </li></ul>| ghcr.io/web3labs/squid-ink-epirus:latest ghcr.io/web3labs/epirus-substrate-ui:latest | Works. Setup documentation that uses these docker containers is also great. |
| 1a. | Explorer UI |<ul><li>[x] </li></ul>| https://github.com/web3labs/epirus-substrate/tree/main/explorer-ui |  |
| 1b. | Explorer API |<ul><li>[x] </li></ul>| https://suba.epirus.io/squid/graphql | A public GraphQL API endoint for the Rococo-contracts explore. |
| 1c. | Substrate Indexer + Base Processors |<ul><li>[x] </li></ul>| https://suba.epirus.io/archive/ | Substrate indexer implemented using a [Squid archive](https://github.com/web3labs/epirus-substrate/blob/main/squid-ink/README.md#squid-archive) |
| 1d. | Accounts Module + Contracts Module |<ul><li>[x] </li></ul>| https://github.com/web3labs/epirus-substrate/tree/main/squid-ink | Uses a subsquid.io Squids to transform the data from the indexer in 1c. to a GraphQL schema consumed by the explorer UI. |
| 2. | Public explorer instance |<ul><li>[x] </li></ul>| https://epirus-sub.netlify.app/ |  |



## General Notes

Excellent delivery, the code quality is great and no problems at all running or testing it. I look forward to seeing the features that will be built on top of this.

