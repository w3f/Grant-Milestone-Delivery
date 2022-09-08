# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Signac](https://github.com/w3f/Grants-Program/blob/master/applications/signac.md).
* **Milestone Number:** e.g. 1

**Context**

The first milestone covers:
- Nx plugin for setting up ink! smart contract workspace
- Generator with ejs so it has same experience as `cargo-contract`
- Executor connected to `cargo-contract` for building, testing
- Linter for overall rust code
- Github workflow ci script for compiling ink contract on push to git repo on initialization

**Deliverables**

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | At least I left [README](https://github.com/digitalnativeinc/signac/tree/main/packages/nxink#readme) for brief description.|
| 0c. | Testing Guide | Build first with `yarn build` then run E2E test code `yarn e2e`, run this then temporary build `tmp` folder will appear in the root project directory  |
| 0d. | Docker | This is a javascript library that does not need docker. |
| 1. | Nx Plugin Repo | [repo](https://github.com/digitalnativeinc/signac/tree/main/packages/nxink)  |
