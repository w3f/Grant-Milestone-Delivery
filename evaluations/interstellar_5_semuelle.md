# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Interstellar-Network.md
- **Milestone:** 5
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Interstellar-Network/lib-garble-rs](https://github.com/Interstellar-Network/lib-garble-rs/blob/ba3a530518e43e92ad4e9726beaaa4c338c80e1f/LICENSE), [Interstellar-Network/pallets](https://github.com/Interstellar-Network/pallets/blob/495f09eb7f289fcdb9d7e20af2dd792bc555593e/LICENSE), [Interstellar-Network/wallet-app](https://github.com/Interstellar-Network/wallet-app/blob/5cd330ec082960714be8ce840f4b8047a7efd092/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [book.interstellar.gg](https://book.interstellar.gg/M5.html) | Good project and code documentation as well as inline docs. |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [Docker demo](https://book.interstellar.gg/M5.html#docker-demo-tutorial), [API test guide](https://book.interstellar.gg/GCF_API_Test_Guide.html) | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | <ul><li>[x] </li></ul> | [book.interstellar.gg](https://book.interstellar.gg/M5.html#docker-demo-tutorial) | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | <ul><li>[x] </li></ul> | [medium.com](https://medium.com/@jlleleu/b4003a64e927) | — |  
| 1. | replacement of JustGarble (GPL) with Swanky/Fancy-Garbling (MIT) | <ul><li>[ ] </li></ul> | link | In order to use a TEE framework we need a non-GPL garbling scheme code |
| 2. | part of GCF external service in TEE | <ul><li>[ ] </li></ul> | link | We will migrate the circuit garbling service part in TEE/Intel SGX|
| 3. | android client garbled circuit evaluation updated | <ul><li>[ ] </li></ul> | link | we will update the evaluator on android with the Fancy-Garbling scheme|
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
