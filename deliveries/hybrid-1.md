# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/hybrid.md 
* **Milestone Number:** 1

**Deliverables**

| Number | Deliverable | Link | Notes |
| -------| ----------- | ---- | ----- |
| 0a. :heavy_check_mark: | License | [LICENSE](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/LICENSE) | Apache 2.0 | 
| 0b. :heavy_check_mark: | Documentation | [README.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/README.md) | | 
| 0c. :heavy_check_mark: | Testing and Testing Guide | [README.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/README.md#tutorial) | | 
| 0d. :heavy_check_mark: | Docker | [README.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/README.md#docker) | | 
| 1. :heavy_check_mark: | Connect to Substrate chains | [main.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/src/main.rs#L50) | | 
| 2. :heavy_check_mark: | Block syncing | [substrate.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/src/substrate.rs#L283)| | 
| 3. :heavy_check_mark: | Index writing | [substrate.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/src/substrate.rs#L198) | | 
| 4. :heavy_check_mark: | Status querying | [websockets.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/src/websockets.rs#L83) | | 
| 5. :heavy_check_mark: | Index querying | [websockets.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/src/websockets.rs#L95) | | 
| 6. :heavy_check_mark: | Dapp | [hybrid-dapp](https://github.com/hybrid-explorer/hybrid-dapp/tree/milestone-1) | | 

**Additional Information**

This milestone primarily focuses on the indexer. The Dapp in this milestone exists solely to demonstrate the functionality of the indexer. It will be further developed in milestones 2 and 3.

The indexer currently stores a partial representation of most events it indexes. When an event is found by a query, this representation is returned to the client in JSON. In milestone 2 the indexer will be updated to not store the event at all. Only block number and event index will be returned to the client. The client will then load the event via RPC or Substrate Connect. Because the event storing functionality is about to be removed, it does not have unit tests.

Indexing is currently quite slow. Asynchronous block downloading will be implemented in milestone 2 to speed things up.

