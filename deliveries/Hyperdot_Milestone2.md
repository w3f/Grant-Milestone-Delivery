# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Hyperdot.md](https://github.com/w3f/Grants-Program/blob/master/applications/Hyperdot.md)
* **Milestone Number:** 2

**Context** 
Hyperdot-fronted, the UI component of the Hyperdot project, can be accessed through [www.hyperdot.xyz](https://www.hyperdot.xyz) in its alpha version. It serves as a powerful interface for analyzing on-chain data, creating visualizations through charts, and facilitating user collaboration and sharing of creative insights.

Hyperdot-fronted features:

-  **Multi-Chain Data Support**
- **On-chain Data Analysis and Query**
- **Chart Visualization Creation**
- **User-Created Content Sharing**

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License |[LICENSE](https://github.com/Infra3-Network/hyperdot-fronted/blob/master/LICENSE)| Licensed under Apache 2.0 |
| **0b.** | Documentation |[README](https://github.com/Infra3-Network/hyperdot-fronted/blob/master/README.md)| All documentation is in the READMEs of the coresponding folders. |
| **0c.** | Testing and Testing Guide |[Testing](https://github.com/Infra3-Network/hyperdot-fronted/tree/master/tests)<br />[Testing Guide](https://github.com/Infra3-Network/hyperdot-fronted/tree/master#testing)| Testing involves initiating the testing environment, conducting tests on the code, and applying linting. |
| **0d.** | Docker |[Dockefile](https://github.com/Infra3-Network/hyperdot-fronted/blob/master/docker/Dockerfile)<br />[Docker Build](https://github.com/Infra3-Network/hyperdot-fronted/tree/master#docker-installation-guide-recommend)| We supply Docker build files and  are managed through a [Makefile](https://github.com/Infra3-Network/hyperdot-node/blob/master/Makefile). |
| **0e.** | Article |1. [The data analysis “powerhouse” for the Polkadot ecosystem, Hyperdot, has arrived!](https://medium.com/@jackson.libc.rs/the-data-analysis-powerhouse-for-the-polkadot-ecosystem-hyperdot-has-arrived-c44c16cc3539)<br />2. [Unlocking the Power of Web3 Data Analysis with Hyperdot in the Polkadot Ecosystem](https://medium.com/@jackson.libc.rs/unlocking-the-power-of-web3-data-analysis-with-hyperdot-in-the-polkadot-ecosystem-cdcbaec53ac4)| We have already published two articles on how to use hyperdot and the value of hyperdot |
| **1.** | Discovery |[Explore pages](https://github.com/Infra3-Network/hyperdot-fronted/tree/master/src/pages/explore)| Contains the following pages:<br/>1. **Explore dashboard page:** provides users to create list, online [access](https://www.hyperdot.xyz/explore/dashboards)<br/>2. **Explore the query page:** provides the user to create the query list, online [access](https://www.hyperdot.xyz/explore/queries)<br />3. Filter functionality |
| **2.** | Creations |[Creation pages](https://github.com/Infra3-Network/hyperdot-fronted/tree/master/src/pages/creations)| This includes the following features and pages:<br/>1. **Query creation page:** online[access](https://www.hyperdot.xyz/creations/queries)<br/>2. **On-chain data table visualization:** Provides data schema visualization operations for hundreds of chains such as polkadot, kusama, etc<br/>3. **Chart editing:** Create visualizations of the query data and generate charts<br/>4. **The dashboard creation page:** provide typesetting, editor of the dashboard, online [access](https://www.hyperdot.xyz/explore/dashboards/1) |
| **3.** | Favorites |[Favorite pages](https://github.com/Infra3-Network/hyperdot-fronted/tree/master/src/pages/favorites)| This includes the following features and pages:<br/>1. **The  favorite of user query list:** online  [access](https://www.hyperdot.xyz/favorites/queries)<br/>2. **Users favorite dashboard list:** online  [access](https://www.hyperdot.xyz/favorites/dashboards)<br/>3. Filter functionality |
| **4.** | Account |[Account pages](https://github.com/Infra3-Network/hyperdot-fronted/tree/master/src/pages/account)| This includes the following features and pages:<br/>1. View the user profile<br />2. Setting the user profile, email, password etc. |
| **5.** | User |[User pages](https://github.com/Infra3-Network/hyperdot-fronted/tree/master/src/pages/user)| This includes the following features and pages:<br/>1. User login, logout, etc.<br />2. Create an account |
| **6.** | Chart components |[Chart template components](https://github.com/Infra3-Network/hyperdot-fronted/blob/master/src/components/Charts/Template/index.tsx)<br />[DataTable compoents](https://github.com/Infra3-Network/hyperdot-fronted/blob/master/src/components/Charts/Table/index.tsx)<br />[Counter componets](https://github.com/Infra3-Network/hyperdot-fronted/blob/master/src/components/Charts/Counter/index.tsx)| 1. **Chart templates** provides a template for graphical visualization and editing of the queries data<br />2. **Data Table** provides rendering of the query data<br />3. **Counter** provides a more beauty digital chart format |

**Additional Information**

> Hyperdot is now available for experience at www.hyperdot.xyz
