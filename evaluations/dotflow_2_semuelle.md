# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Dotflow.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [TheDotflow/dotflow-ink](https://github.com/TheDotflow/dotflow-ink/blob/1decf093cbe1f14c4d62f6570515ea2e9fcdab86/LICENSE), [TheDotflow/dotflow-ui](https://github.com/TheDotflow/dotflow-ui/blob/4f2b3fb167b9643f18277cef4beb08c9945ef2a6/LICENSE) | MIT |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/TheDotflow/dotflow-ink/blob/8c6f08cda93d92dcf88821678b7d22cfaceb5d3e/README.md) | Project overview, deployment details and testing guide |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [TheDotflow/dotflow-ui](https://github.com/TheDotflow/dotflow-ui/tree/001eee383acf57164ba3121650bd48eb2d87dbaf#running-tests), [TheDotflow/dotflow-ink](https://github.com/TheDotflow/dotflow-ink/tree/465ecd535adad7b5de9f8d5a5b25158cc1055b69#build--test-locally) | Good test coverage. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [TheDotflow/dotflow-ink](https://github.com/TheDotflow/dotflow-ink/tree/8c6f08cda93d92dcf88821678b7d22cfaceb5d3e#docker), [TheDotflow/dotflow-ui](https://github.com/TheDotflow/dotflow-ui/tree/4f2b3fb167b9643f18277cef4beb08c9945ef2a6#run-with-docker) | Requires manually running trappist and swanky. |
| 0e. | Article | <ul><li>[x] </li></ul> | [medium.com](https://medium.com/@sakacszergej/dotflow-6326f71dd97b) | Motivation, solution, how-to |
| 1. | Address Book | <ul><li>[x] </li></ul> | [TheDotflow/dotflow-ink](https://github.com/TheDotflow/dotflow-ink/tree/465ecd535adad7b5de9f8d5a5b25158cc1055b69/contracts/address_book) | Tested locally and on Rococo |
| 2. | Routing functionality. | <ul><li>[x] </li></ul> | [TheDotflow/dotflow-ui](https://github.com/TheDotflow/dotflow-ui/tree/001eee383acf57164ba3121650bd48eb2d87dbaf/src/utils/xcmTransfer) | — |
| 3. | Address Book page | <ul><li>[x] </li></ul> | [TheDotflow/dotflow-ui](https://github.com/TheDotflow/dotflow-ui/blob/001eee383acf57164ba3121650bd48eb2d87dbaf/src/pages/address_book.tsx) | See also [address book contract](https://github.com/TheDotflow/dotflow-ink/tree/465ecd535adad7b5de9f8d5a5b25158cc1055b69/contracts/address_book) |
| 4. | Transfer page | <ul><li>[x] </li></ul> | [TheDotflow/dotflow-ui](https://github.com/TheDotflow/dotflow-ui/blob/001eee383acf57164ba3121650bd48eb2d87dbaf/src/pages/transfer.tsx) | Some UX issues addressed on request. |


## General Notes

Several functionality and UX improvements made on request. Good documentation and test coverage!

### tarpaulin report

```sh
INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| common/src/types.rs: 2/2
|| contracts/address_book/lib.rs: 19/58
|| contracts/address_book/tests.rs: 48/48
|| contracts/address_book/types.rs: 0/24
|| contracts/identity/lib.rs: 209/249
|| contracts/identity/tests.rs: 406/417
|| contracts/identity/types.rs: 19/21
|| 
85.84% coverage, 703/819 lines covered
```
