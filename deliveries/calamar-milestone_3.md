# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Calamar.md
* **Milestone Number:** 3

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work.
>
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE](https://github.com/topmonks/calamar/blob/76954c810465eafaab7755d7c19308cc36726d17/LICENSE.txt) | |
| 0b. | Documentation | [README](https://github.com/topmonks/calamar/blob/76954c810465eafaab7755d7c19308cc36726d17/README.md), [Calamar docs](https://docs.calamar.app/) | |
| 0c. | Testing Guide | [README#Test](https://github.com/topmonks/calamar/blob/76954c810465eafaab7755d7c19308cc36726d17/README.md#test), [E2E tests](https://github.com/topmonks/calamar/tree/76954c810465eafaab7755d7c19308cc36726d17/test/e2e), [GitHub workflow](https://github.com/topmonks/calamar/blob/76954c810465eafaab7755d7c19308cc36726d17/.github/workflows/test-and-deploy.yml#L27), [Test reports](https://github.com/topmonks/calamar/deployments?environment=test-report#activity-log), [Screenshots](https://app.argos-ci.com/topmonks/calamar) | |
| 0d. | Docker | [Dockerfile](https://github.com/topmonks/calamar/blob/76954c810465eafaab7755d7c19308cc36726d17/Dockerfile), [README#Docker](https://github.com/topmonks/calamar/blob/76954c810465eafaab7755d7c19308cc36726d17/README.md#docker) | |
| 0e. | Article | [Article](https://medium.com/@uiii/calamar-block-explorer-milestone-3-finished-29fd816bf3fd) | |
| 1. | Universal search | [PR#164](https://github.com/topmonks/calamar/pull/164), [Example#1](https://46dc40bb.calamar.pages.dev/search/blocks?query=123), [Example#2](https://46dc40bb.calamar.pages.dev/search?query=balances) | |
| 2. | Metadata explorer | [PR#179](https://github.com/topmonks/calamar/pull/179), [Example](https://46dc40bb.calamar.pages.dev/polkadot/runtime/9430/balances) | |
| 3. | Show related runtime metadata in items' detail | [PR#180](https://github.com/topmonks/calamar/pull/180), [Example](https://46dc40bb.calamar.pages.dev/polkadot/event/18493287-41) | In the example hover ower the book icon next to the event's name, also you can click the spec version link. |
| 4. | Search input autocomplete | [PR#181](https://github.com/topmonks/calamar/pull/181), [Example](https://46dc40bb.calamar.pages.dev/) | In the example, write `tr` into the search input. |

**Additional Information**

The code in the time of delivery: https://github.com/topmonks/calamar/tree/76954c810465eafaab7755d7c19308cc36726d17

The deployed build in the time of delivery: https://46dc40bb.calamar.pages.dev

Production app: https://calamar.app
