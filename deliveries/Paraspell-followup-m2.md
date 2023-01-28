# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [ParaSpell_follow-up.md](https://github.com/w3f/Grants-Program/blob/master/applications/ParaSpell_follow-up.md)
* **Milestone 1 delivery** [Paraspell follow-up m1.md](https://github.com/dudo50/Grant-Milestone-Delivery/blob/master/deliveries/ParaSpell-followup-m1.md)
* **Milestone Number:** 2

**Context** 

Milestone delivered upgrades for SDK, transforming it into builder pattern and making it into monorepo partially (Which can help it to be more diverse in future as it will grow bigger supporting more pallets)

**Deliverables**


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[MIT](https://github.com/paraspell/sdk/blob/main/LICENSE)| MIT| 
| 0b.  | Documentation |[Usage guide file](https://github.com/paraspell/xcm-sdk/blob/main/README.md)| Inline documentation of code, as well as usage guide with all necessary commands, included in repository (The inline documentation placed into files where needed, otherwise functions were self-descriptive)| 
| 0c.  | Testing guide |[Added tests PR](https://github.com/paraspell/xcm-sdk/pull/19), [Testing guide](https://github.com/paraspell/xcm-sdk/tree/main/#-development)| Core functionality & user guide will be covered in repository documentation as well as SDK UNIT tests for core functionality| 
| 0d.  | Docker |[Commit updating UI to newest version](https://github.com/paraspell/ui-v1/commit/5dea10c4e814b7f0123441858c907c31fca0b081), [Guide on launching dockerized version](https://github.com/paraspell/ui#start-application-in-docker-container) | Docker file launching latest version of ParaSpell UI is ready| 
| 1.  | Add support for checking data that does not change |[Implementing constants that do not change like node id and asset decimals](https://github.com/paraspell/sdk/commit/aea02541f7168d7a7f566b7311fcf70f6a977115)| There are things that do not change, such as base token configuration (Polkadot, DOT token, 10 decimals), (Astar, ASTR, 18 decimals) This can be imported from `@polkadot/network` library to have better support for different transfer scenarios | 
| 2 | Rewrite SDK to builder pattern |[Builder pattern commit](https://github.com/paraspell/sdk/commit/74fba22522449a75ecdc82a394ff2336d9c1ec05), [Builder pattern usage guide](https://github.com/paraspell/xcm-sdk/tree/main#currently-implemented-pallets)| Best thing we can do to support multiple pallets and make it simplier for developers would be a Builder pattern functionality would look like: `import { Builder } as ‘@paraspell/sdk’` and then building of call would be something in sence: `const call = Builder(api).from(‘bsx’).to(‘ksm’).teleportTokens(‘KSM’).addr('destinationAddr').sum(currencySum).asV3().build()`| 
| 3.  | Make a map of compatible <chain, pallet> |[xcmPallet map feature](https://github.com/paraspell/xcm-sdk/commit/8faa6ffb4e3e8640dd4a59008d2d456a1be0cefd), [usage guide for testing](https://github.com/paraspell/xcm-sdk/commit/c6f4bfa810444eab9f101dcdc2062ff7d7ca86b0)| Before each SDK release there should be a script that connects to the compatible nodes, checks all relevant available pallets `xTokens`, `polkadotXCM`, `asset pallets`, `HRMP pallets`) and saves them to the map.| 
| 4.  | Use [turborepo](https://turbo.build/) |[Monorepo branch](https://github.com/paraspell/xcm-sdk/tree/beta-monorepo)| Remake package into `monorepo` for easier importing and cleaner use. (NOTE: This is put onto different branch because it is experimental. Other projects can choose to implement it for good base and for direct access to SDK & We plan to expand into other useful SDKs so it will be good base.)| 

**Additional Information**
Every aspect of project, that was defined in proposal, was implemented according to it. There were no changes required during development. Invoice submitted along with this delivery.
