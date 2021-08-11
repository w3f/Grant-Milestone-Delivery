# Evaluation

* **Status:** Accepted
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Standard_Protocol.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable            | Accepted               | Link                                                                                                                                                             | Note                                                                                                              |
|--------|------------------------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
|    0a. | License                | <ul><li>[x] </li></ul> | https://github.com/digitalnativeinc/standard-substrate/blob/open-grants-milestone1/LICENSE                                                                       | Apache License 2.0                                                                                                |
|    0b. | Documentation          | <ul><li>[x] </li></ul> | https://docs.standard.tech/runtime-modules/oracle  https://app.gitbook.com/@standard-protocol-1/s/standard-protocol-validator-guide/provider-setup/oracle-binary | Documentation will give high level overview of the oracle module and how to install oracle and validate           |
|     1. | Oracle Client          | <ul><li>[x] </li></ul> | https://github.com/digitalnativeinc/lumen                                                                                                                        | Oracle client to receive information from external sources then submit information regularly to substrate runtime |
|     2. | Modified Oracle Module | <ul><li>[x] </li></ul> | https://github.com/digitalnativeinc/standard-substrate/tree/open-grants-milestone1/pallets/oracle                                                                | Oracle module to register operators and batch                                                                     |
|     3. | Unit test codes        | <ul><li>[x] </li></ul> | https://github.com/digitalnativeinc/standard-substrate/blob/open-grants-milestone1/pallets/oracle/src/tests.rs                                                   | Unit test codes in `tests.rs` in each runtime module                                                              |
|     4. | Npm binary             | <ul><li>[x] </li></ul> | https://www.npmjs.com/package/@digitalnative/lumen                                                                                                               | We will provide a npm binary for oracle providers to install and run an oracle client                             |
|     5. | Dockerfile             | <ul><li>[x] </li></ul> | https://hub.docker.com/repository/docker/standardprotocol/opportunity-standalone                                                                                 | Dockerfile for running Standard protocol binary will be provided                                                  |

## General Notes

### Oracle pallet

Note that the oracle pallet is an adaptation of [ChainLink's pallet](https://github.com/smartcontractkit/chainlink-polkadot/tree/master/pallet-chainlink), it would be nice to include at least some attribution, though not strictly necessary given that the key mechanism has changed (see [this comment](https://github.com/w3f/Grant-Milestone-Delivery/pull/240#issuecomment-889556270)).

### Communication

Communication wasn't great, I needed to re-iterate the issues multiples times before they were fixed.

### Misc
Also I had to update one of your dependencies in Cargo.lock as it was failing for me with the latest nightly, see my [PR here](https://github.com/digitalnativeinc/standard-substrate/pull/38).
