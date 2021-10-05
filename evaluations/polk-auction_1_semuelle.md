# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/polk-auction.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul> | [gh](https://github.com/CrommVardek/polk-auction-core/blob/834a452459712b10a8113200eafbf9d232ca22be/LICENSE) | — |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [gh](https://github.com/CrommVardek/polk-auction-core/blob/834a452459712b10a8113200eafbf9d232ca22be/README.md) | —
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [gh](https://github.com/CrommVardek/polk-auction-core/blob/834a452459712b10a8113200eafbf9d232ca22be/README.md#Tests) | — |
| 0d. | Docker | <ul><li>[x] </li></ul> | [gh](https://github.com/CrommVardek/polk-auction-core/blob/834a452459712b10a8113200eafbf9d232ca22be/Dockerfile) | — |
| 1. | Current-Auction end-point | <ul><li>[x] </li></ul> | [gh](https://github.com/CrommVardek/polk-auction-core/blob/834a452459712b10a8113200eafbf9d232ca22be/src/main/polkauction/core/route/AuctionRouting.kt) | —  |  
| 2. | Current-Parachains end-point | <ul><li>[x] </li></ul> | [gh](https://github.com/CrommVardek/polk-auction-core/blob/834a452459712b10a8113200eafbf9d232ca22be/src/main/polkauction/core/route/ParachainRouting.kt) | — |  
| 3. | Current-Crowdloan end-point | <ul><li>[x] </li></ul> | [gh](https://github.com/CrommVardek/polk-auction-core/blob/834a452459712b10a8113200eafbf9d232ca22be/src/main/polkauction/core/route/CrowdloanRouting.kt) | — |


## General Notes

- Building succeeded with JDK 15, but failed with 11, 13 and 16.
