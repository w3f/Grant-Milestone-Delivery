# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/sol2ink-follow-up.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/727-Ventures/sol2ink/blob/6533e9eaad2307f50c82f3e1fc0f9c1f9e619819/LICENSE) | MIT |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [/docs](https://github.com/727-Ventures/sol2ink/tree/6533e9eaad2307f50c82f3e1fc0f9c1f9e619819/docs) | Docs deployed [here](https://727-ventures.github.io/sol2ink). Little inline documentation. |
| 0c. | Testing and Testing guide | <ul><li>[ ] </li></ul> | [w3f/Grant-Milestone-Delivery/pull/729](https://github.com/w3f/Grant-Milestone-Delivery/pull/729/files#diff-e3658381a6cdf9387fa211cee44900fdf905421145d70d4c606ab27ee441a22bR35) | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. Documentation will describe how to run these tests. |
| 0d. | Docker | <ul><li>[x] </li></ul> | [.github/workflows/ci.yml](https://github.com/727-Ventures/sol2ink/blob/6533e9eaad2307f50c82f3e1fc0f9c1f9e619819/.github/workflows/ci.yml) | Not technically Docker, but easy enough to run tests. |
| 1. | Website with guides | <ul><li>[x] </li></ul> | https://727-ventures.github.io/sol2ink/ | We will enhance the existing guides to reflect new features implemented in this milestone; The website with guides is something like an enhanced documentation, the inline documentation just describes the functions of the program, the guides go deeper into how it works, and it also contains a tutorial for usage of Sol2Ink |
| 2. | Split contract into traits | <ul><li>[x] </li></ul> | [main.rs](https://github.com/727-Ventures/sol2ink/blob/main/src/main.rs#L135-L175) | — |
| 3a. | Functions with value | <ul><li>[x] </li></ul> | [bc014e](https://github.com/727-Ventures/sol2ink/commit/bc014edcbb738a66c0bbbe2e063d5c93d9df75b4) | — |
| 3b. | Chained selectors | <ul><li>[ ] </li></ul> | link | Fix parsing of chained selectors |
| 3c. | Updating structs inside of a mapping | <ul><li>[x] </li></ul> | [7bb959](https://github.com/727-Ventures/sol2ink/commit/7bb959e4eabd5f9a922a26424e864dbf06036cff) | — |
| 3d. | Modifiers | <ul><li>[x] </li></ul> | [parser.rs](https://github.com/727-Ventures/sol2ink/blob/23ceea70fc31169df5f21123d7bacda047cff1cc/src/parser.rs#L1164) | — |
| 3e. | Fix bugs | <ul><li>[x] </li></ul> | see various commits on 727-Ventures/sol2ink | Uniswap V2 fully convertible |
| 4. | Library parsing | <ul><li>[x] </li></ul> | [79fc9e](https://github.com/727-Ventures/sol2ink/commit/79fc9e691dc9aee2475cf83a410596a6fed3b18f) | — |
| 5. | Handling dependencies and generalization | <ul><li>[x] </li></ul> | [pull/19](https://github.com/727-Ventures/sol2ink/pull/19) | — |
| 6. | Multi-file project parsing | <ul><li>[x] </li></ul> | [link](https://github.com/727-Ventures/sol2ink/blob/6533e9eaad2307f50c82f3e1fc0f9c1f9e619819/src/main.rs#L134) | — |


## General Notes

- —
