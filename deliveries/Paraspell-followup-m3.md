# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [ParaSpell_follow-up.md](https://github.com/w3f/Grants-Program/blob/master/applications/ParaSpell_follow-up.md)
* **Milestone Number:** 3

**Context** 

Milestone delivered upgraded SDK release, adding support into UI, comprehensive website with tutorial to use SDK. It also brought Medium article about development and fresh new UI-V2 which is deployed and can be tested with just building localhost network not the application anymore.

**Deliverables**


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[MIT SDK](https://github.com/paraspell/sdk/blob/main/LICENSE), [MIT UI-V2](https://github.com/paraspell/ui-v2/blob/main/LICENSE)| MIT| 
| 0b.  | Documentation |[Usage guide file](https://github.com/paraspell/ui-v2/blob/main/README.md)| Inline documentation of code, as well as usage guide with all necessary commands, included in repository (The inline documentation placed into files where needed, otherwise functions were self-descriptive)| 
| 0c.  | Testing guide |[Testing guide SDK](https://github.com/paraspell/xcm-sdk/tree/main#-development),[Testing guide UI-V2](https://github.com/paraspell/ui-v2#31-prerequisites)| Core functionality & user guide will be covered in repository documentation as well as SDK UNIT tests for core functionality| 
| 0d.  | Docker |[Update UI to newest version of SDK](https://github.com/paraspell/ui-v1/commit/5dea10c4e814b7f0123441858c907c31fca0b081), [Guide on launching dockerized version](https://github.com/paraspell/ui-v2#start-application-in-docker-container) | Docker file launching latest version of ParaSpell UI is ready| 
| 0e. | Article | [Medium article](https://medium.com/@dudo50/sdk-meant-to-unify-cross-chain-experience-on-polkadot-paraspell-xcm-sdk-ec8a781f4f57)| We will publish Medium article about development of SDK |
| 1.  | Release new functionality |[NPM Commit](https://github.com/paraspell/xcm-sdk/commit/51de81fc0a060a3fdeec004de8c4ddee71c70c6a)| Ability to install new version of package from npm | 
| 2.a | Update ParaSpell UI I |[Update UI-V1 to Builder commit](https://github.com/paraspell/ui-v1/commit/2d67280b334f9f18d40c2ce68d831c1d61e6c80f)| Update ParaSpell XCM UI Parachain to Parachain Scenario screen to be able to use new SDK (Add or remove some variables according to new requirements from SDK functions)| 
| 2.b  | Update ParaSpell UI II |[Update UI-V1 to Builder commit](https://github.com/paraspell/ui-v1/commit/2d67280b334f9f18d40c2ce68d831c1d61e6c80f)| Update ParaSpell XCM UI Relay chain to Parachain Scenario screen to be able to use new SDK (Add or remove some variables according to new requirements from SDK functions)| 
| 2.c  | Update ParaSpell UI III |[Update UI-V1 to Builder commit](https://github.com/paraspell/ui-v1/commit/2d67280b334f9f18d40c2ce68d831c1d61e6c80f)| Update ParaSpell XCM UI Parachain to Relay chain Scenario screen to be able to use new SDK (Add or remove some variables according to new requirements from SDK functions)| 
| 3.  | Add comprehensive Wiki guide |[Wiki guide for UI & SDK](https://paraspell.github.io/docs/)| We will add Wiki guide, that will specify SDK implementation to another dApps, different SDK functionalities & Guide for Parachain creators that wish to add their freshly baked node to the list of compatible nodes. | 
| 4.  | Use scaffold template from Milestone 1 to update UI |[UI-V2](https://github.com/paraspell/ui-v2)| This will update ParaSpell UI from Vue 2 into Vue3 and nuxt. It will also be good demonstration for template usage & it will make UI more compatible with other dApps. | 
| 5.  | Integrate suggestions from [evaluation](https://github.com/w3f/Grant-Milestone-Delivery/blob/1343c66d74a1078b2a30972463a614737ed8aa92/evaluations/paraspell_1_keeganquigley.md) |[Features added in UI-V2](https://github.com/paraspell/ui-v2)| Integrate suggestions regarding Wiki, module for asset conversions to not need to write so many 0s & replace button text `Log in with:` with account name once logged in | 


**Additional Information**
Every aspect of project, that was defined in proposal, was implemented according to it. There were no changes required during development. Invoice submitted along with this delivery.
