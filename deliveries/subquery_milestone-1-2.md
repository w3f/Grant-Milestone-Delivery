# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** [Application: Subquery](https://github.com/w3f/Open-Grants-Program/pull/136)
* **Milestone Number:** 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | @subql/cli | https://github.com/OnFinality-io/subql/tree/main/packages/cli | | 
| 2.1, 2.2  | @subql/node | https://github.com/OnFinality-io/subql/tree/main/packages/node, [subql-examples](https://github.com/OnFinality-io/subql-examples) | These features are covered in our examples repo|
| 2.3 | sandbox | https://github.com/OnFinality-io/subql/blob/main/packages/node/src/indexer/sandbox.ts | |
| 3. | Deploy | [k8s yaml](https://github.com/OnFinality-io/subql/tree/main/deploy/k8s) | docker-compose.yml is included in each example project and the starter template |
| 4. | Documentation | [Doc site](https://doc.subquery.network), [Doc Sources](https://github.com/OnFinality-io/subql/tree/main/docs) | |
| 5. | Testing | https://github.com/OnFinality-io/subql | Includes unit tests and integration tests. Tests passing are required in PR workflow.|
|  | Publish | `@subql/*` are published to npmjs, `@subql/node` has docker image published to dockerhub | |

* **Milestone Number:** 2

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | @subql/cli | https://github.com/OnFinality-io/subql/tree/main/packages/cli | | 
| 2. | @subql/node | https://github.com/OnFinality-io/subql/tree/main/packages/node | `@polkadot/api` is supported since 0.7.0. Detailed examples are also available [here](https://github.com/OnFinality-io/subql-examples/tree/main/validator-threshold). |
| 3. | Deploy | [k8s yaml](https://github.com/OnFinality-io/subql/tree/main/deploy/k8s) | Additionally, `@subql/node` is published to npmjs as well. |
| 4. | Documentation | [Doc site](https://doc.subquery.network), [Doc Sources](https://github.com/OnFinality-io/subql/tree/main/docs) | Update to 0.7.0, add details of new added features like success and specVersion filter, batchSize setting, @polkadot/api usage and restrictions. |
| 5. | Examples | [subql-examples](https://github.com/OnFinality-io/subql-examples) | 5 examples that cover all supported features. All can run locally via docker-compose |
| 6. | Testing | https://github.com/OnFinality-io/subql | More tests added, integration tests will run from docker-compose |
