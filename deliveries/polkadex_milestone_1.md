# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** [Polkadex Application](https://github.com/w3f/Open-Grants-Program/pull/50). 
* **Milestone Number:** [Milestone 1](https://github.com/w3f/Open-Grants-Program/blob/master/applications/polkadex.md#milestone-1----optimize-trading-algorithm--check-for-data-errors)

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.
## Milestone #1 Deliverables
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Refactoring and Optimizing DEX Pallet |[Polkadex Pallet](https://github.com/Polkadex-Substrate/Polkadex/blob/master/pallets/polkadex/src/lib.rs)| We have minimized the storage access| 
| 2.  | Check for Data Errors | [Polkadex Pallet](https://github.com/Polkadex-Substrate/Polkadex/blob/master/pallets/polkadex/src/lib.rs) | We have followed Rust and Substrate Best Practices while building Polkadex. The chain will never panic.| 
| 3. | MarketData API  | [Market Data](https://github.com/Polkadex-Substrate/Polkadex/blob/master/pallets/polkadex/src/lib.rs#L113) | Polkadex saves each trading pairs highest, lowest price and volume traded for each block. It can be queried by custom trading bots using RPC for calculating technical indicators|
| 4. | MarketData RPC | [Market Data RPC](https://github.com/Polkadex-Substrate/Polkadex/blob/master/pallets/polkadex/rpc/src/lib.rs#L33) | Polkadex provides RPC for getting Market Data for a given block and trading pair |
| 5. | Unit Tests | [Unit Tests](https://github.com/Polkadex-Substrate/Polkadex/blob/master/tests/engine-tests/basic-tests.js) | We have provided a JS file that submits Limit Orders, Market Orders and then checks the blockchain state for expected results. NOTE: Please start the Polkadex Node before testing. |
| 6. | Documentation | [Polkadex Pallet](https://github.com/Polkadex-Substrate/Polkadex/blob/master/pallets/polkadex/src/lib.rs#L128) | Proper documentation for Dispatchable Functions, and Functions related to trading logic is given according to RUST best practices |
| 7. | Docker Image | [Docker Compose File](https://github.com/Polkadex-Substrate/Polkadex/blob/master/docker-compose.yml) | We have provided a docker compose file for building and starting a Polkadex node in development mode |


