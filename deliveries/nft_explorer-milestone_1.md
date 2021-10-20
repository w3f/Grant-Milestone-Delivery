# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/nft_explorer.md
* **PR Link:** https://github.com/w3f/Grants-Program/pull/527
* **Milestone Number:** 1

Milestone 1 deliverables are primarily two github repos, [evm-nft-tracker](https://github.com/uni-arts-chain/evm-nft-tracker) and [substrate-nft-tracker](https://github.com/uni-arts-chain/substrate-nft-tracker). Please use the main branchs when checking.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |https://github.com/uni-arts-chain/evm-nft-tracker/blob/main/LICENSE.txt|  |
|  |  |https://github.com/uni-arts-chain/substrate-nft-tracker/blob/main/LICENSE.txt|  |
| 0b. | Documentation |https://github.com/uni-arts-chain/evm-nft-tracker/blob/main/README.md#usage|  |
|  |  |https://github.com/uni-arts-chain/substrate-nft-tracker#usage|  |
| 0c. | Testing Guide |https://github.com/uni-arts-chain/evm-nft-tracker/blob/main/README.md#test| |
|  |  |https://github.com/uni-arts-chain/evm-nft-tracker/blob/main/README.md#test| |
| 0d. | Docker |https://github.com/uni-arts-chain/evm-nft-tracker/blob/main/Dockerfile| [guide](Please always use the main branch when checking) |
|  |  |https://github.com/uni-arts-chain/substrate-nft-tracker/blob/main/Dockerfile| [guide](Please always use the main branch when checking) |
| 1. | A evm log tracking lib using ethereum filter |https://github.com/uni-arts-chain/evm-nft-tracker/tree/main/libs/nft-events| |
| 2. | A evm log tracking lib using substrate event |https://github.com/uni-arts-chain/substrate-nft-tracker/blob/main/lib/nft_helper.rb| |
| 3. | A lib to identify the NFTs |https://github.com/uni-arts-chain/substrate-nft-tracker/blob/main/lib/erc721_contract.rb| Initializing this class will check if the address passed in is a visual ERC721 contract. |
|  |  |https://github.com/uni-arts-chain/substrate-nft-tracker/blob/main/lib/erc1155_contract.rb| Initializing this class will check if the address passed in is a visual ERC1155 contract |

