# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/225
* **Milestone:** 2
* **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5/LICENSE) | Apache 2.0
| 0b. | Documentation | <ul><li>[x] </li></ul> | Inline, [README](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/tree/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5#readme), [integration guide](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5/docs/INTEGRATION.md), [client API example](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5/client/README.md#client-api), [additional LaTeX documentation for M1](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5/docs/deducing-get_y-formulas.pdf) | Good inline documentation, grammar issues in supporting docs fixed.
| 0ca. | Testing | <ul><li>[x] </li></ul> | [Tests](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5/pallets/equilibrium-curve-amm/src/tests.rs), [Tarpaulin report](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5/reports/tarpaulin-report.html) | 85% line coverage
| 0cb. | Testing Guide | <ul><li>[x] </li></ul> | [Instructions](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/tree/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5#tests)
| 1a. | We will implement methods to work with asset pools: add liquidity. | <ul><li>[x] </li></ul> | [Implementation](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5/pallets/equilibrium-curve-amm/src/lib.rs#L807) |  |
| 1b. | We will implement methods to work with asset pools: remove liquidity. | <ul><li>[x] </li></ul> | [Implementation](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5/pallets/equilibrium-curve-amm/src/lib.rs#L1058) |  |
| 1c. | We will implement methods to exchange assets within pools. | <ul><li>[x] </li></ul> | [Implementation](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5/pallets/equilibrium-curve-amm/src/lib.rs#L977) |  |
| 2. | We will implement a mechanism to reward liquidity providers with LP tokens. | <ul><li>[x] </li></ul> |  Implementation within the above functions | Circular dependency on the generation of LP asset IDs. Implementation looks solid + test cases for this functionality included. |
| 3. | We will implement liquidity superfluidity: assets locked inside Curve liquidity pools may be further used in various lending protocols across the Polkadot ecosystem. | <ul><li>[x] </li></ul> |  | Not fully clear what the intended deliverable would have been. LP tokens represent liquidity locked in pools and can thus potentially be used to borrow against. |


## General Notes

Improved documentation and added an integration guide + client API example (out of scope for the grant).

Code is clean and well documented. The deliverables for this milestone are a bit further away from the reference implementation due to tighter integration with Substrate, but functionality still looks identical. Test coverage is also good, though no 1-to-1 comparison of test results with the original implementation has been made.
