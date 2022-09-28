# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-explorer.md
- **Milestone:** 1
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ----- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/blockcoders/ink-substrate-explorer-api/blob/e98a28d4283fbe37ab197419195043b0f2e4ce76/LICENSE) | MIT License, Ok |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [English](https://github.com/blockcoders/ink-substrate-explorer-api/blob/e98a28d4283fbe37ab197419195043b0f2e4ce76/README.md), [Spanish](https://github.com/blockcoders/ink-substrate-explorer-api/blob/e98a28d4283fbe37ab197419195043b0f2e4ce76/README-es.md) | View **General Notes** |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | Inside [README](https://github.com/blockcoders/ink-substrate-explorer-api#test) | View **General Notes** |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/blockcoders/ink-substrate-explorer-api/blob/e98a28d4283fbe37ab197419195043b0f2e4ce76/Dockerfile) | - |
| 1. | Create database | <ul><li>[x] </li></ul> | Inside [docker-compose.yaml](https://github.com/blockcoders/ink-substrate-explorer-api/blob/e98a28d4283fbe37ab197419195043b0f2e4ce76/docker-compose.yaml#L26-L38) file | - |
| 2. | Backend service | <ul><li>[x] </li></ul> | [src](https://github.com/blockcoders/ink-substrate-explorer-api/tree/e98a28d4283fbe37ab197419195043b0f2e4ce76/src) Directory | - |
| 3. | API | <ul><li>[ ] </li></ul> | [schema.graphql](https://github.com/blockcoders/ink-substrate-explorer-api/blob/e98a28d4283fbe37ab197419195043b0f2e4ce76/src/schema.graphql) File | View **General Notes** |
| 4. | Testing | <ul><li>[x] </li></ul> | Refer to Documentation, or use [GitHub Actions](https://github.com/blockcoders/ink-substrate-explorer-api/actions/runs/3070814266/jobs/4960918723) | View **General Notes** |

## General Notes
- The **documentation** is well written and precise; the team has improved it since the first evaluation;
- Same thing for the **testing guide**: it now contains a description for back-end test execution, database creation in pgAdmin, and API interaction through GraphQL queries.
- **Test coverage** is really high, great job (>90% on every file, just ten uncovered lines in the whole project)! One test was skipped in the previous commit, but in [e98a28d](https://github.com/blockcoders/ink-substrate-explorer-api/commit/e98a28d4283fbe37ab197419195043b0f2e4ce76) team fixed it.
- **API** will be accepted as soon as we manage to execute the back-end service (that opens the port ```5000``` for GraphQL interaction) 
- In the [application document](https://github.com/w3f/Grants-Program/blob/75aab22ea225b0e58c53916d8b53f790e06ed9ae/applications/ink-explorer.md), **Deliverable 0e. Article** can be found (it is a Twitter post). It will be published [after this Grant will be completed](https://github.com/w3f/Grant-Milestone-Delivery/pull/570#issuecomment-1259426090).

The other services run correctly, which is visible also thanks to the help of pgAdmin (we can see blocks and transactions in the database if Rococo RPC is set).

### 0b. Documentation
In the **[Running the Back-end service Docker image](https://github.com/blockcoders/ink-substrate-explorer-api#running-the-back-end-service-docker-image)** section, I manage to pull the docker image, but when I run the docker, I get the error: ```docker: Error response from daemon: network ink-explorer-network not found.```.

To fix this error, run the command ```docker network create ink-explorer-network```.

After the fix, another error prevented the docker image from running:
```
> ink-substrate-explorer-api@1.0.0-alpha.1 start:prod
> node dist/src/main

@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	cjs 10.1.6	node_modules/.pnpm/@polkadot+util@10.1.6/node_modules/@polkadot/util/cjs
	cjs 10.1.2	node_modules/.pnpm/@polkadot+util@10.1.2/node_modules/@polkadot/util/cjs
[Nest] 18  - 09/28/2022, 8:48:24 AM     LOG [NestFactory] Starting Nest application...
[Nest] 18  - 09/28/2022, 8:48:24 AM     LOG [InstanceLoader] DBModule dependencies initialized +65ms
[Nest] 18  - 09/28/2022, 8:48:24 AM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 18  - 09/28/2022, 8:48:24 AM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +1ms
[Nest] 18  - 09/28/2022, 8:48:24 AM     LOG [InstanceLoader] ConfigModule dependencies initialized +1ms
[Nest] 18  - 09/28/2022, 8:48:24 AM     LOG [InstanceLoader] EnvModule dependencies initialized +1ms
[Nest] 18  - 09/28/2022, 8:48:24 AM     LOG [InstanceLoader] GraphQLSchemaBuilderModule dependencies initialized +0ms
[Nest] 18  - 09/28/2022, 8:48:24 AM   ERROR [ExceptionHandler] unable to determine transport target for "pino-pretty"
Error: unable to determine transport target for "pino-pretty"
    at fixTarget (/usr/src/app/node_modules/.pnpm/pino@8.3.1/node_modules/pino/lib/transport.js:136:13)
    at transport (/usr/src/app/node_modules/.pnpm/pino@8.3.1/node_modules/pino/lib/transport.js:110:22)
    at normalizeArgs (/usr/src/app/node_modules/.pnpm/pino@8.3.1/node_modules/pino/lib/tools.js:291:16)
    at pino (/usr/src/app/node_modules/.pnpm/pino@8.3.1/node_modules/pino/pino.js:84:28)
    at new PinoLogger (/usr/src/app/node_modules/.pnpm/nestjs-pino@3.1.1_isil7xagyf5s32dueim4ljgsga/node_modules/nestjs-pino/PinoLogger.js:45:51)
    at Injector.instantiateClass (/usr/src/app/node_modules/.pnpm/@nestjs+core@8.4.7_zyw32gfu5yv6lfoz64j5eiekme/node_modules/@nestjs/core/injector/injector.js:330:19)
    at callback (/usr/src/app/node_modules/.pnpm/@nestjs+core@8.4.7_zyw32gfu5yv6lfoz64j5eiekme/node_modules/@nestjs/core/injector/injector.js:48:41)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async Injector.resolveConstructorParams (/usr/src/app/node_modules/.pnpm/@nestjs+core@8.4.7_zyw32gfu5yv6lfoz64j5eiekme/node_modules/@nestjs/core/injector/injector.js:122:24)
    at async Injector.loadInstance (/usr/src/app/node_modules/.pnpm/@nestjs+core@8.4.7_zyw32gfu5yv6lfoz64j5eiekme/node_modules/@nestjs/core/injector/injector.js:52:9)
```
The error is about **pino-pretty**, a logger for Node.js. I'm sure it's an error on my end, but I can't fix it and run the docker image.
