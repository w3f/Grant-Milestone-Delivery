# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/216 
* **Milestone Number:** 1

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/webb-tools/anon, https://github.com/webb-tools/bulletproof-gadgets/ | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | https://github.com/webb-tools/anon, https://github.com/webb-tools/bulletproof-gadgets/ | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | https://github.com/webb-tools/anon, https://github.com/webb-tools/bulletproof-gadgets/ | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Substrate module: SparseMerkleTree (SMT) | https://github.com/webb-tools/anon | We will create a Sparse Merkle Tree module that will support a standard interface for interacting with Merkle Trees |  
| 2. | Substrate module: Mixer | https://github.com/webb-tools/anon | We will create a Mixer module that will facilitate a deposit/withdraw functionality for mixing a token. |
| 3. | Gadgets | https://github.com/webb-tools/bulletproof-gadgets/ | We will build a variety of gadgets for sparse merkle trees, mixers, hash preimage zk circuits using bulletproofs.
| 4. | Substrate chain | https://github.com/webb-tools/anon | Modules SMT/Mixer of our custom chain will interact in such a way, allowing a user to deposit native tokens into the mixer and withdraw them with a valid zero-knowledge proof. |  
| 5. | Docker | https://github.com/webb-tools/anon | We will provide a dockerfile to demonstrate the full functionality of our chain |
