# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [Proposal PR](https://github.com/w3f/Grants-Program/pull/2246)
* **Milestone Number:** 1

**Context**

The current implementation of [subxtpy](https://github.com/philoniare/subxtpy) has bindings for the most common 
functionality to read from storage, events, call runtime API and sign and submit extrinsics. The functionality is 
mostly dynamic at the moment due to the way the macros are run at compile time with Rust. We do believe that static API
will be helpful to Python developers, so we intend to leverage Python decorators to generate static extrinsic call 
methods from metadata in the next milestone delivery. 

**Deliverables**

| Number | Deliverable               | Link                                                                           |
| -----: |---------------------------|--------------------------------------------------------------------------------|
| **0a.** | License                   | [Apache 2.0](https://github.com/philoniare/subxtpy/blob/main/LICENSE.md)       |
| **0b.** | Documentation             | [Readme](https://github.com/philoniare/subxtpy/blob/main/README.md)            |
| **0c.** | Testing and Testing Guide | [Tests folder](https://github.com/philoniare/subxtpy/tree/main/tests)          |
| 0e. | Article                   | [Article](https://www.philoniare.com/blog/subxtpy)                             |
| 1. | Project Setup             | [README](https://github.com/philoniare/subxtpy/blob/main/README.md)            |
| 2. | PyO3 Bindings             | [Source code](https://github.com/philoniare/subxtpy/blob/main/src/lib.rs)      |
| 3. | Client Functionality       | [Source code](https://github.com/philoniare/subxtpy/blob/main/src/lib.rs)      |
| 4. | Storage API           | [Source code](https://github.com/philoniare/subxtpy/blob/main/src/lib.rs#L143) |
| 5. | Extrinsics API              | [Source code](https://github.com/philoniare/subxtpy/blob/main/src/lib.rs#L292) |
| 6. | Error Handling      | [Source code](https://github.com/philoniare/subxtpy/blob/main/src/lib.rs)      

