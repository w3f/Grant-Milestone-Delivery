# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/96
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable         | Accepted               | Link                                                                                                                                                                                                               | Evaluation Notes                                                                               |
|--------|---------------------|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| 0a.    | License             | <ul><li>[x] </li></ul> | [Apache](https://github.com/idavollnetwork/idavoll/blob/main/LICENSE)                                                                                                                                              |                                                                                                |
| 0b.    | Documentation       | <ul><li>[x] </li></ul> |                                                                                                                                                                                                                    | Inline documentation OK, [Usage instructions](https://github.com/idavollnetwork/idavoll#usage) |
| 0c.    | Testing Guide       | <ul><li>[x] </li></ul> | [Unit tests idavoll-asset](https://github.com/idavollnetwork/idavoll/blob/main/pallets/idavoll-asset/src/lib.rs#L359), [idavoll](https://github.com/idavollnetwork/idavoll/blob/main/pallets/idavoll/src/tests.rs) |                                                                                                |
| 1.     | Organization module | <ul><li>[x] </li></ul> | [source code](https://github.com/idavollnetwork/idavoll/blob/main/pallets/idavoll/src/organization.rs)                                                                                                             |                                                                                                |
| 2.     | Voting module       | <ul><li>[x] </li></ul> | [source code](https://github.com/idavollnetwork/idavoll/blob/main/pallets/idavoll/src/voting.rs)                                                                                                                   |                                                                                                |
| 3.     | Asset module        | <ul><li>[x] </li></ul> | [source code](https://github.com/idavollnetwork/idavoll/blob/main/pallets/idavoll-asset/src/lib.rs)                                                                                                                |                                                                                                |
| 4.     | Finance module      | <ul><li>[x] </li></ul> | [source code](https://github.com/idavollnetwork/idavoll/blob/main/pallets/idavoll-asset/src/finance.rs)                                                                                                            |                                                                                                |

## General Notes

Initially there were a number of issues with the project:
- sloppy code documentation & method descriptions
- code duplication
- UI not working due to incorrect types.json
- multiple flaws in the code logic (e.g. anyone could create proposals even if they were not org members) and improvements to be had

Most of the issues were addressed promptly by the team. In the end the code works well and I was able to go throught the entire flow of creating an org, a proposal, voting and seeing the proposal's code execute

Perhaps the structure of test code could be cleaned up a little, since at the moment there is both a dedicated `tests.rs` as well as inline tests in `lib.rs`, but this is purely cosmetic and subjective.
