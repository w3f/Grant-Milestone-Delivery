# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/decentralized_invoice.md
- **Milestone:** 1
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/gertt/Invoice/blob/ae07f6918e3d236fc2e634682120c07d83e7503a/LICENSE) | See **General Notes** |
| 0b. | Documentation & Tutorial | <ul><li>[ ] </li></ul> | [Google Docs](https://docs.google.com/document/d/1NfbCE32XxGJFXaEI4YEcOV7F_3nVmSFDAG8BaM1BXlE/edit?usp=sharing) | See **General Notes** |
| 0c. | Tests | <ul><li>[ ] </li></ul> | [Google Docs](https://docs.google.com/document/d/1NfbCE32XxGJFXaEI4YEcOV7F_3nVmSFDAG8BaM1BXlE/edit?usp=sharing) | See **General Notes** |
| 0d. | Article | <ul><li>[x] </li></ul> | [Medium article](https://medium.com/@gertiprifti/invoice-pallet-built-on-top-of-substrate-framework-bb87ca92392b) |  |
| 0e. | Benchmarking | <ul><li>[ ] </li></ul> | [`benchmarking.rs`](https://github.com/gertt/Invoice/blob/ae07f6918e3d236fc2e634682120c07d83e7503a/pallets/invoice/src/benchmarking.rs) | See **General Notes** |
| 1. | invoice_pallet | <ul><li>[x] </li></ul> | [`invoice`](https://github.com/gertt/Invoice/blob/ae07f6918e3d236fc2e634682120c07d83e7503a/pallets/invoice/src/lib.rs) |  |

<br/>

## General Notes v1 - Jan 18, 2023
Overall the delivery is decent. It consists of a pallet that enables on-chain invoicing with three parameters: `receiver`, `amount` and `message`;

These are my considerations:

### 0a. License
You wrote “Apache License” in the delivery document, but actually you used “The Unlicense”. This is not a problem, just wanted you to confirm this.

### 0b. Documentation & Tutorial / 0c. Tests
1. For the local setup, I had a minor problem with the rust toolchain, and these two commands worked for me:

    ```bash
    rustup override set nightly-2022-07-28
    rustup target add wasm32-unknown-unknown
    ```
    Could you put these in the README?
2. It would be cool to add the docs inside the README and not in a separate file (Google Docs), just to make things quicker for developers.

### 0e. Benchmarking
Would it be possible to add some notes about it in the README, and explain how to get the benchmark values?
