# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/27 
* **Milestone Number:** 2

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Set RPC url | [Implementation](https://github.com/yxf/subwallet/blob/master/src/main.rs#L232) + [Usage](https://github.com/yxf/subwallet#setrpcurl) |
| 2. | Display balances | [Implementation](https://github.com/yxf/subwallet/blob/master/src/main.rs#L179) + [Usage](https://github.com/yxf/subwallet#getbalances) |  
| 3. | Balance transfer | [Implementation](https://github.com/yxf/subwallet/blob/master/src/main.rs#L130) + [Usage](https://github.com/yxf/subwallet#transfer) | 
| 4. | Sync extrinsics | [Implementation](https://github.com/yxf/subwallet/blob/master/src/main.rs#L198) + [Usage](https://github.com/yxf/subwallet#syncextrinsics-or-syncxts) | 
| 5. | Extrinsic list | [Implementation](https://github.com/yxf/subwallet/blob/master/src/main.rs#L222) + [Usage](https://github.com/yxf/subwallet#listextrinsics-or-listxts) |
| 6. | Unit Tests | https://github.com/yxf/subwallet/blob/master/src/rpc.rs#L295 |
| 7. | Documentation | https://github.com/yxf/subwallet |


##### Additional Information 

* Please run tests with rust nightly version.
* Synchronizing extrinsics will take a lot of time.
* [`watchaddress`](https://github.com/yxf/subwallet#watchaddress) is used to watch address and test.