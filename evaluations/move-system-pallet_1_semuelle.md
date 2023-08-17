# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Substrate_Move_System_Pallet_1.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/eigerco/pallet-move/blob/c65bd6668774c76a9a45ab32853a16bc16f08329/LICENSE) | MIT |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | link | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | [doc/testing_guide.md](https://github.com/eigerco/pallet-move/blob/5c33a115fe6d27ba77f84a52e31c70fb75908b49/doc/testing_guide.md) | Very thorough testing guide |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/eigerco/pallet-move/blob/5c33a115fe6d27ba77f84a52e31c70fb75908b49/Dockerfile) | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | <ul><li>[ ] </li></ul> | link | Content: article that explains all of the research and findings done in the research phase, and how it shapes the project in the future. The research would include: <ul><li>analysis of the Pontem Move fork,</li><li>analysis of the Pontem MoveVM system pallet, evaluating its architecture and design decisions,</li><li>analysis of the current Move language restrictions, ABI and understanding if forking the language is still necessary,</li><li>analysis of the potential effects of forking the language and the toolchain if it is deemed necessary.</li></ul>Medium: A markdown design decision document in the repository. |
| 1. | System Pallet: Substrate Move | <ul><li>[ ] </li></ul> | link | We will create a Substrate system pallet that will provide the RPC calls as the initial interfaces for interacting with the Move VM. The Move VM port itself will not be implemented, all of the methods will be empty stubs.<br /> Solid code practices will be in place: CI/CD, tests, documentation, linting, and publication of the library to http://crates.io. |
| 2. | Rust crate: Substrate Move | <ul><li>[ ] </li></ul> | link | Forking the Move VM if deemed necessary. The alterations would include everything to create the virtual machine Substrate-compatible. |
| 3. | Rust crate: Substrate Move documentation | <ul><li>[ ] </li></ul> | link | Documentation of the alteration made for the MoveVM to be Substrate-compatible. Also, the whole process of how it was ported will be described, either in form of markdown documentation or detailed commenting on GitHub issues and PRs. |
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
