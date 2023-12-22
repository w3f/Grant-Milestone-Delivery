# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadot_tests.md
* * **Milestone Number:** 1

**Context** (optional)
We present a POC and comprehensive study on the conformance testing of Polkadot host node implementations. We delve into the importance of ensuring consistent behavior across all host implementations, the challenges involved, and the potential solutions. 
The review previous efforts in this domain, providing insights into their strengths and shortcomings. Furthermore, we discuss the testing of various aspects of the Polkadot protocol, including the host API, storage, and cryptographic functionalities.
Our work concludes with recommendations for future testing efforts, emphasizing the need for rigorous testing and strict adherence to the Polkadot specification document.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |https://github.com/Zondax/polkadot-testing?tab=Apache-2.0-1-ov-file| Apache 2.0| 
| 0b.  | Documentation |https://github.com/Zondax/polkadot-testing/blob/main/docs/report.pdf| ...| 
| 0c. | Testing and Testing Guide | https://github.com/Zondax/polkadot-testing/blob/main/docs/report.md#supplementary-information| ...| 
| 0d.  | Docker |https://github.com/Zondax/Polkadot-conformance-tests/tree/ccc6fba4698f03ece52d731fad0bcd82f8864cdf/docker| ...| 
| 0e. | Article |https://zondax.ch/blog/polkadot-testing| ...| 
| 1.  | PoC code |https://github.com/Zondax/polkadot-testing| ...|
| 2a.  | Code PoC Tests: Host API: cryptography primitives |https://github.com/Zondax/Polkadot-conformance-tests/tree/ccc6fba4698f03ece52d731fad0bcd82f8864cdf/scripts/host_api| ...|
| 2b.  | Code PoC Tests: Trie proof verification |https://github.com/Zondax/Polkadot-conformance-tests/blob/ccc6fba4698f03ece52d731fad0bcd82f8864cdf/scripts/state-trie.py| ...|


**Additional Information**
Blockchain projects are complex and critical systems. They require particular attention to specification and testing, especially when there are different implementations working on the same network.
We have tried to come up with a solution that would facilitate the work of developers without burdening them. Polkadot might benefit from a custom testing tool, and we are looking forward to building it for the community.
 
