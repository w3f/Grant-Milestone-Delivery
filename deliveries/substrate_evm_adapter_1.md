# Milestone Delivery :mailbox: Substrate EVM Adapter, MS1

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Substrate EVM Adapter](https://github.com/w3f/Grants-Program/blob/master/applications/substrate-evm-adapter.md)
* **Milestone Number:** 1

**Context** (optional)

This milestone's main goal was to be able to expose an ETH RPC from Substrate node to make it compatible with ethereum development tools like Metamask and Foundry, without making any changes to the Substrate node itself.

**Deliverables**

| Number | Deliverable | Link | Notes/Specification |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | [License](https://github.com/subclone/subeth/blob/main/LICENSE) | MIT |
| **0b.** | Documentation | [Docs](https://github.com/subclone/subeth/tree/main/docs) | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up the adapter and connect it to the familiar developer tools. |
| **0c.** | Testing and Testing Guide | [Testing](https://github.com/subclone/subeth/blob/main/src/tests.rs) and [testing guide](https://github.com/subclone/subeth/blob/main/README.md) | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. Each individual file contains unit tests, where it is possible. |
| **0d.** | Docker | [Dockerfile](https://github.com/subclone/subeth/blob/main/Dockerfile) | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | ETH-RPC Adapter | [Subeth](https://github.com/subclone/subeth/tree/main) | We will create a generic ETH-RPC Adapter service for Substrate chains. It will support the most essential ETH RPC calls to make it work with the existing tools. Main goals here will be ability to connect to Metamask, `web3.js`, read Substrate chain's pallets' state and support subscriptions. Adapter will have option of running local `smoldot` instance or connecting to remote RPC node. |
| 2. | Deno module | [Deno module](https://github.com/subclone/subeth/tree/main/packages/deno) | We will create a Deno module that can connect to Substrate chain as an ETH-RPC adapter + light client. Currently a simple package that runs precompiled binary. Can be extended to wasm package in the next milestone. |
| 3. | Javascript package | [Js package](https://github.com/subclone/subeth/tree/main/packages/js) | We will provide a javascript package that can connect to Substrate chain as an ETH-RPC adapter + light client. Currently a simple package that runs precompiled binary. Can be extended to wasm package in the next milestone. |
| 4. | End-to-end tests | [e2e-tests](https://github.com/subclone/subeth/blob/main/src/tests.rs) | We will provide comprehensive end-to-end tests for the adapter. Spawns the adapter as a child process and validates ETH RPC endpoints. |

**Additional Information**

`smoldot` support is currently experimental in `subxt` and in general `smoldot` is pretty unstable as a real time RPC node.

Some known limitations and issues:

- When using a light client it might crash from time to time, causing the light client to be banned from the network but it will try to reconnect after timeout. This issue is not observed when remote RPC node is used.
- The adapter is not able to handle all the edge cases of the ETH RPC, but it should be able to handle the most common ones.
