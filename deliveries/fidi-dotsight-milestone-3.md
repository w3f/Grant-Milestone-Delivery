
# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [FiDi DotSight](https://github.com/w3f/Grants-Program/blob/master/applications/fidi-dotsight-analytics.md)
* **Milestone Number:** 3

**Progress**
* We've completed, published, and tested the code-free Developer UI.
* We've solved and streamlined the entire deployment and dashboard-generation story -- the dashboards are populated on the fly in the UI and immediately available after building.

**Key Links**
* The frontend and backend are in [fidi-tech/dotsight](https://github.com/fidi-tech/dotsight) and [fidi-tech/dotsight-ui](https://github.com/fidi-tech/dotsight-ui) respective repositories.
* The live alpha version is hosted at [dot.fidi.tech](https://dot.fidi.tech/).
* The docs are available at [docs.fidi.tech](https://docs.fidi.tech/) and actively evolving.

**Functionality**
* Current state: support for a dozen [metric types](https://docs.fidi.tech/dotsight-library/supported-metrics-types), three [dashboard types](https://docs.fidi.tech/code-free-analytics/widgets-collection), and four initial data providers (Subsquid, DappRadar, DeBank, and user-specified RPC ERC20).
* The user authentication is also implemented via OAuth.
* Since we went further down the automation road than in the original proposal, milestones 1b, 2a, and 2b are accomplished directly with the UI's functionality.

**Limitations**
* Many data providers require API keys: in the spirit of complete customization, we've added an option to specify your personal key in the UI flow; we will, however, give an option at the hosted version (at dot.fidi.tech) to use our own keys at our expense.
* The UI is very rudimentary for now, and the dashboards collection is small: we will focus most of our efforts on this area as a part of upcoming [M2 work](https://grants.web3.foundation/applications/fidi-dotsight-analytics#milestone-2--poc-dashboards-with-network--dapp-level-and-custom-metrics).
* We are looking to extend the [data providers registry](https://app.gitbook.com/o/IRtZAS1TCB9lU3gL91aJ/s/F0etPoo97bZZ6i9RXnNx/data-providers-registry/data-providers-overview) from 4 to 20 in the coming weeks, this will be done before we extend the dashboards optionality, e.g., Chainlink and Dwellir are currently in staging.


**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [LINK](https://github.com/fidi-tech/dotsight/blob/main/LICENSE) | |
| **0b.** | Documentation | [LINK](https://docs.fidi.tech/dotsight-library/dotsight-overview) | See Analytics Portal and DotSight sections - actively evolving.|
| **0c.** | Testing | [LINK](https://github.com/fidi-tech/dotsight/blob/main/src/pipelines/pipelines.controller.spec.ts) |See corresponding tests near every key component. The coverage is tracked.|
| **1a.** | dApp-level signals | [LINK](https://docs.fidi.tech/dotsight-library/supported-metrics-types) | First two protocol-level metrics are available.|
| **1b.** | Online testing & deployment | [LINK](https://github.com/fidi-tech/dotsight-ui/blob/main/src/features/PipelineExecution/ui/index.tsx) | The pipelines management logic handles the on-the-fly deployment and visualization. |
| **2a.** | Deployment validation & View status | [LINK](https://github.com/fidi-tech/dotsight-ui/blob/main/src/features/PipelineExecution/ui/index.tsx) | Streamlined: users input their configurations via the UI and receive error messages if anything. |
| **2b.** | Automated and ad-hoc deployment | [Docs](https://docs.fidi.tech/dotsight-library/developer-guide)[ Data Service](https://github.com/fidi-tech/dotsight/blob/main/README.md#quick-start) [UI](https://github.com/fidi-tech/dotsight-ui)| Wrapped in a package and streamlined the hosted deployment. |
| **2c.** | Data interface: view construction | [LINK](https://github.com/fidi-tech/dotsight-ui/blob/main/src/features/widgetTypeSelector/ui/index.tsx) | See also the user flow in the live product. |
| **2d.** | Data interface: Deployment | [LINK](https://docs.fidi.tech/code-free-analytics/widgets-collection) | Fully streamlined and the dashboards are displayed momentarily - no deployment needed. |




