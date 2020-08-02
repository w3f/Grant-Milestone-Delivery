# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/27 
* **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul>|[License](https://github.com/yxf/subwallet/blob/master/LICENSE)| MIT instead of Apache, but that's not an issue |
| 1. | Set RPC url |<ul><li>[x] </li></ul>| [code](https://github.com/yxf/subwallet/blob/master/src/main.rs#L232) | Works: ./subwallet setrpcurl wss://rpc.polkadot.io
| 2. | Display balances |<ul><li>[x] </li></ul>| [code](https://github.com/yxf/subwallet/blob/master/src/main.rs#L179) | Initially I got an error: Io(Os { code: 2, kind: NotFound, message: "No such file or directory" }), but it's fixed now
| 3. | Balance transfer |<ul><li>[x] </li></ul>| [code](https://github.com/yxf/subwallet/blob/master/src/main.rs#L130) | Unable to test transfers with polkadot at the moment (since transfers are not enabled yet), but it seems to be correct. 
| 4. | Sync extrinsics |<ul><li>[x] </li></ul>| [code](https://github.com/yxf/subwallet/blob/master/src/main.rs#L198) | works, but I'm not sure how useful it is
| 5. | Extrinsic list |<ul><li>[x] </li></ul>| [code](https://github.com/yxf/subwallet/blob/master/src/main.rs#L222) | Works
| 6. | Unit Tests |<ul><li>[x] </li></ul>| https://github.com/yxf/subwallet/blob/master/src/rpc.rs#L295 | 26 unit tests, but there aren't unit tests for every command. Added one additional test after I mentioned it  
| 7. | Documentation |<ul><li>[x] </li></ul>| https://github.com/yxf/subwallet | Initially no documentation for transfers: https://github.com/yxf/subwallet#transfer, but it was fixed, no rustdoc support


## General Notes

All issues were fixed quickly and everything works now. However, no support for Kusama or an option to delete accounts, which would have been nice since transfers on Polkadot are not yet enabled. If I back-up my wallet, it doesn’t ask me to confirm my password, which would be very useful. Also, the code isn't very well documented or structured and has some unused variables. So, it might be a little bit more difficult for others to actually use the CLI wallet for their own projects. 
