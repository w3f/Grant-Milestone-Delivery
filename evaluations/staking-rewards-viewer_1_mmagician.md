# Evaluation

* **Status:** Accepted
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/staking-rewards-collector-front-end.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable                  | Accepted               | Link                                                                                                                                               | Evaluation notes |
|--------|------------------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
|    0a. | License                      | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/jackson-harris-iii/staking-rewards-viewer/blob/main/LICENSE)                                                          |                  |
|    0b. | Documentation                | <ul><li>[x] </li></ul> | [README.md](https://github.com/jackson-harris-iii/staking-rewards-viewer/blob/main/README.md)                                                      |                  |
|    0c. | Testing Guide                | <ul><li>[x] </li></ul> | [Test Suite](https://github.com/jackson-harris-iii/staking-rewards-viewer/blob/main/tests/index.test.js)                                           |                  |
|    0d. | Docker                       | <ul><li>[x] </li></ul> | [dockerfile](https://github.com/jackson-harris-iii/staking-rewards-viewer/blob/main/Dockerfile)                                                    |                  |
|     1. | UI for user input            | <ul><li>[x] </li></ul> | [React Components Directory](https://github.com/jackson-harris-iii/staking-rewards-viewer/tree/main/Components)                                    |                  |
|    2a. | Address LookUp Functionality | <ul><li>[x] </li></ul> | [Address LookUp -  Modified Staking Rewards Collector Code](https://github.com/jackson-harris-iii/staking-rewards-viewer/blob/main/Utils/index.js) |                  |
|    2b. | CSV/JSON Download            | <ul><li>[x] </li></ul> | [Export - Modified Staking Rewards Collector Code](https://github.com/jackson-harris-iii/staking-rewards-viewer/blob/main/Utils/fileWorker.js)     |                  |
|     3. | Form validation              | <ul><li>[x] </li></ul> | [Form Component](https://github.com/jackson-harris-iii/staking-rewards-viewer/blob/main/Components/Form/index.js)                                  |                  |
|     4. | UI for data visualizer       | <ul><li>[x] </li></ul> | [Summary Output Components](https://github.com/jackson-harris-iii/staking-rewards-viewer/tree/main/Components/SummaryContainer)                    |                  |
|     5. | Tooltips/Helpers             | <ul><li>[x] </li></ul> | [Form Tooltip](https://github.com/jackson-harris-iii/staking-rewards-viewer/blob/main/pages/index.js)                                              |                  |
|     6. | Testing                      | <ul><li>[x] </li></ul> | [Test Suite](https://github.com/jackson-harris-iii/staking-rewards-viewer/blob/main/tests/index.test.js)                                           |                  |
|     7. | Polishing & Delivery         | <ul><li>[x] </li></ul> | [Main Repo](https://github.com/jackson-harris-iii/staking-rewards-viewer)                                                                          |                  |

## General Notes

Not much initiative taken by the developer to find solutions on his own, see the [discussion](https://github.com/w3f/Grant-Milestone-Delivery/pull/232).

Now, a subjective opinion: the UI looks quite poor. It seems that only minimal design measures were undertaken. The "feel" of the tool is not modern, e.g. the font or the date picker. The time-date text under the graph doesn't make sense for 1 week or 1 month (e.g. for one month, I see a "01, 07 PM" - I don't know whether this refers to 01st of July, or 01st of the month at 7pm? Also showing the hour or AM/PM doesn't make much sense in the context of >24h periods). 

Furthermore, an arbitrary limit of 5 addresses seems like it results from a poor code design choice, I fail to see what difference making 5 calls vs 6 calls would make on performance (aside from linearly increasing expected response time).

### Testing

Test coverage could include some integration tests, since right now only UI components are tested.
