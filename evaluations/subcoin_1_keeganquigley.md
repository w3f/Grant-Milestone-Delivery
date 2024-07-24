# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Subcoin.md
- **Milestone:** 1

| Number | Deliverable             | Accepted | Link |
| ---    | ---                     | --- | --- |
| 0a.    | License                 | <ul><li>[x] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/LICENSE |
| 0b.    | Documentation           | <ul><li>[x] </li></ul> | Each module has its own docs. The rendered inline rustdoc is deployed at https://subcoin-project.github.io/subcoin/. https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/docs/src/usage.md#import-bitcoin-blocks-from-bitcoind-database describes how importing bitcoin blocks into subcoin works. |
| 0c.    | Testing and Testing Guide | <ul><li>[ ] </li></ul> | Install rust on your system and use this command to run tests: https://github.com/subcoin-project/subcoin/tree/subcoin-milestone-1?tab=readme-ov-file#run-tests |
| 0d.    | Docker                  | <ul><li>[ ] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/Dockerfile The docker image built from this Dockerfile is also available as mentioned in the Documentation 0b |
| 1.     | `pallet-bitcoin`        | <ul><li>[ ] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/crates/pallet-bitcoin/src/lib.rs |
| 2.     | `subcoin-runtime`       | <ul><li>[ ] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/crates/subcoin-runtime/src/lib.rs |
| 3.     | `sc-consensus-nakamoto` | <ul><li>[ ] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/crates/sc-consensus-nakamoto/src/block_import.rs |
| 4.     | `subcoin-node`          | <ul><li>[ ] </li></ul> | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/crates/subcoin-node/src/lib.rs |

# General Notes
