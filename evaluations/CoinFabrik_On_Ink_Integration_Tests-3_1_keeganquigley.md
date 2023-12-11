# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/CoinFabrik_On_Ink_Integration_Tests_3.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Specification | Comments
| ----- | ----------- | ------------- | ------------- | ------------- |
| 0a. | License | <ul><li>[x] </li></ul> | MIT | | 
| 0b. | Documentation | <ul><li>[x] </li></ul> | We will write a comprehensive report that compares the functionalities of integration tests and E2E (End-to-End) tests. This report will focus on the the functions to be implemented in this milestone, corresponding to issues `3-invoke_contract_delegate()`, `4-invoke_contract()`, `6-set_code_hash()`, `8-caller_is_origin()`,  `9-code_hash()`, `10-own_code_hash()`, and `17-balance()`.<br><br>In the first week of this milestone, we will contact the ink! development team to provide an initial report on `14-weight_to_fee()`, documenting our efforts to identify the source of its implementation issues and seeking collaboration to assess the feasibility of resolving them. We will document any progress and implementations related to `14-weight_to_fee()` in our final milestone report.<br><br>We will document any additional work that was required in order to ensure consistency between integration and e2e tests.<br><br>If applicable, we will suggest additional tests outside of the scope of this milestone. Particularly, for functions declared outside of the `env_access.rs` file, but that could be related to integration or e2e testing.
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | The newly developed functionalities will be documented and tested following existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md). A testing guide will be included. 
| 0d. | Docker | <ul><li>[x] </li></ul> | Does not apply at this stage.
| 0e. | Article | <ul><li>[x] </li></ul> | We will publish an updated report summary in our blog at https://blog.coinfabrik.com/.
 **1** | Development | <ul><li>[x] </li></ul> | We will implement the missing functionalities or resolve implementation differences for function issues `3-invoke_contract_delegate()`, `4-invoke_contract()`, `6-set_code_hash()`, `8-caller_is_origin()`,  `9-code_hash()`, `10-own_code_hash()` and `17-balance()`.<br><br>We will also make the necessary changes to address the issues highlighted in our initial report on `14-weight_to_fee()`, provided that these changes are deemed feasible during our discussions with the ink! development team.<br><br>All these implementations or modifications will be pushed into the [ink! project repository](https://github.com/paritytech/ink)  following existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md).<br><br>If applicable, we will develop additional tests or make ad hoc improvements to the ink codebase necessary for the completion of this milestone. Particularly for functions declared outside the `env_access.rs` file that might be related to integration or end-to-end testing.
**2** | Quality Assurance | <ul><li>[x] </li></ul> | We will adhere to existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md) and add necessary tests to integrate the new implemented or corrected functions to the  [ink! project repository](https://github.com/paritytech/ink).

# General Notes
