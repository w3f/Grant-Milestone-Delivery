# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/perun_channels-integration.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License                    | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/ZeroDAO/ZeroDAO-node/blob/main/LICENSE), [LICENSE](https://github.com/ZeroDAO/experience-app/blob/master/LICENSE) | MIT License + Apache License 2.0, which is fine |
| 0b.    | Documentation              | <ul><li>[x] </li></ul> | [learn](https://docs.zerodao.net/learn/) [guide](https://docs.zerodao.net/guide/) | Good documentation + inline documentation and guide | 
| 0c.    | Testing Guide              | <ul><li>[x] </li></ul> | [Visualized Tests](https://github.com/ZeroDAO/experience-app#visualized-tests) [challenges](https://github.com/ZeroDAO/ZeroDAO-node/blob/w3f/pallets/challenges/src/tests.rs) [refresh-reputation](https://github.com/ZeroDAO/ZeroDAO-node/blob/w3f/pallets/refresh-reputation/src/tests.rs) [refresh-seeds](https://github.com/ZeroDAO/ZeroDAO-node/blob/w3f/pallets/refresh-seeds/src/tests.rs) [reputation](https://github.com/ZeroDAO/ZeroDAO-node/blob/w3f/pallets/reputation/src/tests.rs) [seeds](https://github.com/ZeroDAO/ZeroDAO-node/blob/w3f/pallets/seeds/src/lib.rs) [trust](https://github.com/ZeroDAO/ZeroDAO-node/blob/w3f/pallets/trust/src/tests.rs) | Well tested |
| 1.     | Pallet: refresh-reputation | <ul><li>[x] </li></ul> | [refresh-reputation](https://github.com/ZeroDAO/ZeroDAO-node/tree/w3f/pallets/refresh-reputation) | Implemented |
| 2.     | Pallet: reputation         | <ul><li>[x] </li></ul> | [reputation](https://github.com/ZeroDAO/ZeroDAO-node/tree/w3f/pallets/reputation) | Implemented |
| 3.     | Pallet: seeds              | <ul><li>[x] </li></ul> | [seeds](https://github.com/ZeroDAO/ZeroDAO-node/tree/w3f/pallets/seeds) | Implemented |
| 4.     | Pallet: trust              | <ul><li>[x] </li></ul> | [trust](https://github.com/ZeroDAO/ZeroDAO-node/tree/w3f/pallets/trust) | Implemented |
| 5.     | Pallet: challenges         | <ul><li>[x] </li></ul> | [challenges](https://github.com/ZeroDAO/ZeroDAO-node/tree/w3f/pallets/challenges) | Implemented |
| 6.     | Front End                  | <ul><li>[x] </li></ul> | [experience-app](https://github.com/ZeroDAO/experience-app) | Nice test app, only a small warning, see below  |
| 7.     | Substrate chain            | <ul><li>[x] </li></ul> | [node](https://github.com/ZeroDAO/ZeroDAO-node/tree/main/node) | Works |
| 8a.    | Docker                     | <ul><li>[x] </li></ul> | [Node Docker](https://github.com/ZeroDAO/ZeroDAO-node#docker) [App Docker](https://github.com/ZeroDAO/experience-app#docker) | Works |
| 8b.    | Article                    | <ul><li>[x] </li></ul> | [Game of Thrones base Web3: Spring is coming](https://zerodao.medium.com/game-of-thrones-base-web3-spring-is-coming-9346f5318dd1) | Nice game of thrones article full of metaphors, which might be difficult to understand |

## General Notes

I'm impressed by the delivery. They/He clearly put a lot of work into this and it’s an innovative approach, which should be supported and further researched. A fully functional reputation system could be used for a lot of things including consensus itself. In general this system requires a lot of on-chain transactions for “just” keeping track of the reputation. The optimistic setup of the reputation system might cause problems in the long run. Potentially off-chain worker could help with this. An additional idea might be to implement a governance court or something similar as a failsafe mechanism. The idea behind social finance is nice, but doesn’t it lead to users creating multiple accounts and trusting themselves?  

**App Warning Message, 25.11.21**

<pre>  3:21  <font color="#A2734C">warning</font>  &apos;AllUserInfo&apos; is defined but never used  @typescript-eslint/no-unused-vars

<font color="#A2734C"><b>✖ 1 problem (0 errors, 1 warning)</b></font>
</pre>
