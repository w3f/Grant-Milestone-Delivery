# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/116
* **Milestone Number:** Milestone 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |https://github.com/Apron-Network/apron-node/blob/main/LICENSE| The Apache 2.0 License is located in the Apron Node repo. For most of the other repos are using the same license. |
| 0b. | Documentation |https://raw.githubusercontent.com/Apron-Network/materials/main/docs/Whitepaper%20.pdf| We put everything in this white paper. |
| 0c. | Testing Guide |https://github.com/Apron-Network/materials/blob/main/tutorials/DemoTutorial.md| This doc represents the steps of how to setup with docker image and contracts. |
| 1. | Apron Node Repo |https://github.com/Apron-Network/apron-node| This is the blockchain node for Apron Network, currently the consensus is default. OCW and Ink pallets are enable. |
| 2. | Apron Market Contracts Repo |https://github.com/Apron-Network/apron-contracts| This repo contains all the ink! contracts needed for Apron Network. |
| 3. | Decentralized API Market / Front End Repo | https://github.com/Apron-Network/apron-marketplace-demo | The marketplace frontend. We also tried to setup the test environment with Huobi Eco Chain and Binanace Chain, and here is the link https://github.com/Apron-Network/dashboard-static, online version https://dashboard.apron.network |
| 4. | Docker |https://github.com/Apron-Network/apron-node/tree/master/scripts| The **Dockerfile** is located in node folder. And [this](https://drive.google.com/drive/folders/1W9X3BAYs9mU2VuBsnPd2axxRtPkXS9co?usp=sharing) is the docker image containing everything. Here is the instructions to build and use it. https://github.com/Apron-Network/materials/blob/main/tutorials/DemoTutorial.md |
| 5. | Tutorial |https://github.com/Apron-Network/materials/blob/main/tutorials/DemoTutorial.md| This tutorial is about how to use our demo service for users. |
| 6. | Article |https://apron-network.medium.com/how-does-apron-network-avoid-the-limitations-of-a-centralized-node-service-provider-3658034de361     https://apron-network.medium.com/meet-apron-in-the-web-3-0-99973791ccaa     https://apron-network.medium.com/blockchain-middleware-the-http-of-the-web-3-0-age-5cc80b0952d0| We have published several articles for the Apron Network on different medias. |
| 7. | DAO |https://app.daohaus.club/dao/0x1/0xf6aa3d578eca4821beb07a38a08031dd44f8c795| We have just created a DAO for the Apron Network with DAO Haus. |
| Extra 8. | Apron Gateway |https://github.com/Apron-Network/apron_gateway| It's golang version of Apron Gateway to provide services. It's should be integrated with Apron Node, but we are still not so familiar with Rust at current state and facing the issue of unstable Substrate Framework. We have tried and put lots of efforts on it, but cannot make big progress. So we  choose the fallback solution of using Golang to implement it temparally. The Apron Gateway will implemented again as a Substrate pallet when Substrate Framework is stable. |
