# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ZeroPool.md
- **Milestone:** 1
- **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
- **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Notes |
| ------ | ----------- | ---- |----------------- | --------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/zeropoolnetwork/fawkes-crypto/blob/190c1541de416ca4b634a54b555cd3f23f3a20e5/LICENSE-APACHE), [LICENSE](https://github.com/zeropoolnetwork/fawkes-crypto/blob/190c1541de416ca4b634a54b555cd3f23f3a20e5/LICENSE-MIT), [LICENSE](https://github.com/zeropoolnetwork/libzeropool/blob/beae8527536bd03a22e4d110de10079d096f9b55/LICENSE-APACHE), [LICENSE](https://github.com/zeropoolnetwork/fawkes-crypto/blob/190c1541de416ca4b634a54b555cd3f23f3a20e5/LICENSE-MIT) | - |
| 0b.  | Documentation | <ul><li>[x] </li></ul> | [docs.rs](https://docs.rs/libzeropool/0.5.6/libzeropool/index.html), [docs.rs](https://docs.rs/fawkes-crypto/4.4.0/fawkes_crypto/index.html), [README](https://github.com/zeropoolnetwork/libzeropool/blob/0f406f4947bbd1abd3bfd0731c0128d3ac015ab1/README.md) [README](https://github.com/zeropoolnetwork/fawkes-crypto/blob/5149f041ab7fa9b037cf104c8360360da66db427/README.md), [zeropool.network](https://zeropool.network/docs/implementation/contracts-and-circuits/substrate/) | Some docs added on request. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [zeropoolnetwork/zeropool-substrate](https://github.com/zeropoolnetwork/zeropool-substrate/blob/f13adb61ae2720f8703311f1ae5a6c2d85c8b4ca/README.md#run-the-full-test-environment), [zeropoolnetwork/fawkes-crypto](https://github.com/zeropoolnetwork/fawkes-crypto/tree/5149f041ab7fa9b037cf104c8360360da66db427/fawkes-crypto/tests), [zeropoolnetwork/libzeropool](https://github.com/zeropoolnetwork/libzeropool/tree/0f406f4947bbd1abd3bfd0731c0128d3ac015ab1/tests)| |
| 0d. | Article/Tutorial | <ul><li>[ ] </li></ul> | | No tutorial |
| 1. | zkSNARK circuit and cryptography library | <ul><li>[x] </li></ul> |  [fawkes-crypto](https://github.com/zeropoolnetwork/fawkes-crypto/tree/5149f041ab7fa9b037cf104c8360360da66db427), [libzeropool](https://github.com/zeropoolnetwork/libzeropool/tree/0f406f4947bbd1abd3bfd0731c0128d3ac015ab1) | — |

## General notes

### Evaluation 04.07.2022

Tests are working. Some documentation added, article still missing.

### Evaluation 04.07.2022

The documentation published to docs.rs have almost no doc comments, and thus are difficult to navigate. READMEs contain some selective information only but are equally unhelpful in understanding the project structure.

The substrate node containing the zeropool functionality also does not have good documentation. For such complex methods as ones that zeropool is introducing, it is necessary to create extensive documentation if one has any hopes of it being used within the community. For inspiration, and an idea of the level of documentation that is recommended, the team could look at Parity's frame pallets, e.g. [democracy](https://github.com/paritytech/substrate/tree/master/frame/democracy).

The assessment of the code quality is deferred until receiving documentation meeting the minimum delivery standards.
