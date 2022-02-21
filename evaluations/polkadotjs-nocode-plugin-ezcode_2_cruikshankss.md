# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadotjs_no_code.md 
- **Milestone:** 2
- **Kusama Identity:** HNdC4zNpYVUHJYT9Du9p9Haad5xkXvcyte9vmfUQvHAf8dC
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/polkadotjs-nocode-plugin_1_cruikshankss.md

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | yes | https://github.com/ezcodeco/Bubble-Plugin-Polkadot.js/blob/main/LICENSE | MIT
| 0b. | Demo pages | yes | [All demo pages](https://polkadotjs.bubbleapps.io/version-test/) | Well done!!
| 0c. | Documentation | yes | [EzCode's Polkadot{.js} NodeCode Plugin Docs](https://polkadotjs.docs.ezcodeplugins.com/) | High-quality website with extensive docs.
| 0d. | Testing Guide | yes | [Bubble Beginner Tutorials](https://ezcodeco.gitbook.io/polkadot-testing-guide/) | Accessible for beginners. Thank you so much!
| 0e. | Forum post | yes | [New post about added features with all necessary links](https://forum.bubble.io/t/free-plugin-polkadot-wallet-by-ezcode/187940/2) | Simple & clear. Explains the features of each of the two new plugin elements, "Polkadot API" and "Polkadot Keyring". 
| 1. | API | yes | [New "Polkadot API" Plugin Element](https://bubble.io/plugin_editor?id=1639402639641x977692461648052200&tab=tabs-4)  | Uses `@polkadot/api` & `@polkadot/util` in [this part of the demo](https://polkadotjs.bubbleapps.io/version-test/polkadot_api). | 
| 2. | Keyring | yes | [New "Polkadot Keyring" Plugin Element](https://bubble.io/plugin_editor?id=1639402639641x977692461648052200&tab=tabs-4) | Uses `@polkadot/keyring`, `@polkadot/util-crypto` & `@polkadot/util` in [this part of the demo](https://polkadotjs.bubbleapps.io/version-test/keyring). | 
| 3. | Deploy v.2.0 | yes | [their v.2. plugin in the Marketplace](https://bubble.io/plugin/polkadotjs-1639402639641x977692461648052200) and their [GitHub](https://github.com/ezcodeco/Bubble-Plugin-Polkadot.js) | Their [Bubble.io plugin demo-app editor](https://bubble.io/plugin_editor?id=1639402639641x977692461648052200&tab=tabs-4) has their live code and [GitHub](https://github.com/ezcodeco/Bubble-Plugin-Polkadot.js) is the backup. |

## General Notes
> Summarizes the overall performance plus additional feedback/comments

> I reference the Milestone Delivery Guidelines rather often, the "guidelines". I number my notes based on the order of guidelines.

Note: Links in the above table do not include commit hashes. This could make sense in a no-code context. It's only my second evaluation, I don't know.

## 1. Name of the grant project

Polkadot{.js} NoCode Plugin 
by EzCode

## 2. Link to the open-source code/delivery 
> How to run their code.

- View live source-code directly in the Bubble.io plugin demo-app editor: https://bubble.io/plugin_editor?id=1639402639641x977692461648052200&tab=tabs-4

- P.S. Their GitHub has their code back-ups: https://github.com/ezcodeco/Bubble-Plugin-Polkadot.js

## 3. License
Their code is MIT-licensed.

## 4. Documentation 
Separately from that documentation, they've added excellent [new gitbook docs for absolute beginners](https://ezcodeco.gitbook.io/polkadot-testing-guide/testing-plugin-features) which I discuss more in the `6. Testing Guide` section of this evaluation.

I left them a note making suggestions on a very simple tech stack documnation listing/linking to the APIs they use.

They responded with this beautiful (seriously, take a quick look!) & clear new [tech stack documentation](https://polkadotjs.docs.ezcodeplugins.com/technology-stack) of their dependencies): 

```json
"dependencies": {
    "@polkadot/api": "^7.8.1",
    "@polkadot/extension-dapp": "^0.42.7",
    "@polkadot/keyring": "^8.4.1",
    "@polkadot/util": "^8.4.1",
    "@polkadot/util-crypto": "^8.4.1"
  }
```

FYI, I provided more notes on their documentation in [my eval for their Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/polkadotjs-nocode-plugin_1_cruikshankss.md). 

## 5. Formatted Code

I reviewed their live app and live plugin editor as well as reviewing a bit of code in the live plugin editor.

Their `.js` code for their plugin is separated by function/action on their [live source-code directly in the Bubble.io plugin demo-app editor](https://bubble.io/page?type=page&name=polkadot_api&id=polkadotjs&tab=tabs-1).

They have one Polkadot{.js} plugin available in the Bubble.io no-code web app (external plugins section). The Polkadot{.js} NoCode Plugin has multiple elements in it, with the number growing as they add features. The currently have [four demo pages](https://polkadotjs.bubbleapps.io/version-test/) showing different features live and functional on a web app. 

Their new [tech stack documentation](https://polkadotjs.docs.ezcodeplugins.com/technology-stack) shows which dependencies are demo-ed on each demo page:  

<img width="400" alt="shows which dependencies are demo-d on each demo page" src="https://user-images.githubusercontent.com/22508682/155034036-1c04e774-ddbc-48a3-9a61-be226aa0937d.png">

## 6. Testing Guide

They provided a [new tutorial doc page for beginners](https://ezcodeco.gitbook.io/polkadot-testing-guide/testing-plugin-features) and it was excellent, with text, embedded video, gifs, and screenshots with diagrams. It was really clear. I built an app on Bubble with it.  

Here's their tutorial/my result:

<img width="400" alt="Screen Shot 2022-02-18 at 11 16 51 AM" src="https://user-images.githubusercontent.com/22508682/154767006-69e13ea0-7694-431f-a480-60974db1853b.png">

I verified the block number and amount held in a wallet on https://polkadot.js.org/apps/#/explorer. 

I tested their live app more in my [Milestone 1 Evaluation](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/polkadotjs-nocode-plugin_1_cruikshankss.md). 

I did not read through all of their code, neither did I perform any unit tests on their code.

## 7. Milestone Deliverables (see table above) 

## Conclusion
Thank you EzCode for adding your plugin to the Polka eco! We're thankful to have a new way to create a Polkadot dApp! It seems you've built a great plugin and a great docs website. I've been so happy to build/test in the Bubble eco. Thanks for providing beginner docs to recreate a sufficient amount of your extensive EzCode demo app! I would love to see your gitbook tutorials for Bubble beginners added to your main website, because they are excellent! Thanks again and good luck on the road ahead!
