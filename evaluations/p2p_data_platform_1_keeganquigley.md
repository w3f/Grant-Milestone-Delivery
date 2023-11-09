# Evaluation

- **Status:** In progress
- **Application Document:** 
- **Milestone:** 1
- **Evaluation by:** keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 0a. | License | <ul><li>[x] </li></ul> | Apache 2.0 |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [Installation Doc](https://github.com/p2p-org/polkadot-grant#installation) | - |
| 0c. | Testing and Testing Guide | <ul><li>[ ] </li></ul> | - | You can test though installation. |
| 0d. | Docker | <ul><li>[ ] </li></ul> | [Infrastructure repo](https://github.com/p2p-org/polkadot-grant)| Terraform repo with Helm charts. We switched from Docker on Local machine approach in favor of GKE. |
| 1. | Develop the ETL component | <ul><li>[ ] </li></ul> |[DAG for ETL from Indexer to DWH](https://github.com/p2p-org/polkadot-grant-dags)| Airflow DAGs for ETL from Postgres (Mbelt, indexer database) to BigQ. This approach chosen by the team due to DWH agnostic. You can switch for any other DWH (Clickhouse, Vertica, SnowFlake) by editing DAG.| 
| 2. | Publish DWH data | <ul><li>[ ] </li></ul> |[Published data in Google open datasets](https://console.cloud.google.com/)| Go to Google BigQ console → Add → in the window "Star a project” type “p2p-data-platform” → see the open data for RFP in “raw_mbelt_data” schema| 
| 3. | Forking Superset | <ul><li>[ ] </li></ul> |[Public data platform on Polkadot](https://polkadot-rfp-superset.tool.p2p.org/superset/welcome/)| BI with access to fully collected data for Polkadot, Kusama, Moonbeam, Moonriver.|

# General Notes

# Tests

Tests aren't able to be run separately; they have to be run during installation.
