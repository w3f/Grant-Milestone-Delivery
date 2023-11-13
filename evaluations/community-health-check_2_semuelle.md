# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/community-health-check.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [TogetherCrew/twitter-bot](https://github.com/TogetherCrew/twitter-bot/blob/6ceee7385dd4fb8eb2522c94bbb8fcb0d990afa3/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [Twitter_Community_Vibes.md](https://github.com/RnDAO/tc-Documentation/blob/b6a101b3c620fa2f53fab62bfdbf5ee255d519b8/Twitter-vibes/Twitter_Community_Vibes.md) | No changes since last milestone. |
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | [TogetherCrew/twitter-bot](https://github.com/TogetherCrew/twitter-bot/blob/6ceee7385dd4fb8eb2522c94bbb8fcb0d990afa3/README.md) | Running the data pipeline and analyzing the data will be covered by tests to ensure functionality. We will describe how to run the tests |
| 0d. | Docker | <ul><li>[ ] </li></ul> | link | We will deliver a docker file to tests the functionality. |
| 0e. | Article | <ul><li>[ ] </li></ul> | link | In addition to the dashboard, we write a handout. This is a walkthrough of the dashboard, explaining each metric, if the score is good or bad, and a list of recommendations.  |
| 1. | Twitter data pipeline | <ul><li>[ ] </li></ul> | link | We will create a data pipeline fetching data from Twitter using their API. The user will enter one or a few twitter handles. The data pipeline is build using Python. We have already a data flow for Discord visible in the following repos: [Discord bot](https://github.com/RnDAO/tc-botComm), [interactions with db](https://github.com/RnDAO/tc-dbComm), and [interactions between front-end and db](https://github.com/RnDAO/tc-serverComm). |
| 2. | Twitter dashboard | <ul><li>[x] </li></ul> | [TogetherCrew/frontend](https://github.com/TogetherCrew/frontend/pull/193) | We will extend our dashboard to include a page with Twitter community health data. The dashboard is build using Typescript. Our current dashbaord, build on Discord data, is available in this [github](https://github.com/RnDAO/tc-uiComm). We will add the Twitter metrics to this dashboard.  |
| 3. | Workshop/call | <ul><li>[ ] </li></ul> | link | We will hold a workshop/ call to answer any questions about the dashboard and handout.  |
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
