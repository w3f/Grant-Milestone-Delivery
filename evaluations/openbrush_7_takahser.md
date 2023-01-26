# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/openbrush-follow-up-2.md
- **Milestone:** 7
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [MIT License](https://github.com/727-Ventures/openbrush-contracts/blob/1a9f25b0b50162371b49f28bee6fb73623707125/LICENSE) | - |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [PSP22 pallet README](https://github.com/727-Ventures/openbrush-contracts/tree/1a9f25b0b50162371b49f28bee6fb73623707125/examples/psp22_pallet) | See [documentation feedback]() |
| 1. | Implement `AssetPallet` chain extension on substrate level to work with `pallet-assets` in runtime | <ul><li>[ ] </li></ul> | TbD | We will implement a chain extension on the `substrate` level that allows interaction of contract with `pallet-assets`. Any network with that chain extension allows developing contracts that store information regarding fungible tokens on the `pallet-assets` level instead of the contract level. That allows to reduce the size of `PSP22` contracts and provide SCM support by default for fungible tokens. |
| 2. | Implement `AssetPallet` chain extension in OpenBrush | <ul><li>[ ] </li></ul> | TbD | Usage of chain extension requires implementation on the level of the contract too, so we will implement it in OpenBrush. Anyone will be able to reuse chain extension. |
| 3. | Implement PSP22 with that chain extension in OpenBrush | <ul><li>[ ] </li></ul> | TbD | The OpenBrush will provide a default implementation for `PSP22` implemented via `AssetPallet` extension. It will behave in the same way as `PSP22` but the information will be stored on the level of `pallet-assets`. |
| 4. | Create standards for `AssetPallet` Chain Extension and for `PSP22Asset` extension | <ul><li>[ ] </li></ul> | TbD | The `AssetPallet` extension can be used by anyone and on any network. It requires the standardization of the methods and data types that are supported. We will create standards for that in the PSP repository. |
| 5. | Advanced ink! unit testing framework | <ul><li>[ ] </li></ul> | TbD | Add support to the contract deployment, chain extension registration, and smart contract cross-contract calls into the ink! unit test framework. |
| 6. | Support of XCM and cross transferring of `PSP22` tokens | <ul><li>[ ] </li></ul> | TbD | If the support of XCM by the `pallet-assets` is not ready, we will participate in the development process to speed up it. The final step is that anyone will be able to transfer assets of `pallet-assets`, that are managed by the contract, between parachains freely. |
| 7. | Add support for ink! 4.0 | <ul><li>[] </li></ul> | TbD | We will update OpenBrush to be compatible with ink! 4.0 releases |
| 8a. | Marketing - Create 2 educational video for OpenBrush/ink! | <ul><li>[ ] </li></ul> | TbD | We are going to work on educational video materials for OpenBrush and ink! Community. We see a huge gap in knowledge, understanding, and vision for the whole community in that sphere. Moreover, 727.ventures team will promote it in Twitter, Medium etc. We will create a lower entry threshold for newcomers by this educational program. |
| 8b. | Marketing - The website upgrade | <ul><li>[ ] </li></ul> | - | Not open-sourced yet! Spec from the application document: _We are going to update out current website and add more specific things to improve the search for OpenBrush website in Google._ | 

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

- Note that deliverable 1-8a will be addressed after the guide is added (see [documentation feedback](#documentation-feedback))
- 8b is not open-sourced yet

### Documentation Feedback

- Spec: _We will provide a report of how to transition from PSP22 on contract level to PSP22 on pallet level. Add documentation about the workflow of PSP22 and Statemint parachain._
- I didn't identify any guide on how to test this delivery.
- Neither did I identify _a report of how to transition from PSP22 on contract level to PSP22 on pallet level_

In general, please add instructions on how to test this delivery.
