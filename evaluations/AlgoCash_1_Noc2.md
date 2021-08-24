# Evaluation

- **Status:** Accepted
- **Contract Link:** https://github.com/w3f/Grants-Program/blob/master/applications/AlgoCash.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0 | License | <ul><li>[x] </li></ul> | [Apache License 2.0](https://github.com/ReserveLabs/AlgoCash/blob/main/LICENSE) | Correct License  |
| 1 | Documentation | <ul><li>[x] </li></ul> | [Readme](https://github.com/ReserveLabs/AlgoCash/blob/main/README.md), [Demo video](https://www.youtube.com/watch?v=RalxYnx0Go8) | The current readme is more or less a copy of the [grant application](https://github.com/w3f/Grants-Program/blob/master/applications/AlgoCash.md). Very little specification of the  components and working mechanism. The demo video shows a different version. Initially no inline documentation, but they at least improved it |
| 2 | Smart Contract | <ul><li>[x] </li></ul> | [AlgoCash](https://github.com/ReserveLabs/AlgoCash) | No separate tokens. All have the same logic, including [burn from](https://github.com/ReserveLabs/AlgoCash/blob/main/contracts/asset/lib.rs#L337). Initially a lot of unused imports and empty/useless [error messages](https://github.com/ReserveLabs/AlgoCash/blob/6ef24ec93eb19aaf5b7ceb74635bc0d6a3da1e8d/contracts/treasury/lib.rs#L163), but they fixed it   |
| 3 | Tests | <ul><li>[x] </li></ul> | [Tests](https://github.com/ReserveLabs/AlgoCash/tree/main/tests) | The files contained [useless tests](https://github.com/ReserveLabs/AlgoCash/blob/6ef24ec93eb19aaf5b7ceb74635bc0d6a3da1e8d/contracts/treasury/lib.rs#L270), which were removed. The redspot tests work  |
| 4 | Docker | <ul><li>[x] </li></ul> | [Dock Image](http://dl.veim.cn/download/algocash/europa-algocash.tar.gz), [Docker Readme](https://github.com/ReserveLabs/AlgoCash#docker) | Works  |

## General Notes

The implementation is based on the [Basis Cash Protocol](https://github.com/Basis-Cash/basiscash-protocol). Initially the delivery had a few issues, but they fixed everything. It’s now according to the contract. However, this implementation is far from production ready. 

**Questions 3.08.21:**
- This seems to be based on [basis](https://www.basis.io/basis_whitepaper_en.pdf) or more specifically [basiscash-protocol](https://github.com/Basis-Cash/basiscash-protocol/tree/master/contracts). What’s the difference between this and the existing implementation https://basis.cash/ for example on ethereum, which clearly doesn’t work. (decreased demand)
- Why can I choose the [target price](https://github.com/ReserveLabs/AlgoCash/blob/6ef24ec93eb19aaf5b7ceb74635bc0d6a3da1e8d/contracts/treasury/lib.rs#L149) when I buy bonds? Is there an auction? 
- It would be nice if they could also have shown how to deploy the contracts. 

**Reply** https://github.com/w3f/Grant-Milestone-Delivery/pull/246#issuecomment-892601924 