# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/deeper_network.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [deeper-chain/deeper-chain](https://github.com/deeper-chain/deeper-chain/blob/57da042c113d6cc3e502c2a4b19b3a858ae48fbe/LICENSE-APACHE2), atomos-dev/control-plane | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [deeper-chain/deeper-chain](https://github.com/deeper-chain/deeper-chain/blob/57da042c113d6cc3e502c2a4b19b3a858ae48fbe/pallets/micropayment/README.md) | — |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [deeper-chain/deeper-chain](https://github.com/deeper-chain/deeper-chain/tree/57da042c113d6cc3e502c2a4b19b3a858ae48fbe/scripts) | Micropayment tests fixed on request |
| 0e. | Tutorial | <ul><li>[x] </li></ul> | [deeper-chain/deeper-chain](https://github.com/deeper-chain/deeper-chain/blob/57da042c113d6cc3e502c2a4b19b3a858ae48fbe/README.md), [deeper-chain/deeper-chain/scripts](https://github.com/deeper-chain/deeper-chain/blob/57da042c113d6cc3e502c2a4b19b3a858ae48fbe/scripts/README.md) | — |
| 1. | Channel open | <ul><li>[x] </li></ul> | [pallets/micropayment](https://github.com/deeper-chain/deeper-chain/blob/235b3bdd7d756f7aab1dabac989d77fe6fa1bcb4/pallets/micropayment/src/lib.rs#L186) | — |
| 2. | Channel close | <ul><li>[x] </li></ul> | [pallets/micropayment](https://github.com/deeper-chain/deeper-chain/blob/235b3bdd7d756f7aab1dabac989d77fe6fa1bcb4/pallets/micropayment/src/lib.rs#L236) | — |
| 3. | Claim payments | <ul><li>[x] </li></ul> | [pallets/micropayment](https://github.com/deeper-chain/deeper-chain/blob/235b3bdd7d756f7aab1dabac989d77fe6fa1bcb4/pallets/micropayment/src/lib.rs#L345) | — |
| 4. | Client to Blockchain | <ul><li>[ ] </li></ul> | link | The client inside a deeper device (light node) can automatically interact with blockchain: open channel (client only), close channel (server only), claim payment (server only), add balance (client only), and close expired channels (client only) |
| 5. | Client to Client | <ul><li>[ ] </li></ul> | link | The client inside a deeper device (light node) can automatically interact with each other: start services, send micropayments, stop services. |



## General Notes

- https://github.com/atomos-dev/control-plane not public yet
