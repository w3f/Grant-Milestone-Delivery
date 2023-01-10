# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ZK-Snarks%20tutorial.md
* **Milestone Number:** 1

**Context** 

The goal was to create a pallet which will store a necessary data for a zk-Snarks + perform the research on ZK-Snarks concept.

**Deliverables**


| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | MIT license can be found [here](https://github.com/bright/zk-snarks-with-substrate/tree/main/LICENSE). | MIT license |
| **0b.** | Documentation | Documentation can be found in the [README](https://github.com/bright/zk-snarks-with-substrate/tree/main/pallets/zk-snarks/README.md) file. ||
| **0c.** | Testing and Testing Guide | [Repository](https://github.com/bright/zk-snarks-with-substrate/) |Run `cargo test` in project's root directory. |
| **0d.** | Docker | [Repository](https://github.com/bright/zk-snarks-with-substrate/) | Run `docker-compose up` in project's root directory
| 1. | The pallet | [Repository](https://github.com/bright/zk-snarks-with-substrate/) and [polkadotjs app](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/extrinsics) | Interaction with the node can be done through [polkadotjs app](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/extrinsics). There are two extrinstics, one for setting up the system (storing public inputs and verification key) and second for submitting proof. They can be found under `zkSnarks` pallet, named `setupVerification` and `verify` respectively.
| 2. | Blog post | Blog post can be found in the [repository](https://https://github.com/bright/zk-snarks-with-substrate/tree/main/blog/introduction.md)| The blogpost will be published as soon as it's accepted as a part of the milestone.| 

**Additional information**

We updated our wallet address in the invoice, so it's different to what's been first added in our proposal. Please let us know if it's acceptable and if we should update it in the proposal file as well.
