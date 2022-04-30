# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/Fennel_Protocol.md
- **Milestone:** 3
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [fennelLabs/Fennel-Protocol](https://github.com/fennelLabs/Fennel-Protocol/blob/29d21e896e7e735a07d385bcd8eb1c2167aa3246/LICENSE) | Unlicense |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [fennelLabs/Fennel-Protocol](https://github.com/fennelLabs/Fennel-Protocol/wiki) | Minimal inline docs |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [fennelLabs/Fennel-Protocol](https://github.com/fennelLabs/Fennel-Protocol/wiki/Testing-Milestone-3) | Good test coverage. |
| 0d. | Docker | <ul><li>[x] </li></ul> | [fennelLabs/Fennel-Protocol](https://github.com/fennelLabs/Fennel-Protocol/blob/29d21e896e7e735a07d385bcd8eb1c2167aa3246/Dockerfile), [fennelLabs/fennel-lib](https://github.com/fennelLabs/fennel-lib/blob/d187658ed43fd9fa97f46e68ee564c88e463c9d0/Dockerfile), [fennelLabs/fennel-cli](https://github.com/fennelLabs/fennel-cli/blob/3c64ad839980c1fba0170da543d41d4a173dacb9/Dockerfile), [fennelLabs/fennel-server](https://github.com/fennelLabs/fennel-server/blob/374319d9fbbcfc3e4af8b03fbc7984b410d2893e/Dockerfile) | — |
| 0e. | Article | <ul><li>[x] </li></ul> | [fennellabs.com](https://fennellabs.com/FennelBlog/Milestone-Three/) | — |
| 1. | Peer Retrieval | <ul><li>[x] </li></ul> | [pallets/signal](https://github.com/fennelLabs/Fennel-Protocol/blob/29d21e896e7e735a07d385bcd8eb1c2167aa3246/pallets/signal/src/lib.rs#L48-L68) | — |
| 2. | Encrypted Channels for IP Information | <ul><li>[x] </li></ul> | [fennelLabs/fennel-server](https://github.com/fennelLabs/fennel-server/blob/799694f4cfa7e07d7c799dd543102c77247fb1c2/src/server/mod.rs#L13) | — |
| 3. | General-Purpose Signal Generation | <ul><li>[x] </li></ul> | [pallets/signal](https://github.com/fennelLabs/Fennel-Protocol/blob/29d21e896e7e735a07d385bcd8eb1c2167aa3246/pallets/signal/src/lib.rs#L48) | — |
| 4. | Whiteflag Authentication | <ul><li>[x] </li></ul> | [fennelLabs/fennel-lib](https://github.com/fennelLabs/fennel-lib/blob/e81ff155b6981a4171224c32128038511c46c0aa/src/whiteflag/wf_core/message.rs#L52) | — |
| 5. | Whiteflag Reference Codes 1, 2, and 4 | <ul><li>[x] </li></ul> | [fennelLabs/fennel-lib](https://github.com/fennelLabs/fennel-lib/blob/d187658ed43fd9fa97f46e68ee564c88e463c9d0/src/whiteflag/wf_core/definitions.rs#L40-L50) | — |


## General Notes

Thorough rewrite of the original Java application. Good test coverage, only inline documentation could be better. Follow-up grant application already posted.
