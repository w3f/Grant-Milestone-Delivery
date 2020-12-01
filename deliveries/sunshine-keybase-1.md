# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/48
* **Milestone Number:** 1

| Number | Deliverable | Link | Note |
| ------------- | ------------- | ------------- | ------------- |
| 0a. | License | Unlicense |
| 0b. | Documentation | [high-level docs](https://sunshine-protocol.github.io/sunshine-bounty/client/keybase.html), [code docs](https://docs.rs/sunshine-identity-client/0.2.3/sunshine_identity_client/) | We will provide both inline documentation of the code and a basic tutorial that shows how to run the local dev node alongside the Flutter UI to register and manage a sunshine-identity on a local network. |
| 1. | Testing Guide | [subxt docs](https://sunshine-protocol.github.io/sunshine-bounty/client/subxt.html) | The client will have substrate-subxt integration tests that verify behavior at the network level to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 2. | Substrate module: Chain | [code](https://github.com/sunshine-protocol/sunshine-keybase/blob/master/chain/pallet/src/lib.rs) | We will create a pallet that allows a closed set of signers to build private proof of authority chains using ipfs and substrate. These chains consists of private data shared among the closed set. |  
| 3. | Substrate module: Identity | [code](https://github.com/sunshine-protocol/sunshine-keybase/blob/master/identity/pallet/src/lib.rs) | We will create a pallet that uses the Chain module to manage data relevant to the registered identity. This module adds more granular management when storing the user key, device keys, password and social media accounts. |  
| 4. | Flutter UI | [code](https://github.com/sunshine-protocol/sunshine-keybase-ui) | We will write a Flutter UI that communicates directly between our Rust substrate-subxt client and our Flutter interface to express the user identity configuration interface. |  
| 5. | Substrate chain | [docs](https://sunshine-protocol.github.io/sunshine-bounty/client/keybase.html) | Flutter UI works with local node to enable identity registration, password reset, and github authentication. |  
| 6. | Dockerfile upon request | [Dockerfile](https://github.com/sunshine-protocol/sunshine/blob/master/docker-compose.yml) |  |
