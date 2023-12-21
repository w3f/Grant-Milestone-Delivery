# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/fidi-dotsight-analytics.md
- **Milestone:** 3
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight/blob/main/LICENSE) | |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [LINK](https://docs.fidi.tech/dotsight-library/dotsight-overview) | |
| **0c.** | Testing | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight/blob/main/src/pipelines/pipelines.controller.spec.ts) | |
| **1a.** | dApp-level signals | <ul><li>[x] </li></ul> | [LINK](https://docs.fidi.tech/dotsight-library/supported-metrics-types) | |
| **1b.** | Online testing & deployment | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight-ui/blob/main/src/features/PipelineExecution/ui/index.tsx) |  |
| **2a.** | Deployment validation & View status | <ul><li>[x] </li></ul> | [LINK](https://github.com/fidi-tech/dotsight-ui/blob/main/src/features/PipelineExecution/ui/index.tsx) |  |
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
