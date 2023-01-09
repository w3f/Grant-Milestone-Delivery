# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Interstellar-Network.md
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/interstellar_2_cruikshankss.md

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Licence  |<ul><li>[x] </li></ul>|  APACHE 2.0 & GPL3 https://github.com/Interstellar-Network/api_garble/blob/main/LICENSE https://github.com/Interstellar-Network/api_circuits/blob/main/LICENSE https://github.com/Interstellar-Network/lib_garble/blob/main/LICENSE https://github.com/Interstellar-Network/lib_circuits/blob/main/LICENSE https://github.com/Interstellar-Network/wallet-app/blob/master/LICENSE | Only a part of the JustGarble repository is licenced with GPL3 and isolated with APIs |
| 0b. | Documentation  |<ul><li>[x] </li></ul>|  [code documentation](https://book.interstellar.gg/M3.html#code-documentation  ) | The documentation on the relavent technolgies (GCF, TTVP) to the project are comprehensive and very well documented. Inline documentation is also generally good, albeit a WIP.  |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| [testing guide](https://book.interstellar.gg/M3.html#testing-guide) | Functionality is mostly covered through integration testing, and the testing guide presented works well. However I would like to see working unit tests for the `ocw-*` pallets (although they are not a part of this milestone - this is more of a recommendation). Unit testing for the `mobile-registry` and `tx-validation` pallets is better. |
| 0d. | Dockers |<ul><li>[x] </li></ul>| [Docker compose demo](https://github.com/Interstellar-Network/Interstellar-Book/blob/docker-compose/docker-compose.yml), [Demo tutorial]( https://book.interstellar.gg/M3_demo_tutorial.html)  | Works well, and good documentation here. |
| 0e. | Article |<ul><li>[x] </li></ul>| [article](https://medium.com/@jlleleu/b4003a64e927)  |   |  
| 1. | Mobile TTVP Client (android) |<ul><li>[x] </li></ul>|  [APK file and code](https://github.com/Interstellar-Network/wallet-app/releases/tag/milestone3)    | The functionality is there, although there were some slight artifacts when running the TTVP on my device (Samsung A52). Additionally I'm not sure how technically feasible it is to increase FPS to make it slightly easier to make out the numbers, but that could be a nice improvement to user-friendliness (right now it takes a few seconds to figure out which number is which). Note: development on the iOS version was decided to be put on hold for this application.  |  
| 2. | Substrate Module Mobile Registry |<ul><li>[x] </li></ul>|[Mobile Registry]( https://github.com/Interstellar-Network/substrate-offchain-worker-demo/tree/master/pallets/mobile-registry)  | Basic database relating mobile/public keys to accounts | 
| 3. | Substrate Module TTVP pallet with mobile |<ul><li>[x] </li></ul>| [TTVP]( https://github.com/Interstellar-Network/substrate-offchain-worker-demo/tree/master/pallets/tx-validation ) |  | 


## General Notes

* I would recommend taking a look at the output of `cargo clippy` on any rust directories, to address some code smells.

> *  Note: development on the iOS version was decided to be put on hold for this application

