# Evaluation

- **Status:** In Progress
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/75
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| --- | --- | --- | --- | --- |
| 0a. | Apache License 2.0 | <ul><li>[x] </li></ul> | [github license](https://github.com/midl-dev/polkadot-snapshot-generator/blob/c0e0ce21cc52934d98bd36166277bd2acaa9edb8/LICENSE) | — |
| 0b. | Documentation: how to deploy/teardown | <ul><li>[x] </li></ul> | [README](https://github.com/midl-dev/polkadot-snapshot-generator/blob/c0e0ce21cc52934d98bd36166277bd2acaa9edb8/README.md#how-to-deploy) | originally missing firebase installation; all but the firebase project setup automated |
| 0c. | Tutorial: Medium post | <ul><li>[x] </li></ul> | [medium.com](https://midl-dev.medium.com/faster-bringup-of-a-polkadot-validator-with-polkashots-io-2e6fb79869d7) | tried and tested |
| 1. | A Terraform manifest to deploy all cloud resources in a simple way. | <ul><li>[x] </li></ul> | [github](https://github.com/midl-dev/polkadot-snapshot-generator/tree/e7f0eaae87d36b4b96fe5b84af4917d9747b9a68/terraform) | — |
| 2. | A set of Docker container descriptions (Dockerfiles and scripts) that are used to manage the snapshot website | <ul><li>[x] </li></ul> | [github](https://github.com/midl-dev/polkadot-snapshot-generator/tree/e7f0eaae87d36b4b96fe5b84af4917d9747b9a68/docker) |  |
| 3. | A Kubernetes manifest, built with Kustomize, to deploy the containers and cronjobs for snapshot creation | <ul><li>[x] </li></ul> | [github](https://github.com/midl-dev/polkadot-snapshot-generator/tree/e7f0eaae87d36b4b96fe5b84af4917d9747b9a68/k8s) |  |
| 4. | A linter script to validate config before pushing | <ul><li>[ ] </li></ul> | [github](https://github.com/midl-dev/polkadot-snapshot-generator/blob/e7f0eaae87d36b4b96fe5b84af4917d9747b9a68/lint.sh) | just calls `terraform validate` |
| 5. | Live website | <ul><li>[x] </li></ul> | [polkashots.io](https://polkashots.io) | — |

## General Notes

- Nicely customizable; good documentation (apart from initial issues).
- Setup instructions initially incomplete (undocumented dependencies and installation issues), but quickly fixed.
- Testing/Linter script only checks terraform configuration. Proposal promised "a script to parse terraform, dockerfile and kubernetes codebase and check for consistency".
- Successfully downloaded and installed snapshot at block #3227052.
