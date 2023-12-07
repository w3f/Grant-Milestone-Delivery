# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/grantmaster.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/Zaniyar/grantmaster/blob/6db30291e2687355dc683c0016de6164093a9b6d/LICENSE) | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/Zaniyar/grantmaster/blob/6db30291e2687355dc683c0016de6164093a9b6d/README.md) | — |
| **0c.** | Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/Zaniyar/grantmaster/tree/6db30291e2687355dc683c0016de6164093a9b6d#run-tests) | — |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [README](https://github.com/Zaniyar/grantmaster/tree/6db30291e2687355dc683c0016de6164093a9b6d#run-with-docker) | — |
| 0e. | Article | <ul><li>[x] </li></ul> | [README](https://github.com/Zaniyar/grantmaster/blob/6db30291e2687355dc683c0016de6164093a9b6d/README.md) | — |
| 1. | Crawler & REST API | <ul><li>[ ] </li></ul> | link | I will develop a configurable crawler and a REST API that facilitates interaction with the [Grants-Program GitHub repository](https://github.com/w3f/Grants-Program). The crawler will update specific applications or deliveries on demand through the web UI (see [Data Synchronization Approach](#data-synchronization-approach) chapter). |
| 2. | GitHub Actions | <ul><li>[x] </li></ul> | [packages/github-actions](https://github.com/Zaniyar/grantmaster/blob/d8e4375802f2e8ece3c5e71ef02269270509a3f2/packages/github-actions/README.md) | — |
| 3. | Frontend Module: Grants Page | <ul><li>[x] </li></ul> | [packages/frontend](https://github.com/Zaniyar/grantmaster/blob/d8e4375802f2e8ece3c5e71ef02269270509a3f2/packages/frontend/src/components/PullRequestSummaryList.tsx) | — |
| 4. | Frontend Module: Grant Details | <ul><li>[ ] </li></ul> | [packages/frontend](https://github.com/Zaniyar/grantmaster/blob/d8e4375802f2e8ece3c5e71ef02269270509a3f2/packages/frontend/src/components/PullRequestDetail.tsx) | — |
| 5. | Frontend Module: Teams | <ul><li>[x] </li></ul> | link | Good presentation, quick search |
| 6. | Frontend Feature: Grants Committee Lense | <ul><li>[ ] </li></ul> | link | This feature will allow a user experience that is optimised to a specific grants committee member. The committee member will be able to provide his username (using simple textbox without authentication) and they'll be able to see in which pull requests for grants applications and amendments they've participated and how long it's been since they last commented on it. I think this will be useful for priorizing grant application reviews. |


## General Notes

- —

### `npm run test` output

```sh
> npm run test

> grantmaster@1.0.0 test
> npm run test --workspace=grantmaster-crawler


> grantmaster-crawler@1.0.0 test
> jest

 PASS  src/milestone-parser.test.ts
 PASS  src/proposal-parser.test.ts

Test Suites: 2 passed, 2 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        3.016 s
Ran all test suites.
```
