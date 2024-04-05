# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ISO-8583-implementation.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Notes |
| -----: | ----------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [License](https://github.com/subclone/payment-processor/blob/main/LICENSE) [License 2](https://github.com/subclone/iso8583-chain/blob/main/LICENSE) | MIT |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README 1](https://github.com/subclone/payment-processor/tree/main) [README 2](https://github.com/subclone/iso8583-chain/blob/main/README.md) [Oracle Demo](https://github.com/subclone/payment-processor/blob/main/DEMO.md) [Chain Demo](https://github.com/subclone/iso8583-chain/blob/main/DEMO.md) |  |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Unit/Integration tests](https://github.com/subclone/payment-processor/tree/main/pcidss/oracle/src/tests), [ISO-8583 Pallet tests](https://github.com/subclone/iso8583-chain/blob/main/pallets/iso-8583/src/tests.rs), [Unit tests](https://github.com/subclone/payment-processor/blob/main/pcidss/core/src/bank_account/models.rs#L149) |  |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Docker Node](https://github.com/subclone/iso8583-chain/blob/main/Dockerfile) [Docker Oracle](https://github.com/subclone/payment-processor/blob/main/pcidss/Dockerfile) |  |
| **0e.** | Article | <ul><li>[x] </li></ul> | [Article](https://medium.com/@subclone/iso-8583-substrate-integration-poc-a9d4cb0ad17b) |  |
| 1. | Substrate Chain | <ul><li>[x] </li></ul> | [Substrate Chain](https://github.com/subclone/iso8583-chain) |  |
| 2. | Offchain Worker | <ul><li>[x] </li></ul> | [Offchain Worker](https://github.com/subclone/iso8583-chain/blob/main/pallets/iso-8583/src/lib.rs#L472) | |
| 3. | ERC-20R Pallet | <ul><li>[x] </li></ul> | [ERC-20R Pallet](https://github.com/subclone/iso8583-chain/tree/main/pallets/iso-8583) |  |
| 4. | Integration tests | <ul><li>[x] </li></ul> | [Oracle Integration Tests](https://github.com/subclone/payment-processor/tree/main/pcidss/e2e-tests) [Integration tests](https://github.com/subclone/iso8583-chain) |  |
| 5. | Makefile | <ul><li>[x] </li></ul> | [docker-compose](https://github.com/subclone/payment-processor/blob/main/docker-compose.yaml) [Makefile](https://github.com/subclone/payment-processor/blob/main/pcidss/Makefile) |  |

# General Notes
