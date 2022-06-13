# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Asylum](https://github.com/w3f/Grants-Program/tree/master/applications/asylum.md).
* **Milestone Number:** 2

**Context**

The second milestone covers:
 - integration of Asylum NFTs into the game client via Asylum Unity SDK;
 - web app covers minting NFTs and the ability to run a game client, which utilizes these NFTs.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [Asylum UI](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/LICENSE), [Asylum Item NFT](https://gitlab.com/asylum-space/asylum-item-nft/-/blob/main/LICENSE), [Asylum Unity SDK](https://gitlab.com/asylum-space/asylum-unity-sdk/-/blob/main/LICENSE) | All Asylum projects have MIT license| 
| 0b. | Documentation | - | - | 
| 0c. | Testing Guide | [Testing Guide](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/packages/game-developers-console/docs/testing-guide-approval-process.md) | Guide on how to mint Items from templates and use them in game client | 
| 0d. | Docker | [Run Game Developers Console (Docker setup)](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/packages/game-developers-console/README.md#run-game-developers-console-docker-setup) | We provided Docker file for [Asylum UI](https://gitlab.com/asylum-space/asylum-ui) and [Asylum Item NFT](https://gitlab.com/asylum-space/asylum-item-nft) along with guide how to run Web App in Docker |
| 0e. | Article | - | - |
|1.| Web application | [Merge Request with added features](https://gitlab.com/asylum-space/asylum-ui/-/merge_requests/29) | Web App was extended with Items minting and ability to run Unity WebGL build and play with minter Items |
|2. | Unity Integration | [Asylum Unity SDK](https://gitlab.com/asylum-space/asylum-unity-sdk) | Unity plugin and jslib, which helps to operate with [Asylum Standard NFTs](https://gitlab.com/asylum-space/asylum-standards/-/tree/main/standards/asylum0.1) and initialize in-game items |
|3. | Game A | [Testing Guide: Step 3](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/packages/game-developers-console/docs/testing-guide-approval-process.md#step-3-using-items-in-game), [Game WebGL build](https://gitlab.com/asylum-space/asylum-ui/-/tree/main/packages/connection-library/data) | We developed 2D platformer based on paid assets, which utilizes Asylum Standard NFTs and our Unity SDK and allows us to use these NFTs in gameplay. We cannot provide the link to the assets source code according to the asset usage policy, but we're attaching the final wasm build. |
