# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/tree/master/applications/iris.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [iridium-labs/substrate](https://github.com/iridium-labs/substrate/blob/3cdb30e1ecbafe8a866317d4550c921b4d686869/LICENSE-APACHE2) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [iridium-labs/iris-docs](https://github.com/iridium-labs/iris-docs/tree/789362b65f81a87832cc444c5f88713208ad868e) (also on https://iridium-labs.github.io/), [iridium-labs/substrate](https://github.com/iridium-labs/substrate/blob/eebe9208e84bffc468b2eb4c50e6a86c6f0405d4/bin/node-template/pallets/template/src/lib.rs) | — |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [iridium-labs/substrate](https://github.com/iridium-labs/substrate/blob/eebe9208e84bffc468b2eb4c50e6a86c6f0405d4/bin/node-template/pallets/template/src/tests.rs), [docs.google.com](https://docs.google.com/document/d/1p_qy-Q2xbFa_rv394llIrTqRJIpRKn8RDRAdpjKTF2Y/edit) | — |
| 0d. | Docker | <ul><li>[x] </li></ul> | [iridium-labs/ui](https://github.com/iridium-labs/ui/blob/4eddf19f80ff154ba0ab2ab7ad863126779069bf/Dockerfile.dev), [iridium-labs/substrate](https://github.com/iridium-labs/substrate/blob/eebe9208e84bffc468b2eb4c50e6a86c6f0405d4/Dockerfile) | — |
| 0e. | Article | <ul><li>[x] </li></ul> | [medium](https://medium.com/iridium/iris-a-next-gen-decentralized-storage-network-a53562c27de2) | — |
| 0f. | Update offchain::ipfs to latest substrate master | <ul><li>[x] </li></ul> | [iridium-labs/substrate/commit/c198a48](https://github.com/iridium-labs/substrate/commit/c198a480f542f7d01903ed675df23f8d700bcaa7) | — |
| 1. | Genesis State and the Private IPFS Network | <ul><li>[x] </li></ul> | [iridium-labs/substrate](https://github.com/iridium-labs/substrate/pull/16/commits/429fb1ed0098c2e16c14f838eb97b21ec8713a9d) | — |  
| 2. | Substrate module: iris Runtime Module | <ul><li>[x] </li></ul> | [iridium-labs/substrate](https://github.com/iridium-labs/substrate/blob/86819ba749a082ee79c7eacf67038e451a4bf4b3/bin/node-template/pallets/template/src/lib.rs) | — |
| 3. | Custom RPC Endpoint | <ul><li>[x] </li></ul> | [rpc/src/lib.rs](https://github.com/iridium-labs/substrate/blob/03f63578342366bdcc3bf0c8c4343b31241f001f/bin/node-template/pallets/template/rpc/src/lib.rs) | Basic byte retrieval |
| 4. | User Interface | <ul><li>[x] </li></ul> | [iridium-labs/ui](https://github.com/iridium-labs/ui/tree/4eddf19f80ff154ba0ab2ab7ad863126779069bf) | Nice little UI to upload, mint and view |


## General Notes

Good documentation, easy to follow testing instructions.
