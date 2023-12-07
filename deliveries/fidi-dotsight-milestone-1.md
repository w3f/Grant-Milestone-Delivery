# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [FiDi DotSight](https://github.com/w3f/Grants-Program/blob/master/applications/fidi-dotsight-analytics.md)
* **Milestone Number:** 1

**Progress**
* We've completed, published, and tested the functional data interface for developers.
* Any data sources are supported, the data aggregation and off-chain data enrichment are operational, and several initial usage examples are [provided](https://github.com/fidi-tech/dotsight/tree/main#usage-examples). All data transportation modules are customizable.

**Scope**
* We've got a much better grasp on the scope of the project and clarified most of the initial unknowns. With those in mind, some of the scope rearranging has taken place:
* M1 is fully focused on the foundational Data Interface. 
* M3 is focused on Developer UI, automation, and the collection of dashboards developers will be able to use for data visualization.
* M2 is solely focused now on the metrics enablement (dApp, network, wallet) and proof of work.
* The refined sequencing is M1 > M3 > M2 > M4.
* Correspondingly, we moved 2c and 2d from M1 to M3 and put more precision on the following milestones.
* We've also compressed 4a through 4c into a generic Subsquid integration, to stay objective when it comes to parachains, based on the feedback from the committee.

**Timelines**

* We started working on the delivery in late July. The M1 took 2 weeks longer than estimated, however, we've completed multiple parts of M3 as well and have POCs of dashboards running in staging. 
* We're on track with the rest of the initially proposed timelines.


**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [LINK](https://github.com/fidi-tech/dotsight/blob/main/LICENSE) | 
| **0b.** | Documentation |[LINK](https://github.com/fidi-tech/dotsight/blob/main/README.md) | As well as evolving [Documentation](https://docs.fidi.tech/) |
| **0c.** | Testing | [LINK](https://github.com/fidi-tech/dotsight/blob/12280b45f5f1ddd855d6b91eaee4abbf1916f534/src/data-sources/collection/debank/wallet.datasource.spec.ts#L5) | See corresponding tests near each key component. The coverage is tracked. |
| **1a.** | GiantSquid data funneling | [LINK](https://github.com/fidi-tech/dotsight/blob/12280b45f5f1ddd855d6b91eaee4abbf1916f534/src/data-sources/collection/giant-squid/stats/wallet-token.datasource.ts#L22) [USAGE](https://github.com/fidi-tech/dotsight/blob/main/README.md#sample-pipeline-subsquid-sourced) |
| **1b.** | Data Aggregation module | [LINK](https://github.com/fidi-tech/dotsight/tree/12280b45f5f1ddd855d6b91eaee4abbf1916f534/src/pipelines/services/pipeline/config) [USAGE](https://github.com/fidi-tech/dotsight/blob/main/README.md#pipeline-creation) | Arbitrary data sources and aggregation logic are supported. 
| **1c.** | Off-chain sourced addresses support | [LINK](https://github.com/fidi-tech/dotsight/blob/main/src/middlewares/collection/coingecko/wallet-token-price.middleware.ts) | See also [Middleware](https://github.com/fidi-tech/dotsight/blob/main/README.md#middlewares) |
| **2a.** | Data Interface for developers |[LINK](https://github.com/fidi-tech/dotsight/tree/main#contributing) |
| **2b.** | Schema mapping and morphing | [LINK](https://github.com/fidi-tech/dotsight/blob/main/src/mappers/abstract.mapper.ts) | Done by the corresponding [mappers](https://github.com/fidi-tech/dotsight/blob/main/README.md#mappers).
| **2c.** | Data interface: view construction | n/a | Moved to M3 to stay consistent with the UI deliverables.|
| **2d.** | Data interface: Deployment | n/a | Moved to M3 to stay consistent with the UI deliverables.|
| **3a.** | Dashboards: Default Analytical Views | [LINK](https://github.com/fidi-tech/dotsight/blob/12280b45f5f1ddd855d6b91eaee4abbf1916f534/src/data-sources/collection/giant-squid/stats/wallet-token.datasource.ts#L22) [USAGE](https://github.com/fidi-tech/dotsight/blob/main/README.md#sample-pipeline-subsquid-sourced)  | Subsquid integration complete, and network-specific integrations moved out of scope - to keep DotSight network-agnostic.
| **3b.** | Dashboards: Advanced Staking View | [LINK](https://github.com/fidi-tech/dotsight/blob/12280b45f5f1ddd855d6b91eaee4abbf1916f534/src/data-sources/collection/giant-squid/stats/wallet-token.datasource.ts#L22) [USAGE](https://github.com/fidi-tech/dotsight/blob/main/README.md#sample-pipeline-subsquid-sourced) | Save as 3a. |
| **4a.** | Lighthouse use cases: Squids for Wallet-specific metrics |  [LINK](https://github.com/fidi-tech/dotsight/blob/12280b45f5f1ddd855d6b91eaee4abbf1916f534/src/data-sources/collection/giant-squid/stats/wallet-token.datasource.ts#L22) [USAGE](https://github.com/fidi-tech/dotsight/blob/main/README.md#sample-pipeline-subsquid-sourced) |  Save as 3a. | 
| **4b.** | Lighthouse use cases: Squids for dApp-specific metrics | [LINK](https://github.com/fidi-tech/dotsight/blob/12280b45f5f1ddd855d6b91eaee4abbf1916f534/src/data-sources/collection/giant-squid/stats/wallet-token.datasource.ts#L22) [USAGE](https://github.com/fidi-tech/dotsight/blob/main/README.md#sample-pipeline-subsquid-sourced)  |  Save as 3a. |
| **4c.** | Lighthouse use cases: customized dApp views | [LINK](https://github.com/fidi-tech/dotsight/blob/12280b45f5f1ddd855d6b91eaee4abbf1916f534/src/data-sources/collection/giant-squid/stats/wallet-token.datasource.ts#L22) [USAGE](https://github.com/fidi-tech/dotsight/blob/main/README.md#sample-pipeline-subsquid-sourced) | Save as 3a. |


