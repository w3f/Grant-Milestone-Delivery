# Milestone Delivery :mailbox:


**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [https://github.com/w3f/Grants-Program/blob/master/applications/frontier-pos-template.md](https://github.com/w3f/Grants-Program/blob/master/applications/frontier-pos-template.md)
* **Milestone Number:** 1

**Context** 
This template introduces two new crates, [babe-consensus-data-provider](https://github.com/ChainSupport/frontier-pos-template/blob/main/client/babe-consensus-data-provider/src/lib.rs) and [ecdsa-keyring](https://github.com/ChainSupport/frontier-pos-template/blob/main/client/ecdsa-keyring/src/lib.rs). Their purpose is to simplify subsequent development and test code writing, as well as to adapt to Ethereum's pending transactions. Unit tests are required only for these two crates.  

The client and runtime code are sourced from [Substrate](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/bin/node) and [Frontier](https://github.com/polkadot-evm/frontier/tree/master/template), while also referencing implementations from Bifrost and Moonbeam. Following the principle of minimal code changes ensures more efficient and secure future updates and upgrades. Thus, there is no need for repetitive testing of the client and runtime. Nevertheless, achieving this compatibility took the longest development time, nearly a month. We aim to prevent other teams from engaging in similar redundant and time-consuming work.

Additionally, with our support, the testnet for [SuperEx](https://www.superex.com/) is now live at [https://test-scschain.novax.dev/](https://test-scschain.novax.dev/), and the mainnet will soon follow. Looking ahead, we hope to bring Polkadot technology to more and more teams. This template will serve as the development network for all supported networks.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License| https://github.com/ChainSupport/frontier-pos-template?tab=readme-ov-file#license| |
| 0b. | Documentation| https://github.com/ChainSupport/frontier-pos-template/blob/main/README.md | |
| 0c. | Testing and Testing Guide | https://github.com/ChainSupport/frontier-pos-template/blob/main/docs/tutorial.md#run-testnet-node | |
| 0d. | Docker | https://github.com/ChainSupport/frontier-pos-template/tree/main/docker | | 
| 1. | Client | https://github.com/ChainSupport/frontier-pos-template/tree/main/node/cli | | 
| 2. | crate: babe-consensus-data-provider | https://github.com/ChainSupport/frontier-pos-template/blob/main/client/babe-consensus-data-provider/src/lib.rs | Provide unit tests|
| 3. | crate: ecdsa-keyring | https://github.com/ChainSupport/frontier-pos-template/blob/main/client/ecdsa-keyring/src/lib.rs | Provide unit tests.|
| 4. | Friendly code structure | https://github.com/ChainSupport/frontier-pos-template | Provided two features, `testnet` and `mainnet`, which enable launching the testnet and mainnet.|
| 5. | Substrate chain | https://github.com/ChainSupport/frontier-pos-template, https://github.com/superexchain/scs-chain | |



