# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadotjs_no_code.md 
- **Milestone:** 2
- **Kusama Identity:** HNdC4zNpYVUHJYT9Du9p9Haad5xkXvcyte9vmfUQvHAf8dC
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/polkadotjs-nocode-plugin_1_cruikshankss.md

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | yes | [MIT license](https://github.com/ezcodeco/Bubble-Plugin-Polkadot.js/blob/main/LICENSE) | 
| 0b. | Demo pages | yes | [Polkadot.js plugin: All demo pages](https://polkadotjs.bubbleapps.io/version-test/) | 
| 0c. | Documentation | yes | [EzCode Plugin Docs](https://polkadotjs.docs.ezcodeplugins.com/) | 
| 0d. | Testing Guide | yes | ["Testing Plugin Features" Bubble Beginner Tutorial](https://ezcodeco.gitbook.io/polkadot-testing-guide/) |
| 0e. | Forum post |  | [New post about added features with all necessary links](https://forum.bubble.io/t/free-plugin-polkadot-wallet-by-ezcode/187940/2) | 


## General Notes
> Summarizes the overall performance plus additional feedback/comments

> I reference the Milestone Delivery Guidelines rather often, the "guidelines". I number my notes based on the order of guidelines.

Note: Links in the above table do not include commit hashes. This could make sense in a no-code context. It's only my second evaluation, I don't know.

## 1. Name of the grant project: Polkadot{.js} NoCode Plugin by EzCode

## 2. Link to the open-source code/delivery 
#### How to run their code:

- live source-code directly in the plugin editor: https://bubble.io/plugin_editor?id=1639402639641x977692461648052200&tab=tabs-4

- their github with code back-ups: https://github.com/ezcodeco/Bubble-Plugin-Polkadot.js

## 3. License
Their code is MIT-licensed.

## 4. Documentation 
They've added an excellent [new tutorial documentation page](https://ezcodeco.gitbook.io/polkadot-testing-guide/testing-plugin-features). More notes in section 7 (testing guide).

FYI, I provided many notes on their documentation in [my eval for their Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/polkadotjs-nocode-plugin_1_cruikshankss.md). 

I left them a note making suggestions on a very simple tech stack documnation listing/linking to the APIs they use.

## 5. Formatted Code
Their .js code is separated by function/action [on their Bubble demo app](https://bubble.io/page?type=page&name=polkadot_api&id=polkadotjs&tab=tabs-1).

They have one plugin & now four demo pages showing different features. 

One of the demo pages uses the Polkadot{.js} "API" repository as its API, but I'm not sure which other APIs they use for specifically keyring and the wallet demo. I've asked them but I also plan to look through their code for them.

In the app, the plugin element is formatted with a few sub-components as you can see in some of their [new tutorial](https://ezcodeco.gitbook.io/polkadot-testing-guide/testing-plugin-features).

## 6. Testing Guide

They provided a new tutorial doc page for beginners and it was excellent, with text, embedded video, gifs, and screenshots with diagrams. It was really clear. I built an app on Bubble with it.  

Here's their tutorial/my result:

<img width="400" alt="Screen Shot 2022-02-18 at 11 16 51 AM" src="https://user-images.githubusercontent.com/22508682/154767006-69e13ea0-7694-431f-a480-60974db1853b.png">

I verified the block number and amount held in a wallet on https://polkadot.js.org/apps/#/explorer. 

## 7. Milestone Deliverables (see table above) 

## Conclusion
It seems they've built a great plugin & tutorial documentation for Bubble beginners to understand and rebuild their demo app. Legally, I want to see documentation of a simple, brief list of links of the APIs they use for a Bill of Technology. It makes testing easier and it provides a minimum software architecture tech stack to increase maintainability, versioning, etc. Here's my comment where I started a [Tech Stack](https://github.com/w3f/Grant-Milestone-Delivery/pull/363#issuecomment-1045480263) for them.
