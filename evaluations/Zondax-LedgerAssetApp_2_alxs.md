# Evaluation

- **Status:** Accepted
- **Application Document:** private
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.  | License | <ul><li>[x] </li></ul> | **Statemine** https://github.com/zondax/ledger-statemine/blob/master/LICENSE <br> <br> **Statemint** https://github.com/zondax/ledger-statemint/blob/master/LICENSE <br> <br> Substrate RS https://github.com/zondax/ledger-substrate-rs/blob/master/LICENSE <br> <br> Polkadot.js  https://github.com/zondax/ledger-polkadot-js/blob/master/LICENSE | Apache 2.0  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | **Statemine** https://github.com/Zondax/ledger-statemine/blob/main/docs/APDUSPEC.md <br> <br>   **Statemint** https://github.com/Zondax/ledger-statemint/blob/main/docs/APDUSPEC.md | Hosted under https://docs.zondax.ch
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | **Statemine** https://github.com/Zondax/ledger-statemine/blob/master/docs/build.md <br> Supported extrinsics https://github.com/Zondax/ledger-statemine/blob/main/docs/supported_latest.md <br> <br> **Statemint** https://github.com/Zondax/ledger-statemint/blob/master/docs/build.md <br> Supported extrinsics https://github.com/Zondax/ledger-statemint/blob/main/docs/supported_latest.md | 
| 1 | Feature Complete + Maintenance | <ul><li>[x] </li></ul> | **Statemine** https://github.com/zondax/statemine <br> <br> **Statemint** https://github.com/zondax/statemint | Maintained and updated on a regular basis

## General Notes

I couldn't run the tests or build myself as the instructions provided only work on Linux and I have no physical Linux machine to which to attach a Ledger.

However, CI is in place with [extensive tests](https://github.com/Zondax/ledger-statemint/blob/ae36d96f26d0e371f61dcd77ae10465aaf8ea912/tests/testcases_current.json), and Ledger also has a review process for apps published on Ledger Live.
