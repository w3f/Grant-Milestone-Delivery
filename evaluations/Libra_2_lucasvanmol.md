# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Libra.md 
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/blob/3ea205a60e60fc80483759439703025dcd6d0486/evaluations/Libra_1_Noc2.md

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|https://github.com/atscaletech/libra/blob/main/LICENSE| Apache License 2.0 |
| 0b. | Documentation |<ul><li>[x] </li></ul>| https://github.com/atscaletech/libra/tree/main/pallets/identities#identities https://github.com/atscaletech/libra/tree/main/pallets/resolvers#resolvers-network  https://github.com/atscaletech/libra/tree/main/pallets/dispute-resolution#dispute-resolution | Good documentation overall |
| 0c. | Testing |<ul><li>[x] </li></ul>|https://github.com/atscaletech/libra/blob/main/pallets/identities/src/tests.rs https://github.com/atscaletech/libra/blob/main/pallets/resolvers/src/tests.rs https://github.com/atscaletech/libra/blob/main/pallets/dispute-resolution/src/tests.rs | Good coverage initially, improved upon revision. |
| 0d. | Live testnet |<ul><li>[x] </li></ul>| wss://rpc.libra.atscale.xyz |  | 
| 1. | Substrate module: Identities |<ul><li>[x] </li></ul>| https://github.com/atscaletech/libra/blob/main/pallets/identities | `Credibility` function was initially missing, added upon revision. | 
| 2.  | Substrate module: Resolvers Network |<ul><li>[x] </li></ul>| https://github.com/atscaletech/libra/blob/main/pallets/resolvers |  |
| 3.  | Substrate module: Dispute Resolution |<ul><li>[x] </li></ul>| https://github.com/atscaletech/libra/blob/main/pallets/dispute-resolution | Slashing model changed; see general notes | 
| 4.  | Substrate based chain |<ul><li>[x] </li></ul>| https://github.com/atscaletech/libra/blob/main/runtime/src/lib.rs | Node works well. |

## General Notes

* The slashing model originally described in the application was changed, see https://github.com/w3f/Grant-Milestone-Delivery/pull/492#issuecomment-1205006034

> For your question about the slashing, after carefully considering the slashing if a resolver made a wrong decision, we decided not to implement it at the moment. This is because we think the evidence evaluation is not easy and we should have a tolerance for the wrong decision. The slashing model will make the resolver affair join the network in the initial phase. Rather than using the slashing model, we opted to lock the tokens of low credibility resolver for a longer time (estimated six months or a year) to prevent them use a different address. Please see [pallet config](https://github.com/atscaletech/libra/blob/main/pallets/resolvers/src/lib.rs#L87).
