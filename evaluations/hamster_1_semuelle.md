# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/hamster.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [hamster-shared/hamster](https://github.com/hamster-shared/hamster/blob/4e584317021c8c1a7b283efd5a0224c36be52304/LICENSE), [hamster-shared/hamster-client](https://github.com/hamster-shared/hamster-client/blob/d2b8f53e12a9b51b156b5e146f0cf7b4fe59b36c/LICENSE), [hamster-shared/hamster-provider](https://github.com/hamster-shared/hamster-provider/blob/7f8ba96688d43d3dc3476987f598d6eddd576def/LICENSE), [hamster-shared/frontend](https://github.com/hamster-shared/frontend/blob/6d06894aea818e6ed13e17ef06625f91d393330d/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [hamster-shared/hamster-doc](https://github.com/hamster-shared/hamster-doc/tree/901e50933430c0d6556100852a6f2b59f4894a40) | Setup instructions for all components, hosted or locally, build & usage instructions. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [hamster-shared/hamster-doc](https://github.com/hamster-shared/hamster-doc/tree/901e50933430c0d6556100852a6f2b59f4894a40) | Test coverage could be better. |
| 1. | Hamster Client | <ul><li>[x] </li></ul> | [hamster-shared/hamster-client](https://github.com/hamster-shared/hamster-client/tree/0c6033af8aca1b022088bb162a44967adb1ea36d) | Binary works, couldn't compile with node >v14. |
| 2. | Hamster Provider | <ul><li>[x] </li></ul> | [hamster-shared/hamster-provider](https://github.com/hamster-shared/hamster-provider/tree/349e00f2ddcd6f42c246d53f2e459ede86023d9c) | — |
| 3. | Hamster Provider: web app | <ul><li>[x] </li></ul> | [hamster-shared/hamster-provider](https://github.com/hamster-shared/hamster-provider/tree/88c8bc357e4f589cf7c0245137e6c6806b276820/frontend) | Vue Webapp to set up and manage resources, account, prices, etc. |
| 4. | Hamster chain | <ul><li>[x] </li></ul> | [hamster-shared/hamster](https://github.com/hamster-shared/hamster/tree/d4db148379be4d68a6ec085a4779cea2af46352b) | Two pallets, one for registering and managing resources, one for orders. |
| 5. | Whitepaper | <ul><li>[x] </li></ul> | [hamster-shared/hamster-doc](https://github.com/hamster-shared/hamster-doc/blob/901e50933430c0d6556100852a6f2b59f4894a40/Hamster%20Whitepaper.docx) | — |


## General Notes

Despite the complexity of the project, it was surprisingly simple to reproduce. There were some minor issues with the build instructions and setup, but they were quickly resolved. The frontend is quite rough around the edges. For example, the client could use a loading animation while resources are being read from the pallet(s).
