# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/PrivaDEX_aggregator.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/kapilsinha/privadex/blob/c3e1b00c3e18fb86b5e0b1c0538db06a505d1aa9/LICENSE) | Not GPL, but Server Side Public License |
| **0b.** | Documentation | <ul><li>[ ] </li></ul> | [README](https://github.com/kapilsinha/privadex/blob/c3e1b00c3e18fb86b5e0b1c0538db06a505d1aa9/README.md) | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can call the API to generate an execution plan. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [/dex_aggregator](https://github.com/kapilsinha/privadex/tree/c3e1b00c3e18fb86b5e0b1c0538db06a505d1aa9/dex_aggregator) | See READMEs in subfolders. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [link](https://github.com/kapilsinha/privadex/blob/c3e1b00c3e18fb86b5e0b1c0538db06a505d1aa9/Dockerfile) | — |
| 1. | Price feed for ArthSwap | <ul><li>[ ] </li></ul> | link | We will create a GraphQL API to scrape prices from ArthSwap's constant product AMM contracts. |
| 2. | Price feed for StellaSwap | <ul><li>[ ] </li></ul> | link | We will create a GraphQL API to scrape prices from StellaSwap's constant product AMM contracts. |
| 3. | Price feed for BeamSwap | <ul><li>[ ] </li></ul> | link | We will create a GraphQL API to scrape prices from BeamSwap's constant product AMM contracts. |
| 4. | Rust GraphQL client | <ul><li>[ ] </li></ul> | link | This Rust client will construct queries for the above GraphQL APIs and deserialize responses into Rust-native structs. |
| 5. | Chain metadata store | <ul><li>[ ] </li></ul> | link | This Rust crate will contain bridge, chain, DEX, and token metadata for the Polkadot ecosystem necessary to construct a complete network graph. |
| 6. | Graph library | <ul><li>[ ] </li></ul> | link | We will heavily leverage the existing Rust [graphlib](https://github.com/purpleprotocol/graphlib) library but make modifications to support no_std. |
| 7. | Network graph construction | <ul><li>[ ] </li></ul> | link | This will combine GraphQL queries and the chain metadata store to create the graph using the above graph library. |
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
