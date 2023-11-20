# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/grantmaster.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/Zaniyar/grantmaster/blob/6db30291e2687355dc683c0016de6164093a9b6d/LICENSE) | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/Zaniyar/grantmaster/blob/6db30291e2687355dc683c0016de6164093a9b6d/README.md) | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the application and its various features. |
| **0c.** | Testing Guide | <ul><li>[ ] </li></ul> | [README](https://github.com/Zaniyar/grantmaster/tree/6db30291e2687355dc683c0016de6164093a9b6d#run-tests) | — |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [README](https://github.com/Zaniyar/grantmaster/tree/6db30291e2687355dc683c0016de6164093a9b6d#run-with-docker) | — |
| 0e. | Article | <ul><li>[x] </li></ul> | [README](https://github.com/Zaniyar/grantmaster/blob/6db30291e2687355dc683c0016de6164093a9b6d/README.md) | — |
| 1. | Crawler & REST API | <ul><li>[ ] </li></ul> | link | I will develop a configurable crawler and a REST API that facilitates interaction with the [Grants-Program GitHub repository](https://github.com/w3f/Grants-Program). The crawler will update specific applications or deliveries on demand through the web UI (see [Data Synchronization Approach](#data-synchronization-approach) chapter). |
| 2. | GitHub Actions | <ul><li>[ ] </li></ul> | link | GitHub Actions will be used to trigger updates in the application whenever new comments, pull requests, or PR reviews are added on GitHub (see [Data Synchronization Approach](#data-synchronization-approach) chapter). |
| 3. | Frontend Module: Grants Page | <ul><li>[ ] </li></ul> | link | I will develop a Grants Page that will display all the grants in a tabular format. Grants will be searchable by team name, application name as well as full text search. They will be filterable and sortable by pull request status, github label, last updated timestamp, number of approvals & rejections of committee members and all this data will also be displayed in the table. The table will be customizable and attributes will be hidable by the user. It will include all grants - both active and inactive. |
| 4. | Frontend Module: Grant Details | <ul><li>[ ] </li></ul> | link | I will create a Grant Details module that displays detailed information about a specific grant when clicked on in the Grants Page. This will include any parsable data, such as team name, level, payment address, team members, legal entity, milestones and their related info (duration, FTE, costs), etc. in a structural manner. In case an application is not fully parsable, the affected attributes will hold an indication. Finally, the application document will be displayed and the links for any related PRs will be displayed. |
| 5. | Frontend Module: Teams | <ul><li>[ ] </li></ul> | link | This module will present all teams involved in the grants in a concise and searchable manner. |
| 6. | Frontend Feature: Grants Committee Lense | <ul><li>[ ] </li></ul> | link | This feature will allow a user experience that is optimised to a specific grants committee member. The committee member will be able to provide his username (using simple textbox without authentication) and they'll be able to see in which pull requests for grants applications and amendments they've participated and how long it's been since they last commented on it. I think this will be useful for priorizing grant application reviews. |
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —

### `npm run test` output

```sh

```
