# Evaluation

* **Acceptance:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/136
* **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
 0 | Apache | <ul><li>[x] </li></ul> | [license](https://github.com/OnFinality-io/subql/blob/main/LICENSE), [license of the example](https://github.com/OnFinality-io/subql-examples/blob/main/LICENSE) |  Correct license  |
| 1. | @subql/cli, start example project |<ul><li>[x] </li></ul>| https://github.com/OnFinality-io/subql/tree/main/packages/cli/src |  subql init --starter works, initially I run into some issues with building the project. But the doc was updated and the latest version resolved the issue (cli v0.7.2).  |
| 2. | 	@polkadot/api will be accessible |<ul><li>[x] </li></ul>| [node](https://github.com/OnFinality-io/subql/tree/main/packages/node) | Also has it's own [example](https://github.com/OnFinality-io/subql-examples/tree/main/validator-threshold) |
| 3. | Deploy |<ul><li>[x] </li></ul>| [K8s Deploy](https://github.com/OnFinality-io/subql/tree/main/deploy/k8s) | Works |
| 4. | Documentation |<ul><li>[x] </li></ul>| [Doc site](https://doc.subquery.network), [Doc Sources](https://github.com/OnFinality-io/subql/tree/main/docs) | Useful documentation |
| 5. | Examples |<ul><li>[x] </li></ul>| [subql-examples](https://github.com/OnFinality-io/subql-examples) | Really useful and nice examples |
| 6. | Testing |<ul><li>[x] </li></ul>| https://github.com/OnFinality-io/subql/tree/main/test | Good test coverage |


## General Notes

Initially some issues with `init --starter`, but everything was fixed very quickly. Overall a very good delivery. Maybe the code could have a few more inline comments, but the test coverage is good as well as the public documentation. 