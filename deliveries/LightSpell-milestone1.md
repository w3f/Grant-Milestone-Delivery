# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [LightSpell-proposal.md](https://github.com/w3f/Grants-Program/blob/master/applications/LightSpell-proposal.md)
* **Milestone Number:** 1

**Context** 

Milestone delivered the first XCM-API in the Polkadot ecosystem. 

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[MIT XCM API](https://github.com/paraspell/xcm-api/blob/main/LICENSE), [MIT DOCS](https://github.com/paraspell/docs/blob/main/LICENSE)| MIT| 
| 0b.  | Documentation |[XCM API Readme.md](https://github.com/paraspell/xcm-api/blob/main/README.md), [Official LightSpell documentation](https://paraspell.github.io/docs/api/g-started.html)| readme.md and official docs documentation | 
| 0c.  | Testing guide |[Readme.md testing guide](https://github.com/paraspell/xcm-api/blob/main/README.md#tests), [XCM API Playground test tool PR](https://github.com/paraspell/xcm-api/pull/6), [XCM API Playground test tool commit](https://github.com/paraspell/xcm-api/commit/99fc787bc505dfdb82afe23f252498b30dc8d16d), [Core unit tests and Github CI Workflow PR](https://github.com/paraspell/xcm-api/pull/8), [Commit adding core unit tests an Github CI Workflow](https://github.com/paraspell/xcm-api/commit/4205c8339990f7eea343098bac28a8da8bf05171)| Testing guide mentioned in official docs & core unit tests | 
| 0d.  | Medium article about the development of LightSpell| [Medium article link](https://medium.com/@dudo50/the-first-xcm-api-in-the-polkadot-ecosystem-meant-to-boost-interoperability-integration-db59c75d0c9f) | Article covering new features & improvements brought with LightSpell | 
| 1.a | Integrate API for XCM functionality |[PR adding XCM Functionality to API](https://github.com/paraspell/xcm-api/pull/2), [Commit adding XCM Functionality to API](https://github.com/paraspell/xcm-api/commit/c52ae0e0c8d853ac8f38909355d387e81fa91021) | Integrated core XCM SDK functionality to send XCM messages| 
| 1.b | Integrate API for Asset functionality |[PR adding Asset Functionality to API](https://github.com/paraspell/xcm-api/pull/3), [Commit adding Asset Functionality to API](https://github.com/paraspell/xcm-api/commit/929fdbf49465beef798650424ea5c3fbf8795865)| Integrated core XCM SDK functionality to do Asset operations | 
| 1.c | Integrate API for XCM Pallets functionality |[PR adding XCM Pallets Functionality to API](https://github.com/paraspell/xcm-api/pull/5), [Commit adding XCM Pallets Functionality to API](https://github.com/paraspell/xcm-api/commit/8795bcd561469f26718cbbd82eacef81be0218a5)| Integrated core XCM SDK functionality to query XCM Pallets of different Parachains | 
| 1.d | Integrate API for HRMP functionality |[PR adding HRMP Functionality to API](https://github.com/paraspell/xcm-api/pull/4), [Commit adding HRMP Functionality to API](https://github.com/paraspell/xcm-api/commit/6a0553691cae4d994d250aa0c077a44e747e1101)|  Integrated core XCM SDK functionality to open/close HRMP channels | 
| 2. | Integrate token authentification |[PR adding rate limiting (token authentication)](https://github.com/paraspell/xcm-api/pull/13), [Commit adding rate limiting (token authentication)](https://github.com/paraspell/xcm-api/commit/22b71849114b2b634bf670be2f16ad77e71eec5c)| Integrated token authentification with limited requests to remove the possibility of DDOS (Bigger request limit can be requested for free via email provided in docs) | 
| 3.a | Add core Integration tests |[PR adding core Integration tests](https://github.com/paraspell/xcm-api/pull/8), [Commit adding core Integration tests](https://github.com/paraspell/xcm-api/commit/4205c8339990f7eea343098bac28a8da8bf05171) |  Core integration tests to ensure everything is working together as expected | 
| 3.b | Add core Endpoint (e2e) tests | [PR adding core end 2 end tests](https://github.com/paraspell/xcm-api/pull/10), [Commit adding core end 2 end tests](https://github.com/paraspell/xcm-api/commit/0b97d4bd5cb596110627266e0bba201686c4c926)| Core endpoint tests to let the user try to use API without writing any code and also to demonstrate if API works | 
| 4. | Integrate LightSpell into ParaSpell docs | [Commit redesigning Docs and adding comprehensive XCM API guides](https://github.com/paraspell/docs/commit/46ed983d55c3ff28405f26d0eae6ac47c3e3f41c) | Comprehensive guide for every feature that API offers | 

**Additional Information**
Every aspect of the project, that was defined in the proposal, was implemented according to it. We implemented an additional feature of the XCM API - Playground test tool for free. There were no changes required during development. The invoice was submitted along with this delivery.
