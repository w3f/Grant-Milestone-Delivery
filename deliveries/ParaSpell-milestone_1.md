
﻿
# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**   - Invoice will be uploaded within one week from initial commit.

* **Application Document:** [ParaSpell.md](https://github.com/w3f/Grants-Program/blob/master/applications/ParaSpell.md)
* **Milestone Number:** 1

**Context** 
Milestone delivered fully working ParaSpell release, all features were implemented according to plan.

**Deliverables**


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[Lincense](https://github.com/dudo50/ParaSpell/blob/main/LICENCE)| MIT| 
| 0b.  | Documentation |[Readme.md](https://github.com/dudo50/ParaSpell/blob/main/README.md) <br >[Inline documentation commit](https://github.com/dudo50/ParaSpell/commit/2fb7b9c2a4bf6bf9602abced3f5662be96f2bc65)| Inline documentation of code, as well as startup  configuration with all necessary commands, included in repository| 
| 0c.  | Testing guide |[Readme.md](https://github.com/dudo50/ParaSpell/blob/main/README.md)| Core functionality & user guide will be covered in repository documentation| 
| 0d.  | Docker |[Dockerfile](https://github.com/dudo50/ParaSpell/blob/main/Dockerfile) [Docker commit](https://github.com/dudo50/ParaSpell/commit/cbb8a0a50a38825dd844336d24fd74ad8b223501)| Frontend Docker file will be ready| 
| 0e.  | Article |[Medium article sketch](https://medium.com/@dudo50/66f32b6fe9eb)| Medium article about development of ParaSpell| 
| 1.  | Wallet login |[Wallet login commit](https://github.com/dudo50/ParaSpell/commit/116e0eef5a64d904d6224eb1e49eff72040faf4e)| Developers can use their Polkadot js extension wallets to execute transactions XCM from their accounts.| 
| 2.a  | Full working fund transfer scenario 1 |[Transfer scenario commit](https://github.com/dudo50/ParaSpell/commit/7d254b1b6d052f71d55450c51ca2a2b01668a12b)| Fully working transaction  scenario 1 - Relay chain to Parachains| 
| 2.b  | Full working fund transfer scenario 2 |[Transfer scenario commit](https://github.com/dudo50/ParaSpell/commit/7d254b1b6d052f71d55450c51ca2a2b01668a12b)| Fully working transaction  scenario 2 - Parachains to Relay chain| 
| 2.c  | Full working fund transfer scenario 3 |[Transfer scenario commit](https://github.com/dudo50/ParaSpell/commit/7d254b1b6d052f71d55450c51ca2a2b01668a12b)| Fully working transaction  scenario 3 - Parachain to Parachain| 
| 3.a  | Callback support 1 |[Callback support 1 commit](https://github.com/dudo50/ParaSpell/commit/6b8fa74ff06268356674e634e34bb03090a0c9c7)| Added callback data support so developers/users can see information about their XCM transactions from UI and in real-time.| 
| 3.b  | Callback support 2 |[Callback support 2 commit](https://github.com/dudo50/ParaSpell/commit/e5d9652db32f1ab5e720b93492fc7b3387917948)| Added callback data support so developers/users can see information about HRMP channel calls from UI and in real-time.| 
| 4.  | ParaSpell SDK |[ParaSpell SDK](https://github.com/ParaSpell/sdk)| Move calls to separate NPM library| 
| 5.  | Guide to add new nodes to application and network |[ParaSpell Wiki](https://github.com/dudo50/ParaSpell/wiki)| Simplified and user-friendly wiki/guide for users to understand how to add new nodes to network startup configuration as well as to add/understand calls used in application| 

**Additional Information**
Every aspect of project, that was defined in proposal, was implemented according to it. There was only one change which had no effect on application and was approved by W3F team in following [commit 1145](https://github.com/w3f/Grants-Program/pull/1145) was change of nodes that were not yet fully compatible together. Making them compatible was not part of proposal. We plan on making follow-up grant proposal once we compile all new ideas that can make ParaSpell better.
