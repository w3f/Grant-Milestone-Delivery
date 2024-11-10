# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Hyperdot.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License                        | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/Infra3-Network/hyperdot-fronted/blob/a29eaad3119bb14306a93238161a42b89356cb3a/LICENSE) | Apache 2.0                                                   |
| **0b.** | Documentation                  | <ul><li>[x] </li></ul> | [README](https://github.com/Infra3-Network/hyperdot-fronted/blob/a29eaad3119bb14306a93238161a42b89356cb3a/README.md) | Inline docs could be improved. |
| **0c.** | Testing and Testing Guide      | <ul><li>[x] </li></ul> | [README](https://github.com/Infra3-Network/hyperdot-fronted/tree/a29eaad3119bb14306a93238161a42b89356cb3a#testing) | — |
| **0d.** | Docker                         | <ul><li>[x] </li></ul> | [README](https://github.com/Infra3-Network/hyperdot-fronted/tree/a29eaad3119bb14306a93238161a42b89356cb3a#docker-installation-guide-recommend) | — |
| **0e.** | Article                        | <ul><li>[x] </li></ul> | [medium.com](https://medium.com/@jackson.libc.rs/the-data-analysis-powerhouse-for-the-polkadot-ecosystem-hyperdot-has-arrived-c44c16cc3539), [medium.com](https://medium.com/@jackson.libc.rs/unlocking-the-power-of-web3-data-analysis-with-hyperdot-in-the-polkadot-ecosystem-cdcbaec53ac4) | — |
|  **1.** | Page Layout                    | <ul><li>[x] </li></ul> | [src/pages/explore](https://github.com/Infra3-Network/hyperdot-fronted/tree/a29eaad3119bb14306a93238161a42b89356cb3a/src/pages/explore) | see [General Notes](#general-notes) |
|  **2.** | Data Creation - New Query Page | <ul><li>[x] </li></ul> | [src/pages/creations](https://github.com/Infra3-Network/hyperdot-fronted/tree/c439ba80fe57ec7e6caa59fe7f43023b9ad53c89/src/pages/creations) | Timeout issue fixed on request |
|  **3.** | Data Creation - New Dashboard  | <ul><li>[x] </li></ul> | [src/pages/creations](https://github.com/Infra3-Network/hyperdot-fronted/tree/c439ba80fe57ec7e6caa59fe7f43023b9ad53c89/src/pages/creations) | see https://www.hyperdot.xyz/explore/dashboards |
|  **4.** | Discovery - Queries            | <ul><li>[x] </li></ul> | [src/pages/creaexploretions](https://github.com/Infra3-Network/hyperdot-fronted/tree/c439ba80fe57ec7e6caa59fe7f43023b9ad53c89/src/pages/explore) | — |
|  **5.** | Discovery - Dashboards         | <ul><li>[x] </li></ul> | [src/pages/explore](https://github.com/Infra3-Network/hyperdot-fronted/tree/c439ba80fe57ec7e6caa59fe7f43023b9ad53c89/src/pages/explore/dashboards) | see https://www.hyperdot.xyz/favorites/dashboards |


## General Notes

Project is functional, but requires a lot of polishing:

- Queries with invalid parameters (e.g. block numbers in the future) are not caught.
- Queries with invalid parameters take a long time to process and then return a somewhat cryptic error message.
- Some sanity checks on the frontend side for the queries would be useful 
- More feedback about the query than just a spinning loading animation would be useful.
- Visualizations should have a title and axis labels by default, better yet a link to the underlying query.
- The frontend requires proofreading.
- Help and search are not yet functional.

### `make test` output

```sh
> make test
docker run \
	--rm \
	-ti \
	-e COMMAND=test \
	hyperdot/fronted:a29eaad

> ant-design-pro@5.2.0 serve
> umi-serve


Running 14 tests using 4 workers


   ┌────────────────────────────────────────────────┐
   │                                                │
   │   Serving your umi project!                    │
   │                                                │
   │   - Local:            http://localhost:8001    │
   │   - On Your Network:  http://172.17.0.2:8001   │
   │                                                │
   │   Copied local address to clipboard!           │
   │                                                │
   └────────────────────────────────────────────────┘

  ✓  1 [chromium] › tests/e2e.profile.spec.ts:15:5 › test profile page (2.1s)
  ✓  2 [chromium] › tests/e2e.creations.spec.ts:16:5 › test creation query page (3.5s)
  ✓  3 [chromium] › tests/e2e.user.spec.ts:5:5 › test login page (1.4s)
  ✓  4 [chromium] › tests/e2e.explore.spec.ts:15:5 › test explore dashboard page (2.4s)
  ✓  5 [chromium] › tests/e2e.user.spec.ts:20:5 › test register page (1.0s)
  ✓  6 [chromium] › tests/e2e.explore.spec.ts:27:5 › test explore query page (1.6s)
  ✓  7 [firefox] › tests/e2e.creations.spec.ts:16:5 › test creation query page (5.9s)
  ✓  8 [firefox] › tests/e2e.explore.spec.ts:15:5 › test explore dashboard page (4.6s)
  ✓  9 [chromium] › tests/e2e.creations.spec.ts:34:5 › test creation dashboard page (2.6s)
  ✓  10 [firefox] › tests/e2e.profile.spec.ts:15:5 › test profile page (4.5s)
  ✓  11 [firefox] › tests/e2e.user.spec.ts:5:5 › test login page (3.5s)
  ✓  12 [firefox] › tests/e2e.explore.spec.ts:27:5 › test explore query page (3.0s)
  ✓  13 [firefox] › tests/e2e.creations.spec.ts:34:5 › test creation dashboard page (3.1s)
  ✓  14 [firefox] › tests/e2e.user.spec.ts:20:5 › test register page (1.1s)

  14 passed (14.6s)
```