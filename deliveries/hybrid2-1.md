# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/hybrid2.md
* **Milestone Number:** 1

**Context**

This deliverable improves the robustness of the indexer in preparation for production indexing of Substrate chains.

**Deliverables**

| Number | Deliverable | Link | Notes |
| -------| ----------- | ---- | ----- |
| 0a. | License | [LICENSE](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/LICENSE) | Apache 2.0 | 
| 0b. | Documentation | [tutorial.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/doc/tutorial.md) | | 
| 0c. | Testing and Testing Guide | [testing-guide.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/doc/testing-guide.md) | This guide explains how to verify the deliverables in this milestone. | 
| 0d. | Docker | [README.md](https://github.com/hybrid-explorer/polkadot-indexer/blob/main/README.md#docker) | | 
| 1. | Combine head and batch indexer threads | [substrate.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/src/substrate.rs#L636) | Avoids the same metadata being downloaded twice and reduces complexity. | 
| 2.  | Check correct chain | [lib.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/src/lib.rs#L130) | Genesis block of both database and endpoint are checked. | 
| 3.  | Improved logging | [lib.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/src/lib.rs#L91) | log macros are now used for all console output | 
| 4.  | Improved error checking | [shared.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/src/shared.rs#L11) | `?` is used instead of `.unwrap()` for most error handling. | 

**Additional Information**
