# Milestone Delivery

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/sirato_substrate_phase3.md
* **Milestone Number:** 1

**Context**

In this milestone we are delivering the functionality to view blocks, extrinsics and events information.

To test out the feature, please follow the simple steps in this [tutorial](https://github.com/web3labs/epirus-substrate/blob/main/explorer-ui/docs/blocks-exploration.md).

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/web3labs/epirus-substrate/blob/main/LICENSE | Apache 2.0 | 
| 0b. | Documentation | Project README: https://github.com/web3labs/epirus-substrate/tree/main/explorer-ui#readme <br/> Video demo: https://www.loom.com/share/85fb7a8cbe6e40ba9bcadd804b7e6bc5 | |
| 0c. | Testing Guide | UI unit tests: https://github.com/web3labs/epirus-substrate/blob/main/explorer-ui/README.md#testing |  | 
| 0d. | Docker | UI Docker image: [ghcr.io/web3labs/epirus-substrate-ui:latest](https://github.com/web3labs/epirus-substrate/pkgs/container/epirus-substrate-ui) <br /> Docker compose for running all explorer components locally: https://github.com/web3labs/epirus-substrate/tree/main/local-testnet | |
| 1. | Updated Explorer UI | https://github.com/web3labs/epirus-substrate/tree/main/explorer-ui | Source code for the blocks, extrinsics data display can be found in the `./src/components/blocks/` and `./src/components/extrinsics/` folders.|
| 2. | Public explorer instance | https://substrate.sirato.xyz | Public explorer instance for Rococo-Contracts. A new menu item `Blocks` has been added to the side navbar |
