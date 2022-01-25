# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadotjs_no_code.md 
- **Milestone:** 1
- **Kusama Identity:** HNdC4zNpYVUHJYT9Du9p9Haad5xkXvcyte9vmfUQvHAf8dC
- **Previously successfully merged evaluation:** none yet

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | yes | [MIT license](https://github.com/ezcodeco/Bubble-Plugin-Polkadot.js/blob/main/LICENSE) | Please add the link to your next Milestone.
| 0b. | Demo pages | yes | [Polkadot.js plugin: All demo pages](https://polkadotjs.bubbleapps.io/version-test/) | Successfully tested all actions except "Send Transaction" because I do not have token, sorry about that.
| 0c. | Documentation | yes | [EzCode Plugin Docs](https://polkadotjs.docs.ezcodeplugins.com/) | Sufficient :)
| 0d. | Testing Guide | yes | [Polkadot.js plugin: All demo pages](https://polkadotjs.bubbleapps.io/version-test/) | I was able to test functionality of their already-made demo app, but not able to create my own app to test.
| 0e. | Forum post | yes | [Forum Post](https://forum.bubble.io/t/free-plugin-polkadot-js-by-ezcode/187940) | Due to lack of this, I was not easily able to perform in-depth testing. Details in "Testing Guide" notes below. **Updated by [David](https://github.com/Noc2)**
| 1. | Extension | yes | Code: [Bubble.io Elements Tab](https://bubble.io/plugin_editor?id=1639402639641x977692461648052200&tab=tabs-4) > Plugin Elements > Polkadot Wallet <br><br> Demo: [Polkadot.js plugin: All demo pages](https://polkadotjs.bubbleapps.io/version-test/) > Wallet Demo | The EzCode team has successfully connected to the Polkadot{.js} Browser Wallet Extension API functionality in Bubble.io with their Polkadot NoCode Plugin "Polkadot Wallet" plugin element.  
| 2. | Utilities | yes | Code: [Bubble.io Elements Tab](https://bubble.io/plugin_editor?id=1639402639641x977692461648052200&tab=tabs-4) > Plugin Elements > Polkadot Utils <br><br> Demo: [Polkadot.js plugin: All demo pages](https://polkadotjs.bubbleapps.io/version-test/) > Utils Demo | The EzCode team has successfully connected to the Polkadot{.js} Utilities/utils API functionality in Bubble.io with their Polkadot NoCode Plugin "Polkadot Utils" plugin element.
| 3. | Deploy v.1.0 | yes | Marketplace: https://bubble.io/plugin/polkadotjs-1639402639641x977692461648052200 <br><br> GitHub: https://github.com/ezcodeco/Bubble-Plugin-Polkadot.js | The EzCode team has published their plugin for free on the free Bubble.io NoCode platform. <br><br> They have published a backup of their code on GitHub, but please refer to [Bubble.io Elements Tab](https://bubble.io/plugin_editor?id=1639402639641x977692461648052200&tab=tabs-4) for the live code. 

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.



## General Notes

Note: Links in the above table do not include commit hashes. I do not know if that makes sense in this NoCode context. Sorry about that if I could've done better.

This is my first evaluation and therefore I reference the [Milestone Delivery Guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md#formatted-code) rather often, which I henceforce call "the guidelines". I number my notes based on the order of guidelines..

#### 1. Submission

Thank you for submitting your milestone via PR to the proper repository.


#### 2. Invoice

Thank you for filling out the invoice form.


#### 3. Content

Thank you for including the project name, link to code/delivery, documentation, formatted code, testing guide, and a list of the milestone deliverables. **Missing: link to your [MIT license](https://github.com/ezcodeco/Bubble-Plugin-Polkadot.js/blob/main/LICENSE), which I found on your GH repo.**


#### 4. License 

Their code is MIT-licensed.


#### 5. Documentation 

The EzCode team provided good documentation, and where it was insufficient, they promptly answered questions, especially in the [Grant Proposal Conversation](https://github.com/w3f/Grants-Program/pull/745) and [Milestone 1 Conversation](https://github.com/w3f/Grant-Milestone-Delivery/pull/343). Their documentation was a bit spread out and confusing for me as someone extremely new to the Polkadot eco & Bubble, but that may reflect my lack of understanding rather than any failure on their part. Here I attempt to gather the different sources of info. Their [Grant Proposal](https://github.com/w3f/Grants-Program/blob/master/applications/polkadotjs_no_code.md#w3f-grant-proposal) was very helpful in orienting myself as to how the plugin fits into the Polkadot ecosystem since their [Milestone 1 Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/343/files#diff-fe563e8d2d59cd45d7a3f6e6b62bb6959c2c2a3dfe540d7c462bed898ef3285f) was a bit sparse in documentation, but there were notes on each deliverable.
 
In the guidelines, we request documentation on API calls, an architecture overview, and individual component details, algorithms and protocols that are core to your project, etc., being careful to note “Only focus on your own contributions. Do not write detailed explanations of already existing components, e.g. IPFS.” I would love to know more about your plugin regarding these points, although do appreciate your documentation thus far. I hope my notes & the above table serve to help organize your docs & help you write the forum post. I wish you so much success in your journey!!

I have quite a sentimental feeling towards the NoCode community and love to teach new web developers. I thank you greatly for building tools for them. I look forward to your forum post and may I suggest perhaps FAQ section for your docs? You’ve already diligently answered so many questions for us and have so much documentation in different places. I’m excited to see you bring it all together to better onboard absolute beginners to web development, Bubble, and the Polkadot ecosystem. I have many thoughts on how to orient absolute beginners to your plugin and would be happy to show rather than tell if you'd like some examples of documentation, please let me know and I'd be happy to write some up. 

#### 6. Formatted Code

The code is formatted. I appreciate being able to see each action/function’s code in the Bubble editor. Thanks for the backup on GitHub, which I did not review yet since there is no Forum Post, Unit Testing, or Integration Testing. In the Bubble editor, when they initialize elements, they create these pieces of data to connect to Polkadot & Westend:

```js
    const mainRPC = 'wss://rpc.polkadot.io';
    const westendRPC = 'wss://westend-rpc.polkadot.io';
```

#### 7. Testing Guide 

Your live demo app was easy to use and I was able to easily test the functionality of the Wallet and Utils elements/actions. I did not test sending a transaction because I do not have any token, sorry about that. But I was able to test the other actions. Thank you very much for that demo. May I recommend you specify blake2-256, keccak-256, and xxhash (??) to be more explicit about which hash algos you use? By the way, I did notice on the Hash Data page, the title accidentally says “Validate Address” instead of “Hash Data”. Otherwise, the demo app looked great!

I do feel obligated to mention however, in your Grant Proposal, you indicated you would include a Forum Post as part of Milestone 1 delivery. But this was not delivered, and in the [Milestone 1 delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/343/files#diff-fe563e8d2d59cd45d7a3f6e6b62bb6959c2c2a3dfe540d7c462bed898ef3285f) indicated contrary to your Grant Proposal: “Will post once this milestone will be approved”. I understand this, but I do think without the Forum Post it was more difficult for me personally to test. I would have really enjoyed a step-by-step tutorial on how to test each action of the Wallet and Utilities elements so I could confirm a Bubble user could successfully build using your guidance. Therefore, I did not test that I am able to replicate plugin installation, element creation and action creation. For my testing, I only tested your live demo app, which does demonstrate functionality, and I looked through the Bubble Workflows for each page. However, I do trust that you’ve successfully implemented the plugin given your verified experience with web3 plugins in the Bubble ecosystem and my rudimentary testing.  

I saw in previous conversations you are considering a Selenium testing suite and may I suggest you may also be able to provide unit tests on your GitHub repo for each element action.

#### 8. Milestone Deliverables (see table above)

## Conclusion

I am unsure whether to approve this milestone or not. In the Testing Guide section (point 7), I detail my surface-level testing process of the live demo app and the lack of a promised Forum Post to more deeply test the functionality via recreation in the Bubble app. 
