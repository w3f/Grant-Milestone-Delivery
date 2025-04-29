# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/substrate-evm-adapter.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/subclone/subeth/blob/eccab89ed6d02f90248d95c286889cd36a934678/LICENSE) | MIT |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [/docs](https://github.com/subclone/subeth/tree/eccab89ed6d02f90248d95c286889cd36a934678/docs) | Good inline docs and tutorials |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [README](https://github.com/subclone/subeth/blob/eccab89ed6d02f90248d95c286889cd36a934678/README.md) | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/subclone/subeth/blob/eccab89ed6d02f90248d95c286889cd36a934678/Dockerfile) | — |
| 1. | ETH-RPC Adapter | <ul><li>[ ] </li></ul> | link | We will create a generic ETH-RPC Adapter service for Substrate chains. It will support the most essential ETH RPC calls to make it work with the existing tools. Main goals here will be ability to connect to Metamask, `web3.js`, read Substrate chain's pallets' state and support subscriptions. Adapter will have option of running local `smoldot` instance or connecting to remote RPC node. |
| 2. | Deno module | <ul><li>[ ] </li></ul> | link | We will create a Deno module that can connect to Substrate chain as an ETH-RPC adapter + light client. |
| 3. | Javascript package | <ul><li>[ ] </li></ul> | link | We will provide a javascript package that can connect to Substrate chain as an ETH-RPC adapter + light client. |
| 4. | End-to-end tests | <ul><li>[ ] </li></ul> | link | We will provide comprehensive end-to-end tests for the adapter. |
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
