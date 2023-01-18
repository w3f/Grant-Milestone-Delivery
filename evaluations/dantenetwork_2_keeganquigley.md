# Evaluation

- **Status:** Accepted
- **Application Document:** [link](https://github.com/w3f/Grants-Program/blob/master/applications/Dante_Network.md)
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted |     Link      | Notes |
| ------------- | ------------- | ------------- |------------- | ------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [GPLv3](https://github.com/dantenetwork/protocol-stack-for-ink/blob/feature-evaluation/LICENSE) | Ok.  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | - [Dante Notion](https://dantenetwork.notion.site/Dante-Network-37b3fb6b70a845ecb4f6bc9d0f23229b) | Looks good. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | - [Algorithms Test(router selection)](https://github.com/dantenetwork/protocol-stack-for-ink/tree/main/contracts/algorithm#router-selection) <br> - [Test Guide for SQoS](https://github.com/dantenetwork/protocol-stack-for-ink/tree/feature-sqos/test) | All 14 unit tests pass successfully. SqoS functions: `SQoS Challenge` works. `SqoS Hide & Reveal` works. `Error Rollback` works. `Verification Threshold` works.  |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Docker](https://github.com/dantenetwork/ink-test-router) | Docker compose successfully spins up an off-chain router. |
| 0e. | Article | <ul><li>[x] </li></ul> | [link](https://dantenetwork.medium.com/the-first-version-of-dante-protocol-in-substrate-ink-tech-stack-granted-by-web3-foundation-f7033e66113c) | Looks good. |
| 1. | (ink!)smart contracts: parallel router scheduling algorithm | <ul><li>[x] </li></ul> | [code](https://github.com/dantenetwork/protocol-stack-for-ink/blob/c46af9610cd06b672226967f85d4c10351f787d0/contracts/cross-chain/lib.rs#L657) and [details](https://github.com/dantenetwork/protocol-stack-for-ink/tree/main/contracts/algorithm#router-selection) | Deploys on local `substrate-contracts-node` as well as their testnet. |
| 2. | (ink!)smart contracts: SQoS | <ul><li>[x] </li></ul> | - [src-(init)](https://github.com/dantenetwork/protocol-stack-for-ink/blob/984879ac3d80ce6824604b321887b6a2759f3e73/contracts/cross-chain/lib.rs#L187) <br> - [src-(error rollback)](https://github.com/dantenetwork/protocol-stack-for-ink/blob/984879ac3d80ce6824604b321887b6a2759f3e73/contracts/cross-chain/lib.rs#L523) <br> - [src-(Hidden & Reveal)](https://github.com/dantenetwork/protocol-stack-for-ink/blob/984879ac3d80ce6824604b321887b6a2759f3e73/contracts/cross-chain/lib.rs#L1321) <br> - [unit test](https://github.com/dantenetwork/protocol-stack-for-ink/blob/984879ac3d80ce6824604b321887b6a2759f3e73/contracts/cross-chain/lib.rs#L2045) <br> - [src-(challenge)](https://github.com/dantenetwork/protocol-stack-for-ink/blob/984879ac3d80ce6824604b321887b6a2759f3e73/contracts/cross-chain/lib.rs#L1369) <br> - [unit test](https://github.com/dantenetwork/protocol-stack-for-ink/blob/984879ac3d80ce6824604b321887b6a2759f3e73/contracts/cross-chain/lib.rs#L1984) | Deploys on local `substrate-contracts-node` as well as their testnet. |  
| 3. | off-chain routers: SQoS | <ul><li>[x] </li></ul> | - [src link](https://github.com/dantenetwork/protocol-stack-for-ink/tree/green-leaf/leaf) <br> - [Docker for off-chain test router](https://github.com/dantenetwork/ink-test-router) | Looks good. |
| 4. | (Rust)SDK: contracts invocation; SQoS | <ul><li>[x] </li></ul> | [Ink sdk](https://github.com/dantenetwork/ink-sdk/tree/feature-sqos) | Looks good. |
| 5. | testnet | <ul><li>[x] </li></ul> | [testnet](https://github.com/dantenetwork/testnet) | Works with node `v0.20.0` |

## General Notes

Great work on this POC. I appreciate the quick communication from the team. Some minor issues with branch workfow and outdated notes, but the issues were fixed upon request. Docs were greatly improved as well. I didn't evaluate the security of the off-chain router system, but the design works as desired and the examples work nicely. A lot of effort was put into fixing the tests and docs.

### Documentation and Testing

The contracts originally had some issues due to the ink! 4.0 upgrade, but these were no fault of the team and were fixed upon request.

MINOR NOTE: In the [Challenge SQoS](https://github.com/dantenetwork/protocol-stack-for-ink/blob/feature-sqos/test/item-challenge.md) section, the screenshot shows `crossChainSQoS::setSQoS` but I believe it was changed to simply `setSQoS` in the updated app. 

**Please note:** No security audits were performed as a part of this evaluation.
