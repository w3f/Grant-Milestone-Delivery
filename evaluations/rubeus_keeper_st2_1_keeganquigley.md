# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Rubeus_keeper_st2.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley


| Number | Deliverable   | Accepted | Link                                                                                 | Notes |
|--------|---------------|----------|----------------------------------------------------------------------------|-------|
| 0a.    | License   | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/bsn-si/rubeus-smartcontract/blob/main/LICENSE)            |       |
| 0b.    | Documentation       | <ul><li>[x] </li></ul> | https://github.com/bsn-si/rubeus-smartcontract/blob/main/README.md                      | Looks good.   |
| 0c.    | Testing Guide.      | <ul><li>[x] </li></ul> | https://github.com/bsn-si/rubeus-smartcontract/blob/main/README.md#how-to | Looks good. |
| 1.     | ink! smart contract         | <ul><li>[x] </li></ul> | https://github.com/bsn-si/rubeus-smartcontract/blob/main/lib.rs                 | See notes below.      |
| 2.     | Extension notes tab | <ul><li>[x] </li></ul> | https://bsn-si.github.io/rubeus/ | Looks good.      |

# General Notes

Nice addition of the capability to store encrypted notes. Relatively straightforward as only one contract was updated. Extension and front-end work nicely.

Please note: No security audits were performed as a part of this evaluation.

## Smart Contract

`addNote`, `deleteNote`, `getNote`, `updateNote` functions all work manually and with automated E2E test.

Nice work!
