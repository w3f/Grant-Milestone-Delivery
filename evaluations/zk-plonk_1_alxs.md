# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/zk-plonk.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/AstarNetwork/plonk/blob/master/LICENSE) | MPL-2.0
| 0b. | Documentation | <ul><li>[x] </li></ul> | inline documentation, [rustdocs](https://docs.rs/plonk-pallet/latest/plonk_pallet/) | tutorial already covered by deliverable 0d.
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [tests](https://github.com/AstarNetwork/plonk/blob/master/src/tests.rs) | Minimal but sufficient unit tests
| 0d. | Article/Tutorial | <ul><li>[x] </li></ul> | [Documentation](https://github.com/AstarNetwork/plonk/tree/master/book), [online](https://astarnetwork.github.io/plonk/) | 
| 1. | make plonk compatible | <ul><li>[x] </li></ul> | [fork](https://github.com/AstarNetwork/dusk-plonk)
| 2. | implement zkSNARK plonk pallet | <ul><li>[x] </li></ul> | [repo](https://github.com/AstarNetwork/plonk) | includes example pallet

## General Notes

A fair amount of confusion on my side due to unusual wording, as well as during a previous code review due to unexpected renaming of forked and imported libraries.

Some initial errors when interacting with the pallet from polkadot.{js} due to outdated types were addressed.

Although the delivery is conceptually rather simple since it concerns the adaptation of an existing library to be compatible with Substrate, it is clear this wasn't a straightforwards task. Furthermore, the delivery is comprehensive with hosted documentation, a tutorial and example pallet.
