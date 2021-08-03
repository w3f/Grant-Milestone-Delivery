# Evaluation

- **Status:** In Progress
- **Contract Link:** https://github.com/w3f/Grants-Program/blob/master/applications/AlgoCash.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0 | License | <ul><li>[x] </li></ul> | [Apache License 2.0](https://github.com/ReserveLabs/AlgoCash/blob/main/LICENSE) | Correct License  |
| 1 | Documentation | <ul><li>[ ] </li></ul> | [Readme](https://github.com/ReserveLabs/AlgoCash/blob/main/README.md), [Demo video](https://www.youtube.com/watch?v=RalxYnx0Go8) | The current readme is more or less a copy of the [grant application](https://github.com/w3f/Grants-Program/blob/master/applications/AlgoCash.md). Very little specification of the  components and working mechanism. The demo video shows a different version. No inline documentation   |
| 2 | Smart Contract | <ul><li>[ ] </li></ul> | [AlgoCash](https://github.com/ReserveLabs/AlgoCash) | The demo video shows an ALC and ALB contract, which are also part of the contract, they aren’t part of the repo as far as I can see. A lot of unused imports. Empty/useless [error messages](https://github.com/ReserveLabs/AlgoCash/blob/6ef24ec93eb19aaf5b7ceb74635bc0d6a3da1e8d/contracts/treasury/lib.rs#L163)   |
| 3 | Tests | <ul><li>[ ] </li></ul> | [Tests](https://github.com/ReserveLabs/AlgoCash/tree/main/tests) | The files contain [useless tests](https://github.com/ReserveLabs/AlgoCash/blob/6ef24ec93eb19aaf5b7ceb74635bc0d6a3da1e8d/contracts/treasury/lib.rs#L270)  |
| 4 | Docker | <ul><li>[ ] </li></ul> | []() |   |

## General Notes

**General questions:**
- This seems to be based on [basis](https://www.basis.io/basis_whitepaper_en.pdf) or more specifically [basiscash-protocol](https://github.com/Basis-Cash/basiscash-protocol/tree/master/contracts). What’s the difference between this and the existing implementation https://basis.cash/ for example on ethereum, which clearly doesn’t work. (decreased demand)
- Why can I choose the [target price](https://github.com/ReserveLabs/AlgoCash/blob/6ef24ec93eb19aaf5b7ceb74635bc0d6a3da1e8d/contracts/treasury/lib.rs#L149) when I buy bonds? Is there an auction? 
- It would be nice if they could also have shown how to deploy the contracts. 
