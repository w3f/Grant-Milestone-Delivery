# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/iris.md
* **Milestone Number:** 3

**Context**
This milestone delivers the first functional dapp built on top of the iris runtime. We introduce the iris asset exchange, a smart contract hosted on the iris blockchain that realizes a data marketplace to allow data owners and consumer to buy and sell access to data (via data-assets). The contract uses a chain extension, also developed as part of this milestone, to interact with the iris runtime. We also deliver updates to the user interface and runtime storage, including enhancements to the way we read and write to/from storage as well as built functionality to interact with the iris asset exchange. Lastly, we deliver the iris-ledger pallet which provides a locking mechanism that owners and sellers leverage from the asset exchange in order to lock currency and submit payments for data-assets.

Prerelease: https://github.com/iridium-labs/substrate/releases/tag/v0.0.3

Futher details can be found in the docs [here](https://iridium-labs.github.io/)

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| 0a. | License | [Apache 2](https://github.com/iridium-labs/substrate/blob/iris-milestone-2/LICENSE-APACHE2) | No change to licenses used in Substrate |
| 0b. | Documentation | https://iridium-labs.github.io/ | The mdbook source is found at: https://github.com/iridium-labs/iris-docs |
| 0c. | Testing Guide | https://docs.google.com/document/d/1EUf8YUi3Gnr05weutoH-TTLpOClHHgKOTlLVhX61Frg/edit?usp=sharing | |
| 0d. | Docker | [iris](https://hub.docker.com/repository/docker/iridiumlabs/iris), [UI](https://hub.docker.com/repository/docker/iridiumlabs/iris-ui) | The documentation (0b) outlines how to run both docker images. |
| 0e. | Article | https://medium.com/iridium/iris-a-next-gen-decentralized-storage-layer-part-3-aa6e8492cc09 | |
| 1. | Substrate module: iris-assets Runtime Module Enhancements | https://github.com/iridium-labs/substrate/blob/iris_milestone_3/bin/node-template/pallets/iris-assets/src/lib.rs | Simplified runtime storage, additional security and checks, use the assets pallet to query and verify ownership and balances  |
| 2. | Custom RPC Endpoint | https://github.com/iridium-labs/substrate/tree/iris_milestone_3/bin/node-template/pallets/iris-assets/rpc | The implementation was moved to the iris-assets module, parameters modified to accept only asset id, additional secrutiy on the extrinsic which requests data be added to offchain storage.  |
| 3a. | Iris Runtime: Contracts Pallet | https://github.com/iridium-labs/substrate/blob/ff629c867b523a18526359360d1fb55f23a4aa90/bin/node-template/runtime/src/lib.rs#L252 | The contracts pallet was added to the iris runtime |
| 3b. | Iris Runtime: Chain Extension | https://github.com/iridium-labs/substrate/blob/ff629c867b523a18526359360d1fb55f23a4aa90/bin/node-template/runtime/src/lib.rs#L813 | The chain extension lets smart contracts interact with the iris runtime. Usage details here: https://iridium-labs.github.io/contracts_chain_extension.html |
| 3c. | Contracts: The Iris Asset Exchange | https://github.com/iridium-labs/contracts/tree/iris_milestone_3/iris_asset_exchange | The Iris Asset Exchange is a smart contract on the iris blockchain that lets users buy and sell access to data in iris, demonstrating usage of the chain extension as well as integrated with the user interface |
| 4 | Iris Runtime: Iris-Ledger pallet | https://github.com/iridium-labs/substrate/tree/iris_milestone_3/bin/node-template/pallets/iris-ledger | Simple pallet to lock, unlock, and transfer native tokens. This was not included in the proposal as it's necessity was only discovered during development. |
| 5. | User Interface | https://github.com/iridium-labs/ui/tree/iris_milestone_3 | |

**Additional Information**
A   demo video has been created [here](https://youtu.be/sx1TlQ07YGQ)

