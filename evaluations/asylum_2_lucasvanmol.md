# Evaluations

- **Status:** Accepted
- **Application Document:** [Asylum](https://github.com/w3f/Grants-Program/tree/master/applications/asylum.md). 
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/blob/2fa9e0bc6c5977559cb437db9cfa49cb73718495/evaluations/asylum_1_semuelle.md


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [Asylum UI](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/LICENSE), [Asylum Item NFT](https://gitlab.com/asylum-space/asylum-item-nft/-/blob/main/LICENSE), [Asylum Unity SDK](https://gitlab.com/asylum-space/asylum-unity-sdk/-/blob/main/LICENSE) | MIT | 
| 0b. | Documentation |<ul><li>[x] </li></ul>| - | Good READMEs after revision, decent inline documentation when it feels necessary | 
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| [Testing Guide](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/packages/game-developers-console/docs/testing-guide-approval-process.md) | Clear guide, everything working first try. | 
| 0d. | Docker |<ul><li>[x] </li></ul>| [Run Game Developers Console (Docker setup)](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/packages/game-developers-console/README.md#run-game-developers-console-docker-setup) | Works |
| 0e. | Article |<ul><li>[x] </li></ul>| - | N/A |
|1.| Web application |<ul><li>[x] </li></ul>| [Merge Request with added features](https://gitlab.com/asylum-space/asylum-ui/-/merge_requests/29) | Unity WebGL games work as expected |
|2. | Unity Integration |<ul><li>[x] </li></ul>| [Asylum Unity SDK](https://gitlab.com/asylum-space/asylum-unity-sdk), [Asylum Unity SDK Example](https://gitlab.com/asylum-space/asylum-unity-sdk-example) | Initially documentation was lacking, but after requested changes, the documentation is extensive and an example project was added. |
|3. | Game A |<ul><li>[x] </li></ul>| [Testing Guide: Step 3](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/packages/game-developers-console/docs/testing-guide-approval-process.md#step-3-using-items-in-game), [Game WebGL build](https://gitlab.com/asylum-space/asylum-ui/-/tree/main/packages/connection-library/data) | Works great as a proof of concept of minting items and using them in-game. |


## General Notes

Initially ran into problems with the Unity SDK not working for the latest LTS unity version (`2021.3.5f1` as of writing). It turns out version `2021.3.1f` is required, and the team has said they'll look into possible fixes to get the SDK working for LTS.

Documentation for the SDK was also added & improved after changes were requested, along with an example project.

The rest of the project worked smoothly.