# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/faceless.md
- **Milestone:** 2
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[ ] </li></ul> | [Apache License 2.0](https://github.com/HeisenbergLin22/Faceless_milestone2_delivery/blob/2db2b8a068f48a5beae4907188b096159427fed4/Apache%20License%202.0) | See **General Notes** |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [README.md](https://github.com/HeisenbergLin22/Faceless_milestone2_delivery/blob/2db2b8a068f48a5beae4907188b096159427fed4/README.md) | See **General Notes** |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [README.md#unit-tests](https://github.com/HeisenbergLin22/Faceless_milestone2_delivery/blob/2db2b8a068f48a5beae4907188b096159427fed4/README.md#unit-tests) | See **General Notes** |
| 0d. | Tutorial | <ul><li>[ ] </li></ul> | [README.md#tutorial](https://github.com/HeisenbergLin22/Faceless_milestone2_delivery/blob/2db2b8a068f48a5beae4907188b096159427fed4/README.md#tutorial) | See **General Notes** |
| 1. | Client modules | <ul><li>[x] </li></ul> | [*faceless* pallet](https://github.com/HeisenbergLin22/Faceless_milestone2_delivery/blob/2db2b8a068f48a5beae4907188b096159427fed4/faceless-substrate-node/pallets/faceless/src/lib.rs) | - |
| 2. | Benchmark | <ul><li>[ ] </li></ul> | [README.md#benchmark](https://github.com/HeisenbergLin22/Faceless_milestone2_delivery/blob/2db2b8a068f48a5beae4907188b096159427fed4/README.md#benchmark) | See **General Notes** |
| 3. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/HeisenbergLin22/Faceless_milestone2_delivery/blob/2db2b8a068f48a5beae4907188b096159427fed4/Dockerfile) | - |
<br/>

## General Notes v1 - Dec 14, 2022
I easily managed to setup the local environment, also with the provided Dockerfile. However, all the existing documentation in the README file is inherent in the previous milestone. For this, I'm pointing out what should be added and fixed:

### 0a. License
This is a minor problem, but it would be better to rename the license file (Apache License 2.0) to LICENSE or LICENSE.md.

### 0b. Documentation
In the README, I'd add a quick description of the added features (at least for the new pallet's functionalities).
Also, in [this](https://github.com/HeisenbergLin22/Faceless_milestone2_delivery/blob/2db2b8a068f48a5beae4907188b096159427fed4/README.md#use-substrate-to-verify-zk-proof) section, you should change the website address from http://localhost:8000 to http://localhost:3000/substrate-front-end-template.

### 0c. Testing Guide
It seems that no unit tests for the new pallet's functions have been added, correct me if I'm wrong.

### 0d. Tutorial
In the tutorial section, I'd add a little guide that explains how to test the new features, as it hasn't been updated since the previous milestone.

### 2. Benchmark
You should update the benchmark section in the README file, as it hasn't been updated since the previous milestone, and there are no info about the new functions' benchmarks.
