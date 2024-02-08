# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/hybrid2.md
* **Milestone Number:** 3

**Deliverables**

| Number | Deliverable | Link | Notes |
| -------| ----------- | ---- | ----- |
| 0a. | License | [LICENSE](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/LICENSE) | Apache 2.0 | 
| 0b. | Documentation | [tutorial.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/doc/tutorial.md) | Describes how to build an indexer for a Substrate chain. | 
| 0c. | Testing and Testing Guide | [testing-guide.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/doc/testing-guide.md) | This guide explains how to verify the deliverables in this milestone. | 
| 0d. | Docker | [Dockerfile](https://github.com/hybrid-explorer/polkadot-indexer/blob/main/Dockerfile) | | 
| 1.  | Support additional indexes | [shared.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/src/shared.rs#L42) | Required significant refactoring and use of generic and associated Rust types. | 
| 2.  | Variant index optional | [substrate.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/47d9c4efcef524da8bb36ccb56f74cec3cf84055/src/substrate.rs#L179) | When enabled, spans that have already been indexed without the variant index will be re-indexed. | 
| 3.  | Expose cache_capacity() and mode() | [lib.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/47d9c4efcef524da8bb36ccb56f74cec3cf84055/src/lib.rs#L102) |  | 
