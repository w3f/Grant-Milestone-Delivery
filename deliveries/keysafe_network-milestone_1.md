# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).** 

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/keysafe_network.md
* **Milestone Number:** 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
|    0a. | License             | https://github.com/keysafe-protocol/keysafe-app/blob/master/License | Apache 2.0                                                   |
|    0b. | Documentation       | [User tutorial](https://github.com/keysafe-protocol/documents/blob/main/demo_flow/keysafe_demo_guide.md), [Tech doc](https://github.com/keysafe-protocol/documents/blob/main/README.md) | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use Keysafe. |
|   0c. | Testing Guide     | https://github.com/keysafe-protocol/keysafe-app/tree/polkadot#readme | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|   0d. | Docker   | https://github.com/keysafe-protocol/keysafe-app/tree/polkadot#readme | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Core Protocol | https://github.com/keysafe-protocol/keysafe-app | Implements the `nodeRegister` `userRegister` `userAuthentication` and `keyRecovery` functions for Node program written in Rust. |
| 2. | TEE Implementation | https://github.com/keysafe-protocol/keysafe-sgx | Implements the `nodeRegister` `userRegister` `userAuthentication` and `keyRecovery` functions for TEE part written in C++. |
| 3. | Smart Contract | https://github.com/keysafe-protocol/contracts/blob/main/ink/lib2.rs | Implements and test for the !ink smart contracts used for `nodeRegister` and `userRegister`. |
| 4. | Web Server | https://github.com/keysafe-protocol/keysafe-app | Provide meta-data management service for Keysafe users written in Rust, users can manage keys and authentication methods |
| 5. | Support Polkadot.js | https://github.com/keysafe-protocol/keysafe-front/commit/80ced2f0bc9a9c0f6f6f0b3e5aaf7b647a08d8d5 | Add support to `@polkadot/keyring` so users could make transfer/recover directly without input and seeds/keys. |