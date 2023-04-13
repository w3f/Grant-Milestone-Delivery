# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/TREX_Network.md
- **Milestone:** 1
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/NexTokenTech/TREX/blob/2fe18a0327f8c6d77b898e496c8249311a93d725/LICENSE)|  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Documentation](https://github.com/NexTokenTech/trex-doc-md/tree/0e02977b5a1e82926cb974b7f3ef6aa0ae86deb5) |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Node test](https://github.com/NexTokenTech/TREX/tree/2fe18a0327f8c6d77b898e496c8249311a93d725#test), [Key-holder test](https://github.com/NexTokenTech/trex-keyholder/tree/e8708ee0d10eafa9eb7d2704c31dadf159488a15#unit-test) |  |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Docker for TREX node](https://github.com/NexTokenTech/TREX/blob/2fe18a0327f8c6d77b898e496c8249311a93d725/docker-compose.yml)|  |
| 0e. | Article | <ul><li>[x] </li></ul> | [Article](https://github.com/NexTokenTech/trex-doc-md) |  |
| 1. | TREX key-holder (off-chain worker) | <ul><li>[x] </li></ul> | [Key-holder](https://github.com/NexTokenTech/trex-keyholder/tree/e8708ee0d10eafa9eb7d2704c31dadf159488a15) |  |
| 2. | TREX node | <ul><li>[x] </li></ul> | [TREX node](https://github.com/NexTokenTech/TREX/tree/2fe18a0327f8c6d77b898e496c8249311a93d725) |  |
| 3. | CLI tool | <ul><li>[x] </li></ul> | [Key-holder CLI](https://github.com/NexTokenTech/trex-keyholder/tree/e8708ee0d10eafa9eb7d2704c31dadf159488a15#cli-tool), [TREX account CLI](https://github.com/NexTokenTech/trex-account-funds/tree/e6531a02af4907e4c6f4775028363e293f6c73eb)|  |
<br/>

## General Notes v1 - Mar 8, 2023

The setup has been a bit challenging because of some misconfigurations, but the team fixed the docker files and the READMEs, so in the end the setup became easier.

The easier and only way to test (manually) the pallets is using the key-holder CLI tool. You can use it and see the results both in the console and in the PolkadotJS UI.