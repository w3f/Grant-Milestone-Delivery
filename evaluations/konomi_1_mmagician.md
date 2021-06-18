# Evaluation

* **Status:** Accepted
- **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/konomi.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable                           | Accepted               | Link                                                                                                                               | Evaluation Notes                                                                                                 |
|--------|---------------------------------------|------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
|      0 | License                               | <ul><li>[x] </li></ul> | [GNU for cumulus fork](https://github.com/konomi-network/cumulus/blob/develop/LICENSE), [frontend](https://github.com/konomi-network/lending-demo/blob/develop/LICENSE)                               |                                                                                                                  |
|      1 | Documentation                         | <ul><li>[x] </li></ul> | [Main README](https://github.com/konomi-network/cumulus/blob/develop/README.md)                                                    | Initially the documentation was incoherent in places and missing variable definitions. It was improved later on. |
|      2 | Substrate Module: Pool lending module | <ul><li>[x] </li></ul> | [Floating rate lend pallet](https://github.com/konomi-network/cumulus/tree/develop/polkadot-parachains/pallets/floating-rate-lend) |                                                                                                                  |
|      3 | Front End                             | <ul><li>[x] </li></ul> | [frontend repo](https://github.com/konomi-network/lending-demo)                                                                    |                                                                                                                  |
|      4 | Tests                                 | <ul><li>[x] </li></ul> | [tests directory](https://github.com/konomi-network/cumulus/tree/develop/polkadot-parachains/pallets/floating-rate-lend/src/tests) | Extensive tests                                                                                                  |
|      5 | Docker                                | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/konomi-network/cumulus/blob/develop/Dockerfile)                                                    |                                                                                                                  |

## General Notes

Except for an initial delay (due to changing the repository structure to fork cumulus), the communication with the team was fairly good and they took care of small compilation errors (dependencies) rather quick.
