# Evaluation

- **Status:** Accepted
- **Application Document:**  [Galaxy](https://github.com/w3f/Grants-Program/blob/master/applications/galaxy.md)
- **Milestone:** 1
- **Kusama Identity:** Eexv1mKLiCidz2gGh6vfowtXgSSc7mvD4xEb2ji998W4DPs
- **Previously successfully merged evaluation:** [NFT Infra](https://github.com/w3f/Grant-Milestone-Delivery/pull/840)

| Number | Deliverable              | Accepted               | Link                                                                                                                  | Evaluation Notes                                                      |
|--------|--------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| 0a.    | Licence                  | <ul><li>[x] </li></ul> | [MIT](https://github.com/7flash/galaxy-polkadot/blob/d29439b081e9d71d9915b68d2ea1edfb6dd6ab7d/LICENSE)                                                  | Correct Licence                                                       |
| 0b.    | Documentation            | <ul><li>[x] </li></ul> | [Video Tutorial](https://youtu.be/WOQvxZCiU0Q) [ReadMe](https://github.com/7flash/galaxy-polkadot/blob/d29439b081e9d71d9915b68d2ea1edfb6dd6ab7d/README.md) | Documentation is satisfactory plus the video tutorial is also helpful |
| 0c.    | Testing & Testing Guide  | <ul><li>[x] </li></ul> | [Tests](https://github.com/7flash/galaxy-polkadot/tree/master#running-the-tests)                                      | Test cases passed. Output attached below                              |
| 0d.    | Docker                   | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/7flash/galaxy-polkadot/blob/master/Dockerfile)                                        | Fixed in the recent commit.                                           |
| 1.     | Frontend: Galaxy Web App | <ul><li>[x] </li></ul> | [Src](https://github.com/7flash/galaxy-polkadot/tree/master/src)                                                      | Features listed in the application are working fine                   |


## General Notes

## Update 4th May 2023
Licence file is added in the recent commits and the previous mentioned issues are fixed too, so the delivery status is changed to `Accepted`.

## 3rd May 2023
The repo is well-structured and well-documented, and the features listed in the application are working fine. However, there is no Licence file in the repo and it'll also be better if there is some helpful documentation regarding docker.
## `yarn test` output

```console
$ yarn test
 PASS  tests/integration.test.js
  GalaxyUI
    ✓ renders the UI correctly (1969 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.542 s, estimated 6 s
Ran all test suites.
```