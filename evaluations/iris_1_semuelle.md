# Evaluation

- **Status:** In Progress
- **Application Document:**  https://github.com/w3f/Grants-Program/tree/master/applications/iris.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [iridium-labs/substrate](https://github.com/iridium-labs/substrate/blob/3cdb30e1ecbafe8a866317d4550c921b4d686869/LICENSE-APACHE2) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [iridium-labs/iris-docs](https://github.com/iridium-labs/iris-docs/tree/789362b65f81a87832cc444c5f88713208ad868e) (also on https://iridium-labs.github.io/), [iridium-labs/substrate](https://github.com/iridium-labs/substrate/blob/eebe9208e84bffc468b2eb4c50e6a86c6f0405d4/bin/node-template/pallets/template/src/lib.rs) | — |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [iridium-labs/substrate](https://github.com/iridium-labs/substrate/blob/eebe9208e84bffc468b2eb4c50e6a86c6f0405d4/bin/node-template/pallets/template/src/tests.rs), [docs.google.com](https://docs.google.com/document/d/1p_qy-Q2xbFa_rv394llIrTqRJIpRKn8RDRAdpjKTF2Y/edit) | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. We intend to deliver fully functional tests along with each deliverable (which warrants testing). We intend to achieve a minimum of 85% coverage on new code. |
| 0d. | Docker | <ul><li>[x] </li></ul> | [iridium-labs/ui](https://github.com/iridium-labs/ui/blob/4eddf19f80ff154ba0ab2ab7ad863126779069bf/Dockerfile.dev), [iridium-labs/substrate](https://github.com/iridium-labs/substrate/blob/eebe9208e84bffc468b2eb4c50e6a86c6f0405d4/Dockerfile) | — |
| 0e. | Article | <ul><li>[x] </li></ul> | [medium](https://medium.com/iridium/iris-a-next-gen-decentralized-storage-network-a53562c27de2) | — |
| 0f. | Update offchain::ipfs to latest substrate master | <ul><li>[ ] </li></ul> | link | Sync the iris fork of the offchain::ipfs runtime to the latest substrate master branch. (work is completed but needs review) |
| 1. | Genesis State and the Private IPFS Network | <ul><li>[ ] </li></ul> | link | Create a private IPFS network and encode initial bootstrap nodes in the iris genesis block. (estimated duration: 0.5 weeks) |  
| 2. | Substrate module: iris Runtime Module | <ul><li>[ ] </li></ul> | link | We build the module used by nodes in Iris to ingest and eject data from the private IPFS network. The pallet's functionality includes: creating requests to add and retreive data, to create, purchase, and validate [tickets](#data-structures), and to allow OCWs to process requests initiated by nodes (i.e. call IPFS and publish results on chain). The outcome is for nodes to be able to create owned data and to monetize access to that data via the ticket asset. (estimated duration: 2 weeks) |
| 3. | Custom RPC Endpoint | <ul><li>[ ] </li></ul> | link | We implement the custom RPC endpoint to retreive data from OCWs as defined [here](#custom-rpc-endpoints). (estimated duration: 0.5 weeks) |
| 4. | User Interface | <ul><li>[x] </li></ul> | [iridium-labs/ui](https://github.com/iridium-labs/ui/tree/4eddf19f80ff154ba0ab2ab7ad863126779069bf) | Nice little UI to upload, mint and  |
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
