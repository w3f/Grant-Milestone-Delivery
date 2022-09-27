# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-explorer.md
- **Milestone:** 1
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ----- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/blockcoders/ink-substrate-explorer-api/blob/2923a524795489f0b884d3e90d5e4c5760d68e5c/LICENSE) | MIT License, Ok |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [English](https://github.com/blockcoders/ink-substrate-explorer-api/blob/2923a524795489f0b884d3e90d5e4c5760d68e5c/README.md), [Spanish](https://github.com/blockcoders/ink-substrate-explorer-api/blob/2923a524795489f0b884d3e90d5e4c5760d68e5c/README-es.md) | View **General Notes** |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | Inside [README](https://github.com/blockcoders/ink-substrate-explorer-api#test) | View **General Notes** |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/blockcoders/ink-substrate-explorer-api/blob/2923a524795489f0b884d3e90d5e4c5760d68e5c/Dockerfile) | - |
| 1. | Create database | <ul><li>[x] </li></ul> | Inside [docker-compose.yaml](https://github.com/blockcoders/ink-substrate-explorer-api/blob/2923a524795489f0b884d3e90d5e4c5760d68e5c/docker-compose.yaml#L26-L38) file | - |
| 2. | Backend service | <ul><li>[x] </li></ul> | [src](https://github.com/blockcoders/ink-substrate-explorer-api/tree/2923a524795489f0b884d3e90d5e4c5760d68e5c/src) Directory | - |
| 3. | API | <ul><li>[ ] </li></ul> | [schema.graphql](https://github.com/blockcoders/ink-substrate-explorer-api/blob/2923a524795489f0b884d3e90d5e4c5760d68e5c/src/schema.graphql) File | View **General Notes** |
| 4. | Testing | <ul><li>[ ] </li></ul> | Refer to Documentation, or use [GitHub Actions](https://github.com/blockcoders/ink-substrate-explorer-api/actions/runs/3070814266/jobs/4960918723) | View **General Notes** |

## General Notes

In the [application document](https://github.com/w3f/Grants-Program/blob/75aab22ea225b0e58c53916d8b53f790e06ed9ae/applications/ink-explorer.md), **Deliverable 0e. Article** can be found (it is a Twitter post). Maybe it hasn't been included because it's not been published yet. 
Overall, the software and tests work fine. Documentation is well written, but it could be improved a bit more.

### 0b. Documentation
- In the **[Running the Back-end service Docker image](https://github.com/blockcoders/ink-substrate-explorer-api#running-the-back-end-service-docker-image)** section, I manage to pull the docker image, but when I run the docker, I get the error: ```docker: Error response from daemon: network ink-explorer-network not found.```, and I can't understand what I am missing (I correctly set the .env path);
- When it is [stated](https://github.com/blockcoders/ink-substrate-explorer-api#start-a-postgres-db-using-docker-optional) how to run (optionally) the Postgres DB and the Substrate Node, and then start the project in ```dev``` or ```prod```, I'd reformulate a bit: maybe it would be better to define two subsections, "Run in Dev" (with optional things and the websocket endpoint) and "Run in Prod" (which just needs the ```docker-compose up -d``` command); this is just an idea, but I think it would be more precise (or, alternatively, try to clarify a bit this point without altering the structure);

Other than this, the documentation is well-written and clear. I managed to run the project in ```dev``` mode, changing the websocket (DB is empty in this case), and in ```prod``` mode (with Rococo RPC). In this last case, I could see the DB tables with the data (blocks, contracts, and so on).

### 0c. Testing Guide
The two commands needed to run tests (```pnpm test``` and ```pnpm test:cov```) are reported; however, I'd add something to the guide:
- how to setup the database on pgAdmin, and optionally how to see if DB is empty or not;
- how to execute queries to test the API with GraphQL, using the example queries you provided in the documentation.

### 3. API
Before accepting the API delivery, I'd like to see a minimum guide on how to test it quickly.

### 4. Testing
- In file ```/src/events/events.service.spec.ts```, the test ```decodeEvents > should return decoded event``` (line 80) is skipped. If you confirm it is not relevant, Testing delivery will be accepted;
- Test coverage is really high, great job (>90% on every file, just ten uncovered lines in the whole project)!