# Evaluation


- **Status:** accepted
- **Application Document:** [Hyperfridge](https://github.com/w3f/Grants-Program/blob/master/applications/hyperfridge.md)
- **Milestone:** 4
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ----- | ----------- | ------ | ------------- | ------ |
| 0a. | License | <ul><li>[x] </li></ul> |  [Link to License](https://github.com/element36-io/ocw-ebics/blob/main/LICENSE) | Apache 2.0
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Link to Documentation Root](https://github.com/element36-io/ocw-ebics/blob/main/README.md) | good, see comment in notes.  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | See [Testing Guide](https://github.com/element36-io/ocw-ebics/blob/main/INSTRUCTIONS.md)| works |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Docker](https://hub.docker.com/r/e36io/ebics-ocw/tags) | ok
| 1. | Stablecoin Parachain | <ul><li>[x] </li></ul> |  [Parachain](https://github.com/element36-io/ocw-ebics/tree/main) | works |
| 2. | AssetHub Connection | <ul><li>[x] </li></ul> |  [Config](https://github.com/element36-io/ocw-ebics/blob/main/runtime/src/xcm_config.rs)  | works |
| 3. | Zombienet | <ul><li>[x] </li></ul> | [Config](https://github.com/element36-io/ocw-ebics/blob/main/zombienet.toml) | nice |
| 4. | E2E Tests | <ul><li>[x] </li></ul> | [e2e-tests](https://github.com/element36-io/ocw-ebics/tree/main/runtime/src/e2e_tests) | all passing |
| 5. | Whitepaper | <ul><li>[x] </li></ul> | [whitepaper]https://github.com/element36-io/ocw-ebics/blob/main/docs/hyperfridge-draft.pdf| ok. no changes.|

## General Notes
Thanks for the update.

## Documentation
In ``INSTRUCTIONS.md`` the chain is sometimes referred to as a solo chain but on other occasians it's called a parachain. I guess it should be only  parachain by now.


## Testing Guide
The Zombienet worked immediately. All test are passing. 
