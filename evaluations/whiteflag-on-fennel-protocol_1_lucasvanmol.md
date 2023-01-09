# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Whiteflag-on-Fennel.md 
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/pull/413 (from previous grant)

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/fennelLabs/Fennel-Protocol/blob/main/LICENSE, https://github.com/fennelLabs/fennel-api/blob/master/LICENSE, https://github.com/fennelLabs/fennel-cli/blob/main/LICENSE, https://github.com/fennelLabs/fennel-app/blob/master/LICENSE  | Unlicense | 
| 0b. | Documentation |<ul><li>[x] </li></ul>| https://fennel-labs.notion.site/Grant-2-d6f134a5b65f4556823ae648e3b68e68, https://github.com/fennelLabs/Fennel-Protocol/wiki, https://fennellabs.com/Fennel-Protocol/doc/fennel_protocol_runtime/index.html, https://fennellabs.com/fennel-lib/fennel_lib/index.html, https://fennellabs.com/fennel-cli/fennel_cli/, https://fennellabs.com/fennel-server/fennel_server/ | | 
| 0c.  | Testing Guide |<ul><li>[x] </li></ul>| https://fennel-labs.notion.site/Grant-2-Milestone-1-Testing-Guide-76b12a5e6e1149c2998d3e723cbaeb09, https://fennellabs.com/Fennel-Protocol/doc/fennel_protocol_runtime/index.html, https://github.com/fennelLabs/Fennel-Protocol/wiki/Testing-Milestone-3 | Tests were good for `fennel-cli`, and, after tests were implemented for `fennel-api` upon request, coverage is great. | 
| 0d. | Docker |<ul><li>[x] </li></ul>| https://github.com/fennelLabs/Fennel-Protocol/blob/main/Dockerfile, https://github.com/fennelLabs/fennel-lib/blob/master/Dockerfile, https://github.com/fennelLabs/fennel-cli/blob/master/Dockerfile, https://github.com/fennelLabs/fennel-server/blob/master/Dockerfile, https://github.com/fennelLabs/fennel-api/blob/master/Dockerfile, https://github.com/fennelLabs/fennel-api/blob/master/Dockerfile | Initial issues with docker were quickly resolved by the team | 
| 0e. | Article |<ul><li>[x] </li></ul>| https://fennel-labs.notion.site/Fennel-Platform-ac95115aea7542c8bae06a168e314042 | Announcement article of webapp prototype. |
| 0f. | User-Facing Article |<ul><li>[x] </li></ul>| https://fennel-labs.notion.site/User-Guide-064b8c8de58f4e2a8206b3c5229fecc9 | |
| 1. | Encryption and Message Tie-Ins |<ul><li>[x] </li></ul>| https://github.com/fennelLabs/fennel-app, https://github.com/fennelLabs/fennel-api, https://github.com/fennelLabs/fennel-app/blob/master/src/services/rpc.service.js#L201, https://github.com/fennelLabs/fennel-app/blob/master/src/services/MessageAPI/index.js, https://github.com/fennelLabs/fennel-app/blob/master/src/services/ContactsManager.service.js, https://github.com/fennelLabs/fennel-app/blob/master/src/services/MessageEncryptionIndicatorsManager.service.js | UX for identity creation, key generation, and unencrypted message send/receive were improved upon request. |
| 2. | Fennel Protocol Tie-Ins |<ul><li>[x] </li></ul>| https://github.com/fennelLabs/Fennel-Protocol, https://github.com/fennelLabs/fennel-app/blob/master/src/services/Node/index.js, https://github.com/fennelLabs/fennel-app/blob/master/src/services/KeyManager/index.js | Works |
| 3. | Whiteflag Message Support |<ul><li>[x] </li></ul>| https://github.com/fennelLabs/whiteflag-rust, https://github.com/fennelLabs/fennel-cli/blob/5886d6297307624c89fc258c3dd75c64b08ef712/src/fennel_rpc/mod.rs#L86, https://github.com/fennelLabs/fennel-cli/blob/5886d6297307624c89fc258c3dd75c64b08ef712/src/fennel_rpc/mod.rs#L92, https://github.com/fennelLabs/fennel-app/blob/c09e42656bb6f906c8493307b49b0dcdc4526b58/src/services/rpc.service.js#L191, https://github.com/fennelLabs/fennel-app/blob/c09e42656bb6f906c8493307b49b0dcdc4526b58/src/services/rpc.service.js#L201 | Integration with the RPC server (`fennel-cli`) works well. |



## General Notes


Integration with the polkadot.js extension is planned for M2, as opposed to importing mnemonics.

---
 
### Commit hashes used for this evaluation:

* `Fennel-Protocol`: 1e9de24

* `fennel-api`: 86da0a6

* `fennel-app`: e7d7be1

* `fennel-cli`: 7359780