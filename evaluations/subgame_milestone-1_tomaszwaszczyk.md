# Evaluation

- **Status:** In Progress
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/374
- **Milestone:** 1
- **Kusama Identity:** [FqFKeVrWbBDVBk8U9VvL8gSFwUm4nj9fEZmtQvmViZzLvnv](https://polkascan.io/kusama/account/FqFKeVrWbBDVBk8U9VvL8gSFwUm4nj9fEZmtQvmViZzLvnv)
- **Previously successfully merged evaluation:** None

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 1. | License | <ul><li>[X] </li></ul> | [https://github.com/SubGame-Network/subgame-network/blob/master/LICENSE](https://github.com/SubGame-Network/subgame-network/blob/master/LICENSE) | Looks good to me | 
| 2. | Documentation | <ul><li>[] </li></ul> | [https://subgame.guanfantech.com/api/assets/whitePaper/en/%E6%8A%80%E8%A1%93%E7%99%BD%E7%9A%AE%E6%9B%B8_%E8%8B%B1%E6%96%87_v7.pdf](https://subgame.guanfantech.com/api/assets/whitePaper/en/%E6%8A%80%E8%A1%93%E7%99%BD%E7%9A%AE%E6%9B%B8_%E8%8B%B1%E6%96%87_v7.pdf) | Name of the file shall be English-like, look at General Notes section. Correct me if I am wrong but [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/160/files#diff-3429cc6f7805248f1a79ebd7d5844662182caab60c2f7fed3d0775ffd23aeb81R19) is still Taiwanese name of the file |
| 3. | Testing Guide | <ul><li>[] </li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets](https://github.com/SubGame-Network/subgame-network/tree/master/pallets) | Taiwanese [comments](https://github.com/SubGame-Network/subgame-network/blob/master/pallets/chips/src/mock.rs#L86) |
| 4. | SubGame Node | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/node](https://github.com/SubGame-Network/subgame-network/tree/master/node) | Readable source code, cool [optimization](https://github.com/SubGame-Network/subgame-network/blob/master/node/src/service.rs#L238) |
| 5. | pallet-chips | <ul><li>[] </li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets/chips](https://github.com/SubGame-Network/subgame-network/tree/master/pallets/chips) | Much better, I am able to read the code, but look at here [Taiwanese comments](https://github.com/SubGame-Network/subgame-network/blob/master/pallets/chips/src/tests.rs) |
| 6. | pallet-gametemplates | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gametemplates](https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gametemplates) | Looks good to me |
| 7. | pallet-gamecenter | <ul><li>[]</li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gamecenter](https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gamecenter) | Looks good to me, only one question: why all functions are public but not `DrawMap`, [link](https://github.com/SubGame-Network/subgame-network/blob/master/pallets/gamecenter/src/lib.rs#L52) |
| 8. | pallet-gametemplates-guess-hash | <ul><li>[] </li></ul> | [https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gametemplates-guess-hash](https://github.com/SubGame-Network/subgame-network/tree/master/pallets/gametemplates-guess-hash) | Backbone logic delivered, look at [here](https://github.com/SubGame-Network/subgame-network/blob/master/pallets/gametemplates-guess-hash/src/mock.rs#L73) I know small things, but it is really easier to read code with English like comments |
| 9. | Front End | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/GameCenter/tree/master/frontend](https://github.com/SubGame-Network/GameCenter/tree/master/frontend) | Front-end works with Docker |
| 10. | UI mock-ups | <ul><li>[X]</li></ul> | [https://www.figma.com/file/hbwDsOVkP5tJqCnl7v0Smr/Subgame-center](https://www.figma.com/file/hbwDsOVkP5tJqCnl7v0Smr/Subgame-center)| Wireframes delivered |
| 11. | Article/Tutorial | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/subgame-network/blob/master/docker_run.md](https://github.com/SubGame-Network/subgame-network/blob/master/docker_run.md) | |
| 12. | Docker | <ul><li>[X]</li></ul> | [https://github.com/SubGame-Network/GameCenter](https://github.com/SubGame-Network/GameCenter) | Docker works smoothly, frontend part works, let's implement further features |

## General Notes

The progress was made, when I was trying to open a new version of the whitepaper I saw the error, I am not able to open the whitepaper at all. Still lack of Rustdoc. Some comments I have included in comments section above, really curios why have you exposed public all functions but not `DrawMap`, [link](https://github.com/SubGame-Network/subgame-network/blob/master/pallets/gamecenter/src/lib.rs#L52).
