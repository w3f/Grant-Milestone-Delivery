# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-explorer.md
- **Milestone:** 2
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/blockcoders/ink-substrate-explorer-frontend/blob/bd0b2b3153689d3803c2c9c7d7b4024d216117a3/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README.md](https://github.com/blockcoders/ink-substrate-explorer-frontend/blob/bd0b2b3153689d3803c2c9c7d7b4024d216117a3/README.md), [README-es.md](https://github.com/blockcoders/ink-substrate-explorer-frontend/blob/bd0b2b3153689d3803c2c9c7d7b4024d216117a3/README-es.md) | See **General Notes** |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [README.md#testing](https://github.com/blockcoders/ink-substrate-explorer-frontend/tree/bd0b2b3153689d3803c2c9c7d7b4024d216117a3#testing) | - |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/blockcoders/ink-substrate-explorer-frontend/tree/bd0b2b3153689d3803c2c9c7d7b4024d216117a3/Dockerfile) | - |
| 0e. | Article | <ul><li>[x] </li></ul> | [Google Docs draft document](https://docs.google.com/document/d/1jFJZGC26lBJbEEJUmJeQKEbOeXz9w4CypohX23npOaI/edit?usp=sharing) | - |
| 1. | Create App | <ul><li>[x] </li></ul> | [/pages](https://github.com/blockcoders/ink-substrate-explorer-frontend/tree/bd0b2b3153689d3803c2c9c7d7b4024d216117a3/pages) | See **General Notes** |
| 2. | Spanish language | <ul><li>[x] </li></ul> | - | - |  
| 4. | Testing | <ul><li>[x] </li></ul> | [Coveralis](https://coveralls.io/builds/54354351) | - |
| 4. | Final setups | <ul><li>[x] </li></ul> | [DockerHub](https://hub.docker.com/repository/docker/blockcoders/ink-substrate-explorer-frontend) | - |
| 5. | Deploy the app | <ul><li>[x] </li></ul> | [Website](https://ink-explorer.blockcoders.io/) | - |
<br/>

## General Notes v1 - Nov 25, 2022
At first, the **backend** and **frontend** services didn't run properly, but the team fixed it in commit [bd0b2b3](https://github.com/blockcoders/ink-substrate-explorer-frontend/commit/bd0b2b3153689d3803c2c9c7d7b4024d216117a3).

In the end, I managed to run the frontend both with the `pnpm start:dev` command and the docker version. The whole application already works really well. The tests cover well the entire codebase, and the documentation explains well how to setup it locally. Below I suggest some minor things for the documentation and UI.

### 0b. Documentation
I'd just add the following things:
- At the end of the docs, there is written **Apache 2.0** for the license, but actually it's **MIT**
- I'd edit the **Configure the environment variables** section with the new values you changed in commit [bd0b2b3](https://github.com/blockcoders/ink-substrate-explorer-frontend/commit/bd0b2b3153689d3803c2c9c7d7b4024d216117a3)
- I'd add the tips of [this](https://github.com/w3f/Grant-Milestone-Delivery/pull/627#issuecomment-1326814474) comment (how to choose the right value for **WS_PROVIDER**)

### 1. Create App
Some UI considerations, obviously these are just tips, and feel free to do whatever you want with the dapp:
- I'd let just one menu Blocks/Transactions/Contracts (not both in the sidebar and the body)
- Chronologically sort the contracts on the **Contracts** page
- For the language switch micro-menu, I'd put clickable the whole row and not just the word
- In the **Block** page, the **B** in the title is lowercase (should be uppercase)
