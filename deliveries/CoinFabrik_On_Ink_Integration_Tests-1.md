# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/CoinFabrik_On_Ink_Integration_Tests.md
* **Milestone Number:** 1

**Context** (optional)

We provide a comprehensive report that compares the functionalities of integration tests and E2E (End-to-End) tests. The report's focus is to identify what can be accomplished in E2E tests but not currently in integration tests, as well as any inconsistencies. We also provide an implementation time estimate for the issues whose development we deemed feasible.

All analysis work linked in the report can be found in our [analysis repository](https://github.com/CoinFabrik/on-ink-integration-tests/tree/milestone-1-web3-grant).

The report makes references to two table attachments. These need to be downloaded as it is not possible to visualize them through GitHub.
- [Attachment 1: Universe of Functions](https://github.com/CoinFabrik/on-ink-integration-tests/blob/milestone-1-web3-grant/assets/Attachement%201%20Universe%20of%20Functions.xlsx)
- [Attachment 2: Initial Analysis List](https://github.com/CoinFabrik/on-ink-integration-tests/blob/milestone-1-web3-grant/assets/Attachment%202%20Initial%20Analysis%20List.xlsx)


**Deliverables**

| Number | Deliverable | Link | Notes |
| ----- | ----------- | ------------- |------------- |
| 0a. | License | https://github.com/CoinFabrik/on-ink-integration-tests/blob/milestone-1-web3-grant/LICENSE | MIT |
| 0b. | Documentation | https://github.com/CoinFabrik/on-ink-integration-tests/blob/milestone-1-web3-grant/assets/On%20Ink%20Integration%20Tests%20Milestone%20Report.pdf | We deliver a comprehensive report that compares the functionalities of integration tests and E2E (End-to-End) tests. The report's focus is to identify what can be accomplished in E2E tests but not currently in integration tests, as well as any inconsistencies. If applicable, we provide suggestions that are not covered by either test type.
| 0c. | Testing and Testing Guide | - | No tests will be produced at this stage.
| 0d. | Docker | - | Does not apply at this stage.
| 0e. | Article | https://www.coinfabrik.com/blog/missing-functionalities-on-ink-integration-tests/ | We prepared a summary report and published it on our blog https://blog.coinfabrik.com/ under the name `Missing Functionalities On Ink Integration Tests`.
 **1** | Analyze | https://github.com/CoinFabrik/on-ink-integration-tests/blob/milestone-1-web3-grant/assets/On%20Ink%20Integration%20Tests%20Milestone%20Report.pdf  | We studied and compared Integration and E2E (End-to-End) tests in ink!, as documented in Appendix 1 of our report.
 **2** | Evaluate |  https://github.com/CoinFabrik/on-ink-integration-tests/blob/milestone-1-web3-grant/assets/On%20Ink%20Integration%20Tests%20Milestone%20Report.pdf  | We assigned a complexity level to each finding based on the difficulty of implementing the missing or enhanced functionality. See complexity level for the implementation of each finding in Reference 1: Findings and Estimations, in Results section of Appendix 1, where we also provide a guideline for its implementation.
 **3** | Estimate |  https://github.com/CoinFabrik/on-ink-integration-tests/blob/milestone-1-web3-grant/assets/On%20Ink%20Integration%20Tests%20Milestone%20Report.pdf  | We indicate an order of priority under which the missing functionalities shall be developed during the next milestone, where the functionalities are effectively implemented for integration tests. See the implementation order of priority of the analyzed issues in Reference 1: Findings and Estimations, in Results section of Appendix 1. This order was established considering the feasibility of the implementation, as well as the dependency order among features.



**Additional Information**

- How did you hear about the Grants Program? Richard Casey from Parity brought this program to our attention, and we have already successfully delivered two applications as a result.

- During our inquiries for this application, we briefly consulted Sam Ruberti from the ink! Team and David Hawig from the Web3 Foundation. Their encouragement motivated us to proceed with this presentation.

- Next Steps: After finishing this Milestone 1, and having a good understanding of which missing functionalities in the integration testing environment can be developed, as well as an estimation of the effort required to develop them, we will submit a new grant proposal for a second milestone. The intention of this second milestone is to effectively implement these missing features.
