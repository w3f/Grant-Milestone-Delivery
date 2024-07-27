# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Subcoin.md
* **Milestone Number:** 1

**Deliverables**

| Number | Deliverable             | Link |
| ---    | ---                     | --- |
| 0a.    | License                 | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/LICENSE |
| 0b.    | Documentation           | Each module has its own docs. The rendered inline rustdoc is deployed at https://subcoin-project.github.io/subcoin/. https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/docs/src/usage.md#import-bitcoin-blocks-from-bitcoind-database describes how importing bitcoin blocks into subcoin works. |
| 0c.    | Testing and Testing Guide | Install rust on your system and use this command to run tests: https://github.com/subcoin-project/subcoin/tree/subcoin-milestone-1?tab=readme-ov-file#run-tests |
| 0d.    | Docker                  | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/Dockerfile The docker image built from this Dockerfile is also available as mentioned in the Documentation 0b |
| 1.     | `pallet-bitcoin`        | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/crates/pallet-bitcoin/src/lib.rs |
| 2.     | `subcoin-runtime`       | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/crates/subcoin-runtime/src/lib.rs |
| 3.     | `sc-consensus-nakamoto` | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/crates/sc-consensus-nakamoto/src/block_import.rs |
| 4.     | `subcoin-node`          | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-1/crates/subcoin-node/src/lib.rs |

**Additional Information**

- Remember to clear the data (both Bitcoin and Subcoin) after evaluating the delivery. Running a Bitcoin full node can consume hundreds of GBs of disk space if left running in the background for an extended period.
- Importing blocks up to 200000 should be relatively quick. However, the process becomes progressively slower for blocks beyond this point.
