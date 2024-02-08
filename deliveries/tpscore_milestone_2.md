# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:**  [TPScore Application](https://github.com/w3f/Grants-Program/blob/master/applications/TPScore.md)
* **Milestone Number:** 2

**Context** 

TPScore simplifies TPS Data Analysis for non-technical users in the Polkadot Ecosystem.

TPScore aims to provide non-technical users in the Polkadot ecosystem with an accessible and user-friendly platform for analyzing TPS (Transactions per Second) data. Our goal is to bridge the gap between technical intricacies and user-friendly visualization, empowering individuals to make informed decisions about blockchain adoption, investment, and development.

The project consists of two main parts:

1. ETL System
2. User Interface (UI) with Data Visualizations

This milestone contains the User Interface (UI) with Data Visualizations according to the original [TPScore grant application](https://github.com/w3f/Grants-Program/blob/master/applications/TPScore.md).

**Deliverables**

After submission of this milestone all changes to the repo will happen outside of 'main' branch.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [Licence](https://github.com/BCS-Labs/tpscore-web-client/blob/main/LICENSE) | GPLv3|
| **0b.** | Documentation | [Documentation](https://github.com/BCS-Labs/tpscore-web-client/blob/main/README.md) | We will provide both **inline documentation** of the code and a basic **tutorial**.
| **0c.** | Tests and Testing Guide | [Tests](https://github.com/BCS-Labs/tpscore-web-client/tree/main/src/test), [Testing Guide](https://github.com/BCS-Labs/tpscore-web-client#run-unit-tests) | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | [Dockerfile](https://github.com/BCS-Labs/tpscore-web-client/blob/main/Dockerfile), [How to run the project using Docker](https://github.com/BCS-Labs/tpscore-web-client#how-to-run-the-project-using-docker) | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | [Article](https://dev.to/fromaline/tpscore-transactions-per-second-metrics-made-easy-508f) | We will publish an article that explains how to use TPScore product and how it was build. |
| 1. | Data access |[Data access in the app](https://github.com/BCS-Labs/tpscore-web-client/blob/main/src/app/page.tsx#L14)| We will access the MySQL database from our Next.js app and process data on the server to make the client as lightweight as possible. |
| 2. | UI  | [tpscore.xyz](https://tpscore.xyz/), [source code](https://github.com/BCS-Labs/tpscore-web-client/tree/main/src)  | We will build UI according to the designs and test it thoroughly under different conditions. |

**Additional Information**

During the development of the User Interface (UI) with Data Visualizations, we slightly altered the design to achieve a better user experience and dropped the "Filter" selection as not relevant due to the fact that all parachains fit on the single screen.