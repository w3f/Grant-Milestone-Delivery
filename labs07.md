# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** Please, provide a link to the initial accepted pull request of your application to the [Web3 Foundation Open Grants Program repository](https://github.com/w3f/Open-Grants-Program). 
* **Milestone Number:** The number of the milestone

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.


| Number | Deliverable | Specification |
| ----------- | --------------- | ----------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these test | |
| 1. | Substrate module: EVM | We will create EVM module which is fully Rust-based EVM implementation based on SputnikVM with all gas related stuff stripped off for the special purpose of consortium chain. It provides the state transition logic for LABS-based smart contracts. |
| 2. | Substrate module: Ethereum | We will create Ethereum module that provides emulation of Ethereum block processing for the EVM based on Frontier accordingly with all gas related stuff stripped off for the special purpose of consortium chain. |
| 3. | Substrate module: RPC-Ethereum | We will create RPC-Ethereum module as a compatibility layer for Ethereum’s Web3 RPC API methods based on Moonbeam. |
| 4. | Substrate module: Raft | We will create Raft module as an implementation of a Raft-based consensus mechanism (using TiKV’s Raft implementation) as an alternative to Ethereum’s default proof-of-work. This is useful for closed-membership/consortium settings where byzantine fault tolerance is not a requirement, and there is a desire for faster block times (on the order of milliseconds instead of seconds) and transaction finality (the absence of forking). |
| 5. | Substrate module: Permissioning| We will create Permissioning module as part of network permissioning model which controls which nodes can connect to a given node and also to which nodes the given node can dial out to.|
| 6. | LABS chain | We will create Substrate-based LABS chain that is fully compatible with Ethereum's Web3 API and EVM, but with all gas related stuff stripped off for the special purpose of consortium chain. In order to better cater for diverse enterprise-level needs, our LABS chain is designed to support multiple consensus mechanisms such as PoA, Ripple, Tendermint and so on other than Raft, and advanced features like enhanced network permissioning as well as private transactions will be added. In addition, both on-chain governance mechanics and cross-chain integration are in our plans based on Substrate and Polkadot technique stacks.
| 7. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

---------------

Our LABS chain’s Ethereum compatibility architecture work like Moonbeam, but devoted to consortium chains. A high-level interaction flow is shown below. A Web3 RPC call from a DApp or existing Ethereum developer tool, such as Truffle, is received by a LABS node. The node will have both Web3 RPCs and Substrate RPCs available, which means that you can use Ethereum or Substrate tools when interacting with a LABS node. These RPC calls are handled by associated Substrate runtime functions. The Substrate runtime checks signatures and handles any extrinsics. Smart contract calls are ultimately passed to the EVM to execute the state transitions.
 
