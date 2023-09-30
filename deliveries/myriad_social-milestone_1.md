
# Milestone Delivery :mailbox:


**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/myriad_social.md



* **Milestone Number: 1** 

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.
## Summary of Deliverables for Myriad Social's Polkadot Grant

### 0a. License
Our project is released under the GPL 3.0 License, ensuring it's open-source and fostering a community-driven approach.

### 0b. Documentation
We've included a comprehensive [documentation](https://github.com/myriadsocial/myriad-node-parachain#migrating-octopus-appchain-to-rococo-parachain) in the README file on our GitHub repo. This serves as a guide for the entire project.

### 0c. Testing and Testing Guide
We've prepared a [Testing Guide](https://github.com/myriadsocial/myriad-node-parachain#guide-to-testing-the-project-using-docker). This guide, also found in the README, outlines how to test the project using Docker. 

### 0d. Docker
For ease of testing, we have a [Dockerfile](https://github.com/myriadsocial/myriad-node-parachain/blob/main/Dockerfile) ready to make the setup as smooth as possible. This [Dockerfile](https://github.com/myriadsocial/myriad-node-parachain/blob/main/Dockerfile) includes a sequence of pivotal steps. First, we handle the `Infrastructure Setup` by replicating Myriad Social's current appchain from the Octopus Network onto Polkadot's Rococo as a parachain. Next, we dive into `Code Refactoring` to ensure our modules interact seamlessly, maintaining the original functionalities of Myriad Social. Finally, we round it off with a `Data Upgrade`, transferring all existing data to the Polkadot ecosystem. 


**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |GPL 3.0| | 
| 0b.  | Documentation | https://github.com/myriadsocial/myriad-node-parachain#migrating-octopus-appchain-to-rococo-parachain []() | Documentation is inside the readme file | 
| 0c.  | Testing and Testing Guide | https://github.com/myriadsocial/myriad-node-parachain#guide-to-testing-the-project-using-docker []() | Testing guide is inside readme file | 
| 0d.  | Docker | https://github.com/myriadsocial/myriad-node-parachain/blob/main/Dockerfile []() | | 
| 1.  | Infrastructure Setup | https://github.com/myriadsocial/myriad-infrastructure []() | We have fully replicated the current appchain of the Myriad Social (on https://app.testnet.myriad.social ) web application running on Octopus Network onto the Polkadot ecosystem as a parachain in Rococo| 
| 2.  | Code Refactoring | https://github.com/myriadsocial/myriad-web []() |The modules we implement during this milestone interact in such a way that the Myriad Social website works with the same functionality as the current one that lives as an appchain on Octopus Network| 
| 3.  | Data Upgrade | https://github.com/myriadsocial/myriad-scripts []() | We will fully upgrade the existing data from the Myriad Social web application running on Octopus Network to Polkadot ecosystem| 

**Additional Information**
We are excited to share this delivery document with you to confirm the successful completion of all deliverable items from our initial application, well within the scheduled timeframe. As we work diligently to enhance this document, we remain committed to addressing any outstanding issues, as outlined in detail here: https://github.com/w3f/Grants-Program/pull/1795#issuecomment-1741638957. Your continued support is greatly appreciated as we strive for excellence in our project.
