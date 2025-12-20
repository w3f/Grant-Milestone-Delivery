# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [QueryWeb3](https://github.com/w3f/Grants-Program/blob/master/applications/queryWeb3.md)  
* **Milestone Number:** 1

**Deliverables**

| Number | Deliverable | Link | Notes |
| :---- | :---- | :---- | :---- |
| 0a. | License | [Apache 2.0](https://github.com/Query-Web3/database/blob/main/Apache%20License%202.0) | Apache License 2.0 |
| 0b. | Documentation | [Milestone 1 Documentation](https://github.com/Query-Web3/backend/blob/main/hacks/quick-start.md)  | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| 0c. | Testing and Testing Guide | [Test guide link](https://github.com/Query-Web3/database/blob/main/README_test.md) | Testing and Testing Guide |
| 0d. | Docker | [DEFI indexer DockerFile](https://github.com/Query-Web3/database/blob/main/Dockerfile) [Data backend DockerFile](https://github.com/Query-Web3/backend/blob/main/Dockerfile) | We will provide a Dockerfile(s) that can be |
| 0e. | Article | [Polkadot community link](https://forum.polkadot.network/t/the-value-discovery-engine-of-polkadot-queryweb3/16400) [Medium link](https://medium.com/@queryweb3/queryweb3-the-data-infrastructure-designed-for-polkadot-investment-decisions-b016aa7ad995) | We will be publishing an article on the Polkadot community, AIweb3 community, as well as on X and Telegram to update everyone on our progress and work. |
| 1\. | DEFI indexer | [Code Link](https://github.com/Query-Web3/database) | Responsible for ETL (Extract, Transform, Load) tasks, parsing and storing relevant data according to the operational rules of each DEX or DEFI product on each blockchain (starting with Bifrost, Acala, Hydration, Moonbeam, and adding more chains later). |
| 2\. | Facts table and dimensions table. | [Link](https://github.com/Query-Web3/database/blob/main/DatabaseTableReadme.md) | Based on BI data, establish DEFI data fact tables and dimension tables. |
| 3\. | Data backend. | [Code Link](https://github.com/Query-Web3/backend) | Build a data backend based on MySQL, GraphQL, and FastAPI to provide external data APIs. |

