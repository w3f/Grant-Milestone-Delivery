# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadot_analytics_platform.md
* **Milestone Number:** 1

**Context** (optional)
> The Polkadot Analytics Platform aims at building a comprehensive data analysis and visualization tool for the Polkadot ecosystem. The platform will allow users to retrieve and analyze data from various Polkadot-related sources (e.g., different parachains and components such as browser wallets), aligned with the POnto ontology [1, 2, 3]. Users will be able to specify their queries using a controlled natural language (CNL), and the platform will provide a query engine to process these queries. Additionally, the platform will provide a UI to support constructing queries and visualizing informative artifacts that represent query results. As well as support for composing customizable dashboards using these artifacts.

**Deliverables**
> In this milestone, we focused on constructing the foundation of the analytics platform by creating a knowledge base. We defined and implemented the base components for the dev environment that will be the basis for the proposed platform. This included evolving with POnto to address queries from the [Data Analysis Tools for Substrate-based Blockchains](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Under%20Development/data_analysis_tools.md) RFP and the Substrate-ETL project. An initial KB component (including triplestore database and basic API endpoint) was developed to handle operations over POnto entities.

Project Repository: https://github.com/mobr-ai/PolkadotAnalytics

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | Copyright and Licenses | [Apache License](https://github.com/mobr-ai/PolkadotAnalytics/blob/main/LICENSE) | Apache 2.0 |
| **0b.** | Documentation/Tutorial | [POnto documentation](https://www.mobr.ai/ponto) <br><br> [PAP endpoints](https://github.com/mobr-ai/PolkadotAnalytics/blob/main/pap/swagger.yml) <br><br> [source code documentation](https://github.com/mobr-ai/PolkadotAnalytics/tree/main/docs/pap) | Online documentation of the new version of the POnto Ontology <br><br> PAP swagger Documentation <br><br>PAP source code documentation.  <br><br> Refer to the README file on our repository to details about how to access the platform swagger endpoint. |
| **0c.** | Testing and Testing Guide | [Tests](https://github.com/mobr-ai/PolkadotAnalytics/tree/main/pap/tests) <br><br> [How to test](https://github.com/mobr-ai/PolkadotAnalytics/blob/main/README.md) <br><br> [KB query guide](https://github.com/mobr-ai/PolkadotAnalytics/blob/main/docs/kb_guide.ipynb)| PAP tests <br><br> How to run the tests <br><br> Querying the KB API: a guide on how to query and test the KB. <br><br> The README file includes details on how to run the platform as well as how to execute all of its tests |
| **0d.** | Docker | [Dockerfile](https://github.com/mobr-ai/PolkadotAnalytics/blob/main/Dockerfile) <br><br> [docker-compose](https://github.com/mobr-ai/PolkadotAnalytics/blob/main/docker-compose.yml) | Docker image for the KB Bootstrap. |
| **0e.** | Article | [Medium post draft](https://medium.com/@mobrsys/building-the-foundation-the-first-stage-of-the-polkadot-analytics-platform-6e9fa6fdbf33) | Medium post about the proposed platform roadmap and what we achieved so far. |
| **1.** | POnto Evolution | [POnto](https://github.com/mobr-ai/POnto) <br><br>[Technical Report](https://github.com/mobr-ai/POnto/blob/main/docs/pdf/POnto_v0.0.2_evolution_report.pdf) | New version of POnto ontology, addressing aspects from RFP and Substrate-ETL. <br><br> Technical Report describing the POnto evolution |
| **2.** | KB Bootstrap | [PAP](https://github.com/mobr-ai/PolkadotAnalytics) | Python code with KB endpoints that interact with Jena triplestore database through fuseki-server. Implementation of an initial API to handle knowledge representation. Along with, functionalities to inject the knowledge representation required to bootstrap the KB. |

**Additional Information**
> This is only the first stage in the roadmap to build the platform, which comprises a subset of the platform components
