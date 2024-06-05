# Evaluation

- **Status:** in progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Tokenguard.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All evaluations by PieWol

**Milestone Number:** 2

**Deliverables**

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a | License |<ul><li>[x] </li></ul>| https://github.com/tokenguardio/dashboard-creator-server/blob/v2.0.3/LICENSE | ok |
| 0b  | Documentation |<ul><li>[ ] </li></ul>| https://github.com/tokenguardio/dashboard-creator-server/blob/v2.0.3/README.md | Inline documentation is sometimes sparse but ok overall. The readme needs some work. See general notes. |
| 0c | Testing and Testing Guide |<ul><li>[ ] </li></ul>|https://github.com/tokenguardio/dashboard-creator-server/tree/v2.0.3/src/components| also covered by m1 testing guide. Unit tests are failing. |
| 0d | Dockerfile |<ul><li>[x] </li></ul>| https://github.com/tokenguardio/dashboard-creator-server/blob/v2.0.3/Dockerfile | works via docker compose up |
| 1 | API reading mechanism |<ul><li>[x] </li></ul>| https://github.com/tokenguardio/dashboard-creator-server/tree/v2.0.3 | nice, swagger is cool |
| 2 | Report & estimation |<ul><li>[ ] </li></ul>| https://github.com/tokenguardio/dashboard-creator-server/tree/v2.0.3 | Can you please provide a link to the agreed upon ``Detailed report on the dashboard composer design``? Feel free to change the link of this delivery item. |


## General notes
Sadly in the readme the ´´getting started´´ sections are failing. The service doesn't start up. The only working way seems to be launching it via the testing guide using ``docker compose up``. Could you please adjust the readme so that the getting started sections are working?

## Unit test
Running the tests via ´´npm test´´ is running the tests but sadly only one test is passing. Can you please take a look and fix the tests?

```
Test Suites: 6 failed, 1 passed, 7 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        3.062 s
```




