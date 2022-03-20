# Evaluation

- **Status:** Accepted
- **Contract Link:** https://github.com/w3f/Grants-Program/blob/master/applications/CESS.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/Cumulus2021/cess/blob/main/LICENSE) |  Correct License |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [https://github.com/Cumulus2021/cess#run-the-cess-node](https://github.com/Cumulus2021/cess#run-the-cess-node) | Basic documentation inside the readme and the pallets  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [https://github.com/Cumulus2021/cess#run-tests](https://github.com/Cumulus2021/cess#run-tests) | Basic testing guide |
| 0d. | Article/Tutorial | <ul><li>[x] </li></ul> | [https://github.com/Cumulus2021/cess#module-documentation](https://github.com/Cumulus2021/cess#module-documentation) | Not really an article, but this is fine, given that the grant is below 10k  |
| 1a. | Substrate module: Files Bank | <ul><li>[x] </li></ul> | [https://github.com/Cumulus2021/cess/tree/main/c-pallets/files-bank](https://github.com/Cumulus2021/cess/tree/main/c-pallets/files-bank) | Weights are not correct and the formatting seems to be a little bit off, but it's implemented according to the contract |
| 1b. | Substrate module: Files Map | <ul><li>[x] </li></ul> | [https://github.com/Cumulus2021/cess/tree/main/c-pallets/files-map](https://github.com/Cumulus2021/cess/tree/main/c-pallets/files-map) |  see above  |
| 1c. | Substrate module: Storage Miner | <ul><li>[x] </li></ul> | [https://github.com/Cumulus2021/cess/tree/main/c-pallets/sminer](https://github.com/Cumulus2021/cess/tree/main/c-pallets/sminer) |  see above |
| 2. | Docker | <ul><li>[x] </li></ul> | [https://github.com/Cumulus2021/cess#run-in-docker](https://github.com/Cumulus2021/cess#run-in-docker) | Works |

## General Notes

Everything immediately worked according to the contract. But external people should keep in mind that these are only the first pallets and it’s far from a decentralized secure storage solution in it's current form. 
