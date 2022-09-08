# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Asylum](https://github.com/w3f/Grants-Program/blob/master/applications/asylum_follow_up_1.md).
* **Milestone Number:** 3

Context

The third milestone covers:
 - upgrade Asylum Unity SDK to work in Unity Play Mode and Standalone build (with the help of substrate client of AjunaSDK);
 - implementation of Unity Editor extension;
 - implementation of a 3D game, which utilizes Asylum features;
 - Creators studio functionality was extended - blueprint patterns added.


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a.    | License |  [Asylum UI](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/LICENSE), [Asylum Node](https://gitlab.com/asylum-space/asylum-item-nft/-/blob/main/LICENSE), [Asylum Unity SDK](https://gitlab.com/asylum-space/asylum-unity-sdk/-/blob/main/LICENSE) | All Asylum projects except games have MIT license |
| 0b.    |  Documentation | [Unity SDK](https://gitlab.com/asylum-space/asylum-unity-sdk/-/tree/main/Docs)| Improved documentation for Unity SDK, describe new features with managing 3D items and items drop |
| 0c.    | Testing Guide | [Testing Guide](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/docs/testing-guide-patterns.md) | Guide through the interoperability of game mechanics between two games and association of Blueprints with in-game items, specified by Game Client |
| 0d.    | Docker | - | Current Docker setup doesn't require additional changes |
| 0e.    | Article | - | - |
| 1.     | Unity SDK | [Asylum Unity SDK Documentation](https://gitlab.com/asylum-space/asylum-unity-sdk/-/blob/main/README.md) | Main updates in Unity SDK: support of Standalone mode and Unity Play Mode,  editor extension for Unity SDK, async assets loading |
| 1.1    | Unity SDK | [Unity SDK](https://gitlab.com/asylum-space/asylum-unity-sdk/-/commit/dc5f18fbace0b6051e14b396a2191e851c8bcfa8), [Ajuna NetApi Extension for Asylum](https://gitlab.com/asylum-space/asylum-net-api)| Implemented the ability to use Unity SDK in Standalone mode (without React build). We utilized Ajuna Unity SubstrateClient and integrated it with Asylum pallets. |
| 1.2    | Unity SDK | [Unity Editor Extension](https://gitlab.com/asylum-space/asylum-unity-sdk/-/blob/main/AsylumSDK/AsylumPlugin.cs) | Implemented Unity Editor Extension to operate with Asylum pallets in Editor mode. This is the first iteration of the editor extension. Developer can connect to the Asylum chain, query Asylum entities, and mint Asylum Items. |
| 1.3    | Unity SDK | [React](https://gitlab.com/asylum-space/asylum-unity-sdk/-/blob/main/AsylumSDK/ReactClient.cs), [Standalone](https://gitlab.com/asylum-space/asylum-unity-sdk/-/blob/main/AsylumSDK/StandaloneClient.cs) | Refactored Unity SDK to support both use cases: inside React app and Standalone mode. |
| 1.4    | Unity SDK | [UML diagram](https://gitlab.com/asylum-space/asylum-unity-sdk/-/blob/main/Docs/img/UML.png) | Implemented UML Class diagram of Unity SDK high-level classes |
| 1.5    | Unity SDK | [Async assets loading](https://gitlab.com/asylum-space/asylum-unity-sdk/-/blob/main/AsylumSDK/AsylumInterpretationAsyncHandler.cs) | Implemented asynchronous assets loading to reduce lags during the game |
| 1.6    | Unity SDK | [Editor extension](https://gitlab.com/asylum-space/asylum-unity-sdk/-/blob/main/Docs/AsylumPluginEditor.md), [React](https://gitlab.com/asylum-space/asylum-unity-sdk/-/blob/main/Docs/ReactClient.md), [Standalone](https://gitlab.com/asylum-space/asylum-unity-sdk/-/blob/main/Docs/StandaloneClient.md) | Improved Unity SDK example documentation: description of two possible usages of the plugin (inside React and Standalone mode), a guide on editor extension usage |
| 2.     | 3D Game | - | We can't provide 3D game source code because of licensed game assets, which we use. We attached a link to the game build here. You can run it in Creator Studio or Standalone mode |
| 2.1    | 3D Game | [3D Game build](https://gitlab.com/asylum-space/asylum-ui/-/tree/main/packages/connection-library/data/dark-forest), [Testing guide](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/docs/testing-guide-patterns.md#verification) | Implemented a 3D Diablo-like game in Unity 3D, which utilizes Unity SDK |
| 2.2    | 3D Game | [3D Game build](https://gitlab.com/asylum-space/asylum-ui/-/tree/main/packages/connection-library/data/dark-forest), [Testing guide](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/docs/testing-guide-patterns.md#verification) | Implemented the ability to parse and render GLB/GLTF 3D models |
| 2.3    | 3D Game | [3D Game build](https://gitlab.com/asylum-space/asylum-ui/-/tree/main/packages/connection-library/data/dark-forest), [Testing guide](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/docs/testing-guide-patterns.md#verification) | Implemented the ability to render 3D animation and effects based on Tags and Interpretations |
| 2.4    | 3D Game | [3D Game build](https://gitlab.com/asylum-space/asylum-ui/-/tree/main/packages/connection-library/data/dark-forest), [Testing guide](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/docs/testing-guide-patterns.md#case-3-interoperable-items-and-drop) | Implemented in-game Items drop logic with on-chain minting. We used scripted in-game actions (e.g. open a chest, defeat an NPC), which triggers the on-chain minting of Item and handles its result |
| 3.     | In-game items association | - | This deliverable is related to the Creators Studio web app |
| 3.1    | In-game items association | [Create blueprint from pattern](https://gitlab.com/asylum-space/asylum-ui/-/commit/736f86fb4036afd464cb3ab139cfb626f318df78), [Testing guide](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/docs/testing-guide-patterns.md#case-1-creating-a-blueprint-from-a-pattern) | Implemented the ability to create Blueprint with specific Interpretations required by Game Client to associate it with in-game item |
| 3.2    | In-game items association | [Adapt blueprint to pattern](https://gitlab.com/asylum-space/asylum-ui/-/commit/736f86fb4036afd464cb3ab139cfb626f318df78), [Testing guide](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/docs/testing-guide-patterns.md#case-2-adapt-blueprint-to-pattern) | Implemented the ability to adapt existing Blueprint and add missing Interpretations, required by Game Client to associate it with in-game item |
| 3.3    | In-game items association | [3D model viewer](https://gitlab.com/asylum-space/asylum-ui/-/commit/28807b7727461ce004ddb7ba30634bf1c1535c20) | Implemented a 3D model viewer to check uploaded 3D Interpretations |
| 4.     | Renamings | [Asylum Node](https://gitlab.com/asylum-space/asylum-item-nft/-/commit/3fde1677386e1f84aa11c438d14f0adf297b55d4), [Asylum UI](https://gitlab.com/asylum-space/asylum-ui/-/commit/cd2eb4cf55232402706541e4e25be6b48df1a93a), [Asylum Unity SDK](https://gitlab.com/asylum-space/asylum-unity-sdk/-/commit/093b6872d59e7ddbce8ee5ec686e602475ed2a58) | According to the latest comments and product design discussions, we made the following renamings: Template -> Blueprint, Game -> Space, Game Developers Console -> Creators Studio |
