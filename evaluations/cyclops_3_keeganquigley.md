# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/cyclops.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| -----: | ----------- | ----------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [link](https://github.com/ArthurHoeke/cyclops/blob/main/LICENSE) |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [link](https://github.com/ArthurHoeke/cyclops/blob/main/back-end/README.md) | Ok.
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [link](https://github.com/ArthurHoeke/cyclops/) | See below. | Only 5 tests.
| **0d.** | Docker | <ul><li>[x] </li></ul> | [front-end](https://hub.docker.com/r/decentradot/cyclops-front-end) [back-end](https://hub.docker.com/r/decentradot/cyclops-back-end) | Works but no documentation for either.
| **0e.** | Article | <ul><li>[x] </li></ul> | [link](https://medium.com/@arthurh/cyclops-validator-dashboard-a-comprehensive-validator-dashboard-for-polkadot-f1afc1e3d83a) | Ok.
| 1. | API Service | <ul><li>[x] </li></ul> | [link](https://github.com/ArthurHoeke/cyclops/blob/main/front-end/src/app/services/dashboard/dashboard.service.ts) | Works nicely with Subscan API key. |
| 2. | Display data | <ul><li>[x] </li></ul> | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) | Works locally & on Docker.
| 3. | Elected / waiting | <ul><li>[x] </li></ul> | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) | Works locally & on Docker.
| 4. | Reward tracking | <ul><li>[x] </li></ul> | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) | Works locally & on Docker.
| 5. | Token price tracking | <ul><li>[x] </li></ul> | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) | Works locally & on Docker.
| 6. | ERA | <ul><li>[x] </li></ul> | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) | Works locally & on Docker.
| 7. | 1kv statistics | <ul><li>[x] </li></ul> | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) | Works locally & on Docker.
| 8. | Stash | <ul><li>[x] </li></ul> | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) | Works locally & on Docker.
| 9. | PDF reports | <ul><li>[x] </li></ul> | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) | PDF successfully prints in a nice format. |
| 10. | E-mail alert system | <ul><li>[x] </li></ul> | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) | Works.
| 11. | ERA point tracking | <ul><li>[x] </li></ul> | [link](https://github.com/ArthurHoeke/cyclops/tree/main/front-end/src/app/pages/dashboard) | Works.

# General Notes

Dashboard works well and I can sign in, add validators, see stats and critical events. Nicely detailed end-points and routes. SMTP works. Code is well commented and structured. Though the testing is minimal, with 7 tests on the backend. Deployed site works nicely as well.

+ Add Validator is greyed out for some reason but it still works. Also, I don't see a way to remove validators once they have been added.

## Tests

Front-end Karma tests are successful:
```js
✔ Browser application bundle generation complete.
24 04 2023 20:35:00.474:WARN [karma]: No captured browser, open http://localhost:9876/
24 04 2023 20:35:00.674:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
24 04 2023 20:35:00.675:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
24 04 2023 20:35:00.678:INFO [launcher]: Starting browser Chrome
24 04 2023 20:35:02.141:INFO [Chrome 112.0.0.0 (Mac OS 10.15.7)]: Connected on socket 0FXZmyBolxsOhk14AAAB with id 48166638
Chrome 112.0.0.0 (Mac OS 10.15.7): Executed 5 of 5 SUCCESS (0.031 secs / 0.025 secs)
TOTAL: 5 SUCCESS
```
I'm able to start up the server and use Postman to call the end-points with `POST` requests to manually register and login.
```js
> cyclops@1.0.3 start
> node app.js 0

Cyclops listening on port 3000
----------------------------------------------------------------------
Preparing to fetch network data..
----------------------------------------------------------------------
Fetching active polkadot validators..
Received active validators
Fetching waiting polkadot validators..
Received waiting validators
----------------------------------------------------------------------
🟠 No subscan API key has been configured yet
----------------------------------------------------------------------
🟠 No subscan API key has been configured yet
Updated Kusama 1kv data
Updated Polkadot 1kv data
```
Running `ng test --code-coverage` on the front-end generates very low coverage. Consider adding more unit tests for components.
```js
✔ Browser application bundle generation complete.
24 04 2023 21:04:36.926:WARN [karma]: No captured browser, open http://localhost:9876/
24 04 2023 21:04:36.953:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
24 04 2023 21:04:36.953:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
24 04 2023 21:04:36.956:INFO [launcher]: Starting browser Chrome
24 04 2023 21:04:38.086:INFO [Chrome 112.0.0.0 (Mac OS 10.15.7)]: Connected on socket 6ufGPb3T9s9dHET4AAAB with id 43232122
Chrome 112.0.0.0 (Mac OS 10.15.7): Executed 5 of 5 SUCCESS (0.038 secs / 0.028 secs)
TOTAL: 5 SUCCESS

=============================== Coverage summary ===============================
Statements   : 8.64% ( 16/185 )
Branches     : 0% ( 0/2 )
Functions    : 4.9% ( 5/102 )
Lines        : 6.17% ( 11/178 )
================================================================================
```
