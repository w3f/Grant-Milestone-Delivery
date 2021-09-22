# Evaluation

- **Status:** In Progress
- **Application Document:** [clickme](https://github.com/w3f/Grants-Program/blob/master/applications/deeper_network.md)
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [deeper-chain/deeper-chain](https://github.com/deeper-chain/deeper-chain/blob/57da042c113d6cc3e502c2a4b19b3a858ae48fbe/LICENSE-APACHE2), atomos-dev/control-plane | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [deeper-chain/deeper-chain](https://github.com/deeper-chain/deeper-chain/blob/57da042c113d6cc3e502c2a4b19b3a858ae48fbe/pallets/micropayment/README.md) | — |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [deeper-chain/deeper-chain](https://github.com/deeper-chain/deeper-chain/tree/57da042c113d6cc3e502c2a4b19b3a858ae48fbe/scripts) | — |
| 0d. | Language/Framework | <ul><li>[ ] </li></ul> | link | Rust/Substrate |
| 0e. | Tutorial | <ul><li>[x] </li></ul> | [deeper-chain/deeper-chain](https://github.com/deeper-chain/deeper-chain/blob/57da042c113d6cc3e502c2a4b19b3a858ae48fbe/README.md), [deeper-chain/deeper-chain/scripts](https://github.com/deeper-chain/deeper-chain/blob/57da042c113d6cc3e502c2a4b19b3a858ae48fbe/scripts/README.md) | — |
| 1. | Channel open | <ul><li>[ ] </li></ul> | link | sender who opens the channel should reserve enough funds for accumulated micropayments. Channel data structure contains sender, receiver, nonce (to avoid replay attack), expiration time. |
| 2. | Channel close | <ul><li>[ ] </li></ul> | link | channel will be closed after expiration time passed. Only the receiver can close the channel before the expiration time. The remaining amount which is not claimed by the receiver will be refunded to sender during close. |
| 3. | Claim payments | <ul><li>[ ] </li></ul> | link | During the lifetime of the channel, the receiver can claim accumulated micropayments. The sessionId becomes invalid after claim, and the sender should start using a different sessionId for a different micropayment session. |
| 4. | Client to Blockchain | <ul><li>[ ] </li></ul> | link | The client inside a deeper device (light node) can automatically interact with blockchain: open channel (client only), close channel (server only), claim payment (server only), add balance (client only), and close expired channels (client only) |
| 5. | Client to Client | <ul><li>[ ] </li></ul> | link | The client inside a deeper device (light node) can automatically interact with each other: start services, send micropayments, stop services. |



## General Notes

- https://github.com/atomos-dev/control-plane not public yet
- Some unit tests fail unless chaindata is purged
