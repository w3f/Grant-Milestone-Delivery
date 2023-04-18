# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [ParaSpell_follow-up2.md](https://github.com/w3f/Grants-Program/pull/1589)
* **Milestone Number:** 1

**Context** 

Milestone delivered upgrades for SDK, new compatible nodes and also brought innovation of localhost network startup library in UI-V2.
**Deliverables**


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[MIT SDK](https://github.com/paraspell/sdk/blob/main/LICENSE), [MIT UI-V2](https://github.com/paraspell/ui-v2/blob/main/LICENSE)| MIT| 
| 0b.  | Documentation |[Everything documented in official docs](https://paraspell.github.io/docs/)| Inline documentation of code, as well as usage guide with all necessary commands, included in repository (The inline documentation placed into files where needed, otherwise functions were self-descriptive)| 
| 0c.  | Testing guide |[SDK](https://github.com/paraspell/xcm-sdk#-development), [UI-V2](https://github.com/paraspell/ui-v2#3-installation), [Testing guide is also in docs](https://paraspell.github.io/docs/)| Core functionality & user guide will be covered in repository documentation as well as SDK UNIT tests for core functionality| 
| 0d.  | Docker |[Commit updating UI-V2 to newest version of SDK](https://github.com/paraspell/ui-v2/commit/af94dbe2dea0ee8b9de9551c1ddbb9db849ad6b8), [Guide on launching dockerized version](https://github.com/paraspell/ui#start-application-in-docker-container) | Docker file launching latest version of ParaSpell UI is ready| 
| 0e.  | Create Medium article about development of Phase 3 ParaSpell |[Link](https://medium.com/@dudo50/paraspell-xcm-sdk-phase-3-innovations-upgrades-8309c6393bbd)| Add article covering new features & improvements brought in Phase3 | 
| 1. | Merge currencyId & currency in XCM Transfers |[Commit merging currency & currencyID into currency](https://github.com/paraspell/xcm-sdk/commit/39c39e6290eebce04b6ca54f231786807c62e455), [Commit updating docs](https://github.com/paraspell/docs/commit/313608b29d57a22e94b4cb6a11c34fcfe6f8fed0)| Merge currency ID and currency symbol into one so user do not need to enther both. Raised in issue: paraspell/xcm-sdk#16 | 
| 2.a  | Add support for new compatible nodes in DMP Scenario (Downwards message passing) |[Commit adding new compatible nodes I](https://github.com/paraspell/xcm-sdk/commit/1d370faa5bd5850becab7d8e6fc2bf17de0620a6), [Commit adding new compatible nodes II](https://github.com/paraspell/xcm-sdk/commit/39c39e6290eebce04b6ca54f231786807c62e455) | Check for new Parachain support & update Parachains, that have new compatibility with other Parachains in DMP Scenario & Update list of compatible Parachains accordingly. | 
| 2.b  | Add support for new compatible nodes in UMP Scenario (Upwards message passing) |[Commit adding new compatible nodes I](https://github.com/paraspell/xcm-sdk/commit/1d370faa5bd5850becab7d8e6fc2bf17de0620a6), [Commit adding new compatible nodes II](https://github.com/paraspell/xcm-sdk/commit/39c39e6290eebce04b6ca54f231786807c62e455) | Check for new Parachain support & update Parachains, that have new compatibility with other Parachains in UMP Scenario & Update list of compatible Parachains accordingly. | 
| 2.c  | Add support for new compatible nodes in HRMP Scenario (Horizontall message passing) |[Commit adding new compatible nodes I](https://github.com/paraspell/xcm-sdk/commit/1d370faa5bd5850becab7d8e6fc2bf17de0620a6), [Commit adding new compatible nodes II](https://github.com/paraspell/xcm-sdk/commit/39c39e6290eebce04b6ca54f231786807c62e455) | Check for new Parachain support & update Parachains, that have new compatibility with other Parachains in HRMP Scenario & Update list of compatible Parachains accordingly.| 
| 3.  | Rework Utils.ts to remove huge switch that constructs message |[Reworked switch PR](https://github.com/paraspell/xcm-sdk/pull/31)| Rework construct XCM message function to not have switch and be more efficient in construction | 
| 4.a  | Deprecate Parachain-launch & replace it with Zombienet I |[UI-V2 Zombienet release commit](https://github.com/paraspell/ui-v2/commit/935639a6cbd106d6842958c3d23ebcc9966ef1fb)| Replace network startup configuration from Parachain-launch library into state of the art technology called Zombienet| 
| 4.b  | Deprecate Parachain-launch & replace it with Zombienet II |[Zombienet DOCS guide commit](https://github.com/paraspell/docs/commit/f164c33e6ac95b0b981471c9dccb04a1df90e166), [Zombienet readme guide](https://github.com/paraspell/ui-v2#zombienet---linux)|  Update ParaSpell Docs| 
| 5.  | Add suggestions we received in our previous grant evaluations (If not added already) |[Issue opened (As we are no longer in charge of subscaffold)](https://github.com/kodadot/sub-scaffold/issues/52),  [Issue opened & resolved on suggestion from phase 1 delivery](https://github.com/paraspell/docs/issues/1)| Add suggestions from our phase1 and phase2 proposal evaluations if they were not added already. |

**Additional Information**
Every aspect of project, that was defined in proposal, was implemented according to it. There were no changes required during development except for one. This is, that we decided to keep support for Parachain-launch library also so developers have more choices for launching their network which can be only beneficial. Invoice submitted along with this delivery.
