# Evaluation

* **Status:** In Progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/12
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul>|[License](https://github.com/emeraldpay/polkaj/blob/master/LICENSE)| - |
| 1. | SS58 encoding |<ul><li>[ ] </li></ul>|[SS58](https://github.com/emeraldpay/polkaj/tree/master/polkaj-ss58)| ...| 
| 2.  | SCALE coded |<ul><li>[ ] </li></ul>|[SCALE](https://github.com/emeraldpay/polkaj/tree/master/polkaj-scale)| ...| 
| 3. | Base types |<ul><li>[ ] </li></ul>|[Base types](https://github.com/emeraldpay/polkaj/tree/master/polkaj-types)| ...| 
| 4. | Unit Tests |<ul><li>[ ] </li></ul>|[Unit Tests](https://codecov.io/gh/emeraldpay/polkaj)| ...| 
| 5. | Documentation |<ul><li>[ ] </li></ul>|[Docs](https://github.com/emeraldpay/polkaj/tree/master/docs)| ...| 

## General Notes

gradle install currently doesn't run on ubuntu
```
> Task :polkaj-types:javadoc FAILED
/home/noc2/source/web3/evaluation/emeraldpay/polkaj/polkaj-types/src/main/java/io/emeraldpay/pjc/types/Address.java:3: error: cannot access SS58Type
import io.emeraldpay.pjc.ss58.SS58Type;
                             ^
  bad class file: /home/noc2/source/web3/evaluation/emeraldpay/polkaj/polkaj-ss58/build/libs/polkaj-ss58-0.2.0-SNAPSHOT.jar(io/emeraldpay/pjc/ss58/SS58Type.class)
    class file has wrong version 55.0, should be 52.0
    Please remove or make sure it appears in the correct subdirectory of the classpath.
1 error
```