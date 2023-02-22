# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/PrivaDEX_aggregator.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[ ] </li></ul> | [root](https://github.com/kapilsinha/privadex/blob/c3e1b00c3e18fb86b5e0b1c0538db06a505d1aa9/LICENSE), [indexer](https://github.com/kapilsinha/privadex/blob/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_indexer/LICENSE) | SSPL, GPL3 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/kapilsinha/privadex/blob/c3e1b00c3e18fb86b5e0b1c0538db06a505d1aa9/README.md), [execution plan example](https://github.com/kapilsinha/privadex/blob/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_aggregator/execution_plan/examples/compute_execution_plan.rs) | Inline docs sporadic. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [routing](https://github.com/kapilsinha/privadex/blob/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_aggregator/routing/README.md#privadex-routing), [execution_plan](https://github.com/kapilsinha/privadex/blob/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_aggregator/execution_plan/README.md) | Good docs and scripts. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/kapilsinha/privadex/blob/c3e1b00c3e18fb86b5e0b1c0538db06a505d1aa9/Dockerfile) | — |
| 1. | Smart order router algorithm | <ul><li>[x] </li></ul> | [dex_aggregator/routing](https://github.com/kapilsinha/privadex/tree/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_aggregator/routing/src/smart_order_router) | — |
| 2. | GraphSolution to ExecutionPlan converter | <ul><li>[x] </li></ul> | [execution_plan](https://github.com/kapilsinha/privadex/blob/c3e1b00c3e18fb86b5e0b1c0538db06a505d1aa9/dex_aggregator/execution_plan) | — |
| 3. | ExecutionPlan validator | <ul><li>[x] </li></ul> | [execution_plan](https://github.com/kapilsinha/privadex/blob/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_aggregator/execution_plan/src/validator.rs) | This Rust module will check invariants in the outputted ExecutionPlan to ensure it is valid and executable. |


## General Notes

- —
