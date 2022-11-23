# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/Gafi.md
- **Milestone:** 3
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [grindytech/gafi](https://github.com/grindytech/gafi/blob/264f0fc0747ab488ba37705787579a85f529842f/LICENSE-APACHE2) | Apache 2.0
| 0b. | Documentation | <ul><li>[x] </li></ul> | [wiki.gafi.network](https://wiki.gafi.network/), [game-creator](https://github.com/grindytech/gafi/blob/7468fffe75eb79b1ebcda1e62b241ee1118dc0b0/pallets/game-creator/README.md) | General wiki, pallet READMEs and inline documentation. |
| 0c. | Pallets Testing Guide | <ul><li>[x] </li></ul> | [grindytech/gafi](https://github.com/grindytech/gafi/blob/7468fffe75eb79b1ebcda1e62b241ee1118dc0b0/README.md#test) | Makefile for unit tests, among other things. |
| 0c. | Client Testing Guide | <ul><li>[x] </li></ul> | [grindytech/gafi/tests](https://github.com/grindytech/gafi/blob/7468fffe75eb79b1ebcda1e62b241ee1118dc0b0/tests/README.md) | — |
| 0d. | Docker | <ul><li>[x] </li></ul> | [grindytech/gafi](https://github.com/grindytech/gafi/blob/7468fffe75eb79b1ebcda1e62b241ee1118dc0b0/README.md#run-in-docker) | — |
| 0e. | Article | <ul><li>[x] </li></ul> | [docs.google.com](https://docs.google.com/document/d/1pIV22jNlyyOXzrAOAorNqAyGIshQA3kt_XP9xQyTOdA/edit?usp=sharing) | Added on request |
| 1.  | pallet game-creator | <ul><li>[x] </li></ul> | [grindytech/gafi](https://github.com/grindytech/gafi/tree/7468fffe75eb79b1ebcda1e62b241ee1118dc0b0/pallets/game-creator) | — |
| 3. | Weights/Benchmarking | <ul><li>[x] </li></ul> | [grindytech/gafi](https://github.com/grindytech/gafi/blob/7468fffe75eb79b1ebcda1e62b241ee1118dc0b0/README.md#benchmarking) | — |
| 4. | Demo | <ul><li>[x] </li></ul> | [wiki.gafi.network](https://wiki.gafi.network/how-to-guides/how-to-claim-developer-onchain-reward), [YouTube](https://www.youtube.com/watch?v=AtywQ9Mc_Ko) | Shows how to claim ownership of a contract and awarding of transaction fee percentages |


## General Notes

- Testing and evaluating was very easy thanks to good documentation, helper scripts and a very helpful Makefile.
- The DAO pallet deliverable was removed from this milestone, but implemented in Solidity.
