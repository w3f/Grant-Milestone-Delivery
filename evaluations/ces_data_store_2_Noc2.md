# Evaluation

- **Status:** Accepted 
- **Contract Link:** https://github.com/w3f/Grants-Program/blob/master/applications/ces_data_store.md
* **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [GPLv3](https://github.com/CESSProject/data-store-sidecar/blob/main/LICENSE) | Correct License based on https://github.com/paritytech/substrate-api-sidecar |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [tutorial](https://github.com/CESSProject/data-store-sidecar/blob/main/docs/tutorial.md), [README.md](https://github.com/CESSProject/data-store-sidecar/blob/main/README.md) | Tutorial plus readme. The inline documentation could be a little bit better, but it’s fine.  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [testing guide](https://github.com/CESSProject/data-store-sidecar#run-tests), [tests](https://github.com/CESSProject/data-store-sidecar/commit/b22ea7fdef88dbc93d041515cc2a9074ed01424f) | Testing guide as part of the readme, which runs the tests. But I couldn't find any tests for to their changes. **17.06.22:** They added the tests, but two fail **20.06.22:** [Fixed](https://github.com/CESSProject/data-store-sidecar/commit/1d308c972aeb5c05b5a3cb1cb009fcd48bb179a2) |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/CESSProject/data-store-sidecar/blob/main/Dockerfile) | Works and according to the contract  |
| 1. | CESS Storage | <ul><li>[x] </li></ul> | [data-store-sidecar](https://github.com/CESSProject/data-store-sidecar) | Works and according to the contract |
| 2. | Data Store API | <ul><li>[x] </li></ul> | [data-store-sidecar](https://github.com/CESSProject/data-store-sidecar) | Works and according to the contract |
| 3. | Endpoint Docs | <ul><li>[x] </li></ul> | [Docs](https://example-datastore.cess.cloud/docs/) | Works and according to the contract |

## General Notes

The delivery had minor issues (see below), which given the size of the contract are fine. 

Npm found the following: 6 vulnerabilities (1 moderate, 5 high)

**Snyk test**

```
Issues with no direct upgrade or patch:
  ✗ Denial of Service (DoS) [High Severity][https://snyk.io/vuln/SNYK-JS-DICER-2311764] in dicer@0.2.5
    introduced by multer@1.4.4 > busboy@0.2.14 > dicer@0.2.5
  No upgrade or patch available
````

**Failed tests:**

```
 FAIL  src/services/store/Store.spec.ts (8.702 s)
  store
    ✓ price (4632 ms)
    ✕ purchasedSpace (379 ms)
    ✓ fileList and file  (372 ms)
    ✓ del (395 ms)
    ✓ expansion（buy space） (744 ms)
    ✓ upload (422 ms)
    ✕ download  (381 ms)
    ✓ publickey  (7 ms)

  ● store › purchasedSpace

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: null

      26 | 				typeof res.result.purchasedSpace &&
      27 | 				typeof res.result.purchasedSpace == 'number'
    > 28 | 		).toBe(true);
         | 		  ^
      29 | 	});
      30 | 	it('fileList and file ', async () => {
      31 | 		let answer = true;

      at Object.<anonymous> (src/services/store/Store.spec.ts:28:5)

  ● store › download

 PASS  src/services/fileBank/All.spec.ts (5.435 s)
  fileBank
    fetchFileBank
      ✓ Should return the pallet version number, query param is empty (3785 ms)
      ✓ Should return the unitPrice with u128 number, query param is empty (345 ms)
      ✓ Should return the member array, query param is empty (356 ms)
      ✓ Should return the member array, query param is empty (348 ms)

A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.
Summary of all failing tests
 FAIL  src/services/store/Store.spec.ts (8.702 s)
  ● store › purchasedSpace

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: null

      26 | 				typeof res.result.purchasedSpace &&
      27 | 				typeof res.result.purchasedSpace == 'number'
    > 28 | 		).toBe(true);
         | 		  ^
      29 | 	});
      30 | 	it('fileList and file ', async () => {
      31 | 		let answer = true;

      at Object.<anonymous> (src/services/store/Store.spec.ts:28:5)

  ● store › download



Test Suites: 1 failed, 31 passed, 32 total
Tests:       2 failed, 265 passed, 267 total
```

