# Evaluation

> Don't remove any of the mandatory parts presented in bold letters or as headlines!
> When evaluating the last milestone of a grant, check if the finished grant refers to an [RFP](https://grants.web3.foundation/docs/rfps) and move the corresponding RFP to status `Closed`.
> Lines starting with `>`, such as this one, can be removed.

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Calamar.md 
- **Milestone:** 3
- **Kusama Identity:** TODO
- **Previously successfully merged evaluation:** None

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/topmonks/calamar/blob/76954c810465eafaab7755d7c19308cc36726d17/LICENSE.txt) | Apache License 2.0 |
| **0b.** | Documentation             | <ul><li>[x] </li></ul> | [README](https://github.com/topmonks/calamar/blob/76954c810465eafaab7755d7c19308cc36726d17/README.md) , [Calamar docs](https://docs.calamar.app/)||
| **0c.** | Testing and Testing Guide | <ul><li>[] </li></ul> | [README#Test](https://github.com/topmonks/calamar/blob/76954c810465eafaab7755d7c19308cc36726d17/README.md#test), [E2E tests](https://github.com/topmonks/calamar/tree/76954c810465eafaab7755d7c19308cc36726d17/test/e2e), [GitHub workflow](https://github.com/topmonks/calamar/blob/76954c810465eafaab7755d7c19308cc36726d17/.github/workflows/test-and-deploy.yml#L27), [Test reports](https://github.com/topmonks/calamar/deployments?environment=test-report#activity-log), [Screenshots](https://app.argos-ci.com/topmonks/calamar) | — |
| **0d.** | Docker                    | <ul><li>[x] </li></ul> | - | Not relevant for this milestone as specified in the application |
| **0e.** | Article                   | <ul><li>[x] </li></ul> | [Article](https://medium.com/@uiii/calamar-block-explorer-milestone-3-finished-29fd816bf3fd) | — |
| 1. | Universal search | <ul><li>[x] </li></ul> | [PR#164](https://github.com/topmonks/calamar/pull/164), [Example#1](https://46dc40bb.calamar.pages.dev/search/blocks?query=123), [Example#2](https://46dc40bb.calamar.pages.dev/search?query=balances) | |
| 2. | Metadata explorer | <ul><li>[] </li></ul> | [PR#179](https://github.com/topmonks/calamar/pull/179), [Example](https://46dc40bb.calamar.pages.dev/polkadot/runtime/9430/balances) | |
| 3. | Show related runtime metadata in items' detail | <ul><li>[] </li></ul> | [PR#180](https://github.com/topmonks/calamar/pull/180), [Example](https://46dc40bb.calamar.pages.dev/polkadot/event/18493287-41) | In the example hover ower the book icon next to the event's name, also you can click the spec version link. |
| 4. | Search input autocomplete | <ul><li>[x] </li></ul> | [PR#181](https://github.com/topmonks/calamar/pull/181), [Example](https://46dc40bb.calamar.pages.dev/) | In the example, write `tr` into the search input. |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes
Sadly in the app at the time of delivery the explorer for Polkadot has stopped tracking new extrinsics on the 21. of December. [time of delivery instance](https://46dc40bb.calamar.pages.dev/polkadot/blocks).

## Readme
The Readme is precise and coherent. Straight forward instructions on how to run this project. Sadly chronologically following the setup and trying to run it locally results in an error.
Output is pasted to a code block below.

## Article
The article consist of a small description and images for each of the new features. This satisfies the spec agreed upon. It would be nice to have more in depth information about the new features. E.g. explain limitations of features or why these are necessary or helpful. Maybe explain why it is "crucial to have access to the latest metadata documentation" in a block explorer.

## Show related runtime metadata in item's detail
Since Spec 100001: For every item there is a popup with additional information as expected. In a lot of cases this is pretty unhelpful as it is just another documentation link from the extrinsic to a pallet. The button "click to view more" doesn't forward to more information. I think this should be improved as this is a major item combined with the metadata explorer of this grant.
<img width="438" alt="Bildschirm­foto 2023-12-23 um 19 40 57" src="https://github.com/PieWol/Grant-Milestone-Delivery/assets/75956460/48ef50d1-ff5f-4210-81e7-3da96a9c6c34">

Works well for previous specs though. 

## building and testing output

``` $ npm install

npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.

changed 409 packages, and audited 2297 packages in 16m

352 packages are looking for funding
  run `npm fund` for details

24 vulnerabilities (9 moderate, 13 high, 2 critical)
```
Whats the reason to have kept critical vulnerabilies?

## trying to run locally with "npm start" as given in the readme
[shortened output] This hinders from further testing and following the readme.
```
$ npm start

> calamar@0.1.0 start
> cross-env BROWSER=none react-scripts start

node:internal/modules/cjs/loader:1147
  throw err;
  ^

Error: Cannot find module 'lodash.debounce'
```

## Summary
I see this as 'in progress' because of two reasons:
1. The metadata explorer and the additional info for item details are not useful with the latest Polkadot spec.
2. The error when trying to follow along the readme resulting in a failure to run the app locally needs to be resolved to allow for further testing.
