# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadot-contract-wizard.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 0a    | License | <ul><li>[x] </li></ul> | <div><div>Frontend: https://github.com/protofire/polkadot-contract-wizard/blob/milestone-2/LICENSE</div><div>Backend: https://github.com/protofire/ink-compiler-be/blob/main/LICENSE</div></div> | Ok. |
| 0b.    | Documentation | <ul><li>[x] </li></ul> | <div><div>Frontend: https://github.com/protofire/polkadot-contract-wizard/blob/milestone-2/README.md</div><div> Backend: https://github.com/protofire/ink-compiler-be/blob/main/README.md</div></div>  | Ok. |
| 0c.    | Testing and Testing Guide | <ul><li>[x] </li></ul> | <div><div>Frontend: https://github.com/protofire/polkadot-contract-wizard/blob/milestone-2/tests/Readme.md</div><div> Backend: https://github.com/protofire/ink-compiler-be/blob/main/README.md#testing</div></div>  | Ok. |
| 0d.    | Docker | <ul><li>[x] </li></ul> | https://github.com/protofire/polkadot-contract-wizard/blob/milestone-2/docker-compose.yml | Ok. |
| 0e. | Article | <ul><li>[x] </li></ul> | https://medium.com/protofire-blog/introducing-the-polkadot-contract-wizard-a-game-changer-for-the-polkadot-and-kusama-ecosystem-fb9076880ca7 | Ok. |
| 1. | Create a service that allows on demand contract compilation and deployment. | <ul><li>[x] </li></ul> | https://github.com/protofire/ink-compiler-be/tree/main | Ok. |
| 2. | Develop Instance functionality. | <ul><li>[x] </li></ul> | https://github.com/protofire/polkadot-contract-wizard/tree/milestone-2 | Ok. |

# General Notes

Very nicely made app. Works well and allows for quick generation and compliation/deployment of select PSP token standards using OpenBrush. They have a helpful Telegram support channel as well.

All issues in deployed app have been scheduled for a fix.

## Front-end

Docker fails when running `yarn build`:
```js
 => [3/4] RUN yarn install                                                                                          119.1s
 => ERROR [4/4] RUN yarn build                                                                                        0.8s
------
 > [4/4] RUN yarn build:
#0 0.423 yarn run v1.22.19
#0 0.444 $ next build
#0 0.752 `destination` does not start with `/`, `http://`, or `https://` for route {"source":"/api/:path*","destination":"undefined/:path*"}
#0 0.753
#0 0.753
#0 0.753 Error: Invalid rewrite found
#0 0.770 info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
#0 0.770 error Command failed with exit code 1.
------
failed to solve: process "/bin/sh -c yarn build" did not complete successfully: exit code: 1
```
The same happens when trying to run locally with yarn:
```js
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
`destination` does not start with `/`, `http://`, or `https://` for route {"source":"/api/:path*","destination":"undefined/:path*"}


Error: Invalid rewrite found
error Command failed with exit code 1.
```
UPDATE: Runs successfully after modifying the .env file:
```js
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
info  - Loaded env from /home/ubuntu/polkadot-contract-wizard/.env
event - compiled client and server successfully in 31.9s (14038 modules)
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry
```
And also with Docker:
```js
pkw_backend    | 2023-05-09 19:05:26 - INFO: 📬 Routes:
pkw_backend    | 2023-05-09 19:05:26 - INFO: (fetch_or_compile_contract) POST /contract
pkw_backend    | 2023-05-09 19:05:26 - INFO: (get_contract) GET /contract?<code_id>&<wasm>
pkw_backend    | 2023-05-09 19:05:26 - INFO: (store_deployment) POST /deployments
pkw_backend    | 2023-05-09 19:05:26 - INFO: (get_contract_deployments) GET /deployments?<user_address>&<network>
pkw_backend    | 2023-05-09 19:05:26 - INFO: 📡 Fairings:
pkw_backend    | 2023-05-09 19:05:26 - INFO: CORS Headers (response)
pkw_backend    | 2023-05-09 19:05:26 - INFO: Shutdown Handler (shutdown)
pkw_backend    | 2023-05-09 19:05:26 - INFO: Shield (liftoff, response, singleton)
pkw_backend    | 2023-05-09 19:05:26 - INFO: 🛡️ Shield:
pkw_backend    | 2023-05-09 19:05:26 - INFO: Permissions-Policy: interest-cohort=()
pkw_backend    | 2023-05-09 19:05:26 - INFO: X-Content-Type-Options: nosniff
pkw_backend    | 2023-05-09 19:05:26 - INFO: X-Frame-Options: SAMEORIGIN
pkw_backend    | 2023-05-09 19:05:26 - INFO: 🚀 Rocket has launched from http://0.0.0.0:8000
```
## Unit Tests

6 Jest tests pass:
```js
 PASS  tests/utils.test.ts
 PASS  tests/coreApp.test.ts
 PASS  tests/formatString.test.ts
 PASS  tests/sections/docs/index.test.tsx

Test Suites: 6 passed, 6 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        21.407 s
Ran all test suites.
```
## Backend

The instructions for the [backend](https://github.com/protofire/polkadot-contract-wizard#backend) has a [broken link](https://github.com/protofire/polkadot-contract-wizard/blob/develop/ink-compiler-be/README.md).

`docker-compose run compiler-be-test` runs successfully:
```js
2023-05-09 20:02:39 - INFO: X-Frame-Options: SAMEORIGIN
2023-05-09 20:02:39 - INFO: X-Content-Type-Options: nosniff
2023-05-09 20:02:39 - INFO: Permissions-Policy: interest-cohort=()
2023-05-09 20:02:39 - INFO: 🚀 Rocket has launched into local orbit
2023-05-09 20:02:39 - INFO: POST /contract:
2023-05-09 20:02:39 - INFO: Matched: (fetch_or_compile_contract) POST /contract
test main_get_contract_test::main_get_contract_test::get_contract_working_as_expected has been running for over 60 seconds
test main_post_contract_test::main_post_contract_test::post_contract_expects_code_is_ok has been running for over 60 seconds
```
All 33 Rust tests pass successfully. I can also build the release successfully and execute the API with `./target/release/compiler-be` once the Cargo env variable is set.
