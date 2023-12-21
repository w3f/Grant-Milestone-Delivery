# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/fidi-dotsight-analytics.md
- **Milestone:** 3
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight/blob/main/LICENSE) | |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [LINK](https://docs.fidi.tech/dotsight-library/dotsight-overview) | |
| **0c.** | Testing | <ul><li>[ ] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight/blob/main/src/pipelines/pipelines.controller.spec.ts) | |
| **1a.** | dApp-level signals | <ul><li>[x] </li></ul> | [LINK](https://docs.fidi.tech/dotsight-library/supported-metrics-types) | |
| **1b.** | Online testing & deployment | <ul><li>[ ] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight-ui/blob/main/src/features/PipelineExecution/ui/index.tsx) |  |
| **2a.** | Deployment validation & View status | <ul><li>[ ] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight-ui/blob/main/src/features/PipelineExecution/ui/index.tsx) |  |
| **2b.** | Automated and ad-hoc deployment | <ul><li>[x] </li></ul> | [Docs](https://docs.fidi.tech/dotsight-library/developer-guide)[ Data Service](https://github.com/fidi-tech/dotsight/blob/main/README.md#quick-start) [UI](https://github.com/fidi-tech/dotsight-ui)|  |
| **2c.** | Data interface: view construction | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight-ui/blob/main/src/features/widgetTypeSelector/ui/index.tsx) |  |
| **2d.** | Data interface: Deployment | <ul><li>[x] </li></ul> | [LINK](https://docs.fidi.tech/code-free-analytics/widgets-collection) |  |

# General Notes

The Docker container runs successfully:
```sh
docker compose up -d

[+] Running 15/15
 ✔ db 14 layers [⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                                                             13.5s
   ✔ 24e221e92a36 Pull complete                                                                                      3.5s
   ✔ 85b20a3ade36 Pull complete                                                                                      0.9s
   ✔ dfccb87eabcd Pull complete                                                                                      1.4s
   ✔ c2b36c21cfca Pull complete                                                                                      2.2s
   ✔ b6773915c6e6 Pull complete                                                                                      5.4s
   ✔ 0f1622bae22c Pull complete                                                                                      3.8s
   ✔ 1fa0f3ae7f27 Pull complete                                                                                      3.9s
   ✔ 90e24ee29327 Pull complete                                                                                      4.2s
   ✔ 5b5e3d50b597 Pull complete                                                                                     10.1s
   ✔ 0109b546d717 Pull complete                                                                                      4.6s
   ✔ 77071f9d5376 Pull complete                                                                                      5.6s
   ✔ a03caa73b840 Pull complete                                                                                      6.6s
   ✔ 70606bcdcc01 Pull complete                                                                                      6.6s
   ✔ 9911f6f158a5 Pull complete                                                                                      7.3s
[+] Running 2/2
 ✔ Network dotsight_default  Created                                                                                 0.0s
 ✔ Container dotsight-db-1   Started                                                                                 0.7s
docker ps
CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS          PORTS                    NAMES
2f6180b1d0b5   postgres:16   "docker-entrypoint.s…"   15 seconds ago   Up 14 seconds   0.0.0.0:5433->5432/tcp   dotsight-db-1
```
But still getting an error when running the first command:
```ts
npm run typeorm:run-migrations

> @fidi/dotsight@0.0.1 typeorm:run-migrations
> npm run typeorm -- migration:run -d ./typeorm.config.ts


> @fidi/dotsight@0.0.1 typeorm
> ts-node ./node_modules/typeorm/cli migration:run -d ./typeorm.config.ts

Error during migration run:
Error: getaddrinfo ENOTFOUND dotsight
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:71:26) {
  errno: -3008,
  code: 'ENOTFOUND',
  syscall: 'getaddrinfo',
  hostname: 'dotsight'
}
```
```ts
npm start

> @fidi/dotsight@0.0.1 start
> nest start

[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [NestFactory] Starting Nest application...
[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [InstanceLoader] AppModule dependencies initialized +13ms
[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [InstanceLoader] MixersModule dependencies initialized +0ms
[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [InstanceLoader] MiddlewaresModule dependencies initialized +0ms
[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [InstanceLoader] HttpModule dependencies initialized +0ms
[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [InstanceLoader] JwtModule dependencies initialized +0ms
[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
[Nest] 7404  - 12/21/2023, 2:00:34 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +1ms
[Nest] 7404  - 12/21/2023, 2:00:34 PM   ERROR [TypeOrmModule] Unable to connect to the database. Retrying (1)...
Error: getaddrinfo ENOTFOUND dotsight
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:71:26)
[Nest] 7404  - 12/21/2023, 2:00:37 PM   ERROR [TypeOrmModule] Unable to connect to the database. Retrying (2)...
Error: getaddrinfo ENOTFOUND dotsight
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:71:26)
```
My .env file looks like this:
```
DB_HOST=dotsight
DB_PORT=5433
DB_NAME=dotsight
DB_USERNAME=dotsight
DB_PASSWORD=d0tS1gHtRul3z
JWT_SECRET=secret-jwt
SESSION_SECRET=some-secret
UI_HOST=http://localhost:3001
```
# UI

App starts successfully:
```ts
npm run build

> my-app@0.1.0 build
> next build

(node:9491) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 ✓ Creating an optimized production build
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
   Collecting page data  ..(node:9533) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9532) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9540) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9544) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9542) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9543) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9541) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 ✓ Collecting page data
   Generating static pages (0/6)  [    ](node:9546) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9535) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9545) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9545) ExperimentalWarning: buffer.Blob is an experimental feature. This feature could change at any time
(node:9534) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 ✓ Generating static pages (6/6)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    1.14 kB         132 kB
├ ○ /_not-found                          885 B          81.6 kB
├ ○ /login                               8 kB           88.7 kB
└ λ /pipeline/[id]                       351 kB          482 kB
+ First Load JS shared by all            80.7 kB
  ├ chunks/864-38e210505956e733.js       27.6 kB
  ├ chunks/fd9d1056-24a81e82ede0df4d.js  51 kB
  ├ chunks/main-app-4b29246d184fa03c.js  240 B
  └ chunks/webpack-14ce02176bb4ae81.js   1.91 kB


λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
```
```ts
npm start

> my-app@0.1.0 start
> next start -p 3001

(node:9732) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
  ▲ Next.js 13.5.4
  - Local:        http://localhost:3001

 ✓ Ready in 108ms
```
