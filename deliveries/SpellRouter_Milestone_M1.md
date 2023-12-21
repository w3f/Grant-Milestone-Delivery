# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [SpellRouter-proposal.md](https://github.com/w3f/Grants-Program/blob/master/applications/SpellRouter-proposal.md)
* **Milestone Number:** 1

**Context** 

Milestone delivered the first XCM-Router in the Polkadot ecosystem. 

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[MIT XCM Router](https://github.com/paraspell/xcm-router/blob/main/LICENSE), [MIT DOCS](https://github.com/paraspell/docs/blob/main/LICENSE)| MIT| 
| 0b.  | Documentation |[XCM Router Readme.md](https://github.com/paraspell/xcm-router/blob/main/README.md), [Official SpellRouter documentation](https://paraspell.github.io/docs/router/getting-strtd.html)| readme.md and official docs documentation | 
| 0c.  | Testing guide |[Readme.md testing guide](https://github.com/paraspell/xcm-router/tree/main?tab=readme-ov-file#-development--testing) | Testing guide mentioned in official docs & core unit tests | 
| 0d.  | Medium article about the development of SpellRouter| [Medium article link](https://medium.com/@dudo50/the-first-xcm-router-in-the-polkadot-ecosystem-meant-to-boost-cross-chain-exchange-implementations-bdf59088051b) | Article covering early XCM Router version | 
| 1.a | Integrate early version of XCM Router I |[PR adding XCM Router I](https://github.com/paraspell/xcm-router/pull/2), [Commit adding XCM Router I](https://github.com/paraspell/xcm-router/commit/4c4874cc49754125cc84a6b22e84b299fe7e7213) | Integrated XCM Router functionality - function style pattern | 
| 1.b | Integrate early version of XCM Router II |[PR adding XCM Router II](https://github.com/paraspell/xcm-router/pull/2), [Commit adding XCM Router II](https://github.com/paraspell/xcm-router/commit/4c4874cc49754125cc84a6b22e84b299fe7e7213)| Integrated XCM Router functionality - builder pattern |
| 2. | Update docs to cover early XCM Router version |[PR adding documentation for early XCM Router version](https://github.com/paraspell/docs/pull/4)| Comprehensive guide that covers usage of early XCM Router version | 
| 3. | Create unit tests for XCM Router | [PR adding core unit tests for XCM Router](https://github.com/paraspell/xcm-router/pull/2), [Commit adding core unit tests for XCM Router](https://github.com/paraspell/xcm-router/commit/4c4874cc49754125cc84a6b22e84b299fe7e7213) | Unit tests for core features in XCM Router | 

**Additional Information**
Every aspect of the project, that was defined in the proposal, was implemented according to it. There were no changes required during development. The invoice was submitted along with this delivery. We built [XCM Router Playground](https://github.com/paraspell/xcm-router/tree/main/playground) to make testing for delivery evaluator easier as an extra. We were able to implement all 9 available open-source DEX exchanges. The implementation is designed universally so if other Parachain DEXes become open-source they will be effortless to add.

