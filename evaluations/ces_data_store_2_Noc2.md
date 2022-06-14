# Evaluation

- **Status:** In Progress
- **Contract Link:** https://github.com/w3f/Grants-Program/blob/master/applications/ces_data_store.md
* **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [GPLv3](https://github.com/CESSProject/data-store-sidecar/blob/main/LICENSE) | Correct License based on https://github.com/paritytech/substrate-api-sidecar |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [tutorial](https://github.com/CESSProject/data-store-sidecar/blob/main/docs/tutorial.md), [README.md](https://github.com/CESSProject/data-store-sidecar/blob/main/README.md) | Tutorial plus readme. The inline documentation could be a little bit better, but it’s fine.  |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [testing guide](https://github.com/CESSProject/data-store-sidecar#run-tests) | Testing guide as part of the readme, which runs the tests. But I couldn't find any tests for to their changes |
| 0d. | Docker | <ul><li>[ ] </li></ul> | [Dockerfile](https://github.com/CESSProject/data-store-sidecar/blob/main/Dockerfile) |  |
| 1. | CESS Storage | <ul><li>[ ] </li></ul> | [data-store-sidecar](https://github.com/CESSProject/data-store-sidecar) |  |
| 2. | Data Store API | <ul><li>[ ] </li></ul> | [data-store-sidecar](https://github.com/CESSProject/data-store-sidecar) |  |
| 3. | Endpoint Docs | <ul><li>[ ] </li></ul> | [Docs](https://example-datastore.cess.cloud/docs/) |  |

## General Notes

Npm found the following: 6 vulnerabilities (1 moderate, 5 high)

**Snyk test**

Issues with no direct upgrade or patch:
  ✗ Denial of Service (DoS) [High Severity][https://snyk.io/vuln/SNYK-JS-DICER-2311764] in dicer@0.2.5
    introduced by multer@1.4.4 > busboy@0.2.14 > dicer@0.2.5
  No upgrade or patch available