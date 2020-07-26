# Evaluation

* **Status:** In Progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/27 
* **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul>|[License](https://github.com/yxf/subwallet/blob/master/LICENSE)| MIT instead of Apache, but that's not an issue |
| 1. | Set RPC url |<ul><li>[] </li></ul>| [code](https://github.com/yxf/subwallet/blob/master/src/main.rs#L232) | 
| 2. | Display balances |<ul><li>[] </li></ul>| [code](https://github.com/yxf/subwallet/blob/master/src/main.rs#L179) | Error: Io(Os { code: 2, kind: NotFound, message: "No such file or directory" })
| 3. | Balance transfer |<ul><li>[] </li></ul>| [code](https://github.com/yxf/subwallet/blob/master/src/main.rs#L130) | 
| 4. | Sync extrinsics |<ul><li>[] </li></ul>| [code](https://github.com/yxf/subwallet/blob/master/src/main.rs#L198) | 
| 5. | Extrinsic list |<ul><li>[] </li></ul>| [code](https://github.com/yxf/subwallet/blob/master/src/main.rs#L222) | 
| 6. | Unit Tests |<ul><li>[] </li></ul>| https://github.com/yxf/subwallet/blob/master/src/rpc.rs#L295 | 26 unit tests, but there aren't unit tests for every command.  
| 7. | Documentation |<ul><li>[] </li></ul>| https://github.com/yxf/subwallet | No documentation for transfers: https://github.com/yxf/subwallet#transfer, no rustdoc support


## General Notes

No support for Kusama or an option to delete accounts 
