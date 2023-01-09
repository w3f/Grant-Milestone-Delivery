# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/NuLink.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a-b. | |<ul><li>[x] </li></ul>|| Same as for M1.
| 0c. | Testing Guide |<ul><li>[x] </li></ul> | [tests](https://github.com/NuLink-network/nulink-chain/blob/f33c097135acee6d702139e52d84c4a597246711/pallets/nuproxy/src/tests.rs) | 
| 1.     | CreatePolicy |<ul><li>[x] </li></ul> | [link](https://github.com/NuLink-network/nulink-chain/blob/b17378d70ab870094b0e7beb72cc46f8a54bc471/pallets/policy/src/lib.rs#L111) | Policy must be created using existing external tools.
| 2.     | RevokePolicy |<ul><li>[x] </li></ul> | [link](https://github.com/NuLink-network/nulink-chain/blob/b17378d70ab870094b0e7beb72cc46f8a54bc471/pallets/policy/src/lib.rs#L122) | 
| 3.     | Mint |<ul><li>[x] </li></ul> | [link](https://github.com/NuLink-network/nulink-chain/blob/b17378d70ab870094b0e7beb72cc46f8a54bc471/pallets/nuproxy/src/lib.rs#L179) | Must be done in conjunction with updating the staker's information
| 4.     | Withdraw |<ul><li>[x] </li></ul> | [staker](https://github.com/NuLink-network/nulink-chain/blob/b17378d70ab870094b0e7beb72cc46f8a54bc471/pallets/nuproxy/src/lib.rs#L205), [user](https://github.com/NuLink-network/nulink-chain/blob/b17378d70ab870094b0e7beb72cc46f8a54bc471/pallets/nuproxy/src/lib.rs#L215) |

## General Notes

See general notes for M1.
