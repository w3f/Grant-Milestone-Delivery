# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/decentralized_invoice.md
- **Milestone:** 2
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/gertt/Invoice/blob/bcc2cbc759e20a1eaf877e3ddc7562d44e9a0454/LICENSE) |  |
| 0b. | Documentation & Tutorial | <ul><li>[x] </li></ul> | [Google Docs](https://docs.google.com/document/d/1NfbCE32XxGJFXaEI4YEcOV7F_3nVmSFDAG8BaM1BXlE/edit?usp=sharing) |  |
| 0c. | Tests | <ul><li>[x] </li></ul> | [Google Docs](https://docs.google.com/document/d/1NfbCE32XxGJFXaEI4YEcOV7F_3nVmSFDAG8BaM1BXlE/edit?usp=sharing) |  |
| 0d. | Article | <ul><li>[x] </li></ul> | [Medium article](https://medium.com/@gertiprifti/invoice-pallet-built-on-top-of-substrate-framework-bb87ca92392b) |  |
| 0e. | Benchmarking | <ul><li>[x] </li></ul> | [`benchmarking.rs`](https://github.com/gertt/Invoice/blob/bcc2cbc759e20a1eaf877e3ddc7562d44e9a0454/pallets/invoice/src/benchmarking.rs#L39) |  |
| 1. | Substrate module: show_all_invoices | <ul><li>[x] </li></ul> | [`invoice`](https://github.com/gertt/Invoice/blob/bcc2cbc759e20a1eaf877e3ddc7562d44e9a0454/pallets/invoice/src/lib.rs#L158) |  |

<br/>

## General Notes v1 - Jan 23, 2023
This time, the `exist_invoice` has been added, as well as its tests. It replaces the function `show_all_invoices`, which should have been developed instead of it. The docs have been added also in the README.

In the PR we discussed about the utility of the function added, and why it replaced the function mentioned in the application document; you can read it from [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/701#pullrequestreview-1265285440).
