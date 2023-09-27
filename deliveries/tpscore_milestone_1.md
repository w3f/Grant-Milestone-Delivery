# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:**  [TPScore Application](https://github.com/w3f/Grants-Program/blob/master/applications/TPScore.md)
* **Milestone Number:** 1

**Context** 

TPScore simplifies TPS Data Analysis for non-technical users in the Polkadot Ecosystem.

TPScore aims to provide non-technical users in the Polkadot ecosystem with an accessible and user-friendly platform for analyzing TPS (Transactions per Second) data. Our goal is to bridge the gap between technical intricacies and user-friendly visualization, empowering individuals to make informed decisions about blockchain adoption, investment, and development.

The project consists of two main parts:

1. ETL System
2. User Interface (UI) with Data Visualizations

This milestone contains the ETL System according to the original [TPScore grant application](https://github.com/w3f/Grants-Program/blob/master/applications/TPScore.md).

**Deliverables**

After submission of this milestone all changes to the repo will happen outside of 'main' branch.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License |[Licence](https://github.com/BCS-Labs/tpscore-etl-system/blob/main/LICENSE)| GPLv3|
| **0b.** | Documentation |[Documentation](https://github.com/BCS-Labs/tpscore-etl-system/blob/main/README.md)| We will provide both **inline documentation** of the code and a basic **tutorial**.
| **0c.** | Tests and Testing Guide |[Tests](https://github.com/BCS-Labs/tpscore-etl-system/blob/main/airflow/dags/test_get_data_tpscore.py), [Testing Guide](https://github.com/BCS-Labs/tpscore-etl-system/tree/main#testing-guide)| Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | [Airflow container](https://github.com/BCS-Labs/tpscore-etl-system/tree/main/airflow), [MySQL container](https://github.com/BCS-Labs/tpscore-etl-system/tree/main/db), [Installation Guide](https://github.com/BCS-Labs/tpscore-etl-system/tree/main#installation)| We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Database schema |[DB Schema](https://github.com/BCS-Labs/tpscore-etl-system/blob/main/db/db_schema.sql)| We will implement the schema in MySQL database. |
| 2. | Airflow DAGs  |[Airflow DAG](https://github.com/BCS-Labs/tpscore-etl-system/blob/main/airflow/dags/dag_get_data_tpscore.py)| We will create Airflow DAGs for data gathering and calculation of TPS metrics. |

**Additional Information**

During the implementation of the ETL System, two minor adjustments were made in comparison to the original application:

1. A new field, 'processing_started_at,' was added to the 'tps' table. It was needed to group batches of received data. Additionally, the 'processing_started_at' field, in conjunction with the existing 'chain_name,' now serves as the primary identifier for the 'tps' table.

2. We needed to exclude the 'OAK Network' from our project scope due to the lack of a Polkadot parachain.
