# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [LINK](https://github.com/w3f/Grants-Program/blob/master/applications/tracking_chain.md)
* **Milestone Number:** 2

**Context** (optional)  
Milestone 2 concerns the Frontend part, in particular the possibility of configuring Accounts, Profiles and Smartcontracts as well as being able to view the data of the various Transaction tables (Triage, Pool, Pending, Registry)

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------- | ------------- | ----- |------------- |
| **0a.** | License | [LINK](https://github.com/TrackingChains/TrackingChain/blob/main/LICENSE) | MIT |
| **0b.** | Documentation | [LINK](https://github.com/TrackingChains/TrackingChain/wiki/Milestone-2-Guide-to-Demo)  | We will provide a basic **tutorial** that explains how a user can seed data for the demo and use the  Admin Tool and Monitor FrontEnd |
| **0c.** | Testing and Testing Guide | [LINK](https://github.com/TrackingChains/TrackingChain/wiki/Unit-Test)  [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/main/test/TrackingChain.UnitTest) | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. |
| **0d.** | Docker | [LINK SQL Server under Docker](https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&pivots=cs1-bash) | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | [LINK](https://github.com/TrackingChains/TrackingChain/wiki/Milestone-2-Guide-to-Demo)  | We will publish an **article**/workshop that explains how to use the Milestone 2. |
| 1. | Frontend Admin Tools | [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.2.0-alpha/src/TrackingChain.WebApp) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.2.0-alpha) | Written in Asp.Net MVC, The frontend for manage all configuration like smart contract used, wallet used, profile association. It is visible by accessing the menu "Admin Tools" |
| 2. | Frontend Transaction Monitor | [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.2.0-alpha/src/TrackingChain.WebApp) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.2.0-alpha) | Written in Asp.Net MVC, The monitor to watch all tracking request. A graphical tool that allows you to display the status of all queues on screen. For example showing how many Triage there are, how many Pending, how many failed transactions. Including the detail of each single Tx within the Triage, Pool, pending and Registry. It is visible by accessing the menu "Monitor" |
| 3. | Frontend Registry | [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.2.0-alpha/src/TrackingChain.WebApp) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.2.0-alpha) | Written in Asp.Net MVC, The frontend for user friendly graph of specific product tracked onchain. For each value Key will be show all data Values insured and in wich block/time was performed. It is visible by accessing the menu "Tracked Viewer" |


**Additional Information**  
The whole frontend part is visible through the TrackingChain.WebApp, once the site has started it will be possible to use the macro categories "Admin Tools", "Monitor", "Tracked Viewer".  
I have tried to detail and document every single step necessary to configure and run the application. Which is not very trivial so I'm available for a short call in which I show step by step an installation on Ubuntu and some Runs in real time to show how use admin portal.  
