# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/77. 
* **Milestone Number:** 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.



| **Number** | **Deliverable**                          | Link                                                         | Notes                                                        |
| ---------- | ---------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 0a.        | License                                  | https://github.com/Kylin-Network/kylin-node/blob/main/LICENSE | Apache License 2.0                                           |
| 0b.        | Documentation                            | https://github.com/Kylin-Network/documents/blob/main/How-does-Kylin-Network-work-with-Substrate.md | Includes the describion of how it works.                     |
| 0c.        | Testing Guide                            | https://github.com/Kylin-Network/documents/blob/main/Kylin-Network-Demo-Tutorial.md | The instruction of using docker image can be find in https://github.com/Kylin-Network/documents/blob/main/Kylin-Network-Docker-Demo-Tutorial.md |
| 1.         | Kylin Network Oracle Node Module Repo    | https://github.com/Kylin-Network/kylin-node                  |                                                              |
| 2.         | Kylin Network Data Feeding/Miner Repo    | https://github.com/Kylin-Network/kylin-ocw-module            |                                                              |
| 3.         | Kylin Network Datasource Sample Repo     | https://github.com/Kylin-Network/sample-data-fetcher         | The originla idea is using Python or NodeJS to implement such component, but Rust is used at the end. The Python/NodeJS version are still under construction. |
| 4.         | Kylin Network Data Analytics Sample Repo |                                                              | As we proceed, we change to use elk to collect and analytics data rather than implement a full data analytics solution at current stage, the advance data analytics will be planned in next phases. In this demo, we provide elk together with our docker image with compose file. The default customized dashboard is provide as in the final delivery. |
| 5.         | Docker Image                             | https://drive.google.com/drive/folders/1CtuRb16zX36ZafaAZt_CpQIuW8wKsbFG?usp=sharing | Download the latest image, and follow the instructions in  https://github.com/Kylin-Network/documents/blob/main/Kylin-Network-Demo-Tutorial.md.  Also, this docker image can be built manually according to the building instructions. Here is the instructions to build image https://github.com/Kylin-Network/documents/blob/main/Kylin-Network-Docker-Demo-Tutorial.md |
| 6.         | Kylin Market Frontend                    | https://github.com/Kylin-Network/kylin-market-frontend       | Extra repo which is the key for demonstration. This repo contains the front end for Kylin Market based on Polkadot JS App. |
