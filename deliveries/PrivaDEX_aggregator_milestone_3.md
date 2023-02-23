# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/PrivaDEX_aggregator.md
* **Milestone Number:** 3

**Context**
Executor: This component executes all swaps, XCM bridges, and balance/asset transfers from the 'execution plan' of the previous step. The end result is that the destination token arrives in the user's wallet on the destination chain.

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/kapilsinha/privadex/blob/milestone_submission_3/LICENSE | I have opted for SSPL instead of GPLv3 to explicitly define conditions for SaaS that use this component. Please see https://www.mongodb.com/licensing/server-side-public-license/faq. |
| 0b. | Documentation | https://github.com/kapilsinha/privadex/blob/milestone_submission_3/README.md | Please see the README files in the subfolders for added details.
| 0c. | Testing and Testing Guide | https://github.com/kapilsinha/privadex/blob/milestone_submission_3/dex_aggregator/executor/README.md#docker-testing-guide |
| 0d. | Docker | https://github.com/kapilsinha/privadex/blob/milestone_submission_3/Dockerfile | The Dockerfile can be used to create the Docker container and launch a bash shell inside, from which you can run unit tests and examples. Please see the above testing guides for details.
| 1. | Rust Ethereum interface utils | https://github.com/kapilsinha/privadex/tree/milestone_submission_3/dex_aggregator/executor/src/eth_utils |
| 2. | Rust Substrate interface utils | https://github.com/kapilsinha/privadex/tree/milestone_submission_3/dex_aggregator/executor/src/substrate_utils |
| 3. | Substrate extrinsic signature and construction utils | https://github.com/kapilsinha/privadex/blob/milestone_submission_3/dex_aggregator/executor/src/extrinsic_call_factory.rs , https://github.com/kapilsinha/privadex/blob/milestone_submission_3/dex_aggregator/executor/src/substrate_utils/extrinsic_sig_config.rs |
| 4. | Phat Contract controller/driver | https://github.com/kapilsinha/privadex/blob/milestone_submission_3/dex_aggregator/executor/src/lib.rs#L182 |
