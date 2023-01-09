# Milestone Delivery

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_explorer.md
* **Milestone Number:** 1

**Context**

In this milestone we are delivering an MVP for a Substrate explorer that focuses on supporting the display of WASM contracts on any chain that implements the contracts pallet. We provide both the source code with published docker images to run your own explorer and also a public running instance for Rococo-Contracts chain.

The source code consists of two parts:
- **Explorer UI:** The explorer UI provides a user-friendly application to interact with the Squid Ink GraphQL API.
- **Squid-ink:** The Squid transforms data from a [Squid Archive](https://docs.subsquid.io/docs/archives/how-to-launch-a-squid-archive), stores it and exposes a GraphQL API for the UI.

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/web3labs/epirus-substrate/blob/main/LICENSE | | 
| 0b. | Documentation | https://github.com/web3labs/epirus-substrate/blob/main/README.md | The project README contains or points to all the information needed for development, deployment and testing. |
| 0c. | Testing Guide | https://github.com/web3labs/epirus-substrate/blob/main/explorer-ui/README.md#testing https://github.com/web3labs/epirus-substrate/blob/main/squid-ink/README.md#testing| Instructions to run tests for Explorer UI and Squid Ink respectively. | 
| 0d. | Docker | ghcr.io/web3labs/squid-ink-epirus:latest ghcr.io/web3labs/epirus-substrate-ui:latest | Docker images to run Squid Ink and Explorer UI |
| 1a. | Explorer UI | https://github.com/web3labs/epirus-substrate/tree/main/explorer-ui | Explorer user interface source code. |
| 1b. | Explorer API | https://suba.epirus.io/squid/graphql | The GraphQL API endoint for the Rococo-contracts explorer. |
| 1c. | Substrate Indexer + Base Processors | https://suba.epirus.io/archive/ | GraphQL endpoint for Rococo-contracts Squid archive, which we are running. Instructions on how to run a local archive is highlighted in the [squid-ink README.md](https://github.com/web3labs/epirus-substrate/blob/main/squid-ink/README.md#squid-archive) |
| 1d. | Accounts Module + Contracts Module | https://github.com/web3labs/epirus-substrate/tree/main/squid-ink | Source code for our squid that transforms the data from the indexer in 1c. to our GraphQL schema to be consumed by the explorer UI. |
| 2. | Public explorer instance | https://epirus-sub.netlify.app/ | Explorer instance for Rococo-contracts. |

