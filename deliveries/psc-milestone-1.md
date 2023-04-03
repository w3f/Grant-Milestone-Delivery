# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/psc.md 
* **Milestone Number:** 1

**Context**

The main goals of the `Milestone 1` was to create base functionality of PSC(Polkadot Smart Chain).

- [x] **goal 1**: Transfer the Native Currency between relaychain and PSC through DMP/UMP.

- [x] **goal 2**: Support EVM and Ethereum-compatible apis on PSC, and use the Native Currency as evm gas fee.

- [x] **goal 3**: Bind EVM address and Substrate account, bind WASM assets and Erc20 tokens, deposit and withdraw fungible assets between WASM and EVM.

**Deliverables**

| Number  | Deliverable                            | Link                                                                              | Notes                                                                                                                                                      |
|---------|----------------------------------------|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                                | https://github.com/OmniBTC/PSC/blob/main/LICENSE                                  | GPLv3                                                                                                                                                      | 
| **0b.** | Documentation                          | https://github.com/OmniBTC/PSC/blob/main/README.md                                | [PSC README](https://github.com/OmniBTC/PSC/blob/main/README.md)                                                                                           |
| **0c.** | Testing and Testing Guide              | https://github.com/OmniBTC/PSC/blob/main/docs/test_guide.md                       | For unit test, run `cargo test --release`; For functional tests, follow this [test guide](https://github.com/OmniBTC/PSC/blob/main/docs/test_guide.md)     |
| **0d.** | Docker                                 | https://github.com/OmniBTC/PSC/blob/main/zombienet/psc-small-network.toml         | Use [zombienet](https://github.com/paritytech/zombienet) and [podman](https://podman.io/getting-started/installation) launch a local testnet with dockers. |
| 0e.     | Article                                | https://github.com/OmniBTC/PSC/blob/main/docs/substrate_and_evm_address_on_psc.md | Introduce how the Ethereum address and Substrste account are associated                                                                                    |
| 1.      | Substrate module: pallet-assets-bridge | https://github.com/OmniBTC/PSC/tree/main/pallets/assets-bridge                    | Bind EVM address and Substrate account, bind WASM assets and Erc20 tokens, deposit and withdraw fungible assets between WASM and EVM.                      |
| 2.      | Polkadot Smart Chain                   | https://github.com/OmniBTC/PSC                                                    | PSC is an Ethereum-compatible smart contract parachain with relaychain Native Currency as the Gas fee.                                                     |
| 3.      | Smart contracts: AssetsBridgeErc20     | https://github.com/OmniBTC/PSC/blob/main/contracts                                | Use pallet-assets-bridge as admin to mint and burn Erc20 tokens.                                                                                           |
