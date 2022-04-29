# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/pull/778
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License Apache 2.0 | [x] | https://github.com/Nick-1979/polkadot-Js-Plus-extension/blob/master/packages/extension-plus/LICENSE | |
| 0b. | Documentation | [x] | https://github.com/Nick-1979/polkadot-Js-Plus-extension/wiki/How-To's | Excellent, thank you! |
| 0c. | Testing Guide	| [x] | https://github.com/Nick-1979/polkadot-Js-Plus-extension/wiki/Installation |  Unit tests and testing on westend blockchain are available |
| 0d. | Article	| [x] | https://medium.com/@ekbatanifard/polkadot-js-plus-extension-123ef8ebcd59 |  Includes introduction, motivation, howTos, installation|
| 1. | Referendums and Proposals | [x] | https://github.com/Nick-1979/polkadot-Js-Plus-extension/tree/master/packages/extension-plus/src/Popup/Governance/Democracy | To view and vote for referendums and second proposals | 
| 2.  | Council and Motions | [x] | https://github.com/Nick-1979/polkadot-Js-Plus-extension/tree/master/packages/extension-plus/src/Popup/Governance/Council | To view council information, vote/unvote them, also to view active motions | 
| 3.  | Treasury and Tips | [x] | https://github.com/Nick-1979/polkadot-Js-Plus-extension/tree/master/packages/extension-plus/src/Popup/Governance/Treasury | To view/submit treasury proposals and tips | 



# Additional Notes

I got all 19 test suites to pass locally by running:

```
git clone git@github.com:Nick-1979/polkadot-Js-Plus-extension.git
cd polkadot-Js-Plus-extension // master branch
yarn install
yarn build
yarn test:plus
```

I downloaded Mozilla and installed Plus from the [Firefox Add-Ons extension link](https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-plus-extension/).