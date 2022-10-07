# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-explorer.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by Keeganquigley

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ----- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/blockcoders/ink-substrate-explorer-api/blob/2923a524795489f0b884d3e90d5e4c5760d68e5c/LICENSE) | MIT |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [English](https://github.com/blockcoders/ink-substrate-explorer-api/blob/2923a524795489f0b884d3e90d5e4c5760d68e5c/README.md), [Spanish](https://github.com/blockcoders/ink-substrate-explorer-api/blob/2923a524795489f0b884d3e90d5e4c5760d68e5c/README-es.md) | View **General Notes** |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | Inside [README](https://github.com/blockcoders/ink-substrate-explorer-api#test) | View **General Notes** |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/blockcoders/ink-substrate-explorer-api/blob/2923a524795489f0b884d3e90d5e4c5760d68e5c/Dockerfile) | Successfully builds 3 containers, `backend-1`, `postgres-1`, `pgadmin-1` |
| 1. | Create database | <ul><li>[x] </li></ul> | Inside [docker-compose.yaml](https://github.com/blockcoders/ink-substrate-explorer-api/blob/2923a524795489f0b884d3e90d5e4c5760d68e5c/docker-compose.yaml#L26-L38) file | ok |
| 2. | Backend service | <ul><li>[x] </li></ul> | [src](https://github.com/blockcoders/ink-substrate-explorer-api/tree/2923a524795489f0b884d3e90d5e4c5760d68e5c/src) Directory | ok |
| 3. | API | <ul><li>[x] </li></ul> | [schema.graphql](https://github.com/blockcoders/ink-substrate-explorer-api/blob/2923a524795489f0b884d3e90d5e4c5760d68e5c/src/schema.graphql) File | works with GraphQL |
| 4. | Testing | <ul><li>[x] </li></ul> | Refer to Documentation, or use [GitHub Actions](https://github.com/blockcoders/ink-substrate-explorer-api/actions/runs/3070814266/jobs/4960918723) | Tests pass successfully in Github actions |

## General Notes

**Documentation**

The docs are a bit confusing. I would recommend rewording these to make it more clear what commands are needed for `prod` vs `dev`  and which are required vs. optional. For example, you say that "to start the project a PostgreSQL DB is needed". If it is needed, than why is it optional? Same with the optional local substrate node. I had to fumble a bit to figure out config.

Also, in both the "optional" steps you have this same Docker command twice `docker-compose -f dev-docker-compose.yaml up -d` which sets up all three containers anyway, so I'm not sure how these steps are different.

**Testing Guide**

Currently getting a connection error when running `pnpm start:dev`to connect to the postgres DB and start the service. UPDATE: Step is not needed since docker-compose up -d starts the backend. Running `pnpm backend:logs` shows that the backend successfully connects to both a local substrate node as well as the Rococo chain.

-Unit tests all pass. 

-Cov tests show above 90% coverage.

-Successful run in [Github Actions](https://github.com/keeganquigley/ink-substrate-explorer-api/actions/runs/3200765606/jobs/5228044036).
