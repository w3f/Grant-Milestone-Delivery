# Evaluation

* **Status:** In Progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/26 
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 |<ul><li>[x] </li></ul>| [](https://github.com/PureStake/moonbeam/blob/master/LICENSE), [](https://github.com/paritytech/frontier/blob/master/LICENSE-APACHE2) | The Unlicense, but it's fine | 
| 1. | Substrate Runtime |<ul><li>[x] </li></ul>| [moonbeam-tutorials](https://github.com/PureStake/moonbeam/tree/moonbeam-tutorials), [frontier](https://github.com/paritytech/frontier) | everything compiles | 
| 2. | Web3 RPC Module |<ul><li>[x] </li></ul>| [rpc](https://github.com/paritytech/frontier/tree/master/rpc), https://github.com/PureStake/moonbeam/tree/moonbeam-tutorials | Works, no unit tests, some of the documentation inside the code could be better | 
| 3. | Basic Transaction Support |<ul><li>[x] </li></ul>| [docs+code]https://docs.moonbeam.network/getting-started/web3-transaction/| Works, code could be integrated into the github repo | 
| 4. | ERC20 Demonstration |<ul><li>[x] </li></ul>| [remix](https://docs.moonbeam.network/getting-started/using-remix/) | ERC20 deployed via remix and metamask| 
| 5. | Truffle Demonstration |<ul><li>[x] </li></ul>| [truffle-demo](https://docs.moonbeam.network/getting-started/using-truffle/), [truffle-code](https://github.com/PureStake/moonbeam/tree/moonbeam-tutorials/tools/truffle) | had some issues with node v12.15.0| 
| 6. | Metamask Demonstration |<ul><li>[x] </li></ul>| [metamask](https://docs.moonbeam.network/getting-started/using-metamask/)| Works | 
| 7. | Unit Tests |<ul><li>[x] </li></ul>|[functional testing](https://github.com/paritytech/frontier/tree/master/ts-tests), [unit testing](https://github.com/paritytech/frontier/blob/master/frame/ethereum/src/tests.rs)| Functional + Unit Tests, The moonbeam specific pallets have no unit tests. | 
| 8. | Docker Image	 |<ul><li>[ ] </li></ul>| https://github.com/PureStake/moonbeam/blob/moonbeam-tutorials/Dockerfile | docker build -t moonbeam-node-dev failed | 
| 9. | Documentation |<ul><li>[x] </li></ul>| [Moonbeam Docs](https://docs.moonbeam.network/), [Readme](https://github.com/PureStake/moonbeam/blob/moonbeam-tutorials/README.md) | Very good tutorials, including videos | 

## General Notes

They directly contribute to the frontier project. The demos, videos and documentation are very good. The frontier project not only contains unit tests, but also functional tests. 
