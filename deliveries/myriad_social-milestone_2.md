
# Milestone Delivery :mailbox:


**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/myriad_social.md



* **Milestone Number: 2** 

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.
## Summary of Deliverables for Myriad Social's Polkadot Grant

### 0a. License
Our project is released under the GPL 3.0 License, ensuring it's open-source and fostering a community-driven approach.

### 0b. Documentation
We've included a comprehensive [documentation](https://github.com/myriadsocial/myriad-web/blob/main/docs/milestone-2-documentation.md) in the README file on our GitHub repo. This serves as a guide for the entire project.

### 0c. Testing and Testing Guide
We've prepared a [Testing Guide](https://github.com/myriadsocial/myriad-web/blob/main/docs/milestone-2-testing-guide.md). This guide, also found in the README, outlines how to test the project using Docker. 

### 0d. Docker
For ease of testing, we have a [Dockerfile](https://github.com/myriadsocial/myriad-node-parachain/blob/main/Dockerfile) ready to make the setup as smooth as possible.


**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally, all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1.  | Deployment of MYRIAr devnet on Myriad Server | https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws-rpc.devnet.myriad.social%2Fwebsocket%2F#/explorer | We have successfully launched a development network by creating a replica of the current Rococo testnet environment, mirroring the Parachain of the Myriad Social application. | 
| 2.  | Enable Exclusive Content on Rococo | https://github.com/myriadsocial/myriad-web | We have enabled the exclusive content feature using MYRIAr on Rococo Network for the Myriad testnet application. ![Enable Exclusive Content on Rococo](https://raw.githubusercontent.com/myriadsocial/myriad-web/main/docs/exclusive-content-escrow.png "Enable Exclusive Content on Rococo") This allows creators to monetize their content directly within the platform via the Rococo Testnet. | 
| 3.  | Enable Escrow Tipping on Rococo Network | https://github.com/myriadsocial/myriad-web | We have enabled the ability to tip with MYRIAr to other users on Rococo Network. ![Enable Escrow Tipping on Rococo Network](https://raw.githubusercontent.com/myriadsocial/myriad-web/main/docs/send-tip-myriar.png "Enable Escrow Tipping on Rococo Network") If the recipient user has no wallet connected with their account, the tipped currency will be stored in an escrow account and retrieved by the recipient once they have connected it. This ensures that tips are recovered and incentivizes users to use the wallet feature. | 
| 4.  | Wallet Integration | https://github.com/myriadsocial/myriad-web | ![Wallet Integration](https://raw.githubusercontent.com/myriadsocial/myriad-web/main/docs/wallet-integration-selection.png "Wallet Integration") Seamlessly switch and manage your assets across multiple blockchains. ![Wallet Integration 2](https://raw.githubusercontent.com/myriadsocial/myriad-web/main/docs/wallet-integration-selection-2.png "Wallet Integration 2") Our platform now supports diverse networks, including Myriad Rococo, Myriad Octopus, Debio, Kusama, and NEAR, creating a multi-chain wallet experience. |

**Additional Information**
We are excited to share this delivery document with you to confirm the successful completion of all deliverable items from our initial application, well within the scheduled time frame.

As we work diligently to enhance this document, we remain committed to addressing any outstanding issues, as outlined in detail here: https://github.com/w3f/Grants-Program/pull/1795#issuecomment-1741638957. Your continued support is greatly appreciated as we strive for excellence in our project.







