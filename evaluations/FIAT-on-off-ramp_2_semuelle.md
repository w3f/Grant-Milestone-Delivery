# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/FIAT-on-off-ramp.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [element36-io/ocw-ebics](https://github.com/element36-io/ocw-ebics/blob/2da41b847d791cdac7610208e19480d750ecc968/LICENSE), [element36-io/ebics-java-service](https://github.com/element36-io/ebics-java-service/blob/ce429986dd5ab1106c73ac50d6c5be3709d4e6a0/LICENCE) | Apache 2.0  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [element36-io/ocw-ebics](https://github.com/element36-io/ocw-ebics/blob/c4218ee0fe5513f86d7f0b4ba6cfbfdd3df20a29/INSTRUCTIONS.md), [README](https://github.com/element36-io/ocw-ebics/blob/c4218ee0fe5513f86d7f0b4ba6cfbfdd3df20a29/README.md), [SANDBOX](https://github.com/element36-io/ebics-java-service/blob/ce429986dd5ab1106c73ac50d6c5be3709d4e6a0/docs/SANDBOX.md), [element36-io/ebics-java-service](https://github.com/element36-io/ebics-java-service/blob/ce429986dd5ab1106c73ac50d6c5be3709d4e6a0/README.md#howto) | Very thorough documentation. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [element36-io/ocw-ebics](https://github.com/element36-io/ocw-ebics/tree/c4218ee0fe5513f86d7f0b4ba6cfbfdd3df20a29#tests) | — |
| 1. | Off chain worker pallet: Event Processing | <ul><li>[x] </li></ul> | [pallets/fiat-ramps](https://github.com/element36-io/ocw-ebics/blob/c4218ee0fe5513f86d7f0b4ba6cfbfdd3df20a29/pallets/fiat-ramps/src/lib.rs) | — |
| 2. | Pallet: FIAT stable coin | <ul><li>[x] </li></ul> | [element36-io/ocw-ebics](https://github.com/element36-io/ocw-ebics/blob/195cb9ae4d8cf3f6f2bf4be1e41fdb9aa6bb48a8/pallets/fiat-ramps/Cargo.toml#L25) | Uses `balances` pallet |
| 3. | Substrate chain | <ul><li>[x] </li></ul> | [element36-io/ocw-ebics](https://github.com/element36-io/ocw-ebics/tree/c4218ee0fe5513f86d7f0b4ba6cfbfdd3df20a29) | — |
| 4. | Unit Tests | <ul><li>[x] </li></ul> | [pallets/fiat-ramps](https://github.com/element36-io/ocw-ebics/blob/c4218ee0fe5513f86d7f0b4ba6cfbfdd3df20a29/pallets/fiat-ramps/src/tests.rs) | 65.5% coverage according to `cargo tarpaulin` |
| 5. | Docker-Compose Substrate node | <ul><li>[x] </li></ul> | [docker-compose.yml](https://github.com/element36-io/ocw-ebics/blob/c4218ee0fe5513f86d7f0b4ba6cfbfdd3df20a29/docker-compose.yml) | — |


## General Notes

Thorough documentation. Minor hiccups during setup quickly resolved.
