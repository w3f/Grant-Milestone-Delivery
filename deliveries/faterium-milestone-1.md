# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/faterium.md
* **Milestone Number:** 1

**Context**

The main goal of the `Milestone 1` was to create base functionality of Faterium Polls. We created Substrate Node that contains Pallet Assets (for creating assets), Pallet Scheduler (for scheduling polls endings), and main Pallet Faterium Polls.

To minimize storage on chain - we created a Golang server that embedded IPFS node and PocketBase, to create the best User Experience and make it possible to store big media files as IPFS CID in database. To make it simple and straightforward to test - we launched a test Substrate Network on our servers, created simple interface pages for creating Polls, and voting on them (with help of polkadot{.js} extension).

In the next `Milestone 2` - we will create all remaining pages, improve UI, and add community management logic.

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| 0a. | License | https://github.com/faterium/faterium-node/blob/v0.1.1/LICENSE https://github.com/faterium/faterium-server/blob/v0.1.1/LICENSE https://github.com/faterium/faterium-dapp/blob/v0.1.1/LICENSE | Apache License 2.0 |
| 0b. | Documentation | https://github.com/faterium/faterium-node/tree/v0.1.1/pallets/faterium-polls | [faterium-node/README](https://github.com/faterium/faterium-node/tree/v0.1.1/pallets/faterium-polls), [faterium-node/lib.rs](https://github.com/faterium/faterium-node/blob/v0.1.1/pallets/faterium-polls/src/lib.rs), [faterium-server/README](https://github.com/faterium/faterium-server/tree/v0.1.1/), [faterium-dapp/README](https://github.com/faterium/faterium-dapp/tree/v0.1.1/) |
| 0c. | Testing Guide | https://github.com/faterium/faterium-node/tree/v0.1.1/#test | Documentation on how to run Substrate tests for Faterium Node. |
| 0d. | Docker | [Faterium Node Dockerfile](https://github.com/faterium/faterium-node/blob/v0.1.1/.github/docker/Dockerfile), [Faterium Server Dockerfile](https://github.com/faterium/faterium-server/blob/v0.1.1/Dockerfile), [Local Services docker-compose](https://github.com/faterium/faterium-server/blob/v0.1.1/infra/local/docker-compose.yml), [Testnet Server docker-compose](https://github.com/faterium/faterium-server/blob/v0.1.1/infra/testnet/docker-compose.yml) | Dockerfiles for server and node, docker-compose file for server that launches all services: proxy, polkadot-apps, faterium-server, faterium-node. |
| 1. | Crowdfunding Polls Pallet | https://github.com/faterium/faterium-node/tree/v0.1.1/pallets/faterium-polls | We created Faterium Polls pallet with detailed documentation, full test coverage, and all necessary logic. |
| 2. | Configure Substrate Node | https://github.com/faterium/faterium-node/tree/v0.1.1/ | We created Faterium Node with help of Substrate, Assets pallet, Scheduler pallet, and Faterium Polls pallet. |
| 3. | Faterium Server with PocketBase and IPFS | https://github.com/faterium/faterium-server/tree/v0.1.1/ | We created Faterium Server with Golang, an IPFS node embedded in server, and PocketBase. Also, server auto-imports collections - so developer shouldn't load or create them manually. |
| 4. | Launch testnet Substrate network on the server | https://dapp.faterium.com https://dapp-api.faterium.com/_/ https://dapp-api.faterium.com/ipfs/QmRcjJeqra35prAKsdUi1JU7ikPtJ6V477Eg8w4hxtmgEi https://dapp-apps.faterium.com/ wss://dapp-node.faterium.com/ | We launched all created services on our private server, including: proxy, polkadot-apps, faterium-server, faterium-node. |
| 5. | Pages for creating Polls and voting on it | https://dapp.faterium.com https://dapp.faterium.com/create-poll | We launched all created services on our private server, including: proxy, polkadot-apps, faterium-server, faterium-node. |
