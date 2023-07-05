# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  



* **Application Document:** [Societal Application](https://github.com/w3f/Grants-Program/blob/master/applications/societal_saas_pricing.md) 
* **Milestone Number:** 1



## Deliverables


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m1/LICENSE)| Apache 2.0 license included. |
| 0b. | Documentation |[GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m1/README.md) | Readme document contains instructions on how to run the node. All unit test have been included in the submission and can be run using: `cargo test` . Link to test command in [docs](https://github.com/sctllabs/societal-node/blob/grant3_m1#unit-test) |
| 0c. | Testing Guide |[GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m1/docs/SubscriptionTestingGuide.md)| Guide on how to test DAO Subscription Pallet using Polkadot-JS front-end. |
| 0d. | Docker |[Docker Image](https://hub.docker.com/layers/societal/societal-node/grant3_m1-latest/images/sha256-21719afd8ec6237ffa4b12303da79b67ed078d7d5b160ef0a19ba9e20a061516?context=explore)| Dockerfile found at Societal's docker hub. The tag information is as follows: **docker pull societal/societal-node:grant3_m1-latest**. Please refer to the [Run in Docker](https://github.com/sctllabs/societal-node/blob/grant3_m1#run-in-docker) section of the README to run with the **grant3_m1-latest** tag specified. |
| 1. | Substrate Module: DAO Subscription Pallet |[GitHub repo link](https://github.com/sctllabs/societal-node/tree/grant3_m1/pallets/dao-subscription) | The custom substrate subscription pallet will require a DAO to pay a monthly subscription. This will allow the organizations members to interact on-chain without paying gas fees.  |
| 2. | Client Modules | [Polkadot-JS](https://cloudflare-ipfs.com/ipns/dotapps.io/?rpc=ws://localhost:9944) | You can use Polkadot-JS to interact with the DAO pallets and follow the [Testing Article](https://github.com/sctllabs/societal-node/blob/grant3_m1/docs/SubscriptionTestingGuide.md) on how to work with the custom traits of the Subscription Pallet.  |
