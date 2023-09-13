# Milestone Delivery :mailbox:
 
**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **[Application Document](https://github.com/w3f/Grants-Program/blob/master/applications/CosmWasmVM-CoreProduct.md)**
* **Milestone Number:**  1

**Context** (optional)
This document is for the submission of the first milestone for the CosmWasm VM implementation in Polkadot SDK (previously known as Substrate).

The CosmWasm VM uses [parity-wasmi](https://github.com/paritytech/wasmi) as interpeter,
and [cosmwasm-sdk](https://github.com/CosmWasm/cosmwasm/) for interface types. It is 
used to produce CosmWasm VM capable of running CosmWasm contracts which are runnable by reference `wasmd` (wasmd is a GO module for Cosmos chains with AOT native complication for CW contracts).

All features are supported (as defined by CosmWasm SDK feature flags).

[Pallet-cosmwasm](https://github.com/ComposableFi/composable/tree/main/code/parachain/frame/cosmwasm) integrates CW with Substrate storage, RPC, [CLI](https://github.com/ComposableFi/composable/tree/main/code/parachain/frame/cosmwasm/cli) and PolkadotJS. 

PolkadotJS or the CLI can be used to execute transactions and qeury contract state.

**Deliverables**

| Number | Deliverable | Link | 
| ------------- | ------------- | ------------- |
| 0a | License | [https://github.com/ComposableFi/composable/blob/main/code/parachain/frame/cosmwasm/License.md] | 
| 0b  | Documentation | [CosmWasm VM Docs](https://docs.composable.finance/products/cosmwasm-vm-overview), [CLI Docs](https://docs.composable.finance/developer-guides/cosmwasm-cli) | 
0c    | Testing   | [https://github.com/ComposableFi/composable/tree/main/code/parachain/frame/cosmwasm]       |        
|  0d          | Docker  | [https://hub.docker.com/r/composablefi/devnet]    | 
|  1a   | Development  | [Core Pallet](https://github.com/ComposableFi/composable/tree/main/code/parachain/frame/cosmwasm) | 
| 1b    | Development | Any pallet can be called via precompile contracts (CosmWasm messaging interface for pallets as if thry were usual contracts). XCM can be called via [this precompile](https://github.com/ComposableFi/composable/blob/main/code/xcvm/lib/core/src/transport/xcm/mod.rs), Pallet src has [Fuzzing test](https://github.com/ComposableFi/composable/tree/main/code/parachain/frame/cosmwasm/fuzz_targets)  
1c    | Testing | Benchamrks for pallet extrinics and gas metering of WASM instuctions are done using parity benchmarking infrastucture. You can run our devnet via the docker file or running `nix run composable#devnet-picasso` - Guide for running the CLI on a local network included in the CLI docs. CW20(analog of ERC-20) contract and 2 Composable contracts are embedded into genesis. VM can be tested via `cargo test`, examples of tests are [here](https://github.com/ComposableFi/cosmwasm-vm/blob/main/orchestrate/README.md), run of contracts in simulator and asserts of results. |

**Additional Information**

For the ease of checking, you can interact with CosmWasm contracts on Picasso rococo in addition to a local network. 