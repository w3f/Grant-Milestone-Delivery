# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/CoinFabrik_On_Ink_Integration_Tests_3.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Specification | Comments
| ----- | ----------- | ------------- | ------------- | ------------- |
| 0a. | License | <ul><li>[x] </li></ul> | MIT | | 
| 0b. | Documentation | <ul><li>[x] </li></ul> | We worked on the comparison report, providing documentation on the developed functions: `invoke_contract_delegate()`, `invoke_contract()`, `set_code_hash()`, `caller_is_origin()`, `code_hash()`, `own_code_hash()`, and `balance()`. Check [`Appendix 1` of the included report](https://github.com/CoinFabrik/on-ink-integration-tests/blob/main/assets/On-Ink-Integration-Tests-3-Milestone-Report.pdf).<br> We also contacted the ink! development team and provided a report on `weight_to_fee()`, raised as issue [#1985](https://github.com/paritytech/ink/issues/1985) in the requested repository. This was discussed with [@cmichi](https://github.com/cmichi) and after being reviewed by [@smiasojed](https://github.com/smiasojed) was resolved in pull request [PR #219](https://github.com/paritytech/substrate-contracts-node/pull/219) to substrate-contracts-node.<br> We provide additional documentation on new issues we found as we performed our fixes in section [`Other Findings` of Appendix 1]((https://github.com/CoinFabrik/on-ink-integration-tests/blob/main/assets/On-Ink-Integration-Tests-3-Milestone-Report.pdf)). | Ok.
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | We followed existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md) for the pull requests associated with the implementations of functions: `invoke_contract_delegate()`, `invoke_contract()`, `set_code_hash()`, `caller_is_origin()`, `code_hash()`, `own_code_hash()`, and `balance()`. For these functions, we added test cases in their target directories correspondingly. We include a testing guide on how to execute these tests in [our report](https://github.com/CoinFabrik/on-ink-integration-tests/blob/main/assets/On-Ink-Integration-Tests-3-Milestone-Report.pdf), on `Reference 1: Implementation Summary` of section `Execution` of the `Appendix 1`, and in the documentation of each corresponding pull request. | Ok.
| 0d. | Docker | <ul><li>[x] </li></ul> | Does not apply at this stage.
| 0e. | Article | <ul><li>[x] </li></ul> | https://www.coinfabrik.com/blog/flattening-the-anvil-on-ink-integration-and-e2e-tests| Report looks good.
 **1** | Development | <ul><li>[x] </li></ul> | [PR#1982](https://github.com/paritytech/ink/pull/1982), [PR#1988](https://github.com/paritytech/ink/pull/1988), [PR#1991](https://github.com/paritytech/ink/pull/1991) | Ok.
**2** | Quality Assurance | <ul><li>[x] </li></ul> | We will adhere to existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md) and add necessary tests to integrate the new implemented or corrected functions to the  [ink! project repository](https://github.com/paritytech/ink).

# General Notes

The 3 missing functions were implemented as expected. The team only [found](https://www.coinfabrik.com/blog/flattening-the-anvil-on-ink-integration-and-e2e-tests/) 2 functions that they considered unfeasible, which were gas_left() and call_runtime(). PRs have been submitted and are awaiting approval. Thanks for your hard work and happy to see this wrapped up!
