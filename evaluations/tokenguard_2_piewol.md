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
| 0c | Testing and Testing Guide |<ul><li>[x] </li></ul>|https://github.com/tokenguardio/dashboard-creator-server/tree/v2.0.5/src/components| also covered by m1 testing guide. Unit tests are passing. |
| 0d | Dockerfile |<ul><li>[x] </li></ul>| https://github.com/tokenguardio/dashboard-creator-server/blob/v2.0.5/Dockerfile | works via docker compose up |
| 1 | API reading mechanism |<ul><li>[x] </li></ul>| https://github.com/tokenguardio/dashboard-creator-server/tree/v2.0.5 | nice, swagger is cool |
| 2 | Report & estimation |<ul><li>[x] </li></ul>| https://github.com/tokenguardio/dashboard-creator-server/tree/v2.0.5 | ok |


## General notes
Still while following the ``getting started`` section the server is not starting up correctly. Futhermore in the readme ``npm start`` is given as a command to startup the server but it isn't working. For me its fine if the whole thing only works via docker-compose but the readme should not contain any guides that are not working. I would suggest to either remove the content from the readme or fix the relevant section.

## Unit test
tests are passing.

```
Test Suites: 7 passed, 7 total
Tests:       35 passed, 35 total
Snapshots:   0 total
Time:        5.479 s, estimated 9 s
Ran all test suites.
```




