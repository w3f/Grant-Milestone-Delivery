# Evaluation

- **Status:** Accepted
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
| 1. | Crawler & REST API | <ul><li>[x] </li></ul> | [packages/crawler](https://github.com/Zaniyar/grantmaster/tree/b0b3c1cf56f79e97a6c39d41e324a02b15f4f76e/packages/crawler), [packages/api](https://github.com/Zaniyar/grantmaster/tree/b0b3c1cf56f79e97a6c39d41e324a02b15f4f76e/packages/api) | Document parsing issues fixed on request |
| 2. | GitHub Actions | <ul><li>[x] </li></ul> | [packages/github-actions](https://github.com/Zaniyar/grantmaster/blob/d8e4375802f2e8ece3c5e71ef02269270509a3f2/packages/github-actions/README.md) | — |
| 3. | Frontend Module: Grants Page | <ul><li>[x] </li></ul> | [packages/frontend](https://github.com/Zaniyar/grantmaster/blob/d8e4375802f2e8ece3c5e71ef02269270509a3f2/packages/frontend/src/components/PullRequestSummaryList.tsx) | — |
| 4. | Frontend Module: Grant Details | <ul><li>[x] </li></ul> | [packages/frontend](https://github.com/Zaniyar/grantmaster/blob/d8e4375802f2e8ece3c5e71ef02269270509a3f2/packages/frontend/src/components/PullRequestDetail.tsx) | Document parsing issues fixed on request |
| 5. | Frontend Module: Teams | <ul><li>[x] </li></ul> | [packages/frontend](https://github.com/Zaniyar/grantmaster/blob/b0b3c1cf56f79e97a6c39d41e324a02b15f4f76e/packages/frontend/src/components/TeamsPage.tsx) | Good presentation, quick search |
| 6. | Frontend Feature: Grants Committee Lense | <ul><li>[x] </li></ul> | [packages/frontend](https://github.com/Zaniyar/grantmaster/blob/b0b3c1cf56f79e97a6c39d41e324a02b15f4f76e/packages/frontend/src/components/PullRequestSummaryList.tsx) | — |


## General Notes

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
