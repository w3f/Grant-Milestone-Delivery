# Evaluation

> Don't remove any of the mandatory parts presented in bold letters or as headlines!
> When evaluating the last milestone of a grant, check if the finished grant refers to an [RFP](https://grants.web3.foundation/docs/rfps) and move the corresponding RFP to status `Closed`.
> Lines starting with `>`, such as this one, can be removed.

- **Status:** In Progress/Accepted/Rejected
- **Application Document:** Please, provide a link to the merged contract (the `.md` file in the [applications](https://github.com/w3f/Grants-Program/tree/master/applications) directory). 
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** Link

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[] </li></ul> | [LICENSE](https://github.com/topmonks/calamar/blob/76954c810465eafaab7755d7c19308cc36726d17/LICENSE.txt) | Apache License 2.0 |
| **0b.** | Documentation             | <ul><li>[] </li></ul> | [README](https://github.com/topmonks/calamar/blob/76954c810465eafaab7755d7c19308cc36726d17/README.md) , [Calamar docs](https://docs.calamar.app/)| See also https://docs.melodot.io/guide/node/strating-a-farmer-client/ |
| **0c.** | Testing and Testing Guide | <ul><li>[] </li></ul> | [README#Test](https://github.com/topmonks/calamar/blob/76954c810465eafaab7755d7c19308cc36726d17/README.md#test), [E2E tests](https://github.com/topmonks/calamar/tree/76954c810465eafaab7755d7c19308cc36726d17/test/e2e), [GitHub workflow](https://github.com/topmonks/calamar/blob/76954c810465eafaab7755d7c19308cc36726d17/.github/workflows/test-and-deploy.yml#L27), [Test reports](https://github.com/topmonks/calamar/deployments?environment=test-report#activity-log), [Screenshots](https://app.argos-ci.com/topmonks/calamar) | — |
| **0d.** | Docker                    | <ul><li>[] </li></ul> | [Dockerfile](https://github.com/topmonks/calamar/blob/76954c810465eafaab7755d7c19308cc36726d17/Dockerfile), [README#Docker](https://github.com/topmonks/calamar/blob/76954c810465eafaab7755d7c19308cc36726d17/README.md#docker) | — |
| **0e.** | Article                   | <ul><li>[] </li></ul> | [Article](https://medium.com/@uiii/calamar-block-explorer-milestone-3-finished-29fd816bf3fd) | — |
| 1. | Universal search | <ul><li>[] </li></ul> | [PR#164](https://github.com/topmonks/calamar/pull/164), [Example#1](https://46dc40bb.calamar.pages.dev/search/blocks?query=123), [Example#2](https://46dc40bb.calamar.pages.dev/search?query=balances) | |
| 2. | Metadata explorer | <ul><li>[] </li></ul> | [PR#179](https://github.com/topmonks/calamar/pull/179), [Example](https://46dc40bb.calamar.pages.dev/polkadot/runtime/9430/balances) | |
| 3. | Show related runtime metadata in items' detail | <ul><li>[] </li></ul> | [PR#180](https://github.com/topmonks/calamar/pull/180), [Example](https://46dc40bb.calamar.pages.dev/polkadot/event/18493287-41) | In the example hover ower the book icon next to the event's name, also you can click the spec version link. |
| 4. | Search input autocomplete | <ul><li>[] </li></ul> | [PR#181](https://github.com/topmonks/calamar/pull/181), [Example](https://46dc40bb.calamar.pages.dev/) | In the example, write `tr` into the search input. |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments
