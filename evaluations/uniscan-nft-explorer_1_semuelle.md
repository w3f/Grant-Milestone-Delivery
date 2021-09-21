# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/nft_explorer.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [uni-arts-chain/evm-nft-tracker](https://github.com/uni-arts-chain/evm-nft-tracker/blob/28740dbfa8e1c2f09bf49662c645777b334987dc/LICENSE.txt), [uni-arts-chain/substrate-nft-tracker](https://github.com/uni-arts-chain/substrate-nft-tracker/blob/73276c07aaf7bb3129278a5c549e9fa9842a4418/LICENSE.txt) | MIT license |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [uni-arts-chain/evm-nft-tracker](https://github.com/uni-arts-chain/evm-nft-tracker/blob/28740dbfa8e1c2f09bf49662c645777b334987dc/README.md), [uni-arts-chain/substrate-nft-tracker](https://github.com/uni-arts-chain/substrate-nft-tracker/blob/73276c07aaf7bb3129278a5c549e9fa9842a4418/README.md) | Thorough readmes |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [uni-arts-chain/evm-nft-tracker](https://github.com/uni-arts-chain/evm-nft-tracker/blob/28740dbfa8e1c2f09bf49662c645777b334987dc/README.md), [uni-arts-chain/substrate-nft-tracker](https://github.com/uni-arts-chain/substrate-nft-tracker/blob/73276c07aaf7bb3129278a5c549e9fa9842a4418/README.md) | EVM-tracker tests currently failing |
| 0d. | Docker | <ul><li>[x] </li></ul> | [uni-arts-chain/evm-nft-tracker](https://github.com/uni-arts-chain/evm-nft-tracker/blob/28740dbfa8e1c2f09bf49662c645777b334987dc/Dockerfile), [uni-arts-chain/substrate-nft-tracker](https://github.com/uni-arts-chain/substrate-nft-tracker/blob/73276c07aaf7bb3129278a5c549e9fa9842a4418/Dockerfile) | — |
| 1. | A evm log tracking lib using ethereum filter | <ul><li>[x] </li></ul> | [uni-arts-chain/evm-nft-tracker](https://github.com/uni-arts-chain/evm-nft-tracker/tree/ad6519ae20c96b2c0ebf0ee1d1936db0e93ca3bd/libs/nft-events) | requires ERC165 and `supportsInterface` to acknowledge one of ERC721 and ERC1155 _plus_ their Metadata extension |
| 2. | A evm log tracking lib using substrate event | <ul><li>[x] </li></ul> | [uni-arts-chain/substrate-nft-tracker](https://github.com/uni-arts-chain/substrate-nft-tracker/blob/73276c07aaf7bb3129278a5c549e9fa9842a4418/lib/nft_helper.rb) | focused on Darwinia Pangolin |
| 3. | A lib to identify the NFTs | <ul><li>[x] </li></ul> | [ERC721](https://github.com/uni-arts-chain/substrate-nft-tracker/blob/73276c07aaf7bb3129278a5c549e9fa9842a4418/lib/erc721_contract.rb), [ERC1155](https://github.com/uni-arts-chain/substrate-nft-tracker/blob/73276c07aaf7bb3129278a5c549e9fa9842a4418/lib/erc1155_contract.rb) | requires ERC165 and `supportsInterface` to acknowledge one of ERC721 and ERC1155 _plus_ their Metadata extension |


## General Notes

- —
