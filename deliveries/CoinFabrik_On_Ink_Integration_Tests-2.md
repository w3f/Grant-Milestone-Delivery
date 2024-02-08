# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/CoinFabrik_On_Ink_Integration_Tests_2.md
* **Milestone Number:** 1

**Context** (optional)

For this milestone, we developed missing functionalities for integration tests, and corrected implementation differences when compared to end-to-end (e2e) tests, for the following functions: default_accounts(), set_contract_storage(), and instantiate_contract().

Additionally, we provide [documentation and test cases](https://github.com/CoinFabrik/on-ink-integration-tests/tree/milestone-on-ink-integration-tests-2/test-cases) for all the 24 functions exposed for use in integration and E2E testing environments. This includes highlighting behavioral and implementation differences, as well as suggesting implementation plans for any necessary corrections. 

We documented our work in a [milestone report](https://github.com/CoinFabrik/on-ink-integration-tests/blob/milestone-on-ink-integration-tests-2/assets/On-Ink-Integration-Tests-2-Milestone-Report.pdf). All analysis work linked in the report can be found in our [analysis repository](https://github.com/CoinFabrik/on-ink-integration-tests/tree/milestone-on-ink-integration-tests-2).

**Deliverables**

| Number | Deliverable | Link | Notes |
| ----- | ----------- | ------------- |------------- |
| 0a. | License | https://github.com/CoinFabrik/on-ink-integration-tests/blob/milestone-on-ink-integration-tests-2/LICENSE | MIT |
| 0b. | Documentation | https://github.com/CoinFabrik/on-ink-integration-tests/blob/milestone-on-ink-integration-tests-2/assets/On-Ink-Integration-Tests-2-Milestone-Report.pdf | We deliver a comprehensive report comparing the functionalities of integration tests and E2E (End-to-End) tests. The focus of this report is on the functions to be implemented or corrected in this milestone, corresponding to issues: 1-default_accounts(), 2-set_contract_storage(), and 7-instantiate_contract().<br>We also provide [documentation and test cases](https://github.com/CoinFabrik/on-ink-integration-tests/tree/milestone-on-ink-integration-tests-2/test-cases) for the 13 functions with pending analysis, completing our analysis of the 24 functions exposed for integration and e2e tests.
| 0c. | Testing and Testing Guide | - | We followed existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md) for the pull requests associated with the implementations of functions: default_accounts(), set_contract_storage() and instantiate_contract(). For these functions, we added test cases in their target directories correspondingly. We include a testing guide on how to execute these tests in [our report](https://github.com/CoinFabrik/on-ink-integration-tests/blob/milestone-on-ink-integration-tests-2/assets/On-Ink-Integration-Tests-2-Milestone-Report.pdf), on `Reference 1: Implementation Summary` of section `Execution` of the `Appendix 1`, and in the documentation of each corresponding pull request.
| 0d. | Docker | - | Does not apply at this stage.
| 0e. | Article | https://www.coinfabrik.com/blog/implementing-missing-functionalities-on-ink-integration-tests | We prepared a summary report and published it on our blog https://blog.coinfabrik.com/ under the name `Implementing Missing Functionalities On Ink Integration Tests`.
 **1** | Develop | [PR1-default_accounts()](https://github.com/paritytech/ink/pull/1955), [PR2-set-account_storage()](https://github.com/paritytech/ink/pull/1961), [PR3-instantiate-contract()](https://github.com/paritytech/ink/pull/1988)  | We provide implementations for the three functions specified in this milestone: [default_accounts()](https://github.com/paritytech/ink/pull/1955), [set_contract_storage()](https://github.com/paritytech/ink/pull/1961) and [instantiate_contract()](https://github.com/paritytech/ink/pull/1988). Check further documentation on these developments in [our report](https://github.com/CoinFabrik/on-ink-integration-tests/blob/milestone-on-ink-integration-tests-2/assets/On-Ink-Integration-Tests-2-Milestone-Report.pdf), in the `Reference 1: Implementation Summary` of the section `Execution` of the `Appendix 1`.<br>On the other hand, as we worked on integrating our test cases into CI/CD, we identified a bug when building e2e tests in a workspace. Concretely, we noticed that the build for e2e tests failed when running cargo-contract inside a workspace package, and if any dependency was inherited from the workspace definition. We performed a pull request to the cargo-contract repository implementing a [fix](https://github.com/paritytech/cargo-contract/pull/1358) to this issue. Check further documentation on this development in [our report](https://github.com/CoinFabrik/on-ink-integration-tests/blob/milestone-on-ink-integration-tests-2/assets/On-Ink-Integration-Tests-2-Milestone-Report.pdf), in the subsection `Ad-hoc developments` of the section `Execution` of the `Appendix 1`.
 **2** | Review and Estimate | https://github.com/CoinFabrik/on-ink-integration-tests/blob/milestone-on-ink-integration-tests-2/assets/On-Ink-Integration-Tests-2-Milestone-Report.pdf   | We performed a review of the 13 functions with pending analysis and found implementation differences between integration and e2e tests for the functions balance() and weight_to_fee(). For balance() we provide an implementation estimate. For weigh_to_fee() we provide documentation of the problem and an associated test case; the issue occurs on the e2e environment and needs to be discussed with the responsible team before moving forward. Check documentation of these reviews and estimates in our report, on `Reference 2: Findings and Estimation` of section `Further Analysis and Estimation` of the `Appendix 1`.
 **3** | Quality Assurance |  - | We reviewed and followed the established [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md) for the three pull requests performed: [PR1-default_accounts()](https://github.com/paritytech/ink/pull/1955), [PR2-set-account_storage()](https://github.com/paritytech/ink/pull/1961), [PR3-instantiate-contract()](https://github.com/paritytech/ink/pull/1988).



**Additional Information**

- How did you hear about the Grants Program? Richard Casey from Parity brought this program to our attention, and we have already successfully delivered two applications as a result.

- During our inquiries for this application, we briefly consulted Sam Ruberti from the ink! Team and David Hawig from the Web3 Foundation. Their encouragement motivated us to proceed with this presentation.

- Next Steps: After completing this milestone, we will submit a new grant proposal for the development of the remaining functions that either lack implementations in integration tests or exhibit differences when compared to E2E tests.
