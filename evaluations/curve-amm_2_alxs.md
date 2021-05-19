# Evaluation

* **Status:** In Progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/225
* **Milestone:** 2
* **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5/LICENSE) | Apache 2.0
| 0b. | Documentation | <ul><li>[x] </li></ul> | | Good inline documentation, integration guide + client API instructions and example
| 0ca. | Testing | <ul><li>[x] </li></ul> | [Tests](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5/pallets/equilibrium-curve-amm/src/tests.rs), [Tarpaulin report](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5/reports/tarpaulin-report.html) | 85% line coverage
| 0cb. | Testing Guide | <ul><li>[x] </li></ul> | [Instructions](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/tree/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5#tests)
| 1a. | We will implement methods to work with asset pools: add liquidity. | <ul><li>[x] </li></ul> | https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5/pallets/equilibrium-curve-amm/src/lib.rs#L406 |  |
| 1b. | We will implement methods to work with asset pools: remove liquidity. | <ul><li>[x] </li></ul> | https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5/pallets/equilibrium-curve-amm/src/lib.rs#L681 |  |
| 1c. | We will implement methods to exchange assets within pools. | <ul><li>[x] </li></ul> | https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5/pallets/equilibrium-curve-amm/src/lib.rs#L582 |  |
| 2. | We will implement a mechanism to reward liquidity providers with LP tokens. | <ul><li>[x] </li></ul> |  https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/32c12fb4dbe8227da5e29a457ee28c6f02cfe4d5/pallets/equilibrium-curve-amm/src/lib.rs#L624 |  |
| 3. | Asset fluidity | <ul><li>[x] </li></ul> |  | Not fully clear what the intended deliverable would have been, LP tokens represent liquidity locked in pools potentially to be borrowed against. |


## General Notes

Improved documentation and added an integration guide + client API example.
