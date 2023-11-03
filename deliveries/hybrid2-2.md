# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/hybrid2.md
* **Milestone Number:** 2

**Deliverables**

| Number | Deliverable | Link | Notes |
| -------| ----------- | ---- | ----- |
| 0a. | License | [LICENSE](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/LICENSE) | Apache 2.0 | 
| 0b. | Documentation | [tutorial.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/doc/tutorial.md) | | 
| 0c. | Testing and Testing Guide | [testing-guide.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/doc/testing-guide.md) | This guide explains how to verify the deliverables in this milestone. | 
| 0d. | Docker | [Dockerfile](https://github.com/hybrid-explorer/polkadot-indexer/blob/main/Dockerfile) | | 
| 1.  | Index backwards | [substrate.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/src/substrate.rs#L684) |  | 
| 2.  | Store indexed spans | [substrate.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/src/substrate.rs#L784) |  | 
| 3.  | Declare indexer start blocks | [substrate.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/src/substrate.rs#L594) | [Indexers declare an array of block numbers where new indexer versions have been deployed](https://github.com/hybrid-explorer/polkadot-indexer/blob/main/indexer/src/polkadot.rs#L58) | 

**Additional Information**

Additional tests have been written for the complex logic: [tests.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/src/tests.rs#L989)

In addition to the deliverables, the following features have been implemented:
* [key count statistics are logged](https://github.com/hybrid-explorer/hybrid-indexer/commit/a15b1ce1a4e40546e22e818d034880ca37187a60)
* [zerocopy is used when reading and writing the database to reduce CPU usage and remove boilerplate code](https://github.com/hybrid-explorer/hybrid-indexer/commit/229d3e237dcf79984ccc627faf19f4a2daf964e3)
* [subxt has been upgraded to 0.32](https://github.com/hybrid-explorer/hybrid-indexer/commit/a984aa92203ef35578940f8f3dadd7d123c97db2)
