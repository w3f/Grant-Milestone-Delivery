# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/universaldot-me.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [pallets](https://github.com/UniversalDot/pallets/blob/master/LICENSE), [node](https://github.com/UniversalDot/universal-dot-node/blob/master/LICENSE) | Apache 2.0, Unlicense
| 0b. | Documentation |<ul><li>[x] </li></ul>| [Videos](https://youtube.com/playlist?list=PLecEhYhLLqu72Vh0nqgSHS1jv76DTDyvj) | Pallets contain extensive inline documentation
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| [Instructions](https://github.com/UniversalDot/pallets#testing) | All 3 pallets have >80% coverage
| 0d. | Docker |<ul><li>[ ] </li></ul>| [Instructions](https://github.com/UniversalDot/universal-dot-node/tree/master-release#run-in-docker) | Script not working on Ubuntu 20.04
| 0e. | Article |<ul><li>[x] </li></ul>| [Medium](https://medium.com/universaldot/universaldot-dapp-overview-1acf40cb1a61) | Does not mention the grant at all, so no need to wait to publish it until the milestone is accepted.
| 1. | Pallet Profile |<ul><li>[x] </li></ul>| [pallet](https://github.com/UniversalDot/pallets/tree/master/profile) | All 3 pallets meet the specification provided in the application.
| 2. | Pallet Task |<ul><li>[x] </li></ul>| [pallet](https://github.com/UniversalDot/pallets/tree/master/task) |
| 3. | Pallet DAO |<ul><li>[x] </li></ul>| [pallet](https://github.com/UniversalDot/pallets/tree/master/dao) |
| 4. | Substrate Chain |<ul><li>[x] </li></ul>| [repo](https://github.com/UniversalDot/universal-dot-node/tree/76378ec87cbe959f98e7c76ed0fc26929b094296), testnet: `ws://109.235.70.27:9944` | WS doesn't work with polkadot.js apps, though deployment shouldn't be a deliverable.

## General Notes

The 3 simple pallets are thoroughly documented and the code is clean and well-presented.
Weight estimates as promised in the additional information of the application can be found in the node repository.

---

Only a few minor issues were found:
- The testnet WebSocket doesn't work with the live version of polkadot.{js} apps due to a security error:
  ![image](https://user-images.githubusercontent.com/15819210/154098596-90c2343d-16c7-43a1-bf5d-219008c610e3.png)
- Docker doesn't work as pointed out above.
- `cargo clippy` reports a number of warnings in `pallet-dao` and `pallet-task` (addressed)
- The deliveries in the node repository are currently split among 3 different branches. `master` contains the updated README, `add_pallets` the working version of the node with the pallets and `add_weights` the benchmark-generated weights. (addressed)
