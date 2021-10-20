# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/substrate-identity-directory.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 1. | Implement logic for sending tokens | <ul><li>[x] </li></ul> | [implementation](https://github.com/Shard-Labs/identity-hub/blob/main/src/store/actions.ts#L381) | Issue only allowing integer amounts to be sent was addressed
| 2. | Make the web service work offline | <ul><li>[x] </li></ul> | [instructions](https://github.com/Shard-Labs/identity-hub#project-setup), [connecting to custom node impl](https://github.com/Shard-Labs/identity-hub/blob/main/src/store/actions.ts#L270) |

## General Notes

No tests for this milestone, which I'd say is fine given the nature of the deliverables.
