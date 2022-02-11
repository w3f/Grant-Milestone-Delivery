# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadotjs_no_code.md
- **Milestone:** 2
- **Kusama Identity:** Ha27MB4gKH36ieRPa1T1ASqhUz4sVxMoVmK7o5CS6tXDqjW
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/crossbow_1_jkl.md , https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/lippayments_1_jkl.md

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License|<ul><li>[ X ] </li></ul>|https://github.com/ezcodeco/Bubble-Plugin-Polkadot.js/blob/main/LICENSE| Could you also add the license  to the plugin description?|
| 0b. | Demo pages|<ul><li>[ X ] </li></ul>|https://polkadotjs.bubbleapps.io/version-test/| Good job! |
| 0c. | Documentation|<ul><li>[ X ] </li></ul>|https://polkadotjs.docs.ezcodeplugins.com/installation| Satisfactory|
| 0d. | Testing Guide |<ul><li>[ X ] </li></ul>|https://ezcodeco.gitbook.io/polkadot-testing-guide/| It seems that the way to test is to install your plugins. For a better way to test see point 2 in the Constructive Feedback section bellow.|
| 0e. | Forum post |<ul><li>[ X ] </li></ul>|https://forum.bubble.io/t/free-plugin-polkadot-js-by-ezcode/187940| Oops! That page doesn’t exist or is private. You have included the wrong link in your evaluation document. Please correct it. |
| 1. | API |<ul><li>[ X ] </li></ul>|https://bubble.io/plugin_editor?id=1639402639641x977692461648052200&tab=tabs-4| I see that you can connect to wss://westend-rpc.polkadot.io. Good job. How hard it is to extend the API, for example to query extrinsics? |
| 3. | Keyring | <ul><li>[ X ] </li></ul>|https://bubble.io/plugin_editor?id=1639402639641x977692461648052200&tab=tabs-4| |
| 4. | Deploy v.2.0 |<ul><li>[ X ] </li></ul>|https://bubble.io/plugin/polkadotjs-1639402639641x977692461648052200| |



## General Notes

I see that initially you have committed to providing interface for interacting with substrate contracts.
From architecture perspective, you can interact with the contracts in a similar way as your API, Keyring implementation. For more information on how to integrate them, check out this documentation: 
https://polkadot.js.org/docs/api-contract
https://polkadot.js.org/docs/api-contract/start/install
https://polkadot.js.org/docs/api-contract/start/basics
https://polkadot.js.org/docs/api-contract/start/code

### Constructive Feedback:
1. I like the demo application. If you want to further improve it, you can try implementing a reference front-end application something in the style of https://github.com/facebook/create-react-app or https://github.com/substrate-developer-hub/substrate-front-end-template which would allow users in the bubble ecosystem to easily start building on top of your features. 
2. Your testing can be automated. Please check Cypress.io or similar frameworks for automation of your testing. 
3. Maybe a small improvement for the keyring in the future... You can add User Management module and show how users can easily manage their keys. The demo is currently too technical for average users.
