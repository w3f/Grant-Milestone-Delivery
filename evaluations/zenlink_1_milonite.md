# Evaluation

* **Status:** Progress
* **PR Link:** [Zenlink Grant proposal](https://github.com/w3f/Open-Grants-Program/pull/56). 
* **Milestone:** 1
* **Kusama Identity:** Address
* **Previously successfully merged evaluation:** No

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 1. | Technical specifications and Zenlink DEX Module design |<ul><li>[ ] </li></ul>|[Whitepaper PDF](https://github.com/zenlinkpro/whitepaper/blob/fe5fa761ad9105454c8a69af4e8a616eaf828f49/en/zenlink_whitepaper_en.pdf)| Whitepaper contains the necessary information but there are some minor mistakes and typos | 
| 2.  | Canvas Testnet Node Repo |<ul><li>[ ] </li></ul>|[Git Repo](https://github.com/zenlinkpro/canvas-node/tree/327d6a8f73751d28e6db9a3a1d35350009bafe1b)| | 
| 3.  | Zenlink DEX Pallet Repo |<ul><li>[x] </li></ul>|[Git Repo](https://github.com/zenlinkpro/pallet-zenlink/tree/20c92849d76bac61842b81ddf8986a94fea6b1d8)| Implementation of ERC20 and UniswapV1, code is documented | 
| 4.  | Unit Tests |<ul><li>[x] </li></ul>|[Tests Asset](https://github.com/zenlinkpro/pallet-zenlink/blob/20c92849d76bac61842b81ddf8986a94fea6b1d8/assets/src/tests.rs) [Tests Dex](https://github.com/zenlinkpro/pallet-zenlink/blob/20c92849d76bac61842b81ddf8986a94fea6b1d8/dex/src/tests.rs)| Tests are working. Coverage could be improved. | 
| 5.  | Docker |<ul><li>[x] </li></ul>|[DockerFile](https://github.com/zenlinkpro/canvas-node/blob/327d6a8f73751d28e6db9a3a1d35350009bafe1b/Dockerfile) [DockerHub](https://hub.docker.com/r/zenlinkpro/dex)| Docker hub image is correctly working, DockerFile build correctly. The build process could be optimized and the images reduced of size| 
| 6.  | Tutorial |<ul><li>[] </li></ul>|[Tutorial](https://github.com/zenlinkpro/canvas-node/blob/v0.1.1/tutorial/readme.md)| ...| 


## General Notes
ERC20 Rust interfaces are verbose to explain the interface in a whitepaper and may be redundand in case of technical documentation.
