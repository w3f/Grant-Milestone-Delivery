# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/225
* **Milestone:** 1
* **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x]</li></ul> | [LICENSE](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/d8bcd069bee0d6fdbda23dbdba05aeb9108a8bb1/LICENSE) | Apache 2.0
| 0b. | Documentation | <ul><li>[x]</li></ul> | | Inline documentation and basic README provided, integration guide not yet but can be delivered with M2
| 0ca. | Testing | <ul><li>[x]</li></ul> | [Tarpaulin Report](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/master/reports/tarpaulin-report.html)
| 0cb. | Testing Guide | <ul><li>[x]</li></ul> | [Instructions](https://github.com/equilibrium-eosdt/equilibrium-curve-amm/tree/d8bcd069bee0d6fdbda23dbdba05aeb9108a8bb1#tests)
| 1a. | Assets will be handled using a new assets trait. | <ul><li>[x]</li></ul> | https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/master/pallets/equilibrium-curve-amm/src/lib.rs#L197 |  | 
| 1b. | We will implement a pool storage structure for handling different asset pools with different parameters. | <ul><li>[x]</li></ul> | https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/master/pallets/equilibrium-curve-amm/src/lib.rs#L89 |  |
| 2. | We will implement methods to set up custom asset pools. | <ul><li>[x]</li></ul> | https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/master/pallets/equilibrium-curve-amm/src/lib.rs#L123 |  |
| 3a. | We will implement a method to iteratively calculate Curve’s invariant D non-overflowing integer operations. | <ul><li>[x]</li></ul> | https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/master/pallets/equilibrium-curve-amm/src/lib.rs#L272 |  |
| 3b. | We will implement a method to iteratively calculate points on the bonding curve in non-overflowing integer operations. | <ul><li>[x]</li></ul> | https://github.com/equilibrium-eosdt/equilibrium-curve-amm/blob/master/pallets/equilibrium-curve-amm/src/lib.rs#L380 |  |

## General Notes

Comprehensive inline documentation and good quality code. The team hasn't just ported the Solidity implementation but created their own Substrate version, down to explaining the theory in their own words.
