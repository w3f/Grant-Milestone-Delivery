# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/decentral_ml.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License                      | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/livetreetech/DecentralML/blob/db300d35b4a4f188ade29dcbbc23bb2856c87322/LICENSE) | APACHE 2  |
| **0b.** | Documentation                | <ul><li>[ ] </li></ul> | [decentralml.gitbook.io](https://decentralml.gitbook.io/introduction/), [README](https://github.com/livetreetech/DecentralML/blob/485ec49606f68aa55d5d452bbafbe455caa246d1/README.md) | Good inline documentation. |
| **0c.** | Testing and Testing Guide    | <ul><li>[x] </li></ul> | [README](https://github.com/livetreetech/DecentralML/blob/db300d35b4a4f188ade29dcbbc23bb2856c87322/README.md) | — |
| **0d.** | Docker                       | <ul><li>[x] </li></ul> | [/docker](https://github.com/livetreetech/DecentralML/tree/db300d35b4a4f188ade29dcbbc23bb2856c87322/docker) | Fixed |
|      1. | Data Management Implementation | <ul><li>[x] </li></ul> | [pallet](https://github.com/livetreetech/DecentralML/blob/db300d35b4a4f188ade29dcbbc23bb2856c87322/substrate-node-decentralml/pallets/decentralml/src/lib.rs), [client](https://github.com/livetreetech/DecentralML/tree/db300d35b4a4f188ade29dcbbc23bb2856c87322/substrate-client-decentralml) | — |
|      2. | Federated Learning Consensus | <ul><li>[x] </li></ul> | [pallet](https://github.com/livetreetech/DecentralML/blob/db300d35b4a4f188ade29dcbbc23bb2856c87322/substrate-node-decentralml/pallets/decentralml/src/lib.rs) | —


## General Notes

- When building the client, run `poetry shell` after `poetry install`, as Poetry makes modules available in a virtual environment 
