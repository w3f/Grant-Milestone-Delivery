# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/TPScore.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Licence](https://github.com/BCS-Labs/tpscore-web-client/blob/main/LICENSE) | GPLv3|
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Documentation](https://github.com/BCS-Labs/tpscore-web-client/blob/main/README.md) | 
| **0c.** | Tests and Testing Guide | <ul><li>[x] </li></ul> | [Tests](https://github.com/BCS-Labs/tpscore-web-client/tree/main/src/test), [Testing Guide](https://github.com/BCS-Labs/tpscore-web-client#run-unit-tests) |  |
| **0d.** | Docker | <ul><li>[ ] </li></ul> | [Dockerfile](https://github.com/BCS-Labs/tpscore-web-client/blob/main/Dockerfile), [How to run the project using Docker](https://github.com/BCS-Labs/tpscore-web-client#how-to-run-the-project-using-docker) |  |
| 0e. | Article | <ul><li>[ ] </li></ul> | [Article](https://dev.to/fromaline/tpscore-transactions-per-second-metrics-made-easy-508f) |  |
| 1. | Data access | <ul><li>[ ] </li></ul> |[Data access in the app](https://github.com/BCS-Labs/tpscore-web-client/blob/main/src/app/page.tsx#L14)|  |
| 2. | UI  | <ul><li>[ ] </li></ul> | [tpscore.xyz](https://tpscore.xyz/), [source code](https://github.com/BCS-Labs/tpscore-web-client/tree/main/src)  |  |

# General Notes

# Tests
<details>

  <summary>Unit Tests Pass Successfully</summary>

  ```ts
$ vitest run

 RUN  v0.34.1 /Users/keeganquigley/tpscore-web-client

 ✓ src/test/filterChains.test.ts (5)
 ✓ src/test/countTotalTps.test.ts (3)
 ✓ src/test/processChainsData.test.ts (3)
 ✓ src/test/sortChains.test.ts (6)

 Test Files  4 passed (4)
      Tests  17 passed (17)
   Start at  18:07:50
   Duration  197ms (transform 91ms, setup 0ms, collect 155ms, tests 11ms, environment 0ms, prepare 163ms)

✨  Done in 1.89s.
```
</details>

<details>

  <summary>No lint warnings</summary>

  ```ts
yarn run v1.22.19
warning ../package.json: No license field
$ next lint
- info Loaded env from /Users/keeganquigley/tpscore-web-client/.env.local
✔ No ESLint warnings or errors
✨  Done in 2.65s.
```
</details>

<details>

  <summary>Code coverage is good</summary>

  ```js
 % Coverage report from istanbul
----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------------|---------|----------|---------|---------|-------------------
All files             |     100 |      100 |     100 |     100 |
 countTotalTps.ts     |     100 |      100 |     100 |     100 |
 filterChains.ts      |     100 |      100 |     100 |     100 |
 processChainsData.ts |     100 |      100 |     100 |     100 |
 sortChains.ts        |     100 |      100 |     100 |     100 |
----------------------|---------|----------|---------|---------|-------------------
✨  Done in 1.34s.
```
</details>

<details>

  <summary>App builds successfully</summary>

  ```ts
yarn build
yarn run v1.22.19
warning ../package.json: No license field
$ next build
- info Loaded env from /Users/keeganquigley/tpscore-web-client/.env.local
- info Creating an optimized production build
- info Compiled successfully
- info Linting and checking validity of types
- info Collecting page data
- info Generating static pages (3/3)
- info Finalizing page optimization

Route (app)                                Size     First Load JS
┌ λ /                                      12.2 kB        89.7 kB
└ ○ /opengraph-image.png                   0 B                0 B
+ First Load JS shared by all              77.6 kB
  ├ chunks/961-e3296b80146a7091.js         25.1 kB
  ├ chunks/bce60fc1-edca1e19616b7277.js    50.5 kB
  ├ chunks/main-app-8c694382831d55f7.js    207 B
  └ chunks/webpack-cf9c60082d494e62.js     1.72 kB

Route (pages)                              Size     First Load JS
─ ○ /404                                   182 B          75.5 kB
+ First Load JS shared by all              75.3 kB
  ├ chunks/framework-8883d1e9be70c3da.js   45 kB
  ├ chunks/main-9b6b77c85b75945c.js        28.4 kB
  ├ chunks/pages/_app-52924524f99094ab.js  195 B
  └ chunks/webpack-cf9c60082d494e62.js     1.72 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)

✨  Done in 13.92s.
```
</details>

<details>

  <summary>Airflow services start correctly</summary>

  ```sh
docker compose up -d

[+] Building 0.4s (18/24)                                                                            docker:desktop-linux
 => [airflow-webserver internal] load .dockerignore                                                                  0.0s
 => => transferring context: 2B                                                                                      0.0s
 => [airflow-webserver internal] load build definition from Dockerfile                                               0.0s
 => => transferring dockerfile: 269B                                                                                 0.0s
 => [airflow-webserver internal] load metadata for docker.io/apache/airflow:2.5.3                                    0.3s
 => [airflow-triggerer internal] load .dockerignore                                                                  0.0s
 => => transferring context: 2B                                                                                      0.0s
 => [airflow-triggerer internal] load build definition from Dockerfile                                               0.0s
 => => transferring dockerfile: 269B                                                                                 0.0s
 => [airflow-scheduler internal] load build definition from Dockerfile                                               0.0s
 => => transferring dockerfile: 269B                                                                                 0.0s
 => [airflow-scheduler internal] load .dockerignore                                                                  0.0s
 => => transferring context: 2B                                                                                      0.0s
 => [airflow-scheduler 1/5] FROM docker.io/apache/airflow:2.5.3@sha256:c21bc4fbc6e40a8b9ab1cded8d03d37864e91f8bdccc  0.0s
 => [airflow-triggerer internal] load build context                                                                  0.0s
 => => transferring context: 45B                                                                                     0.0s
 => [airflow-scheduler internal] load build context                                                                  0.0s
 => => transferring context: 92B                                                                                     0.0s
 => [airflow-webserver internal] load build context                                                                  0.0s
 => => transferring context: 92B                                                                                     0.0s
 => CACHED [airflow-triggerer 2/5] RUN apt-get -y update                                                             0.0s
 => CACHED [airflow-triggerer 3/5] COPY airflow_requirements.txt /airflow_requirements.txt                           0.0s
 => CACHED [airflow-triggerer 4/5] RUN pip install --user --upgrade pip                                              0.0s
 => CACHED [airflow-triggerer 5/5] RUN pip install --no-cache-dir --user -r /airflow_requirements.txt                0.0s
 => [airflow-triggerer] exporting to image                                                                           0.0s
 => => exporting layers                                                                                              0.0s
 => => writing image sha256:11b551139d3144389f554d1ab5236f2936bd521ff1e77814d106ebe407e24399                         0.0s
 => => naming to docker.io/library/airflow-airflow-triggerer                                                         0.0s
 => [airflow-scheduler] exporting to image                                                                           0.0s
 => => exporting layers                                                                                              0.0s
 => => writing image sha256:4b70d89b40d307d4e784f27db47b0a266f90df294ebbe727e42cdca41c0e1f0c                         0.0s
 => => naming to docker.io/library/airflow-airflow-scheduler                                                         0.0s
 => [airflow-webserver] exporting to image                                                                           0.0s
 => => exporting layers                                                                                              0.0s
 => => writing image sha256:0f97c337dbabda4fbc34295931174c46dc8d19f202527045fdd53fbdb0a93ecb                         0.0s
 => => naming to docker.io/library/airflow-airflow-webserver                                                         0.0s
[+] Running 5/5
 ✔ Container airflow-postgres-1           Healthy                                                                    0.0s
 ✔ Container airflow-airflow-init-1       Exited                                                                     0.0s
 ✔ Container airflow-airflow-webserver-1  Started                                                                    0.1s
 ✔ Container airflow_scheduler            Started                                                                    0.1s
 ✔ Container airflow-airflow-triggerer-1  Started
 ```
</details>
