# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Hyperdot.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License                   | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/Infra3-Network/hyperdot-node/blob/ef7ee82d333da7377eb0bb1740b240104a62bee1/LICENSE) | Apache 2.0                                                   |
| **0b.** | Documentation             | <ul><li>[x] </li></ul> | [README](https://github.com/Infra3-Network/hyperdot-node/blob/ef7ee82d333da7377eb0bb1740b240104a62bee1/README.md), [README.zh-cn](https://github.com/Infra3-Network/hyperdot-node/blob/ef7ee82d333da7377eb0bb1740b240104a62bee1/README.zh-cn.md) | — |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul> | link | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                    | <ul><li>[ ] </li></ul> | link | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article                   | <ul><li>[ ] </li></ul> | link | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
|  **1.** | SQL Query API             | <ul><li>[ ] </li></ul> | link | We will use the bigquery client to integrate substrate-etl from the data sources provided by substrate-etl and creating a data query api using the bigquery client and substrate-etl, including<br/><br />1. We will integrate the table schema provided by substrate etl to create interfaces for different query capabilities we provide, such as chain information, transaction information, etc.<br />2. Show the table-scheme of the associated chain<br/>3. Run and save sql queries |
|  **2.** | Dashboard Editor          | <ul><li>[ ] </li></ul> | link | The apis needed to implement the dashboard, including<br/>1. Edit the visualization dashboard page by loading sql<br/>2. Save the dashboard you've edited |
|  **3.** | Discovery                 | <ul><li>[ ] </li></ul> | link | We will implement the apis required by the discovery feature for data analytics dashboards and data query sharing, including<br/>1. The dashboards list api<br/>2. dashboards item Detail api. Each dashboard item is clicked to show the user's previously edited dashboard<br/>3. queries List api<br/>4. queries item details api. After clicking each query item, it displays the sql data tables and other information that the user has saved and run before |
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
