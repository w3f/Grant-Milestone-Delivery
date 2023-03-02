# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Calamar.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/topmonks/calamar/blob/e16ce7210ae58d6cd6d4557a0aae47c2d4637592/LICENSE.txt) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/topmonks/calamar/blob/e16ce7210ae58d6cd6d4557a0aae47c2d4637592/README.md), [docs](https://docs.calamar.app/) | Inline documentation could be expanded |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [instructions](https://github.com/topmonks/calamar/blob/e16ce7210ae58d6cd6d4557a0aae47c2d4637592/README.md#test), [E2E tests](https://github.com/topmonks/calamar/tree/e16ce7210ae58d6cd6d4557a0aae47c2d4637592/test/e2e), [GitHub workflow](https://github.com/topmonks/calamar/blob/e16ce7210ae58d6cd6d4557a0aae47c2d4637592/.github/workflows/test-and-deploy.yml#L27), [Test reports](https://github.com/topmonks/calamar/deployments?environment=test-report#activity-log), [screenshots](https://app.argos-ci.com/topmonks/calamar) | Excellent test coverage, e2e tests |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/topmonks/calamar/blob/e16ce7210ae58d6cd6d4557a0aae47c2d4637592/Dockerfile), [README#Docker](https://github.com/topmonks/calamar/blob/e16ce7210ae58d6cd6d4557a0aae47c2d4637592/README.md#docker) | Fixed |
| 0e. | Article | <ul><li>[x] </li></ul> | [Medium](https://medium.com/topmonks/calamar-block-explorer-milestone-1-finished-93f683ddc486) | |
| 1. | Fix usage blockers | <ul><li>[x] </li></ul> | [PR#16](https://github.com/topmonks/calamar/pull/16), [PR#41](https://github.com/topmonks/calamar/pull/41) | |
| 2. | Add related items listings | <ul><li>[x] </li></ul> | [PR#66](https://github.com/topmonks/calamar/pull/66), [Example](https://7ffa6aa5.calamar.pages.dev/acala/block/0002408225-e923b) | Specification amended |
| 3. | Add call detail page | <ul><li>[x] </li></ul> | [PR#47](https://github.com/topmonks/calamar/pull/47), [Example](https://7ffa6aa5.calamar.pages.dev/kusama/extrinsic/0015560843-000002-1563b) | |
| 4. | Add event detail page | <ul><li>[x] </li></ul> | [PR#47](https://github.com/topmonks/calamar/pull/47), [Example](https://7ffa6aa5.calamar.pages.dev/acala/event/0002408225-000008-e923b) | |
| 5. | Responsiveness | <ul><li>[x] </li></ul> | [PR#75](https://github.com/topmonks/calamar/pull/75) | |
| 6. | Extrinsics/event args displaying improvements | <ul><li>[x] </li></ul> | [PR#84](https://github.com/topmonks/calamar/pull/84), [PR#91](https://github.com/topmonks/calamar/pull/91), [Example](https://7ffa6aa5.calamar.pages.dev/kusama/extrinsic/0015560839-000001-ae6b8) | |
| 7. | Items count | <ul><li>[x] </li></ul> | [PR#65](https://github.com/topmonks/calamar/pull/65/files) | |
| 8. | Extrinsic/event case-insensitive search by name | <ul><li>[x] </li></ul> | [PR#89](https://github.com/topmonks/calamar/pull/89), [Example](https://7ffa6aa5.calamar.pages.dev/polkadot/search?query=balances.transfer) | Amended
| 9. | Account address parsing in events args | <ul><li>[x] </li></ul> | [PR#84](https://github.com/topmonks/calamar/pull/84), [PR#91](https://github.com/topmonks/calamar/pull/91), [Example](https://7ffa6aa5.calamar.pages.dev/polkadot/extrinsic/0013158552-000003-d0367) | |
| 10. | Website polishing | <ul><li>[x] </li></ul> | [PR#86](https://github.com/topmonks/calamar/pull/86), [Homepage](https://calamar.app) | 
| 11. | Polkadot.js integration | <ul><li>[x] </li></ul> | [pokadot-js/apps/PR#8452](https://github.com/polkadot-js/apps/pull/8452) | |

## General Notes

Great delivery - everything is where it should be, the links to the examples were helpful to quickly verify the deliverables and the e2e testing and CI contribute to an overall very positive impression of the project.

Some of the deliverables offered different functionality from what was originally planned in the application, for which the team submitted an [amendment](https://github.com/w3f/Grants-Program/pull/1355).

Some minor possible UX/UI improvements suggested/implemented during the review process.
See full conversation on the [delivery PR](https://github.com/w3f/Grant-Milestone-Delivery/pull/644) for more details.