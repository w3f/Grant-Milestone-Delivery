# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/hybrid2.md
* **Milestone Number:** 4

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [LICENSE](https://github.com/hybrid-explorer/hybrid-api-rs/blob/milestone-2.4/LICENSE) | Apache 2.0 | 
| **0b.** | Documentation | [docs.rs](https://docs.rs/hybrid-api/latest/hybrid_api/) | The [Hybrid CLI source code](https://github.com/hybrid-explorer/hybrid-cli/blob/master/src/main.rs) shows how to use the API. |
| **0c.** | Testing and Testing Guide | [testing-guide.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-2.4/doc/testing-guide.md) | |
| **0d.** | Docker | [Dockerfile](https://github.com/hybrid-explorer/polkadot-indexer/blob/milestone-2.4/Dockerfile) | |
| 0e. | Article | [grant2.html](https://book.hybridscan.app/announcements/grant2.html) | |
| 1. | Status subscription | [websockets.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/16c66d0e9df6e6e77b9f5f78e5dcd715fe8c793c/src/websockets.rs#L220) | |
| 2. | Unsubscribing | [websockets.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/16c66d0e9df6e6e77b9f5f78e5dcd715fe8c793c/src/websockets.rs#L231) | |
| 3. | Report each index size | [websockets.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/16c66d0e9df6e6e77b9f5f78e5dcd715fe8c793c/src/websockets.rs#L234) | |
| 4. | Rust API | [crates.io](https://crates.io/crates/hybrid-api) | |

**Additional Information**
* [subxt](https://github.com/paritytech/subxt) has been upgraded to 0.34
* logging is now performed by the `tracing` crate rather than `log`
* [polkadot-indexer](https://github.com/hybrid-explorer/polkadot-indexer/) has been updated to the latest metadata.
* [hybrid-cli](https://github.com/hybrid-explorer/hybrid-cli) has been created enabling querying of Hybrid indexes from the command line using hybrid-api-rs
* head indexing no longer interrupts batch indexing
* sporadic lockups while downloading metadata no longer occurs
