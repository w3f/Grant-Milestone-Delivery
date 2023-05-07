# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/PrivaDEX_aggregator.md
- **Milestone:** 3
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/kapilsinha/privadex/blob/b6dff270aa49c83a5bfa86fefbc7e83895631625/LICENSE) | mostly SSPL, _not_ GPLv3 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | link | Good testing instructions. Inline docs could do with improving. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [dex_aggregator](https://github.com/kapilsinha/privadex/blob/b6dff270aa49c83a5bfa86fefbc7e83895631625/dex_aggregator/executor/README.md#docker-testing-guide) | Same as M1+M2 |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [kapilsinha/privadex](https://github.com/kapilsinha/privadex/blob/b6dff270aa49c83a5bfa86fefbc7e83895631625/Dockerfile) | Does not compile for cargo-contract 2.0.1 (1.5.0, however). |
| 1. | Rust Ethereum interface utils | <ul><li>[x] </li></ul> | [dex_aggregator/executor](https://github.com/kapilsinha/privadex/tree/b6dff270aa49c83a5bfa86fefbc7e83895631625/dex_aggregator/executor/src/eth_utils) | — |
| 2. | Rust Substrate interface utils | <ul><li>[x] </li></ul> | [dex_aggregator/executor](https://github.com/kapilsinha/privadex/tree/b6dff270aa49c83a5bfa86fefbc7e83895631625/dex_aggregator/executor/src/substrate_utils) | — |
| 3. | Substrate extrinsic signature and construction utils | <ul><li>[x] </li></ul> | [dex_aggregator/executor](https://github.com/kapilsinha/privadex/tree/b6dff270aa49c83a5bfa86fefbc7e83895631625/dex_aggregator/executor/src) | — |
| 4. | Phat Contract controller/driver | <ul><li>[x] </li></ul> | [dex_aggregator/executor](https://github.com/kapilsinha/privadex/blob/b6dff270aa49c83a5bfa86fefbc7e83895631625/dex_aggregator/executor/src/lib.rs#L182) | — |


## General Notes

- —
