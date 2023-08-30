# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  



* **Application Document:** [Societal SaaS Application](https://github.com/w3f/Grants-Program/blob/master/applications/societal_saas_pricing.md) 
* **Milestone Number:** 3



## Deliverables


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m3/LICENSE)| Apache 2.0 license included. |
| 0b. | Documentation |[GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m3/README.md) | Readme document contains instructions on how to run the node. All unit test have been included in the submission and can be run using: `cargo test` . Link to test command in [docs](https://github.com/sctllabs/societal-node/blob/grant3_m3#unit-test). You may also use the Testing Guide below for instructions to run the node. |
| 0c. | Testing Guide |[GitHub repo link](https://github.com/sctllabs/societal-node/blob/grant3_m3/docs/PaymentTestingGuide.md)| Guide on how to test Recurring Payment for DAO Subscription using Polkadot-JS front-end. |
| 0d. | Docker |[Docker Image](https://hub.docker.com/layers/societal/societal-node/grant3_m3-latest/images/sha256-c17b20e56572e3d68102fec147e6e1427e8b174c791584d98bec338480a7b0f2?context=explore)| Dockerfile found at Societal's docker hub. The tag information is as follows: **docker pull societal/societal-node:grant3_m3-latest**. Please refer to the [Run in Docker](https://github.com/sctllabs/societal-node/blob/grant3_m3#run-rococo-local-testnet) section of the README to run with the **grant3_m3-latest** tag specified. |
| 0e. | Article |[Article Link](https://medium.com/@societal.xyz/societals-third-web3-foundation-grant-56b80c3b2cc6)| The published medium article outlining Societal's SaaS pricing grant can be found at the link provided. |
| 1. | Substrate Module: DAO Factory Pallet |[GitHub repo link](https://github.com/sctllabs/societal-node/tree/grant3_m3/pallets/dao-subscription) | Recurring Payment for DAO Subscription is now can be added via governance(council/democracy) proposals. Schedule of the payment depends on the Subscription Tier selected for the DAO. DAO can opt out of the recurring payment by cancelling it via proposal as well. This way the DAO subscription as well as all DAO functions will be disabled when expired. |
| 2. | Client Modules | [Polkadot-JS](https://cloudflare-ipfs.com/ipns/dotapps.io/?rpc=ws://localhost:9954) | You can use Polkadot-JS to interact with the DAO pallets and follow the [Testing Article](https://github.com/sctllabs/societal-node/blob/grant3_m3/docs/PaymentTestingGuide.md) on how to work with the custom traits of the Subscription Pallet and DAO functionality.  |
