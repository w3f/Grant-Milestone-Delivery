# Evaluation

* **Acceptance:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/136
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
 0 | Apache | <ul><li>[x] </li></ul> | [license](https://github.com/OnFinality-io/subql/blob/main/LICENSE) |  Correct license  |
| 1. | @subql/cli |<ul><li>[x] </li></ul>| [npm package](https://www.npmjs.com/package/@subql/cli), [CLI](https://github.com/OnFinality-io/subql/tree/main/packages/cli) | Generates manifest and GraphQL schema. Easy to use. NPM has more than 300 weekly downloads! |
| 2. | @subql/node	 |<ul><li>[x] </li></ul>| [node](https://github.com/OnFinality-io/subql/tree/main/packages/node) | Works |
| 2.1 | block, call and event handler |<ul><li>[x] </li></ul>|  | They even provided an [example](https://github.com/OnFinality-io/subql-examples) for each handler |
| 2.2 | filter |<ul><li>[x] </li></ul>| [filter](https://github.com/OnFinality-io/subql/blob/main/packages/common/src/project/types.ts)  | Supported filter: |
| 2.3 | isolated scope to execute mapping functions |<ul><li>[x] </li></ul>| [sandbox](https://github.com/OnFinality-io/subql/blob/main/packages/node/src/indexer/sandbox.ts) | VM2 sandbox runs untrusted code securely in an isolated context |
| 3 | Deploy |<ul><li>[x] </li></ul>| [K8s Deploy](https://github.com/OnFinality-io/subql/tree/main/deploy/k8s) | Works  |
| 4 | Documentation |<ul><li>[x] </li></ul>| [Doc site](https://doc.subquery.network), [Doc Sources](https://github.com/OnFinality-io/subql/tree/main/docs) | Useful documentation, The quick start guide has the wrong names: https://doc.subquery.network/quickstart.html#preparation It’s “@subql/cli”|
| 5 | Testing |<ul><li>[x] </li></ul>| https://github.com/OnFinality-io/subql/tree/main/test | Good test coverage, all test passed |

## General Notes

Very good delivery. The test coverage and documentation as well as the number of examples is very good. The default solution uses the public onfinality endpoint: wss://polkadot.api.onfinality.io/public-ws, which is fine given that it's their project.  
