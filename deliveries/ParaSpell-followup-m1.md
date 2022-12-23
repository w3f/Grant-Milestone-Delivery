# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [ParaSpell_follow-up.md](https://github.com/w3f/Grants-Program/blob/master/applications/ParaSpell_follow-up.md)
* **Milestone Number:** 1

**Context** 

Milestone delivered upgrades for SDK and brought Subscaffold template which is template that allows new devs to start hacking on Web3 in matter of minutes. All features were implemented according to plan.

**Deliverables**


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[MIT](https://github.com/paraspell/sdk/blob/main/LICENSE)| MIT| 
| 0b.  | Documentation |[Transfer.ts file](https://github.com/paraspell/sdk/blob/beta-pre-release/src/utils.ts),<br > [Usage guide file](https://github.com/paraspell/sdk/blob/beta-pre-release/README.md)| Inline documentation of code, as well as usage guide with all necessary commands, included in repository (The inline documentation placed into files where needed, otherwise functions were self-descriptive)| 
| 0c.  | Testing guide |[Tests and refined unit testing commit](https://github.com/paraspell/sdk/commit/2747e85a0683fa652b8799365ac9cefd25251512#diff-7c8329b110fe849d911fcd5426704c9e41afb3dec9ec60d46c277391a12d6011), [Testing guide commit](https://github.com/paraspell/sdk/commit/3dd68b84406fd95ad8f2069051e7d6a44b575552)| Core functionality & user guide will be covered in repository documentation as well as SDK UNIT tests for core functionality| 
| 0d.  | Docker |[Commit updating UI to newest SDK version](https://github.com/paraspell/ui/commit/af85a7014e0aca8e444b6f7dfd8216d8bc246476), [Guide on launching dockerized version](https://github.com/paraspell/ui#start-application-in-docker-container) | Docker file launching latest version of ParaSpell UI is ready| 
| 1.  | Create scaffold template for Web3 projects |[Subscaffold template repository link](https://github.com/paraspell/sub-scaffold)|We provide simple template on Git for Web3 dApps to allow users to start developing and deploying in just minutes, this template will contain different libraries important for Web3 development already preinstalled. Languages planned to be used are Typescript. Stack that will be used is Vue3 (Nuxt 3), pnpm package manager, Polkadot API libraries (Use KodaDot packages if applicable), ParaSpell SDK, UI will consist of basic components (address input (checks if address entered is valid), ballance input (no longer necessity to input lenghty amounts, will have sum conversions) etc.. ), wallet management (PolkadotJS, Talisman, Subwallet). | 
| 2 | Implement support for checking asset compatibility through `asset pallet` |[Asset pallet commit](https://github.com/paraspell/sdk/commit/2747e85a0683fa652b8799365ac9cefd25251512)| Each compatible node, that has ability to check which tokens it supports are possible to be automatically queried by command from `package.json` with command `pnpm updateAssets`. SDK also allows to query these pulled compatible assets using simple functions mentioned in readme and commit.| 
| 3.a  | Add support for nodes without xTokens pallet I |[Commit adding compatible polkadotXCM nodes](https://github.com/paraspell/sdk/commit/9fc45356f7976066b0ee9ee5c44e1df4be35ed6a)| Implemented  support for transfer scenario Parachain to Relay chain for nodes that do not have xTokens pallet but have polkadotXCM or other XCM pallet. SDK is be able to determine which pallet to use on which Parachain automatically. These nodes can transfer native Relay chain tokens upwards to Relay chain.| 
| 3.b  | Add support for nodes without xTokens pallet II |[Commit adding compatible polkadotXCM nodes](https://github.com/paraspell/sdk/commit/9fc45356f7976066b0ee9ee5c44e1df4be35ed6a)| Implemented  support for transfer scenario Parachain to Parachain for nodes that do not have xTokens pallet but have polkadotXCM or other XCM pallet. SDK is be able to determine which pallet to use on which Parachain automatically. These nodes can transfer their native tokens into another Parachains which have HRMP channel with them.| 
| 4.  | Make SDK easier to use |[Merging scenarios commit](https://github.com/paraspell/sdk/commit/e7921bc68db74e6c2e2d3fc23166d145f063b3e3)| Implemented merge Parachain to Parachain & Parachain to Relay chain scenarios in SDK into one scenario that will be able to adapt based on details provided (if destination node id not provided, then assume transfer is for relay chain, also if token is compatible with relay chain), this will replace need for calling two functions for each scenario with only one function covering both scenarios - send() instead paratopara() or paratorelay()| 

**Additional Information**
Every aspect of project, that was defined in proposal, was implemented according to it. There were no changes required during development. Invoice submitted along with this delivery.
