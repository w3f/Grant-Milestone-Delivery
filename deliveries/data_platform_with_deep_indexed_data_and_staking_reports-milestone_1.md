# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [P2P Data platform for w3f](https://github.com/w3f/Grants-Program/blob/master/applications/data_platform_with_deep_indexed_data_and_staking_reports.md)
* **Milestone Number:** e.g. 1

**Context** (optional)
The development consist of only 1 milestone which includes the developement of open-source solution with publishing this solution by developer.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | - | Apache 2.0 |
| 0b. | Documentation | [Installation Doc](https://github.com/p2paltvnv/polkadot-monitoring-grant#installation) | - |
| 0c. | Testing and Testing Guide | -| You can test though installation. |
| 0d. | Docker | [Infrastructure repo](https://github.com/p2p-org/polkadot-grant)| Terraform repo with Helm charts. We switched from Docker on Local machine approach in favor of GKE. |
| 1. | Develop the ETL component |[DAG for ETL from Indexer to DWH](https://github.com/p2p-org/polkadot-grant-dags)| Airflow DAGs for ETL from Postgres (Mbelt, indexer database) to BigQ. This approach chosen by the team due to DWH agnostic. You can switch for any other DWH (Clickhouse, Vertica, SnowFlake) by editing DAG.| 
| 2. | Publish DWH data |[Published data in Google open datasets](console.cloud.google.com)| Go to Google BigQ console → Add → in the window "Star a project” type “p2p-data-platform” → see the open data for RFP in “raw_mbelt_data” schema| 
| 3. | Forking Superset |[Public data platform on Polkadot](https://polkadot-rfp-superset.tool.p2p.org/superset/welcome/)| BI with access to fully collected data for Polkadot, Kusama, Moonbeam, Moonriver.| 


**Additional Information**
1) We will continue to support [published solution](https://polkadot-rfp-superset.tool.p2p.org/superset/welcome/) during the Milestone Review
2) Published solution provides public access without any auth. To make new dashboard you can login via google/git.
3) We decided to switch from docker file as open-source solution to kuber because of limitations for local setup.
