# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Subcoin.md
* **Milestone Number:** 2

**Deliverables**

| Number | Deliverable               | Link | Notes |
| ---    | ---                       | --- | --- |
| 0a.    | License                   | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-2/LICENSE | |
| 0b.    | Documentation             | Each module has its own docs. The rendered inline rustdoc is deployed at https://subcoin-project.github.io/subcoin/. | |
| 0c.    | Testing and Testing Guide | Install rust on your system and use this command to run tests: https://github.com/subcoin-project/subcoin/tree/subcoin-milestone-2?tab=readme-ov-file#run-tests | |
| 0d.    | Docker                    | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-2/Dockerfile The docker image is available at https://github.com/subcoin-project/subcoin/pkgs/container/subcoin/249545041?tag=v0.2.0  | |
| 1.     | Block Verification        | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-2/crates/sc-consensus-nakamoto/src/verification.rs | |
| 2.     | `bitcoin-network`         | https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-2/crates/subcoin-network/src/lib.rs | `bitcoin-network` crate is now renamed to `subcoin-network` for consistency. |

**Additional Information**

- Check out https://github.com/subcoin-project/subcoin/blob/subcoin-milestone-2/docs/src/usage.md#syncing-the-bitcoin-network for command to sync the Bitcoin network.
- Completing the initial full sync takes days at the moment, syncing the first 200000 blocks is relatively quick, the syncing process becomes progressively slower beyond this point. The performance of initial full sync will be pursued in the future.
