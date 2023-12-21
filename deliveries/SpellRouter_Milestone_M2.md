# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [SpellRouter-proposal.md](https://github.com/w3f/Grants-Program/blob/master/applications/SpellRouter-proposal.md)
* **Milestone Number:** 2

**Context** 

Milestone delivered the upgrades to the first XCM router in the Polkadot ecosystem. 

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[MIT XCM Router](https://github.com/paraspell/xcm-router/blob/main/LICENSE), [MIT API](https://github.com/paraspell/xcm-api/blob/main/LICENSE) ,[MIT DOCS](https://github.com/paraspell/docs/blob/main/LICENSE)| MIT| 
| 0b.  | Documentation |[XCM Router Readme.md](https://github.com/paraspell/xcm-router/blob/main/README.md), [Official SpellRouter documentation](https://paraspell.github.io/docs/router/getting-strtd.html)| readme.md and official docs documentation |  
| 0c.  | Testing guide |[Readme.md testing guide Router](https://github.com/paraspell/xcm-router?tab=readme-ov-file#-development--testing), [Readme.md testing guide API](https://github.com/paraspell/xcm-api?tab=readme-ov-file#tests) | Testing guide mentioned in official docs & core unit tests | 
| 0d.  | Medium article about the development of SpellRouter| [Medium article link](https://medium.com/@dudo50/xcm-router-phase-2-innovations-and-advancement-in-state-of-the-c84beacd4727) | Article covering new features & improvements brought with SpellRouter☄️ | 
| 1. | Integrate automatic exchange chain selection into XCM Router  |[PR adding XCM Router automatic exchange chain selection](https://github.com/paraspell/xcm-router/pull/6), [Commit adding XCM Router automatic exchange chain selection](https://github.com/paraspell/xcm-router/commit/6a5fc8a53bce38cf23207f04620cc3f83c942eb1) | Automatic exchange chain selection integrated into the router (If the user wishes they can manually insert it otherwise Router will select automatically). XCM Router will try to select an exchange with the best pool/price. To see the difference between automatic and manual selection feel free to see the [following image](https://user-images.githubusercontent.com/55763425/277431789-cc3892dc-4452-49e1-a201-19edbc6f20d8.png) | 
| 2 | Integrate XCM Router into LightSpell XCM API |[PR adding XCM Router into XCM API](https://github.com/paraspell/xcm-api/pull/29), [Commit adding XCM Router into XCM API](https://github.com/paraspell/xcm-api/commit/a26e7245dfad40f9aaf1cab7c6d17d96e21ab142)| Integrated core functionality of XCM Router into LightSpell XCM API |
| 3.a | Update unit tests for new XCM Router functionalities |[Commit adding core unit tests for new XCM Router functionalities](https://github.com/paraspell/xcm-router/commit/6a5fc8a53bce38cf23207f04620cc3f83c942eb1)| Updated unit tests for new XCM Router functionalities | 
| 3.b | Create integration tests for XCM Router | [Commit adding core integration tests for XCM Router](https://github.com/paraspell/xcm-router/commit/6a5fc8a53bce38cf23207f04620cc3f83c942eb1) | Created integration tests for core features in XCM Router | 
| 3.c | Update integration, unit and e2e tests for LightSpell XCM API | [Commit adding core e2e tests for XCM API](https://github.com/paraspell/xcm-api/commit/a26e7245dfad40f9aaf1cab7c6d17d96e21ab142) | Added new integration,unit & e2e tests for core LightSpell XCM API XCM Router integration | 
| 4.a | Cover the latest automatic exchange chain selection in the XCM Router section (Docs) | [PR adding documentation for latest XCM Router automatic chain selection mechanism](https://github.com/paraspell/docs/pull/5) | Added comprehensive guide covering automatic selection in XCM Router section | 
| 4.b | Cover XCM Router integration in XCM API section (Docs) | [PR adding documentation for XCM Router integration into XCM API](https://github.com/paraspell/docs/pull/5) | Covering XCM Router integration in LightSpell XCM API Section | 


**Additional Information**
Every aspect of the project, that was defined in the proposal, was implemented according to it. There were no changes required during development. We also added a new automatic exchange feature into [XCM Router Playground](https://github.com/paraspell/xcm-router/tree/main/playground) to make testing for the delivery evaluator easier as an extra.

