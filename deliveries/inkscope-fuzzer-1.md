# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/inkscope-fuzzer.md
* **Milestone Number:** 1

**Context** (optional)

Inkscope fuzzer is a property-based fuzzing tool tailored to uncover bugs and vulnerabilities in Ink! smart contracts during the development phase. It leverages the Drink runtime emulation engine to execute and test Polkadot smart contracts against developer-defined properties. These properties are expressed in Ink!, the same language used to write the contracts. The fuzzer ingests a .contract file and generates random inputs to validate whether the provided properties hold true across diverse execution scenarios.

At this milestone, we have established the foundational capabilities to fuzz contracts on a single thread. In the subsequent milestone, we will deliver more exhaustive testing capabilities, augment the suite of examples, provide a cheatsheet to streamline various testing actions, and introduce multithreading support for accelerated and parallelized fuzzing.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| *0a.* | License | https://github.com/inkscopexyz/inkscope-fuzzer/blob/milestone-1/LICENSE | |
| *0b.* | Documentation | https://github.com/inkscopexyz/inkscope-fuzzer/blob/milestone-1/README.md | |
| *0c.* | Testing and Testing Guide | https://github.com/inkscopexyz/inkscope-fuzzer/tree/milestone-1/src/tests / https://github.com/inkscopexyz/inkscope-fuzzer/blob/milestone-1/README.md | There is an integration test in src/tests and unit tests in various src files. Exhaustive testing will be delivered in the following milestone. |
| *0d.* | Docker | - | It will be delivered in the following milestone |
| 1. | Mocked Environment | https://github.com/inkscopexyz/inkscope-fuzzer/tree/milestone-1 ||
