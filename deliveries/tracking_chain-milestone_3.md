# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [LINK](https://github.com/w3f/Grants-Program/blob/master/applications/tracking_chain.md)
* **Milestone Number:** 3

**Context** (optional)  
Milestone 3 concerns the The "Monitor and Recovery" so that we can handle any errors that may occur during transactions.
  
**Deliverables**

| Number | Deliverable | Link | Notes |
| ------- | ------------- | ----- |------------- |
| **0a.** | License | [LINK](https://github.com/TrackingChains/TrackingChain/blob/main/LICENSE) | MIT |
| **0b.** | Documentation | [LINK](https://github.com/TrackingChains/TrackingChain/wiki/Milestone-3-Guide-to-Demo)  | We will provide a basic **tutorial** that explains how a user can seed data for the demo to recovery Tx in error |
| **0c.** | Testing and Testing Guide | [LINK](https://github.com/TrackingChains/TrackingChain/wiki/Unit-Test)  [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/main/test/TrackingChain.UnitTest) | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. |
| **0d.** | Docker | [Docker-Compose](https://github.com/TrackingChains/TrackingChain/wiki/Docker-Compose) | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | [LINK](https://github.com/TrackingChains/TrackingChain/wiki/Milestone-3-Guide-to-Demo)  | We will publish an **article**/workshop that explains how to use the Milestone 3. |
| 1. | Tx Generator/Watcher Worker | [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.3.0-alpha/src/TransactionMonitor.Worker) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.3.0-alpha) | Written in C#, It will be improved to handle any errors that may arise and to retry the process for a configurable number of times. Once the maximum number has been exceeded, it will go into error status and the Watcher will manage the next phase which may be an attempt to re-enter the transaction again starting from the pool or put it definitively in permanent error status so as to be able to process the subsequent elements that were pending of the completely of the Transaction failed |
| 2. | Tx Recovery/Monitor Worker | [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.3.0-alpha/src/TransactionMonitor.Worker) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.3.0-alpha) | Written in C#, The Tx Recovery/Monitor Worker will used to managed all transaction in failed status. It takes care of trying to re-process any transactions that have ended in error. in case of a new error, the transaction will be cancelled. It will also take care of generating alerts to be sent by email whenever a something goes wrong |
| 3. | Tx Cleaner Worker | [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.3.0-alpha/src/TransactionMonitor.Worker) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.3.0-alpha) | Written in C#, The Tx Cleaner Worker will used to delete all transactions in status Completed from the Triage, PEnding and Pool to make the database lighter, The history will be present in the Registry |
| 4. | Tx Unlocker Worker | [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.3.0-alpha/src/TransactionMonitor.Worker) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.3.0-alpha) | Written in C#, The Tx Unlocker Worker will used to to unlock any transactions left Unlocked due to unhandled errors or system crashes that cause a server restart. (very remote hypothesis but very important to manage in order not to lead to a block of all transactions due to unmanaged Unlocks) |
| 5. | Frontend Admin Tools | [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.3.0-alpha/src/TrackingChain.WebApp) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.3.0-alpha) | Written in Asp.Net MVC, Improvements to decide which failed Tx's to try to reprocess or mark them as permanently failed and possibility of marking as Aborted the Tx present in the Triage but not yet in Pool status |


**Additional Information**  
Due to the impossibility of simulating temporary errors in a demo that can be resolved automatically at the next attempt (as detailed in the Milestone 3 guide), I have provided a SEED SQL with ready-made transactions in error, in this way it is possible show how the watch is able to restart failed transactions.
