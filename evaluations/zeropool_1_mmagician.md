# Evaluation

* **Status:** In progress
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ZeroPool.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Notes |
| ------ | ----------- | ---- |----------------- | --------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/zeropoolnetwork/fawkes-crypto/blob/190c1541de416ca4b634a54b555cd3f23f3a20e5/LICENSE-APACHE), [LICENSE](https://github.com/zeropoolnetwork/fawkes-crypto/blob/190c1541de416ca4b634a54b555cd3f23f3a20e5/LICENSE-MIT), [LICENSE](https://github.com/zeropoolnetwork/libzeropool/blob/beae8527536bd03a22e4d110de10079d096f9b55/LICENSE-APACHE), [LICENSE](https://github.com/zeropoolnetwork/fawkes-crypto/blob/190c1541de416ca4b634a54b555cd3f23f3a20e5/LICENSE-MIT) | - |
| 0b.  | Documentation | <ul><li>[]</li></ul> | [docs.rs](https://docs.rs/libzeropool/0.5.2/libzeropool/), [docs.rs](https://docs.rs/fawkes-crypto/4.3.0/fawkes_crypto/), [README](https://github.com/zeropoolnetwork/libzeropool/blob/beae8527536bd03a22e4d110de10079d096f9b55/README.md) [README](https://github.com/zeropoolnetwork/fawkes-crypto/blob/190c1541de416ca4b634a54b555cd3f23f3a20e5/README.md) | Documentation is incomplete. |
| 0c. | Testing Guide | <ul><li>[]</li></ul> |[fawkes-crypto](https://github.com/zeropoolnetwork/fawkes-crypto), [libzeropool](https://github.com/zeropoolnetwork/libzeropool)| |
| 0d. | Article/Tutorial | <ul><li>[]</li></ul> | | No tutorial |
| 1. | zkSNARK circuit and cryptography library | <ul><li>[]</li></ul> |  [fawkes-crypto](https://github.com/zeropoolnetwork/fawkes-crypto), [libzeropool](https://github.com/zeropoolnetwork/libzeropool) | Difficult to evaluate without any docs explaining what is what. |

### General notes

The documentation published to docs.rs have almost no doc comments, and thus are difficult to navigate. READMEs contain some selective information only but are equally unhelpful in understanding the project structure.

The substrate node containing the zeropool functionality also does not have good documentation. For such complex methods as ones that zeropool is introducing, it is necessary to create extensive documentation if one has any hopes of it being used within the community. For inspiration, and an idea of the level of documentation that is recommended, the team could look at Parity's frame pallets, e.g. [democracy](https://github.com/paritytech/substrate/tree/master/frame/democracy).

The assessment of the code quality is deferred until receiving documentation meeting the minimum delivery standards.
