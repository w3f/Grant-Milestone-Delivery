# Evaluation

- **Status:** in progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/substrate-evm-adapter.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Notes/Specification |
| -----: | ----------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [License](https://github.com/subclone/subeth/blob/main/LICENSE) | MIT |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Documentation](https://github.com/subclone/subeth/blob/main/INSTRUCTIONS.md) | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Tests](https://github.com/subclone/subeth/blob/main/chain/pallets/evm-adapter/src/tests.rs) | Core functions will be fully covered by comprehensive unit and integration tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Docker](https://github.com/subclone/subeth/blob/main/chain/Dockerfile) | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | <ul><li>[x] </li></ul> | [Article](https://medium.com/@subclone/subeth-bridging-ethereum-tools-to-substrate-chains-dfd81547d802) | I will publish an article that explains the complete lifecycle and future plans of the project |
| 1. | EVM Adapter Pallet | <ul><li>[x] </li></ul> | [evm-adapter](https://github.com/subclone/subeth/tree/main/chain/pallets/evm-adapter) | We will create a pallet that will be responsible for bridging the gap between the ETH RPC adapter and the Substrate chain. It will have the ability to dispatch FRAME calls, opt-in possibility to execute EVM bytecode, and handle account mapping. Another main responsibility of the pallet will be handling signature verification. Some parts of this pallet can be inspired from `frontier`'s pallet `pallet-ethereum` but needs refinement and some modification. |
| 2. | Substrate Node | <ul><li>[x] </li></ul> | [Template node](https://github.com/subclone/subeth/tree/main/chain) | We will create a Substrate node that has two runtimes: with and without the `pallet-evm`. Both will contain `evm-adapter` pallet, but only the one with `pallet-evm` will be able to execute EVM bytecode. This will demonstrate two main use-cases of this pallet. |
| 3. | MVP Demo DApp | <ul><li>[x] </li></ul> | [Simple dApp](https://github.com/subclone/subeth/tree/main/simple-dapp) | We will provide a small EVM DApp that demonstrates the integration of the pallet and RPC adapter. This will be a basic web page that can sign and send custom extrinsic with Metamask, read the state of Substrate pallets. |
| 4. | `docker-compose` | <ul><li>[x] </li></ul> | [docker-compose](https://github.com/subclone/subeth/blob/main/docker-compose.yml) | We will provide a `docker-compose` file that will run the whole project. |

# General Notes
