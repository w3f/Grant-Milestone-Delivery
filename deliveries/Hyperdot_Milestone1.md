# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Hyperdot.md](https://github.com/w3f/Grants-Program/blob/master/applications/Hyperdot.md)
* **Milestone Number:** 1

**Context** 
Hyperdot-node is a part of the Hyperdot project. It integrates the public data warehouse for Polkadot using Google BigQuery provided by [substrate-etl](https://github.com/colorfulnotion/substrate-etl). Hyperdot-node serves as the API provider for Hyperdot and orchestrates the underlying infrastructure.

Hyperdot-node can:

- Provide the necessary API for Hyperdot's frontend.
- Handle the orchestration and management of the foundational infrastructure, including databases, caching, and object storage.
- Integrate the Google BigQuery public data warehouse for Polkadot using substrate-etl.
- Allow querying and chart creation through SQL.
- Enable sharing of charts and dashboards.

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License |[LICENSE](https://github.com/Infra3-Network/hyperdot-node/blob/master/LICENSE)| Licensed under Apache 2.0 |
| **0b.** | Documentation |[README](https://github.com/Infra3-Network/hyperdot-node/blob/master/README.md), [README Zh-CN](https://github.com/Infra3-Network/hyperdot-node/blob/master/README.zh-cn.md), [API Reference](https://github.com/Infra3-Network/hyperdot-node/tree/master#api-reference)| All documentation is in the READMEs of the coresponding folders. |
| **0c.** | Testing and Testing Guide |[Testing](https://github.com/Infra3-Network/hyperdot-node/tree/master#testing)| Testing involves initiating the testing environment, conducting tests on the code, and applying linting. |
| **0d.** | Docker |[hyperdot-node Dockerfile](https://github.com/Infra3-Network/hyperdot-node/blob/master/Dockerfile)<br />[hyperdot-node Dockerfile-arm](https://github.com/Infra3-Network/hyperdot-node/blob/master/Dockerfile-arm)<br />[hyperdot-node docker-compose](https://github.com/Infra3-Network/hyperdot-node/blob/master/orchestration/docker-compose/docker-compose.yml)<br />[hyperdot-node testing docker-compose](https://github.com/Infra3-Network/hyperdot-node/blob/master/tests/docker-compose.yaml)| We supply Docker build files, including both a Dockerfile and a Dockerfile for ARM (macOS M1 chip). Additionally, we provide Docker Compose infrastructure orchestration files for testing and production environment deployments. All of these components are managed through a [Makefile](https://github.com/Infra3-Network/hyperdot-node/blob/master/Makefile). |
| **0e.** | Article |[The data analysis “powerhouse” for the Polkadot ecosystem, Hyperdot, has arrived!](https://medium.com/@jackson.libc.rs/the-data-analysis-powerhouse-for-the-polkadot-ecosystem-hyperdot-has-arrived-c44c16cc3539)| We have just released an article specifically to help introduce and guide users in using Hyperdot. |
| **1.** | Data engine |[data engine mod](https://github.com/Infra3-Network/hyperdot-node/tree/master/internal/dataengine)| We have integrated [Substrate ETL](https://github.com/colorfulnotion/substrate-etl) with the public data warehouse provided by Google BigQuery. This integration allows us to offer a more user-friendly data structure and API for accessing this functionality. |
| **2.** | Substrate dataset |[substrate chain model](https://github.com/Infra3-Network/hyperdot-node/blob/master/internal/datamodel/chain.go)| We provide datasets for Substrate chains, encompassing fundamental information, logos, and details about associated parallel chains. Additionally, we offer APIs for retrieving this information. |
| **2.**  | SQL Query API             |[query service](https://github.com/Infra3-Network/hyperdot-node/tree/master/internal/apis/service/query)| The query service incorporates API implementations for various operations required for SQL queries. |
| **3.** | Dashboard Editor |[dashboard editor service](https://github.com/Infra3-Network/hyperdot-node/tree/master/internal/apis/service/dashboard)| The dashboard service includes API implementations for various operations required for SQL queries. |
| **4.** | Discovery |[query](https://github.com/Infra3-Network/hyperdot-node/blob/master/internal/apis/service/query/query.go) and [dashboard](https://github.com/Infra3-Network/hyperdot-node/blob/master/internal/apis/service/dashboard/dashboard.go)| The query and dashboard components encompass a comprehensive Discovery API, allowing for extensive exploration and retrieval of data. |
| **5.** | User |[user service](https://github.com/Infra3-Network/hyperdot-node/tree/master/internal/apis/service/user)| The query and dashboard components encompass a comprehensive Discovery API, allowing for extensive exploration and retrieval of data. |
| **5.** | System |[system service](https://github.com/Infra3-Network/hyperdot-node/tree/master/internal/apis/service/system)| The system service provides essential functionalities for the Hyperdot system, such as the Substrate chain dataset. |
| **6.** | File |[file service](https://github.com/Infra3-Network/hyperdot-node/tree/master/internal/apis/service/file)| The file service offers the necessary file APIs for Hyperdot, including features like user avatar management. |

**Additional Information**

> During the actual development process, we found that completing Hyperdot required implementing more functionalities than initially described in the grant. Therefore, our actual delivery includes additional features beyond what was outlined in the grant. 
>
> In addition, Hyperdot-Node and Hyperdot-Frontend were developed concurrently. As a result, Hyperdot is now available for experience at www.hyperdot.xyz, and the Hyperdot-Frontend will be delivered shortly.
