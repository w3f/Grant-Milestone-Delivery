# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/PrivaDEX_aggregator.md
* **Milestone Number:** 1

**Context**
Network graph generator API: This component scrapes DEX state on Moonbeam and Astar, and combines it with bridge metadata (e.g. asset XCM definitions, HRMP channels) to generate a network graph.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/kapilsinha/privadex/blob/milestone_submission_1_2/LICENSE | I have opted for SSPL instead of GPLv3 to explicitly define conditions for SaaS that use this component. Please see https://www.mongodb.com/licensing/server-side-public-license/faq. |
| 0b. | Documentation | https://github.com/kapilsinha/privadex/blob/milestone_submission_1_2/README.md | Please see the README files in the subfolders for added details.
| 0c. | Testing and Testing Guide | 1. https://github.com/kapilsinha/privadex/blob/milestone_submission_1_2/dex_aggregator/common/README.md#docker-testing-guide <br>2. https://github.com/kapilsinha/privadex/blob/milestone_submission_1_2/dex_aggregator/chain_metadata/README.md#docker-testing-guide <br>3. https://github.com/kapilsinha/privadex/blob/milestone_submission_1_2/dex_aggregator/routing/README.md#docker-testing-guide |
| 0d. | Docker | https://github.com/kapilsinha/privadex/blob/milestone_submission_1_2/Dockerfile | The Dockerfile can be used to create the Docker container and launch a bash shell inside, from which you can run unit tests, integration tests, and examples. Please see the above testing guides for details.
| 1-3. | Price feed for ArthSwap, StellaSwap, BeamSwap | https://github.com/kapilsinha/privadex/tree/milestone_submission_1_2/dex_indexer | Please see https://github.com/kapilsinha/privadex/tree/milestone_submission_1_2/dex_indexer#setup for details on how to set up the price feed for a certain parachain.
| 4. | Rust GraphQL client | https://github.com/kapilsinha/privadex/blob/milestone_submission_1_2/dex_aggregator/routing/src/graphql_client.rs |
| 5. | Chain metadata store | https://github.com/kapilsinha/privadex/tree/milestone_submission_1_2/dex_aggregator/chain_metadata |
| 6. | Graph library | https://github.com/kapilsinha/privadex/tree/milestone_submission_1_2/dex_aggregator/routing/src/graph |
| 7. | Network graph construction | https://github.com/kapilsinha/privadex/blob/milestone_submission_1_2/dex_aggregator/routing/src/graph_builder.rs |
