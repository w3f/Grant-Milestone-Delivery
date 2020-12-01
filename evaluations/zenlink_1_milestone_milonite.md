# Evaluation

* **Status:** Accepted
* **PR Link:** [Zenlink Grant proposal](https://github.com/w3f/Open-Grants-Program/pull/56). 
* **Milestone:** 1
* **Kusama Identity:** DoZVD3qkjXysdjh3pg6C2UkVNkSw3xWNzch58aPMyXq5mer
* **Previously successfully merged evaluation:** No

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 1. | Technical specifications and Zenlink DEX Module design |<ul><li>[x] </li></ul>|[Whitepaper PDF](https://github.com/zenlinkpro/whitepaper/blob/fe5fa761ad9105454c8a69af4e8a616eaf828f49/en/zenlink_whitepaper_en.pdf)| Whitepaper contains the necessary information. There are some minor mistakes. AMM formula is correct. | 
| 2.  | Canvas Testnet Node Repo |<ul><li>[x] </li></ul>|[Git Repo](https://github.com/zenlinkpro/canvas-node/tree/327d6a8f73751d28e6db9a3a1d35350009bafe1b)| Canvas Testnet node builds correctly, connects to the other peers and sync | 
| 3.  | Zenlink DEX Pallet Repo |<ul><li>[x] </li></ul>|[Git Repo](https://github.com/zenlinkpro/pallet-zenlink/tree/20c92849d76bac61842b81ddf8986a94fea6b1d8)| Implementation of ERC20 and UniswapV1, code is documented | 
| 4.  | Unit Tests |<ul><li>[x] </li></ul>|[Tests Asset](https://github.com/zenlinkpro/pallet-zenlink/blob/20c92849d76bac61842b81ddf8986a94fea6b1d8/assets/src/tests.rs) [Tests Dex](https://github.com/zenlinkpro/pallet-zenlink/blob/20c92849d76bac61842b81ddf8986a94fea6b1d8/dex/src/tests.rs)| Tests are working. Coverage could be improved. | 
| 5.  | Docker |<ul><li>[x] </li></ul>|[DockerFile](https://github.com/zenlinkpro/canvas-node/blob/327d6a8f73751d28e6db9a3a1d35350009bafe1b/Dockerfile) [DockerHub](https://hub.docker.com/r/zenlinkpro/dex)| Docker hub image correctly pulled and running, DockerFile builds correctly | 
| 6.  | Tutorial |<ul><li>[x] </li></ul>|[Tutorial](https://github.com/zenlinkpro/canvas-node/blob/v0.1.1/tutorial/readme.md)| All the steps from the tutorial works fine.| 


## General Notes
Overall the implementation is clean and the process is well known (ERC20 standard and Uniswap V1 protocol). The code is easy to understand and documented.  
Cargo Clippy gives some minor warnings but for a POC I think is fine.   
There's space to improve the test coverage and the tutorial. Mistakes in the whitepaper (parameters, interface description, typos ) are being communicated, the team is working on it.  
ERC20 Rust interfaces are a bit verbose in the specifications and may be redundant in case of technical documentation.
