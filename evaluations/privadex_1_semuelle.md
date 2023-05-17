# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/PrivaDEX_aggregator.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [root](https://github.com/kapilsinha/privadex/blob/c3e1b00c3e18fb86b5e0b1c0538db06a505d1aa9/LICENSE), [indexer](https://github.com/kapilsinha/privadex/blob/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_indexer/LICENSE) | SSPL, GPL3 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/kapilsinha/privadex/blob/c3e1b00c3e18fb86b5e0b1c0538db06a505d1aa9/README.md), [graph generation example](https://github.com/kapilsinha/privadex/blob/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_aggregator/routing/README.md#running-examples) | Inline docs sporadic. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [/dex_aggregator](https://github.com/kapilsinha/privadex/tree/c3e1b00c3e18fb86b5e0b1c0538db06a505d1aa9/dex_aggregator) | See READMEs in subfolders. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/kapilsinha/privadex/blob/c3e1b00c3e18fb86b5e0b1c0538db06a505d1aa9/Dockerfile) | — |
| 1. | Price feed for ArthSwap | <ul><li>[x] </li></ul> | [dex_indexer](https://github.com/kapilsinha/privadex/tree/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_indexer) | Good documentation and tooling; very easy to set up and use. |
| 2. | Price feed for StellaSwap | <ul><li>[x] </li></ul> | [dex_indexer](https://github.com/kapilsinha/privadex/tree/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_indexer) | see above | <ul><li>[x] </li></ul> | [dex_indexer](https://github.com/kapilsinha/privadex/tree/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_indexer) | see above |
| 3. | Price feed for BeamSwap | <ul><li>[x] </li></ul> | [dex_indexer](https://github.com/kapilsinha/privadex/tree/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_indexer) | see above | <ul><li>[x] </li></ul> | [dex_indexer](https://github.com/kapilsinha/privadex/tree/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_indexer) | see above |
| 4. | Rust GraphQL client | <ul><li>[x] </li></ul> | [dex_aggregator/routing](https://github.com/kapilsinha/privadex/blob/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_aggregator/routing/src/graphql_client.rs) | — |
| 5. | Chain metadata store | <ul><li>[x] </li></ul> | [dex_aggregator/chain_metadata](https://github.com/kapilsinha/privadex/tree/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_aggregator/chain_metadata) | — |
| 6. | Graph library | <ul><li>[x] </li></ul> | [dex_aggregator/routing](https://github.com/kapilsinha/privadex/tree/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_aggregator/routing/src/graph) | — |
| 7. | Network graph construction | <ul><li>[x] </li></ul> | [dex_aggregator/routing](https://github.com/kapilsinha/privadex/blob/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_aggregator/routing/src/graph_builder.rs) | — |


## General Notes

- —
