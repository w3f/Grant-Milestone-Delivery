# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/substrate-identity-directory.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/Shard-Labs/identity-directory/blob/main/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [docs](https://github.com/Shard-Labs/identity-hub/tree/main/docs) | Minimal inline comments added in response to feedback
| 0c. | Article/Tutorial | <ul><li>[x] </li></ul> | [Medium](https://medium.com/@mm_54014/bee3878de40e) | Outdated since original delivery, though it's only a short overview of features
| 1. | Design a list page | <ul><li>[x] </li></ul> | [Figma](https://www.figma.com/file/Q8ueqnAQYtDQq4bVgwY1Uf/Identity-Directory-Design?node-id=0%3A1) |
| 2. | Design an individual identity page | <ul><li>[x] </li></ul> | [Figma](https://www.figma.com/file/Q8ueqnAQYtDQq4bVgwY1Uf/Identity-Directory-Design?node-id=0%3A1) | Same mockups as used in the application
| 3. | Implement list page | <ul><li>[x] </li></ul> | [source](https://github.com/Shard-Labs/identity-hub/tree/main/src/components/Identities) | 
| 4. | Implement individual identity page | <ul><li>[x] </li></ul> | [source](https://github.com/Shard-Labs/identity-hub/blob/main/src/components/Identity)
| 5. | Implement query logic for identity data | <ul><li>[x] </li></ul> | [source](https://github.com/Shard-Labs/identity-hub/blob/main/src/store/actions.ts#L157)

## General Notes

Difficult comunication and negatiations with the team. The delivery was incomplete, had close to no documentation or testing and was generally broken upon delivery, Each review iteration revealed new issues or regressions and the final delivery has performance issues.

However, all in all the result is pretty neat and functional.

