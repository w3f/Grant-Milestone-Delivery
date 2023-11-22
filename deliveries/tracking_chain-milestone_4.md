# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [LINK](https://github.com/w3f/Grants-Program/blob/master/applications/tracking_chain.md)
* **Milestone Number:** 4

**Context** (optional)  
Milestone 4 concerns to demonstrate that it is possible to configure your SmartContracts in INK to wait until the block is finalized.
  
**Deliverables**

| Number | Deliverable | Link | Notes |
| ------- | ------------- | ----- |------------- |
| **0a.** | License | [LINK](https://github.com/TrackingChains/TrackingChain/blob/main/LICENSE) | MIT |
| **0b.** | Documentation | [LINK](https://github.com/TrackingChains/TrackingChain/wiki/Milestone-4-Guide-to-Demo)  | We will provide a basic **tutorial** that explains how to complete the demo |
| **0c.** | Testing and Testing Guide | [LINK](https://github.com/TrackingChains/TrackingChain/wiki/Unit-Test)  [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/main/test/TrackingChain.UnitTest) | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. |
| **0d.** | Docker | [Docker-Compose](https://github.com/TrackingChains/TrackingChain/wiki/Docker-Compose) | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | [LINK](https://github.com/TrackingChains/TrackingChain/wiki/Milestone-4-Guide-to-Demo)  | We will publish an **article**/workshop that explains how to use the Milestone 4. |
| 1. | Tx Generator Worker | [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.4.0-alpha/src/TransactionGenerator.Worker) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.4.0-alpha) | Improvement to wait for the transaction to be finalized in order to skip the "Tx Watcher Phase" (this mode will be an option present in the configuration) it's will also allow for better support for chains that don't have access to subscans. To achieve this we will listen via socket in order to wait for the finalization of the generated Tx |


**Additional Information**  
Note that this time, with the TrageAPI, I ensured that it automatically populates the database with a seed of data ready to run the test. However, some services may encounter errors until the seed is completed. In such a case, simply restarting the container that encountered the error should allow it to start correctly.  
  
This is the final milestone, and I wanted to thank all of you for the trust and support you've provided over these months.  
