# Evaluation

- **Status:** Accepted
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/374
- **Milestone:** 1
- **Kusama Identity:** [FqFKeVrWbBDVBk8U9VvL8gSFwUm4nj9fEZmtQvmViZzLvnv](https://polkascan.io/kusama/account/FqFKeVrWbBDVBk8U9VvL8gSFwUm4nj9fEZmtQvmViZzLvnv)
- **Previously successfully merged evaluation:** None

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 1. | License | <ul><li>[X] </li></ul> | [https://github.com/SubGame-Network/subgame-network/blob/master/LICENSE](https://github.com/SubGame-Network/subgame-network/blob/master/LICENSE) | Looks good to me | 
| 2. | Documentation | <ul><li>[X] </li></ul> | [https://subgame.org/api/assets/whitePaper/en/White%20Paper_v9.pdf](https://subgame.org/api/assets/whitePaper/en/White%20Paper_v9.pdf) | Looks good to me |
| 3. | Testing Guide | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets](https://github.com/SubGame-Network/subgame-network/tree/master/pallets) | Looks good to me |
| 4. | SubGame Node | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/node](https://github.com/SubGame-Network/subgame-network/tree/master/node) | Readable source code, cool [optimization](https://github.com/SubGame-Network/subgame-network/blob/master/node/src/service.rs#L238) |
| 5. | pallet-chips | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets/chips](https://github.com/SubGame-Network/subgame-network/tree/master/pallets/chips) | Looks good to me |
| 6. | pallet-gametemplates | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gametemplates](https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gametemplates) | Looks good to me |
| 7. | pallet-gamecenter | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gamecenter](https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gamecenter) | Looks good to me, only one question: why all functions are public but not `DrawMap`, [link](https://github.com/SubGame-Network/subgame-network/blob/master/pallets/gamecenter/src/lib.rs#L52) |
| 8. | pallet-gametemplates-guess-hash | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gametemplates-guess-hash](https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gametemplates-guess-hash) | Looks good to me |
| 9. | Front End | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/GameCenter/tree/master/frontend](https://github.com/SubGame-Network/GameCenter/tree/master/frontend) | Front-end works with Docker, updated instructions for running in non-Docker environment |
| 10. | UI mock-ups | <ul><li>[X]</li></ul> | [https://www.figma.com/file/hbwDsOVkP5tJqCnl7v0Smr/Subgame-center](https://www.figma.com/file/hbwDsOVkP5tJqCnl7v0Smr/Subgame-center)| Wireframes delivered |
| 11. | Article/Tutorial | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/subgame-network/blob/master/docker_run.md](https://github.com/SubGame-Network/subgame-network/blob/master/docker_run.md) | Looks good to me |
| 12. | Docker | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/GameCenter](https://github.com/SubGame-Network/GameCenter) | Docker works smoothly, frontend part works, let's implement further features |

## General Notes

Lack of Rustdoc although do not think that it is crucial but nice to have in future development. I have made also a PR with a [configuration script](https://github.com/SubGame-Network/subgame-network/pull/1/files) to make life easier for a new developers in a Substrate space, appreciate to accept and/or suggest an improvement. Please consider also to improve warnings from `cargo clippy`. In case of errors you can also (I hope you will) implement [errors definition](https://github.com/SubGame-Network/subgame-network/blob/master/pallets/gamecenter/src/lib.rs#L70)
