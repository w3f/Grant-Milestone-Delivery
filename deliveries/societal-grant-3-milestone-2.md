# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  



* **Application Document:** [Societal SaaS Application](https://github.com/w3f/Grants-Program/blob/master/applications/societal_saas_pricing.md) 
* **Milestone Number:** 2



## Deliverables


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m2/LICENSE)| Apache 2.0 license included. |
| 0b. | Documentation |[GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m2/README.md) | Readme document contains instructions on how to run the node. All unit test have been included in the submission and can be run using: `cargo test` . Link to test command in [docs](https://github.com/sctllabs/societal-node/blob/grant3_m2#unit-test). You may also use the Testing Guide below for instructions to run the node. |
| 0c. | Testing Guide |[GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m2/docs/TiersTestingGuide.md)| Guide on how to test DAO Subscription Tiers using Polkadot-JS front-end. |
| 0d. | Docker |[Docker Image](https://hub.docker.com/layers/societal/societal-node/grant3_m2-latest/images/sha256-c17b20e56572e3d68102fec147e6e1427e8b174c791584d98bec338480a7b0f2?context=explore)| Dockerfile found at Societal's docker hub. The tag information is as follows: **docker pull societal/societal-node:grant3_m2-latest**. Please refer to the [Run in Docker](https://github.com/sctllabs/societal-node/blob/grant3_m2#run-in-docker) section of the README to run with the **grant3_m2-latest** tag specified. |
| 1. | Substrate Module: DAO Subscription Pallet |[GitHub repo link](https://github.com/sctllabs/societal-node/tree/grant3_m2/pallets/dao-subscription) | Support for different subscription tiers has been added to the substrate subscription pallet that was created in the M1 of this grant. Based on what subcription tier the DAO is paying for, only those functions will be allowed to be called by the DAO and its members as well as the maximum amount of members allowed in the DAO itself. |
| 2. | Client Modules | [Polkadot-JS](https://cloudflare-ipfs.com/ipns/dotapps.io/?rpc=ws://localhost:9944) | You can use Polkadot-JS to interact with the DAO pallets and follow the [Testing Article](https://github.com/sctllabs/societal-node/blob/grant3_m2/docs/TiersTestingGuide.md) on how to work with the custom traits of the Subscription Pallet and DAO functionality.  |
