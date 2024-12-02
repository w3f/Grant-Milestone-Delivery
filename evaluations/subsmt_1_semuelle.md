# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/subsmt.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/farcloud-labs/subsmt/blob/1847a735331fd40e8476190930b1cf33bf196b8a/LICENSE) | Apache 2.0  |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/farcloud-labs/subsmt/blob/1847a735331fd40e8476190930b1cf33bf196b8a/README.md) | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [docs/test-guide.md](https://github.com/farcloud-labs/subsmt/blob/1847a735331fd40e8476190930b1cf33bf196b8a/docs/test-guide.md) | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | <ul><li>[ ] </li></ul> | link | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. | 
|  1. | rust crate: SMT-api | <ul><li>[ ] </li></ul> | link | Basic APIs based on rocksdb, such as new verify_root method, update, insert and get_futrue_root, etc. |
|  2. | Substrate module: SMT | <ul><li>[ ] </li></ul> | link | We will create a Substrate module that will verify Merkle root. |
|  3. | Smart contracts(ink): SMT | <ul><li>[ ] </li></ul> | link | We will deliver a set of ink! smart contracts that will will verify Merkle root.  
|  4. | backend | <ul><li>[ ] </li></ul> | link | backend, used for permanent storage(based on rocksdb) of off-chain data and provision of rpc services.  |
|  5. | network | <ul><li>[ ] </li></ul> | link | A basic network with SMT pallet and contract pallet for testing smart contracts and SMT pallet functions.
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
