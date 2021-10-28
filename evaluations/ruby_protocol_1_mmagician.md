# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/RubyProtocol.md
- **Milestone:** 1
- **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
- **Previously successfully merged evaluation:** All by mmagician


| Number | Deliverable | Accepted | Link | Evaluation Notes |
|--------|---------|------------------------|------|------------|
| 0a. | License | <ul><li>[x] </li></ul> | [Ruby-Protocol/private_ml](https://github.com/Ruby-Protocol/private_ml/blob/main/LICENSE) | — |
| 0b. | Testing Guide | <ul><li>[x] </li></ul> | [rubyprotocol/documents](https://github.com/rubyprotocol/documents/blob/1322235c17d9ce0343474fbffdd35aa747bcb02f/unit_test_guide.md) | Fixed on request |
| 0c. | Article/Tutorial | <ul><li>[x] </li></ul> | [rubyprotocol/documents](https://github.com/rubyprotocol/documents/blob/1322235c17d9ce0343474fbffdd35aa747bcb02f/Functionality_Tutorial.md) | Fixed on request |
| 1 | Rust implementation of cryptographic libraries | <ul><li>[x] </li></ul> | [dmcfe_ip](https://github.com/Ruby-Protocol/private_ml/blob/e4e34792e1a1412975eb6ab9d74d06265d122cbb/src/dmcfe_ip.rs), [quadratic_sgp](https://github.com/Ruby-Protocol/private_ml/blob/e4e34792e1a1412975eb6ab9d74d06265d122cbb/src/quadratic_sgp.rs) | DMCFE largely adapted from [dev0x1/functional-encryption-schemes](https://github.com/dev0x1/functional-encryption-schemes) |
| 2 | Private machine learning based on functional encryption and substrate pallet |  <ul><li>[x] </li></ul> | [Ruby-Protocol/private_ml](https://github.com/Ruby-Protocol/private_ml/tree/e4e34792e1a1412975eb6ab9d74d06265d122cbb/src/ml) | — |
| 3 | Benchmark results | <ul><li>[x] </li></ul> | [rubyprotocol/documents](https://github.com/rubyprotocol/documents/blob/1322235c17d9ce0343474fbffdd35aa747bcb02f/Benchmark_result.md), [Ruby-Protocol/private_ml](https://github.com/Ruby-Protocol/private_ml/blob/main/README.md#benchmark) | — |
| 4 | Docker | <ul><li>[x] </li></ul> | [rubyprotocol/documents](https://github.com/rubyprotocol/documents/blob/1322235c17d9ce0343474fbffdd35aa747bcb02f/Docker_demo_tutorial.md) | — |

## General notes

- Missing attributions fixed on request
- Reference to outdated repo removed on request
- Documentation added/updated on request
- Clippy issues mostly resolved
- see also evaluation & discussion [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/266)
