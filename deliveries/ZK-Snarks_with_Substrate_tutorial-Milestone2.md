# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ZK-Snarks%20tutorial.md
* **Milestone Number:** 2

**Context** 

The goal was to implement the on-chain proof verification mechanism followed by series of educational materials.

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense | MIT license can be found [here](https://github.com/bright/zk-snarks-with-substrate/tree/main/LICENSE). |
| **0b.** | Documentation |Documentation can be found in the [README](https://github.com/bright/zk-snarks-with-substrate/tree/main/pallets/zk-snarks/README.md) file. | We will provide both inline documentation of the code and a tutorial (which will be a part of the blog post) that explains how a user can (for example) spin up Substrate nodes and upload a verification key and the proof. This will show how the new functionality works. | 
| **0c.** | Testing and Testing Guide | [Repository](https://github.com/bright/zk-snarks-with-substrate/) |Run `cargo test` in project's root directory. |
| **0d.** | Docker | [Repository](https://github.com/bright/zk-snarks-with-substrate/) | Run `docker-compose up` in project's root directory
| 1. | Research notes | Notes can be found in the [QAP_NOTES](https://github.com/bright/zk-snarks-with-substrate/tree/main/pallet/notes/qap_notes.pdf) file. |Mathematical calculations based on Groth16 | 
| 2. | Groth16  proof verification method | Code for Groth16 proof verification can be found in the [verify.rs](https://github.com/bright/zk-snarks-with-substrate/tree/main/pallets/zk-snarks/src/verify.rs) file.| Implement Groth16  proof verification method which will be used by pallet |
| 3. | Demo | Demo part is done in our cycle of articles, but the details commands which should be run can be found in the [README](https://github.com/bright/zk-snarks-with-substrate/tree/main/circom/README.md) file.|Create a demo, where we will use a 3-rd party tool to verify a solution & where we Alice could be rewarded for finding a solution. | 
| 4. | Circuits in circom | Circuit template is in the [task.circom](/Users/mg/Development/substrate/groth16-pallet/circom/task.circom) file.|Prepare a circuits in circom, which will describe our problem | 
| 5. | Blog post: Tutorial Groth16 (Part 1) |   Blog post is in the [groth16.md](/Users/mg/Development/substrate/groth16-pallet/blog/groth16.md) file.|Describing the groth16 & running "circom proof" from previous post with the Rust Unit test / CMD |
| 6. | Blog post: Tutorial Pallet (Part 2) | Blog post is in the [zk-snark-pallet.md](/Users/mg/Development/substrate/groth16-pallet/blog/zk-snark-pallet.md) file.| Updating the pallet with the groth16 & running an example from the previous tutorial with the PolkaJS | 
| 7. | Youtube video | Video is in the [zk-snarks.mp4](/Users/mg/Development/substrate/groth16-pallet/video/zk-snarks.mp4) file.|Youtube video tutorial explaining the concepts from the blog posts | 
