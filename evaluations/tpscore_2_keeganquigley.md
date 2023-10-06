# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/TPScore.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Licence](https://github.com/BCS-Labs/tpscore-web-client/blob/main/LICENSE) | GPLv3|
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Documentation](https://github.com/BCS-Labs/tpscore-web-client/blob/main/README.md) | Looks good.
| **0c.** | Tests and Testing Guide | <ul><li>[x] </li></ul> | [Tests](https://github.com/BCS-Labs/tpscore-web-client/tree/main/src/test), [Testing Guide](https://github.com/BCS-Labs/tpscore-web-client#run-unit-tests) | Looks good. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/BCS-Labs/tpscore-web-client/blob/main/Dockerfile), [How to run the project using Docker](https://github.com/BCS-Labs/tpscore-web-client#how-to-run-the-project-using-docker) | Looks good. |
| 0e. | Article | <ul><li>[x] </li></ul> | [Article](https://dev.to/fromaline/tpscore-transactions-per-second-metrics-made-easy-508f) | Looks good. |
| 1. | Data access | <ul><li>[x] </li></ul> |[Data access in the app](https://github.com/BCS-Labs/tpscore-web-client/blob/main/src/app/page.tsx#L14)| Looks good. |
| 2. | UI  | <ul><li>[x] </li></ul> | [tpscore.xyz](https://tpscore.xyz/), [source code](https://github.com/BCS-Labs/tpscore-web-client/tree/main/src)  | Looks good. |

# General Notes

App works nicely and good documentation. I'm able to create the Docker networks and connect `db_mysql`, `airflow_scheduler`, and `tpscore-web-client`. All of the instructions work as expected.

I'm not sure what these indicators are supposed to mean exactly. Also, how often do these feeds get updated? I see the latest published ones are from August 9th.

**UPDATE:** Issues resolved regarding the feeds updating.

**UPDATE v2:** Grantee says they are looking to change the display format, and include other extrinsics as well in addition to balance transfers.

<details>

  <summary>Entire ETL system runs</summary>

  ```
CONTAINER ID   IMAGE                       COMMAND                  CREATED          STATUS                    PORTS                                                        NAMES
0f6cee724108   airflow-airflow-triggerer   "/usr/bin/dumb-init …"   2 minutes ago    Up 2 minutes (healthy)    8080/tcp                                                     airflow-airflow-triggerer-1
52f344fbf5fb   airflow-airflow-webserver   "/usr/bin/dumb-init …"   2 minutes ago    Up 2 minutes (healthy)    0.0.0.0:8080->8080/tcp, :::8080->8080/tcp                    airflow-airflow-webserver-1
3a6d8e2069cc   airflow-airflow-scheduler   "/usr/bin/dumb-init …"   2 minutes ago    Up 2 minutes (healthy)    8080/tcp                                                     airflow_scheduler
b192b1834c06   postgres:13                 "docker-entrypoint.s…"   15 minutes ago   Up 15 minutes (healthy)   5432/tcp                                                     airflow-postgres-1
96225d8fcd9c   mysql_tpscore               "/entrypoint.sh mysq…"   18 minutes ago   Up 17 minutes (healthy)   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060-33061/tcp   db_mysql
```
</details>

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

<details>

  <summary>Airflow container works</summary>

```sh
  Attaching to airflow-airflow-init-1
airflow-airflow-init-1  | The container is run as root user. For security, consider using a regular user account.
airflow-airflow-init-1  | 
airflow-airflow-init-1  | /home/airflow/.local/lib/python3.7/site-packages/airflow/models/base.py:49 MovedIn20Warning: Deprecated API features detected! These feature(s) are not compatible with SQLAlchemy 2.0. To prevent incompatible upgrades prior to updating applications, ensure requirements files are pinned to "sqlalchemy<2.0". Set environment variable SQLALCHEMY_WARN_20=1 to show all deprecation warnings.  Set environment variable SQLALCHEMY_SILENCE_UBER_WARNING=1 to silence this message. (Background on SQLAlchemy 2.0 at: https://sqlalche.me/e/b8d9)
airflow-airflow-init-1  | DB: postgresql+psycopg2://airflow:***@postgres/airflow
airflow-airflow-init-1  | Performing upgrade with database postgresql+psycopg2://airflow:***@postgres/airflow
airflow-airflow-init-1  | [2023-10-03 21:32:20,215] {migration.py:205} INFO - Context impl PostgresqlImpl.
airflow-airflow-init-1  | [2023-10-03 21:32:20,216] {migration.py:212} INFO - Will assume transactional DDL.
airflow-airflow-init-1  | [2023-10-03 21:32:20,218] {migration.py:205} INFO - Context impl PostgresqlImpl.
airflow-airflow-init-1  | [2023-10-03 21:32:20,218] {migration.py:212} INFO - Will assume transactional DDL.
airflow-airflow-init-1  | INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.
airflow-airflow-init-1  | INFO  [alembic.runtime.migration] Will assume transactional DDL.
airflow-airflow-init-1  | INFO  [alembic.runtime.migration] Running stamp_revision  -> 290244fb8b83
airflow-airflow-init-1  | Upgrades done
airflow-airflow-init-1  | [2023-10-03 21:32:24,907] {manager.py:243} INFO - Inserted Role: Admin
airflow-airflow-init-1  | [2023-10-03 21:32:24,911] {manager.py:243} INFO - Inserted Role: Public
airflow-airflow-init-1  | [2023-10-03 21:32:24,914] {manager.py:824} WARNING - No user yet created, use flask fab command to do it.
airflow-airflow-init-1  | [2023-10-03 21:32:25,047] {manager.py:504} INFO - Created Permission View: can edit on Passwords
airflow-airflow-init-1  | [2023-10-03 21:32:25,053] {manager.py:562} INFO - Added Permission can edit on Passwords to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,061] {manager.py:504} INFO - Created Permission View: can read on Passwords
airflow-airflow-init-1  | [2023-10-03 21:32:25,066] {manager.py:562} INFO - Added Permission can read on Passwords to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,082] {manager.py:504} INFO - Created Permission View: can edit on My Password
airflow-airflow-init-1  | [2023-10-03 21:32:25,087] {manager.py:562} INFO - Added Permission can edit on My Password to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,094] {manager.py:504} INFO - Created Permission View: can read on My Password
airflow-airflow-init-1  | [2023-10-03 21:32:25,099] {manager.py:562} INFO - Added Permission can read on My Password to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,113] {manager.py:504} INFO - Created Permission View: can edit on My Profile
airflow-airflow-init-1  | [2023-10-03 21:32:25,117] {manager.py:562} INFO - Added Permission can edit on My Profile to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,125] {manager.py:504} INFO - Created Permission View: can read on My Profile
airflow-airflow-init-1  | [2023-10-03 21:32:25,129] {manager.py:562} INFO - Added Permission can read on My Profile to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,165] {manager.py:504} INFO - Created Permission View: can create on Users
airflow-airflow-init-1  | [2023-10-03 21:32:25,169] {manager.py:562} INFO - Added Permission can create on Users to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,177] {manager.py:504} INFO - Created Permission View: can read on Users
airflow-airflow-init-1  | [2023-10-03 21:32:25,181] {manager.py:562} INFO - Added Permission can read on Users to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,189] {manager.py:504} INFO - Created Permission View: can edit on Users
airflow-airflow-init-1  | [2023-10-03 21:32:25,193] {manager.py:562} INFO - Added Permission can edit on Users to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,201] {manager.py:504} INFO - Created Permission View: can delete on Users
airflow-airflow-init-1  | [2023-10-03 21:32:25,205] {manager.py:562} INFO - Added Permission can delete on Users to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,217] {manager.py:504} INFO - Created Permission View: menu access on List Users
airflow-airflow-init-1  | [2023-10-03 21:32:25,222] {manager.py:562} INFO - Added Permission menu access on List Users to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,236] {manager.py:504} INFO - Created Permission View: menu access on Security
airflow-airflow-init-1  | [2023-10-03 21:32:25,241] {manager.py:562} INFO - Added Permission menu access on Security to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,268] {manager.py:504} INFO - Created Permission View: can create on Roles
airflow-airflow-init-1  | [2023-10-03 21:32:25,273] {manager.py:562} INFO - Added Permission can create on Roles to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,281] {manager.py:504} INFO - Created Permission View: can read on Roles
airflow-airflow-init-1  | [2023-10-03 21:32:25,285] {manager.py:562} INFO - Added Permission can read on Roles to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,293] {manager.py:504} INFO - Created Permission View: can edit on Roles
airflow-airflow-init-1  | [2023-10-03 21:32:25,297] {manager.py:562} INFO - Added Permission can edit on Roles to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,305] {manager.py:504} INFO - Created Permission View: can delete on Roles
airflow-airflow-init-1  | [2023-10-03 21:32:25,309] {manager.py:562} INFO - Added Permission can delete on Roles to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,323] {manager.py:504} INFO - Created Permission View: menu access on List Roles
airflow-airflow-init-1  | [2023-10-03 21:32:25,328] {manager.py:562} INFO - Added Permission menu access on List Roles to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,352] {manager.py:504} INFO - Created Permission View: can read on User Stats Chart
airflow-airflow-init-1  | [2023-10-03 21:32:25,358] {manager.py:562} INFO - Added Permission can read on User Stats Chart to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,372] {manager.py:504} INFO - Created Permission View: menu access on User's Statistics
airflow-airflow-init-1  | [2023-10-03 21:32:25,376] {manager.py:562} INFO - Added Permission menu access on User's Statistics to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,409] {manager.py:504} INFO - Created Permission View: can read on Permissions
airflow-airflow-init-1  | [2023-10-03 21:32:25,414] {manager.py:562} INFO - Added Permission can read on Permissions to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,428] {manager.py:504} INFO - Created Permission View: menu access on Actions
airflow-airflow-init-1  | [2023-10-03 21:32:25,434] {manager.py:562} INFO - Added Permission menu access on Actions to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,467] {manager.py:504} INFO - Created Permission View: can read on View Menus
airflow-airflow-init-1  | [2023-10-03 21:32:25,473] {manager.py:562} INFO - Added Permission can read on View Menus to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,487] {manager.py:504} INFO - Created Permission View: menu access on Resources
airflow-airflow-init-1  | [2023-10-03 21:32:25,492] {manager.py:562} INFO - Added Permission menu access on Resources to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,526] {manager.py:504} INFO - Created Permission View: can read on Permission Views
airflow-airflow-init-1  | [2023-10-03 21:32:25,531] {manager.py:562} INFO - Added Permission can read on Permission Views to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,545] {manager.py:504} INFO - Created Permission View: menu access on Permission Pairs
airflow-airflow-init-1  | [2023-10-03 21:32:25,550] {manager.py:562} INFO - Added Permission menu access on Permission Pairs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,885] {manager.py:504} INFO - Created Permission View: can create on DAG Runs
airflow-airflow-init-1  | [2023-10-03 21:32:25,890] {manager.py:562} INFO - Added Permission can create on DAG Runs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,898] {manager.py:504} INFO - Created Permission View: can read on DAG Runs
airflow-airflow-init-1  | [2023-10-03 21:32:25,903] {manager.py:562} INFO - Added Permission can read on DAG Runs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,911] {manager.py:504} INFO - Created Permission View: can edit on DAG Runs
airflow-airflow-init-1  | [2023-10-03 21:32:25,916] {manager.py:562} INFO - Added Permission can edit on DAG Runs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,923] {manager.py:504} INFO - Created Permission View: can delete on DAG Runs
airflow-airflow-init-1  | [2023-10-03 21:32:25,928] {manager.py:562} INFO - Added Permission can delete on DAG Runs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,937] {manager.py:504} INFO - Created Permission View: menu access on DAG Runs
airflow-airflow-init-1  | [2023-10-03 21:32:25,942] {manager.py:562} INFO - Added Permission menu access on DAG Runs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,963] {manager.py:504} INFO - Created Permission View: menu access on Browse
airflow-airflow-init-1  | [2023-10-03 21:32:25,969] {manager.py:562} INFO - Added Permission menu access on Browse to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:25,999] {manager.py:504} INFO - Created Permission View: can read on Jobs
airflow-airflow-init-1  | [2023-10-03 21:32:26,005] {manager.py:562} INFO - Added Permission can read on Jobs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,013] {manager.py:504} INFO - Created Permission View: menu access on Jobs
airflow-airflow-init-1  | [2023-10-03 21:32:26,018] {manager.py:562} INFO - Added Permission menu access on Jobs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,061] {manager.py:504} INFO - Created Permission View: can read on Audit Logs
airflow-airflow-init-1  | [2023-10-03 21:32:26,067] {manager.py:562} INFO - Added Permission can read on Audit Logs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,075] {manager.py:504} INFO - Created Permission View: menu access on Audit Logs
airflow-airflow-init-1  | [2023-10-03 21:32:26,080] {manager.py:562} INFO - Added Permission menu access on Audit Logs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,123] {manager.py:504} INFO - Created Permission View: can create on Variables
airflow-airflow-init-1  | [2023-10-03 21:32:26,129] {manager.py:562} INFO - Added Permission can create on Variables to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,136] {manager.py:504} INFO - Created Permission View: can read on Variables
airflow-airflow-init-1  | [2023-10-03 21:32:26,141] {manager.py:562} INFO - Added Permission can read on Variables to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,149] {manager.py:504} INFO - Created Permission View: can edit on Variables
airflow-airflow-init-1  | [2023-10-03 21:32:26,154] {manager.py:562} INFO - Added Permission can edit on Variables to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,161] {manager.py:504} INFO - Created Permission View: can delete on Variables
airflow-airflow-init-1  | [2023-10-03 21:32:26,167] {manager.py:562} INFO - Added Permission can delete on Variables to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,174] {manager.py:504} INFO - Created Permission View: menu access on Variables
airflow-airflow-init-1  | [2023-10-03 21:32:26,179] {manager.py:562} INFO - Added Permission menu access on Variables to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,201] {manager.py:504} INFO - Created Permission View: menu access on Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,207] {manager.py:562} INFO - Added Permission menu access on Admin to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,240] {manager.py:504} INFO - Created Permission View: can create on Task Instances
airflow-airflow-init-1  | [2023-10-03 21:32:26,246] {manager.py:562} INFO - Added Permission can create on Task Instances to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,254] {manager.py:504} INFO - Created Permission View: can read on Task Instances
airflow-airflow-init-1  | [2023-10-03 21:32:26,266] {manager.py:562} INFO - Added Permission can read on Task Instances to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,274] {manager.py:504} INFO - Created Permission View: can edit on Task Instances
airflow-airflow-init-1  | [2023-10-03 21:32:26,280] {manager.py:562} INFO - Added Permission can edit on Task Instances to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,287] {manager.py:504} INFO - Created Permission View: can delete on Task Instances
airflow-airflow-init-1  | [2023-10-03 21:32:26,293] {manager.py:562} INFO - Added Permission can delete on Task Instances to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,300] {manager.py:504} INFO - Created Permission View: menu access on Task Instances
airflow-airflow-init-1  | [2023-10-03 21:32:26,306] {manager.py:562} INFO - Added Permission menu access on Task Instances to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,314] {manager.py:504} INFO - Created Permission View: clear on Task Instances
airflow-airflow-init-1  | [2023-10-03 21:32:26,319] {manager.py:562} INFO - Added Permission clear on Task Instances to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,327] {manager.py:504} INFO - Created Permission View: set failed on Task Instances
airflow-airflow-init-1  | [2023-10-03 21:32:26,332] {manager.py:562} INFO - Added Permission set failed on Task Instances to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,340] {manager.py:504} INFO - Created Permission View: set retry on Task Instances
airflow-airflow-init-1  | [2023-10-03 21:32:26,346] {manager.py:562} INFO - Added Permission set retry on Task Instances to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,353] {manager.py:504} INFO - Created Permission View: set running on Task Instances
airflow-airflow-init-1  | [2023-10-03 21:32:26,359] {manager.py:562} INFO - Added Permission set running on Task Instances to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,367] {manager.py:504} INFO - Created Permission View: set skipped on Task Instances
airflow-airflow-init-1  | [2023-10-03 21:32:26,373] {manager.py:562} INFO - Added Permission set skipped on Task Instances to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,380] {manager.py:504} INFO - Created Permission View: set success on Task Instances
airflow-airflow-init-1  | [2023-10-03 21:32:26,386] {manager.py:562} INFO - Added Permission set success on Task Instances to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,432] {manager.py:504} INFO - Created Permission View: can read on Task Reschedules
airflow-airflow-init-1  | [2023-10-03 21:32:26,438] {manager.py:562} INFO - Added Permission can read on Task Reschedules to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,446] {manager.py:504} INFO - Created Permission View: menu access on Task Reschedules
airflow-airflow-init-1  | [2023-10-03 21:32:26,452] {manager.py:562} INFO - Added Permission menu access on Task Reschedules to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,497] {manager.py:504} INFO - Created Permission View: can read on Triggers
airflow-airflow-init-1  | [2023-10-03 21:32:26,504] {manager.py:562} INFO - Added Permission can read on Triggers to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,512] {manager.py:504} INFO - Created Permission View: menu access on Triggers
airflow-airflow-init-1  | [2023-10-03 21:32:26,518] {manager.py:562} INFO - Added Permission menu access on Triggers to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,547] {manager.py:504} INFO - Created Permission View: can read on Configurations
airflow-airflow-init-1  | [2023-10-03 21:32:26,554] {manager.py:562} INFO - Added Permission can read on Configurations to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,561] {manager.py:504} INFO - Created Permission View: menu access on Configurations
airflow-airflow-init-1  | [2023-10-03 21:32:26,567] {manager.py:562} INFO - Added Permission menu access on Configurations to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,614] {manager.py:504} INFO - Created Permission View: can create on Connections
airflow-airflow-init-1  | [2023-10-03 21:32:26,620] {manager.py:562} INFO - Added Permission can create on Connections to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,628] {manager.py:504} INFO - Created Permission View: can read on Connections
airflow-airflow-init-1  | [2023-10-03 21:32:26,634] {manager.py:562} INFO - Added Permission can read on Connections to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,642] {manager.py:504} INFO - Created Permission View: can edit on Connections
airflow-airflow-init-1  | [2023-10-03 21:32:26,648] {manager.py:562} INFO - Added Permission can edit on Connections to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,656] {manager.py:504} INFO - Created Permission View: can delete on Connections
airflow-airflow-init-1  | [2023-10-03 21:32:26,662] {manager.py:562} INFO - Added Permission can delete on Connections to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,670] {manager.py:504} INFO - Created Permission View: menu access on Connections
airflow-airflow-init-1  | [2023-10-03 21:32:26,676] {manager.py:562} INFO - Added Permission menu access on Connections to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,720] {manager.py:504} INFO - Created Permission View: can read on SLA Misses
airflow-airflow-init-1  | [2023-10-03 21:32:26,727] {manager.py:562} INFO - Added Permission can read on SLA Misses to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,736] {manager.py:504} INFO - Created Permission View: menu access on SLA Misses
airflow-airflow-init-1  | [2023-10-03 21:32:26,742] {manager.py:562} INFO - Added Permission menu access on SLA Misses to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,750] {manager.py:504} INFO - Created Permission View: muldelete on SLA Misses
airflow-airflow-init-1  | [2023-10-03 21:32:26,756] {manager.py:562} INFO - Added Permission muldelete on SLA Misses to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,764] {manager.py:504} INFO - Created Permission View: mulemailsent on SLA Misses
airflow-airflow-init-1  | [2023-10-03 21:32:26,771] {manager.py:562} INFO - Added Permission mulemailsent on SLA Misses to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,778] {manager.py:504} INFO - Created Permission View: mulemailsentfalse on SLA Misses
airflow-airflow-init-1  | [2023-10-03 21:32:26,785] {manager.py:562} INFO - Added Permission mulemailsentfalse on SLA Misses to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,793] {manager.py:504} INFO - Created Permission View: mulnotificationsent on SLA Misses
airflow-airflow-init-1  | [2023-10-03 21:32:26,799] {manager.py:562} INFO - Added Permission mulnotificationsent on SLA Misses to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,807] {manager.py:504} INFO - Created Permission View: mulnotificationsentfalse on SLA Misses
airflow-airflow-init-1  | [2023-10-03 21:32:26,813] {manager.py:562} INFO - Added Permission mulnotificationsentfalse on SLA Misses to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,842] {manager.py:504} INFO - Created Permission View: can read on Plugins
airflow-airflow-init-1  | [2023-10-03 21:32:26,849] {manager.py:562} INFO - Added Permission can read on Plugins to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,857] {manager.py:504} INFO - Created Permission View: menu access on Plugins
airflow-airflow-init-1  | [2023-10-03 21:32:26,864] {manager.py:562} INFO - Added Permission menu access on Plugins to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,893] {manager.py:504} INFO - Created Permission View: can read on Providers
airflow-airflow-init-1  | [2023-10-03 21:32:26,901] {manager.py:562} INFO - Added Permission can read on Providers to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,909] {manager.py:504} INFO - Created Permission View: menu access on Providers
airflow-airflow-init-1  | [2023-10-03 21:32:26,916] {manager.py:562} INFO - Added Permission menu access on Providers to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,961] {manager.py:504} INFO - Created Permission View: can create on Pools
airflow-airflow-init-1  | [2023-10-03 21:32:26,969] {manager.py:562} INFO - Added Permission can create on Pools to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,977] {manager.py:504} INFO - Created Permission View: can read on Pools
airflow-airflow-init-1  | [2023-10-03 21:32:26,984] {manager.py:562} INFO - Added Permission can read on Pools to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:26,992] {manager.py:504} INFO - Created Permission View: can edit on Pools
airflow-airflow-init-1  | [2023-10-03 21:32:26,999] {manager.py:562} INFO - Added Permission can edit on Pools to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:27,007] {manager.py:504} INFO - Created Permission View: can delete on Pools
airflow-airflow-init-1  | [2023-10-03 21:32:27,014] {manager.py:562} INFO - Added Permission can delete on Pools to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:27,021] {manager.py:504} INFO - Created Permission View: menu access on Pools
airflow-airflow-init-1  | [2023-10-03 21:32:27,028] {manager.py:562} INFO - Added Permission menu access on Pools to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:27,075] {manager.py:504} INFO - Created Permission View: can create on XComs
airflow-airflow-init-1  | [2023-10-03 21:32:27,083] {manager.py:562} INFO - Added Permission can create on XComs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:27,091] {manager.py:504} INFO - Created Permission View: can read on XComs
airflow-airflow-init-1  | [2023-10-03 21:32:27,097] {manager.py:562} INFO - Added Permission can read on XComs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:27,105] {manager.py:504} INFO - Created Permission View: can delete on XComs
airflow-airflow-init-1  | [2023-10-03 21:32:27,112] {manager.py:562} INFO - Added Permission can delete on XComs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:27,120] {manager.py:504} INFO - Created Permission View: menu access on XComs
airflow-airflow-init-1  | [2023-10-03 21:32:27,126] {manager.py:562} INFO - Added Permission menu access on XComs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:27,162] {manager.py:504} INFO - Created Permission View: menu access on DAG Dependencies
airflow-airflow-init-1  | [2023-10-03 21:32:27,169] {manager.py:562} INFO - Added Permission menu access on DAG Dependencies to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:27,197] {manager.py:504} INFO - Created Permission View: menu access on DAGs
airflow-airflow-init-1  | [2023-10-03 21:32:27,204] {manager.py:562} INFO - Added Permission menu access on DAGs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:27,218] {manager.py:504} INFO - Created Permission View: menu access on Datasets
airflow-airflow-init-1  | [2023-10-03 21:32:27,225] {manager.py:562} INFO - Added Permission menu access on Datasets to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:27,239] {manager.py:504} INFO - Created Permission View: menu access on Documentation
airflow-airflow-init-1  | [2023-10-03 21:32:27,246] {manager.py:562} INFO - Added Permission menu access on Documentation to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:27,260] {manager.py:504} INFO - Created Permission View: menu access on Docs
airflow-airflow-init-1  | [2023-10-03 21:32:27,267] {manager.py:562} INFO - Added Permission menu access on Docs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:33,480] {providers_manager.py:238} INFO - Optional provider feature disabled when importing 'airflow.providers.google.leveldb.hooks.leveldb.LevelDBHook' from 'apache-airflow-providers-google' package
airflow-airflow-init-1  | /home/airflow/.local/lib/python3.7/site-packages/snowflake/connector/options.py:108 UserWarning: You have an incompatible version of 'pyarrow' installed (9.0.0), please install a version that adheres to: 'pyarrow<10.1.0,>=10.0.1; extra == "pandas"'
airflow-airflow-init-1  | [2023-10-03 21:32:36,274] {providers_manager.py:238} INFO - Optional provider feature disabled when importing 'airflow.providers.google.leveldb.hooks.leveldb.LevelDBHook' from 'apache-airflow-providers-google' package
airflow-airflow-init-1  | [2023-10-03 21:32:37,575] {manager.py:504} INFO - Created Permission View: can read on DAGs
airflow-airflow-init-1  | [2023-10-03 21:32:37,594] {manager.py:504} INFO - Created Permission View: can edit on DAGs
airflow-airflow-init-1  | [2023-10-03 21:32:37,608] {manager.py:504} INFO - Created Permission View: can delete on DAGs
airflow-airflow-init-1  | [2023-10-03 21:32:37,900] {manager.py:504} INFO - Created Permission View: can read on Datasets
airflow-airflow-init-1  | [2023-10-03 21:32:38,000] {manager.py:504} INFO - Created Permission View: can read on ImportError
airflow-airflow-init-1  | [2023-10-03 21:32:38,183] {manager.py:504} INFO - Created Permission View: can read on DAG Code
airflow-airflow-init-1  | [2023-10-03 21:32:38,200] {manager.py:504} INFO - Created Permission View: can read on DAG Warnings
airflow-airflow-init-1  | [2023-10-03 21:32:38,411] {manager.py:243} INFO - Inserted Role: Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,420] {manager.py:562} INFO - Added Permission can read on Audit Logs to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,423] {manager.py:562} INFO - Added Permission can read on DAGs to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,431] {manager.py:504} INFO - Created Permission View: can read on DAG Dependencies
airflow-airflow-init-1  | [2023-10-03 21:32:38,434] {manager.py:562} INFO - Added Permission can read on DAG Dependencies to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,437] {manager.py:562} INFO - Added Permission can read on DAG Code to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,440] {manager.py:562} INFO - Added Permission can read on DAG Runs to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,443] {manager.py:562} INFO - Added Permission can read on Datasets to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,446] {manager.py:562} INFO - Added Permission can read on ImportError to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,448] {manager.py:562} INFO - Added Permission can read on DAG Warnings to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,451] {manager.py:562} INFO - Added Permission can read on Jobs to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,454] {manager.py:562} INFO - Added Permission can read on My Password to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,458] {manager.py:562} INFO - Added Permission can edit on My Password to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,460] {manager.py:562} INFO - Added Permission can read on My Profile to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,463] {manager.py:562} INFO - Added Permission can edit on My Profile to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,466] {manager.py:562} INFO - Added Permission can read on Plugins to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,469] {manager.py:562} INFO - Added Permission can read on SLA Misses to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,472] {manager.py:562} INFO - Added Permission can read on Task Instances to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,480] {manager.py:504} INFO - Created Permission View: can read on Task Logs
airflow-airflow-init-1  | [2023-10-03 21:32:38,483] {manager.py:562} INFO - Added Permission can read on Task Logs to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,486] {manager.py:562} INFO - Added Permission can read on XComs to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,493] {manager.py:504} INFO - Created Permission View: can read on Website
airflow-airflow-init-1  | [2023-10-03 21:32:38,496] {manager.py:562} INFO - Added Permission can read on Website to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,499] {manager.py:562} INFO - Added Permission menu access on Browse to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,502] {manager.py:562} INFO - Added Permission menu access on DAGs to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,505] {manager.py:562} INFO - Added Permission menu access on DAG Dependencies to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,508] {manager.py:562} INFO - Added Permission menu access on DAG Runs to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,511] {manager.py:562} INFO - Added Permission menu access on Datasets to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,514] {manager.py:562} INFO - Added Permission menu access on Documentation to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,517] {manager.py:562} INFO - Added Permission menu access on Docs to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,520] {manager.py:562} INFO - Added Permission menu access on Jobs to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,522] {manager.py:562} INFO - Added Permission menu access on Audit Logs to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,525] {manager.py:562} INFO - Added Permission menu access on Plugins to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,528] {manager.py:562} INFO - Added Permission menu access on SLA Misses to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,531] {manager.py:562} INFO - Added Permission menu access on Task Instances to role Viewer
airflow-airflow-init-1  | [2023-10-03 21:32:38,535] {manager.py:243} INFO - Inserted Role: User
airflow-airflow-init-1  | [2023-10-03 21:32:38,539] {manager.py:562} INFO - Added Permission can read on Audit Logs to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,542] {manager.py:562} INFO - Added Permission can read on DAGs to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,549] {manager.py:562} INFO - Added Permission can read on DAG Dependencies to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,551] {manager.py:562} INFO - Added Permission can read on DAG Code to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,554] {manager.py:562} INFO - Added Permission can read on DAG Runs to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,557] {manager.py:562} INFO - Added Permission can read on Datasets to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,560] {manager.py:562} INFO - Added Permission can read on ImportError to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,563] {manager.py:562} INFO - Added Permission can read on DAG Warnings to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,566] {manager.py:562} INFO - Added Permission can read on Jobs to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,569] {manager.py:562} INFO - Added Permission can read on My Password to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,572] {manager.py:562} INFO - Added Permission can edit on My Password to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,575] {manager.py:562} INFO - Added Permission can read on My Profile to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,578] {manager.py:562} INFO - Added Permission can edit on My Profile to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,581] {manager.py:562} INFO - Added Permission can read on Plugins to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,583] {manager.py:562} INFO - Added Permission can read on SLA Misses to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,586] {manager.py:562} INFO - Added Permission can read on Task Instances to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,594] {manager.py:562} INFO - Added Permission can read on Task Logs to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,597] {manager.py:562} INFO - Added Permission can read on XComs to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,603] {manager.py:562} INFO - Added Permission can read on Website to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,606] {manager.py:562} INFO - Added Permission menu access on Browse to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,609] {manager.py:562} INFO - Added Permission menu access on DAGs to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,612] {manager.py:562} INFO - Added Permission menu access on DAG Dependencies to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,615] {manager.py:562} INFO - Added Permission menu access on DAG Runs to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,618] {manager.py:562} INFO - Added Permission menu access on Datasets to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,621] {manager.py:562} INFO - Added Permission menu access on Documentation to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,624] {manager.py:562} INFO - Added Permission menu access on Docs to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,627] {manager.py:562} INFO - Added Permission menu access on Jobs to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,629] {manager.py:562} INFO - Added Permission menu access on Audit Logs to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,632] {manager.py:562} INFO - Added Permission menu access on Plugins to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,635] {manager.py:562} INFO - Added Permission menu access on SLA Misses to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,638] {manager.py:562} INFO - Added Permission menu access on Task Instances to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,641] {manager.py:562} INFO - Added Permission can edit on DAGs to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,644] {manager.py:562} INFO - Added Permission can delete on DAGs to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,647] {manager.py:562} INFO - Added Permission can create on Task Instances to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,650] {manager.py:562} INFO - Added Permission can edit on Task Instances to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,653] {manager.py:562} INFO - Added Permission can delete on Task Instances to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,655] {manager.py:562} INFO - Added Permission can create on DAG Runs to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,658] {manager.py:562} INFO - Added Permission can edit on DAG Runs to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,661] {manager.py:562} INFO - Added Permission can delete on DAG Runs to role User
airflow-airflow-init-1  | [2023-10-03 21:32:38,665] {manager.py:243} INFO - Inserted Role: Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,670] {manager.py:562} INFO - Added Permission can read on Audit Logs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,673] {manager.py:562} INFO - Added Permission can read on DAGs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,680] {manager.py:562} INFO - Added Permission can read on DAG Dependencies to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,683] {manager.py:562} INFO - Added Permission can read on DAG Code to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,686] {manager.py:562} INFO - Added Permission can read on DAG Runs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,689] {manager.py:562} INFO - Added Permission can read on Datasets to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,692] {manager.py:562} INFO - Added Permission can read on ImportError to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,695] {manager.py:562} INFO - Added Permission can read on DAG Warnings to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,698] {manager.py:562} INFO - Added Permission can read on Jobs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,701] {manager.py:562} INFO - Added Permission can read on My Password to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,704] {manager.py:562} INFO - Added Permission can edit on My Password to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,707] {manager.py:562} INFO - Added Permission can read on My Profile to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,710] {manager.py:562} INFO - Added Permission can edit on My Profile to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,712] {manager.py:562} INFO - Added Permission can read on Plugins to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,715] {manager.py:562} INFO - Added Permission can read on SLA Misses to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,718] {manager.py:562} INFO - Added Permission can read on Task Instances to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,725] {manager.py:562} INFO - Added Permission can read on Task Logs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,728] {manager.py:562} INFO - Added Permission can read on XComs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,735] {manager.py:562} INFO - Added Permission can read on Website to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,738] {manager.py:562} INFO - Added Permission menu access on Browse to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,741] {manager.py:562} INFO - Added Permission menu access on DAGs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,744] {manager.py:562} INFO - Added Permission menu access on DAG Dependencies to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,746] {manager.py:562} INFO - Added Permission menu access on DAG Runs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,749] {manager.py:562} INFO - Added Permission menu access on Datasets to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,752] {manager.py:562} INFO - Added Permission menu access on Documentation to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,756] {manager.py:562} INFO - Added Permission menu access on Docs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,759] {manager.py:562} INFO - Added Permission menu access on Jobs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,762] {manager.py:562} INFO - Added Permission menu access on Audit Logs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,765] {manager.py:562} INFO - Added Permission menu access on Plugins to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,768] {manager.py:562} INFO - Added Permission menu access on SLA Misses to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,770] {manager.py:562} INFO - Added Permission menu access on Task Instances to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,773] {manager.py:562} INFO - Added Permission can edit on DAGs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,776] {manager.py:562} INFO - Added Permission can delete on DAGs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,779] {manager.py:562} INFO - Added Permission can create on Task Instances to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,782] {manager.py:562} INFO - Added Permission can edit on Task Instances to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,785] {manager.py:562} INFO - Added Permission can delete on Task Instances to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,788] {manager.py:562} INFO - Added Permission can create on DAG Runs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,791] {manager.py:562} INFO - Added Permission can edit on DAG Runs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,794] {manager.py:562} INFO - Added Permission can delete on DAG Runs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,796] {manager.py:562} INFO - Added Permission can read on Configurations to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,799] {manager.py:562} INFO - Added Permission menu access on Admin to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,802] {manager.py:562} INFO - Added Permission menu access on Configurations to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,805] {manager.py:562} INFO - Added Permission menu access on Connections to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,808] {manager.py:562} INFO - Added Permission menu access on Pools to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,811] {manager.py:562} INFO - Added Permission menu access on Variables to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,814] {manager.py:562} INFO - Added Permission menu access on XComs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,817] {manager.py:562} INFO - Added Permission can create on Connections to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,820] {manager.py:562} INFO - Added Permission can read on Connections to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,823] {manager.py:562} INFO - Added Permission can edit on Connections to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,826] {manager.py:562} INFO - Added Permission can delete on Connections to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,829] {manager.py:562} INFO - Added Permission can create on Pools to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,832] {manager.py:562} INFO - Added Permission can read on Pools to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,835] {manager.py:562} INFO - Added Permission can edit on Pools to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,838] {manager.py:562} INFO - Added Permission can delete on Pools to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,841] {manager.py:562} INFO - Added Permission can read on Providers to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,844] {manager.py:562} INFO - Added Permission can create on Variables to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,847] {manager.py:562} INFO - Added Permission can read on Variables to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,850] {manager.py:562} INFO - Added Permission can edit on Variables to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,853] {manager.py:562} INFO - Added Permission can delete on Variables to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,856] {manager.py:562} INFO - Added Permission can delete on XComs to role Op
airflow-airflow-init-1  | [2023-10-03 21:32:38,859] {manager.py:562} INFO - Added Permission can read on DAGs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:38,866] {manager.py:562} INFO - Added Permission can read on DAG Dependencies to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:38,869] {manager.py:562} INFO - Added Permission can read on DAG Code to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:38,872] {manager.py:562} INFO - Added Permission can read on Datasets to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:38,876] {manager.py:562} INFO - Added Permission can read on ImportError to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:38,878] {manager.py:562} INFO - Added Permission can read on DAG Warnings to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:38,886] {manager.py:562} INFO - Added Permission can read on Task Logs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:38,892] {manager.py:562} INFO - Added Permission can read on Website to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:38,896] {manager.py:562} INFO - Added Permission can edit on DAGs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:38,899] {manager.py:562} INFO - Added Permission can delete on DAGs to role Admin
airflow-airflow-init-1  | [2023-10-03 21:32:39,148] {manager.py:212} INFO - Added user airflow
airflow-airflow-init-1  | User "airflow" created with role "Admin"
airflow-airflow-init-1  | 2.5.3
airflow-airflow-init-1 exited with code 0
```
</details>
