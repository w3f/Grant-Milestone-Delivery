# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/NeuroZK.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Specification | Notes |
| -----: | ----------- | ------------- | ------------- | ------------- |
| **0a.** | [License](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/LICENSE) | <ul><li>[x] </li></ul> | GPLv3 |
| **0b.** | [Documentation](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/Local%20Testing%20NeuroZK_Milestone2.md) | <ul><li>[x] </li></ul> | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how users can launch a cyborg worker node using their local local machine|
| **0c.** | [Testing and Testing Guide](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/Local%20Testing%20NeuroZK_Milestone2.md) | <ul><li>[x] </li></ul> | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | [Docker](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/Dockerfile) | <ul><li>[x] </li></ul> | We will provide a Dockerfile(s) that can be used to run a cyborg worker node locally. |
| 1. | [Working Demo](https://drive.google.com/file/d/1CH4jOeUVysjtjtjeJ0kl8g_2Wa3zHAjx/view) | <ul><li>[x] </li></ul> | We will provide video documentation to help developers understand the process of connecting and managing a cyborg worker node.|
| 2. | [Substrate Module: Payments](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/pallets/payment/README.md) | <ul><li>[x] </li></ul> | This pallet will be responsible for estimating the costs for executing a task based on server specifications and time. |
| 3. | [Pallet Feature: Inventory](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/pallets/edge-connect/README.md) | <ul><li>[x] </li></ul> | This feature will be responsible for uniquely mapping each worker node uniquely in the onchain inventory to keep track of server status in the edge connect pallet. |
| 4. | [Substrate Node implementation: Cyborg Worker](https://github.com/Cyborg-Network/Cyborg-worker-node) | <ul><li>[x] </li></ul> | A custom node implementation to contribute compute power to the cyborg parachain and earn rewards for contributions|
| 5. | [Cyborg Connect: Provide Compute (Feature)](https://github.com/Cyborg-Network/cyborg-connect)  | <ul><li>[x] </li></ul> | The UI implementation to support deployment and management of Cyborg worker nodes|

# General Notes
